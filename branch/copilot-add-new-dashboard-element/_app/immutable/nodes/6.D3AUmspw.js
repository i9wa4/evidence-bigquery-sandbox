import{s as lt,d as n,i as l,a as Fe,b as g,c as f,h as mt,e as _e,f as Ze,g as Re,j as T,k as le,l as xe,m as ct,o as dt,n as ft,p as Tt,q as he}from"../chunks/scheduler.Bji99VEu.js";import{S as Nt,i as yt,d as I,t as m,a,c as Ie,m as E,b,e as v,g as Ee}from"../chunks/index.IyYDGYad.js";import{D as et,e as St,s as Ot,Q as be,p as pt,r as tt,C as Ct}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DKJfud4S.js";import{w as Rt}from"../chunks/entry.BZ94y4ZJ.js";import{h as F,p as gt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as It}from"../chunks/stores.BHw7czz3.js";import{Q as ve}from"../chunks/Chart.mF1uiWwl.js";import{A as Et}from"../chunks/AreaChart.soC5yGaG.js";import{B as He}from"../chunks/BarChart.BDNlmo6a.js";import{B as ke}from"../chunks/BigValue.C3TLhxuB.js";import{H as bt}from"../chunks/Histogram.BeQXYNNx.js";import{S as vt}from"../chunks/ScatterPlot.BJXuR-t8.js";function Dt(i){return{c(){this.h()},l(u){this.h()},h(){document.title="Evidence"},m:he,p:he,d:he}}function rt(i){let u,s;return u=new ve({props:{queryID:"customer_kpis",queryResult:i[0]}}),{c(){v(u.$$.fragment)},l(t){b(u.$$.fragment,t)},m(t,_){E(u,t,_),s=!0},p(t,_){const c={};_[0]&1&&(c.queryResult=t[0]),u.$set(c)},i(t){s||(a(u.$$.fragment,t),s=!0)},o(t){m(u.$$.fragment,t),s=!1},d(t){I(u,t)}}}function st(i){let u,s;return u=new ve({props:{queryID:"customers_by_country",queryResult:i[1]}}),{c(){v(u.$$.fragment)},l(t){b(u.$$.fragment,t)},m(t,_){E(u,t,_),s=!0},p(t,_){const c={};_[0]&2&&(c.queryResult=t[1]),u.$set(c)},i(t){s||(a(u.$$.fragment,t),s=!0)},o(t){m(u.$$.fragment,t),s=!1},d(t){I(u,t)}}}function ut(i){let u,s;return u=new ve({props:{queryID:"gender_breakdown",queryResult:i[2]}}),{c(){v(u.$$.fragment)},l(t){b(u.$$.fragment,t)},m(t,_){E(u,t,_),s=!0},p(t,_){const c={};_[0]&4&&(c.queryResult=t[2]),u.$set(c)},i(t){s||(a(u.$$.fragment,t),s=!0)},o(t){m(u.$$.fragment,t),s=!1},d(t){I(u,t)}}}function it(i){let u,s;return u=new ve({props:{queryID:"age_raw",queryResult:i[3]}}),{c(){v(u.$$.fragment)},l(t){b(u.$$.fragment,t)},m(t,_){E(u,t,_),s=!0},p(t,_){const c={};_[0]&8&&(c.queryResult=t[3]),u.$set(c)},i(t){s||(a(u.$$.fragment,t),s=!0)},o(t){m(u.$$.fragment,t),s=!1},d(t){I(u,t)}}}function ot(i){let u,s;return u=new ve({props:{queryID:"customer_spend_vs_age",queryResult:i[4]}}),{c(){v(u.$$.fragment)},l(t){b(u.$$.fragment,t)},m(t,_){E(u,t,_),s=!0},p(t,_){const c={};_[0]&16&&(c.queryResult=t[4]),u.$set(c)},i(t){s||(a(u.$$.fragment,t),s=!0)},o(t){m(u.$$.fragment,t),s=!1},d(t){I(u,t)}}}function nt(i){let u,s;return u=new ve({props:{queryID:"monthly_new_customers",queryResult:i[5]}}),{c(){v(u.$$.fragment)},l(t){b(u.$$.fragment,t)},m(t,_){E(u,t,_),s=!0},p(t,_){const c={};_[0]&32&&(c.queryResult=t[5]),u.$set(c)},i(t){s||(a(u.$$.fragment,t),s=!0)},o(t){m(u.$$.fragment,t),s=!1},d(t){I(u,t)}}}function at(i){let u,s;return u=new ve({props:{queryID:"revenue_by_country",queryResult:i[6]}}),{c(){v(u.$$.fragment)},l(t){b(u.$$.fragment,t)},m(t,_){E(u,t,_),s=!0},p(t,_){const c={};_[0]&64&&(c.queryResult=t[6]),u.$set(c)},i(t){s||(a(u.$$.fragment,t),s=!0)},o(t){m(u.$$.fragment,t),s=!1},d(t){I(u,t)}}}function At(i){let u,s,t,_,c,o,Ue='<a href="#-customer-intelligence">👥 Customer Intelligence</a>',ge,ee,$e="Demographic and behavioral analysis of TheLook e-commerce customers, featuring Histogram, ScatterPlot, and geographic breakdown.",h,M,w,re,q,me,Y,G,$,se,H,De='<a href="#top-countries-by-customer-count">Top Countries by Customer Count</a>',ce,k,L,ue,P,de,B,ie='<a href="#gender-distribution">Gender Distribution</a>',J,W,V,fe,Q,j,D,Te='<a href="#age-distribution">Age Distribution</a>',Ne,oe,z,X,A,ye='<a href="#customer-spend-vs-age">Customer Spend vs Age</a>',Se,ne,K,Z,U,Oe='<a href="#monthly-new-customer-acquisition">Monthly New Customer Acquisition</a>',pe,ae,x,d,te,Be='<a href="#revenue-by-country">Revenue by Country</a>',Le,Ae,Ce,Me;function _t(e,r){return Dt}let we=_t()(i),N=i[0]&&rt(i);w=new ke({props:{data:i[0],value:"total_customers",title:"Total Customers"}}),q=new ke({props:{data:i[0],value:"active_buyers",title:"Active Buyers"}}),Y=new ke({props:{data:i[0],value:"avg_revenue_per_buyer",title:"Avg Revenue / Buyer",fmt:"$#,##0.00"}}),$=new ke({props:{data:i[0],value:"countries",title:"Countries"}});let y=i[1]&&st(i);L=new He({props:{data:i[1],x:"country",y:"customers",title:"Top 15 Countries by Customer Count",swapXY:"true"}}),P=new He({props:{data:i[1],x:"country",y:["buyers","customers"],title:"Buyers vs Total Customers by Country",type:"grouped"}});let S=i[2]&&ut(i);V=new He({props:{data:i[2],x:"gender",y:["buyers","customers"],title:"Buyers vs Total Customers by Gender",type:"grouped"}}),Q=new et({props:{data:i[2]}});let O=i[3]&&it(i);z=new bt({props:{data:i[3],x:"age",title:"Customer Age Distribution"}});let p=i[4]&&ot(i);K=new vt({props:{data:i[4],x:"age",y:"total_spent",series:"gender",title:"Customer Spend vs Age (sample of 2000)"}});let C=i[5]&&nt(i);x=new Et({props:{data:i[5],x:"month",y:"new_buyers",title:"Monthly Active Buyers"}});let R=i[6]&&at(i);return Ce=new et({props:{data:i[6],rows:"10",search:"true"}}),{c(){u=T(),we.c(),s=le("meta"),t=le("meta"),_=Ze(),c=T(),o=le("h1"),o.innerHTML=Ue,ge=T(),ee=le("p"),ee.textContent=$e,h=T(),N&&N.c(),M=T(),v(w.$$.fragment),re=T(),v(q.$$.fragment),me=T(),v(Y.$$.fragment),G=T(),v($.$$.fragment),se=T(),H=le("h2"),H.innerHTML=De,ce=T(),y&&y.c(),k=T(),v(L.$$.fragment),ue=T(),v(P.$$.fragment),de=T(),B=le("h2"),B.innerHTML=ie,J=T(),S&&S.c(),W=T(),v(V.$$.fragment),fe=T(),v(Q.$$.fragment),j=T(),D=le("h2"),D.innerHTML=Te,Ne=T(),O&&O.c(),oe=T(),v(z.$$.fragment),X=T(),A=le("h2"),A.innerHTML=ye,Se=T(),p&&p.c(),ne=T(),v(K.$$.fragment),Z=T(),U=le("h2"),U.innerHTML=Oe,pe=T(),C&&C.c(),ae=T(),v(x.$$.fragment),d=T(),te=le("h2"),te.innerHTML=Be,Le=T(),R&&R.c(),Ae=T(),v(Ce.$$.fragment),this.h()},l(e){u=f(e);const r=mt("svelte-2igo1p",document.head);we.l(r),s=_e(r,"META",{name:!0,content:!0}),t=_e(r,"META",{name:!0,content:!0}),_=Ze(),r.forEach(n),c=f(e),o=_e(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Re(o)!=="svelte-uqtflf"&&(o.innerHTML=Ue),ge=f(e),ee=_e(e,"P",{class:!0,"data-svelte-h":!0}),Re(ee)!=="svelte-j26hd5"&&(ee.textContent=$e),h=f(e),N&&N.l(e),M=f(e),b(w.$$.fragment,e),re=f(e),b(q.$$.fragment,e),me=f(e),b(Y.$$.fragment,e),G=f(e),b($.$$.fragment,e),se=f(e),H=_e(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(H)!=="svelte-mxh0pb"&&(H.innerHTML=De),ce=f(e),y&&y.l(e),k=f(e),b(L.$$.fragment,e),ue=f(e),b(P.$$.fragment,e),de=f(e),B=_e(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(B)!=="svelte-1d79wmp"&&(B.innerHTML=ie),J=f(e),S&&S.l(e),W=f(e),b(V.$$.fragment,e),fe=f(e),b(Q.$$.fragment,e),j=f(e),D=_e(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(D)!=="svelte-mrtywp"&&(D.innerHTML=Te),Ne=f(e),O&&O.l(e),oe=f(e),b(z.$$.fragment,e),X=f(e),A=_e(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(A)!=="svelte-1mumzza"&&(A.innerHTML=ye),Se=f(e),p&&p.l(e),ne=f(e),b(K.$$.fragment,e),Z=f(e),U=_e(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(U)!=="svelte-1mnr0la"&&(U.innerHTML=Oe),pe=f(e),C&&C.l(e),ae=f(e),b(x.$$.fragment,e),d=f(e),te=_e(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(te)!=="svelte-be7l7d"&&(te.innerHTML=Be),Le=f(e),R&&R.l(e),Ae=f(e),b(Ce.$$.fragment,e),this.h()},h(){g(s,"name","twitter:card"),g(s,"content","summary_large_image"),g(t,"name","twitter:site"),g(t,"content","@evidence_dev"),g(o,"class","markdown"),g(o,"id","-customer-intelligence"),g(ee,"class","markdown"),g(H,"class","markdown"),g(H,"id","top-countries-by-customer-count"),g(B,"class","markdown"),g(B,"id","gender-distribution"),g(D,"class","markdown"),g(D,"id","age-distribution"),g(A,"class","markdown"),g(A,"id","customer-spend-vs-age"),g(U,"class","markdown"),g(U,"id","monthly-new-customer-acquisition"),g(te,"class","markdown"),g(te,"id","revenue-by-country")},m(e,r){l(e,u,r),we.m(document.head,null),Fe(document.head,s),Fe(document.head,t),Fe(document.head,_),l(e,c,r),l(e,o,r),l(e,ge,r),l(e,ee,r),l(e,h,r),N&&N.m(e,r),l(e,M,r),E(w,e,r),l(e,re,r),E(q,e,r),l(e,me,r),E(Y,e,r),l(e,G,r),E($,e,r),l(e,se,r),l(e,H,r),l(e,ce,r),y&&y.m(e,r),l(e,k,r),E(L,e,r),l(e,ue,r),E(P,e,r),l(e,de,r),l(e,B,r),l(e,J,r),S&&S.m(e,r),l(e,W,r),E(V,e,r),l(e,fe,r),E(Q,e,r),l(e,j,r),l(e,D,r),l(e,Ne,r),O&&O.m(e,r),l(e,oe,r),E(z,e,r),l(e,X,r),l(e,A,r),l(e,Se,r),p&&p.m(e,r),l(e,ne,r),E(K,e,r),l(e,Z,r),l(e,U,r),l(e,pe,r),C&&C.m(e,r),l(e,ae,r),E(x,e,r),l(e,d,r),l(e,te,r),l(e,Le,r),R&&R.m(e,r),l(e,Ae,r),E(Ce,e,r),Me=!0},p(e,r){we.p(e,r),e[0]?N?(N.p(e,r),r[0]&1&&a(N,1)):(N=rt(e),N.c(),a(N,1),N.m(M.parentNode,M)):N&&(Ee(),m(N,1,1,()=>{N=null}),Ie());const qe={};r[0]&1&&(qe.data=e[0]),w.$set(qe);const Ye={};r[0]&1&&(Ye.data=e[0]),q.$set(Ye);const Ge={};r[0]&1&&(Ge.data=e[0]),Y.$set(Ge);const Pe={};r[0]&1&&(Pe.data=e[0]),$.$set(Pe),e[1]?y?(y.p(e,r),r[0]&2&&a(y,1)):(y=st(e),y.c(),a(y,1),y.m(k.parentNode,k)):y&&(Ee(),m(y,1,1,()=>{y=null}),Ie());const Je={};r[0]&2&&(Je.data=e[1]),L.$set(Je);const We={};r[0]&2&&(We.data=e[1]),P.$set(We),e[2]?S?(S.p(e,r),r[0]&4&&a(S,1)):(S=ut(e),S.c(),a(S,1),S.m(W.parentNode,W)):S&&(Ee(),m(S,1,1,()=>{S=null}),Ie());const Ve={};r[0]&4&&(Ve.data=e[2]),V.$set(Ve);const Qe={};r[0]&4&&(Qe.data=e[2]),Q.$set(Qe),e[3]?O?(O.p(e,r),r[0]&8&&a(O,1)):(O=it(e),O.c(),a(O,1),O.m(oe.parentNode,oe)):O&&(Ee(),m(O,1,1,()=>{O=null}),Ie());const je={};r[0]&8&&(je.data=e[3]),z.$set(je),e[4]?p?(p.p(e,r),r[0]&16&&a(p,1)):(p=ot(e),p.c(),a(p,1),p.m(ne.parentNode,ne)):p&&(Ee(),m(p,1,1,()=>{p=null}),Ie());const ze={};r[0]&16&&(ze.data=e[4]),K.$set(ze),e[5]?C?(C.p(e,r),r[0]&32&&a(C,1)):(C=nt(e),C.c(),a(C,1),C.m(ae.parentNode,ae)):C&&(Ee(),m(C,1,1,()=>{C=null}),Ie());const Xe={};r[0]&32&&(Xe.data=e[5]),x.$set(Xe),e[6]?R?(R.p(e,r),r[0]&64&&a(R,1)):(R=at(e),R.c(),a(R,1),R.m(Ae.parentNode,Ae)):R&&(Ee(),m(R,1,1,()=>{R=null}),Ie());const Ke={};r[0]&64&&(Ke.data=e[6]),Ce.$set(Ke)},i(e){Me||(a(N),a(w.$$.fragment,e),a(q.$$.fragment,e),a(Y.$$.fragment,e),a($.$$.fragment,e),a(y),a(L.$$.fragment,e),a(P.$$.fragment,e),a(S),a(V.$$.fragment,e),a(Q.$$.fragment,e),a(O),a(z.$$.fragment,e),a(p),a(K.$$.fragment,e),a(C),a(x.$$.fragment,e),a(R),a(Ce.$$.fragment,e),Me=!0)},o(e){m(N),m(w.$$.fragment,e),m(q.$$.fragment,e),m(Y.$$.fragment,e),m($.$$.fragment,e),m(y),m(L.$$.fragment,e),m(P.$$.fragment,e),m(S),m(V.$$.fragment,e),m(Q.$$.fragment,e),m(O),m(z.$$.fragment,e),m(p),m(K.$$.fragment,e),m(C),m(x.$$.fragment,e),m(R),m(Ce.$$.fragment,e),Me=!1},d(e){e&&(n(u),n(c),n(o),n(ge),n(ee),n(h),n(M),n(re),n(me),n(G),n(se),n(H),n(ce),n(k),n(ue),n(de),n(B),n(J),n(W),n(fe),n(j),n(D),n(Ne),n(oe),n(X),n(A),n(Se),n(ne),n(Z),n(U),n(pe),n(ae),n(d),n(te),n(Le),n(Ae)),we.d(e),n(s),n(t),n(_),N&&N.d(e),I(w,e),I(q,e),I(Y,e),I($,e),y&&y.d(e),I(L,e),I(P,e),S&&S.d(e),I(V,e),I(Q,e),O&&O.d(e),I(z,e),p&&p.d(e),I(K,e),C&&C.d(e),I(x,e),R&&R.d(e),I(Ce,e)}}}function Ut(i,u,s){let t,_;xe(i,It,d=>s(37,t=d)),xe(i,tt,d=>s(43,_=d));let{data:c}=u,{data:o={},customFormattingSettings:Ue,__db:ge,inputs:ee}=c;ct(tt,_="129a01f1b8e424875b7f01084713d18d",_);let $e=St(Rt(ee));dt($e.subscribe(d=>ee=d)),ft(Ct,{getCustomFormats:()=>Ue.customFormats||[]});const h=(d,te)=>gt(ge.query,d,{query_name:te});Ot(h),t.params,Tt(()=>!0);let M={initialData:void 0,initialError:void 0},w=F`SELECT
  COUNT(DISTINCT u.id) AS total_customers,
  COUNT(DISTINCT oi.user_id) AS active_buyers,
  ROUND(SUM(oi.sale_price) / COUNT(DISTINCT oi.user_id), 2) AS avg_revenue_per_buyer,
  COUNT(DISTINCT u.country) AS countries
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')`,re=`SELECT
  COUNT(DISTINCT u.id) AS total_customers,
  COUNT(DISTINCT oi.user_id) AS active_buyers,
  ROUND(SUM(oi.sale_price) / COUNT(DISTINCT oi.user_id), 2) AS avg_revenue_per_buyer,
  COUNT(DISTINCT u.country) AS countries
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')`;o.customer_kpis_data&&(o.customer_kpis_data instanceof Error?M.initialError=o.customer_kpis_data:M.initialData=o.customer_kpis_data,o.customer_kpis_columns&&(M.knownColumns=o.customer_kpis_columns));let q,me=!1;const Y=be.createReactive({callback:d=>{s(0,q=d)},execFn:h},{id:"customer_kpis",...M});Y(re,{noResolve:w,...M}),globalThis[Symbol.for("customer_kpis")]={get value(){return q}};let G={initialData:void 0,initialError:void 0},$=F`SELECT
  u.country,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY customers DESC
