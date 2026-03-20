import{s as nr,d as i,i as l,a as Tt,b as p,c,h as cr,e as g,f as zt,g as L,j as u,k as S,l as xt,m as ur,o as dr,n as fr,p as mr,q as et,r as pr,t as Er}from"../chunks/scheduler.CCfxqTH6.js";import{S as gr,i as Sr,d as y,t as m,a as d,c as Ye,m as k,b as R,e as b,g as qe}from"../chunks/index.h6XQUVJ4.js";import{D as yr,e as kr,s as Rr,Q as Pe,p as br,r as Jt,C as Tr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.L9uteW7u.js";import{w as Cr}from"../chunks/entry.C_ojv6uL.js";import{h as F,p as Or}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ar}from"../chunks/stores.Dhm3Itfq.js";import{N as jt,D as Qt}from"../chunks/Note.D4FhzwJd.js";import{E as Nr,Q as Ge}from"../chunks/Chart.D-l9wpc-.js";import{A as vr}from"../chunks/AreaChart.BCGp18T6.js";import{B as Xt}from"../chunks/BarChart.BBk2maKu.js";import{B as bt}from"../chunks/BigValue.CrrSwXE5.js";import{H as hr}from"../chunks/Heatmap.BTEPX9Ne.js";import{L as Kt}from"../chunks/LineChart.CjzO7ddq.js";function $r(s){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:et,p:et,d:et}}function Lr(s){let a,o=`<strong class="markdown">Support</strong> = % of all orders that contain both categories.
<strong class="markdown">Confidence A→B</strong> = % of Category A orders that also include Category B.
<strong class="markdown">Lift</strong> = how much more (or less) likely a pair co-occurs compared with chance.
Lift above 1 means positive affinity; lift below 1 means customers rarely combine those categories.`;return{c(){a=S("p"),a.innerHTML=o,this.h()},l(r){a=g(r,"P",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-sqozzg"&&(a.innerHTML=o),this.h()},h(){p(a,"class","markdown")},m(r,n){l(r,a,n)},p:et,d(r){r&&i(a)}}}function Zt(s){let a,o;return a=new Ge({props:{queryID:"basket_kpis",queryResult:s[0]}}),{c(){b(a.$$.fragment)},l(r){R(a.$$.fragment,r)},m(r,n){k(a,r,n),o=!0},p(r,n){const E={};n[0]&1&&(E.queryResult=r[0]),a.$set(E)},i(r){o||(d(a.$$.fragment,r),o=!0)},o(r){m(a.$$.fragment,r),o=!1},d(r){y(a,r)}}}function er(s){let a,o;return a=new Ge({props:{queryID:"affinity_heatmap",queryResult:s[1]}}),{c(){b(a.$$.fragment)},l(r){R(a.$$.fragment,r)},m(r,n){k(a,r,n),o=!0},p(r,n){const E={};n[0]&2&&(E.queryResult=r[1]),a.$set(E)},i(r){o||(d(a.$$.fragment,r),o=!0)},o(r){m(a.$$.fragment,r),o=!1},d(r){y(a,r)}}}function Mr(s){let a,o='<li class="markdown"><strong class="markdown">Lift = 1.0</strong>: categories co-occur at the rate expected if purchases were independent.</li> <li class="markdown"><strong class="markdown">Lift &gt; 1.0</strong>: positive affinity — customers combine these categories more often than expected.</li> <li class="markdown"><strong class="markdown">Lift below 1.0</strong>: negative affinity — customers rarely buy both in the same order.</li>',r,n,E="The matrix is symmetric: lift(A, B) = lift(B, A).";return{c(){a=S("ul"),a.innerHTML=o,r=u(),n=S("p"),n.textContent=E,this.h()},l(_){a=g(_,"UL",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-19sjud7"&&(a.innerHTML=o),r=c(_),n=g(_,"P",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-1yma9z8"&&(n.textContent=E),this.h()},h(){p(a,"class","markdown"),p(n,"class","markdown")},m(_,ce){l(_,a,ce),l(_,r,ce),l(_,n,ce)},p:et,d(_){_&&(i(a),i(r),i(n))}}}function tr(s){let a,o;return a=new Ge({props:{queryID:"category_nodes",queryResult:s[2]}}),{c(){b(a.$$.fragment)},l(r){R(a.$$.fragment,r)},m(r,n){k(a,r,n),o=!0},p(r,n){const E={};n[0]&4&&(E.queryResult=r[2]),a.$set(E)},i(r){o||(d(a.$$.fragment,r),o=!0)},o(r){m(a.$$.fragment,r),o=!1},d(r){y(a,r)}}}function rr(s){let a,o;return a=new Ge({props:{queryID:"co_purchase_links",queryResult:s[3]}}),{c(){b(a.$$.fragment)},l(r){R(a.$$.fragment,r)},m(r,n){k(a,r,n),o=!0},p(r,n){const E={};n[0]&8&&(E.queryResult=r[3]),a.$set(E)},i(r){o||(d(a.$$.fragment,r),o=!0)},o(r){m(a.$$.fragment,r),o=!1},d(r){y(a,r)}}}function ar(s){let a,o;return a=new Ge({props:{queryID:"top_rules",queryResult:s[4]}}),{c(){b(a.$$.fragment)},l(r){R(a.$$.fragment,r)},m(r,n){k(a,r,n),o=!0},p(r,n){const E={};n[0]&16&&(E.queryResult=r[4]),a.$set(E)},i(r){o||(d(a.$$.fragment,r),o=!0)},o(r){m(a.$$.fragment,r),o=!1},d(r){y(a,r)}}}function wr(s){let a,o='<thead class="markdown"><tr class="markdown"><th class="markdown">Column</th> <th class="markdown">Meaning</th></tr></thead> <tbody class="markdown"><tr class="markdown"><td class="markdown"><strong class="markdown">co_orders</strong></td> <td class="markdown">Orders that contain both Category A and Category B</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">support_pct</strong></td> <td class="markdown">% of all orders containing both categories</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">confidence_a_to_b_pct</strong></td> <td class="markdown">% of Category A orders that also include B</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">confidence_b_to_a_pct</strong></td> <td class="markdown">% of Category B orders that also include A</td></tr> <tr class="markdown"><td class="markdown"><strong class="markdown">lift</strong></td> <td class="markdown">Observed co-occurrence ÷ expected under independence (&gt; 1 = positive)</td></tr></tbody>';return{c(){a=S("table"),a.innerHTML=o,this.h()},l(r){a=g(r,"TABLE",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-1avl07l"&&(a.innerHTML=o),this.h()},h(){p(a,"class","markdown")},m(r,n){l(r,a,n)},p:et,d(r){r&&i(a)}}}function or(s){let a,o;return a=new Ge({props:{queryID:"top_pairs_volume",queryResult:s[5]}}),{c(){b(a.$$.fragment)},l(r){R(a.$$.fragment,r)},m(r,n){k(a,r,n),o=!0},p(r,n){const E={};n[0]&32&&(E.queryResult=r[5]),a.$set(E)},i(r){o||(d(a.$$.fragment,r),o=!0)},o(r){m(a.$$.fragment,r),o=!1},d(r){y(a,r)}}}function sr(s){let a,o;return a=new Ge({props:{queryID:"basket_size_dist",queryResult:s[6]}}),{c(){b(a.$$.fragment)},l(r){R(a.$$.fragment,r)},m(r,n){k(a,r,n),o=!0},p(r,n){const E={};n[0]&64&&(E.queryResult=r[6]),a.$set(E)},i(r){o||(d(a.$$.fragment,r),o=!0)},o(r){m(a.$$.fragment,r),o=!1},d(r){y(a,r)}}}function Ur(s){let a;return{c(){a=Er("Multi-category baskets consistently yield higher average order values, reinforcing the business case for cross-sell promotions targeting single-category shoppers.")},l(o){a=pr(o,"Multi-category baskets consistently yield higher average order values, reinforcing the business case for cross-sell promotions targeting single-category shoppers.")},m(o,r){l(o,a,r)},d(o){o&&i(a)}}}function ir(s){let a,o;return a=new Ge({props:{queryID:"monthly_multi_cat",queryResult:s[7]}}),{c(){b(a.$$.fragment)},l(r){R(a.$$.fragment,r)},m(r,n){k(a,r,n),o=!0},p(r,n){const E={};n[0]&128&&(E.queryResult=r[7]),a.$set(E)},i(r){o||(d(a.$$.fragment,r),o=!0)},o(r){m(a.$$.fragment,r),o=!1},d(r){y(a,r)}}}function Dr(s){let a,o,r,n,E,_,ce='<a href="#-market-basket--co-purchase-intelligence">🛒 Market Basket &amp; Co-Purchase Intelligence</a>',We,se,st=`Which product categories do customers buy <strong class="markdown">together</strong> in a single order?
Market basket analysis answers this question with three complementary metrics.`,B,D,z,ie,ge,V,Ve='<a href="#basket-overview">Basket Overview</a>',x,Y,q,Se,J,ye,H,j,P,ke,ue,Re,M,le='<a href="#category-co-purchase-affinity--lift-heatmap">Category Co-Purchase Affinity — Lift Heatmap</a>',_e,Q,ze=`Each cell shows the <strong class="markdown">lift</strong> between two categories. Values above 1.0 mean customers
buy those two categories together more often than chance alone would predict.
Darker cells = stronger positive affinity.`,be,G,I,ne,X,Te,de,K,w,Ce='<a href="#co-purchase-network">Co-Purchase Network</a>',Oe,Z,xe=`Each node is a product category, sized by how many orders it appears in.
Edges connect categories frequently bought together; <strong class="markdown">thicker edges = more co-purchases</strong>.
Hover over a node to highlight its connections. Scroll to zoom, drag to pan.`,ee,W,te,re,Ae,fe,ae,U,Ne='<a href="#top-association-rules-by-lift">Top Association Rules by Lift</a>',ve,oe,Je=`Sorted by lift (strongest positive affinity first).
High-lift pairs with solid support make the best cross-sell candidates.`,je,he,f,Qe,$e,it,tt,lt,me,Ct='<a href="#top-pairs-by-co-purchase-volume">Top Pairs by Co-Purchase Volume</a>',_t,Le,Ot="Highest absolute co-purchase counts — useful for sizing the cross-sell opportunity.",nt,Xe,Me,ct,rt,ut,pe,At='<a href="#basket-size-distribution">Basket Size Distribution</a>',dt,we,Nt="How many distinct product categories do customers typically include in a single order?",ft,Ke,Ue,mt,De,pt,He,Et,at,gt,Ee,vt='<a href="#monthly-multi-category-order-rate">Monthly Multi-Category Order Rate</a>',St,Ie,ht="Is cross-category buying increasing or declining over time?",yt,Ze,Fe,kt,Be,Rt;function _r(e,t){return $r}let ot=_r()(s);D=new jt({props:{$$slots:{default:[Lr]},$$scope:{ctx:s}}});let T=s[0]&&Zt(s);q=new bt({props:{data:s[0],value:"total_orders",title:"Orders Analyzed",fmt:"#,##0"}}),J=new bt({props:{data:s[0],value:"avg_categories_per_order",title:"Avg Categories per Order",fmt:"#,##0.00"}}),H=new bt({props:{data:s[0],value:"pct_multi_category_orders",title:"Multi-Category Orders %",fmt:"#,##0.0"}}),P=new bt({props:{data:s[0],value:"avg_basket_value",title:"Avg Basket Value",fmt:"$#,##0.00"}});let C=s[1]&&er(s);I=new hr({props:{data:s[1],x:"category_a",y:"category_b",value:"lift",title:"Category Co-Purchase Lift Matrix"}}),X=new Qt({props:{title:"How to read the lift heatmap",$$slots:{default:[Mr]},$$scope:{ctx:s}}});let O=s[2]&&tr(s),A=s[3]&&rr(s);re=new Nr({props:{config:{backgroundColor:"#fafafa",tooltip:{trigger:"item",formatter:lr},series:[{type:"graph",layout:"circular",animation:!1,roam:!0,circular:{rotateLabel:!0},label:{show:!0,position:"right",formatter:"{b}",fontSize:10},lineStyle:{color:"source",curveness:.3,opacity:.6},emphasis:{focus:"adjacency",lineStyle:{width:10}},data:s[2].map(s[43]),links:s[3].map(s[44])}]},height:520}});let N=s[4]&&ar(s);f=new yr({props:{data:s[4],rows:"10",search:"true"}}),$e=new Qt({props:{title:"Association rule column definitions",$$slots:{default:[wr]},$$scope:{ctx:s}}});let v=s[5]&&or(s);Me=new Xt({props:{data:s[5],x:"category_pair",y:"co_orders",title:"Top 20 Category Pairs by Co-Purchase Volume",xAxisTitle:"Category Pair",yAxisTitle:"Co-Purchase Orders",swapXY:"true"}});let h=s[6]&&sr(s);Ue=new Xt({props:{data:s[6],x:"categories_in_order",y:"order_count",title:"Order Count by Number of Distinct Categories in Basket",xAxisTitle:"Distinct Product Categories in Order",yAxisTitle:"Number of Orders"}}),De=new Kt({props:{data:s[6],x:"categories_in_order",y:"avg_order_value",title:"Average Order Value by Basket Diversity",xAxisTitle:"Distinct Product Categories in Order",yAxisTitle:"Avg Order Value ($)",yFmt:"$#,##0"}}),He=new jt({props:{$$slots:{default:[Ur]},$$scope:{ctx:s}}});let $=s[7]&&ir(s);return Fe=new Kt({props:{data:s[7],x:"month",y:"pct_multi_category",title:"% of Orders Containing 2+ Categories (Monthly)",yAxisTitle:"Multi-Category Order Rate (%)",xAxisTitle:"Month"}}),Be=new vr({props:{data:s[7],x:"month",y:["single_cat_orders","multi_cat_orders"],title:"Single-Category vs Multi-Category Orders (Monthly, Stacked)",type:"stacked"}}),{c(){a=u(),ot.c(),o=S("meta"),r=S("meta"),n=zt(),E=u(),_=S("h1"),_.innerHTML=ce,We=u(),se=S("p"),se.innerHTML=st,B=u(),b(D.$$.fragment),z=u(),ie=S("hr"),ge=u(),V=S("h2"),V.innerHTML=Ve,x=u(),T&&T.c(),Y=u(),b(q.$$.fragment),Se=u(),b(J.$$.fragment),ye=u(),b(H.$$.fragment),j=u(),b(P.$$.fragment),ke=u(),ue=S("hr"),Re=u(),M=S("h2"),M.innerHTML=le,_e=u(),Q=S("p"),Q.innerHTML=ze,be=u(),C&&C.c(),G=u(),b(I.$$.fragment),ne=u(),b(X.$$.fragment),Te=u(),de=S("hr"),K=u(),w=S("h2"),w.innerHTML=Ce,Oe=u(),Z=S("p"),Z.innerHTML=xe,ee=u(),O&&O.c(),W=u(),A&&A.c(),te=u(),b(re.$$.fragment),Ae=u(),fe=S("hr"),ae=u(),U=S("h2"),U.innerHTML=Ne,ve=u(),oe=S("p"),oe.textContent=Je,je=u(),N&&N.c(),he=u(),b(f.$$.fragment),Qe=u(),b($e.$$.fragment),it=u(),tt=S("hr"),lt=u(),me=S("h2"),me.innerHTML=Ct,_t=u(),Le=S("p"),Le.textContent=Ot,nt=u(),v&&v.c(),Xe=u(),b(Me.$$.fragment),ct=u(),rt=S("hr"),ut=u(),pe=S("h2"),pe.innerHTML=At,dt=u(),we=S("p"),we.textContent=Nt,ft=u(),h&&h.c(),Ke=u(),b(Ue.$$.fragment),mt=u(),b(De.$$.fragment),pt=u(),b(He.$$.fragment),Et=u(),at=S("hr"),gt=u(),Ee=S("h2"),Ee.innerHTML=vt,St=u(),Ie=S("p"),Ie.textContent=ht,yt=u(),$&&$.c(),Ze=u(),b(Fe.$$.fragment),kt=u(),b(Be.$$.fragment),this.h()},l(e){a=c(e);const t=cr("svelte-2igo1p",document.head);ot.l(t),o=g(t,"META",{name:!0,content:!0}),r=g(t,"META",{name:!0,content:!0}),n=zt(),t.forEach(i),E=c(e),_=g(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),L(_)!=="svelte-jzoh1g"&&(_.innerHTML=ce),We=c(e),se=g(e,"P",{class:!0,"data-svelte-h":!0}),L(se)!=="svelte-oqpb8u"&&(se.innerHTML=st),B=c(e),R(D.$$.fragment,e),z=c(e),ie=g(e,"HR",{class:!0}),ge=c(e),V=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(V)!=="svelte-9hi5bx"&&(V.innerHTML=Ve),x=c(e),T&&T.l(e),Y=c(e),R(q.$$.fragment,e),Se=c(e),R(J.$$.fragment,e),ye=c(e),R(H.$$.fragment,e),j=c(e),R(P.$$.fragment,e),ke=c(e),ue=g(e,"HR",{class:!0}),Re=c(e),M=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(M)!=="svelte-1cbyzhz"&&(M.innerHTML=le),_e=c(e),Q=g(e,"P",{class:!0,"data-svelte-h":!0}),L(Q)!=="svelte-155v86a"&&(Q.innerHTML=ze),be=c(e),C&&C.l(e),G=c(e),R(I.$$.fragment,e),ne=c(e),R(X.$$.fragment,e),Te=c(e),de=g(e,"HR",{class:!0}),K=c(e),w=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(w)!=="svelte-1soxygm"&&(w.innerHTML=Ce),Oe=c(e),Z=g(e,"P",{class:!0,"data-svelte-h":!0}),L(Z)!=="svelte-eoq2mu"&&(Z.innerHTML=xe),ee=c(e),O&&O.l(e),W=c(e),A&&A.l(e),te=c(e),R(re.$$.fragment,e),Ae=c(e),fe=g(e,"HR",{class:!0}),ae=c(e),U=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(U)!=="svelte-1kovfkr"&&(U.innerHTML=Ne),ve=c(e),oe=g(e,"P",{class:!0,"data-svelte-h":!0}),L(oe)!=="svelte-1gdf7nj"&&(oe.textContent=Je),je=c(e),N&&N.l(e),he=c(e),R(f.$$.fragment,e),Qe=c(e),R($e.$$.fragment,e),it=c(e),tt=g(e,"HR",{class:!0}),lt=c(e),me=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(me)!=="svelte-bjahfn"&&(me.innerHTML=Ct),_t=c(e),Le=g(e,"P",{class:!0,"data-svelte-h":!0}),L(Le)!=="svelte-1g0x9dr"&&(Le.textContent=Ot),nt=c(e),v&&v.l(e),Xe=c(e),R(Me.$$.fragment,e),ct=c(e),rt=g(e,"HR",{class:!0}),ut=c(e),pe=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(pe)!=="svelte-18ipp65"&&(pe.innerHTML=At),dt=c(e),we=g(e,"P",{class:!0,"data-svelte-h":!0}),L(we)!=="svelte-1irzxkc"&&(we.textContent=Nt),ft=c(e),h&&h.l(e),Ke=c(e),R(Ue.$$.fragment,e),mt=c(e),R(De.$$.fragment,e),pt=c(e),R(He.$$.fragment,e),Et=c(e),at=g(e,"HR",{class:!0}),gt=c(e),Ee=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Ee)!=="svelte-1rt7thj"&&(Ee.innerHTML=vt),St=c(e),Ie=g(e,"P",{class:!0,"data-svelte-h":!0}),L(Ie)!=="svelte-1necfc4"&&(Ie.textContent=ht),yt=c(e),$&&$.l(e),Ze=c(e),R(Fe.$$.fragment,e),kt=c(e),R(Be.$$.fragment,e),this.h()},h(){p(o,"name","twitter:card"),p(o,"content","summary_large_image"),p(r,"name","twitter:site"),p(r,"content","@evidence_dev"),p(_,"class","markdown"),p(_,"id","-market-basket--co-purchase-intelligence"),p(se,"class","markdown"),p(ie,"class","markdown"),p(V,"class","markdown"),p(V,"id","basket-overview"),p(ue,"class","markdown"),p(M,"class","markdown"),p(M,"id","category-co-purchase-affinity--lift-heatmap"),p(Q,"class","markdown"),p(de,"class","markdown"),p(w,"class","markdown"),p(w,"id","co-purchase-network"),p(Z,"class","markdown"),p(fe,"class","markdown"),p(U,"class","markdown"),p(U,"id","top-association-rules-by-lift"),p(oe,"class","markdown"),p(tt,"class","markdown"),p(me,"class","markdown"),p(me,"id","top-pairs-by-co-purchase-volume"),p(Le,"class","markdown"),p(rt,"class","markdown"),p(pe,"class","markdown"),p(pe,"id","basket-size-distribution"),p(we,"class","markdown"),p(at,"class","markdown"),p(Ee,"class","markdown"),p(Ee,"id","monthly-multi-category-order-rate"),p(Ie,"class","markdown")},m(e,t){l(e,a,t),ot.m(document.head,null),Tt(document.head,o),Tt(document.head,r),Tt(document.head,n),l(e,E,t),l(e,_,t),l(e,We,t),l(e,se,t),l(e,B,t),k(D,e,t),l(e,z,t),l(e,ie,t),l(e,ge,t),l(e,V,t),l(e,x,t),T&&T.m(e,t),l(e,Y,t),k(q,e,t),l(e,Se,t),k(J,e,t),l(e,ye,t),k(H,e,t),l(e,j,t),k(P,e,t),l(e,ke,t),l(e,ue,t),l(e,Re,t),l(e,M,t),l(e,_e,t),l(e,Q,t),l(e,be,t),C&&C.m(e,t),l(e,G,t),k(I,e,t),l(e,ne,t),k(X,e,t),l(e,Te,t),l(e,de,t),l(e,K,t),l(e,w,t),l(e,Oe,t),l(e,Z,t),l(e,ee,t),O&&O.m(e,t),l(e,W,t),A&&A.m(e,t),l(e,te,t),k(re,e,t),l(e,Ae,t),l(e,fe,t),l(e,ae,t),l(e,U,t),l(e,ve,t),l(e,oe,t),l(e,je,t),N&&N.m(e,t),l(e,he,t),k(f,e,t),l(e,Qe,t),k($e,e,t),l(e,it,t),l(e,tt,t),l(e,lt,t),l(e,me,t),l(e,_t,t),l(e,Le,t),l(e,nt,t),v&&v.m(e,t),l(e,Xe,t),k(Me,e,t),l(e,ct,t),l(e,rt,t),l(e,ut,t),l(e,pe,t),l(e,dt,t),l(e,we,t),l(e,ft,t),h&&h.m(e,t),l(e,Ke,t),k(Ue,e,t),l(e,mt,t),k(De,e,t),l(e,pt,t),k(He,e,t),l(e,Et,t),l(e,at,t),l(e,gt,t),l(e,Ee,t),l(e,St,t),l(e,Ie,t),l(e,yt,t),$&&$.m(e,t),l(e,Ze,t),k(Fe,e,t),l(e,kt,t),k(Be,e,t),Rt=!0},p(e,t){ot.p(e,t);const $t={};t[2]&1&&($t.$$scope={dirty:t,ctx:e}),D.$set($t),e[0]?T?(T.p(e,t),t[0]&1&&d(T,1)):(T=Zt(e),T.c(),d(T,1),T.m(Y.parentNode,Y)):T&&(qe(),m(T,1,1,()=>{T=null}),Ye());const Lt={};t[0]&1&&(Lt.data=e[0]),q.$set(Lt);const Mt={};t[0]&1&&(Mt.data=e[0]),J.$set(Mt);const wt={};t[0]&1&&(wt.data=e[0]),H.$set(wt);const Ut={};t[0]&1&&(Ut.data=e[0]),P.$set(Ut),e[1]?C?(C.p(e,t),t[0]&2&&d(C,1)):(C=er(e),C.c(),d(C,1),C.m(G.parentNode,G)):C&&(qe(),m(C,1,1,()=>{C=null}),Ye());const Dt={};t[0]&2&&(Dt.data=e[1]),I.$set(Dt);const Ht={};t[2]&1&&(Ht.$$scope={dirty:t,ctx:e}),X.$set(Ht),e[2]?O?(O.p(e,t),t[0]&4&&d(O,1)):(O=tr(e),O.c(),d(O,1),O.m(W.parentNode,W)):O&&(qe(),m(O,1,1,()=>{O=null}),Ye()),e[3]?A?(A.p(e,t),t[0]&8&&d(A,1)):(A=rr(e),A.c(),d(A,1),A.m(te.parentNode,te)):A&&(qe(),m(A,1,1,()=>{A=null}),Ye());const It={};t[0]&12&&(It.config={backgroundColor:"#fafafa",tooltip:{trigger:"item",formatter:lr},series:[{type:"graph",layout:"circular",animation:!1,roam:!0,circular:{rotateLabel:!0},label:{show:!0,position:"right",formatter:"{b}",fontSize:10},lineStyle:{color:"source",curveness:.3,opacity:.6},emphasis:{focus:"adjacency",lineStyle:{width:10}},data:e[2].map(e[43]),links:e[3].map(e[44])}]}),re.$set(It),e[4]?N?(N.p(e,t),t[0]&16&&d(N,1)):(N=ar(e),N.c(),d(N,1),N.m(he.parentNode,he)):N&&(qe(),m(N,1,1,()=>{N=null}),Ye());const Ft={};t[0]&16&&(Ft.data=e[4]),f.$set(Ft);const Bt={};t[2]&1&&(Bt.$$scope={dirty:t,ctx:e}),$e.$set(Bt),e[5]?v?(v.p(e,t),t[0]&32&&d(v,1)):(v=or(e),v.c(),d(v,1),v.m(Xe.parentNode,Xe)):v&&(qe(),m(v,1,1,()=>{v=null}),Ye());const Yt={};t[0]&32&&(Yt.data=e[5]),Me.$set(Yt),e[6]?h?(h.p(e,t),t[0]&64&&d(h,1)):(h=sr(e),h.c(),d(h,1),h.m(Ke.parentNode,Ke)):h&&(qe(),m(h,1,1,()=>{h=null}),Ye());const qt={};t[0]&64&&(qt.data=e[6]),Ue.$set(qt);const Pt={};t[0]&64&&(Pt.data=e[6]),De.$set(Pt);const Gt={};t[2]&1&&(Gt.$$scope={dirty:t,ctx:e}),He.$set(Gt),e[7]?$?($.p(e,t),t[0]&128&&d($,1)):($=ir(e),$.c(),d($,1),$.m(Ze.parentNode,Ze)):$&&(qe(),m($,1,1,()=>{$=null}),Ye());const Wt={};t[0]&128&&(Wt.data=e[7]),Fe.$set(Wt);const Vt={};t[0]&128&&(Vt.data=e[7]),Be.$set(Vt)},i(e){Rt||(d(D.$$.fragment,e),d(T),d(q.$$.fragment,e),d(J.$$.fragment,e),d(H.$$.fragment,e),d(P.$$.fragment,e),d(C),d(I.$$.fragment,e),d(X.$$.fragment,e),d(O),d(A),d(re.$$.fragment,e),d(N),d(f.$$.fragment,e),d($e.$$.fragment,e),d(v),d(Me.$$.fragment,e),d(h),d(Ue.$$.fragment,e),d(De.$$.fragment,e),d(He.$$.fragment,e),d($),d(Fe.$$.fragment,e),d(Be.$$.fragment,e),Rt=!0)},o(e){m(D.$$.fragment,e),m(T),m(q.$$.fragment,e),m(J.$$.fragment,e),m(H.$$.fragment,e),m(P.$$.fragment,e),m(C),m(I.$$.fragment,e),m(X.$$.fragment,e),m(O),m(A),m(re.$$.fragment,e),m(N),m(f.$$.fragment,e),m($e.$$.fragment,e),m(v),m(Me.$$.fragment,e),m(h),m(Ue.$$.fragment,e),m(De.$$.fragment,e),m(He.$$.fragment,e),m($),m(Fe.$$.fragment,e),m(Be.$$.fragment,e),Rt=!1},d(e){e&&(i(a),i(E),i(_),i(We),i(se),i(B),i(z),i(ie),i(ge),i(V),i(x),i(Y),i(Se),i(ye),i(j),i(ke),i(ue),i(Re),i(M),i(_e),i(Q),i(be),i(G),i(ne),i(Te),i(de),i(K),i(w),i(Oe),i(Z),i(ee),i(W),i(te),i(Ae),i(fe),i(ae),i(U),i(ve),i(oe),i(je),i(he),i(Qe),i(it),i(tt),i(lt),i(me),i(_t),i(Le),i(nt),i(Xe),i(ct),i(rt),i(ut),i(pe),i(dt),i(we),i(ft),i(Ke),i(mt),i(pt),i(Et),i(at),i(gt),i(Ee),i(St),i(Ie),i(yt),i(Ze),i(kt)),ot.d(e),i(o),i(r),i(n),y(D,e),T&&T.d(e),y(q,e),y(J,e),y(H,e),y(P,e),C&&C.d(e),y(I,e),y(X,e),O&&O.d(e),A&&A.d(e),y(re,e),N&&N.d(e),y(f,e),y($e,e),v&&v.d(e),y(Me,e),h&&h.d(e),y(Ue,e),y(De,e),y(He,e),$&&$.d(e),y(Fe,e),y(Be,e)}}}const lr=s=>s.dataType==="edge"?"<b>"+s.data.source+" × "+s.data.target+"</b><br/>Co-purchases: "+(s.data.value||0).toLocaleString()+"<br/>Lift: "+(s.data.lift||"N/A"):"<b>"+s.data.name+"</b><br/>Orders: "+(s.data.value||0).toLocaleString();function Hr(s,a,o){let r,n;xt(s,Ar,f=>o(42,r=f)),xt(s,Jt,f=>o(50,n=f));let{data:E}=a,{data:_={},customFormattingSettings:ce,__db:We,inputs:se}=E;ur(Jt,n="98e6fc5c213d144c4d96805201d6a33c",n);let st=kr(Cr(se));dr(st.subscribe(f=>se=f)),fr(Tr,{getCustomFormats:()=>ce.customFormats||[]});const B=(f,Qe)=>Or(We.query,f,{query_name:Qe});Rr(B),r.params,mr(()=>!0);let D={initialData:void 0,initialError:void 0},z=F`SELECT
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
) AS basket_data`,ie=`SELECT
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
) AS basket_data`;_.basket_kpis_data&&(_.basket_kpis_data instanceof Error?D.initialError=_.basket_kpis_data:D.initialData=_.basket_kpis_data,_.basket_kpis_columns&&(D.knownColumns=_.basket_kpis_columns));let ge,V=!1;const Ve=Pe.createReactive({callback:f=>{o(0,ge=f)},execFn:B},{id:"basket_kpis",...D});Ve(ie,{noResolve:z,...D}),globalThis[Symbol.for("basket_kpis")]={get value(){return ge}};let x={initialData:void 0,initialError:void 0},Y=F`SELECT category_a, category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
UNION ALL
SELECT category_b AS category_a, category_a AS category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
ORDER BY category_a, category_b`,q=`SELECT category_a, category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
UNION ALL
SELECT category_b AS category_a, category_a AS category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
ORDER BY category_a, category_b`;_.affinity_heatmap_data&&(_.affinity_heatmap_data instanceof Error?x.initialError=_.affinity_heatmap_data:x.initialData=_.affinity_heatmap_data,_.affinity_heatmap_columns&&(x.knownColumns=_.affinity_heatmap_columns));let Se,J=!1;const ye=Pe.createReactive({callback:f=>{o(1,Se=f)},execFn:B},{id:"affinity_heatmap",...x});ye(q,{noResolve:Y,...x}),globalThis[Symbol.for("affinity_heatmap")]={get value(){return Se}};let H={initialData:void 0,initialError:void 0},j=F`SELECT category, MAX(cat_orders) AS cat_orders
FROM (
  SELECT category_a AS category, orders_a AS cat_orders FROM market_basket
  UNION ALL
  SELECT category_b AS category, orders_b AS cat_orders FROM market_basket
) t
GROUP BY category
ORDER BY cat_orders DESC`,P=`SELECT category, MAX(cat_orders) AS cat_orders
FROM (
  SELECT category_a AS category, orders_a AS cat_orders FROM market_basket
  UNION ALL
  SELECT category_b AS category, orders_b AS cat_orders FROM market_basket
) t
GROUP BY category
ORDER BY cat_orders DESC`;_.category_nodes_data&&(_.category_nodes_data instanceof Error?H.initialError=_.category_nodes_data:H.initialData=_.category_nodes_data,_.category_nodes_columns&&(H.knownColumns=_.category_nodes_columns));let ke,ue=!1;const Re=Pe.createReactive({callback:f=>{o(2,ke=f)},execFn:B},{id:"category_nodes",...H});Re(P,{noResolve:j,...H}),globalThis[Symbol.for("category_nodes")]={get value(){return ke}};let M={initialData:void 0,initialError:void 0},le=F`SELECT category_a, category_b, co_orders, lift
FROM market_basket
WHERE co_orders >= 100
ORDER BY co_orders DESC
LIMIT 60`,_e=`SELECT category_a, category_b, co_orders, lift
FROM market_basket
WHERE co_orders >= 100
ORDER BY co_orders DESC
LIMIT 60`;_.co_purchase_links_data&&(_.co_purchase_links_data instanceof Error?M.initialError=_.co_purchase_links_data:M.initialData=_.co_purchase_links_data,_.co_purchase_links_columns&&(M.knownColumns=_.co_purchase_links_columns));let Q,ze=!1;const be=Pe.createReactive({callback:f=>{o(3,Q=f)},execFn:B},{id:"co_purchase_links",...M});be(_e,{noResolve:le,...M}),globalThis[Symbol.for("co_purchase_links")]={get value(){return Q}};let G={initialData:void 0,initialError:void 0},I=F`SELECT
  category_a,
  category_b,
  co_orders,
  support_pct,
  confidence_a_to_b_pct,
  confidence_b_to_a_pct,
  lift
