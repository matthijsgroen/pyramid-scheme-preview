import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-D0Egwrw_.js";import{n as r,t as i}from"./CollectionTabs-DS_bCDW4.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{a=t(),r(),o=n(),s=[{id:`a`,label:`Hiërogliefen`},{id:`b`,label:`Schatten · 1 nieuw`},{id:`c`,label:`Kaarten`},{id:`d`,label:`Sleutels`},{id:`e`,label:`Constructies`}],c={component:i,parameters:{layout:`centered`},args:{tabs:s,selected:`a`,onSelect:()=>{},label:`Je verzameling`,panelId:`story-panel`},decorators:[e=>(0,o.jsx)(`div`,{className:`w-[358px] bg-camp-paper p-3.5`,children:(0,o.jsx)(e,{})})]},l={render:e=>{let[t,n]=(0,a.useState)(e.selected);return(0,o.jsx)(i,{...e,selected:t,onSelect:n})}},u={args:{tabs:s.slice(0,2),selected:`b`}},d=[`FiveTabs`,`TwoTabs`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selected);
    return <CollectionTabs {...args} selected={selected} onSelect={setSelected} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: tabs.slice(0, 2),
    selected: "b"
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as FiveTabs,u as TwoTabs,d as __namedExportsOrder,c as default};