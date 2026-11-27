import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{r,t as i}from"./generatedWorld-BE266ti6.js";import{J as a,Q as o,et as s,n as c,r as l}from"./siteAssembler-CNzpvYB2.js";import{n as u,t as d}from"./SiteMapView-BA5G55ph.js";import{a as f,i as p,n as m,o as h}from"./registeredMods-h00D71jY.js";import{n as g,r as _,t as v}from"./siteSeed-CTU1mk1n.js";import{i as y,n as b,r as x}from"./allFamilyMeta-ZQh4ipRU.js";import{n as S,t as C}from"./prefabNotation-DloUS5My.js";var w;function T(){return(T=e((()=>{c(),g(),b(),m(),w=(e,t,n,r)=>{let i=v(_(e),t,n),a={resolveKeyRequirements:y,floorRef:{journeyId:e,levelIndex:t-1,floorIndex:n},resolveOneWay:p,resolveRegionBarrier:h,resolvePassage:f},o=(t,n)=>l(e,t,i,x,{...a,...n===void 0?{}:{maxAttempts:n}},r?{engine:r}:{});return{seed:i,resolvers:{...a,resolveEncounter:x},carve:o}}})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{E=t(),r(),T(),c(),s(),C(),u(),D=n(),O=[`starter`,`junior`,`expert`,`master`,`wizard`],k=({seed:e,difficulty:t,pathPuzzles:n,exitOrStaircase:r,corridorStraightness:i,packing:a,section1:o,section1Difficulty:s,section1Puzzles:c,section1End:u,section1Gate:f,section2:p,section2Difficulty:m,section2Puzzles:h,section2End:g,section2Gate:_})=>{let v=(e,t)=>e===`none`?void 0:e===`floor-key`?{type:`floor-key`}:{type:`tomb-key`,wardKeyId:`${t}_a_1`},y=[];o&&y.push({pathPuzzles:c,difficulty:s,end:u,gate:v(f,s)}),p&&y.push({pathPuzzles:h,difficulty:m,end:g,gate:v(_,m)});let b=l(`builder`,{pathPuzzles:n,difficulty:t,end:`treasure`,exitOrStaircase:r,sideSections:y,corridorStraightness:i,packing:a},e,void 0,{});return b.success?(0,D.jsx)(d,{grid:b.grid,revealAllCells:!0,className:`max-h-[80vh] max-w-[90vw]`}):(0,D.jsxs)(`div`,{className:`p-4 font-mono text-sm text-red-400`,children:[`Assembly failed:`,(0,D.jsx)(`ul`,{className:`mt-1 list-disc pl-4`,children:b.reasons.map((e,t)=>(0,D.jsx)(`li`,{children:JSON.stringify(e)},t))})]})},A={component:k,parameters:{layout:`centered`},argTypes:{seed:{control:{type:`number`}},difficulty:{control:`select`,options:O},section1Difficulty:{control:`select`,options:O},section2Difficulty:{control:`select`,options:O},pathPuzzles:{control:{type:`range`,min:0,max:5,step:1}},exitOrStaircase:{control:`select`,options:[`exit`,`staircase`]},corridorStraightness:{control:{type:`range`,min:0,max:1,step:.05}},packing:{control:{type:`range`,min:.3,max:2,step:.1}},section1:{control:`boolean`},section1Puzzles:{control:{type:`range`,min:0,max:4,step:1}},section1End:{control:`select`,options:[`treasure`,`staircase`]},section1Gate:{control:`select`,options:[`none`,`floor-key`,`tomb-key`]},section2:{control:`boolean`},section2Puzzles:{control:{type:`range`,min:0,max:4,step:1}},section2End:{control:`select`,options:[`treasure`,`staircase`]},section2Gate:{control:`select`,options:[`none`,`floor-key`,`tomb-key`]}}},j={args:{seed:1,difficulty:`starter`,pathPuzzles:0,exitOrStaircase:`exit`,corridorStraightness:.65,packing:1,section1:!0,section1Difficulty:`starter`,section1Puzzles:0,section1End:`treasure`,section1Gate:`none`,section2:!0,section2Difficulty:`junior`,section2Puzzles:1,section2End:`staircase`,section2Gate:`floor-key`}},M={args:{seed:3,difficulty:`starter`,pathPuzzles:1,exitOrStaircase:`staircase`,corridorStraightness:.65,packing:1,section1:!0,section1Difficulty:`junior`,section1Puzzles:1,section1End:`treasure`,section1Gate:`floor-key`,section2:!0,section2Difficulty:`expert`,section2Puzzles:1,section2End:`staircase`,section2Gate:`tomb-key`},parameters:{layout:`fullscreen`}},N={args:{seed:7,difficulty:`starter`,pathPuzzles:4,exitOrStaircase:`exit`,corridorStraightness:.65,packing:1,section1:!0,section1Difficulty:`starter`,section1Puzzles:2,section1End:`treasure`,section1Gate:`none`,section2:!0,section2Difficulty:`junior`,section2Puzzles:2,section2End:`staircase`,section2Gate:`floor-key`},parameters:{layout:`fullscreen`}},P={args:{seed:42,difficulty:`starter`,pathPuzzles:0,exitOrStaircase:`exit`,corridorStraightness:.65,packing:1,section1:!0,section1Difficulty:`starter`,section1Puzzles:0,section1End:`treasure`,section1Gate:`none`,section2:!0,section2Difficulty:`junior`,section2Puzzles:1,section2End:`staircase`,section2Gate:`floor-key`}},F=()=>{let e=l(`demo`,{pathPuzzles:0,difficulty:`starter`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[{pathPuzzles:0,difficulty:`starter`,end:`treasure`},{pathPuzzles:1,difficulty:`junior`,end:`staircase`,gate:{type:`floor-key`}}]},42),[t,n]=(0,E.useState)(e.success?e.grid:null);return t?(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,D.jsx)(d,{grid:t,onCellClick:(e,t)=>{n(n=>n&&a(n,e,t))}}),(0,D.jsx)(`button`,{className:`rounded bg-amber-900 px-3 py-1 text-xs text-amber-200 hover:bg-amber-800`,onClick:()=>{e.success&&n(e.grid)},children:`Reset`})]}):(0,D.jsx)(`div`,{className:`p-4 text-red-400`,children:`Assembly failed`})},I={render:()=>(0,D.jsx)(F,{}),parameters:{layout:`centered`}},L=({siteConfig:e,seed:t})=>{let[n,r]=(0,E.useState)(0),[i,s]=(0,E.useState)([]),c=(0,E.useMemo)(()=>l(`story`,e[n],t+n),[e,n,t]),u=(0,E.useMemo)(()=>c.success?i.filter(e=>e.startsWith(`${n}:`)).reduce((e,t)=>{let[,n]=t.split(`:`),[r,i]=n.split(`,`).map(Number);return a(e,r,i)},c.grid):null,[c,i,n]);return c.success?(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-4 font-mono text-sm text-amber-300`,children:[(0,D.jsx)(`button`,{className:`rounded bg-amber-900 px-3 py-1 text-amber-200 hover:bg-amber-800 disabled:opacity-30`,disabled:n===0,onClick:()=>r(e=>e-1),children:`↑ Up`}),(0,D.jsxs)(`span`,{children:[`Floor `,n+1,` / `,e.length]}),(0,D.jsx)(`button`,{className:`rounded bg-amber-900 px-3 py-1 text-amber-200 hover:bg-amber-800 disabled:opacity-30`,disabled:n===e.length-1,onClick:()=>r(e=>e+1),children:`↓ Down`}),(0,D.jsx)(`button`,{className:`rounded bg-stone-800 px-3 py-1 text-stone-400 hover:bg-stone-700`,onClick:()=>{s([]),r(0)},children:`Reset`})]}),u&&(0,D.jsx)(d,{grid:u,onCellClick:(t,i)=>{let a=`${n}:${t},${i}`;s(e=>e.includes(a)?e:[...e,a]);let c=u&&o(u,t,i);c?.type===`room`&&c.roomType===`portal`&&c.stairId&&n<e.length-1&&r(e=>e+1)},className:`max-h-[80vh] max-w-[90vw]`})]}):(0,D.jsxs)(`div`,{className:`p-4 font-mono text-sm text-red-400`,children:[`Assembly failed: `,JSON.stringify(c.reasons)]})},R={pathPuzzles:6,difficulty:`wizard`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[{pathPuzzles:0,difficulty:`wizard`,end:`treasure`},{pathPuzzles:3,difficulty:`wizard`,end:`treasure`,gate:{type:`floor-key`,color:`blue`}},{pathPuzzles:3,difficulty:`wizard`,end:`treasure`,gate:{type:`floor-key`,color:`red`}},{pathPuzzles:3,difficulty:`wizard`,end:`treasure`,gate:{type:`floor-key`,color:`green`}},{pathPuzzles:2,difficulty:`wizard`,end:`treasure`,gate:{type:`floor-key`,color:`yellow`}},{pathPuzzles:2,difficulty:`wizard`,end:`treasure`,gate:{type:`floor-key`,color:`purple`}}]},z=()=>{let e=(0,E.useMemo)(()=>l(`dense`,R,2),[]);return e.success?(0,D.jsx)(d,{grid:e.grid,revealAllCells:!0,className:`max-h-[90vh] max-w-[90vw]`}):(0,D.jsxs)(`div`,{className:`p-4 text-red-400`,children:[`Assembly failed: `,JSON.stringify(e.reasons)]})},B={render:()=>(0,D.jsx)(z,{}),parameters:{layout:`fullscreen`}},V={render:()=>(0,D.jsx)(L,{seed:1,siteConfig:[{pathPuzzles:0,difficulty:`starter`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[{gate:{type:`tomb-key`,wardKeyId:`junior_ward`},pathPuzzles:0,difficulty:`starter`,end:`staircase`}]},{pathPuzzles:3,difficulty:`junior`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[{pathPuzzles:1,difficulty:`junior`,end:`treasure`},{pathPuzzles:0,difficulty:`junior`,end:`treasure`}]}]}),parameters:{layout:`centered`}},H=S(`room hall
tier starter
layout
# # # d # # d # #
# . . . . . . . #
# . p . p . p . #
d . . . . . s . d
# . p . p . p . #
# . . . . . . . #
# # # d # # d # #
p floor pillar
s stop`,`hall`),U=({seed:e})=>{let t=l(`builder`,{pathPuzzles:1,difficulty:`starter`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[{pathPuzzles:1,difficulty:`starter`,end:`treasure`},{pathPuzzles:0,difficulty:`starter`,end:`treasure`},{pathPuzzles:1,difficulty:`starter`,end:`treasure`,gate:{type:`tomb-key`,wardKeyId:`starter_a_1`}}],prefabs:{hall:H},prefabPlacements:[{room:`hall`,min:1,max:1,central:1}]},e,void 0,{});return t.success?(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,D.jsxs)(`span`,{className:`font-mono text-xs text-stone-400`,children:[`seed `,e,` · `,t.grid.rows,`×`,t.grid.cols,` · attempt `,t.attempt]}),(0,D.jsx)(d,{grid:t.grid,revealAllCells:!0,className:`max-h-[85vh] max-w-[95vw]`})]}):(0,D.jsxs)(`div`,{className:`p-4 font-mono text-sm text-red-400`,children:[`Assembly failed: `,JSON.stringify(t.reasons)]})},W={render:e=>(0,D.jsx)(U,{...e}),args:{seed:7},argTypes:{seed:{control:{type:`number`}}},parameters:{layout:`fullscreen`}},G=Object.entries(i).flatMap(([e,t])=>t.flatMap((t,n)=>t.map((t,r)=>`${e}#${n+1}#${r}`))),K=({floor:e})=>{let[t,n,r]=e.split(`#`),a=(0,E.useMemo)(()=>{let e=i[t]?.[Number(n)-1]?.[Number(r)];if(e)return w(t,Number(n),Number(r)).carve(e)},[t,n,r]);return a?a.success?(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,D.jsxs)(`span`,{className:`font-mono text-xs text-stone-400`,children:[e,` · `,a.grid.rows,`×`,a.grid.cols]}),(0,D.jsx)(d,{grid:a.grid,revealAllCells:!0,className:`max-h-[85vh] max-w-[95vw]`})]}):(0,D.jsxs)(`div`,{className:`p-4 font-mono text-sm text-red-400`,children:[`Assembly failed: `,JSON.stringify(a.reasons)]}):(0,D.jsxs)(`div`,{className:`p-4 font-mono text-sm text-red-400`,children:[`No floor `,e]})},q={render:e=>(0,D.jsx)(K,{...e}),args:{floor:`starter_1#1#0`},argTypes:{floor:{control:`select`,options:G}},parameters:{layout:`fullscreen`}},J=S(`room shrine
tier starter
layout
# # # d # # #
# m . . . . #
# . . . . . #
d . . . . . d
# . . . . . #
# . . . . s #
# # # d # # #
m mechanism
s stop`,`shrine`),Y=[`starter_treasure_tomb#1#0`,`starter_treasure_tomb#2#1`,`starter_treasure_tomb#2#3`],X=({floor:e,central:t})=>{let[n,r,a]=e.split(`#`),o=(0,E.useMemo)(()=>{let e=i[n]?.[Number(r)-1]?.[Number(a)];if(!e)return;let o={...e,prefabs:{...e.prefabs,shrine:J},prefabPlacements:[{room:`shrine`,min:1,max:1,central:t}]};return w(n,Number(r),Number(a)).carve(o)},[n,r,a,t]);if(!o)return(0,D.jsxs)(`div`,{className:`p-4 font-mono text-sm text-red-400`,children:[`No floor `,e]});if(!o.success)return(0,D.jsxs)(`div`,{className:`p-4 font-mono text-sm text-red-400`,children:[`Assembly failed: `,JSON.stringify(o.reasons)]});let s=o.grid.cells.flat().find(e=>e.type!==`empty`&&e.prefabRoom?.name===`shrine`);return(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,D.jsxs)(`span`,{className:`font-mono text-xs text-stone-400`,children:[e,` · `,o.grid.rows,`×`,o.grid.cols,` · attempt `,o.attempt,` · shrine in`,` `,s&&s.type!==`empty`?s.region:`no region`]}),(0,D.jsx)(d,{grid:o.grid,revealAllCells:!0,className:`max-h-[85vh] max-w-[95vw]`})]})},Z={render:e=>(0,D.jsx)(X,{...e}),args:{floor:Y[0],central:1},argTypes:{floor:{control:`select`,options:Y},central:{control:{type:`range`,min:0,max:1,step:.25}}},parameters:{layout:`fullscreen`}},Q=[`Builder`,`RankSeams`,`PackingAndStraightness`,`FirstPyramid`,`Interactive`,`DensePuzzlesAndKeys`,`TwoFloorLayout`,`HallHub`,`ShippedFloor`,`LockRegionRoom`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    seed: 1,
    difficulty: "starter",
    pathPuzzles: 0,
    exitOrStaircase: "exit",
    corridorStraightness: 0.65,
    packing: 1,
    section1: true,
    section1Difficulty: "starter",
    section1Puzzles: 0,
    section1End: "treasure",
    section1Gate: "none",
    section2: true,
    section2Difficulty: "junior",
    section2Puzzles: 1,
    section2End: "staircase",
    section2Gate: "floor-key"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    seed: 3,
    difficulty: "starter",
    pathPuzzles: 1,
    exitOrStaircase: "staircase",
    corridorStraightness: 0.65,
    packing: 1,
    section1: true,
    section1Difficulty: "junior",
    section1Puzzles: 1,
    section1End: "treasure",
    section1Gate: "floor-key",
    section2: true,
    section2Difficulty: "expert",
    section2Puzzles: 1,
    section2End: "staircase",
    section2Gate: "tomb-key"
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...M.parameters?.docs?.source},description:{story:`Three ranks on one floor, which is the case a rank's art has to survive: the material follows each
SECTION rather than the floor, so a gate can put one tomb's stone against another's across a single
doorway. Over the generated world twenty of fifty-six sampled floors are multi-tier.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    seed: 7,
    difficulty: "starter",
    pathPuzzles: 4,
    exitOrStaircase: "exit",
    corridorStraightness: 0.65,
    packing: 1,
    section1: true,
    section1Difficulty: "starter",
    section1Puzzles: 2,
    section1End: "treasure",
    section1Gate: "none",
    section2: true,
    section2Difficulty: "junior",
    section2Puzzles: 2,
    section2End: "staircase",
    section2Gate: "floor-key"
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...N.parameters?.docs?.source},description:{story:"Dedicated demo for dialing the two layout knobs against a fixed amount of content:\n`packing` (grid footprint tightness) and `corridorStraightness` (corridor turniness).",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    seed: 42,
    difficulty: "starter",
    pathPuzzles: 0,
    exitOrStaircase: "exit",
    corridorStraightness: 0.65,
    packing: 1,
    section1: true,
    section1Difficulty: "starter",
    section1Puzzles: 0,
    section1End: "treasure",
    section1Gate: "none",
    section2: true,
    section2Difficulty: "junior",
    section2Puzzles: 1,
    section2End: "staircase",
    section2Gate: "floor-key"
  }
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveFirstPyramid />,
  parameters: {
    layout: "centered"
  }
}`,...I.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <DenseFloorDemo />,
  parameters: {
    layout: "fullscreen"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <MultiFloorExplorer seed={1} siteConfig={[{
    // Floor 1: direct path to treasure, junior-key gate to staircase (floor 2)
    pathPuzzles: 0,
    difficulty: "starter",
    end: "treasure",
    exitOrStaircase: "exit",
    sideSections: [{
      gate: {
        type: "tomb-key",
        wardKeyId: "junior_ward"
      },
      pathPuzzles: 0,
      difficulty: "starter",
      end: "staircase"
    }]
  }, {
    // Floor 2: junior puzzles + two side branches (one with puzzle, one direct chest)
    pathPuzzles: 3,
    difficulty: "junior",
    end: "treasure",
    exitOrStaircase: "exit",
    sideSections: [{
      pathPuzzles: 1,
      difficulty: "junior",
      end: "treasure"
    }, {
      pathPuzzles: 0,
      difficulty: "junior",
      end: "treasure"
    }]
  }]} />,
  parameters: {
    layout: "centered"
  }
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <HallHubView {...args} />,
  args: {
    seed: 7
  },
  argTypes: {
    seed: {
      control: {
        type: "number"
      }
    }
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...W.parameters?.docs?.source},description:{story:`A floor whose main path runs through a pillared hall in its middle, the side paths branching off the hall.`,...W.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <ShippedFloorView {...args} />,
  args: {
    floor: "starter_1#1#0"
  },
  argTypes: {
    floor: {
      control: "select",
      options: SHIPPED_FLOORS
    }
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...q.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <LockRegionRoomView {...args} />,
  args: {
    floor: LOCK_FLOORS[0],
    central: 1
  },
  argTypes: {
    floor: {
      control: "select",
      options: LOCK_FLOORS
    },
    central: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.25
      }
    }
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{j as Builder,B as DensePuzzlesAndKeys,P as FirstPyramid,W as HallHub,I as Interactive,Z as LockRegionRoom,N as PackingAndStraightness,M as RankSeams,q as ShippedFloor,V as TwoFloorLayout,Q as __namedExportsOrder,A as default};