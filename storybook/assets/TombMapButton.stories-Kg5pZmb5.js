import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";var n,r,i,a;function o(){return(o=e((()=>{n=t(),r=(e,t)=>{let n=Math.max(0,Math.min(1,e));if(n===0)return{x:t.segments[0].x1,y:t.segments[0].y1};if(n===1){let e=t.segments[t.segments.length-1];return{x:e.x2,y:e.y2}}let r=0,i=[];t.segments.forEach(e=>{let t=Math.sqrt((e.x2-e.x1)**2+(e.y2-e.y1)**2);i.push(t),r+=t});let a=r*n,o=0;for(let e=0;e<t.segments.length;e++){let n=i[e];if(o+n>=a){let r=(a-o)/n,i=t.segments[e];return{x:i.x1+(i.x2-i.x1)*r,y:i.y1+(i.y2-i.y1)*r}}o+=n}let s=t.segments[t.segments.length-1];return{x:s.x2,y:s.y2}},i=e=>{switch(e){case`short`:return{segments:[{x1:20,y1:80,x2:50,y2:80},{x1:50,y1:80,x2:50,y2:50},{x1:50,y1:50,x2:80,y2:50}],startPos:{top:`80%`,left:`20%`},endPos:{top:`50%`,right:`20%`},rooms:[{x:45,y:75,width:10,height:10},{x:75,y:45,width:10,height:10}]};case`medium`:return{segments:[{x1:15,y1:85,x2:35,y2:85},{x1:35,y1:85,x2:35,y2:65},{x1:35,y1:65,x2:65,y2:65},{x1:65,y1:65,x2:65,y2:35},{x1:65,y1:35,x2:85,y2:35}],startPos:{top:`85%`,left:`15%`},endPos:{top:`35%`,right:`15%`},rooms:[{x:30,y:80,width:10,height:10},{x:30,y:60,width:10,height:10},{x:60,y:60,width:10,height:10},{x:80,y:30,width:10,height:10}]};default:return{segments:[{x1:10,y1:90,x2:25,y2:90},{x1:25,y1:90,x2:25,y2:70},{x1:25,y1:70,x2:45,y2:70},{x1:45,y1:70,x2:45,y2:50},{x1:45,y1:50,x2:25,y2:50},{x1:25,y1:50,x2:25,y2:30},{x1:25,y1:30,x2:55,y2:30},{x1:55,y1:30,x2:55,y2:50},{x1:55,y1:50,x2:75,y2:50},{x1:75,y1:50,x2:75,y2:20},{x1:75,y1:20,x2:90,y2:20}],startPos:{top:`90%`,left:`10%`},endPos:{top:`20%`,right:`10%`},rooms:[{x:20,y:85,width:10,height:10},{x:40,y:65,width:10,height:10},{x:20,y:45,width:10,height:10},{x:20,y:25,width:10,height:10},{x:50,y:25,width:10,height:10},{x:70,y:45,width:10,height:10},{x:85,y:15,width:10,height:10}]}}},a=({onClick:e,inJourney:t,label:a,journeyProgress:o,corridorComplexity:s=`long`})=>{let c=i(s),l=(e=>e.segments.reduce((e,t)=>e+Math.sqrt((t.x2-t.x1)**2+(t.y2-t.y1)**2),0))(c),u=Math.max(0,Math.min(1,o)),d=r(u,c);return(0,n.jsxs)(`button`,{onClick:e,className:`group relative mt-8 flex aspect-square w-full overflow-hidden rounded-lg border-2 border-stone-700 bg-stone-800 p-12 shadow-2xl transition-all duration-300 hover:scale-102 hover:shadow-xl`,style:{background:`
          linear-gradient(45deg, rgba(68,64,60,0.3) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(68,64,60,0.3) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(68,64,60,0.3) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(68,64,60,0.3) 75%),
          radial-gradient(circle at 20% 30%, rgba(217,119,6,0.2) 8%, transparent 8%),
          radial-gradient(circle at 80% 70%, rgba(217,119,6,0.15) 6%, transparent 6%),
          linear-gradient(135deg, #1c1917 0%, #292524 50%, #44403c 100%)
        `,backgroundSize:`15px 15px, 15px 15px, 15px 15px, 15px 15px, 60px 60px, 40px 40px, 100% 100%`},children:[(0,n.jsx)(`div`,{className:`absolute -top-4 -right-8 h-12 w-24 rotate-45 border-b-2 border-l-2 border-amber-600 bg-amber-100 opacity-80 shadow-lg`}),(0,n.jsxs)(`div`,{className:`absolute inset-0 opacity-20`,children:[(0,n.jsx)(`div`,{className:`absolute top-1/4 left-0 h-0.5 w-full bg-stone-600`}),(0,n.jsx)(`div`,{className:`absolute top-1/2 left-0 h-0.5 w-full bg-stone-600`}),(0,n.jsx)(`div`,{className:`absolute top-3/4 left-0 h-0.5 w-full bg-stone-600`}),(0,n.jsx)(`div`,{className:`absolute top-0 left-1/4 h-full w-0.5 bg-stone-600`}),(0,n.jsx)(`div`,{className:`absolute top-0 left-1/2 h-full w-0.5 bg-stone-600`}),(0,n.jsx)(`div`,{className:`absolute top-0 left-3/4 h-full w-0.5 bg-stone-600`})]}),c.rooms.map((e,t)=>(0,n.jsx)(`div`,{className:`absolute bg-stone-600 opacity-60`,style:{left:`${e.x}%`,top:`${e.y}%`,width:`${e.width}%`,height:`${e.height}%`,transform:`translate(-50%, -50%)`}},t)),(0,n.jsx)(`div`,{className:`absolute top-1/5 left-1/5 text-amber-600 opacity-60`,children:`𓂀`}),(0,n.jsx)(`div`,{className:`absolute top-3/5 right-1/4 text-amber-600 opacity-60`,children:`𓃾`}),(0,n.jsx)(`div`,{className:`absolute bottom-1/5 left-3/5 text-amber-600 opacity-60`,children:`𓊖`}),t&&(0,n.jsxs)(`div`,{className:`absolute inset-0`,children:[(0,n.jsx)(`div`,{className:`absolute mx-[-2%] flex size-1/24 items-center justify-center rounded-full bg-green-500 shadow-lg`,style:c.startPos,children:(0,n.jsx)(`div`,{className:`h-4/5 rounded-full bg-white`})}),(0,n.jsx)(`div`,{className:`absolute mx-[-2%] mt-[-2%] flex size-1/24 items-center justify-center rounded-full bg-yellow-500 shadow-lg`,style:c.endPos,children:(0,n.jsx)(`div`,{className:`size-4/5 rounded-full bg-white`})}),(0,n.jsxs)(`svg`,{className:`absolute inset-0 size-full`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,children:[c.segments.map((e,t)=>(0,n.jsx)(`line`,{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:`rgba(156, 163, 175, 0.4)`,strokeWidth:`3`,strokeLinecap:`round`},`gray-${t}`)),c.segments.map((e,t)=>{let r=0,i=0,a=0;for(let e=0;e<=t;e++){let n=Math.sqrt((c.segments[e].x2-c.segments[e].x1)**2+(c.segments[e].y2-c.segments[e].y1)**2);e===t&&(r=a/l,i=(a+n)/l),a+=n}if(u>r){let a=Math.min((u-r)/(i-r),1),o=e.x1+(e.x2-e.x1)*a,s=e.y1+(e.y2-e.y1)*a;return(0,n.jsx)(`line`,{x1:e.x1,y1:e.y1,x2:o,y2:s,stroke:`rgb(34, 197, 94)`,strokeWidth:`3`,strokeLinecap:`round`,className:`transition-all duration-1000 ease-in-out`},`colored-${t}`)}return null}),(0,n.jsx)(`circle`,{cx:d.x,cy:d.y,r:`2.5`,fill:`rgb(34, 197, 94)`,className:`transition-all duration-1000 ease-in-out`})]})]}),(0,n.jsxs)(`span`,{className:`relative z-10 font-bold text-amber-200 transition-colors duration-300 group-hover:text-amber-100`,children:[`🏺 `,a]}),(0,n.jsx)(`div`,{className:`absolute right-2 bottom-2 flex size-6 items-center justify-center rounded-full border border-amber-600 bg-stone-700 text-xs text-amber-400`,children:`🗝️`})]})}})))()}var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),s={component:a,parameters:{layout:`centered`},argTypes:{inJourney:{control:`boolean`},journeyProgress:{control:{type:`range`,min:0,max:1,step:.1}},corridorComplexity:{control:`select`,options:[`simple`,`moderate`,`complex`]},label:{control:`text`}}},c={args:{label:`Forgotten Merchant's Cache`,inJourney:!1,journeyProgress:0,corridorComplexity:`short`,onClick:()=>console.log(`Tomb map button clicked`)}},l={args:{label:`Noble's Hidden Vault`,inJourney:!0,journeyProgress:.6,corridorComplexity:`medium`,onClick:()=>console.log(`Tomb map button clicked`)}},u={args:{label:`High Priest's Treasury`,inJourney:!0,journeyProgress:.8,corridorComplexity:`long`,onClick:()=>console.log(`Tomb map button clicked`)}},d={args:{label:`Small Chamber`,inJourney:!0,journeyProgress:.3,corridorComplexity:`short`,onClick:()=>console.log(`Tomb map button clicked`)}},f={args:{label:`Underground Vault`,inJourney:!0,journeyProgress:.75,corridorComplexity:`medium`,onClick:()=>console.log(`Tomb map button clicked`)}},p={args:{label:`Pharaoh's Secret Hoard`,inJourney:!0,journeyProgress:.9,corridorComplexity:`long`,onClick:()=>console.log(`Tomb map button clicked`)}},m={args:{label:`Vault of the Gods`,inJourney:!0,journeyProgress:.1,corridorComplexity:`long`,onClick:()=>console.log(`Tomb map button clicked`)}},h={args:{label:`Master's Treasury`,inJourney:!0,journeyProgress:.95,corridorComplexity:`medium`,onClick:()=>console.log(`Tomb map button clicked`)}},g=[`Default`,`InProgress`,`ComplexTomb`,`SimpleLayout`,`ModerateLayout`,`ComplexMaze`,`StartingJourney`,`NearCompletion`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Forgotten Merchant's Cache",
    inJourney: false,
    journeyProgress: 0,
    corridorComplexity: "short",
    onClick: () => console.log("Tomb map button clicked")
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Noble's Hidden Vault",
    inJourney: true,
    journeyProgress: 0.6,
    corridorComplexity: "medium",
    onClick: () => console.log("Tomb map button clicked")
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "High Priest's Treasury",
    inJourney: true,
    journeyProgress: 0.8,
    corridorComplexity: "long",
    onClick: () => console.log("Tomb map button clicked")
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Small Chamber",
    inJourney: true,
    journeyProgress: 0.3,
    corridorComplexity: "short",
    onClick: () => console.log("Tomb map button clicked")
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Underground Vault",
    inJourney: true,
    journeyProgress: 0.75,
    corridorComplexity: "medium",
    onClick: () => console.log("Tomb map button clicked")
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pharaoh's Secret Hoard",
    inJourney: true,
    journeyProgress: 0.9,
    corridorComplexity: "long",
    onClick: () => console.log("Tomb map button clicked")
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Vault of the Gods",
    inJourney: true,
    journeyProgress: 0.1,
    corridorComplexity: "long",
    onClick: () => console.log("Tomb map button clicked")
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Master's Treasury",
    inJourney: true,
    journeyProgress: 0.95,
    corridorComplexity: "medium",
    onClick: () => console.log("Tomb map button clicked")
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as ComplexMaze,u as ComplexTomb,c as Default,l as InProgress,f as ModerateLayout,h as NearCompletion,d as SimpleLayout,m as StartingJourney,g as __namedExportsOrder,s as default};