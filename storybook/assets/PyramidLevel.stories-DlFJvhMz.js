import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-D0Egwrw_.js";import{n as r,t as i}from"./DesertBackdrop-BTMSk9yH.js";import{d as a,f as o,i as s,n as c,r as l,t as u}from"./generateLevel-7tIn8jjx.js";import{n as d,r as f}from"./random-Dd7Wc25A.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),s(),c(),d(),o(),p=t(),m=n(),h={parameters:{layout:`fullscreen`,backgrounds:{default:`light`,values:[{name:`light`,value:`#f3f4f6`},{name:`dark`,value:`#1f2937`}]}},args:{levelNr:1},argTypes:{levelNr:{control:{type:`number`}},floorCount:{control:{type:`number`}},openBlockPercentage:{control:{type:`range`,min:0,max:1,step:.1}},blockedBlockPercentage:{control:{type:`range`,min:0,max:1,step:.1}},minNumber:{control:{type:`number`,min:0,max:30}},maxNumber:{control:{type:`number`,min:0,max:30}}},render:({levelNr:e,floorCount:t,openBlockPercentage:n,blockedBlockPercentage:r,minNumber:a,maxNumber:o})=>{let s=f(1234567),c=t*(t+1)/2-t-(t>8?t-8:0),d=c*n,p=c-d,h=Math.min(Math.max(Math.floor(.8*r*p),0),8),g=u(e,{floorCount:t,openBlockCount:d,blockedBlockCount:h,lowestFloorNumberRange:[a,o]},s);return(0,m.jsx)(i,{levelNr:1,start:`morning`,children:(0,m.jsx)(`div`,{className:`relative flex size-full flex-col`,children:(0,m.jsx)(`div`,{className:`flex w-full flex-1 items-center justify-center`,children:(0,m.jsx)(l,{levelNr:e,pyramid:g.pyramid,decorationOffset:0,values:{}})})})})}},g={args:{floorCount:3,openBlockPercentage:.5,blockedBlockPercentage:0,minNumber:1,maxNumber:5}},_={args:{floorCount:5,openBlockPercentage:.5,blockedBlockPercentage:0,minNumber:1,maxNumber:10}},v={args:{floorCount:5,openBlockPercentage:.5,blockedBlockPercentage:0,minNumber:1,maxNumber:10},globals:{input:`keys`},render:function({levelNr:e,floorCount:t}){let[n,r]=(0,p.useState)({}),a=u(e,{floorCount:t,openBlockCount:5,blockedBlockCount:0,lowestFloorNumberRange:[1,10]},f(1234567));return(0,m.jsx)(i,{levelNr:1,start:`morning`,children:(0,m.jsx)(`div`,{className:`relative flex size-full flex-col`,children:(0,m.jsx)(`div`,{className:`flex w-full flex-1 items-center justify-center`,children:(0,m.jsx)(l,{levelNr:e,pyramid:a.pyramid,decorationOffset:0,values:n,onAnswer:(e,t)=>r(n=>({...n,[e]:t}))})})})})}},y={args:{floorCount:5,openBlockPercentage:.5,blockedBlockPercentage:0,minNumber:1,maxNumber:10},render:({levelNr:e,floorCount:t,openBlockPercentage:n,blockedBlockPercentage:r,minNumber:o,maxNumber:s})=>{let[c,d]=(0,p.useState)(0),h=f(1234567),g=t*(t+1)/2-t-(t>8?t-8:0),_=g*n,v=Math.min(Math.max(Math.floor((g-_)*(.8*r)),0),8),y=u(e,{floorCount:t,openBlockCount:_,blockedBlockCount:v,lowestFloorNumberRange:[o,s]},h),b=a(t),x=y.pyramid.blocks[b[t-1]+Math.floor(t/2)]?.id;return(0,m.jsx)(i,{levelNr:1,start:`morning`,children:(0,m.jsxs)(`div`,{className:`relative flex size-full flex-col`,children:[(0,m.jsx)(`div`,{className:`flex w-full flex-1 items-center justify-center`,children:(0,m.jsx)(l,{levelNr:e,pyramid:y.pyramid,decorationOffset:0,values:{},entranceBlockId:x},c)}),(0,m.jsx)(`div`,{className:`absolute bottom-6 left-1/2 -translate-x-1/2`,children:(0,m.jsx)(`button`,{onClick:()=>d(e=>e+1),className:`rounded bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/60`,children:`Replay`})})]})})}},b=[`Starter`,`Junior`,`KeyboardCursor`,`EntranceAnimation`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    floorCount: 3,
    openBlockPercentage: 0.5,
    blockedBlockPercentage: 0,
    minNumber: 1,
    maxNumber: 5
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    floorCount: 5,
    openBlockPercentage: 0.5,
    blockedBlockPercentage: 0,
    minNumber: 1,
    maxNumber: 10
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    floorCount: 5,
    openBlockPercentage: 0.5,
    blockedBlockPercentage: 0,
    minNumber: 1,
    maxNumber: 10
  },
  globals: {
    input: "keys"
  },
  render: function Render({
    levelNr,
    floorCount
  }) {
    const [values, setValues] = useState<Record<string, number | undefined>>({});
    const content = generateLevel(levelNr, {
      floorCount,
      openBlockCount: 5,
      blockedBlockCount: 0,
      lowestFloorNumberRange: [1, 10]
    }, mulberry32(1234567));
    return <DesertBackdrop levelNr={1} start="morning">
        <div className="relative flex size-full flex-col">
          <div className="flex w-full flex-1 items-center justify-center">
            <PyramidDisplay levelNr={levelNr} pyramid={content.pyramid} decorationOffset={0} values={values} onAnswer={(id, value) => setValues(now => ({
            ...now,
            [id]: value
          }))} />
          </div>
        </div>
      </DesertBackdrop>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Played by keys: arrows or WASD move along a floor and between floors, a digit fills the block and opens it
for typing, Enter opens it empty. On a game pad LB/RB count the block's value down and up.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    floorCount: 5,
    openBlockPercentage: 0.5,
    blockedBlockPercentage: 0,
    minNumber: 1,
    maxNumber: 10
  },
  render: ({
    levelNr,
    floorCount,
    openBlockPercentage,
    blockedBlockPercentage,
    minNumber,
    maxNumber
  }) => {
    const [replayKey, setReplayKey] = useState(0);
    const random = mulberry32(1234567);
    const maxBlocks = floorCount * (floorCount + 1) / 2;
    const maxBlocksToOpen = maxBlocks - floorCount - (floorCount > 8 ? floorCount - 8 : 0);
    const openBlockCount = maxBlocksToOpen * openBlockPercentage;
    const blockedBlockCount = Math.min(Math.max(Math.floor((maxBlocksToOpen - openBlockCount) * (0.8 * blockedBlockPercentage)), 0), 8);
    const content = generateLevel(levelNr, {
      floorCount,
      openBlockCount,
      blockedBlockCount,
      lowestFloorNumberRange: [minNumber, maxNumber]
    }, random);
    const starts = createFloorStartIndices(floorCount);
    const entranceBlockId = content.pyramid.blocks[starts[floorCount - 1] + Math.floor(floorCount / 2)]?.id;
    return <DesertBackdrop levelNr={1} start="morning">
        <div className="relative flex size-full flex-col">
          <div className="flex w-full flex-1 items-center justify-center">
            <PyramidDisplay key={replayKey} levelNr={levelNr} pyramid={content.pyramid} decorationOffset={0} values={{}} entranceBlockId={entranceBlockId} />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button onClick={() => setReplayKey(k => k + 1)} className="rounded bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/60">
              Replay
            </button>
          </div>
        </div>
      </DesertBackdrop>;
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as EntranceAnimation,_ as Junior,v as KeyboardCursor,g as Starter,b as __namedExportsOrder,h as default};