import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{a as n,c as r,n as i,o as a,s as o,t as s}from"./PairPuzzle-CxTLxqYK.js";import{n as c,t as l}from"./EncounterModal-D1eRAi3A.js";var u,d,f,p;function m(){return(m=e((()=>{c(),r(),a(),i(),u=t(),d={title:`Puzzle/PairPuzzleEncounter`,component:l,parameters:{layout:`fullscreen`},globals:{input:`keys`}},f={args:{tileset:`junior`,children:null},render:()=>(0,u.jsx)(l,{tileset:`junior`,children:(0,u.jsx)(s,{puzzle:o(3,n.junior),difficulty:`junior`,onSolved:()=>{},onCancel:()=>{}})})},p=[`KeyboardSweep`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  render: () => <EncounterModal tileset="junior">
      <PairPuzzle puzzle={generatePairPuzzle(3, PAIR_PUZZLE_CONFIG.junior)} difficulty="junior" onSolved={() => {}} onCancel={() => {}} />
    </EncounterModal>
}`,...f.parameters?.docs?.source},description:{story:`The sweep by keys: hold Shift or N (pad Y) and the arrows rule out every square the cursor crosses, anchors
passed over, drawn as it goes; letting go lands the run as one move, which one Z takes back.`,...f.parameters?.docs?.description}}}})))()}m();export{f as KeyboardSweep,p as __namedExportsOrder,d as default};