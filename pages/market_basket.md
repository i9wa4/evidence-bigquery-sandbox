# 🛒 Market Basket & Co-Purchase Intelligence

Which product categories do customers buy **together** in a single order?
Market basket analysis answers this question with three complementary metrics.

<Note>

**Support** = % of all orders that contain both categories.
**Confidence A→B** = % of Category A orders that also include Category B.
**Lift** = how much more (or less) likely a pair co-occurs compared with chance.
Lift > 1 means positive affinity; lift < 1 means customers rarely combine those categories.

</Note>

---

## Basket Overview

```sql basket_kpis
SELECT
  ROUND(AVG(cat_count), 2) AS avg_categories_per_order,
  ROUND(SUM(CASE WHEN cat_count > 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1)
    AS pct_multi_category_orders,
  ROUND(AVG(order_value), 2) AS avg_basket_value,
  COUNT(*) AS total_orders
FROM (
  SELECT
    oi.order_id,
    COUNT(DISTINCT p.category) AS cat_count,
    SUM(oi.sale_price) AS order_value
  FROM order_items oi
  JOIN products p ON oi.product_id = p.id
  WHERE oi.status NOT IN ('Cancelled', 'Returned')
  GROUP BY oi.order_id
) AS basket_data
```

<BigValue data={basket_kpis} value="total_orders" title="Orders Analyzed" fmt="#,##0" />
<BigValue data={basket_kpis} value="avg_categories_per_order" title="Avg Categories per Order" fmt="#,##0.00" />
<BigValue data={basket_kpis} value="pct_multi_category_orders" title="Multi-Category Orders %" fmt="#,##0.0" />
<BigValue data={basket_kpis} value="avg_basket_value" title="Avg Basket Value" fmt="$#,##0.00" />

---

## Category Co-Purchase Affinity — Lift Heatmap

Each cell shows the **lift** between two categories. Values above 1.0 mean customers
buy those two categories together more often than chance alone would predict.
Darker cells = stronger positive affinity.

```sql affinity_heatmap
SELECT category_a, category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
UNION ALL
SELECT category_b AS category_a, category_a AS category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
ORDER BY category_a, category_b
```

<Heatmap
  data={affinity_heatmap}
  x="category_a"
  y="category_b"
  value="lift"
  title="Category Co-Purchase Lift Matrix"
/>

<Details title="How to read the lift heatmap">

- **Lift = 1.0**: categories co-occur at the rate expected if purchases were independent.
- **Lift > 1.0**: positive affinity — customers combine these categories more often than expected.
- **Lift < 1.0**: negative affinity — customers rarely buy both in the same order.

The matrix is symmetric: lift(A, B) = lift(B, A).

</Details>

---

## Co-Purchase Network

Each node is a product category, sized by how many orders it appears in.
Edges connect categories frequently bought together; **thicker edges = more co-purchases**.
Hover over a node to highlight its connections. Scroll to zoom, drag to pan.

```sql category_nodes
SELECT category, MAX(cat_orders) AS cat_orders
FROM (
  SELECT category_a AS category, orders_a AS cat_orders FROM market_basket
  UNION ALL
  SELECT category_b AS category, orders_b AS cat_orders FROM market_basket
) t
GROUP BY category
ORDER BY cat_orders DESC
```

```sql co_purchase_links
SELECT category_a, category_b, co_orders, lift
FROM market_basket
WHERE co_orders >= 100
ORDER BY co_orders DESC
LIMIT 60
```

<ECharts config={{
  backgroundColor: '#fafafa',
  tooltip: {
    trigger: 'item',
    formatter: (params) => {
      if (params.dataType === 'edge') {
        return (
          '<b>' + params.data.source + ' × ' + params.data.target + '</b><br/>' +
          'Co-purchases: ' + (params.data.value || 0).toLocaleString() + '<br/>' +
          'Lift: ' + (params.data.lift || 'N/A')
        );
      }
      return (
        '<b>' + params.data.name + '</b><br/>' +
        'Orders: ' + (params.data.value || 0).toLocaleString()
      );
    }
  },
  series: [{
    type: 'graph',
    layout: 'circular',
    animation: false,
    roam: true,
    circular: { rotateLabel: true },
    label: {
      show: true,
      position: 'right',
      formatter: '{b}',
      fontSize: 10
    },
    lineStyle: {
      color: 'source',
      curveness: 0.3,
      opacity: 0.6
    },
    emphasis: {
      focus: 'adjacency',
      lineStyle: { width: 10 }
    },
    data: category_nodes.map(n => ({
      name: n.category,
      value: n.cat_orders,
      symbolSize: Math.max(15, Math.min(55, Math.sqrt(n.cat_orders) * 0.9))
    })),
    links: co_purchase_links.map(p => ({
      source: p.category_a,
      target: p.category_b,
      value: p.co_orders,
      lift: p.lift,
      lineStyle: {
        width: Math.max(1, Math.min(8, p.co_orders / 800))
      }
    }))
  }]
}} height={520} />

