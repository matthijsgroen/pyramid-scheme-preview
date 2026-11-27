import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{r as n,t as r}from"./difficultyLevels-BkVSS0JK.js";import{T as i,i as a,n as o,w as s}from"./generateEclipse-2nAY1P3j.js";import{n as c,t as l}from"./EclipsePuzzle-Byh_0KBJ.js";import{n as u,t as d}from"./EncounterModal-D1eRAi3A.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),a(),u(),c(),f=t(),p={title:`Puzzle/EclipseEncounter`,component:d,parameters:{layout:`fullscreen`},globals:{input:`keys`}},m=({difficulty:e,theme:t})=>(0,f.jsx)(l,{puzzle:o(3,s[e]),difficulty:e,theme:t,onSolved:()=>{},onCancel:()=>{}}),h={args:{tileset:`junior`,children:null},render:()=>(0,f.jsx)(d,{tileset:`junior`,children:(0,f.jsx)(m,{difficulty:`junior`})})},g={args:{tileset:`expert`,children:null},render:()=>(0,f.jsx)(d,{tileset:`expert`,children:(0,f.jsx)(m,{difficulty:`expert`})})},_={args:{tileset:`cave`,children:null},render:()=>(0,f.jsx)(d,{tileset:`cave`,children:(0,f.jsx)(m,{difficulty:`junior`,theme:`night`})})},v={args:{children:null},render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-8`,children:[...r,`cave`,`sphinx`].map(e=>(0,f.jsx)(`div`,{className:`relative min-h-180`,children:(0,f.jsx)(d,{tileset:e,children:(0,f.jsx)(m,{difficulty:`starter`})})},e))})},y=[`KeyboardCursor`,`KeyboardCursorSigns`,`KeyboardCursorNight`,`KeyboardCursorEveryRank`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "junior",
    children: null
  },
  render: () => <EncounterModal tileset="junior">
      <Eclipse difficulty="junior" />
    </EncounterModal>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "expert",
    children: null
  },
  render: () => <EncounterModal tileset="expert">
      <Eclipse difficulty="expert" />
    </EncounterModal>
}`,...g.parameters?.docs?.source},description:{story:`A board with = and × signs on its edges: a sign beside the cursor steps out with the lift.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tileset: "cave",
    children: null
  },
  render: () => <EncounterModal tileset="cave">
      <Eclipse difficulty="junior" theme="night" />
    </EncounterModal>
}`,..._.parameters?.docs?.source},description:{story:`The night skin: the cursor over a star and a dark sky.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="flex flex-col gap-8">
      {[...difficulties, "cave", "sphinx"].map(tileset => <div key={tileset} className="relative min-h-180">
          <EncounterModal tileset={tileset as Tileset}>
            <Eclipse difficulty="starter" />
          </EncounterModal>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`The cursor on every wall: it has to read on the pale stones as well as the dark ones.`,...v.parameters?.docs?.description}}}})))()}b();export{h as KeyboardCursor,v as KeyboardCursorEveryRank,_ as KeyboardCursorNight,g as KeyboardCursorSigns,y as __namedExportsOrder,p as default};