# 📈 Sales Trends & Time Analysis

Time-series analysis of the TheLook e-commerce dataset featuring AreaChart, LineChart, CalendarHeatmap, and stacked charts.

```sql kpi_metrics
SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  COUNT(DISTINCT user_id) AS unique_buyers,
  ROUND(AVG(sale_price), 2) AS avg_sale_price
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
```

<BigValue data={kpi_metrics} value="total_orders" title="Total Orders" />
<BigValue data={kpi_metrics} value="total_revenue" title="Total Revenue" fmt="$#,##0" />
<BigValue data={kpi_metrics} value="unique_buyers" title="Unique Buyers" />
<BigValue data={kpi_metrics} value="avg_sale_price" title="Avg Sale Price" fmt="$#,##0.00" />

## Monthly Revenue Trend

```sql monthly_revenue_trend
SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT user_id) AS buyers
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month
```

<AreaChart
  data={monthly_revenue_trend}
  x="month"
  y="revenue"
  title="Monthly Revenue"
/>

<LineChart
  data={monthly_revenue_trend}
  x="month"
  y={["orders", "buyers"]}
  title="Monthly Orders vs Unique Buyers"
/>

## Revenue by Category Over Time

```sql category_monthly_revenue
SELECT
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY month, p.category
ORDER BY month, revenue DESC
```

<AreaChart
  data={category_monthly_revenue}
  x="month"
  y="revenue"
  series="category"
  title="Revenue by Category Over Time (Stacked)"
  type="stacked"
/>

## Order Volume by Status Over Time

```sql status_monthly_orders
SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY month, status
ORDER BY month, orders DESC
```

<BarChart
  data={status_monthly_orders}
  x="month"
  y="orders"
  series="status"
  title="Orders by Status Over Time (Stacked)"
  type="stacked"
/>

## Daily Order Activity

```sql daily_order_volume
SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY order_date
```

<CalendarHeatmap
  data={daily_order_volume}
  date="order_date"
  value="orders"
  title="Daily Order Volume Heatmap"
/>

## Top 10 Revenue Days

```sql top_revenue_days
SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY revenue DESC
LIMIT 10
```

<DataTable data={top_revenue_days} />
