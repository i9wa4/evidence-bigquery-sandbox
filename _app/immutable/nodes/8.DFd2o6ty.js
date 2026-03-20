import{s as pe,d,i as p,a as Z,b as v,c as I,h as Oe,e as j,f as ne,g as X,j as A,k as W,l as le,m as Re,o as Se,n as Ee,p as Te,q as x}from"../chunks/scheduler.CCfxqTH6.js";import{S as Ne,i as Ce,d as G,t as E,a as O,c as ee,m as P,b as J,e as Q,g as te}from"../chunks/index.h6XQUVJ4.js";import{D as re,e as De,s as be,Q as se,p as ye,r as de,C as Ue}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.L9uteW7u.js";import{w as Me}from"../chunks/entry.C_ojv6uL.js";import{h as V,p as ve}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ie}from"../chunks/stores.Dhm3Itfq.js";import{Q as oe}from"../chunks/Chart.D-l9wpc-.js";import{B as Ae}from"../chunks/BarChart.BBk2maKu.js";function $e(i){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:x,p:x,d:x}}function me(i){let o,s;return o=new oe({props:{queryID:"order_status",queryResult:i[0]}}),{c(){Q(o.$$.fragment)},l(t){J(o.$$.fragment,t)},m(t,u){P(o,t,u),s=!0},p(t,u){const m={};u&1&&(m.queryResult=t[0]),o.$set(m)},i(t){s||(O(o.$$.fragment,t),s=!0)},o(t){E(o.$$.fragment,t),s=!1},d(t){G(o,t)}}}function ce(i){let o,s;return o=new oe({props:{queryID:"top_customers",queryResult:i[1]}}),{c(){Q(o.$$.fragment)},l(t){J(o.$$.fragment,t)},m(t,u){P(o,t,u),s=!0},p(t,u){const m={};u&2&&(m.queryResult=t[1]),o.$set(m)},i(t){s||(O(o.$$.fragment,t),s=!0)},o(t){E(o.$$.fragment,t),s=!1},d(t){G(o,t)}}}function fe(i){let o,s;return o=new oe({props:{queryID:"recent_orders",queryResult:i[2]}}),{c(){Q(o.$$.fragment)},l(t){J(o.$$.fragment,t)},m(t,u){P(o,t,u),s=!0},p(t,u){const m={};u&4&&(m.queryResult=t[2]),o.$set(m)},i(t){s||(O(o.$$.fragment,t),s=!0)},o(t){E(o.$$.fragment,t),s=!1},d(t){G(o,t)}}}function he(i){let o,s,t,u,m,a,z='<a href="#order--customer-detail">Order &amp; Customer Detail</a>',Y,L,$,H='<a href="#order-status-breakdown">Order Status Breakdown</a>',T,f,h,N,g,R,k='<a href="#top-customers-by-revenue">Top Customers by Revenue</a>',C,D,b,B,S,w='<a href="#recent-orders">Recent Orders</a>',y,U,M,F;function K(e,r){return $e}let q=K()(i),_=i[0]&&me(i);f=new Ae({props:{data:i[0],x:"status",y:"orders",title:"Orders by Status"}}),N=new re({props:{data:i[0]}});let n=i[1]&&ce(i);b=new re({props:{data:i[1]}});let l=i[2]&&fe(i);return M=new re({props:{data:i[2]}}),{c(){o=A(),q.c(),s=W("meta"),t=W("meta"),u=ne(),m=A(),a=W("h1"),a.innerHTML=z,Y=A(),_&&_.c(),L=A(),$=W("h2"),$.innerHTML=H,T=A(),Q(f.$$.fragment),h=A(),Q(N.$$.fragment),g=A(),R=W("h2"),R.innerHTML=k,C=A(),n&&n.c(),D=A(),Q(b.$$.fragment),B=A(),S=W("h2"),S.innerHTML=w,y=A(),l&&l.c(),U=A(),Q(M.$$.fragment),this.h()},l(e){o=I(e);const r=Oe("svelte-2igo1p",document.head);q.l(r),s=j(r,"META",{name:!0,content:!0}),t=j(r,"META",{name:!0,content:!0}),u=ne(),r.forEach(d),m=I(e),a=j(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),X(a)!=="svelte-1d3x1cd"&&(a.innerHTML=z),Y=I(e),_&&_.l(e),L=I(e),$=j(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),X($)!=="svelte-1vvjldz"&&($.innerHTML=H),T=I(e),J(f.$$.fragment,e),h=I(e),J(N.$$.fragment,e),g=I(e),R=j(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),X(R)!=="svelte-1mk0pvx"&&(R.innerHTML=k),C=I(e),n&&n.l(e),D=I(e),J(b.$$.fragment,e),B=I(e),S=j(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),X(S)!=="svelte-1lirdji"&&(S.innerHTML=w),y=I(e),l&&l.l(e),U=I(e),J(M.$$.fragment,e),this.h()},h(){v(s,"name","twitter:card"),v(s,"content","summary_large_image"),v(t,"name","twitter:site"),v(t,"content","@evidence_dev"),v(a,"class","markdown"),v(a,"id","order--customer-detail"),v($,"class","markdown"),v($,"id","order-status-breakdown"),v(R,"class","markdown"),v(R,"id","top-customers-by-revenue"),v(S,"class","markdown"),v(S,"id","recent-orders")},m(e,r){p(e,o,r),q.m(document.head,null),Z(document.head,s),Z(document.head,t),Z(document.head,u),p(e,m,r),p(e,a,r),p(e,Y,r),_&&_.m(e,r),p(e,L,r),p(e,$,r),p(e,T,r),P(f,e,r),p(e,h,r),P(N,e,r),p(e,g,r),p(e,R,r),p(e,C,r),n&&n.m(e,r),p(e,D,r),P(b,e,r),p(e,B,r),p(e,S,r),p(e,y,r),l&&l.m(e,r),p(e,U,r),P(M,e,r),F=!0},p(e,[r]){q.p(e,r),e[0]?_?(_.p(e,r),r&1&&O(_,1)):(_=me(e),_.c(),O(_,1),_.m(L.parentNode,L)):_&&(te(),E(_,1,1,()=>{_=null}),ee());const ae={};r&1&&(ae.data=e[0]),f.$set(ae);const ie={};r&1&&(ie.data=e[0]),N.$set(ie),e[1]?n?(n.p(e,r),r&2&&O(n,1)):(n=ce(e),n.c(),O(n,1),n.m(D.parentNode,D)):n&&(te(),E(n,1,1,()=>{n=null}),ee());const ue={};r&2&&(ue.data=e[1]),b.$set(ue),e[2]?l?(l.p(e,r),r&4&&O(l,1)):(l=fe(e),l.c(),O(l,1),l.m(U.parentNode,U)):l&&(te(),E(l,1,1,()=>{l=null}),ee());const _e={};r&4&&(_e.data=e[2]),M.$set(_e)},i(e){F||(O(_),O(f.$$.fragment,e),O(N.$$.fragment,e),O(n),O(b.$$.fragment,e),O(l),O(M.$$.fragment,e),F=!0)},o(e){E(_),E(f.$$.fragment,e),E(N.$$.fragment,e),E(n),E(b.$$.fragment,e),E(l),E(M.$$.fragment,e),F=!1},d(e){e&&(d(o),d(m),d(a),d(Y),d(L),d($),d(T),d(h),d(g),d(R),d(C),d(D),d(B),d(S),d(y),d(U)),q.d(e),d(s),d(t),d(u),_&&_.d(e),G(f,e),G(N,e),n&&n.d(e),G(b,e),l&&l.d(e),G(M,e)}}}function ke(i,o,s){let t,u;le(i,Ie,c=>s(17,t=c)),le(i,de,c=>s(23,u=c));let{data:m}=o,{data:a={},customFormattingSettings:z,__db:Y,inputs:L}=m;Re(de,u="cb3f00d9960e8d720ffbcb4cb9475314",u);let $=De(Me(L));Se($.subscribe(c=>L=c)),Ee(Ue,{getCustomFormats:()=>z.customFormats||[]});const H=(c,q)=>ve(Y.query,c,{query_name:q});be(H),t.params,Te(()=>!0);let T={initialData:void 0,initialError:void 0},f=V`SELECT
  status,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
