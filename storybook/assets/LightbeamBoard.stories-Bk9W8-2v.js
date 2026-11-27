import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{n}from"./iframe-BfmzYHTX.js";import{i as r,t as i}from"./physics-CHqMRGEl.js";import{_ as a,b as ee,d as te,f as ne,i as re,n as ie,o as ae,t as oe,v as se}from"./lightbeamConfig-DItM6-n9.js";import{a as ce,c as o,i as le,l as ue,n as s,r as de,t as c}from"./lightbeamState-BWnQNkCv.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,fe,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,pe,Q,$,me;function he(){return(he=e((()=>{l=t(),te(),ae(),ie(),de(),ce(),ue(),u=n(),d={title:`Puzzle/LightbeamBoard`,component:o,parameters:{layout:`centered`,backgrounds:{default:`dungeon`,values:[{name:`dungeon`,value:`#110d08`}]}}},f=(e,t,n={})=>{let{size:r,...i}=oe[e];return re(r,t,{...i,...n})},p=f(`starter`,1),m=f(`expert`,2),h=f(`wizard`,4),g=f(`wizard`,11),_=f(`wizard`,2),v={args:{puzzle:p,states:p.initial,onCycle:()=>{}}},y={args:{puzzle:p,states:p.solution,onCycle:()=>{}}},b={args:{puzzle:m,states:m.initial,onCycle:()=>{}}},x={args:{puzzle:h,states:h.initial,onCycle:()=>{}}},S={args:{puzzle:m,states:m.initial,onCycle:()=>{}},render:()=>{let[e,t]=(0,l.useState)(()=>c(m));return(0,u.jsx)(o,{puzzle:m,states:e.states,onCycle:e=>t(t=>s(t,m,e))})}},C={size:8,sun:{at:{row:3,col:0},facing:i.right},shrine:{row:6,col:0},fixed:[{kind:`mirror`,at:{row:6,col:3},angle:2}],movable:[{kind:`turnMirror`,at:{row:3,col:3},angles:r},{kind:`slidingWall`,stops:[{row:6,col:1},{row:4,col:1}]}],nodes:[{at:{row:5,col:3}}],wirings:[{from:[0],piece:1,to:1}]},w={size:8,sun:{at:{row:2,col:0},facing:i.right},shrine:{row:0,col:4},fixed:[],movable:[{kind:`turnMirror`,at:{row:2,col:4},angles:r},{kind:`slidingWall`,stops:[{row:4,col:1},{row:1,col:4}]}],nodes:[{at:{row:4,col:4}}],wirings:[{from:[0],piece:1,to:1}]},T={...h,nodes:[{at:{row:4,col:5}},{at:{row:6,col:5}}],wirings:[{from:[0],piece:5,to:0},{from:[1],piece:4,to:2}]},E={...h,nodes:[{at:{row:2,col:4}},{at:{row:6,col:5}}],wirings:[{from:[0],piece:5,to:0},{from:[1],piece:4,to:2}]},D={...h,nodes:[{at:{row:2,col:4}}],wirings:[{from:[0],piece:5,to:0},{from:[0],piece:8,to:0},{from:[0],piece:9,to:1}]},fe={...h,nodes:[{at:{row:2,col:4}},{at:{row:6,col:5}}],wirings:[{from:[0,1],piece:5,to:0}]},O=({puzzle:e,before:t,after:n})=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(o,{puzzle:e,states:t,onCycle:()=>{}}),(0,u.jsx)(o,{puzzle:e,states:n,onCycle:()=>{}})]}),k={args:{puzzle:C,states:[0,0],onCycle:()=>{}},render:()=>(0,u.jsx)(O,{puzzle:C,before:[0,0],after:[1,1]})},A={args:{puzzle:w,states:[1,1],onCycle:()=>{}},render:()=>(0,u.jsx)(O,{puzzle:w,before:[1,1],after:[0,0]})},j={args:{puzzle:T,states:[...h.solution],onCycle:()=>{}},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:T,states:[...h.initial],onCycle:()=>{}})}),(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:T,states:[...h.solution],onCycle:()=>{}})}),(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:E,states:[...h.solution],onCycle:()=>{}})})]})},M={args:{puzzle:D,states:[...h.solution],onCycle:()=>{}},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:D,states:[...h.solution],onCycle:()=>{}})}),(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:fe,states:[...h.solution],onCycle:()=>{}})})]})},N={args:{puzzle:g,states:g.initial,onCycle:()=>{}},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:g,states:g.initial,onCycle:()=>{}})}),(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:g,states:g.solution,onCycle:()=>{}})})]})},P={args:{puzzle:g,states:g.initial,onCycle:()=>{}},render:()=>{let[e,t]=(0,l.useState)(()=>c(g));return(0,u.jsx)(o,{puzzle:g,states:e.states,onCycle:e=>t(t=>s(t,g,e))})}},F={args:{puzzle:_,states:_.initial,onCycle:()=>{}},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:_,states:_.initial,onCycle:()=>{}})}),(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:_,states:_.solution,onCycle:()=>{}})})]})},I={args:{puzzle:p,states:p.initial,onCycle:()=>{}},render:()=>{let[e,t]=(0,l.useState)(()=>c(p)),n=le(p,e.states);return(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,u.jsx)(o,{puzzle:p,states:e.states,highlighted:n?.cells,litBeam:n?.beam,onCycle:e=>t(t=>s(t,p,e))}),(0,u.jsx)(`p`,{className:`text-sm text-amber-300`,children:n?n.key:`lit`})]})}},L=(e,t)=>({...e,movable:e.movable.map((e,n)=>e.kind===`turnMirror`&&t[n]?{...e,angles:t[n]}:e)}),R={size:9,sun:{at:{row:8,col:8},facing:i.up},shrine:{row:0,col:0},fixed:[],movable:[{kind:`turnMirror`,at:{row:4,col:1},angles:r},{kind:`turnMirror`,at:{row:4,col:3},angles:[1,6]},{kind:`turnMirror`,at:{row:4,col:5},angles:[2,7]}]},z=L(h,{0:[1,6],3:[2,6,7],8:[2,7],9:[1,3,6]}),B=L(g,{0:[1,6],2:[1,6],7:[2,7],8:[2,7]}),V={size:9,sun:{at:{row:8,col:0},facing:i.right},shrine:{row:2,col:8},fixed:[{kind:`wall`,at:{row:7,col:2}},{kind:`wall`,at:{row:8,col:3}},{kind:`wall`,at:{row:5,col:4}},{kind:`wall`,at:{row:6,col:5}},{kind:`wall`,at:{row:3,col:6}},{kind:`wall`,at:{row:4,col:7}}],movable:[{kind:`turnMirror`,at:{row:8,col:2},angles:[1,6]}]},H=L(f(`wizard`,12),{0:[2,7],1:[1,6],2:[2,7],3:[1,6],7:[2,7],8:[1,6],9:[2,7]}),U=({puzzle:e,states:t,caption:n})=>(0,u.jsxs)(`figure`,{className:`flex flex-col items-center gap-1`,children:[(0,u.jsx)(`div`,{className:`w-[318px]`,children:(0,u.jsx)(o,{puzzle:e,states:[...t],onCycle:()=>{}})}),(0,u.jsx)(`figcaption`,{className:`font-mono text-[10px] text-amber-300`,children:n})]}),W={args:{puzzle:R,states:[0,0,0],onCycle:()=>{}},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(U,{puzzle:R,states:[0,0,0],caption:`first stop — 45° / 22.5° / 45°`}),(0,u.jsx)(U,{puzzle:R,states:[1,1,1],caption:`second stop — 135° / 135° / 157.5°`})]})},G={args:{puzzle:z,states:z.initial,onCycle:()=>{}},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(U,{puzzle:z,states:z.initial,caption:`wizard — opens`}),(0,u.jsx)(U,{puzzle:z,states:z.solution,caption:`wizard — answered`}),(0,u.jsx)(U,{puzzle:B,states:B.initial,caption:`wizard + door — opens`}),(0,u.jsx)(U,{puzzle:B,states:B.solution,caption:`wizard + door — answered`})]})},K={args:{puzzle:V,states:[0],onCycle:()=>{}},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(U,{puzzle:V,states:[0],caption:`22.5° — six diagonal steps past six walls`}),(0,u.jsx)(U,{puzzle:V,states:[1],caption:`135° — the quarter turn it keeps`}),(0,u.jsx)(U,{puzzle:H,states:[1,0,0,0,0,0,0,0,1,0],caption:`a beam corner on a rivet`})]})},q=f(`master`,10),J=f(`wizard`,12),Y=f(`master`,34),X=f(`master`,11),Z=f(`wizard`,8),pe=e=>{let t=e.movable.findIndex(e=>e.kind===`turnMirror`&&ne(e.angles)),n=[...e.solution];return n[t]=(n[t]+1)%se(e.movable[t]),n},Q=e=>{for(let t=0;t<e.movable.length;t++)for(let n of a(e,t)){let r=[...e.solution];r[t]=n;let i=ee(e,r),a=i.path[i.path.length-1];if(i.end!==`lit`&&a&&a.enter%2==1)return r}return[...e.solution]},$={args:{puzzle:q,states:q.solution,onCycle:()=>{}},render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start justify-center gap-6`,children:[(0,u.jsx)(U,{puzzle:q,states:q.solution,caption:`master — the answer, five diagonal steps`}),(0,u.jsx)(U,{puzzle:q,states:pe(q),caption:`the wrong stop — the quarter turn it kept`}),(0,u.jsx)(U,{puzzle:J,states:J.solution,caption:`wizard — six diagonal steps`}),(0,u.jsx)(U,{puzzle:X,states:Q(X),caption:`off the frame on a diagonal — the escape marker`}),(0,u.jsx)(U,{puzzle:Z,states:Q(Z),caption:`into stone on a diagonal — the absorbed marker`}),(0,u.jsx)(U,{puzzle:Y,states:Y.solution,caption:`a crossing at 45° — a diagonal over a column, and over a row`})]})},me=[`Starter`,`Solved`,`Expert`,`Wizard`,`Playable`,`NodeDoor`,`NodeTrap`,`NodeDensity`,`NodeFanning`,`NodeGenerated`,`NodePlayable`,`CrossedBeams`,`WithHint`,`CutMirrorStops`,`CutMirrorDensity`,`DiagonalBeam`,`DiagonalRoute`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: starter,
    states: starter.initial,
    onCycle: () => {}
  }
}`,...v.parameters?.docs?.source},description:{story:`How the board opens: dark, with the beam running out somewhere it should not.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: starter,
    states: starter.solution,
    onCycle: () => {}
  }
}`,...y.parameters?.docs?.source},description:{story:`The same board answered — the beam bends the whole way and the shrine takes the light.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: expert,
    states: expert.initial,
    onCycle: () => {}
  }
}`,...b.parameters?.docs?.source},description:{story:`Sliding pieces and a decoy. A vacant stop keeps its dashed outline, so its track shows before it is tapped.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: wizard,
    states: wizard.initial,
    onCycle: () => {}
  }
}`,...x.parameters?.docs?.source},description:{story:`The widest board the family ships. Seven squares still measure a thumb across on a 360px screen.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: expert,
    states: expert.initial,
    onCycle: () => {}
  },
  render: () => {
    const [state, setState] = useState(() => createLightbeamState(expert));
    return <LightbeamBoard puzzle={expert} states={state.states} onCycle={piece => setState(prev => cycleLightbeamPiece(prev, expert, piece))} />;
  }
}`,...S.parameters?.docs?.source},description:{story:`Playable, so the beam can be watched moving. Each tap cycles one piece.`,...S.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: doorBoard,
    states: [0, 0],
    onCycle: () => {}
  },
  render: () => <Pair puzzle={doorBoard} before={[0, 0]} after={[1, 1]} />
}`,...k.parameters?.docs?.source},description:{story:`A door, shut and open. Left: the mirror is turned the wrong way, the light never reaches the socket,
and the wire is dark stone. Right: the mirror is turned, the light crosses the socket, the wire carries
and the wall it drives has stood aside.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: trapBoard,
    states: [1, 1],
    onCycle: () => {}
  },
  render: () => <Pair puzzle={trapBoard} before={[1, 1]} after={[0, 0]} />
}`,...A.parameters?.docs?.source},description:{story:`A node worth steering clear of. Left: the light crosses the socket and the stone it drives has landed
in front of the shrine. Right: the other setting keeps the light off the socket entirely, and the
shrine takes it.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: wizardWired,
    states: [...wizard.solution],
    onCycle: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6">
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardWired} states={[...wizard.initial]} onCycle={() => {}} />
      </div>
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardWired} states={[...wizard.solution]} onCycle={() => {}} />
      </div>
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardWiredApart} states={[...wizard.solution]} onCycle={() => {}} />
      </div>
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Wizard density with two wires over it, at the 318px the encounter modal gives the board. Dark, then
carrying with the wires crossing, then carrying with them apart.

A crossing was unreadable while both wires were the same green; a colour each is what fixed it, which
left wire separation a nicety rather than a generation gate beside \`piecesAreSpaced\`.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: wizardFanOut,
    states: [...wizard.solution],
    onCycle: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6">
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardFanOut} states={[...wizard.solution]} onCycle={() => {}} />
      </div>
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardFanIn} states={[...wizard.solution]} onCycle={() => {}} />
      </div>
    </div>
}`,...M.parameters?.docs?.source},description:{story:`The two shapes a socket can take beyond a plain door, both on the same wizard board.

Left, **fan-out**: one socket, three pieces, all of them wearing its colour. Right, **fan-in**: two
sockets and one piece that does not move until the light has been through both, so the piece wears both
colours split round its edge. Neither needs a rule explained: the outline says who owns a piece before
any wire is traced, and white always means yours.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: wizardDoors,
    states: wizardDoors.initial,
    onCycle: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6">
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardDoors} states={wizardDoors.initial} onCycle={() => {}} />
      </div>
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardDoors} states={wizardDoors.solution} onCycle={() => {}} />
      </div>
    </div>
}`,...N.parameters?.docs?.source},description:{story:`A generated wizard board with a door on it. Left as it opens, right answered. Its wiring names two
sockets, so the light has to be routed through both before the stone will shift.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: wizardDoors,
    states: wizardDoors.initial,
    onCycle: () => {}
  },
  render: () => {
    const [state, setState] = useState(() => createLightbeamState(wizardDoors));
    return <LightbeamBoard puzzle={wizardDoors} states={state.states} onCycle={piece => setState(prev => cycleLightbeamPiece(prev, wizardDoors, piece))} />;
  }
}`,...P.parameters?.docs?.source},description:{story:`Playable, with a door: the stone only shifts once the beam is routed through both sockets.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: wizardCrossing,
    states: wizardCrossing.initial,
    onCycle: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6">
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardCrossing} states={wizardCrossing.initial} onCycle={() => {}} />
      </div>
      <div className="w-[318px]">
        <LightbeamBoard puzzle={wizardCrossing} states={wizardCrossing.solution} onCycle={() => {}} />
      </div>
    </div>
}`,...F.parameters?.docs?.source},description:{story:`A route that crosses itself. The crossed square is the one square on the board provably empty — anything
standing there would have turned the first pass. Left as it opens, right answered.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: starter,
    states: starter.initial,
    onCycle: () => {}
  },
  render: () => {
    const [state, setState] = useState(() => createLightbeamState(starter));
    const hint = buildLightbeamHint(starter, state.states);
    return <div className="flex flex-col items-center gap-3">
        <LightbeamBoard puzzle={starter} states={state.states} highlighted={hint?.cells} litBeam={hint?.beam} onCycle={piece => setState(prev => cycleLightbeamPiece(prev, starter, piece))} />
        <p className="text-sm text-amber-300">{hint ? hint.key : "lit"}</p>
      </div>;
  }
}`,...I.parameters?.docs?.source},description:{story:`The board with the hint's piece and beam lit — the state after pressing Hint.`,...I.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: stopSets,
    states: [0, 0, 0],
    onCycle: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6">
      <Frame puzzle={stopSets} states={[0, 0, 0]} caption="first stop — 45° / 22.5° / 45°" />
      <Frame puzzle={stopSets} states={[1, 1, 1]} caption="second stop — 135° / 135° / 157.5°" />
    </div>
}`,...W.parameters?.docs?.source},description:{story:`Do the two stops of one cut mirror read as a pair? Left is every piece on its first stop, right on its
second, so each column is one piece turning: an ordinary turn mirror 90° apart as the control, then two
cut mirrors 67.5° apart. Two thirds of a right angle is plenty — what it costs is the *feel* of the turn,
which is the tell that this is a different kind of piece.

