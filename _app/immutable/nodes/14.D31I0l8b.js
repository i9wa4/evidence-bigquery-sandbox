import{s as Se,F as fe,d as p,L as rt,G as _e,H as de,I as me,i as R,a as ce,A as ge,b as C,e as M,B as ne,c as S,k,j as E,l as Re,p as Ee,m as P,n as Ke,T as Xe,f as le,R as at,o as Ze,h as it,g as se,q as ye}from"../chunks/scheduler.DClYbTPH.js";import{S as Te,i as he,t as g,a as m,g as X,c as Z,d as I,m as D,b as U,e as $}from"../chunks/index.zouyAMnr.js";import{w as ie,o as Oe,L as nt,e as lt,s as ot,Q as ue,p as st,D as Ce,r as De,C as ut}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DmhKrLhI.js";import{w as xe}from"../chunks/entry.C7GTRzGn.js";import{h as K,p as ct}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as ft}from"../chunks/stores.BN5ALBdz.js";import{E as Ue,Q as pe}from"../chunks/Chart.WoBQ-YRp.js";import{g as _t}from"../chunks/globals.D0QH3NT1.js";import{T as et}from"../chunks/TabDisplay.ByoF7RfO.js";import{B as Ie}from"../chunks/BarChart.C2KPDZRT.js";const{window:ve}=_t;function $e(l,r,i){const e=l.slice();return e[16]=r[i],e}function Ae(l){let r,i,e=Oe(l[5].tabs),a=[];for(let t=0;t<e.length;t+=1)a[t]=we($e(l,e,t));const o=t=>g(a[t],1,1,()=>{a[t]=null});return{c(){r=k("nav");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){r=M(t,"NAV",{class:!0});var n=ne(r);for(let s=0;s<a.length;s+=1)a[s].l(n);n.forEach(p),this.h()},h(){C(r,"class","my-5 flex flex-wrap gap-x-0 gap-y-1 border-b")},m(t,n){R(t,r,n);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(r,null);i=!0},p(t,n){if(n&32942){e=Oe(t[5].tabs);let s;for(s=0;s<e.length;s+=1){const f=$e(t,e,s);a[s]?(a[s].p(f,n),m(a[s],1)):(a[s]=we(f),a[s].c(),m(a[s],1),a[s].m(r,null))}for(X(),s=e.length;s<a.length;s+=1)o(s);Z()}},i(t){if(!i){for(let n=0;n<e.length;n+=1)m(a[n]);i=!0}},o(t){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)g(a[n]);i=!1},d(t){t&&p(r),Xe(a,t)}}}function dt(l){let r,i;const e=l[9].default,a=fe(e,l,l[15],null);return{c(){a&&a.c(),r=E()},l(o){a&&a.l(o),r=S(o)},m(o,t){a&&a.m(o,t),R(o,r,t),i=!0},p(o,t){a&&a.p&&(!i||t&32768)&&_e(a,e,o,o[15],i?me(e,o[15],t,null):de(o[15]),null)},i(o){i||(m(a,o),i=!0)},o(o){g(a,o),i=!1},d(o){o&&p(r),a&&a.d(o)}}}function we(l){let r,i;function e(){return l[14](l[16])}return r=new et({props:{id:l[16].id,label:l[16].label,description:l[16].description,fullWidth:ie(l[2]),background:ie(l[3]),color:l[1],activeId:l[5].activeId,$$slots:{default:[dt]},$$scope:{ctx:l}}}),r.$on("click",e),{c(){$(r.$$.fragment)},l(a){U(r.$$.fragment,a)},m(a,o){D(r,a,o),i=!0},p(a,o){l=a;const t={};o&32&&(t.id=l[16].id),o&32&&(t.label=l[16].label),o&32&&(t.description=l[16].description),o&4&&(t.fullWidth=ie(l[2])),o&8&&(t.background=ie(l[3])),o&2&&(t.color=l[1]),o&32&&(t.activeId=l[5].activeId),o&32768&&(t.$$scope={dirty:o,ctx:l}),r.$set(t)},i(a){i||(m(r.$$.fragment,a),i=!0)},o(a){g(r.$$.fragment,a),i=!1},d(a){I(r,a)}}}function mt(l){let r,i,e,a,o,t,n=(!l[4]||!l[0])&&Ae(l);const s=l[9].default,f=fe(s,l,l[15],null);return{c(){r=k("section"),n&&n.c(),i=E(),e=k("div"),f&&f.c(),this.h()},l(c){r=M(c,"SECTION",{});var d=ne(r);n&&n.l(d),i=S(d),e=M(d,"DIV",{class:!0});var _=ne(e);f&&f.l(_),_.forEach(p),d.forEach(p),this.h()},h(){C(e,"class","text-base")},m(c,d){R(c,r,d),n&&n.m(r,null),ce(r,i),ce(r,e),f&&f.m(e,null),a=!0,o||(t=[ge(ve,"beforeprint",l[10]),ge(ve,"afterprint",l[11]),ge(ve,"export-beforeprint",l[12]),ge(ve,"export-afterprint",l[13])],o=!0)},p(c,[d]){!c[4]||!c[0]?n?(n.p(c,d),d&17&&m(n,1)):(n=Ae(c),n.c(),m(n,1),n.m(r,i)):n&&(X(),g(n,1,1,()=>{n=null}),Z()),f&&f.p&&(!a||d&32768)&&_e(f,s,c,c[15],a?me(s,c[15],d,null):de(c[15]),null)},i(c){a||(m(n),m(f,c),a=!0)},o(c){g(n),g(f,c),a=!1},d(c){c&&p(r),n&&n.d(),f&&f.d(c),o=!1,rt(t)}}}function pt(l,r,i){let e,{$$slots:a={},$$scope:o}=r,{id:t}=r,{color:n=void 0}=r,{printShowAll:s=!0}=r,f=!1,{fullWidth:c=!1}=r,{background:d=!1}=r;const _=xe({tabs:[],activeId:null});Re(l,_,v=>i(5,e=v)),Ee(()=>{var V,Y;const A=new URL(window.location.href).searchParams.get(t);A?e.tabs.find(F=>F.id===A)?P(_,e.activeId=A,e):P(_,e.activeId=(V=e.tabs[0])==null?void 0:V.id,e):P(_,e.activeId=(Y=e.tabs[0])==null?void 0:Y.id,e)}),Ke("TABS_STORE",_);const h=v=>{P(_,e.activeId=v,e)},O=()=>i(4,f=!0),B=()=>i(4,f=!1),Q=()=>i(4,f=!0),J=()=>i(4,f=!1),H=v=>h(v.id);return l.$$set=v=>{"id"in v&&i(8,t=v.id),"color"in v&&i(1,n=v.color),"printShowAll"in v&&i(0,s=v.printShowAll),"fullWidth"in v&&i(2,c=v.fullWidth),"background"in v&&i(3,d=v.background),"$$scope"in v&&i(15,o=v.$$scope)},l.$$.update=()=>{var v;if(l.$$.dirty&1&&i(0,s=ie(s)),l.$$.dirty&288&&!e.activeId&&e.tabs.length&&!t&&P(_,e.activeId=e.tabs[0].id,e),l.$$.dirty&288&&!e.tabs.find(A=>A.id===e.activeId)&&!t&&P(_,e.activeId=(v=e.tabs[0])==null?void 0:v.id,e),l.$$.dirty&2&&P(_,e.color=n,e),l.$$.dirty&16&&P(_,e.printing=f,e),l.$$.dirty&1&&P(_,e.printShowAll=s,e),l.$$.dirty&288&&e.activeId&&t){const A=new URL(window.location.href);A.searchParams.set(t,e.activeId),history.replaceState({},"",A)}},[s,n,c,d,f,e,_,h,t,a,O,B,Q,J,H,o]}class bt extends Te{constructor(r){super(),he(this,r,pt,mt,Se,{id:8,color:1,printShowAll:0,fullWidth:2,background:3})}}function Me(l,r,i){const e=l.slice();return e[11]=r[i],e}function gt(l){let r,i,e,a,o=Oe(l[2].tabs),t=[];for(let c=0;c<o.length;c+=1)t[c]=ke(Me(l,o,c));const n=c=>g(t[c],1,1,()=>{t[c]=null}),s=l[7].default,f=fe(s,l,l[8],null);return{c(){r=k("nav");for(let c=0;c<t.length;c+=1)t[c].c();i=E(),e=k("div"),f&&f.c(),this.h()},l(c){r=M(c,"NAV",{class:!0});var d=ne(r);for(let h=0;h<t.length;h+=1)t[h].l(d);d.forEach(p),i=S(c),e=M(c,"DIV",{class:!0});var _=ne(e);f&&f.l(_),_.forEach(p),this.h()},h(){C(r,"class","my-6 flex flex-wrap gap-x-1 gap-y-1 border-b"),C(e,"class","text-base")},m(c,d){R(c,r,d);for(let _=0;_<t.length;_+=1)t[_]&&t[_].m(r,null);R(c,i,d),R(c,e,d),f&&f.m(e,null),a=!0},p(c,d){if(d&277){o=Oe(c[2].tabs);let _;for(_=0;_<o.length;_+=1){const h=Me(c,o,_);t[_]?(t[_].p(h,d),m(t[_],1)):(t[_]=ke(h),t[_].c(),m(t[_],1),t[_].m(r,null))}for(X(),_=o.length;_<t.length;_+=1)n(_);Z()}f&&f.p&&(!a||d&256)&&_e(f,s,c,c[8],a?me(s,c[8],d,null):de(c[8]),null)},i(c){if(!a){for(let d=0;d<o.length;d+=1)m(t[d]);m(f,c),a=!0}},o(c){t=t.filter(Boolean);for(let d=0;d<t.length;d+=1)g(t[d]);g(f,c),a=!1},d(c){c&&(p(r),p(i),p(e)),Xe(t,c),f&&f.d(c)}}}function vt(l){let r,i,e=l[1]&&Be(l);return{c(){e&&e.c(),r=le()},l(a){e&&e.l(a),r=le()},m(a,o){e&&e.m(a,o),R(a,r,o),i=!0},p(a,o){a[1]?e?(e.p(a,o),o&2&&m(e,1)):(e=Be(a),e.c(),m(e,1),e.m(r.parentNode,r)):e&&(X(),g(e,1,1,()=>{e=null}),Z())},i(a){i||(m(e),i=!0)},o(a){g(e),i=!1},d(a){a&&p(r),e&&e.d(a)}}}function Rt(l){let r,i;const e=l[7].default,a=fe(e,l,l[8],null);return{c(){a&&a.c(),r=E()},l(o){a&&a.l(o),r=S(o)},m(o,t){a&&a.m(o,t),R(o,r,t),i=!0},p(o,t){a&&a.p&&(!i||t&256)&&_e(a,e,o,o[8],i?me(e,o[8],t,null):de(o[8]),null)},i(o){i||(m(a,o),i=!0)},o(o){g(a,o),i=!1},d(o){o&&p(r),a&&a.d(o)}}}function ke(l){let r,i;return r=new et({props:{id:l[11].id,label:l[11].label,activeId:l[0],color:l[4],$$slots:{default:[Rt]},$$scope:{ctx:l}}}),{c(){$(r.$$.fragment)},l(e){U(r.$$.fragment,e)},m(e,a){D(r,e,a),i=!0},p(e,a){const o={};a&4&&(o.id=e[11].id),a&4&&(o.label=e[11].label),a&1&&(o.activeId=e[0]),a&256&&(o.$$scope={dirty:a,ctx:e}),r.$set(o)},i(e){i||(m(r.$$.fragment,e),i=!0)},o(e){g(r.$$.fragment,e),i=!1},d(e){I(r,e)}}}function Be(l){let r,i;const e=l[7].default,a=fe(e,l,l[8],null);return{c(){r=k("div"),a&&a.c(),this.h()},l(o){r=M(o,"DIV",{class:!0});var t=ne(r);a&&a.l(t),t.forEach(p),this.h()},h(){C(r,"class","mb-5")},m(o,t){R(o,r,t),a&&a.m(r,null),i=!0},p(o,t){a&&a.p&&(!i||t&256)&&_e(a,e,o,o[8],i?me(e,o[8],t,null):de(o[8]),null)},i(o){i||(m(a,o),i=!0)},o(o){g(a,o),i=!1},d(o){o&&p(r),a&&a.d(o)}}}function Ot(l){let r,i,e,a;const o=[vt,gt],t=[];function n(s,f){return!s[2].printing||!s[2].printShowAll?0:1}return r=n(l),i=t[r]=o[r](l),{c(){i.c(),e=le()},l(s){i.l(s),e=le()},m(s,f){t[r].m(s,f),R(s,e,f),a=!0},p(s,[f]){let c=r;r=n(s),r===c?t[r].p(s,f):(X(),g(t[c],1,1,()=>{t[c]=null}),Z(),i=t[r],i?i.p(s,f):(i=t[r]=o[r](s),i.c()),m(i,1),i.m(e.parentNode,e))},i(s){a||(m(i),a=!0)},o(s){g(i),a=!1},d(s){s&&p(e),t[r].d(s)}}}function yt(l,r,i){let e,{$$slots:a={},$$scope:o}=r,{label:t}=r,{id:n}=r,{selected:s}=r,{description:f=void 0}=r;const c=nt(),d=at("TABS_STORE");Re(l,d,O=>i(2,e=O));const _=()=>{P(d,e.tabs=[...e.tabs.filter(O=>O.internalId!==c),{internalId:c,id:n,label:t,description:f}],e),s&&P(d,e.activeId=n,e)};Ee(()=>d.subscribe(({activeId:O})=>{i(1,s=O===n)})),Ze(()=>{P(d,e.tabs=e.tabs.filter(O=>O.internalId!==c),e)});const h=e.color;return l.$$set=O=>{"label"in O&&i(5,t=O.label),"id"in O&&i(0,n=O.id),"selected"in O&&i(1,s=O.selected),"description"in O&&i(6,f=O.description),"$$scope"in O&&i(8,o=O.$$scope)},l.$$.update=()=>{l.$$.dirty&33&&i(0,n=n??t),l.$$.dirty&2&&i(1,s=ie(s)),l.$$.dirty&33&&n&&t&&_()},[n,s,e,d,h,t,f,a,o]}class Ne extends Te{constructor(r){super(),he(this,r,yt,Ot,Se,{label:5,id:0,selected:1,description:6})}}function Nt(l){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:ye,p:ye,d:ye}}function He(l){let r,i;return r=new pe({props:{queryID:"revenue_by_category",queryResult:l[0]}}),{c(){$(r.$$.fragment)},l(e){U(r.$$.fragment,e)},m(e,a){D(r,e,a),i=!0},p(e,a){const o={};a[0]&1&&(o.queryResult=e[0]),r.$set(o)},i(e){i||(m(r.$$.fragment,e),i=!0)},o(e){g(r.$$.fragment,e),i=!1},d(e){I(r,e)}}}function St(l){let r,i,e,a,o,t=l[0]&&He(l);return i=new Ie({props:{data:l[0],x:"category",y:"revenue",title:"Revenue by Category"}}),a=new Ce({props:{data:l[0]}}),{c(){t&&t.c(),r=E(),$(i.$$.fragment),e=E(),$(a.$$.fragment)},l(n){t&&t.l(n),r=S(n),U(i.$$.fragment,n),e=S(n),U(a.$$.fragment,n)},m(n,s){t&&t.m(n,s),R(n,r,s),D(i,n,s),R(n,e,s),D(a,n,s),o=!0},p(n,s){n[0]?t?(t.p(n,s),s[0]&1&&m(t,1)):(t=He(n),t.c(),m(t,1),t.m(r.parentNode,r)):t&&(X(),g(t,1,1,()=>{t=null}),Z());const f={};s[0]&1&&(f.data=n[0]),i.$set(f);const c={};s[0]&1&&(c.data=n[0]),a.$set(c)},i(n){o||(m(t),m(i.$$.fragment,n),m(a.$$.fragment,n),o=!0)},o(n){g(t),g(i.$$.fragment,n),g(a.$$.fragment,n),o=!1},d(n){n&&(p(r),p(e)),t&&t.d(n),I(i,n),I(a,n)}}}function Fe(l){let r,i;return r=new pe({props:{queryID:"revenue_by_department",queryResult:l[1]}}),{c(){$(r.$$.fragment)},l(e){U(r.$$.fragment,e)},m(e,a){D(r,e,a),i=!0},p(e,a){const o={};a[0]&2&&(o.queryResult=e[1]),r.$set(o)},i(e){i||(m(r.$$.fragment,e),i=!0)},o(e){g(r.$$.fragment,e),i=!1},d(e){I(r,e)}}}function Et(l){let r,i,e,a,o,t=l[1]&&Fe(l);return i=new Ie({props:{data:l[1],x:"department",y:"revenue",title:"Revenue by Department"}}),a=new Ce({props:{data:l[1]}}),{c(){t&&t.c(),r=E(),$(i.$$.fragment),e=E(),$(a.$$.fragment)},l(n){t&&t.l(n),r=S(n),U(i.$$.fragment,n),e=S(n),U(a.$$.fragment,n)},m(n,s){t&&t.m(n,s),R(n,r,s),D(i,n,s),R(n,e,s),D(a,n,s),o=!0},p(n,s){n[1]?t?(t.p(n,s),s[0]&2&&m(t,1)):(t=Fe(n),t.c(),m(t,1),t.m(r.parentNode,r)):t&&(X(),g(t,1,1,()=>{t=null}),Z());const f={};s[0]&2&&(f.data=n[1]),i.$set(f);const c={};s[0]&2&&(c.data=n[1]),a.$set(c)},i(n){o||(m(t),m(i.$$.fragment,n),m(a.$$.fragment,n),o=!0)},o(n){g(t),g(i.$$.fragment,n),g(a.$$.fragment,n),o=!1},d(n){n&&(p(r),p(e)),t&&t.d(n),I(i,n),I(a,n)}}}function Le(l){let r,i;return r=new pe({props:{queryID:"revenue_by_source",queryResult:l[2]}}),{c(){$(r.$$.fragment)},l(e){U(r.$$.fragment,e)},m(e,a){D(r,e,a),i=!0},p(e,a){const o={};a[0]&4&&(o.queryResult=e[2]),r.$set(o)},i(e){i||(m(r.$$.fragment,e),i=!0)},o(e){g(r.$$.fragment,e),i=!1},d(e){I(r,e)}}}function Tt(l){let r,i,e,a,o,t=l[2]&&Le(l);return i=new Ie({props:{data:l[2],x:"traffic_source",y:"revenue",title:"Revenue by Traffic Source"}}),a=new Ce({props:{data:l[2]}}),{c(){t&&t.c(),r=E(),$(i.$$.fragment),e=E(),$(a.$$.fragment)},l(n){t&&t.l(n),r=S(n),U(i.$$.fragment,n),e=S(n),U(a.$$.fragment,n)},m(n,s){t&&t.m(n,s),R(n,r,s),D(i,n,s),R(n,e,s),D(a,n,s),o=!0},p(n,s){n[2]?t?(t.p(n,s),s[0]&4&&m(t,1)):(t=Le(n),t.c(),m(t,1),t.m(r.parentNode,r)):t&&(X(),g(t,1,1,()=>{t=null}),Z());const f={};s[0]&4&&(f.data=n[2]),i.$set(f);const c={};s[0]&4&&(c.data=n[2]),a.$set(c)},i(n){o||(m(t),m(i.$$.fragment,n),m(a.$$.fragment,n),o=!0)},o(n){g(t),g(i.$$.fragment,n),g(a.$$.fragment,n),o=!1},d(n){n&&(p(r),p(e)),t&&t.d(n),I(i,n),I(a,n)}}}function ht(l){let r,i,e,a,o,t;return r=new Ne({props:{label:"By Category",$$slots:{default:[St]},$$scope:{ctx:l}}}),e=new Ne({props:{label:"By Department",$$slots:{default:[Et]},$$scope:{ctx:l}}}),o=new Ne({props:{label:"By Traffic Source",$$slots:{default:[Tt]},$$scope:{ctx:l}}}),{c(){$(r.$$.fragment),i=E(),$(e.$$.fragment),a=E(),$(o.$$.fragment)},l(n){U(r.$$.fragment,n),i=S(n),U(e.$$.fragment,n),a=S(n),U(o.$$.fragment,n)},m(n,s){D(r,n,s),R(n,i,s),D(e,n,s),R(n,a,s),D(o,n,s),t=!0},p(n,s){const f={};s[0]&1|s[1]&2048&&(f.$$scope={dirty:s,ctx:n}),r.$set(f);const c={};s[0]&2|s[1]&2048&&(c.$$scope={dirty:s,ctx:n}),e.$set(c);const d={};s[0]&4|s[1]&2048&&(d.$$scope={dirty:s,ctx:n}),o.$set(d)},i(n){t||(m(r.$$.fragment,n),m(e.$$.fragment,n),m(o.$$.fragment,n),t=!0)},o(n){g(r.$$.fragment,n),g(e.$$.fragment,n),g(o.$$.fragment,n),t=!1},d(n){n&&(p(i),p(a)),I(r,n),I(e,n),I(o,n)}}}function Ye(l){let r,i;return r=new pe({props:{queryID:"category_pie",queryResult:l[3]}}),{c(){$(r.$$.fragment)},l(e){U(r.$$.fragment,e)},m(e,a){D(r,e,a),i=!0},p(e,a){const o={};a[0]&8&&(o.queryResult=e[3]),r.$set(o)},i(e){i||(m(r.$$.fragment,e),i=!0)},o(e){g(r.$$.fragment,e),i=!1},d(e){I(r,e)}}}function qe(l){let r,i;return r=new pe({props:{queryID:"radar_metrics",queryResult:l[4]}}),{c(){$(r.$$.fragment)},l(e){U(r.$$.fragment,e)},m(e,a){D(r,e,a),i=!0},p(e,a){const o={};a[0]&16&&(o.queryResult=e[4]),r.$set(o)},i(e){i||(m(r.$$.fragment,e),i=!0)},o(e){g(r.$$.fragment,e),i=!1},d(e){I(r,e)}}}function Ct(l){let r,i,e,a,o,t,n='<a href="#-layout--custom-charts">🎨 Layout &amp; Custom Charts</a>',s,f,c='Demonstrates Evidence.dev layout components (<strong class="markdown">Tabs</strong>) and custom <strong class="markdown">ECharts</strong> visualizations including a pie chart and a radar chart.',d,_,h='<a href="#revenue-breakdown--tabs">Revenue Breakdown — Tabs</a>',O,B,Q,J,H,v,A='<a href="#custom-echarts--category-revenue-pie-chart">Custom ECharts — Category Revenue Pie Chart</a>',V,Y,F,W,q,z,G,te='<a href="#custom-echarts--category-radar-chart">Custom ECharts — Category Radar Chart</a>',ee,L,w,j;function oe(u,b){return Nt}let x=oe()(l);B=new bt({props:{$$slots:{default:[ht]},$$scope:{ctx:l}}});let y=l[3]&&Ye(l);F=new Ue({props:{config:{tooltip:{trigger:"item",formatter:"{b}: ${c} ({d}%)"},legend:{orient:"vertical",left:"left"},series:[{name:"Revenue",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!0,label:{show:!0,formatter:`{b}
{d}%`},data:l[3].map(Ge)}]},height:450}});let N=l[4]&&qe(l);return w=new Ue({props:{config:{tooltip:{},legend:{data:l[4].map(Pe)},radar:{indicator:[{name:"Revenue",max:Math.max(...l[4].map(We))},{name:"Orders",max:Math.max(...l[4].map(Je))},{name:"Brands",max:Math.max(...l[4].map(Ve))},{name:"Avg Price",max:Math.max(...l[4].map(Qe))},{name:"Avg Margin",max:Math.max(...l[4].map(ze))}]},series:[{type:"radar",data:l[4].map(je)}]},height:450}}),{c(){r=E(),x.c(),i=k("meta"),e=k("meta"),a=le(),o=E(),t=k("h1"),t.innerHTML=n,s=E(),f=k("p"),f.innerHTML=c,d=E(),_=k("h2"),_.innerHTML=h,O=E(),$(B.$$.fragment),Q=E(),J=k("hr"),H=E(),v=k("h2"),v.innerHTML=A,V=E(),y&&y.c(),Y=E(),$(F.$$.fragment),W=E(),q=k("hr"),z=E(),G=k("h2"),G.innerHTML=te,ee=E(),N&&N.c(),L=E(),$(w.$$.fragment),this.h()},l(u){r=S(u);const b=it("svelte-2igo1p",document.head);x.l(b),i=M(b,"META",{name:!0,content:!0}),e=M(b,"META",{name:!0,content:!0}),a=le(),b.forEach(p),o=S(u),t=M(u,"H1",{class:!0,id:!0,"data-svelte-h":!0}),se(t)!=="svelte-8um32q"&&(t.innerHTML=n),s=S(u),f=M(u,"P",{class:!0,"data-svelte-h":!0}),se(f)!=="svelte-13lts1l"&&(f.innerHTML=c),d=S(u),_=M(u,"H2",{class:!0,id:!0,"data-svelte-h":!0}),se(_)!=="svelte-104odvz"&&(_.innerHTML=h),O=S(u),U(B.$$.fragment,u),Q=S(u),J=M(u,"HR",{class:!0}),H=S(u),v=M(u,"H2",{class:!0,id:!0,"data-svelte-h":!0}),se(v)!=="svelte-lzog2z"&&(v.innerHTML=A),V=S(u),y&&y.l(u),Y=S(u),U(F.$$.fragment,u),W=S(u),q=M(u,"HR",{class:!0}),z=S(u),G=M(u,"H2",{class:!0,id:!0,"data-svelte-h":!0}),se(G)!=="svelte-e0cqet"&&(G.innerHTML=te),ee=S(u),N&&N.l(u),L=S(u),U(w.$$.fragment,u),this.h()},h(){C(i,"name","twitter:card"),C(i,"content","summary_large_image"),C(e,"name","twitter:site"),C(e,"content","@evidence_dev"),C(t,"class","markdown"),C(t,"id","-layout--custom-charts"),C(f,"class","markdown"),C(_,"class","markdown"),C(_,"id","revenue-breakdown--tabs"),C(J,"class","markdown"),C(v,"class","markdown"),C(v,"id","custom-echarts--category-revenue-pie-chart"),C(q,"class","markdown"),C(G,"class","markdown"),C(G,"id","custom-echarts--category-radar-chart")},m(u,b){R(u,r,b),x.m(document.head,null),ce(document.head,i),ce(document.head,e),ce(document.head,a),R(u,o,b),R(u,t,b),R(u,s,b),R(u,f,b),R(u,d,b),R(u,_,b),R(u,O,b),D(B,u,b),R(u,Q,b),R(u,J,b),R(u,H,b),R(u,v,b),R(u,V,b),y&&y.m(u,b),R(u,Y,b),D(F,u,b),R(u,W,b),R(u,q,b),R(u,z,b),R(u,G,b),R(u,ee,b),N&&N.m(u,b),R(u,L,b),D(w,u,b),j=!0},p(u,b){x.p(u,b);const re={};b[0]&7|b[1]&2048&&(re.$$scope={dirty:b,ctx:u}),B.$set(re),u[3]?y?(y.p(u,b),b[0]&8&&m(y,1)):(y=Ye(u),y.c(),m(y,1),y.m(Y.parentNode,Y)):y&&(X(),g(y,1,1,()=>{y=null}),Z());const ae={};b[0]&8&&(ae.config={tooltip:{trigger:"item",formatter:"{b}: ${c} ({d}%)"},legend:{orient:"vertical",left:"left"},series:[{name:"Revenue",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!0,label:{show:!0,formatter:`{b}
{d}%`},data:u[3].map(Ge)}]}),F.$set(ae),u[4]?N?(N.p(u,b),b[0]&16&&m(N,1)):(N=qe(u),N.c(),m(N,1),N.m(L.parentNode,L)):N&&(X(),g(N,1,1,()=>{N=null}),Z());const T={};b[0]&16&&(T.config={tooltip:{},legend:{data:u[4].map(Pe)},radar:{indicator:[{name:"Revenue",max:Math.max(...u[4].map(We))},{name:"Orders",max:Math.max(...u[4].map(Je))},{name:"Brands",max:Math.max(...u[4].map(Ve))},{name:"Avg Price",max:Math.max(...u[4].map(Qe))},{name:"Avg Margin",max:Math.max(...u[4].map(ze))}]},series:[{type:"radar",data:u[4].map(je)}]}),w.$set(T)},i(u){j||(m(B.$$.fragment,u),m(y),m(F.$$.fragment,u),m(N),m(w.$$.fragment,u),j=!0)},o(u){g(B.$$.fragment,u),g(y),g(F.$$.fragment,u),g(N),g(w.$$.fragment,u),j=!1},d(u){u&&(p(r),p(o),p(t),p(s),p(f),p(d),p(_),p(O),p(Q),p(J),p(H),p(v),p(V),p(Y),p(W),p(q),p(z),p(G),p(ee),p(L)),x.d(u),p(i),p(e),p(a),I(B,u),y&&y.d(u),I(F,u),N&&N.d(u),I(w,u)}}}const Ge=l=>({name:l.category,value:l.revenue}),Pe=l=>l.category,We=l=>l.revenue,Je=l=>l.orders,Ve=l=>l.brands,Qe=l=>l.avg_price,ze=l=>l.avg_margin,je=l=>({name:l.category,value:[l.revenue,l.orders,l.brands,l.avg_price,l.avg_margin]});function It(l,r,i){let e,a;Re(l,ft,T=>i(27,e=T)),Re(l,De,T=>i(33,a=T));let{data:o}=r,{data:t={},customFormattingSettings:n,__db:s,inputs:f}=o;P(De,a="7641bc77fdbe2d22cb199476bf7e0b82",a);let c=lt(xe(f));Ze(c.subscribe(T=>f=T)),Ke(ut,{getCustomFormats:()=>n.customFormats||[]});const d=(T,tt)=>ct(s.query,T,{query_name:tt});ot(d),e.params,Ee(()=>!0);let _={initialData:void 0,initialError:void 0},h=K`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC`,O=`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC`;t.revenue_by_category_data&&(t.revenue_by_category_data instanceof Error?_.initialError=t.revenue_by_category_data:_.initialData=t.revenue_by_category_data,t.revenue_by_category_columns&&(_.knownColumns=t.revenue_by_category_columns));let B,Q=!1;const J=ue.createReactive({callback:T=>{i(0,B=T)},execFn:d},{id:"revenue_by_category",..._});J(O,{noResolve:h,..._}),globalThis[Symbol.for("revenue_by_category")]={get value(){return B}};let H={initialData:void 0,initialError:void 0},v=K`SELECT
  p.department,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.category) AS categories
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.department
ORDER BY revenue DESC`,A=`SELECT
  p.department,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.category) AS categories
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.department
ORDER BY revenue DESC`;t.revenue_by_department_data&&(t.revenue_by_department_data instanceof Error?H.initialError=t.revenue_by_department_data:H.initialData=t.revenue_by_department_data,t.revenue_by_department_columns&&(H.knownColumns=t.revenue_by_department_columns));let V,Y=!1;const F=ue.createReactive({callback:T=>{i(1,V=T)},execFn:d},{id:"revenue_by_department",...H});F(A,{noResolve:v,...H}),globalThis[Symbol.for("revenue_by_department")]={get value(){return V}};let W={initialData:void 0,initialError:void 0},q=K`SELECT
  u.traffic_source,
  COUNT(DISTINCT u.id) AS customers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.traffic_source
