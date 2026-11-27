import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{a as r,m as i,t as a}from"./tileAssets-CS6oizWP.js";import{p as o}from"./mapScale-LUmBdn6N.js";import{a as s,n as c}from"./tileMaterials-DGmbh-7n.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{l=t(),o(),r(),c(),u=n(),d=112,f=50,p=76.6,m=45,h=67,g=(e,t,n)=>t<=1?0:-n+2*n*e/(t-1),_=`expert`,v=40,y=70,b=112,x=112,S=({thetaDeg:e,durationMs:t,reducedMotion:n,zoom:r,showMarkers:o})=>{let c=s[_],g=i(_,`floor`),S=i(_,`wall-face`),C=i(`starter`,`explorer-s-1`),w=i(_,`leverBaseBack`),T=i(_,`leverArm`),E=i(_,`leverBaseFront`),[D,O]=(0,l.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches);(0,l.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>O(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let k=n||D,A=84*r,j=b*r/2-56*r/2,M=56*r,N=84*r,P=M/d,F=A-N,I=`rotate(${e}deg)`,L=j+f/100*M,R=F+p/100*N;return(0,u.jsxs)(`figure`,{className:`m-0 flex flex-col items-center gap-1`,children:[(0,u.jsxs)(`div`,{className:`relative overflow-hidden`,style:{width:b*r,height:(28+x)*r,background:c.slab},children:[(0,u.jsx)(`div`,{className:`absolute inset-x-0 top-0`,style:{height:28*r,background:S?`url(${S})`:c.wall,backgroundSize:`${448*r}px ${28*r}px`,imageRendering:a}}),(0,u.jsx)(`div`,{className:`absolute inset-x-0 bottom-0`,style:{height:x*r,background:g?`url(${g})`:c.slab,backgroundSize:`${448*r}px ${448*r}px`,imageRendering:a}}),w&&(0,u.jsx)(`img`,{src:w,alt:`lever mound, far half`,className:`absolute`,style:{left:j,top:F,width:M,height:N,imageRendering:`auto`}}),T&&(0,u.jsx)(`img`,{src:T,alt:`lever arm`,className:`absolute motion-reduce:transition-none`,style:{left:j,top:F,width:M,height:N,imageRendering:`auto`,transform:I,transformOrigin:`${f}% ${p}%`,transitionProperty:`transform`,transitionDuration:k?`0ms`:`${t}ms`,transitionTimingFunction:`ease`}}),E&&(0,u.jsx)(`img`,{src:E,alt:`lever mound, near half`,className:`absolute`,style:{left:j,top:F,width:M,height:N,imageRendering:`auto`}}),C&&(0,u.jsx)(`img`,{src:C,alt:`explorer`,className:`absolute`,style:{left:j+67.2*r,top:A-y*r,width:v*r,height:y*r,imageRendering:`auto`}}),o&&(0,u.jsxs)(u.Fragment,{children:[[m,h].map(e=>(0,u.jsx)(`div`,{className:`absolute inset-y-0 w-px bg-emerald-400/70`,style:{left:j+e*P}},e)),(0,u.jsx)(`div`,{className:`absolute size-1.5 -translate-1/2 rounded-full bg-sky-400`,style:{left:L,top:R}})]})]}),(0,u.jsxs)(`figcaption`,{className:`text-[10px] text-white/70`,children:[`θ=`,e.toFixed(1),`°`]})]})},C=({states:e,stateIndex:t,throwDeg:n,durationMs:r,reducedMotion:i,zoom:a,showMarkers:o})=>{let s=g(t,e.length,n);return(0,u.jsxs)(`div`,{className:`flex h-screen flex-col gap-4 overflow-auto bg-neutral-900 p-6`,children:[(0,u.jsxs)(`h2`,{className:`m-0 text-sm text-white/80`,children:[`lever — state `,(0,u.jsx)(`span`,{className:`text-white/40`,children:e[t]??t}),` of `,e.join(`, `),`, throw ±`,n,`°`]}),(0,u.jsx)(`div`,{className:`flex flex-wrap gap-6`,children:(0,u.jsx)(S,{thetaDeg:s,durationMs:r,reducedMotion:i,zoom:a,showMarkers:o})})]})},w={title:`Topology/Lever`,component:C,parameters:{layout:`fullscreen`},argTypes:{throwDeg:{control:{type:`range`,min:0,max:60,step:1}},durationMs:{control:{type:`range`,min:0,max:1e3,step:20}},reducedMotion:{control:`boolean`},zoom:{control:{type:`range`,min:1,max:6,step:1}},showMarkers:{control:`boolean`},states:{control:!1},stateIndex:{control:!1}},args:{states:[`left`,`right`],stateIndex:0,throwDeg:15,durationMs:260,reducedMotion:!1,zoom:4,showMarkers:!0}},T={args:{states:[`left`,`right`],stateIndex:1},argTypes:{stateIndex:{control:{type:`inline-radio`},options:[0,1]}}},E={args:{states:[`low`,`mid`,`high`],stateIndex:1},argTypes:{stateIndex:{control:{type:`inline-radio`},options:[0,1,2]}}},D=[`Binary`,`ThreeState`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    states: ["left", "right"],
    stateIndex: 1
  },
  argTypes: {
    stateIndex: {
      control: {
        type: "inline-radio"
      },
      options: [0, 1]
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`A binary handle: two states, thrown left and right at the authored ±15°.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    states: ["low", "mid", "high"],
    stateIndex: 1
  },
  argTypes: {
    stateIndex: {
      control: {
        type: "inline-radio"
      },
      options: [0, 1, 2]
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`The same component driving a THREE-state control off the identical index math — proving the
renderer was not written for a binary; a wheel is the next N-state control this vocabulary serves.`,...E.parameters?.docs?.description}}}})))()}O();export{T as Binary,E as ThreeState,D as __namedExportsOrder,w as default};