import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-D0Egwrw_.js";import{et as r,rt as i}from"./siteAssembler-Cknp97hv.js";import{n as a,t as o}from"./SiteMapView-EHzijMOG.js";import{c as s,l as c,m as l,p as u,s as d,u as f}from"./passageArt-CYtm0gkL.js";import{t as p}from"./registerModApps-BpIKPGw-.js";import{c as m,s as h}from"./floorFixtures.testing-Dp9Bh0E7.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{g=t(),r(),m(),u(),a(),c(),p(),_=n(),v=900,y=e=>({type:`room`,roomType:`encounter`,dirs:new Set(e),state:`fogged`,tags:[`gate`],requiredKeyId:`crack`,passage:{realisation:`narrowPassage`}}),b=[`  E  `,`  .  `,`  P  `,`  .  `,`  R  `],x=[`     `,`     `,`E.P.R`,`     `,`     `],S={s:{rows:b,from:[1,2],via:[2,2],to:[3,2]},n:{rows:b,from:[3,2],via:[2,2],to:[1,2]},e:{rows:x,from:[2,1],via:[2,2],to:[2,3]},w:{rows:x,from:[2,3],via:[2,2],to:[2,1]}},C=e=>new Promise(t=>setTimeout(t,e)),w=({travel:e})=>{let{rows:t,from:n,via:r,to:a}=S[e],[c]=(0,g.useState)(()=>i(h(t,{P:e=>y(e)}))),[u]=(0,g.useState)(l),{squeeze:p,playTraversal:m}=f({reducedMotion:u}),[b,x]=(0,g.useState)(n),[w,T]=(0,g.useState)(0),[E,D]=(0,g.useState)(0);(0,g.useEffect)(()=>{let t=!0;return(async()=>{for(x(n),await C(v);t;){if(await m({kind:`narrowPassage`,from:n,via:r,to:a,dir:e}),!t||(x(a),D(e=>e+1),await C(v),!t))return;x(n),await C(v)}})(),()=>{t=!1}},[w,m,e,n,r,a]);let O=e===`n`||e===`s`;return(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 p-2 text-sm`,children:[(0,_.jsx)(`button`,{type:`button`,disabled:!!p,onClick:()=>T(e=>e+1),children:`Squeeze`}),(0,_.jsxs)(`span`,{"data-timing":``,children:[O?`head-on: one slide in the wall's cell, 700 ms`:`sideways, behind the wall: ${s} ms per leg, ${d} ms in all`,`, then `,v,` ms pauses`]}),(0,_.jsx)(`span`,{children:u?`reduced motion: the crossing is at once`:`squeezed ${E} times`})]}),(0,_.jsx)(o,{grid:c,explorerPos:b,explorerHidden:!!p,squeeze:p,className:O?`h-160 w-full`:`h-104 w-full`})]})},T={title:`Topology/Squeeze`,component:w,parameters:{layout:`fullscreen`},decorators:[e=>(0,_.jsx)(g.StrictMode,{children:(0,_.jsx)(e,{})})]},E={args:{travel:`n`}},D={args:{travel:`s`}},O={args:{travel:`e`}},k={args:{travel:`w`}},A=[`North`,`South`,`East`,`West`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    travel: "n"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    travel: "s"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    travel: "e"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    travel: "w"
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{O as East,E as North,D as South,k as West,A as __namedExportsOrder,T as default};