ORDER BY revenue DESC`,z=`SELECT
  u.traffic_source,
  COUNT(DISTINCT u.id) AS customers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.traffic_source
ORDER BY revenue DESC`;t.revenue_by_source_data&&(t.revenue_by_source_data instanceof Error?W.initialError=t.revenue_by_source_data:W.initialData=t.revenue_by_source_data,t.revenue_by_source_columns&&(W.knownColumns=t.revenue_by_source_columns));let G,te=!1;const ee=ue.createReactive({callback:T=>{i(2,G=T)},execFn:d},{id:"revenue_by_source",...W});ee(z,{noResolve:q,...W}),globalThis[Symbol.for("revenue_by_source")]={get value(){return G}};let L={initialData:void 0,initialError:void 0},w=K`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC`,j=`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC`;t.category_pie_data&&(t.category_pie_data instanceof Error?L.initialError=t.category_pie_data:L.initialData=t.category_pie_data,t.category_pie_columns&&(L.knownColumns=t.category_pie_columns));let oe,be=!1;const x=ue.createReactive({callback:T=>{i(3,oe=T)},execFn:d},{id:"category_pie",...L});x(j,{noResolve:w,...L}),globalThis[Symbol.for("category_pie")]={get value(){return oe}};let y={initialData:void 0,initialError:void 0},N=K`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.brand) AS brands,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 6`,u=`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.brand) AS brands,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 6`;t.radar_metrics_data&&(t.radar_metrics_data instanceof Error?y.initialError=t.radar_metrics_data:y.initialData=t.radar_metrics_data,t.radar_metrics_columns&&(y.knownColumns=t.radar_metrics_columns));let b,re=!1;const ae=ue.createReactive({callback:T=>{i(4,b=T)},execFn:d},{id:"radar_metrics",...y});return ae(u,{noResolve:N,...y}),globalThis[Symbol.for("radar_metrics")]={get value(){return b}},l.$$set=T=>{"data"in T&&i(5,o=T.data)},l.$$.update=()=>{l.$$.dirty[0]&32&&i(6,{data:t={},customFormattingSettings:n,__db:s}=o,t),l.$$.dirty[0]&64&&st.set(Object.keys(t).length>0),l.$$.dirty[0]&134217728&&e.params,l.$$.dirty[0]&1920&&(h||!Q?h||(J(O,{noResolve:h,..._}),i(10,Q=!0)):J(O,{noResolve:h})),l.$$.dirty[0]&30720&&(v||!Y?v||(F(A,{noResolve:v,...H}),i(14,Y=!0)):F(A,{noResolve:v})),l.$$.dirty[0]&491520&&(q||!te?q||(ee(z,{noResolve:q,...W}),i(18,te=!0)):ee(z,{noResolve:q})),l.$$.dirty[0]&7864320&&(w||!be?w||(x(j,{noResolve:w,...L}),i(22,be=!0)):x(j,{noResolve:w})),l.$$.dirty[0]&125829120&&(N||!re?N||(ae(u,{noResolve:N,...y}),i(26,re=!0)):ae(u,{noResolve:N}))},i(8,h=K`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC`),i(9,O=`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC`),i(12,v=K`SELECT
  p.department,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.category) AS categories
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.department
ORDER BY revenue DESC`),i(13,A=`SELECT
  p.department,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.category) AS categories
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.department
ORDER BY revenue DESC`),i(16,q=K`SELECT
  u.traffic_source,
  COUNT(DISTINCT u.id) AS customers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.traffic_source
ORDER BY revenue DESC`),i(17,z=`SELECT
  u.traffic_source,
  COUNT(DISTINCT u.id) AS customers,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders
FROM order_items oi
JOIN users u ON oi.user_id = u.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY u.traffic_source
ORDER BY revenue DESC`),i(20,w=K`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC`),i(21,j=`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC`),i(24,N=K`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.brand) AS brands,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 6`),i(25,u=`SELECT
  p.category,
  ROUND(SUM(oi.sale_price), 2) AS revenue,
  COUNT(*) AS orders,
  COUNT(DISTINCT p.brand) AS brands,
  ROUND(AVG(oi.sale_price), 2) AS avg_price,
  ROUND(AVG(p.retail_price - p.cost), 2) AS avg_margin
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.status NOT IN ('Cancelled', 'Returned')
GROUP BY p.category
ORDER BY revenue DESC
LIMIT 6`),[B,V,G,oe,b,o,t,_,h,O,Q,H,v,A,Y,W,q,z,te,L,w,j,be,y,N,u,re,e]}class Lt extends Te{constructor(r){super(),he(this,r,It,Ct,Se,{data:5},null,[-1,-1])}}export{Lt as component};
