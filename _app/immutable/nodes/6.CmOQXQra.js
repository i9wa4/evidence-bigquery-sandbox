import{s as Dr,d as a,i,a as Lt,b as h,c as m,h as br,e as p,f as cr,g as N,j as c,k as E,l as ur,m as wr,o as kr,n as Mr,p as Hr,r as Ur,t as Lr,q as ct}from"../chunks/scheduler.DClYbTPH.js";import{S as Fr,i as Ir,d as R,t as f,a as u,c as $e,m as g,b as S,e as A,g as ye}from"../chunks/index.zouyAMnr.js";import{D as qr,e as Br,s as Vr,Q as Oe,p as Gr,r as fr,C as Wr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CwcUAajX.js";import{w as Yr}from"../chunks/entry.IMkKA3oW.js";import{h as M,p as zr}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Pr}from"../chunks/stores.CT8r0Jdl.js";import{N as xr,D as Ft}from"../chunks/Note.C6630fbn.js";import{E as Xr,Q as De}from"../chunks/Chart.CrBJItqB.js";import{B as hr}from"../chunks/BarChart.UeZRpVQc.js";import{B as rt}from"../chunks/BigValue.DCtb8hY2.js";import{H as Qr}from"../chunks/Heatmap.L93TqICa.js";import{L as vr}from"../chunks/LineChart.C32e3eg6.js";import{S as jr}from"../chunks/ScatterPlot.DU5cDO4s.js";function Jr(s){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:ct,p:ct,d:ct}}function Kr(s){let o;return{c(){o=Lr(`Cohorts are defined by the month of a customer's first completed purchase.
Retention rate is the share of cohort members who placed at least one order in a given month after joining.`)},l(n){o=Ur(n,`Cohorts are defined by the month of a customer's first completed purchase.
Retention rate is the share of cohort members who placed at least one order in a given month after joining.`)},m(n,r){i(n,o,r)},d(n){n&&a(o)}}}function dr(s){let o,n;return o=new De({props:{queryID:"cohort_kpis",queryResult:s[0]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&1&&(v.queryResult=r[0]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function pr(s){let o,n;return o=new De({props:{queryID:"cohort_heatmap",queryResult:s[1]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&2&&(v.queryResult=r[1]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function Zr(s){let o,n='<li class="markdown"><strong class="markdown">Rows</strong> represent customer cohorts (the month they first purchased).</li> <li class="markdown"><strong class="markdown">Columns</strong> represent months elapsed since first purchase (0 = acquisition month).</li> <li class="markdown"><strong class="markdown">Color intensity</strong> reflects retention rate: darker = higher retention.</li> <li class="markdown">A gradual fade from left to right is normal; a steep drop-off suggests churn risk.</li>';return{c(){o=E("ul"),o.innerHTML=n,this.h()},l(r){o=p(r,"UL",{class:!0,"data-svelte-h":!0}),N(o)!=="svelte-huhfxo"&&(o.innerHTML=n),this.h()},h(){h(o,"class","markdown")},m(r,_){i(r,o,_)},p:ct,d(r){r&&a(o)}}}function Er(s){let o,n;return o=new De({props:{queryID:"retention_trend",queryResult:s[2]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&4&&(v.queryResult=r[2]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function Rr(s){let o,n;return o=new De({props:{queryID:"cohort_sizes",queryResult:s[3]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&8&&(v.queryResult=r[3]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function gr(s){let o,n;return o=new De({props:{queryID:"cumulative_ltv",queryResult:s[4]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&16&&(v.queryResult=r[4]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function eo(s){let o,n="Each line represents one cohort.",r,_,v='<li class="markdown">The <strong class="markdown">y-axis</strong> shows how much cumulative revenue has been earned per original cohort member.</li> <li class="markdown">The <strong class="markdown">x-axis</strong> shows months since that cohort first purchased.</li> <li class="markdown">Cohorts that plateau early suggest customers are not returning for repeat purchases.</li> <li class="markdown">Rising curves indicate strong repeat-purchase behavior.</li>';return{c(){o=E("p"),o.textContent=n,r=c(),_=E("ul"),_.innerHTML=v,this.h()},l(l){o=p(l,"P",{class:!0,"data-svelte-h":!0}),N(o)!=="svelte-1xqg81r"&&(o.textContent=n),r=m(l),_=p(l,"UL",{class:!0,"data-svelte-h":!0}),N(_)!=="svelte-1mrvkoq"&&(_.innerHTML=v),this.h()},h(){h(o,"class","markdown"),h(_,"class","markdown")},m(l,z){i(l,o,z),i(l,r,z),i(l,_,z)},p:ct,d(l){l&&(a(o),a(r),a(_))}}}function Sr(s){let o,n;return o=new De({props:{queryID:"segment_summary",queryResult:s[5]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&32&&(v.queryResult=r[5]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function Ar(s){let o,n;return o=new De({props:{queryID:"segment_kpis",queryResult:s[6]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&64&&(v.queryResult=r[6]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function Nr(s){let o,n;return o=new De({props:{queryID:"rfm_scatter",queryResult:s[7]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&128&&(v.queryResult=r[7]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function Tr(s){let o,n;return o=new De({props:{queryID:"segment_details",queryResult:s[8]}}),{c(){A(o.$$.fragment)},l(r){S(o.$$.fragment,r)},m(r,_){g(o,r,_),n=!0},p(r,_){const v={};_[0]&256&&(v.queryResult=r[8]),o.$set(v)},i(r){n||(u(o.$$.fragment,r),n=!0)},o(r){f(o.$$.fragment,r),n=!1},d(r){R(o,r)}}}function to(s){let o,n='<thead class="markdown"><tr class="markdown"><th class="markdown">Segment</th> <th class="markdown">Description</th></tr></thead> <tbody class="markdown"><tr class="markdown"><td class="markdown"><strong class="markdown">Champions</strong></td> <td class="markdown">Bought recently, buy often, spend the most</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">Loyal Customers</strong></td> <td class="markdown">Regular buyers with solid spend</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">Potential Loyalists</strong></td> <td class="markdown">Recent buyers with above-average spend, low frequency</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">New Customers</strong></td> <td class="markdown">Bought recently but only once</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">Needs Attention</strong></td> <td class="markdown">Average scores across all dimensions</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">At Risk</strong></td> <td class="markdown">Once-regular buyers who haven&#39;t returned recently</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">Cannot Lose Them</strong></td> <td class="markdown">High-frequency buyers who have lapsed</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">Lost</strong></td> <td class="markdown">Lowest recency and frequency — need win-back campaigns</td></tr></tbody>',r,_,v='RFM scores are quintile-based (1–5 per dimension). Scores are computed independently using <code class="markdown">NTILE(5)</code> window functions across all customers.';return{c(){o=E("table"),o.innerHTML=n,r=c(),_=E("p"),_.innerHTML=v,this.h()},l(l){o=p(l,"TABLE",{class:!0,"data-svelte-h":!0}),N(o)!=="svelte-7and15"&&(o.innerHTML=n),r=m(l),_=p(l,"P",{class:!0,"data-svelte-h":!0}),N(_)!=="svelte-1k8d048"&&(_.innerHTML=v),this.h()},h(){h(o,"class","markdown"),h(_,"class","markdown")},m(l,z){i(l,o,z),i(l,r,z),i(l,_,z)},p:ct,d(l){l&&(a(o),a(r),a(_))}}}function ro(s){let o,n,r,_,v,l,z='<a href="#-cohort-analysis--customer-lifetime-value">🔄 Cohort Analysis &amp; Customer Lifetime Value</a>',tt,ue,vt='Advanced customer analytics using <strong class="markdown">cohort retention matrices</strong>, <strong class="markdown">cumulative LTV curves</strong>, and <strong class="markdown">RFM segmentation</strong> — the gold standard toolkit for understanding customer loyalty and lifetime value.',q,F,x,X,Q,be,j,J,I,fe,K,we,Ee,Z,H,ke='<a href="#cohort-retention-matrix">Cohort Retention Matrix</a>',Me,ee,ot=`Each cell shows the percentage of customers from that cohort who were still purchasing in that period.
Period 0 = acquisition month (always ~100 %), Period 1 = one month later, and so on.`,te,V,G,He,re,Ue,P,oe,B,nt='<a href="#retention-rate-trends">Retention Rate Trends</a>',Le,ne,he="Track whether retention is improving or declining across recent cohorts.",se,ae,le,Fe,Re,ie,U,Ie='<a href="#new-customer-acquisition-by-month">New-Customer Acquisition by Month</a>',qe,_e,st="How many new customers are we gaining each month?",me,W,Y,Be,ge,Ve,L,ve='<a href="#cumulative-ltv-curves-by-cohort">Cumulative LTV Curves by Cohort</a>',de,ce,at=`How much cumulative revenue does each cohort generate <strong class="markdown">per original cohort member</strong> as time passes?
Steeper curves indicate higher-value cohorts.`,Ge,d,pe,dt,We,pt,ut,Et,Se,It='<a href="#rfm-customer-segmentation">RFM Customer Segmentation</a>',Rt,lt,it,Ye,gt,ze,St,Pe,At,Ae,qt='<a href="#segment-size--value--treemap">Segment Size &amp; Value — Treemap</a>',Nt,xe,Bt="Each rectangle is sized by customer count; tooltip shows average LTV per segment.",Tt,Xe,Ct,Ne,Vt='<a href="#recency-vs-frequency-scatter-by-segment">Recency vs Frequency Scatter (by Segment)</a>',$t,Qe,Gt=`Each dot is a customer. X-axis = days since last purchase (lower = more recent), Y-axis = total orders.
Color = RFM segment. Ideal customers appear in the top-left corner.`,yt,_t,je,Ot,Te,Wt='<a href="#segment-performance-details">Segment Performance Details</a>',Dt,mt,Je,bt,ft,wt,Ce,Yt='<a href="#average-ltv-by-segment">Average LTV by Segment</a>',kt,Ke,zt="Which customer segments generate the most value per person?",Mt,Ze,Ht,et,Ut;function Or(e,t){return Jr}let ht=Or()(s);F=new xr({props:{$$slots:{default:[Kr]},$$scope:{ctx:s}}});let T=s[0]&&dr(s);Q=new rt({props:{data:s[0],value:"total_cohorts",title:"Cohorts Analyzed"}}),j=new rt({props:{data:s[0],value:"total_customers",title:"Total New Customers",fmt:"#,##0"}}),I=new rt({props:{data:s[0],value:"avg_m1_retention",title:"Avg M1 Retention %",fmt:"#,##0.0"}}),K=new rt({props:{data:s[0],value:"avg_m3_retention",title:"Avg M3 Retention %",fmt:"#,##0.0"}});let C=s[1]&&pr(s);G=new Qr({props:{data:s[1],x:"period_number",y:"cohort_month",value:"retention_rate",title:"Cohort Retention Rate (%) — Period 0 to 12"}}),re=new Ft({props:{title:"How to read this heatmap",$$slots:{default:[Zr]},$$scope:{ctx:s}}});let $=s[2]&&Er(s);le=new vr({props:{data:s[2],x:"cohort_month",y:["m1_retention","m3_retention","m6_retention"],title:"Retention Rate by Cohort: Month 1 / 3 / 6",yAxisTitle:"Retention %",xAxisTitle:"Cohort Month"}});let y=s[3]&&Rr(s);Y=new hr({props:{data:s[3],x:"cohort_month",y:"new_customers",title:"New Customers per Cohort Month",yAxisTitle:"New Customers",xAxisTitle:"Cohort Month"}});let O=s[4]&&gr(s);pe=new vr({props:{data:s[4],x:"period_number",y:"cumulative_ltv_per_user",series:"cohort_month",title:"Cumulative LTV per Cohort Member (Last 8 Cohorts)",yAxisTitle:"Cumulative Revenue per User ($)",xAxisTitle:"Months Since First Purchase"}}),We=new Ft({props:{title:"LTV curve interpretation",$$slots:{default:[eo]},$$scope:{ctx:s}}});let D=s[5]&&Sr(s),b=s[6]&&Ar(s);Ye=new rt({props:{data:s[6],value:"total_customers",title:"Customers Segmented",fmt:"#,##0"}}),ze=new rt({props:{data:s[6],value:"overall_avg_ltv",title:"Overall Avg LTV",fmt:"$#,##0.00"}}),Pe=new rt({props:{data:s[6],value:"overall_avg_rfm",title:"Overall Avg RFM Score",fmt:"#,##0.0"}}),Xe=new Xr({props:{config:{tooltip:{trigger:"item",formatter:Cr},series:[{type:"treemap",roam:!1,leafDepth:1,label:{show:!0,formatter:$r,fontSize:12,fontWeight:"bold",color:"#fff"},upperLabel:{show:!1},itemStyle:{borderWidth:2,borderColor:"#fff"},data:s[5].map(yr)}]},height:420}});let w=s[7]&&Nr(s);je=new jr({props:{data:s[7],x:"recency_days",y:"order_count",series:"customer_segment",title:"Recency vs Frequency by Customer Segment",xAxisTitle:"Days Since Last Purchase (lower = more recent)",yAxisTitle:"Number of Orders"}});let k=s[8]&&Tr(s);return Je=new qr({props:{data:s[8],rows:"10"}}),Ze=new hr({props:{data:s[5],x:"customer_segment",y:"avg_ltv",title:"Average Lifetime Value by RFM Segment",yAxisTitle:"Avg LTV ($)",xAxisTitle:"Customer Segment",swapXY:"true"}}),et=new Ft({props:{title:"RFM segment definitions",$$slots:{default:[to]},$$scope:{ctx:s}}}),{c(){o=c(),ht.c(),n=E("meta"),r=E("meta"),_=cr(),v=c(),l=E("h1"),l.innerHTML=z,tt=c(),ue=E("p"),ue.innerHTML=vt,q=c(),A(F.$$.fragment),x=c(),T&&T.c(),X=c(),A(Q.$$.fragment),be=c(),A(j.$$.fragment),J=c(),A(I.$$.fragment),fe=c(),A(K.$$.fragment),we=c(),Ee=E("hr"),Z=c(),H=E("h2"),H.innerHTML=ke,Me=c(),ee=E("p"),ee.textContent=ot,te=c(),C&&C.c(),V=c(),A(G.$$.fragment),He=c(),A(re.$$.fragment),Ue=c(),P=E("hr"),oe=c(),B=E("h2"),B.innerHTML=nt,Le=c(),ne=E("p"),ne.textContent=he,se=c(),$&&$.c(),ae=c(),A(le.$$.fragment),Fe=c(),Re=E("hr"),ie=c(),U=E("h2"),U.innerHTML=Ie,qe=c(),_e=E("p"),_e.textContent=st,me=c(),y&&y.c(),W=c(),A(Y.$$.fragment),Be=c(),ge=E("hr"),Ve=c(),L=E("h2"),L.innerHTML=ve,de=c(),ce=E("p"),ce.innerHTML=at,Ge=c(),O&&O.c(),d=c(),A(pe.$$.fragment),dt=c(),A(We.$$.fragment),pt=c(),ut=E("hr"),Et=c(),Se=E("h2"),Se.innerHTML=It,Rt=c(),D&&D.c(),lt=c(),b&&b.c(),it=c(),A(Ye.$$.fragment),gt=c(),A(ze.$$.fragment),St=c(),A(Pe.$$.fragment),At=c(),Ae=E("h3"),Ae.innerHTML=qt,Nt=c(),xe=E("p"),xe.textContent=Bt,Tt=c(),A(Xe.$$.fragment),Ct=c(),Ne=E("h3"),Ne.innerHTML=Vt,$t=c(),Qe=E("p"),Qe.textContent=Gt,yt=c(),w&&w.c(),_t=c(),A(je.$$.fragment),Ot=c(),Te=E("h3"),Te.innerHTML=Wt,Dt=c(),k&&k.c(),mt=c(),A(Je.$$.fragment),bt=c(),ft=E("hr"),wt=c(),Ce=E("h2"),Ce.innerHTML=Yt,kt=c(),Ke=E("p"),Ke.textContent=zt,Mt=c(),A(Ze.$$.fragment),Ht=c(),A(et.$$.fragment),this.h()},l(e){o=m(e);const t=br("svelte-2igo1p",document.head);ht.l(t),n=p(t,"META",{name:!0,content:!0}),r=p(t,"META",{name:!0,content:!0}),_=cr(),t.forEach(a),v=m(e),l=p(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),N(l)!=="svelte-3kqhcs"&&(l.innerHTML=z),tt=m(e),ue=p(e,"P",{class:!0,"data-svelte-h":!0}),N(ue)!=="svelte-1tm42rv"&&(ue.innerHTML=vt),q=m(e),S(F.$$.fragment,e),x=m(e),T&&T.l(e),X=m(e),S(Q.$$.fragment,e),be=m(e),S(j.$$.fragment,e),J=m(e),S(I.$$.fragment,e),fe=m(e),S(K.$$.fragment,e),we=m(e),Ee=p(e,"HR",{class:!0}),Z=m(e),H=p(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),N(H)!=="svelte-estdgw"&&(H.innerHTML=ke),Me=m(e),ee=p(e,"P",{class:!0,"data-svelte-h":!0}),N(ee)!=="svelte-gz80w"&&(ee.textContent=ot),te=m(e),C&&C.l(e),V=m(e),S(G.$$.fragment,e),He=m(e),S(re.$$.fragment,e),Ue=m(e),P=p(e,"HR",{class:!0}),oe=m(e),B=p(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),N(B)!=="svelte-14dmakw"&&(B.innerHTML=nt),Le=m(e),ne=p(e,"P",{class:!0,"data-svelte-h":!0}),N(ne)!=="svelte-1lz5lmd"&&(ne.textContent=he),se=m(e),$&&$.l(e),ae=m(e),S(le.$$.fragment,e),Fe=m(e),Re=p(e,"HR",{class:!0}),ie=m(e),U=p(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),N(U)!=="svelte-19azecp"&&(U.innerHTML=Ie),qe=m(e),_e=p(e,"P",{class:!0,"data-svelte-h":!0}),N(_e)!=="svelte-1qr2hun"&&(_e.textContent=st),me=m(e),y&&y.l(e),W=m(e),S(Y.$$.fragment,e),Be=m(e),ge=p(e,"HR",{class:!0}),Ve=m(e),L=p(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),N(L)!=="svelte-oh0ryb"&&(L.innerHTML=ve),de=m(e),ce=p(e,"P",{class:!0,"data-svelte-h":!0}),N(ce)!=="svelte-151fzct"&&(ce.innerHTML=at),Ge=m(e),O&&O.l(e),d=m(e),S(pe.$$.fragment,e),dt=m(e),S(We.$$.fragment,e),pt=m(e),ut=p(e,"HR",{class:!0}),Et=m(e),Se=p(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),N(Se)!=="svelte-zv8lgr"&&(Se.innerHTML=It),Rt=m(e),D&&D.l(e),lt=m(e),b&&b.l(e),it=m(e),S(Ye.$$.fragment,e),gt=m(e),S(ze.$$.fragment,e),St=m(e),S(Pe.$$.fragment,e),At=m(e),Ae=p(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),N(Ae)!=="svelte-1ifwr8l"&&(Ae.innerHTML=qt),Nt=m(e),xe=p(e,"P",{class:!0,"data-svelte-h":!0}),N(xe)!=="svelte-1zqyyo"&&(xe.textContent=Bt),Tt=m(e),S(Xe.$$.fragment,e),Ct=m(e),Ne=p(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),N(Ne)!=="svelte-zx6yz7"&&(Ne.innerHTML=Vt),$t=m(e),Qe=p(e,"P",{class:!0,"data-svelte-h":!0}),N(Qe)!=="svelte-dbqu99"&&(Qe.textContent=Gt),yt=m(e),w&&w.l(e),_t=m(e),S(je.$$.fragment,e),Ot=m(e),Te=p(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),N(Te)!=="svelte-n38zp1"&&(Te.innerHTML=Wt),Dt=m(e),k&&k.l(e),mt=m(e),S(Je.$$.fragment,e),bt=m(e),ft=p(e,"HR",{class:!0}),wt=m(e),Ce=p(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),N(Ce)!=="svelte-1u8p14l"&&(Ce.innerHTML=Yt),kt=m(e),Ke=p(e,"P",{class:!0,"data-svelte-h":!0}),N(Ke)!=="svelte-o0poa0"&&(Ke.textContent=zt),Mt=m(e),S(Ze.$$.fragment,e),Ht=m(e),S(et.$$.fragment,e),this.h()},h(){h(n,"name","twitter:card"),h(n,"content","summary_large_image"),h(r,"name","twitter:site"),h(r,"content","@evidence_dev"),h(l,"class","markdown"),h(l,"id","-cohort-analysis--customer-lifetime-value"),h(ue,"class","markdown"),h(Ee,"class","markdown"),h(H,"class","markdown"),h(H,"id","cohort-retention-matrix"),h(ee,"class","markdown"),h(P,"class","markdown"),h(B,"class","markdown"),h(B,"id","retention-rate-trends"),h(ne,"class","markdown"),h(Re,"class","markdown"),h(U,"class","markdown"),h(U,"id","new-customer-acquisition-by-month"),h(_e,"class","markdown"),h(ge,"class","markdown"),h(L,"class","markdown"),h(L,"id","cumulative-ltv-curves-by-cohort"),h(ce,"class","markdown"),h(ut,"class","markdown"),h(Se,"class","markdown"),h(Se,"id","rfm-customer-segmentation"),h(Ae,"class","markdown"),h(Ae,"id","segment-size--value--treemap"),h(xe,"class","markdown"),h(Ne,"class","markdown"),h(Ne,"id","recency-vs-frequency-scatter-by-segment"),h(Qe,"class","markdown"),h(Te,"class","markdown"),h(Te,"id","segment-performance-details"),h(ft,"class","markdown"),h(Ce,"class","markdown"),h(Ce,"id","average-ltv-by-segment"),h(Ke,"class","markdown")},m(e,t){i(e,o,t),ht.m(document.head,null),Lt(document.head,n),Lt(document.head,r),Lt(document.head,_),i(e,v,t),i(e,l,t),i(e,tt,t),i(e,ue,t),i(e,q,t),g(F,e,t),i(e,x,t),T&&T.m(e,t),i(e,X,t),g(Q,e,t),i(e,be,t),g(j,e,t),i(e,J,t),g(I,e,t),i(e,fe,t),g(K,e,t),i(e,we,t),i(e,Ee,t),i(e,Z,t),i(e,H,t),i(e,Me,t),i(e,ee,t),i(e,te,t),C&&C.m(e,t),i(e,V,t),g(G,e,t),i(e,He,t),g(re,e,t),i(e,Ue,t),i(e,P,t),i(e,oe,t),i(e,B,t),i(e,Le,t),i(e,ne,t),i(e,se,t),$&&$.m(e,t),i(e,ae,t),g(le,e,t),i(e,Fe,t),i(e,Re,t),i(e,ie,t),i(e,U,t),i(e,qe,t),i(e,_e,t),i(e,me,t),y&&y.m(e,t),i(e,W,t),g(Y,e,t),i(e,Be,t),i(e,ge,t),i(e,Ve,t),i(e,L,t),i(e,de,t),i(e,ce,t),i(e,Ge,t),O&&O.m(e,t),i(e,d,t),g(pe,e,t),i(e,dt,t),g(We,e,t),i(e,pt,t),i(e,ut,t),i(e,Et,t),i(e,Se,t),i(e,Rt,t),D&&D.m(e,t),i(e,lt,t),b&&b.m(e,t),i(e,it,t),g(Ye,e,t),i(e,gt,t),g(ze,e,t),i(e,St,t),g(Pe,e,t),i(e,At,t),i(e,Ae,t),i(e,Nt,t),i(e,xe,t),i(e,Tt,t),g(Xe,e,t),i(e,Ct,t),i(e,Ne,t),i(e,$t,t),i(e,Qe,t),i(e,yt,t),w&&w.m(e,t),i(e,_t,t),g(je,e,t),i(e,Ot,t),i(e,Te,t),i(e,Dt,t),k&&k.m(e,t),i(e,mt,t),g(Je,e,t),i(e,bt,t),i(e,ft,t),i(e,wt,t),i(e,Ce,t),i(e,kt,t),i(e,Ke,t),i(e,Mt,t),g(Ze,e,t),i(e,Ht,t),g(et,e,t),Ut=!0},p(e,t){ht.p(e,t);const Pt={};t[2]&16&&(Pt.$$scope={dirty:t,ctx:e}),F.$set(Pt),e[0]?T?(T.p(e,t),t[0]&1&&u(T,1)):(T=dr(e),T.c(),u(T,1),T.m(X.parentNode,X)):T&&(ye(),f(T,1,1,()=>{T=null}),$e());const xt={};t[0]&1&&(xt.data=e[0]),Q.$set(xt);const Xt={};t[0]&1&&(Xt.data=e[0]),j.$set(Xt);const Qt={};t[0]&1&&(Qt.data=e[0]),I.$set(Qt);const jt={};t[0]&1&&(jt.data=e[0]),K.$set(jt),e[1]?C?(C.p(e,t),t[0]&2&&u(C,1)):(C=pr(e),C.c(),u(C,1),C.m(V.parentNode,V)):C&&(ye(),f(C,1,1,()=>{C=null}),$e());const Jt={};t[0]&2&&(Jt.data=e[1]),G.$set(Jt);const Kt={};t[2]&16&&(Kt.$$scope={dirty:t,ctx:e}),re.$set(Kt),e[2]?$?($.p(e,t),t[0]&4&&u($,1)):($=Er(e),$.c(),u($,1),$.m(ae.parentNode,ae)):$&&(ye(),f($,1,1,()=>{$=null}),$e());const Zt={};t[0]&4&&(Zt.data=e[2]),le.$set(Zt),e[3]?y?(y.p(e,t),t[0]&8&&u(y,1)):(y=Rr(e),y.c(),u(y,1),y.m(W.parentNode,W)):y&&(ye(),f(y,1,1,()=>{y=null}),$e());const er={};t[0]&8&&(er.data=e[3]),Y.$set(er),e[4]?O?(O.p(e,t),t[0]&16&&u(O,1)):(O=gr(e),O.c(),u(O,1),O.m(d.parentNode,d)):O&&(ye(),f(O,1,1,()=>{O=null}),$e());const tr={};t[0]&16&&(tr.data=e[4]),pe.$set(tr);const rr={};t[2]&16&&(rr.$$scope={dirty:t,ctx:e}),We.$set(rr),e[5]?D?(D.p(e,t),t[0]&32&&u(D,1)):(D=Sr(e),D.c(),u(D,1),D.m(lt.parentNode,lt)):D&&(ye(),f(D,1,1,()=>{D=null}),$e()),e[6]?b?(b.p(e,t),t[0]&64&&u(b,1)):(b=Ar(e),b.c(),u(b,1),b.m(it.parentNode,it)):b&&(ye(),f(b,1,1,()=>{b=null}),$e());const or={};t[0]&64&&(or.data=e[6]),Ye.$set(or);const nr={};t[0]&64&&(nr.data=e[6]),ze.$set(nr);const sr={};t[0]&64&&(sr.data=e[6]),Pe.$set(sr);const ar={};t[0]&32&&(ar.config={tooltip:{trigger:"item",formatter:Cr},series:[{type:"treemap",roam:!1,leafDepth:1,label:{show:!0,formatter:$r,fontSize:12,fontWeight:"bold",color:"#fff"},upperLabel:{show:!1},itemStyle:{borderWidth:2,borderColor:"#fff"},data:e[5].map(yr)}]}),Xe.$set(ar),e[7]?w?(w.p(e,t),t[0]&128&&u(w,1)):(w=Nr(e),w.c(),u(w,1),w.m(_t.parentNode,_t)):w&&(ye(),f(w,1,1,()=>{w=null}),$e());const lr={};t[0]&128&&(lr.data=e[7]),je.$set(lr),e[8]?k?(k.p(e,t),t[0]&256&&u(k,1)):(k=Tr(e),k.c(),u(k,1),k.m(mt.parentNode,mt)):k&&(ye(),f(k,1,1,()=>{k=null}),$e());const ir={};t[0]&256&&(ir.data=e[8]),Je.$set(ir);const _r={};t[0]&32&&(_r.data=e[5]),Ze.$set(_r);const mr={};t[2]&16&&(mr.$$scope={dirty:t,ctx:e}),et.$set(mr)},i(e){Ut||(u(F.$$.fragment,e),u(T),u(Q.$$.fragment,e),u(j.$$.fragment,e),u(I.$$.fragment,e),u(K.$$.fragment,e),u(C),u(G.$$.fragment,e),u(re.$$.fragment,e),u($),u(le.$$.fragment,e),u(y),u(Y.$$.fragment,e),u(O),u(pe.$$.fragment,e),u(We.$$.fragment,e),u(D),u(b),u(Ye.$$.fragment,e),u(ze.$$.fragment,e),u(Pe.$$.fragment,e),u(Xe.$$.fragment,e),u(w),u(je.$$.fragment,e),u(k),u(Je.$$.fragment,e),u(Ze.$$.fragment,e),u(et.$$.fragment,e),Ut=!0)},o(e){f(F.$$.fragment,e),f(T),f(Q.$$.fragment,e),f(j.$$.fragment,e),f(I.$$.fragment,e),f(K.$$.fragment,e),f(C),f(G.$$.fragment,e),f(re.$$.fragment,e),f($),f(le.$$.fragment,e),f(y),f(Y.$$.fragment,e),f(O),f(pe.$$.fragment,e),f(We.$$.fragment,e),f(D),f(b),f(Ye.$$.fragment,e),f(ze.$$.fragment,e),f(Pe.$$.fragment,e),f(Xe.$$.fragment,e),f(w),f(je.$$.fragment,e),f(k),f(Je.$$.fragment,e),f(Ze.$$.fragment,e),f(et.$$.fragment,e),Ut=!1},d(e){e&&(a(o),a(v),a(l),a(tt),a(ue),a(q),a(x),a(X),a(be),a(J),a(fe),a(we),a(Ee),a(Z),a(H),a(Me),a(ee),a(te),a(V),a(He),a(Ue),a(P),a(oe),a(B),a(Le),a(ne),a(se),a(ae),a(Fe),a(Re),a(ie),a(U),a(qe),a(_e),a(me),a(W),a(Be),a(ge),a(Ve),a(L),a(de),a(ce),a(Ge),a(d),a(dt),a(pt),a(ut),a(Et),a(Se),a(Rt),a(lt),a(it),a(gt),a(St),a(At),a(Ae),a(Nt),a(xe),a(Tt),a(Ct),a(Ne),a($t),a(Qe),a(yt),a(_t),a(Ot),a(Te),a(Dt),a(mt),a(bt),a(ft),a(wt),a(Ce),a(kt),a(Ke),a(Mt),a(Ht)),ht.d(e),a(n),a(r),a(_),R(F,e),T&&T.d(e),R(Q,e),R(j,e),R(I,e),R(K,e),C&&C.d(e),R(G,e),R(re,e),$&&$.d(e),R(le,e),y&&y.d(e),R(Y,e),O&&O.d(e),R(pe,e),R(We,e),D&&D.d(e),b&&b.d(e),R(Ye,e),R(ze,e),R(Pe,e),R(Xe,e),w&&w.d(e),R(je,e),k&&k.d(e),R(Je,e),R(Ze,e),R(et,e)}}}const Cr=s=>{const o=(s.data.avg_ltv||0).toFixed(2),n=((s.data.total_revenue||0)/1e3).toFixed(0);return`<b>${s.name}</b><br/>Customers: ${s.value.toLocaleString()}<br/>Avg LTV: $${o}<br/>Total Revenue: $${n}k`},$r=s=>`${s.name}
${s.value.toLocaleString()}`,yr=s=>{const o={Champions:"#16a34a","Loyal Customers":"#2563eb","Potential Loyalists":"#7c3aed","New Customers":"#0891b2","Needs Attention":"#d97706","At Risk":"#ea580c","Cannot Lose Them":"#dc2626",Lost:"#4b5563"};return{name:s.customer_segment,value:s.customers,avg_ltv:s.avg_ltv,total_revenue:s.total_segment_revenue,itemStyle:{color:o[s.customer_segment]||"#94a3b8"}}};function oo(s,o,n){let r,_;ur(s,Pr,d=>n(47,r=d)),ur(s,fr,d=>n(53,_=d));let{data:v}=o,{data:l={},customFormattingSettings:z,__db:tt,inputs:ue}=v;wr(fr,_="a77688e729659b02fd5c916ab623cf1c",_);let vt=Br(Yr(ue));kr(vt.subscribe(d=>ue=d)),Mr(Wr,{getCustomFormats:()=>z.customFormats||[]});const q=(d,pe)=>zr(tt.query,d,{query_name:pe});Vr(q),r.params,Hr(()=>!0);let F={initialData:void 0,initialError:void 0},x=M`SELECT
  COUNT(DISTINCT cohort_month) AS total_cohorts,
  SUM(CASE WHEN period_number = 0 THEN cohort_size ELSE 0 END) AS total_customers,
  ROUND(AVG(CASE WHEN period_number = 1 THEN retention_rate END), 1) AS avg_m1_retention,
  ROUND(AVG(CASE WHEN period_number = 3 THEN retention_rate END), 1) AS avg_m3_retention
FROM cohort_retention`,X=`SELECT
  COUNT(DISTINCT cohort_month) AS total_cohorts,
  SUM(CASE WHEN period_number = 0 THEN cohort_size ELSE 0 END) AS total_customers,
  ROUND(AVG(CASE WHEN period_number = 1 THEN retention_rate END), 1) AS avg_m1_retention,
  ROUND(AVG(CASE WHEN period_number = 3 THEN retention_rate END), 1) AS avg_m3_retention
FROM cohort_retention`;l.cohort_kpis_data&&(l.cohort_kpis_data instanceof Error?F.initialError=l.cohort_kpis_data:F.initialData=l.cohort_kpis_data,l.cohort_kpis_columns&&(F.knownColumns=l.cohort_kpis_columns));let Q,be=!1;const j=Oe.createReactive({callback:d=>{n(0,Q=d)},execFn:q},{id:"cohort_kpis",...F});j(X,{noResolve:x,...F}),globalThis[Symbol.for("cohort_kpis")]={get value(){return Q}};let J={initialData:void 0,initialError:void 0},I=M`SELECT
  cohort_month,
  period_number,
  retention_rate
FROM cohort_retention
ORDER BY cohort_month, period_number`,fe=`SELECT
  cohort_month,
  period_number,
  retention_rate
FROM cohort_retention
ORDER BY cohort_month, period_number`;l.cohort_heatmap_data&&(l.cohort_heatmap_data instanceof Error?J.initialError=l.cohort_heatmap_data:J.initialData=l.cohort_heatmap_data,l.cohort_heatmap_columns&&(J.knownColumns=l.cohort_heatmap_columns));let K,we=!1;const Ee=Oe.createReactive({callback:d=>{n(1,K=d)},execFn:q},{id:"cohort_heatmap",...J});Ee(fe,{noResolve:I,...J}),globalThis[Symbol.for("cohort_heatmap")]={get value(){return K}};let Z={initialData:void 0,initialError:void 0},H=M`SELECT
  cohort_month,
  MAX(CASE WHEN period_number = 1 THEN retention_rate END) AS m1_retention,
  MAX(CASE WHEN period_number = 3 THEN retention_rate END) AS m3_retention,
  MAX(CASE WHEN period_number = 6 THEN retention_rate END) AS m6_retention,
  MAX(cohort_size) AS cohort_size
FROM cohort_retention
GROUP BY cohort_month
ORDER BY cohort_month`,ke=`SELECT
  cohort_month,
  MAX(CASE WHEN period_number = 1 THEN retention_rate END) AS m1_retention,
  MAX(CASE WHEN period_number = 3 THEN retention_rate END) AS m3_retention,
  MAX(CASE WHEN period_number = 6 THEN retention_rate END) AS m6_retention,
  MAX(cohort_size) AS cohort_size
FROM cohort_retention
GROUP BY cohort_month
ORDER BY cohort_month`;l.retention_trend_data&&(l.retention_trend_data instanceof Error?Z.initialError=l.retention_trend_data:Z.initialData=l.retention_trend_data,l.retention_trend_columns&&(Z.knownColumns=l.retention_trend_columns));let Me,ee=!1;const ot=Oe.createReactive({callback:d=>{n(2,Me=d)},execFn:q},{id:"retention_trend",...Z});ot(ke,{noResolve:H,...Z}),globalThis[Symbol.for("retention_trend")]={get value(){return Me}};let te={initialData:void 0,initialError:void 0},V=M`SELECT
  cohort_month,
  cohort_size AS new_customers
FROM cohort_retention
WHERE period_number = 0
ORDER BY cohort_month`,G=`SELECT
  cohort_month,
  cohort_size AS new_customers
FROM cohort_retention
WHERE period_number = 0
ORDER BY cohort_month`;l.cohort_sizes_data&&(l.cohort_sizes_data instanceof Error?te.initialError=l.cohort_sizes_data:te.initialData=l.cohort_sizes_data,l.cohort_sizes_columns&&(te.knownColumns=l.cohort_sizes_columns));let He,re=!1;const Ue=Oe.createReactive({callback:d=>{n(3,He=d)},execFn:q},{id:"cohort_sizes",...te});Ue(G,{noResolve:V,...te}),globalThis[Symbol.for("cohort_sizes")]={get value(){return He}};let P={initialData:void 0,initialError:void 0},oe=M`WITH recent_cohorts AS (
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
ORDER BY cohort_month, period_number`,B=`WITH recent_cohorts AS (
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
ORDER BY cohort_month, period_number`;l.cumulative_ltv_data&&(l.cumulative_ltv_data instanceof Error?P.initialError=l.cumulative_ltv_data:P.initialData=l.cumulative_ltv_data,l.cumulative_ltv_columns&&(P.knownColumns=l.cumulative_ltv_columns));let nt,Le=!1;const ne=Oe.createReactive({callback:d=>{n(4,nt=d)},execFn:q},{id:"cumulative_ltv",...P});ne(B,{noResolve:oe,...P}),globalThis[Symbol.for("cumulative_ltv")]={get value(){return nt}};let he={initialData:void 0,initialError:void 0},se=M`SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC`,ae=`SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC`;l.segment_summary_data&&(l.segment_summary_data instanceof Error?he.initialError=l.segment_summary_data:he.initialData=l.segment_summary_data,l.segment_summary_columns&&(he.knownColumns=l.segment_summary_columns));let le,Fe=!1;const Re=Oe.createReactive({callback:d=>{n(5,le=d)},execFn:q},{id:"segment_summary",...he});Re(ae,{noResolve:se,...he}),globalThis[Symbol.for("segment_summary")]={get value(){return le}};let ie={initialData:void 0,initialError:void 0},U=M`SELECT
  COUNT(*) AS total_customers,
  ROUND(AVG(total_revenue), 2) AS overall_avg_ltv,
  ROUND(AVG(rfm_score), 2) AS overall_avg_rfm
FROM customer_ltv`,Ie=`SELECT
  COUNT(*) AS total_customers,
  ROUND(AVG(total_revenue), 2) AS overall_avg_ltv,
  ROUND(AVG(rfm_score), 2) AS overall_avg_rfm
FROM customer_ltv`;l.segment_kpis_data&&(l.segment_kpis_data instanceof Error?ie.initialError=l.segment_kpis_data:ie.initialData=l.segment_kpis_data,l.segment_kpis_columns&&(ie.knownColumns=l.segment_kpis_columns));let qe,_e=!1;const st=Oe.createReactive({callback:d=>{n(6,qe=d)},execFn:q},{id:"segment_kpis",...ie});st(Ie,{noResolve:U,...ie}),globalThis[Symbol.for("segment_kpis")]={get value(){return qe}};let me={initialData:void 0,initialError:void 0},W=M`SELECT
  recency_days,
  order_count,
  total_revenue,
  customer_segment,
  rfm_score
FROM customer_ltv
WHERE order_count <= 25
  AND recency_days <= 500
ORDER BY total_revenue DESC
LIMIT 3000`,Y=`SELECT
  recency_days,
  order_count,
  total_revenue,
  customer_segment,
  rfm_score
FROM customer_ltv
WHERE order_count <= 25
  AND recency_days <= 500
ORDER BY total_revenue DESC
LIMIT 3000`;l.rfm_scatter_data&&(l.rfm_scatter_data instanceof Error?me.initialError=l.rfm_scatter_data:me.initialData=l.rfm_scatter_data,l.rfm_scatter_columns&&(me.knownColumns=l.rfm_scatter_columns));let Be,ge=!1;const Ve=Oe.createReactive({callback:d=>{n(7,Be=d)},execFn:q},{id:"rfm_scatter",...me});Ve(Y,{noResolve:W,...me}),globalThis[Symbol.for("rfm_scatter")]={get value(){return Be}};let L={initialData:void 0,initialError:void 0},ve=M`SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC`,de=`SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC`;l.segment_details_data&&(l.segment_details_data instanceof Error?L.initialError=l.segment_details_data:L.initialData=l.segment_details_data,l.segment_details_columns&&(L.knownColumns=l.segment_details_columns));let ce,at=!1;const Ge=Oe.createReactive({callback:d=>{n(8,ce=d)},execFn:q},{id:"segment_details",...L});return Ge(de,{noResolve:ve,...L}),globalThis[Symbol.for("segment_details")]={get value(){return ce}},s.$$set=d=>{"data"in d&&n(9,v=d.data)},s.$$.update=()=>{s.$$.dirty[0]&512&&n(10,{data:l={},customFormattingSettings:z,__db:tt}=v,l),s.$$.dirty[0]&1024&&Gr.set(Object.keys(l).length>0),s.$$.dirty[1]&65536&&r.params,s.$$.dirty[0]&30720&&(x||!be?x||(j(X,{noResolve:x,...F}),n(14,be=!0)):j(X,{noResolve:x})),s.$$.dirty[0]&491520&&(I||!we?I||(Ee(fe,{noResolve:I,...J}),n(18,we=!0)):Ee(fe,{noResolve:I})),s.$$.dirty[0]&7864320&&(H||!ee?H||(ot(ke,{noResolve:H,...Z}),n(22,ee=!0)):ot(ke,{noResolve:H})),s.$$.dirty[0]&125829120&&(V||!re?V||(Ue(G,{noResolve:V,...te}),n(26,re=!0)):Ue(G,{noResolve:V})),s.$$.dirty[0]&2013265920&&(oe||!Le?oe||(ne(B,{noResolve:oe,...P}),n(30,Le=!0)):ne(B,{noResolve:oe})),s.$$.dirty[1]&15&&(se||!Fe?se||(Re(ae,{noResolve:se,...he}),n(34,Fe=!0)):Re(ae,{noResolve:se})),s.$$.dirty[1]&240&&(U||!_e?U||(st(Ie,{noResolve:U,...ie}),n(38,_e=!0)):st(Ie,{noResolve:U})),s.$$.dirty[1]&3840&&(W||!ge?W||(Ve(Y,{noResolve:W,...me}),n(42,ge=!0)):Ve(Y,{noResolve:W})),s.$$.dirty[1]&61440&&(ve||!at?ve||(Ge(de,{noResolve:ve,...L}),n(46,at=!0)):Ge(de,{noResolve:ve}))},n(12,x=M`SELECT
  COUNT(DISTINCT cohort_month) AS total_cohorts,
  SUM(CASE WHEN period_number = 0 THEN cohort_size ELSE 0 END) AS total_customers,
  ROUND(AVG(CASE WHEN period_number = 1 THEN retention_rate END), 1) AS avg_m1_retention,
  ROUND(AVG(CASE WHEN period_number = 3 THEN retention_rate END), 1) AS avg_m3_retention
FROM cohort_retention`),n(13,X=`SELECT
  COUNT(DISTINCT cohort_month) AS total_cohorts,
  SUM(CASE WHEN period_number = 0 THEN cohort_size ELSE 0 END) AS total_customers,
  ROUND(AVG(CASE WHEN period_number = 1 THEN retention_rate END), 1) AS avg_m1_retention,
  ROUND(AVG(CASE WHEN period_number = 3 THEN retention_rate END), 1) AS avg_m3_retention
FROM cohort_retention`),n(16,I=M`SELECT
  cohort_month,
  period_number,
  retention_rate
FROM cohort_retention
ORDER BY cohort_month, period_number`),n(17,fe=`SELECT
  cohort_month,
  period_number,
  retention_rate
FROM cohort_retention
ORDER BY cohort_month, period_number`),n(20,H=M`SELECT
  cohort_month,
  MAX(CASE WHEN period_number = 1 THEN retention_rate END) AS m1_retention,
  MAX(CASE WHEN period_number = 3 THEN retention_rate END) AS m3_retention,
  MAX(CASE WHEN period_number = 6 THEN retention_rate END) AS m6_retention,
  MAX(cohort_size) AS cohort_size
FROM cohort_retention
GROUP BY cohort_month
ORDER BY cohort_month`),n(21,ke=`SELECT
  cohort_month,
  MAX(CASE WHEN period_number = 1 THEN retention_rate END) AS m1_retention,
  MAX(CASE WHEN period_number = 3 THEN retention_rate END) AS m3_retention,
  MAX(CASE WHEN period_number = 6 THEN retention_rate END) AS m6_retention,
  MAX(cohort_size) AS cohort_size
FROM cohort_retention
GROUP BY cohort_month
ORDER BY cohort_month`),n(24,V=M`SELECT
  cohort_month,
  cohort_size AS new_customers
FROM cohort_retention
WHERE period_number = 0
ORDER BY cohort_month`),n(25,G=`SELECT
  cohort_month,
  cohort_size AS new_customers
FROM cohort_retention
WHERE period_number = 0
ORDER BY cohort_month`),n(28,oe=M`WITH recent_cohorts AS (
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
ORDER BY cohort_month, period_number`),n(29,B=`WITH recent_cohorts AS (
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
ORDER BY cohort_month, period_number`),n(32,se=M`SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC`),n(33,ae=`SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC`),n(36,U=M`SELECT
  COUNT(*) AS total_customers,
  ROUND(AVG(total_revenue), 2) AS overall_avg_ltv,
  ROUND(AVG(rfm_score), 2) AS overall_avg_rfm
FROM customer_ltv`),n(37,Ie=`SELECT
  COUNT(*) AS total_customers,
  ROUND(AVG(total_revenue), 2) AS overall_avg_ltv,
  ROUND(AVG(rfm_score), 2) AS overall_avg_rfm
FROM customer_ltv`),n(40,W=M`SELECT
  recency_days,
  order_count,
  total_revenue,
  customer_segment,
  rfm_score
FROM customer_ltv
WHERE order_count <= 25
  AND recency_days <= 500
ORDER BY total_revenue DESC
LIMIT 3000`),n(41,Y=`SELECT
  recency_days,
  order_count,
  total_revenue,
  customer_segment,
  rfm_score
FROM customer_ltv
WHERE order_count <= 25
  AND recency_days <= 500
ORDER BY total_revenue DESC
LIMIT 3000`),n(44,ve=M`SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC`),n(45,de=`SELECT
  customer_segment,
  COUNT(*) AS customers,
  ROUND(AVG(total_revenue), 2) AS avg_ltv,
  ROUND(SUM(total_revenue), 2) AS total_segment_revenue,
  ROUND(AVG(order_count), 1) AS avg_orders,
  ROUND(AVG(recency_days), 0) AS avg_recency_days,
  ROUND(AVG(rfm_score), 2) AS avg_rfm_score
FROM customer_ltv
GROUP BY customer_segment
ORDER BY total_segment_revenue DESC`),[Q,K,Me,He,nt,le,qe,Be,ce,v,l,F,x,X,be,J,I,fe,we,Z,H,ke,ee,te,V,G,re,P,oe,B,Le,he,se,ae,Fe,ie,U,Ie,_e,me,W,Y,ge,L,ve,de,at,r]}class Ro extends Fr{constructor(o){super(),Ir(this,o,oo,ro,Dr,{data:9},null,[-1,-1,-1])}}export{Ro as component};
