import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./package-D0Ex1IVc.js";import{a as n,o as r}from"./dialogFocus-CTsUHdDF.js";import{n as i}from"./iframe-BfmzYHTX.js";var a,o;function s(){return(s=e((()=>{t(),r(),a=i(),o=({isOpen:e,title:t,message:r,confirmText:i,cancelText:o,onConfirm:s,onCancel:c,confirmButtonClass:l=`bg-red-600 hover:bg-red-700`})=>e?(0,a.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center`,children:[(0,a.jsx)(`div`,{"aria-hidden":!0,className:`absolute inset-0 bg-black/50`,onClick:c}),(0,a.jsxs)(`div`,{ref:n,role:`dialog`,"aria-modal":`true`,"aria-label":t,tabIndex:-1,className:`focus-brackets relative z-10 mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl outline-none`,children:[(0,a.jsx)(`h2`,{className:`mb-4 text-xl font-bold text-gray-900`,children:t}),(0,a.jsx)(`div`,{className:`mb-6 text-gray-700`,children:typeof r==`string`?(0,a.jsx)(`p`,{children:r}):r}),(0,a.jsxs)(`div`,{className:`flex justify-end gap-3`,children:[(0,a.jsx)(`button`,{"data-input-back":!0,onClick:c,className:`rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300`,children:o}),(0,a.jsx)(`button`,{onClick:s,className:`rounded-lg px-4 py-2 font-medium text-white transition-colors ${l}`,children:i})]})]})]}):null})))()}var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s(),c=i(),l={component:o,parameters:{layout:`fullscreen`},argTypes:{isOpen:{control:`boolean`},title:{control:`text`},message:{control:`text`},confirmText:{control:`text`},cancelText:{control:`text`},confirmButtonClass:{control:`text`}}},u={args:{isOpen:!0,title:`Confirm Action`,message:`Are you sure you want to perform this action?`,confirmText:`Confirm`,cancelText:`Cancel`,onConfirm:()=>console.log(`Confirmed`),onCancel:()=>console.log(`Cancelled`)}},d={args:{isOpen:!0,title:`Delete Item`,message:`Are you sure you want to delete this item? This action cannot be undone.`,confirmText:`Delete`,cancelText:`Cancel`,confirmButtonClass:`bg-red-600 hover:bg-red-700`,onConfirm:()=>console.log(`Deleted`),onCancel:()=>console.log(`Cancelled`)}},f={args:{isOpen:!0,title:`Save Changes`,message:`Do you want to save your changes before leaving?`,confirmText:`Save`,cancelText:`Discard`,confirmButtonClass:`bg-green-600 hover:bg-green-700`,onConfirm:()=>console.log(`Saved`),onCancel:()=>console.log(`Discarded`)}},p={args:{isOpen:!0,title:`Important Notice`,message:`This is a very long message that explains in detail what will happen when you confirm this action. It might span multiple lines and should be displayed properly in the modal without breaking the layout.`,confirmText:`I Understand`,cancelText:`Cancel`,onConfirm:()=>console.log(`Understood`),onCancel:()=>console.log(`Cancelled`)}},m={args:{isOpen:!1,title:`Hidden Modal`,message:`This modal is not visible`,confirmText:`Confirm`,cancelText:`Cancel`,onConfirm:()=>console.log(`Confirmed`),onCancel:()=>console.log(`Cancelled`)}},h={args:{isOpen:!0,title:`Reset Game Progress`,message:(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`mb-2`,children:`You are about to reset all game progress.`}),(0,c.jsx)(`p`,{className:`mb-2 font-semibold text-red-600`,children:`This will:`}),(0,c.jsxs)(`ul`,{className:`list-disc pl-4`,children:[(0,c.jsx)(`li`,{children:`Delete all saved games`}),(0,c.jsx)(`li`,{children:`Reset journey progress`}),(0,c.jsx)(`li`,{children:`Clear collected treasures`})]})]}),confirmText:`Reset Everything`,cancelText:`Keep Progress`,confirmButtonClass:`bg-red-600 hover:bg-red-700`,onConfirm:()=>console.log(`Reset confirmed`),onCancel:()=>console.log(`Reset cancelled`)}},g=[`Default`,`DeleteAction`,`SaveAction`,`LongMessage`,`Closed`,`WithCustomMessage`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Confirm Action",
    message: "Are you sure you want to perform this action?",
    confirmText: "Confirm",
    cancelText: "Cancel",
    onConfirm: () => console.log("Confirmed"),
    onCancel: () => console.log("Cancelled")
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Delete Item",
    message: "Are you sure you want to delete this item? This action cannot be undone.",
    confirmText: "Delete",
    cancelText: "Cancel",
    confirmButtonClass: "bg-red-600 hover:bg-red-700",
    onConfirm: () => console.log("Deleted"),
    onCancel: () => console.log("Cancelled")
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Save Changes",
    message: "Do you want to save your changes before leaving?",
    confirmText: "Save",
    cancelText: "Discard",
    confirmButtonClass: "bg-green-600 hover:bg-green-700",
    onConfirm: () => console.log("Saved"),
    onCancel: () => console.log("Discarded")
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Important Notice",
    message: "This is a very long message that explains in detail what will happen when you confirm this action. It might span multiple lines and should be displayed properly in the modal without breaking the layout.",
    confirmText: "I Understand",
    cancelText: "Cancel",
    onConfirm: () => console.log("Understood"),
    onCancel: () => console.log("Cancelled")
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    title: "Hidden Modal",
    message: "This modal is not visible",
    confirmText: "Confirm",
    cancelText: "Cancel",
    onConfirm: () => console.log("Confirmed"),
    onCancel: () => console.log("Cancelled")
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Reset Game Progress",
    message: <div>
        <p className="mb-2">You are about to reset all game progress.</p>
        <p className="mb-2 font-semibold text-red-600">This will:</p>
        <ul className="list-disc pl-4">
          <li>Delete all saved games</li>
          <li>Reset journey progress</li>
          <li>Clear collected treasures</li>
        </ul>
      </div>,
    confirmText: "Reset Everything",
    cancelText: "Keep Progress",
    confirmButtonClass: "bg-red-600 hover:bg-red-700",
    onConfirm: () => console.log("Reset confirmed"),
    onCancel: () => console.log("Reset cancelled")
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Closed,u as Default,d as DeleteAction,p as LongMessage,f as SaveAction,h as WithCustomMessage,g as __namedExportsOrder,l as default};