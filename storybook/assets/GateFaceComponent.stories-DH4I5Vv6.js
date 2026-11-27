import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{c as n,s as r,t as i}from"./registerModApps-nWdAfwlB.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),a=t(),o=({face:e})=>(0,a.jsx)(r,{ctx:{gateFace:e},journeys:{setMechanismState:()=>{}},onCancel:()=>{}}),s=(e,t)=>({id:e,icon:{kind:`plate`,wants:`stone`},lit:t}),c={title:`Topology/Door faces`,component:o,parameters:{layout:`centered`}},l={args:{face:{markers:[s(`stones.e1`,!0),s(`stones.e2`,!1)]}}},u={args:{face:{markers:[s(`stones.a`,!1),{id:`stones.b`,icon:{kind:`plate`,wants:`empty`},lit:!0}]}}},d={args:{face:{markers:[],sequences:[{id:`run`,tiles:[{glyph:77824,status:`inOrder`},{glyph:77904,status:`unwalked`},{glyph:77952,status:`unwalked`}]}]}}},f={args:{face:{markers:[{id:`L`,icon:{kind:`mechanism`,family:`handle`},lit:!0},{id:`T`,icon:{kind:`mechanism`,family:`torch`},lit:!1},s(`stones.p`,!0),{id:`k`,icon:{kind:`key`},lit:!1}],sequences:[{id:`run`,tiles:[{glyph:77824,status:`inOrder`},{glyph:77904,status:`outOfOrder`}]}]}}},p=[`TwoPlatesOneHeld`,`PlateLeftEmpty`,`SequenceSymbols`,`Mixed`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    face: {
      markers: [stone("stones.e1", true), stone("stones.e2", false)]
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    face: {
      markers: [stone("stones.a", false), {
        id: "stones.b",
        icon: {
          kind: "plate",
          wants: "empty"
        },
        lit: true
      }]
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    face: {
      markers: [],
      sequences: [{
        id: "run",
        tiles: [{
          glyph: 0x13000,
          status: "inOrder"
        }, {
          glyph: 0x13050,
          status: "unwalked"
        }, {
          glyph: 0x13080,
          status: "unwalked"
        }]
      }]
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    face: {
      markers: [{
        id: "L",
        icon: {
          kind: "mechanism",
          family: "handle"
        },
        lit: true
      }, {
        id: "T",
        icon: {
          kind: "mechanism",
          family: "torch"
        },
        lit: false
      }, stone("stones.p", true), {
        id: "k",
        icon: {
          kind: "key"
        },
        lit: false
      }],
      sequences: [{
        id: "run",
        tiles: [{
          glyph: 0x13000,
          status: "inOrder"
        }, {
          glyph: 0x13050,
          status: "outOfOrder"
        }]
      }]
    }
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Mixed,u as PlateLeftEmpty,d as SequenceSymbols,l as TwoPlatesOneHeld,p as __namedExportsOrder,c as default};