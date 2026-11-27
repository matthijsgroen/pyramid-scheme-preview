import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,t as r}from"./KeyIcon-Ca2rGTPY.js";import{n as i,t as a}from"./GateFacePanel-B1Pq85cS.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{i(),n(),o=t(),s={component:a,args:{title:`A door that waits`,hint:`Every sign must burn before it opens.`,turnAroundLabel:`Turn around`,onTurnAround:()=>{}}},c={args:{markers:[{id:`a`,icon:(0,o.jsx)(`span`,{children:`🔥`}),lit:!0,label:`Torch: lit`},{id:`b`,icon:(0,o.jsx)(`span`,{children:`🔥`}),lit:!1,label:`Torch: unlit`}]}},l={args:{markers:[{id:`a`,icon:(0,o.jsx)(`span`,{children:`🔥`}),lit:!0,label:`Torch: lit`},{id:`b`,icon:(0,o.jsx)(`span`,{children:`🔥`}),lit:!0,label:`Torch: lit`},{id:`c`,icon:(0,o.jsx)(`span`,{children:`🔥`}),lit:!1,label:`Torch: unlit`},{id:`k`,icon:(0,o.jsx)(r,{color:`red`,size:40}),lit:!1,label:`Key: not held`}]}},u={args:{markers:[{id:`a`,icon:(0,o.jsx)(`span`,{children:`🔥`}),lit:!0,label:`Torch: lit`},{id:`b`,icon:(0,o.jsx)(`span`,{children:`🎚️`}),lit:!0,label:`Lever: set`}]}},d={args:{markers:[],orders:[{id:`plates`,tiles:[{id:`0`,glyph:`𓀀`,status:`inOrder`,label:`Step 1: walked in order`},{id:`1`,glyph:`𓁐`,status:`unwalked`,label:`Step 2: not yet walked`},{id:`2`,glyph:`𓂀`,status:`unwalked`,label:`Step 3: not yet walked`}]}]}},f={args:{markers:[],orders:[{id:`plates`,tiles:[{id:`0`,glyph:`𓀀`,status:`inOrder`,label:`Step 1: walked in order`},{id:`1`,glyph:`𓁐`,status:`unwalked`,label:`Step 2: not yet walked`},{id:`2`,glyph:`𓂀`,status:`outOfOrder`,label:`Step 3: walked out of order`}],note:`A tile was walked out of order.`,reset:{label:`Start again`,onReset:()=>{}}}]}},p=[`TwoTorchesOneLit`,`TorchesAndAKey`,`AllLit`,`SequenceMidRun`,`SequenceSpoiled`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    markers: [{
      id: "a",
      icon: <span>🔥</span>,
      lit: true,
      label: "Torch: lit"
    }, {
      id: "b",
      icon: <span>🔥</span>,
      lit: false,
      label: "Torch: unlit"
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    markers: [{
      id: "a",
      icon: <span>🔥</span>,
      lit: true,
      label: "Torch: lit"
    }, {
      id: "b",
      icon: <span>🔥</span>,
      lit: true,
      label: "Torch: lit"
    }, {
      id: "c",
      icon: <span>🔥</span>,
      lit: false,
      label: "Torch: unlit"
    }, {
      id: "k",
      icon: <KeyIcon color="red" size={40} />,
      lit: false,
      label: "Key: not held"
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    markers: [{
      id: "a",
      icon: <span>🔥</span>,
      lit: true,
      label: "Torch: lit"
    }, {
      id: "b",
      icon: <span>🎚️</span>,
      lit: true,
      label: "Lever: set"
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    markers: [],
    orders: [{
      id: "plates",
      tiles: [{
        id: "0",
        glyph: "𓀀",
        status: "inOrder",
        label: "Step 1: walked in order"
      }, {
        id: "1",
        glyph: "𓁐",
        status: "unwalked",
        label: "Step 2: not yet walked"
      }, {
        id: "2",
        glyph: "𓂀",
        status: "unwalked",
        label: "Step 3: not yet walked"
      }]
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    markers: [],
    orders: [{
      id: "plates",
      tiles: [{
        id: "0",
        glyph: "𓀀",
        status: "inOrder",
        label: "Step 1: walked in order"
      }, {
        id: "1",
        glyph: "𓁐",
        status: "unwalked",
        label: "Step 2: not yet walked"
      }, {
        id: "2",
        glyph: "𓂀",
        status: "outOfOrder",
        label: "Step 3: walked out of order"
      }],
      note: "A tile was walked out of order.",
      reset: {
        label: "Start again",
        onReset: () => {}
      }
    }]
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as AllLit,d as SequenceMidRun,f as SequenceSpoiled,l as TorchesAndAKey,c as TwoTorchesOneLit,p as __namedExportsOrder,s as default};