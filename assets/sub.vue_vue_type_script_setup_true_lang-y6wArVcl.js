
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as K,a8 as w,aF as T,G as f,e as I,o as d,f as c,h as x,j as t,M as m,w as H,ag as S,K as F,O as g,X as _,N as h,a2 as $,a_ as N,T as O,at as L,P as b,a3 as A}from"./index-Co0mQimf.js";import{r as W,I as j}from"./item-CFXLGlMH.js";const V=K({name:"SubMenu",__name:"sub",props:{uniqueKey:{},menu:{},level:{default:0}},setup(k){const i=k,p=i.menu.path??JSON.stringify(i.menu),y=w(),o=w(),n=T(W),v=f(()=>n.openedMenus.includes(i.uniqueKey.at(-1))),M=f(()=>n.alwaysOpenedsMenus.includes(i.uniqueKey.at(-1))),P=f(()=>n.isMenuPopup?{enter(e){e.offsetHeight>window.innerHeight&&(e.style.height=`${window.innerHeight}px`)},afterEnter:()=>{},beforeLeave:e=>{e.style.overflow="hidden",e.style.maxHeight=`${e.offsetHeight}px`},leave:e=>{e.style.maxHeight="0"},afterLeave(e){e.style.overflow="",e.style.maxHeight=""}}:{enter(e){const s=e.offsetHeight;e.style.maxHeight="0",e.style.overflow="hidden",e.offsetHeight,e.style.maxHeight=`${s}px`},afterEnter(e){e.style.overflow="",e.style.maxHeight=""},beforeLeave(e){e.style.overflow="hidden",e.style.maxHeight=`${e.offsetHeight}px`},leave(e){e.style.maxHeight="0"},afterLeave(e){e.style.overflow="",e.style.maxHeight=""}}),q=f(()=>n.isMenuPopup?{enterActiveClass:"ease-in-out duration-300",enterFromClass:"opacity-0 translate-x-4",enterToClass:"opacity-100",leaveActiveClass:"ease-in-out duration-300",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}:{enterActiveClass:"ease-in-out duration-300",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in-out duration-300",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}),l=f(()=>{let e=!0;return i.menu.children?i.menu.children.every(s=>{var u;return((u=s.meta)==null?void 0:u.menu)===!1})&&(e=!1):e=!1,e});function R(){M.value||n.isMenuPopup&&l.value||(l.value?n.handleSubMenuClick(p,i.uniqueKey):n.handleMenuItemClick(p))}let a;function E(){n.isMenuPopup&&(n.mouseInMenu=i.uniqueKey,a==null||a(),{stop:a}=b(()=>{if(l.value)n.openMenu(p,i.uniqueKey),A(()=>{const e=y.value.ref;let s=0,u=0;n.props.mode==="vertical"||i.level!==0?(s=e.getBoundingClientRect().top+e.scrollTop,u=(n.props.direction==="ltr"?e.getBoundingClientRect().left:document.documentElement.clientWidth-e.getBoundingClientRect().right)+e.getBoundingClientRect().width,s+o.value.getElement().offsetHeight>window.innerHeight&&(s=window.innerHeight-o.value.getElement().offsetHeight)):(s=e.getBoundingClientRect().top+e.getBoundingClientRect().height,u=n.props.direction==="ltr"?e.getBoundingClientRect().left:document.documentElement.clientWidth-e.getBoundingClientRect().right,s+o.value.getElement().offsetHeight>window.innerHeight&&(o.value.getElement().style.height=`${window.innerHeight-s}px`)),u+o.value.getElement().offsetWidth>document.documentElement.clientWidth&&(u=e.getBoundingClientRect().left-e.getBoundingClientRect().width),o.value.getElement().style.top=`${s}px`,o.value.getElement().style.insetInlineStart=`${u}px`});else{const e=i.menu.children?n.subMenus[p].indexPath.at(-1):n.items[p].indexPath.at(-1);n.openMenu(e,n.subMenus[e].indexPath)}},300))}function B(){n.isMenuPopup&&(n.mouseInMenu=[],a==null||a(),{stop:a}=b(()=>{n.mouseInMenu.length===0?n.closeMenu(i.uniqueKey):l.value&&!n.mouseInMenu.includes(i.uniqueKey.at(-1))&&n.closeMenu(i.uniqueKey.at(-1))},300))}return(e,s)=>{const u=I("SubMenu");return d(),c(g,null,[x(j,{ref_key:"itemRef",ref:y,"unique-key":e.uniqueKey,item:e.menu,level:e.level,"sub-menu":t(l),expand:t(v),"always-expand":t(M),onClick:R,onMouseenter:E,onMouseleave:B},null,8,["unique-key","item","level","sub-menu","expand","always-expand"]),t(l)?(d(),m(L,{key:0,to:"body",disabled:!t(n).isMenuPopup},[x(O,$(t(q),N(t(P))),{default:H(()=>[t(v)?(d(),m(t(S),{key:0,ref_key:"subMenuRef",ref:o,options:{scrollbars:{visibility:"hidden"}},defer:"",class:F(["sub-menu",{"bg-[var(--g-sub-sidebar-bg)]":t(n).isMenuPopup,"ring-1 ring-stone-2 dark-ring-stone-8 shadow-xl fixed z-3000 w-[200px]":t(n).isMenuPopup,"mx-1":t(n).isMenuPopup&&(t(n).props.mode==="vertical"||e.level!==0),"py-1":t(n).isMenuPopup,"rounded-lg":t(n).props.rounded}])},{default:H(()=>[(d(!0),c(g,null,_(e.menu.children,r=>{var C;return d(),c(g,{key:r.path??JSON.stringify(r)},[((C=r.meta)==null?void 0:C.menu)!==!1?(d(),m(u,{key:0,"unique-key":[...e.uniqueKey,r.path??JSON.stringify(r)],menu:r,level:e.level+1},null,8,["unique-key","menu","level"])):h("",!0)],64)}),128))]),_:1},8,["class"])):h("",!0)]),_:1},16)],8,["disabled"])):h("",!0)],64)}}});export{V as _};
