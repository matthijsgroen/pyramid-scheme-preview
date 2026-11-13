const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WebMode-D58OaP-F.js","assets/rolldown-runtime-pP25SEvz.js","assets/DeveloperButton-Dt-Yoab2.js","assets/jsx-runtime-dC67yryO.js","assets/index-D-0F48tU.js","assets/preload-helper-hia-hvMv.js","assets/mosaicPieces.generated-D-LIml1X.js","assets/index-CD63iwRa.css","assets/roomEditorUrl-DO1epCOk.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-pP25SEvz.js";import{a as t,n,t as r}from"./DeveloperButton-Dt-Yoab2.js";import{An as i,Ar as a,Br as o,Cr as s,Dn as c,Dr as l,Er as u,Fn as d,Fr as f,Hi as p,Ir as m,Jn as h,Lr as g,Mi as _,Mn as v,Mr as y,Nn as b,Nr as x,Or as S,Pn as C,Pr as w,Rr as T,Tr as E,Xn as D,Yn as O,Zt as k,_ as A,ar as j,gn as M,gr as N,hn as P,i as F,ir as I,jn as L,jr as R,kn as z,kr as B,mn as V,n as ee,or as te,qn as H,r as ne,ss as U,t as re,un as ie,ur as W,vn as ae,wn as oe,wr as se,zr as ce}from"./preload-helper-hia-hvMv.js";import{C as le,S as ue,_ as de,b as fe,c as pe,d as me,f as he,g as ge,h as _e,l as ve,m as ye,p as be,u as xe,x as Se,y as Ce}from"./index-D-0F48tU.js";import{t as we}from"./jsx-runtime-dC67yryO.js";import{c as Te,d as Ee,i as De,l as Oe,r as ke,t as Ae,u as je}from"./roomEditorUrl-DO1epCOk.js";var G=e(t(),1),Me=`THE BASIS
  in -- hall                    a lock is regions joined by corridors; in and out are the way in and the way out
  in -- hall -- out             one line may chain regions, a corridor between each two

IN A CORRIDOR (obstacles: between the dashes, or in place of them)
  in -[S1]- hall                gate: open while S1 is in its second state
  in -[S1:a]- hall              gate: open while S1 is in state a
  in -[A+B]- hall               every owner   ·   -[A|B]- any owner
  hall >> in   in << hall       a drop, one-way along the arrow, taken only with empty hands
  in -[unladen]- hall           a narrow passage, only with empty hands; never on a corridor with a drop
  in -[p1]- hall   in -[p1:empty]- hall    open while a stone rests on p1, or while none does
  in -&> hall                   the nest spot: another lock may be spliced in here, its in at in, its out at hall;
                                one per lock, a plain corridor where nothing nests, ignored beside other items
  in -[Y]- >> hall              one corridor, its items in order from the left region, apart by spaces
  in -[A]--- hall   in ---[A]- hall   aligned left: right after what stands left of it; aligned right: right before
  in --[A]-- hall               centred: room for puzzles either side   ·   -[A]- free: the carve decides
  in -[Y]- hall   hall >> in    two lines on one pair: two corridors side by side

IN A REGION (items: placed @region)
  S1 toggle @s1                 two states a b, back and forth, starts at a
  sluice toggle @hall dry wet   the same, its states named
  T1 activator @hall            off then on, for good: a floor key, or a prize; water and sand never touch it
  T torch @hall   T torch @hall lit   off until lit, or lit from the start; water or sand over its region
                                puts it out, and it can be lit again
  Y fork @in                    a fork puzzle: the gates naming it are its ways
  P sequence hall vault [reset hall-vault]   steps in order; -[P]- opens when done and resets it; reset names the corridor when P opens several
  P procession hall vault [reset hall-vault]   a sequence whose door is a procession board: a tile unlocks its bar;
                                solve the board, then walk the order it shows
  p1 plate @hall   p2 plate @hall stone   a plate, empty or with a stone on it; any stone presses any plate
  P pipe @hall @vault [stone]   a stone pipe: post a stone at one hole, it lies in the other; one stone in it at a time
  hall -[sluice:wet]            region gate: hall impassable unless sluice is wet
  hall *   s2 $   spare ?   corridor -     takes puzzles, a reward, anything, nothing

FROM OFF THE FLOOR
  A outside                     an outside input: held from elsewhere, never worked here; it only arrives, at any time
  in -[A]- hall   hall -[A]     open once A is held; named bare, never A:state; at most three inputs to a lock

COMMENTS
  // comment                    ignored to the end of the line; a lock's file opens with // designed by: name
