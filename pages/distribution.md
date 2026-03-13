# 📊 Distribution & Hierarchy Analysis

Statistical distribution and flow analysis using **BoxPlot**, **SankeyDiagram**, callout components (**Note**, **Alert**), and collapsible **Details** sections.

<Note>
This dashboard uses DuckDB percentile functions to compute price distribution statistics from the TheLook e-commerce dataset.
</Note>

## Price Distribution by Category

<Alert>
Retail prices below $1 are excluded from the box plots as they represent data anomalies.
</Alert>

```sql price_distribution
SELECT
  category,
  ROUND(PERCENTILE_CONT(0.1) WITHIN GROUP (ORDER BY retail_price), 2) AS p10,
  ROUND(PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY retail_price), 2) AS q1,
  ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY retail_price), 2) AS median,
  ROUND(PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY retail_price), 2) AS q3,
  ROUND(PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY retail_price), 2) AS p90,
  ROUND(AVG(retail_price), 2) AS mean_price,
  COUNT(*) AS product_count
FROM products
WHERE retail_price >= 1
GROUP BY category
ORDER BY median DESC
```

<BoxPlot
  data={price_distribution}
  name="category"
  midpoint="median"
  intervalBottom="q1"
  intervalTop="q3"
  min="p10"
  max="p90"
  title="Retail Price Distribution by Category (P10–P90)"
  swapXY=true
/>

<Details title="How to read the box plot">

Each box shows the **interquartile range (Q1 to Q3)** for retail price within that category.
The center line is the **median**, and the whiskers extend to the **10th and 90th percentiles**.
Wider boxes indicate greater price variation within a category.

</Details>

## Revenue Flow — SankeyDiagram

```sql category_brand_sankey
SELECT
  p.category AS source,
  p.brand AS target,
  ROUND(SUM(oi.sale_price), 2) AS value
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category, p.brand
ORDER BY value DESC
LIMIT 40
```

<SankeyDiagram
  data={category_brand_sankey}
  sourceCol="source"
  targetCol="target"
  valueCol="value"
  title="Revenue Flow: Category → Brand (Top 40)"
/>

<Details title="SankeyDiagram interpretation">

Each flow represents revenue moving from a **product category** (left) to a **brand** (right).
Thicker flows indicate higher revenue. Only the top 40 category–brand pairs are shown.

</Details>

## Category Revenue Summary

```sql category_revenue_summary
SELECT
  p.category,
  COUNT(DISTINCT p.brand) AS brands,
  COUNT(DISTINCT p.id) AS products,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  ROUND(AVG(oi.sale_price), 2) AS avg_sale_price,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
```

<DataTable data={category_revenue_summary} />

<Note>
Average margin = average (retail_price − cost) per product in each category.
</Note>

## Sale Price Distribution by Category

```sql sale_price_dist
SELECT
  p.category,
  ROUND(PERCENTILE_CONT(0.1) WITHIN GROUP (ORDER BY oi.sale_price), 2) AS p10,
  ROUND(PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY oi.sale_price), 2) AS q1,
  ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY oi.sale_price), 2) AS median,
  ROUND(PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY oi.sale_price), 2) AS q3,
  ROUND(PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY oi.sale_price), 2) AS p90
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY median DESC
```

<BoxPlot
  data={sale_price_dist}
  name="category"
  midpoint="median"
  intervalBottom="q1"
  intervalTop="q3"
  min="p10"
  max="p90"
  title="Actual Sale Price Distribution by Category (P10–P90)"
  swapXY=true
/>
