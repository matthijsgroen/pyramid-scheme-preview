import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{a as n,i as r,o as i,r as a}from"./meta-COcnZ8E7.js";import{n as o,t as s}from"./SudokuPuzzle-CWjosrvQ.js";import{n as c,t as l}from"./EncounterModal-Gifw6IFF.js";var u,d,f,p,m;function h(){return(h=e((()=>{c(),r(),i(),o(),u=t(),d={title:`Puzzle/SudokuEncounter`,component:l,parameters:{layout:`fullscreen`},globals:{input:`keys`}},f={args:{tileset:`junior`,children:null},render:()=>(0,u.jsx)(l,{tileset:`junior`,children:(0,u.jsx)(s,{puzzle:n(1,a.junior),difficulty:`junior`,onSolved:()=>{},onCancel:()=>{}})})},p={args:{tileset:`junior`,children:null},render:()=>(0,u.jsx)(l,{tileset:`junior`,children:(0,u.jsx)(s,{puzzle:{size:4,boxWidth:2,boxHeight:2,givens:[[void 0,void 0,3,4],[3,void 0,1,2],[2,1,4,3],[4,3,2,1]],solution:[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]],techniqueCap:`nakedSingle`},difficulty:`junior`,onSolved:()=>{},onCancel:()=>{}})})},m=[`KeyboardCursor`,`AlmostSolved`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  render: () => <EncounterModal tileset="junior">
      <SudokuPuzzle puzzle={generateSudoku(1, SUDOKU_CONFIG.junior)} difficulty="junior" onSolved={() => {}} onCancel={() => {}} />
    </EncounterModal>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  render: () => <EncounterModal tileset="junior">
      <SudokuPuzzle puzzle={{
      size: 4,
      boxWidth: 2,
      boxHeight: 2,
      givens: [[undefined, undefined, 3, 4], [3, undefined, 1, 2], [2, 1, 4, 3], [4, 3, 2, 1]],
      solution: [[1, 2, 3, 4], [3, 4, 1, 2], [2, 1, 4, 3], [4, 3, 2, 1]],
      techniqueCap: "nakedSingle"
    }} difficulty="junior" onSolved={() => {}} onCancel={() => {}} />
    </EncounterModal>
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as AlmostSolved,f as KeyboardCursor,m as __namedExportsOrder,d as default};