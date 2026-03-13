SELECT
  id,
  email,
  country,
  age,
  gender,
  latitude,
  longitude
FROM `bigquery-public-data.thelook_ecommerce.users`
LIMIT 50000
