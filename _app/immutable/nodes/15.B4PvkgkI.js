import{s as He,d as p,i as c,a as be,b as D,c as b,h as qe,e as re,f as Ue,g as _e,j as O,k as ae,l as Ie,m as Ve,o as he,n as Pe,p as Je,q as Oe}from"../chunks/scheduler.BTKi2gVA.js";import{S as We,i as Qe,d as G,t as m,a as _,c as ue,m as w,b as B,e as k,g as me}from"../chunks/index.CW7jRlKo.js";import{D as $e,e as Xe,s as je,Q as de,p as Ke,r as Me,C as ze}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BXrhxSIA.js";import{w as Ze}from"../chunks/entry.D0SM-JIV.js";import{h as K,p as xe}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as et}from"../chunks/stores.0QfipIVy.js";import{Q as fe}from"../chunks/Chart.DJzWS4cJ.js";import{B as Le}from"../chunks/BarChart.BenkSuuc.js";import{B as Re}from"../chunks/BigValue.D-qOGh1S.js";function tt(o){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:Oe,p:Oe,d:Oe}}function Fe(o){let i,a;return i=new fe({props:{queryID:"product_summary",queryResult:o[0]}}),{c(){k(i.$$.fragment)},l(t){B(i.$$.fragment,t)},m(t,s){w(i,t,s),a=!0},p(t,s){const u={};s[0]&1&&(u.queryResult=t[0]),i.$set(u)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){m(i.$$.fragment,t),a=!1},d(t){G(i,t)}}}function Ge(o){let i,a;return i=new fe({props:{queryID:"revenue_by_brand",queryResult:o[1]}}),{c(){k(i.$$.fragment)},l(t){B(i.$$.fragment,t)},m(t,s){w(i,t,s),a=!0},p(t,s){const u={};s[0]&2&&(u.queryResult=t[1]),i.$set(u)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){m(i.$$.fragment,t),a=!1},d(t){G(i,t)}}}function we(o){let i,a;return i=new fe({props:{queryID:"category_margin",queryResult:o[2]}}),{c(){k(i.$$.fragment)},l(t){B(i.$$.fragment,t)},m(t,s){w(i,t,s),a=!0},p(t,s){const u={};s[0]&4&&(u.queryResult=t[2]),i.$set(u)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){m(i.$$.fragment,t),a=!1},d(t){G(i,t)}}}function Be(o){let i,a;return i=new fe({props:{queryID:"price_by_category",queryResult:o[3]}}),{c(){k(i.$$.fragment)},l(t){B(i.$$.fragment,t)},m(t,s){w(i,t,s),a=!0},p(t,s){const u={};s[0]&8&&(u.queryResult=t[3]),i.$set(u)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){m(i.$$.fragment,t),a=!1},d(t){G(i,t)}}}function ke(o){let i,a;return i=new fe({props:{queryID:"top_products",queryResult:o[4]}}),{c(){k(i.$$.fragment)},l(t){B(i.$$.fragment,t)},m(t,s){w(i,t,s),a=!0},p(t,s){const u={};s[0]&16&&(u.queryResult=t[4]),i.$set(u)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){m(i.$$.fragment,t),a=!1},d(t){G(i,t)}}}function rt(o){let i,a,t,s,u,n,le='<a href="#product--brand-analysis">Product &amp; Brand Analysis</a>',ie,V,ge="Analysis of products and brands from the TheLook e-commerce dataset.",h,C,v,P,Y,z,H,q,S,J,$,oe='<a href="#revenue-by-brand">Revenue by Brand</a>',Z,A,N,W,M,ne='<a href="#category-profit-margin">Category Profit Margin</a>',x,U,T,Q,L,pe='<a href="#price-distribution-by-category">Price Distribution by Category</a>',ee,I,E,X,F,se='<a href="#top-products-by-revenue">Top Products by Revenue</a>',te,l,j,ye;function Ye(e,r){return tt}let ce=Ye()(o),d=o[0]&&Fe(o);v=new Re({props:{data:o[0],value:"total_products",title:"Total Products"}}),Y=new Re({props:{data:o[0],value:"total_brands",title:"Total Brands"}}),H=new Re({props:{data:o[0],value:"total_categories",title:"Total Categories"}}),S=new Re({props:{data:o[0],value:"avg_retail_price",title:"Avg Retail Price",fmt:"$#,##0.00"}});let f=o[1]&&Ge(o);N=new Le({props:{data:o[1],x:"brand",y:"revenue",title:"Top 15 Brands by Revenue"}});let g=o[2]&&we(o);T=new $e({props:{data:o[2]}});let y=o[3]&&Be(o);E=new Le({props:{data:o[3],x:"category",y:"avg_price",title:"Average Retail Price by Category"}});let R=o[4]&&ke(o);return j=new $e({props:{data:o[4]}}),{c(){i=O(),ce.c(),a=ae("meta"),t=ae("meta"),s=Ue(),u=O(),n=ae("h1"),n.innerHTML=le,ie=O(),V=ae("p"),V.textContent=ge,h=O(),d&&d.c(),C=O(),k(v.$$.fragment),P=O(),k(Y.$$.fragment),z=O(),k(H.$$.fragment),q=O(),k(S.$$.fragment),J=O(),$=ae("h2"),$.innerHTML=oe,Z=O(),f&&f.c(),A=O(),k(N.$$.fragment),W=O(),M=ae("h2"),M.innerHTML=ne,x=O(),g&&g.c(),U=O(),k(T.$$.fragment),Q=O(),L=ae("h2"),L.innerHTML=pe,ee=O(),y&&y.c(),I=O(),k(E.$$.fragment),X=O(),F=ae("h2"),F.innerHTML=se,te=O(),R&&R.c(),l=O(),k(j.$$.fragment),this.h()},l(e){i=b(e);const r=qe("svelte-2igo1p",document.head);ce.l(r),a=re(r,"META",{name:!0,content:!0}),t=re(r,"META",{name:!0,content:!0}),s=Ue(),r.forEach(p),u=b(e),n=re(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),_e(n)!=="svelte-1v9vchg"&&(n.innerHTML=le),ie=b(e),V=re(e,"P",{class:!0,"data-svelte-h":!0}),_e(V)!=="svelte-wjhvyo"&&(V.textContent=ge),h=b(e),d&&d.l(e),C=b(e),B(v.$$.fragment,e),P=b(e),B(Y.$$.fragment,e),z=b(e),B(H.$$.fragment,e),q=b(e),B(S.$$.fragment,e),J=b(e),$=re(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_e($)!=="svelte-14uocb0"&&($.innerHTML=oe),Z=b(e),f&&f.l(e),A=b(e),B(N.$$.fragment,e),W=b(e),M=re(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_e(M)!=="svelte-18pc990"&&(M.innerHTML=ne),x=b(e),g&&g.l(e),U=b(e),B(T.$$.fragment,e),Q=b(e),L=re(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_e(L)!=="svelte-1b3qpea"&&(L.innerHTML=pe),ee=b(e),y&&y.l(e),I=b(e),B(E.$$.fragment,e),X=b(e),F=re(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_e(F)!=="svelte-15pwx3s"&&(F.innerHTML=se),te=b(e),R&&R.l(e),l=b(e),B(j.$$.fragment,e),this.h()},h(){D(a,"name","twitter:card"),D(a,"content","summary_large_image"),D(t,"name","twitter:site"),D(t,"content","@evidence_dev"),D(n,"class","markdown"),D(n,"id","product--brand-analysis"),D(V,"class","markdown"),D($,"class","markdown"),D($,"id","revenue-by-brand"),D(M,"class","markdown"),D(M,"id","category-profit-margin"),D(L,"class","markdown"),D(L,"id","price-distribution-by-category"),D(F,"class","markdown"),D(F,"id","top-products-by-revenue")},m(e,r){c(e,i,r),ce.m(document.head,null),be(document.head,a),be(document.head,t),be(document.head,s),c(e,u,r),c(e,n,r),c(e,ie,r),c(e,V,r),c(e,h,r),d&&d.m(e,r),c(e,C,r),w(v,e,r),c(e,P,r),w(Y,e,r),c(e,z,r),w(H,e,r),c(e,q,r),w(S,e,r),c(e,J,r),c(e,$,r),c(e,Z,r),f&&f.m(e,r),c(e,A,r),w(N,e,r),c(e,W,r),c(e,M,r),c(e,x,r),g&&g.m(e,r),c(e,U,r),w(T,e,r),c(e,Q,r),c(e,L,r),c(e,ee,r),y&&y.m(e,r),c(e,I,r),w(E,e,r),c(e,X,r),c(e,F,r),c(e,te,r),R&&R.m(e,r),c(e,l,r),w(j,e,r),ye=!0},p(e,r){ce.p(e,r),e[0]?d?(d.p(e,r),r[0]&1&&_(d,1)):(d=Fe(e),d.c(),_(d,1),d.m(C.parentNode,C)):d&&(me(),m(d,1,1,()=>{d=null}),ue());const ve={};r[0]&1&&(ve.data=e[0]),v.$set(ve);const Se={};r[0]&1&&(Se.data=e[0]),Y.$set(Se);const Ne={};r[0]&1&&(Ne.data=e[0]),H.$set(Ne);const Te={};r[0]&1&&(Te.data=e[0]),S.$set(Te),e[1]?f?(f.p(e,r),r[0]&2&&_(f,1)):(f=Ge(e),f.c(),_(f,1),f.m(A.parentNode,A)):f&&(me(),m(f,1,1,()=>{f=null}),ue());const Ee={};r[0]&2&&(Ee.data=e[1]),N.$set(Ee),e[2]?g?(g.p(e,r),r[0]&4&&_(g,1)):(g=we(e),g.c(),_(g,1),g.m(U.parentNode,U)):g&&(me(),m(g,1,1,()=>{g=null}),ue());const De={};r[0]&4&&(De.data=e[2]),T.$set(De),e[3]?y?(y.p(e,r),r[0]&8&&_(y,1)):(y=Be(e),y.c(),_(y,1),y.m(I.parentNode,I)):y&&(me(),m(y,1,1,()=>{y=null}),ue());const Ce={};r[0]&8&&(Ce.data=e[3]),E.$set(Ce),e[4]?R?(R.p(e,r),r[0]&16&&_(R,1)):(R=ke(e),R.c(),_(R,1),R.m(l.parentNode,l)):R&&(me(),m(R,1,1,()=>{R=null}),ue());const Ae={};r[0]&16&&(Ae.data=e[4]),j.$set(Ae)},i(e){ye||(_(d),_(v.$$.fragment,e),_(Y.$$.fragment,e),_(H.$$.fragment,e),_(S.$$.fragment,e),_(f),_(N.$$.fragment,e),_(g),_(T.$$.fragment,e),_(y),_(E.$$.fragment,e),_(R),_(j.$$.fragment,e),ye=!0)},o(e){m(d),m(v.$$.fragment,e),m(Y.$$.fragment,e),m(H.$$.fragment,e),m(S.$$.fragment,e),m(f),m(N.$$.fragment,e),m(g),m(T.$$.fragment,e),m(y),m(E.$$.fragment,e),m(R),m(j.$$.fragment,e),ye=!1},d(e){e&&(p(i),p(u),p(n),p(ie),p(V),p(h),p(C),p(P),p(z),p(q),p(J),p($),p(Z),p(A),p(W),p(M),p(x),p(U),p(Q),p(L),p(ee),p(I),p(X),p(F),p(te),p(l)),ce.d(e),p(a),p(t),p(s),d&&d.d(e),G(v,e),G(Y,e),G(H,e),G(S,e),f&&f.d(e),G(N,e),g&&g.d(e),G(T,e),y&&y.d(e),G(E,e),R&&R.d(e),G(j,e)}}}function at(o,i,a){let t,s;Ie(o,et,l=>a(27,t=l)),Ie(o,Me,l=>a(33,s=l));let{data:u}=i,{data:n={},customFormattingSettings:le,__db:ie,inputs:V}=u;Ve(Me,s="51679ce3738a69b94d40325e0e3d57db",s);let ge=Xe(Ze(V));he(ge.subscribe(l=>V=l)),Pe(ze,{getCustomFormats:()=>le.customFormats||[]});const h=(l,j)=>xe(ie.query,l,{query_name:j});je(h),t.params,Je(()=>!0);let C={initialData:void 0,initialError:void 0},v=K`SELECT
  COUNT(DISTINCT p.id) AS total_products,
  COUNT(DISTINCT p.brand) AS total_brands,
  COUNT(DISTINCT p.category) AS total_categories,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price
