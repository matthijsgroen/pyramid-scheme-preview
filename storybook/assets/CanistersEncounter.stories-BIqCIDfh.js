import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{Ft as n,It as r,Lt as i,Rt as a}from"./registeredMods-h00D71jY.js";import{n as o,t as s}from"./CanistersPuzzle-IkSLBsOT.js";import{n as c,t as l}from"./EncounterModal-D1eRAi3A.js";var u,d,f,p,m;function h(){return(h=e((()=>{c(),r(),a(),o(),u=t(),d={title:`Puzzle/CanistersEncounter`,component:l,parameters:{layout:`fullscreen`}},f={args:{tileset:`junior`,children:null},globals:{input:`keys`},render:()=>(0,u.jsx)(l,{tileset:`junior`,children:(0,u.jsx)(s,{puzzle:i(1,n.junior),difficulty:`junior`,onSolved:()=>{},onCancel:()=>{}})})},p={...f,render:()=>(0,u.jsx)(l,{tileset:`junior`,children:(0,u.jsx)(s,{puzzle:i(1,n.junior),difficulty:`junior`,role:`scribe`,onSolved:()=>{},onCancel:()=>{}})})},m=[`KeyboardCursor`,`KeyboardCursorInk`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  globals: {
    input: "keys"
  },
  render: () => <EncounterModal tileset="junior">
      <CanistersPuzzle puzzle={generateCanisters(1, CANISTERS_CONFIG.junior)} difficulty="junior" onSolved={() => {}} onCancel={() => {}} />
    </EncounterModal>
}`,...f.parameters?.docs?.source},description:{story:`The board as a keyboard or pad player sees it: the focus is the cursor (look C, the lifted canister) and
starts on the first canister. Arrows or WASD walk the canisters and their claims, Enter or Space picks one
up and a second Enter pours it, Z undoes a pour, H asks for the hint, Escape leaves. A held canister is
lifted with the held brackets while the cursor walks on, and Enter on it or Escape puts it down.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...KeyboardCursor,
  render: () => <EncounterModal tileset="junior">
      <CanistersPuzzle puzzle={generateCanisters(1, CANISTERS_CONFIG.junior)} difficulty="junior" role="scribe" onSolved={() => {}} onCancel={() => {}} />
    </EncounterModal>
}`,...p.parameters?.docs?.source},description:{story:`The same board in the scribe's ink, the one face on a light ground.`,...p.parameters?.docs?.description}}}})))()}h();export{f as KeyboardCursor,p as KeyboardCursorInk,m as __namedExportsOrder,d as default};