LIMIT 15`,se=`SELECT
  u.country,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY customers DESC
LIMIT 15`;o.customers_by_country_data&&(o.customers_by_country_data instanceof Error?G.initialError=o.customers_by_country_data:G.initialData=o.customers_by_country_data,o.customers_by_country_columns&&(G.knownColumns=o.customers_by_country_columns));let H,De=!1;const ce=be.createReactive({callback:d=>{s(1,H=d)},execFn:h},{id:"customers_by_country",...G});ce(se,{noResolve:$,...G}),globalThis[Symbol.for("customers_by_country")]={get value(){return H}};let k={initialData:void 0,initialError:void 0},L=F`SELECT
  u.gender,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  ROUND(AVG(oi.sale_price), 2) AS avg_sale_price
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.gender
ORDER BY customers DESC`,ue=`SELECT
  u.gender,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  ROUND(AVG(oi.sale_price), 2) AS avg_sale_price
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.gender
ORDER BY customers DESC`;o.gender_breakdown_data&&(o.gender_breakdown_data instanceof Error?k.initialError=o.gender_breakdown_data:k.initialData=o.gender_breakdown_data,o.gender_breakdown_columns&&(k.knownColumns=o.gender_breakdown_columns));let P,de=!1;const B=be.createReactive({callback:d=>{s(2,P=d)},execFn:h},{id:"gender_breakdown",...k});B(ue,{noResolve:L,...k}),globalThis[Symbol.for("gender_breakdown")]={get value(){return P}};let ie={initialData:void 0,initialError:void 0},J=F`SELECT age
FROM users
WHERE age IS NOT NULL AND age BETWEEN 13 AND 80`,W=`SELECT age
FROM users
WHERE age IS NOT NULL AND age BETWEEN 13 AND 80`;o.age_raw_data&&(o.age_raw_data instanceof Error?ie.initialError=o.age_raw_data:ie.initialData=o.age_raw_data,o.age_raw_columns&&(ie.knownColumns=o.age_raw_columns));let V,fe=!1;const Q=be.createReactive({callback:d=>{s(3,V=d)},execFn:h},{id:"age_raw",...ie});Q(W,{noResolve:J,...ie}),globalThis[Symbol.for("age_raw")]={get value(){return V}};let j={initialData:void 0,initialError:void 0},D=F`SELECT
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
LIMIT 2000`,Te=`SELECT
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
LIMIT 2000`;o.customer_spend_vs_age_data&&(o.customer_spend_vs_age_data instanceof Error?j.initialError=o.customer_spend_vs_age_data:j.initialData=o.customer_spend_vs_age_data,o.customer_spend_vs_age_columns&&(j.knownColumns=o.customer_spend_vs_age_columns));let Ne,oe=!1;const z=be.createReactive({callback:d=>{s(4,Ne=d)},execFn:h},{id:"customer_spend_vs_age",...j});z(Te,{noResolve:D,...j}),globalThis[Symbol.for("customer_spend_vs_age")]={get value(){return Ne}};let X={initialData:void 0,initialError:void 0},A=F`SELECT
  LEFT(CAST(o.created_at AS VARCHAR), 7) AS month,
  COUNT(DISTINCT o.user_id) AS new_buyers
