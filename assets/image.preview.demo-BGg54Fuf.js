
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as h,G as p,e as r,o as g,M as w,w as o,i as b,h as e,L as v,j as m,_ as x,z as T,f as $,U as y,V as _}from"./index-Co0mQimf.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-B6ktkqNY.js";const I={class:"image-slot"},N=h({name:"ImagePreview",__name:"index",props:{src:{},width:{default:200},height:{default:200}},setup(l){const t=l,c=p(()=>typeof t.width=="string"?t.width:`${t.width}px`),d=p(()=>typeof t.height=="string"?t.height:`${t.height}px`);return(n,i)=>{const s=x,a=r("ElImage");return g(),w(a,{src:n.src,fit:"cover",style:v(`width:${m(c)};height:${m(d)};`),"preview-src-list":[n.src],"preview-teleported":""},{error:o(()=>[b("div",I,[e(s,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}}),S=T(N,[["__scopeId","data-v-43eda62f"]]),C=h({__name:"image.preview.demo",setup(l){const t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.github.io/logo.png"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.github.io/logo.png"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.github.io/logo.png"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.github.io/logo.png"}];return(c,d)=>{const n=E,i=S,s=y,a=r("ElTableColumn"),f=r("ElTable");return g(),$("div",null,[e(n,{title:"图片预览",content:"ImagePreview"}),e(s,null,{default:o(()=>[e(i,{src:"https://fantastic-admin.github.io/logo.png",width:200})]),_:1}),e(s,{title:"图片加载失败时"},{default:o(()=>[e(i,{src:"http://www.baidu.com",width:"100px",height:"100px"})]),_:1}),e(s,{title:"结合 el-table 使用"},{default:o(()=>[e(f,{data:t,style:{width:"100%"}},{default:o(()=>[e(a,{prop:"date",label:"日期",width:"180",fixed:"left"}),e(a,{prop:"name",label:"姓名",width:"180"}),e(a,{prop:"address",label:"地址"}),e(a,{label:"图片"},{default:o(({row:u})=>[e(i,{src:u.src,width:"100px",height:"100px"},null,8,["src"])]),_:1})]),_:1})]),_:1})])}}});typeof _=="function"&&_(C);export{C as default};
