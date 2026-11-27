import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{Xt as r,Zt as i,ln as a,un as o}from"./registeredMods-h00D71jY.js";import{_ as s,a as c,c as l,d as u,f as d,g as f,h as p,i as m,l as h,m as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C,v as w,y as T}from"./BalancePuzzle-C6jzi2zD.js";import{n as E,t as D}from"./EncounterModal-D1eRAi3A.js";var O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{O=t(),o(),i(),w(),u(),v(),b(),l(),_(),E(),k=n(),A={title:`Puzzle/BalanceBoard`,component:x,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}}},j=(e,t)=>r(t,a[e]),M=j(`starter`,1),N=j(`wizard`,3),P=()=>{},F=(e,t)=>({symbol:m(t,void 0).symbol,scales:e.scales,lines:s(e.scales,{}),notes:[],glyphs:e.glyphs,values:{},selected:e.glyphs[0],maxValue:e.maxValue,onSelectGlyph:P,onPickWeight:P,onTapPiece:P,onTapRow:P,moves:{cancelling:e.cancelling!==!1,swapping:e.cancelling!==!1},onRemoveNote:P}),I={args:F(M)},L={args:F(N)},R={args:F(N,`judgement`)},z={args:F(N),render:()=>{let[e,t]=(0,O.useState)(C(N.glyphs)),n=s(N.scales,e.values),r=c(N,e.values,e.notes,N.solution,N.techniqueCap),i=p(N,e);return(0,k.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,k.jsx)(x,{scales:N.scales,symbol:m(void 0,void 0).symbol,lines:n,notes:e.notes,glyphs:N.glyphs,values:e.values,selected:e.selected,maxValue:N.maxValue,highlighted:r?.glyph,litRefs:r?.refs,pending:e.pending,swapSources:i.map(e=>e.ref),moves:{cancelling:N.cancelling!==!1,swapping:N.cancelling!==!1},onSelectGlyph:e=>t(t=>y(t,e)),onPickWeight:e=>t(t=>g(t,N.glyphs,e)),onTapPiece:(e,n,r)=>t(t=>f(t,N,e,n,r)),onTapRow:e=>{let n=i.find(t=>t.ref.kind===e.kind&&t.ref.index===e.index);n&&t(e=>h(e,n.note))},onRemoveNote:e=>t(t=>d(t,e))}),(0,k.jsx)(`p`,{className:`text-sm text-amber-300`,children:r?r.key:`nothing forced`}),T(N.glyphs,n,e.values)&&(0,k.jsx)(`p`,{className:`text-sm text-green-400`,children:`Solved!`})]})}},B={args:F(N),globals:{input:`keys`},parameters:{layout:`fullscreen`},render:()=>(0,k.jsx)(D,{tileset:`master`,children:(0,k.jsx)(S,{puzzle:j(`master`,2),difficulty:`master`,onSolved:P,onCancel:P})})},V=[`Starter`,`Wizard`,`Weighing`,`Played`,`KeyboardCursor`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: staticArgs(starter)
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: staticArgs(wizard)
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: staticArgs(wizard, "judgement")
}`,...R.parameters?.docs?.source},description:{story:`The same board drawn for a tomb: the unknowns become the heart, the feather of truth and what stands
around that scene (\`skins.ts\`). Nothing about the puzzle changes — this is the whole of the face, which
is why it is worth seeing beside the default rather than described.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: staticArgs(wizard),
  render: () => {
    const [state, setState] = useState(createBalanceState(wizard.glyphs));
    const lines = computeBalanceLines(wizard.scales, state.values);
    const hint = buildBalanceHint(wizard, state.values, state.notes, wizard.solution, wizard.techniqueCap);
    const sources = swapSources(wizard, state);
    return <div className="flex flex-col items-center gap-3">
        <BalanceBoard scales={wizard.scales} symbol={skinFor(undefined, undefined).symbol} lines={lines} notes={state.notes} glyphs={wizard.glyphs} values={state.values} selected={state.selected} maxValue={wizard.maxValue} highlighted={hint?.glyph} litRefs={hint?.refs} pending={state.pending} swapSources={sources.map(source => source.ref)} moves={{
        cancelling: wizard.cancelling !== false,
        swapping: wizard.cancelling !== false
      }} onSelectGlyph={glyph => setState(prev => selectGlyph(prev, glyph))} onPickWeight={value => setState(prev => setWeight(prev, wizard.glyphs, value))} onTapPiece={(ref, pan, index) => setState(prev => tapPiece(prev, wizard, ref, pan, index))} onTapRow={ref => {
        const source = sources.find(candidate => candidate.ref.kind === ref.kind && candidate.ref.index === ref.index);
        if (source) setState(prev => applySwap(prev, source.note));
      }} onRemoveNote={index => setState(prev => removeNote(prev, index))} />
        <p className="text-sm text-amber-300">{hint ? hint.key : "nothing forced"}</p>
        {isBalanceSolved(wizard.glyphs, lines, state.values) && <p className="text-sm text-green-400">Solved!</p>}
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`The whole board as played: weights, swaps that write notes, and the hint lighting what it names.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: staticArgs(wizard),
  globals: {
    input: "keys"
  },
  parameters: {
    layout: "fullscreen"
  },
  render: () => <EncounterModal tileset="master">
      <BalancePuzzle puzzle={board("master", 2)} difficulty="master" onSolved={noop} onCancel={noop} />
    </EncounterModal>
}`,...B.parameters?.docs?.source},description:{story:`The board as a keyboard or pad player sees it, in the frame it is met in: the focus is the cursor (look C,
the lifted piece) and starts on the first piece. Arrows or WASD walk the pieces, rows and palette, Enter
or Space presses, a digit sets that weight, H asks for the hint, Escape leaves.`,...B.parameters?.docs?.description}}}})))()}H();export{B as KeyboardCursor,z as Played,I as Starter,R as Weighing,L as Wizard,V as __namedExportsOrder,A as default};