
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{_ as S}from"./sub.vue_vue_type_script_setup_true_lang-y6wArVcl.js";import{r as B,I as P}from"./item-CFXLGlMH.js";import{d as x,r as i,G as E,H as m,az as b,aR as z,o as r,f as d,O as y,X as J,M as g,N as q,K as A,j,a3 as K}from"./index-Co0mQimf.js";const L=x({name:"MainMenu",__name:"index",props:{menu:{},value:{},accordion:{type:Boolean,default:!0},defaultOpeneds:{default:()=>[]},alwaysOpeneds:{default:()=>[]},mode:{default:"vertical"},collapse:{type:Boolean,default:!1},showCollapseName:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},direction:{default:"ltr"}},setup(C){const l=C,o=i(l.value),c=i({}),t=i({}),s=i(Array.from(new Set([...l.alwaysOpeneds.slice(0),...l.defaultOpeneds.slice(0)]))),k=i(l.alwaysOpeneds.slice(0)),I=i([]),M=E(()=>l.mode==="horizontal"||l.mode==="vertical"&&l.collapse);function O(e,n=[]){e.forEach(a=>{const u=a.path??JSON.stringify(a);if(a.children){const f=[...n,u];t.value[u]={index:u,indexPath:f,active:!1},O(a.children,f)}else c.value[u]={index:u,indexPath:n}})}const p=(e,n)=>{s.value.includes(e)||(l.accordion&&(s.value=s.value.filter(a=>n.includes(a)||k.value.includes(a))),s.value.push(e))},v=e=>{if(Array.isArray(e)){K(()=>{v(e.at(-1)),e.length>1&&v(e.slice(0,-1))});return}Object.keys(t.value).forEach(n=>{t.value[n].indexPath.includes(e)&&(s.value=s.value.filter(a=>a!==e))})};function w(e){var n,a;for(const u in t.value)t.value[u].active=!1;(n=t.value[e])==null||n.indexPath.forEach(u=>{t.value[u].active=!0}),(a=c.value[e])==null||a.indexPath.forEach(u=>{t.value[u].active=!0})}const _=e=>{(l.mode==="horizontal"||l.collapse)&&(s.value=[]),w(e)},N=(e,n)=>{s.value.includes(e)?v(e):p(e,n)};function h(){const e=o.value&&c.value[o.value];w(o.value),!(!e||l.collapse)&&e.indexPath.forEach(n=>{const a=t.value[n];a&&p(n,a.indexPath)})}return m(()=>l.menu,e=>{O(e),h()},{deep:!0,immediate:!0}),m(()=>l.value,e=>{c.value[e]||(o.value="");const n=c.value[e]||o.value&&c.value[o.value]||c.value[l.value];n?o.value=n.index:o.value=e,h()}),m(()=>l.collapse,e=>{e?s.value=[]:s.value=l.alwaysOpeneds.slice(0),h()}),b(B,z({props:l,items:c,subMenus:t,activeIndex:o,openedMenus:s,alwaysOpenedsMenus:k,mouseInMenu:I,isMenuPopup:M,openMenu:p,closeMenu:v,handleMenuItemClick:_,handleSubMenuClick:N})),(e,n)=>(r(),d("div",{class:A(["h-full w-full flex flex-col of-hidden transition-all",{"flex-row! w-auto!":j(M)&&l.mode==="horizontal","py-1":l.mode==="vertical"}])},[(r(!0),d(y,null,J(e.menu,a=>{var u,f;return r(),d(y,{key:a.path??JSON.stringify(a)},[((u=a.meta)==null?void 0:u.menu)!==!1?(r(),d(y,{key:0},[(f=a.children)!=null&&f.length?(r(),g(S,{key:0,menu:a,"unique-key":[a.path??JSON.stringify(a)]},null,8,["menu","unique-key"])):(r(),g(P,{key:1,item:a,"unique-key":[a.path??JSON.stringify(a)],onClick:$=>_(a.path??JSON.stringify(a))},null,8,["item","unique-key","onClick"]))],64)):q("",!0)],64)}),128))],2))}});export{L as _};
