import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{i as r,n as i,o as a,t as o}from"./sumpleteConfig-D3s28_h8.js";import{a as s,c,d as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./sumpleteState-Bwzsn_zk.js";var v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{v=t(),a(),i(),p(),f(),d(),l(),y=n(),b={title:`Puzzle/SumpleteBoard`,component:_,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}}},x=(e,t)=>{let{size:n,...i}=o[e];return r(n,t,i)},S=x(`starter`,1),C=x(`wizard`,7),w=e=>{let t=g(e.grid.length).cells;return{grid:e.grid,cells:t,rows:s(e.grid,t,e.rowTargets),cols:u(e.grid,t,e.colTargets),onToggle:()=>{}}},T={args:w(S)},E={args:w(C)},D={args:w(S),render:()=>{let[e,t]=(0,v.useState)(g(S.grid.length)),n=s(S.grid,e.cells,S.rowTargets),r=u(S.grid,e.cells,S.colTargets),i=c(S,e.cells,S.solution,S.techniqueCap);return(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,y.jsx)(_,{grid:S.grid,cells:e.cells,rows:n,cols:r,highlighted:i?.cells,litLine:i?.line,onToggle:(e,n)=>t(t=>m(t,e,n))}),(0,y.jsx)(`p`,{className:`text-sm text-amber-300`,children:i?i.key:`nothing forced`}),h(n,r)&&(0,y.jsx)(`p`,{className:`text-sm text-green-400`,children:`Solved!`})]})}},O=[`Starter`,`Wizard`,`WithHint`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: staticArgs(starter)
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: staticArgs(wizard)
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: staticArgs(starter),
  render: () => {
    const [state, setState] = useState(createSumpleteState(starter.grid.length));
    const rows = computeRowLines(starter.grid, state.cells, starter.rowTargets);
    const cols = computeColLines(starter.grid, state.cells, starter.colTargets);
    const hint = buildSumpleteHint(starter, state.cells, starter.solution, starter.techniqueCap);
    return <div className="flex flex-col items-center gap-3">
        <SumpleteBoard grid={starter.grid} cells={state.cells} rows={rows} cols={cols} highlighted={hint?.cells} litLine={hint?.line} onToggle={(row, col) => setState(prev => toggleSumpleteCell(prev, row, col))} />
        <p className="text-sm text-amber-300">{hint ? hint.key : "nothing forced"}</p>
        {isSumpleteSolved(rows, cols) && <p className="text-sm text-green-400">Solved!</p>}
      </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:`The board as played, with the hint's cells and line lit — the state after pressing Hint.`,...D.parameters?.docs?.description}}}})))()}k();export{T as Starter,D as WithHint,E as Wizard,O as __namedExportsOrder,b as default};