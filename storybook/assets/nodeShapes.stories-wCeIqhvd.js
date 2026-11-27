import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{a as n,r}from"./nodeShapes-DwjeSoh6.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),a={component:r,parameters:{layout:`centered`}},o=[`fogged`,`visible`,`reachable`],s=[`puzzle`,`trap`,`fork`,`switch`,`lever`,`plate`,`gate`,`treasure`],c=({ground:e})=>(0,i.jsxs)(`table`,{style:{borderCollapse:`collapse`,background:e},children:[(0,i.jsx)(`thead`,{children:(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{style:{padding:8}}),o.map(e=>(0,i.jsx)(`th`,{style:{padding:8,color:`#888`,fontSize:12,fontWeight:`normal`},children:e},e))]})}),(0,i.jsx)(`tbody`,{children:s.map(e=>(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{style:{padding:8,color:`#888`,fontSize:12,textAlign:`right`},children:e}),o.map(t=>(0,i.jsx)(`td`,{style:{padding:8},children:(0,i.jsx)(`svg`,{width:48,height:48,viewBox:`-24 -24 48 48`,children:(0,i.jsx)(r,{type:e,state:t})})},t))]},e))})]}),l={args:{type:`lever`,state:`reachable`},render:()=>(0,i.jsx)(c,{ground:`#b9b6ae`})},u={args:{type:`lever`,state:`reachable`},render:()=>(0,i.jsx)(c,{ground:`#14110d`})},d={args:{type:`plate`,state:`reachable`},render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:16,background:`#14110d`,padding:16},children:[`unwalked`,`inOrder`,`outOfOrder`].map(e=>(0,i.jsx)(`svg`,{width:56,height:84,viewBox:`-28 -56 56 84`,children:(0,i.jsx)(r,{type:`plate`,state:`reachable`,plate:{glyph:77952,status:e}})},e))})},f=[`OnLimestone`,`OnGranite`,`PlateStatuses`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: "lever",
    state: "reachable"
  },
  render: () => <Grid ground="#b9b6ae" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "lever",
    state: "reachable"
  },
  render: () => <Grid ground="#14110d" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: "plate",
    state: "reachable"
  },
  render: () => <div style={{
    display: "flex",
    gap: 16,
    background: "#14110d",
    padding: 16
  }}>
      {(["unwalked", "inOrder", "outOfOrder"] as const).map(status => <svg key={status} width={56} height={84} viewBox="-28 -56 56 84">
          <NodeShape type="plate" state="reachable" plate={{
        glyph: 0x13080,
        status
      }} />
        </svg>)}
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as OnGranite,l as OnLimestone,d as PlateStatuses,f as __namedExportsOrder,a as default};