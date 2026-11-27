import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,t as r}from"./MapPieceIcon-C0HG04fM.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={component:r,parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1f2937`},{name:`light`,value:`#f3f4f6`}]}},argTypes:{size:{control:`select`,options:[`md`,`lg`]}}},o={args:{progress:{found:1,required:4}}},s={args:{progress:{found:3,required:4}}},c={args:{progress:{found:4,required:4}}},l={args:{progress:{found:1,required:4}},render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-6`,children:[[1,2],[1,3],[2,3],[1,4],[2,4],[3,4]].map(([e,t])=>(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{progress:{found:e,required:t}}),(0,i.jsxs)(`span`,{className:`text-xs text-gray-400`,children:[e,` of `,t]})]},`${e}/${t}`))})},u={args:{progress:{found:1,required:3},size:`md`}},d=[`FirstPiece`,`NearlyThere`,`Complete`,`EveryThreshold`,`Small`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    progress: {
      found: 1,
      required: 4
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: {
      found: 3,
      required: 4
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    progress: {
      found: 4,
      required: 4
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    progress: {
      found: 1,
      required: 4
    }
  },
  render: () => <div className="flex items-center gap-6">
      {[[1, 2], [1, 3], [2, 3], [1, 4], [2, 4], [3, 4]].map(([found, required]) => <div key={\`\${found}/\${required}\`} className="flex flex-col items-center gap-2">
          <MapPieceIcon progress={{
        found,
        required
      }} />
          <span className="text-xs text-gray-400">
            {found} of {required}
          </span>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    progress: {
      found: 1,
      required: 3
    },
    size: "md"
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Complete,l as EveryThreshold,o as FirstPiece,s as NearlyThere,u as Small,d as __namedExportsOrder,a as default};