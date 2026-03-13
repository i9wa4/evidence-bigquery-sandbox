# Product & Brand Analysis

Analysis of products and brands from the TheLook e-commerce dataset.

```sql product_summary
SELECT
  COUNT(DISTINCT p.id) AS total_products,
  COUNT(DISTINCT p.brand) AS total_brands,
  COUNT(DISTINCT p.category) AS total_categories,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price
FROM products p
```

<BigValue data={product_summary} value="total_products" title="Total Products" />
<BigValue data={product_summary} value="total_brands" title="Total Brands" />
<BigValue data={product_summary} value="total_categories" title="Total Categories" />
<BigValue data={product_summary} value="avg_retail_price" title="Avg Retail Price" fmt="$#,##0.00" />

## Revenue by Brand

```sql revenue_by_brand
SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 15
```

<BarChart data={revenue_by_brand} x="brand" y="revenue" title="Top 15 Brands by Revenue" />

## Category Profit Margin

```sql category_margin
SELECT
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(AVG(p.cost), 2) AS avg_cost,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin,
  ROUND(AVG((p.retail_price - p.cost) / NULLIF(p.retail_price, 0)) * 100, 1) AS margin_pct
FROM products p
GROUP BY p.category
ORDER BY avg_margin DESC
```

<DataTable data={category_margin} />

## Price Distribution by Category

```sql price_by_category
SELECT
  p.category,
  ROUND(MIN(p.retail_price), 2) AS min_price,
  ROUND(AVG(p.retail_price), 2) AS avg_price,
  ROUND(MAX(p.retail_price), 2) AS max_price
FROM products p
GROUP BY p.category
ORDER BY avg_price DESC
```

<BarChart data={price_by_category} x="category" y="avg_price" title="Average Retail Price by Category" />

## Top Products by Revenue

```sql top_products
SELECT
  p.name,
  p.brand,
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.name, p.brand, p.category
ORDER BY revenue DESC
LIMIT 20
```

<DataTable data={top_products} />
