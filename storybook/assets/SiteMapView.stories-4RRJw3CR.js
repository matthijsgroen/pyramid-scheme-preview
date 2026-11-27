import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{r,t as ee}from"./generatedWorld-BE266ti6.js";import{J as i,et as te,n as ne,nt as re,r as a,rt as o}from"./siteAssembler-CNzpvYB2.js";import{A as ie,N as ae,O as oe,P as se,b as ce,k as le,n as ue,t as de,v as fe,x as pe}from"./SiteMapView-BA5G55ph.js";import{c as me,d as he,i as ge}from"./floorFixtures.testing-C1LdYyP7.js";var _e,ve,ye,be,xe,Se;function Ce(){return(Ce=e((()=>{ne(),_e=`test_site:1`,ve={journeyId:`test_site`,levelIndex:0,floorIndex:0},ye=e=>({pathPuzzles:1,difficulty:`junior`,end:`treasure`,label:e}),be=(...e)=>({pathPuzzles:2,difficulty:`junior`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[`lever`,`vault`,`pocket`,`lever2`,`vault2`,`pocket2`].map(ye),handles:e}),xe=e=>{let t=[];for(let n=0;n<60;n++){let r=a(_e,e,n,void 0,{floorRef:ve});if(r.success)return{grid:r.grid};for(let e of r.reasons)t.push(e)}throw Error(`no seed carved the authored handle: ${JSON.stringify(t)}`)},Se=(...e)=>xe(be(...e))})))()}var s,c,we,Te,l,u,d,f,Ee,p,De,m,h,g,_,v,y,b,x,S,C,Oe,ke,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,Ae,W,G,K,je,q,Me,Ne,Pe,J,Y,X,Fe,Z,Q,$,Ie;function Le(){return(Le=e((()=>{s=t(),ne(),r(),te(),Ce(),ue(),pe(),le(),ae(),me(),c=n(),we={component:de,parameters:{layout:`fullscreen`},args:{className:`h-screen w-screen`}},Te=()=>{let e=a(`story-1`,{pathPuzzles:1,difficulty:`starter`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[]},42);if(!e.success)throw Error(`story grid assembly failed`);return e.grid},l=Te(),u={args:{grid:he(),explorerPos:ge.stand,onCellClick:()=>{}}},d={args:{grid:l}},f={args:{grid:l,revealAllCells:!0}},Ee=(()=>{let[e,t]=l.entrancePos;return i(l,e,t)})(),p={args:{grid:Ee}},De=()=>{let e=a(`story-complex`,{pathPuzzles:0,difficulty:`starter`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[{pathPuzzles:0,difficulty:`starter`,end:`treasure`},{pathPuzzles:1,difficulty:`junior`,end:`staircase`,gate:{type:`floor-key`}}]},42);if(!e.success)throw Error(`complex story grid assembly failed`);return e.grid},m={args:{grid:De(),revealAllCells:!0}},h=e=>{let t=ee[e]?.flat()[0];if(!t)throw Error(`no generated floor for ${e}`);let n=a(`${e}:0`,t,7);if(!n.success)throw Error(`world grid assembly failed`);return n.grid},g={args:{grid:h(`starter_1`),revealAllCells:!0}},_={args:{grid:h(`starter_1`)}},v={args:{grid:h(`master_2`),revealAllCells:!0}},y=e=>{let t=h(e),n=t.cells.flatMap((e,t)=>e.flatMap((e,n)=>e.type===`corridor`&&e.dirs.size>1?[[t,n]]:[]));return{grid:t,revealAllCells:!0,explorerPos:n[Math.floor(n.length/2)]??t.entrancePos}},b={args:y(`starter_1`)},x={args:y(`junior_2`)},S={args:y(`expert_1`)},C={args:y(`master_2`)},Oe=e=>e.split(`,`).map(Number),ke=e=>{let t=fe(e),n=se(ce(e),e.theme,e.condition);return oe(e,t,n.beam??0,e.siteId).map(n=>({room:t.claimedBy.get(n)??n,place:ie(e,t,Oe(n))}))},w=e=>{let t=o(h(e)),n=new Set(ke(t).flatMap(({place:e})=>e)),r=t.cells.flatMap((e,t)=>e.flatMap((e,r)=>e.type===`corridor`&&e.dirs.size>1&&!n.has(`${t},${r}`)?[[t,r]]:[]));return{grid:t,revealAllCells:!0,explorerPos:r[Math.floor(r.length/2)]??t.entrancePos}},T={args:w(`starter_1`)},E={args:w(`junior_2`)},D={args:w(`expert_1`)},O={args:w(`master_2`)},k={args:{grid:h(`starter_1`),revealAllCells:!0}},A={args:(()=>{let e=o(h(`starter_1`)),[t]=ke(e);return{grid:e,revealAllCells:!0,explorerPos:Oe(t?.room??`0,0`)}})()},j={args:{grid:{...h(`starter_1`),siteId:`intact-5`},revealAllCells:!0}},M=e=>{let t=ee.expert_3?.flat()??[],n=t.findIndex(t=>e===void 0?t.condition===void 0:t.condition?.kind===`overgrown`&&t.condition.amount===e);if(n<0)throw Error(`expert_3 has no floor at amount ${e}`);let r=a(`expert_3:${n}`,t[n],7);if(!r.success)throw Error(`overgrown grid assembly failed`);return r.grid},N={args:{grid:M(.2),revealAllCells:!0}},P={args:{grid:M(1),revealAllCells:!0}},F={args:(()=>{let e=o(M(1)),t=new Set(ke(e).flatMap(({place:e})=>e)),n=e.cells.flatMap((e,n)=>e.flatMap((e,r)=>e.type===`corridor`&&e.dirs.size>1&&!t.has(`${n},${r}`)?[[n,r]]:[]));return{grid:e,revealAllCells:!0,explorerPos:n[Math.floor(n.length/2)]??e.entrancePos}})()},I={args:(()=>{let e=o(M()),t=e.cells.flatMap((e,t)=>e.flatMap((e,n)=>e.type===`corridor`&&e.dirs.size>1?[[t,n]]:[]));return{grid:e,revealAllCells:!0,explorerPos:t[Math.floor(t.length/2)]??e.entrancePos}})()},L={args:{grid:l},render:()=>{let e=(()=>{let[e,t]=l.entrancePos;return i(l,e,t)})(),[t,n]=(0,s.useState)(e),[r,ee]=(0,s.useState)(l.entrancePos);return(0,c.jsxs)(`div`,{className:`flex h-screen flex-col`,children:[(0,c.jsx)(de,{className:`min-h-0 flex-1`,grid:t,explorerPos:r,onCellClick:(e,t)=>{n(n=>i(n,e,t)),ee([e,t])}}),(0,c.jsx)(`p`,{className:`mt-2 text-sm text-gray-500`,children:`Click reachable rooms to complete them`})]})}},R=De(),z=(()=>{let[e,t]=R.entrancePos;return i(R,e,t)})(),B={args:{grid:z},render:()=>{let[e,t]=(0,s.useState)(z),[n,r]=(0,s.useState)(R.entrancePos);return(0,c.jsxs)(`div`,{className:`flex h-screen flex-col gap-3`,children:[(0,c.jsx)(de,{className:`min-h-0 flex-1`,grid:e,explorerPos:n,onCellClick:(e,n)=>{t(t=>i(t,e,n)),r([e,n])}}),(0,c.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-amber-600/70`,children:[(0,c.jsx)(`span`,{children:`Click reachable rooms to explore. Find the key to unlock the gate.`}),(0,c.jsx)(`button`,{className:`rounded border border-amber-900/50 px-2 py-1 hover:bg-amber-900/20`,onClick:()=>{t(z),r(R.entrancePos)},children:`Reset`})]})]})}},V={type:`empty`},H=(e,t)=>({type:`corridor`,dirs:new Set(e),state:`reachable`,...t?{difficulty:t}:{}}),U=(e,t)=>({type:`room`,roomType:`encounter`,family:`key-gate`,tags:[`gate`],gateVariant:`tomb-key`,requiredKeyId:`expert_a_1`,difficulty:`expert`,dirs:new Set(e),state:t}),Ae=e=>{let t=V,n=[[t,t,t,H([`s`],`expert`),t,t,t],[t,t,t,U([`n`,`s`],e),t,t,t],[t,t,t,H([`n`,`s`]),t,t,t],[H([`e`],`expert`),U([`e`,`w`],e),H([`e`,`w`]),{type:`room`,roomType:`portal`,dirs:new Set([`n`,`s`,`e`,`w`]),state:`completed`},H([`e`,`w`]),U([`e`,`w`],e),H([`w`],`expert`)],[t,t,t,H([`n`,`s`]),t,t,t],[t,t,t,U([`n`,`s`],e),t,t,t],[t,t,t,H([`n`],`expert`),t,t,t]];return{cells:n,rows:n.length,cols:n[0].length,entrancePos:[3,3],exitPos:[3,3],siteId:`gate-stories`,difficulty:`starter`,staircases:{}}},W={args:{grid:Ae(`reachable`)}},G={args:{grid:Ae(`completed`)}},K={args:{grid:Ae(`reachable`),explorerPos:[1,3]}},je=(e,t)=>({type:`room`,roomType:`encounter`,family:`tableau`,tags:[`treasure`],dirs:new Set(e),state:t,reward:{type:`money`,amount:10}}),q={args:{grid:{cells:[[V,H([`s`,`e`]),H([`w`,`e`]),H([`w`,`s`]),V],[V,je([`n`],`reachable`),V,je([`n`],`completed`),V]],rows:2,cols:5,entrancePos:[0,2],exitPos:[0,2],siteId:`chest-stories`,difficulty:`junior`,staircases:{}}}},Me={pathPuzzles:2,difficulty:`junior`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[{pathPuzzles:1,difficulty:`junior`,end:`treasure`,label:`upper`},{pathPuzzles:1,difficulty:`junior`,end:`treasure`,label:`lower`}],oneWays:[{from:`upper`,to:`lower`}]},Ne=()=>{for(let e=0;e<60;e++){let t=a(`story-oneway`,Me,e,void 0,{floorRef:{journeyId:`story-oneway`,levelIndex:0,floorIndex:0}});if(t.success)return t.grid}throw Error(`no seed carves the authored drop`)},[Pe]=re(Ne()),J={args:{grid:i(Ne(),...Pe.landing),explorerPos:Pe.landing}},Y={args:{grid:{cells:[[H([`e`]),{type:`room`,roomType:`portal`,stairId:`s1`,dirs:new Set([`w`]),state:`reachable`},V,{type:`room`,roomType:`portal`,stairId:`s2`,dirs:new Set([`e`]),state:`reachable`},H([`w`])]],rows:1,cols:5,entrancePos:[0,0],exitPos:[0,4],siteId:`stair-stories`,difficulty:`starter`,staircases:{}}}},X={args:{grid:Se({in:`lever`,left:[`vault`],right:[`pocket`]},{in:`lever2`,left:[`vault2`],right:[]}).grid,revealAllCells:!0}},Fe=e=>{let t=ee.starter_1?.flat()[e];if(!t)throw Error(`no floor ${e} for starter_1`);let n=a(`starter_1:${e}`,t,7);if(!n.success)throw Error(`world grid assembly failed`);return o(n.grid)},Z={args:(()=>{let e=Fe(0);return{grid:e,revealAllCells:!0,explorerPos:e.cells.flatMap((e,t)=>e.map((e,n)=>({cell:e,at:[t,n]}))).find(({cell:t,at:n})=>t.type===`room`&&t.stairId&&(n[0]!==e.entrancePos[0]||n[1]!==e.entrancePos[1]))?.at??e.entrancePos}})()},Q={args:(()=>{let e=Fe(1);return{grid:e,revealAllCells:!0,explorerPos:e.entrancePos}})()},$={name:`A stair climbing out of a cave`,args:(()=>{let e=a(`story-cave-climb`,{pathPuzzles:2,difficulty:`wizard`,tileset:`cave`,end:`treasure`,entrance:{stairId:`story-cave-in`},exitOrStaircase:{stairId:`story-cave-out`,goes:`up`},sideSections:[]},7);if(!e.success)throw Error(`story grid assembly failed`);let t=o(e.grid);return{grid:t,revealAllCells:!0,explorerPos:t.cells.flatMap((e,t)=>e.map((e,n)=>({cell:e,at:[t,n]}))).find(({cell:e})=>e.type===`room`&&e.stairId===`story-cave-out`)?.at??t.entrancePos}})()},Ie=`RingArrowOverPuzzle.AllFogged.RevealAll.EntranceCompleted.FirstPyramidRevealAll.WorldFloorStarter.WorldFloorUnexplored.WorldFloorMaster.TorchlitStarter.TorchlitJunior.TorchlitExpert.TorchlitMaster.BeamedStarter.BeamedJunior.BeamedExpert.BeamedMaster.BeamedBesideUnbeamed.ExplorerInTheBeam.RoofsIntact.OvergrownLightly.OvergrownFully.OvergrownWithLamp.OvergrownControl.Interactive.InteractiveFirstPyramid.WardGatesShut.WardGatesOpen.WardGateWithPlayerUnderIt.TreasureTakenAndNot.OneWayDropLanding.SideStairsBothHands.HandlesAndTheirDoors.ExplorerAtStairDown.ExplorerAtStairUp.StairClimbingOutOfACave`.split(`.`),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    grid: puzzleAboveFloor(),
    explorerPos: PUZZLE_ABOVE.stand,
    onCellClick: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    grid: linearGrid
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    grid: linearGrid,
    revealAllCells: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    grid: entranceCompletedGrid
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    grid: getFirstPyramidGrid(),
    revealAllCells: true
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    grid: getWorldGrid("starter_1"),
    revealAllCells: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    grid: getWorldGrid("starter_1")
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    grid: getWorldGrid("master_2"),
    revealAllCells: true
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: litWorldFloor("starter_1")
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: litWorldFloor("junior_2")
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: litWorldFloor("expert_1")
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: litWorldFloor("master_2")
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: beamedWorldFloor("starter_1")
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: beamedWorldFloor("junior_2")
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: beamedWorldFloor("expert_1")
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: beamedWorldFloor("master_2")
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    grid: getWorldGrid("starter_1"),
    revealAllCells: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Nobody on the floor at all, so daylight is the only light on it. Five of this floor's nine chambers
are under a roof that has given way and four are not: the step between two neighbours is the thing to
read here, and it has to survive the zoom a whole floor is scanned at.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: (() => {
    const grid = revealAll(getWorldGrid("starter_1"));
    const [first] = shaftsOn(grid);
    return {
      grid,
      revealAllCells: true,
      explorerPos: cellOf(first?.room ?? "0,0")
    };
  })()
}`,...A.parameters?.docs?.source},description:{story:"The explorer standing in the beam. Two lights in one room would multiply under `color-dodge`, so the\nshaft hands the room over to the lamp as he walks in — what this shows is that nothing flares.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    grid: {
      ...getWorldGrid("starter_1"),
      siteId: "intact-5"
    },
    revealAllCells: true
  }
}`,...j.parameters?.docs?.source},description:{story:`The control: the same floor under a site id whose roofs all held, so the map is drawn as it is with
no daylight in it at all. What is seeded off that id moves with it — the scatter, the growth, which
drawing a prop shows — but the rooms and what stands in them are the floor's own.

The id is a draw like any other, so a change to the odds can put a shaft back on it: what the story is
for is a floor with none, and the next id that gives one will do.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    grid: overgrownWorldFloor(0.2),
    revealAllCells: true
  }
}`,...N.parameters?.docs?.source},description:{story:`Nobody on the floor, so every bit of light on it is the floor's own. The first authored amount: a
little growth, a little daylight, and an expert floor still mostly dark.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    grid: overgrownWorldFloor(1),
    revealAllCells: true
  }
}`,...P.parameters?.docs?.source},description:{story:`Full growth, and still nobody carrying a lamp. This is where the corridors are read: a shaft in a run
lights the run to its next turn, which is what a floor of passages needs and what an ordinary floor is
right to refuse.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: (() => {
    const grid = revealAll(overgrownWorldFloor(1));
    const beamed = new Set(shaftsOn(grid).flatMap(({
      place
    }) => place));
    const run = grid.cells.flatMap((row, r) => row.flatMap((cell, c) => cell.type === "corridor" && cell.dirs.size > 1 && !beamed.has(\`\${r},\${c}\`) ? [[r, c] as const] : []));
    return {
      grid,
      revealAllCells: true,
      explorerPos: run[Math.floor(run.length / 2)] ?? grid.entrancePos
    };
  })()
}`,...F.parameters?.docs?.source},description:{story:`The same floor with the explorer parked in a passage no shaft reaches, so the whole ladder is in one
picture: unlit paving, the lamp's own run, and a patch of sun somewhere else on the floor.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: (() => {
    const grid = revealAll(overgrownWorldFloor());
    const run = grid.cells.flatMap((row, r) => row.flatMap((cell, c) => cell.type === "corridor" && cell.dirs.size > 1 ? [[r, c] as const] : []));
    return {
      grid,
      revealAllCells: true,
      explorerPos: run[Math.floor(run.length / 2)] ?? grid.entrancePos
    };
  })()
}`,...I.parameters?.docs?.source},description:{story:`THE CONTROL: a floor of the same journey and the same rank with no condition authored on it. Every
number slice one solved holds here — the night, the lamp, the cap, the chambers-only rule — and this is
the story that says so.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    grid: linearGrid
  },
  render: () => {
    const initial = (() => {
      const [r, c] = linearGrid.entrancePos;
      return completeCell(linearGrid, r, c);
    })();
    const [grid, setGrid] = useState<FloorGrid>(initial);
    const [explorerPos, setExplorerPos] = useState<readonly [number, number]>(linearGrid.entrancePos);
    return <div className="flex h-screen flex-col">
        <SiteMapView className="min-h-0 flex-1" grid={grid} explorerPos={explorerPos} onCellClick={(r, c) => {
        setGrid(prev => completeCell(prev, r, c));
        setExplorerPos([r, c]);
      }} />
        <p className="mt-2 text-sm text-gray-500">Click reachable rooms to complete them</p>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    grid: firstPyramidInitial
  },
  render: () => {
    const [grid, setGrid] = useState<FloorGrid>(firstPyramidInitial);
    const [explorerPos, setExplorerPos] = useState<readonly [number, number]>(firstPyramidGrid.entrancePos);
    return <div className="flex h-screen flex-col gap-3">
        <SiteMapView className="min-h-0 flex-1" grid={grid} explorerPos={explorerPos} onCellClick={(r, c) => {
        setGrid(prev => completeCell(prev, r, c));
        setExplorerPos([r, c]);
      }} />
        <div className="flex items-center justify-between text-xs text-amber-600/70">
          <span>Click reachable rooms to explore. Find the key to unlock the gate.</span>
          <button className="rounded border border-amber-900/50 px-2 py-1 hover:bg-amber-900/20" onClick={() => {
          setGrid(firstPyramidInitial);
          setExplorerPos(firstPyramidGrid.entrancePos);
        }}>
            Reset
          </button>
        </div>
      </div>;
  }
}`,...B.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    grid: gateCrossGrid("reachable")
  }
}`,...W.parameters?.docs?.source},description:{story:`Shut: the grille is down in all four, and every pocket behind them is still the floor's own stone.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    grid: gateCrossGrid("completed")
  }
}`,...G.parameters?.docs?.source},description:{story:`Opened: the grille has sunk into the threshold, and each pocket is its own rank again with a sill
laid where the stone changes.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    grid: gateCrossGrid("reachable"),
    explorerPos: [1, 3]
  }
}`,...K.parameters?.docs?.source},description:{story:`The player standing in a gateway: a gate fades for the two cells it spans, the way an archway does,
because a barrier that hid him would be a wall.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    grid: {
      cells: [[emptyCell, passage(["s", "e"]), passage(["w", "e"]), passage(["w", "s"]), emptyCell], [emptyCell, treasureRoom(["n"], "reachable"), emptyCell, treasureRoom(["n"], "completed"), emptyCell]],
      rows: 2,
      cols: 5,
      entrancePos: [0, 2],
      exitPos: [0, 2],
      siteId: "chest-stories",
      difficulty: "junior",
      staircases: {}
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    grid: completeCell(oneWayDropGrid(), ...carvedDrop.landing),
    explorerPos: carvedDrop.landing
  }
}`,...J.parameters?.docs?.source},description:{story:`Standing at the landing of a junior floor: the zipline's cells are lit and the launch beyond it is not.
The floor is junior and the drop art exists only at expert, so no zipline is drawn here; \`Topology/Zipline\`
shows the painted tile.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    grid: (() => {
      const cells: GridCell[][] = [[passage(["e"]), {
        type: "room",
        roomType: "portal",
        stairId: "s1",
        dirs: new Set<Direction>(["w"]),
        state: "reachable"
      }, emptyCell, {
        type: "room",
        roomType: "portal",
        stairId: "s2",
        dirs: new Set<Direction>(["e"]),
        state: "reachable"
      }, passage(["w"])]];
      return {
        cells,
        rows: 1,
        cols: 5,
        entrancePos: [0, 0] as const,
        exitPos: [0, 4] as const,
        siteId: "stair-stories",
        difficulty: "starter" as const,
        staircases: {}
      };
    })()
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    grid: floorWithHandle({
      in: "lever",
      left: ["vault"],
      right: ["pocket"]
    }, {
      in: "lever2",
      left: ["vault2"],
      right: []
    }).grid,
    revealAllCells: true
  }
}`,...X.parameters?.docs?.source},description:{story:`A LEVER AND THE TWO DOORS IT DRIVES, every cell revealed: the pairing this map has to make readable is
the mark, so what this story is for is seeing that the lever's badge and both gates' badges are the
same glyph on the same ground — and that the glyph is a GLYPH and not the empty box a code point the
shipped font subset does not carry draws as.

Two handles, because the case that matters is telling one lever's doors from another's.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: (() => {
    const grid = stairFloor(0);
    const stair = grid.cells.flatMap((row, r) => row.map((cell, c) => ({
      cell,
      at: [r, c] as const
    }))).find(({
      cell,
      at
    }) => cell.type === "room" && cell.stairId && (at[0] !== grid.entrancePos[0] || at[1] !== grid.entrancePos[1]));
    return {
      grid,
      revealAllCells: true,
      explorerPos: stair?.at ?? grid.entrancePos
    };
  })()
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: (() => {
    const grid = stairFloor(1);
    return {
      grid,
      revealAllCells: true,
      explorerPos: grid.entrancePos
    };
  })()
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "A stair climbing out of a cave",
  args: (() => {
    const result = assembleFloor("story-cave-climb", {
      pathPuzzles: 2,
      difficulty: "wizard",
      tileset: "cave",
      end: "treasure",
      entrance: {
        stairId: "story-cave-in"
      },
      exitOrStaircase: {
        stairId: "story-cave-out",
        goes: "up"
      },
      sideSections: []
    }, 7);
    if (!result.success) throw new Error("story grid assembly failed");
    const grid = revealAll(result.grid);
    const climb = grid.cells.flatMap((row, r) => row.map((cell, c) => ({
      cell,
      at: [r, c] as const
    }))).find(({
      cell
    }) => cell.type === "room" && cell.stairId === "story-cave-out");
    return {
      grid,
      revealAllCells: true,
      explorerPos: climb?.at ?? grid.entrancePos
    };
  })()
}`,...$.parameters?.docs?.source}}}})))()}Le();export{d as AllFogged,k as BeamedBesideUnbeamed,D as BeamedExpert,E as BeamedJunior,O as BeamedMaster,T as BeamedStarter,p as EntranceCompleted,Z as ExplorerAtStairDown,Q as ExplorerAtStairUp,A as ExplorerInTheBeam,m as FirstPyramidRevealAll,X as HandlesAndTheirDoors,L as Interactive,B as InteractiveFirstPyramid,J as OneWayDropLanding,I as OvergrownControl,P as OvergrownFully,N as OvergrownLightly,F as OvergrownWithLamp,f as RevealAll,u as RingArrowOverPuzzle,j as RoofsIntact,Y as SideStairsBothHands,$ as StairClimbingOutOfACave,S as TorchlitExpert,x as TorchlitJunior,C as TorchlitMaster,b as TorchlitStarter,q as TreasureTakenAndNot,K as WardGateWithPlayerUnderIt,G as WardGatesOpen,W as WardGatesShut,v as WorldFloorMaster,g as WorldFloorStarter,_ as WorldFloorUnexplored,Ie as __namedExportsOrder,we as default};