FROM market_basket
ORDER BY lift DESC
LIMIT 30`,ne=`SELECT
  category_a,
  category_b,
  co_orders,
  support_pct,
  confidence_a_to_b_pct,
  confidence_b_to_a_pct,
  lift
FROM market_basket
ORDER BY lift DESC
LIMIT 30`;_.top_rules_data&&(_.top_rules_data instanceof Error?G.initialError=_.top_rules_data:G.initialData=_.top_rules_data,_.top_rules_columns&&(G.knownColumns=_.top_rules_columns));let X,Te=!1;const de=Pe.createReactive({callback:f=>{o(4,X=f)},execFn:B},{id:"top_rules",...G});de(ne,{noResolve:I,...G}),globalThis[Symbol.for("top_rules")]={get value(){return X}};let K={initialData:void 0,initialError:void 0},w=F`SELECT
  category_a || ' × ' || category_b AS category_pair,
  co_orders,
  support_pct,
  lift
FROM market_basket
ORDER BY co_orders DESC
LIMIT 20`,Ce=`SELECT
  category_a || ' × ' || category_b AS category_pair,
  co_orders,
  support_pct,
  lift
FROM market_basket
ORDER BY co_orders DESC
LIMIT 20`;_.top_pairs_volume_data&&(_.top_pairs_volume_data instanceof Error?K.initialError=_.top_pairs_volume_data:K.initialData=_.top_pairs_volume_data,_.top_pairs_volume_columns&&(K.knownColumns=_.top_pairs_volume_columns));let Oe,Z=!1;const xe=Pe.createReactive({callback:f=>{o(5,Oe=f)},execFn:B},{id:"top_pairs_volume",...K});xe(Ce,{noResolve:w,...K}),globalThis[Symbol.for("top_pairs_volume")]={get value(){return Oe}};let ee={initialData:void 0,initialError:void 0},W=F`SELECT
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
ORDER BY cat_count`,te=`SELECT
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
ORDER BY cat_count`;_.basket_size_dist_data&&(_.basket_size_dist_data instanceof Error?ee.initialError=_.basket_size_dist_data:ee.initialData=_.basket_size_dist_data,_.basket_size_dist_columns&&(ee.knownColumns=_.basket_size_dist_columns));let re,Ae=!1;const fe=Pe.createReactive({callback:f=>{o(6,re=f)},execFn:B},{id:"basket_size_dist",...ee});fe(te,{noResolve:W,...ee}),globalThis[Symbol.for("basket_size_dist")]={get value(){return re}};let ae={initialData:void 0,initialError:void 0},U=F`SELECT
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
ORDER BY month`,Ne=`SELECT
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
ORDER BY month`;_.monthly_multi_cat_data&&(_.monthly_multi_cat_data instanceof Error?ae.initialError=_.monthly_multi_cat_data:ae.initialData=_.monthly_multi_cat_data,_.monthly_multi_cat_columns&&(ae.knownColumns=_.monthly_multi_cat_columns));let ve,oe=!1;const Je=Pe.createReactive({callback:f=>{o(7,ve=f)},execFn:B},{id:"monthly_multi_cat",...ae});Je(Ne,{noResolve:U,...ae}),globalThis[Symbol.for("monthly_multi_cat")]={get value(){return ve}};const je=f=>({name:f.category,value:f.cat_orders,symbolSize:Math.max(15,Math.min(55,Math.sqrt(f.cat_orders)*.9))}),he=f=>({source:f.category_a,target:f.category_b,value:f.co_orders,lift:f.lift,lineStyle:{width:Math.max(1,Math.min(8,f.co_orders/800))}});return s.$$set=f=>{"data"in f&&o(8,E=f.data)},s.$$.update=()=>{s.$$.dirty[0]&256&&o(9,{data:_={},customFormattingSettings:ce,__db:We}=E,_),s.$$.dirty[0]&512&&br.set(Object.keys(_).length>0),s.$$.dirty[1]&2048&&r.params,s.$$.dirty[0]&15360&&(z||!V?z||(Ve(ie,{noResolve:z,...D}),o(13,V=!0)):Ve(ie,{noResolve:z})),s.$$.dirty[0]&245760&&(Y||!J?Y||(ye(q,{noResolve:Y,...x}),o(17,J=!0)):ye(q,{noResolve:Y})),s.$$.dirty[0]&3932160&&(j||!ue?j||(Re(P,{noResolve:j,...H}),o(21,ue=!0)):Re(P,{noResolve:j})),s.$$.dirty[0]&62914560&&(le||!ze?le||(be(_e,{noResolve:le,...M}),o(25,ze=!0)):be(_e,{noResolve:le})),s.$$.dirty[0]&1006632960&&(I||!Te?I||(de(ne,{noResolve:I,...G}),o(29,Te=!0)):de(ne,{noResolve:I})),s.$$.dirty[0]&1073741824|s.$$.dirty[1]&7&&(w||!Z?w||(xe(Ce,{noResolve:w,...K}),o(33,Z=!0)):xe(Ce,{noResolve:w})),s.$$.dirty[1]&120&&(W||!Ae?W||(fe(te,{noResolve:W,...ee}),o(37,Ae=!0)):fe(te,{noResolve:W})),s.$$.dirty[1]&1920&&(U||!oe?U||(Je(Ne,{noResolve:U,...ae}),o(41,oe=!0)):Je(Ne,{noResolve:U}))},o(11,z=F`SELECT
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
) AS basket_data`),o(12,ie=`SELECT
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
) AS basket_data`),o(15,Y=F`SELECT category_a, category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
UNION ALL
SELECT category_b AS category_a, category_a AS category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
ORDER BY category_a, category_b`),o(16,q=`SELECT category_a, category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
UNION ALL
SELECT category_b AS category_a, category_a AS category_b, lift
FROM market_basket
WHERE lift IS NOT NULL
ORDER BY category_a, category_b`),o(19,j=F`SELECT category, MAX(cat_orders) AS cat_orders
FROM (
  SELECT category_a AS category, orders_a AS cat_orders FROM market_basket
  UNION ALL
  SELECT category_b AS category, orders_b AS cat_orders FROM market_basket
) t
GROUP BY category
ORDER BY cat_orders DESC`),o(20,P=`SELECT category, MAX(cat_orders) AS cat_orders
FROM (
  SELECT category_a AS category, orders_a AS cat_orders FROM market_basket
  UNION ALL
  SELECT category_b AS category, orders_b AS cat_orders FROM market_basket
) t
GROUP BY category
ORDER BY cat_orders DESC`),o(23,le=F`SELECT category_a, category_b, co_orders, lift
FROM market_basket
WHERE co_orders >= 100
ORDER BY co_orders DESC
LIMIT 60`),o(24,_e=`SELECT category_a, category_b, co_orders, lift
FROM market_basket
WHERE co_orders >= 100
ORDER BY co_orders DESC
LIMIT 60`),o(27,I=F`SELECT
  category_a,
  category_b,
  co_orders,
  support_pct,
  confidence_a_to_b_pct,
  confidence_b_to_a_pct,
  lift
