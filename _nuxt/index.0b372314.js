import{T as p}from"./components.58cb8c76.js";import{_ as u}from"./nuxt-link.ef0cbb40.js";import{u as h,q as f}from"./query.55c05523.js";import{h as g,c as o,b as a,w as r,a as t,F as c,D as w,i as b,o as n,d as l,t as d}from"./entry.90095778.js";import"./preview.bc351a62.js";import"./utils.a46da053.js";const y=t("div",{class:"font-bold mx-20 p-5 mb-10 bg-slate-500 text-white font-sans rounded-2xl text-center text-2xl"},[t("h1",null,"Dicussion Topics")],-1),D={class:"ml-10 mr-10 justify-center grid grid-cols-3 gap-5 bg-white rounded-2xl text-center -sm:flex -sm:flex-col -md:flex -md:flex-col"},T={class:"ring-2 ring-black max-w-[800px] min-h-[400px] rounded-2xl"},k={class:"font-bold rounded-2xl"},v={class:"mx-auto items-center max-w-[400px] max-h-[200px]"},N=["src"],E={__name:"index",async setup(B){let e,i;const{data:_}=([e,i]=g(()=>h("topics/ai",()=>f("/topics/ai/").find())),e=await e,i(),e);return(C,V)=>{const m=p,x=u;return n(),o(c,null,[a(m,null,{default:r(()=>[l("Dicussion Topics - Sokheng Din")]),_:1}),y,t("div",D,[(n(!0),o(c,null,w(b(_),s=>(n(),o("div",T,[t("h1",k,d(s.title),1),t("h2",null,d(s.description),1),t("div",v,[t("img",{class:"my-10 w-[400px] h-[200px] rounded-2xl ring-2",src:s.img},null,8,N)]),a(x,{class:"font-bold hover:text-red-500",to:s._path},{default:r(()=>[l("Read More")]),_:2},1032,["to"])]))),256))])],64)}}};export{E as default};
