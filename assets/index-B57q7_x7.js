
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as b,u as B,c as N,D as z,F as $,r as T,o as s,M as u,w as j,j as e,f as m,i as d,h as S,x as I,K as l,O as V,X as D,N as p,t as F,T as H,_ as L,z as Y}from"./index-Co0mQimf.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-Dp0s2P3M.js";import{_ as K}from"./rightSide.vue_vue_type_script_setup_true_lang-7rUW5Bwg.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang-C9KveHbL.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_lang-CWj_iM5c.js";import"./logo-D-CqFC5K.js";import"./HDropdownMenu.vue_vue_type_script_setup_true_lang-BH8wHinj.js";import"./tools.vue_vue_type_script_setup_true_lang-DQY8Am8Z.js";import"./index-DHeFv9x3.js";import"./index-BmfP5h1j.js";import"./item.vue_vue_type_script_setup_true_lang-B0AeiTzC.js";import"./index.vue_vue_type_script_setup_true_lang-Ck4Mp0YF.js";import"./HDropdown-DClLxSR2.js";import"./HTabList.vue_vue_type_script_setup_true_lang-x7An4eMH.js";import"./use-resolve-button-type-CRuKX3TB.js";import"./index.vue_vue_type_script_setup_true_lang-Dc_I1v48.js";import"./panel-CcVMmnC7.js";import"./sortable.esm-C0-Qcoum.js";import"./index.vue_vue_type_script_setup_true_lang-CzFzhHkS.js";import"./index-Db2q6hzI.js";import"./index.vue_vue_type_script_setup_true_lang-DjSViNMP.js";import"./index.vue_vue_type_script_setup_true_lang-BFXhLHMt.js";import"./HKbd-6i1h_MPh.js";import"./index-srnQhQmE.js";import"./HBadge.vue_vue_type_script_setup_true_lang-CHz_rrGV.js";import"./panel-B-gSIwhz.js";import"./notification-Cwu4aDhX.js";import"./index-CwRn4qD4.js";import"./useMainPage-Dwz-kSf1.js";import"./useTabbar-p8753Iyc.js";import"./index.es-Dlb0zXws.js";import"./sub.vue_vue_type_script_setup_true_lang-y6wArVcl.js";import"./item-CFXLGlMH.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-BNHPIkgP.js";import"./sub.vue_vue_type_script_setup_true_lang-kLZCdSzv.js";import"./item-Bb7wjTD9.js";const X={key:0},q={class:"header-container"},G=["title","onClick"],J={class:"inline-flex flex-1 items-center justify-center gap-1"},P={class:"w-full flex-1 truncate text-sm transition-height transition-opacity transition-width"},Q=b({name:"LayoutHeader",__name:"index",setup(U){const c=B(),t=N(),a=z(),{switchTo:C}=$(),{generateI18nTitle:f}=$();function _(o,h,r){let n;return!o&&h||o&&!r?n=h:o&&r&&(n=r),n}const g=T();function R(o){(o.deltaY||o.detail!==0)&&g.value.scrollBy({left:(o.deltaY||o.detail)>0?50:-50})}return(o,h)=>{const r=L;return s(),u(H,{name:"header"},{default:j(()=>[e(t).mode==="pc"&&["head","only-head","head-panel"].includes(e(t).settings.menu.mode)?(s(),m("header",X,[d("div",q,[S(E,{class:"title"}),d("div",{ref_key:"menuRef",ref:g,class:"menu-container",onWheel:I(R,["prevent"])},[e(t).settings.menu.mode==="head"?(s(),m("div",{key:0,class:l(["menu h-full flex of-hidden transition-all",{[`menu-active-${e(t).settings.menu.style}`]:e(t).settings.menu.style!==""}])},[(s(!0),m(V,null,D(e(a).allMenus,(n,i)=>{var v,y,k,x,w,M;return s(),m("div",{key:i,class:l(["menu-item relative mx-1 py-2 transition-all",{active:i===e(a).actived}])},[n.children&&n.children.length!==0?(s(),m("div",{key:0,class:l(["group menu-item-container h-full w-full flex cursor-pointer items-center justify-between gap-1 px-3 text-[var(--g-header-menu-color)] transition-all hover-bg-[var(--g-header-menu-hover-bg)] hover-text-[var(--g-header-menu-hover-color)]",{"text-[var(--g-header-menu-active-color)]! bg-[var(--g-header-menu-active-bg)]!":i===e(a).actived,"rounded-2":e(t).settings.menu.isRounded}]),title:e(f)((v=n.meta)==null?void 0:v.title),onClick:Z=>e(C)(i)},[d("div",J,[_(i===e(a).actived,(y=n.meta)==null?void 0:y.icon,(k=n.meta)==null?void 0:k.activeIcon)?(s(),u(r,{key:0,name:_(i===e(a).actived,(x=n.meta)==null?void 0:x.icon,(w=n.meta)==null?void 0:w.activeIcon),class:"menu-item-container-icon transition-transform group-hover-scale-120"},null,8,["name"])):p("",!0),d("span",P,F(e(f)((M=n.meta)==null?void 0:M.title)),1)])],10,G)):p("",!0)],2)}),128))],2)):e(t).settings.menu.mode==="only-head"?(s(),u(O,{key:1,menu:e(a).allMenus,value:e(c).meta.activeMenu||e(c).path,mode:"horizontal","show-collapse-name":"",rounded:e(t).settings.menu.isRounded,direction:e(t).settings.app.direction,class:l(["menu",{[`menu-active-${e(t).settings.menu.style}`]:e(t).settings.menu.style!==""}])},null,8,["menu","value","rounded","direction","class"])):e(t).settings.menu.mode==="head-panel"?(s(),u(W,{key:2,menu:e(a).allMenus,value:e(c).meta.activeMenu||e(c).path,mode:"horizontal","show-collapse-name":"",rounded:e(t).settings.menu.isRounded,panel:"",direction:e(t).settings.app.direction,class:l(["menu",{[`menu-active-${e(t).settings.menu.style}`]:e(t).settings.menu.style!==""}])},null,8,["menu","value","rounded","direction","class"])):p("",!0)],544),S(K)])])):p("",!0)]),_:1})}}}),Ve=Y(Q,[["__scopeId","data-v-47e79324"]]);export{Ve as default};
