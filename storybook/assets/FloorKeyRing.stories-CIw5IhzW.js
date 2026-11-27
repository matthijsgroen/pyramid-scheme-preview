import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,t as r}from"./KeyIcon-Ca2rGTPY.js";var i,a;function o(){return(o=e((()=>{n(),i=t(),a=({held:e,needed:t=[],heldLabel:n,neededLabel:a,emptyLabel:o})=>e.length===0&&t.length===0?o?(0,i.jsx)(`span`,{className:`text-xs text-stone-500`,children:o}):null:(0,i.jsxs)(`div`,{className:`flex items-center gap-1 rounded border border-amber-900/60 bg-stone-900/70 px-2 py-1`,children:[e.map(e=>(0,i.jsx)(r,{color:e,title:n(e)},`held-${e}`)),e.length>0&&t.length>0&&(0,i.jsx)(`span`,{className:`mx-0.5 h-4 w-px bg-amber-900/60`}),t.map(e=>(0,i.jsx)(r,{color:e,outlined:!0,title:a(e)},`needed-${e}`))]})})))()}var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),s=t(),c={component:a,args:{heldLabel:e=>`${e} key — in hand`,neededLabel:e=>`${e} door — still locked`},decorators:[e=>(0,s.jsx)(`div`,{className:`bg-stone-950 p-4`,children:(0,s.jsx)(e,{})})]},l={args:{held:[`blue`],needed:[]}},u={args:{held:[`blue`,`green`],needed:[`red`,`purple`]}},d={args:{held:[],needed:[`yellow`]}},f={args:{held:[],needed:[],emptyLabel:`No keys on this floor`}},p={args:{held:[],needed:[]}},m=[`OneKeyHeld`,`KeyHeldAndDoorsLeft`,`NothingFoundYet`,`EmptyWithLabel`,`EmptyRendersNothing`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    held: ["blue"],
    needed: []
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    held: ["blue", "green"],
    needed: ["red", "purple"]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    held: [],
    needed: ["yellow"]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    held: [],
    needed: [],
    emptyLabel: "No keys on this floor"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    held: [],
    needed: []
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as EmptyRendersNothing,f as EmptyWithLabel,u as KeyHeldAndDoorsLeft,d as NothingFoundYet,l as OneKeyHeld,m as __namedExportsOrder,c as default};