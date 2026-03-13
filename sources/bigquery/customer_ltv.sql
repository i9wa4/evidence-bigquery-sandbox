-- Customer Lifetime Value (LTV) and RFM segmentation
-- Computes per-customer metrics and scores each customer on:
--   R (Recency)   – how recently they purchased (lower days = better)
--   F (Frequency) – how often they purchase
--   M (Monetary)  – how much they spend in total
-- NTILE(5) partitions customers into equal quintiles (1 = bottom, 5 = top).
-- Recency score is inverted so that a recent purchase scores high.

WITH
  -- Aggregate order-level metrics per customer
  customer_metrics AS (
    SELECT
      o.user_id,
      COUNT(DISTINCT o.order_id) AS order_count,
      ROUND(SUM(oi.sale_price), 2) AS total_revenue,
      DATE_DIFF(CURRENT_DATE(), DATE(MAX(o.created_at)), DAY) AS recency_days,
      ROUND(SUM(oi.sale_price) / COUNT(DISTINCT o.order_id), 2) AS avg_order_value
    FROM `bigquery-public-data.thelook_ecommerce.orders` o
    JOIN `bigquery-public-data.thelook_ecommerce.order_items` oi
      ON o.order_id = oi.order_id
    WHERE
      o.status NOT IN ('Cancelled', 'Returned')
      AND oi.status NOT IN ('Cancelled', 'Returned')
      AND o.created_at >= TIMESTAMP('2022-01-01')
    GROUP BY o.user_id
  ),

  -- Compute RFM quintile scores with NTILE window functions
  rfm_scored AS (
    SELECT
      *,
      -- Recency: recent purchasers score highest.
      -- NTILE(5) ASC assigns 1 to the lowest recency_days (most recent).
      -- (6 - x) inverts the quintile so recent→5, lapsed→1. Range: 1-5.
      6 - NTILE(5) OVER (ORDER BY recency_days ASC) AS r_score,
      -- Frequency and Monetary: higher values map to higher quintiles (1-5).
      NTILE(5) OVER (ORDER BY order_count ASC) AS f_score,
      NTILE(5) OVER (ORDER BY total_revenue ASC) AS m_score
    FROM customer_metrics
  )

SELECT
  user_id,
  order_count,
  total_revenue,
  recency_days,
  avg_order_value,
  r_score,
  f_score,
  m_score,
  ROUND((r_score + f_score + m_score) / 3.0, 1) AS rfm_score,
  CASE
    WHEN r_score >= 4 AND f_score >= 4 AND m_score >= 4 THEN 'Champions'
    WHEN r_score >= 3 AND f_score >= 3 AND m_score >= 3 THEN 'Loyal Customers'
    WHEN r_score >= 4 AND f_score <= 2 THEN 'New Customers'
    WHEN r_score >= 3 AND f_score <= 2 AND m_score >= 3 THEN 'Potential Loyalists'
    WHEN r_score <= 2 AND f_score >= 3 AND m_score >= 3 THEN 'At Risk'
    WHEN r_score <= 2 AND f_score >= 4 THEN 'Cannot Lose Them'
    WHEN r_score <= 1 AND f_score <= 1 THEN 'Lost'
    ELSE 'Needs Attention'
  END AS customer_segment
FROM rfm_scored
ORDER BY total_revenue DESC
