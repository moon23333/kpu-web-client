
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{_ as N}from"./HTooltip.vue_vue_type_script_setup_true_lang-BNHPIkgP.js";import{_ as j}from"./HToggle.vue_vue_type_script_setup_true_lang-h6oE7raC.js";import{_ as q}from"./HTabList.vue_vue_type_script_setup_true_lang-x7An4eMH.js";import{d as y,r as u,o as P,f as z,h as e,i as r,w as l,q as a,j as i,Y as s,_ as U,U as E,W as R,ao as W,p as Y,l as A,z as F}from"./index-Co0mQimf.js";import{_ as G}from"./HSelect.vue_vue_type_script_setup_true_lang-By04T0CU.js";import J from"./HKbd-6i1h_MPh.js";import{_ as O}from"./HInput.vue_vue_type_script_setup_true_lang-BalzpWeR.js";import{_ as Q}from"./HDropdownMenu.vue_vue_type_script_setup_true_lang-BH8wHinj.js";import X from"./HDropdown-DClLxSR2.js";import{_ as Z}from"./HDialog.vue_vue_type_script_setup_true_lang-CfWhSLvX.js";import{_ as h}from"./HCheckList.vue_vue_type_script_setup_true_lang-DFw2n5Jj.js";import{_ as ee}from"./HBadge.vue_vue_type_script_setup_true_lang-CHz_rrGV.js";import{_ as le}from"./index.vue_vue_type_script_setup_true_lang-B6ktkqNY.js";import"./use-resolve-button-type-CRuKX3TB.js";const te=m=>(Y("data-v-303d96b2"),m=m(),A(),m),oe={class:"flex flex-col flex-wrap gap-4 px-4 lg-flex-row"},ne={class:"flex-center"},ae=te(()=>r("div",{class:"h-30 w-60 flex items-center justify-center"}," 下拉内容 ",-1)),ie={class:"flex-center"},se=y({__name:"index",setup(m){const c=u(1),f=u(!1),v=u(""),b=u(1),p=u(!1),V=u(1),d=u(!1);return(ue,t)=>{const I=le,g=U,$=ee,n=E,_=R,S=h,k=Z,x=U,B=X,C=Q,T=O,H=J,D=G,L=W,K=q,w=j,M=N;return P(),z("div",null,[e(I,{title:"内建组件",content:"内建组件仅服务于框架自身，不建议在业务页面内使用，业务页面内请使用专业的 UI 组件库。"}),r("div",oe,[e(n,{title:"Badge"},{default:l(()=>[e($,{value:!0},{default:l(()=>[e(g,{name:"i-ri:notification-3-line"})]),_:1}),e($,{value:99},{default:l(()=>[e(g,{name:"i-ri:notification-3-line"})]),_:1}),e($,{value:"噢"},{default:l(()=>[e(g,{name:"i-ri:notification-3-line"})]),_:1})]),_:1}),e(n,{title:"Button"},{default:l(()=>[e(_,null,{default:l(()=>[a(" 按钮 ")]),_:1}),e(_,{outline:""},{default:l(()=>[a(" 按钮 ")]),_:1}),e(_,{disabled:""},{default:l(()=>[a(" 按钮 ")]),_:1}),e(_,{disabled:"",outline:""},{default:l(()=>[a(" 按钮 ")]),_:1})]),_:1}),e(n,{title:"CheckList"},{default:l(()=>[e(S,{modelValue:i(c),"onUpdate:modelValue":t[0]||(t[0]=o=>s(c)?c.value=o:null),options:[{label:"选项1",value:1},{label:"选项2",value:2,disabled:!0},{label:"选项3",value:3}]},null,8,["modelValue"])]),_:1}),e(n,{title:"Dialog"},{default:l(()=>[e(_,{onClick:t[1]||(t[1]=o=>f.value=!0)},{default:l(()=>[a(" 打开 ")]),_:1}),e(k,{modelValue:i(f),"onUpdate:modelValue":t[2]||(t[2]=o=>s(f)?f.value=o:null),title:"标题"},{default:l(()=>[a(" 这里是 dialog 内容 ")]),_:1},8,["modelValue"])]),_:1}),e(n,{title:"Dropdown"},{default:l(()=>[e(B,null,{dropdown:l(()=>[ae]),default:l(()=>[r("div",ne,[a(" 下拉面板 "),e(x,{name:"i-ep:caret-bottom"})])]),_:1})]),_:1}),e(n,{title:"DropdownMenu"},{default:l(()=>[e(C,{items:[[{label:"菜单1-1"},{label:"菜单1-2"},{label:"菜单1-3"}],[{label:"菜单2"}]]},{default:l(()=>[r("div",ie,[a(" 下拉菜单 "),e(x,{name:"i-ep:caret-bottom"})])]),_:1})]),_:1}),e(n,{title:"Input"},{default:l(()=>[e(T,{modelValue:i(v),"onUpdate:modelValue":t[3]||(t[3]=o=>s(v)?v.value=o:null)},null,8,["modelValue"])]),_:1}),e(n,{title:"Kbd"},{default:l(()=>[e(H,null,{default:l(()=>[a("Ctrl")]),_:1}),e(H,null,{default:l(()=>[a("⌘ K")]),_:1})]),_:1}),e(n,{title:"Select"},{default:l(()=>[e(D,{modelValue:i(b),"onUpdate:modelValue":t[4]||(t[4]=o=>s(b)?b.value=o:null),options:[{label:"选项1",value:1},{label:"选项2",value:2,disabled:!0},{label:"选项3",value:3}]},null,8,["modelValue"])]),_:1}),e(n,{title:"Slideover"},{default:l(()=>[e(_,{onClick:t[5]||(t[5]=o=>p.value=!0)},{default:l(()=>[a(" 打开 ")]),_:1}),e(L,{modelValue:i(p),"onUpdate:modelValue":t[6]||(t[6]=o=>s(p)?p.value=o:null),title:"标题",overlay:!1},{default:l(()=>[a(" 这里是 slideover 内容 ")]),_:1},8,["modelValue"])]),_:1}),e(n,{title:"TabList"},{default:l(()=>[e(K,{modelValue:i(V),"onUpdate:modelValue":t[7]||(t[7]=o=>s(V)?V.value=o:null),options:[{label:"标签1",value:1},{label:"标签2",value:2},{label:"标签3",value:3}]},null,8,["modelValue"])]),_:1}),e(n,{title:"Toggle"},{default:l(()=>[e(w,{modelValue:i(d),"onUpdate:modelValue":t[8]||(t[8]=o=>s(d)?d.value=o:null)},null,8,["modelValue"]),e(w,{modelValue:i(d),"onUpdate:modelValue":t[9]||(t[9]=o=>s(d)?d.value=o:null),"on-icon":"ri:sun-line","off-icon":"ri:moon-line"},null,8,["modelValue"])]),_:1}),e(n,{title:"Tooltip"},{default:l(()=>[e(M,{text:"注意噢！"},{default:l(()=>[e(x,{name:"i-ri:question-line"})]),_:1})]),_:1})])])}}}),we=F(se,[["__scopeId","data-v-303d96b2"]]);export{we as default};
