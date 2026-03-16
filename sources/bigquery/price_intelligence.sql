-- Price Intelligence: Discount depth and gross margin analysis
-- Pre-aggregated across category × brand × price_tier × order_month × status.
-- price_tier is derived from retail_price brackets.
-- Covers the last 13 months so all statuses (including returns / cancellations)
-- are available for the downstream return-rate analysis.
select
    p.category,
    p.brand,
    case
        when p.retail_price < 25 then '1_Under $25'
        when p.retail_price < 50 then '2_$25-$49'
        when p.retail_price < 100 then '3_$50-$99'
        when p.retail_price < 200 then '4_$100-$199'
        else '5_$200 Plus'
    end as price_tier,
    format_date('%Y-%m', date(oi.created_at)) as order_month,
    oi.status,
    count(*) as item_count,
    round(sum(p.retail_price), 2) as total_retail_value,
    round(sum(oi.sale_price), 2) as total_sale_value,
    round(sum(p.cost), 2) as total_cost,
    round(sum(p.retail_price) - sum(oi.sale_price), 2) as total_discount,
    round(sum(oi.sale_price) - sum(p.cost), 2) as total_gross_profit,
    round(
        safe_divide(sum(p.retail_price) - sum(oi.sale_price), sum(p.retail_price))
        * 100,
        1
    ) as discount_pct,
    round(
        safe_divide(sum(oi.sale_price) - sum(p.cost), sum(oi.sale_price)) * 100, 1
    ) as gp_margin_pct
from `bigquery-public-data.thelook_ecommerce.order_items` oi
join `bigquery-public-data.thelook_ecommerce.products` p on oi.product_id = p.id
where
    p.retail_price > 0
    and p.cost > 0
    and p.cost < p.retail_price
    and oi.created_at
    >= timestamp(date_sub(current_date(), interval 13 month))
group by 1, 2, 3, 4, 5
order by 1, 4
