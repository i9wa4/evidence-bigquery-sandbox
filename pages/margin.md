# 💰 Gross Margin & Discount Intelligence

Profitability analysis going beyond revenue: **gross margin**, **discount depth**, and **return-rate impact** — derived from the gap between `retail_price`, `sale_price`, and `cost` in the TheLook dataset.

<Note>
All monetary amounts are computed from the `price_intelligence` source, which pre-aggregates
item-level data from BigQuery. Only items where `cost < retail_price` are included to exclude
catalogue data anomalies. Cancelled and Returned items are excluded from profit metrics but
included in the return-rate section below.
</Note>

---

## Financial Summary

```sql margin_kpis
SELECT
  ROUND(SUM(total_retail_value))    AS gross_retail,
  ROUND(SUM(total_discount))        AS total_discounts,
  ROUND(SUM(total_sale_value))      AS net_revenue,
  ROUND(SUM(total_cost))            AS total_cogs,
  ROUND(SUM(total_gross_profit))    AS gross_profit,
  ROUND(SUM(total_discount)  / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS avg_discount_rate,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value),  0) * 100, 1) AS gp_margin_pct
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
```

<BigValue data={margin_kpis} value="gross_retail"     title="Gross Retail Value"  fmt="$#,##0" />
<BigValue data={margin_kpis} value="total_discounts"  title="Total Discounts"     fmt="$#,##0" />
<BigValue data={margin_kpis} value="net_revenue"      title="Net Revenue"         fmt="$#,##0" />
<BigValue data={margin_kpis} value="total_cogs"       title="Cost of Goods Sold"  fmt="$#,##0" />
<BigValue data={margin_kpis} value="gross_profit"     title="Gross Profit"        fmt="$#,##0" />
<BigValue data={margin_kpis} value="avg_discount_rate" title="Avg Discount Rate %"  fmt="#,##0.0" />
<BigValue data={margin_kpis} value="gp_margin_pct"    title="GP Margin %"          fmt="#,##0.0" />

---

## P&L Waterfall

How revenue transforms from full retail price all the way down to gross profit.

```sql pnl_stages
SELECT
  ROUND(SUM(total_retail_value))                                          AS gross_retail,
  ROUND(SUM(total_discount))                                              AS discounts,
  ROUND(SUM(total_sale_value))                                            AS net_sales,
  ROUND(SUM(total_cost))                                                  AS cogs,
  ROUND(SUM(total_gross_profit))                                          AS gross_profit
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
```

<ECharts config={{
  title: {
    text: 'P&L Waterfall: Gross Retail → Gross Profit',
    left: 'center',
    textStyle: { fontSize: 14 }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: (params) => {
      const label = params[0].name;
      const val = params.find(p => p.seriesName === 'Amount');
      if (!val) return label;
      const sign = val.value < 0 ? '-' : '';
      return `<b>${label}</b><br/>$${sign}${Math.abs(val.value / 1e6).toFixed(1)}M`;
    }
  },
  xAxis: {
    type: 'category',
    data: ['Gross Retail', 'Discounts', 'Net Sales', 'COGS', 'Gross Profit'],
    axisLabel: { interval: 0 }
  },
  yAxis: {
    type: 'value',
    axisLabel: { formatter: (v) => '$' + (v / 1e6).toFixed(0) + 'M' }
  },
  series: [
    {
      name: 'Platform',
      type: 'bar',
      stack: 'waterfall',
      silent: true,
      itemStyle: { color: 'transparent', borderColor: 'transparent' },
      emphasis: { itemStyle: { color: 'transparent', borderColor: 'transparent' } },
      data: [
        0,
        pnl_stages[0].net_sales,
        0,
        pnl_stages[0].gross_profit,
        0
      ]
    },
    {
      name: 'Amount',
      type: 'bar',
      stack: 'waterfall',
      label: {
        show: true,
        position: 'top',
        formatter: (p) => {
          const sign = p.value < 0 ? '-' : '';
          return '$' + sign + Math.abs(p.value / 1e6).toFixed(1) + 'M';
        }
      },
      data: [
        { value: pnl_stages[0].gross_retail, itemStyle: { color: '#2563eb' } },
        { value: pnl_stages[0].discounts,    itemStyle: { color: '#ef4444' } },
        { value: pnl_stages[0].net_sales,    itemStyle: { color: '#22c55e' } },
        { value: pnl_stages[0].cogs,         itemStyle: { color: '#f97316' } },
        { value: pnl_stages[0].gross_profit, itemStyle: { color: '#16a34a' } }
      ]
    }
  ]
}} height={380} />

<Details title="Waterfall chart interpretation">

| Stage | Definition |
|---|---|
| **Gross Retail Value** | Sum of `retail_price` for all completed items — what customers would have paid at full price |
| **Discounts** | Gap between retail price and actual sale price (`retail_price − sale_price`) |
| **Net Sales** | Actual revenue collected (`sale_price`) |
| **COGS** | Sum of `cost` for all completed items |
| **Gross Profit** | Net Sales minus COGS — the margin before operating expenses |

</Details>

---

## Category-Level Profitability

```sql category_margin
SELECT
  category,
  ROUND(SUM(total_retail_value))                                           AS gross_retail,
  ROUND(SUM(total_sale_value))                                             AS net_revenue,
  ROUND(SUM(total_cost))                                                   AS total_cogs,
  ROUND(SUM(total_gross_profit))                                           AS gross_profit,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1) AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS avg_discount_pct,
  SUM(item_count)                                                          AS total_items
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY category
ORDER BY gp_margin_pct DESC
```

