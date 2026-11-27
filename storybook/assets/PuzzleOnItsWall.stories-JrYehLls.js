import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{n as r,r as i,t as a}from"./difficultyLevels-BkVSS0JK.js";import{r as o,t as s}from"./familyRegistry-DrEyiUHN.js";import{D as c,E as l,S as u,_ as d,b as f,t as p,v as m,x as h,y as g}from"./registerModApps-nWdAfwlB.js";import{n as _,t as v}from"./EncounterModal-D1eRAi3A.js";var y,b,x;function S(){return(S=e((()=>{i(),y=e=>a.filter(t=>r(t,e.minTier??`starter`)>=0),b=[`puzzle`,`tomb-puzzle`,`capstone`],x=e=>e.tags.some(e=>b.includes(e))})))()}var C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{C=t(),i(),o(),S(),h(),l(),d(),_(),f(),p(),w=n(),T=s().filter(e=>x(e.meta)),E=s().filter(e=>!x(e.meta)),D=1,O=e=>[`default`,...new Set(Object.values(e.meta.faces??{}).flat().filter(e=>e!=="default"))],k={showConversation:()=>{}},A=({familyId:e,difficulty:t,face:n=`default`,wall:r})=>{let i=T.find(t=>t.meta.id===e);return i?y(i.meta).includes(t)?(0,w.jsx)(v,{tileset:r??t,children:(0,w.jsx)(j,{family:i,difficulty:t,face:n,wall:r},`${i.meta.id}:${t}:${n}:${r}`)}):(0,w.jsxs)(`p`,{className:`p-4 text-center text-stone-300`,children:[i.meta.icon,` `,i.meta.id,` debuts at `,i.meta.minTier,`, not `,t,`.`]}):(0,w.jsxs)(`p`,{className:`p-4 text-white`,children:[`No family `,e,` in the registry.`]})},j=({family:e,difficulty:t,face:n,wall:r})=>{let i=u(),a=c(),o=m(),s=(0,C.useMemo)(()=>({journeyId:`puzzle-on-its-wall`,levelNr:1,edgeId:`story:${D}`,address:`story#${D}@rencounter`,sectionHash:`story`,freshArrival:!0,difficulty:t,tileset:r,theme:n==="default"?void 0:n,tags:e.meta.tags}),[e,t,n,r]),l=(0,C.useMemo)(()=>{try{return{puzzle:e.generate(D,s)}}catch(e){return{error:e.message}}},[e,s]);if(`error`in l)return(0,w.jsxs)(`p`,{className:`text-red-300`,children:[e.meta.id,` did not generate: `,l.error]});let d=e.Component;return(0,w.jsx)(d,{puzzle:l.puzzle,ctx:s,progression:i,journeys:a,inventory:o,applyReward:()=>{},onSolved:()=>{},onCancel:()=>{}})},M={component:A,decorators:[e=>(0,w.jsx)(g,{value:k,children:(0,w.jsx)(e,{})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Every puzzle family (${T.map(e=>e.meta.id).join(`, `)}) in the encounter frame the game opens it in, against the chosen rank's wall, built from its real seed list at seed ${D}. Not shown, being what the puzzle lab does not play either (a room that needs a site around it, such as a fork, a mechanism, a shop, a key or a conversation, or a reflex trap rather than a board): ${E.map(e=>e.meta.id).join(`, `)}.`}}},argTypes:{familyId:{control:`select`,options:T.map(e=>e.meta.id)},difficulty:{control:`inline-radio`,options:a},wall:{control:`inline-radio`,options:[...a,`cave`]},face:{control:`select`,options:[...new Set(T.flatMap(O))]}},args:{familyId:T[0]?.meta.id??``,difficulty:`starter`,face:`default`}},N={},P={argTypes:{familyId:{table:{disable:!0}},face:{table:{disable:!0}}},render:({difficulty:e,wall:t})=>(0,w.jsx)(`div`,{className:`flex flex-col gap-8 bg-black`,children:T.flatMap(n=>O(n).map(r=>(0,w.jsx)(`div`,{className:`relative min-h-180`,style:{contain:`paint`},children:(0,w.jsx)(A,{familyId:n.meta.id,difficulty:e,face:r,wall:t})},`${n.meta.id}:${r}`)))})},F=[`OneFamily`,`EveryFamily`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{}`,...N.parameters?.docs?.source},description:{story:`One board on its wall: flip the family and the rank.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  argTypes: {
    familyId: {
      table: {
        disable: true
      }
    },
    face: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    difficulty,
    wall
  }) => <div className="flex flex-col gap-8 bg-black">
      {benchFamilies.flatMap(family => facesOf(family).map(face =>
    // \`contain: paint\` makes this block the frame's containing block, so each \`fixed inset-0\` frame fills
    // its own slot instead of all of them stacking over the viewport.
    <div key={\`\${family.meta.id}:\${face}\`} className="relative min-h-180" style={{
      contain: "paint"
    }}>
            <PuzzleOnItsWall familyId={family.meta.id} difficulty={difficulty} face={face} wall={wall} />
          </div>))}
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Every board in every face on the same rank's wall, one under the other: flip the rank to repaint-check them all.`,...P.parameters?.docs?.description}}}})))()}I();export{P as EveryFamily,N as OneFamily,F as __namedExportsOrder,M as default};