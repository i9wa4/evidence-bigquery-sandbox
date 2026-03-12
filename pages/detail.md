# Order & Customer Detail

```sql order_status
SELECT
  status,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
GROUP BY status
ORDER BY orders DESC
```

## Order Status Breakdown

<BarChart data={order_status} x="status" y="orders" title="Orders by Status" />

<DataTable data={order_status} />

## Top Customers by Revenue

```sql top_customers
SELECT
  u.id AS user_id,
  u.email,
  u.country,
  COUNT(oi.order_id) AS total_orders,
  ROUND(SUM(oi.sale_price), 2) AS total_spent
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.id, u.email, u.country
ORDER BY total_spent DESC
LIMIT 20
```

<DataTable data={top_customers} />

## Recent Orders

```sql recent_orders
SELECT
  o.order_id,
  u.email,
  o.status,
  o.num_of_item,
  ROUND(SUM(oi.sale_price), 2) AS order_value,
  DATE(o.created_at) AS order_date
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN users u ON o.user_id = u.id
GROUP BY o.order_id, u.email, o.status, o.num_of_item, o.created_at
ORDER BY o.created_at DESC
LIMIT 50
```

<DataTable data={recent_orders} />
