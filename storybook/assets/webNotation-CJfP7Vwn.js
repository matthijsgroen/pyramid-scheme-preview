import{n as e}from"./rolldown-runtime-sJBDdmOt.js";var t,n,r,i,a,o,s,c,l;function u(){return(u=e((()=>{t=`#lock=`,n=`#web=`,r=e=>`${t}${encodeURIComponent(e)}`,i=e=>`${n}${encodeURIComponent(e)}`,a=(e,t)=>{if(!t.startsWith(e))return null;try{return decodeURIComponent(t.slice(e.length))}catch{return null}},o=e=>a(t,e),s=e=>a(n,e),c=e=>o(e)??`in -[L]- out
L toggle @in
in ?
out ?
`,l=e=>s(e)??`// designed by: 
[w3]
sand by sun

[w1p1]
lever sun @end
`})))()}var d,f;function p(){return(p=e((()=>{d=e=>({check:async(t,n)=>e.check(t,n),act:async(t,n,r)=>e.act(t,n,r),dispose:()=>{}}),f=()=>{let e=new Worker(new URL(new URL(`webCheck.worker-BrzO_BVP.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),t=0,n=new Map;e.onmessage=({data:e})=>{let t=n.get(e.id);n.delete(e.id),e.error===void 0?t?.resolve(e.answer):t?.reject(Error(e.error))};let r;e.onerror=e=>{r=Error(e.message||`the web worker did not load: reload the page`);for(let e of n.values())e.reject(r);n.clear()};let i=i=>new Promise((a,o)=>{if(r)return o(r);let s=t++;n.set(s,{resolve:a,reject:o}),e.postMessage({...i,id:s})});return{check:(e,t)=>i({type:`check`,text:e,name:t}),act:(e,t,n)=>i({type:`act`,version:e,state:t,action:n}),dispose:()=>e.terminate()}}})))()}var m,h,g,_,v;function y(){return(y=e((()=>{m=`A WEB (a .web file): blocks, each a place in the world, every line inside relative to it
  // designed by: name             a web opens with its designer
  [w3]                             a journey block: wizard_3, all its pyramids; a place may start with pM
  [w3p1]                           a pyramid block: wizard_3, pyramid 1 (its levelNr)

ACTIVATORS (each name once in the web; lever and key differ only in look)
  lever reed @60% side             at the end of the first side section hanging off the main path after 60%
  key ankh @55%                    at the main-path room nearest 55% of the line
  lever sun @end                   at the last room of the main path
  lever lotus @weighing.vault      in region vault of lock weighing on this pyramid (f1.weighing.vault on floor 1)

SAND (a pot: the Nth lever pulled, whichever, clears to the Nth stop; the last stop is 100%)
  sand by sun moon star            over this block's line, stops spaced equally: 33% 67% 100%
  sand 40% 75% 100% by sun moon star    the stops written
  sand from 50%: 75% 100% by reed ankh  the sand starts at 50%; before it the line is playable
  sand p3 by sun moon              in a journey block: over pyramid 3's line
  sand f1.s4 by sun                over one side section's own line
  sand weighing.A by moon          a lock's outside input, held once moon is taken

DOORS
  ankh opens 70%                   a door on the main-path seam nearest 70%, shut until ankh
  ankh opens side @80%             a door at the mouth of the first side section after 80%
`,h=/^[A-Za-z]\w*$/,g=/^(\d+(?:\.\d+)?)%$/,_=e=>{let t=e===void 0?null:g.exec(e);return t?Number(t[1]):void 0},v=(e,t=`web`)=>{let n=(e,t)=>{throw Error(`line ${e}: ${t}`)},r=/^\s*\/\/\s*designed by:\s*(.+?)\s*$/m.exec(e)?.[1],i=[];return e.split(`
`).forEach((e,t)=>{let r=t+1,a=e.replace(/\/\/.*/,``).trim();if(a===``)return;let o=/^\[w(\d+)(?:p(\d+))?\]$/.exec(a);if(o){i.push({n:r,journey:Number(o[1]),pyramid:o[2]?Number(o[2]):void 0,lines:[]});return}a.startsWith(`[`)&&n(r,`cannot read the block "${a}": write [w3] or [w3p1]`);let s=i[i.length-1]??n(r,`a line stands in a block: start with [w3] or [w3p1]`),c=a.split(/\s+/),l=e=>{let t=/^p(\d+)$/.exec(c[e]??``);return t?(s.pyramid!==void 0&&n(r,`${c[e]} names a pyramid inside the pyramid block [w${s.journey}p${s.pyramid}]`),{pyramid:Number(t[1]),next:e+1}):{next:e}},u=e=>(e!==void 0&&h.test(e)||n(r,`cannot read the name "${e??``}"`),e);if(c[0]===`lever`||c[0]===`key`){let e=c[0],t=u(c[1]),{pyramid:i,next:o}=l(2),d=c.slice(o),f=d[0]??``;f.startsWith(`@`)||n(r,`an activator stands at a place: ${e} ${t} @end, @45%, @60% side or @lock.region`);let p=f.slice(1),m=_(p),g;if(p===`end`&&d.length===1)g={pyramid:i,kind:`end`};else if(m!==void 0&&d.length===1)g={pyramid:i,kind:`room`,pct:m};else if(m!==void 0&&d.length===2&&d[1]===`side`)g={pyramid:i,kind:`side`,pct:m};else{let e=p.split(`.`),t=/^f(\d+)$/.exec(e[0]),a=t?e.slice(1):e;d.length===1&&a.length===2&&a.every(e=>h.test(e))||n(r,`cannot read the place "${d.join(` `)}"`),g={pyramid:i,kind:`region`,floor:t?Number(t[1]):void 0,lock:a[0],region:a[1]}}s.lines.push({n:r,text:a,type:`activator`,look:e,name:t,place:g})}else if(c[0]===`sand`){let e=c.indexOf(`by`);e<0&&n(r,`a sand line names its levers after by: sand by sun moon`);let t=c.slice(e+1).map(u);t.length===0&&n(r,`a sand line names at least one lever after by`);let{pyramid:i,next:o}=l(1),d=o,f={pyramid:i,kind:`line`},p=c[d];if(d<e&&p!==`from`&&_(p)===void 0){let e=p.split(`.`),t=/^f(\d+)$/.exec(e[0]),a=t?e.slice(1):e;a.length!==0&&a.every(e=>/^[\w-]+$/.test(e))||n(r,`cannot read the sand's place "${p}"`),!t&&a.length!==2&&n(r,`cannot read the sand's place "${p}": write f1.s4 or lock.input`),f=t?{pyramid:i,kind:`section`,floor:Number(t[1]),address:a.join(`.`)}:{pyramid:i,kind:`input`,lock:a[0],input:a[1]},d++}let m;if(c[d]===`from`){let e=c[d+1]??``;m=_(e.replace(/:$/,``)),m===void 0&&n(r,`the sand's start is written from 50%:`),d+=2}let h=c.slice(d,e).map(e=>_(e)??n(r,`cannot read the stop "${e}": write 50%`));s.lines.push({n:r,text:a,type:`sand`,target:f,...m===void 0?{}:{from:m},...h.length>0?{stops:h}:{},levers:t})}else if(c[1]===`opens`){let e=u(c[0]),{pyramid:t,next:i}=l(2),o=c.slice(i),d=_(o[o.length-1]?.replace(/^@/,``)),f;o.length===1&&d!==void 0&&!o[0].startsWith(`@`)&&(f={pyramid:t,kind:`seam`,pct:d}),o.length===2&&o[0]===`side`&&o[1].startsWith(`@`)&&d!==void 0&&(f={pyramid:t,kind:`mouth`,pct:d}),f||n(r,`cannot read the door "${o.join(` `)}": write ${e} opens 70% or ${e} opens side @80%`),s.lines.push({n:r,text:a,type:`opens`,name:e,place:f})}else n(r,`cannot read "${a}"`)}),{name:t,...r?{designedBy:r}:{},blocks:i}}})))()}export{p as a,r as c,c as d,l as f,d as i,i as l,y as n,f as o,v as r,n as s,m as t,u};