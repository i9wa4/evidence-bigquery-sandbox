-- Cohort retention analysis with cumulative LTV
-- Cohort is defined by the month of a user's first completed order.
-- For each cohort we track:
-- - How many users returned in months 0-12 (retention)
-- - How much revenue those users generated per cohort member (LTV curve)
with
    -- Step 1: Assign each user to their cohort (first-order month)
    user_cohorts as (
        select user_id, date_trunc(date(min(created_at)), month) as cohort_month
        from `bigquery-public-data.thelook_ecommerce.orders`
        where
            status not in ('Cancelled', 'Returned')
            and created_at >= timestamp('2022-01-01')
        group by user_id
    ),

    -- Step 2: Cohort sizes (total unique users per cohort)
    cohort_sizes as (
        select cohort_month, count(distinct user_id) as cohort_size
        from user_cohorts
        group by cohort_month
    ),

    -- Step 3: Monthly revenue per user (only completed items)
    user_monthly_revenue as (
        select
            o.user_id,
            date_trunc(date(o.created_at), month) as active_month,
            sum(oi.sale_price) as monthly_revenue
        from `bigquery-public-data.thelook_ecommerce.orders` o
        join
            `bigquery-public-data.thelook_ecommerce.order_items` oi
            on o.order_id = oi.order_id
        where
            o.status not in ('Cancelled', 'Returned')
            and oi.status not in ('Cancelled', 'Returned')
        group by o.user_id, active_month
    ),

    -- Step 4: Join cohorts with activity to compute period-level metrics
    cohort_activity as (
        select
            uc.cohort_month,
            date_diff(umr.active_month, uc.cohort_month, month) as period_number,
            count(distinct uc.user_id) as retained_users,
            sum(umr.monthly_revenue) as period_revenue
        from user_cohorts uc
        join
            user_monthly_revenue umr
            on uc.user_id = umr.user_id
            and umr.active_month >= uc.cohort_month
            and date_diff(umr.active_month, uc.cohort_month, month) <= 12
        group by uc.cohort_month, period_number
    )

select
    format_date('%Y-%m', ca.cohort_month) as cohort_month,
    ca.period_number,
    ca.retained_users,
    cs.cohort_size,
    round(safe_divide(ca.retained_users, cs.cohort_size) * 100, 1) as retention_rate,
    round(safe_divide(ca.period_revenue, cs.cohort_size), 2) as revenue_per_cohort_user
from cohort_activity ca
join cohort_sizes cs on ca.cohort_month = cs.cohort_month
where cs.cohort_size >= 50
order by ca.cohort_month, ca.period_number
