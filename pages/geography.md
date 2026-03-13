# 🌍 Geography & Demographics

Global distribution of TheLook e-commerce users, featuring interactive maps and seasonal revenue highlights.

```sql user_kpis
SELECT
  COUNT(DISTINCT country) AS country_count,
  COUNT(*) AS total_users
FROM users
```

<BigValue data={user_kpis} value="total_users" title="Total Users" />
<BigValue data={user_kpis} value="country_count" title="Countries Represented" />

## User Locations

Individual user coordinates sampled from the dataset, plotted on an interactive world map.

```sql user_locations
SELECT
  latitude AS lat,
  longitude AS long,
  country,
  gender
FROM users
WHERE latitude IS NOT NULL
  AND longitude IS NOT NULL
LIMIT 2000
```

<PointMap
  data={user_locations}
  lat="lat"
  long="long"
  pointName="country"
  title="User Locations (sample of 2,000)"
  height={420}
/>

## Users per Country

Bubble size represents the number of users in each country, positioned at the country's geographic center.

```sql country_bubbles
SELECT
  country,
  AVG(latitude) AS lat,
  AVG(longitude) AS long,
  COUNT(*) AS user_count
FROM users
WHERE latitude IS NOT NULL
  AND longitude IS NOT NULL
GROUP BY country
ORDER BY user_count DESC
LIMIT 50
```

<BubbleMap
  data={country_bubbles}
  lat="lat"
  long="long"
  size="user_count"
  pointName="country"
  title="User Count by Country"
  height={420}
/>

## Revenue Trend with Seasonal Highlights

Monthly revenue over the past year, with the holiday shopping season highlighted.

```sql monthly_revenue_trend
SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month
```

<LineChart
  data={monthly_revenue_trend}
  x="month"
  y="revenue"
  title="Monthly Revenue with Holiday Season"
  yFmt="$#,##0"
>
  <ReferenceArea xMin="2025-11" xMax="2026-01" label="Holiday Season" color="warning" />
</LineChart>

## Top Countries by Users

```sql top_countries
SELECT
  country,
  COUNT(*) AS users,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 1) AS pct_of_users
FROM users
GROUP BY country
ORDER BY users DESC
LIMIT 15
```

<DataTable data={top_countries} />
