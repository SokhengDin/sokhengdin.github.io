import{k as s}from"./katex.4b08437e.js";import{o as a,c as o,n as i}from"./entry.31efc3c0.js";const l=["innerHTML"],m={__name:"math-render-b",props:{latexExpress:{type:String,require:!0},styles:{type:String,require:!0}},setup(e){function n(r){var t=s.renderToString(r,{throwOnError:!1,displayMode:!0});return t}return(r,t)=>(a(),o("div",{class:i(e.styles),innerHTML:n(e.latexExpress)},null,10,l))}};export{m as default};
