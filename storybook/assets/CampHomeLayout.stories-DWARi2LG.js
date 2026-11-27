import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{o as t,s as n}from"./dialogFocus-CTsUHdDF.js";import{n as r}from"./iframe-BfmzYHTX.js";import{n as i,t as a}from"./CampHud-8danBFEO.js";import{n as o,t as s}from"./ContinueCard-BxHP06nn.js";var c,l,u,d;function f(){return(f=e((()=>{t(),c=r(),l=`lg:transition-[scale,filter] lg:duration-250 lg:ease-out`,u=`lg:transition-[scale,filter] lg:duration-150 lg:ease-out lg:scale-102 lg:brightness-115 lg:motion-reduce:scale-100`,d=({hud:e,scene:t,sceneRef:r,card:i,aside:a,quiet:o=!1,pressed:s=!1,notice:d,hudHeight:f=0})=>(0,c.jsxs)(`div`,{ref:n,className:`focus-brackets relative h-(--screen-height) overflow-hidden bg-camp-night lg:grid lg:grid-cols-[minmax(0,1fr)_440px] lg:grid-rows-[auto_minmax(0,1fr)]`,children:[(0,c.jsx)(`div`,{className:`absolute inset-x-0 top-0 z-10 pt-safe-top lg:static lg:col-span-2 lg:bg-camp-night lg:pt-safe-top`,children:e}),(0,c.jsx)(`div`,{ref:r,className:`absolute inset-0 lg:static lg:col-span-2 lg:col-start-1 lg:row-start-2`,children:t}),(0,c.jsxs)(`div`,{className:`absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3.5 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:static lg:col-start-2 lg:row-start-2 lg:m-4 lg:ml-0 lg:min-h-0 lg:overflow-auto lg:rounded-[14px] lg:border lg:border-camp-glass-edge lg:bg-camp-glass-solid lg:p-6 lg:text-camp-ink lg:supports-backdrop-filter:bg-camp-glass lg:supports-backdrop-filter:backdrop-blur-lg lg:supports-backdrop-filter:backdrop-saturate-160 ${o?`invisible`:``} ${s?u:l}`,"data-pressed":s||void 0,children:[i,a&&(0,c.jsx)(`div`,{className:`hidden min-h-0 flex-1 flex-col lg:flex`,children:a})]}),d&&(0,c.jsx)(`div`,{className:`pointer-events-none absolute inset-x-0 top-[calc(var(--hud-height)+env(safe-area-inset-top)+0.75rem)] z-36 flex justify-center px-4 lg:top-4 lg:col-start-1 lg:row-start-2`,style:{"--hud-height":`${f}px`},children:(0,c.jsx)(`div`,{className:`pointer-events-auto`,children:d})})]})})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{f(),i(),o(),p=r(),m={component:d,parameters:{layout:`fullscreen`},args:{sceneRef:()=>{},hud:(0,p.jsx)(a,{title:`Kamp`,onTitleTap:()=>{},settingsLabel:`Instellingen`,onSettings:()=>{}}),scene:(0,p.jsx)(`div`,{className:`size-full bg-ink-500`}),card:(0,p.jsx)(s,{heading:`Verder met`,journeyName:`Vallei van de Ambachtslieden`,detail:`Piramide 3 van 5 · Junior`,setOffLabel:`Op pad`}),aside:(0,p.jsx)(`div`,{className:`flex-1 rounded-[10px] border-2 border-dashed border-camp-dashed p-3`,children:`Aside`})}},h={globals:{viewport:{value:`phone`}}},g={globals:{viewport:{value:`desktop`}}},_={args:{quiet:!0},globals:{viewport:{value:`desktop`}}},v=[`Phone`,`Desktop`,`DesktopQuiet`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone"
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop"
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    quiet: true
  },
  globals: {
    viewport: {
      value: "desktop"
    }
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as Desktop,_ as DesktopQuiet,h as Phone,v as __namedExportsOrder,m as default};