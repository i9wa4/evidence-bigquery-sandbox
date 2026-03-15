select id, order_id, user_id, product_id, status, sale_price, created_at
from `bigquery-public-data.thelook_ecommerce.order_items`
where created_at >= timestamp(date_sub(current_date(), interval 13 month))
