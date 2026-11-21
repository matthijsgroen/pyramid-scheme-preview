import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{r as n,t as r}from"./difficultyLevels-BkVSS0JK.js";import{i,n as a,o,t as s}from"./sumpleteConfig-D3s28_h8.js";import{C as c,S as l,i as u,r as d}from"./meta-Bl6fEMLn.js";import{n as f,t as p}from"./SumpletePuzzle-BVZ-Kf5m.js";import{n as m,t as h}from"./ConstellationPuzzle-Dk2dX-KL.js";import{n as g,t as _}from"./EncounterModal-Gifw6IFF.js";var v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),o(),a(),f(),m(),u(),c(),g(),v=t(),y={title:`Puzzle/SumpleteEncounter`,component:_,parameters:{layout:`fullscreen`}},b=({difficulty:e})=>{let{size:t,...n}=s[e];return(0,v.jsx)(p,{puzzle:i(t,1,n),difficulty:e,onSolved:()=>{},onCancel:()=>{}})},x={args:{tileset:`starter`,children:null},render:()=>(0,v.jsx)(_,{tileset:`starter`,children:(0,v.jsx)(h,{puzzle:d(1,l.starter),difficulty:`starter`,onSolved:()=>{},onCancel:()=>{}})})},S={args:{tileset:`starter`,children:null},render:()=>(0,v.jsx)(_,{tileset:`starter`,children:(0,v.jsx)(b,{difficulty:`starter`})})},C={args:{tileset:`starter`,children:null},globals:{input:`keys`},render:()=>(0,v.jsx)(_,{tileset:`starter`,children:(0,v.jsx)(b,{difficulty:`junior`})})},w={args:{children:null},globals:{input:`keys`},render:()=>(0,v.jsx)(`div`,{className:`flex flex-col gap-8`,children:[...r,`cave`,`sphinx`].map(e=>(0,v.jsx)(`div`,{className:`relative min-h-180`,children:(0,v.jsx)(_,{tileset:e,children:(0,v.jsx)(b,{difficulty:`starter`})})},e))})},T={args:{children:null},render:()=>(0,v.jsx)(`div`,{className:`flex flex-col gap-8`,children:r.map(e=>(0,v.jsx)(`div`,{className:`relative min-h-180`,children:(0,v.jsx)(_,{tileset:e,children:(0,v.jsx)(b,{difficulty:e})})},e))})},E=[`SizedFromItsBlock`,`Starter`,`KeyboardCursor`,`KeyboardCursorEveryRank`,`EveryRank`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "starter",
    children: null
  },
  render: () => <EncounterModal tileset="starter">
      <ConstellationPuzzle puzzle={generateConstellation(1, CONSTELLATION_CONFIG.starter)} difficulty="starter" onSolved={() => {}} onCancel={() => {}} />
    </EncounterModal>
}`,...x.parameters?.docs?.source},description:{story:`A board that sizes itself from the block it stands on — which is most of them, and the case a block
sized to its content destroys. Sumplete is built of fixed cells and cannot show it.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "starter",
    children: null
  },
  render: () => <EncounterModal tileset="starter">
      <Sumplete difficulty="starter" />
    </EncounterModal>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "starter",
    children: null
  },
  globals: {
    input: "keys"
  },
  render: () => <EncounterModal tileset="starter">
      <Sumplete difficulty="junior" />
    </EncounterModal>
}`,...C.parameters?.docs?.source},description:{story:`The board as a keyboard or pad player sees it: the cursor (look C, the lifted cell) on the cell it starts
on. Arrows or WASD move it, Enter or Space cycles the cell, Z undoes, H asks for the hint, Escape leaves.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  globals: {
    input: "keys"
  },
  render: () => <div className="flex flex-col gap-8">
      {[...difficulties, "cave" as const, "sphinx" as const].map(tileset => <div key={tileset} className="relative min-h-180">
          <EncounterModal tileset={tileset}>
            <Sumplete difficulty="starter" />
          </EncounterModal>
        </div>)}
    </div>
}`,...w.parameters?.docs?.source},description:{story:`The cursor on every rank's wall: it has to read on the pale stones as well as the dark ones.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="flex flex-col gap-8">
      {difficulties.map(difficulty => <div key={difficulty} className="relative min-h-180">
          <EncounterModal tileset={difficulty}>
            <Sumplete difficulty={difficulty} />
          </EncounterModal>
        </div>)}
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Every rank's wall behind the same board: the blocks have to work on all five stones.`,...T.parameters?.docs?.description}}}})))()}D();export{T as EveryRank,C as KeyboardCursor,w as KeyboardCursorEveryRank,x as SizedFromItsBlock,S as Starter,E as __namedExportsOrder,y as default};