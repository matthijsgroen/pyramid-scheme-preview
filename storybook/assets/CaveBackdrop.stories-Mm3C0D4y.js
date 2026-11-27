import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{n as r,t as i}from"./DesertBackdrop-mZ3ITfM6.js";import{a,c as o,i as s,l as c,o as l,r as u,s as d,u as f}from"./generateLevel-C282eLGM.js";import{n as p,r as m,t as h}from"./random-Dd7Wc25A.js";import{n as g,t as _}from"./journeys-BAaQcNdr.js";import{n as v,t as y}from"./generateJourneyLevel-CLPdXTzl.js";import{r as b,t as x}from"./hashString-_SCE45oz.js";import{r as ee,t as te}from"./useGameStorage-DJZepqOA.js";var S;function C(){return(C=e((()=>{S=new URL(`cave-mouth-DyJvkgGp.webp`,import.meta.url).href})))()}var w;function T(){return(T=e((()=>{w=new URL(`cavern-C5UMPQ2A.webp`,import.meta.url).href})))()}var E;function D(){return(D=e((()=>{E=new URL(`cave-mouth-DyJvkgGp.webp`,import.meta.url).href})))()}var O,k,A,j,M,N,P;function F(){return(F=e((()=>{C(),T(),D(),O=n(),k=Object.assign({"../../assets/exteriors/cave-mouth.webp":S,"../../assets/exteriors/cavern.webp":w}),A=e=>k[`../../assets/exteriors/${e}.webp`],j=`linear-gradient(to bottom, transparent 0%, transparent 58%, rgb(244 232 196 / 0.55) 82%, transparent 100%), conic-gradient(from 168deg at 50% -6%, transparent 0deg, rgb(244 232 196 / 0.5) 6deg, rgb(244 232 196 / 0.5) 18deg, transparent 24deg), radial-gradient(ellipse 60% 30% at 50% 100%, #3b3128 0%, transparent 100%), linear-gradient(to bottom, #15110e 0%, #221b15 60%, #2d241c 100%)`,M=`items-end pb-[max(15vh,8.4vw)]`,N=({children:e})=>{let t=A(`cavern`);return(0,O.jsx)(`div`,{className:`relative flex h-full flex-col bg-stone-950 bg-cover bg-bottom`,style:{backgroundImage:t?`url(${t})`:j},children:e})},P=()=>(0,O.jsxs)(`div`,{className:`relative w-[min(80vw,32rem)]`,"data-cave-mouth":``,children:[(0,O.jsx)(`img`,{src:E,alt:``,className:`absolute inset-0 origin-bottom -translate-y-1/3 -scale-y-45 opacity-20 brightness-0`}),(0,O.jsx)(`img`,{src:E,alt:``,className:`relative block`})]})})))()}var I,L,R,z,B;function V(){return(V=e((()=>{I=t(),te(),o(),L=`levelAnswers`,R=``,z={},B=e=>{let t=(0,I.useMemo)(()=>({key:e??R,values:a()}),[e]),[n,r,i]=ee(L,t),o=(0,I.useCallback)((t,n)=>{e&&r(r=>{let i=r.key===e?r.values:a();return{key:e,values:f(i,t,n)}})},[r,e]),s=(0,I.useCallback)(()=>{r({key:R,values:a()})},[r]);return{answers:e&&n.key===e?n.values:z,loaded:i,setAnswer:o,clearAnswers:s}}})))()}var H,U,W;function G(){return(G=e((()=>{H=t(),s(),o(),V(),U=n(),W=({content:e,storageKey:t,onComplete:n,onBack:r,decorationOffset:i=0,decorated:a,grounded:o=!1,dayTime:s,entranceBlockId:d,interactive:f=!0,revealed:p=!1})=>{let{answers:m,loaded:h,setAnswer:g,clearAnswers:_}=B(t),v=(0,H.useMemo)(()=>p?l(e.pyramid):void 0,[p,e.pyramid])??m,y=c({levelNr:e.levelNr,pyramid:e.pyramid,values:v}),b=(0,H.useRef)(!1),x=(0,H.useRef)(!1);return(0,H.useEffect)(()=>{y&&!x.current&&b.current&&n&&n(),x.current=y},[y,n]),(0,H.useEffect)(()=>{!p&&t&&h&&y&&!b.current&&_()},[p,t,h,y,_]),(0,U.jsx)(`div`,{className:`relative flex size-full flex-col`,children:(0,U.jsx)(`div`,{className:`flex w-full flex-1 justify-center ${o?`items-end`:`items-center`}`,children:(0,U.jsx)(u,{levelNr:e.levelNr,pyramid:e.pyramid,dayTime:s,decorationOffset:i,decorated:a,values:v,completed:y,entranceBlockId:d,interactive:f,onBack:r,onAnswer:t&&!p?(e,t)=>{b.current=!0,g(e,t)}:void 0})})})}})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{F(),r(),G(),p(),_(),v(),b(),o(),K=n(),q={component:P,parameters:{layout:`fullscreen`}},J={render:()=>(0,K.jsx)(`div`,{className:`h-screen`,children:(0,K.jsx)(i,{levelNr:1,start:`afternoon`,timeStepSize:1,children:(0,K.jsx)(`div`,{className:`flex flex-1 items-center justify-center`,children:(0,K.jsx)(P,{})})})})},Y=[`starter`,`junior`,`expert`,`master`,`wizard`],X=e=>{let t=g.filter(t=>t.exterior===`pyramid`&&t.difficulty===e).sort((e,t)=>t.levelCount-e.levelCount)[0];return y(t,t.levelCount,m(h(x(t.id),t.levelCount)))},Z={args:{difficulty:`junior`},argTypes:{difficulty:{control:`select`,options:Y}},render:({difficulty:e})=>{let t=X(e);return(0,K.jsx)(`div`,{className:`h-screen`,children:(0,K.jsx)(N,{children:(0,K.jsxs)(`div`,{className:`flex size-full flex-col`,children:[(0,K.jsx)(`div`,{className:`h-12 flex-shrink-0`}),(0,K.jsx)(`div`,{className:`flex flex-1 overflow-auto overscroll-contain`,children:(0,K.jsx)(`div`,{className:`relative w-full min-w-(--level-width)`,style:{"--level-width":`calc(var(--spacing) * 15 * ${d(t?.pyramid.floorCount??0)+2})`},children:(0,K.jsx)(`div`,{className:`absolute inset-0 flex justify-center ${M}`,children:t&&(0,K.jsx)(W,{content:t,dayTime:`afternoon`,decorated:!1,grounded:!0,interactive:!1})})})})]})})})}},Q=[`Mouth`,`Cavern`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-screen">
      <DesertBackdrop levelNr={1} start="afternoon" timeStepSize={1}>
        <div className="flex flex-1 items-center justify-center">
          <CaveMouth />
        </div>
      </DesertBackdrop>
    </div>
}`,...J.parameters?.docs?.source},description:{story:`The tomb's way in: the hill stands on the desert where a pyramid's board would.`,...J.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    difficulty: "junior"
  },
  argTypes: {
    difficulty: {
      control: "select",
      options: difficulties
    }
  },
  render: ({
    difficulty
  }) => {
    const level = biggestBoard(difficulty);
    return <div className="h-screen">
        <CaveBackdrop>
          <div className="flex size-full flex-col">
            <div className="h-12 flex-shrink-0" />
            {/* The expedition's own scroll box: a board wider than the screen scrolls sideways. */}
            <div className="flex flex-1 overflow-auto overscroll-contain">
              <div className="relative w-full min-w-(--level-width)" style={{
              "--level-width": \`calc(var(--spacing) * 15 * \${getLevelWidth(level?.pyramid.floorCount ?? 0) + 2})\`
            }}>
                <div className={\`absolute inset-0 flex justify-center \${cavernFloor}\`}>
                  {level && <Level content={level} dayTime="afternoon" decorated={false} grounded interactive={false} />}
                </div>
              </div>
            </div>
          </div>
        </CaveBackdrop>
      </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`The cavern with a board standing in it, laid out as the expedition screen lays a level. Pick a tier to
check its biggest board still stands on the sunlight.`,...Z.parameters?.docs?.description}}}})))()}$();export{Z as Cavern,J as Mouth,Q as __namedExportsOrder,q as default};