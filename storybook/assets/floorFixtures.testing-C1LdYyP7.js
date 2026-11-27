import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_t as t,gt as n,in as r,n as i}from"./siteAssembler-CNzpvYB2.js";import{c as a,s as o}from"./siteTypes-D3fb0A_M.js";import{n as s,r as c}from"./floorFrom-DxIgymAG.js";import{n as l,t as u}from"./prefabNotation-DloUS5My.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),c(),r(),i(),t(),u(),d=[{travel:`e`,back:`w`,step:[0,1]},{travel:`s`,back:`n`,step:[1,0]},{travel:`w`,back:`e`,step:[0,-1]},{travel:`n`,back:`s`,step:[-1,0]}],f=(e,t,n)=>e===`room`?{type:`room`,roomType:`encounter`,dirs:new Set(t),state:n}:{type:`corridor`,dirs:new Set(t),state:n},p=e=>({at:{fromNode:0,launch:1,landing:e+2,toNode:e+3},obstacle:Array.from({length:e},(e,t)=>t+2)}),{at:m,obstacle:h}=p(3),g=(e,t,n,r=`fogged`,i=`fromNode`,a=3)=>{let{at:o,obstacle:s}=p(a),c=a+4,l=c+4,u=e=>e<0?2+c-1:2,d=[e.step[0]===0?2:u(e.step[0]),e.step[1]===0?2:u(e.step[1])],m=t=>[d[0]+e.step[0]*t,d[1]+e.step[1]*t],h=e.step[0]===0?5:l,g=e.step[1]===0?5:l,_=Array.from({length:h},()=>Array.from({length:g},()=>({type:`empty`}))),v=(e,t)=>{let[n,r]=m(e);_[n][r]=t};v(o.fromNode,f(t,[e.travel],r)),v(o.launch,f(`corridor`,[e.back],r));for(let t of s)v(t,{type:`corridor`,dirs:new Set,state:r,obstacle:{dir:e.travel,kind:`zipline`}});return v(o.landing,f(`corridor`,[e.travel],r)),v(o.toNode,f(n,[e.back],r)),{grid:{siteId:`test`,rows:h,cols:g,entrancePos:m(o[i]),exitPos:m(o[i===`fromNode`?`toNode`:`fromNode`]),staircases:{},cells:_},at:m,dropAt:o}},_=(e={})=>t=>({type:`room`,roomType:`encounter`,family:`sumplete`,dirs:new Set(t),state:`fogged`,...e}),v=(e,t={})=>s(e,{R:_(),...t}),y=(e,t={})=>l(`tier expert\n${e}`,`room`,e=>t[e]??(e===`mat`?{cols:1,rows:1,tall:0,ground:!0}:o(e))),b=(e,[t,r],i)=>{let a=n(e,t,r,i,e.siteId);if(!a)throw Error(`${i.name} does not fit at ${t},${r}`);let o=e.cells.map(e=>[...e]);return o[t][r]={...o[t][r],prefabRoom:a},{...e,cells:o}},x=e=>y(`room forkHall
layout
# # n # d # # # #
# w . . . . . . #
d . . . . . . . d
# . p . . . p . #
${e}
# # # # d # # # #
w wall jarRack
n wallItem niche
p floor pillar
s stop`),S=x(`# . . . . . s . #`),x(`# . . . . s . . #`),x(`# . . . s . . . #`),C=[4,6],w=(e={},t=!1)=>v([...t?[`      R`,`      .`,`      .`,`      .`]:[``,``,``,``],`E.....G.....R`,`      .`,`      .`,`      .`,`      .`,`      R`],{G:t=>({type:`room`,roomType:`fork`,dirs:new Set(t),state:`fogged`,...e})}),T=(e={},t=!1)=>b(w(e,t),C,S),E={L:[3,2],T:[3,3]},D=y(`room lChamber
layout
# d # # # #
# . . . . d
# . p p . #
# s . . . #
# # # # # #
p floor bones
s stop`),O=y(`room tFork
layout
# # # # # #
# . . . s #
# . p p . #
d . . . . d
# d # # # #
p floor bones
s stop`),k=(e,t={})=>b(v(e===`L`?[`  E`,`  .`,`  .`,`  G.....R`,``,``]:[``,``,``,`E..G.....R`,`   .`,`   .`,`   R`],{G:n=>({type:`room`,roomType:e===`L`?`chamber`:`fork`,dirs:new Set(n),state:`fogged`,...t})}),E[e],e===`L`?D:O),y(`room vault
holds chest
layout
# # # # #
d . . . #
# . s . #
# # # # #
s stop`),y(`room porch
mirror
layout
# # # # #
# g . s d
# # # # #
g ground mat
s stop`),A={node:[0,0],stand:[1,0]},j=()=>{let e=v([`R`,`.`,`E`]);return{...e,cells:e.cells.map(e=>e.map(e=>e.type===`empty`||e.state===`reachable`?e:{...e,state:`reachable`}))}}})))()}export{g as a,M as c,j as d,A as i,y as l,E as n,k as o,C as r,v as s,d as t,T as u};