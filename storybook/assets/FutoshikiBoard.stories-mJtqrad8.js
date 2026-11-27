import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{f as r,p as i,r as a,t as o}from"./generateFutoshiki-DEQ2uVL3.js";import{_ as s,a as c,c as l,d as u,f as d,h as f,i as p,m,o as h,p as g,r as _,s as v,u as y}from"./futoshikiState-DOU4vVnT.js";var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=t(),a(),i(),h(),f(),u(),g(),x=n(),S={title:`Puzzle/FutoshikiBoard`,component:d,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}}},C=(e,t)=>{let{size:n,...i}=r[e];return o(n,t,i)},w=C(`starter`,1),T=C(`wizard`,4),E=e=>{let t=_(e);return{puzzle:e,cells:t.cells,conflicts:m(e,c(t)),onSelect:()=>{}}},D={args:E(w)},O={args:E(T)},k={args:E(w),render:()=>{let e=_(w);e=l(e,0,0,1),e=l(e,0,0,3),e=l(e,1,1,2),e=l(e,1,1,4),e=v(e,2,1,2);let t=c(e);return(0,x.jsx)(d,{puzzle:w,cells:e.cells,conflicts:m(w,t),stranded:s(w,t,p(e)),selected:{row:1,col:1},onSelect:()=>{}})}},A={args:E(w),render:()=>{let e=w.size,t=Array.from({length:e},()=>Array(e).fill(void 0));t[0][0]=e,t[0][1]=e;let n=t.map(e=>e.map(e=>({value:e,notes:[],given:!1})));return(0,x.jsx)(d,{puzzle:w,cells:n,conflicts:m(w,t),onSelect:()=>{}})}},j={args:E(w),render:()=>{let[e,t]=(0,b.useState)(()=>_(w)),n=y(w,c(e),p(e),w.solution,w.techniqueCap);return(0,x.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,x.jsx)(d,{puzzle:w,cells:e.cells,conflicts:m(w,c(e)),highlighted:n?.cells,litSigns:n?.constraints,onSelect:(e,n)=>t(t=>l(t,e,n,1))}),(0,x.jsx)(`p`,{className:`text-sm text-amber-300`,children:n?n.key:`nothing forced`})]})}},M=[`Starter`,`Wizard`,`WithNotes`,`WithConflicts`,`WithHint`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: staticArgs(starter)
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: staticArgs(wizard)
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: staticArgs(starter),
  render: () => {
    let state = createFutoshikiState(starter);
    state = toggleFutoshikiNote(state, 0, 0, 1);
    state = toggleFutoshikiNote(state, 0, 0, 3);
    state = toggleFutoshikiNote(state, 1, 1, 2);
    state = toggleFutoshikiNote(state, 1, 1, 4);
    state = setFutoshikiValue(state, 2, 1, 2);
    const values = futoshikiValues(state);
    return <FutoshikiBoard puzzle={starter} cells={state.cells} conflicts={futoshikiConflicts(starter, values)} stranded={strandedNotes(starter, values, futoshikiNotes(state))} selected={{
      row: 1,
      col: 1
    }} onSelect={() => {}} />;
  }
}`,...k.parameters?.docs?.source},description:{story:`Pencilled options in some squares, a number written into another, and one square picked. The 2
written into the middle column strikes the pencilled 2 above it through in red rather than rubbing
it out — correcting that 2 would bring the note back.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: staticArgs(starter),
  render: () => {
    const size = starter.size;
    const values = Array.from({
      length: size
    }, () => new Array<number | undefined>(size).fill(undefined));
    values[0][0] = size;
    values[0][1] = size;
    const cells = values.map(row => row.map(value => ({
      value,
      notes: [] as number[],
      given: false
    })));
    return <FutoshikiBoard puzzle={starter} cells={cells} conflicts={futoshikiConflicts(starter, values)} onSelect={() => {}} />;
  }
}`,...A.parameters?.docs?.source},description:{story:`The same number twice in one row, and a sign the two numbers beside it read the wrong way round.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: staticArgs(starter),
  render: () => {
    const [state, setState] = useState(() => createFutoshikiState(starter));
    const hint = buildFutoshikiHint(starter, futoshikiValues(state), futoshikiNotes(state), starter.solution, starter.techniqueCap);
    return <div className="flex flex-col items-center gap-3">
        <FutoshikiBoard puzzle={starter} cells={state.cells} conflicts={futoshikiConflicts(starter, futoshikiValues(state))} highlighted={hint?.cells} litSigns={hint?.constraints} onSelect={(row, col) => setState(prev => toggleFutoshikiNote(prev, row, col, 1))} />
        <p className="text-sm text-amber-300">{hint ? hint.key : "nothing forced"}</p>
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:`The board as played, with the hint's squares and sign lit — the state after pressing Hint.`,...j.parameters?.docs?.description}}}})))()}N();export{D as Starter,A as WithConflicts,j as WithHint,k as WithNotes,O as Wizard,M as __namedExportsOrder,S as default};