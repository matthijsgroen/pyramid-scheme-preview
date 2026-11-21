import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{a as n,c as r,i,n as a,r as o,s}from"./casts-pl2OYO38.js";import{d as c,f as l,g as u,h as d,m as f,p,t as m}from"./registerModApps-BpIKPGw-.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{f(),u(),o(),n(),r(),l(),m(),h=t(),g=d(i,1,{difficulty:`expert`,variant:s(4),boardIndex:0}),_=a(`default`),v=[_[2],_[5],_[0],_[3]],y=({walked:e,read:t=!1,torch:n})=>(0,h.jsx)(c,{puzzle:g,face:{id:`P`,tiles:v.map(e=>({glyph:e,status:`unwalked`})),hidden:{address:`main#0/P`,read:t,walked:e}},markers:n?[{id:`torch`,icon:p({kind:`mechanism`,family:`torch`}),lit:n===`lit`,label:`Torch`}]:[],onStarts:()=>{},onRead:()=>{},onReset:()=>{},onTurnAround:()=>{}}),b={title:`Puzzle/Procession door`,component:y,parameters:{layout:`fullscreen`}},x={args:{walked:[!1,!1,!1,!1]}},S={args:{walked:[!0,!1,!0,!1]}},C={args:{walked:[!0,!0,!0,!0],read:!0}},w={args:{walked:[!0,!0,!0,!1],torch:`unlit`}},T=e=>{window.dispatchEvent(new KeyboardEvent(`keydown`,{code:e,cancelable:!0})),window.dispatchEvent(new KeyboardEvent(`keyup`,{code:e}))},E={args:{walked:[!0,!1,!0,!0]},globals:{input:`keys`}},D={args:{walked:[!0,!0,!0,!0],read:!0},globals:{input:`keys`},play:()=>{for(let e=0;e<20&&!document.activeElement?.matches(`[data-input-back]`);e++)T(`ArrowDown`);T(`ArrowUp`)}},O=[`Locked`,`PartlyUnlocked`,`Solved`,`BesideATorch`,`KeyboardCursor`,`KeyboardRead`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    walked: [false, false, false, false]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    walked: [true, false, true, false]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    walked: [true, true, true, true],
    read: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    walked: [true, true, true, false],
    torch: "unlit"
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    walked: [true, false, true, true]
  },
  globals: {
    input: "keys"
  }
}`,...E.parameters?.docs?.source},description:{story:`The door as a keyboard or pad player sees it: brackets (look B) on the bar of the cursor's row, which passes the
locked rows by. Up and down change the row, left and right slide its bar one hour a press, H asks for the hint
once no bar is locked, Escape turns around.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    walked: [true, true, true, true],
    read: true
  },
  globals: {
    input: "keys"
  },
  play: () => {
    for (let step = 0; step < 20 && !document.activeElement?.matches("[data-input-back]"); step++) press("ArrowDown");
    press("ArrowUp");
  }
}`,...D.parameters?.docs?.source},description:{story:`Read: the board has nothing left to move, so a direction walks the door's buttons, brackets on the focused one,
and Enter presses it. Here the focus is on reset, one up from turning around.`,...D.parameters?.docs?.description}}}})))()}k();export{w as BesideATorch,E as KeyboardCursor,D as KeyboardRead,x as Locked,S as PartlyUnlocked,C as Solved,O as __namedExportsOrder,b as default};