import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{n as r,t as i}from"./Chest-vO1ApB-Z.js";import{n as a,t as o}from"./NumberLock-BTaOWXpc.js";var s,c;function l(){return(l=e((()=>{r(),a(),s=n(),c=({state:e=`empty`,variant:t=`vibrant`,value:n=``,onChange:r,onSubmit:a,disabled:c=!1,placeholder:l=`Enter code`,maxLength:u=4})=>{let d=c||e===`open`,f=()=>{n&&!d&&a?.(n)};return(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,s.jsx)(i,{onClick:f,state:e,variant:t,label:`Submit Code`,allowInteraction:!!n&&!c}),(0,s.jsx)(o,{state:e,variant:t,value:n,onChange:r,onSubmit:f,disabled:d,placeholder:l,maxLength:u})]})}})))()}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l(),u=t(),d=n(),f={component:c,parameters:{layout:`centered`,backgrounds:{default:`light`,values:[{name:`light`,value:`#f3f4f6`},{name:`dark`,value:`#1f2937`}]}},argTypes:{state:{control:`select`,options:[`empty`,`error`,`open`],description:`Visual state of the lock`},variant:{control:`select`,options:[`vibrant`,`muted`],description:`Visual style variant`},value:{control:`text`,description:`Current value in the input`},disabled:{control:`boolean`,description:`Whether the lock is disabled`},placeholder:{control:`text`,description:`Placeholder text for the input`},maxLength:{control:`number`,description:`Maximum number of characters allowed`},onChange:{action:`changed`,description:`Called when input value changes`},onSubmit:{action:`submitted`,description:`Called when Enter is pressed`}}},p={args:{state:`empty`,placeholder:`Enter code`,maxLength:4}},m={args:{state:`error`,value:`1234`,placeholder:`Enter code`,maxLength:4}},h={args:{state:`open`,value:`7531`,placeholder:`Enter code`,maxLength:4}},g={args:{state:`empty`,disabled:!0,placeholder:`Enter code`,maxLength:4}},_={args:{state:`empty`,placeholder:`6-digit code`,maxLength:6}},v={args:{state:`empty`,variant:`muted`,placeholder:`Ancient code`,maxLength:4}},y={args:{state:`open`,variant:`muted`,value:`1337`,placeholder:`Ancient code`,maxLength:4}},b={args:{placeholder:`Try 1337`,maxLength:4},render:e=>(0,d.jsx)(()=>{let[t,n]=(0,u.useState)(``),[r,i]=(0,u.useState)(`empty`),a=e=>{n(e),r!==`empty`&&i(`empty`)},o=e=>{e===`1337`?i(`open`):(i(`error`),setTimeout(()=>{i(`empty`),n(``)},2e3))};return(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,d.jsx)(c,{...e,value:t,state:r,onChange:a,onSubmit:o}),(0,d.jsxs)(`div`,{className:`text-center text-sm text-gray-600`,children:[(0,d.jsxs)(`p`,{children:[`Try entering the code: `,(0,d.jsx)(`strong`,{children:`1337`})]}),(0,d.jsx)(`p`,{children:`Press Enter to submit`})]})]})},{})},x={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-8 p-4`,children:[(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Empty`}),(0,d.jsx)(c,{state:`empty`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`With Value`}),(0,d.jsx)(c,{state:`empty`,value:`123`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Error`}),(0,d.jsx)(c,{state:`error`,value:`9999`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Open`}),(0,d.jsx)(c,{state:`open`,value:`1337`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Disabled`}),(0,d.jsx)(c,{state:`empty`,disabled:!0,placeholder:`Enter code`})]})]})},S={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-8 p-4`,children:[(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Vibrant Empty`}),(0,d.jsx)(c,{state:`empty`,variant:`vibrant`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Muted Empty`}),(0,d.jsx)(c,{state:`empty`,variant:`muted`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Vibrant Error`}),(0,d.jsx)(c,{state:`error`,variant:`vibrant`,value:`9999`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Muted Error`}),(0,d.jsx)(c,{state:`error`,variant:`muted`,value:`9999`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Vibrant Open`}),(0,d.jsx)(c,{state:`open`,variant:`vibrant`,value:`1337`,placeholder:`Enter code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`Muted Open`}),(0,d.jsx)(c,{state:`open`,variant:`muted`,value:`1337`,placeholder:`Enter code`})]})]})},C={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-8 p-4`,children:[(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`3 digits`}),(0,d.jsx)(c,{state:`empty`,maxLength:3,placeholder:`PIN`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`4 digits`}),(0,d.jsx)(c,{state:`empty`,maxLength:4,placeholder:`Code`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`6 digits`}),(0,d.jsx)(c,{state:`empty`,maxLength:6,placeholder:`Security`})]}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-medium text-gray-600`,children:`8 digits`}),(0,d.jsx)(c,{state:`empty`,maxLength:8,placeholder:`Password`})]})]})},w=[`Empty`,`Error`,`Open`,`Disabled`,`CustomLength`,`MutedVariant`,`MutedOpen`,`Interactive`,`StatesShowcase`,`VariantComparison`,`LengthVariations`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    placeholder: "Enter code",
    maxLength: 4
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    value: "1234",
    placeholder: "Enter code",
    maxLength: 4
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "open",
    value: "7531",
    placeholder: "Enter code",
    maxLength: 4
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    disabled: true,
    placeholder: "Enter code",
    maxLength: 4
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    placeholder: "6-digit code",
    maxLength: 6
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty",
    variant: "muted",
    placeholder: "Ancient code",
    maxLength: 4
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    state: "open",
    variant: "muted",
    value: "1337",
    placeholder: "Ancient code",
    maxLength: 4
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Try 1337",
    maxLength: 4
  },
  render: args => {
    const InteractiveNumberLock = () => {
      const [value, setValue] = useState("");
      const [state, setState] = useState<"empty" | "error" | "open">("empty");
      const correctCode = "1337";
      const handleChange = (newValue: string) => {
        setValue(newValue);
        if (state !== "empty") {
          setState("empty");
        }
      };
      const handleSubmit = (submittedValue: string) => {
        if (submittedValue === correctCode) {
          setState("open");
        } else {
          setState("error");
          // Reset to empty after 2 seconds
          setTimeout(() => {
            setState("empty");
            setValue("");
          }, 2000);
        }
      };
      return <div className="flex flex-col items-center gap-4">
          <NumberChest {...args} value={value} state={state} onChange={handleChange} onSubmit={handleSubmit} />
          <div className="text-center text-sm text-gray-600">
            <p>
              Try entering the code: <strong>1337</strong>
            </p>
            <p>Press Enter to submit</p>
          </div>
        </div>;
    };
    return <InteractiveNumberLock />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8 p-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Empty</span>
        <NumberChest state="empty" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">With Value</span>
        <NumberChest state="empty" value="123" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Error</span>
        <NumberChest state="error" value="9999" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Open</span>
        <NumberChest state="open" value="1337" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Disabled</span>
        <NumberChest state="empty" disabled placeholder="Enter code" />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8 p-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Vibrant Empty</span>
        <NumberChest state="empty" variant="vibrant" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Muted Empty</span>
        <NumberChest state="empty" variant="muted" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Vibrant Error</span>
        <NumberChest state="error" variant="vibrant" value="9999" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Muted Error</span>
        <NumberChest state="error" variant="muted" value="9999" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Vibrant Open</span>
        <NumberChest state="open" variant="vibrant" value="1337" placeholder="Enter code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Muted Open</span>
        <NumberChest state="open" variant="muted" value="1337" placeholder="Enter code" />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8 p-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">3 digits</span>
        <NumberChest state="empty" maxLength={3} placeholder="PIN" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">4 digits</span>
        <NumberChest state="empty" maxLength={4} placeholder="Code" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">6 digits</span>
        <NumberChest state="empty" maxLength={6} placeholder="Security" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-gray-600">8 digits</span>
        <NumberChest state="empty" maxLength={8} placeholder="Password" />
      </div>
    </div>
}`,...C.parameters?.docs?.source}}}})))()}T();export{_ as CustomLength,g as Disabled,p as Empty,m as Error,b as Interactive,C as LengthVariations,y as MutedOpen,v as MutedVariant,h as Open,x as StatesShowcase,S as VariantComparison,w as __namedExportsOrder,f as default};