Columns 1 and 3 in the left frame are both at 45° and must still be told apart. The ticks do it: their
other stops are at 135° and 157.5°, so the marks sit in different places.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: cutWizard,
    states: cutWizard.initial,
    onCycle: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6">
      <Frame puzzle={cutWizard} states={cutWizard.initial} caption="wizard — opens" />
      <Frame puzzle={cutWizard} states={cutWizard.solution} caption="wizard — answered" />
      <Frame puzzle={cutDoors} states={cutDoors.initial} caption="wizard + door — opens" />
      <Frame puzzle={cutDoors} states={cutDoors.solution} caption="wizard + door — answered" />
    </div>
}`,...G.parameters?.docs?.source},description:{story:`Does a full board read, or is it a field of marks? Every mirror carries at least one tick, and a wizard
grid holds nine of them. Both boards are generated at the size the modal gives them; four of the eight
turn mirrors are retrofitted to three- and two-stop lists so forks differ in size as well as angle.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: diagonalRun,
    states: [0],
    onCycle: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6">
      <Frame puzzle={diagonalRun} states={[0]} caption="22.5° — six diagonal steps past six walls" />
      <Frame puzzle={diagonalRun} states={[1]} caption="135° — the quarter turn it keeps" />
      <Frame puzzle={cutRivet} states={[1, 0, 0, 0, 0, 0, 0, 0, 1, 0]} caption="a beam corner on a rivet" />
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Does a diagonal beam read as light, and does the corner it turns read as a gap?

