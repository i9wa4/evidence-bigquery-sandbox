select order_id, user_id, status, num_of_item, created_at
from `bigquery-public-data.thelook_ecommerce.orders`
where created_at >= timestamp(date_sub(current_date(), interval 13 month))
