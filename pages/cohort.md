# 🔄 Cohort Analysis & Customer Lifetime Value

Advanced customer analytics using **cohort retention matrices**, **cumulative LTV curves**, and **RFM segmentation** — the gold standard toolkit for understanding customer loyalty and lifetime value.

<Note>
Cohorts are defined by the month of a customer's first completed purchase.
Retention rate is the share of cohort members who placed at least one order in a given month after joining.
</Note>

```sql cohort_kpis
SELECT
  COUNT(DISTINCT cohort_month) AS total_cohorts,
  SUM(CASE WHEN period_number = 0 THEN cohort_size ELSE 0 END) AS total_customers,
  ROUND(AVG(CASE WHEN period_number = 1 THEN retention_rate END), 1) AS avg_m1_retention,
  ROUND(AVG(CASE WHEN period_number = 3 THEN retention_rate END), 1) AS avg_m3_retention
FROM cohort_retention
```

<BigValue data={cohort_kpis} value="total_cohorts" title="Cohorts Analyzed" />
<BigValue data={cohort_kpis} value="total_customers" title="Total New Customers" fmt="#,##0" />
<BigValue data={cohort_kpis} value="avg_m1_retention" title="Avg M1 Retention %" fmt="#,##0.0" />
<BigValue data={cohort_kpis} value="avg_m3_retention" title="Avg M3 Retention %" fmt="#,##0.0" />

---

## Cohort Retention Matrix

Each cell shows the percentage of customers from that cohort who were still purchasing in that period.
Period 0 = acquisition month (always ~100 %), Period 1 = one month later, and so on.

```sql cohort_heatmap
SELECT
  cohort_month,
  period_number,
  retention_rate
FROM cohort_retention
ORDER BY cohort_month, period_number
```

<Heatmap
  data={cohort_heatmap}
  x="period_number"
  y="cohort_month"
  value="retention_rate"
  title="Cohort Retention Rate (%) — Period 0 to 12"
/>

<Details title="How to read this heatmap">

- **Rows** represent customer cohorts (the month they first purchased).
- **Columns** represent months elapsed since first purchase (0 = acquisition month).
- **Color intensity** reflects retention rate: darker = higher retention.
- A gradual fade from left to right is normal; a steep drop-off suggests churn risk.

</Details>

---

## Retention Rate Trends

Track whether retention is improving or declining across recent cohorts.

```sql retention_trend
SELECT
  cohort_month,
  MAX(CASE WHEN period_number = 1 THEN retention_rate END) AS m1_retention,
  MAX(CASE WHEN period_number = 3 THEN retention_rate END) AS m3_retention,
  MAX(CASE WHEN period_number = 6 THEN retention_rate END) AS m6_retention,
  MAX(cohort_size) AS cohort_size
FROM cohort_retention
GROUP BY cohort_month
ORDER BY cohort_month
```

<LineChart
  data={retention_trend}
  x="cohort_month"
  y={["m1_retention", "m3_retention", "m6_retention"]}
  title="Retention Rate by Cohort: Month 1 / 3 / 6"
  yAxisTitle="Retention %"
  xAxisTitle="Cohort Month"
/>

---

## New-Customer Acquisition by Month

How many new customers are we gaining each month?

```sql cohort_sizes
SELECT
  cohort_month,
  cohort_size AS new_customers
FROM cohort_retention
WHERE period_number = 0
ORDER BY cohort_month
```

<BarChart
  data={cohort_sizes}
  x="cohort_month"
  y="new_customers"
  title="New Customers per Cohort Month"
  yAxisTitle="New Customers"
  xAxisTitle="Cohort Month"
/>

---

## Cumulative LTV Curves by Cohort

How much cumulative revenue does each cohort generate **per original cohort member** as time passes?
Steeper curves indicate higher-value cohorts.

```sql cumulative_ltv
WITH recent_cohorts AS (
  SELECT DISTINCT cohort_month
  FROM cohort_retention
  WHERE period_number = 0
  ORDER BY cohort_month DESC
  LIMIT 8
),
cumulative AS (
  SELECT
    cr.cohort_month,
    cr.period_number,
    cr.cohort_size,
    ROUND(
      SUM(cr.revenue_per_cohort_user) OVER (
        PARTITION BY cr.cohort_month
        ORDER BY cr.period_number
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
      ), 2
    ) AS cumulative_ltv_per_user
  FROM cohort_retention cr
  INNER JOIN recent_cohorts rc ON cr.cohort_month = rc.cohort_month
)
SELECT *
FROM cumulative
ORDER BY cohort_month, period_number
```