FROM products p`,P=`SELECT
  COUNT(DISTINCT p.id) AS total_products,
  COUNT(DISTINCT p.brand) AS total_brands,
  COUNT(DISTINCT p.category) AS total_categories,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price
FROM products p`;n.product_summary_data&&(n.product_summary_data instanceof Error?C.initialError=n.product_summary_data:C.initialData=n.product_summary_data,n.product_summary_columns&&(C.knownColumns=n.product_summary_columns));let Y,z=!1;const H=de.createReactive({callback:l=>{a(0,Y=l)},execFn:h},{id:"product_summary",...C});H(P,{noResolve:v,...C}),globalThis[Symbol.for("product_summary")]={get value(){return Y}};let q={initialData:void 0,initialError:void 0},S=K`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 15`,J=`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 15`;n.revenue_by_brand_data&&(n.revenue_by_brand_data instanceof Error?q.initialError=n.revenue_by_brand_data:q.initialData=n.revenue_by_brand_data,n.revenue_by_brand_columns&&(q.knownColumns=n.revenue_by_brand_columns));let $,oe=!1;const Z=de.createReactive({callback:l=>{a(1,$=l)},execFn:h},{id:"revenue_by_brand",...q});Z(J,{noResolve:S,...q}),globalThis[Symbol.for("revenue_by_brand")]={get value(){return $}};let A={initialData:void 0,initialError:void 0},N=K`SELECT
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(AVG(p.cost), 2) AS avg_cost,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin,
  ROUND(AVG((p.retail_price - p.cost) / NULLIF(p.retail_price, 0)) * 100, 1) AS margin_pct
