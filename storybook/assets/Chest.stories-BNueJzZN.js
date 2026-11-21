import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{n,t as r}from"./Chest-BV1s5gMx.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),a={component:r,parameters:{layout:`centered`},argTypes:{state:{control:`select`,options:[`empty`,`open`,`error`]},variant:{control:`select`,options:[`vibrant`,`muted`,`wooden`]},allowInteraction:{control:`boolean`}}},o={args:{state:`empty`,variant:`vibrant`,allowInteraction:!0,onClick:()=>{}}},s={args:{state:`open`,variant:`vibrant`,allowInteraction:!1,onClick:()=>{}}},c={args:{state:`empty`,variant:`wooden`,allowInteraction:!0,onClick:()=>{}}},l={args:{state:`open`,variant:`wooden`,allowInteraction:!1,onClick:()=>{}}},u={args:{state:`empty`,variant:`muted`,allowInteraction:!0,onClick:()=>{}}},d={render:()=>(0,i.jsx)(`div`,{className:`flex gap-12 bg-stone-900 p-8`,children:[`vibrant`,`wooden`,`muted`].map(e=>(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-8`,children:[(0,i.jsx)(`span`,{className:`text-sm text-stone-400`,children:e}),[`empty`,`open`,`error`].map(t=>(0,i.jsx)(r,{state:t,variant:e,allowInteraction:!1,onClick:()=>{}},t))]},e))}),args:{allowInteraction:!1,onClick:()=>{}}},f=[`Vibrant`,`VibrantOpen`,`Wooden`,`WoodenOpen`,`Muted`,`AllVariants`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    variant: "vibrant",
    allowInteraction: true,
    onClick: () => {}
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "open",
    variant: "vibrant",
    allowInteraction: false,
    onClick: () => {}
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    variant: "wooden",
    allowInteraction: true,
    onClick: () => {}
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "open",
    variant: "wooden",
    allowInteraction: false,
    onClick: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    variant: "muted",
    allowInteraction: true,
    onClick: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-12 bg-stone-900 p-8">
      {(["vibrant", "wooden", "muted"] as const).map(variant => <div key={variant} className="flex flex-col items-center gap-8">
          <span className="text-sm text-stone-400">{variant}</span>
          {(["empty", "open", "error"] as const).map(state => <Chest key={state} state={state} variant={variant} allowInteraction={false} onClick={() => {}} />)}
        </div>)}
    </div>,
  args: {
    allowInteraction: false,
    onClick: () => {}
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as AllVariants,u as Muted,o as Vibrant,s as VibrantOpen,c as Wooden,l as WoodenOpen,f as __namedExportsOrder,a as default};