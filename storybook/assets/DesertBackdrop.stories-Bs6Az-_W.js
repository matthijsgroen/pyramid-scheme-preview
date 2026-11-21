import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";import{a as n,i as r,n as i,t as a}from"./DesertBackdrop-BTMSk9yH.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),r(),o=t(),s={component:a,parameters:{layout:`fullscreen`},args:{levelNr:1,start:`morning`,timeStepSize:1,showNile:!0},argTypes:{levelNr:{control:{type:`range`,min:1,max:n.length*2,step:1}},start:{control:`select`,options:[`morning`,`afternoon`,`evening`,`night`]},landmark:{control:`select`,options:[void 0,`sphinx`]}}},c={args:{levelNr:1,start:`morning`},render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsxs)(`div`,{className:`text-center`,children:[(0,o.jsx)(`h1`,{className:`mb-4 text-4xl font-bold text-white`,children:`Morning`}),(0,o.jsx)(`p`,{className:`text-xl text-white`,children:`Beautiful sunrise scene`})]})})},l={args:{levelNr:1,start:`afternoon`},render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsxs)(`div`,{className:`text-center`,children:[(0,o.jsx)(`h1`,{className:`mb-4 text-4xl font-bold text-white`,children:`Afternoon`}),(0,o.jsx)(`p`,{className:`text-xl text-white`,children:`Bright sunny day`})]})})},u={args:{levelNr:1,start:`evening`},render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsxs)(`div`,{className:`text-center`,children:[(0,o.jsx)(`h1`,{className:`mb-4 text-4xl font-bold text-white`,children:`Evening`}),(0,o.jsx)(`p`,{className:`text-xl text-white`,children:`Golden sunset`})]})})},d={args:{levelNr:1,start:`night`},render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsxs)(`div`,{className:`text-center`,children:[(0,o.jsx)(`h1`,{className:`mb-4 text-4xl font-bold text-white`,children:`Night`}),(0,o.jsx)(`p`,{className:`text-xl text-white`,children:`Starry night with crescent moon`})]})})},f={args:{levelNr:10,start:`morning`},render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsxs)(`div`,{className:`text-center`,children:[(0,o.jsx)(`h1`,{className:`mb-4 text-4xl font-bold text-white`,children:`Level 10`}),(0,o.jsx)(`p`,{className:`text-xl text-white`,children:`Day/night cycle progression`})]})})},p={args:{levelNr:1,start:`afternoon`},render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsx)(`div`,{className:`flex flex-col items-center justify-center`,children:(0,o.jsxs)(`div`,{className:`rounded-lg bg-white/90 p-8 shadow-lg`,children:[(0,o.jsx)(`h2`,{className:`mb-4 text-2xl font-bold`,children:`Pyramid Game`}),(0,o.jsx)(`p`,{className:`mb-4`,children:`This is how game content would appear over the backdrop`}),(0,o.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:Array.from({length:9},(e,t)=>(0,o.jsx)(`div`,{className:`flex size-12 items-center justify-center rounded border-2 border-amber-400 bg-amber-200`,children:t+1},t))})]})})})},m={args:{levelNr:1,start:`morning`}},h={args:{levelNr:1,start:`morning`,showNile:!1,landmark:`sphinx`}},g={args:{levelNr:1,start:`afternoon`,showNile:!1,landmark:`sphinx`},render:e=>(0,o.jsx)(`div`,{className:`grid grid-cols-2 gap-1 bg-black p-1 md:grid-cols-4`,children:n.map((t,n)=>(0,o.jsx)(`div`,{className:`h-60 overflow-hidden`,children:(0,o.jsx)(a,{...e,levelNr:n,children:(0,o.jsx)(`div`,{className:`h-16 w-28 -translate-y-1/2 bg-amber-200/80 [clip-path:polygon(50%_0,100%_100%,0_100%)]`})})},n))})},_=[`Morning`,`Afternoon`,`Evening`,`Night`,`CycleProgression`,`WithGameContent`,`Empty`,`WithLandmark`,`LandmarkThroughTheDay`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 1,
    start: "morning"
  },
  render: args => <DesertBackdrop {...args}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Morning</h1>
        <p className="text-xl text-white">Beautiful sunrise scene</p>
      </div>
    </DesertBackdrop>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 1,
    start: "afternoon"
  },
  render: args => <DesertBackdrop {...args}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Afternoon</h1>
        <p className="text-xl text-white">Bright sunny day</p>
      </div>
    </DesertBackdrop>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 1,
    start: "evening"
  },
  render: args => <DesertBackdrop {...args}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Evening</h1>
        <p className="text-xl text-white">Golden sunset</p>
      </div>
    </DesertBackdrop>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 1,
    start: "night"
  },
  render: args => <DesertBackdrop {...args}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Night</h1>
        <p className="text-xl text-white">Starry night with crescent moon</p>
      </div>
    </DesertBackdrop>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 10,
    start: "morning"
  },
  render: args => <DesertBackdrop {...args}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Level 10</h1>
        <p className="text-xl text-white">Day/night cycle progression</p>
      </div>
    </DesertBackdrop>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 1,
    start: "afternoon"
  },
  render: args => <DesertBackdrop {...args}>
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg bg-white/90 p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Pyramid Game</h2>
          <p className="mb-4">This is how game content would appear over the backdrop</p>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({
            length: 9
          }, (_, i) => <div key={i} className="flex size-12 items-center justify-center rounded border-2 border-amber-400 bg-amber-200">
                {i + 1}
              </div>)}
          </div>
        </div>
      </div>
    </DesertBackdrop>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 1,
    start: "morning"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 1,
    start: "morning",
    showNile: false,
    landmark: "sphinx"
  }
}`,...h.parameters?.docs?.source},description:{story:"Slide `levelNr` to walk the landmark through every hour (one step per level).",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    levelNr: 1,
    start: "afternoon",
    showNile: false,
    landmark: "sphinx"
  },
  render: args => <div className="grid grid-cols-2 gap-1 bg-black p-1 md:grid-cols-4">
      {skyTop.map((_, step) => <div key={step} className="h-60 overflow-hidden">
          <DesertBackdrop {...args} levelNr={step}>
            <div className="h-16 w-28 -translate-y-1/2 bg-amber-200/80 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
          </DesertBackdrop>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Every step of the cycle side by side, the pyramid board stood in by a block.`,...g.parameters?.docs?.description}}}})))()}v();export{l as Afternoon,f as CycleProgression,m as Empty,u as Evening,g as LandmarkThroughTheDay,c as Morning,d as Night,p as WithGameContent,h as WithLandmark,_ as __namedExportsOrder,s as default};