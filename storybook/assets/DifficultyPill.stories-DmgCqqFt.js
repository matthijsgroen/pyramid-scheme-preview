import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,t as r}from"./metalPalette-i0m4NLJA.js";var i,a;function o(){return(o=e((()=>{n(),i=t(),a=({difficulty:e,label:t,disabled:n=!1})=>(0,i.jsx)(`span`,{className:`rounded-full border px-2 py-1 text-xs font-bold ${n?`border-gray-400 bg-gray-200 text-gray-600`:``}`,style:n?void 0:{backgroundColor:r[e].light,borderColor:r[e].material,color:r[e].shade},children:t.toUpperCase()})})))()}var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),s=t(),c={component:a,parameters:{layout:`centered`},argTypes:{difficulty:{control:`select`,options:[`starter`,`junior`,`expert`,`master`,`wizard`]},disabled:{control:`boolean`},label:{control:`text`}}},l={args:{difficulty:`starter`,label:`starter`}},u={args:{difficulty:`junior`,label:`junior`}},d={args:{difficulty:`expert`,label:`expert`}},f={args:{difficulty:`master`,label:`master`}},p={args:{difficulty:`wizard`,label:`wizard`}},m={args:{difficulty:`expert`,label:`expert`,disabled:!0}},h={args:{difficulty:`starter`,label:`starter`},render:()=>(0,s.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,s.jsx)(a,{difficulty:`starter`,label:`starter`}),(0,s.jsx)(a,{difficulty:`junior`,label:`junior`}),(0,s.jsx)(a,{difficulty:`expert`,label:`expert`}),(0,s.jsx)(a,{difficulty:`master`,label:`master`}),(0,s.jsx)(a,{difficulty:`wizard`,label:`wizard`})]})},g=[`Starter`,`Junior`,`Expert`,`Master`,`Wizard`,`Disabled`,`AllDifficulties`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    difficulty: "starter",
    label: "starter"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    difficulty: "junior",
    label: "junior"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    difficulty: "expert",
    label: "expert"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    difficulty: "master",
    label: "master"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    difficulty: "wizard",
    label: "wizard"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    difficulty: "expert",
    label: "expert",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    difficulty: "starter",
    label: "starter"
  },
  render: () => <div className="flex flex-wrap gap-2">
      <DifficultyPill difficulty="starter" label="starter" />
      <DifficultyPill difficulty="junior" label="junior" />
      <DifficultyPill difficulty="expert" label="expert" />
      <DifficultyPill difficulty="master" label="master" />
      <DifficultyPill difficulty="wizard" label="wizard" />
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as AllDifficulties,m as Disabled,d as Expert,u as Junior,f as Master,l as Starter,p as Wizard,g as __namedExportsOrder,c as default};