FROM orders o
GROUP BY month
ORDER BY month`,ye=`SELECT
  LEFT(CAST(o.created_at AS VARCHAR), 7) AS month,
  COUNT(DISTINCT o.user_id) AS new_buyers
FROM orders o
GROUP BY month
ORDER BY month`;o.monthly_new_customers_data&&(o.monthly_new_customers_data instanceof Error?X.initialError=o.monthly_new_customers_data:X.initialData=o.monthly_new_customers_data,o.monthly_new_customers_columns&&(X.knownColumns=o.monthly_new_customers_columns));let Se,ne=!1;const K=be.createReactive({callback:d=>{s(5,Se=d)},execFn:h},{id:"monthly_new_customers",...X});K(ye,{noResolve:A,...X}),globalThis[Symbol.for("monthly_new_customers")]={get value(){return Se}};let Z={initialData:void 0,initialError:void 0},U=F`SELECT
  u.country,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT oi.user_id) AS buyers
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY revenue DESC
LIMIT 20`,Oe=`SELECT
  u.country,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT oi.user_id) AS buyers
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY revenue DESC
LIMIT 20`;o.revenue_by_country_data&&(o.revenue_by_country_data instanceof Error?Z.initialError=o.revenue_by_country_data:Z.initialData=o.revenue_by_country_data,o.revenue_by_country_columns&&(Z.knownColumns=o.revenue_by_country_columns));let pe,ae=!1;const x=be.createReactive({callback:d=>{s(6,pe=d)},execFn:h},{id:"revenue_by_country",...Z});return x(Oe,{noResolve:U,...Z}),globalThis[Symbol.for("revenue_by_country")]={get value(){return pe}},i.$$set=d=>{"data"in d&&s(7,c=d.data)},i.$$.update=()=>{i.$$.dirty[0]&128&&s(8,{data:o={},customFormattingSettings:Ue,__db:ge}=c,o),i.$$.dirty[0]&256&&pt.set(Object.keys(o).length>0),i.$$.dirty[1]&64&&t.params,i.$$.dirty[0]&7680&&(w||!me?w||(Y(re,{noResolve:w,...M}),s(12,me=!0)):Y(re,{noResolve:w})),i.$$.dirty[0]&122880&&($||!De?$||(ce(se,{noResolve:$,...G}),s(16,De=!0)):ce(se,{noResolve:$})),i.$$.dirty[0]&1966080&&(L||!de?L||(B(ue,{noResolve:L,...k}),s(20,de=!0)):B(ue,{noResolve:L})),i.$$.dirty[0]&31457280&&(J||!fe?J||(Q(W,{noResolve:J,...ie}),s(24,fe=!0)):Q(W,{noResolve:J})),i.$$.dirty[0]&503316480&&(D||!oe?D||(z(Te,{noResolve:D,...j}),s(28,oe=!0)):z(Te,{noResolve:D})),i.$$.dirty[0]&1610612736|i.$$.dirty[1]&3&&(A||!ne?A||(K(ye,{noResolve:A,...X}),s(32,ne=!0)):K(ye,{noResolve:A})),i.$$.dirty[1]&60&&(U||!ae?U||(x(Oe,{noResolve:U,...Z}),s(36,ae=!0)):x(Oe,{noResolve:U}))},s(10,w=F`SELECT
  COUNT(DISTINCT u.id) AS total_customers,
  COUNT(DISTINCT oi.user_id) AS active_buyers,
  ROUND(SUM(oi.sale_price) / COUNT(DISTINCT oi.user_id), 2) AS avg_revenue_per_buyer,
  COUNT(DISTINCT u.country) AS countries
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')`),s(11,re=`SELECT
  COUNT(DISTINCT u.id) AS total_customers,
  COUNT(DISTINCT oi.user_id) AS active_buyers,
  ROUND(SUM(oi.sale_price) / COUNT(DISTINCT oi.user_id), 2) AS avg_revenue_per_buyer,
  COUNT(DISTINCT u.country) AS countries
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')`),s(14,$=F`SELECT
  u.country,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY customers DESC
