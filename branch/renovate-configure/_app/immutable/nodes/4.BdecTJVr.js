import{s as Se,d as l,i as f,a as ee,b,c as T,h as Te,e as Q,f as de,g as x,j as g,k as J,l as fe,m as ge,o as Ce,n as Ne,p as ye,q as te}from"../chunks/scheduler.BTKi2gVA.js";import{S as he,i as Ae,d as L,t as E,a as p,c as re,m as w,b as k,e as B,g as ae}from"../chunks/index.CW7jRlKo.js";import{D as Ue,e as $e,s as be,Q as oe,p as De,r as pe,C as Me}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BeLw3fux.js";import{w as Ie}from"../chunks/entry.3tmiRWJG.js";import{h as j,p as Fe}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as He}from"../chunks/stores.CtKfQtAc.js";import{Q as ne}from"../chunks/Chart.DYg1lPej.js";import{B as Le}from"../chunks/BarChart.BlVdwjQv.js";import{B as se}from"../chunks/BigValue.BkOhy3d7.js";import{L as we}from"../chunks/LineChart.DFR7JiKy.js";function ke(s){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:te,p:te,d:te}}function Re(s){let o,a;return o=new ne({props:{queryID:"total_orders",queryResult:s[0]}}),{c(){B(o.$$.fragment)},l(t){k(o.$$.fragment,t)},m(t,u){w(o,t,u),a=!0},p(t,u){const d={};u&1&&(d.queryResult=t[0]),o.$set(d)},i(t){a||(p(o.$$.fragment,t),a=!0)},o(t){E(o.$$.fragment,t),a=!1},d(t){L(o,t)}}}function ve(s){let o,a;return o=new ne({props:{queryID:"monthly_revenue",queryResult:s[1]}}),{c(){B(o.$$.fragment)},l(t){k(o.$$.fragment,t)},m(t,u){w(o,t,u),a=!0},p(t,u){const d={};u&2&&(d.queryResult=t[1]),o.$set(d)},i(t){a||(p(o.$$.fragment,t),a=!0)},o(t){E(o.$$.fragment,t),a=!1},d(t){L(o,t)}}}function Oe(s){let o,a;return o=new ne({props:{queryID:"top_categories",queryResult:s[2]}}),{c(){B(o.$$.fragment)},l(t){k(o.$$.fragment,t)},m(t,u){w(o,t,u),a=!0},p(t,u){const d={};u&4&&(d.queryResult=t[2]),o.$set(d)},i(t){a||(p(o.$$.fragment,t),a=!0)},o(t){E(o.$$.fragment,t),a=!1},d(t){L(o,t)}}}function Be(s){let o,a,t,u,d,n,K='<a href="#e-commerce-dashboard">E-Commerce Dashboard</a>',P,$,z="Overview of orders and revenue from the TheLook e-commerce dataset.",H,S,O,D,C,q,N,y,R,Y='<a href="#revenue-trend">Revenue Trend</a>',G,M,h,A,v,V='<a href="#top-categories">Top Categories</a>',W,I,U,i,F,Z;function Ee(e,r){return ke}let X=Ee()(s),_=s[0]&&Re(s);O=new se({props:{data:s[0],value:"total_orders",title:"Total Orders"}}),C=new se({props:{data:s[0],value:"total_revenue",title:"Total Revenue",fmt:"$#,##0"}}),N=new se({props:{data:s[0],value:"avg_order_value",title:"Avg Order Value",fmt:"$#,##0.00"}});let m=s[1]&&ve(s);h=new we({props:{data:s[1],x:"month",y:"revenue",title:"Monthly Revenue (Last 12 Months)"}});let c=s[2]&&Oe(s);return U=new Le({props:{data:s[2],x:"category",y:"revenue",title:"Revenue by Category (Top 10)"}}),F=new Ue({props:{data:s[2]}}),{c(){o=g(),X.c(),a=J("meta"),t=J("meta"),u=de(),d=g(),n=J("h1"),n.innerHTML=K,P=g(),$=J("p"),$.textContent=z,H=g(),_&&_.c(),S=g(),B(O.$$.fragment),D=g(),B(C.$$.fragment),q=g(),B(N.$$.fragment),y=g(),R=J("h2"),R.innerHTML=Y,G=g(),m&&m.c(),M=g(),B(h.$$.fragment),A=g(),v=J("h2"),v.innerHTML=V,W=g(),c&&c.c(),I=g(),B(U.$$.fragment),i=g(),B(F.$$.fragment),this.h()},l(e){o=T(e);const r=Te("svelte-2igo1p",document.head);X.l(r),a=Q(r,"META",{name:!0,content:!0}),t=Q(r,"META",{name:!0,content:!0}),u=de(),r.forEach(l),d=T(e),n=Q(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),x(n)!=="svelte-1jsp8ur"&&(n.innerHTML=K),P=T(e),$=Q(e,"P",{class:!0,"data-svelte-h":!0}),x($)!=="svelte-4a4s6e"&&($.textContent=z),H=T(e),_&&_.l(e),S=T(e),k(O.$$.fragment,e),D=T(e),k(C.$$.fragment,e),q=T(e),k(N.$$.fragment,e),y=T(e),R=Q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),x(R)!=="svelte-eo4nyf"&&(R.innerHTML=Y),G=T(e),m&&m.l(e),M=T(e),k(h.$$.fragment,e),A=T(e),v=Q(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),x(v)!=="svelte-8rufc3"&&(v.innerHTML=V),W=T(e),c&&c.l(e),I=T(e),k(U.$$.fragment,e),i=T(e),k(F.$$.fragment,e),this.h()},h(){b(a,"name","twitter:card"),b(a,"content","summary_large_image"),b(t,"name","twitter:site"),b(t,"content","@evidence_dev"),b(n,"class","markdown"),b(n,"id","e-commerce-dashboard"),b($,"class","markdown"),b(R,"class","markdown"),b(R,"id","revenue-trend"),b(v,"class","markdown"),b(v,"id","top-categories")},m(e,r){f(e,o,r),X.m(document.head,null),ee(document.head,a),ee(document.head,t),ee(document.head,u),f(e,d,r),f(e,n,r),f(e,P,r),f(e,$,r),f(e,H,r),_&&_.m(e,r),f(e,S,r),w(O,e,r),f(e,D,r),w(C,e,r),f(e,q,r),w(N,e,r),f(e,y,r),f(e,R,r),f(e,G,r),m&&m.m(e,r),f(e,M,r),w(h,e,r),f(e,A,r),f(e,v,r),f(e,W,r),c&&c.m(e,r),f(e,I,r),w(U,e,r),f(e,i,r),w(F,e,r),Z=!0},p(e,[r]){X.p(e,r),e[0]?_?(_.p(e,r),r&1&&p(_,1)):(_=Re(e),_.c(),p(_,1),_.m(S.parentNode,S)):_&&(ae(),E(_,1,1,()=>{_=null}),re());const le={};r&1&&(le.data=e[0]),O.$set(le);const ie={};r&1&&(ie.data=e[0]),C.$set(ie);const ue={};r&1&&(ue.data=e[0]),N.$set(ue),e[1]?m?(m.p(e,r),r&2&&p(m,1)):(m=ve(e),m.c(),p(m,1),m.m(M.parentNode,M)):m&&(ae(),E(m,1,1,()=>{m=null}),re());const _e={};r&2&&(_e.data=e[1]),h.$set(_e),e[2]?c?(c.p(e,r),r&4&&p(c,1)):(c=Oe(e),c.c(),p(c,1),c.m(I.parentNode,I)):c&&(ae(),E(c,1,1,()=>{c=null}),re());const me={};r&4&&(me.data=e[2]),U.$set(me);const ce={};r&4&&(ce.data=e[2]),F.$set(ce)},i(e){Z||(p(_),p(O.$$.fragment,e),p(C.$$.fragment,e),p(N.$$.fragment,e),p(m),p(h.$$.fragment,e),p(c),p(U.$$.fragment,e),p(F.$$.fragment,e),Z=!0)},o(e){E(_),E(O.$$.fragment,e),E(C.$$.fragment,e),E(N.$$.fragment,e),E(m),E(h.$$.fragment,e),E(c),E(U.$$.fragment,e),E(F.$$.fragment,e),Z=!1},d(e){e&&(l(o),l(d),l(n),l(P),l($),l(H),l(S),l(D),l(q),l(y),l(R),l(G),l(M),l(A),l(v),l(W),l(I),l(i)),X.d(e),l(a),l(t),l(u),_&&_.d(e),L(O,e),L(C,e),L(N,e),m&&m.d(e),L(h,e),c&&c.d(e),L(U,e),L(F,e)}}}function qe(s,o,a){let t,u;fe(s,He,i=>a(17,t=i)),fe(s,pe,i=>a(23,u=i));let{data:d}=o,{data:n={},customFormattingSettings:K,__db:P,inputs:$}=d;ge(pe,u="6666cd76f96956469e7be39d750cc7d9",u);let z=$e(Ie($));Ce(z.subscribe(i=>$=i)),Ne(Me,{getCustomFormats:()=>K.customFormats||[]});const H=(i,F)=>Fe(P.query,i,{query_name:F});be(H),t.params,ye(()=>!0);let S={initialData:void 0,initialError:void 0},O=j`SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  ROUND(AVG(sale_price), 2) AS avg_order_value
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')`,D=`SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  ROUND(AVG(sale_price), 2) AS avg_order_value
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')`;n.total_orders_data&&(n.total_orders_data instanceof Error?S.initialError=n.total_orders_data:S.initialData=n.total_orders_data,n.total_orders_columns&&(S.knownColumns=n.total_orders_columns));let C,q=!1;const N=oe.createReactive({callback:i=>{a(0,C=i)},execFn:H},{id:"total_orders",...S});N(D,{noResolve:O,...S}),globalThis[Symbol.for("total_orders")]={get value(){return C}};let y={initialData:void 0,initialError:void 0},R=j`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`,Y=`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`;n.monthly_revenue_data&&(n.monthly_revenue_data instanceof Error?y.initialError=n.monthly_revenue_data:y.initialData=n.monthly_revenue_data,n.monthly_revenue_columns&&(y.knownColumns=n.monthly_revenue_columns));let G,M=!1;const h=oe.createReactive({callback:i=>{a(1,G=i)},execFn:H},{id:"monthly_revenue",...y});h(Y,{noResolve:R,...y}),globalThis[Symbol.for("monthly_revenue")]={get value(){return G}};let A={initialData:void 0,initialError:void 0},v=j`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 10`,V=`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 10`;n.top_categories_data&&(n.top_categories_data instanceof Error?A.initialError=n.top_categories_data:A.initialData=n.top_categories_data,n.top_categories_columns&&(A.knownColumns=n.top_categories_columns));let W,I=!1;const U=oe.createReactive({callback:i=>{a(2,W=i)},execFn:H},{id:"top_categories",...A});return U(V,{noResolve:v,...A}),globalThis[Symbol.for("top_categories")]={get value(){return W}},s.$$set=i=>{"data"in i&&a(3,d=i.data)},s.$$.update=()=>{s.$$.dirty&8&&a(4,{data:n={},customFormattingSettings:K,__db:P}=d,n),s.$$.dirty&16&&De.set(Object.keys(n).length>0),s.$$.dirty&131072&&t.params,s.$$.dirty&480&&(O||!q?O||(N(D,{noResolve:O,...S}),a(8,q=!0)):N(D,{noResolve:O})),s.$$.dirty&7680&&(R||!M?R||(h(Y,{noResolve:R,...y}),a(12,M=!0)):h(Y,{noResolve:R})),s.$$.dirty&122880&&(v||!I?v||(U(V,{noResolve:v,...A}),a(16,I=!0)):U(V,{noResolve:v}))},a(6,O=j`SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  ROUND(AVG(sale_price), 2) AS avg_order_value
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')`),a(7,D=`SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  ROUND(AVG(sale_price), 2) AS avg_order_value
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')`),a(10,R=j`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`),a(11,Y=`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`),a(14,v=j`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 10`),a(15,V=`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 10`),[C,G,W,d,n,S,O,D,q,y,R,Y,M,A,v,V,I,t]}class Ze extends he{constructor(o){super(),Ae(this,o,qe,Be,Se,{data:3})}}export{Ze as component};