FROM products p
GROUP BY p.category
ORDER BY avg_margin DESC`,W=`SELECT
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(AVG(p.cost), 2) AS avg_cost,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin,
  ROUND(AVG((p.retail_price - p.cost) / NULLIF(p.retail_price, 0)) * 100, 1) AS margin_pct
FROM products p
GROUP BY p.category
ORDER BY avg_margin DESC`;n.category_margin_data&&(n.category_margin_data instanceof Error?A.initialError=n.category_margin_data:A.initialData=n.category_margin_data,n.category_margin_columns&&(A.knownColumns=n.category_margin_columns));let M,ne=!1;const x=de.createReactive({callback:l=>{a(2,M=l)},execFn:h},{id:"category_margin",...A});x(W,{noResolve:N,...A}),globalThis[Symbol.for("category_margin")]={get value(){return M}};let U={initialData:void 0,initialError:void 0},T=K`SELECT
  p.category,
  ROUND(MIN(p.retail_price), 2) AS min_price,
  ROUND(AVG(p.retail_price), 2) AS avg_price,
  ROUND(MAX(p.retail_price), 2) AS max_price
FROM products p
GROUP BY p.category
ORDER BY avg_price DESC`,Q=`SELECT
  p.category,
  ROUND(MIN(p.retail_price), 2) AS min_price,
  ROUND(AVG(p.retail_price), 2) AS avg_price,
  ROUND(MAX(p.retail_price), 2) AS max_price