LIMIT 15`),s(15,se=`SELECT
  u.country,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY customers DESC
LIMIT 15`),s(18,L=F`SELECT
  u.gender,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  ROUND(AVG(oi.sale_price), 2) AS avg_sale_price
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.gender
ORDER BY customers DESC`),s(19,ue=`SELECT
  u.gender,
  COUNT(DISTINCT u.id) AS customers,
  COUNT(DISTINCT oi.user_id) AS buyers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  ROUND(AVG(oi.sale_price), 2) AS avg_sale_price
FROM users u
LEFT JOIN order_items oi ON u.id = oi.user_id
  AND oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.gender
ORDER BY customers DESC`),s(22,J=F`SELECT age
FROM users
WHERE age IS NOT NULL AND age BETWEEN 13 AND 80`),s(23,W=`SELECT age
FROM users
WHERE age IS NOT NULL AND age BETWEEN 13 AND 80`),s(26,D=F`SELECT
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
LIMIT 2000`),s(27,Te=`SELECT
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
LIMIT 2000`),s(30,A=F`SELECT
  LEFT(CAST(o.created_at AS VARCHAR), 7) AS month,
  COUNT(DISTINCT o.user_id) AS new_buyers
FROM orders o
GROUP BY month
ORDER BY month`),s(31,ye=`SELECT
  LEFT(CAST(o.created_at AS VARCHAR), 7) AS month,
  COUNT(DISTINCT o.user_id) AS new_buyers
FROM orders o
GROUP BY month
ORDER BY month`),s(34,U=F`SELECT
  u.country,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT oi.user_id) AS buyers
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY revenue DESC
LIMIT 20`),s(35,Oe=`SELECT
  u.country,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT oi.user_id) AS buyers
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.country
ORDER BY revenue DESC
LIMIT 20`),[q,H,P,V,Ne,Se,pe,c,o,M,w,re,me,G,$,se,De,k,L,ue,de,ie,J,W,fe,j,D,Te,oe,X,A,ye,ne,Z,U,Oe,ae,t]}class Jt extends Nt{constructor(u){super(),yt(this,u,Ut,At,lt,{data:7},null,[-1,-1])}}export{Jt as component};
