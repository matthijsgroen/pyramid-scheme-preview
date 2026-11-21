import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{c as n,l as r,o as i,u as a}from"./casts-pl2OYO38.js";import{n as o,t as s}from"./ProcessionPuzzle-BYQ9tAgq.js";import{n as c,t as l}from"./EncounterModal-Gifw6IFF.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{c(),n(),a(),o(),u=t(),d={title:`Puzzle/ProcessionEncounter`,component:l,parameters:{layout:`fullscreen`}},f=e=>{window.dispatchEvent(new KeyboardEvent(`keydown`,{code:e,cancelable:!0})),window.dispatchEvent(new KeyboardEvent(`keyup`,{code:e}))},p=()=>(0,u.jsx)(l,{tileset:`junior`,children:(0,u.jsx)(s,{puzzle:r(1,i.junior),difficulty:`junior`,onSolved:()=>{},onCancel:()=>{}})}),m={args:{tileset:`junior`,children:null},globals:{input:`keys`},render:p},h={args:{tileset:`junior`,children:null},globals:{input:`keys`},render:p,play:()=>f(`BracketRight`)},g=[`KeyboardCursor`,`KeyboardMarkPicked`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  globals: {
    input: "keys"
  },
  render: board
}`,...m.parameters?.docs?.source},description:{story:`The board as a keyboard or pad player sees it: brackets (look B) on the bar of the cursor's row, starting on the
first row. Up and down change the row, left and right slide its bar one hour a press, H asks for the hint,
Escape leaves.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  globals: {
    input: "keys"
  },
  render: board,
  play: () => press("BracketRight")
}`,...h.parameters?.docs?.source},description:{story:"A mark picked by keys: `]` or PageDown (RB on a pad) walks the marks under the board and `[` or PageUp (LB) walks\nback, each picked as a tap picks it, ringing the rows it is about.",...h.parameters?.docs?.description}}}})))()}_();export{m as KeyboardCursor,h as KeyboardMarkPicked,g as __namedExportsOrder,d as default};