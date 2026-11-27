import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{a as r,c as i}from"./siteTypes-D3fb0A_M.js";import{a,m as o,t as s}from"./tileAssets-CS6oizWP.js";import{p as c}from"./mapScale-LUmBdn6N.js";import{a as l,n as u}from"./tileMaterials-DGmbh-7n.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{d=t(),i(),c(),a(),u(),f=n(),p=r,m=[`statue`,`shrine`,`wallShrine`,`stela`,`mask`],h=new Set([`wallShrine`,`stela`,`mask`]),g=32,_=e=>{let[t,n]=(0,d.useState)(void 0);return(0,d.useEffect)(()=>{if(!e)return;let t=!0,r=new Image;return r.onload=()=>{let e=document.createElement(`canvas`);e.width=r.naturalWidth,e.height=r.naturalHeight;let i=e.getContext(`2d`);if(!i||!t)return;i.drawImage(r,0,0);let{data:a}=i.getImageData(0,0,e.width,e.height),o=new Set;for(let e=0;e<a.length;e+=4)a[e+3]>=128&&o.add(a[e]<<16|a[e+1]<<8|a[e+2]);t&&n(o.size)},r.src=e,()=>{t=!1}},[e]),t},v=({tier:e,kind:t,patron:n,zoom:r})=>{let i=l[e],a=o(e,`${t}-${n}`),c=o(e,t),u=a??c,d=_(u),p=d===void 0||d>=g,m=u?a?p?`art`:`placeholder`:p?`generic`:`placeholder`:`none`,v=h.has(t),y=o(e,`floor`),b=o(e,`wall-face`),x=84*r;return(0,f.jsxs)(`figure`,{className:`m-0 flex flex-col items-center gap-0.5`,children:[(0,f.jsxs)(`div`,{className:`relative overflow-hidden`,style:{width:56*r,height:(28+56*1.15)*r,background:i.slab},children:[(0,f.jsx)(`div`,{className:`absolute inset-x-0 top-0`,style:{height:28*r,background:b?`url(${b})`:i.wall,backgroundSize:`${448*r}px ${28*r}px`,imageRendering:s}}),(0,f.jsx)(`div`,{className:`absolute inset-x-0 bottom-0`,style:{height:56*1.15*r,background:y?`url(${y})`:i.slab,backgroundSize:`${448*r}px ${448*r}px`,imageRendering:s}}),u&&(0,f.jsx)(`img`,{src:u,alt:`${t}-${n}`,className:`absolute`,style:{left:0,top:v?0:x-84*r,width:56*r,height:(v?28:84)*r,opacity:a?1:.45,imageRendering:`auto`}}),m===`none`&&(0,f.jsx)(`span`,{className:`absolute inset-0 flex items-center justify-center text-[10px] text-white/50`,children:`(none)`}),m===`placeholder`&&(0,f.jsx)(`span`,{className:`absolute inset-0 flex items-center justify-center text-[10px] text-amber-300/70`,children:`placeholder`})]}),(0,f.jsx)(`figcaption`,{className:`text-[9px] text-white/45`,children:m===`art`?t:m===`generic`?`${t} · generic`:`${t} · nothing drawn`})]})},y=({tier:e,zoom:t})=>{let n=p.flatMap(t=>m.filter(n=>o(e,`${n}-${t}`))).length;return(0,f.jsxs)(`div`,{className:`flex h-screen flex-col overflow-auto bg-neutral-900 p-4 text-white`,children:[(0,f.jsxs)(`h1`,{className:`mb-1 text-sm`,children:[`Patrons · `,e,` · `,n,` of `,p.length*m.length,` drawn`]}),(0,f.jsxs)(`p`,{className:`mb-4 max-w-3xl text-[11px] text-white/50`,children:[`Reads `,(0,f.jsx)(`code`,{children:`<kind>-<patron>.png`}),` from this rank’s folder. Dimmed cells are the generic kind standing in, not a patron; `,(0,f.jsx)(`span`,{className:`text-amber-300/70`,children:`placeholder`}),` means even the generic is a dummy, so there is nothing to stand in. The resolver that would prefer the patron file is still unbuilt, so nothing in the game reads these yet.`]}),(0,f.jsx)(`div`,{className:`flex flex-col gap-4`,children:p.map(n=>(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`h2`,{className:`mb-1 text-xs text-white/70 capitalize`,children:n}),(0,f.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:m.map(r=>(0,f.jsx)(v,{tier:e,kind:r,patron:n,zoom:t},r))})]},n))})]})},b={component:y,parameters:{layout:`fullscreen`},argTypes:{tier:{control:`select`,options:[`starter`,`junior`,`expert`,`master`,`wizard`]},zoom:{control:{type:`range`,min:1,max:6,step:1}}},args:{tier:`expert`,zoom:3}},x={args:{zoom:1}},S={args:{tier:`expert`,zoom:3}},C={args:{tier:`starter`,zoom:3}},w={args:{tier:`junior`,zoom:3}},T={args:{tier:`master`,zoom:3}},E={args:{tier:`wizard`,zoom:3}},D=[`AtMapScale`,`Priest`,`Merchant`,`Nobleman`,`Pharaoh`,`Gods`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    zoom: 1
  }
}`,...x.parameters?.docs?.source},description:{story:`At map scale, which is the only size that decides whether a god is identifiable.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "expert",
    zoom: 3
  }
}`,...S.parameters?.docs?.source},description:{story:`The priest first: his rank is the one whose statue is drawn, so it is the only row with a real
patron in it today.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "starter",
    zoom: 3
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "junior",
    zoom: 3
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "master",
    zoom: 3
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "wizard",
    zoom: 3
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{x as AtMapScale,E as Gods,C as Merchant,w as Nobleman,T as Pharaoh,S as Priest,D as __namedExportsOrder,b as default};