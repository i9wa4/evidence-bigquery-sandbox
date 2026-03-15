-- Customer Lifetime Value (LTV) and RFM segmentation
-- Computes per-customer metrics and scores each customer on:
-- R (Recency)   – how recently they purchased (lower days = better)
-- F (Frequency) – how often they purchase
-- M (Monetary)  – how much they spend in total
-- NTILE(5) partitions customers into equal quintiles (1 = bottom, 5 = top).
-- Recency score is inverted so that a recent purchase scores high.
with
    -- Aggregate order-level metrics per customer
    customer_metrics as (
        select
            o.user_id,
            count(distinct o.order_id) as order_count,
            round(sum(oi.sale_price), 2) as total_revenue,
            date_diff(current_date(), date(max(o.created_at)), day) as recency_days,
            round(sum(oi.sale_price) / count(distinct o.order_id), 2) as avg_order_value
        from `bigquery-public-data.thelook_ecommerce.orders` o
        join
            `bigquery-public-data.thelook_ecommerce.order_items` oi
            on o.order_id = oi.order_id
        where
            o.status not in ('Cancelled', 'Returned')
            and oi.status not in ('Cancelled', 'Returned')
            and o.created_at >= timestamp('2022-01-01')
        group by o.user_id
    ),

    -- Compute RFM quintile scores with NTILE window functions
    rfm_scored as (
        select
            *,
            -- Recency: recent purchasers score highest.
            -- NTILE(5) ASC assigns 1 to the lowest recency_days (most recent).
            -- (6 - x) inverts the quintile so recent→5, lapsed→1. Range: 1-5.
            6 - ntile(5) over (order by recency_days asc) as r_score,
            -- Frequency and Monetary: higher values map to higher quintiles (1-5).
            ntile(5) over (order by order_count asc) as f_score,
            ntile(5) over (order by total_revenue asc) as m_score
        from customer_metrics
    )

select
    user_id,
    order_count,
    total_revenue,
    recency_days,
    avg_order_value,
    r_score,
    f_score,
    m_score,
    round((r_score + f_score + m_score) / 3.0, 1) as rfm_score,
    case
        when r_score >= 4 and f_score >= 4 and m_score >= 4
        then 'Champions'
        when r_score >= 3 and f_score >= 3 and m_score >= 3
        then 'Loyal Customers'
        when r_score >= 4 and f_score <= 2
        then 'New Customers'
        when r_score >= 3 and f_score <= 2 and m_score >= 3
        then 'Potential Loyalists'
        when r_score <= 2 and f_score >= 3 and m_score >= 3
        then 'At Risk'
        when r_score <= 2 and f_score >= 4
        then 'Cannot Lose Them'
        when r_score <= 1 and f_score <= 1
        then 'Lost'
        else 'Needs Attention'
    end as customer_segment
from rfm_scored
order by total_revenue desc
