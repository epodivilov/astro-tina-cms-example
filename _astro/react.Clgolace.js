import{r as q,R as u}from"./index.BX2CdW4Z.js";var v={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function k(){if(x)return _;x=1;var e=q(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function y(c,a,m){var r,d={},s=null,t=null;m!==void 0&&(s=""+m),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(t=a.ref);for(r in a)l.call(a,r)&&!f.hasOwnProperty(r)&&(d[r]=a[r]);if(c&&c.defaultProps)for(r in a=c.defaultProps,a)d[r]===void 0&&(d[r]=a[r]);return{$$typeof:n,type:c,key:s,ref:t,props:d,_owner:i.current}}return _.Fragment=o,_.jsx=y,_.jsxs=y,_}var E;function I(){return E||(E=1,v.exports=k()),v.exports}var M=I();function O(e){const n=JSON.stringify({query:e.query,variables:e.variables}),o=u.useMemo(()=>N(n),[n]),[l,i]=u.useState(e.data),[f,y]=u.useState(!1),[c,a]=u.useState(!1),[m,r]=u.useState(!1);return u.useEffect(()=>{y(!0),i(e.data),parent.postMessage({type:"url-changed"})},[o]),u.useEffect(()=>{if(c){let d=function(t){const h=t.target.getAttributeNames().find(p=>p.startsWith("data-tina-field"));let g;if(h)t.preventDefault(),t.stopPropagation(),g=t.target.getAttribute(h);else{const p=t.target.closest("[data-tina-field], [data-tina-field-overlay]");if(p){const b=p.getAttributeNames().find(R=>R.startsWith("data-tina-field"));b&&(t.preventDefault(),t.stopPropagation(),g=p.getAttribute(b))}}g&&m&&parent.postMessage({type:"field:selected",fieldName:g},window.location.origin)};const s=document.createElement("style");return s.type="text/css",s.textContent=`
        [data-tina-field] {
          outline: 2px dashed rgba(34,150,254,0.5);
          transition: box-shadow ease-out 150ms;
        }
        [data-tina-field]:hover {
          box-shadow: inset 100vi 100vh rgba(34,150,254,0.3);
          outline: 2px solid rgba(34,150,254,1);
          cursor: pointer;
        }
        [data-tina-field-overlay] {
          outline: 2px dashed rgba(34,150,254,0.5);
          position: relative;
        }
        [data-tina-field-overlay]:hover {
          cursor: pointer;
          outline: 2px solid rgba(34,150,254,1);
        }
        [data-tina-field-overlay]::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 20;
          transition: opacity ease-out 150ms;
          background-color: rgba(34,150,254,0.3);
          opacity: 0;
        }
        [data-tina-field-overlay]:hover::after {
          opacity: 1;
        }
      `,document.head.appendChild(s),document.body.classList.add("__tina-quick-editing-enabled"),document.addEventListener("click",d,!0),()=>{document.removeEventListener("click",d,!0),document.body.classList.remove("__tina-quick-editing-enabled"),s.remove()}}},[c,m]),u.useEffect(()=>{e?.experimental___selectFormByFormId&&parent.postMessage({type:"user-select-form",formId:e.experimental___selectFormByFormId()})},[o]),u.useEffect(()=>{const{experimental___selectFormByFormId:d,...s}=e;return parent.postMessage({type:"open",...s,id:o},window.location.origin),window.addEventListener("message",t=>{t.data.type==="quickEditEnabled"&&a(t.data.value),t.data.id===o&&t.data.type==="updateData"&&(i(t.data.data),r(!0),document.querySelector("[data-tina-field]")?parent.postMessage({type:"quick-edit",value:!0},window.location.origin):parent.postMessage({type:"quick-edit",value:!1},window.location.origin))}),()=>{parent.postMessage({type:"close",id:o},window.location.origin)}},[o,a]),{data:l,isClient:f}}const A=(e,n,o)=>{var l,i;return e&&e._content_source?n?[(i=e._content_source)==null?void 0:i.queryId,[...e._content_source.path,n].join(".")].join("---"):[(l=e._content_source)==null?void 0:l.queryId,e._content_source.path.join(".")].join("---"):""},N=e=>{let n=0;for(let i=0;i<e.length;i++){const f=e.charCodeAt(i);n=(n<<5)-n+f&4294967295}return Math.abs(n).toString(36)};export{M as j,A as t,O as u};
