import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{n as r,t as i}from"./mosaicPieces.generated-CDXfEW1U.js";import{r as a,t as o}from"./mosaicRevealOrder-_2MEZjKd.js";import{n as s,t as c}from"./StoneFrame-keMDa4bm.js";import{r as l,t as u}from"./StainedGlassMosaic-vAS93jlj.js";var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{d=t(),l(),s(),r(),a(),f=n(),p={title:`Mosaic/StainedGlassMosaic`,component:u,parameters:{layout:`centered`}},m={args:{revealedPieces:new Set},decorators:[e=>(0,f.jsx)(`div`,{className:`w-96 bg-black p-4`,children:(0,f.jsx)(e,{})})]},h={args:{revealedPieces:new Set(i.map(e=>e.id))},decorators:[e=>(0,f.jsx)(`div`,{className:`w-96 bg-black p-4`,children:(0,f.jsx)(e,{})})]},g=new Set(i.filter(e=>e.journeyId===`starter_1`&&e.levelIndex===0).map(e=>e.id)),_={args:{revealedPieces:g,newPieces:g},decorators:[e=>(0,f.jsx)(`div`,{className:`w-96 bg-black p-4`,children:(0,f.jsx)(e,{})})]},v=[`starter`,`junior`,`expert`,`master`,`wizard`],y={render:()=>{let[e,t]=(0,d.useState)(`starter`),[n,r]=(0,d.useState)(0),a=o.filter(t=>t.journeyId.startsWith(`${e}_`)),s=new Set(a.slice(0,n).map(e=>`${e.journeyId}:${e.levelIndex}`)),l=new Set(i.filter(e=>s.has(`${e.journeyId}:${e.levelIndex}`)).map(e=>e.id)),p=i.filter(t=>t.journeyId.startsWith(`${e}_`)).length;return(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-4 bg-black p-6`,children:[(0,f.jsx)(`div`,{className:`flex gap-2`,children:v.map(n=>(0,f.jsx)(`button`,{onClick:()=>{t(n),r(0)},className:n===e?`rounded bg-amber-500 px-3 py-1 text-sm`:`rounded bg-white/10 px-3 py-1 text-sm text-white`,children:n},n))}),(0,f.jsx)(c,{children:(0,f.jsx)(`div`,{className:`w-96`,children:(0,f.jsx)(u,{revealedPieces:l})})}),(0,f.jsx)(`input`,{type:`range`,min:0,max:a.length,value:n,onChange:e=>r(Number(e.target.value)),className:`w-96 accent-amber-500`}),(0,f.jsxs)(`p`,{className:`text-xs text-white/60`,children:[e,`: step `,n,` / `,a.length,` — `,l.size,` / `,p,` pieces in this register`]})]})}},b=new Map(i.map(e=>[e.id,o.findIndex(t=>t.journeyId===e.journeyId&&t.levelIndex===e.levelIndex)])),x={render:()=>{let[e,t]=(0,d.useState)(0),n=new Set(i.filter(t=>(b.get(t.id)??0)<e).map(e=>e.id)),r=n.size;return(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-4 bg-black p-6`,children:[(0,f.jsx)(`div`,{className:`w-96`,children:(0,f.jsx)(u,{revealedPieces:n})}),(0,f.jsx)(`input`,{type:`range`,min:0,max:o.length,value:e,onChange:e=>t(Number(e.target.value)),className:`w-96 accent-amber-500`}),(0,f.jsxs)(`p`,{className:`text-xs text-white/60`,children:[`step `,e,` / `,o.length,` — `,r,` / `,i.length,` pieces revealed`]})]})}},S=[`Unrevealed`,`FullyRevealed`,`NewPiecesGlow`,`RegisterByDifficulty`,`RevealSlider`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    revealedPieces: new Set()
  },
  decorators: [Story => <div className="w-96 bg-black p-4">
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    revealedPieces: new Set(MOSAIC_PIECES.map(p => p.id))
  },
  decorators: [Story => <div className="w-96 bg-black p-4">
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    revealedPieces: FIRST_STEP_PIECES,
    newPieces: FIRST_STEP_PIECES
  },
  decorators: [Story => <div className="w-96 bg-black p-4">
        <Story />
      </div>]
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tier, setTier] = useState<(typeof TIERS)[number]>("starter");
    const [step, setStep] = useState(0);
    const tierSteps = LEVEL_STEPS.filter(s => s.journeyId.startsWith(\`\${tier}_\`));
    const done = new Set(tierSteps.slice(0, step).map(s => \`\${s.journeyId}:\${s.levelIndex}\`));
    const revealed = new Set(MOSAIC_PIECES.filter(p => done.has(\`\${p.journeyId}:\${p.levelIndex}\`)).map(p => p.id));
    const tierPieceTotal = MOSAIC_PIECES.filter(p => p.journeyId.startsWith(\`\${tier}_\`)).length;
    return <div className="flex flex-col items-center gap-4 bg-black p-6">
        <div className="flex gap-2">
          {TIERS.map(t => <button key={t} onClick={() => {
          setTier(t);
          setStep(0);
        }} className={t === tier ? "rounded bg-amber-500 px-3 py-1 text-sm" : "rounded bg-white/10 px-3 py-1 text-sm text-white"}>
              {t}
            </button>)}
        </div>
        <StoneFrame>
          <div className="w-96">
            <StainedGlassMosaic revealedPieces={revealed} />
          </div>
        </StoneFrame>
        <input type="range" min={0} max={tierSteps.length} value={step} onChange={e => setStep(Number(e.target.value))} className="w-96 accent-amber-500" />
        <p className="text-xs text-white/60">
          {tier}: step {step} / {tierSteps.length} — {revealed.size} / {tierPieceTotal} pieces in this register
        </p>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const revealed = new Set(MOSAIC_PIECES.filter(p => (PIECE_STEP.get(p.id) ?? 0) < step).map(p => p.id));
    const pieceCount = revealed.size;
    return <div className="flex flex-col items-center gap-4 bg-black p-6">
        <div className="w-96">
          <StainedGlassMosaic revealedPieces={revealed} />
        </div>
        <input type="range" min={0} max={LEVEL_STEPS.length} value={step} onChange={e => setStep(Number(e.target.value))} className="w-96 accent-amber-500" />
        <p className="text-xs text-white/60">
          step {step} / {LEVEL_STEPS.length} — {pieceCount} / {MOSAIC_PIECES.length} pieces revealed
        </p>
      </div>;
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{h as FullyRevealed,_ as NewPiecesGlow,y as RegisterByDifficulty,x as RevealSlider,m as Unrevealed,S as __namedExportsOrder,p as default};