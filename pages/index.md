# E-Commerce Dashboard

Overview of orders and revenue from the TheLook e-commerce dataset.

```sql total_orders
SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  ROUND(AVG(sale_price), 2) AS avg_order_value
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
```

<BigValue data={total_orders} value="total_orders" title="Total Orders" />
<BigValue data={total_orders} value="total_revenue" title="Total Revenue" fmt="$#,##0" />
<BigValue data={total_orders} value="avg_order_value" title="Avg Order Value" fmt="$#,##0.00" />

## Revenue Trend

```sql monthly_revenue
SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month
```

<LineChart data={monthly_revenue} x="month" y="revenue" title="Monthly Revenue (Last 12 Months)" />

## Top Categories

```sql top_categories
SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 10
```

<BarChart data={top_categories} x="category" y="revenue" title="Revenue by Category (Top 10)" />

<DataTable data={top_categories} />
