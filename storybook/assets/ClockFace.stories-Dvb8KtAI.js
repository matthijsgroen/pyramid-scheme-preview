import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,r,t as i}from"./ClockFace-jE9TtjUj.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),a=t(),o={component:i,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}},args:{time:500,className:`w-48`}},s={},c={args:{time:180}},l={render:()=>(0,a.jsx)(`div`,{className:`flex gap-4`,children:[225,555].map(e=>(0,a.jsxs)(`div`,{className:`flex w-40 flex-col items-center gap-1`,children:[(0,a.jsx)(i,{time:e,className:`w-full`}),(0,a.jsx)(n,{time:e,className:`text-stone-300`})]},e))})},u={render:()=>(0,a.jsx)(`div`,{className:`grid grid-cols-4 gap-3`,children:Array.from({length:12},(e,t)=>240+t*5).map(e=>(0,a.jsxs)(`div`,{className:`flex w-24 flex-col items-center`,children:[(0,a.jsx)(i,{time:e,className:`w-full`}),(0,a.jsx)(n,{time:e,className:`text-xs text-stone-400`})]},e))})},d=[`Default`,`OnTheHour`,`HandsSwapped`,`RoundTheHour`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    time: 3 * 60
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {[3 * 60 + 45, 9 * 60 + 15].map(time => <div key={time} className="flex w-40 flex-col items-center gap-1">
          <ClockFace time={time} className="w-full" />
          <DigitalTime time={time} className="text-stone-300" />
        </div>)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:`The reading a swapped pair of hands gives, side by side with the time itself.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-4 gap-3">
      {Array.from({
      length: 12
    }, (_unused, index) => 4 * 60 + index * 5).map(time => <div key={time} className="flex w-24 flex-col items-center">
          <ClockFace time={time} className="w-full" />
          <DigitalTime time={time} className="text-xs text-stone-400" />
        </div>)}
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Every five minutes of one hour, which is where the minute hand has to be read and not recognised.`,...u.parameters?.docs?.description}}}})))()}f();export{s as Default,l as HandsSwapped,c as OnTheHour,u as RoundTheHour,d as __namedExportsOrder,o as default};