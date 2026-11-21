import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";var n;function r(){return(r=e((()=>{n=new URL(`starter-1L-card-CluCfN8H.png`,import.meta.url).href})))()}var i,a,o;function s(){return(s=e((()=>{i=t(),a=`block w-full cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-center font-medium text-gray-800 transition-colors hover:bg-gray-50`,o=({labels:e,busy:t,status:n,card:r,canShare:o,onMake:s,onShare:c,onRead:l})=>(0,i.jsxs)(`div`,{className:`space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-3`,children:[(0,i.jsx)(`p`,{className:`text-sm text-gray-700`,children:e.explain}),(0,i.jsx)(`button`,{type:`button`,onClick:s,disabled:t,className:a,children:e.make}),r&&(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(`img`,{src:r.url,alt:e.cardAlt,className:`mx-auto max-h-64 rounded shadow`}),o&&(0,i.jsx)(`button`,{type:`button`,onClick:c,className:a,children:e.share}),(0,i.jsx)(`a`,{href:r.url,download:r.fileName,className:a,children:e.download})]}),(0,i.jsxs)(`label`,{className:a,children:[e.read,(0,i.jsx)(`input`,{type:`file`,accept:`image/*`,disabled:t,className:`sr-only`,onChange:e=>{l(e.target.files?.[0]),e.target.value=``}})]}),(0,i.jsx)(`p`,{role:`status`,className:`text-sm text-gray-700`,children:n})]})})))()}var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),s(),c=t(),l={component:o,parameters:{layout:`centered`},args:{labels:{explain:`Take your expedition to another device: make a card here and read it there within 15 minutes.`,make:`Make travel card`,share:`Share card`,download:`Download card`,read:`Read travel card`,cardAlt:`Pyramid Scheme`},busy:!1,canShare:!0,onMake:()=>{},onShare:()=>{},onRead:()=>{}},decorators:[e=>(0,c.jsx)(`div`,{className:`w-100 bg-white p-4`,children:(0,c.jsx)(e,{})})]},u={},d={args:{busy:!0,status:`One moment…`}},f={args:{card:{url:n,fileName:`reiskaart.png`}}},p={args:{card:{url:n,fileName:`reiskaart.png`},canShare:!1}},m={args:{status:`This card has expired; make a new one.`}},h=[`Idle`,`Busy`,`CardReady`,`ShareUnavailable`,`Refused`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    busy: true,
    status: "One moment…"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      url: cardPng,
      fileName: "reiskaart.png"
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      url: cardPng,
      fileName: "reiskaart.png"
    },
    canShare: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: "This card has expired; make a new one."
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as Busy,f as CardReady,u as Idle,m as Refused,p as ShareUnavailable,h as __namedExportsOrder,l as default};