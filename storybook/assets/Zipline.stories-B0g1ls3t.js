import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{an as t,in as n,n as r}from"./siteAssembler-CNzpvYB2.js";import{n as i,t as a}from"./SiteMapView-BA5G55ph.js";import{t as o}from"./registerModApps-nWdAfwlB.js";import{t as s}from"./floorFrom-DxIgymAG.js";import{a as c,c as l,t as u}from"./floorFixtures.testing-C1LdYyP7.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),r(),l(),i(),o(),d=`h-[26rem] w-full`,f=e=>{let n=u.find(t=>t.travel===e),{grid:r,at:i,dropAt:a}=c(n,`room`,`room`,`visible`,`fromNode`,t(e));return{grid:s({...r,difficulty:`expert`}),launch:i(a.launch),landing:i(a.landing)}},p={title:`Topology/Zipline`,component:a,parameters:{layout:`fullscreen`},args:{className:d}},m=f(`e`),h=f(`w`),g=f(`s`),_=f(`n`),v=`h-[40rem] w-full`,y={args:{grid:m.grid,explorerPos:m.launch}},b={args:{grid:h.grid,explorerPos:h.launch}},x={args:{grid:m.grid,explorerPos:m.landing}},S={args:{grid:h.grid,explorerPos:h.landing}},C={args:{grid:g.grid,explorerPos:g.launch,className:v}},w={args:{grid:_.grid,explorerPos:_.launch,className:v}},T={args:{grid:g.grid,explorerPos:g.landing,className:v}},E={args:{grid:_.grid,explorerPos:_.landing,className:v}},D=(()=>{let e=u.find(e=>e.travel===`e`),{grid:n,at:r,dropAt:i}=c(e,`corridor`,`corridor`,`reachable`,`fromNode`,t(`e`));return{grid:s({...n,difficulty:`junior`}),landing:r(i.landing)}})(),O={args:{grid:D.grid,explorerPos:D.landing}},k=[`EastAtLaunch`,`WestAtLaunch`,`EastAtLanding`,`WestAtLanding`,`SouthAtLaunch`,`NorthAtLaunch`,`SouthAtLanding`,`NorthAtLanding`,`EastAtLandingBeforeADeadEnd`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    grid: east.grid,
    explorerPos: east.launch
  }
}`,...y.parameters?.docs?.source},description:{story:"East-going drop, obstacle revealed, explorer at the launch: `dropEast` as painted, for scale.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    grid: west.grid,
    explorerPos: west.launch
  }
}`,...b.parameters?.docs?.source},description:{story:`West-going drop: the same asset, mirrored.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    grid: east.grid,
    explorerPos: east.landing
  }
}`,...x.parameters?.docs?.source},description:{story:`The same drop from its far foot: whichever end the player stands at, the art is the one tile between them.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    grid: west.grid,
    explorerPos: west.landing
  }
}`,...S.parameters?.docs?.source},description:{story:`West-going, at the landing.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    grid: south.grid,
    explorerPos: south.launch,
    className: TALL
  }
}`,...C.parameters?.docs?.source},description:{story:"South-going drop: `dropSouth`, its own render (not a flip), steps at the far lip, line coming toward the viewer.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    grid: north.grid,
    explorerPos: north.launch,
    className: TALL
  }
}`,...w.parameters?.docs?.source},description:{story:"North-going drop: `dropNorth`, its own render, steps near the viewer, line running up and away.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    grid: south.grid,
    explorerPos: south.landing,
    className: TALL
  }
}`,...T.parameters?.docs?.source},description:{story:`South-going, from the landing foot.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    grid: north.grid,
    explorerPos: north.landing,
    className: TALL
  }
}`,...E.parameters?.docs?.source},description:{story:`North-going, from the landing foot.`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    grid: deadEnd.grid,
    explorerPos: deadEnd.landing
  }
}`,...O.parameters?.docs?.source},description:{story:`At the landing with a dead end of corridor beyond it: one arrow, onto the dead end, and none back across the drop.`,...O.parameters?.docs?.description}}}})))()}A();export{x as EastAtLanding,O as EastAtLandingBeforeADeadEnd,y as EastAtLaunch,E as NorthAtLanding,w as NorthAtLaunch,T as SouthAtLanding,C as SouthAtLaunch,S as WestAtLanding,b as WestAtLaunch,k as __namedExportsOrder,p as default};