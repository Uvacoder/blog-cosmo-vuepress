import{u as O,i as y,j as fe,_ as x,f as C,o,c as v,a as u,h as n,k as $e,r as R,l as F,v as A,d as f,m as ke,n as U,p as X,t as q,q as ue,g as I,s as L,x as P,w as D,y as T,T as we,z as ce,A as B,B as J,C as de,F as W,D as z,E as K,G as Q,H as j,I as ve,J as ye,K as Se,L as Te,M as Ie,N as Le,O as xe,P as Ce,b as Ne,Q as pe,R as Be}from"./app.7f03bc33.js";const ie=p=>decodeURI(p).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ve=(p,t)=>{if(t.hash===p)return!0;const e=ie(t.path),r=ie(p);return e===r},ge=(p,t)=>p.link&&Ve(p.link,t)?!0:p.children?p.children.some(e=>ge(e,t)):!1,Me=()=>{const p=O(),t=fe();return y(()=>t.value.frontmatter.layout==="Post"&&t.value.frontmatter.catalog!==!1&&(p.value.catalog||t.value.frontmatter.catalog)&&t.value.headers.length>0)},Oe={class:"footer"},Ee=["innerHTML"],Re=C({__name:"Footer",setup(p){const e=O().value.footer;return(r,s)=>(o(),v("footer",Oe,[u("span",{innerHTML:n(e)},null,8,Ee)]))}});var De=x(Re,[["__file","Footer.vue"]]);const Pe=["title"],He=C({__name:"ToggleColorModeButton",setup(p){const t=["light","dark","auto"],e=O(),{currentMode:r}=$e(),s=()=>{const k=(t.indexOf(r.value)+1)%t.length;r.value=t[k]};return(h,k)=>{const g=R("VIcon");return o(),v("div",{title:n(e).toggleColorMode,onClick:s},[F(f(g,{name:"fa-sun"},null,512),[[A,n(r)==="light"]]),F(f(g,{name:"fa-moon"},null,512),[[A,n(r)==="dark"]]),F(f(g,{name:"fa-magic"},null,512),[[A,n(r)==="auto"]])],8,Pe)}}});var Fe=x(He,[["__file","ToggleColorModeButton.vue"]]);const Ae=["title"],qe=C({__name:"ToggleSidebarButton",emits:["toggle"],setup(p){const t=O();return(e,r)=>{const s=R("VIcon");return o(),v("div",{class:"toggle-sidebar-button",title:n(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:r[0]||(r[0]=h=>e.$emit("toggle"))},[f(s,{name:"bi-layout-sidebar-inset"})],8,Ae)}}});var We=x(qe,[["__file","ToggleSidebarButton.vue"]]);const Ke={class:"menu-btn-wrapper"},ze={class:"menu-btn-icon"},je=u("span",null,null,-1),Ye=u("span",null,null,-1),Ge=u("span",null,null,-1),Ue=[je,Ye,Ge],Xe={class:"menu-progress"},Je={class:"menu-btn-child-wrapper"},Qe=C({__name:"Menu",emits:["toggle-sidebar","toggle-catalog"],setup(p){const t=O(),e=ke({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});U(()=>{window.addEventListener("scroll",r)}),X(()=>{window.removeEventListener("scroll",r)});const r=()=>{const l=window.pageYOffset,_=g(),a=document.documentElement.clientHeight;let i=l/(_-a)*100;i>100&&(i=100),isNaN(i)||Math.round(i)<=0?(i=0,e.isTextVisible=!1,e.isBtnIconVisible=!0):(e.isTextVisible=!0,e.menuText=Math.round(i)+"%",e.isBtnIconVisible=!1),e.borderLen=3.1415926*(i||0)+"% 314.15926%"},s=()=>{e.isMenuOpen=!e.isMenuOpen},h=()=>{window.scrollTo({top:0,behavior:"smooth"})},k=()=>{window.scrollTo({top:g(),behavior:"smooth"})},g=()=>{const l=document.querySelector(".theme-container");return l?l.offsetHeight:0},b=Me();return(l,_)=>{const a=R("VIcon");return o(),v("div",{class:P(["menu-btn-container",{open:e.isMenuOpen}])},[u("div",Ke,[u("div",{class:"menu-btn",onClick:s},[F(u("div",ze,Ue,512),[[A,e.isBtnIconVisible]]),F(u("div",{class:"menu-text"},q(e.menuText),513),[[A,e.isTextVisible]]),(o(),v("svg",Xe,[u("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:ue({"stroke-dasharray":e.borderLen})},null,4)]))]),u("div",Je,[n(t).colorModeSwitch?(o(),I(Fe,{key:0,class:"menu-btn-child"})):L("",!0),u("div",{class:"menu-btn-child",onClick:k},[f(a,{name:"fa-chevron-down"})]),u("div",{class:"menu-btn-child",onClick:h},[f(a,{name:"fa-chevron-up"})]),n(b)?(o(),v("div",{key:1,class:"menu-btn-child menu-toc-btn",onClick:_[0]||(_[0]=i=>l.$emit("toggle-catalog"))},[f(a,{name:"fa-list-ul"})])):L("",!0),f(We,{class:"menu-btn-child menu-btn-sidebar",onToggle:_[1]||(_[1]=i=>l.$emit("toggle-sidebar"))})])])],2)}}});var Ze=x(Qe,[["__file","Menu.vue"]]);const et=C({__name:"DropdownTransition",setup(p){const t=r=>{r.style.height=r.scrollHeight+"px"},e=r=>{r.style.height=""};return(r,s)=>(o(),I(we,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:D(()=>[T(r.$slots,"default")]),_:3}))}});var me=x(et,[["__file","DropdownTransition.vue"]]);const tt=["aria-label"],nt={class:"title"},at={key:0,class:"nav-icon"},ot=u("span",{class:"arrow down"},null,-1),st=["aria-label"],rt={class:"title"},lt={key:0,class:"nav-icon"},it={class:"navbar-dropdown"},ut={class:"navbar-dropdown-subtitle"},ct={key:1},dt={class:"navbar-navbar-dropdown-subitem-wrapper"},vt=C({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(p){const t=p,{item:e}=ce(t),r=y(()=>e.value.ariaLabel||e.value.text),s=B(!1),h=J();de(()=>h.path,()=>{s.value=!1});const k=b=>{b.detail===0?s.value=!s.value:s.value=!1},g=(b,l)=>l[l.length-1]===b;return(b,l)=>{const _=R("VIcon");return o(),v("div",{class:P(["navbar-dropdown-wrapper",{open:s.value}])},[u("button",{class:"navbar-dropdown-title",type:"button","aria-label":n(r),onClick:k},[u("span",nt,[n(e).icon?(o(),v("span",at,[f(_,{name:n(e).icon},null,8,["name"])])):L("",!0),u("span",null,q(n(e).text),1)]),ot],8,tt),u("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":n(r),onClick:l[0]||(l[0]=a=>s.value=!s.value)},[u("span",rt,[n(e).icon?(o(),v("span",lt,[f(_,{name:n(e).icon},null,8,["name"])])):L("",!0),u("span",null,q(n(e).text),1)]),u("span",{class:P(["arrow",s.value?"down":"right"])},null,2)],8,st),f(me,null,{default:D(()=>[F(u("ul",it,[(o(!0),v(W,null,z(n(e).children,a=>(o(),v("li",{key:a.text,class:"navbar-dropdown-item"},[a.children?(o(),v(W,{key:0},[u("h4",ut,[a.link?(o(),I(K,{key:0,item:a,onFocusout:i=>g(a,n(e).children)&&a.children.length===0&&(s.value=!1)},null,8,["item","onFocusout"])):(o(),v("span",ct,q(a.text),1))]),u("ul",dt,[(o(!0),v(W,null,z(a.children,i=>(o(),v("li",{key:i.link,class:"navbar-dropdown-subitem"},[f(K,{item:i,onFocusout:w=>g(i,a.children)&&g(a,n(e).children)&&(s.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),I(K,{key:1,item:a,onFocusout:i=>g(a,n(e).children)&&(s.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[A,s.value]])]),_:1})],2)}}});var pt=x(vt,[["__file","NavbarDropdown.vue"]]);const gt={key:0,class:"navbar-items"},mt={key:0,class:"navbar-item"},ht={key:0,class:"nav-icon"},bt=C({__name:"NavbarItems",emits:["toggle-search"],setup(p){const t=()=>{const a=j(),i=ye(),w=Se(),$=O();return y(()=>{var d,S,M;const N=Object.keys(w.value.locales);if(N.length<2)return[];const E=a.currentRoute.value.path,V=a.currentRoute.value.fullPath,m=a.currentRoute.value.hash;return[{text:(d=$.value.selectLanguageText)!=null?d:"unknown language",ariaLabel:(M=(S=$.value.selectLanguageAriaLabel)!=null?S:$.value.selectLanguageText)!=null?M:"unknown language",icon:$.value.langIcon,children:N.map(H=>{var te,ne,ae,oe,se,re;const Y=(ne=(te=w.value.locales)==null?void 0:te[H])!=null?ne:{},Z=(oe=(ae=$.value.locales)==null?void 0:ae[H])!=null?oe:{},ee=`${Y.lang}`,be=(se=Z.selectLanguageName)!=null?se:ee;let G;if(ee===w.value.lang)G=V;else{const le=E.replace(i.value,H);a.getRoutes().some(_e=>_e.path===le)?G=`${le}${m}`:G=(re=Z.home)!=null?re:H}return{text:be,link:G}})}]})},e=a=>Te(a)?Ie(a):a.children?{...a,children:a.children.map(e)}:a,s=(()=>{const a=O();return y(()=>(a.value.navbar||[]).map(e))})(),h=t(),k=y(()=>[...s.value,...b.value?h.value:[]]),g=Q(),b=y(()=>{const i=j().currentRoute.value.path;return g.value.layout===void 0&&i.indexOf("/page/")===-1&&ve.value.path!==""}),l=O(),_=y(()=>l.value.search&&g.value.search!==!1);return(a,i)=>{const w=R("VIcon");return n(k).length?(o(),v("nav",gt,[(o(!0),v(W,null,z(n(k),$=>(o(),v("div",{key:$.text,class:"navbar-item"},[$.children?(o(),I(pt,{key:0,item:$},null,8,["item"])):(o(),I(K,{key:1,item:$},null,8,["item"]))]))),128)),n(_)?(o(),v("div",mt,[u("a",{style:{cursor:"pointer"},onClick:i[0]||(i[0]=$=>a.$emit("toggle-search"))},[n(l).searchIcon?(o(),v("span",ht,[f(w,{name:n(l).searchIcon},null,8,["name"])])):L("",!0),u("span",null,q(n(l).searchText),1)])])):L("",!0)])):L("",!0)}}});var he=x(bt,[["__file","NavbarItems.vue"]]);const _t={class:"site-name"},ft=C({__name:"Navbar",props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(p){const t=O(),e=Q(),r=j(),s=B(null),h=B(null),k=y(()=>t.value.home||"/"),g=y(()=>t.value.navbarTitle),b=B(0),l=y(()=>b.value?{maxWidth:b.value+"px"}:{}),_=B(0),a=B(!1),i=B(!1),w=B(!0),$=()=>{const m=window.pageYOffset;m<_.value?m>0&&a.value?i.value=!0:(i.value=!1,a.value=!1):(i.value=!1,s.value&&m>s.value.offsetHeight&&(a.value=!0)),_.value=m},N=()=>{let m=!1;e.value.layout==="HomePage"&&(m=!0),e.value.layout==="Post"&&e.value.useHeaderImage&&(m=!0),e.value.layout==="Tags"&&t.value.pages&&t.value.pages.tags&&t.value.pages.tags.bgImage&&(m=!0),e.value.layout==="Links"&&t.value.pages&&t.value.pages.links&&t.value.pages.links.bgImage&&(m=!0),w.value=m};let E;U(()=>{const c=V(s.value,"paddingLeft")+V(s.value,"paddingRight"),d=()=>{var S;window.innerWidth<=719||!s.value?b.value=0:b.value=s.value.offsetWidth-c-(((S=h.value)==null?void 0:S.offsetWidth)||0)};d(),window.addEventListener("resize",d,!1),window.addEventListener("orientationchange",d,!1),N(),E=r.afterEach(()=>{N()}),window.addEventListener("scroll",$)}),X(()=>{window.removeEventListener("scroll",$),E()});function V(m,c){var M,H,Y;const d=(Y=(H=(M=m==null?void 0:m.ownerDocument)==null?void 0:M.defaultView)==null?void 0:H.getComputedStyle(m,null))==null?void 0:Y[c],S=Number.parseInt(d,10);return Number.isNaN(S)?0:S}return(m,c)=>{const d=R("RouterLink"),S=R("NavbarSearch");return o(),v("header",{ref_key:"navbar",ref:s,class:P(["navbar",{"is-fixed":a.value||p.isSidebar,"is-visible":i.value||p.isSidebar,invert:w.value}])},[u("span",{ref_key:"navbarBrand",ref:h},[f(d,{to:n(k)},{default:D(()=>[u("span",_t,q(n(g)),1)]),_:1},8,["to"])],512),u("div",{class:"navbar-items-wrapper",style:ue(n(l))},[T(m.$slots,"before"),f(he,{class:"can-hide",onToggleSearch:c[0]||(c[0]=M=>m.$emit("toggle-search"))}),T(m.$slots,"after"),f(S)],4)],2)}}});var $t=x(ft,[["__file","Navbar.vue"]]);const kt=["onKeydown"],wt={class:"sidebar-item-children"},yt=C({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(p){const t=p,{item:e,depth:r}=ce(t),s=J(),h=j(),k=y(()=>ge(e.value,s)),g=y(()=>({"sidebar-item":!0,"sidebar-heading":r.value===0,active:k.value,collapsible:e.value.collapsible})),b=y(()=>e.value.collapsible?k.value:!0),[l,_]=Le(b.value),a=w=>{e.value.collapsible&&(w.preventDefault(),_())},i=h.afterEach(w=>{xe(()=>{l.value=b.value})});return X(()=>{i()}),(w,$)=>{var E;const N=R("SidebarItem",!0);return o(),v("li",null,[n(e).link?(o(),I(K,{key:0,class:P(n(g)),item:n(e)},null,8,["class","item"])):(o(),v("p",{key:1,tabindex:"0",class:P(n(g)),onClick:a,onKeydown:Ce(a,["enter"])},[Ne(q(n(e).text)+" ",1),n(e).collapsible?(o(),v("span",{key:0,class:P(["arrow",n(l)?"down":"right"])},null,2)):L("",!0)],42,kt)),(E=n(e).children)!=null&&E.length?(o(),I(me,{key:2},{default:D(()=>[F(u("ul",wt,[(o(!0),v(W,null,z(n(e).children,V=>(o(),I(N,{key:`${n(r)}${V.text}${V.link}`,item:V,depth:n(r)+1},null,8,["item","depth"]))),128))],512),[[A,n(l)]])]),_:1})):L("",!0)])}}});var St=x(yt,[["__file","SidebarItem.vue"]]);const Tt={key:0,class:"sidebar-items"},It=C({__name:"SidebarItems",setup(p){const t=J(),e=pe();return U(()=>{de(()=>t.hash,r=>{const s=document.querySelector(".sidebar");if(!s)return;const h=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${r}"]`);if(!h)return;const{top:k,height:g}=s.getBoundingClientRect(),{top:b,height:l}=h.getBoundingClientRect();b<k?h.scrollIntoView(!0):b+l>k+g&&h.scrollIntoView(!1)})}),(r,s)=>n(e).length?(o(),v("ul",Tt,[(o(!0),v(W,null,z(n(e),h=>(o(),I(St,{key:`${h.text}${h.link}`,item:h},null,8,["item"]))),128))])):L("",!0)}});var Lt=x(It,[["__file","SidebarItems.vue"]]);const xt={class:"sidebar"},Ct=C({__name:"Sidebar",emits:["toggle-search"],setup(p){return(t,e)=>(o(),v("aside",xt,[f(he,{onToggleSearch:e[0]||(e[0]=r=>t.$emit("toggle-search"))}),T(t.$slots,"top"),f(Lt),T(t.$slots,"bottom")]))}});var Nt=x(Ct,[["__file","Sidebar.vue"]]);const Bt={class:"page-content"},Vt=C({__name:"Common",setup(p){const t=Q(),e=O(),r=j(),s=y(()=>t.value.navbar!==!1&&e.value.navbar!==!1),h=y(()=>ve.value.path===""),k=pe(),g=y(()=>k.value.length>0&&!h.value),b=B(!1),l=c=>{b.value=typeof c=="boolean"?c:!b.value},_={x:0,y:0},a=c=>{_.x=c.changedTouches[0].clientX,_.y=c.changedTouches[0].clientY},i=c=>{const d=c.changedTouches[0].clientX-_.x,S=c.changedTouches[0].clientY-_.y;Math.abs(d)>Math.abs(S)&&Math.abs(d)>40&&(d>0&&_.x<=80?l(!0):l(!1))},w=B(!1),$=c=>{w.value=typeof c=="boolean"?c:!w.value;const d=document.querySelector("html");w.value?d==null||d.classList.add("fixed"):d==null||d.classList.remove("fixed"),w.value&&setTimeout(function(){document.querySelector(".search-page input").focus()},400)},N=B(!1),E=c=>{N.value=typeof c=="boolean"?c:!N.value},V=y(()=>[{"no-navbar":!s.value,"no-sidebar":!g.value,"sidebar-open":b.value,"catalog-open":N.value,"search-open":w.value},t.value.pageClass]);let m;return U(()=>{m=r.afterEach(()=>{l(!1),$(!1)})}),Be(()=>{m()}),(c,d)=>{const S=R("GungnirSearchPage");return o(),v("div",{class:P(["theme-container",n(V)]),onTouchstart:a,onTouchend:i},[T(c.$slots,"navbar",{},()=>[n(s)?(o(),I($t,{key:0,"is-sidebar":n(g),onToggleSearch:d[0]||(d[0]=M=>$(!0))},{before:D(()=>[T(c.$slots,"navbar-before")]),after:D(()=>[T(c.$slots,"navbar-after")]),_:3},8,["is-sidebar"])):L("",!0)]),u("div",{class:"sidebar-mask",onClick:d[1]||(d[1]=M=>l(!1))}),T(c.$slots,"sidebar",{},()=>[f(Nt,{onToggleSearch:d[2]||(d[2]=M=>$(!0))},{top:D(()=>[T(c.$slots,"sidebar-top")]),bottom:D(()=>[T(c.$slots,"sidebar-bottom")]),_:3})]),u("div",Bt,[T(c.$slots,"page")]),f(S,{onToggleSearch:d[3]||(d[3]=M=>$(!1))}),f(Ze,{onToggleSidebar:l,onToggleCatalog:E}),n(g)?L("",!0):(o(),I(De,{key:0}))],34)}}});var Ot=x(Vt,[["__file","Common.vue"]]);export{Ot as C,Me as u};
