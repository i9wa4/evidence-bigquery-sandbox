import{s as ke,d,i as c,f as Ie,l as Me,q as Ue,C as st,U as He,V as Ke,F as it,G as ut,H as mt,I as _t,a as Le,b as z,c as E,h as dt,e as Te,g as Oe,j as O,k as be,m as ft,o as ct,n as yt,p as ht}from"../chunks/scheduler.CCfxqTH6.js";import{S as Fe,i as qe,t as _,a as m,g as pe,c as Ae,d as U,m as I,b as w,e as L}from"../chunks/index.h6XQUVJ4.js";import{g as St,M as Rt,N as gt,G as Ct,A as Ne,z as Tt,O as bt,R as ot,S as Et,Q as Ee,U as Ot,V as pt,W as At,D as vt,e as Nt,s as Dt,p as Ut,r as Xe,C as It}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.L9uteW7u.js";import{w as wt}from"../chunks/entry.C_ojv6uL.js";import{h as he,p as Lt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Mt}from"../chunks/stores.Dhm3Itfq.js";import{E as Ht,Q as ve}from"../chunks/Chart.D-l9wpc-.js";import{A as Ze}from"../chunks/AreaChart.BCGp18T6.js";import{B as kt}from"../chunks/BarChart.BBk2maKu.js";import{B as De}from"../chunks/BigValue.CrrSwXE5.js";import{L as Ft}from"../chunks/LineChart.CjzO7ddq.js";function qt(n){let t,r;return t=new Ht({props:{height:n[11],data:n[1],queryID:n[2],config:n[10],printEchartsConfig:n[0],renderer:n[5],downloadableData:n[6],downloadableImage:n[7],connectGroup:n[8],echartsOptions:n[3],seriesOptions:n[4]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o[0]&2048&&(l.height=e[11]),o[0]&2&&(l.data=e[1]),o[0]&4&&(l.queryID=e[2]),o[0]&1024&&(l.config=e[10]),o[0]&1&&(l.printEchartsConfig=e[0]),o[0]&32&&(l.renderer=e[5]),o[0]&64&&(l.downloadableData=e[6]),o[0]&128&&(l.downloadableImage=e[7]),o[0]&256&&(l.connectGroup=e[8]),o[0]&8&&(l.echartsOptions=e[3]),o[0]&16&&(l.seriesOptions=e[4]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function Bt(n){let t,r;return t=new ot({props:{title:"Calendar Heatmap",error:n[9]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o[0]&512&&(l.error=e[9]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function Yt(n){let t,r,e,o;const l=[Bt,qt],s=[];function Q(y,p){return y[9]?0:1}return t=Q(n),r=s[t]=l[t](n),{c(){r.c(),e=Ie()},l(y){r.l(y),e=Ie()},m(y,p){s[t].m(y,p),c(y,e,p),o=!0},p(y,p){let k=t;t=Q(y),t===k?s[t].p(y,p):(pe(),_(s[k],1,1,()=>{s[k]=null}),Ae(),r=s[t],r?r.p(y,p):(r=s[t]=l[t](y),r.c()),m(r,1),r.m(e.parentNode,e))},i(y){o||(m(r),o=!0)},o(y){_(r),o=!1},d(y){y&&d(e),s[t].d(y)}}}function xe(n,t,r){return n.map(e=>[new Date(e[t]).toISOString().split("T")[0],e[r]])}function Gt(n,t,r){let e,o,l,s=Ue,Q=()=>(s(),s=st(e,u=>r(42,l=u)),e);n.$$.on_destroy.push(()=>s());const{theme:y,resolveColorScale:p}=St();Me(n,y,u=>r(41,o=u));let{data:k}=t,{queryID:W}=t,{date:f}=t,{value:R}=t,{valueFmt:ae=void 0}=t,{yearLabel:N=!0}=t,{monthLabel:j=!0}=t,{dayLabel:F=!0}=t,{chartAreaHeight:M=void 0}=t,{title:H=void 0}=t,{subtitle:ne=void 0}=t,J=H!==void 0,ge=ne!==void 0,{legend:K=!0}=t,{filter:D=!1}=t,B="400px",oe,{colorPalette:X=void 0}=t,{colorScale:ye=void 0}=t,{echartsOptions:Z=void 0}=t,{seriesOptions:de=void 0}=t,{printEchartsConfig:Y=!1}=t,{renderer:le=void 0}=t,{downloadableData:se=void 0}=t,{downloadableImage:Se=void 0}=t,{connectGroup:x=void 0}=t,ue,$,q,ee,fe,G,ie,V,te,re,ce=[],P=[],h,{min:me=void 0}=t,{max:_e=void 0}=t;return n.$$set=u=>{"data"in u&&r(1,k=u.data),"queryID"in u&&r(2,W=u.queryID),"date"in u&&r(22,f=u.date),"value"in u&&r(23,R=u.value),"valueFmt"in u&&r(24,ae=u.valueFmt),"yearLabel"in u&&r(14,N=u.yearLabel),"monthLabel"in u&&r(15,j=u.monthLabel),"dayLabel"in u&&r(16,F=u.dayLabel),"chartAreaHeight"in u&&r(17,M=u.chartAreaHeight),"title"in u&&r(25,H=u.title),"subtitle"in u&&r(26,ne=u.subtitle),"legend"in u&&r(18,K=u.legend),"filter"in u&&r(19,D=u.filter),"colorPalette"in u&&r(27,X=u.colorPalette),"colorScale"in u&&r(28,ye=u.colorScale),"echartsOptions"in u&&r(3,Z=u.echartsOptions),"seriesOptions"in u&&r(4,de=u.seriesOptions),"printEchartsConfig"in u&&r(0,Y=u.printEchartsConfig),"renderer"in u&&r(5,le=u.renderer),"downloadableData"in u&&r(6,se=u.downloadableData),"downloadableImage"in u&&r(7,Se=u.downloadableImage),"connectGroup"in u&&r(8,x=u.connectGroup),"min"in u&&r(20,me=u.min),"max"in u&&r(21,_e=u.max)},n.$$.update=()=>{if(n.$$.dirty[0]&16384&&r(14,N=N==="true"||N===!0),n.$$.dirty[0]&32768&&r(15,j=j==="true"||j===!0),n.$$.dirty[0]&65536&&r(16,F=F==="true"||F===!0),n.$$.dirty[0]&262144&&r(18,K=K==="true"||K===!0),n.$$.dirty[0]&524288&&r(19,D=D==="true"||D===!0),n.$$.dirty[0]&402653184&&Q(r(12,e=p(ye??X??"default"))),n.$$.dirty[0]&1&&r(0,Y=Y==="true"||Y===!0),n.$$.dirty[0]&1744815618|n.$$.dirty[1]&4095)try{Rt(k,[f,R]);const u=k.map(S=>({...S,year:new Date(S[f]).getUTCFullYear()})),Ce=[...new Set(u.map(S=>S.year))],we=Ce.length;if(r(30,ue=xe(k,f,R)),me&&(r(20,me=Number(me)),isNaN(me)))throw Error("min must be a number");if(_e&&(r(21,_e=Number(_e)),isNaN(_e)))throw Error("max must be a number");if(r(34,G=me??Math.min(...k.map(S=>S[R]))),r(35,ie=_e??Math.max(...k.map(S=>S[R]))),r(33,ee=gt(k)),r(31,$=ee[R].format),r(32,q=ae?Ct(ae):$),M){if(r(17,M=Number(M)),isNaN(M))throw Error("chartAreaHeight must be a number");if(M<=0)throw Error("chartAreaHeight must be a positive number")}r(29,oe=M??Math.max(100,Ce.length*135)),r(11,B=`${0+K*35+J*18+ge*18+oe}px`),r(36,te={type:"heatmap",coordinateSystem:"calendar",data:ue,emphasis:{itemStyle:{shadowBlur:2,shadowColor:"rgba(0, 0, 0, 0.5)"}}}),r(37,re={left:N?40:20,right:5,cellSize:["auto",13],itemStyle:{color:o.colors["base-100"],borderWidth:.5,borderColor:o.colors["base-300"]},splitLine:{show:!0,lineStyle:{color:o.colors["base-content"]}},monthLabel:{show:j,color:o.colors["base-content-muted"]},dayLabel:{show:F,color:o.colors["base-content-muted"]},yearLabel:{show:N,color:o.colors["base-300"],fontSize:16,fontWeight:600,margin:25}});for(let S=0;S<we;S++){S===0&&(r(39,P=[]),r(38,ce=[]));const Re=xe(u.filter(b=>b.year===Ce[S]),f,R),C={...te};C.data=Re,C.calendarIndex=S;const T={...re};let A=Re[0][0],v=Re[0][0];Re.forEach(b=>{const g=b[0];g<A&&(A=g),g>v&&(v=g)}),T.range=Ce[S],T.top=J*20+ge*20+25+S*135,P.push(C),ce.push(T)}r(10,V={title:{text:H,subtext:ne},animation:!1,grid:{height:oe},tooltip:{trigger:"item",showDelay:0,transitionDuration:.2,confine:!0,axisPointer:{type:"shadow"},formatter(S){return`
					<span id="tooltip" style='font-weight: 600;'>${S.value[0]}</span>
						<br/>
						<span>${Tt(R,q)}: </span>
							<span style='float:right; margin-left: 10px;'>${Ne(Number.isNaN(S.value[1])?0:S.value[1],q)}</span>`},padding:6,borderRadius:4,borderWidth:1,borderColor:o.colors["base-300"],backgroundColor:o.colors["base-100"],extraCssText:"box-shadow: 0 3px 6px rgba(0,0,0,.15); box-shadow: 0 2px 4px rgba(0,0,0,.12); z-index: 1;",textStyle:{color:o.colors["base-content"],fontSize:12,fontWeight:400},order:"valueDesc"},calendar:ce,visualMap:{show:K,itemWidth:10,min:G,max:ie,calculable:D,orient:"horizontal",left:"center",bottom:10,handleStyle:{borderColor:o.colors["base-100"]},textStyle:{color:o.colors["base-content-muted"]},inRange:{color:l},text:D?void 0:[Ne(ie,q),Ne(G,q)],formatter(S){return Ne(S,q)}},series:P,media:[{query:{maxWidth:400},option:{calendar:[]}}]}),r(40,h={left:N?40:20,right:5,cellSize:["auto",12],itemStyle:{borderWidth:.5,borderColor:o.colors["base-300"]},splitLine:{show:!0,lineStyle:{color:o.colors["base-content-muted"]}},monthLabel:{show:j,color:o.colors["base-content-muted"],fontSize:10,formatter(S){return S.nameMap.substring(0,1)}},dayLabel:{show:F,color:o.colors["base-content-muted"],fontSize:10,margin:7},yearLabel:{show:N,color:o.colors["base-300"],fontWeight:600,margin:25,fontSize:14}});for(let S=0;S<V.calendar.length;S++)V.media[0].option.calendar.push(h)}catch(u){if(r(9,fe=u.message),console.error("Error in Calendar Heatmap: "+fe),bt)throw fe}},[Y,k,W,Z,de,le,se,Se,x,fe,V,B,e,y,N,j,F,M,K,D,me,_e,f,R,ae,H,ne,X,ye,oe,ue,$,q,ee,G,ie,te,re,ce,P,h,o,l]}class Pt extends Fe{constructor(t){super(),qe(this,t,Gt,Yt,ke,{data:1,queryID:2,date:22,value:23,valueFmt:24,yearLabel:14,monthLabel:15,dayLabel:16,chartAreaHeight:17,title:25,subtitle:26,legend:18,filter:19,colorPalette:27,colorScale:28,echartsOptions:3,seriesOptions:4,printEchartsConfig:0,renderer:5,downloadableData:6,downloadableImage:7,connectGroup:8,min:20,max:21},null,[-1,-1])}}function Wt(n){let t;const r=n[6].default,e=it(r,n,n[7],null);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,l){e&&e.m(o,l),t=!0},p(o,l){e&&e.p&&(!t||l&128)&&ut(e,r,o,o[7],t?_t(r,o[7],l,null):mt(o[7]),null)},i(o){t||(m(e,o),t=!0)},o(o){_(e,o),t=!1},d(o){e&&e.d(o)}}}function Vt(n){let t,r;const e=[n[4],{data:Ee.isQuery(n[10])?Array.from(n[10]):n[10]},{queryID:n[5]}];let o={$$slots:{default:[Wt]},$$scope:{ctx:n}};for(let l=0;l<e.length;l+=1)o=He(o,e[l]);return t=new Pt({props:o}),{c(){L(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,s){I(t,l,s),r=!0},p(l,s){const Q=s&1072?Ot(e,[s&16&&pt(l[4]),s&1024&&{data:Ee.isQuery(l[10])?Array.from(l[10]):l[10]},s&32&&{queryID:l[5]}]):{};s&128&&(Q.$$scope={dirty:s,ctx:l}),t.$set(Q)},i(l){r||(m(t.$$.fragment,l),r=!0)},o(l){_(t.$$.fragment,l),r=!1},d(l){U(t,l)}}}function zt(n){let t,r;return t=new At({props:{slot:"empty",emptyMessage:n[2],emptySet:n[1],chartType:lt,isInitial:n[3]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o&4&&(l.emptyMessage=e[2]),o&2&&(l.emptySet=e[1]),o&8&&(l.isInitial=e[3]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function Qt(n){let t,r;return t=new ot({props:{slot:"error",title:lt,error:n[10].error.message}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o&1024&&(l.error=e[10].error.message),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function jt(n){let t,r;return t=new Et({props:{data:n[0],$$slots:{error:[Qt,({loaded:e})=>({10:e}),({loaded:e})=>e?1024:0],empty:[zt],default:[Vt,({loaded:e})=>({10:e}),({loaded:e})=>e?1024:0]},$$scope:{ctx:n}}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,[o]){const l={};o&1&&(l.data=e[0]),o&1182&&(l.$$scope={dirty:o,ctx:e}),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}let lt="Calendar Heatmap";function Jt(n,t,r){let e,{$$slots:o={},$$scope:l}=t,{data:s}=t;const Q=Ee.isQuery(s)?s.hash:void 0;let y=(s==null?void 0:s.hash)===Q,{emptySet:p=void 0}=t,{emptyMessage:k=void 0}=t,W=s==null?void 0:s.id;return n.$$set=f=>{r(9,t=He(He({},t),Ke(f))),"data"in f&&r(0,s=f.data),"emptySet"in f&&r(1,p=f.emptySet),"emptyMessage"in f&&r(2,k=f.emptyMessage),"$$scope"in f&&r(7,l=f.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&r(3,y=(s==null?void 0:s.hash)===Q),r(4,e=Object.fromEntries(Object.entries(t).filter(([,f])=>f!==void 0)))},t=Ke(t),[s,p,k,y,e,W,o,l]}class Kt extends Fe{constructor(t){super(),qe(this,t,Jt,jt,ke,{data:0,emptySet:1,emptyMessage:2})}}function Xt(n){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Ue,p:Ue,d:Ue}}function $e(n){let t,r;return t=new ve({props:{queryID:"kpi_metrics",queryResult:n[0]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o[0]&1&&(l.queryResult=e[0]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function et(n){let t,r;return t=new ve({props:{queryID:"monthly_revenue_trend",queryResult:n[1]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o[0]&2&&(l.queryResult=e[1]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function tt(n){let t,r;return t=new ve({props:{queryID:"category_monthly_revenue",queryResult:n[2]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o[0]&4&&(l.queryResult=e[2]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function rt(n){let t,r;return t=new ve({props:{queryID:"status_monthly_orders",queryResult:n[3]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o[0]&8&&(l.queryResult=e[3]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function at(n){let t,r;return t=new ve({props:{queryID:"daily_order_volume",queryResult:n[4]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o[0]&16&&(l.queryResult=e[4]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function nt(n){let t,r;return t=new ve({props:{queryID:"top_revenue_days",queryResult:n[5]}}),{c(){L(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,o){I(t,e,o),r=!0},p(e,o){const l={};o[0]&32&&(l.queryResult=e[5]),t.$set(l)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function Zt(n){let t,r,e,o,l,s,Q='<a href="#-sales-trends--time-analysis">📈 Sales Trends &amp; Time Analysis</a>',y,p,k="Time-series analysis of the TheLook e-commerce dataset featuring AreaChart, LineChart, CalendarHeatmap, and stacked charts.",W,f,R,ae,N,j,F,M,H,ne,J,ge='<a href="#monthly-revenue-trend">Monthly Revenue Trend</a>',K,D,B,oe,X,ye,Z,de='<a href="#revenue-by-category-over-time">Revenue by Category Over Time</a>',Y,le,se,Se,x,ue='<a href="#order-volume-by-status-over-time">Order Volume by Status Over Time</a>',$,q,ee,fe,G,ie='<a href="#daily-order-activity">Daily Order Activity</a>',V,te,re,ce,P,h='<a href="#top-10-revenue-days">Top 10 Revenue Days</a>',me,_e,u,Ce;function we(a,i){return Xt}let Re=we()(n),C=n[0]&&$e(n);R=new De({props:{data:n[0],value:"total_orders",title:"Total Orders"}}),N=new De({props:{data:n[0],value:"total_revenue",title:"Total Revenue",fmt:"$#,##0"}}),F=new De({props:{data:n[0],value:"unique_buyers",title:"Unique Buyers"}}),H=new De({props:{data:n[0],value:"avg_sale_price",title:"Avg Sale Price",fmt:"$#,##0.00"}});let T=n[1]&&et(n);B=new Ze({props:{data:n[1],x:"month",y:"revenue",title:"Monthly Revenue"}}),X=new Ft({props:{data:n[1],x:"month",y:["orders","buyers"],title:"Monthly Orders vs Unique Buyers"}});let A=n[2]&&tt(n);se=new Ze({props:{data:n[2],x:"month",y:"revenue",series:"category",title:"Revenue by Category Over Time (Stacked)",type:"stacked"}});let v=n[3]&&rt(n);ee=new kt({props:{data:n[3],x:"month",y:"orders",series:"status",title:"Orders by Status Over Time (Stacked)",type:"stacked"}});let b=n[4]&&at(n);re=new Kt({props:{data:n[4],date:"order_date",value:"orders",title:"Daily Order Volume Heatmap"}});let g=n[5]&&nt(n);return u=new vt({props:{data:n[5]}}),{c(){t=O(),Re.c(),r=be("meta"),e=be("meta"),o=Ie(),l=O(),s=be("h1"),s.innerHTML=Q,y=O(),p=be("p"),p.textContent=k,W=O(),C&&C.c(),f=O(),L(R.$$.fragment),ae=O(),L(N.$$.fragment),j=O(),L(F.$$.fragment),M=O(),L(H.$$.fragment),ne=O(),J=be("h2"),J.innerHTML=ge,K=O(),T&&T.c(),D=O(),L(B.$$.fragment),oe=O(),L(X.$$.fragment),ye=O(),Z=be("h2"),Z.innerHTML=de,Y=O(),A&&A.c(),le=O(),L(se.$$.fragment),Se=O(),x=be("h2"),x.innerHTML=ue,$=O(),v&&v.c(),q=O(),L(ee.$$.fragment),fe=O(),G=be("h2"),G.innerHTML=ie,V=O(),b&&b.c(),te=O(),L(re.$$.fragment),ce=O(),P=be("h2"),P.innerHTML=h,me=O(),g&&g.c(),_e=O(),L(u.$$.fragment),this.h()},l(a){t=E(a);const i=dt("svelte-2igo1p",document.head);Re.l(i),r=Te(i,"META",{name:!0,content:!0}),e=Te(i,"META",{name:!0,content:!0}),o=Ie(),i.forEach(d),l=E(a),s=Te(a,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Oe(s)!=="svelte-s8j4oq"&&(s.innerHTML=Q),y=E(a),p=Te(a,"P",{class:!0,"data-svelte-h":!0}),Oe(p)!=="svelte-g1uqh9"&&(p.textContent=k),W=E(a),C&&C.l(a),f=E(a),w(R.$$.fragment,a),ae=E(a),w(N.$$.fragment,a),j=E(a),w(F.$$.fragment,a),M=E(a),w(H.$$.fragment,a),ne=E(a),J=Te(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(J)!=="svelte-13buerm"&&(J.innerHTML=ge),K=E(a),T&&T.l(a),D=E(a),w(B.$$.fragment,a),oe=E(a),w(X.$$.fragment,a),ye=E(a),Z=Te(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(Z)!=="svelte-1uh6his"&&(Z.innerHTML=de),Y=E(a),A&&A.l(a),le=E(a),w(se.$$.fragment,a),Se=E(a),x=Te(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(x)!=="svelte-17rwjw"&&(x.innerHTML=ue),$=E(a),v&&v.l(a),q=E(a),w(ee.$$.fragment,a),fe=E(a),G=Te(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(G)!=="svelte-2mijga"&&(G.innerHTML=ie),V=E(a),b&&b.l(a),te=E(a),w(re.$$.fragment,a),ce=E(a),P=Te(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Oe(P)!=="svelte-1f61ap7"&&(P.innerHTML=h),me=E(a),g&&g.l(a),_e=E(a),w(u.$$.fragment,a),this.h()},h(){z(r,"name","twitter:card"),z(r,"content","summary_large_image"),z(e,"name","twitter:site"),z(e,"content","@evidence_dev"),z(s,"class","markdown"),z(s,"id","-sales-trends--time-analysis"),z(p,"class","markdown"),z(J,"class","markdown"),z(J,"id","monthly-revenue-trend"),z(Z,"class","markdown"),z(Z,"id","revenue-by-category-over-time"),z(x,"class","markdown"),z(x,"id","order-volume-by-status-over-time"),z(G,"class","markdown"),z(G,"id","daily-order-activity"),z(P,"class","markdown"),z(P,"id","top-10-revenue-days")},m(a,i){c(a,t,i),Re.m(document.head,null),Le(document.head,r),Le(document.head,e),Le(document.head,o),c(a,l,i),c(a,s,i),c(a,y,i),c(a,p,i),c(a,W,i),C&&C.m(a,i),c(a,f,i),I(R,a,i),c(a,ae,i),I(N,a,i),c(a,j,i),I(F,a,i),c(a,M,i),I(H,a,i),c(a,ne,i),c(a,J,i),c(a,K,i),T&&T.m(a,i),c(a,D,i),I(B,a,i),c(a,oe,i),I(X,a,i),c(a,ye,i),c(a,Z,i),c(a,Y,i),A&&A.m(a,i),c(a,le,i),I(se,a,i),c(a,Se,i),c(a,x,i),c(a,$,i),v&&v.m(a,i),c(a,q,i),I(ee,a,i),c(a,fe,i),c(a,G,i),c(a,V,i),b&&b.m(a,i),c(a,te,i),I(re,a,i),c(a,ce,i),c(a,P,i),c(a,me,i),g&&g.m(a,i),c(a,_e,i),I(u,a,i),Ce=!0},p(a,i){Re.p(a,i),a[0]?C?(C.p(a,i),i[0]&1&&m(C,1)):(C=$e(a),C.c(),m(C,1),C.m(f.parentNode,f)):C&&(pe(),_(C,1,1,()=>{C=null}),Ae());const Be={};i[0]&1&&(Be.data=a[0]),R.$set(Be);const Ye={};i[0]&1&&(Ye.data=a[0]),N.$set(Ye);const Ge={};i[0]&1&&(Ge.data=a[0]),F.$set(Ge);const Pe={};i[0]&1&&(Pe.data=a[0]),H.$set(Pe),a[1]?T?(T.p(a,i),i[0]&2&&m(T,1)):(T=et(a),T.c(),m(T,1),T.m(D.parentNode,D)):T&&(pe(),_(T,1,1,()=>{T=null}),Ae());const We={};i[0]&2&&(We.data=a[1]),B.$set(We);const Ve={};i[0]&2&&(Ve.data=a[1]),X.$set(Ve),a[2]?A?(A.p(a,i),i[0]&4&&m(A,1)):(A=tt(a),A.c(),m(A,1),A.m(le.parentNode,le)):A&&(pe(),_(A,1,1,()=>{A=null}),Ae());const ze={};i[0]&4&&(ze.data=a[2]),se.$set(ze),a[3]?v?(v.p(a,i),i[0]&8&&m(v,1)):(v=rt(a),v.c(),m(v,1),v.m(q.parentNode,q)):v&&(pe(),_(v,1,1,()=>{v=null}),Ae());const Qe={};i[0]&8&&(Qe.data=a[3]),ee.$set(Qe),a[4]?b?(b.p(a,i),i[0]&16&&m(b,1)):(b=at(a),b.c(),m(b,1),b.m(te.parentNode,te)):b&&(pe(),_(b,1,1,()=>{b=null}),Ae());const je={};i[0]&16&&(je.data=a[4]),re.$set(je),a[5]?g?(g.p(a,i),i[0]&32&&m(g,1)):(g=nt(a),g.c(),m(g,1),g.m(_e.parentNode,_e)):g&&(pe(),_(g,1,1,()=>{g=null}),Ae());const Je={};i[0]&32&&(Je.data=a[5]),u.$set(Je)},i(a){Ce||(m(C),m(R.$$.fragment,a),m(N.$$.fragment,a),m(F.$$.fragment,a),m(H.$$.fragment,a),m(T),m(B.$$.fragment,a),m(X.$$.fragment,a),m(A),m(se.$$.fragment,a),m(v),m(ee.$$.fragment,a),m(b),m(re.$$.fragment,a),m(g),m(u.$$.fragment,a),Ce=!0)},o(a){_(C),_(R.$$.fragment,a),_(N.$$.fragment,a),_(F.$$.fragment,a),_(H.$$.fragment,a),_(T),_(B.$$.fragment,a),_(X.$$.fragment,a),_(A),_(se.$$.fragment,a),_(v),_(ee.$$.fragment,a),_(b),_(re.$$.fragment,a),_(g),_(u.$$.fragment,a),Ce=!1},d(a){a&&(d(t),d(l),d(s),d(y),d(p),d(W),d(f),d(ae),d(j),d(M),d(ne),d(J),d(K),d(D),d(oe),d(ye),d(Z),d(Y),d(le),d(Se),d(x),d($),d(q),d(fe),d(G),d(V),d(te),d(ce),d(P),d(me),d(_e)),Re.d(a),d(r),d(e),d(o),C&&C.d(a),U(R,a),U(N,a),U(F,a),U(H,a),T&&T.d(a),U(B,a),U(X,a),A&&A.d(a),U(se,a),v&&v.d(a),U(ee,a),b&&b.d(a),U(re,a),g&&g.d(a),U(u,a)}}}function xt(n,t,r){let e,o;Me(n,Mt,h=>r(32,e=h)),Me(n,Xe,h=>r(38,o=h));let{data:l}=t,{data:s={},customFormattingSettings:Q,__db:y,inputs:p}=l;ft(Xe,o="77babbf1a523791bd08c45361ddd90c7",o);let k=Nt(wt(p));ct(k.subscribe(h=>p=h)),yt(It,{getCustomFormats:()=>Q.customFormats||[]});const W=(h,me)=>Lt(y.query,h,{query_name:me});Dt(W),e.params,ht(()=>!0);let f={initialData:void 0,initialError:void 0},R=he`SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  COUNT(DISTINCT user_id) AS unique_buyers,
  ROUND(AVG(sale_price), 2) AS avg_sale_price
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')`,ae=`SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  COUNT(DISTINCT user_id) AS unique_buyers,
  ROUND(AVG(sale_price), 2) AS avg_sale_price
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')`;s.kpi_metrics_data&&(s.kpi_metrics_data instanceof Error?f.initialError=s.kpi_metrics_data:f.initialData=s.kpi_metrics_data,s.kpi_metrics_columns&&(f.knownColumns=s.kpi_metrics_columns));let N,j=!1;const F=Ee.createReactive({callback:h=>{r(0,N=h)},execFn:W},{id:"kpi_metrics",...f});F(ae,{noResolve:R,...f}),globalThis[Symbol.for("kpi_metrics")]={get value(){return N}};let M={initialData:void 0,initialError:void 0},H=he`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT user_id) AS buyers
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`,ne=`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT user_id) AS buyers
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`;s.monthly_revenue_trend_data&&(s.monthly_revenue_trend_data instanceof Error?M.initialError=s.monthly_revenue_trend_data:M.initialData=s.monthly_revenue_trend_data,s.monthly_revenue_trend_columns&&(M.knownColumns=s.monthly_revenue_trend_columns));let J,ge=!1;const K=Ee.createReactive({callback:h=>{r(1,J=h)},execFn:W},{id:"monthly_revenue_trend",...M});K(ne,{noResolve:H,...M}),globalThis[Symbol.for("monthly_revenue_trend")]={get value(){return J}};let D={initialData:void 0,initialError:void 0},B=he`SELECT
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY month, p.category
ORDER BY month, revenue DESC`,oe=`SELECT
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY month, p.category
ORDER BY month, revenue DESC`;s.category_monthly_revenue_data&&(s.category_monthly_revenue_data instanceof Error?D.initialError=s.category_monthly_revenue_data:D.initialData=s.category_monthly_revenue_data,s.category_monthly_revenue_columns&&(D.knownColumns=s.category_monthly_revenue_columns));let X,ye=!1;const Z=Ee.createReactive({callback:h=>{r(2,X=h)},execFn:W},{id:"category_monthly_revenue",...D});Z(oe,{noResolve:B,...D}),globalThis[Symbol.for("category_monthly_revenue")]={get value(){return X}};let de={initialData:void 0,initialError:void 0},Y=he`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY month, status
ORDER BY month, orders DESC`,le=`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY month, status
ORDER BY month, orders DESC`;s.status_monthly_orders_data&&(s.status_monthly_orders_data instanceof Error?de.initialError=s.status_monthly_orders_data:de.initialData=s.status_monthly_orders_data,s.status_monthly_orders_columns&&(de.knownColumns=s.status_monthly_orders_columns));let se,Se=!1;const x=Ee.createReactive({callback:h=>{r(3,se=h)},execFn:W},{id:"status_monthly_orders",...de});x(le,{noResolve:Y,...de}),globalThis[Symbol.for("status_monthly_orders")]={get value(){return se}};let ue={initialData:void 0,initialError:void 0},$=he`SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY order_date`,q=`SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY order_date`;s.daily_order_volume_data&&(s.daily_order_volume_data instanceof Error?ue.initialError=s.daily_order_volume_data:ue.initialData=s.daily_order_volume_data,s.daily_order_volume_columns&&(ue.knownColumns=s.daily_order_volume_columns));let ee,fe=!1;const G=Ee.createReactive({callback:h=>{r(4,ee=h)},execFn:W},{id:"daily_order_volume",...ue});G(q,{noResolve:$,...ue}),globalThis[Symbol.for("daily_order_volume")]={get value(){return ee}};let ie={initialData:void 0,initialError:void 0},V=he`SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY revenue DESC
LIMIT 10`,te=`SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY revenue DESC
LIMIT 10`;s.top_revenue_days_data&&(s.top_revenue_days_data instanceof Error?ie.initialError=s.top_revenue_days_data:ie.initialData=s.top_revenue_days_data,s.top_revenue_days_columns&&(ie.knownColumns=s.top_revenue_days_columns));let re,ce=!1;const P=Ee.createReactive({callback:h=>{r(5,re=h)},execFn:W},{id:"top_revenue_days",...ie});return P(te,{noResolve:V,...ie}),globalThis[Symbol.for("top_revenue_days")]={get value(){return re}},n.$$set=h=>{"data"in h&&r(6,l=h.data)},n.$$.update=()=>{n.$$.dirty[0]&64&&r(7,{data:s={},customFormattingSettings:Q,__db:y}=l,s),n.$$.dirty[0]&128&&Ut.set(Object.keys(s).length>0),n.$$.dirty[1]&2&&e.params,n.$$.dirty[0]&3840&&(R||!j?R||(F(ae,{noResolve:R,...f}),r(11,j=!0)):F(ae,{noResolve:R})),n.$$.dirty[0]&61440&&(H||!ge?H||(K(ne,{noResolve:H,...M}),r(15,ge=!0)):K(ne,{noResolve:H})),n.$$.dirty[0]&983040&&(B||!ye?B||(Z(oe,{noResolve:B,...D}),r(19,ye=!0)):Z(oe,{noResolve:B})),n.$$.dirty[0]&15728640&&(Y||!Se?Y||(x(le,{noResolve:Y,...de}),r(23,Se=!0)):x(le,{noResolve:Y})),n.$$.dirty[0]&251658240&&($||!fe?$||(G(q,{noResolve:$,...ue}),r(27,fe=!0)):G(q,{noResolve:$})),n.$$.dirty[0]&1879048192|n.$$.dirty[1]&1&&(V||!ce?V||(P(te,{noResolve:V,...ie}),r(31,ce=!0)):P(te,{noResolve:V}))},r(9,R=he`SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  COUNT(DISTINCT user_id) AS unique_buyers,
  ROUND(AVG(sale_price), 2) AS avg_sale_price
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')`),r(10,ae=`SELECT
  COUNT(*) AS total_orders,
  ROUND(SUM(sale_price), 2) AS total_revenue,
  COUNT(DISTINCT user_id) AS unique_buyers,
  ROUND(AVG(sale_price), 2) AS avg_sale_price
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')`),r(13,H=he`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT user_id) AS buyers
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`),r(14,ne=`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT user_id) AS buyers
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY month
ORDER BY month`),r(17,B=he`SELECT
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY month, p.category
ORDER BY month, revenue DESC`),r(18,oe=`SELECT
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY month, p.category
ORDER BY month, revenue DESC`),r(21,Y=he`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY month, status
ORDER BY month, orders DESC`),r(22,le=`SELECT
  LEFT(CAST(created_at AS VARCHAR), 7) AS month,
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY month, status
ORDER BY month, orders DESC`),r(25,$=he`SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY order_date`),r(26,q=`SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY order_date`),r(29,V=he`SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY revenue DESC
LIMIT 10`),r(30,te=`SELECT
  CAST(created_at AS DATE) AS order_date,
  COUNT(*) AS orders,
  ROUND(SUM(sale_price), 2) AS revenue
FROM order_items
WHERE status NOT IN ('Cancelled', 'Returned')
GROUP BY order_date
ORDER BY revenue DESC
LIMIT 10`),[N,J,X,se,ee,re,l,s,f,R,ae,j,M,H,ne,ge,D,B,oe,ye,de,Y,le,Se,ue,$,q,fe,ie,V,te,ce,e]}class mr extends Fe{constructor(t){super(),qe(this,t,xt,Zt,ke,{data:6},null,[-1,-1])}}export{mr as component};
