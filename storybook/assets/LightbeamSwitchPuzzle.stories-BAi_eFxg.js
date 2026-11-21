import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,l as n,o as r,u as i}from"./generateLightbeamSwitch-DyDbe2cC.js";import{c as a,n as o,o as s,s as c,t as l}from"./LightbeamSwitchPuzzle-CHs1NE0c.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),s(),n(),o(),u=e=>e.map(e=>({dir:e,kind:`side`,gateKeyId:`switch:story#0#0#0:${e}`})),d=(e,n,r=1,i=`junior`)=>a(t(r,i,e),c(e,n)??0),f=(e,t)=>{let n=e.shrines.findIndex(e=>e.canonicalDir===t),r=i(e.grid,e.shrines.map(e=>e.at),n),a=[...e.grid.initial];for(let{at:t,angle:n}of r[0]){let r=e.grid.mirrors.findIndex(e=>e.row===t.row&&e.col===t.col);a[r]=n}return a},p={title:`LightbeamSwitch/LightbeamSwitchPuzzle`,component:l,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}},args:{onSolved:()=>{},onRoute:()=>{},onAngles:()=>{}}},m={args:{board:d(`adjacent`,[`e`,`s`]),exits:u([`e`,`s`])}},h={args:{board:d(`opposite`,[`e`,`w`]),exits:u([`e`,`w`])}},g={args:(()=>{let e=d(`three`,[`n`,`e`,`w`]);return{board:e,exits:u([`n`,`e`,`w`]),openWayOut:`e`,savedAngles:f(e,`e`)}})()},_={args:{board:d(`three`,[`n`,`e`,`w`]),exits:u([`n`,`e`,`w`])},globals:{input:`keys`}},v={args:{board:d(`three`,[`n`,`e`,`w`],3,`wizard`),exits:u([`n`,`e`,`w`])}},y={args:{board:d(`three`,[`n`,`e`,`w`]),exits:u([`n`,`e`,`w`])},globals:{input:`pad`,pad:`xbox`}},b=[`TwoWaysAtRightAngles`,`TwoWaysFacing`,`ThreeWaysOneStandingOpen`,`KeyboardCursor`,`Wizard`,`PadCursor`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    board: facing("adjacent", ["e", "s"]),
    exits: fork(["e", "s"])
  }
}`,...m.parameters?.docs?.source},description:{story:`Two ways out at right angles — the junction nearly every carve offers.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    board: facing("opposite", ["e", "w"]),
    exits: fork(["e", "w"])
  }
}`,...h.parameters?.docs?.source},description:{story:`Two ways out facing each other: a corridor the switch decides the direction of.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: (() => {
    const board = facing("three", ["n", "e", "w"]);
    return {
      board,
      exits: fork(["n", "e", "w"]),
      openWayOut: "e",
      savedAngles: angledFor(board, "e")
    };
  })()
}`,...g.parameters?.docs?.source},description:{story:`Three ways out, with the way the switch was last left open already standing so — and the mirrors at
exactly the arrangement that opened it, the way a real save now remembers them.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    board: facing("three", ["n", "e", "w"]),
    exits: fork(["n", "e", "w"])
  },
  globals: {
    input: "keys"
  }
}`,..._.parameters?.docs?.source},description:{story:`Played by keys: the cursor lands on mirrors only, the nearest one each way; Enter or Space turns it.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    board: facing("three", ["n", "e", "w"], 3, "wizard"),
    exits: fork(["n", "e", "w"])
  }
}`,...v.parameters?.docs?.source},description:{story:`The widest board, where a cell is at its smallest and the tap targets reach furthest past it.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    board: facing("three", ["n", "e", "w"]),
    exits: fork(["n", "e", "w"])
  },
  globals: {
    input: "pad",
    pad: "xbox"
  }
}`,...y.parameters?.docs?.source},description:{story:`Played by pad: the same cursor, with the pad's buttons under the rules.`,...y.parameters?.docs?.description}}}})))()}x();export{_ as KeyboardCursor,y as PadCursor,g as ThreeWaysOneStandingOpen,m as TwoWaysAtRightAngles,h as TwoWaysFacing,v as Wizard,b as __namedExportsOrder,p as default};