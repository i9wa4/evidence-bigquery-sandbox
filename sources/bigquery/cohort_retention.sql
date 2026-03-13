-- Cohort retention analysis with cumulative LTV
-- Cohort is defined by the month of a user's first completed order.
-- For each cohort we track:
--   - How many users returned in months 0-12 (retention)
--   - How much revenue those users generated per cohort member (LTV curve)

WITH
  -- Step 1: Assign each user to their cohort (first-order month)
  user_cohorts AS (
    SELECT
      user_id,
      DATE_TRUNC(DATE(MIN(created_at)), MONTH) AS cohort_month
    FROM `bigquery-public-data.thelook_ecommerce.orders`
    WHERE
      status NOT IN ('Cancelled', 'Returned')
      AND created_at >= TIMESTAMP('2022-01-01')
    GROUP BY user_id
  ),

  -- Step 2: Cohort sizes (total unique users per cohort)
  cohort_sizes AS (
    SELECT
      cohort_month,
      COUNT(DISTINCT user_id) AS cohort_size
    FROM user_cohorts
    GROUP BY cohort_month
  ),

  -- Step 3: Monthly revenue per user (only completed items)
  user_monthly_revenue AS (
    SELECT
      o.user_id,
      DATE_TRUNC(DATE(o.created_at), MONTH) AS active_month,
      SUM(oi.sale_price) AS monthly_revenue
    FROM `bigquery-public-data.thelook_ecommerce.orders` o
    JOIN `bigquery-public-data.thelook_ecommerce.order_items` oi
      ON o.order_id = oi.order_id
    WHERE
      o.status NOT IN ('Cancelled', 'Returned')
      AND oi.status NOT IN ('Cancelled', 'Returned')
    GROUP BY o.user_id, active_month
  ),

  -- Step 4: Join cohorts with activity to compute period-level metrics
  cohort_activity AS (
    SELECT
      uc.cohort_month,
      DATE_DIFF(umr.active_month, uc.cohort_month, MONTH) AS period_number,
      COUNT(DISTINCT uc.user_id) AS retained_users,
      SUM(umr.monthly_revenue) AS period_revenue
    FROM user_cohorts uc
    JOIN user_monthly_revenue umr
      ON uc.user_id = umr.user_id
      AND umr.active_month >= uc.cohort_month
      AND DATE_DIFF(umr.active_month, uc.cohort_month, MONTH) <= 12
    GROUP BY
      uc.cohort_month,
      period_number
  )

SELECT
  FORMAT_DATE('%Y-%m', ca.cohort_month) AS cohort_month,
  ca.period_number,
  ca.retained_users,
  cs.cohort_size,
  ROUND(SAFE_DIVIDE(ca.retained_users, cs.cohort_size) * 100, 1) AS retention_rate,
  ROUND(SAFE_DIVIDE(ca.period_revenue, cs.cohort_size), 2) AS revenue_per_cohort_user
FROM cohort_activity ca
JOIN cohort_sizes cs
  ON ca.cohort_month = cs.cohort_month
WHERE cs.cohort_size >= 50
ORDER BY
  ca.cohort_month,
  ca.period_number