<LineChart
  data={cumulative_ltv}
  x="period_number"
  y="cumulative_ltv_per_user"
  series="cohort_month"
  title="Cumulative LTV per Cohort Member (Last 8 Cohorts)"
  yAxisTitle="Cumulative Revenue per User ($)"
  xAxisTitle="Months Since First Purchase"
/>

<Details title="LTV curve interpretation">

Each line represents one cohort.
- The **y-axis** shows how much cumulative revenue has been earned per original cohort member.
- The **x-axis** shows months since that cohort first purchased.
- Cohorts that plateau early suggest customers are not returning for repeat purchases.
- Rising curves indicate strong repeat-purchase behavior.

</Details>

---

## RFM Customer Segmentation

```sql segment_summary
SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC
```

```sql segment_kpis
SELECT
  COUNT(*) AS total_customers,
  ROUND(AVG(total_revenue), 2) AS overall_avg_ltv,
  ROUND(AVG(rfm_score), 2) AS overall_avg_rfm
FROM customer_ltv
```

<BigValue data={segment_kpis} value="total_customers" title="Customers Segmented" fmt="#,##0" />
<BigValue data={segment_kpis} value="overall_avg_ltv" title="Overall Avg LTV" fmt="$#,##0.00" />
<BigValue data={segment_kpis} value="overall_avg_rfm" title="Overall Avg RFM Score" fmt="#,##0.0" />

### Segment Size & Value — Treemap

Each rectangle is sized by customer count; tooltip shows average LTV per segment.

<ECharts config={{
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      return '<b>' + params.name + '</b><br/>Customers: ' + params.value.toLocaleString() + '<br/>Avg LTV: $' + (params.data.avg_ltv || 0).toFixed(2) + '<br/>Total Revenue: $' + ((params.data.total_revenue || 0) / 1000).toFixed(0) + 'k';
    }
  },
  series: [
    {
      type: 'treemap',
      roam: false,
      leafDepth: 1,
      label: {
        show: true,
        formatter: function(params) {
          return params.name + '\n' + params.value.toLocaleString();
        },
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
      },
      upperLabel: { show: false },
      itemStyle: { borderWidth: 2, borderColor: '#fff' },
      data: segment_summary.map(function(d) {
        var colorMap = {
          'Champions': '#16a34a',
          'Loyal Customers': '#2563eb',
          'Potential Loyalists': '#7c3aed',
          'New Customers': '#0891b2',
          'Needs Attention': '#d97706',
          'At Risk': '#ea580c',
          'Cannot Lose Them': '#dc2626',
          'Lost': '#4b5563'
        };
        return {
          name: d.customer_segment,
          value: d.customers,
          avg_ltv: d.avg_ltv,
          total_revenue: d.total_segment_revenue,
          itemStyle: { color: colorMap[d.customer_segment] || '#94a3b8' }
        };
      })
    }
  ]
}} height={420} />

### Recency vs Frequency Scatter (by Segment)

Each dot is a customer. X-axis = days since last purchase (lower = more recent), Y-axis = total orders.
Color = RFM segment. Ideal customers appear in the top-left corner.

```sql rfm_scatter
SELECT
  recency_days,
  order_count,
  total_revenue,
  customer_segment,
  rfm_score
FROM customer_ltv
WHERE order_count <= 25
  AND recency_days <= 500
ORDER BY total_revenue DESC
LIMIT 3000
```

<ScatterPlot
  data={rfm_scatter}
  x="recency_days"
  y="order_count"
  series="customer_segment"
  title="Recency vs Frequency by Customer Segment"
  xAxisTitle="Days Since Last Purchase (lower = more recent)"
  yAxisTitle="Number of Orders"
/>

### Segment Performance Details

```sql segment_details
SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC
```

<DataTable data={segment_details} rows=10 />

---

## Average LTV by Segment

Which customer segments generate the most value per person?

<BarChart
  data={segment_summary}
  x="customer_segment"
  y="avg_ltv"
  title="Average Lifetime Value by RFM Segment"
  yAxisTitle="Avg LTV ($)"
  xAxisTitle="Customer Segment"
  swapXY=true
/>

<Details title="RFM segment definitions">

| Segment | Description |
|---|---|
| **Champions** | Bought recently, buy often, spend the most |
| **Loyal Customers** | Regular buyers with solid spend |
| **Potential Loyalists** | Recent buyers with above-average spend, low frequency |
| **New Customers** | Bought recently but only once |
| **Needs Attention** | Average scores across all dimensions |
| **At Risk** | Once-regular buyers who haven't returned recently |
| **Cannot Lose Them** | High-frequency buyers who have lapsed |
| **Lost** | Lowest recency and frequency — need win-back campaigns |

RFM scores are quintile-based (1–5 per dimension). Scores are computed independently using `NTILE(5)` window functions across all customers.

</Details>