`,Ne=()=>{let e=[];for(let t of Me.split(`
`)){if(t.trim()===``)continue;if(!t.startsWith(` `)){e.push({heading:t,rows:[]});continue}let{rows:n}=e[e.length-1];if(/^ {20,}\S/.test(t)){n[n.length-1].meaning+=` ${t.trim()}`;continue}let r=t.trim(),i=[...r.matchAll(/ {3,}/g)].filter(e=>r[e.index+e[0].length]!==`·`&&r[e.index-1]!==`·`).at(-1);n.push(i?{syntax:r.slice(0,i.index),meaning:r.slice(i.index+i[0].length)}:{syntax:r,meaning:``})}return e},Pe=`// designed by: you
in -- hall
hall -[H]- out
hall -- side
H toggle @side
side ?
`,Fe=/^\w+$/,Ie={toggle:[`a`,`b`],activator:[`off`,`on`]},Le={"*":`puzzles`,$:`reward`,"?":`free`,"-":`nothing`},Re=/(-+)\[([^\]]*)\](-+)|-&>|-&-|<&-|>>|<<|-+|\w+|-*\[([^\]]*)\]-*|\S/y,ze=/(?:^|[\s<>])(\w+(?:-\w+)+)(?=[\s<>]|$)/,Be=/\[([^\]]*)\]-*\[([^\]]*)\]/,Ve=`an item is -[…]-, >>, << or -&>`,He=e=>e.kind===`gate`?`-[${e.condition}]-`:e.kind===`drop`?e.arrow:`-&>`,Ue=(e,t)=>e===t?e===1?void 0:`center`:e<t?`left`:`right`,We=(e,t)=>{let n=e.match(ze);n&&t(`cannot read a region called "${n[1]}"`);let r=e.match(/\[\s*\[([^\]]*)\]\s*\]/);r&&t(`a gate holds its owners in single brackets: write -[${r[1]}]-`);for(let[n]of e.matchAll(/\S*&>\S*/g)){let e=n.replace(/^\w+/,``).replace(/\w+$/,``);e!==`-&>`&&t(`cannot read "${e}" on a corridor: ${Ve}; items stand apart`)}let i=e.match(Be);i&&t(`items on a corridor stand apart: write -[${i[1]}]- -[${i[2]}]-`);let a=[],o=!0;for(let n=0;n<e.length;){if(/\s/.test(e[n])){o=!0,n++;continue}Re.lastIndex=n;let r=Re.exec(e);n=Re.lastIndex;let i=r[0];(i===`-&-`||i===`<&-`)&&t(`a nest spot is written a -&> b, from the nested lock's in to its out`),r[4]!==void 0&&t(`a gate stands between dashes: write -[${r[4]}]-`);let s=r[1]===void 0?i===`>>`||i===`<<`?{spaced:o,text:i,kind:`item`,item:{kind:`drop`,arrow:i}}:i===`-&>`?{spaced:o,text:i,kind:`item`,item:{kind:`nest`}}:/^-+$/.test(i)?{spaced:o,text:i,kind:`dashes`,count:i.length}:/^\w+$/.test(i)?{spaced:o,text:i,kind:`region`,name:i}:void 0:{spaced:o,text:i,kind:`item`,item:{kind:`gate`,condition:r[2],left:r[1].length,right:r[3].length}};s||t(`cannot read "${e}"`),a.push(s),o=!1}a.forEach((e,n)=>{if(e.kind!==`item`||e.item.kind!==`drop`)return;let[r,i]=[n,n];for(;r>0&&!a[r].spaced&&a[r-1].kind===`dashes`;)r--;for(;i+1<a.length&&!a[i+1].spaced&&a[i+1].kind===`dashes`;)i++;(r<n||i>n)&&t(`cannot read "${a.slice(r,i+1).map(e=>e.text).join(``)}" on a corridor: ${Ve}`)});let s=[],c=[],l=[],u=[];return a.forEach((n,r)=>{if(n.kind===`region`){s.length>0&&(l.length===0&&u.length===0&&t(`cannot read "${e}"`),u.length>0&&(l.length>0||u.length>1||u[0]!==2)&&t(`-- is a bare corridor, exactly two dashes, and carries no items`),c.push(l)),s.push(n.name),l=[],u=[];return}s.length===0&&t(`a line starts and ends with a region`);let i=a[r-1];n.kind===`item`&&i.kind===`item`&&!n.spaced&&t(`items on a corridor stand apart: write ${He(i.item)} ${He(n.item)}`),n.kind===`item`?l.push(n.item):u.push(n.count)}),(l.length>0||u.length>0)&&t(`a line starts and ends with a region`),s.length<2&&t(`cannot read "${e}"`),{regions:s,corridors:c}},Ge=(e,t=`lock`)=>{let n=(e,t)=>{throw Error(`line ${e}: ${t}`)},r=e.split(`
`).map((e,t)=>({n:t+1,line:e.replace(/\/\/.*/,``).trim()})).filter(({line:e})=>e!==``),i=new Map,s=[],c=[],l={},u={},d={},m=new Map,h=[],g=new Map,_=new Map,v=[],y=new Map,b=e=>{let t=e;for(let n=2;Object.hasOwn(l,t)||Object.hasOwn(d,t);n++)t=`${e}#${n}`;return t},x=(e,t)=>(Fe.test(t)||n(e,`cannot read a region called "${t}"`),i.has(t)||i.set(t,t===`in`?`puzzles`:`nothing`),t),S=(e,t)=>{t.includes(`+`)&&t.includes(`|`)&&n(e,`-[${t}]- mixes + and |`);let r=t.split(/[+|]/).map(t=>{let r=t.trim().match(/^(\w+)(?::(\w+))?$/)??n(e,`cannot read owner "${t.trim()}"`);return{owner:r[1],state:r[2]}}),i=r.map(e=>e.owner),a=i.find((e,t)=>i.indexOf(e)!==t);return a&&n(e,`-[${t}]- names ${a} twice`),{list:r,owners:i,mode:t.includes(`|`)?`any`:void 0}},C=(e,t,r,i)=>{t===r&&n(e,`a join leads from ${t} to ${r}`),i.filter(e=>e.kind===`drop`).length>1&&n(e,`a corridor falls once: put a region between two drops`),i.some(e=>e.kind===`nest`)&&c.push({from:t,to:r,n:e});let a={},o=i.flatMap(n=>{if(n.kind===`nest`)return[];if(n.kind===`drop`){let[e,i]=n.arrow===`>>`?[t,r]:[r,t],a=b(`${e}>${i}`);return d[a]={from:e,to:i},[a]}let{list:i,owners:o,mode:s}=S(e,n.condition),c=b(`${t}-${r}`);l[c]={from:t,to:r,owners:o,...s?{mode:s}:{}},u[c]={n:e,list:i};let f=Ue(n.left,n.right);return f&&(a[c]=f),[c]});s.push({between:[t,r],barriers:o,align:a,n:e})},w=e=>m.has(e)||g.has(e)||y.has(e)||v.some(t=>t.id===e),T=(e,t,r)=>{w(t)&&n(e,`${t} is placed twice`),m.set(t,r)};for(let{n:e,line:t}of r){let r;if(r=t.match(/^(\w+)\s+torch\s+@(\w+)((?:\s+\w+)*)$/)){let t=r[3].trim().split(/\s+/).filter(Boolean);(t.length>1||t.length===1&&t[0]!==`lit`)&&n(e,`a torch is off or lit at the start: write ${r[1]} torch @${r[2]} lit`),T(e,r[1],{control:`flame`,in:r[2],states:o,lit:t.length===1,n:e})}else if(r=t.match(/^(\w+)\s+(toggle|activator)\s+@(\w+)((?:\s+\w+)*)$/)){let t=r[2],i=r[4].trim().split(/\s+/).filter(Boolean);i.length!==0&&i.length!==2&&n(e,`a ${t} has two states, not ${i.length}`);let a=i.length>0?i:Ie[t];a[0]===a[1]&&n(e,`${r[1]} names one state twice`),T(e,r[1],{control:t,in:r[3],states:a,n:e})}else if(r=t.match(/^(\w+)\s+fork\s+@(\w+)(.*)$/))r[3].trim()!==``&&n(e,`a fork's states are its ways; write ${r[1]} fork @${r[2]}`),T(e,r[1],{control:`fork-switch`,in:r[2],n:e});else if(r=t.match(/^(\w+)\s+(sequence|procession)\s+(\w+(?:\s+\w+)*?)(?:\s+reset\s+(\S+))?$/)){let t=r[2]===p;T(e,r[1],{control:`sequence`,steps:r[3].trim().split(/\s+/),resetAt:r[4],procession:t,n:e})}else if(r=t.match(/^(\w+)\s+plate\s+@(\w+)(\s+stone)?$/))w(r[1])&&n(e,`${r[1]} is placed twice`),g.set(r[1],{in:r[2],stone:r[3]!==void 0,n:e});else if(r=t.match(/^(\w+)\s+pipe\s+@(\w+)(\s+stone)?\s+@(\w+)(\s+stone)?$/))w(r[1])&&n(e,`${r[1]} is placed twice`),r[3]&&r[5]&&n(e,`a pipe holds one stone at a time: write stone after one hole of ${r[1]}`),v.push({id:r[1],ends:[r[2],r[4]],stone:r[3]?r[2]:r[5]?r[4]:void 0,n:e});else if(r=t.match(/^(\w+)\s+outside$/))w(r[1])&&n(e,`${r[1]} is placed twice`),y.set(r[1],e);else if(/^\w+\s+pipe\b/.test(t))n(e,`a pipe joins two regions: P pipe @hall @vault, stone after the hole holding one`);else if(/^\w+\s+stone\b/.test(t))n(e,`a stone is written on the plate it rests on: p plate @hall stone`);else if(r=t.match(/^(\w+)\s+([$*?-])$/))h.push({region:r[1],appetite:Le[r[2]],n:e});else if(r=t.match(/^(\w+)\s+-\[([^\]]*)\]$/)){let{list:t,owners:n,mode:i}=S(e,r[2]),a=b(`${r[1]}:barred`);l[a]={region:r[1],owners:n,...i?{mode:i}:{}},u[a]={n:e,list:t}}else{let{regions:r,corridors:i}=We(t,t=>n(e,t));i.forEach((t,n)=>C(e,x(e,r[n]),x(e,r[n+1]),t))}}for(let e of[`in`,`out`])if(!i.has(e))throw Error(`the lock never reaches ${e}`);let E=[];for(let{region:e,appetite:t,n:r}of h)i.has(e)||n(r,`no corridor reaches ${e}`),i.set(e,t);let D=v[0];for(let e of v.slice(1))E.push(`line ${e.n}: pipesRepeated: a lock has one pipe, and ${D.id} is one already`);let O=[...g.values()].filter(e=>e.stone).length+(D?.stone===void 0?0:1),k=new Map,A=new Set;for(let[e,t]of Object.entries(l)){let{n:r,list:o}=u[e];`region`in t&&(i.has(t.region)||n(r,`no corridor reaches ${t.region}`),(t.region===`in`||t.region===`out`)&&n(r,`the region holding ${t.region} cannot be barred`));for(let{owner:i,state:c}of o){if(a.includes(i)){O===0&&n(r,`${i} asks about stones, and the lock has none`);continue}if(y.has(i)){c!==void 0&&E.push(`line ${r}: outsideState: an outside input is named bare, and ${e} names ${i}:${c}`);continue}if(D?.id===i){E.push(`line ${r}: pipeOwnsGate: a pipe opens nothing, and ${e} names ${i}`),A.add(i);continue}if(g.has(i)){`region`in t&&g.get(i).in===t.region&&n(r,`${i} stands in ${t.region}, which it would bar`);let a=c??`weighted`;a!==`weighted`&&a!==`empty`&&n(r,`plate ${i} has no state ${a}`);let o=_.get(i)??{weighted:[],empty:[]};o[a].push(e),_.set(i,o);continue}let o=m.get(i);if(!o){A.add(i);continue}if(`region`in t&&`in`in o&&o.in===t.region&&n(r,`${i} stands in ${t.region}, which it would bar`),o.control===`fork-switch`){c&&n(r,`a fork's way is the gate itself: write -[${i}]-`);let t=s.find(t=>t.barriers.includes(e));t&&(t.between[0]===o.in?t.barriers[0]===e:t.between[1]===o.in&&t.barriers.at(-1)===e)||n(r,`fork ${i}'s gate must be the first thing on a join leaving ${o.in}`);continue}let l=c??(o.control===`sequence`?`done`:o.states[1]);(o.control===`sequence`?[`done`]:o.states).includes(l)||n(r,`${i} has no state ${l}`);let u=k.get(i)??{};(u[l]??=[]).push(e),k.set(i,u)}}for(let[,e]of g)i.has(e.in)||n(e.n,`no corridor reaches ${e.in}`);if(D){for(let e of D.ends)i.has(e)||n(D.n,`no corridor reaches ${e}`);D.ends[0]===D.ends[1]&&E.push(`line ${D.n}: pipeInOneRegion: ${D.id}'s holes are both in ${D.ends[0]}`),O===0&&E.push(`line ${D.n}: pipeWithoutStones: ${D.id} carries stones, and the lock has none`)}for(let[e,t]of Object.entries(l)){let r=t.owners.filter(t=>_.get(t)?.weighted.includes(e)).length,i=t.mode===`any`?Math.min(r,1):r;i>O&&n(u[e].n,`${e} needs stones on ${i} plates, the lock has ${O}`)}let j=D?{[D.id]:{ends:D.ends,...D.stone===void 0?{}:{stone:D.stone}}}:{},M=g.size>0||D?{plates:Object.fromEntries([...g].map(([e,t])=>[e,{in:t.in,stone:t.stone,opens:_.get(e)??{weighted:[],empty:[]}}])),...D?{pipes:j}:{}}:void 0,N={};for(let[e,t]of m){for(let e of t.control===`sequence`?t.steps:[t.in])i.has(e)||n(t.n,`no corridor reaches ${e}`);Object.values(l).some(t=>t.owners.includes(e))||E.push(`line ${t.n}: ${e} owns no gate`);let r=k.get(e)??{};if(t.control===`fork-switch`)N[e]={control:`fork-switch`,in:t.in};else if(t.control===`sequence`){let i=(r.done??[]).filter(e=>`from`in l[e]),a;if(t.resetAt===void 0)i.length!==1&&n(t.n,`${e} opens ${i.length===0?`no corridor gate`:`several gates`}: write reset a-b`),a=i[0];else{let r=l[t.resetAt];(!r||`region`in r)&&n(t.n,`reset ${t.resetAt} names no gate between two regions`);let o=Object.keys(l).filter(e=>e===t.resetAt||e.startsWith(`${t.resetAt}#`));a=t.resetAt,o.length>1&&(a=o.find(e=>i.includes(e))??n(t.n,`reset ${t.resetAt}: the corridor carries several gates; ${e} opens none of them`))}N[e]={control:`sequence`,steps:t.steps.map(e=>({in:e})),resetAt:a,opens:r,...t.procession?{procession:!0}:{}}}else if(t.control===`flame`)N[e]={control:`flame`,in:t.in,starts:t.lit?`on`:`off`,opens:{off:r.off??[],on:r.on??[]}};else{let[n,i]=t.states;N[e]={control:t.control,in:t.in,starts:n,opens:{[n]:r[n]??[],[i]:r[i]??[]}}}}for(let[e,t]of y)Object.values(l).some(t=>t.owners.includes(e))||E.push(`line ${t}: ${e} owns no gate`);for(let[e,t]of[...y].slice(3))E.push(`line ${t}: outsideTooMany: a lock carries at most 3 outside inputs, and ${e} is one more`);let P=s.map(e=>e.barriers.length>0?{between:e.between,barriers:e.barriers,...Object.keys(e.align).length>0?{align:e.align}:{}}:e.between),F={name:t,regions:Object.fromEntries([...i].map(([e,t])=>[e,{takes:t}])),connections:P,gates:l,...Object.keys(d).length>0?{oneWays:d}:{},mechanics:N,...M?{weights:M}:{},in:`in`,out:`out`,...c.length>0?{nestSpot:{from:c[0].from,to:c[0].to}}:{},...y.size>0?{inputs:[...y.keys()]}:{}};if(M){let{opens:e}=B(F);for(let[t,r]of Object.entries(l))r.owners.some(e=>f(F,e))&&!Object.values(e).some(e=>e.includes(t))&&n(u[t].n,`gate ${t}: its stones never open it`)}for(let e of ce(F))E.push(`line ${u[e.barrier].n}: ${e.type===`unladenOnDrop`?`a drop already takes empty hands`:`unladen stands alone, as a narrow passage`}`);for(let e of c.slice(1))E.push(`line ${e.n}: nestSpotsRepeated: a lock has one nest spot, and ${c[0].from} -&> ${c[0].to} is one already`);let I=c[0];return I&&s.filter(e=>[I.from,I.to].every(t=>e.between.includes(t))).length>1&&E.push(`line ${I.n}: nestSpotShared: ${I.from} and ${I.to} have another connection, and a nest spot is a corridor of its own`),{lock:F,drafts:[...A],refused:E}},K=null,Ke=class extends Error{},qe=(e,t)=>{let n=e.lockNesting??[],r=new Set(n.map(e=>e.instance)),i=new Map(n.map(e=>[e.instance,e.host])),a=new Map,o=(e,t)=>{let n=t!==void 0&&r.has(t)?t:K;for(let o=e;o!==void 0&&o!==t&&r.has(o);o=i.get(o))a.has(o)||a.set(o,n)},{of:s}=ae(e),c=new Map;e.cells.forEach((e,t)=>e.forEach((e,n)=>{let r=s.get(`${t},${n}`);r===void 0||e.type!==`room`&&e.type!==`corridor`||e.region===void 0||c.set(r,(c.get(r)??new Set).add(e.region))}));let l=[];for(let{instance:e,stones:t}of n)t?.case===`shared`||t?.case===`passThrough`&&t.oneWays?(o(e,t.pool),l.push(t.pool)):t?.case===`contained`&&o(e,void 0);if((t.emptyHands??[]).length>0)for(let{instance:e,regions:r}of n){let n=new Set(r),i=e=>[...c.get(e)??[]].some(e=>n.has(e));(t.oneWays??[]).some(({from:e,to:t})=>i(e)||i(t))&&o(e,void 0)}let u=e=>{let t=e;for(;t!==K&&a.has(t);)t=a.get(t);return t},d=new Map;for(let e of[...l,...a.keys()]){let t=r.has(e)?u(e):K,n=d.get(t)??[];n.includes(e)||d.set(t,[...n,e])}let f=new Map(n.flatMap(e=>e.regions.map(t=>[t,u(e.instance)]))),p=new Map(n.map(e=>[e.instance,r.has(e.host)?u(e.host):K])),m=e=>e.startsWith(`door `),h=(e,t)=>{if(e.size>1)throw new Ke(`${t} belongs to more than one lock`);return[...e][0]},g=new Map;for(let e of t.regions)g.set(e,h(new Set([...c.get(e)??[]].map(e=>f.get(e)??K)),e)??K);let _=new Map;for(let[e,n]of Object.entries(t.mechanisms))_.set(e,h(new Set([...n.transitions,...n.entries??[]].map(e=>g.get(e.at))),e));let v=e=>h(new Set(Object.values(t.gates).filter(t=>t.from===e||t.to===e).flatMap(e=>e.owners.map(e=>_.get(e))).filter(e=>e!==void 0)),e);for(let e of t.regions)m(e)&&g.set(e,v(e)??g.get(e));let y=new Map;for(let[e,n]of Object.entries(t.gates))y.set(e,h(new Set(n.owners.flatMap(e=>_.has(e)?[_.get(e)]:[]).filter(e=>e!==void 0)),e)??g.get(m(n.to)?n.to:n.from));for(let{mechanism:e}of t.arrivals??[])h(new Set(Object.entries(t.gates).filter(([,t])=>t.owners.includes(e)).map(([e])=>y.get(e))),e);return{lock:t,regionOwner:g,gateOwner:y,mechanismOwner:_,portOf:e=>{let n=t.regions.filter(t=>!m(t)&&!t.startsWith(`tile `)&&c.get(t)?.has(e));if(n.length!==1)throw new Ke(`${e} is not one region of the floor`);return n[0]},within:(e,t)=>{for(let n=e;n!==void 0;n=n===K?void 0:p.get(n))if(n===t)return!0;return!1},fusedInto:a,pools:d}},Je=(e,t,n)=>{let{lock:r}=e,i=new Set(r.regions.filter(n=>e.within(e.regionOwner.get(n),t))),a={},o=[];for(let[n,i]of Object.entries(r.gates)){let r=e.gateOwner.get(n);e.within(r,t)&&(r===t?a[n]=i:o.push({a:i.from,b:i.to}))}let s=new Set(Object.values(a).flatMap(e=>e.owners)),c=Object.fromEntries(Object.entries(r.mechanisms).filter(([n])=>e.mechanismOwner.get(n)===void 0?s.has(n):e.mechanismOwner.get(n)===t)),l=new Set(i);for(let e of Object.values(a))l.add(e.from).add(e.to);let u=t===K?void 0:n?.find(e=>e.instance===t),d=u?e.portOf(u.in):void 0,f=(r.emptyHands??[]).filter(({mechanism:e})=>Object.hasOwn(c,e)),p=(r.torches??[]).filter(({mechanism:e})=>Object.hasOwn(c,e)).map(({mechanism:e,coveredBy:t})=>({mechanism:e,coveredBy:t.filter(e=>Object.hasOwn(a,e))})),m=(r.crossings??[]).filter(e=>l.has(e)),h=(r.arrivals??[]).filter(({mechanism:e})=>Object.hasOwn(c,e));return{regions:r.regions.filter(e=>l.has(e)),gates:a,mechanisms:c,oneWays:(r.oneWays??[]).filter(({from:e,to:t})=>i.has(e)&&i.has(t)),passages:[...(r.passages??[]).filter(({a:e,b:t})=>i.has(e)&&i.has(t)),...o],...f.length>0?{emptyHands:f}:{},...p.length>0?{torches:p}:{},...m.length>0?{crossings:m}:{},...h.length>0?{arrivals:h}:{},in:d??r.in,out:d??r.out}},Ye=(e,t,n,r,a)=>{let o=i(n);if(o)return{failure:{type:`entangled`,problem:o}};let s=new Set(e.lock.regions.filter(n=>e.within(e.regionOwner.get(n),t))),c=new Set([n.in]),l=(e,t)=>{s.has(e)!==s.has(t)&&c.add(s.has(e)?e:t)};for(let[n,r]of Object.entries(e.lock.gates))if(e.within(e.gateOwner.get(n),t))for(let e of[r.from,r.to])s.has(e)||c.add(e);else l(r.from,r.to);for(let{a:t,b:n}of e.lock.passages??[])l(t,n);for(let{from:t,to:n}of e.lock.oneWays??[])l(t,n);let u=C(n,r,a);if(u===`tooLarge`)return{failure:{type:`tooLarge`}};let{order:d,edges:f}=u,p=new Map,m=(e,t)=>p.set(e,[...p.get(e)??[],t]);for(let e of Object.values(n.gates))m(e.from,e.to),m(e.to,e.from);for(let{a:e,b:t}of n.passages??[])m(e,t),m(t,e);for(let{from:e,to:t}of n.oneWays??[])m(e,t);let h=e=>{let t=new Set([e]),n=[e];for(let e=0;e<n.length;e++)for(let r of p.get(n[e])??[])t.has(r)||(t.add(r),n.push(r));return t},g=d.map(()=>[]);f.forEach((e,t)=>e.forEach(e=>g[e].push(t)));let _=new Map;for(let e of c){let t=new Set,n=[];d.forEach((r,i)=>{r.region===e&&(t.add(i),n.push(i))});for(let e=0;e<n.length;e++)for(let r of g[n[e]])t.has(r)||(t.add(r),n.push(r));_.set(e,t)}let y=new Map;for(let e=0;e<d.length;e++){let t=d[e].region,n=y.get(t)??h(t);y.set(t,n);for(let t of c)if(n.has(t)&&!_.get(t).has(e))return{failure:{type:`notFree`,at:d[e],cannotReach:t}}}let b=v(n,d,g);return b?{failure:{type:`regionLost`,...b}}:{states:d.length}},Xe=(e,t,n,r)=>{let i=qe(e,t),a={},o=[],s=(e,t)=>{let n=i.pools.get(e);return n?{type:`pooled`,instances:n,failure:t}:t};for(let{instance:t}of e.lockNesting??[]){if(i.fusedInto.has(t))continue;let c=Je(i,t,e.lockNesting),l=Ye(i,t,c,n,r);if(`failure`in l)return{ok:!1,failure:{type:`nested`,instance:t,failure:s(t,l.failure)}};a[t]=l.states,o.push({instance:t,spec:c})}return o.push({instance:void 0,spec:Je(i,K,e.lockNesting)}),{ok:!0,levels:o,counts:a,pooled:s}},Ze=(e,t,n,r)=>{try{return Xe(e,t,n,r)}catch(e){if(e instanceof Ke)return{ok:!1,failure:{type:`entangled`,problem:e.message}};throw e}},Qe=(e,t)=>{let n=e.mechanisms[t];return n.transitions.length===0&&(n.entries??[]).length===0&&!(e.arrivals??[]).some(e=>e.mechanism===t)},$e=(e,t=z,n={})=>{let r=new Set(e.outsideLocks),i={...e,mechanisms:Object.fromEntries(Object.entries(e.mechanisms).map(([t,n])=>[t,Qe(e,t)?{...n,opens:Object.fromEntries(n.states.map(e=>[e,(n.opens[e]??[]).filter(e=>r.has(e))]))}:n]))},a=C(i,t,n);if(a===`tooLarge`)return;let o=new Set(a.order.map(e=>e.region));return Object.keys(e.mechanisms).sort().find(t=>{let n=e.mechanisms[t],r=[...n.transitions,...n.entries??[]].map(e=>e.at);return r.length>0&&!r.some(e=>o.has(e))})},et=(e,{maxStates:t=z,arriving:n,reentry:r=!1}={})=>{let i=M(e,{arriving:n});if(!i)return;if(!e.lockNesting||e.lockNesting.length===0){let e=d(i,t,{reentry:r});if(!e.sound)return e;let n=$e(i,t,{reentry:r});return n?{sound:!1,failure:{type:`leansOffFloor`,mechanism:n}}:e}let a=Ze(e,i,t,{reentry:r});if(!a.ok)return{sound:!1,failure:a.failure};let o=d(a.levels[a.levels.length-1].spec,t,{reentry:r});if(!o.sound)return{sound:!1,failure:a.pooled(K,o.failure)};for(let{instance:e,spec:n}of a.levels){let i=$e(n,t,{reentry:r});if(!i)continue;let o={type:`leansOffFloor`,mechanism:i};return{sound:!1,failure:e===void 0?a.pooled(K,o):{type:`nested`,instance:e,failure:o}}}return{sound:!0,states:o.states,nested:a.counts}},q=_[0].id,tt={toggle:[`handle`],activator:[`torch`],flame:[`torch`],sequence:[`pressure-plate`],"fork-switch":[`lightbeamSwitch`],"one-way":[`zipline`],"region-barrier":[`water`,`sand`],weights:[`stonePlate`],pipe:[`stonePipe`],unladen:[`narrowPassage`]},nt=()=>Object.fromEntries(Object.entries(tt).map(([e,[t]])=>[e,t])),rt=(e,t,n)=>({pathPuzzles:0,difficulty:`expert`,end:`treasure`,exitOrStaircase:`exit`,sideSections:[],locks:[{lock:y(e)},...n?[{lock:y(n),as:`inner`,inside:{instance:e.name}}]:[]],realisations:t}),it=(e,t,n=[])=>{let r=_e(q,e,t,0);if(r.success)return{status:`found`,seed:t,grid:r.grid};let i=n.length>0?n:r.reasons;return t+1>=200?{status:`refused`,reasons:i}:{status:`carving`,tried:t+1,reasons:i}},J=we(),at=e=>({journeyId:e,levelNr:1,completionCount:0,active:!0,exploredCells:{},positionKey:null,standingKey:null,interiorLevelNr:null,mechanismStates:{}}),ot=e=>({id:e,exterior:`pyramid`,difficulty:`starter`,levelCount:1,journeyLength:`short`,name:e,lengthLabel:`short`}),st=e=>{let[t,n]=(0,G.useState)(()=>[at(e)]);return{journeys:(0,G.useMemo)(()=>({...A({journeys:t,setJourneys:n,journeyData:[ot(e)]}),getPurchasedShopSlots:()=>new Set}),[t,e]),doc:t[0],reset:()=>n([at(e)])}},ct=e=>{let[t,n]=(0,G.useState)(null);return(0,G.useEffect)(()=>{if(!e)return;let t,r=(i,a)=>{let o=it(e,i,a);if(o.status===`found`)return n({config:e,state:{status:`found`,seed:i,base:o.grid}});if(o.status===`refused`)return n({config:e,state:o});n({config:e,state:{status:`carving`,tried:o.tried}}),t=setTimeout(()=>r(i+1,o.reasons),0)};return t=setTimeout(()=>r(0,[]),0),()=>clearTimeout(t)},[e]),e&&t?.config===e?t.state:null},lt=({config:e,seed:t,base:n})=>{let{journeys:r,doc:i,reset:a}=st(q),o=ne(),s=ee(),c=ue(r,q),l=Se(r,q),{grid:u,explorerPos:d,openGateKeys:f,baseGrid:p,heldKeys:m}=ge(q,e,t,0,r.getExploredCells(q),i.positionKey,0,void 0,void 0,c,i.standingKey,l),h=ye({journeys:r,journeyId:q,floor:p,currentFloor:0,heldKeys:m}),g=(0,G.useMemo)(()=>new Set([...u?oe(u):[],...f]),[u,f]),_=he({journeys:h,journeyId:q,levelNr:1,currentFloor:0,difficulty:e.difficulty,grid:u,ownedKeys:g,onReward:()=>{}}),{ride:v,squeeze:y,playTraversal:b}=me(),{onCellClick:x,prompt:S,notice:C,explorerHidden:w,waypoint:T}=pe({journeys:h,journeyId:q,siteConfig:[e],seed:t,currentFloor:0,grid:u,explorerPos:d,onEncounter:_.open,onExitReached:()=>{},playTraversal:b}),E=xe(),D=ve(),O=(0,G.useMemo)(()=>u?le(u,d):null,[u,d]),k=(0,G.useMemo)(()=>et(n),[n]);if(!u)return(0,J.jsx)(`p`,{"data-playground-refused":``,children:`the floor does not assemble`});let A=_.family?.Component??null;return(0,J.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,J.jsxs)(`div`,{className:`flex gap-4 text-sm text-white/80`,children:[(0,J.jsx)(`button`,{type:`button`,onClick:a,children:`Start again`}),(0,J.jsxs)(`span`,{children:[`seed `,t]}),(0,J.jsx)(`span`,{children:k?k.sound?`walks sound`:`does not walk sound`:`no lock walk`}),(0,J.jsx)(`span`,{"data-playground-states":``,children:JSON.stringify(i.mechanismStates??{})})]}),(0,J.jsx)(`div`,{className:`relative h-160 w-full`,children:(0,J.jsx)(de,{grid:O??u,dressedOn:p??void 0,onCellClick:x,explorerPos:d,waypoint:T,explorerHidden:w,ride:v,squeeze:y,currentFloor:0,ownedKeys:g,mechanismStates:c,prompt:S&&{label:E(S),at:S.at,onTake:S.take},notice:C&&{label:D,at:C.at},className:`size-full`})}),_.isOpen&&A&&_.ctx&&(0,J.jsx)(F,{tileset:_.ctx.tileset,children:(0,J.jsx)(be,{value:_.roomKey,children:(0,J.jsx)(A,{puzzle:_.puzzle,ctx:_.ctx,progression:o,journeys:h,inventory:s,applyReward:()=>{},onSolved:_.solved,onCancel:_.cancel})})})]})},ut=({locks:e,initial:t,nest:n})=>{let r=(0,G.useMemo)(()=>Object.keys(e).sort(),[e]),[i,a]=(0,G.useState)(t&&t in e?t:r[0]),[o,s]=(0,G.useState)(nt),c=(0,G.useMemo)(()=>{try{return{ok:!0,...Ge(e[i],i)}}catch(e){return{ok:!1,message:e.message}}},[e,i]),l=(0,G.useMemo)(()=>{if(n)try{return{ok:!0,...Ge(e[n],n)}}catch(e){return{ok:!1,message:e.message}}},[e,n]),u=(0,G.useMemo)(()=>c.ok&&(l===void 0||l.ok)?rt(c.lock,o,l?.lock):null,[c,l,o]),d=(0,G.useMemo)(()=>[...c.ok?[...c.drafts]:[],...l?.ok?[...l.drafts]:[]],[c,l]),f=[...c.ok?c.refused:[],...l?.ok?l.refused:[]],p=ct(d.length>0?null:u),m=l&&!l.ok?l.message:c.ok?f.length>0?f.join(`; `):p?.status===`refused`?JSON.stringify(p.reasons):void 0:c.message;return(0,J.jsxs)(`div`,{className:`flex h-(--screen-height) flex-col gap-2 overflow-auto bg-neutral-900 p-4 text-white`,children:[(0,J.jsxs)(`div`,{className:`flex flex-wrap gap-4 text-sm`,children:[(0,J.jsxs)(`label`,{children:[`lock`,` `,(0,J.jsx)(`select`,{value:i,onChange:e=>a(e.target.value),className:`text-black`,children:r.map(e=>(0,J.jsx)(`option`,{children:e},e))})]}),Object.entries(tt).map(([e,t])=>(0,J.jsxs)(`label`,{children:[e,` `,(0,J.jsx)(`select`,{value:o[e],onChange:t=>s(n=>({...n,[e]:t.target.value})),className:`text-black`,children:t.map(e=>(0,J.jsx)(`option`,{children:e},e))})]},e))]}),d.length>0&&(0,J.jsxs)(`p`,{className:`text-xs text-amber-300`,children:[`drafts, not buildable: `,d.join(`, `)]}),p?.status===`carving`&&(0,J.jsxs)(`p`,{className:`text-xs text-white/60`,children:[`carving, `,p.tried,` seeds tried`]}),m===void 0?p?.status===`found`&&u&&(0,J.jsx)(lt,{config:u,seed:p.seed,base:p.base},`${i}|${JSON.stringify(o)}`):(0,J.jsx)(`pre`,{"data-playground-refused":``,className:`text-xs whitespace-pre-wrap text-red-300`,children:m})]})},dt=`·`,ft=`rest`,pt=`draft`,mt=e=>e.includes(`|`),Y=e=>e.replace(/(\w+)\|(\w+)#[\d.]+/g,`between $1 and $2`).replaceAll(`, ${dt} at open`,``),ht=(e,t=[])=>{let{weights:n}=e,r=t=>{let n=t.filter(t=>!f(e,t));return n.length<t.length?[...n,`⚖`]:n},i=Object.keys(e.regions),a={},o=[],s=new Map,c=new Map,l=[],u=Object.entries(e.gates).filter(([,e])=>w(e)),d=new Set(e.connections.flatMap(e=>R(e))),p=Object.entries(e.oneWays??{}).flatMap(([e,{from:t,to:n}])=>d.has(e)?[]:[{between:[t,n],barriers:[e]}]);[...e.connections,...p].forEach((t,n)=>{let[d,f]=m(t),p=R(t).map(t=>({kind:Object.hasOwn(e.oneWays??{},t)?`oneWay`:`gate`,id:t})),h=(t,n)=>t.kind===`oneWay`&&e.oneWays[t.id].to===n;for(let[e,t]of u)if(w(t)){if(t.region===f){let t=p.at(-1);p.splice(t&&h(t,f)?p.length-1:p.length,0,{kind:`region`,id:e})}if(t.region===d){let t=p[0];p.splice(t&&h(t,d)?1:0,0,{kind:`region`,id:e})}}if(p.length===0){a[`${d}~${f}#${n}`]={from:d,to:f,owners:[dt]},l.push(`${d}~${f}#${n}`);return}let g=[d,...p.slice(1).map((e,t)=>`${d}|${f}#${n}.${t+1}`),f];i.push(...g.slice(1,-1)),p.forEach((t,i)=>{let[l,u]=[g[i],g[i+1]];if(t.kind===`oneWay`){o.push(e.oneWays[t.id].from===d?{from:l,to:u}:{from:u,to:l});return}let f=e.gates[t.id],p=t.kind===`region`?`${t.id}@${n}`:t.id;a[p]={from:l,to:u,owners:r(f.owners),...f.mode===`any`?{mode:`any`}:{}},s.set(t.id,[...s.get(t.id)??[],p]),t.kind===`gate`&&c.set(t.id,[l,u])})});let g=(e=[])=>e.flatMap(e=>s.get(e)??[]),_=(t,n)=>{if(n.control===`fork-switch`){let r=[ft,...Object.entries(e.gates).filter(([,e])=>!w(e)&&e.owners.includes(t)).map(([e])=>e)];return{states:r,initial:ft,opens:Object.fromEntries(r.map(e=>[e,e===ft?[]:[e]])),transitions:r.flatMap(e=>r.filter(t=>t!==e).map(t=>({from:e,to:t,at:n.in})))}}if(n.control===`sequence`){let e=n.steps.length,r=O(e),i=H(e);return{states:r,initial:H(0),opens:Object.fromEntries(r.map(e=>[e,e===i?g(n.opens.done):[]])),transitions:(c.get(n.resetAt)??[]).flatMap(t=>h(e).map(e=>({from:e,to:H(0),at:t}))),entries:D(n.steps.map(e=>e.in)),goal:{state:i,label:`sequence ${t}`}}}if(n.control===`flame`)return{states:[`off`,`on`],initial:n.starts,opens:{off:g(n.opens.off),on:g(n.opens.on)},transitions:[{from:`off`,to:`on`,at:n.in}]};let r=Object.keys(n.opens),i=r.find(e=>e!==n.starts);return{states:r,initial:n.starts,opens:Object.fromEntries(r.map(e=>[e,g(n.opens[e])])),transitions:n.control===`toggle`?[{from:n.starts,to:i,at:n.in},{from:i,to:n.starts,at:n.in}]:[{from:n.starts,to:i,at:n.in}]}},v=Object.fromEntries(Object.entries(e.mechanics).map(([e,t])=>[e,_(e,t)])),y=[];for(let t of e.inputs??[]){let n=Object.entries(e.gates).flatMap(([e,{owners:n}])=>n.includes(t)?[e]:[]),{mechanism:r,arrival:i}=b(t,g(n));v[t]=r,y.push(i)}for(let e of t)v[e]={states:[pt],initial:pt,opens:{[pt]:[]},transitions:[]};l.length>0&&(v[dt]={states:[`open`],initial:`open`,opens:{open:l},transitions:[]}),n&&(v[`⚖`]=gt(e,g));let x=n?[{mechanism:`⚖`,notIn:B(e).carrying}]:void 0,S=Object.entries(e.mechanics).flatMap(([e,t])=>t.control===`flame`?[{mechanism:e,coveredBy:u.flatMap(([e,n])=>w(n)&&n.region===t.in?s.get(e)??[]:[])}]:[]);return{regions:i,gates:a,mechanisms:v,oneWays:o,in:e.in,out:e.out,...x?{emptyHands:x}:{},...S.length>0?{torches:S}:{},...y.length>0?{arrivals:y}:{}}},gt=(e,t)=>{let{states:n,initial:r,moves:i,opens:a}=B(e);return{states:n,initial:r,opens:Object.fromEntries(n.map(e=>[e,t(a[e])])),transitions:i.map(t=>({from:t.from,to:t.to,at:`plate`in t?e.weights.plates[t.plate].in:S(t.hole)}))}},_t=e=>{let t=e.weights?B(e):void 0;return Object.entries(e.gates).filter(([n,r])=>{let i=r.owners.filter(t=>f(e,t)),a=[...t&&i.length>0?[t.opens[t.initial].includes(n)]:[],...r.owners.filter(e=>!i.includes(e)).map(t=>{let r=e.mechanics[t];return r!==void 0&&`starts`in r&&(r.opens[r.starts]??[]).includes(n)})];return r.mode===`any`?a.some(Boolean):a.every(Boolean)}).map(([e])=>e)},vt=e=>Object.entries(e.gates).filter(([,e])=>e.mode!==`any`&&e.owners.length>1).map(([e,{owners:t}])=>({gate:e,owners:t})),yt=1,bt=2,xt=4,St=8,Ct={5:`│`,10:`─`,[yt]:`│`,[xt]:`│`,[St]:`─`,[bt]:`─`,6:`┌`,12:`┐`,3:`└`,9:`┘`,7:`├`,13:`┤`,14:`┬`,11:`┴`,15:`┼`},wt={5:`╎`,10:`╌`,6:`╭`,12:`╮`,3:`╰`,9:`╯`},X=[{dx:0,dy:-1,out:yt,back:xt,arrow:`▲`},{dx:1,dy:0,out:bt,back:St,arrow:`▶`},{dx:0,dy:1,out:xt,back:yt,arrow:`▼`},{dx:-1,dy:0,out:St,back:bt,arrow:`◀`}],Tt=5,Et=4,Dt=3,Ot=e=>{let t=t=>e.edges[t].token,n=t=>e.boxes[t],r=new Map;for(let[t,{from:n,to:i}]of Object.entries(e.edges))r.set(n,[...r.get(n)??[],{to:i,gate:t}]),r.set(i,[...r.get(i)??[],{to:n,gate:t}]);let i=new Map,a=new Set([e.in]),o=[e.in];for(;o.length>0;){let e=o.shift();for(let{to:t,gate:n}of r.get(e)??[])a.has(t)||(a.add(t),i.set(t,{of:e,gate:n}),o.push(t))}let s=[];for(let t=a.has(e.out)?e.out:e.in;t;t=i.get(t)?.of)s.unshift(t);let c=new Map;for(let t=!0;t;){t=!1;for(let{from:n,to:r}of e.drops)a.has(r)||c.has(r)||!(a.has(n)||c.has(n))||(c.set(r,n),t=!0)}let l=[...s,...e.regions.filter(e=>!a.has(e)&&!c.has(e))],u=new Map,d=0,f=(e,t)=>{let n=(r.get(e)??[]).map(e=>e.to).filter(t=>i.get(t)?.of===e&&!s.includes(t));n.push(...[...c].filter(([,t])=>t===e).map(([e])=>e));let a=d;n.length===0&&d++;for(let e of n)f(e,t+1);u.set(e,{col:a,level:t})};l.forEach((e,t)=>{t>0&&d===u.get(l[t-1]).col+1&&d++,f(e,0)});let p=Math.max(...[...u.values()].map(e=>e.level)),m=d,h=Array(m).fill(0);for(let t of e.regions){let{col:e}=u.get(t);h[e]=Math.max(h[e],n(t).length)}let g=Array(m).fill(Et),_=[...i].filter(([e,{of:t}])=>u.get(e).level===u.get(t).level),v=e=>5+h.slice(0,e).reduce((e,t,n)=>e+t+g[n],0),y=e=>{let{col:t}=u.get(e);return v(t)+Math.floor(h[t]/2)},b=e=>{let t=n(e).length;return{x:y(e)-Math.floor(t/2),w:t}};for(let e=!0;e;){e=!1;for(let[n,{of:r,gate:i}]of _){let[a,o]=[b(r),b(n)],[s,c]=a.x<=o.x?[a,o]:[o,a],l=t(i).length+4-(c.x-(s.x+s.w));if(l<=0)continue;let[d,f]=[u.get(r).col,u.get(n).col];g[Math.max(Math.min(d,f),Math.max(d,f)-1)]+=l,e=!0}}let x=v(m)+Dt+2,S=p*Tt+1+6,C=e=>Dt+(p-u.get(e).level)*Tt,w=Array.from({length:S},()=>Array(x).fill(void 0)),T=Array.from({length:S},()=>Array(x).fill(0)),E=Array.from({length:S},()=>Array(x).fill(0)),D=(e,t,n)=>[...n].forEach((n,r)=>w[t][e+r]=n),O=(e,t,n,r)=>{let[i,a]=[Math.sign(n-e),Math.sign(r-t)],o=X.find(e=>e.dx===i&&e.dy===a);for(let s=e,c=t;s!==n||c!==r;s+=i,c+=a)T[c][s]|=o.out,T[c+a][s+i]|=o.back},k=new Map;for(let t of e.regions){let e=n(t),r=y(t)-Math.floor(e.length/2);k.set(t,{x:r,y:C(t),w:e.length})}for(let[e,{of:n,gate:r}]of i){let[i,a,o,s]=[y(e),C(e),y(n),C(n)];if(s===a){let[i,o]=[k.get(n),k.get(e)];O(i.x+i.w,a,o.x-1,a);let s=t(r);D(Math.floor((i.x+i.w+o.x-s.length)/2),a,s);continue}let c=s-2;O(i,a+1,i,c),O(i,c,o,c),O(o,c,o,s-1),D(i,a+2,t(r))}for(let[e,{x:t,y:r}]of k)D(t,r,n(e));D(k.get(e.in).x-2,C(e.in),`→`);let A=k.get(e.out);D(A.x+A.w+1,A.y,`→`);let j=(e,t)=>e>=0&&t>=0&&e<x&&t<S&&w[t][e]===void 0&&T[t][e]===0&&E[t][e]===0,M=e=>{let{x:t,y:n,w:r}=k.get(e),i=[[t-1,n],[t+r,n]];for(let e=0;e<r;e++)i.push([t+e,n-1],[t+e,n+1]);return i.filter(([e,t])=>j(e,t))},N=[],P=(e,t)=>{let n=new Set(M(t).map(([e,t])=>`${e},${t}`)),r=M(e).map(([e,t])=>({x:e,y:t,dir:-1,cost:0})),i=new Map;for(;r.length>0;){r.sort((e,t)=>e.cost-t.cost);let e=r.shift(),t=`${e.x},${e.y},${e.dir}`;if(!((i.get(t)??1/0)<=e.cost)){if(i.set(t,e.cost),n.has(`${e.x},${e.y}`)){let t=[];for(let n=e;n;n=n.prev)t.unshift(n);return t}X.forEach((t,n)=>{let[i,a]=[e.x+t.dx,e.y+t.dy],o=e.dir!==-1&&e.dir!==n?4:0;j(i,a)&&r.push({x:i,y:a,dir:n,cost:e.cost+1+o,prev:e})})}}},F=(e,t)=>{let{x:n,y:r,w:i}=k.get(t);return X.find(t=>{let[a,o]=[e.x+t.dx,e.y+t.dy];return o===r&&a>=n&&a<n+i})},I=(e,t)=>e.forEach((n,r)=>{for(let i of[e[r-1],e[r+1]])i&&(t[n.y][n.x]|=X.find(e=>e.dx===i.x-n.x&&e.dy===i.y-n.y).out)}),L=(e,t)=>{for(let n=0;n<e.length;n++){let r=n;for(;r+1<e.length&&e[r+1].y===e[n].y;)r++;if(!(r-n+1<t.length+2))return D(Math.min(e[n].x,e[r].x)+Math.floor((Math.abs(e[r].x-e[n].x)+1-t.length)/2),e[n].y,t),!0}return!1};for(let[n,{from:r,to:a}]of Object.entries(e.edges)){if(i.get(a)?.gate===n||i.get(r)?.gate===n)continue;let o=P(r,a);if(!o){N.push(`${r} -[${t(n)}]- ${a}`);continue}I(o,T);let[s,c]=[o[0],o[o.length-1]];T[s.y][s.x]|=F(s,r).out,T[c.y][c.x]|=F(c,a).out;let l=t(n);L(o,l)||e.notes.push(`${r} -[${l}]- ${a}`)}for(let{from:t,to:n,token:r}of e.drops){let i=P(t,n);if(!i){N.push(`${t} ╌▶ ${n}`);continue}I(i,E);let[a,o]=[i[0],i[i.length-1]];i.length>1&&(E[a.y][a.x]|=F(a,t).out),w[o.y][o.x]=F(o,n).arrow,r!==void 0&&!L(i,r)&&e.notes.push(`${t} >> -[${r}]- ${n}`)}let R=w.map((e,t)=>e.map((e,n)=>e??(T[t][n]?Ct[T[t][n]]:E[t][n]?wt[E[t][n]]??`┼`:` `)).join(``).trimEnd());for(;R[0]===``;)R.shift();for(;R[R.length-1]===``;)R.pop();let z=Math.min(...R.filter(Boolean).map(e=>e.length-e.trimStart().length)),B=`■ shut at the start   □ open   ▒ region barred   ╌▶ one-way   ↺ reset   ⊙ plate   ◉ plate with a stone   ${e.pipe?`○ pipe hole   ● hole with a stone   `:``}Name:state opens it`;return[...R.map(e=>e.slice(z)),``,...e.notes,B,...N.map(e=>`no room to draw without crossing: ${e}`)].join(`
`)},kt=(e,t)=>{let n=new Set(_t(e)),r=n=>{let r=e.gates[n],i=r=>{let i=e.mechanics[r];return t.includes(r)?`${r}?`:i?i.control===`fork-switch`||i.control===`sequence`?r:`${r}:${Object.keys(i.opens).filter(e=>i.opens[e].includes(n)).join(`/`)}`:e.weights?.plates[r]?.opens.empty.includes(n)?`${r}:empty`:r},a=Object.values(e.mechanics).some(e=>e.control===`sequence`&&e.resetAt===n)?`↺`:``;return r.owners.map(i).join(r.mode===`any`?`|`:`+`)+a},i=e=>(n.has(e)?`□`:`■`)+r(e),a={},o=[],s=[],c=T(e);e.connections.forEach((t,n)=>{let[r,s]=m(t),l=R(t),u=l.find(t=>Object.hasOwn(e.oneWays??{},t));if(!u){let e=c&&[r,s].includes(c.from)&&[r,s].includes(c.to);a[String(n)]={from:r,to:s,token:e?`&`:l.map(i).join(` `)};return}let d=l.filter(e=>e!==u);o.push({...e.oneWays[u],...d.length>0?{token:d.map(i).join(` `)}:{}})});let l=new Set(e.connections.flatMap(e=>R(e)));for(let[t,n]of Object.entries(e.oneWays??{}))l.has(t)||o.push(n);let u=Object.fromEntries(Object.keys(e.regions).map(t=>{let i=Object.entries(e.mechanics).flatMap(([e,n])=>`in`in n&&n.in===t?[e]:[]),a=Object.entries(e.mechanics).flatMap(([e,n])=>n.control===`sequence`?n.steps.flatMap((n,r)=>n.in===t?[`${e}${r+1}`]:[]):[]),o=e.weights,s=Object.entries(o?.plates??{}).flatMap(([e,n])=>n.in===t?[`${n.stone?`◉`:`⊙`}${e}`]:[]),c=Object.entries(o?.pipes??{}).flatMap(([e,n])=>n.ends.includes(t)?[`${n.stone===t?`●`:`○`}${e}`]:[]),l=Object.entries(e.gates).filter(([,e])=>w(e)&&e.region===t).map(([e])=>` ${n.has(e)?`░`:`▒`}${r(e)}`).join(``);return[t,`[${[t,...i,...a,...s,...c].join(` · `)}${l}]`]})),d=Object.keys(e.weights?.pipes??{}).length>0;return{regions:Object.keys(e.regions),edges:a,drops:o,boxes:u,notes:s,in:e.in,out:e.out,...d?{pipe:!0}:{}}},At=(e,t=[])=>Ot(kt(e,t)),jt=e=>{let t=C(e);if(t===`tooLarge`)return t;let n=new Set(t.order.map(e=>e.region));return e.regions.filter(e=>!mt(e)&&!n.has(e))},Mt=e=>{let t=T(e);if(t)return[`nest spot: ${t.from} -&> ${t.to}`];let n=g(e);return e.nestSpot&&n.length>0?[`nest spot ignored: ${e.nestSpot.from} -&> ${e.nestSpot.to} also carries ${n.join(`, `)}`]:[]},Nt=(e,t)=>{let n=e.weights?.plates[t];if(n)return[n.in];if(f(e,t))return[];let r=e.mechanics[t];return!r||r.control===`fork-switch`?[]:r.control===`sequence`?r.steps.map(e=>e.in):[r.in]},Pt=(e,t)=>{let n=C(t);if(n===`tooLarge`)return n;let{order:r,edges:i}=n,a=new Set(_t(e)),o=new Map;for(let[n,s]of Object.entries(e.gates)){if(a.has(n)||!s.owners.some(t=>Nt(e,t).length>0||x(e,t)))continue;let c=new Set(s.owners.flatMap(t=>Nt(e,t))),l=Object.entries(t.gates).filter(([e])=>e===n||e.startsWith(`${n}@`)),u=[...new Set(l.flatMap(([,e])=>e.owners))],d=new Set(l.flatMap(([,e])=>[e.from,e.to])),f=e=>u.every(t=>r[e].config[t]===r[0].config[t]),p,m=new Set([0]),h=c.has(r[0].region)?[]:[0];for(;h.length>0&&p===void 0;){let e=h.shift();d.has(r[e].region)&&(p=r[e].region);for(let t of i[e])m.has(t)||c.has(r[t].region)||!f(t)||(m.add(t),h.push(t))}o.set(n,p)}return o},Ft=(e,t,n)=>{if(t===`tooLarge`)return[];let r=e.inputs??[],i=[...t].flatMap(([e,t])=>t===void 0?[e]:[]);if(i.length===0){let n=r.flatMap(n=>{let r=[...t].find(([t])=>e.gates[t].owners.includes(n));return r?[`${n} at ${Y(r[1])}`]:[]});return[`✓ every shut door is seen before its control${n.length>0?`: ${n.join(`, `)}`:``}`]}let a=n?`✗`:`⚠`,o=t=>e.gates[t].owners.every(t=>x(e,t)),s=i.filter(e=>!o(e)),c=[...new Set(i.filter(o).map(t=>{let{owners:n,mode:r}=e.gates[t],i=n.join(r===`any`?` or `:` and `);return`${a} ${n.join(`, `)}: its door is reached only once ${i} ${n.length>1&&r!==`any`?`are`:`is`} held`}))];return[...s.length>0?[`${a} its control is reached before its door is seen: ${s.join(`, `)}`]:[],...c]},It=e=>(e.inputs??[]).length>0?[`inputs: ${e.inputs.join(`, `)}, arriving in any order`]:[],Lt=e=>Object.entries(e.weights?.pipes??{}).map(([e,{ends:t}])=>`pipe ${e}: ${t[0]} ⇄ ${t[1]}`),Rt=({lock:e,drafts:t,refused:n},{lesson:r=!1}={})=>{let i=ht(e,t),a=d(i),o=jt(i),s=Array.isArray(o)&&o.length===0,c=!a.sound&&a.failure.type===`strands`,l=!a.sound&&a.failure.type===`regionLost`,u=_t(e),f=I(e),p=f.length===0,m=a.sound?Pt(e,i):`tooLarge`,h=m===`tooLarge`?m:[...m.values()].filter(e=>e===void 0);return{spec:i,walked:a,checks:[...n.map(e=>`✗ ${e}`),...t.length>0?[`✗ not placed yet: ${t.join(`, `)}`]:[],p?`✓ compiles`:`✗ refused: ${j(f[0])}`,s?`✓ every region is reachable`:`✗ ${o===`tooLarge`?`too many states to walk`:`never reached: ${o.join(`, `)}`}`,a.sound||c||l?`✓ solvable`:`✗ not solvable: ${Y(L(a.failure))}`,...c?[`✗ a dead end: ${Y(L(a.failure))}`]:[],...l?[`✗ a region is lost: ${Y(L(a.failure))}`]:[],...It(e),`at the start ${u.length>0?`these gates stand open: ${u.join(`, `)}`:`no gate stands open`}`,...Ft(e,m,r),...Mt(e),...Lt(e),...vt(e).map(({gate:e,owners:t})=>`${e} shows what it waits for: ${t.join(`, `)}`)],sound:n.length===0&&t.length===0&&p&&s&&a.sound&&!(r&&h!==`tooLarge`&&h.length>0)}},zt=e=>{try{let t=Ge(e),{checks:n,sound:r}=Rt(t);return{checks:n,drawing:At(t.lock,t.drafts),sound:r}}catch(e){return{checks:[`✗ ${e.message}`],drawing:``,sound:!1}}},Bt=(0,G.lazy)(()=>re(()=>import(`./WebMode-D58OaP-F.js`).then(e=>({default:e.WebMode})),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),Vt=({mode:e,onMode:t})=>{let{t:r}=n();return(0,J.jsx)(`div`,{className:`flex overflow-hidden rounded-md border border-red-400`,role:`group`,children:[`lock`,`web`].map(n=>(0,J.jsx)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>t(n),className:`px-3 py-2 text-sm ${e===n?`bg-red-600 text-white`:`text-red-200`}`,children:r(n===`lock`?`devLockEditor.modeLock`:`devLockEditor.modeWeb`)},n))})},Ht=e=>e.startsWith(`✗`)?`text-red-300`:e.startsWith(`⚠`)?`text-amber-300`:`text-white/80`,Ut=({onUse:e,onClose:t})=>{let{t:i}=n(),a=(0,G.useMemo)(()=>Ne(),[]);return(0,G.useEffect)(()=>{let e=e=>e.key===`Escape`&&t();return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),(0,J.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-3`,children:[(0,J.jsx)(`div`,{"aria-hidden":!0,className:`absolute inset-0 bg-black/70`,onClick:t}),(0,J.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":i(`devLockEditor.syntax`),className:`relative flex max-h-full w-full max-w-2xl flex-col gap-3 rounded-lg border border-red-400 bg-neutral-900 p-3 text-white shadow-xl`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,J.jsx)(`h2`,{className:`text-sm font-bold tracking-wide text-red-300 uppercase`,children:i(`devLockEditor.syntax`)}),(0,J.jsx)(r,{label:i(`devLockEditor.close`),onClick:t})]}),(0,J.jsxs)(`div`,{className:`flex flex-col gap-2 overflow-y-auto`,children:[a.map(e=>(0,J.jsxs)(`section`,{className:`flex flex-col gap-2`,children:[(0,J.jsx)(`h3`,{className:`mt-1 text-xs font-bold text-red-300 uppercase`,children:e.heading}),e.rows.map(e=>(0,J.jsxs)(`div`,{className:`sm:grid sm:grid-cols-[2fr_3fr] sm:gap-3`,children:[(0,J.jsx)(`code`,{className:`block font-mono text-xs break-words whitespace-pre-wrap text-amber-200`,children:e.syntax}),(0,J.jsx)(`p`,{className:`text-xs text-white/80`,children:e.meaning})]},e.syntax))]},e.heading)),(0,J.jsx)(`h3`,{className:`text-xs font-bold text-white/60 uppercase`,children:i(`devLockEditor.example`)}),(0,J.jsx)(`pre`,{className:`overflow-x-auto rounded-md bg-stone-950 p-2 font-mono text-xs`,children:Pe}),(0,J.jsx)(`div`,{children:(0,J.jsx)(r,{label:i(`devLockEditor.useExample`),onClick:e})})]})]})]})},Wt=({initialText:e=je(window.location.hash),initialMode:t=window.location.hash.startsWith(`#web=`)?`web`:`lock`,initialWeb:i=Ee(window.location.hash),webEngine:a,onClose:o})=>{let{t:s}=n(),[c,l]=(0,G.useState)(t),[u,d]=(0,G.useState)(e),[f,p]=(0,G.useState)(i),[m,h]=(0,G.useState)(!1),[g,_]=(0,G.useState)(!1),[v,y]=(0,G.useState)(null),b=(0,G.useDeferredValue)(u),x=(0,G.useMemo)(()=>zt(b),[b]),S=e=>{d(e),y(null),window.history.replaceState(null,``,Te(e))},C=async()=>{try{await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}${Te(u)}`),y(`copied`)}catch{y(`failed`)}},w=(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,J.jsx)(`h2`,{className:`text-sm font-bold tracking-wide text-red-300 uppercase`,children:s(`devLockEditor.title`)}),(0,J.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,J.jsx)(Vt,{mode:c,onMode:e=>{l(e),window.history.replaceState(null,``,e===`lock`?Te(u):Oe(f))}}),c===`lock`&&(0,J.jsx)(r,{label:s(`devLockEditor.syntax`),onClick:()=>_(!0)}),o&&(0,J.jsx)(r,{label:s(`devLockEditor.close`),onClick:o})]})]});return c===`web`?(0,J.jsxs)(`div`,{className:`flex h-(--screen-height) flex-col gap-3 overflow-y-auto bg-neutral-900 p-4 text-white`,children:[w,(0,J.jsx)(G.Suspense,{fallback:(0,J.jsx)(`p`,{className:`text-sm text-white/60`,children:s(`devLockEditor.checking`)}),children:(0,J.jsx)(Bt,{text:f,onText:p,engine:a})})]}):m?(0,J.jsxs)(`div`,{className:`flex h-(--screen-height) flex-col overflow-y-auto bg-neutral-900 text-white`,children:[(0,J.jsx)(`div`,{className:`sticky top-0 z-10 bg-neutral-900 p-2`,children:(0,J.jsx)(r,{label:s(`devLockEditor.backToEditor`),onClick:()=>h(!1)})}),(0,J.jsx)(ut,{locks:{lock:u}})]}):(0,J.jsxs)(`div`,{className:`flex h-(--screen-height) flex-col gap-3 overflow-y-auto bg-neutral-900 p-4 text-white`,children:[w,g&&(0,J.jsx)(Ut,{onUse:()=>{S(Pe),_(!1)},onClose:()=>_(!1)}),(0,J.jsx)(`textarea`,{"aria-label":s(`devLockEditor.notation`),value:u,onChange:e=>S(e.target.value),rows:10,autoCapitalize:`off`,autoComplete:`off`,autoCorrect:`off`,spellCheck:!1,className:`w-full rounded-md border border-red-400 bg-stone-950 p-2 font-mono text-base text-white`}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,J.jsx)(r,{label:s(`devLockEditor.carveAndPlay`),onClick:()=>h(!0)}),(0,J.jsx)(r,{label:s(`devLockEditor.copyLink`),onClick:C}),v&&(0,J.jsx)(`span`,{role:`status`,className:`text-sm text-white/80`,children:s(`devLockEditor.${v}`)})]}),(0,J.jsxs)(`section`,{"aria-label":s(`devLockEditor.checks`),children:[(0,J.jsx)(`h3`,{className:`mb-1 text-xs font-bold text-white/60 uppercase`,children:s(`devLockEditor.checks`)}),(0,J.jsx)(`ul`,{className:`font-mono text-sm`,children:x.checks.map(e=>(0,J.jsx)(`li`,{className:Ht(e),children:e},e))})]}),x.drawing!==``&&(0,J.jsxs)(`section`,{"aria-label":s(`devLockEditor.drawing`),children:[(0,J.jsx)(`h3`,{className:`mb-1 text-xs font-bold text-white/60 uppercase`,children:s(`devLockEditor.drawing`)}),(0,J.jsx)(`pre`,{className:`overflow-x-auto rounded-md bg-stone-950 p-2 font-mono text-xs`,children:x.drawing})]})]})},Gt=[`wall`,`floor`,`ground`,`wallItem`],Kt=[`stop`,`mechanism`,`door`],qt=[`chest`,`portal`],Jt=new Set([`#`,`d`,`.`]),Yt=/^[A-Za-z_]\w*$/,Xt=(e,t,n)=>{let r=new Set,i=[];return e.forEach((a,o)=>[...a].forEach((a,s)=>{if(a!==t||r.has(`${o},${s}`))return;let c=[[o,s]];r.add(`${o},${s}`);let l=[];for(;c.length>0;){let[n,i]=c.pop();l.push([n,i]);for(let[a,o]of[[1,0],[-1,0],[0,1],[0,-1]]){let s=`${n+a},${i+o}`;e[n+a]?.[i+o]===t&&!r.has(s)&&(r.add(s),c.push([n+a,i+o]))}}let u=l.map(([e])=>e),d=l.map(([,e])=>e),f={top:Math.min(...u),rows:Math.max(...u)-Math.min(...u)+1,cols:Math.max(...d)-Math.min(...d)+1,cells:l.length};f.cells!==f.rows*f.cols&&n(`"${t}" is not drawn as a full rectangle`),i.push(f)})),i},Zt=(e,t)=>{let n=e.kinds[0];if(e.layer===`wallItem`||n===`patron`||!ie.includes(n))return{cols:1,rows:1};let{cols:r,rows:i}=t(n);return{cols:r,rows:i}},Qt=(e,t=`room`,n=P)=>{let r=(e,t)=>{throw Error(`line ${e}: ${t}`)},i=e.match(/^[ \t]*\/\/[ \t]*designed by:[ \t]*(\S.*?)[ \t]*$/im)?.[1],a=e.split(`
`).flatMap(e=>e.match(/\/\/(.*)/)?.[1].trim()??[]).filter(e=>!/^designed by:/i.test(e)),o=e.split(`
`).map((e,t)=>({n:t+1,line:e.replace(/\/\/.*/,``).trim()})).filter(({line:e})=>e!==``),s=t,c,l,u=!1,d=[],f=new Map,p=[],m=new Map,h=!1;for(let{n:e,line:t}of o){let[n,...i]=t.split(/\s+/);if(h&&/^\S( \S)*$/.test(t))p[p.length-1].rows.push(t.replace(/ /g,``));else if(h=!1,n===`room`&&i.length===1)s=i[0];else if(n===`tier`&&i.length===1)c=U.includes(i[0])?i[0]:r(e,`unknown tier "${i[0]}"`);else if(n===`activity`&&i.length===1)l=k.some(e=>e.id===i[0])?i[0]:r(e,`unknown activity "${i[0]}"`);else if(n===`mirror`&&i.length===0)u=!0;else if(n===`holds`&&i.length>0)for(let t of i)d.push(qt.includes(t)?t:r(e,`cannot hold "${t}"`));else if(n===`layout`&&i.length<=1)p.push({name:i[0]??``,rows:[],n:e}),h=!0;else if(t.includes(`=`)){let[n,i,...a]=t.split(`=`).map(e=>e.trim());(!Yt.test(n)||!i||a.length>0)&&r(e,`cannot read list "${t}"`),f.set(n,i.split(`|`).map(e=>e.trim()))}else{let a=n;(a.length!==1||Jt.has(a))&&r(e,`cannot read legend line "${t}"`),m.has(a)&&r(e,`"${a}" is declared twice`);let o=i[0]?.replace(/\?$/,``);if(Kt.includes(i[0])&&i.length===1){m.set(a,{n:e,special:i[0]});continue}Gt.includes(o)||r(e,`"${i[0]??``}" is neither a layer nor a special`);let s=i.slice(1).join(` `),c,l=s.match(/\s+unless (\S)$/);l&&(c=l[1],s=s.slice(0,l.index));let u,d=s.match(/\s*\b(\d+) of (\d+)(?: per (\S))?$/);d&&(u={take:Number(d[1]),of:Number(d[2]),...d[3]?{per:d[3]}:{}},s=s.slice(0,d.index)),s.trim()===``&&r(e,`"${a}" lists no kinds`);let p=s.split(`|`).flatMap(e=>{let t=e.trim();return f.get(t)??[t]});for(let t of p)Yt.test(t)||r(e,`cannot read kind "${t}"`);m.set(a,{n:e,place:{letter:a,layer:o,optional:i[0].endsWith(`?`),kinds:p,...u?{group:u}:{},...c?{unless:c}:{}}})}}let g=c??r(1,`the room has no tier`);p.length===0&&r(1,`the room has no layout`);let _=[],v=new Map;for(let e of p){let{rows:t,n}=e;t.length<3&&r(n,`a layout needs at least three rows`),t.some(e=>e.length!==t[0].length)&&r(n,`the rows of a layout are not all as wide`),t[0].length<3&&r(n,`a layout needs at least three columns`);let i=t.length-1,a=t[0].length-1,o=0;t.forEach((e,t)=>[...e].forEach((e,s)=>{let c=n+1+t,l=t===0||t===i||s===0||s===a;if(e===`#`||e===`.`){e===`.`&&l&&r(c,`free floor on the ring`);return}if(e===`d`){l||r(c,`a door place inside the ring`);return}let u=m.get(e)??r(c,`"${e}" is used but never declared`);if(`special`in u&&u.special===`door`){l||r(c,`door "${e}" inside the ring`);return}let d=`place`in u&&u.place.layer===`wallItem`;d&&!l&&r(c,`wall item "${e}" inside the ring`),d&&t!==0&&r(c,`wall item "${e}" off the north wall`),!d&&l&&r(c,`"${e}" on the ring`),`special`in u&&u.special===`stop`&&o++})),o!==1&&r(n,`a layout needs exactly one stop, this has ${o}`);for(let[e,i]of m){if(!t.some(t=>t.includes(e)))continue;let a=Xt(t,e,e=>r(n,e));if(`special`in i)continue;let o=v.get(e)??{cols:a[0].cols,rows:a[0].rows};a.some(e=>e.cols!==o.cols||e.rows!==o.rows)&&r(n,`"${e}" is drawn in more than one footprint`),v.set(e,o),i.place.layer===`wall`&&a.some(e=>e.top!==1)&&r(n,`wall place "${e}" stands below the first inside row`)}_.push({name:e.name,cells:t})}let y={},b={};for(let[e,t]of m){if(`special`in t){b[e]=t.special;continue}let{place:i}=t,a=v.get(e)??Zt(i,n);for(let o of i.kinds){let s=V.includes(o),c=ie.includes(o);if(i.layer===`wallItem`){s||r(t.n,`"${o}" is not a wall item`),(a.cols!==1||a.rows!==1)&&r(t.n,`wall item "${e}" is drawn larger than one cell`);continue}if(o===`patron`){i.layer!==`floor`&&r(t.n,`a patron stands on a floor place`),(a.cols!==1||a.rows!==1)&&r(t.n,`"patron" does not fit ${a.cols}x${a.rows}`);continue}c||r(t.n,`unknown kind "${o}"`);let l=n(o);(l.cols!==a.cols||l.rows!==a.rows)&&r(t.n,`"${o}" is ${l.cols}x${l.rows}, "${e}" is drawn ${a.cols}x${a.rows}`),l.ground&&i.layer!==`ground`&&r(t.n,`"${o}" lies on the ground, "${e}" is a ${i.layer} place`),!l.ground&&i.layer===`ground`&&r(t.n,`"${o}" stands free, "${e}" is a ground place`)}if(i.group&&i.group.take>i.group.of&&r(t.n,`cannot take ${i.group.take} of ${i.group.of}`),i.group?.per&&!m.has(i.group.per)&&r(t.n,`"per ${i.group.per}" names no letter`),i.unless){let n=m.get(i.unless);n&&`special`in n&&n.special===`door`||r(t.n,`"unless ${i.unless}" names no door`),i.optional||r(t.n,`"${e}" stands only unless a door is used, so it is optional: write "${i.layer}?"`)}y[e]={...i,...a}}return{name:s,tier:g,activity:l,mirror:u,...d.length>0?{holds:d}:{},designedBy:i,...a.length>0?{notes:a}:{},...f.size>0?{lists:Object.fromEntries(f)}:{},layouts:_,places:y,specials:b}},$t=(e,t)=>{let n=Object.entries(t).sort(([,e],[,t])=>t.length-e.length),r=[];for(let t=0;t<e.length;){let i=n.find(([,n])=>n.every((n,r)=>e[t+r]===n));r.push(i?i[0]:e[t]),t+=i?i[1].length:1}return r},en=(e,t)=>{let{group:n}=e,r=n?` ${n.take} of ${n.of}${n.per?` per ${n.per}`:``}`:``,i=e.unless?` unless ${e.unless}`:``;return`${e.letter} ${e.layer}${e.optional?`?`:``} ${$t(e.kinds,t).join(` | `)}${r}${i}`},tn=(e,{readAs:t}={})=>{let n=e.lists??{};return`${[e.designedBy?`// designed by: ${e.designedBy}`:`// designed by:`,...(e.notes??[]).map(e=>e?`// ${e}`:`//`),...e.name===t?[]:[`room ${e.name}`],`tier ${e.tier}`,...e.activity?[`activity ${e.activity}`]:[],...e.mirror?[`mirror`]:[],...e.holds?[`holds ${e.holds.join(` `)}`]:[],...Object.entries(n).map(([e,t])=>`${e} = ${t.join(` | `)}`),...e.layouts.flatMap(e=>[``,e.name?`layout ${e.name}`:`layout`,...e.cells.map(e=>[...e].join(` `))]),``,...Object.values(e.places).map(e=>en(e,n)),...Object.entries(e.specials).map(([e,t])=>`${e} ${t}`)].join(`
`)}\n`},nn={n:[-1,0],s:[1,0],e:[0,1],w:[0,-1]},rn={".":e=>({type:`corridor`,dirs:new Set(e),state:`fogged`}),F:e=>({type:`room`,roomType:`fork`,dirs:new Set(e),state:`fogged`}),E:e=>({type:`room`,roomType:`portal`,dirs:new Set(e),state:`fogged`})},an=(e,t={})=>{let n={...rn,...t},r=Math.max(...e.map(e=>e.length)),i=(t,n)=>(e[t]?.[n]??` `)!==` `,a=null,o=e.map((e,t)=>Array.from({length:r},(r,o)=>{let s=e[o]??` `;if(s===` `)return{type:`empty`};let c=n[s];if(!c)throw Error(`no piece for "${s}" at ${t},${o}`);return s===`E`&&(a=[t,o]),c(Object.keys(nn).filter(e=>i(t+nn[e][0],o+nn[e][1])))}));if(!a)throw Error(`a floor needs an E`);return on({siteId:`test`,rows:e.length,cols:r,entrancePos:a,exitPos:a,staircases:{},difficulty:`expert`,cells:o})},on=e=>{let t=e.cells.map((t,n)=>t.map((t,r)=>{if(t.type===`empty`)return t;let i=`${n*e.cols+r}`,a={...t,sectionAddress:`s${i}`,sectionHash:`s${i}`,ordinal:i};return n===e.entrancePos[0]&&r===e.entrancePos[1]?{...a,state:`reachable`}:a}));return{...e,cells:t}},sn=[`n`,`s`,`e`,`w`],cn=3,ln=(e,t)=>{let n=u(e);return{variants:n.length,fills:s(n[t%n.length],e).length}},un=(e,t,n,r)=>{let i={};for(let a of sn){let[o,s]=W[a],[c,u]=[n+o,r+s];for(;t[c]?.[u]!==void 0&&t[c][u]!==`#`&&!dn(t,c,u);)[c,u]=[c+o,u+s];t[c]?.[u]!==void 0&&l(e,t[c][u])&&(i[a]=[c,u])}return i},dn=(e,t,n)=>t===0||n===0||t===e.length-1||n===e[0].length-1,fn=(e,t=0,n=0)=>{let r=u(e),i=r[t%r.length].cells,a=[];i.forEach((t,n)=>[...t].forEach((t,r)=>{t===`.`&&a.push({i:n,j:r,arms:un(e,i,n,r)})})),a.sort((e,t)=>Object.keys(t.arms).length-Object.keys(e.arms).length);let o=[...i.join(``)].filter(t=>l(e,t)).length;for(let{i:r,j:s,arms:c}of a){let a=Array.from({length:i.length+6},()=>Array(i[0].length+6).fill(` `)),l=(e,t)=>[cn+e,cn+t],u=([e,t],n)=>a[e][t]=n;u(l(r,s),`G`);let d=!0;for(let e of sn){let t=c[e];if(!t)continue;let[n,i]=W[e],[a,o]=[r+n,s+i];for(;a!==t[0]||o!==t[1];[a,o]=[a+n,o+i])u(l(a,o),`.`);u(l(a,o),`.`),u(l(a+n,o+i),`.`),u(l(a+2*n,o+2*i),d?`E`:`R`),d=!1}d&&u([0,0],`E`);let f=an(a.map(e=>e.join(``)),{R:e=>({type:`room`,roomType:`encounter`,dirs:new Set(e),state:`fogged`}),G:e=>({type:`room`,roomType:`chamber`,dirs:new Set(e),state:`fogged`})}),[p,m]=l(r,s),h=te(f,p,m,e,f.siteId,{variant:t,fill:n});if(!h)continue;let g=f.cells[p][m];if(g.type===`empty`)continue;let _=f.cells.map(e=>[...e]);_[p][m]={...g,prefabRoom:h};let v=Object.fromEntries(h.doors.map(([e,t])=>{let n=N(h.rect,[e,t]);return[`${e},${t}`,{side:n,out:[e+W[n][0],t+W[n][1]]}]}));return{grid:{...f,difficulty:e.tier,cells:_},node:[p,m],stop:h.stop,doors:v,unusedDoors:o-h.doors.length}}throw Error(`${e.name} fits no node of its variant ${t}`)},pn=({prefab:e,tileset:t,variant:r=0,fill:i=0,from:a,to:o,className:s})=>{let l=(0,G.useMemo)(()=>{try{let n=fn(e,r,i);return{preview:n,grid:c({...n.grid,...t?{tileset:t}:{}})}}catch(e){return{error:e instanceof Error?e.message:String(e)}}},[e,r,i,t]),{t:u}=n(),[d,f]=(0,G.useState)({at:`stop`,on:l}),p=d.on===l?d.at:`stop`,m=e=>f({at:e,on:l});if(`error`in l)return(0,J.jsx)(`p`,{className:`p-2 text-sm text-red-700`,children:l.error});let{preview:h,grid:g}=l,_=Object.values(h.doors),v=e=>_.find(t=>t.side===e)?.out,y={from:v(a)??_[0]?.out??h.stop,to:v(o)??_[_.length-1]?.out??h.stop,stop:h.stop},b=typeof p==`string`?y[p]:p;return(0,J.jsxs)(`div`,{children:[(0,J.jsxs)(`div`,{className:`flex gap-4 p-2 text-sm`,children:[(0,J.jsx)(`button`,{type:`button`,onClick:()=>m(`from`),children:u(`devPrefabPreview.firstDoor`)}),(0,J.jsx)(`button`,{type:`button`,onClick:()=>m(`stop`),children:u(`devPrefabPreview.stop`)}),(0,J.jsx)(`button`,{type:`button`,onClick:()=>m(`to`),children:u(`devPrefabPreview.secondDoor`)}),(0,J.jsxs)(`span`,{children:[u(`devPrefabPreview.doorsInUse`,{count:_.length}),h.unusedDoors>0?`, ${u(`devPrefabPreview.walled`,{count:h.unusedDoors})}`:``]})]}),(0,J.jsx)(de,{grid:g,explorerPos:b,onCellClick:(e,t)=>m([e,t]),className:s??`h-160 w-full`})]})},mn=e=>{let t=(t,n,r,i)=>{let a=fe(e,t);return{kind:t,layer:n,cols:r,rows:i,painted:a!==void 0,url:a??Ce(t)??``}};return[...ie.map(e=>{let{cols:n,rows:r,ground:i}=P(e);return t(e,i?`ground`:`prop`,n,r)}),...V.map(e=>t(e,`wallItem`,1,1))]},hn={prop:`floor`,ground:`ground`,wallItem:`wallItem`},gn=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,_n=(e,t)=>{let n=new Set(e.replace(/\/\/.*/g,``).split(/\s+/));n.add(`d`);let r=[...gn].find(e=>!n.has(e));return r?`${e}${e===``||e.endsWith(`
`)?``:`
`}${r} ${hn[t.layer]} ${t.kind}\n`:e},Z=e=>`refused`in e,vn=`abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,yn=new Set([`#`,`.`,`d`]),bn=e=>e!==void 0&&!yn.has(e),xn=(e,t,n)=>t===0||n===0||t===e.length-1||n===e[0].length-1,Q=(e,t)=>{try{return Qt(tn(e),e.name,t)}catch(e){return{refused:`notation`,message:e instanceof Error?e.message:String(e)}}},Sn=(e,t,n)=>({...e,layouts:e.layouts.map((e,r)=>r===t?{...e,cells:n}:e)}),Cn=(e,t,n,r)=>e.map((e,i)=>i===t?`${e.slice(0,n)}${r}${e.slice(n+1)}`:e),wn=(e,t,n)=>{let r=e[t][n],i=[[t,n]],a=new Set([`${t},${n}`]);for(let t=0;t<i.length;t++){let[n,o]=i[t];for(let[t,s]of[[1,0],[-1,0],[0,1],[0,-1]])e[n+t]?.[o+s]===r&&!a.has(`${n+t},${o+s}`)&&(a.add(`${n+t},${o+s}`),i.push([n+t,o+s]))}return i},Tn=(e,t,n)=>wn(e,t,n).reduce((t,[n,r])=>Cn(t,n,r,xn(e,n,r)?`#`:`.`),[...e]),En=e=>{let t=t=>e.layouts.some(e=>e.cells.some(e=>e.includes(t))),n={};for(let[r,i]of Object.entries(e.places)){if(!t(r))continue;let e=i.group?.per;n[r]=i.group&&e&&!t(e)?{...i,group:{take:i.group.take,of:i.group.of}}:i}let r=Object.fromEntries(Object.entries(e.specials).filter(([e])=>t(e)));return{...e,places:n,specials:r}},Dn=e=>[...vn].find(t=>!(t in e.places)&&!(t in e.specials)),On=(e,t,n,r,i,a=P)=>{let o=e.layouts[t].cells;return o[n]?.[r]===void 0||o[n][r]===i?e:i===`.`&&xn(o,n,r)?{refused:`floorOnRing`}:i===`d`&&!xn(o,n,r)?{refused:`doorInside`}:e.specials[o[n][r]]===`stop`?{refused:`keepStop`}:Q(En(Sn(e,t,Cn(bn(o[n][r])?Tn(o,n,r):[...o],n,r,i))),a)},kn=(e,t,n,r,i,a=P)=>{let o=e.layouts[t].cells;if(o[n]?.[r]===void 0||e.specials[o[n][r]]===i)return e;if(o[n][r]!==`.`)return{refused:`notFree`};let s=Object.keys(e.specials).find(t=>e.specials[t]===`stop`),c=i===`stop`&&s?s:Dn(e);return c?Q({...Sn(e,t,Cn(o.map(e=>e.replaceAll(c,`.`)),n,r,c)),specials:{...e.specials,[c]:i}},a):{refused:`noLetter`}},An=(e,t,n,r,i)=>{let a=[...e.layouts[t].cells];if(i.layer===`wall`&&n!==1)return{refused:`wallRow`};for(let e=n;e<n+i.rows;e++)for(let t=r;t<r+i.cols;t++){let n=a[e]?.[t];if(!(i.layer===`wallItem`?e===0&&n===`#`:n===`.`&&!xn(a,e,t)))return{refused:i.layer===`wallItem`?`northWall`:`notFree`};a=Cn(a,e,t,i.letter)}return{...Sn(e,t,a),places:{...e.places,[i.letter]:i}}},jn=(e,t)=>V.includes(e)?`wallItem`:t.ground?`ground`:`floor`,Mn=(e,t,n,r,i,{layer:a,footprintOf:o=P}={})=>{let s=Dn(e);if(!s)return{refused:`noLetter`};let c=i===`patron`||V.includes(i)?{cols:1,rows:1,tall:0}:o(i),l=An(e,t,n,r,{letter:s,layer:a??jn(i,c),optional:!1,kinds:[i],cols:c.cols,rows:c.rows});return Z(l)?l:Q(l,o)},Nn=(e,t,n,r,i,a=P)=>{let o=e.places[i];if(!o)return e;let s=An(e,t,n,r,o);return Z(s)?s:Q(s,a)},Pn=(e,t,n,r,i=P)=>{let a=e.layouts[t].cells;return bn(a[n]?.[r])?e.specials[a[n][r]]===`stop`?{refused:`keepStop`}:Q(En(Sn(e,t,Tn(a,n,r))),i):e},Fn=(e,t,n,r=P)=>{let i=e.places[t];if(!i)return e;let{group:a,...o}={...i,...n},s={...o,...a?{group:a}:{}};return Q({...e,places:{...e.places,[t]:s}},r)},In=(e,t,n,r=P)=>{let i=e.layouts[t];return i?n===``||e.layouts.some(e=>e.name===n)?{refused:`layoutName`}:Q({...e,layouts:[...e.layouts,{name:n,cells:i.cells}]},r):e},Ln=Object.fromEntries(Object.entries(Object.assign({"../../game/rooms/expert/formulaWallExpert.room":`// designed by: Claude
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
`,"../../game/rooms/junior/bakery.room":`// designed by: Claude
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
`,"../../game/rooms/junior/bakeryWorks.room":`// designed by: Claude
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
`,"../../game/rooms/junior/banquetRoom.room":`// designed by: Claude
// junior. The banquet: the table laid in the middle of the floor, the harp and the frieze on the north wall.
room banquetRoom
tier junior
activity banquet
mirror

layout
# d # # d #
# . h g . #
d . t t . d
# . . s . #
# d # # d #

h wall harp
g wall hanging | jarRack
t floor banquetTable
s stop
`,"../../game/rooms/junior/bedroom.room":`// designed by: Claude
// junior. The bedroom: the bed on its lion legs along the north wall, the headrest beside it.
room bedroom
tier junior
activity bedroom
mirror
holds chest

layout
# d # # # #
# . b b h #
d . . . . d
# . s . . #
# # d # d #

b wall bed
h wall headrest
s stop
`,"../../game/rooms/junior/bigBanquetHall.room":`// designed by: Claude
// junior. A big banquet hall: the table in the middle, the harp and the frieze between wine racks on the north wall.
room bigBanquetHall
tier junior
activity banquet
mirror

layout
# # d # # d # #
# j . h g . k #
d . . . . . . d
# . . t t . . #
# . . . s . . #
# # d # # d # #

j wall jarRack
k wall jarRack
h wall harp
g wall hanging
t floor banquetTable
s stop
`,"../../game/rooms/junior/bigGardenCourt.room":`// designed by: Claude
// junior. A big garden court: the lotus pool in the middle of an open court, a lotus column between two potted trees on
// the north wall.
// On a floor with a patron, the god's statues stand in the south corners.
room bigGardenCourt
tier junior
activity gardenCourt

layout
# # d # d # #
# t . c . t #
d . . . . . d
# . b b . . #
d . . . . . d
# p . s . p #
# # d # d # #

t wall pottedTree
c wall pillar
b floor lotusPool
p floor? patron
s stop
`,"../../game/rooms/junior/courtWorks.room":`// designed by: Claude
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
`,"../../game/rooms/junior/dressingRoom.room":`// designed by: Claude
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
`,"../../game/rooms/junior/formulaWallJunior.room":`// designed by: Claude
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
`,"../../game/rooms/junior/gardenCourt.room":`// designed by: Claude
// junior. The garden court: the lotus pool in the middle, a lotus column between two potted trees on the north wall.
// On a floor with a patron, the god's statues stand in the south corners.
room gardenCourt
tier junior
activity gardenCourt

layout
# # d # d # #
# t . c . t #
d . . b . . d
# p . s . p #
# # d # d # #

t wall pottedTree
c wall pillar
b floor basin
p floor? patron
s stop
`,"../../game/rooms/junior/henutVanity.room":`// designed by: Claude
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
`,"../../game/rooms/junior/henutWall.room":`// designed by: Claude
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
`,"../../game/rooms/junior/musicRoom.room":`// designed by: Claude
// junior. The banquet's music room, cleared for the lever or torch: the harp in one corner of the north wall.
room musicRoom
tier junior
activity banquet
mirror

layout
# # # d #
# h . . #
d . m . d
# . s . #
# d # d #

h wall harp
m mechanism
s stop
`,"../../game/rooms/junior/quernRoom.room":`// designed by: Claude
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
`,"../../game/rooms/junior/shrineRoom.room":`// designed by: Claude
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
`,"../../game/rooms/junior/shrineWorks.room":`// designed by: Claude
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
`,"../../game/rooms/master/audienceHall.room":`// designed by: Claude
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
`,"../../game/rooms/master/audienceRoom.room":`// designed by: Claude
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
`,"../../game/rooms/master/bigTreasury.room":`// designed by: Claude
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
`,"../../game/rooms/master/boatPit.room":`// designed by: Claude
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
`,"../../game/rooms/master/burialChamber.room":`// designed by: Claude
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
`,"../../game/rooms/master/canopicWorks.room":`// designed by: Claude
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
`,"../../game/rooms/master/fallenStatueHall.room":`// designed by: Claude
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
`,"../../game/rooms/master/formulaWallMaster.room":`// designed by: Claude
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
`,"../../game/rooms/master/sedCourt.room":`// designed by: Claude
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
`,"../../game/rooms/master/shabtiRoom.room":`// designed by: Claude
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
`,"../../game/rooms/master/shabtiWorks.room":`// designed by: Claude
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
`,"../../game/rooms/master/statueHall.room":`// designed by: Claude
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
`,"../../game/rooms/master/sunCourt.room":`// designed by: Claude
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
`,"../../game/rooms/master/treasury.room":`// designed by: Claude
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
`,"../../game/rooms/master/tributeWorks.room":`// designed by: Claude
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
`,"../../game/rooms/starter/bigPackingRoom.room":`// designed by: Claude
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
`,"../../game/rooms/starter/bigSellingRoom.room":`// designed by: Claude
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
`,"../../game/rooms/starter/bigStoreroom.room":`// designed by: Claude
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
`,"../../game/rooms/starter/caveBasin.room":`// designed by: Claude
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
`,"../../game/rooms/starter/fezStall.room":`// designed by: Matthijs
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
`,"../../game/rooms/starter/ipiLedger.room":`// designed by: Claude
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
`,"../../game/rooms/starter/ledgerRoom.room":`// designed by: Claude
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
`,"../../game/rooms/starter/packingRoom.room":`// designed by: Claude
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
`,"../../game/rooms/starter/sellingRoom.room":`// designed by: Claude
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
`,"../../game/rooms/starter/storeroom.room":`// designed by: Claude
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
`,"../../game/rooms/starter/weighingRoom.room":`// designed by: Claude
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
`,"../../game/rooms/wizard/formulaWallWizard.room":`// designed by: Claude
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
`})).filter(([e])=>!e.endsWith(`-blocked.room`)).map(([e,t])=>[e.slice(e.lastIndexOf(`/`)+1,-5),t])),Rn=`w-14 rounded-md border border-red-400 bg-stone-950 p-1 text-sm text-white`,zn=({place:e,fitting:t,letters:i,drawn:a,onChange:o,onDrawAnother:s,onClose:c})=>{let{t:l}=n(),{group:u}=e,d=t=>{let n=e.kinds.includes(t)?e.kinds.filter(e=>e!==t):[...e.kinds,t];n.length>0&&o({kinds:n})};return(0,J.jsxs)(`section`,{"aria-label":l(`devRoomEditor.inspector.title`,{letter:e.letter}),className:`flex flex-col gap-2 rounded-md border border-white/20 p-2 text-sm`,children:[(0,J.jsxs)(`h3`,{className:`text-xs font-bold text-white/60 uppercase`,children:[l(`devRoomEditor.inspector.title`,{letter:e.letter}),` · `,l(`devRoomEditor.layer.${e.layer}`),` `,e.cols,`x`,e.rows]}),(0,J.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(`input`,{type:`checkbox`,checked:e.optional,onChange:e=>o({optional:e.target.checked})}),l(`devRoomEditor.inspector.optional`)]}),(0,J.jsxs)(`fieldset`,{className:`flex flex-wrap gap-x-3 gap-y-1`,children:[(0,J.jsx)(`legend`,{className:`text-xs text-white/60`,children:l(`devRoomEditor.inspector.kinds`)}),t.map(t=>(0,J.jsxs)(`label`,{className:`flex items-center gap-1`,children:[(0,J.jsx)(`input`,{type:`checkbox`,checked:e.kinds.includes(t),onChange:()=>d(t)}),t]},t))]}),(0,J.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(`input`,{type:`checkbox`,checked:u!==void 0,onChange:e=>o({group:e.target.checked?{take:1,of:Math.max(a,1)}:void 0})}),l(`devRoomEditor.inspector.counted`)]}),u&&(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[l(`devRoomEditor.inspector.take`),(0,J.jsx)(`input`,{type:`number`,min:1,"aria-label":l(`devRoomEditor.inspector.take`),value:u.take,onChange:e=>o({group:{...u,take:Number(e.target.value)||1}}),className:Rn}),l(`devRoomEditor.inspector.of`),(0,J.jsx)(`input`,{type:`number`,min:1,"aria-label":l(`devRoomEditor.inspector.of`),value:u.of,onChange:e=>o({group:{...u,of:Number(e.target.value)||1}}),className:Rn}),l(`devRoomEditor.inspector.per`),(0,J.jsxs)(`select`,{"aria-label":l(`devRoomEditor.inspector.per`),value:u.per??``,onChange:e=>o({group:{take:u.take,of:u.of,...e.target.value?{per:e.target.value}:{}}}),className:`rounded-md border border-red-400 bg-stone-950 p-1 text-sm text-white`,children:[(0,J.jsx)(`option`,{value:``,children:l(`devRoomEditor.inspector.perNone`)}),i.map(e=>(0,J.jsx)(`option`,{value:e,children:e},e))]})]}),(0,J.jsxs)(`div`,{className:`flex gap-2`,children:[(0,J.jsx)(r,{label:l(`devRoomEditor.inspector.drawAnother`),onClick:s}),(0,J.jsx)(r,{label:l(`devRoomEditor.inspector.close`),onClick:c})]})]})},Bn=(e,t)=>e(`devRoomEditor.refused.${t.refused}`,{message:t.message}),Vn=`application/x-room-kind`,Hn=[`select`,`wall`,`floor`,`door`,`stop`,`mechanism`,`erase`],Un={wall:`#`,floor:`.`,door:`d`},Wn={floor:`prop`,wall:`prop`,ground:`ground`,wallItem:`wallItem`},Gn={stop:`bg-sky-500`,mechanism:`bg-rose-500`,door:`bg-amber-600`},Kn=({prefab:e,layout:t,palette:r,onChange:i})=>{let{t:a}=n(),[o,s]=(0,G.useState)(`select`),[c,l]=(0,G.useState)(),[u,d]=(0,G.useState)(),[f,p]=(0,G.useState)(!1),[m,h]=(0,G.useState)(),[g,_]=(0,G.useState)(`none`);(0,G.useEffect)(()=>{let e=()=>_(`none`);return window.addEventListener(`pointerup`,e),()=>window.removeEventListener(`pointerup`,e)},[]);let v=e.layouts[t].cells,y=u?e.places[u]:void 0,b=se({layout:t,mirrored:!1,cells:v},e),x=t=>{if(t===`#`)return a(`devRoomEditor.cellWhat.wall`);if(t===`.`)return a(`devRoomEditor.cellWhat.floor`);if(t===`d`||e.specials[t]===`door`)return a(`devRoomEditor.cellWhat.door`);let n=e.specials[t],r=n?a(`devRoomEditor.tool.${n}`):e.places[t]?.kinds.join(` | `)??``;return a(`devRoomEditor.cellWhat.place`,{letter:t,kinds:r})},S=e=>r.find(t=>t.kind===e)?.url,C=(t,n)=>Z(t)?(h(t),!1):t!==e&&(h(void 0),i(t,n),!0),w=(n,r,i)=>{let a=v[n][r];if(o===`select`)return d(a in e.places?a:void 0),!1;let s=o===`wall`||o===`floor`||o===`door`?On(e,t,n,r,Un[o]):o===`erase`?Pn(e,t,n,r):o===`copy`?c?Nn(e,t,n,r,c):e:kn(e,t,n,r,o);return C(s,i)},T=(n,i,a)=>{let o=r.find(e=>e.kind===a)?.layer===`prop`;C(Mn(e,t,n,i,a,f&&o?{layer:`wall`}:{}),!1)},E=y?[...new Set([...y.kinds,...r.filter(e=>e.layer===Wn[y.layer]&&e.cols===y.cols&&e.rows===y.rows).map(e=>e.kind),...y.layer===`floor`&&y.cols===1&&y.rows===1?[`patron`]:[]])]:[];return(0,J.jsxs)(`section`,{"aria-label":a(`devRoomEditor.drawing`),className:`flex flex-col gap-2`,children:[(0,J.jsx)(`h3`,{className:`text-xs font-bold text-white/60 uppercase`,children:a(`devRoomEditor.drawing`)}),(0,J.jsxs)(`div`,{role:`toolbar`,className:`flex flex-wrap gap-1`,children:[Hn.map(e=>(0,J.jsx)(`button`,{type:`button`,"aria-pressed":o===e,onClick:()=>s(e),className:`rounded-md border px-2 py-1 text-xs ${o===e?`border-red-400 bg-red-600`:`border-white/20`}`,children:a(`devRoomEditor.tool.${e}`)},e)),c&&(0,J.jsx)(`button`,{type:`button`,"aria-pressed":o===`copy`,onClick:()=>s(`copy`),className:`rounded-md border px-2 py-1 text-xs ${o===`copy`?`border-red-400 bg-red-600`:`border-white/20`}`,children:a(`devRoomEditor.tool.copy`,{letter:c})})]}),(0,J.jsxs)(`label`,{className:`flex items-center gap-2 text-xs text-white/60`,children:[(0,J.jsx)(`input`,{type:`checkbox`,checked:f,onChange:e=>p(e.target.checked)}),a(`devRoomEditor.againstWall`)]}),(0,J.jsx)(`p`,{className:`text-xs text-white/60`,children:a(`devRoomEditor.dropHint`)}),(0,J.jsx)(`p`,{className:`text-xs text-white/60`,children:a(`devRoomEditor.rewrites`)}),(0,J.jsxs)(`div`,{className:`grid w-fit touch-none gap-px bg-black select-none`,style:{gridTemplateColumns:`repeat(${v[0].length}, 2rem)`,gridAutoRows:`2rem`},children:[v.flatMap((t,n)=>[...t].map((t,r)=>{let i=e.specials[t],s=t===`#`?`bg-stone-700`:t===`d`?`bg-amber-600`:i?Gn[i]:t===u?`bg-red-300 text-black`:`bg-stone-300 text-black`;return(0,J.jsx)(`button`,{type:`button`,"data-cell":`${n},${r}`,title:x(t),"aria-label":a(`devRoomEditor.cell`,{row:n,col:r,what:x(t)}),style:{gridRow:n+1,gridColumn:r+1},className:`font-mono text-xs ${s}`,onPointerDown:e=>{e.currentTarget.releasePointerCapture?.(e.pointerId),_(w(n,r,!1)?`changed`:`down`)},onPointerEnter:()=>{g!==`none`&&o!==`select`&&w(n,r,g===`changed`)&&_(`changed`)},onClick:e=>e.detail===0&&w(n,r,!1),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),T(n,r,e.dataTransfer.getData(Vn))},children:t===`.`||t===`#`?``:t},`${n},${r}`)})),b.map(t=>{let n=S(e.places[t.letter].kinds[0]);return n&&(0,J.jsx)(`img`,{src:n,alt:``,className:`pointer-events-none size-full object-contain opacity-80`,style:{gridRow:`${t.top+1} / span ${t.rows}`,gridColumn:`${t.left+1} / span ${t.cols}`}},`${t.top},${t.left}`)})]}),m&&(0,J.jsxs)(`p`,{role:`alert`,className:`text-sm text-amber-300`,children:[`⚠ `,Bn(a,m)]}),y&&(0,J.jsx)(zn,{place:y,fitting:E,letters:Object.keys(e.places).filter(e=>e!==y.letter),drawn:b.filter(e=>e.letter===y.letter).length,onChange:t=>{C(Fn(e,y.letter,t),!1)},onDrawAnother:()=>{l(y.letter),s(`copy`)},onClose:()=>d(void 0)})]})},qn=[...U,`cave`,`sphinx`],Jn=[`n`,`e`,`s`,`w`],Yn=`room`,Xn=(e,t)=>{try{let n=Qt(e,t);return{prefab:n,faults:E(n)}}catch(e){return{error:e instanceof Error?e.message:String(e)}}},$=({label:e,value:t,options:n,onChange:r})=>(0,J.jsxs)(`label`,{className:`flex flex-col gap-1 text-xs text-white/60`,children:[e,(0,J.jsx)(`select`,{value:t,onChange:e=>r(e.target.value),className:`rounded-md border border-red-400 bg-stone-950 p-1 text-sm text-white`,children:n.map(e=>(0,J.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),Zn=({initialText:e=De(window.location.hash),onClose:t})=>{let{t:i}=n(),[a,o]=(0,G.useState)(e),[s,c]=(0,G.useState)([]),[l,d]=(0,G.useState)(``),[f,p]=(0,G.useState)(),[m,h]=(0,G.useState)(Yn),[g,_]=(0,G.useState)(null),[v,y]=(0,G.useState)(0),[b,x]=(0,G.useState)(0),[S,C]=(0,G.useState)(),[w,T]=(0,G.useState)(),[E,D]=(0,G.useState)(null),O=(0,G.useMemo)(()=>Xn(a,m),[a,m]),k=e=>tn(e,{readAs:m}),A=`prefab`in O?O.prefab:void 0,j=g??A?.tier??`starter`,M=(0,G.useMemo)(()=>mn(j),[j]),N=(0,G.useMemo)(()=>A?u(A):[],[A]),P=Math.min(v,Math.max(N.length-1,0)),F=A?ln(A,P).fills:0,I=Math.min(b,Math.max(F-1,0)),L=A&&A.tier!==j?i(`devRoomEditor.tierDisagrees`,{header:A.tier,picked:j}):null,R=A?[...L?[L]:[],...`faults`in O?O.faults:[]]:[],z=e=>{o(e),D(null),window.history.replaceState(null,``,ke(e))},B=(e,t=!0)=>{e!==a&&(t&&c([...s,a]),z(e))},V=()=>{s.length!==0&&(z(s[s.length-1]),c(s.slice(0,-1)))},ee=e=>{B(Ln[e]),h(e),_(null),y(0),x(0)},te=async e=>{try{await navigator.clipboard.writeText(e),D(`copied`)}catch{D(`failed`)}},H=[{value:``,label:i(`devRoomEditor.automatic`)},...Jn.map(e=>({value:e,label:i(`devRoomEditor.direction.${e}`)}))],ne=Object.keys(Ln),U=N[P]?.layout??0;return(0,J.jsxs)(`div`,{className:`flex h-(--screen-height) flex-col gap-3 overflow-y-auto bg-neutral-900 p-4 text-white`,children:[(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,J.jsx)(`h2`,{className:`text-sm font-bold tracking-wide text-red-300 uppercase`,children:i(`devRoomEditor.title`)}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-end gap-2`,children:[(0,J.jsx)($,{label:i(`devRoomEditor.tier`),value:j,options:qn.map(e=>({value:e,label:e})),onChange:e=>_(e)}),ne.length>0&&(0,J.jsx)($,{label:i(`devRoomEditor.catalogue`),value:``,options:[{value:``,label:`…`},...ne.map(e=>({value:e,label:e}))],onChange:e=>e&&ee(e)}),t&&(0,J.jsx)(r,{label:i(`devRoomEditor.close`),onClick:t})]})]}),(0,J.jsxs)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:[(0,J.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,J.jsx)(`textarea`,{"aria-label":i(`devRoomEditor.notation`),value:a,onChange:e=>B(e.target.value),rows:16,autoCapitalize:`off`,autoComplete:`off`,autoCorrect:`off`,spellCheck:!1,className:`w-full rounded-md border border-red-400 bg-stone-950 p-2 font-mono text-base text-white`}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,J.jsx)(r,{label:i(`devRoomEditor.copyLink`),onClick:()=>te(`${window.location.origin}${window.location.pathname}${ke(a)}`)}),(0,J.jsx)(r,{label:i(`devRoomEditor.copyText`),onClick:()=>te(a)}),s.length>0&&(0,J.jsx)(r,{label:i(`devRoomEditor.undo`),onClick:V}),E&&(0,J.jsx)(`span`,{role:`status`,className:`text-sm text-white/80`,children:i(`devRoomEditor.${E}`)})]}),(0,J.jsxs)(`section`,{"aria-label":i(`devRoomEditor.palette`),children:[(0,J.jsx)(`h3`,{className:`mb-1 text-xs font-bold text-white/60 uppercase`,children:i(`devRoomEditor.palette`)}),(0,J.jsx)(`ul`,{className:`flex flex-wrap gap-2`,children:M.map(e=>(0,J.jsx)(`li`,{children:(0,J.jsxs)(`button`,{type:`button`,onClick:()=>B(_n(a,e)),draggable:!0,onDragStart:t=>t.dataTransfer.setData(Vn,e.kind),title:`${e.layer} ${e.cols}x${e.rows}${e.painted?``:` (${i(`devRoomEditor.unpainted`)})`}`,className:`flex w-20 flex-col items-center gap-1 rounded-md border border-white/20 p-1 text-xs ${e.painted?``:`opacity-50 grayscale`}`,children:[e.url&&(0,J.jsx)(`img`,{src:e.url,alt:``,className:`size-10 object-contain`}),(0,J.jsx)(`span`,{className:`break-all`,children:e.kind}),(0,J.jsxs)(`span`,{className:`text-white/60`,children:[e.cols,`x`,e.rows]})]})},e.kind))})]})]}),(0,J.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[A&&(0,J.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,J.jsx)($,{label:i(`devRoomEditor.layout`),value:String(P),options:N.map((e,t)=>({value:String(t),label:`${A.layouts[e.layout].name||e.layout+1}${e.mirrored?` ${i(`devRoomEditor.mirrored`)}`:``}`})),onChange:e=>y(Number(e))}),(0,J.jsxs)(`label`,{className:`flex flex-col gap-1 text-xs text-white/60`,children:[i(`devRoomEditor.fill`,{count:F}),(0,J.jsx)(`input`,{type:`number`,min:0,max:Math.max(F-1,0),value:I,onChange:e=>x(Math.max(0,Number(e.target.value)||0)),className:`w-20 rounded-md border border-red-400 bg-stone-950 p-1 text-sm text-white`})]}),(0,J.jsx)($,{label:i(`devRoomEditor.fromDoor`),value:S??``,options:H,onChange:e=>C(e||void 0)}),(0,J.jsx)($,{label:i(`devRoomEditor.toDoor`),value:w??``,options:H,onChange:e=>T(e||void 0)})]}),A&&(0,J.jsx)(Kn,{prefab:A,layout:U,palette:M,onChange:(e,t)=>B(k(e),!t)}),A&&(0,J.jsxs)(`form`,{className:`flex flex-wrap items-end gap-2`,onSubmit:e=>{e.preventDefault();let t=In(A,U,l.trim());p(Z(t)?t:void 0),Z(t)||t===A||(B(k(t)),d(``),y(u(t).findIndex(e=>e.layout===t.layouts.length-1)))},children:[(0,J.jsxs)(`label`,{className:`flex flex-col gap-1 text-xs text-white/60`,children:[i(`devRoomEditor.newLayout`),(0,J.jsx)(`input`,{value:l,onChange:e=>d(e.target.value),className:`rounded-md border border-red-400 bg-stone-950 p-1 text-sm text-white`})]}),(0,J.jsx)(r,{label:i(`devRoomEditor.addLayout`)}),f&&(0,J.jsxs)(`p`,{role:`alert`,className:`text-sm text-amber-300`,children:[`⚠ `,Bn(i,f)]})]}),A&&(0,J.jsx)(pn,{prefab:A,tileset:j,variant:P,fill:I,from:S,to:w,className:`h-96 w-full`}),(0,J.jsxs)(`section`,{"aria-label":i(`devRoomEditor.checks`),children:[(0,J.jsx)(`h3`,{className:`mb-1 text-xs font-bold text-white/60 uppercase`,children:i(`devRoomEditor.checks`)}),(0,J.jsxs)(`ul`,{className:`font-mono text-sm`,children:[`error`in O&&(0,J.jsxs)(`li`,{className:`text-red-300`,children:[`✗ `,O.error]}),R.map((e,t)=>(0,J.jsxs)(`li`,{className:`text-amber-300`,children:[`⚠ `,e]},t)),A&&R.length===0&&(0,J.jsxs)(`li`,{className:`text-white/80`,children:[`✓ `,i(`devRoomEditor.sound`)]})]})]})]})]})]})},Qn=e=>(window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)),$n=()=>window.location.hash.startsWith(Ae),er=()=>window.location.hash.startsWith(`#lock=`)||window.location.hash.startsWith(`#web=`)||$n(),tr=()=>(0,G.useSyncExternalStore)(Qn,er)?(0,J.jsx)(`div`,{className:`fixed inset-0 z-50 bg-neutral-900`,children:$n()?(0,J.jsx)(Zn,{onClose:()=>window.location.hash=``}):(0,J.jsx)(Wt,{onClose:()=>window.location.hash=``})}):null;export{tr as LockEditorHost};