import s from"./ContentSlot.ea3e7eee.js";import{j as o,m,y as p,H as u}from"./entry.f3860a52.js";import"./utils.1002f9a1.js";import"./preview.19b7eca9.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};
