import{T as y}from"./components.1d1cca5e.js";import{_ as T}from"./nuxt-link.9b77eac7.js";import{u as d,q as x}from"./query.55f84e89.js";import{j as D,h as p,k as C,c as a,b as u,w as _,a as t,n as m,F as N,r as j,o as c,d as f,t as h}from"./entry.6762576a.js";import"./preview.6650b5d4.js";import"./utils.88798a8e.js";const A=t("div",{class:"font-bold mx-20 p-5 mb-10 bg-slate-500 text-white font-sans rounded-2xl text-center text-2xl"},[t("h1",null,"Discussion Topics")],-1),B={class:"flex justify-center mb-10"},V={class:"inline-flex space-x-5 font-sans"},q=t("span",{class:"text-[18px]"},"AI",-1),F=[q],L=t("span",{class:"text-[18px]"},"Robotics",-1),R=[L],S={class:"ml-10 mr-10 justify-center grid grid-cols-3 gap-5 bg-white rounded-2xl text-center -sm:flex -sm:flex-col -md:flex -md:flex-col"},$={class:"font-bold rounded-2xl"},z={class:"mx-auto items-center max-w-[400px] max-h-[200px]"},E=["src"],P={__name:"index",async setup(I){let e,n;const o=D("robotics"),{data:b}=([e,n]=p(()=>d("topics/robotics",()=>x("/topics/robotics/").find())),e=await e,n(),e),{data:g}=([e,n]=p(()=>d("topics/ai",()=>x("/topics/ai/").find())),e=await e,n(),e),v=C(()=>o.value==="ai"?g.value:o.value==="robotics"?b.value:[]),l=r=>{o.value=r};return(r,i)=>{const w=y,k=T;return c(),a("div",null,[u(w,null,{default:_(()=>[f("Dicussion Topics - Sokheng Din")]),_:1}),A,t("div",B,[t("div",V,[t("div",{class:m(["p-3 w-[100px] ring-2 ring-black rounded-2xl text-center hover:bg-slate-300",{"bg-slate-300":o.value==="ai"}]),onClick:i[0]||(i[0]=s=>l("ai"))},F,2),t("div",{class:m(["p-3 w-[100px] ring-2 ring-black rounded-2xl text-center hover:bg-slate-300",{"bg-slate-300":o.value==="robotics"}]),onClick:i[1]||(i[1]=s=>l("robotics"))},R,2)])]),t("div",S,[(c(!0),a(N,null,j(v.value,s=>(c(),a("div",{class:"ring-2 ring-black max-w-[800px] min-h-[400px] rounded-2xl",key:s.id},[t("h1",$,h(s.title),1),t("h2",null,h(s.description),1),t("div",z,[t("img",{class:"my-10 w-[400px] h-[200px] rounded-2xl ring-2",src:s.img},null,8,E)]),u(k,{class:"font-bold hover:text-red-500",to:s._path},{default:_(()=>[f("Read More")]),_:2},1032,["to"])]))),128))])])}}};export{P as default};