FROM products p
GROUP BY p.category
ORDER BY avg_price DESC`;n.price_by_category_data&&(n.price_by_category_data instanceof Error?U.initialError=n.price_by_category_data:U.initialData=n.price_by_category_data,n.price_by_category_columns&&(U.knownColumns=n.price_by_category_columns));let L,pe=!1;const ee=de.createReactive({callback:l=>{a(3,L=l)},execFn:h},{id:"price_by_category",...U});ee(Q,{noResolve:T,...U}),globalThis[Symbol.for("price_by_category")]={get value(){return L}};let I={initialData:void 0,initialError:void 0},E=K`SELECT
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
LIMIT 20`,X=`SELECT
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
LIMIT 20`;n.top_products_data&&(n.top_products_data instanceof Error?I.initialError=n.top_products_data:I.initialData=n.top_products_data,n.top_products_columns&&(I.knownColumns=n.top_products_columns));let F,se=!1;const te=de.createReactive({callback:l=>{a(4,F=l)},execFn:h},{id:"top_products",...I});return te(X,{noResolve:E,...I}),globalThis[Symbol.for("top_products")]={get value(){return F}},o.$$set=l=>{"data"in l&&a(5,u=l.data)},o.$$.update=()=>{o.$$.dirty[0]&32&&a(6,{data:n={},customFormattingSettings:le,__db:ie}=u,n),o.$$.dirty[0]&64&&Ke.set(Object.keys(n).length>0),o.$$.dirty[0]&134217728&&t.params,o.$$.dirty[0]&1920&&(v||!z?v||(H(P,{noResolve:v,...C}),a(10,z=!0)):H(P,{noResolve:v})),o.$$.dirty[0]&30720&&(S||!oe?S||(Z(J,{noResolve:S,...q}),a(14,oe=!0)):Z(J,{noResolve:S})),o.$$.dirty[0]&491520&&(N||!ne?N||(x(W,{noResolve:N,...A}),a(18,ne=!0)):x(W,{noResolve:N})),o.$$.dirty[0]&7864320&&(T||!pe?T||(ee(Q,{noResolve:T,...U}),a(22,pe=!0)):ee(Q,{noResolve:T})),o.$$.dirty[0]&125829120&&(E||!se?E||(te(X,{noResolve:E,...I}),a(26,se=!0)):te(X,{noResolve:E}))},a(8,v=K`SELECT
  COUNT(DISTINCT p.id) AS total_products,
  COUNT(DISTINCT p.brand) AS total_brands,
  COUNT(DISTINCT p.category) AS total_categories,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price
