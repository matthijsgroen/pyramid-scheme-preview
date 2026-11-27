import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{a as n,c as r,o as i}from"./dialogFocus-CTsUHdDF.js";import{n as a}from"./iframe-BfmzYHTX.js";import{n as o,t as s}from"./CollectionTabs-JXfcrnD3.js";var c,l,u;function d(){return(d=e((()=>{i(),c=a(),l=`camp-popup-title`,u=({title:e,closeLabel:t,onClose:i,fill:a=!1,children:o})=>(0,c.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-stretch justify-center bg-black/40 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] lg:items-center lg:p-4`,children:(0,c.jsxs)(`div`,{ref:n,role:`dialog`,"aria-modal":`true`,"aria-labelledby":l,tabIndex:-1,onKeyDown:r,className:`focus-brackets flex min-h-0 w-full flex-col overflow-hidden rounded-[18px] bg-camp-glass-solid text-camp-ink ring-1 ring-camp-glass-edge outline-none ring-inset supports-backdrop-filter:bg-camp-glass supports-backdrop-filter:backdrop-blur-lg supports-backdrop-filter:backdrop-saturate-160 ${a?`lg:h-full`:``} lg:max-h-full lg:max-w-4xl lg:rounded-[20px]`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between gap-3 pr-0.5 pl-4 lg:pl-6`,children:[(0,c.jsx)(`h2`,{id:l,className:`font-pyramid text-[22px] lg:text-2xl`,children:e}),(0,c.jsx)(`button`,{type:`button`,"data-input-back":!0,"aria-label":t,onClick:i,className:`flex size-11 items-center justify-center rounded-full hover:bg-black/5`,children:(0,c.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,strokeWidth:`2.5`,"aria-hidden":!0,className:`stroke-camp-ink`,children:(0,c.jsx)(`path`,{d:`M6 6l12 12M18 6L6 18`})})})]}),(0,c.jsx)(`div`,{className:`min-h-0 flex-1 overflow-auto px-2 pb-2 lg:px-4 lg:pb-4`,children:o})]})})})))()}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{f=t(),o(),d(),p=a(),m={component:u,parameters:{layout:`fullscreen`},args:{title:`Alle reizen`,closeLabel:`Sluiten`,onClose:()=>{}}},h={render:e=>(0,p.jsx)(u,{...e,children:(0,p.jsx)(`ul`,{className:`flex flex-col gap-2`,children:Array.from({length:12},(e,t)=>(0,p.jsxs)(`li`,{className:`rounded-[10px] border-2 border-camp-rule bg-camp-card px-3 py-2.5 font-extrabold`,children:[`Reis `,t+1]},t))})})},g=[{id:`treasures`,label:`Schatten`},{id:`tablets`,label:`Tabletten`},{id:`keys`,label:`Sleutels`}],_={parameters:{pageLayers:!0},render:function(e){let[t,n]=(0,f.useState)(g[0].id);return(0,p.jsx)(u,{...e,title:`Verzameling`,children:(0,p.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,p.jsx)(s,{tabs:g,selected:t,onSelect:n,label:`Je verzameling`,panelId:`story-shelf`}),(0,p.jsx)(`div`,{id:`story-shelf`,role:`tabpanel`,className:`grid grid-cols-3 gap-2`,children:Array.from({length:6},(e,n)=>(0,p.jsxs)(`button`,{type:`button`,className:`rounded-[10px] border-2 border-camp-rule bg-camp-card px-3 py-4 font-extrabold`,children:[g.find(e=>e.id===t)?.label,` `,n+1]},n))})]})})}},v=[`WithFiller`,`WithTabs`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <CampPopup {...args}>
      <ul className="flex flex-col gap-2">
        {Array.from({
        length: 12
      }, (_, i) => <li key={i} className="rounded-[10px] border-2 border-camp-rule bg-camp-card px-3 py-2.5 font-extrabold">
            Reis {i + 1}
          </li>)}
      </ul>
    </CampPopup>
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    pageLayers: true
  },
  render: function Render(args) {
    const [selected, setSelected] = useState(shelves[0].id);
    return <CampPopup {...args} title="Verzameling">
        <div className="flex flex-col gap-3">
          <CollectionTabs tabs={shelves} selected={selected} onSelect={setSelected} label="Je verzameling" panelId="story-shelf" />
          <div id="story-shelf" role="tabpanel" className="grid grid-cols-3 gap-2">
            {Array.from({
            length: 6
          }, (_, i) => <button key={i} type="button" className="rounded-[10px] border-2 border-camp-rule bg-camp-card px-3 py-4 font-extrabold">
                {shelves.find(shelf => shelf.id === selected)?.label} {i + 1}
              </button>)}
          </div>
        </div>
      </CampPopup>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as WithFiller,_ as WithTabs,v as __namedExportsOrder,m as default};