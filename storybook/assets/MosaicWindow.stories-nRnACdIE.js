import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{i as r,o as i,r as a}from"./mosaicCurrency-DtVSAkgt.js";import{n as o,t as s}from"./MosaicWindow-CaAIKVy8.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{c=t(),o(),i(),l=n(),u={title:`Mosaic/MosaicWindow`,parameters:{layout:`fullscreen`}},d=()=>Object.fromEntries(r.map(e=>[e,0])),f=({initialOwned:e=d()})=>{let[t,n]=(0,c.useState)(e),[i,o]=(0,c.useState)(d()),[u,f]=(0,c.useState)(null),p=(e,t)=>n(n=>({...n,[e]:n[e]+t}));return(0,l.jsxs)(`div`,{className:`flex h-screen flex-col bg-camp-paper`,children:[(0,l.jsx)(s,{owned:t,placed:i,onPlace:e=>o(t=>({...t,[e]:t[e]+1})),onNarrate:(e,t)=>{f(e),window.setTimeout(()=>{f(null),t()},2500)}}),u&&(0,l.jsxs)(`div`,{className:`absolute inset-x-0 top-4 mx-auto w-fit rounded bg-amber-500 px-4 py-2 text-sm font-bold`,children:[`Fez: `,u]}),(0,l.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2 bg-stone-900 p-3 text-xs text-white`,children:[r.map(e=>(0,l.jsxs)(`button`,{onClick:()=>p(e,5),className:`rounded bg-white/10 px-2 py-1`,children:[`find 5 `,e]},e)),(0,l.jsx)(`button`,{onClick:()=>n(Object.fromEntries(r.map(e=>[e,a[e]]))),className:`rounded bg-amber-700 px-2 py-1`,children:`find everything`}),(0,l.jsx)(`button`,{onClick:()=>o(d()),className:`rounded bg-white/10 px-2 py-1`,children:`reset placed`}),(0,l.jsx)(`span`,{className:`opacity-60`,children:r.map(e=>`${e} ${i[e]}/${t[e]}`).join(`  ·  `)})]})]})},p={render:()=>(0,l.jsx)(f,{})},m={render:()=>(0,l.jsx)(f,{initialOwned:{...d(),starter:6,junior:3}})},h={render:()=>(0,l.jsx)(f,{initialOwned:{...d(),starter:a.starter}})},g=[`Empty`,`PiecesInHand`,`AboutToFinishStarter`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Harness />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Harness initialOwned={{
    ...zero(),
    starter: 6,
    junior: 3
  }} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Harness initialOwned={{
    ...zero(),
    starter: MOSAIC_STEPS_BY_TIER.starter
  }} />
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as AboutToFinishStarter,p as Empty,m as PiecesInHand,g as __namedExportsOrder,u as default};