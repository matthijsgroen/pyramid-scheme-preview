import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{et as r,rt as i}from"./siteAssembler-CNzpvYB2.js";import{n as a,t as o}from"./SiteMapView-BA5G55ph.js";import{t as s}from"./registerModApps-nWdAfwlB.js";import{c,l,n as u,o as d,r as f,u as p}from"./floorFixtures.testing-C1LdYyP7.js";import{n as m,t as h}from"./PrefabRoomPreview-6ywLVwJ_.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{g=t(),r(),c(),m(),a(),s(),_=n(),v={west:[4,1],stop:f,east:[4,12],north:[0,6],south:[9,6]},y=({explorerAt:e})=>{let[t]=(0,g.useState)(()=>i(p({},!0))),[n,r]=(0,g.useState)(v[e]);return(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`flex gap-4 p-2 text-sm`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>r(v.west),children:`To the west door`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>r(v.stop),children:`Walk west → stop`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>r(v.north),children:`To the north room`})]}),(0,_.jsx)(o,{grid:t,explorerPos:n,onCellClick:(e,t)=>r([e,t]),className:`h-160 w-full`})]})},b={title:`Topology/Prefab room`,component:y,parameters:{layout:`fullscreen`},argTypes:{explorerAt:{control:`inline-radio`,options:Object.keys(v)}}},x={args:{explorerAt:`west`}},S={args:{explorerAt:`stop`}},C={args:{explorerAt:`east`}},w={args:{explorerAt:`north`}},T={args:{explorerAt:`west`},play:async({canvasElement:e})=>{Array.from(e.querySelectorAll(`button`)).find(e=>e.textContent?.includes(`stop`))?.click()}},E={L:{north:[1,2],east:[3,8],stop:u.L},T:{west:[3,0],south:[6,3],east:[3,9],stop:u.T}},D=({shape:e,explorerAt:t})=>{let n=E[e],[r]=(0,g.useState)(()=>i(d(e))),[a,s]=(0,g.useState)(n[t]);return(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`flex gap-4 p-2 text-sm`,children:Object.keys(n).map(e=>(0,_.jsxs)(`button`,{type:`button`,onClick:()=>s(n[e]),children:[`To `,e]},e))}),(0,_.jsx)(o,{grid:r,explorerPos:a,onCellClick:(e,t)=>s([e,t]),className:`h-160 w-full`})]})},O={render:e=>(0,_.jsx)(D,{...e}),args:{shape:`L`,explorerAt:`north`}},k={render:e=>(0,_.jsx)(D,{...e}),args:{shape:`T`,explorerAt:`south`}},A=l(`room hall
mirror
layout
# # # # # d # # # # #
# . . . . . . . . . #
# . p . p . p t t . #
d . . . s . . t t . #
# . p . p . p . . . #
# . . . . . . . . . #
# # # # # d # # # # #
p floor pillar
t floor sarcophagus
s stop`,{sarcophagus:{cols:2,rows:2,tall:0}}),j=l(`room ruinedHall
layout
# # # # d # # # #
# . . . . . . . #
# r q r . r q r #
d . r . . . r . d
# . . s . . . . #
# # # # d # # # #
q floor pillar
r floor? rubblePile 1 of 3 per q
s stop`),M=l(`room stepsRoom
mirror
layout
# # # # d # # # #
# . . . . . . . #
d . s . . g g . d
# . . . . . . . #
# # # # d # # # #
g ground mat
s stop`,{mat:{cols:2,rows:1,tall:0,ground:!0}}),N=l(`room storeroom
layout
# # # # # # # # #
d . . . . . . . d
# g . g . g . g #
# . . . s . . . #
# # # # # # # # #
gift = jarRack | basin | basketStack
g floor gift 3 of 4
s stop`),P=e=>({render:e=>(0,_.jsx)(h,{...e}),argTypes:{prefab:{control:!1},variant:{control:{type:`number`,min:0,max:3}},fill:{control:{type:`number`,min:0,max:20}},from:{control:`inline-radio`,options:[`n`,`s`,`e`,`w`]},to:{control:`inline-radio`,options:[`n`,`s`,`e`,`w`]}},args:e}),F=P({prefab:A,from:`w`,to:`n`}),I=P({prefab:A,variant:1,from:`e`,to:`n`}),L=P({prefab:j,from:`w`,to:`e`}),R=P({prefab:j,fill:1,from:`w`,to:`e`}),z=P({prefab:M,from:`w`,to:`e`}),B=P({prefab:M,variant:1,from:`e`,to:`w`}),V=P({prefab:N,from:`w`,to:`e`}),H=P({prefab:N,fill:2,from:`w`,to:`e`}),U=[`West`,`Stop`,`East`,`North`,`WalkWestToStop`,`LChamber`,`TFork`,`HallWithDais`,`HallMirrored`,`RuinedHall`,`RuinedHallOtherFill`,`GroundSteps`,`GroundStepsMirrored`,`StoreroomGifts`,`StoreroomGiftsOtherFill`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    explorerAt: "west"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    explorerAt: "stop"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    explorerAt: "east"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    explorerAt: "north"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    explorerAt: "west"
  },
  play: async ({
    canvasElement
  }) => {
    const walk = Array.from(canvasElement.querySelectorAll("button")).find(b => b.textContent?.includes("stop"));
    walk?.click();
  }
}`,...T.parameters?.docs?.source},description:{story:`From the west door round the west pillar to the stop.`,...T.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <EdgeRoom {...args} />,
  args: {
    shape: "L",
    explorerAt: "north"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <EdgeRoom {...args} />,
  args: {
    shape: "T",
    explorerAt: "south"
  }
}`,...k.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`preview({
  prefab: HALL,
  from: "w",
  to: "n"
})`,...F.parameters?.docs?.source},description:{story:`Two rows of pillars with the aisle between, a 2×2 dais clear of the far wall: from the west door up the aisle.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`preview({
  prefab: HALL,
  variant: 1,
  from: "e",
  to: "n"
})`,...I.parameters?.docs?.source},description:{story:`The same hall mirrored: the dais at the west end, the steps and the walk the other way round.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`preview({
  prefab: RUINED_HALL,
  from: "w",
  to: "e"
})`,...L.parameters?.docs?.source},description:{story:`Stumps on the pillar places, a fallen top lying at one of three places beside each.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`preview({
  prefab: RUINED_HALL,
  fill: 1,
  from: "w",
  to: "e"
})`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`preview({
  prefab: STEPS_ROOM,
  from: "w",
  to: "e"
})`,...z.parameters?.docs?.source},description:{story:`Ground steps drawn under the player; the mirror flips them.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`preview({
  prefab: STEPS_ROOM,
  variant: 1,
  from: "e",
  to: "w"
})`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`preview({
  prefab: STOREROOM,
  from: "w",
  to: "e"
})`,...V.parameters?.docs?.source},description:{story:`Three of the four gift places hold a gift, different ones per fill.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`preview({
  prefab: STOREROOM,
  fill: 2,
  from: "w",
  to: "e"
})`,...H.parameters?.docs?.source}}}})))()}W();export{C as East,z as GroundSteps,B as GroundStepsMirrored,I as HallMirrored,F as HallWithDais,O as LChamber,w as North,L as RuinedHall,R as RuinedHallOtherFill,S as Stop,V as StoreroomGifts,H as StoreroomGiftsOtherFill,k as TFork,T as WalkWestToStop,x as West,U as __namedExportsOrder,b as default};