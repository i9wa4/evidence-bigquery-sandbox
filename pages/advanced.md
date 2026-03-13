# 🔬 Advanced Visualization Showcase

Experimental dashboard demonstrating advanced Evidence.dev components: BubbleChart, Heatmap, FunnelChart, and interactive inputs.

## Order Funnel

```sql order_funnel
SELECT
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY status
ORDER BY orders DESC
```

<FunnelChart
  data={order_funnel}
  nameCol="status"
  valueCol="orders"
  title="Order Status Funnel"
/>

## Category × Month Revenue Heatmap

```sql category_month_heatmap
SELECT
  p.category,
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category, month
ORDER BY p.category, month
```

<Heatmap
  data={category_month_heatmap}
  x="month"
  y="category"
  value="revenue"
  title="Revenue Heatmap: Category × Month"
/>

## Brand Performance Bubble Chart

```sql brand_bubble
SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS total_orders,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  p.category
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING total_orders > 50
ORDER BY total_revenue DESC
LIMIT 40
```

<BubbleChart
  data={brand_bubble}
  x="total_orders"
  y="total_revenue"
  size="avg_price"
  series="category"
  title="Brand Performance: Orders vs Revenue (bubble size = Avg Price)"
/>

## Interactive Category Explorer

```sql all_categories
SELECT DISTINCT category FROM products ORDER BY category
```

<Dropdown
  name="selected_category"
  data={all_categories}
  value="category"
  title="Select Category"
/>

```sql category_products
SELECT
  p.name,
  p.brand,
  ROUND(p.retail_price, 2) AS retail_price,
  ROUND(p.cost, 2) AS cost,
  ROUND(p.retail_price - p.cost, 2) AS margin,
  ROUND((p.retail_price - p.cost) / NULLIF(p.retail_price, 0) * 100, 1) AS margin_pct,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${inputs.selected_category}'
  AND p.retail_price > 0
GROUP BY p.id, p.name, p.brand, p.retail_price, p.cost
ORDER BY revenue DESC
LIMIT 30
```

<DataTable data={category_products} rows=10 search=true />

```sql category_brand_revenue
SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${inputs.selected_category}'
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 10
```

<BarChart
  data={category_brand_revenue}
  x="brand"
  y="revenue"
  title="Top Brands in {inputs.selected_category}"
/>

## Price vs Revenue Scatter (Top Brands)

```sql price_vs_revenue
SELECT
  p.brand,
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING units_sold > 100
ORDER BY total_revenue DESC
LIMIT 50
```

<ScatterPlot
  data={price_vs_revenue}
  x="avg_retail_price"
  y="total_revenue"
  series="category"
  title="Avg Price vs Total Revenue by Brand (top 50 brands with 100+ units sold)"
/>

## Order Value Distribution

```sql order_value_dist
SELECT
  o.order_id,
  ROUND(SUM(oi.sale_price), 2) AS order_value
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY o.order_id
```

<Histogram
  data={order_value_dist}
  x="order_value"
  title="Distribution of Order Values"
/>