FROM market_basket
ORDER BY lift DESC
LIMIT 30`),o(28,ne=`SELECT
  category_a,
  category_b,
  co_orders,
  support_pct,
  confidence_a_to_b_pct,
  confidence_b_to_a_pct,
  lift
FROM market_basket
ORDER BY lift DESC
LIMIT 30`),o(31,w=F`SELECT
  category_a || ' × ' || category_b AS category_pair,
  co_orders,
  support_pct,
  lift
FROM market_basket
ORDER BY co_orders DESC
LIMIT 20`),o(32,Ce=`SELECT
  category_a || ' × ' || category_b AS category_pair,
  co_orders,
  support_pct,
  lift
FROM market_basket
ORDER BY co_orders DESC
LIMIT 20`),o(35,W=F`SELECT
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
ORDER BY cat_count`),o(36,te=`SELECT
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
ORDER BY cat_count`),o(39,U=F`SELECT
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
ORDER BY month`),o(40,Ne=`SELECT
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
ORDER BY month`),[ge,Se,ke,Q,X,Oe,re,ve,E,_,D,z,ie,V,x,Y,q,J,H,j,P,ue,M,le,_e,ze,G,I,ne,Te,K,w,Ce,Z,ee,W,te,Ae,ae,U,Ne,oe,r,je,he]}class Xr extends gr{constructor(a){super(),Sr(this,a,Hr,Dr,nr,{data:8},null,[-1,-1,-1])}}export{Xr as component};
