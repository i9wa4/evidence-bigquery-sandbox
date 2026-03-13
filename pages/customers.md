# 👥 Customer Intelligence

Demographic and behavioral analysis of TheLook e-commerce customers, featuring Histogram, ScatterPlot, and geographic breakdown.

```sql customer_kpis
SELECT
  COUNT(DISTINCT u.id) AS total_customers,
  COUNT(DISTINCT oi.user_id) AS active_buyers,
  ROUND(SUM(oi.sale_price) / COUNT(DISTINCT oi.user_id), 2) AS avg_revenue_per_buyer,
  COUNT(DISTINCT u.country) AS countries
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
```

<BigValue data={customer_kpis} value="total_customers" title="Total Customers" />
<BigValue data={customer_kpis} value="active_buyers" title="Active Buyers" />
<BigValue data={customer_kpis} value="avg_revenue_per_buyer" title="Avg Revenue / Buyer" fmt="$#,##0.00" />
<BigValue data={customer_kpis} value="countries" title="Countries" />

## Top Countries by Customer Count

```sql customers_by_country
SELECT
  u.country,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY customers DESC
LIMIT 15
```

<BarChart
  data={customers_by_country}
  x="country"
  y="customers"
  title="Top 15 Countries by Customer Count"
  swapXY=true
/>

<BarChart
  data={customers_by_country}
  x="country"
  y={["buyers", "customers"]}
  title="Buyers vs Total Customers by Country"
  type="grouped"
/>

## Gender Distribution

```sql gender_breakdown
SELECT
  u.gender,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  ROUND(AVG(oi.sale_price), 2) AS avg_sale_price
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.gender
ORDER BY customers DESC
```

<BarChart
  data={gender_breakdown}
  x="gender"
  y={["buyers", "customers"]}
  title="Buyers vs Total Customers by Gender"
  type="grouped"
/>

<DataTable data={gender_breakdown} />

## Age Distribution

```sql age_distribution
SELECT
  u.age,
  COUNT(*) AS customers
FROM users u
WHERE u.age IS NOT NULL AND u.age BETWEEN 13 AND 80
GROUP BY u.age
ORDER BY u.age
```

<Histogram
  data={age_distribution}
  x="age"
  title="Customer Age Distribution"
/>

## Customer Spend vs Age

```sql customer_spend_vs_age
SELECT
  u.age,
  u.gender,
  COUNT(oi.order_id) AS total_orders,
  ROUND(SUM(oi.sale_price), 2) AS total_spent
FROM users u
JOIN order_items oi ON u.id = oi.user_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND u.age IS NOT NULL AND u.age BETWEEN 13 AND 80
GROUP BY u.id, u.age, u.gender
HAVING total_spent > 0
LIMIT 2000
```

<ScatterPlot
  data={customer_spend_vs_age}
  x="age"
  y="total_spent"
  series="gender"
  title="Customer Spend vs Age (sample of 2000)"
/>

## Monthly New Customer Acquisition

```sql monthly_new_customers
SELECT
  LEFT(CAST(o.created_at AS VARCHAR), 7) AS month,
  COUNT(DISTINCT o.user_id) AS new_buyers
FROM orders o
GROUP BY month
ORDER BY month
```

<AreaChart
  data={monthly_new_customers}
  x="month"
  y="new_buyers"
  title="Monthly Buyers Acquiring Orders"
/>

## Revenue by Country

```sql revenue_by_country
SELECT
  u.country,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT oi.user_id) AS buyers
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY revenue DESC
LIMIT 20
```

<DataTable data={revenue_by_country} rows=10 search=true />
