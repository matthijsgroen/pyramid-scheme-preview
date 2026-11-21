import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{C as n,S as r,i,r as a}from"./meta-Bl6fEMLn.js";import{n as o,t as s}from"./ConstellationPuzzle-Dk2dX-KL.js";import{n as c,t as l}from"./EncounterModal-Gifw6IFF.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{c(),n(),i(),o(),u=t(),d={title:`Puzzle/ConstellationEncounter`,component:l,parameters:{layout:`fullscreen`}},f=()=>(0,u.jsx)(l,{tileset:`junior`,children:(0,u.jsx)(s,{puzzle:a(1,r.junior),difficulty:`junior`,onSolved:()=>{},onCancel:()=>{}})}),p={args:{tileset:`junior`,children:null},globals:{input:`keys`},render:f},m={args:{tileset:`junior`,children:null},globals:{input:`keys`},render:f,play:()=>{window.dispatchEvent(new KeyboardEvent(`keydown`,{code:`ShiftLeft`,cancelable:!0}))}},h=[`KeyboardCursor`,`KeyboardAltHeld`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  globals: {
    input: "keys"
  },
  render: board
}`,...p.parameters?.docs?.source},description:{story:`The board as a keyboard or pad player sees it: brackets (look B) on the cursor's star, starting on the first.
A direction jumps to the nearest star that way; N or Shift held (Y on a pad) turns a direction into a line
cycled that way, as a drag cycles it. Z undoes, H asks for the hint, Escape leaves.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  globals: {
    input: "keys"
  },
  render: board,
  play: () => {
    window.dispatchEvent(new KeyboardEvent("keydown", {
      code: "ShiftLeft",
      cancelable: true
    }));
  }
}`,...m.parameters?.docs?.source},description:{story:`Alt held (Shift here): the brackets thicken and an arrow stands on each side of the star with a line a
direction would cycle.`,...m.parameters?.docs?.description}}}})))()}g();export{m as KeyboardAltHeld,p as KeyboardCursor,h as __namedExportsOrder,d as default};