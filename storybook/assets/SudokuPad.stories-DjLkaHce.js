import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./SudokuPad--IGPKK7J.js";import{n as r,t as i}from"./skins-GSeC_hNc.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),i(),a={title:`Puzzle/SudokuPad`,component:n,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}},args:{size:6,skin:r(void 0,void 0),pencil:!1,exhausted:new Set,disabled:!1,onValue:()=>{},onErase:()=>{},onTogglePencil:()=>{}}},o={},s={args:{pencil:!0}},c={args:{exhausted:new Set([2,5])}},l={args:{disabled:!0}},u={args:{skin:r(`scribe`,void 0)}},d={args:{skin:r(`scribe`,void 0),pencil:!0}},f=[`Values`,`Pencil`,`SomeSpent`,`NothingPicked`,`Papyrus`,`PapyrusPencil`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    pencil: true
  }
}`,...s.parameters?.docs?.source},description:{story:`Pencil on: the keys turn sky, which is the mode showing itself where it acts.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    exhausted: new Set([2, 5])
  }
}`,...c.parameters?.docs?.source},description:{story:`Values with every square of their own already spoken for are dimmed, never removed — the pad must
 not reshuffle under a finger mid-solve.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source},description:{story:`Nothing is picked on the board, so a value has nowhere to go yet.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    skin: skinFor("scribe", undefined)
  }
}`,...u.parameters?.docs?.source},description:{story:`The scribe's register types in signs: the pad wears the same face the board does.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    skin: skinFor("scribe", undefined),
    pencil: true
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as NothingPicked,u as Papyrus,d as PapyrusPencil,s as Pencil,c as SomeSpent,o as Values,f as __namedExportsOrder,a as default};