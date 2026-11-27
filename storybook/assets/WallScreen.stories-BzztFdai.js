import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{n as r,t as i}from"./WallScreen-D8Tm6HyC.js";import{n as a,t as o}from"./EncounterModal-D1eRAi3A.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{s=t(),a(),r(),c=n(),l={title:`Story/WallScreen`,component:i,parameters:{layout:`fullscreen`}},u={at:{levelNr:1,floor:0},cut:[`d1`,`a1`,`p1`],wrongAt:1,answer:`a2`,copy:`story.wall`,after:`story.wallFixed`,panel:{aspect:1.3,signs:{x:.2,y:.3,width:.6,height:.4},flow:`row`}},d=()=>{let[e,t]=(0,s.useState)(null);return(0,c.jsx)(o,{tileset:`junior`,children:(0,c.jsx)(i,{wall:u,known:[!0,!0,!0],repairable:!0,owned:[`d1`,`a2`,`p1`,`s1`],picked:e,onPut:t,onBack:()=>{}})})},f={args:{},globals:{input:`keys`},parameters:{pageLayers:!0},render:()=>(0,c.jsx)(d,{})},p=[`KeyboardCursor`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {} as never,
  globals: {
    input: "keys"
  },
  parameters: {
    pageLayers: true
  },
  render: () => <Reading />
}`,...f.parameters?.docs?.source},description:{story:`The wall as a keyboard or pad player meets it: the encounter frame is the input layer, so arrows or WASD
walk the tray (the focus is the cursor there, look C), Enter or Space puts the focused sign in, and Escape
is the way back.`,...f.parameters?.docs?.description}}}})))()}m();export{f as KeyboardCursor,p as __namedExportsOrder,l as default};