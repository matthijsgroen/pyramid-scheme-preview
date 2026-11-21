import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{c as n,r}from"./siteTypes-D3fb0A_M.js";import{n as i,t as a}from"./KeyIcon-DMfMLS1t.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),s={component:a,decorators:[e=>(0,o.jsx)(`div`,{className:`bg-stone-950 p-4`,children:(0,o.jsx)(e,{})})]},c={args:{color:`blue`,title:`Blue key`}},l={args:{color:`blue`},render:()=>(0,o.jsx)(`div`,{className:`flex items-center gap-3`,children:r.map(e=>(0,o.jsx)(a,{color:e,size:32,title:`${e} key`},e))})},u={args:{color:`red`},render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(a,{color:`red`,size:32,title:`held`}),(0,o.jsx)(a,{color:`red`,size:32,outlined:!0,title:`not held`})]})},d=[`Blue`,`AllColors`,`HeldVersusNeeded`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: "blue",
    title: "Blue key"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "blue"
  },
  render: () => <div className="flex items-center gap-3">
      {KEY_COLORS.map(color => <KeyIcon key={color} color={color} size={32} title={\`\${color} key\`} />)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: "red"
  },
  render: () => <div className="flex items-center gap-3">
      <KeyIcon color="red" size={32} title="held" />
      <KeyIcon color="red" size={32} outlined title="not held" />
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as AllColors,c as Blue,u as HeldVersusNeeded,d as __namedExportsOrder,s as default};