### GP Margin % by Category

<BarChart
  data={category_margin}
  x="category"
  y="gp_margin_pct"
  title="Gross Profit Margin % by Category"
  yAxisTitle="GP Margin %"
  swapXY=true
/>

### Discount Rate % by Category

<BarChart
  data={category_margin}
  x="category"
  y="avg_discount_pct"
  title="Average Discount Rate % by Category"
  yAxisTitle="Discount Rate %"
  swapXY=true
  colorPalette={["#ef4444"]}
/>

### Category P&L Summary Table

<DataTable data={category_margin} rows=15 />

---

## Price Tier × Category Profitability Heatmap

How does gross margin % vary across price brackets within each category?

```sql price_tier_heatmap
SELECT
  price_tier,
  category,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1) AS gp_margin_pct,
  SUM(item_count)                                                              AS total_items,
  ROUND(SUM(total_sale_value))                                                 AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY price_tier, category
ORDER BY price_tier, category
```

<Heatmap
  data={price_tier_heatmap}
  x="price_tier"
  y="category"
  value="gp_margin_pct"
  title="GP Margin % — Price Tier × Category"
/>

<Details title="Price tier definitions">

| Tier | Retail Price Range |
|---|---|
| 1_Under $25 | < $25 |
| 2_$25-$49 | $25 – $49 |
| 3_$50-$99 | $50 – $99 |
| 4_$100-$199 | $100 – $199 |
| 5_$200 Plus | ≥ $200 |

Higher-priced items often carry higher margins. This heatmap reveals exceptions where
low-price tiers punch above their weight, or premium tiers underperform.

</Details>

---

## Monthly Gross Margin Trend

Is our profitability improving or eroding over time?

```sql monthly_gp_trend
SELECT
  order_month                                                                   AS month,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_rate_pct,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month
```

<LineChart
  data={monthly_gp_trend}
  x="month"
  y={["gp_margin_pct", "discount_rate_pct"]}
  title="Monthly GP Margin % vs Discount Rate %"
  yAxisTitle="Percentage (%)"
  xAxisTitle="Month"
/>

<AreaChart
  data={monthly_gp_trend}
  x="month"
  y="gross_profit"
  title="Monthly Gross Profit ($)"
  yAxisTitle="Gross Profit ($)"
/>

<Alert>
If the discount rate rises while GP margin % falls, heavier discounting is compressing profitability.
Watch for months where these two lines diverge significantly.
</Alert>

---

## Return Rate Impact by Category

Returns and cancellations destroy realized revenue. Which categories are most exposed?

```sql return_impact
SELECT
  category,
  ROUND(SUM(CASE WHEN status NOT IN ('Cancelled', 'Returned') THEN total_sale_value ELSE 0 END))   AS net_revenue,
  ROUND(SUM(CASE WHEN status IN     ('Cancelled', 'Returned') THEN total_sale_value ELSE 0 END))   AS returned_revenue,
  SUM(CASE WHEN status NOT IN ('Cancelled', 'Returned') THEN item_count ELSE 0 END)               AS sold_items,
  SUM(CASE WHEN status IN     ('Cancelled', 'Returned') THEN item_count ELSE 0 END)               AS returned_items,
  ROUND(
    SUM(CASE WHEN status IN ('Cancelled', 'Returned') THEN item_count ELSE 0 END)
    / NULLIF(SUM(item_count), 0) * 100, 1
  )                                                                                                AS return_rate_pct
FROM price_intelligence
GROUP BY category
ORDER BY return_rate_pct DESC
```

<BarChart
  data={return_impact}
  x="category"
  y="return_rate_pct"
  title="Return & Cancellation Rate % by Category"
  yAxisTitle="Return Rate %"
  swapXY=true
  colorPalette={["#dc2626"]}
/>

<BarChart
  data={return_impact}
  x="category"
  y={["net_revenue", "returned_revenue"]}
  title="Net Revenue vs Returned Revenue by Category"
  yAxisTitle="Revenue ($)"
  swapXY=true
  type="stacked"
/>

<DataTable data={return_impact} rows=15 />

---

## Interactive Brand Deep-Dive

Select a category to explore which brands have the best gross margins.

```sql brand_categories
SELECT DISTINCT category FROM price_intelligence ORDER BY category
```

<Dropdown
  name="margin_category"
  data={brand_categories}
  value="category"
  title="Select Category"
  defaultValue="Outerwear & Coats"
/>

```sql brand_gp
SELECT
  brand,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_pct,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  SUM(item_count)                                                               AS items_sold
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
  AND category = '${inputs.margin_category}'
GROUP BY brand
HAVING net_revenue > 500
ORDER BY gp_margin_pct DESC
LIMIT 20
```

<BarChart
  data={brand_gp}
  x="brand"
  y="gp_margin_pct"
  title="GP Margin % — Top 20 Brands in {inputs.margin_category}"
  yAxisTitle="GP Margin %"
  swapXY=true
/>

<ScatterPlot
  data={brand_gp}
  x="discount_pct"
  y="gp_margin_pct"
  size="net_revenue"
  title="Discount Rate vs GP Margin % (bubble size = Net Revenue)"
  xAxisTitle="Discount Rate %"
  yAxisTitle="GP Margin %"
/>

<DataTable data={brand_gp} rows=20 search=true />
