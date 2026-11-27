import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{n as r,t as i}from"./CompassSheet-CK_1gJUY.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={component:i,decorators:[e=>(0,o.jsx)(`div`,{className:`max-w-sm bg-camp-glass-solid p-2`,children:(0,o.jsx)(e,{})})],args:{parts:{held:2,total:3},partsLabel:`2 of 3 parts · sees the floor`,pickHeading:`What is the compass looking for?`,onlyIncomplete:`Only signs you have a piece of, until they are complete.`,glyphs:[{id:`owl`,symbol:`𓅓`,progress:`1/3`},{id:`eye`,symbol:`𓂀`,progress:`2/4`},{id:`beetle`,symbol:`𓆣`,progress:`1/2`},{id:`sun`,symbol:`𓇳`,progress:`1/2`},{id:`ankh`,symbol:`𓋹`,progress:`3/4`}],picked:`owl`,onPick:s(),whereHeading:`Where the pieces of 𓅓 lie`,pickFirst:`Pick a sign to see where its pieces lie.`,nothingToFind:`Every sign you can reach is complete.`,noneInReach:`No piece yet that you can take on a floor you have been to.`,rows:[{key:`a`,label:`Temple of Thoth L1 F2`,access:`open`}],accessLabels:{open:`Nothing known in the way`,unknown:`Maybe`},followLabel:`Follow this sign`,followingLabel:`The compass follows this sign`,following:!1,onFollow:s()}},l={},u={args:{following:!0}},d={args:{picked:null}},f={args:{rows:[]}},p={args:{glyphs:[]}},m={render:e=>{let[t,n]=(0,a.useState)(null),r={...e,picked:t,onPick:n};return(0,o.jsx)(i,{...r})}},h=[`Picked`,`Following`,`NothingPicked`,`NoneInReach`,`AllComplete`,`Interactive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    following: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    picked: null
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    glyphs: []
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [picked, setPicked] = useState<string | null>(null);
    const props: CompassSheetProps = {
      ...args,
      picked,
      onPick: setPicked
    };
    return <CompassSheet {...props} />;
  }
}`,...m.parameters?.docs?.source},description:{story:`Pick a sign to see its button wake up.`,...m.parameters?.docs?.description}}}})))()}g();export{p as AllComplete,u as Following,m as Interactive,f as NoneInReach,d as NothingPicked,l as Picked,h as __namedExportsOrder,c as default};