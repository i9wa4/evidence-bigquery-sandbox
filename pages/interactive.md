# 🎛️ Interactive Explorer

Demonstrates Evidence.dev interactive input components: **ButtonGroup**, **TextInput**, **Slider**, and **DateRange**. Use the controls below to filter and explore data in real time.

## Filters

```sql departments
SELECT DISTINCT department FROM products ORDER BY department
```

<ButtonGroup
  name="department"
  data={departments}
  value="department"
  title="Department"
/>

<TextInput
  name="brand_search"
  title="Brand Name Filter"
  placeholder="e.g. Calvin Klein"
/>

<Slider
  name="min_price"
  title="Minimum Retail Price ($)"
  min=0
  max=500
  defaultValue=0
/>

<DateRange
  name="order_date"
  title="Order Date Range"
  start="2022-01-01"
  end="2024-12-31"
/>

---

## Filtered Products

```sql filtered_products
SELECT
  p.name,
  p.brand,
  p.category,
  ROUND(p.retail_price, 2) AS retail_price,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.department = '${inputs.department}'
  AND LOWER(p.brand) LIKE '%' || LOWER('${inputs.brand_search}') || '%'
  AND p.retail_price >= ${inputs.min_price}
  AND DATE(oi.created_at) BETWEEN '${inputs.order_date.start}' AND '${inputs.order_date.end}'
GROUP BY p.name, p.brand, p.category, p.retail_price
ORDER BY revenue DESC
LIMIT 50
```

<DataTable data={filtered_products} rows=10 search=true />

## Revenue by Category

```sql filtered_category_summary
SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(DISTINCT p.brand) AS brands,
  COUNT(*) AS units_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.department = '${inputs.department}'
  AND LOWER(p.brand) LIKE '%' || LOWER('${inputs.brand_search}') || '%'
  AND p.retail_price >= ${inputs.min_price}
  AND DATE(oi.created_at) BETWEEN '${inputs.order_date.start}' AND '${inputs.order_date.end}'
GROUP BY p.category
ORDER BY revenue DESC
```

<BarChart
  data={filtered_category_summary}
  x="category"
  y="revenue"
  title="Revenue by Category — {inputs.department} / price ≥ ${inputs.min_price}"
/>

## Monthly Revenue Trend with Target Line

```sql monthly_revenue_filtered
SELECT
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.department = '${inputs.department}'
  AND LOWER(p.brand) LIKE '%' || LOWER('${inputs.brand_search}') || '%'
  AND p.retail_price >= ${inputs.min_price}
  AND DATE(oi.created_at) BETWEEN '${inputs.order_date.start}' AND '${inputs.order_date.end}'
GROUP BY month
ORDER BY month
```

<LineChart
  data={monthly_revenue_filtered}
  x="month"
  y="revenue"
  title="Monthly Revenue ({inputs.department})"
>
  <ReferenceLine y=500000 label="Monthly Target" hideValue=true />
</LineChart>

## Price vs Revenue Scatter

<ScatterPlot
  data={filtered_products}
  x="retail_price"
  y="revenue"
  series="category"
  title="Retail Price vs Revenue (bubble = units sold)"
/>
