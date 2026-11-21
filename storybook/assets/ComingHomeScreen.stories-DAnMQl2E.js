import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,c as n,o as r}from"./dialogFocus-CTsUHdDF.js";import{n as i}from"./iframe-D0Egwrw_.js";import{i as a,t as o}from"./campArt-D9LYsh5f.js";import{n as s,t as c}from"./MapPieceIcon-CODnM-2w.js";import{n as l,t as u}from"./HaulRow-DdJpqRSy.js";var d,f;function p(){return(p=e((()=>{r(),l(),d=i(),f=({title:e,fire:r,rest:i,haulTitle:a,lines:o,buttonLabel:s,onDone:c})=>(0,d.jsx)(`div`,{className:`fixed inset-0 z-40 flex h-(--screen-height) justify-center overflow-auto bg-camp-night-deep px-4 pt-[max(1.75rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] text-camp-paper lg:items-center lg:p-10`,children:(0,d.jsxs)(`section`,{ref:t,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`coming-home-title`,tabIndex:-1,onKeyDown:n,className:`focus-brackets grid w-full max-w-md grid-cols-1 content-start justify-items-center gap-4 outline-none lg:max-w-3xl lg:grid-cols-[14rem_minmax(0,1fr)] lg:grid-rows-[auto_auto_1fr] lg:justify-items-stretch lg:gap-x-7 lg:rounded-[20px] lg:border-2 lg:border-camp-ink lg:bg-camp-paper lg:p-8 lg:text-camp-ink`,children:[(0,d.jsx)(`h1`,{id:`coming-home-title`,className:`text-center font-pyramid text-2xl lg:col-start-2 lg:row-start-1 lg:text-left lg:text-[26px]`,children:e}),(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-3 lg:col-start-1 lg:row-span-3 lg:row-start-1`,children:[(0,d.jsx)(`div`,{className:`flex h-36 items-center justify-center lg:h-40`,children:r}),i&&(0,d.jsx)(`div`,{className:`flex flex-col items-center gap-1.5 text-center text-sm text-parchment-200 lg:text-camp-ink-soft`,children:i})]}),o.length>0&&(0,d.jsxs)(`div`,{className:`flex w-full flex-col gap-2 rounded-[14px] bg-camp-night p-3.5 lg:col-start-2 lg:bg-transparent lg:p-0`,children:[(0,d.jsx)(`h2`,{className:`text-xs font-extrabold tracking-widest text-camp-on-night uppercase lg:text-camp-label`,children:a}),o.map(e=>(0,d.jsx)(u,{visual:e.visual,title:e.title,note:e.note,badge:e.badge},e.key))]}),(0,d.jsx)(`button`,{type:`button`,onClick:c,className:`h-13 w-full self-end rounded-xl bg-camp-accent text-[17px] font-extrabold text-camp-on-accent hover:bg-camp-accent-hover lg:col-start-2 lg:mt-2`,children:s})]})})})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{p(),a(),s(),m=i(),h=o(`campfire`)?.url,g={component:f,parameters:{layout:`fullscreen`},args:{title:`Terug in het kamp`,fire:h?(0,m.jsx)(`img`,{src:h,alt:``,className:`h-full object-contain`}):(0,m.jsx)(`span`,{children:`🔥`}),rest:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`span`,{"aria-label":`3 van 3 hartjes`,children:`♥ ♥ ♥`}),(0,m.jsx)(`span`,{children:`Uitgerust bij het vuur — weer helemaal fit`})]}),haulTitle:`Je buit van deze tocht`,lines:[{key:`a`,visual:(0,m.jsx)(`span`,{className:`size-full bg-[#B45309]`}),title:`Bronzen waterkruik`,note:`Nieuw in je kamp — krijgt een plekje`,badge:`NIEUW`},{key:`b`,visual:(0,m.jsx)(`span`,{className:`size-full bg-[#2F5D7C]`}),title:`3 mozaïekstukjes`,note:`Naar het glas-in-loodraam`},{key:`c`,visual:(0,m.jsx)(`span`,{className:`size-full bg-ember-500`}),title:`+85 munten`,note:`Losse munten onderweg`}],buttonLabel:`Uitpakken`,onDone:()=>{}}},_={},v={args:{lines:[]}},y={args:{lines:[{key:`coins`,visual:(0,m.jsx)(`span`,{className:`text-6xl`,children:`🪙`}),title:`+85 munten`,note:`Losse munten onderweg`},{key:`pieces`,visual:(0,m.jsx)(`span`,{className:`text-6xl`,children:`🔷`}),title:`3 mozaïekstukjes`},{key:`map`,visual:(0,m.jsx)(c,{progress:{found:1,required:4}}),title:`Kaartdeel`},...h?[{key:`fire`,visual:(0,m.jsx)(`img`,{src:h,alt:``,className:`size-24 object-contain`}),title:`Kampvuur`}]:[]]}},b=[`ThreeLines`,`Empty`,`OversizedVisuals`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    lines: []
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    lines: [{
      key: "coins",
      visual: <span className="text-6xl">🪙</span>,
      title: "+85 munten",
      note: "Losse munten onderweg"
    }, {
      key: "pieces",
      visual: <span className="text-6xl">🔷</span>,
      title: "3 mozaïekstukjes"
    }, {
      key: "map",
      visual: <MapPieceIcon progress={{
        found: 1,
        required: 4
      }} />,
      title: "Kaartdeel"
    }, ...(fireUrl ? [{
      key: "fire",
      visual: <img src={fireUrl} alt="" className="size-24 object-contain" />,
      title: "Kampvuur"
    }] : [])]
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as Empty,y as OversizedVisuals,_ as ThreeLines,b as __namedExportsOrder,g as default};