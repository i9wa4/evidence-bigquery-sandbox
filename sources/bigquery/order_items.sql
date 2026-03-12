SELECT
  id,
  order_id,
  user_id,
  product_id,
  status,
  sale_price,
  created_at
FROM `bigquery-public-data.thelook_ecommerce.order_items`
WHERE created_at >= TIMESTAMP(DATE_SUB(CURRENT_DATE(), INTERVAL 13 MONTH))
