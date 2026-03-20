import{s as Ya,d as i,i as n,a as ze,b as f,c as _,h as qa,e as E,f as Da,g as C,j as u,k as v,l as Aa,m as Va,o as xa,n as za,p as Qa,r as Ga,t as Ba,q as Re}from"../chunks/scheduler.CCfxqTH6.js";import{S as ja,i as Xa,d as S,t as p,a as c,c as Xt,m as U,b as R,e as N,g as Kt}from"../chunks/index.h6XQUVJ4.js";import{D as Qe,e as Ka,s as Ja,Q as Jt,p as Za,r as ba,C as tr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BSr8zeYm.js";import{w as er}from"../chunks/entry.Bbj_y6rS.js";import{A as ar}from"../chunks/Alert.Dq5tFpg1.js";import{h as P,p as rr}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as lr}from"../chunks/Dropdown.CVbRPn6G.js";import{p as sr}from"../chunks/stores.CTSqB_F3.js";import{N as ir,D as wa}from"../chunks/Note.pxe4591_.js";import{E as nr,Q as Zt}from"../chunks/Chart.BBiolwXv.js";import{A as or}from"../chunks/AreaChart.Bgwz5nSP.js";import{B as Ue}from"../chunks/BarChart.C3OCRLaC.js";import{B as ee}from"../chunks/BigValue.H93uhrHa.js";import{H as _r}from"../chunks/Heatmap.Cul642OA.js";import{L as ur}from"../chunks/LineChart.DP48KQoC.js";import{S as cr}from"../chunks/ScatterPlot.Cj5yMf1o.js";function mr(s){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:Re,p:Re,d:Re}}function pr(s){let r;return{c(){r=Ba("All monetary amounts are computed from the `price_intelligence` source, which pre-aggregates\nitem-level data from BigQuery. Only items where `cost < retail_price` are included to exclude\ncatalogue data anomalies. Cancelled and Returned items are excluded from profit metrics but\nincluded in the return-rate section below.")},l(l){r=Ga(l,"All monetary amounts are computed from the `price_intelligence` source, which pre-aggregates\nitem-level data from BigQuery. Only items where `cost < retail_price` are included to exclude\ncatalogue data anomalies. Cancelled and Returned items are excluded from profit metrics but\nincluded in the return-rate section below.")},m(l,a){n(l,r,a)},d(l){l&&i(r)}}}function Ca(s){let r,l;return r=new Zt({props:{queryID:"margin_kpis",queryResult:s[1]}}),{c(){N(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,m){U(r,a,m),l=!0},p(a,m){const d={};m[0]&2&&(d.queryResult=a[1]),r.$set(d)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){S(r,a)}}}function La(s){let r,l;return r=new Zt({props:{queryID:"pnl_stages",queryResult:s[2]}}),{c(){N(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,m){U(r,a,m),l=!0},p(a,m){const d={};m[0]&4&&(d.queryResult=a[2]),r.$set(d)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){S(r,a)}}}function fr(s){let r,l='<thead class="markdown"><tr class="markdown"><th class="markdown">Stage</th> <th class="markdown">Definition</th></tr></thead> <tbody class="markdown"><tr class="markdown"><td class="markdown"><strong class="markdown">Gross Retail Value</strong></td> <td class="markdown">Sum of <code class="markdown">retail_price</code> for all completed items — what customers would have paid at full price</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">Discounts</strong></td> <td class="markdown">Gap between retail price and actual sale price (<code class="markdown">retail_price − sale_price</code>)</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">Net Sales</strong></td> <td class="markdown">Actual revenue collected (<code class="markdown">sale_price</code>)</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">COGS</strong></td> <td class="markdown">Sum of <code class="markdown">cost</code> for all completed items</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">Gross Profit</strong></td> <td class="markdown">Net Sales minus COGS — the margin before operating expenses</td></tr></tbody>';return{c(){r=v("table"),r.innerHTML=l,this.h()},l(a){r=E(a,"TABLE",{class:!0,"data-svelte-h":!0}),C(r)!=="svelte-roje52"&&(r.innerHTML=l),this.h()},h(){f(r,"class","markdown")},m(a,m){n(a,r,m)},p:Re,d(a){a&&i(r)}}}function Ta(s){let r,l;return r=new Zt({props:{queryID:"category_margin",queryResult:s[3]}}),{c(){N(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,m){U(r,a,m),l=!0},p(a,m){const d={};m[0]&8&&(d.queryResult=a[3]),r.$set(d)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){S(r,a)}}}function ha(s){let r,l;return r=new Zt({props:{queryID:"price_tier_heatmap",queryResult:s[4]}}),{c(){N(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,m){U(r,a,m),l=!0},p(a,m){const d={};m[0]&16&&(d.queryResult=a[4]),r.$set(d)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){S(r,a)}}}function gr(s){let r,l='<thead class="markdown"><tr class="markdown"><th class="markdown">Tier</th> <th class="markdown">Retail Price Range</th></tr></thead> <tbody class="markdown"><tr class="markdown"><td class="markdown">1_Under $25</td> <td class="markdown">Under $25</td></tr> <tr class="markdown"><td class="markdown">2_$25-$49</td> <td class="markdown">$25 – $49</td></tr> <tr class="markdown"><td class="markdown">3_$50-$99</td> <td class="markdown">$50 – $99</td></tr> <tr class="markdown"><td class="markdown">4_$100-$199</td> <td class="markdown">$100 – $199</td></tr> <tr class="markdown"><td class="markdown">5_$200 Plus</td> <td class="markdown">≥ $200</td></tr></tbody>',a,m,d=`Higher-priced items often carry higher margins. This heatmap reveals exceptions where
low-price tiers punch above their weight, or premium tiers underperform.`;return{c(){r=v("table"),r.innerHTML=l,a=u(),m=v("p"),m.textContent=d,this.h()},l(o){r=E(o,"TABLE",{class:!0,"data-svelte-h":!0}),C(r)!=="svelte-1hpcfh6"&&(r.innerHTML=l),a=_(o),m=E(o,"P",{class:!0,"data-svelte-h":!0}),C(m)!=="svelte-54ogj5"&&(m.textContent=d),this.h()},h(){f(r,"class","markdown"),f(m,"class","markdown")},m(o,gt){n(o,r,gt),n(o,a,gt),n(o,m,gt)},p:Re,d(o){o&&(i(r),i(a),i(m))}}}function ka(s){let r,l;return r=new Zt({props:{queryID:"monthly_gp_trend",queryResult:s[5]}}),{c(){N(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,m){U(r,a,m),l=!0},p(a,m){const d={};m[0]&32&&(d.queryResult=a[5]),r.$set(d)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){S(r,a)}}}function dr(s){let r;return{c(){r=Ba(`If the discount rate rises while GP margin % falls, heavier discounting is compressing profitability.
Watch for months where these two lines diverge significantly.`)},l(l){r=Ga(l,`If the discount rate rises while GP margin % falls, heavier discounting is compressing profitability.
Watch for months where these two lines diverge significantly.`)},m(l,a){n(l,r,a)},d(l){l&&i(r)}}}function Ia(s){let r,l;return r=new Zt({props:{queryID:"return_impact",queryResult:s[6]}}),{c(){N(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,m){U(r,a,m),l=!0},p(a,m){const d={};m[0]&64&&(d.queryResult=a[6]),r.$set(d)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){S(r,a)}}}function Ha(s){let r,l;return r=new Zt({props:{queryID:"brand_categories",queryResult:s[7]}}),{c(){N(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,m){U(r,a,m),l=!0},p(a,m){const d={};m[0]&128&&(d.queryResult=a[7]),r.$set(d)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){S(r,a)}}}function Fa(s){let r,l;return r=new Zt({props:{queryID:"brand_gp",queryResult:s[8]}}),{c(){N(r.$$.fragment)},l(a){R(r.$$.fragment,a)},m(a,m){U(r,a,m),l=!0},p(a,m){const d={};m[0]&256&&(d.queryResult=a[8]),r.$set(d)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){p(r.$$.fragment,a),l=!1},d(a){S(r,a)}}}function Sr(s){let r,l,a,m,d,o,gt='<a href="#-gross-margin--discount-intelligence">💰 Gross Margin &amp; Discount Intelligence</a>',te,h,Ne='Profitability analysis going beyond revenue: <strong class="markdown">gross margin</strong>, <strong class="markdown">discount depth</strong>, and <strong class="markdown">return-rate impact</strong> — derived from the gap between <code class="markdown">retail_price</code>, <code class="markdown">sale_price</code>, and <code class="markdown">cost</code> in the TheLook dataset.',B,k,K,nt,vt,Q,ae='<a href="#financial-summary">Financial Summary</a>',J,W,Y,$t,Z,Mt,I,tt,q,yt,et,Ot,H,at,V,Dt,dt,At,L,ot='<a href="#pl-waterfall">P&amp;L Waterfall</a>',_t,rt,re="How revenue transforms from full retail price all the way down to gross profit.",bt,x,F,ut,lt,wt,St,st,T,Ct='<a href="#category-level-profitability">Category-Level Profitability</a>',Lt,ct,j,mt='<a href="#gp-margin--by-category">GP Margin % by Category</a>',it,z,Tt,X,le='<a href="#discount-rate--by-category">Discount Rate % by Category</a>',se,pt,g,G,ie='<a href="#category-pl-summary-table">Category P&amp;L Summary Table</a>',ne,ft,Ee,pe,ve,Ut,je='<a href="#price-tier--category-profitability-heatmap">Price Tier × Category Profitability Heatmap</a>',$e,ht,Xe="How does gross margin % vary across price brackets within each category?",Me,oe,kt,ye,It,Oe,fe,De,Rt,Ke='<a href="#monthly-gross-margin-trend">Monthly Gross Margin Trend</a>',Ae,Ht,Je="Is our profitability improving or eroding over time?",be,_e,Ft,we,Pt,Ce,Gt,Le,ge,Te,Nt,Ze='<a href="#return-rate-impact-by-category">Return Rate Impact by Category</a>',he,Bt,ta="Returns and cancellations destroy realized revenue. Which categories are most exposed?",ke,ue,Wt,Ie,Yt,He,qt,Fe,de,Pe,Et,ea='<a href="#interactive-brand-deep-dive">Interactive Brand Deep-Dive</a>',Ge,Vt,aa="Select a category to explore which brands have the best gross margins.",Be,ce,xt,We,me,zt,Ye,Qt,qe,jt,Ve;function Wa(t,e){return mr}let Se=Wa()(s);k=new ir({props:{$$slots:{default:[pr]},$$scope:{ctx:s}}});let $=s[1]&&Ca(s);Y=new ee({props:{data:s[1],value:"gross_retail",title:"Gross Retail Value",fmt:"$#,##0"}}),Z=new ee({props:{data:s[1],value:"total_discounts",title:"Total Discounts",fmt:"$#,##0"}}),I=new ee({props:{data:s[1],value:"net_revenue",title:"Net Revenue",fmt:"$#,##0"}}),q=new ee({props:{data:s[1],value:"total_cogs",title:"Cost of Goods Sold",fmt:"$#,##0"}}),et=new ee({props:{data:s[1],value:"gross_profit",title:"Gross Profit",fmt:"$#,##0"}}),H=new ee({props:{data:s[1],value:"avg_discount_rate",title:"Avg Discount Rate %",fmt:"#,##0.0"}}),V=new ee({props:{data:s[1],value:"gp_margin_pct",title:"GP Margin %",fmt:"#,##0.0"}});let M=s[2]&&La(s);F=new nr({props:{config:{title:{text:"P&L Waterfall: Gross Retail → Gross Profit",left:"center",textStyle:{fontSize:14}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:s[44]},xAxis:{type:"category",data:["Gross Retail","Discounts","Net Sales","COGS","Gross Profit"],axisLabel:{interval:0}},yAxis:{type:"value",axisLabel:{formatter:Pa}},series:[{name:"Platform",type:"bar",stack:"waterfall",silent:!0,itemStyle:{color:"transparent",borderColor:"transparent"},emphasis:{itemStyle:{color:"transparent",borderColor:"transparent"}},data:[0,s[2][0].net_sales,0,s[2][0].gross_profit,0]},{name:"Amount",type:"bar",stack:"waterfall",label:{show:!0,position:"top",formatter:s[45]},data:[{value:s[2][0].gross_retail,itemStyle:{color:"#2563eb"}},{value:s[2][0].discounts,itemStyle:{color:"#ef4444"}},{value:s[2][0].net_sales,itemStyle:{color:"#22c55e"}},{value:s[2][0].cogs,itemStyle:{color:"#f97316"}},{value:s[2][0].gross_profit,itemStyle:{color:"#16a34a"}}]}]},height:380}}),lt=new wa({props:{title:"Waterfall chart interpretation",$$slots:{default:[fr]},$$scope:{ctx:s}}});let y=s[3]&&Ta(s);z=new Ue({props:{data:s[3],x:"category",y:"gp_margin_pct",title:"Gross Profit Margin % by Category",yAxisTitle:"GP Margin %",swapXY:"true"}}),pt=new Ue({props:{data:s[3],x:"category",y:"avg_discount_pct",title:"Average Discount Rate % by Category",yAxisTitle:"Discount Rate %",swapXY:"true",colorPalette:["#ef4444"]}}),ft=new Qe({props:{data:s[3],rows:"15"}});let O=s[4]&&ha(s);kt=new _r({props:{data:s[4],x:"price_tier",y:"category",value:"gp_margin_pct",title:"GP Margin % — Price Tier × Category"}}),It=new wa({props:{title:"Price tier definitions",$$slots:{default:[gr]},$$scope:{ctx:s}}});let D=s[5]&&ka(s);Ft=new ur({props:{data:s[5],x:"month",y:["gp_margin_pct","discount_rate_pct"],title:"Monthly GP Margin % vs Discount Rate %",yAxisTitle:"Percentage (%)",xAxisTitle:"Month"}}),Pt=new or({props:{data:s[5],x:"month",y:"gross_profit",title:"Monthly Gross Profit ($)",yAxisTitle:"Gross Profit ($)"}}),Gt=new ar({props:{$$slots:{default:[dr]},$$scope:{ctx:s}}});let A=s[6]&&Ia(s);Wt=new Ue({props:{data:s[6],x:"category",y:"return_rate_pct",title:"Return & Cancellation Rate % by Category",yAxisTitle:"Return Rate %",swapXY:"true",colorPalette:["#dc2626"]}}),Yt=new Ue({props:{data:s[6],x:"category",y:["net_revenue","returned_revenue"],title:"Net Revenue vs Returned Revenue by Category",yAxisTitle:"Revenue ($)",swapXY:"true",type:"stacked"}}),qt=new Qe({props:{data:s[6],rows:"15"}});let b=s[7]&&Ha(s);xt=new lr({props:{name:"margin_category",data:s[7],value:"category",title:"Select Category",defaultValue:"Outerwear & Coats"}});let w=s[8]&&Fa(s);return zt=new Ue({props:{data:s[8],x:"brand",y:"gp_margin_pct",title:"GP Margin % — Top 20 Brands in "+s[0].margin_category,yAxisTitle:"GP Margin %",swapXY:"true"}}),Qt=new cr({props:{data:s[8],x:"discount_pct",y:"gp_margin_pct",size:"net_revenue",title:"Discount Rate vs GP Margin % (bubble size = Net Revenue)",xAxisTitle:"Discount Rate %",yAxisTitle:"GP Margin %"}}),jt=new Qe({props:{data:s[8],rows:"20",search:"true"}}),{c(){r=u(),Se.c(),l=v("meta"),a=v("meta"),m=Da(),d=u(),o=v("h1"),o.innerHTML=gt,te=u(),h=v("p"),h.innerHTML=Ne,B=u(),N(k.$$.fragment),K=u(),nt=v("hr"),vt=u(),Q=v("h2"),Q.innerHTML=ae,J=u(),$&&$.c(),W=u(),N(Y.$$.fragment),$t=u(),N(Z.$$.fragment),Mt=u(),N(I.$$.fragment),tt=u(),N(q.$$.fragment),yt=u(),N(et.$$.fragment),Ot=u(),N(H.$$.fragment),at=u(),N(V.$$.fragment),Dt=u(),dt=v("hr"),At=u(),L=v("h2"),L.innerHTML=ot,_t=u(),rt=v("p"),rt.textContent=re,bt=u(),M&&M.c(),x=u(),N(F.$$.fragment),ut=u(),N(lt.$$.fragment),wt=u(),St=v("hr"),st=u(),T=v("h2"),T.innerHTML=Ct,Lt=u(),y&&y.c(),ct=u(),j=v("h3"),j.innerHTML=mt,it=u(),N(z.$$.fragment),Tt=u(),X=v("h3"),X.innerHTML=le,se=u(),N(pt.$$.fragment),g=u(),G=v("h3"),G.innerHTML=ie,ne=u(),N(ft.$$.fragment),Ee=u(),pe=v("hr"),ve=u(),Ut=v("h2"),Ut.innerHTML=je,$e=u(),ht=v("p"),ht.textContent=Xe,Me=u(),O&&O.c(),oe=u(),N(kt.$$.fragment),ye=u(),N(It.$$.fragment),Oe=u(),fe=v("hr"),De=u(),Rt=v("h2"),Rt.innerHTML=Ke,Ae=u(),Ht=v("p"),Ht.textContent=Je,be=u(),D&&D.c(),_e=u(),N(Ft.$$.fragment),we=u(),N(Pt.$$.fragment),Ce=u(),N(Gt.$$.fragment),Le=u(),ge=v("hr"),Te=u(),Nt=v("h2"),Nt.innerHTML=Ze,he=u(),Bt=v("p"),Bt.textContent=ta,ke=u(),A&&A.c(),ue=u(),N(Wt.$$.fragment),Ie=u(),N(Yt.$$.fragment),He=u(),N(qt.$$.fragment),Fe=u(),de=v("hr"),Pe=u(),Et=v("h2"),Et.innerHTML=ea,Ge=u(),Vt=v("p"),Vt.textContent=aa,Be=u(),b&&b.c(),ce=u(),N(xt.$$.fragment),We=u(),w&&w.c(),me=u(),N(zt.$$.fragment),Ye=u(),N(Qt.$$.fragment),qe=u(),N(jt.$$.fragment),this.h()},l(t){r=_(t);const e=qa("svelte-2igo1p",document.head);Se.l(e),l=E(e,"META",{name:!0,content:!0}),a=E(e,"META",{name:!0,content:!0}),m=Da(),e.forEach(i),d=_(t),o=E(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),C(o)!=="svelte-16m2kk3"&&(o.innerHTML=gt),te=_(t),h=E(t,"P",{class:!0,"data-svelte-h":!0}),C(h)!=="svelte-1w9pn85"&&(h.innerHTML=Ne),B=_(t),R(k.$$.fragment,t),K=_(t),nt=E(t,"HR",{class:!0}),vt=_(t),Q=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),C(Q)!=="svelte-1oqdktn"&&(Q.innerHTML=ae),J=_(t),$&&$.l(t),W=_(t),R(Y.$$.fragment,t),$t=_(t),R(Z.$$.fragment,t),Mt=_(t),R(I.$$.fragment,t),tt=_(t),R(q.$$.fragment,t),yt=_(t),R(et.$$.fragment,t),Ot=_(t),R(H.$$.fragment,t),at=_(t),R(V.$$.fragment,t),Dt=_(t),dt=E(t,"HR",{class:!0}),At=_(t),L=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),C(L)!=="svelte-1i97u0c"&&(L.innerHTML=ot),_t=_(t),rt=E(t,"P",{class:!0,"data-svelte-h":!0}),C(rt)!=="svelte-145kv26"&&(rt.textContent=re),bt=_(t),M&&M.l(t),x=_(t),R(F.$$.fragment,t),ut=_(t),R(lt.$$.fragment,t),wt=_(t),St=E(t,"HR",{class:!0}),st=_(t),T=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),C(T)!=="svelte-1j3cr99"&&(T.innerHTML=Ct),Lt=_(t),y&&y.l(t),ct=_(t),j=E(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),C(j)!=="svelte-142y67h"&&(j.innerHTML=mt),it=_(t),R(z.$$.fragment,t),Tt=_(t),X=E(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),C(X)!=="svelte-8mdxth"&&(X.innerHTML=le),se=_(t),R(pt.$$.fragment,t),g=_(t),G=E(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),C(G)!=="svelte-msqngw"&&(G.innerHTML=ie),ne=_(t),R(ft.$$.fragment,t),Ee=_(t),pe=E(t,"HR",{class:!0}),ve=_(t),Ut=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),C(Ut)!=="svelte-14bx6iu"&&(Ut.innerHTML=je),$e=_(t),ht=E(t,"P",{class:!0,"data-svelte-h":!0}),C(ht)!=="svelte-1ea5z30"&&(ht.textContent=Xe),Me=_(t),O&&O.l(t),oe=_(t),R(kt.$$.fragment,t),ye=_(t),R(It.$$.fragment,t),Oe=_(t),fe=E(t,"HR",{class:!0}),De=_(t),Rt=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),C(Rt)!=="svelte-davo5a"&&(Rt.innerHTML=Ke),Ae=_(t),Ht=E(t,"P",{class:!0,"data-svelte-h":!0}),C(Ht)!=="svelte-8orose"&&(Ht.textContent=Je),be=_(t),D&&D.l(t),_e=_(t),R(Ft.$$.fragment,t),we=_(t),R(Pt.$$.fragment,t),Ce=_(t),R(Gt.$$.fragment,t),Le=_(t),ge=E(t,"HR",{class:!0}),Te=_(t),Nt=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),C(Nt)!=="svelte-hzts3n"&&(Nt.innerHTML=Ze),he=_(t),Bt=E(t,"P",{class:!0,"data-svelte-h":!0}),C(Bt)!=="svelte-dazg4v"&&(Bt.textContent=ta),ke=_(t),A&&A.l(t),ue=_(t),R(Wt.$$.fragment,t),Ie=_(t),R(Yt.$$.fragment,t),He=_(t),R(qt.$$.fragment,t),Fe=_(t),de=E(t,"HR",{class:!0}),Pe=_(t),Et=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),C(Et)!=="svelte-g3aj2i"&&(Et.innerHTML=ea),Ge=_(t),Vt=E(t,"P",{class:!0,"data-svelte-h":!0}),C(Vt)!=="svelte-12g2nh6"&&(Vt.textContent=aa),Be=_(t),b&&b.l(t),ce=_(t),R(xt.$$.fragment,t),We=_(t),w&&w.l(t),me=_(t),R(zt.$$.fragment,t),Ye=_(t),R(Qt.$$.fragment,t),qe=_(t),R(jt.$$.fragment,t),this.h()},h(){f(l,"name","twitter:card"),f(l,"content","summary_large_image"),f(a,"name","twitter:site"),f(a,"content","@evidence_dev"),f(o,"class","markdown"),f(o,"id","-gross-margin--discount-intelligence"),f(h,"class","markdown"),f(nt,"class","markdown"),f(Q,"class","markdown"),f(Q,"id","financial-summary"),f(dt,"class","markdown"),f(L,"class","markdown"),f(L,"id","pl-waterfall"),f(rt,"class","markdown"),f(St,"class","markdown"),f(T,"class","markdown"),f(T,"id","category-level-profitability"),f(j,"class","markdown"),f(j,"id","gp-margin--by-category"),f(X,"class","markdown"),f(X,"id","discount-rate--by-category"),f(G,"class","markdown"),f(G,"id","category-pl-summary-table"),f(pe,"class","markdown"),f(Ut,"class","markdown"),f(Ut,"id","price-tier--category-profitability-heatmap"),f(ht,"class","markdown"),f(fe,"class","markdown"),f(Rt,"class","markdown"),f(Rt,"id","monthly-gross-margin-trend"),f(Ht,"class","markdown"),f(ge,"class","markdown"),f(Nt,"class","markdown"),f(Nt,"id","return-rate-impact-by-category"),f(Bt,"class","markdown"),f(de,"class","markdown"),f(Et,"class","markdown"),f(Et,"id","interactive-brand-deep-dive"),f(Vt,"class","markdown")},m(t,e){n(t,r,e),Se.m(document.head,null),ze(document.head,l),ze(document.head,a),ze(document.head,m),n(t,d,e),n(t,o,e),n(t,te,e),n(t,h,e),n(t,B,e),U(k,t,e),n(t,K,e),n(t,nt,e),n(t,vt,e),n(t,Q,e),n(t,J,e),$&&$.m(t,e),n(t,W,e),U(Y,t,e),n(t,$t,e),U(Z,t,e),n(t,Mt,e),U(I,t,e),n(t,tt,e),U(q,t,e),n(t,yt,e),U(et,t,e),n(t,Ot,e),U(H,t,e),n(t,at,e),U(V,t,e),n(t,Dt,e),n(t,dt,e),n(t,At,e),n(t,L,e),n(t,_t,e),n(t,rt,e),n(t,bt,e),M&&M.m(t,e),n(t,x,e),U(F,t,e),n(t,ut,e),U(lt,t,e),n(t,wt,e),n(t,St,e),n(t,st,e),n(t,T,e),n(t,Lt,e),y&&y.m(t,e),n(t,ct,e),n(t,j,e),n(t,it,e),U(z,t,e),n(t,Tt,e),n(t,X,e),n(t,se,e),U(pt,t,e),n(t,g,e),n(t,G,e),n(t,ne,e),U(ft,t,e),n(t,Ee,e),n(t,pe,e),n(t,ve,e),n(t,Ut,e),n(t,$e,e),n(t,ht,e),n(t,Me,e),O&&O.m(t,e),n(t,oe,e),U(kt,t,e),n(t,ye,e),U(It,t,e),n(t,Oe,e),n(t,fe,e),n(t,De,e),n(t,Rt,e),n(t,Ae,e),n(t,Ht,e),n(t,be,e),D&&D.m(t,e),n(t,_e,e),U(Ft,t,e),n(t,we,e),U(Pt,t,e),n(t,Ce,e),U(Gt,t,e),n(t,Le,e),n(t,ge,e),n(t,Te,e),n(t,Nt,e),n(t,he,e),n(t,Bt,e),n(t,ke,e),A&&A.m(t,e),n(t,ue,e),U(Wt,t,e),n(t,Ie,e),U(Yt,t,e),n(t,He,e),U(qt,t,e),n(t,Fe,e),n(t,de,e),n(t,Pe,e),n(t,Et,e),n(t,Ge,e),n(t,Vt,e),n(t,Be,e),b&&b.m(t,e),n(t,ce,e),U(xt,t,e),n(t,We,e),w&&w.m(t,e),n(t,me,e),U(zt,t,e),n(t,Ye,e),U(Qt,t,e),n(t,qe,e),U(jt,t,e),Ve=!0},p(t,e){Se.p(t,e);const ra={};e[2]&1&&(ra.$$scope={dirty:e,ctx:t}),k.$set(ra),t[1]?$?($.p(t,e),e[0]&2&&c($,1)):($=Ca(t),$.c(),c($,1),$.m(W.parentNode,W)):$&&(Kt(),p($,1,1,()=>{$=null}),Xt());const la={};e[0]&2&&(la.data=t[1]),Y.$set(la);const sa={};e[0]&2&&(sa.data=t[1]),Z.$set(sa);const ia={};e[0]&2&&(ia.data=t[1]),I.$set(ia);const na={};e[0]&2&&(na.data=t[1]),q.$set(na);const oa={};e[0]&2&&(oa.data=t[1]),et.$set(oa);const _a={};e[0]&2&&(_a.data=t[1]),H.$set(_a);const ua={};e[0]&2&&(ua.data=t[1]),V.$set(ua),t[2]?M?(M.p(t,e),e[0]&4&&c(M,1)):(M=La(t),M.c(),c(M,1),M.m(x.parentNode,x)):M&&(Kt(),p(M,1,1,()=>{M=null}),Xt());const ca={};e[0]&4&&(ca.config={title:{text:"P&L Waterfall: Gross Retail → Gross Profit",left:"center",textStyle:{fontSize:14}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t[44]},xAxis:{type:"category",data:["Gross Retail","Discounts","Net Sales","COGS","Gross Profit"],axisLabel:{interval:0}},yAxis:{type:"value",axisLabel:{formatter:Pa}},series:[{name:"Platform",type:"bar",stack:"waterfall",silent:!0,itemStyle:{color:"transparent",borderColor:"transparent"},emphasis:{itemStyle:{color:"transparent",borderColor:"transparent"}},data:[0,t[2][0].net_sales,0,t[2][0].gross_profit,0]},{name:"Amount",type:"bar",stack:"waterfall",label:{show:!0,position:"top",formatter:t[45]},data:[{value:t[2][0].gross_retail,itemStyle:{color:"#2563eb"}},{value:t[2][0].discounts,itemStyle:{color:"#ef4444"}},{value:t[2][0].net_sales,itemStyle:{color:"#22c55e"}},{value:t[2][0].cogs,itemStyle:{color:"#f97316"}},{value:t[2][0].gross_profit,itemStyle:{color:"#16a34a"}}]}]}),F.$set(ca);const ma={};e[2]&1&&(ma.$$scope={dirty:e,ctx:t}),lt.$set(ma),t[3]?y?(y.p(t,e),e[0]&8&&c(y,1)):(y=Ta(t),y.c(),c(y,1),y.m(ct.parentNode,ct)):y&&(Kt(),p(y,1,1,()=>{y=null}),Xt());const pa={};e[0]&8&&(pa.data=t[3]),z.$set(pa);const fa={};e[0]&8&&(fa.data=t[3]),pt.$set(fa);const ga={};e[0]&8&&(ga.data=t[3]),ft.$set(ga),t[4]?O?(O.p(t,e),e[0]&16&&c(O,1)):(O=ha(t),O.c(),c(O,1),O.m(oe.parentNode,oe)):O&&(Kt(),p(O,1,1,()=>{O=null}),Xt());const da={};e[0]&16&&(da.data=t[4]),kt.$set(da);const Sa={};e[2]&1&&(Sa.$$scope={dirty:e,ctx:t}),It.$set(Sa),t[5]?D?(D.p(t,e),e[0]&32&&c(D,1)):(D=ka(t),D.c(),c(D,1),D.m(_e.parentNode,_e)):D&&(Kt(),p(D,1,1,()=>{D=null}),Xt());const Ua={};e[0]&32&&(Ua.data=t[5]),Ft.$set(Ua);const Ra={};e[0]&32&&(Ra.data=t[5]),Pt.$set(Ra);const Na={};e[2]&1&&(Na.$$scope={dirty:e,ctx:t}),Gt.$set(Na),t[6]?A?(A.p(t,e),e[0]&64&&c(A,1)):(A=Ia(t),A.c(),c(A,1),A.m(ue.parentNode,ue)):A&&(Kt(),p(A,1,1,()=>{A=null}),Xt());const Ea={};e[0]&64&&(Ea.data=t[6]),Wt.$set(Ea);const va={};e[0]&64&&(va.data=t[6]),Yt.$set(va);const $a={};e[0]&64&&($a.data=t[6]),qt.$set($a),t[7]?b?(b.p(t,e),e[0]&128&&c(b,1)):(b=Ha(t),b.c(),c(b,1),b.m(ce.parentNode,ce)):b&&(Kt(),p(b,1,1,()=>{b=null}),Xt());const Ma={};e[0]&128&&(Ma.data=t[7]),xt.$set(Ma),t[8]?w?(w.p(t,e),e[0]&256&&c(w,1)):(w=Fa(t),w.c(),c(w,1),w.m(me.parentNode,me)):w&&(Kt(),p(w,1,1,()=>{w=null}),Xt());const xe={};e[0]&256&&(xe.data=t[8]),e[0]&1&&(xe.title="GP Margin % — Top 20 Brands in "+t[0].margin_category),zt.$set(xe);const ya={};e[0]&256&&(ya.data=t[8]),Qt.$set(ya);const Oa={};e[0]&256&&(Oa.data=t[8]),jt.$set(Oa)},i(t){Ve||(c(k.$$.fragment,t),c($),c(Y.$$.fragment,t),c(Z.$$.fragment,t),c(I.$$.fragment,t),c(q.$$.fragment,t),c(et.$$.fragment,t),c(H.$$.fragment,t),c(V.$$.fragment,t),c(M),c(F.$$.fragment,t),c(lt.$$.fragment,t),c(y),c(z.$$.fragment,t),c(pt.$$.fragment,t),c(ft.$$.fragment,t),c(O),c(kt.$$.fragment,t),c(It.$$.fragment,t),c(D),c(Ft.$$.fragment,t),c(Pt.$$.fragment,t),c(Gt.$$.fragment,t),c(A),c(Wt.$$.fragment,t),c(Yt.$$.fragment,t),c(qt.$$.fragment,t),c(b),c(xt.$$.fragment,t),c(w),c(zt.$$.fragment,t),c(Qt.$$.fragment,t),c(jt.$$.fragment,t),Ve=!0)},o(t){p(k.$$.fragment,t),p($),p(Y.$$.fragment,t),p(Z.$$.fragment,t),p(I.$$.fragment,t),p(q.$$.fragment,t),p(et.$$.fragment,t),p(H.$$.fragment,t),p(V.$$.fragment,t),p(M),p(F.$$.fragment,t),p(lt.$$.fragment,t),p(y),p(z.$$.fragment,t),p(pt.$$.fragment,t),p(ft.$$.fragment,t),p(O),p(kt.$$.fragment,t),p(It.$$.fragment,t),p(D),p(Ft.$$.fragment,t),p(Pt.$$.fragment,t),p(Gt.$$.fragment,t),p(A),p(Wt.$$.fragment,t),p(Yt.$$.fragment,t),p(qt.$$.fragment,t),p(b),p(xt.$$.fragment,t),p(w),p(zt.$$.fragment,t),p(Qt.$$.fragment,t),p(jt.$$.fragment,t),Ve=!1},d(t){t&&(i(r),i(d),i(o),i(te),i(h),i(B),i(K),i(nt),i(vt),i(Q),i(J),i(W),i($t),i(Mt),i(tt),i(yt),i(Ot),i(at),i(Dt),i(dt),i(At),i(L),i(_t),i(rt),i(bt),i(x),i(ut),i(wt),i(St),i(st),i(T),i(Lt),i(ct),i(j),i(it),i(Tt),i(X),i(se),i(g),i(G),i(ne),i(Ee),i(pe),i(ve),i(Ut),i($e),i(ht),i(Me),i(oe),i(ye),i(Oe),i(fe),i(De),i(Rt),i(Ae),i(Ht),i(be),i(_e),i(we),i(Ce),i(Le),i(ge),i(Te),i(Nt),i(he),i(Bt),i(ke),i(ue),i(Ie),i(He),i(Fe),i(de),i(Pe),i(Et),i(Ge),i(Vt),i(Be),i(ce),i(We),i(me),i(Ye),i(qe)),Se.d(t),i(l),i(a),i(m),S(k,t),$&&$.d(t),S(Y,t),S(Z,t),S(I,t),S(q,t),S(et,t),S(H,t),S(V,t),M&&M.d(t),S(F,t),S(lt,t),y&&y.d(t),S(z,t),S(pt,t),S(ft,t),O&&O.d(t),S(kt,t),S(It,t),D&&D.d(t),S(Ft,t),S(Pt,t),S(Gt,t),A&&A.d(t),S(Wt,t),S(Yt,t),S(qt,t),b&&b.d(t),S(xt,t),w&&w.d(t),S(zt,t),S(Qt,t),S(jt,t)}}}const Pa=s=>"$"+(s/1e6).toFixed(0)+"M";function Ur(s,r,l){let a,m;Aa(s,sr,g=>l(43,a=g)),Aa(s,ba,g=>l(50,m=g));let{data:d}=r,{data:o={},customFormattingSettings:gt,__db:te,inputs:h}=d;Va(ba,m="1429a88e8aa418b5b22cf0ebb6078a93",m);let Ne=Ka(er(h));xa(Ne.subscribe(g=>l(0,h=g))),za(tr,{getCustomFormats:()=>gt.customFormats||[]});const B=(g,G)=>rr(te.query,g,{query_name:G});Ja(B),a.params,Qa(()=>!0);let k={initialData:void 0,initialError:void 0},K=P`SELECT
  ROUND(SUM(total_retail_value))    AS gross_retail,
  ROUND(SUM(total_discount))        AS total_discounts,
  ROUND(SUM(total_sale_value))      AS net_revenue,
  ROUND(SUM(total_cost))            AS total_cogs,
  ROUND(SUM(total_gross_profit))    AS gross_profit,
  ROUND(SUM(total_discount)  / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS avg_discount_rate,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value),  0) * 100, 1) AS gp_margin_pct
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')`,nt=`SELECT
  ROUND(SUM(total_retail_value))    AS gross_retail,
  ROUND(SUM(total_discount))        AS total_discounts,
  ROUND(SUM(total_sale_value))      AS net_revenue,
  ROUND(SUM(total_cost))            AS total_cogs,
  ROUND(SUM(total_gross_profit))    AS gross_profit,
  ROUND(SUM(total_discount)  / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS avg_discount_rate,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value),  0) * 100, 1) AS gp_margin_pct
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')`;o.margin_kpis_data&&(o.margin_kpis_data instanceof Error?k.initialError=o.margin_kpis_data:k.initialData=o.margin_kpis_data,o.margin_kpis_columns&&(k.knownColumns=o.margin_kpis_columns));let vt,Q=!1;const ae=Jt.createReactive({callback:g=>{l(1,vt=g)},execFn:B},{id:"margin_kpis",...k});ae(nt,{noResolve:K,...k}),globalThis[Symbol.for("margin_kpis")]={get value(){return vt}};let J={initialData:void 0,initialError:void 0},W=P`SELECT
  ROUND(SUM(total_retail_value))                                          AS gross_retail,
  ROUND(SUM(total_discount))                                              AS discounts,
  ROUND(SUM(total_sale_value))                                            AS net_sales,
  ROUND(SUM(total_cost))                                                  AS cogs,
  ROUND(SUM(total_gross_profit))                                          AS gross_profit
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')`,Y=`SELECT
  ROUND(SUM(total_retail_value))                                          AS gross_retail,
  ROUND(SUM(total_discount))                                              AS discounts,
  ROUND(SUM(total_sale_value))                                            AS net_sales,
  ROUND(SUM(total_cost))                                                  AS cogs,
  ROUND(SUM(total_gross_profit))                                          AS gross_profit
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')`;o.pnl_stages_data&&(o.pnl_stages_data instanceof Error?J.initialError=o.pnl_stages_data:J.initialData=o.pnl_stages_data,o.pnl_stages_columns&&(J.knownColumns=o.pnl_stages_columns));let $t,Z=!1;const Mt=Jt.createReactive({callback:g=>{l(2,$t=g)},execFn:B},{id:"pnl_stages",...J});Mt(Y,{noResolve:W,...J}),globalThis[Symbol.for("pnl_stages")]={get value(){return $t}};let I={initialData:void 0,initialError:void 0},tt=P`SELECT
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
ORDER BY gp_margin_pct DESC`,q=`SELECT
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
ORDER BY gp_margin_pct DESC`;o.category_margin_data&&(o.category_margin_data instanceof Error?I.initialError=o.category_margin_data:I.initialData=o.category_margin_data,o.category_margin_columns&&(I.knownColumns=o.category_margin_columns));let yt,et=!1;const Ot=Jt.createReactive({callback:g=>{l(3,yt=g)},execFn:B},{id:"category_margin",...I});Ot(q,{noResolve:tt,...I}),globalThis[Symbol.for("category_margin")]={get value(){return yt}};let H={initialData:void 0,initialError:void 0},at=P`SELECT
  price_tier,
  category,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1) AS gp_margin_pct,
  SUM(item_count)                                                              AS total_items,
  ROUND(SUM(total_sale_value))                                                 AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY price_tier, category
