import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t as ee}from"./package-D0Ex1IVc.js";import{n as te}from"./iframe-D0Egwrw_.js";import{n as ne,t as re}from"./lockPlayground-4B1Xe61v.js";import{t as ie}from"./registerModApps-BpIKPGw-.js";var ae;function oe(){return(oe=e((()=>{ae=`// designed by: Claude
// expert. Djoser's builders' lift: the way out wants a stone on the plate in the workshop below and one on the
// plate in the store. The workshop lies down a hatch no stone rides, propped open by a stone: the other stone goes
// down the pipe, you jump after it and set it, and only once it holds the hatch from below is the prop spent.

in -- yard
yard -[p+q]- out
yard -- store
yard -[h|p]- >> workshop
workshop >> yard
h plate @yard stone
p plate @workshop
q plate @store
pile plate @store stone
P pipe @yard @workshop
`})))()}var se;function ce(){return(ce=e((()=>{se=`// designed by: Claude
// master. The exit wants both levers thrown, each behind its own way of the
// board. The west lever shuts the board's way behind you, so only a drop
// takes you home.

in -[Y]- -[A:a]- west
in -[Y]- east
in -[A+B]- out
west >> in
out >> west
Y fork @in
A toggle @west
B toggle @east
west *
east *
`})))()}var le;function ue(){return(ue=e((()=>{le=`// designed by: Claude
// master. Giza's counterweight: the zipline takes you down only empty
// handed, and the lift opens from below. Weigh it down there, then bring the other stone by lift.

in -- gallery
gallery >> chamber
gallery -[low]- chamber
chamber -[q+low]- out
low plate @chamber
q plate @chamber
ledge plate @gallery stone
niche plate @chamber stone
gallery *
`})))()}var de;function fe(){return(fe=e((()=>{de=`// designed by: Matthijs
// expert capstone. A lever that shuts the way you came and opens a branch you
// drop onto; the drop off that branch is the only way home.

in -[Y]- leftLower 
in -[Y]- rightLower
in -[S2]- out

leftLower -[S1]- s2

rightLower >> s1
s1 >> leftLower
leftLower >> in

Y fork @in
S1 toggle @s1
S2 toggle @s2
s2 $
`})))()}var pe;function me(){return(me=e((()=>{pe=`// designed by: Claude
// expert. Karnak's festival procession: the door's board tells the order of four shrines, two on each side of the
// hall, and one lever opens one side at a time, so the walk throws it back and forth on the way.

in -- hall
hall -[P]- out
hall -[L:a]- north1
hall -[L:a]- north2
hall -[L]- south1
hall -[L]- south2
hall -- shrine
L toggle @shrine
P procession north1 south1 south2 north2
`})))()}var he;function t(){return(t=e((()=>{he=`// designed by: Claude
// expert. The Nile in flood: the key lies past a cellar that is dry only while the torch's hall is under water, and
// the water puts the torch out. Fetch the key first, then drain the hall and light the torch; lit first, it drowns.

in -- hall
hall -[K+T]- out
hall -- torchHall
hall -- cellar -- vault
hall -- sluice
torchHall -[S:a]
cellar -[S:b]
S toggle @sluice
T torch @torchHall
K activator @vault
`})))()}var n;function r(){return(r=e((()=>{n=`// designed by: Claude
// expert. An hourglass: one lever buries one hall in sand and clears the other. A torch stands behind each hall,
// and a lit torch burns on under the sand: light one, turn the glass, light the other, and turn it back to leave.

in -- hall
hall -- west -- westShrine
hall -- east -- eastShrine
hall -- glass
west -[T1+T2]- out
west -[S:a]
east -[S:b]
S toggle @glass
T1 torch @westShrine
T2 torch @eastShrine
`})))()}var i;function a(){return(a=e((()=>{i=`// designed by: Claude
// master. A key chain behind an airlock: the lever opens the way in or the
// red room, never both.

in -[H:a]- leverRoom -[H]- redRoom
in -[red]- greenRoom
in -[green]- out
H toggle @leverRoom
red activator @redRoom
green activator @greenRoom
leverRoom *
redRoom *
`})))()}var o;function s(){return(s=e((()=>{o=`// designed by: Claude
// LESSON, expert: the stone pipe. The shut door comes first, in the yard; the plate that opens it lies behind a
// narrow passage no stone is carried through. Post the stone through the wall, squeeze after it, set it on the plate.

in -- yard
yard -[p]- out
yard -[unladen]- workshop
yard -- store
p plate @workshop
pile plate @store stone
P pipe @yard @workshop
`})))()}var c;function l(){return(l=e((()=>{c=`// designed by: Claude
// LESSON, expert: two tiles, in order. The shut door stands at the entrance and shows the order; a tile
// waits in each of two side rooms, so the player goes to them in that order and comes back through the door.

in -- a
in -- b
in -[P]- out
P sequence a b reset in-out
`})))()}var u;function d(){return(d=e((()=>{u=`// designed by: Claude
// expert. A canal lock: three basins in a row and two winches, each flooding one basin as it drains the next. Walk
// to the key and back like a boat, the water moved around you basin by basin.

in -- b1 -- quay1 -- b2 -- quay2 -- b3 -- vault
quay1 -- winch1
quay2 -- winch2
in -[K]- out
b1 -[A:a]
b2 -[A+B:a]
b3 -[B]
A toggle @winch1
B toggle @winch2
K activator @vault
`})))()}var f;function p(){return(p=e((()=>{f=`// designed by: Claude
// master. A three-way board with an activator behind each way; going east first,
// the drop to west saves a board solve.

in -[Y]- west
in -[Y]- north
in -[L+K+M]- out
in -[Y]- east
east >> west
west >> in
Y fork @in
L activator @west
K activator @east
M activator @north
north *
`})))()}var m;function h(){return(h=e((()=>{m=`// designed by: Claude
// master. Four tiles in order across four
// rooms; a wrong tile spoils the run, the door resets it.

in -- a
in -- b
in -- c
in -- d
in -[P]- out
P sequence b a d c reset in-out
`})))()}var g;function _(){return(_=e((()=>{g=`// designed by: Claude
// master. A chain of airlocks: each switch shuts the door behind you, and the
// drop home opens only once the last torch is lit.

in -[A:a]- r1 -[A+B:off]- r2 -[B]- r3
r3 -[C]- >> in
in -[C]- out
out >> r1
out >> r3
A toggle @r1
B torch @r2
C torch @r3
r1 *
r2 *
`})))()}var v;function y(){return(y=e((()=>{v=`// designed by: Claude
// expert. A stone on the yard's plate holds the quarry open, and the way out wants two stones. Bring the quarry's
// stone out first: lift the scaffold's stone first and the quarry shuts on the other.

in -- yard
yard -[p1]- quarry
yard -[p2+p3]- out
yard -- dais
p1 plate @yard stone
p2 plate @dais
p3 plate @dais
shelf plate @quarry stone
`})))()}var b;function x(){return(x=e((()=>{b=`// designed by: Matthijs
// not placed yet, not buildable yet (stones, gate loop). Lifting the stone off the altar opens the back way and
// shuts the door you came in by. Park a stone on the backroom shelf to fit through the narrow passage,
// and spend both stones twice.

in -- passage -[P1+P2]- out

in -- hall

hall -[P3]- hall2 -[P4]- altar

P1 plate @passage stone
P2 plate @passage

P3 plate @hall

P4 plate @altar stone

altar -[P4:empty]- backroom

P5 plate @backroom

backroom -- hall3

hall3 -[unladen]- hall2

hall2 -[P4:empty]- hall5

S1 torch @hall5

hall3 -[S1]- passage
`})))()}var S;function C(){return(C=e((()=>{S=`// designed by: Claude
// expert. The lever beside the shut exit opens the side room, whose lever swaps the way east for a ledge; the
// exit's lever waits below the drop, so the swap lever is thrown, then thrown back to reach the exit again.

in -- hall
hall -[L]- side
hall -[S:a]- east
hall -[S]- ledge
ledge >> pit
pit -[K]- hall
east -[K]- out
L toggle @east
S toggle @side
K toggle @pit
pit *
`})))()}var w;function T(){return(T=e((()=>{w=`// designed by: Claude
// expert. The exit wants both lamps lit, and the board lets you reach one
// lamp at a time, so it is solved twice.

in -[Y]- west
in -[Y]- east
in -[A+B]- out
Y fork @in
A toggle @west
B toggle @east
`})))()}var E;function D(){return(D=e((()=>{E=`// designed by: Claude
// expert. One stone holds the vault open while you fetch the second; then
// the first is free to press the exit's other plate. Spend a stone twice.

in -- yard
yard -[door]- vault
yard -[e1+e2]- out
door plate @yard
e1 plate @yard
e2 plate @yard
ledge plate @yard stone
alcove plate @vault stone
`})))()}var O;function k(){return(k=e((()=>{O=`// designed by: Claude
// junior. The way out waits for two levers, one above a drop and one below it, and stands below. Throw the upper
// lever before you jump: the lower one opens the way back up, so jumping first costs a walk, never a dead end.

in -- hall
hall -- side
hall -- ledge
ledge >> pit
pit -[B]- hall
pit -[A+B]- out
A toggle @side
B toggle @pit
`})))()}var A;function j(){return(j=e((()=>{A=`// designed by: Claude
// junior, the starter cave. One lever opens two doors at once, and each room behind them holds the lever for the
// other's: west's lever opens the cell in east, whose lever opens the way out.

in -- hall
hall -- side
hall -[C]- west
hall -[C]- east
east -[W]- cell
hall -[A]- out
C toggle @side
W toggle @west
A toggle @cell
west *
east *
`})))()}var M;function N(){return(N=e((()=>{M=`// designed by: Claude
// junior. The lever that opens the exit shuts the bridge back; the drop lands
// in a cell that holds its own key.

in -[H:a]- ledge
in -[blue]- cell
in -[H]- out
ledge >> cell
out >> ledge
H toggle @ledge
blue activator @cell
ledge *
`})))()}var P;function F(){return(F=e((()=>{P=`// designed by: Claude
// junior. The lever that opens the exit shuts the door behind you;
// the only way home is a drop.

in -[Y]- hall -[H:a]- leverRoom
in -[Y]- vault
in -[H]- out
leverRoom >> in
out >> leverRoom
Y fork @in
H toggle @leverRoom
hall *
vault $
`})))()}var I;function L(){return(L=e((()=>{I=`// designed by: Claude
// junior. Light west first and the board is solved once; light east first and
// it is solved twice. The west-east drop is the optional shortcut.

in -[Y]- west
in -[Y]- east
in -[A+B]- out
west >> east >> in
Y fork @in
A torch @west
B torch @east
`})))()}var R;function ge(){return(ge=e((()=>{R=`// designed by: Claude
// LESSON, junior: a board in a junction decides which way opens. The shut door to the way out stands at the
// entrance; its lever waits behind one of the board's ways, the reward behind the other. The lever is needed: a
// board on the way out itself is refused (gateOwnedOffSeam).

in -[Y]- left
in -[Y]- right
in -[S]- out
Y fork @in
S toggle @left
right $
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`// designed by: Claude
// LESSON, junior: a door that waits for two; its face shows both marks. The shut door comes first, in the hall;
// a torch waits in each of two side rooms, and the first one lit leaves the door shut.

in -- hall
hall -[T1+T2]- out
hall -- east
hall -- west
T1 torch @east
T2 torch @west
`})))()}var ye;function be(){return(be=e((()=>{ye=`// designed by: Claude
// LESSON, junior: a drop is a way down, never back. The shut door to the way out stands at the entrance;
// the lever waits at the bottom of a drop, beside a door it opens that is the only way back up.

in >> path -- ledge
ledge -[G]- in
in -[G]- out
ledge $

G toggle @ledge`})))()}var z;function xe(){return(xe=e((()=>{z=`// designed by: Claude
// LESSON, junior: a lever opens a door it does not stand beside. The shut door comes first, in the hall;
// the lever waits in a side room, so the player goes looking for it and comes back through the door.

in -- hall
hall -[H]- out
hall -- side
H toggle @side
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`// designed by: Claude
// LESSON, junior preview and expert: one lever swaps two doors, and can be thrown back. The hall shows a shut
// door and an open one; the lever waits in a side room, and throwing it opens the way out and shuts the other.

in -- hall
hall -[H:a]- left
hall -[H]- out
hall -- side
H toggle @side
left $
`})))()}var we;function Te(){return(Te=e((()=>{we=`// designed by: Claude
// LESSON, junior: a stone set on a plate holds its door open; lift it and the door shuts. The shut door comes
// first, in the yard; the plate waits in a side room and the stone on a shelf in a nook past it, so the player goes
// looking for both and carries the stone back to the plate.

in -- yard
yard -[p]- out
yard -- side
side -- shelf
p plate @side
ledge plate @shelf stone
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`// designed by: Claude
// LESSON, junior: a torch, lit for good, opens a door it does not stand beside. The shut door comes first, in
// the hall; the torch waits in a side room, so the player goes looking for it and comes back through the door.

in -- hall
hall -[T]- out
hall -- side
T torch @side
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`// designed by: Claude
// LESSON, junior: one lever drains a hall. The player arrives beside the flooded hall that stands between them
// and the way out; the lever waits in a side room.

in -- hall
hall -[S]
hall -- out
in -- side
S toggle @side
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`// designed by: Claude
// junior. One room overlooks two drops; the drop out of the middle saves
// whoever drops in before throwing S1.

in -- top
top -[S1]- s1
s2 -[S1]- middle
top -[S2]- out
top >> s1
top >> middle >> in
S1 toggle @s1
S2 toggle @s2
top *
middle *
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`// designed by: Claude
// junior. A lever opens the ledge, and the drop below it lands beside the lever that opens both the stair back up
// and the gallery that holds the last lever: a drop is a way down, never back, until you open the way.

in -- hall
hall -- side
hall -[C]- ledge
ledge >> pit
pit -[B]- hall
hall -[B]- gallery
hall -[A]- out
C toggle @side
B toggle @pit
A toggle @gallery
pit *
gallery *
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`// designed by: Claude
// junior. Two levers, and each one's throw shuts the way to the other.
// Only the drops let both be thrown.

in -[B:a]- west
in -[A:a]- east
in -[A+B]- out
west >> east >> in
out >> west
A toggle @west
B toggle @east
west *
east *
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`// designed by: Claude
// junior. Water moved from one room to
// another: drain the hall for the gold, then the vault for the way out.

in -- hub
hub -- hall
hub -- vault
vault -[gold]- out
hall -[S:hall]
vault -[S:vault]
S toggle @hub hall vault
gold activator @hall
vault $
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`// designed by: Claude
// junior. The lever floods one hall and drains
// the other; carry the key home against the water.

in -- hall1 -- mid -- hall2
in -[K]- out
hall1 -[S:a]
hall2 -[S:b]
S toggle @mid
K activator @hall2
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`// designed by: Claude
// master. The fallen colossus: you slide down its shoulder into the hall it fell across, and there is no climbing
// back. Every lever along the body opens the way on and shuts one you came by; the hand is reached only once the
// feet are turned and the right arm's lever thrown, and the way out stands at the left arm, opened from the hand.
in -- head
head >> chest
chest -[A:a]- armL
chest -[A:b]- armR
armL -[B:b]- feet
armR -[B:a+C:a]- feet
feet >> chest
armR -[C:b+B:b]- >> hand
hand >> chest
armL -[D:b]- out
A toggle @chest
B toggle @armR
C toggle @feet
D toggle @hand
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`// designed by: Claude
// master. Nefertari's groundwater: salt water stands in the tomb, and her painted hall must stay dry. The way out
// floats only on high water, and high water drowns the painted hall unless a stone on the sill plate holds its dam.
// The one stone is wanted twice: first in the cellar, dry only while its water is let down, to reach the key; then
// on the sill, whose room is dry only while the cellar's water stands high.
in -- court
court -[T+K+S:high]- out
court -- painted
court -- east
court -- cellar
cellar -- deep
deep -[d]- vault
painted -[S:low|p]
east -[R:high]
deep -[R:low]
S toggle @court low high
R toggle @cellar high low
p plate @east
d plate @deep
q plate @painted stone
T torch @painted
K activator @vault
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`// designed by: Claude
// master. The hall of the judges: the confession before the assessors, one shrine at a time in the order the door
// shows; walk into a shrine early and the confession starts again at the door. Each judge's lever opens the next
// shrine only with the lever before it set back, so the way on runs back through shrines already passed.
in -- hall
hall -[P]- out
hall -- j1
hall -[A:b]- j2
hall -[A:a+B:b]- j3
hall -[B:a+C:b]- j4
hall -[A:b+C:b]- j5
A toggle @j1
B toggle @j2
C toggle @j3
P procession j1 j2 j3 j4 j5
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`// designed by: Claude
// master. Djoser's building site: one stone holds the chute door so the other can go down the pipe to the
// workshop; you follow with empty hands, down the chute or through the narrow passage.

in -- yard
yard -[unladen]- workshop
yard -[r]- chute >> workshop
yard -[p]- out
r plate @yard
p plate @workshop
pile1 plate @yard stone
pile2 plate @yard stone
P pipe @chute @workshop
chute *
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`// designed by: Claude
// master. The robbers' tunnel: their crawl is narrow and ends in a drop, so nothing comes down it in your hands,
// and its trapdoor holds while a stone lies on the shelf above: the shelf's stone goes down the robbers' shaft.
// Below, the robbers' stone props the ladder home, and the vault's two plates want both stones at once.
in -- hall
hall -[K]- out
hall -[u:empty]- landing
landing -[unladen]- crawl
crawl >> pit
hall -- shaft
pit -[p]- >> hall
pit -[q1+q2]- vault
P pipe @shaft @pit
u plate @hall stone
p plate @pit stone
q1 plate @pit
q2 plate @pit
K activator @vault
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`// designed by: Claude
// master. The Sed court: the king runs between the boundary markers to prove he can still rule, the north's in the
// white crown, the south's in the red. Touch the four markers in the festival's order, north and south in turn;
// the ways between them run one way, so every change of crown is a walk back to the court. Then both thrones.
in -- court
court -[P+N+S]- out
court -[C:white]- m1
m1 -[C:white]- >> m2
m2 >> court
court -[C:red]- m3
m3 -[C:red]- >> m4
m4 >> court
m2 -- northThrone
m4 -- southThrone
P sequence m1 m3 m2 m4
C toggle @court white red
N activator @northThrone
S activator @southThrone
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`// designed by: Claude
// master. Sekhmet's fire: three braziers in three halls, and two doors the robbers broke that let the desert wind
// in. Each door swung shut stills one hall and lets the wind into another, where it puts the fire out. The key lies
// past the one hall only the first wind leaves still: fetch it before you shut a door, and light last.
in -- court
court -[T1+T2+T3+K]- out
court -- h1
court -- h2
h1 -- h3
h2 -- vault
h1 -[W:b|V:b]
h2 -[W:a|V:b]
h3 -[W:b|V:a]
vault -[W:a+V:a]
court -- v
h2 -- w
V toggle @v
W toggle @w
T1 torch @h1
T2 torch @h2
T3 torch @h3
K activator @vault
`})))()}var et;function tt(){return(tt=e((()=>{et=`// designed by: Claude
// master. Giza's sun court: two mirrors throw the sun into the halls, and a hall in shadow cannot be crossed and
// puts its torch out. The vault's plate wants the stone from the east hall, and the vault is lit only while both
// mirrors face away: fetch the stone and the key before the torches, or light them twice.
in -- court
court -[T1+T2+K]- out
court -- east
court -- west
court -- north
court -- tower
north -[p]- vault
east -[A:b]
west -[B:b]
north -[A:a+B:a]
A toggle @court
B toggle @tower
p plate @north
q plate @east stone
T1 torch @east
T2 torch @west
K activator @vault
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`// designed by: Tom
// master. The weighing of the heart: pipe the feather's stone east onto the heart, walk the sun, turn Ra back to dawn.
in -- court
court -[feather]- west
court -[unladen]- crypt
crypt -[unladen]- west
court -[Ra]- east
crypt -- sanctum
sanctum -[Ra:dawn]- -[heart]- -[Sun]- out

east -- sunrise
crypt -- zenith
west -- sunset

Ra toggle @crypt dawn dusk
Sun sequence sunrise zenith sunset
feather plate @west stone
heart plate @east
canopic pipe @west @east
`})))()}var it,B,at,ot,V,H,U,W,G,K,q,J,Y,X,st,ct,Z,Q,$,lt;function ut(){return(ut=e((()=>{oe(),ce(),ue(),fe(),me(),t(),r(),a(),s(),l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),ge(),ve(),be(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),it=ee(),ne(),ie(),B=te(),at=Object.fromEntries(Object.entries(Object.assign({"../../game/locks/expert/buildersLift.lock":ae,"../../game/locks/expert/clockwork.lock":se,"../../game/locks/expert/counterweight.lock":le,"../../game/locks/expert/doubleBack.lock":de,"../../game/locks/expert/festivalProcession.lock":pe,"../../game/locks/expert/highWater.lock":he,"../../game/locks/expert/hourglass.lock":n,"../../game/locks/expert/keyring.lock":i,"../../game/locks/expert/lessons/throughTheWall.lock":o,"../../game/locks/expert/lessons/tilesInOrder.lock":c,"../../game/locks/expert/lockChamber.lock":u,"../../game/locks/expert/observatory.lock":f,"../../game/locks/expert/plates.lock":m,"../../game/locks/expert/relay.lock":g,"../../game/locks/expert/scaffold.lock":v,"../../game/locks/expert/stoneGate.lock":b,"../../game/locks/expert/throwItBack.lock":S,"../../game/locks/expert/twoLamps.lock":w,"../../game/locks/expert/twoStones.lock":E,"../../game/locks/junior/beforeYouJump.lock":O,"../../game/locks/junior/caveLevers.lock":A,"../../game/locks/junior/cellar.lock":M,"../../game/locks/junior/dropHome.lock":P,"../../game/locks/junior/lamplighter.lock":I,"../../game/locks/junior/lessons/boardPicksTheWay.lock":R,"../../game/locks/junior/lessons/doorWaitsForTwo.lock":_e,"../../game/locks/junior/lessons/dropDown.lock":ye,"../../game/locks/junior/lessons/leverOpensADoor.lock":z,"../../game/locks/junior/lessons/leverSwapsDoors.lock":Se,"../../game/locks/junior/lessons/stoneOnAPlate.lock":we,"../../game/locks/junior/lessons/torch.lock":Ee,"../../game/locks/junior/lessons/waterMoves.lock":Oe,"../../game/locks/junior/overlook.lock":Ae,"../../game/locks/junior/pitStair.lock":Me,"../../game/locks/junior/seesaw.lock":Pe,"../../game/locks/junior/sluice.lock":Ie,"../../game/locks/junior/tide.lock":Re,"../../game/locks/master/fallenColossus.lock":Be,"../../game/locks/master/groundwater.lock":He,"../../game/locks/master/hallOfJudges.lock":We,"../../game/locks/master/masonsRamp.lock":Ke,"../../game/locks/master/robbersTunnel.lock":Je,"../../game/locks/master/sedRun.lock":Xe,"../../game/locks/master/sekhmetsFire.lock":Qe,"../../game/locks/master/sunCourt.lock":et,"../../game/locks/master/weighingOfTheHeart.lock":nt})).map(([e,ee])=>[e.replace(/^.*\/locks\/[^/]+\//,``).replace(/\.lock$/,``),ee])),ot={title:`Topology/Lock playground`,component:re,parameters:{layout:`fullscreen`},decorators:[e=>(0,B.jsx)(it.StrictMode,{children:(0,B.jsx)(e,{})})],args:{locks:at,initial:`lessons/leverOpensADoor`}},V={},H={args:{locks:{doorByPlate:`in -[p]- out
p plate @in
shelf plate @in stone
in ?
out ?`},initial:`doorByPlate`}},U={args:{initial:`lessons/waterMoves`}},W={args:{initial:`sluice`}},G={args:{initial:`tide`}},K={args:{locks:{torchAndFlood:`in -- hub -- hall
hub -[A+B:off]- out
hall -[S:a]
S toggle @hub
B torch @hall lit
A torch @hall
in ?
hub ?
hall ?
out ?`},initial:`torchAndFlood`}},q={args:{locks:{crack:`in -[unladen]- out
shelf plate @in stone
in ?
out ?`},initial:`crack`}},J={name:`Stone pipe`,args:{locks:{pipe:`in -[unladen]- hall
hall -[p]- out
p plate @hall
shelf plate @in stone
P pipe @in @hall
in ?
hall ?
out ?`},initial:`pipe`}},Y=`in -- yard
yard -&> hall
hall -[p]- out
p plate @hall
shelf plate @in stone
in ?
yard ?
hall ?
out ?`,X=`in -&> hall
hall -[L]- out
L toggle @in
in ?
hall ?
out ?`,st=`in -- hall
hall -[p]- out
p plate @hall
shelf plate @in stone
in ?
hall ?
out ?`,ct=`in -[s]- hall
hall -- out
s plate @in
t plate @hall stone
in ?
hall ?
out ?`,Z={args:{locks:{host:Y,lever:X},initial:`host`,nest:`lever`}},Q={args:{locks:{lever:X,cell:st},initial:`lever`,nest:`cell`}},$={args:{locks:{host:Y,gated:ct},initial:`host`,nest:`gated`}},lt=[`Playground`,`WeightOpensTheDoor`,`WaterMoves`,`Sluice`,`Tide`,`TorchAndFlood`,`SqueezeThrough`,`StonePipe`,`StonePassesThrough`,`StoneStaysInside`,`StonesShared`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    locks: {
      doorByPlate: "in -[p]- out\\np plate @in\\nshelf plate @in stone\\nin ?\\nout ?"
    },
    initial: "doorByPlate"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    initial: "lessons/waterMoves"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    initial: "sluice"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    initial: "tide"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    locks: {
      torchAndFlood: "in -- hub -- hall\\nhub -[A+B:off]- out\\nhall -[S:a]\\nS toggle @hub\\nB torch @hall lit\\nA torch @hall\\nin ?\\nhub ?\\nhall ?\\nout ?"
    },
    initial: "torchAndFlood"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    locks: {
      crack: "in -[unladen]- out\\nshelf plate @in stone\\nin ?\\nout ?"
    },
    initial: "crack"
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Stone pipe",
  args: {
    locks: {
      pipe: "in -[unladen]- hall\\nhall -[p]- out\\np plate @hall\\nshelf plate @in stone\\nP pipe @in @hall\\nin ?\\nhall ?\\nout ?"
    },
    initial: "pipe"
  }
}`,...J.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    locks: {
      host: HOST_STONES,
      lever: LEVER
    },
    initial: "host",
    nest: "lever"
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    locks: {
      lever: LEVER,
      cell: CELL
    },
    initial: "lever",
    nest: "cell"
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    locks: {
      host: HOST_STONES,
      gated: GATED
    },
    initial: "host",
    nest: "gated"
  }
}`,...$.parameters?.docs?.source}}}})))()}ut();export{V as Playground,W as Sluice,q as SqueezeThrough,Z as StonePassesThrough,J as StonePipe,Q as StoneStaysInside,$ as StonesShared,G as Tide,K as TorchAndFlood,U as WaterMoves,H as WeightOpensTheDoor,lt as __namedExportsOrder,ot as default};