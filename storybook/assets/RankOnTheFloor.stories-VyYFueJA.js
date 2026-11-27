import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{d as n,l as r,u as i}from"./siteAssembler-CNzpvYB2.js";import{c as a,o,t as s}from"./siteTypes-D3fb0A_M.js";import{r as c,t as l}from"./difficultyLevels-BkVSS0JK.js";import{a as u,m as d}from"./tileAssets-CS6oizWP.js";import{n as f,t as p}from"./SiteMapView-BA5G55ph.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{c(),n(),a(),f(),u(),m=t(),h=e=>e?.[0]??`filler`,g=e=>{let t=new Map,n=new Map,a=(e,t,n)=>e.set(t,[...e.get(t)??[],n]);for(let n of s)n!==`chestProp`&&d(e,n)&&a(t,h(r[n]),n);for(let t of o)d(e,t)&&a(n,h(i[t]),t);return[...new Set([...t.keys(),...n.keys()])].sort().map(e=>{let r=t.get(e)??[],i=n.get(e)??[];return{name:e,rooms:Array.from({length:Math.max(r.length,i.length)},(e,t)=>({prop:r[t],wall:i[t]}))}})},_=[{name:`bare`,rooms:[{},{},{},{}]}],v=4,y=2,b=(e,t)=>{let n=e===`cave`||e===`sphinx`?`starter`:e,r=Math.max(1,...t.map(e=>e.rooms.length)),i=4+(t.length-1)*v+1,a=4+(r-1)*v+1,o=Array.from({length:i},()=>Array.from({length:a},()=>({type:`empty`}))),s=(e,t,n)=>{o[e][t]={type:`corridor`,dirs:new Set(n),state:`reachable`}};t.forEach((e,r)=>{let i=y+r*v;e.rooms.forEach((a,c)=>{let l=y+c*v,u=[];if(c>0&&u.push(`w`),c<e.rooms.length-1&&u.push(`e`),c===0&&r>0&&u.push(`n`),c===0&&r<t.length-1&&u.push(`s`),o[i][l]={type:`room`,roomType:`fork`,dirs:new Set(u),state:`reachable`,difficulty:n,...a.prop?{decoration:a.prop}:{},...a.wall?{wallDecoration:a.wall}:{}},c<e.rooms.length-1)for(let e=1;e<v;e++)s(i,l+e,[`e`,`w`]);if(c===0&&r<t.length-1)for(let e=1;e<v;e++)s(i+e,l,[`n`,`s`])})});let c=t.length-1;return{siteId:`${e}-on-the-floor`,difficulty:n,...e===`cave`||e===`sphinx`?{tileset:e}:{},rows:i,cols:a,cells:o,entrancePos:[y,y],exitPos:[y+c*v,y+Math.max(0,(t[c]?.rooms.length??1)-1)*v],staircases:{}}},x=[...l,`cave`,`sphinx`],S=({tier:e})=>{let t=g(e),n=t.length>0?t:_;return(0,m.jsxs)(`div`,{className:`flex h-screen flex-col bg-neutral-900`,children:[(0,m.jsx)(`ol`,{className:`m-0 flex flex-wrap gap-x-6 gap-y-1 p-3 text-[11px] text-white/70`,children:t.map(e=>(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`span`,{className:`text-white`,children:e.name}),`:`,` `,e.rooms.map(e=>[e.prop,e.wall].filter(Boolean).join(` + `)).join(` · `)]},e.name))}),t.length===0&&(0,m.jsxs)(`p`,{className:`m-0 px-3 text-sm text-white/60`,children:[e,` has no prop art yet.`]}),(0,m.jsx)(p,{grid:b(e,n),className:`min-h-0 flex-1`})]})},C={component:S,parameters:{layout:`fullscreen`},argTypes:{tier:{control:`select`,options:x}},args:{tier:`starter`}},w={name:`starter on the floor`,args:{tier:`starter`}},T={name:`junior on the floor`,args:{tier:`junior`}},E={name:`expert on the floor`,args:{tier:`expert`}},D={name:`master on the floor`,args:{tier:`master`}},O={name:`wizard on the floor`,args:{tier:`wizard`}},k={name:`cave on the floor`,args:{tier:`cave`}},A={name:`sphinx on the floor`,args:{tier:`sphinx`}},j=[`Starter`,`Junior`,`Expert`,`Master`,`Wizard`,`Cave`,`Sphinx`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "starter on the floor",
  args: {
    tier: "starter"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "junior on the floor",
  args: {
    tier: "junior"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "expert on the floor",
  args: {
    tier: "expert"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "master on the floor",
  args: {
    tier: "master"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "wizard on the floor",
  args: {
    tier: "wizard"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "cave on the floor",
  args: {
    tier: "cave"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "sphinx on the floor",
  args: {
    tier: "sphinx"
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{k as Cave,E as Expert,T as Junior,D as Master,A as Sphinx,w as Starter,O as Wizard,j as __namedExportsOrder,C as default};