---

## Top Association Rules by Lift

Sorted by lift (strongest positive affinity first).
High-lift pairs with solid support make the best cross-sell candidates.

```sql top_rules
SELECT
  category_a,
  category_b,
  co_orders,
  support_pct,
  confidence_a_to_b_pct,
  confidence_b_to_a_pct,
  lift
FROM market_basket
ORDER BY lift DESC
LIMIT 30
```

<DataTable data={top_rules} rows=10 search=true />

<Details title="Association rule column definitions">

| Column | Meaning |
|---|---|
| **co_orders** | Orders that contain both Category A and Category B |
| **support_pct** | % of all orders containing both categories |
| **confidence_a_to_b_pct** | % of Category A orders that also include B |
| **confidence_b_to_a_pct** | % of Category B orders that also include A |
| **lift** | Observed co-occurrence ÷ expected under independence (> 1 = positive) |

</Details>

---

## Top Pairs by Co-Purchase Volume

Highest absolute co-purchase counts — useful for sizing the cross-sell opportunity.

```sql top_pairs_volume
SELECT
  category_a || ' × ' || category_b AS category_pair,
  co_orders,
  support_pct,
  lift
FROM market_basket
ORDER BY co_orders DESC
LIMIT 20
```

<BarChart
  data={top_pairs_volume}
  x="category_pair"
  y="co_orders"
  title="Top 20 Category Pairs by Co-Purchase Volume"
  xAxisTitle="Category Pair"
  yAxisTitle="Co-Purchase Orders"
  swapXY=true
/>

---

## Basket Size Distribution

How many distinct product categories do customers typically include in a single order?

```sql basket_size_dist
SELECT
  cat_count AS categories_in_order,
  COUNT(*) AS order_count,
  ROUND(AVG(order_value), 2) AS avg_order_value
FROM (
  SELECT
    oi.order_id,
    COUNT(DISTINCT p.category) AS cat_count,
    SUM(oi.sale_price) AS order_value
  FROM order_items oi
  JOIN products p ON oi.product_id = p.id
  WHERE oi.status NOT IN ('Cancelled', 'Returned')
  GROUP BY oi.order_id
) AS basket_data
GROUP BY cat_count
ORDER BY cat_count
```

<BarChart
  data={basket_size_dist}
  x="categories_in_order"
  y="order_count"
  title="Order Count by Number of Distinct Categories in Basket"
  xAxisTitle="Distinct Product Categories in Order"
  yAxisTitle="Number of Orders"
/>

<LineChart
  data={basket_size_dist}
  x="categories_in_order"
  y="avg_order_value"
  title="Average Order Value by Basket Diversity"
  xAxisTitle="Distinct Product Categories in Order"
  yAxisTitle="Avg Order Value ($)"
  yFmt="$#,##0"
/>

<Note>
Multi-category baskets consistently yield higher average order values, reinforcing the business case for cross-sell promotions targeting single-category shoppers.
</Note>

---

## Monthly Multi-Category Order Rate

Is cross-category buying increasing or declining over time?

```sql monthly_multi_cat
SELECT
  month,
  COUNT(*) AS total_orders,
  SUM(CASE WHEN cat_count > 1 THEN 1 ELSE 0 END) AS multi_cat_orders,
  COUNT(*) - SUM(CASE WHEN cat_count > 1 THEN 1 ELSE 0 END) AS single_cat_orders,
  ROUND(
    SUM(CASE WHEN cat_count > 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1
  ) AS pct_multi_category,
  ROUND(AVG(order_value), 2) AS avg_order_value
FROM (
  SELECT
    oi.order_id,
    LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
    COUNT(DISTINCT p.category) AS cat_count,
    SUM(oi.sale_price) AS order_value
  FROM order_items oi
  JOIN products p ON oi.product_id = p.id
  WHERE oi.status NOT IN ('Cancelled', 'Returned')
  GROUP BY oi.order_id, LEFT(CAST(oi.created_at AS VARCHAR), 7)
) AS basket_data
GROUP BY month
ORDER BY month
```

<LineChart
  data={monthly_multi_cat}
  x="month"
  y="pct_multi_category"
  title="% of Orders Containing 2+ Categories (Monthly)"
  yAxisTitle="Multi-Category Order Rate (%)"
  xAxisTitle="Month"
/>

<AreaChart
  data={monthly_multi_cat}
  x="month"
  y={["single_cat_orders", "multi_cat_orders"]}
  title="Single-Category vs Multi-Category Orders (Monthly, Stacked)"
  type="stacked"
/>
