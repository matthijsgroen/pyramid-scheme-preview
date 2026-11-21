import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-D0Egwrw_.js";import{J as r,et as i,n as a,r as o}from"./siteAssembler-Cknp97hv.js";import{a as s,t as c,u as l}from"./tileAssets-CS6oizWP.js";import{p as u}from"./mapScale-LUmBdn6N.js";import{c as d,i as f,n as p,s as m,t as h}from"./ExplorerDot-f6V8Nd9R.js";import{n as g,t as _}from"./SiteMapView-EHzijMOG.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{v=t(),a(),i(),u(),s(),d(),g(),y=n(),b=()=>{let e=o(`dot-story`,{pathPuzzles:2,difficulty:`starter`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[]},7);if(!e.success)throw Error(`assembly failed`);let[t,n]=e.grid.entrancePos;return r(e.grid,t,n)},x=b(),S=[`s`,`n`,`e`,`w`],C={component:h,parameters:{layout:`centered`}},w={args:{grid:x,pos:x.entrancePos},render:({pos:e})=>(0,y.jsx)(`div`,{style:{position:`relative`,width:x.cols*44+60,height:x.rows*44+60,background:`#110d08`},children:(0,y.jsx)(h,{grid:x,pos:e})})},T={args:{grid:x,pos:x.entrancePos},render:()=>{let[e,t]=(0,v.useState)(x),[n,i]=(0,v.useState)(x.entrancePos);return(0,y.jsx)(_,{grid:e,explorerPos:n,onCellClick:(e,n)=>{t(t=>r(t,e,n)),i([e,n])}})}},E=4,D=40,O=70,k=`brightness(1.1) saturate(1.14) drop-shadow(0 0 5px rgba(255,186,102,0.6))`,A=({prefix:e,facing:t,step:n})=>{let r=l(`${e}-${t===`w`?`e`:t}`);return r.length===0?null:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{}),e!==`explorer-zip`&&(0,y.jsx)(f,{}),(0,y.jsx)(`div`,{style:{position:`absolute`,left:-20,top:28-O-5,width:D,height:O,overflow:`hidden`,transform:t===`w`?`scaleX(-1)`:void 0,filter:k},children:(0,y.jsx)(`img`,{src:r[n%r.length],width:D,height:O,alt:``})})]})},j=[`carry`,`explorer-zip`],M=S.length*(1+j.length),N={args:{grid:x,pos:x.entrancePos},render:()=>(0,y.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`#b9b6ae`,`#14110d`].map(e=>(0,y.jsx)(`div`,{className:`flex gap-4`,children:[1,3].map(t=>(0,y.jsx)(`div`,{style:{width:E*56*t,height:M*84*t,background:e,imageRendering:c,overflow:`hidden`},children:(0,y.jsxs)(`div`,{style:{position:`relative`,width:E*56,height:M*84,transform:`scale(${t})`,transformOrigin:`0 0`},children:[S.map((e,t)=>Array.from({length:E},(n,r)=>(0,y.jsx)(`div`,{style:{position:`absolute`,left:r*56+28,top:t*84+84-28,width:0,height:0},children:(0,y.jsx)(p,{facing:e,step:r})},`${e}-${r}`))),j.map((e,t)=>S.map((n,r)=>Array.from({length:E},(i,a)=>(0,y.jsx)(`div`,{style:{position:`absolute`,left:a*56+28,top:((t+1)*S.length+r)*84+84-28,width:0,height:0},children:e===`carry`?(0,y.jsx)(p,{facing:n,step:a,carrying:!0}):(0,y.jsx)(A,{prefix:e,facing:n,step:a})},`${e}-${n}-${a}`))))]})},t))},e))})},P={args:{grid:x,pos:x.entrancePos},render:()=>{let[e,t]=(0,v.useState)(180),[n,r]=(0,v.useState)(!0);return(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsxs)(`label`,{className:`flex items-center gap-3 text-sm text-gray-500`,children:[(0,y.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),`walking`,(0,y.jsx)(`input`,{type:`range`,min:60,max:800,step:20,value:e,onChange:e=>t(Number(e.target.value))}),e,`ms a cell`]}),[`#b9b6ae`,`#14110d`].map(t=>(0,y.jsx)(`div`,{className:`flex gap-4`,children:[1,3].map(r=>(0,y.jsx)(`div`,{style:{width:S.length*56*r,height:168*r,background:t,imageRendering:c,overflow:`hidden`},children:(0,y.jsx)(`div`,{style:{position:`relative`,width:S.length*56,height:168,transform:`scale(${r})`,transformOrigin:`0 0`},children:[!1,!0].map((t,r)=>S.map((i,a)=>(0,y.jsx)(`div`,{style:{position:`absolute`,left:a*56+28,top:(r+1)*84-28,width:0,height:0},children:(0,y.jsx)(p,{facing:i,walking:n,cellMs:e,carrying:t})},`${t}-${i}`)))})},r))},t))]})}},F=[`AtEntrance`,`Interactive`,`Facings`,`Walking`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    grid,
    pos: grid.entrancePos
  },
  render: ({
    pos
  }) => <div style={{
    position: "relative",
    width: grid.cols * 44 + 60,
    height: grid.rows * 44 + 60,
    background: "#110d08"
  }}>
      <ExplorerDot grid={grid} pos={pos} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    grid,
    pos: grid.entrancePos
  },
  render: () => {
    const [currentGrid, setCurrentGrid] = useState<FloorGrid>(grid);
    const [pos, setPos] = useState<readonly [number, number]>(grid.entrancePos);
    return <SiteMapView grid={currentGrid} explorerPos={pos} onCellClick={(r, c) => {
      setCurrentGrid(prev => completeCell(prev, r, c));
      setPos([r, c]);
    }} />;
  }
}`,...T.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    grid,
    pos: grid.entrancePos
  },
  render: () => {
    const grounds = ["#b9b6ae", "#14110d"];
    // The figure stands taller than its cell — feet on the floor line, head into the wall band above — so
    // the viewBox has to be the figure's height, not the cell's.
    const rowH = CELL * 1.5;
    return <div className="flex flex-col gap-4">
        {grounds.map(ground => <div key={ground} className="flex gap-4">
            {[1, 3].map(scale =>
        // The map is HTML, so the figure is too: a box with no size of its own stands where a
        // \`<g transform>\` used to, and the whole sheet is scaled by one transform.
        <div key={scale} style={{
          width: STEPS * CELL * scale,
          height: ROWS * rowH * scale,
          background: ground,
          imageRendering: ART_IMAGE_RENDERING,
          overflow: "hidden"
        }}>
                <div style={{
            position: "relative",
            width: STEPS * CELL,
            height: ROWS * rowH,
            transform: \`scale(\${scale})\`,
            transformOrigin: "0 0"
          }}>
                  {FACINGS.map((facing, row) => Array.from({
              length: STEPS
            }, (_, step) => <div key={\`\${facing}-\${step}\`} style={{
              position: "absolute",
              left: step * CELL + CELL / 2,
              top: row * rowH + rowH - CELL / 2,
              width: 0,
              height: 0
            }}>
                        <ExplorerFigure facing={facing} step={step} />
                      </div>))}
                  {POSES.map((prefix, pose) => FACINGS.map((facing, row) => Array.from({
              length: STEPS
            }, (_, step) => <div key={\`\${prefix}-\${facing}-\${step}\`} style={{
              position: "absolute",
              left: step * CELL + CELL / 2,
              top: ((pose + 1) * FACINGS.length + row) * rowH + rowH - CELL / 2,
              width: 0,
              height: 0
            }}>
                          {prefix === "carry" ? <ExplorerFigure facing={facing} step={step} carrying /> : <PoseFigure prefix={prefix} facing={facing} step={step} />}
                        </div>)))}
                </div>
              </div>)}
          </div>)}
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    grid,
    pos: grid.entrancePos
  },
  render: () => {
    // The map's own walking speed.
    const [cellMs, setCellMs] = useState(180);
    const [walking, setWalking] = useState(true);
    const grounds = ["#b9b6ae", "#14110d"];
    const rowH = CELL * 1.5;
    return <div className="flex flex-col gap-4">
        <label className="flex items-center gap-3 text-sm text-gray-500">
          <input type="checkbox" checked={walking} onChange={e => setWalking(e.target.checked)} />
          walking
          <input type="range" min={60} max={800} step={20} value={cellMs} onChange={e => setCellMs(Number(e.target.value))} />
          {cellMs}ms a cell
        </label>
        {grounds.map(ground => <div key={ground} className="flex gap-4">
            {[1, 3].map(scale => <div key={scale} style={{
          width: FACINGS.length * CELL * scale,
          height: 2 * rowH * scale,
          background: ground,
          imageRendering: ART_IMAGE_RENDERING,
          overflow: "hidden"
        }}>
                <div style={{
            position: "relative",
            width: FACINGS.length * CELL,
            height: 2 * rowH,
            transform: \`scale(\${scale})\`,
            transformOrigin: "0 0"
          }}>
                  {[false, true].map((carrying, row) => FACINGS.map((facing, col) => <div key={\`\${carrying}-\${facing}\`} style={{
              position: "absolute",
              left: col * CELL + CELL / 2,
              top: (row + 1) * rowH - CELL / 2,
              width: 0,
              height: 0
            }}>
                        <ExplorerFigure facing={facing} walking={walking} cellMs={cellMs} carrying={carrying} />
                      </div>))}
                </div>
              </div>)}
          </div>)}
      </div>;
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{w as AtEntrance,N as Facings,T as Interactive,P as Walking,F as __namedExportsOrder,C as default};