ORDER BY price_tier, category`,V=`SELECT
  price_tier,
  category,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1) AS gp_margin_pct,
  SUM(item_count)                                                              AS total_items,
  ROUND(SUM(total_sale_value))                                                 AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY price_tier, category
ORDER BY price_tier, category`;o.price_tier_heatmap_data&&(o.price_tier_heatmap_data instanceof Error?H.initialError=o.price_tier_heatmap_data:H.initialData=o.price_tier_heatmap_data,o.price_tier_heatmap_columns&&(H.knownColumns=o.price_tier_heatmap_columns));let Dt,dt=!1;const At=Jt.createReactive({callback:g=>{l(4,Dt=g)},execFn:B},{id:"price_tier_heatmap",...H});At(V,{noResolve:at,...H}),globalThis[Symbol.for("price_tier_heatmap")]={get value(){return Dt}};let L={initialData:void 0,initialError:void 0},ot=P`SELECT
  order_month                                                                   AS month,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_rate_pct,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`,_t=`SELECT
  order_month                                                                   AS month,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_rate_pct,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`;o.monthly_gp_trend_data&&(o.monthly_gp_trend_data instanceof Error?L.initialError=o.monthly_gp_trend_data:L.initialData=o.monthly_gp_trend_data,o.monthly_gp_trend_columns&&(L.knownColumns=o.monthly_gp_trend_columns));let rt,re=!1;const bt=Jt.createReactive({callback:g=>{l(5,rt=g)},execFn:B},{id:"monthly_gp_trend",...L});bt(_t,{noResolve:ot,...L}),globalThis[Symbol.for("monthly_gp_trend")]={get value(){return rt}};let x={initialData:void 0,initialError:void 0},F=P`SELECT
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
ORDER BY return_rate_pct DESC`,ut=`SELECT
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
ORDER BY return_rate_pct DESC`;o.return_impact_data&&(o.return_impact_data instanceof Error?x.initialError=o.return_impact_data:x.initialData=o.return_impact_data,o.return_impact_columns&&(x.knownColumns=o.return_impact_columns));let lt,wt=!1;const St=Jt.createReactive({callback:g=>{l(6,lt=g)},execFn:B},{id:"return_impact",...x});St(ut,{noResolve:F,...x}),globalThis[Symbol.for("return_impact")]={get value(){return lt}};let st={initialData:void 0,initialError:void 0},T=P`SELECT DISTINCT category FROM price_intelligence ORDER BY category`,Ct="SELECT DISTINCT category FROM price_intelligence ORDER BY category";o.brand_categories_data&&(o.brand_categories_data instanceof Error?st.initialError=o.brand_categories_data:st.initialData=o.brand_categories_data,o.brand_categories_columns&&(st.knownColumns=o.brand_categories_columns));let Lt,ct=!1;const j=Jt.createReactive({callback:g=>{l(7,Lt=g)},execFn:B},{id:"brand_categories",...st});j(Ct,{noResolve:T,...st}),globalThis[Symbol.for("brand_categories")]={get value(){return Lt}};let mt={initialData:void 0,initialError:void 0},it=P`SELECT
  brand,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_pct,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  SUM(item_count)                                                               AS items_sold
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
  AND category = '${h.margin_category}'
