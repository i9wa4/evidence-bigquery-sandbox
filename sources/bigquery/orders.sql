SELECT
  order_id,
  user_id,
  status,
  num_of_item,
  created_at
FROM `bigquery-public-data.thelook_ecommerce.orders`
WHERE created_at >= TIMESTAMP(DATE_SUB(CURRENT_DATE(), INTERVAL 13 MONTH))