GROUP BY status
ORDER BY orders DESC`,h=`SELECT
  status,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
GROUP BY status
ORDER BY orders DESC`;a.order_status_data&&(a.order_status_data instanceof Error?T.initialError=a.order_status_data:T.initialData=a.order_status_data,a.order_status_columns&&(T.knownColumns=a.order_status_columns));let N,g=!1;const R=se.createReactive({callback:c=>{s(0,N=c)},execFn:H},{id:"order_status",...T});R(h,{noResolve:f,...T}),globalThis[Symbol.for("order_status")]={get value(){return N}};let k={initialData:void 0,initialError:void 0},C=V`SELECT
  u.id AS user_id,
  u.email,
  u.country,
  COUNT(oi.order_id) AS total_orders,
  ROUND(SUM(oi.sale_price), 2) AS total_spent
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.id, u.email, u.country
ORDER BY total_spent DESC
LIMIT 20`,D=`SELECT
  u.id AS user_id,
  u.email,
  u.country,
  COUNT(oi.order_id) AS total_orders,
  ROUND(SUM(oi.sale_price), 2) AS total_spent
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.id, u.email, u.country
ORDER BY total_spent DESC
LIMIT 20`;a.top_customers_data&&(a.top_customers_data instanceof Error?k.initialError=a.top_customers_data:k.initialData=a.top_customers_data,a.top_customers_columns&&(k.knownColumns=a.top_customers_columns));let b,B=!1;const S=se.createReactive({callback:c=>{s(1,b=c)},execFn:H},{id:"top_customers",...k});S(D,{noResolve:C,...k}),globalThis[Symbol.for("top_customers")]={get value(){return b}};let w={initialData:void 0,initialError:void 0},y=V`SELECT
  o.order_id,
  u.email,
  o.status,
  o.num_of_item,
  ROUND(SUM(oi.sale_price), 2) AS order_value,
  DATE(o.created_at) AS order_date
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN users u ON o.user_id = u.id
GROUP BY o.order_id, u.email, o.status, o.num_of_item, o.created_at
ORDER BY o.created_at DESC
LIMIT 50`,U=`SELECT
  o.order_id,
  u.email,
  o.status,
  o.num_of_item,
  ROUND(SUM(oi.sale_price), 2) AS order_value,
  DATE(o.created_at) AS order_date
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN users u ON o.user_id = u.id
GROUP BY o.order_id, u.email, o.status, o.num_of_item, o.created_at
ORDER BY o.created_at DESC
LIMIT 50`;a.recent_orders_data&&(a.recent_orders_data instanceof Error?w.initialError=a.recent_orders_data:w.initialData=a.recent_orders_data,a.recent_orders_columns&&(w.knownColumns=a.recent_orders_columns));let M,F=!1;const K=se.createReactive({callback:c=>{s(2,M=c)},execFn:H},{id:"recent_orders",...w});return K(U,{noResolve:y,...w}),globalThis[Symbol.for("recent_orders")]={get value(){return M}},i.$$set=c=>{"data"in c&&s(3,m=c.data)},i.$$.update=()=>{i.$$.dirty&8&&s(4,{data:a={},customFormattingSettings:z,__db:Y}=m,a),i.$$.dirty&16&&ye.set(Object.keys(a).length>0),i.$$.dirty&131072&&t.params,i.$$.dirty&480&&(f||!g?f||(R(h,{noResolve:f,...T}),s(8,g=!0)):R(h,{noResolve:f})),i.$$.dirty&7680&&(C||!B?C||(S(D,{noResolve:C,...k}),s(12,B=!0)):S(D,{noResolve:C})),i.$$.dirty&122880&&(y||!F?y||(K(U,{noResolve:y,...w}),s(16,F=!0)):K(U,{noResolve:y}))},s(6,f=V`SELECT
  status,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