GROUP BY brand
HAVING net_revenue > 500
ORDER BY gp_margin_pct DESC
LIMIT 20`,z=`SELECT
  brand,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_pct,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  SUM(item_count)                                                               AS items_sold
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
  AND category = '${h.margin_category}'
GROUP BY brand
HAVING net_revenue > 500
ORDER BY gp_margin_pct DESC
LIMIT 20`;o.brand_gp_data&&(o.brand_gp_data instanceof Error?mt.initialError=o.brand_gp_data:mt.initialData=o.brand_gp_data,o.brand_gp_columns&&(mt.knownColumns=o.brand_gp_columns));let Tt,X=!1;const le=Jt.createReactive({callback:g=>{l(8,Tt=g)},execFn:B},{id:"brand_gp",...mt});le(z,{noResolve:it,...mt}),globalThis[Symbol.for("brand_gp")]={get value(){return Tt}};const se=g=>{const G=g[0].name,ie=g.find(ft=>ft.seriesName==="Amount");if(!ie)return G;const ne=ie.value<0?"-":"";return`<b>${G}</b><br/>$${ne}${Math.abs(ie.value/1e6).toFixed(1)}M`},pt=g=>"$"+(g.value<0?"-":"")+Math.abs(g.value/1e6).toFixed(1)+"M";return s.$$set=g=>{"data"in g&&l(9,d=g.data)},s.$$.update=()=>{s.$$.dirty[0]&512&&l(10,{data:o={},customFormattingSettings:gt,__db:te}=d,o),s.$$.dirty[0]&1024&&Za.set(Object.keys(o).length>0),s.$$.dirty[1]&4096&&a.params,s.$$.dirty[0]&30720&&(K||!Q?K||(ae(nt,{noResolve:K,...k}),l(14,Q=!0)):ae(nt,{noResolve:K})),s.$$.dirty[0]&491520&&(W||!Z?W||(Mt(Y,{noResolve:W,...J}),l(18,Z=!0)):Mt(Y,{noResolve:W})),s.$$.dirty[0]&7864320&&(tt||!et?tt||(Ot(q,{noResolve:tt,...I}),l(22,et=!0)):Ot(q,{noResolve:tt})),s.$$.dirty[0]&125829120&&(at||!dt?at||(At(V,{noResolve:at,...H}),l(26,dt=!0)):At(V,{noResolve:at})),s.$$.dirty[0]&2013265920&&(ot||!re?ot||(bt(_t,{noResolve:ot,...L}),l(30,re=!0)):bt(_t,{noResolve:ot})),s.$$.dirty[1]&15&&(F||!wt?F||(St(ut,{noResolve:F,...x}),l(34,wt=!0)):St(ut,{noResolve:F})),s.$$.dirty[1]&240&&(T||!ct?T||(j(Ct,{noResolve:T,...st}),l(38,ct=!0)):j(Ct,{noResolve:T})),s.$$.dirty[0]&1&&l(40,it=P`SELECT
  brand,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_pct,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  SUM(item_count)                                                               AS items_sold
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
  AND category = '${h.margin_category}'
