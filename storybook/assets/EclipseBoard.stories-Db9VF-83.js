import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{r,t as i}from"./difficultyLevels-BkVSS0JK.js";import{T as a,_ as o,a as s,c,h as l,i as u,l as d,m as f,n as p,s as m,t as h,u as g,w as _,y as v}from"./generateEclipse-2nAY1P3j.js";import{n as y,t as b}from"./EclipseBoard-CtiSxIYA.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{x=t(),r(),v(),a(),u(),c(),y(),S=n(),C={title:`Puzzle/EclipseBoard`,component:b,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}}},w=(e,t)=>p(t,_[e]),T=({difficulty:e,seed:t})=>{let[n]=(0,x.useState)(()=>w(e,t)),[r,i]=(0,x.useState)(()=>f(n)),a=d(n,[...r.marks],s(n.techniqueCap,n.variant));return(0,S.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,S.jsx)(b,{puzzle:n,state:r,highlighted:a&&new Set(a.cells),onTapCell:e=>i(l(n,r,e))}),(0,S.jsxs)(`span`,{className:`text-xs text-stone-400`,children:[e,` · `,n.size,`×`,n.size,` · `,n.links.length,` signs · `,h(n),` given ·`,` `,o(n,r)?`solved`:a?.technique??`stuck`,a?.variant?` (${a.variant})`:``]})]})},E=(e,t)=>{let n=w(e,t);return{args:{puzzle:n,state:f(n),onTapCell:()=>{}},render:()=>(0,S.jsx)(T,{difficulty:e,seed:t})}},D=E(`starter`,3),O=E(`junior`,4),k=E(`expert`,5),A=E(`master`,2),j=E(`wizard`,7),M={args:{puzzle:w(`starter`,1),state:f(w(`starter`,1)),onTapCell:()=>{}},render:()=>(0,S.jsx)(`div`,{className:`flex flex-wrap items-start justify-center gap-8`,children:i.map(e=>(0,S.jsx)(`div`,{className:`w-72`,children:(0,S.jsx)(T,{difficulty:e,seed:11})},e))})},N=`sun`,P=`moon`,F=void 0,I={args:{puzzle:{size:4,given:Array(16).fill(void 0),links:[{a:0,b:1,kind:`same`}]},state:{marks:[N,P,F,F,P,P,P,F,F,F,F,F,F,F,F,F]},onTapCell:()=>{}}},L={args:{puzzle:w(`starter`,1),state:f(w(`starter`,1)),onTapCell:()=>{}},render:()=>(0,S.jsx)(`ol`,{className:`flex flex-col gap-1 text-sm text-stone-300`,children:m.map(e=>(0,S.jsxs)(`li`,{children:[g(e)+1,`. `,e]},e))})},R=[`Starter`,`Junior`,`Expert`,`Master`,`Wizard`,`EveryTier`,`Conflicts`,`TechniqueOrder`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`playable("starter", 3)`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`playable("junior", 4)`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`playable("expert", 5)`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`playable("master", 2)`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`playable("wizard", 7)`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: board("starter", 1),
    state: createEclipseState(board("starter", 1)),
    onTapCell: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-8">
      {difficulties.map(difficulty => <div key={difficulty} className="w-72">
          <Playable difficulty={difficulty} seed={11} />
        </div>)}
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Every tier at once: how many signs a board carries is the family's difficulty curve made visible.`,...M.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: {
      size: 4,
      given: new Array(16).fill(undefined),
      links: [{
        a: 0,
        b: 1,
        kind: "same"
      }]
    } as EclipsePuzzle,
    state: {
      // prettier-ignore
      marks: [S, M, _, _, M, M, M, _, _, _, _, _, _, _, _, _]
    },
    onTapCell: () => {}
  }
}`,...I.parameters?.docs?.source},description:{story:`A board mid-mistake: three in a row, and a sign contradicted.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: board("starter", 1),
    state: createEclipseState(board("starter", 1)),
    onTapCell: () => {}
  },
  render: () => <ol className="flex flex-col gap-1 text-sm text-stone-300">
      {ECLIPSE_TECHNIQUES.map(id => <li key={id}>
          {techniqueRank(id) + 1}. {id}
        </li>)}
    </ol>
}`,...L.parameters?.docs?.source},description:{story:`The ladder itself, cheapest first — the order a hint reaches for.`,...L.parameters?.docs?.description}}}})))()}z();export{I as Conflicts,M as EveryTier,k as Expert,O as Junior,A as Master,D as Starter,L as TechniqueOrder,j as Wizard,R as __namedExportsOrder,C as default};