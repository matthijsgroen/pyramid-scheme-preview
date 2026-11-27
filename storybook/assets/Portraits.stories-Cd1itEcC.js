import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./portraits-Bd8uGkxa.js";import{n as u,t as d}from"./Portrait-Bhmn17j2.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u(),o(),f=t(),p=Object.keys(s),m=({children:e})=>(0,f.jsx)(`div`,{className:`h-screen space-y-10 overflow-auto bg-stone-900 p-6 text-stone-100`,children:e}),h=({speaker:e,art:t,mirrorExplorer:n,label:r})=>(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[t?(0,f.jsx)(`div`,{style:{zoom:.5},children:(0,f.jsx)(d,{speaker:e,art:t,mirrored:n?void 0:!1})}):(0,f.jsx)(`div`,{className:`flex h-24 w-25 items-center justify-center text-2xl text-stone-500`,children:`—`}),r&&(0,f.jsx)(`span`,{className:`text-xs text-stone-300`,children:r})]}),g=({speaker:e,mirrorExplorer:t})=>(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`h2`,{className:`mb-2 text-lg font-bold capitalize`,children:e}),(0,f.jsxs)(`table`,{className:`border-separate border-spacing-2`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{className:`text-left text-xs text-stone-400`,children:`base \\ face`}),a.map(e=>(0,f.jsx)(`th`,{className:`text-sm font-semibold`,children:e},e))]})}),(0,f.jsx)(`tbody`,{children:l.map(n=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{className:`pr-2 text-right text-sm font-semibold`,children:n}),a.map(i=>(0,f.jsx)(`td`,{className:`rounded bg-stone-800 p-2 align-bottom`,children:(0,f.jsx)(h,{speaker:e,art:r(e,n,i),mirrorExplorer:t})},i))]},n))})]})]}),_={parameters:{layout:`fullscreen`},args:{mirrorExplorer:!0},argTypes:{mirrorExplorer:{control:`boolean`,name:`Mirror the explorer (as in conversation)`}}},v={render:({mirrorExplorer:e})=>(0,f.jsx)(m,{children:p.map(t=>(0,f.jsx)(g,{speaker:t,mirrorExplorer:e},t))})},y={render:({mirrorExplorer:e})=>(0,f.jsx)(m,{children:(0,f.jsxs)(`table`,{className:`border-separate border-spacing-2`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{className:`text-left text-xs text-stone-400`,children:`pose \\ speaker`}),p.map(e=>(0,f.jsx)(`th`,{className:`text-sm font-semibold capitalize`,children:e},e))]})}),(0,f.jsx)(`tbody`,{children:i.map(t=>(0,f.jsxs)(`tr`,{children:[(0,f.jsxs)(`th`,{className:`pr-2 text-right text-sm font-semibold`,children:[t,(0,f.jsxs)(`div`,{className:`text-xs font-normal text-stone-400`,children:[n[t].base,` + `,n[t].face]})]}),p.map(n=>{let r=c(n,t);return(0,f.jsx)(`td`,{className:`rounded bg-stone-800 p-2 align-bottom`,children:(0,f.jsx)(h,{speaker:n,art:r,mirrorExplorer:e,label:r&&`${r.drawn.base} + ${r.drawn.face}`})},n)})]},t))})]})})},b=[`Grid`,`PoseNames`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ({
    mirrorExplorer
  }) => <Backdrop>
      {SPEAKERS.map(speaker => <SpeakerGrid key={speaker} speaker={speaker} mirrorExplorer={mirrorExplorer} />)}
    </Backdrop>
}`,...v.parameters?.docs?.source},description:{story:`Every speaker's pose bases (rows) under every face (columns), drawn as a conversation draws them.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: ({
    mirrorExplorer
  }) => <Backdrop>
      <table className="border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="text-left text-xs text-stone-400">pose \\ speaker</th>
            {SPEAKERS.map(speaker => <th key={speaker} className="text-sm font-semibold capitalize">
                {speaker}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {POSES.map(pose => <tr key={pose}>
              <th className="pr-2 text-right text-sm font-semibold">
                {pose}
                <div className="text-xs font-normal text-stone-400">
                  {POSE_PARTS[pose].base} + {POSE_PARTS[pose].face}
                </div>
              </th>
              {SPEAKERS.map(speaker => {
            const art = portraitFor(speaker, pose);
            return <td key={speaker} className="rounded bg-stone-800 p-2 align-bottom">
                    <Cell speaker={speaker} art={art} mirrorExplorer={mirrorExplorer} label={art && \`\${art.drawn.base} + \${art.drawn.face}\`} />
                  </td>;
          })}
            </tr>)}
        </tbody>
      </table>
    </Backdrop>
}`,...y.parameters?.docs?.source},description:{story:`What each pose name a line is written with draws for each speaker, giving way as the game does.`,...y.parameters?.docs?.description}}}})))()}x();export{v as Grid,y as PoseNames,b as __namedExportsOrder,_ as default};