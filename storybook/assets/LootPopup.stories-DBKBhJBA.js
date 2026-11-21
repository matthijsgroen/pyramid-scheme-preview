import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-D0Egwrw_.js";import{n as r,t as i}from"./HieroglyphTile-DCQu1jM5.js";import{n as a,t as o}from"./MapPieceIcon-CODnM-2w.js";import{n as s,t as c}from"./LootPopup-D2TRr3mE.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{s(),r(),a(),l=t(),u=n(),d=({symbol:e,rarity:t})=>(0,u.jsx)(`div`,{className:`flex flex-col items-center`,children:(0,u.jsx)(`div`,{className:`mb-2 text-6xl ${t===`legendary`?`animate-pulse`:``}`,children:e})}),f=({amount:e})=>(0,u.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,u.jsx)(`div`,{className:`mb-2 text-5xl text-yellow-400`,children:`🪙`}),(0,u.jsxs)(`div`,{className:`text-sm font-bold text-white`,children:[`+`,e]})]}),p=e=>{let[t,n]=(0,l.useState)(e.isOpen);return(0,u.jsx)(`div`,{className:`relative`,children:(0,u.jsxs)(`div`,{className:`min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-8`,children:[(0,u.jsxs)(`div`,{className:`text-center`,children:[(0,u.jsx)(`h2`,{className:`mb-4 text-2xl font-bold text-amber-900`,children:`Loot Popup Demo`}),(0,u.jsx)(`button`,{onClick:()=>n(!0),className:`rounded-lg bg-amber-600 px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-amber-700`,children:`Trigger Loot Discovery!`})]}),(0,u.jsx)(c,{...e,isOpen:t,onDismiss:()=>n(!1)})]})})},m={component:c,parameters:{layout:`fullscreen`},argTypes:{isOpen:{control:`boolean`},rarity:{control:`select`,options:[`common`,`rare`,`epic`,`legendary`]},itemName:{control:`text`}},args:{youFoundLabel:`You found`,clickToContinueLabel:`Continue`}},h={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`Ancient Pottery Shard`,itemDescription:`A fragment of clay pottery from a bygone era. Though common, it tells a story of daily life in ancient times.`,rarity:`common`,itemComponent:(0,u.jsx)(d,{symbol:`🏺`,rarity:`common`}),onDismiss:()=>console.log(`Dismissed`)}},g={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`Sacred Ankh`,itemDescription:`A blessed symbol of eternal life, crafted from silver and blessed by temple priests. Its power resonates with ancient magic.`,rarity:`rare`,itemComponent:(0,u.jsx)(d,{symbol:`☥`,rarity:`rare`}),onDismiss:()=>console.log(`Dismissed`)}},_={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`Eye of Horus Amulet`,itemDescription:`A magnificent golden amulet bearing the all-seeing Eye of Horus. Legend says it grants protection and divine insight to its bearer.`,rarity:`epic`,itemComponent:(0,u.jsx)(d,{symbol:`𓂀`,rarity:`epic`}),onDismiss:()=>console.log(`Dismissed`)}},v={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`Crown of the Pharaoh`,itemDescription:`The legendary golden crown of ancient pharaohs, adorned with precious gems and imbued with the power of divine rulership. Only the worthy may claim it.`,rarity:`legendary`,itemComponent:(0,u.jsx)(d,{symbol:`👑`,rarity:`legendary`}),onDismiss:()=>console.log(`Dismissed`)}},y={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`Map Piece`,itemDescription:`The lines trace a temple precinct, and a stair running down beneath its offering floor.`,itemEffectDescription:`1 of 4 map pieces gathered`,rarity:`common`,itemComponent:(0,u.jsx)(o,{progress:{found:1,required:4}}),onDismiss:()=>console.log(`Dismissed`)}},b={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`Map Piece`,itemDescription:`The map is whole — it leads to High Priest's Treasury.`,itemEffectDescription:`4 of 4 map pieces gathered`,rarity:`legendary`,itemComponent:(0,u.jsx)(o,{progress:{found:4,required:4}}),onDismiss:()=>console.log(`Dismissed`)}},x={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`Gold Coins`,itemDescription:`Gleaming golden coins from the pharaoh's treasury. Each coin bears the mark of ancient Egyptian prosperity.`,rarity:`common`,itemComponent:(0,u.jsx)(f,{amount:150}),onDismiss:()=>console.log(`Dismissed`)}},S={args:{isOpen:!0,itemName:`Golden Scarab`,itemDescription:`A mystical scarab beetle carved from pure gold, said to be a guardian of ancient secrets. Its surface shimmers with otherworldly energy.`,rarity:`epic`,itemComponent:(0,u.jsx)(d,{symbol:`🪲`,rarity:`epic`}),onDismiss:()=>console.log(`Popup dismissed`)}},C={name:`Horus`,symbol:`𓅃`,difficulty:`expert`,description:`Falcon-headed sky god and protector of pharaohs, son of Osiris and Isis.`},w={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`${C.name} — Hieroglyph Fragment`,itemDescription:C.description,itemEffectDescription:`1 of 3 fragments found`,rarity:`common`,itemComponent:(0,u.jsx)(i,{symbol:C.symbol,difficulty:C.difficulty,size:`lg`,fragmentProgress:{found:1,required:3}}),onDismiss:()=>console.log(`Dismissed`)}},T={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`${C.name} — Hieroglyph Fragment`,itemDescription:C.description,itemEffectDescription:`2 of 3 fragments found`,rarity:`rare`,itemComponent:(0,u.jsx)(i,{symbol:C.symbol,difficulty:C.difficulty,size:`lg`,fragmentProgress:{found:2,required:3}}),onDismiss:()=>console.log(`Dismissed`)}},E={render:e=>(0,u.jsx)(p,{...e}),args:{isOpen:!1,itemName:`${C.name} — Hieroglyph Fragment`,itemDescription:C.description,itemEffectDescription:`3 of 3 fragments found`,rarity:`legendary`,itemComponent:(0,u.jsx)(i,{symbol:C.symbol,difficulty:C.difficulty,size:`lg`}),onDismiss:()=>console.log(`Dismissed`)}},D={args:{isOpen:!1,itemName:`Golden Scarab`,rarity:`epic`,itemComponent:(0,u.jsx)(d,{symbol:`🪲`,rarity:`epic`}),onDismiss:()=>console.log(`Popup dismissed`)},render:()=>{let[e,t]=(0,l.useState)(`common`),[n,r]=(0,l.useState)(!1),i={common:{name:`Clay Tablet`,symbol:`📜`,rarity:`common`,description:`An ancient clay tablet inscribed with hieroglyphs. A common find, but valuable to scholars studying ancient texts.`},rare:{name:`Silver Ankh`,symbol:`☥`,rarity:`rare`,description:`A beautifully crafted silver ankh, symbol of life and rebirth. Its surface gleams with mystical energy.`},epic:{name:`Golden Falcon`,symbol:`🦅`,rarity:`epic`,description:`A magnificent golden falcon statue representing Horus, the sky god. Its eyes seem to follow you with divine wisdom.`},legendary:{name:`Staff of Ra`,symbol:`🔱`,rarity:`legendary`,description:`The legendary staff wielded by the sun god Ra himself. Its power is beyond mortal comprehension, radiating divine light.`}},a=e=>{t(e),r(!0)};return(0,u.jsxs)(`div`,{className:`min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-8`,children:[(0,u.jsxs)(`div`,{className:`text-center`,children:[(0,u.jsx)(`h2`,{className:`mb-6 text-2xl font-bold text-amber-900`,children:`All Rarity Types`}),(0,u.jsx)(`div`,{className:`mx-auto grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4`,children:Object.entries(i).map(([e,t])=>(0,u.jsx)(`button`,{onClick:()=>a(e),className:`rounded-lg px-4 py-3 font-bold shadow-lg transition-all ${e===`common`?`bg-gray-500 text-white hover:bg-gray-600`:e===`rare`?`bg-blue-500 text-white hover:bg-blue-600`:e===`epic`?`bg-purple-500 text-white hover:bg-purple-600`:`bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600`}`,children:t.name},e))})]}),(0,u.jsx)(c,{isOpen:n,itemName:i[e].name,itemDescription:i[e].description,rarity:e,itemComponent:(0,u.jsx)(d,{symbol:i[e].symbol,rarity:e}),onDismiss:()=>r(!1),youFoundLabel:`You found`,clickToContinueLabel:`Continue`})]})}},O=[`CommonTreasure`,`RareTreasure`,`EpicTreasure`,`LegendaryTreasure`,`MapPieceIncomplete`,`MapPieceComplete`,`Coins`,`AlwaysOpen`,`FragmentFirstFind`,`FragmentSecondFind`,`FragmentComplete`,`AllRarities`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: "Ancient Pottery Shard",
    itemDescription: "A fragment of clay pottery from a bygone era. Though common, it tells a story of daily life in ancient times.",
    rarity: "common",
    itemComponent: <TreasureItem symbol="🏺" rarity="common" />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: "Sacred Ankh",
    itemDescription: "A blessed symbol of eternal life, crafted from silver and blessed by temple priests. Its power resonates with ancient magic.",
    rarity: "rare",
    itemComponent: <TreasureItem symbol="☥" rarity="rare" />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: "Eye of Horus Amulet",
    itemDescription: "A magnificent golden amulet bearing the all-seeing Eye of Horus. Legend says it grants protection and divine insight to its bearer.",
    rarity: "epic",
    itemComponent: <TreasureItem symbol="𓂀" rarity="epic" />,
    onDismiss: () => console.log("Dismissed")
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: "Crown of the Pharaoh",
    itemDescription: "The legendary golden crown of ancient pharaohs, adorned with precious gems and imbued with the power of divine rulership. Only the worthy may claim it.",
    rarity: "legendary",
    itemComponent: <TreasureItem symbol="👑" rarity="legendary" />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: "Map Piece",
    itemDescription: "The lines trace a temple precinct, and a stair running down beneath its offering floor.",
    itemEffectDescription: "1 of 4 map pieces gathered",
    rarity: "common",
    itemComponent: <MapPieceIcon progress={{
      found: 1,
      required: 4
    }} />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: "Map Piece",
    itemDescription: "The map is whole — it leads to High Priest's Treasury.",
    itemEffectDescription: "4 of 4 map pieces gathered",
    rarity: "legendary",
    itemComponent: <MapPieceIcon progress={{
      found: 4,
      required: 4
    }} />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: "Gold Coins",
    itemDescription: "Gleaming golden coins from the pharaoh's treasury. Each coin bears the mark of ancient Egyptian prosperity.",
    rarity: "common",
    itemComponent: <CoinItem amount={150} />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    itemName: "Golden Scarab",
    itemDescription: "A mystical scarab beetle carved from pure gold, said to be a guardian of ancient secrets. Its surface shimmers with otherworldly energy.",
    rarity: "epic",
    itemComponent: <TreasureItem symbol="🪲" rarity="epic" />,
    onDismiss: () => console.log("Popup dismissed")
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: \`\${FRAGMENT_ITEM.name} — Hieroglyph Fragment\`,
    itemDescription: FRAGMENT_ITEM.description,
    itemEffectDescription: "1 of 3 fragments found",
    rarity: "common",
    itemComponent: <HieroglyphTile symbol={FRAGMENT_ITEM.symbol} difficulty={FRAGMENT_ITEM.difficulty} size="lg" fragmentProgress={{
      found: 1,
      required: 3
    }} />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: \`\${FRAGMENT_ITEM.name} — Hieroglyph Fragment\`,
    itemDescription: FRAGMENT_ITEM.description,
    itemEffectDescription: "2 of 3 fragments found",
    rarity: "rare",
    itemComponent: <HieroglyphTile symbol={FRAGMENT_ITEM.symbol} difficulty={FRAGMENT_ITEM.difficulty} size="lg" fragmentProgress={{
      found: 2,
      required: 3
    }} />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveLootPopup {...args} />,
  args: {
    isOpen: false,
    itemName: \`\${FRAGMENT_ITEM.name} — Hieroglyph Fragment\`,
    itemDescription: FRAGMENT_ITEM.description,
    itemEffectDescription: "3 of 3 fragments found",
    rarity: "legendary",
    itemComponent: <HieroglyphTile symbol={FRAGMENT_ITEM.symbol} difficulty={FRAGMENT_ITEM.difficulty} size="lg" />,
    onDismiss: () => console.log("Dismissed")
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    itemName: "Golden Scarab",
    rarity: "epic",
    itemComponent: <TreasureItem symbol="🪲" rarity="epic" />,
    onDismiss: () => console.log("Popup dismissed")
  },
  render: () => {
    const [currentRarity, setCurrentRarity] = useState<"common" | "rare" | "epic" | "legendary">("common");
    const [isOpen, setIsOpen] = useState(false);
    const rarityData = {
      common: {
        name: "Clay Tablet",
        symbol: "📜",
        rarity: "common" as const,
        description: "An ancient clay tablet inscribed with hieroglyphs. A common find, but valuable to scholars studying ancient texts."
      },
      rare: {
        name: "Silver Ankh",
        symbol: "☥",
        rarity: "rare" as const,
        description: "A beautifully crafted silver ankh, symbol of life and rebirth. Its surface gleams with mystical energy."
      },
      epic: {
        name: "Golden Falcon",
        symbol: "🦅",
        rarity: "epic" as const,
        description: "A magnificent golden falcon statue representing Horus, the sky god. Its eyes seem to follow you with divine wisdom."
      },
      legendary: {
        name: "Staff of Ra",
        symbol: "🔱",
        rarity: "legendary" as const,
        description: "The legendary staff wielded by the sun god Ra himself. Its power is beyond mortal comprehension, radiating divine light."
      }
    };
    const showLoot = (rarity: "common" | "rare" | "epic" | "legendary") => {
      setCurrentRarity(rarity);
      setIsOpen(true);
    };
    return <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-8">
        <div className="text-center">
          <h2 className="mb-6 text-2xl font-bold text-amber-900">All Rarity Types</h2>
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {Object.entries(rarityData).map(([key, data]) => <button key={key} onClick={() => showLoot(key as keyof typeof rarityData)} className={\`rounded-lg px-4 py-3 font-bold shadow-lg transition-all \${key === "common" ? "bg-gray-500 text-white hover:bg-gray-600" : key === "rare" ? "bg-blue-500 text-white hover:bg-blue-600" : key === "epic" ? "bg-purple-500 text-white hover:bg-purple-600" : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600"}\`}>
                {data.name}
              </button>)}
          </div>
        </div>

        <LootPopup isOpen={isOpen} itemName={rarityData[currentRarity].name} itemDescription={rarityData[currentRarity].description} rarity={currentRarity} itemComponent={<TreasureItem symbol={rarityData[currentRarity].symbol} rarity={currentRarity} />} onDismiss={() => setIsOpen(false)} youFoundLabel="You found" clickToContinueLabel="Continue" />
      </div>;
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as AllRarities,S as AlwaysOpen,x as Coins,h as CommonTreasure,_ as EpicTreasure,E as FragmentComplete,w as FragmentFirstFind,T as FragmentSecondFind,v as LegendaryTreasure,b as MapPieceComplete,y as MapPieceIncomplete,g as RareTreasure,O as __namedExportsOrder,m as default};