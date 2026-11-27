import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{a as n,i as r,o as i,r as a}from"./meta-COcnZ8E7.js";import{_ as o,a as s,c,d as l,f as u,g as d,i as f,m as p,o as m,p as h,r as g,s as _,u as v}from"./sudokuState-D-IXjDCv.js";import{n as y,t as b}from"./skins-17rKfMxq.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{i(),r(),f(),p(),l(),h(),b(),x=t(),S={title:`Puzzle/SudokuBoard`,component:u,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}},decorators:[e=>(0,x.jsx)(`div`,{className:`w-sm max-w-full`,children:(0,x.jsx)(e,{})})]},C=y(void 0,void 0),w=y(`scribe`,void 0),T=n(1,a.starter),E=n(4,a.wizard),D=(e,t)=>{let n=g(e);return{puzzle:e,skin:t,cells:n.cells,conflicts:o(e,_(n)),onSelect:()=>{}}},O={args:D(T,C)},k={args:D(E,C)},A={args:D(T,w)},j={args:D(E,w)},M=(e,t)=>{let n=e.givens.flatMap((e,t)=>e.flatMap((e,n)=>e===void 0?[{row:t,col:n}]:[])),r=g(e);for(let e of[1,3,5])r=c(r,n[0].row,n[0].col,e);for(let e of[2,4])r=c(r,n[1].row,n[1].col,e);r=s(r,n[2].row,n[2].col,e.solution[n[2].row][n[2].col]);let i=_(r);return{puzzle:e,skin:t,cells:r.cells,conflicts:o(e,i),stranded:d(e,i,m(r)),selected:n[1],onSelect:()=>{}}},N={args:M(T,C)},P={args:M(T,w)},F=(e,t)=>{let n=g(e),r=v(e,_(n),m(n),e.solution,e.techniqueCap);return{...D(e,t),hatched:r?.cells,marked:r?.evidence,selected:r?.focus}},I={args:F(T,C)},L={args:F(T,w)},R=(e,t)=>{let n=e.givens.flatMap((e,t)=>e.flatMap((e,n)=>e===void 0?[]:[{row:t,col:n,value:e}]))[0],r=e.givens.flatMap((e,t)=>e.flatMap((e,n)=>e===void 0?[{row:t,col:n}]:[])),i=g(e);for(let e of[n.value,n.value%6+1])i=c(i,r[0].row,r[0].col,e);let a=_(i);return{puzzle:e,skin:t,cells:i.cells,conflicts:o(e,a),stranded:d(e,a,m(i)),selected:{row:n.row,col:n.col},twinned:n.value,onSelect:()=>{}}},z={args:R(T,C)},B={args:R(T,w)},V={args:{...D(T,w),rolled:3},decorators:[e=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:`
          .animate-furl { animation-play-state: paused }
          div:nth-child(1) > .animate-furl { animation-delay: -230ms }
          div:nth-child(2) > .animate-furl { animation-delay: -150ms }
          div:nth-child(3) > .animate-furl { animation-delay: -70ms }
        `}),(0,x.jsx)(e,{})]})]},H=(e,t)=>{let n=e.givens.flatMap((e,t)=>e.flatMap((e,n)=>e===void 0?[{row:t,col:n}]:[])),r=n[0],i=n.find(e=>e.row===r.row&&e.col!==r.col)??n[1],a=e.solution[r.row][r.col],c=g(e);c=s(c,r.row,r.col,a),c=s(c,i.row,i.col,a);let l=_(c);return{puzzle:e,skin:t,cells:c.cells,conflicts:o(e,l),onSelect:()=>{}}},U={args:H(T,C)},W={args:H(T,w)},G=[`Starter`,`Wizard`,`Papyrus`,`PapyrusWizard`,`WithNotes`,`PapyrusWithNotes`,`WithHint`,`PapyrusWithHint`,`WithTwins`,`PapyrusWithTwins`,`PapyrusRolling`,`WithConflict`,`PapyrusWithConflict`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: untouched(starter, carved)
}`,...O.parameters?.docs?.source},description:{story:`Figures cut into a chamber wall — the face every room wears unless its site asked for another.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: untouched(wizard, carved)
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: untouched(starter, register)
}`,...A.parameters?.docs?.source},description:{story:`The same board as a scribe's register: six signs inked on papyrus, the puzzle's own in red.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: untouched(wizard, register)
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: pencilled(starter, carved)
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: pencilled(starter, register)
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: hinted(starter, carved)
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: hinted(starter, register)
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: twinned(starter, carved)
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: twinned(starter, register)
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...untouched(starter, register),
    rolled: 3
  },
  decorators: [Story => <>
        <style>{\`
          .animate-furl { animation-play-state: paused }
          div:nth-child(1) > .animate-furl { animation-delay: -230ms }
          div:nth-child(2) > .animate-furl { animation-delay: -150ms }
          div:nth-child(3) > .animate-furl { animation-delay: -70ms }
        \`}</style>
        <Story />
      </>]
}`,...V.parameters?.docs?.source},description:{story:`The finished register filing itself: each chamber is taken up as a scroll, one after the next, and laid
back out — the solved board is the reward, so it cannot be left rolled up (\`puzzle-screens.md\`).

**Frozen partway**, at three different heights, because a 420ms run is not something a screenshot can
hold: the story pauses each roll at a different point of its own animation rather than playing the wave
once on mount and leaving a board with nothing on it to look at.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: clashing(starter, carved)
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: clashing(starter, register)
}`,...W.parameters?.docs?.source}}}})))()}K();export{A as Papyrus,V as PapyrusRolling,W as PapyrusWithConflict,L as PapyrusWithHint,P as PapyrusWithNotes,B as PapyrusWithTwins,j as PapyrusWizard,O as Starter,U as WithConflict,I as WithHint,N as WithNotes,z as WithTwins,k as Wizard,G as __namedExportsOrder,S as default};