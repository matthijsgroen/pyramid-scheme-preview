import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{C as r,t as i,w as a}from"./registerModApps-nWdAfwlB.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o=t(),a(),i(),s=n(),c=({tier:e,ward:t,stayOpen:n})=>{let[i,a]=(0,o.useState)(0);return(0,s.jsx)(r,{ctx:{difficulty:e,tileset:e,reward:t?{type:`tombKey`,keyId:`made_up`}:{type:`mosaicPiece`}},onSolved:n?()=>{}:()=>setTimeout(()=>a(e=>e+1),1200)},`${e}-${t}-${i}`)},l={title:`Core/TreasureChest`,render:e=>(0,s.jsx)(c,{...e}),parameters:{layout:`fullscreen`},argTypes:{tier:{control:`select`,options:[`starter`,`junior`,`expert`,`master`,`wizard`]},ward:{control:`boolean`}}},u={args:{tier:`starter`,ward:!1}},d={args:{tier:`junior`,ward:!0}},f={args:{tier:`junior`,ward:!1,stayOpen:!0}},p={args:{tier:`junior`,ward:!0,stayOpen:!0}},m=[`PlainChest`,`WardKeyChest`,`PlainChestStaysOpen`,`WardKeyChestStaysOpen`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "starter",
    ward: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "junior",
    ward: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "junior",
    ward: false,
    stayOpen: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "junior",
    ward: true,
    stayOpen: true
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as PlainChest,f as PlainChestStaysOpen,d as WardKeyChest,p as WardKeyChestStaysOpen,m as __namedExportsOrder,l as default};