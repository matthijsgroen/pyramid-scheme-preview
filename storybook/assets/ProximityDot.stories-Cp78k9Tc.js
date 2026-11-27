import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,t as r}from"./ProximityDot-DqWucdSS.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={component:r,decorators:[e=>(0,i.jsx)(`div`,{className:`bg-stone-950 p-6`,children:(0,i.jsx)(e,{})})]},o={args:{band:`near`,label:`close by`},render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-8 text-xs text-stone-400`,children:[`pyramid`,`floor`,`near`].map(e=>(0,i.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,i.jsx)(r,{band:e,label:e}),e]},e))})},s={args:{band:`none`,label:`nothing`}},c=[`AllBands`,`NothingDetected`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    band: "near",
    label: "close by"
  },
  render: () => <div className="flex items-center gap-8 text-xs text-stone-400">
      {(["pyramid", "floor", "near"] as const).map(band => <span key={band} className="flex items-center gap-2">
          <ProximityDot band={band} label={band} />
          {band}
        </span>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    band: "none",
    label: "nothing"
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as AllBands,s as NothingDetected,c as __namedExportsOrder,a as default};