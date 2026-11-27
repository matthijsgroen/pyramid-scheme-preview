import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{a as n,h as r,i,m as a,o,r as s}from"./meta-BMsRRLJ3.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./HidatoPuzzle-DLabGqFh.js";import{n as m,t as h}from"./EncounterModal-D1eRAi3A.js";var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{m(),i(),o(),r(),d(),u(),f(),g=t(),_={title:`Puzzle/HidatoEncounter`,component:h,parameters:{layout:`fullscreen`},globals:{input:`keys`}},v=e=>{window.dispatchEvent(new KeyboardEvent(`keydown`,{code:e,cancelable:!0})),window.dispatchEvent(new KeyboardEvent(`keyup`,{code:e}))},y=()=>(0,g.jsx)(h,{tileset:`junior`,children:(0,g.jsx)(p,{puzzle:n(2,s.junior),difficulty:`junior`,onSolved:()=>{},onCancel:()=>{}})}),b={args:{tileset:`junior`,children:null},render:y},x={args:{tileset:`junior`,children:null},render:y,play:()=>v(`Enter`)},S=a(2),C=e=>()=>(0,g.jsx)(h,{tileset:`junior`,children:(0,g.jsx)(c,{puzzle:{cells:S,givens:{[e]:1}},skin:l(void 0,void 0),values:{[e]:1},onPickUp:()=>{},onTap:()=>{},onDrag:()=>{},boardInput:e=>e,guide:!0})}),w={args:{tileset:`junior`,children:null},render:C(`0,0`)},T={args:{tileset:`junior`,children:null},render:C(`-2,0`)},E=[`KeyboardCursor`,`KeyboardRunPickedUp`,`NeighbourKeys`,`NeighbourKeysAtEdge`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  render: board
}`,...b.parameters?.docs?.source},description:{story:`The comb as a keyboard or pad player sees it: the cell under the cursor lifted (look C), starting on the 1.
Arrows or WASD move it to a neighbour: left and right beside it, up and down to the upper-left and lower-left;
Shift (pad: Y) held, or E and X, bend up and down to the right. Enter or Space picks the run up on a number,
Z undoes, H asks for the hint, Escape leaves.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  render: board,
  play: () => press("Enter")
}`,...x.parameters?.docs?.source},description:{story:`The run picked up: a thicker, paler rim over the pen's ring. A direction now carries the run into that
neighbour, and the cursor stays on its head. Enter on the head takes it back off; Escape puts the run down.`,...x.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  render: guided("0,0")
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  render: guided("-2,0")
}`,...T.parameters?.docs?.source},description:{story:`The cursor on the comb's left corner, where the upper-left and lower-left cells are off the board: ↑ and ↓
fall back to the right, so those cells carry both their own keys and the plain ones.`,...T.parameters?.docs?.description}}}})))()}D();export{b as KeyboardCursor,x as KeyboardRunPickedUp,w as NeighbourKeys,T as NeighbourKeysAtEdge,E as __namedExportsOrder,_ as default};