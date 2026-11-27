import{n as e}from"./rolldown-runtime-sJBDdmOt.js";var t;function n(){return(n=e((()=>{t=`// designed by: Claude
// expert. The tomb's formula: the list of things given away on a stela on the north wall, an offering table before it, a lamp either side, the stop facing it.
room formulaWallExpert
tier expert

layout
# # n f n # #
# l . o . l #
d . . s . . d
# . . . . . #
# # d # d # #

f wallItem formulaPanel
n wallItem sconce
l wall lamp
o wall offeringTable
s stop
`})))()}var r;function i(){return(i=e((()=>{r=`// designed by: Claude
// junior. The bakery-brewery: the bread oven, the quern between, the beer jars on their rack.
room bakery
tier junior
activity bakeryBrewery
mirror

layout
# # d # d # #
# o . g . j #
d . . . . . d
# . . s . . #
# # d # d # #

o wall breadOven
g wall grindstone
j wall jarRack
s stop
`})))()}var a;function o(){return(o=e((()=>{a=`// designed by: Claude
// junior. The bakery's works: the lever or torch stands in the middle of the floor, the bread oven and the beer jars
// keep to the corners of the north wall, out of its way.
room bakeryWorks
tier junior
activity bakeryBrewery
mirror

layout
# # d # d # #
# o . . . j #
d . . m . . d
# . . s . . #
# # d # d # #

o wall breadOven
j wall jarRack
m mechanism
s stop
`})))()}var s;function c(){return(c=e((()=>{s=`// designed by: Claude
// junior. The banquet: the table laid in the middle of the floor, the harp and the frieze on the north wall. On a floor
// with a patron, the god's statue stands at the north wall where no corridor comes in.
room banquetRoom
tier junior
activity banquet
mirror

layout
# N # # d #
# p h g . #
d . t t . d
# . . s . #
# d # # d #

h wall harp
g wall hanging | jarRack
t floor banquetTable
N door
p floor? patron unless N
s stop
`})))()}var l;function u(){return(u=e((()=>{l=`// designed by: Claude
// junior. The bedroom: the bed on its lion legs along the north wall, the headrest beside it. On a floor with a
// patron, the god's statue stands at the north wall where no corridor comes in.
room bedroom
tier junior
activity bedroom
mirror
holds chest

layout
# N # # # #
# p b b h #
d . . . . d
# . s . . #
# # d # d #

b wall bed
h wall headrest
N door
p floor? patron unless N
s stop
`})))()}var d;function f(){return(f=e((()=>{d=`// designed by: Claude
// junior. A big banquet hall: the table in the middle, the harp and the frieze between wine racks on the north wall. On a
// floor with a patron, the god's statue stands at the north wall where no corridor comes in.
room bigBanquetHall
tier junior
activity banquet
mirror

layout
# # N # # d # #
# j p h g . k #
d . . . . . . d
# . . t t . . #
# . . . s . . #
# # d # # d # #

j wall jarRack
k wall jarRack
h wall harp
g wall hanging
t floor banquetTable
N door
p floor? patron unless N
s stop
`})))()}var p;function m(){return(m=e((()=>{p=`// designed by: Claude
// junior. A big garden court: the lotus pool in the middle of an open court, a lotus column on the north wall, potted
// trees in the south corners. On a floor with a patron, the god's statues stand in the north corners, facing into the
// court.
room bigGardenCourt
tier junior
activity gardenCourt

layout
# # d # d # #
# p . c . p #
d . . . . . d
# . b b . . #
d . . . . . d
# t . s . t #
# # d # d # #

t floor pottedTree
c wall pillar
b floor lotusPool
p floor? patron
s stop
`})))()}var h;function g(){return(g=e((()=>{h=`// designed by: Claude
// junior. A court with the lever or torch where the pool would be: two potted trees in the corners of the north wall.
room courtWorks
tier junior
activity gardenCourt

layout
# # d # d # #
# t . . . t #
d . . m . . d
# . . s . . #
# # d # d # #

t wall pottedTree
m mechanism
s stop
`})))()}var _;function v(){return(v=e((()=>{_=`// designed by: Claude
// junior. The dressing room: the table with its mirror and kohl pots, the wig on its stand, a mirror bracket either side.
room dressingRoom
tier junior
activity dressingRoom
mirror
holds chest

layout
# n d n #
# w . e #
d . s . d
# . . . #
# d d d #

w wall dressingTable
e wall wigStand | shelf
n wallItem sconce
s stop
`})))()}var y;function b(){return(b=e((()=>{y=`// designed by: Claude
// junior. The tomb's formula: the list of things given away on a stela on the north wall, an offering table before it, a lamp either side, the stop facing it.
room formulaWallJunior
tier junior

layout
# # n f n # #
# l . o . l #
d . . s . . d
# . . . . . #
# # d # d # #

f wallItem formulaPanel
n wallItem sconce
l wall lamp
o wall offeringTable
s stop
`})))()}var x;function S(){return(S=e((()=>{x=`// designed by: Claude
// junior. The garden court: the lotus pool in the middle, a lotus column on the north wall, potted trees in the south
// corners. On a floor with a patron, the god's statues stand in the north corners, facing into the court.
room gardenCourt
tier junior
activity gardenCourt

layout
# # d # d # #
# p . c . p #
d . . b . . d
# t . s . t #
# # d # d # #

t floor pottedTree
c wall pillar
b floor basin
p floor? patron
s stop
`})))()}var C;function w(){return(w=e((()=>{C=`// designed by: Claude
// junior. Henut's dressing room in her tomb: Henut at the north wall between her dressing table with its copper mirror and her wig on its stand, north of the place you stop; her linen press and a second wig in the corners.
room henutVanity
tier junior
activity dressingRoom
mirror

layout
# n # # # n #
# . t . w . #
d . . s . . d
# h . . . f #
# # d # d # #

t wall dressingTable
w wall wigStand
h floor wigStand | shelf
f floor shelf
n wallItem sconce
s stop
`})))()}var T;function E(){return(E=e((()=>{T=`// designed by: Claude
// junior. Henut's wall: her name in its cartouche on the north wall, offering tables either side of it and a lamp beyond each, and the stop facing the name.
room henutWall
tier junior
activity householdShrine

layout
# # n f n # #
# l o . o l #
d . . s . . d
# . . . . . #
# # d # d # #

f wallItem namePanel
n wallItem sconce
l wall lamp
o wall offeringTable
s stop
`})))()}var D;function O(){return(O=e((()=>{D=`// designed by: Claude
// junior. The banquet's music room, cleared for the lever or torch: the harp in one corner of the north wall.
room musicRoom
tier junior
activity banquet
mirror

layout
# # # N #
# h . p #
d . m . d
# . s . #
# d # d #

h wall harp
m mechanism
N door
p floor? patron unless N
s stop
`})))()}var k;function A(){return(A=e((()=>{k=`// designed by: Claude
// junior. A small room off the bakery: the quern in one corner of the north wall, the lever or torch in the middle.
room quernRoom
tier junior
activity bakeryBrewery
mirror

layout
# d # # #
# . . g #
d . m . d
# . s . #
# d # d #

g wall grindstone
m mechanism
s stop
`})))()}var j;function M(){return(M=e((()=>{j=`// designed by: Claude
// junior. The household shrine: Bes in his shrine under the false door, lamps and flowers either side, the stop in front.
// On a floor with a patron, the god's statues stand either side of the way up to the shrine.
room shrineRoom
tier junior
activity householdShrine

layout
# # # f # # #
# l o r o l #
d . p . p . d
# . . s . . #
# d # d # d #

r wall shrine
o wall offeringTable
l wall lamp
f wallItem stela
p floor? patron
s stop
`})))()}var N;function P(){return(P=e((()=>{N=`// designed by: Claude
// junior. A shrine with the lever or torch before it: the shrine alone under its false door, the mechanism in front.
// On a floor with a patron, the god's statue stands beside the shrine wherever no corridor comes in.
room shrineWorks
tier junior
activity householdShrine

layout
# A f B #
# p r q #
d . m . d
# . s . #
# d # d #

r wall shrine
f wallItem stela
A door
B door
p floor? patron unless A
q floor? patron unless B
m mechanism
s stop
`})))()}var F;function I(){return(I=e((()=>{F=`// designed by: Claude
// master. The throne room, a set piece: the throne on its dais against the north wall between two fans, the regalia on
// a stand, envoys bringing tribute painted either side, two columns down the hall.
room audienceHall
tier master

layout
# # d f # # f # d #
# . . a t t a g . #
d . . . . . . . . d
# . p . . . . p . #
# . . . . s . . . #
# # d # # # # d # #

t wall throne
a wall fan
g wall regaliaStand
p floor pillar
f wallItem envoyFrieze
s stop
`})))()}var L;function R(){return(R=e((()=>{L=`// designed by: Claude
// master. A small audience room: the regalia on its stand under the envoy frieze, a fan beside it.
room audienceRoom
tier master
mirror

layout
# # d f # #
# . . g a #
d . . . . d
# . s . . #
# d # # d #

g wall regaliaStand
a wall fan
f wallItem envoyFrieze
s stop
`})))()}var z;function B(){return(B=e((()=>{z=`// designed by: Claude
// master. The great treasury, a set piece: the king's chariot in the middle, tribute heaped along the north wall.
room bigTreasury
tier master
holds chest

layout
# # d # n # d # #
# h . r . e . h #
d . . . . . . . d
# . . . c c . . #
# . . . c c . . #
# . . . s . . . #
# # d # # # d # #

h wall tributeHeap
r wall shelf
e wall jarRack
c floor chariot
n wallItem niche
s stop
`})))()}var V;function H(){return(H=e((()=>{V=`// designed by: Claude
// master. The boat pit: the funeral barque lies at full length down the middle, an offering table at its prow.
room boatPit
tier master
mirror

layout
# # d # d # # #
# . . . . . o #
d . . . . . . d
# . b b b . . #
# . . . . . . #
# . . s . . . #
# # d # # d # #

b floor funeralBoat
o wall offeringTable
s stop
`})))()}var U;function W(){return(W=e((()=>{U=`// designed by: Claude
// master. The burial chamber: the sarcophagus in the middle, the canopic chest at its head, the king's statue and his
// mask on the north wall, a false door between.
room burialChamber
tier master
mirror

layout
# # d k f # # #
# u . . . o . #
d . . . . . . d
# . . x . . . #
# . . . s . . #
# # d # # d # #

u wall statue
o wall canopicChest
x floor sarcophagus
k wallItem mask
f wallItem stela
s stop
`})))()}var G;function K(){return(K=e((()=>{G=`// designed by: Claude
// master. A burial room with the lever or torch: the canopic chest alone under the false door, the mechanism before it.
room canopicWorks
tier master

layout
# # d f d # #
# . . o . . #
d . . m . . d
# . . s . . #
# # d # d # #

o wall canopicChest
f wallItem stela
m mechanism
s stop
`})))()}var q;function J(){return(J=e((()=>{q=`// designed by: Claude
// master. The statue hall of a fallen pyramid: the colossus lies across the hall where it fell, rubble from its plinth.
room fallenStatueHall
tier master
mirror

layout
# # d # # # d # #
# r . . . . . . #
d . . . . . . . d
# . . c c c . . #
# . . . . . . r #
# . . . s . . . #
# # d # # # d # #

c floor fallenColossus
r floor rubblePile
s stop
`})))()}var Y;function X(){return(X=e((()=>{Y=`// designed by: Claude
// master. The tomb's formula: the list of things given away on a stela on the north wall, an offering table before it, a lamp either side, the stop facing it.
room formulaWallMaster
tier master

layout
# # n f n # #
# l . o . l #
d . . s . . d
# . . . . . #
# # d # d # #

f wallItem formulaPanel
n wallItem sconce
l wall lamp
o wall offeringTable
s stop
`})))()}var Z;function Q(){return(Q=e((()=>{Z=`// designed by: Claude
// master. The Sed court, a set piece: the double throne under its canopy on the north wall, and down the court the
// boundary markers the king runs between to prove he can still rule.
room sedCourt
tier master

layout
# # d # # # # d # #
# . . . t t . . . #
d . . . . . . . . d
# . b . . . . b . #
# . . . . . . . . #
# . b . . s . b . #
# # # d # # d # # #

t wall sedThrone
b floor boundaryMarker
s stop
`})))()}var $;function ee(){return(ee=e((()=>{$=`// designed by: Claude
// master. The shabti room: the boxes of servant figures that will work for the king, a shelf of more along the wall.
room shabtiRoom
tier master
mirror

layout
# # d # # #
# x . r x #
d . . . . d
# . s . . #
# d # # d #

x wall shabtiBox
r wall shelf
s stop
`})))()}var te;function ne(){return(ne=e((()=>{te=`// designed by: Claude
// master. A shabti room with the lever or torch: two shabti boxes in the corners of the north wall, the mechanism between.
room shabtiWorks
tier master

layout
# # d # d # #
# x . . . x #
d . . m . . d
# . . s . . #
# # d # d # #

x wall shabtiBox
m mechanism
s stop
`})))()}var re;function ie(){return(ie=e((()=>{re=`// designed by: Claude
// master. The statue hall, a set piece: the seated colossus of the king against the north wall, a lamp either side.
room statueHall
tier master

layout
# # d # # # # d #
# . . l c c l . #
d . . . c c . . d
# . . . . . . . #
# . . . s . . . #
# # d # # # d # #

c wall colossus
l wall lamp
s stop
`})))()}var ae;function oe(){return(oe=e((()=>{ae=`// designed by: Claude
// master. The sun court, a set piece: small golden pyramids stand in the sunlight falling through the roof; two of the
// four shafts may stay dark.
room sunCourt
tier master

layout
# # d # # # d # #
# . . y . y . . #
d . l . . . l . d
# . . . y . . . #
# . l . . . l . #
# . . . s . . . #
# # d # # # d # #

y floor pyramidion
l ground? lightShaft 2 of 4
s stop
`})))()}var se;function ce(){return(ce=e((()=>{se=`// designed by: Claude
// master. The pharaoh's treasury: tribute of foreign peoples heaped between a shelf of gold vessels and the jar rack.
room treasury
tier master
mirror
holds chest

layout
# # d n # #
# e . h r #
d . . . . d
# . s . . #
# d # # d #

e wall jarRack
h wall tributeHeap
r wall shelf
n wallItem niche
s stop
`})))()}var le;function ue(){return(ue=e((()=>{le=`// designed by: Claude
// master. A treasury with the lever or torch before the tribute: one heap on the north wall, the mechanism in front.
room tributeWorks
tier master

layout
# # d # d # #
# . . h . . #
d . . m . . d
# . . s . . #
# # d # d # #

h wall tributeHeap
m mechanism
s stop
`})))()}var de;function fe(){return(fe=e((()=>{de=`// designed by: Claude
// starter. A big packing room: a litter set down mid-floor, baskets and bales around it, to be walked round.
room bigPackingRoom
tier starter
activity packing
mirror

layout
# # # d # # #
# g p . . h #
# s . x . . d
# . l l . g #
# d # # d # #

goods = basketStack | bales
g floor goods
h floor goods
l floor litter
x ground floorClutter
p floor? patron
s stop
`})))()}var pe;function me(){return(me=e((()=>{pe=`// designed by: Claude
// starter. A big selling room: a counter and wares on the north wall, goods waiting in the middle of the floor.
room bigSellingRoom
tier starter
activity selling
mirror

layout
# # # d # # #
# k p . g h #
# s . . b . d
# . e . x . #
# d # # # d #

wares = hanging | offeringTable
goods = basketStack | bales
k wall counter
g wall wares
h wall? wares
b floor goods
e floor goods
x ground floorClutter
p floor? patron
s stop
`})))()}var he;function ge(){return(ge=e((()=>{he=`// designed by: Claude
// starter. A big storeroom: a jar rack on the north wall, a loaded hand cart in the middle of the floor, the chest at the stop.
room bigStoreroom
tier starter
activity storage
mirror
holds chest

layout
# n # d # n #
# w . x . . #
# s . t t . d
# p . . . g #
# # d # # # #

stock = jarRack | shelf
goods = basketStack | bales
w wall stock
g floor goods
t floor cart
n wallItem? niche
x ground floorClutter
p floor? patron
s stop
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`// designed by: Claude
// starter. A crossing in the cave: the basin stands in the middle and the ways go around it.
room caveBasin
tier starter
mirror

layout
# # d # #
# . . . #
d . b s d
# . . . #
# # d # #

b floor basin
s stop
`})))()}var ye;function be(){return(be=e((()=>{ye=`// designed by: Matthijs
// starter. Fez's stall on the first floor: Fez at the north wall beside his counter, north of the place you stop.
room fezStall
tier starter
activity selling
mirror

layout
# # d c #
# a . k #
d . . s d
# . b . #
# d # d #

k wall counter
s stop
b floor basketStack
a floor scale
c wallItem tallyBoard
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`// designed by: Claude
// starter. Ipi's room in his tomb: his jars on the north wall either side of him, his scribe's desk in the corner, Ipi in front of them, north of the place you stop.
room ipiLedger
tier starter
activity ledger
mirror

layout
# t # # # n #
# k j . i . #
d . . s . . d
# . . . b a #
# # # d # # #

k wall scribeDesk
j wall jarRack
i wall jarRack
t wallItem tallyBoard
n wallItem niche
s stop
a floor weightsTable
b floor scale
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`// designed by: Claude
// starter. The scribe's room: a desk and a shelf of rolls on the north wall, the tally board above them.
room ledgerRoom
tier starter
activity ledger
mirror

layout
# t N n #
# k p h #
d s . . d
# . . . #
# d d d #

k wall scribeDesk
h wall? shelf
t wallItem tallyBoard
n wallItem? niche
N door
p floor? patron unless N
s stop
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`// designed by: Claude
// starter. A packing room on the way through: a basket stack and a bale against the north wall, the floor kept clear.
room packingRoom
tier starter
activity packing
mirror

layout
# # N # #
# g p g #
d s . . d
# . . . #
# d d d #

goods = basketStack | bales
g floor goods
N door
p floor? patron unless N
s stop
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`// designed by: Claude
// starter. The selling room: a counter on the north wall, and an awning or a market table beside it.
room sellingRoom
tier starter
activity selling
mirror

layout
# # N # #
# k p g #
d s . . d
# . . . #
# d d d #

wares = hanging | offeringTable
k wall counter
g wall? wares
N door
p floor? patron unless N
s stop
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`// designed by: Claude
// starter. A storeroom at the end of the way: a jar rack or a shelf on the north wall, the chest at the stop.
room storeroom
tier starter
activity storage
mirror
holds chest

layout
# n d # #
# w . p #
d s . . d
# . . . #
# d d d #

stock = jarRack | shelf
w wall stock
n wallItem? niche
p floor? patron
s stop
`})))()}var je;function Me(){return(Me=e((()=>{je=`// designed by: Claude
// starter. The weighing room: the weights on their table by the wall, the scale standing free beside it.
room weighingRoom
tier starter
activity weighing
mirror

layout
# t N # #
# w p x #
d . . s d
# . . . #
# d d d #

w wall weightsTable
x floor scale
t wallItem? tallyBoard
N door
p floor? patron unless N
s stop
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`// designed by: Claude
// wizard. The tomb's formula: the list of things given away on a stela on the north wall, an offering table before it, a lamp either side, the stop facing it.
room formulaWallWizard
tier wizard

layout
# # n f n # #
# l . o . l #
d . . s . . d
# . . . . . #
# # d # d # #

f wallItem formulaPanel
n wallItem sconce
l wall lamp
o wall offeringTable
s stop
`})))()}export{F as $,ae as A,o as At,X as B,de as C,d as Ct,ce as D,s as Dt,le as E,u as Et,ee as F,U as G,J as H,$ as I,H as J,W as K,Q as L,re as M,i as Mt,ne as N,t as Nt,se as O,c as Ot,te as P,n as Pt,R as Q,Z as R,me as S,m as St,ue as T,l as Tt,G as U,q as V,K as W,B as X,z as Y,L as Z,_e as _,_ as _t,Ae as a,A as at,ge as b,g as bt,De as c,D as ct,we as d,C as dt,I as et,Ce as f,w as ft,be as g,b as gt,ye as h,y as ht,je as i,j as it,ie as j,r as jt,oe as k,a as kt,Ee as l,T as lt,xe as m,S as mt,Pe as n,N as nt,ke as o,k as ot,Se as p,x as pt,V as q,Me as r,M as rt,Oe as s,O as st,Ne as t,P as tt,Te as u,E as ut,ve as v,v as vt,fe as w,f as wt,pe as x,p as xt,he as y,h as yt,Y as z};