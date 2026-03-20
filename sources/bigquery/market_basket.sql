-- Market Basket Analysis: Category co-purchase association rules
-- Identifies which product categories are most often purchased together
-- in the same order, and quantifies the relationships with standard
-- association-rule metrics: support, confidence, and lift.
-- Covers the last 13 months (aligned with order_items/price_intelligence).
with
    -- One row per (order_id, category) — deduplicated so that buying two
    -- items in the same category within one order counts only once.
    order_categories as (
        select distinct oi.order_id, p.category
        from `bigquery-public-data.thelook_ecommerce.order_items` oi
        join `bigquery-public-data.thelook_ecommerce.products` p on oi.product_id = p.id
        where
            oi.status not in ('Cancelled', 'Returned')
            and oi.created_at >= timestamp(date_sub(current_date(), interval 13 month))
    ),

    -- Total distinct orders in the window (denominator for support)
    total_orders as (select count(distinct order_id) as n from order_categories),

    -- Per-category order counts (for support and confidence calculations)
    category_counts as (
        select category, count(distinct order_id) as cat_orders
        from order_categories
        group by category
    ),

    -- Ordered pairs that appear in the same order.
    -- a.category < b.category ensures each pair is counted exactly once.
    category_pairs as (
        select
            a.category as category_a,
            b.category as category_b,
            count(distinct a.order_id) as co_orders
        from order_categories a
        join order_categories b on a.order_id = b.order_id and a.category < b.category
        group by a.category, b.category
    )

select
    cp.category_a,
    cp.category_b,
    cp.co_orders,
    ca.cat_orders as orders_a,
    cb.cat_orders as orders_b,
    tot.n as total_orders,
    -- Support: fraction of all orders containing both categories (%)
    round(cp.co_orders / tot.n * 100, 2) as support_pct,
    -- Confidence A→B: given an order has A, probability it also has B (%)
    round(cp.co_orders / ca.cat_orders * 100, 2) as confidence_a_to_b_pct,
    -- Confidence B→A: given an order has B, probability it also has A (%)
    round(cp.co_orders / cb.cat_orders * 100, 2) as confidence_b_to_a_pct,
    -- Lift: ratio of observed co-occurrence to expected under independence.
    -- Lift > 1 → bought together more often than chance; < 1 → negative affinity.
    round(
        safe_divide(
            cast(cp.co_orders as float64) * cast(tot.n as float64),
            cast(ca.cat_orders as float64) * cast(cb.cat_orders as float64)
        ),
        2
    ) as lift
from category_pairs cp
join category_counts ca on cp.category_a = ca.category
join category_counts cb on cp.category_b = cb.category
cross join total_orders tot
order by cp.co_orders desc
