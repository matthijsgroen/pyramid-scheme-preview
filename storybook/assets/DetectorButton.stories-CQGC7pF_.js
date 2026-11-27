import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,t as r}from"./detectorModeIcons-vuBu4Eeh.js";import{n as i,t as a}from"./ProximityDot-DqWucdSS.js";var o,s;function c(){return(c=e((()=>{n(),i(),o=t(),s=({activeDetector:e,readoutOpen:t,title:n,band:i=`none`,bandLabel:s=``,onToggle:c})=>(0,o.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,o.jsx)(`button`,{onClick:c,className:`rounded px-2 py-1 text-xs ${t?`bg-amber-700 text-amber-100`:`bg-stone-800/90 text-stone-300 hover:bg-stone-700`}`,title:n,"aria-expanded":t,children:e?r[e]:`🔍`}),(0,o.jsx)(a,{band:i,label:s})]})})))()}var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{c(),l=t(),u={component:s,args:{title:`Detector`,onToggle:()=>{}},decorators:[e=>(0,l.jsx)(`div`,{className:`bg-stone-950 p-4`,children:(0,l.jsx)(e,{})})]},d={args:{activeDetector:null,readoutOpen:!1}},f={args:{activeDetector:`hiddenPassageway`,readoutOpen:!0}},p={args:{activeDetector:`hiddenPassageway`,readoutOpen:!1,band:`pyramid`,bandLabel:`in this pyramid`}},m={args:{activeDetector:`hiddenPassageway`,readoutOpen:!1,band:`floor`,bandLabel:`on this floor`}},h={args:{activeDetector:`hiddenPassageway`,readoutOpen:!1,band:`near`,bandLabel:`close by`}},g={args:{activeDetector:`compass`,readoutOpen:!1,band:`near`,bandLabel:`close by`}},_={args:{activeDetector:`hiddenPassageway`,readoutOpen:!1},render:()=>(0,l.jsx)(`div`,{className:`flex items-center gap-6`,children:[`pyramid`,`floor`,`near`].map(e=>(0,l.jsx)(s,{activeDetector:`hiddenPassageway`,readoutOpen:!1,title:`Detector`,band:e,bandLabel:e,onToggle:()=>{}},e))})},v=[`Idle`,`ReadoutOpen`,`RunningPyramid`,`RunningFloor`,`RunningNear`,`RunningCompassNear`,`AllRates`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    activeDetector: null,
    readoutOpen: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    activeDetector: "hiddenPassageway",
    readoutOpen: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    activeDetector: "hiddenPassageway",
    readoutOpen: false,
    band: "pyramid",
    bandLabel: "in this pyramid"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    activeDetector: "hiddenPassageway",
    readoutOpen: false,
    band: "floor",
    bandLabel: "on this floor"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    activeDetector: "hiddenPassageway",
    readoutOpen: false,
    band: "near",
    bandLabel: "close by"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    activeDetector: "compass",
    readoutOpen: false,
    band: "near",
    bandLabel: "close by"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    activeDetector: "hiddenPassageway",
    readoutOpen: false
  },
  render: () => <div className="flex items-center gap-6">
      {(["pyramid", "floor", "near"] as const).map(band => <DetectorButton key={band} activeDetector="hiddenPassageway" readoutOpen={false} title="Detector" band={band} bandLabel={band} onToggle={() => {}} />)}
    </div>
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as AllRates,d as Idle,f as ReadoutOpen,g as RunningCompassNear,m as RunningFloor,h as RunningNear,p as RunningPyramid,v as __namedExportsOrder,u as default};