FROM products p`),a(9,P=`SELECT
  COUNT(DISTINCT p.id) AS total_products,
  COUNT(DISTINCT p.brand) AS total_brands,
  COUNT(DISTINCT p.category) AS total_categories,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price
FROM products p`),a(12,S=K`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 15`),a(13,J=`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 15`),a(16,N=K`SELECT
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(AVG(p.cost), 2) AS avg_cost,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin,
  ROUND(AVG((p.retail_price - p.cost) / NULLIF(p.retail_price, 0)) * 100, 1) AS margin_pct
FROM products p
GROUP BY p.category
ORDER BY avg_margin DESC`),a(17,W=`SELECT
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(AVG(p.cost), 2) AS avg_cost,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin,
  ROUND(AVG((p.retail_price - p.cost) / NULLIF(p.retail_price, 0)) * 100, 1) AS margin_pct
FROM products p
GROUP BY p.category
ORDER BY avg_margin DESC`),a(20,T=K`SELECT
  p.category,
  ROUND(MIN(p.retail_price), 2) AS min_price,
  ROUND(AVG(p.retail_price), 2) AS avg_price,
  ROUND(MAX(p.retail_price), 2) AS max_price
FROM products p
GROUP BY p.category
ORDER BY avg_price DESC`),a(21,Q=`SELECT
  p.category,
  ROUND(MIN(p.retail_price), 2) AS min_price,
  ROUND(AVG(p.retail_price), 2) AS avg_price,
  ROUND(MAX(p.retail_price), 2) AS max_price
FROM products p
GROUP BY p.category
ORDER BY avg_price DESC`),a(24,E=K`SELECT
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
LIMIT 20`),a(25,X=`SELECT
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
LIMIT 20`),[Y,$,M,L,F,u,n,C,v,P,z,q,S,J,oe,A,N,W,ne,U,T,Q,pe,I,E,X,se,t]}class dt extends We{constructor(i){super(),Qe(this,i,at,rt,He,{data:5},null,[-1,-1])}}export{dt as component};