GROUP BY status
ORDER BY orders DESC`),s(7,h=`SELECT
  status,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
GROUP BY status
ORDER BY orders DESC`),s(10,C=V`SELECT
  u.id AS user_id,
  u.email,
  u.country,
  COUNT(oi.order_id) AS total_orders,
  ROUND(SUM(oi.sale_price), 2) AS total_spent
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.id, u.email, u.country
ORDER BY total_spent DESC
LIMIT 20`),s(11,D=`SELECT
  u.id AS user_id,
  u.email,
  u.country,
  COUNT(oi.order_id) AS total_orders,
  ROUND(SUM(oi.sale_price), 2) AS total_spent
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.id, u.email, u.country
ORDER BY total_spent DESC
LIMIT 20`),s(14,y=V`SELECT
  o.order_id,
  u.email,
  o.status,
  o.num_of_item,
  ROUND(SUM(oi.sale_price), 2) AS order_value,
  DATE(o.created_at) AS order_date
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN users u ON o.user_id = u.id
GROUP BY o.order_id, u.email, o.status, o.num_of_item, o.created_at
ORDER BY o.created_at DESC
LIMIT 50`),s(15,U=`SELECT
  o.order_id,
  u.email,
  o.status,
  o.num_of_item,
  ROUND(SUM(oi.sale_price), 2) AS order_value,
  DATE(o.created_at) AS order_date
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN users u ON o.user_id = u.id
GROUP BY o.order_id, u.email, o.status, o.num_of_item, o.created_at
ORDER BY o.created_at DESC
LIMIT 50`),[N,b,M,m,a,T,f,h,g,k,C,D,B,w,y,U,F,t]}class Ge extends Ne{constructor(o){super(),Ce(this,o,ke,he,pe,{data:3})}}export{Ge as component};
