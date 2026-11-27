import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./FutoshikiPad-D2VXs8M-.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r={title:`Puzzle/FutoshikiPad`,component:n,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}},args:{size:5,pencil:!1,exhausted:new Set,disabled:!1,onNumber:()=>{},onErase:()=>{},onTogglePencil:()=>{}}},i={},a={args:{pencil:!0}},o={args:{disabled:!0}},s={args:{exhausted:new Set([1,3])}},c={args:{size:7}},l=[`Default`,`Pencil`,`NothingPicked`,`NumbersSpent`,`Wrapped`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pencil: true
  }
}`,...a.parameters?.docs?.source},description:{story:`Pencil on: the keys turn sky, which is the mode showing itself where it acts.`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source},description:{story:`No square is picked, so a number has nowhere to go.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    exhausted: new Set([1, 3])
  }
}`,...s.parameters?.docs?.source},description:{story:`1 and 3 already fill a square in every row, so they are dimmed but still in place.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 7
  }
}`,...c.parameters?.docs?.source},description:{story:`Seven numbers wrap rather than shrink, split evenly so the last is not stranded alone.`,...c.parameters?.docs?.description}}}})))()}u();export{i as Default,o as NothingPicked,s as NumbersSpent,a as Pencil,c as Wrapped,l as __namedExportsOrder,r as default};