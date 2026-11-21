import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{r as n,t as r}from"./difficultyLevels-BkVSS0JK.js";import{a as i,o as a}from"./useChoiceKeys-ClRuEvvi.js";import{i as o,n as s,r as c,t as l}from"./ClockReflexChallenge-DSQX_7P9.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),a(),o(),s(),u=t(),d={title:`Trap/ClockReflexChallenge`,component:l,parameters:{layout:`centered`,backgrounds:{default:`trap`,values:[{name:`trap`,value:`#0a0806`}]}},args:{question:c(3,`expert`),timeLimit:i.expert,onPass:()=>{},onFail:()=>{}}},f={},p={args:{question:c(2,`starter`),timeLimit:i.starter}},m={args:{question:c(5,`wizard`),timeLimit:i.wizard}},h={args:{timeLimit:0},globals:{input:`keys`}},g={render:()=>(0,u.jsx)(`div`,{className:`flex flex-wrap gap-8`,children:r.map(e=>(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,u.jsx)(`span`,{className:`text-xs text-stone-400 uppercase`,children:e}),(0,u.jsx)(l,{question:c(9,e),timeLimit:i[e],onPass:()=>{},onFail:()=>{}})]},e))})},_=[`Expert`,`Starter`,`Wizard`,`KeyboardCursor`,`EveryTier`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    question: generate(2, "starter"),
    timeLimit: TRAP_TIME_LIMITS_SECONDS.starter
  }
}`,...p.parameters?.docs?.source},description:{story:`Half hours and eight seconds — the first face the game ever asks anyone to read against a clock.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    question: generate(5, "wizard"),
    timeLimit: TRAP_TIME_LIMITS_SECONDS.wizard
  }
}`,...m.parameters?.docs?.source},description:{story:`Single minutes in four seconds.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    timeLimit: 0
  },
  globals: {
    input: "keys"
  }
}`,...h.parameters?.docs?.source},description:{story:`The choices as a keyboard or pad player sees them, untimed so it holds still: nothing is focused as the
clock starts, so a stray Enter picks nothing. A digit 1–4 picks that choice outright; arrows or WASD walk
them (the focus is the cursor, look C) and Enter or Space picks the focused one.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8">
      {difficulties.map((difficulty: Difficulty) => <div key={difficulty} className="flex flex-col items-center gap-2">
          <span className="text-xs text-stone-400 uppercase">{difficulty}</span>
          <ClockReflexChallenge question={generate(9, difficulty)} timeLimit={TRAP_TIME_LIMITS_SECONDS[difficulty]} onPass={() => {}} onFail={() => {}} />
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Every tier's question, to see how far apart the four readings sit as the grid gets finer.`,...g.parameters?.docs?.description}}}})))()}v();export{g as EveryTier,f as Expert,h as KeyboardCursor,p as Starter,m as Wizard,_ as __namedExportsOrder,d as default};