import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{a as n,i as r,o as i,r as a}from"./meta-Bpk_v72_.js";import{n as o,t as s}from"./RushHourPuzzle-IFoKbpG3.js";import{n as c,t as l}from"./EncounterModal-Gifw6IFF.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{c(),r(),i(),o(),u=t(),d={title:`Puzzle/RushHourEncounter`,component:l,parameters:{layout:`fullscreen`}},f=e=>{window.dispatchEvent(new KeyboardEvent(`keydown`,{code:e,cancelable:!0})),window.dispatchEvent(new KeyboardEvent(`keyup`,{code:e}))},p=()=>(0,u.jsx)(l,{tileset:`junior`,children:(0,u.jsx)(s,{puzzle:n(1,a.junior),difficulty:`junior`,onSolved:()=>{},onCancel:()=>{}})}),m={args:{tileset:`junior`,children:null},globals:{input:`keys`},render:p},h={args:{tileset:`junior`,children:null},globals:{input:`keys`},render:p,play:()=>f(`Enter`)},g=[`KeyboardCursor`,`KeyboardHeld`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  globals: {
    input: "keys"
  },
  render: board
}`,...m.parameters?.docs?.source},description:{story:`The board as a keyboard or pad player sees it: brackets (look B) on the piece the cursor is on, starting on the
player's sledge. Arrows or WASD jump to the nearest piece that way, Enter or Space takes it in hand, Z undoes a
move, H asks for the hint, Escape leaves.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  globals: {
    input: "keys"
  },
  render: board,
  play: () => press("Enter")
}`,...h.parameters?.docs?.source},description:{story:`A piece held: thicker, lighter brackets with a stronger glow, the piece lifted under them, and an arrow at each
end it can still move to. Arrows along its lane shove it a cell a press; Enter, Space or Escape let it go, and
the whole shove is one move.`,...h.parameters?.docs?.description}}}})))()}_();export{m as KeyboardCursor,h as KeyboardHeld,g as __namedExportsOrder,d as default};