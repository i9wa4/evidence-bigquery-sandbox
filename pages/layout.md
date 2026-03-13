# 🎨 Layout & Custom Charts

Demonstrates Evidence.dev layout components (**Tabs**) and custom **ECharts** visualizations including a pie chart and a radar chart.

## Revenue Breakdown — Tabs

<Tabs>

<Tab label="By Category">

```sql revenue_by_category
SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
```

<BarChart data={revenue_by_category} x="category" y="revenue" title="Revenue by Category" />

<DataTable data={revenue_by_category} />

</Tab>

<Tab label="By Department">

```sql revenue_by_department
SELECT
  p.department,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.category) AS categories
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.department
ORDER BY revenue DESC
```

<BarChart data={revenue_by_department} x="department" y="revenue" title="Revenue by Department" />

<DataTable data={revenue_by_department} />

</Tab>

<Tab label="By Traffic Source">

```sql revenue_by_source
SELECT
  u.traffic_source,
  COUNT(DISTINCT u.id) AS customers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.traffic_source
ORDER BY revenue DESC
```

<BarChart data={revenue_by_source} x="traffic_source" y="revenue" title="Revenue by Traffic Source" />

<DataTable data={revenue_by_source} />

</Tab>

</Tabs>

---

## Custom ECharts — Category Revenue Pie Chart

```sql category_pie
SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
```

<ECharts config={{
  tooltip: { trigger: 'item', formatter: '{b}: ${c} ({d}%)' },
  legend: { orient: 'vertical', left: 'left' },
  series: [
    {
      name: 'Revenue',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: true,
      label: { show: true, formatter: '{b}\n{d}%' },
      data: category_pie.map(d => ({ name: d.category, value: d.revenue }))
    }
  ]
}} height={450} />

---

## Custom ECharts — Category Radar Chart

```sql radar_metrics
SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.brand) AS brands,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 6
```

<ECharts config={{
  tooltip: {},
  legend: { data: radar_metrics.map(d => d.category) },
  radar: {
    indicator: [
      { name: 'Revenue',    max: Math.max(...radar_metrics.map(d => d.revenue)) },
      { name: 'Orders',     max: Math.max(...radar_metrics.map(d => d.orders)) },
      { name: 'Brands',     max: Math.max(...radar_metrics.map(d => d.brands)) },
      { name: 'Avg Price',  max: Math.max(...radar_metrics.map(d => d.avg_price)) },
      { name: 'Avg Margin', max: Math.max(...radar_metrics.map(d => d.avg_margin)) }
    ]
  },
  series: [
    {
      type: 'radar',
      data: radar_metrics.map(d => ({
        name: d.category,
        value: [d.revenue, d.orders, d.brands, d.avg_price, d.avg_margin]
      }))
    }
  ]
}} height={450} />