GROUP BY brand
HAVING net_revenue > 500
ORDER BY gp_margin_pct DESC
LIMIT 20`),s.$$.dirty[0]&1&&l(41,z=`SELECT
  brand,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_pct,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  SUM(item_count)                                                               AS items_sold
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
  AND category = '${h.margin_category}'
GROUP BY brand
HAVING net_revenue > 500
ORDER BY gp_margin_pct DESC
LIMIT 20`),s.$$.dirty[1]&3840&&(it||!X?it||(le(z,{noResolve:it,...mt}),l(42,X=!0)):le(z,{noResolve:it}))},l(12,K=P`SELECT
  ROUND(SUM(total_retail_value))    AS gross_retail,
  ROUND(SUM(total_discount))        AS total_discounts,
  ROUND(SUM(total_sale_value))      AS net_revenue,
  ROUND(SUM(total_cost))            AS total_cogs,
  ROUND(SUM(total_gross_profit))    AS gross_profit,
  ROUND(SUM(total_discount)  / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS avg_discount_rate,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value),  0) * 100, 1) AS gp_margin_pct
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')`),l(13,nt=`SELECT
  ROUND(SUM(total_retail_value))    AS gross_retail,
  ROUND(SUM(total_discount))        AS total_discounts,
  ROUND(SUM(total_sale_value))      AS net_revenue,
  ROUND(SUM(total_cost))            AS total_cogs,
  ROUND(SUM(total_gross_profit))    AS gross_profit,
  ROUND(SUM(total_discount)  / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS avg_discount_rate,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value),  0) * 100, 1) AS gp_margin_pct
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')`),l(16,W=P`SELECT
  ROUND(SUM(total_retail_value))                                          AS gross_retail,
  ROUND(SUM(total_discount))                                              AS discounts,
  ROUND(SUM(total_sale_value))                                            AS net_sales,
  ROUND(SUM(total_cost))                                                  AS cogs,
  ROUND(SUM(total_gross_profit))                                          AS gross_profit
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')`),l(17,Y=`SELECT
  ROUND(SUM(total_retail_value))                                          AS gross_retail,
  ROUND(SUM(total_discount))                                              AS discounts,
  ROUND(SUM(total_sale_value))                                            AS net_sales,
  ROUND(SUM(total_cost))                                                  AS cogs,
  ROUND(SUM(total_gross_profit))                                          AS gross_profit
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')`),l(20,tt=P`SELECT
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
ORDER BY gp_margin_pct DESC`),l(21,q=`SELECT
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
ORDER BY gp_margin_pct DESC`),l(24,at=P`SELECT
  price_tier,
  category,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1) AS gp_margin_pct,
  SUM(item_count)                                                              AS total_items,
  ROUND(SUM(total_sale_value))                                                 AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY price_tier, category