Left, the run at the size it ships at, with stone hugging it in three places so the light is seen going
between the corners. Right, a beam corner landing exactly on a wire's rivet — a diagonal beam turns at
cell corners and rivets are drawn at corners, so the endpoints can coincide, and on real boards they do.`,...K.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    puzzle: diagonalMaster,
    states: diagonalMaster.solution,
    onCycle: () => {}
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6">
      <Frame puzzle={diagonalMaster} states={diagonalMaster.solution} caption="master — the answer, five diagonal steps" />
      <Frame puzzle={diagonalMaster} states={onTheWrongStop(diagonalMaster)} caption="the wrong stop — the quarter turn it kept" />
      <Frame puzzle={diagonalWizard} states={diagonalWizard.solution} caption="wizard — six diagonal steps" />
      <Frame puzzle={diagonalEscape} states={diagonalDeath(diagonalEscape)} caption="off the frame on a diagonal — the escape marker" />
      <Frame puzzle={diagonalAbsorbed} states={diagonalDeath(diagonalAbsorbed)} caption="into stone on a diagonal — the absorbed marker" />
      <Frame puzzle={diagonalCrossing} states={diagonalCrossing.solution} caption="a crossing at 45° — a diagonal over a column, and over a row" />
    </div>
}`,...$.parameters?.docs?.source},description:{story:`The mechanic as a player meets it: the route itself is the diagonal, so the last leg runs corner to
corner into a shrine set in the frame and the piece's other stop is the plain quarter turn.

A diagonal end is marked at the cell centre rather than the face it meets, because for a diagonal entry
that face is a corner — the one point that means "it got through" everywhere else on the board.

Then the two diagonal deaths, off the grid and into stone, and last a crossing that meets at 45° rather
than 90°. It still reads as one square the beam goes through twice: both passes bend at the same centre.`,...$.parameters?.docs?.description}}}})))()}he();export{F as CrossedBeams,G as CutMirrorDensity,W as CutMirrorStops,K as DiagonalBeam,$ as DiagonalRoute,b as Expert,j as NodeDensity,k as NodeDoor,M as NodeFanning,N as NodeGenerated,P as NodePlayable,A as NodeTrap,S as Playable,y as Solved,v as Starter,I as WithHint,x as Wizard,me as __namedExportsOrder,d as default};