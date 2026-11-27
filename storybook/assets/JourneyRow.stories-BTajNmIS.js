import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BfmzYHTX.js";import{n,t as r}from"./JourneyRow-_2QeVwtM.js";import{n as i,t as a}from"./JourneyStops-TxMGeTs0.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i(),o=t(),s={component:r,parameters:{layout:`centered`},args:{name:`Vallei van de Smeden`,status:`open`,exterior:`pyramid`,currentLabel:`NU`},decorators:[e=>(0,o.jsx)(`div`,{className:`w-[358px] bg-camp-paper p-3.5`,children:(0,o.jsx)(e,{})})]},c={args:{status:`current`,note:`Bezig · piramide 3 van 5`}},l={args:{note:`Nog niet begonnen`}},u={args:{status:`finished`,note:`Voltooid`}},d={args:{status:`finished`,note:`Voltooid · 1 verborgen deur open`,dot:!0,dotLabel:`Er is iets nieuws`}},f={args:{exterior:`tomb`,note:`Graftombe`}},p={args:{status:`finished`,note:`Voltooid`,mark:`★ 3`}},m={args:{status:`locked`,exterior:`tomb`,name:`Kluis van de Edelman`,note:`Nog 1 kaartstuk nodig (2 van 3)`}},h={args:{status:`locked`,name:`Volgende tier`,needs:[{label:`Vind deze schat`,symbols:[{symbol:`𓋹`,held:!1}]}]}},g={args:{status:`locked`,name:`Expert-reizen`,needs:[{label:`Vind deze schat`,symbols:[{symbol:`𓋹`,held:!0}]},{label:`Je hebt een ezel nodig`,hint:`Fez verkoopt er een in de Graftombe van Ra`}]}},_={args:{status:`locked`,exterior:`tomb`,name:`Kluis van de Edelman`,needs:[{label:`Je hebt een kar nodig`,hint:`Fez verkoopt er een in de Graftombe van Ra`}]}},v={args:{status:`open`,note:`Nog niet begonnen`,details:[(0,o.jsx)(`p`,{className:`text-[13px]`,children:`3 van 5 stenen getrokken`},`stones`)]}},y={args:{status:`current`,note:`piramide 3 van 5`,compact:!0}},b={args:{status:`finished`,note:`Voltooid`,stops:{label:`Piramides tonen`,open:!1,onToggle:()=>{}}}},x={args:{status:`finished`,note:`Voltooid`,stops:{label:`Piramides verbergen`,open:!0,onToggle:()=>{}},children:(0,o.jsx)(a,{label:`Piramide`,onStop:()=>{},stops:[{n:1,state:`done`},{n:2,state:`done`,dot:!0,dotLabel:`Nog niet alles bekeken`},{n:3,state:`buried`}]})}},S=[`Current`,`Open`,`Finished`,`FinishedWithDot`,`Tomb`,`WithMark`,`Locked`,`LockedWithSymbols`,`LockedTierWithHint`,`LockedTombWithNeed`,`WithDetails`,`Compact`,`StopsClosed`,`StopsOpen`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: "current",
    note: "Bezig · piramide 3 van 5"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    note: "Nog niet begonnen"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: "finished",
    note: "Voltooid"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: "finished",
    note: "Voltooid · 1 verborgen deur open",
    dot: true,
    dotLabel: "Er is iets nieuws"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    exterior: "tomb",
    note: "Graftombe"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: "finished",
    note: "Voltooid",
    mark: "★ 3"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: "locked",
    exterior: "tomb",
    name: "Kluis van de Edelman",
    note: "Nog 1 kaartstuk nodig (2 van 3)"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: "locked",
    name: "Volgende tier",
    needs: [{
      label: "Vind deze schat",
      symbols: [{
        symbol: "𓋹",
        held: false
      }]
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: "locked",
    name: "Expert-reizen",
    needs: [{
      label: "Vind deze schat",
      symbols: [{
        symbol: "𓋹",
        held: true
      }]
    }, {
      label: "Je hebt een ezel nodig",
      hint: "Fez verkoopt er een in de Graftombe van Ra"
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: "locked",
    exterior: "tomb",
    name: "Kluis van de Edelman",
    needs: [{
      label: "Je hebt een kar nodig",
      hint: "Fez verkoopt er een in de Graftombe van Ra"
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    status: "open",
    note: "Nog niet begonnen",
    details: [<p key="stones" className="text-[13px]">
        3 van 5 stenen getrokken
      </p>]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: "current",
    note: "piramide 3 van 5",
    compact: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    status: "finished",
    note: "Voltooid",
    stops: {
      label: "Piramides tonen",
      open: false,
      onToggle: () => {}
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    status: "finished",
    note: "Voltooid",
    stops: {
      label: "Piramides verbergen",
      open: true,
      onToggle: () => {}
    },
    children: <JourneyStops label="Piramide" onStop={() => {}} stops={[{
      n: 1,
      state: "done"
    }, {
      n: 2,
      state: "done",
      dot: true,
      dotLabel: "Nog niet alles bekeken"
    }, {
      n: 3,
      state: "buried"
    }]} />
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{y as Compact,c as Current,u as Finished,d as FinishedWithDot,m as Locked,g as LockedTierWithHint,_ as LockedTombWithNeed,h as LockedWithSymbols,l as Open,b as StopsClosed,x as StopsOpen,f as Tomb,v as WithDetails,p as WithMark,S as __namedExportsOrder,s as default};