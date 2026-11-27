import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";var r,i;function a(){return(a=e((()=>{r=n(),i=({onComplete:e,origin:t=`50% 65%`,delay:n})=>{let[i,a]=t.split(` `);return(0,r.jsx)(`div`,{className:`fixed z-50 size-4 animate-entrance-zoom rounded-full bg-black`,style:{left:i,top:a,animationDelay:n},onAnimationEnd:e})}})))()}var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=t(),a(),s=n(),c={component:i,parameters:{layout:`fullscreen`}},l={render:e=>{let[t,n]=(0,o.useState)(0),[r,a]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{className:`flex h-screen items-center justify-center bg-amber-200`,children:[(0,s.jsx)(`p`,{className:`font-pyramid text-xl`,children:`Inner pyramid map goes here`}),(0,s.jsx)(`button`,{onClick:()=>{n(e=>e+1),a(!0)},className:`absolute bottom-8 left-1/2 -translate-x-1/2 rounded bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/60`,children:`Replay`}),r&&(0,s.jsx)(i,{...e,onComplete:()=>a(!1)},t)]})},args:{origin:`50% 65%`}},u={...l,args:{origin:`50% 50%`}},d={...l,args:{origin:`20% 80%`}},f=[`Default`,`FromCenter`,`FromBottomLeft`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [key, setKey] = useState(0);
    const [running, setRunning] = useState(false);
    return <div className="flex h-screen items-center justify-center bg-amber-200">
        <p className="font-pyramid text-xl">Inner pyramid map goes here</p>
        <button onClick={() => {
        setKey(k => k + 1);
        setRunning(true);
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/60">
          Replay
        </button>
        {running && <EntranceTransitionOverlay key={key} {...args} onComplete={() => setRunning(false)} />}
      </div>;
  },
  args: {
    origin: "50% 65%"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    origin: "50% 50%"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    origin: "20% 80%"
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Default,d as FromBottomLeft,u as FromCenter,f as __namedExportsOrder,c as default};