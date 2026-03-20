import{s as ve,Q as it,l as ze,R as yt,q as we,C as Pe,F as Ve,d as O,G as Je,H as Qe,I as je,i as S,c as H,j as P,f as Ge,U as We,V as nt,a as qe,b as Re,h as bt,e as De,g as Fe,k as Ie,m as ht,o as Ot,n as Rt,p as pt}from"../chunks/scheduler.CCfxqTH6.js";import{S as Be,i as ke,d as Z,t as y,a as m,m as x,b as $,e as ee,g as Ue,c as Me}from"../chunks/index.h6XQUVJ4.js";import{w as St,x as Ct,g as Ke,z as Ne,a4 as Tt,A as pe,y as He,M as Et,N as Nt,G as At,O as Dt,R as mt,S as It,Q as Ae,U as Ut,V as Mt,W as Ft,D as Lt,e as wt,s as vt,p as Bt,r as lt,C as kt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BSr8zeYm.js";import{w as Ht}from"../chunks/entry.Bbj_y6rS.js";import{h as Ee,p as Pt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Gt}from"../chunks/Dropdown.CVbRPn6G.js";import{p as Yt}from"../chunks/stores.CTSqB_F3.js";import{C as qt,E as zt,Q as Le}from"../chunks/Chart.BBiolwXv.js";import{B as Wt}from"../chunks/BarChart.C3OCRLaC.js";import{g as Vt,a as Jt}from"../chunks/getCompletedData.CUUol54G.js";import{H as Qt}from"../chunks/Heatmap.Cul642OA.js";import{H as jt}from"../chunks/Histogram.DO9ssIk0.js";import{S as Kt}from"../chunks/ScatterPlot.Cj5yMf1o.js";function Xt(i,t,e){let r,a,o,l,c,d,g,z,h,w,de,ye,j,W,F,I,K,ne,V=we,se=()=>(V(),V=Pe(a,_=>e(29,ne=_)),a),be,L=we,ce=()=>(L(),L=Pe(r,_=>e(30,be=_)),r),T;i.$$.on_destroy.push(()=>V()),i.$$.on_destroy.push(()=>L());let me=it(St);ze(i,me,_=>e(31,T=_));let ue=it(Ct);const{resolveColor:Ce}=Ke();let{y:b=void 0}=t;const Se=!!b;let{series:G=void 0}=t;const le=!!G;let{options:v=void 0}=t,{size:Y=void 0}=t,{name:B=void 0}=t,{shape:N=void 0}=t,{fillColor:q=void 0}=t,{opacity:te=.7}=t,{outlineColor:re=void 0}=t,{outlineWidth:ge=void 0}=t,M=35,{scaleTo:fe=1}=t,{useTooltip:oe=!1}=t,{tooltipTitle:J}=t,{seriesOrder:ie=void 0}=t,{seriesLabelFmt:ae=void 0}=t,A,Q;function he(_){const R=_[2];return Math.sqrt(R/j*W)}let _e,X;return oe&&(_e={tooltip:{formatter:function(R){return A?J?Q=`<span id="tooltip" style='font-weight:600'>${pe(R.value[3],"0")}</span><br/>
                            ${Ne(G)}: <span style='float:right; margin-left: 15px;'>${pe(R.seriesName)}</span><br/>
                            ${Ne(l,g)}: <span style='float:right; margin-left: 15px;'>${pe(R.value[0],g)}</span><br/>
                            ${Ne(typeof b=="object"?R.seriesName:b,z)}: <span style='float:right; margin-left: 15px;'>${pe(R.value[1],z)}</span><br/>
                            ${Ne(Y,h)} <span style='font-weight: 400;'> (size)</span>: <span style='float:right; margin-left: 15px;'>${pe(R.value[2],h)}</span>`:Q=`<span id="tooltip" style='font-weight:600'>${pe(R.seriesName)}</span><br/>
                            ${Ne(l,g)}: <span style='float:right; margin-left: 15px;'>${pe(R.value[0],g)}</span><br/>
                            ${Ne(typeof b=="object"?R.seriesName:b,z)}: <span style='float:right; margin-left: 15px;'>${pe(R.value[1],z)}</span><br/>
                            ${Ne(Y,h)} <span style='font-weight: 400;'> (size)</span>: <span style='float:right; margin-left: 15px;'>${pe(R.value[2],h)}</span>`:J?Q=`<span id="tooltip" style='font-weight:600;'>${pe(R.value[3],"0")}</span><br/>
                            <span style='font-weight: 400;'>${Ne(l,g)}:</span> <span style='float:right; margin-left: 15px;'>${pe(R.value[0],g)}</span><br/>
                            <span style='font-weight: 400;'>${Ne(b,z)}:</span> <span style='float:right; margin-left: 15px;'>${pe(R.value[1],z)}</span><br/>
                            <span style='font-weight: 400;'>${Ne(Y,h)} <span style='font-weight: 400;'> (size)</span>:</span> <span style='float:right; margin-left: 15px;'>${pe(R.value[2],h)}</span>`:Q=`<span id="tooltip" style='font-weight: 600;'>${Ne(l,g)}:</span> <span style='float:right; margin-left: 15px;'>${pe(R.value[0],g)}</span><br/>
                            <span style='font-weight: 600;'>${Ne(b,z)}:</span> <span style='float:right; margin-left: 15px;'>${pe(R.value[1],z)}</span><br/>
                            <span style='font-weight: 600;'>${Ne(Y,h)} <span style='font-weight: 400;'> (size)</span>:</span> <span style='float:right; margin-left: 15px;'>${pe(R.value[2],h)}</span>`,Q}}},X={tooltip:{trigger:"item"}}),yt(()=>{ue.update(_=>(c?(_.yAxis={..._.yAxis,...K.xAxis},_.xAxis={..._.xAxis,...K.yAxis}):(_.yAxis[0]={..._.yAxis[0],...K.yAxis},_.xAxis={..._.xAxis,...K.xAxis}),oe&&(_.tooltip={..._.tooltip,...X.tooltip}),_))}),i.$$set=_=>{"y"in _&&e(3,b=_.y),"series"in _&&e(4,G=_.series),"options"in _&&e(8,v=_.options),"size"in _&&e(5,Y=_.size),"name"in _&&e(6,B=_.name),"shape"in _&&e(9,N=_.shape),"fillColor"in _&&e(10,q=_.fillColor),"opacity"in _&&e(11,te=_.opacity),"outlineColor"in _&&e(12,re=_.outlineColor),"outlineWidth"in _&&e(13,ge=_.outlineWidth),"scaleTo"in _&&e(14,fe=_.scaleTo),"useTooltip"in _&&e(15,oe=_.useTooltip),"tooltipTitle"in _&&e(7,J=_.tooltipTitle),"seriesOrder"in _&&e(16,ie=_.seriesOrder),"seriesLabelFmt"in _&&e(17,ae=_.seriesLabelFmt)},i.$$.update=()=>{i.$$.dirty[0]&1024&&ce(e(1,r=Ce(q))),i.$$.dirty[0]&4096&&se(e(0,a=Ce(re))),i.$$.dirty[0]&278528&&e(18,M=M*(fe/1)),i.$$.dirty[1]&1&&e(27,o=T.data),i.$$.dirty[1]&1&&e(26,l=T.x),i.$$.dirty[1]&1&&e(20,c=T.swapXY),i.$$.dirty[1]&1&&e(21,d=T.xType),i.$$.dirty[1]&1&&(g=T.xFormat),i.$$.dirty[1]&1&&(z=T.yFormat),i.$$.dirty[1]&1&&(h=T.sizeFormat),i.$$.dirty[1]&1&&e(24,w=T.xMismatch),i.$$.dirty[1]&1&&e(23,de=T.columnSummary),i.$$.dirty[0]&8|i.$$.dirty[1]&1&&e(3,b=Se?b:T.y),i.$$.dirty[0]&16|i.$$.dirty[1]&1&&e(4,G=le?G:T.series),i.$$.dirty[0]&32|i.$$.dirty[1]&1&&e(5,Y=Y??T.size),i.$$.dirty[0]&128|i.$$.dirty[1]&1&&e(7,J=J??T.tooltipTitle),i.$$.dirty[0]&209715288&&(!G&&typeof b!="object"?(e(6,B=B??Ne(b,de[b].title)),A=!1):(e(27,o=Vt(o,l,b,G)),A=!0)),i.$$.dirty[0]&134217760&&e(28,ye=Tt(o,Y)),i.$$.dirty[0]&268435456&&(j=ye[1]),i.$$.dirty[0]&262144&&(W=Math.pow(M,2)),i.$$.dirty[0]&1611147776&&e(25,F={type:"scatter",label:{show:!1},labelLayout:{hideOverlap:!0},emphasis:{focus:"series"},symbolSize(_){return he(_)},symbol:N,itemStyle:{color:be,opacity:te,borderColor:ne,borderWidth:ge},..._e}),i.$$.dirty[0]&33554688&&v&&e(25,F={...F,...v}),i.$$.dirty[0]&261292280&&e(22,I=Jt(o,l,b,G,c,F,B,w,de,ie,Y,J,void 0,ae)),i.$$.dirty[0]&4194304&&ue.update(_=>(_.series.push(...I),_.legend.data.push(...I.map(R=>R.name.toString())),_)),i.$$.dirty[0]&2097152&&(K={yAxis:{scale:!0,boundaryGap:["1%","1%"]},xAxis:{boundaryGap:[d==="time"?"2%":"1%","2%"]}})},[a,r,me,b,G,Y,B,J,v,N,q,te,re,ge,fe,oe,ie,ae,M,_e,c,d,I,de,w,F,l,o,ye,ne,be,T]}class Zt extends Be{constructor(t){super(),ke(this,t,Xt,null,ve,{y:3,series:4,options:8,size:5,name:6,shape:9,fillColor:10,opacity:11,outlineColor:12,outlineWidth:13,scaleTo:14,useTooltip:15,tooltipTitle:7,seriesOrder:16,seriesLabelFmt:17},null,[-1,-1])}}function xt(i){let t,e,r;t=new Zt({props:{shape:i[27],fillColor:i[51],opacity:i[28],outlineColor:i[50],outlineWidth:i[29],scaleTo:i[30],useTooltip:i[47],seriesOrder:i[41],seriesLabelFmt:i[43]}});const a=i[56].default,o=Ve(a,i,i[57],null);return{c(){ee(t.$$.fragment),e=P(),o&&o.c()},l(l){$(t.$$.fragment,l),e=H(l),o&&o.l(l)},m(l,c){x(t,l,c),S(l,e,c),o&&o.m(l,c),r=!0},p(l,c){const d={};c[0]&134217728&&(d.shape=l[27]),c[1]&1048576&&(d.fillColor=l[51]),c[0]&268435456&&(d.opacity=l[28]),c[1]&524288&&(d.outlineColor=l[50]),c[0]&536870912&&(d.outlineWidth=l[29]),c[0]&1073741824&&(d.scaleTo=l[30]),c[1]&65536&&(d.useTooltip=l[47]),c[1]&1024&&(d.seriesOrder=l[41]),c[1]&4096&&(d.seriesLabelFmt=l[43]),t.$set(d),o&&o.p&&(!r||c[1]&67108864)&&Je(o,a,l,l[57],r?je(a,l[57],c,null):Qe(l[57]),null)},i(l){r||(m(t.$$.fragment,l),m(o,l),r=!0)},o(l){y(t.$$.fragment,l),y(o,l),r=!1},d(l){l&&O(e),Z(t,l),o&&o.d(l)}}}function $t(i){let t,e;return t=new qt({props:{data:i[1],x:i[2],y:i[3],size:i[4],xFmt:i[10],yFmt:i[9],sizeFmt:i[11],tooltipTitle:i[33],series:i[5],xType:i[6],yLog:i[7],yLogBase:i[8],legend:i[14],xAxisTitle:i[15],yAxisTitle:i[16],xGridlines:i[17],yGridlines:i[18],xAxisLabels:i[19],yAxisLabels:i[20],xBaseline:i[21],yBaseline:i[22],xTickMarks:i[23],yTickMarks:i[24],yMin:i[25],yMax:i[26],title:i[12],subtitle:i[13],chartType:er,bubble:i[46],sort:i[32],chartAreaHeight:i[31],colorPalette:i[49],echartsOptions:i[34],seriesOptions:i[35],printEchartsConfig:i[0],emptySet:i[36],emptyMessage:i[37],renderer:i[38],downloadableData:i[39],downloadableImage:i[40],connectGroup:i[42],seriesColors:i[48],leftPadding:i[44],rightPadding:i[45],$$slots:{default:[xt]},$$scope:{ctx:i}}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&2&&(o.data=r[1]),a[0]&4&&(o.x=r[2]),a[0]&8&&(o.y=r[3]),a[0]&16&&(o.size=r[4]),a[0]&1024&&(o.xFmt=r[10]),a[0]&512&&(o.yFmt=r[9]),a[0]&2048&&(o.sizeFmt=r[11]),a[1]&4&&(o.tooltipTitle=r[33]),a[0]&32&&(o.series=r[5]),a[0]&64&&(o.xType=r[6]),a[0]&128&&(o.yLog=r[7]),a[0]&256&&(o.yLogBase=r[8]),a[0]&16384&&(o.legend=r[14]),a[0]&32768&&(o.xAxisTitle=r[15]),a[0]&65536&&(o.yAxisTitle=r[16]),a[0]&131072&&(o.xGridlines=r[17]),a[0]&262144&&(o.yGridlines=r[18]),a[0]&524288&&(o.xAxisLabels=r[19]),a[0]&1048576&&(o.yAxisLabels=r[20]),a[0]&2097152&&(o.xBaseline=r[21]),a[0]&4194304&&(o.yBaseline=r[22]),a[0]&8388608&&(o.xTickMarks=r[23]),a[0]&16777216&&(o.yTickMarks=r[24]),a[0]&33554432&&(o.yMin=r[25]),a[0]&67108864&&(o.yMax=r[26]),a[0]&4096&&(o.title=r[12]),a[0]&8192&&(o.subtitle=r[13]),a[1]&32768&&(o.bubble=r[46]),a[1]&2&&(o.sort=r[32]),a[1]&1&&(o.chartAreaHeight=r[31]),a[1]&262144&&(o.colorPalette=r[49]),a[1]&8&&(o.echartsOptions=r[34]),a[1]&16&&(o.seriesOptions=r[35]),a[0]&1&&(o.printEchartsConfig=r[0]),a[1]&32&&(o.emptySet=r[36]),a[1]&64&&(o.emptyMessage=r[37]),a[1]&128&&(o.renderer=r[38]),a[1]&256&&(o.downloadableData=r[39]),a[1]&512&&(o.downloadableImage=r[40]),a[1]&2048&&(o.connectGroup=r[42]),a[1]&131072&&(o.seriesColors=r[48]),a[1]&8192&&(o.leftPadding=r[44]),a[1]&16384&&(o.rightPadding=r[45]),a[0]&2013265920|a[1]&68752384&&(o.$$scope={dirty:a,ctx:r}),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}let er="Bubble Chart";function tr(i,t,e){let r,a,o,l,{$$slots:c={},$$scope:d}=t;const{resolveColor:g,resolveColorsObject:z,resolveColorPalette:h}=Ke();let{data:w=void 0}=t,{x:de=void 0}=t,{y:ye=void 0}=t,{size:j=void 0}=t,{series:W=void 0}=t,{xType:F=void 0}=t,{yLog:I=void 0}=t,{yLogBase:K=void 0}=t,{yFmt:ne=void 0}=t,{xFmt:V=void 0}=t,{sizeFmt:se=void 0}=t,{title:be=void 0}=t,{subtitle:L=void 0}=t,{legend:ce=void 0}=t,{xAxisTitle:T="true"}=t,{yAxisTitle:me="true"}=t,{xGridlines:ue=void 0}=t,{yGridlines:Ce=void 0}=t,{xAxisLabels:b=void 0}=t,{yAxisLabels:Se=void 0}=t,{xBaseline:G=void 0}=t,{yBaseline:le=void 0}=t,{xTickMarks:v=void 0}=t,{yTickMarks:Y=void 0}=t,{yMin:B=void 0}=t,{yMax:N=void 0}=t,{shape:q=void 0}=t,{fillColor:te=void 0}=t,{opacity:re=void 0}=t,{outlineColor:ge=void 0}=t,{outlineWidth:M=void 0}=t,{scaleTo:fe=void 0}=t,{chartAreaHeight:oe=void 0}=t,{sort:J=void 0}=t,{tooltipTitle:ie=void 0}=t,ae=!0,A=!0,{colorPalette:Q="default"}=t,{echartsOptions:he=void 0}=t,{seriesOptions:_e=void 0}=t,{printEchartsConfig:X=!1}=t,{emptySet:_=void 0}=t,{emptyMessage:R=void 0}=t,{renderer:Te=void 0}=t,{downloadableData:Oe=void 0}=t,{downloadableImage:U=void 0}=t,{seriesColors:C=void 0}=t,{seriesOrder:D=void 0}=t,{connectGroup:u=void 0}=t,{seriesLabelFmt:E=void 0}=t,{leftPadding:p=void 0}=t,{rightPadding:k=void 0}=t;return i.$$set=s=>{"data"in s&&e(1,w=s.data),"x"in s&&e(2,de=s.x),"y"in s&&e(3,ye=s.y),"size"in s&&e(4,j=s.size),"series"in s&&e(5,W=s.series),"xType"in s&&e(6,F=s.xType),"yLog"in s&&e(7,I=s.yLog),"yLogBase"in s&&e(8,K=s.yLogBase),"yFmt"in s&&e(9,ne=s.yFmt),"xFmt"in s&&e(10,V=s.xFmt),"sizeFmt"in s&&e(11,se=s.sizeFmt),"title"in s&&e(12,be=s.title),"subtitle"in s&&e(13,L=s.subtitle),"legend"in s&&e(14,ce=s.legend),"xAxisTitle"in s&&e(15,T=s.xAxisTitle),"yAxisTitle"in s&&e(16,me=s.yAxisTitle),"xGridlines"in s&&e(17,ue=s.xGridlines),"yGridlines"in s&&e(18,Ce=s.yGridlines),"xAxisLabels"in s&&e(19,b=s.xAxisLabels),"yAxisLabels"in s&&e(20,Se=s.yAxisLabels),"xBaseline"in s&&e(21,G=s.xBaseline),"yBaseline"in s&&e(22,le=s.yBaseline),"xTickMarks"in s&&e(23,v=s.xTickMarks),"yTickMarks"in s&&e(24,Y=s.yTickMarks),"yMin"in s&&e(25,B=s.yMin),"yMax"in s&&e(26,N=s.yMax),"shape"in s&&e(27,q=s.shape),"fillColor"in s&&e(52,te=s.fillColor),"opacity"in s&&e(28,re=s.opacity),"outlineColor"in s&&e(53,ge=s.outlineColor),"outlineWidth"in s&&e(29,M=s.outlineWidth),"scaleTo"in s&&e(30,fe=s.scaleTo),"chartAreaHeight"in s&&e(31,oe=s.chartAreaHeight),"sort"in s&&e(32,J=s.sort),"tooltipTitle"in s&&e(33,ie=s.tooltipTitle),"colorPalette"in s&&e(54,Q=s.colorPalette),"echartsOptions"in s&&e(34,he=s.echartsOptions),"seriesOptions"in s&&e(35,_e=s.seriesOptions),"printEchartsConfig"in s&&e(0,X=s.printEchartsConfig),"emptySet"in s&&e(36,_=s.emptySet),"emptyMessage"in s&&e(37,R=s.emptyMessage),"renderer"in s&&e(38,Te=s.renderer),"downloadableData"in s&&e(39,Oe=s.downloadableData),"downloadableImage"in s&&e(40,U=s.downloadableImage),"seriesColors"in s&&e(55,C=s.seriesColors),"seriesOrder"in s&&e(41,D=s.seriesOrder),"connectGroup"in s&&e(42,u=s.connectGroup),"seriesLabelFmt"in s&&e(43,E=s.seriesLabelFmt),"leftPadding"in s&&e(44,p=s.leftPadding),"rightPadding"in s&&e(45,k=s.rightPadding),"$$scope"in s&&e(57,d=s.$$scope)},i.$$.update=()=>{i.$$.dirty[1]&2097152&&e(51,r=g(te)),i.$$.dirty[1]&4194304&&e(50,a=g(ge)),i.$$.dirty[1]&32768&&e(46,ae=He(ae)),i.$$.dirty[1]&65536&&e(47,A=He(A)),i.$$.dirty[1]&8388608&&e(49,o=h(Q)),i.$$.dirty[0]&1&&e(0,X=He(X)),i.$$.dirty[1]&16777216&&e(48,l=z(C))},[X,w,de,ye,j,W,F,I,K,ne,V,se,be,L,ce,T,me,ue,Ce,b,Se,G,le,v,Y,B,N,q,re,M,fe,oe,J,ie,he,_e,_,R,Te,Oe,U,D,u,E,p,k,ae,A,l,o,a,r,te,ge,Q,C,c,d]}class rr extends Be{constructor(t){super(),ke(this,t,tr,$t,ve,{data:1,x:2,y:3,size:4,series:5,xType:6,yLog:7,yLogBase:8,yFmt:9,xFmt:10,sizeFmt:11,title:12,subtitle:13,legend:14,xAxisTitle:15,yAxisTitle:16,xGridlines:17,yGridlines:18,xAxisLabels:19,yAxisLabels:20,xBaseline:21,yBaseline:22,xTickMarks:23,yTickMarks:24,yMin:25,yMax:26,shape:27,fillColor:52,opacity:28,outlineColor:53,outlineWidth:29,scaleTo:30,chartAreaHeight:31,sort:32,tooltipTitle:33,colorPalette:54,echartsOptions:34,seriesOptions:35,printEchartsConfig:0,emptySet:36,emptyMessage:37,renderer:38,downloadableData:39,downloadableImage:40,seriesColors:55,seriesOrder:41,connectGroup:42,seriesLabelFmt:43,leftPadding:44,rightPadding:45},null,[-1,-1])}}function ir(i){let t,e;return t=new mt({props:{error:i[7],title:"Funnel Chart"}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&128&&(o.error=r[7]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function nr(i){let t,e,r;const a=i[50].default,o=Ve(a,i,i[49],null);return e=new zt({props:{data:i[1],config:i[9],width:i[6],height:i[8],echartsOptions:i[2],printEchartsConfig:i[0],renderer:i[4],connectGroup:i[5],seriesOptions:i[3]}}),{c(){o&&o.c(),t=P(),ee(e.$$.fragment)},l(l){o&&o.l(l),t=H(l),$(e.$$.fragment,l)},m(l,c){o&&o.m(l,c),S(l,t,c),x(e,l,c),r=!0},p(l,c){o&&o.p&&(!r||c[1]&262144)&&Je(o,a,l,l[49],r?je(a,l[49],c,null):Qe(l[49]),null);const d={};c[0]&2&&(d.data=l[1]),c[0]&512&&(d.config=l[9]),c[0]&64&&(d.width=l[6]),c[0]&256&&(d.height=l[8]),c[0]&4&&(d.echartsOptions=l[2]),c[0]&1&&(d.printEchartsConfig=l[0]),c[0]&16&&(d.renderer=l[4]),c[0]&32&&(d.connectGroup=l[5]),c[0]&8&&(d.seriesOptions=l[3]),e.$set(d)},i(l){r||(m(o,l),m(e.$$.fragment,l),r=!0)},o(l){y(o,l),y(e.$$.fragment,l),r=!1},d(l){l&&O(t),o&&o.d(l),Z(e,l)}}}function lr(i){let t,e,r,a;const o=[nr,ir],l=[];function c(d,g){return d[7]?1:0}return t=c(i),e=l[t]=o[t](i),{c(){e.c(),r=Ge()},l(d){e.l(d),r=Ge()},m(d,g){l[t].m(d,g),S(d,r,g),a=!0},p(d,g){let z=t;t=c(d),t===z?l[t].p(d,g):(Ue(),y(l[z],1,1,()=>{l[z]=null}),Me(),e=l[t],e?e.p(d,g):(e=l[t]=o[t](d),e.c()),m(e,1),e.m(r.parentNode,r))},i(d){a||(m(e),a=!0)},o(d){y(e),a=!1},d(d){d&&O(r),l[t].d(d)}}}let or=0;function ar(i,t,e){let r,a,o,l=we,c=()=>(l(),l=Pe(a,u=>e(47,o=u)),a),d,g=we,z=()=>(g(),g=Pe(r,u=>e(48,d=u)),r);i.$$.on_destroy.push(()=>l()),i.$$.on_destroy.push(()=>g());let{$$slots:h={},$$scope:w}=t;const{resolveColor:de,resolveColorPalette:ye}=Ke();let{data:j=void 0}=t,{nameCol:W=void 0}=t,{valueCol:F=void 0}=t,{valueFmt:I=void 0}=t,{title:K=void 0}=t,{subtitle:ne=void 0}=t,{legend:V=!0}=t,{outlineColor:se=void 0}=t,{outlineWidth:be=void 0}=t,{labelPosition:L="inside"}=t,{funnelAlign:ce="center"}=t,{funnelSort:T="none"}=t,{colorPalette:me="default"}=t,{echartsOptions:ue=void 0}=t,{seriesOptions:Ce=void 0}=t,{printEchartsConfig:b=!1}=t,{renderer:Se=void 0}=t,{connectGroup:G=void 0}=t,{showPercent:le=!1}=t,v,Y,B,N,q,te,re,ge,M,fe,oe,J,ie,ae,A,Q,he,_e,X,_,R,Te,Oe,U,C,D;return i.$$set=u=>{"data"in u&&e(1,j=u.data),"nameCol"in u&&e(14,W=u.nameCol),"valueCol"in u&&e(15,F=u.valueCol),"valueFmt"in u&&e(16,I=u.valueFmt),"title"in u&&e(17,K=u.title),"subtitle"in u&&e(18,ne=u.subtitle),"legend"in u&&e(12,V=u.legend),"outlineColor"in u&&e(19,se=u.outlineColor),"outlineWidth"in u&&e(20,be=u.outlineWidth),"labelPosition"in u&&e(21,L=u.labelPosition),"funnelAlign"in u&&e(22,ce=u.funnelAlign),"funnelSort"in u&&e(23,T=u.funnelSort),"colorPalette"in u&&e(24,me=u.colorPalette),"echartsOptions"in u&&e(2,ue=u.echartsOptions),"seriesOptions"in u&&e(3,Ce=u.seriesOptions),"printEchartsConfig"in u&&e(0,b=u.printEchartsConfig),"renderer"in u&&e(4,Se=u.renderer),"connectGroup"in u&&e(5,G=u.connectGroup),"showPercent"in u&&e(13,le=u.showPercent),"$$scope"in u&&e(49,w=u.$$scope)},i.$$.update=()=>{var u;if(i.$$.dirty[0]&4096&&e(12,V=V==="true"||V===!0),i.$$.dirty[0]&524288&&z(e(11,r=de(se))),i.$$.dirty[0]&16777216&&c(e(10,a=ye(me))),i.$$.dirty[0]&1&&e(0,b=He(b)),i.$$.dirty[0]&8192&&e(13,le=le==="true"||le===!0),i.$$.dirty[0]&2130178242|i.$$.dirty[1]&262143)try{Et(j,[W,F]),e(25,v=Nt(j)),e(45,C=C??Ne(F,v[W].title)),e(26,Y=v[W].format);let E;I?E=At(I,(u=v[F].format)==null?void 0:u.valueType):E=v[F].format,e(27,B=220),e(28,N=!!K),e(29,q=!!ne),e(30,te=V),e(31,re=15),e(32,ge=13),e(33,M=10*q),e(34,fe=N*re+q*ge+M*Math.max(N,q)),e(35,oe=(te?30:10)+N*23+(N?q*25:q*30)),e(36,J=2),e(37,ie=8),e(38,ae=15),e(38,ae=ae*te),e(39,A=7),e(39,A=A*Math.max(N,q)),e(40,Q=fe+A),e(41,he=Q+ae+J),e(42,_e=ie),e(43,X=B+he+_e),e(8,_=X+"px"),e(6,R="100%"),j.forEach(p=>{(Te<p[F]||!Te)&&e(44,Te=p[F])}),e(46,D={type:"funnel",name:C,left:ce==="center"?"10%":"",top:oe,bottom:10,width:"80%",min:or,max:Te,minSize:"30%",maxSize:"90%",gap:2,funnelAlign:ce,sort:T,labelLine:{length:10,lineStyle:{width:1,type:"solid"}},label:{show:!0,position:L,formatter(p){let k;if(le){const s=j[0][F],n=(p.value/s*100).toFixed(2);k=`${pe(p.value,E)} (${n}%)`}else k=pe(p.value,E);return k}},labelLayout:{hideOverlap:!0},emphasis:{focus:"series"},itemStyle:{borderColor:d,borderWidth:be},tooltip:{formatter(p){return`<span style='font-weight:600;'>${pe(p.name,Y)}</span></br><span>${C}:</span><span style='margin-left: 4px;'> ${p.value}</span>`},extraCssText:"box-shadow: 0 3px 6px rgba(0,0,0,.15); box-shadow: 0 2px 4px rgba(0,0,0,.12); z-index: 1;",order:"valueDesc"},data:j.map(p=>({name:p[W],value:p[F]}))}),e(9,U={title:{text:K,subtext:ne,subtextStyle:{width:R}},tooltip:{trigger:"item"},legend:{show:V,orient:"horizontal",type:"scroll",top:Q,padding:[0,0,0,0]},series:[D],color:o})}catch(E){if(e(7,Oe=E.message),console.error(`Error in Funnel Chart: ${Oe}`),Dt)throw Oe}},[b,j,ue,Ce,Se,G,R,Oe,_,U,a,r,V,le,W,F,I,K,ne,se,be,L,ce,T,me,v,Y,B,N,q,te,re,ge,M,fe,oe,J,ie,ae,A,Q,he,_e,X,Te,C,D,o,d,w,h]}class sr extends Be{constructor(t){super(),ke(this,t,ar,lr,ve,{data:1,nameCol:14,valueCol:15,valueFmt:16,title:17,subtitle:18,legend:12,outlineColor:19,outlineWidth:20,labelPosition:21,funnelAlign:22,funnelSort:23,colorPalette:24,echartsOptions:2,seriesOptions:3,printEchartsConfig:0,renderer:4,connectGroup:5,showPercent:13},null,[-1,-1])}}function ur(i){let t;const e=i[5].default,r=Ve(e,i,i[6],null);return{c(){r&&r.c()},l(a){r&&r.l(a)},m(a,o){r&&r.m(a,o),t=!0},p(a,o){r&&r.p&&(!t||o&64)&&Je(r,e,a,a[6],t?je(e,a[6],o,null):Qe(a[6]),null)},i(a){t||(m(r,a),t=!0)},o(a){y(r,a),t=!1},d(a){r&&r.d(a)}}}function fr(i){let t,e;const r=[i[4],{data:Ae.isQuery(i[9])?Array.from(i[9]):i[9]}];let a={$$slots:{default:[ur]},$$scope:{ctx:i}};for(let o=0;o<r.length;o+=1)a=We(a,r[o]);return t=new sr({props:a}),{c(){ee(t.$$.fragment)},l(o){$(t.$$.fragment,o)},m(o,l){x(t,o,l),e=!0},p(o,l){const c=l&528?Ut(r,[l&16&&Mt(o[4]),l&512&&{data:Ae.isQuery(o[9])?Array.from(o[9]):o[9]}]):{};l&64&&(c.$$scope={dirty:l,ctx:o}),t.$set(c)},i(o){e||(m(t.$$.fragment,o),e=!0)},o(o){y(t.$$.fragment,o),e=!1},d(o){Z(t,o)}}}function _r(i){let t,e;return t=new Ft({props:{slot:"empty",emptyMessage:i[2],emptySet:i[1],chartType:gt,isInitial:i[3]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a&4&&(o.emptyMessage=r[2]),a&2&&(o.emptySet=r[1]),a&8&&(o.isInitial=r[3]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function dr(i){let t,e;return t=new mt({props:{slot:"error",title:gt,error:i[9].error.message}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a&512&&(o.error=r[9].error.message),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function cr(i){let t,e;return t=new It({props:{data:i[0],$$slots:{error:[dr,({loaded:r})=>({9:r}),({loaded:r})=>r?512:0],empty:[_r],default:[fr,({loaded:r})=>({9:r}),({loaded:r})=>r?512:0]},$$scope:{ctx:i}}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,[a]){const o={};a&1&&(o.data=r[0]),a&606&&(o.$$scope={dirty:a,ctx:r}),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}let gt="Funnel Chart";function mr(i,t,e){let r,{$$slots:a={},$$scope:o}=t,{data:l}=t;const c=Ae.isQuery(l)?l.hash:void 0;let d=(l==null?void 0:l.hash)===c,{emptySet:g=void 0}=t,{emptyMessage:z=void 0}=t;return i.$$set=h=>{e(8,t=We(We({},t),nt(h))),"data"in h&&e(0,l=h.data),"emptySet"in h&&e(1,g=h.emptySet),"emptyMessage"in h&&e(2,z=h.emptyMessage),"$$scope"in h&&e(6,o=h.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&e(3,d=(l==null?void 0:l.hash)===c),e(4,r={...Object.fromEntries(Object.entries(t).filter(([,h])=>h!==void 0))})},t=nt(t),[l,g,z,d,r,a,o]}class gr extends Be{constructor(t){super(),ke(this,t,mr,cr,ve,{data:0,emptySet:1,emptyMessage:2})}}function yr(i){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:we,p:we,d:we}}function ot(i){let t,e;return t=new Le({props:{queryID:"order_funnel",queryResult:i[1]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&2&&(o.queryResult=r[1]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function at(i){let t,e;return t=new Le({props:{queryID:"category_month_heatmap",queryResult:i[2]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&4&&(o.queryResult=r[2]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function st(i){let t,e;return t=new Le({props:{queryID:"brand_bubble",queryResult:i[3]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&8&&(o.queryResult=r[3]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function ut(i){let t,e;return t=new Le({props:{queryID:"all_categories",queryResult:i[4]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&16&&(o.queryResult=r[4]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function ft(i){let t,e;return t=new Le({props:{queryID:"category_products",queryResult:i[5]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&32&&(o.queryResult=r[5]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function _t(i){let t,e;return t=new Le({props:{queryID:"category_brand_revenue",queryResult:i[6]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&64&&(o.queryResult=r[6]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function dt(i){let t,e;return t=new Le({props:{queryID:"price_vs_revenue",queryResult:i[7]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&128&&(o.queryResult=r[7]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function ct(i){let t,e;return t=new Le({props:{queryID:"order_value_dist",queryResult:i[8]}}),{c(){ee(t.$$.fragment)},l(r){$(t.$$.fragment,r)},m(r,a){x(t,r,a),e=!0},p(r,a){const o={};a[0]&256&&(o.queryResult=r[8]),t.$set(o)},i(r){e||(m(t.$$.fragment,r),e=!0)},o(r){y(t.$$.fragment,r),e=!1},d(r){Z(t,r)}}}function br(i){let t,e,r,a,o,l,c='<a href="#-advanced-visualization-showcase">🔬 Advanced Visualization Showcase</a>',d,g,z="Experimental dashboard demonstrating advanced Evidence.dev components: BubbleChart, Heatmap, FunnelChart, and interactive inputs.",h,w,de='<a href="#order-funnel">Order Funnel</a>',ye,j,W,F,I,K='<a href="#category--month-revenue-heatmap">Category × Month Revenue Heatmap</a>',ne,V,se,be,L,ce='<a href="#brand-performance-bubble-chart">Brand Performance Bubble Chart</a>',T,me,ue,Ce,b,Se='<a href="#interactive-category-explorer">Interactive Category Explorer</a>',G,le,v,Y,B,N,q,te,re,ge,M,fe='<a href="#price-vs-revenue-scatter-top-brands">Price vs Revenue Scatter (Top Brands)</a>',oe,J,ie,ae,A,Q='<a href="#order-value-distribution">Order Value Distribution</a>',he,_e,X,_;function R(n,f){return yr}let Oe=R()(i),U=i[1]&&ot(i);W=new gr({props:{data:i[1],nameCol:"status",valueCol:"orders",title:"Order Status Funnel"}});let C=i[2]&&at(i);se=new Qt({props:{data:i[2],x:"month",y:"category",value:"revenue",title:"Revenue Heatmap: Category × Month"}});let D=i[3]&&st(i);ue=new rr({props:{data:i[3],x:"total_orders",y:"total_revenue",size:"avg_price",series:"category",title:"Brand Performance: Orders vs Revenue (bubble size = Avg Price)"}});let u=i[4]&&ut(i);v=new Gt({props:{name:"selected_category",data:i[4],value:"category",title:"Select Category"}});let E=i[5]&&ft(i);N=new Lt({props:{data:i[5],rows:"10",search:"true"}});let p=i[6]&&_t(i);re=new Wt({props:{data:i[6],x:"brand",y:"revenue",title:"Top Brands in "+i[0].selected_category}});let k=i[7]&&dt(i);ie=new Kt({props:{data:i[7],x:"avg_retail_price",y:"total_revenue",series:"category",title:"Avg Price vs Total Revenue by Brand (top 50 brands with 100+ units sold)"}});let s=i[8]&&ct(i);return X=new jt({props:{data:i[8],x:"order_value",title:"Distribution of Order Values"}}),{c(){t=P(),Oe.c(),e=Ie("meta"),r=Ie("meta"),a=Ge(),o=P(),l=Ie("h1"),l.innerHTML=c,d=P(),g=Ie("p"),g.textContent=z,h=P(),w=Ie("h2"),w.innerHTML=de,ye=P(),U&&U.c(),j=P(),ee(W.$$.fragment),F=P(),I=Ie("h2"),I.innerHTML=K,ne=P(),C&&C.c(),V=P(),ee(se.$$.fragment),be=P(),L=Ie("h2"),L.innerHTML=ce,T=P(),D&&D.c(),me=P(),ee(ue.$$.fragment),Ce=P(),b=Ie("h2"),b.innerHTML=Se,G=P(),u&&u.c(),le=P(),ee(v.$$.fragment),Y=P(),E&&E.c(),B=P(),ee(N.$$.fragment),q=P(),p&&p.c(),te=P(),ee(re.$$.fragment),ge=P(),M=Ie("h2"),M.innerHTML=fe,oe=P(),k&&k.c(),J=P(),ee(ie.$$.fragment),ae=P(),A=Ie("h2"),A.innerHTML=Q,he=P(),s&&s.c(),_e=P(),ee(X.$$.fragment),this.h()},l(n){t=H(n);const f=bt("svelte-2igo1p",document.head);Oe.l(f),e=De(f,"META",{name:!0,content:!0}),r=De(f,"META",{name:!0,content:!0}),a=Ge(),f.forEach(O),o=H(n),l=De(n,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Fe(l)!=="svelte-1rozczu"&&(l.innerHTML=c),d=H(n),g=De(n,"P",{class:!0,"data-svelte-h":!0}),Fe(g)!=="svelte-18cxvsb"&&(g.textContent=z),h=H(n),w=De(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(w)!=="svelte-t8kl0k"&&(w.innerHTML=de),ye=H(n),U&&U.l(n),j=H(n),$(W.$$.fragment,n),F=H(n),I=De(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(I)!=="svelte-aozkoh"&&(I.innerHTML=K),ne=H(n),C&&C.l(n),V=H(n),$(se.$$.fragment,n),be=H(n),L=De(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(L)!=="svelte-y81n41"&&(L.innerHTML=ce),T=H(n),D&&D.l(n),me=H(n),$(ue.$$.fragment,n),Ce=H(n),b=De(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(b)!=="svelte-14fkbmt"&&(b.innerHTML=Se),G=H(n),u&&u.l(n),le=H(n),$(v.$$.fragment,n),Y=H(n),E&&E.l(n),B=H(n),$(N.$$.fragment,n),q=H(n),p&&p.l(n),te=H(n),$(re.$$.fragment,n),ge=H(n),M=De(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(M)!=="svelte-1lygtys"&&(M.innerHTML=fe),oe=H(n),k&&k.l(n),J=H(n),$(ie.$$.fragment,n),ae=H(n),A=De(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(A)!=="svelte-18spib"&&(A.innerHTML=Q),he=H(n),s&&s.l(n),_e=H(n),$(X.$$.fragment,n),this.h()},h(){Re(e,"name","twitter:card"),Re(e,"content","summary_large_image"),Re(r,"name","twitter:site"),Re(r,"content","@evidence_dev"),Re(l,"class","markdown"),Re(l,"id","-advanced-visualization-showcase"),Re(g,"class","markdown"),Re(w,"class","markdown"),Re(w,"id","order-funnel"),Re(I,"class","markdown"),Re(I,"id","category--month-revenue-heatmap"),Re(L,"class","markdown"),Re(L,"id","brand-performance-bubble-chart"),Re(b,"class","markdown"),Re(b,"id","interactive-category-explorer"),Re(M,"class","markdown"),Re(M,"id","price-vs-revenue-scatter-top-brands"),Re(A,"class","markdown"),Re(A,"id","order-value-distribution")},m(n,f){S(n,t,f),Oe.m(document.head,null),qe(document.head,e),qe(document.head,r),qe(document.head,a),S(n,o,f),S(n,l,f),S(n,d,f),S(n,g,f),S(n,h,f),S(n,w,f),S(n,ye,f),U&&U.m(n,f),S(n,j,f),x(W,n,f),S(n,F,f),S(n,I,f),S(n,ne,f),C&&C.m(n,f),S(n,V,f),x(se,n,f),S(n,be,f),S(n,L,f),S(n,T,f),D&&D.m(n,f),S(n,me,f),x(ue,n,f),S(n,Ce,f),S(n,b,f),S(n,G,f),u&&u.m(n,f),S(n,le,f),x(v,n,f),S(n,Y,f),E&&E.m(n,f),S(n,B,f),x(N,n,f),S(n,q,f),p&&p.m(n,f),S(n,te,f),x(re,n,f),S(n,ge,f),S(n,M,f),S(n,oe,f),k&&k.m(n,f),S(n,J,f),x(ie,n,f),S(n,ae,f),S(n,A,f),S(n,he,f),s&&s.m(n,f),S(n,_e,f),x(X,n,f),_=!0},p(n,f){Oe.p(n,f),n[1]?U?(U.p(n,f),f[0]&2&&m(U,1)):(U=ot(n),U.c(),m(U,1),U.m(j.parentNode,j)):U&&(Ue(),y(U,1,1,()=>{U=null}),Me());const Xe={};f[0]&2&&(Xe.data=n[1]),W.$set(Xe),n[2]?C?(C.p(n,f),f[0]&4&&m(C,1)):(C=at(n),C.c(),m(C,1),C.m(V.parentNode,V)):C&&(Ue(),y(C,1,1,()=>{C=null}),Me());const Ze={};f[0]&4&&(Ze.data=n[2]),se.$set(Ze),n[3]?D?(D.p(n,f),f[0]&8&&m(D,1)):(D=st(n),D.c(),m(D,1),D.m(me.parentNode,me)):D&&(Ue(),y(D,1,1,()=>{D=null}),Me());const xe={};f[0]&8&&(xe.data=n[3]),ue.$set(xe),n[4]?u?(u.p(n,f),f[0]&16&&m(u,1)):(u=ut(n),u.c(),m(u,1),u.m(le.parentNode,le)):u&&(Ue(),y(u,1,1,()=>{u=null}),Me());const $e={};f[0]&16&&($e.data=n[4]),v.$set($e),n[5]?E?(E.p(n,f),f[0]&32&&m(E,1)):(E=ft(n),E.c(),m(E,1),E.m(B.parentNode,B)):E&&(Ue(),y(E,1,1,()=>{E=null}),Me());const et={};f[0]&32&&(et.data=n[5]),N.$set(et),n[6]?p?(p.p(n,f),f[0]&64&&m(p,1)):(p=_t(n),p.c(),m(p,1),p.m(te.parentNode,te)):p&&(Ue(),y(p,1,1,()=>{p=null}),Me());const Ye={};f[0]&64&&(Ye.data=n[6]),f[0]&1&&(Ye.title="Top Brands in "+n[0].selected_category),re.$set(Ye),n[7]?k?(k.p(n,f),f[0]&128&&m(k,1)):(k=dt(n),k.c(),m(k,1),k.m(J.parentNode,J)):k&&(Ue(),y(k,1,1,()=>{k=null}),Me());const tt={};f[0]&128&&(tt.data=n[7]),ie.$set(tt),n[8]?s?(s.p(n,f),f[0]&256&&m(s,1)):(s=ct(n),s.c(),m(s,1),s.m(_e.parentNode,_e)):s&&(Ue(),y(s,1,1,()=>{s=null}),Me());const rt={};f[0]&256&&(rt.data=n[8]),X.$set(rt)},i(n){_||(m(U),m(W.$$.fragment,n),m(C),m(se.$$.fragment,n),m(D),m(ue.$$.fragment,n),m(u),m(v.$$.fragment,n),m(E),m(N.$$.fragment,n),m(p),m(re.$$.fragment,n),m(k),m(ie.$$.fragment,n),m(s),m(X.$$.fragment,n),_=!0)},o(n){y(U),y(W.$$.fragment,n),y(C),y(se.$$.fragment,n),y(D),y(ue.$$.fragment,n),y(u),y(v.$$.fragment,n),y(E),y(N.$$.fragment,n),y(p),y(re.$$.fragment,n),y(k),y(ie.$$.fragment,n),y(s),y(X.$$.fragment,n),_=!1},d(n){n&&(O(t),O(o),O(l),O(d),O(g),O(h),O(w),O(ye),O(j),O(F),O(I),O(ne),O(V),O(be),O(L),O(T),O(me),O(Ce),O(b),O(G),O(le),O(Y),O(B),O(q),O(te),O(ge),O(M),O(oe),O(J),O(ae),O(A),O(he),O(_e)),Oe.d(n),O(e),O(r),O(a),U&&U.d(n),Z(W,n),C&&C.d(n),Z(se,n),D&&D.d(n),Z(ue,n),u&&u.d(n),Z(v,n),E&&E.d(n),Z(N,n),p&&p.d(n),Z(re,n),k&&k.d(n),Z(ie,n),s&&s.d(n),Z(X,n)}}}function hr(i,t,e){let r,a;ze(i,Yt,u=>e(43,r=u)),ze(i,lt,u=>e(48,a=u));let{data:o}=t,{data:l={},customFormattingSettings:c,__db:d,inputs:g}=o;ht(lt,a="ab6684576aada2b2c1ce071df63f2853",a);let z=wt(Ht(g));Ot(z.subscribe(u=>e(0,g=u))),Rt(kt,{getCustomFormats:()=>c.customFormats||[]});const h=(u,E)=>Pt(d.query,u,{query_name:E});vt(h),r.params,pt(()=>!0);let w={initialData:void 0,initialError:void 0},de=Ee`SELECT
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY status
ORDER BY orders DESC`,ye=`SELECT
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY status
ORDER BY orders DESC`;l.order_funnel_data&&(l.order_funnel_data instanceof Error?w.initialError=l.order_funnel_data:w.initialData=l.order_funnel_data,l.order_funnel_columns&&(w.knownColumns=l.order_funnel_columns));let j,W=!1;const F=Ae.createReactive({callback:u=>{e(1,j=u)},execFn:h},{id:"order_funnel",...w});F(ye,{noResolve:de,...w}),globalThis[Symbol.for("order_funnel")]={get value(){return j}};let I={initialData:void 0,initialError:void 0},K=Ee`SELECT
  p.category,
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category, month
ORDER BY p.category, month`,ne=`SELECT
  p.category,
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category, month
ORDER BY p.category, month`;l.category_month_heatmap_data&&(l.category_month_heatmap_data instanceof Error?I.initialError=l.category_month_heatmap_data:I.initialData=l.category_month_heatmap_data,l.category_month_heatmap_columns&&(I.knownColumns=l.category_month_heatmap_columns));let V,se=!1;const be=Ae.createReactive({callback:u=>{e(2,V=u)},execFn:h},{id:"category_month_heatmap",...I});be(ne,{noResolve:K,...I}),globalThis[Symbol.for("category_month_heatmap")]={get value(){return V}};let L={initialData:void 0,initialError:void 0},ce=Ee`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS total_orders,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  p.category
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING total_orders > 50
ORDER BY total_revenue DESC
LIMIT 40`,T=`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS total_orders,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  p.category
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING total_orders > 50
ORDER BY total_revenue DESC
LIMIT 40`;l.brand_bubble_data&&(l.brand_bubble_data instanceof Error?L.initialError=l.brand_bubble_data:L.initialData=l.brand_bubble_data,l.brand_bubble_columns&&(L.knownColumns=l.brand_bubble_columns));let me,ue=!1;const Ce=Ae.createReactive({callback:u=>{e(3,me=u)},execFn:h},{id:"brand_bubble",...L});Ce(T,{noResolve:ce,...L}),globalThis[Symbol.for("brand_bubble")]={get value(){return me}};let b={initialData:void 0,initialError:void 0},Se=Ee`SELECT DISTINCT category FROM products ORDER BY category`,G="SELECT DISTINCT category FROM products ORDER BY category";l.all_categories_data&&(l.all_categories_data instanceof Error?b.initialError=l.all_categories_data:b.initialData=l.all_categories_data,l.all_categories_columns&&(b.knownColumns=l.all_categories_columns));let le,v=!1;const Y=Ae.createReactive({callback:u=>{e(4,le=u)},execFn:h},{id:"all_categories",...b});Y(G,{noResolve:Se,...b}),globalThis[Symbol.for("all_categories")]={get value(){return le}};let B={initialData:void 0,initialError:void 0},N=Ee`SELECT
  p.name,
  p.brand,
  ROUND(p.retail_price, 2) AS retail_price,
  ROUND(p.cost, 2) AS cost,
  ROUND(p.retail_price - p.cost, 2) AS margin,
  ROUND((p.retail_price - p.cost) / NULLIF(p.retail_price, 0) * 100, 1) AS margin_pct,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${g.selected_category}'
  AND p.retail_price > 0
GROUP BY p.id, p.name, p.brand, p.retail_price, p.cost
ORDER BY revenue DESC
LIMIT 30`,q=`SELECT
  p.name,
  p.brand,
  ROUND(p.retail_price, 2) AS retail_price,
  ROUND(p.cost, 2) AS cost,
  ROUND(p.retail_price - p.cost, 2) AS margin,
  ROUND((p.retail_price - p.cost) / NULLIF(p.retail_price, 0) * 100, 1) AS margin_pct,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${g.selected_category}'
  AND p.retail_price > 0
GROUP BY p.id, p.name, p.brand, p.retail_price, p.cost
ORDER BY revenue DESC
LIMIT 30`;l.category_products_data&&(l.category_products_data instanceof Error?B.initialError=l.category_products_data:B.initialData=l.category_products_data,l.category_products_columns&&(B.knownColumns=l.category_products_columns));let te,re=!1;const ge=Ae.createReactive({callback:u=>{e(5,te=u)},execFn:h},{id:"category_products",...B});ge(q,{noResolve:N,...B}),globalThis[Symbol.for("category_products")]={get value(){return te}};let M={initialData:void 0,initialError:void 0},fe=Ee`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${g.selected_category}'
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 10`,oe=`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${g.selected_category}'
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 10`;l.category_brand_revenue_data&&(l.category_brand_revenue_data instanceof Error?M.initialError=l.category_brand_revenue_data:M.initialData=l.category_brand_revenue_data,l.category_brand_revenue_columns&&(M.knownColumns=l.category_brand_revenue_columns));let J,ie=!1;const ae=Ae.createReactive({callback:u=>{e(6,J=u)},execFn:h},{id:"category_brand_revenue",...M});ae(oe,{noResolve:fe,...M}),globalThis[Symbol.for("category_brand_revenue")]={get value(){return J}};let A={initialData:void 0,initialError:void 0},Q=Ee`SELECT
  p.brand,
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING units_sold > 100
ORDER BY total_revenue DESC
LIMIT 50`,he=`SELECT
  p.brand,
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING units_sold > 100
ORDER BY total_revenue DESC
LIMIT 50`;l.price_vs_revenue_data&&(l.price_vs_revenue_data instanceof Error?A.initialError=l.price_vs_revenue_data:A.initialData=l.price_vs_revenue_data,l.price_vs_revenue_columns&&(A.knownColumns=l.price_vs_revenue_columns));let _e,X=!1;const _=Ae.createReactive({callback:u=>{e(7,_e=u)},execFn:h},{id:"price_vs_revenue",...A});_(he,{noResolve:Q,...A}),globalThis[Symbol.for("price_vs_revenue")]={get value(){return _e}};let R={initialData:void 0,initialError:void 0},Te=Ee`SELECT
  o.order_id,
  ROUND(SUM(oi.sale_price), 2) AS order_value
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY o.order_id`,Oe=`SELECT
  o.order_id,
  ROUND(SUM(oi.sale_price), 2) AS order_value
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY o.order_id`;l.order_value_dist_data&&(l.order_value_dist_data instanceof Error?R.initialError=l.order_value_dist_data:R.initialData=l.order_value_dist_data,l.order_value_dist_columns&&(R.knownColumns=l.order_value_dist_columns));let U,C=!1;const D=Ae.createReactive({callback:u=>{e(8,U=u)},execFn:h},{id:"order_value_dist",...R});return D(Oe,{noResolve:Te,...R}),globalThis[Symbol.for("order_value_dist")]={get value(){return U}},i.$$set=u=>{"data"in u&&e(9,o=u.data)},i.$$.update=()=>{i.$$.dirty[0]&512&&e(10,{data:l={},customFormattingSettings:c,__db:d}=o,l),i.$$.dirty[0]&1024&&Bt.set(Object.keys(l).length>0),i.$$.dirty[1]&4096&&r.params,i.$$.dirty[0]&30720&&(de||!W?de||(F(ye,{noResolve:de,...w}),e(14,W=!0)):F(ye,{noResolve:de})),i.$$.dirty[0]&491520&&(K||!se?K||(be(ne,{noResolve:K,...I}),e(18,se=!0)):be(ne,{noResolve:K})),i.$$.dirty[0]&7864320&&(ce||!ue?ce||(Ce(T,{noResolve:ce,...L}),e(22,ue=!0)):Ce(T,{noResolve:ce})),i.$$.dirty[0]&125829120&&(Se||!v?Se||(Y(G,{noResolve:Se,...b}),e(26,v=!0)):Y(G,{noResolve:Se})),i.$$.dirty[0]&1&&e(28,N=Ee`SELECT
  p.name,
  p.brand,
  ROUND(p.retail_price, 2) AS retail_price,
  ROUND(p.cost, 2) AS cost,
  ROUND(p.retail_price - p.cost, 2) AS margin,
  ROUND((p.retail_price - p.cost) / NULLIF(p.retail_price, 0) * 100, 1) AS margin_pct,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${g.selected_category}'
  AND p.retail_price > 0
GROUP BY p.id, p.name, p.brand, p.retail_price, p.cost
ORDER BY revenue DESC
LIMIT 30`),i.$$.dirty[0]&1&&e(29,q=`SELECT
  p.name,
  p.brand,
  ROUND(p.retail_price, 2) AS retail_price,
  ROUND(p.cost, 2) AS cost,
  ROUND(p.retail_price - p.cost, 2) AS margin,
  ROUND((p.retail_price - p.cost) / NULLIF(p.retail_price, 0) * 100, 1) AS margin_pct,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${g.selected_category}'
  AND p.retail_price > 0
GROUP BY p.id, p.name, p.brand, p.retail_price, p.cost
ORDER BY revenue DESC
LIMIT 30`),i.$$.dirty[0]&2013265920&&(N||!re?N||(ge(q,{noResolve:N,...B}),e(30,re=!0)):ge(q,{noResolve:N})),i.$$.dirty[0]&1&&e(32,fe=Ee`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${g.selected_category}'
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 10`),i.$$.dirty[0]&1&&e(33,oe=`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
  AND p.category = '${g.selected_category}'
GROUP BY p.brand
ORDER BY revenue DESC
LIMIT 10`),i.$$.dirty[1]&15&&(fe||!ie?fe||(ae(oe,{noResolve:fe,...M}),e(34,ie=!0)):ae(oe,{noResolve:fe})),i.$$.dirty[1]&240&&(Q||!X?Q||(_(he,{noResolve:Q,...A}),e(38,X=!0)):_(he,{noResolve:Q})),i.$$.dirty[1]&3840&&(Te||!C?Te||(D(Oe,{noResolve:Te,...R}),e(42,C=!0)):D(Oe,{noResolve:Te}))},e(12,de=Ee`SELECT
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY status
ORDER BY orders DESC`),e(13,ye=`SELECT
  status,
  COUNT(*) AS orders
FROM order_items
GROUP BY status
ORDER BY orders DESC`),e(16,K=Ee`SELECT
  p.category,
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category, month
ORDER BY p.category, month`),e(17,ne=`SELECT
  p.category,
  LEFT(CAST(oi.created_at AS VARCHAR), 7) AS month,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category, month
ORDER BY p.category, month`),e(20,ce=Ee`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS total_orders,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  p.category
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING total_orders > 50
ORDER BY total_revenue DESC
LIMIT 40`),e(21,T=`SELECT
  p.brand,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS total_orders,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  p.category
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING total_orders > 50
ORDER BY total_revenue DESC
LIMIT 40`),e(24,Se=Ee`SELECT DISTINCT category FROM products ORDER BY category`),e(25,G="SELECT DISTINCT category FROM products ORDER BY category"),e(36,Q=Ee`SELECT
  p.brand,
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING units_sold > 100
ORDER BY total_revenue DESC
LIMIT 50`),e(37,he=`SELECT
  p.brand,
  p.category,
  ROUND(AVG(p.retail_price), 2) AS avg_retail_price,
  ROUND(SUM(oi.sale_price), 2) AS total_revenue,
  COUNT(*) AS units_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.brand, p.category
HAVING units_sold > 100
ORDER BY total_revenue DESC
LIMIT 50`),e(40,Te=Ee`SELECT
  o.order_id,
  ROUND(SUM(oi.sale_price), 2) AS order_value
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY o.order_id`),e(41,Oe=`SELECT
  o.order_id,
  ROUND(SUM(oi.sale_price), 2) AS order_value
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY o.order_id`),[g,j,V,me,le,te,J,_e,U,o,l,w,de,ye,W,I,K,ne,se,L,ce,T,ue,b,Se,G,v,B,N,q,re,M,fe,oe,ie,A,Q,he,X,R,Te,Oe,C,r]}class Fr extends Be{constructor(t){super(),ke(this,t,hr,br,ve,{data:9},null,[-1,-1])}}export{Fr as component};
