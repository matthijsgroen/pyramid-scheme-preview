import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,r,t as i}from"./compassPrecision-0_KW4D29.js";import{n as a,t as o}from"./DetectorToggles-BLj0Rlfe.js";var s,c,l;function u(){return(u=e((()=>{n(),a(),s=t(),c={open:``,unknown:`❓`},l=({labels:e,activeDetector:t,compassLevel:n,detectionLevel:a,compassTarget:l,compassTargetLabel:u=e=>e,hitLabel:d=e=>e.journeyId,compassResults:f,detectorTitles:p,onSetDetector:m,corridorNearby:h=!1,onRevealCorridor:g,floorHasHiddenCorridor:_=!1,hiddenCorridorOnOtherFloor:v=!1})=>{if(!t)return null;let y=[n,a].filter(e=>e>0).length,b=r(f,e=>i(e,n));return(0,s.jsxs)(`div`,{className:`pointer-events-auto rounded-lg border border-stone-700 bg-stone-900/90 p-2 text-xs text-stone-300`,children:[p&&m&&y>0&&(0,s.jsx)(`div`,{className:`mb-2 border-b border-stone-700 pb-2`,children:(0,s.jsx)(o,{activeDetector:t,compassLevel:n,detectionLevel:a,titles:p,onSetDetector:m})}),t===`compass`&&(0,s.jsx)(`div`,{children:l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`p`,{className:`text-stone-500`,children:e.lookingFor(u(l))}),b.length===0?(0,s.jsx)(`p`,{className:`text-stone-500`,children:e.allCollected}):(0,s.jsxs)(s.Fragment,{children:[b.slice(0,3).map((t,r)=>(0,s.jsxs)(`div`,{className:`truncate text-amber-200`,children:[c[t.access]&&(0,s.jsxs)(`span`,{title:e.access[t.access],children:[c[t.access],` `]}),d(t,n)]},r)),b.length>3&&(0,s.jsx)(`p`,{className:`text-stone-500`,children:e.more(b.length-3)})]})]}):(0,s.jsx)(`p`,{className:`text-stone-500`,children:e.pickTarget})}),t===`hiddenPassageway`&&(0,s.jsxs)(`div`,{className:`text-stone-400`,children:[g&&(0,s.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-3`,children:[(0,s.jsx)(`p`,{className:`font-semibold text-amber-100`,children:e.corridorHere}),(0,s.jsx)(`button`,{onClick:g,className:`animate-pulse rounded bg-amber-600 px-3 py-1 font-semibold text-amber-50 hover:bg-amber-500`,style:{animationDuration:`1s`},children:e.revealCorridor})]}),(0,s.jsx)(`p`,{className:h?`text-amber-200`:void 0,children:h?e.corridorNearby:e.corridorNoneNearby}),a>=2&&(0,s.jsx)(`p`,{className:_?`text-amber-200`:void 0,children:_?e.corridorOnFloor:e.corridorNoneOnFloor}),a>=3&&(0,s.jsx)(`p`,{className:v?`text-amber-200`:void 0,children:v?e.corridorOtherFloor:e.corridorNoneInPyramid})]})]})}})))()}var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{u(),d={component:l,args:{labels:{pickTarget:`Pick a hieroglyph to hunt in your Collection`,lookingFor:e=>`Looking for ${e}`,allCollected:`All pieces collected`,access:{open:`Nothing known blocking this one`,unknown:`Might not be reachable yet — it's inside a tomb or for sale`},more:e=>`+${e} more`,corridorHere:`There is a hidden passage right here`,revealCorridor:`Open it`,corridorNearby:`A hidden corridor is close by`,corridorNoneNearby:`No hidden corridor close by`,corridorOnFloor:`A hidden corridor waits on this floor`,corridorNoneOnFloor:`No hidden corridor on this floor`,corridorOtherFloor:`A hidden corridor waits on another floor`,corridorNoneInPyramid:`No hidden corridor on another floor`},activeDetector:null,compassLevel:0,detectionLevel:0,compassTarget:null,compassResults:[],hitLabel:(e,t)=>[{starter_1:`Sphinx Dawn`,starter_2:`Papyrus Route`}[e.journeyId]??e.journeyId,`Pyramid ${e.levelIdx+1}`,t>=2?`Floor ${e.floorIdx+1}`:void 0].filter(Boolean).join(` · `),compassTargetLabel:()=>`𓎗`}},f={},p={args:{compassLevel:1,activeDetector:`compass`,compassTarget:null}},m=[{journeyId:`starter_1`,levelIdx:0,floorIdx:0,hieroglyphId:`p10`,pieceIndex:0,cell:{row:3,col:4},access:`open`},{journeyId:`starter_2`,levelIdx:1,floorIdx:2,hieroglyphId:`p10`,pieceIndex:2,cell:{row:1,col:6},access:`unknown`,inShop:!0}],h={args:{compassLevel:1,activeDetector:`compass`,compassTarget:`p10`,compassResults:m}},g={args:{compassLevel:3,activeDetector:`compass`,compassTarget:`p10`,compassResults:m}},_={args:{compassLevel:2,detectionLevel:2,activeDetector:`hiddenPassageway`}},v={args:{detectionLevel:2,activeDetector:`hiddenPassageway`,floorHasHiddenCorridor:!0}},y={args:{detectionLevel:3,activeDetector:`hiddenPassageway`,corridorNearby:!0,floorHasHiddenCorridor:!0,hiddenCorridorOnOtherFloor:!0}},b={args:{detectionLevel:3,activeDetector:`hiddenPassageway`,corridorNearby:!1,floorHasHiddenCorridor:!1,hiddenCorridorOnOtherFloor:!1}},x=[`NoModeActive`,`CompassNoTarget`,`CompassLevel1`,`CompassLevel3`,`AllModes`,`CorridorLevel2`,`CorridorLevel3`,`CorridorLevel3NothingFound`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    compassLevel: 1,
    activeDetector: "compass",
    compassTarget: null
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    compassLevel: 1,
    activeDetector: "compass",
    compassTarget: "p10",
    compassResults: COMPASS_HITS
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    compassLevel: 3,
    activeDetector: "compass",
    compassTarget: "p10",
    compassResults: COMPASS_HITS
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    compassLevel: 2,
    detectionLevel: 2,
    activeDetector: "hiddenPassageway"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    detectionLevel: 2,
    activeDetector: "hiddenPassageway",
    floorHasHiddenCorridor: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    detectionLevel: 3,
    activeDetector: "hiddenPassageway",
    corridorNearby: true,
    floorHasHiddenCorridor: true,
    hiddenCorridorOnOtherFloor: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    detectionLevel: 3,
    activeDetector: "hiddenPassageway",
    corridorNearby: false,
    floorHasHiddenCorridor: false,
    hiddenCorridorOnOtherFloor: false
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{_ as AllModes,h as CompassLevel1,g as CompassLevel3,p as CompassNoTarget,v as CorridorLevel2,y as CorridorLevel3,b as CorridorLevel3NothingFound,f as NoModeActive,x as __namedExportsOrder,d as default};