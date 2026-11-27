import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,r,t as i}from"./random-Dd7Wc25A.js";import{n as a,t as o}from"./journeys-BAaQcNdr.js";import{r as s,t as c}from"./hashString-_SCE45oz.js";import{C as l,S as u}from"./hieroglyphCurrency-CEsMUK2_.js";import{c as d,i as f,l as p,o as m,r as h,s as g}from"./TombTableau-DFbTmkzr.js";import{n as _,t as v}from"./TombPuzzleView-4pBZDqaG.js";var y,b,x,S,C,w;function T(){return(T=e((()=>{n(),o(),s(),u(),g(),d(),h(),_(),y=t(),b={title:`Hieroglyph/TombPuzzleView`,parameters:{layout:`fullscreen`}},x=a.find(e=>e.exterior===`tomb`),S=i(c(x.id),1),C={render:()=>{let e=p().find(e=>e.tombJourneyId===x.id),t=m({amountSymbols:e.symbolCount,hieroglyphIds:e.inventoryIds,numberRange:l(x.id).numberRange,operations:l(x.id).operators},r(S)),n=e=>f(e,x.difficulty);return(0,y.jsx)(v,{difficulty:x.difficulty,wall:x.difficulty,tableau:e,calculation:t,filledState:{symbolCounts:{},filledPositions:{}},resolveTile:n,hintFormulas:t.hintFormulas.map((e,t)=>({formula:e,index:t})),isPuzzleCompleted:!1,lockState:`empty`,lockValue:``,onLockChange:()=>{},onLockSubmit:()=>{},inventoryTitle:`Available symbols`,inventoryItems:Object.keys(t.symbolCounts).map(e=>({symbolId:e,...n(e),owned:!0,found:2,required:2,neededLabel:`2/2 needed`})),onInventoryItemClick:()=>{}})}},w=[`InProgress`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tableaus = useTableauTranslations();
    const tableau = tableaus.find(t => t.tombJourneyId === journey.id)!;
    const calculation = generateRewardCalculation({
      amountSymbols: tableau.symbolCount,
      hieroglyphIds: tableau.inventoryIds,
      numberRange: tombFormulaFor(journey.id).numberRange,
      operations: tombFormulaFor(journey.id).operators
    }, mulberry32(seed));
    const resolveTile = (symbolId: string) => resolveHieroglyphSymbol(symbolId, journey.difficulty);
    return <TombPuzzleView difficulty={journey.difficulty} wall={journey.difficulty} tableau={tableau} calculation={calculation} filledState={{
      symbolCounts: {},
      filledPositions: {}
    }} resolveTile={resolveTile} hintFormulas={calculation.hintFormulas.map((f, i) => ({
      formula: f,
      index: i
    }))} isPuzzleCompleted={false} lockState="empty" lockValue="" onLockChange={() => {}} onLockSubmit={() => {}} inventoryTitle="Available symbols" inventoryItems={Object.keys(calculation.symbolCounts).map(symbolId => ({
      symbolId,
      ...resolveTile(symbolId),
      owned: true,
      found: 2,
      required: 2,
      neededLabel: "2/2 needed"
    }))} onInventoryItemClick={() => {}} />;
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as InProgress,w as __namedExportsOrder,b as default};