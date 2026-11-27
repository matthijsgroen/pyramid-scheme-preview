import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{a as n,c as r,i,l as a,r as o}from"./campLayout-Cq8J-5P2.js";import{n as s,t as c}from"./CampScene-IHykIGc4.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{s(),a(),n(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,{fn:d}=__STORYBOOK_MODULE_TEST__,f=(e,{args:t})=>(0,l.jsx)(`div`,{className:`flex min-h-screen items-start justify-center bg-neutral-900`,children:(0,l.jsx)(`div`,{style:{width:t.width,height:t.height},children:(0,l.jsx)(e,{})})}),p={width:390,height:844},m={top:56,bottom:96},h={component:c,parameters:{layout:`fullscreen`},decorators:[f],argTypes:{chapter:{options:[`starter`,`junior`,`expert`,`master`,`wizard`],control:{type:`select`}},width:{control:{type:`number`,min:0,step:10}},height:{control:{type:`number`,min:0,step:10}}},args:{...p,chapter:`wizard`,found:i(r,`wizard`),insets:m,standIns:!0}},g=e=>e.steps.every(e=>!e.layer),_=(e,t)=>`${e.id}_${t}`,v=e=>e.steps.flatMap(e=>e.given?[]:e.pieces.map(e=>e.id)),y=Object.fromEntries(r.spots.flatMap(e=>g(e)?[[e.id,{control:{type:`range`,min:0,max:e.steps.length,step:1},table:{category:`chains`}}]]:v(e).map(t=>[_(e,t),{name:t,control:{type:`boolean`},table:{category:e.id}}]))),b=e=>Object.fromEntries(r.spots.flatMap(t=>g(t)?[[t.id,(e[t.id]??[]).length]]:v(t).map(n=>[_(t,n),(e[t.id]??[]).includes(n)]))),x={argTypes:{...y,found:{table:{disable:!0}}},args:{chapter:`expert`,...b(i(r,`expert`))},render:({width:e,height:t,chapter:n,insets:i,className:a,entrances:s,...u})=>{let d=Object.fromEntries(r.spots.filter(g).map(e=>[e.id,Number(u[e.id]??0)])),f={...o(r,d),...Object.fromEntries(r.spots.filter(e=>!g(e)).map(e=>[e.id,v(e).filter(t=>u[_(e,t)]===!0)]))};return(0,l.jsx)(c,{width:e,height:t,chapter:n,found:f,insets:i,entrances:s,className:a,standIns:!0})}},S={args:{chapter:`starter`,found:{}}},C={args:{chapter:`junior`,found:{}}},w={args:{chapter:`expert`,found:{}}},T={args:{chapter:`master`,found:{}}},E={args:{chapter:`wizard`,found:{}}},D={args:{chapter:`starter`,found:i(r,`starter`)}},O={args:{chapter:`junior`,found:i(r,`junior`)}},k={args:{chapter:`expert`,found:i(r,`expert`)}},A={args:{chapter:`master`,found:i(r,`master`)}},j={args:{chapter:`wizard`,found:i(r,`wizard`)}},M={args:{chapter:`expert`,found:{...i(r,`junior`),...o(r,{fire:2,sleeping:4,cooking:1,camel:2,mapTable:1,palmGarden:1})}}},N={args:{chapter:`master`,found:{fire:[`stoneRing`,`pot`,`seatingStones`,`seatCushions`],sleeping:[`reedMat`,`tent`,`tentFlag`],water:[`jar`,`well`],cooking:[`tripod`,`feast`],mapTable:[`map`,`scrollCase`,`starMap`]}}},P={args:{width:390,height:844}},F={args:{width:820,height:1180}},I={args:{width:1e3,height:836}},L={args:{width:1600,height:700}},R={args:{entrances:{chest:{label:`Collection`,badge:3,onOpen:d()},window:{label:`Mosaic 61/252`,onOpen:d()},mapTable:{label:`Journeys`,onOpen:d()}}}},z={entrances:{chest:{label:`Collection`,onOpen:u(`open collection`)},window:{label:`Mosaic 61/252`,onOpen:u(`open mosaic`)},mapTable:{label:`Journeys`,onOpen:u(`open map table`)}}},B={args:{chapter:`junior`,found:i(r,`junior`),...z}},V={args:{chapter:`expert`,found:i(r,`expert`),...z}},H=[`Playground`,`StarterEmpty`,`JuniorEmpty`,`ExpertEmpty`,`MasterEmpty`,`WizardEmpty`,`StarterFull`,`JuniorFull`,`ExpertFull`,`MasterFull`,`WizardFull`,`PartlyBuilt`,`FoundInAnyOrder`,`Phone`,`Tablet`,`DesktopPane`,`Ultrawide`,`WithBadges`,`CompassByTheMap`,`CompassOnTheTable`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...spotControls,
    found: {
      table: {
        disable: true
      }
    }
  },
  args: {
    chapter: "expert",
    ...playgroundArgs(fullFound(CAMP_CATALOGUE, "expert"))
  },
  render: ({
    width,
    height,
    chapter,
    insets,
    className,
    entrances,
    ...rest
  }) => {
    const counts = Object.fromEntries(CAMP_CATALOGUE.spots.filter(isChain).map(spot => [spot.id, Number(rest[spot.id] ?? 0)]));
    const found: CampFound = {
      ...foundUpTo(CAMP_CATALOGUE, counts),
      ...Object.fromEntries(CAMP_CATALOGUE.spots.filter(spot => !isChain(spot)).map(spot => [spot.id, piecesOf(spot).filter(piece => rest[pieceArg(spot, piece)] === true)]))
    };
    return <CampScene width={width} height={height} chapter={chapter} found={found} insets={insets} entrances={entrances} className={className} standIns />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "starter",
    found: {}
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "junior",
    found: {}
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "expert",
    found: {}
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "master",
    found: {}
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "wizard",
    found: {}
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "starter",
    found: fullFound(CAMP_CATALOGUE, "starter")
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "junior",
    found: fullFound(CAMP_CATALOGUE, "junior")
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "expert",
    found: fullFound(CAMP_CATALOGUE, "expert")
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "master",
    found: fullFound(CAMP_CATALOGUE, "master")
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "wizard",
    found: fullFound(CAMP_CATALOGUE, "wizard")
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "expert",
    found: {
      ...fullFound(CAMP_CATALOGUE, "junior"),
      ...foundUpTo(CAMP_CATALOGUE, {
        fire: 2,
        sleeping: 4,
        cooking: 1,
        camel: 2,
        mapTable: 1,
        palmGarden: 1
      })
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "master",
    found: {
      fire: ["stoneRing", "pot", "seatingStones", "seatCushions"],
      sleeping: ["reedMat", "tent", "tentFlag"],
      water: ["jar", "well"],
      cooking: ["tripod", "feast"],
      mapTable: ["map", "scrollCase", "starMap"]
    }
  }
}`,...N.parameters?.docs?.source},description:{story:`Finds out of the painted order: a scroll case with no table waits in the chest, and the pot waits for the fire.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    width: 390,
    height: 844
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    width: 820,
    height: 1180
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    width: 1000,
    height: 836
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    width: 1600,
    height: 700
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    entrances: {
      chest: {
        label: "Collection",
        badge: 3,
        onOpen: fn()
      },
      window: {
        label: "Mosaic 61/252",
        onOpen: fn()
      },
      mapTable: {
        label: "Journeys",
        onOpen: fn()
      }
    }
  }
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "junior",
    found: fullFound(CAMP_CATALOGUE, "junior"),
    ...detectorEntrances
  }
}`,...B.parameters?.docs?.source},description:{story:`Before the table stands, the detectors lie by the map on the sand; the map's entrance covers them.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    chapter: "expert",
    found: fullFound(CAMP_CATALOGUE, "expert"),
    ...detectorEntrances
  }
}`,...V.parameters?.docs?.source},description:{story:`On the table: one entrance for the table, the compass on it and the horn by its leg.`,...V.parameters?.docs?.description}}}})))()}U();export{B as CompassByTheMap,V as CompassOnTheTable,I as DesktopPane,w as ExpertEmpty,k as ExpertFull,N as FoundInAnyOrder,C as JuniorEmpty,O as JuniorFull,T as MasterEmpty,A as MasterFull,M as PartlyBuilt,P as Phone,x as Playground,S as StarterEmpty,D as StarterFull,F as Tablet,L as Ultrawide,R as WithBadges,E as WizardEmpty,j as WizardFull,H as __namedExportsOrder,h as default};