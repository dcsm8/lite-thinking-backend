import{f as I,j as e,a as y,b as w,u as E,o as L,h as q,r as g,l as z,e as H,g as B}from"./app-4834d360.js";import{u as A}from"./index.esm-e859c0b8.js";import{L as O}from"./Layout-e82fa00b.js";import{b as T,F as v,a as C,I as W}from"./chunk-GYFRIY2Z-a5e71354.js";import{N as D,a as M}from"./chunk-GIDWA67N-3db5cf24.js";import{C as R,H as Q}from"./chunk-SRMZVY4F-6a0c4371.js";import{B as V,a as S}from"./chunk-6CSUKJP7-3c4dd631.js";import{T as Y}from"./chunk-OEQDSMWZ-ee9c91cb.js";import{S as G}from"./chunk-O5CRURSQ-ecda2068.js";import{F as J}from"./chunk-MPFPK3CX-73715752.js";var _=I(function(a,s){const{children:o,placeholder:i,className:l,...d}=a;return e.jsxs(y.select,{...d,ref:s,className:w("chakra-select",l),children:[i&&e.jsx("option",{value:"",children:i}),o]})});_.displayName="SelectField";function K(r,a){const s={},o={};for(const[i,l]of Object.entries(r))a.includes(i)?s[i]=l:o[i]=l;return[s,o]}var N=I((r,a)=>{var s;const o=E("Select",r),{rootProps:i,placeholder:l,icon:d,color:u,height:f,h:p,minH:x,minHeight:j,iconColor:t,iconSize:n,...c}=L(r),[m,h]=K(c,z),b=T(h),F={width:"100%",height:"fit-content",position:"relative",color:u},k={paddingEnd:"2rem",...o.field,_focus:{zIndex:"unset",...(s=o.field)==null?void 0:s._focus}};return e.jsxs(y.div,{className:"chakra-select__wrapper",__css:F,...m,...i,children:[e.jsx(_,{ref:a,height:p??f,minH:x??j,placeholder:l,...b,__css:k,children:r.children}),e.jsx(P,{"data-disabled":q(b.disabled),...(t||u)&&{color:t||u},__css:o.icon,...n&&{fontSize:n},children:d})]})});N.displayName="Select";var U=r=>e.jsx("svg",{viewBox:"0 0 24 24",...r,children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),X=y("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),P=r=>{const{children:a=e.jsx(U,{}),...s}=r,o=g.cloneElement(a,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return e.jsx(X,{...s,className:"chakra-select__icon-wrapper",children:g.isValidElement(a)?o:null})};P.displayName="SelectIcon";const le=({auth:r,products:a})=>{const{register:s,handleSubmit:o,formState:i}=A(),[l,d]=g.useState([]),u=t=>{B.Inertia.post("/orders",{...t,products:l})},f=()=>{d([...l,{productId:"",quantity:1}])},p=(t,n)=>{const{value:c}=t.target;d(m=>{const h=[...m];return h[n]={...h[n],productId:c},h})},x=(t,n)=>{d(c=>{const m=[...c];return m[n]={...m[n],quantity:t},m})},j=a.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id));return e.jsx(O,{auth:r,children:e.jsx(R,{maxW:"container.lg",children:e.jsxs(V,{maxW:"xl",mx:"auto",mt:5,children:[e.jsx(Q,{as:"h1",size:"xl",mb:5,children:"Create Order"}),e.jsxs("form",{onSubmit:o(u),children:[e.jsxs(v,{id:"name",mb:5,children:[e.jsx(C,{children:"Name"}),e.jsx(W,{...s("name",{required:!0}),type:"text",placeholder:"Enter order name"})]}),e.jsxs(v,{id:"description",mb:5,children:[e.jsx(C,{children:"Description"}),e.jsx(Y,{...s("description",{required:!0}),placeholder:"Enter order description"})]}),l.map((t,n)=>e.jsxs(G,{direction:"row",spacing:4,align:"center",children:[e.jsx(N,{placeholder:"Select product",value:t.productId,onChange:c=>p(c,n),children:j}),e.jsx(D,{min:1,value:t.quantity,onChange:c=>x(c,n),children:e.jsx(M,{})})]},n)),e.jsx(S,{onClick:f,mt:3,children:"Add Product"}),e.jsxs(J,{justifyContent:"flex-end",mt:5,children:[e.jsx(H,{href:"/orders",children:e.jsx(S,{colorScheme:"red",mr:3,children:"Cancel"})}),e.jsx(S,{colorScheme:"teal",isLoading:i.isSubmitting,type:"submit",children:"Create"})]})]})]})})})};export{le as default};