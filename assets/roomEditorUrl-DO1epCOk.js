var e=`#lock=`,t=`#web=`,n=`in -[L]- out
L toggle @in
in ?
out ?
`,r=t=>`${e}${encodeURIComponent(t)}`,i=e=>`${t}${encodeURIComponent(e)}`,a=(e,t)=>{if(!t.startsWith(e))return null;try{return decodeURIComponent(t.slice(e.length))}catch{return null}},o=t=>a(e,t),s=e=>a(t,e),c=e=>o(e)??`in -[L]- out
L toggle @in
in ?
out ?
`,l=e=>s(e)??`// designed by: 
[w3]
sand by sun

[w1p1]
lever sun @end
`,u=`#room=`,d=`// designed by:
room hall
tier starter
layout
# # # # # # #
# . . . . . #
# . . s . . #
# . . . . . #
# # # d # # #
s stop
`,f=e=>`${u}${encodeURIComponent(e)}`,p=e=>{if(!e.startsWith(`#room=`))return null;try{return decodeURIComponent(e.slice(6))}catch{return null}},m=e=>p(e)??`// designed by:
room hall
tier starter
layout
# # # # # # #
# . . . . . #
# . . s . . #
# . . . . . #
# # # d # # #
s stop
`;export{e as a,r as c,l as d,m as i,i as l,d as n,n as o,f as r,t as s,u as t,c as u};