ORDER BY price_tier, category`),l(25,V=`SELECT
  price_tier,
  category,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1) AS gp_margin_pct,
  SUM(item_count)                                                              AS total_items,
  ROUND(SUM(total_sale_value))                                                 AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY price_tier, category
ORDER BY price_tier, category`),l(28,ot=P`SELECT
  order_month                                                                   AS month,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_rate_pct,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`),l(29,_t=`SELECT
  order_month                                                                   AS month,
  ROUND(SUM(total_gross_profit) / NULLIF(SUM(total_sale_value), 0) * 100, 1)  AS gp_margin_pct,
  ROUND(SUM(total_discount)     / NULLIF(SUM(total_retail_value), 0) * 100, 1) AS discount_rate_pct,
  ROUND(SUM(total_gross_profit))                                                AS gross_profit,
  ROUND(SUM(total_sale_value))                                                  AS net_revenue
FROM price_intelligence
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`),l(32,F=P`SELECT
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
ORDER BY return_rate_pct DESC`),l(33,ut=`SELECT
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
ORDER BY return_rate_pct DESC`),l(36,T=P`SELECT DISTINCT category FROM price_intelligence ORDER BY category`),l(37,Ct="SELECT DISTINCT category FROM price_intelligence ORDER BY category"),[h,vt,$t,yt,Dt,rt,lt,Lt,Tt,d,o,k,K,nt,Q,J,W,Y,Z,I,tt,q,et,H,at,V,dt,L,ot,_t,re,x,F,ut,wt,st,T,Ct,ct,mt,it,z,X,a,se,pt]}class Ir extends ja{constructor(r){super(),Xa(this,r,Ur,Sr,Ya,{data:9},null,[-1,-1,-1])}}export{Ir as component};
