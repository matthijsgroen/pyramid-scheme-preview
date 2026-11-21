import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0Egwrw_.js";var n,r,i,a,o;function s(){return(s=e((()=>{n=t(),r=(e,t)=>{let n=0,r=[];for(let e=0;e<=100;e++){let a=e/100,o=i(a,t);if(r.push(o),e>0){let t=r[e-1],i=Math.sqrt((o.x-t.x)**2+(o.y-t.y)**2);n+=i}}let a=n*e,o=0;for(let e=1;e<r.length;e++){let t=r[e-1],n=r[e],i=Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2);if(o+i>=a){let e=(a-o)/i;return{x:t.x+(n.x-t.x)*e,y:t.y+(n.y-t.y)*e}}o+=i}return r[r.length-1]},i=(e,t)=>{if(t.path===`M 30 65 Q 45 45, 60 55`){let t={x:30,y:65},n={x:45,y:45},r={x:60,y:55};return{x:(1-e)**2*t.x+2*(1-e)*e*n.x+e**2*r.x,y:(1-e)**2*t.y+2*(1-e)*e*n.y+e**2*r.y}}if(t.path===`M 25 70 Q 40 35, 65 40 Q 75 50, 75 25`){if(e<=.5){let t=e*2,n={x:25,y:70},r={x:40,y:35},i={x:65,y:40};return{x:(1-t)**2*n.x+2*(1-t)*t*r.x+t**2*i.x,y:(1-t)**2*n.y+2*(1-t)*t*r.y+t**2*i.y}}{let t=(e-.5)*2,n={x:65,y:40},r={x:75,y:50},i={x:75,y:25};return{x:(1-t)**2*n.x+2*(1-t)*t*r.x+t**2*i.x,y:(1-t)**2*n.y+2*(1-t)*t*r.y+t**2*i.y}}}if(e<=.5){let t=e*2,n={x:17,y:75},r={x:30,y:30},i={x:50,y:40};return{x:(1-t)**2*n.x+2*(1-t)*t*r.x+t**2*i.x,y:(1-t)**2*n.y+2*(1-t)*t*r.y+t**2*i.y}}{let t=(e-.5)*2,n={x:50,y:40},r={x:70,y:50},i={x:83,y:17};return{x:(1-t)**2*n.x+2*(1-t)*t*r.x+t**2*i.x,y:(1-t)**2*n.y+2*(1-t)*t*r.y+t**2*i.y}}},a=e=>{switch(e){case`short`:return{path:`M 30 65 Q 45 45, 60 55`,startPos:{top:`65%`,left:`30%`},endPos:{top:`55%`,right:`40%`}};case`medium`:return{path:`M 25 70 Q 40 35, 65 40 Q 75 50, 75 25`,startPos:{top:`70%`,left:`25%`},endPos:{top:`25%`,right:`25%`}};default:return{path:`M 17 75 Q 30 30, 50 40 Q 70 50, 83 17`,startPos:{top:`75%`,left:`17%`},endPos:{top:`17%`,right:`17%`}}}},o=({onClick:e,inJourney:t,label:o,journeyProgress:s,pathRotation:c=0,pathLength:l=`long`,nudge:u=!1})=>{let d=a(l),f=(e=>{let t=0;for(let n=1;n<=100;n++){let r=(n-1)/100,a=n/100,o=i(r,e),s=i(a,e),c=Math.sqrt((s.x-o.x)**2+(s.y-o.y)**2);t+=c}return t})(d),p=Math.max(0,Math.min(1,s)),m=r(p,d);return(0,n.jsxs)(`button`,{onClick:e,className:`group relative mt-8 flex aspect-square w-full overflow-hidden rounded-lg border-2 border-amber-800 bg-amber-50 p-12 shadow-2xl transition-all duration-300 hover:scale-102 hover:shadow-xl`,style:{background:`
          linear-gradient(45deg, rgba(180,83,9,0.1) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(180,83,9,0.1) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(180,83,9,0.1) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(180,83,9,0.1) 75%),
          radial-gradient(circle at 30% 20%, rgba(251,191,36,0.3) 15%, transparent 15%),
          radial-gradient(circle at 70% 80%, rgba(239,68,68,0.2) 8%, transparent 8%),
          linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #f59e0b 100%)
        `,backgroundSize:`20px 20px, 20px 20px, 20px 20px, 20px 20px, 100px 100px, 80px 80px, 100% 100%`},children:[(0,n.jsx)(`div`,{className:`absolute -top-6 -right-12 h-16 w-36 rotate-45 border-b-2 border-l-2 border-amber-700 bg-amber-200 shadow-lg`}),u&&(0,n.jsxs)(`span`,{className:`absolute top-3 left-3 flex size-4 items-center justify-center`,children:[(0,n.jsx)(`span`,{className:`absolute inline-flex size-full animate-ping rounded-full bg-amber-500 opacity-75`}),(0,n.jsx)(`span`,{className:`relative inline-flex size-3 rounded-full bg-amber-500`})]}),(0,n.jsxs)(`div`,{className:`absolute inset-0 opacity-30`,children:[(0,n.jsx)(`div`,{className:`absolute top-1/3 left-0 h-0.5 w-full bg-amber-700`}),(0,n.jsx)(`div`,{className:`absolute top-2/3 left-0 h-0.5 w-full bg-amber-700`}),(0,n.jsx)(`div`,{className:`absolute top-0 left-1/3 h-full w-0.5 bg-amber-700`}),(0,n.jsx)(`div`,{className:`absolute top-0 left-2/3 h-full w-0.5 bg-amber-700`})]}),(0,n.jsx)(`div`,{className:`absolute top-1/3 left-1/4 size-2 rotate-45 bg-red-600`}),(0,n.jsx)(`div`,{className:`absolute top-1/2 right-1/4 size-1.5 rotate-45 bg-green-600`}),(0,n.jsx)(`div`,{className:`absolute bottom-1/4 left-1/2 size-1 rounded-full bg-blue-600`}),t&&(0,n.jsxs)(`div`,{className:`absolute inset-0`,style:{transform:`rotate(${c}deg)`,transformOrigin:`center`},children:[(0,n.jsx)(`div`,{className:`absolute mx-[-2%] flex size-1/24 items-center justify-center rounded-full bg-blue-500 shadow-lg`,style:d.startPos,children:(0,n.jsx)(`div`,{className:`h-4/5 rounded-full bg-white`})}),(0,n.jsx)(`div`,{className:`absolute mx-[-2%] mt-[-2%] flex size-1/24 items-center justify-center rounded-full bg-red-600 shadow-lg`,style:d.endPos,children:(0,n.jsx)(`div`,{className:`size-4/5 rounded-full bg-white`})}),(0,n.jsxs)(`svg`,{className:`absolute inset-0 size-full`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,children:[(0,n.jsx)(`path`,{d:d.path,stroke:`rgba(107, 114, 128, 0.4)`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`}),(0,n.jsx)(`path`,{d:d.path,stroke:`rgb(59, 130, 246)`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeDasharray:f,strokeDashoffset:f-p*f,className:`transition-all duration-1000 ease-in-out`}),(0,n.jsx)(`circle`,{cx:m.x,cy:m.y,r:`2`,fill:`rgb(59, 130, 246)`,className:`transition-all duration-1000 ease-in-out`})]})]}),(0,n.jsxs)(`span`,{className:`relative z-10 text-2xl font-bold text-amber-900 transition-colors duration-300 group-hover:text-amber-800`,children:[`🗺️ `,o]}),(0,n.jsx)(`div`,{className:`absolute right-2 bottom-2 flex size-6 items-center justify-center rounded-full border border-amber-700 bg-amber-100 text-xs text-amber-800`,children:`⊕`})]})}})))()}var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{s(),c={component:o,parameters:{layout:`centered`},argTypes:{inJourney:{control:`boolean`},journeyProgress:{control:{type:`range`,min:0,max:1,step:.1}},pathRotation:{control:`select`,options:[0,90,180,270]},pathLength:{control:`select`,options:[`short`,`medium`,`long`]},label:{control:`text`}}},l={args:{label:`Dawn at the Sphinx`,inJourney:!1,journeyProgress:0,pathLength:`short`,onClick:()=>console.log(`Map button clicked`)}},u={args:{label:`Valley of the Kings`,inJourney:!0,journeyProgress:.6,pathLength:`medium`,onClick:()=>console.log(`Map button clicked`)}},d={args:{label:`Short Journey`,inJourney:!0,journeyProgress:0,pathLength:`short`,onClick:()=>console.log(`Map button clicked`)}},f={args:{label:`Medium Journey`,inJourney:!0,journeyProgress:0,pathLength:`medium`,onClick:()=>console.log(`Map button clicked`)}},p={args:{label:`Long Journey`,inJourney:!0,journeyProgress:0,pathLength:`long`,onClick:()=>console.log(`Map button clicked`)}},m={args:{label:`Rotated Journey`,inJourney:!0,journeyProgress:0,pathLength:`medium`,pathRotation:90,onClick:()=>console.log(`Map button clicked`)}},h=[`Default`,`InProgress`,`ShortPath`,`MediumPath`,`LongPath`,`RotatedPath`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dawn at the Sphinx",
    inJourney: false,
    journeyProgress: 0,
    pathLength: "short",
    onClick: () => console.log("Map button clicked")
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Valley of the Kings",
    inJourney: true,
    journeyProgress: 0.6,
    pathLength: "medium",
    onClick: () => console.log("Map button clicked")
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Short Journey",
    inJourney: true,
    journeyProgress: 0,
    pathLength: "short",
    onClick: () => console.log("Map button clicked")
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Medium Journey",
    inJourney: true,
    journeyProgress: 0,
    pathLength: "medium",
    onClick: () => console.log("Map button clicked")
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Long Journey",
    inJourney: true,
    journeyProgress: 0,
    pathLength: "long",
    onClick: () => console.log("Map button clicked")
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Rotated Journey",
    inJourney: true,
    journeyProgress: 0,
    pathLength: "medium",
    pathRotation: 90,
    onClick: () => console.log("Map button clicked")
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{l as Default,u as InProgress,p as LongPath,f as MediumPath,m as RotatedPath,d as ShortPath,h as __namedExportsOrder,c as default};