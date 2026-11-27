import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{n as r,t as i}from"./clsx-DSXoiAHx.js";var a,o;function s(){return(s=e((()=>{r(),a=n(),o=({show:e,children:t,className:n})=>(0,a.jsxs)(`div`,{className:i(`relative`,n),children:[t,e&&(0,a.jsx)(`span`,{"data-testid":`tap-hint`,"aria-hidden":`true`,className:`pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 text-5xl drop-shadow-lg select-none`,children:(0,a.jsx)(`span`,{className:`inline-block animate-tap motion-reduce:animate-none`,children:`👆`})})]})})))()}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=t(),s(),l=n(),u={component:o,args:{show:!0,children:null},decorators:[e=>(0,l.jsx)(`div`,{className:`w-sm max-w-full bg-blue-100 p-4 text-black`,children:(0,l.jsx)(e,{})})]},d=({onClick:e})=>(0,l.jsx)(`button`,{type:`button`,onClick:e,className:`w-full rounded-xl bg-amber-100 p-4 font-bold`,children:`Plan Expedition`}),f={render:e=>(0,l.jsx)(o,{show:e.show,children:(0,l.jsx)(d,{onClick:()=>{}})})},p={render:function(){let[e,t]=(0,c.useState)(!0);return(0,l.jsx)(o,{show:e,children:(0,l.jsx)(d,{onClick:()=>t(!1)})})}},m=[`OverItsTarget`,`UntilTapped`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <TapHint show={args.show}>
      <MapCard onClick={() => {}} />
    </TapHint>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [show, setShow] = useState(true);
    return <TapHint show={show}>
        <MapCard onClick={() => setShow(false)} />
      </TapHint>;
  }
}`,...p.parameters?.docs?.source},description:{story:`Tap the card: the hand goes, the way it does once the player has found the target.`,...p.parameters?.docs?.description}}}})))()}h();export{f as OverItsTarget,p as UntilTapped,m as __namedExportsOrder,u as default};