import{_ as q}from"./nuxt-link.3ec1a235.js";import{j as y,k as R,l as w,m as B,n as b,q as E,r as O,s as j,v,x as W,y as S,u as T,z as U,A as k,h as D,c as F,a as f,t as C,i as z,b as _,w as I,f as H,o as V,d as $}from"./entry.85c1f22b.js";import{d as A}from"./defu.573334b8.js";import{u as Z,q as G}from"./query.2bdd1757.js";import"./preview.2245ce47.js";import"./utils.1948faee.js";async function J(e,t){return await Q(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function Q(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>s(o),i.src=e})}function M(e){return t=>t?e[t]||t:e.missingValue}function X({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(r,n)=>`${r}=${n}`),t&&typeof t!="function"&&(t=M(t));const o=i||{};return Object.keys(o).forEach(r=>{typeof o[r]!="function"&&(o[r]=M(o[r]))}),(r={})=>Object.entries(r).filter(([d,l])=>typeof l<"u").map(([d,l])=>{const g=o[d];return typeof g=="function"&&(l=g(r[d])),d=typeof t=="function"?t(d):d,e(d,l)}).join(s)}function p(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Y(e){const t={options:e},s=(o,r={})=>N(t,o,r),i=(o,r={},n={})=>s(o,{...n,modifiers:A(r,n.modifiers||{})}).url;for(const o in e.presets)i[o]=(r,n,d)=>i(r,n,{...e.presets[o],...d});return i.options=e,i.getImage=s,i.getMeta=(o,r)=>K(t,o,r),i.getSizes=(o,r)=>ie(t,o,r),t.$img=i,i}async function K(e,t,s){const i=N(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await J(e,i.url)}function N(e,t,s){var g,m;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=ee(e,s.provider||e.options.provider),r=te(e,s.preset);if(t=y(t)?t:R(t),!i.supportsAlias)for(const c in e.options.alias)t.startsWith(c)&&(t=w(e.options.alias[c],t.substr(c.length)));if(i.validateDomains&&y(t)){const c=B(t).host;if(!e.options.domains.find(u=>u===c))return{url:t}}const n=A(s,r,o);n.modifiers={...n.modifiers};const d=n.modifiers.format;(g=n.modifiers)!=null&&g.width&&(n.modifiers.width=p(n.modifiers.width)),(m=n.modifiers)!=null&&m.height&&(n.modifiers.height=p(n.modifiers.height));const l=i.getImage(t,n,e);return l.format=l.format||d||"",l}function ee(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function te(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ie(e,t,s){var g,m;const i=p((g=s.modifiers)==null?void 0:g.width),o=p((m=s.modifiers)==null?void 0:m.height),r=i&&o?o/i:0,n=[],d={};if(typeof s.sizes=="string")for(const c of s.sizes.split(/[\s,]+/).filter(u=>u)){const u=c.split(":");u.length===2&&(d[u[0].trim()]=u[1].trim())}else Object.assign(d,s.sizes);for(const c in d){const u=e.options.screens&&e.options.screens[c]||parseInt(c);let a=String(d[c]);const h=a.endsWith("vw");if(!h&&/^\d+$/.test(a)&&(a=a+"px"),!h&&!a.endsWith("px"))continue;let x=parseInt(a);if(!u||!x)continue;h&&(x=Math.round(x/100*u));const L=r?Math.round(x*r):o;n.push({width:x,size:a,screenMaxWidth:u,media:`(max-width: ${u}px)`,src:e.$img(t,{...s.modifiers,width:x,height:L},s)})}n.sort((c,u)=>c.screenMaxWidth-u.screenMaxWidth);const l=n[n.length-1];return l&&(l.media=""),{sizes:n.map(c=>`${c.media?c.media+" ":""}${c.size}`).join(", "),srcset:n.map(c=>`${c.src} ${c.width}w`).join(", "),src:l==null?void 0:l.src}}const se=X({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>b(e)+"_"+b(t)}),oe=(e,{modifiers:t={},baseURL:s}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=se(t)||"_";return s||(s=w(i.options.nuxt.baseURL,"/_ipx")),{url:w(s,o,E(e))}},re=!0,ne=!0,ae=Object.freeze(Object.defineProperty({__proto__:null,getImage:oe,supportsAlias:ne,validateDomains:re},Symbol.toStringTag,{value:"Module"})),P={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};P.providers={ipx:{provider:ae,defaults:void 0}};const de=()=>{const e=O(),t=j();return t.$img||t._img||(t._img=Y({...P,nuxt:{baseURL:e.app.baseURL}}))},ce={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},le=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),s=v(()=>({width:p(e.width),height:p(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=v(()=>({...e.modifiers,width:p(e.width),height:p(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:i}},ue={...ce,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},me=W({name:"NuxtImg",props:ue,emits:["load","error"],setup:(e,t)=>{const s=de(),i=le(e),o=S(!1),r=v(()=>s.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:p(e.width),height:p(e.height)}})),n=v(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return e.sizes&&(a.sizes=r.value.sizes,a.srcset=r.value.srcset),a}),d=v(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||o.value)return!1;if(typeof a=="string")return a;const h=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return s(e.src,{...i.modifiers.value,width:h[0],height:h[1],quality:h[2]||50},i.options.value)}),l=v(()=>e.sizes?r.value.src:s(e.src,i.modifiers.value,i.options.value)),g=v(()=>d.value?d.value:l.value);if(e.preload){const a=Object.values(r.value).every(h=>h);T({link:[{rel:"preload",as:"image",...a?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:g.value}}]})}const m=S(),u=j().isHydrating;return U(()=>{if(d.value){const a=new Image;a.src=l.value,a.onload=h=>{m.value&&(m.value.src=l.value),o.value=!0,t.emit("load",h)};return}m.value&&(m.value.complete&&u&&(m.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),m.value.onload=a=>{t.emit("load",a)},m.value.onerror=a=>{t.emit("error",a)})}),()=>k("img",{ref:m,key:g.value,src:g.value,...n.value,...t.attrs})}}),fe=""+globalThis.__publicAssetsURL("activities/robocon23/itc-01-1.jpg"),ge={class:"grid grid-flow-row gap-10 overflow-x -sm:flex -sm:flex-col -sm:scale-95 -sm:gap-5 -md:gap-6 -lg:gap-8 -xl:gap-10 -2xl:gap-10"},he={class:"mx-20 rounded-2xl ring-2 ring-blue-500 grid grid-cols-2 -sm:flex -sm:flex-col -md:flex -md:flex-col",role:"status"},pe={class:"my-10 p-5 -sm:text-center -md:text-center"},ve=f("span",{class:"font-bold text-2xl sm:text-xl"}," Latest Activity ",-1),xe={class:"font-bold rounded-2xl"},_e=f("div",{class:"px-5 mx-auto my-5 -sm:max-w-sm -md:max-w-md"},[f("img",{class:"rounded-2xl ring-2",src:fe})],-1),we={class:"mx-20 grid grid-cols-2 gap-7 font-sans -sm:flex -sm:flex-col -sm:scale-95 min-h-[500px]"},ye={class:"col-start-1 col-end-2 rounded-2xl ring-2 ring-slate-600 text-center -sm:min-h-[400px] -md:min-h-[400px]"},be=f("span",{class:"font-bold text-2xl sm:text-xl"}," Latest Topics ",-1),Se={class:"p-5 -sm:text-center -md:text-center"},Ce=f("h1",{class:"font-bold rounded-2xl"},"Nonlinear Model Predictive Control",-1),ze=f("h2",null,"Introduction to Nonlinear Model Predictive Control",-1),Ie={class:"px-5 mx-auto my-5 -sm:max-w-sm -md:max-w-md"},$e=H('<div class="col-start-2 col-end-3 rounded-2xl ring-2 ring-slate-600 text-center -sm:min-h-[400px] -md:min-h-[400px]"><span class="font-bold text-2xl sm:text-xl"> Latest Project </span><svg aria-hidden="true" class="w-8 h-8 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg><span class="sr-only">Coming Soon...</span><span>Coming Soon...</span></div>',1),qe={__name:"index",async setup(e){let t,s;const{data:i}=([t,s]=D(()=>Z("activities/",()=>G("/activities/").where({slug:"abu-robocon2023-itc01"}).findOne())),t=await t,s(),t);return(o,r)=>{const n=q,d=me;return V(),F("div",ge,[f("div",he,[f("div",pe,[ve,f("h1",xe,C(z(i).title),1),f("h2",null,C(z(i).description),1),_(n,{class:"font-bold hover:text-red-500",to:"activities/abu-robocon2023-itc01"},{default:I(()=>[$("Read More")]),_:1})]),_e]),f("div",we,[f("div",ye,[be,f("div",Se,[Ce,ze,_(n,{class:"font-bold hover:text-red-500",to:"topics/robotics/nonlinear-mpc"},{default:I(()=>[$("Read More")]),_:1})]),f("div",Ie,[_(d,{class:"rounded-2xl ring-2",src:"/topics/robotics/nmpc/predict_horizon.png",width:"600px",height:"300px"})])]),$e])])}}};export{qe as default};
