import{r as f,j as e,e as t,h as u}from"./app-ca9cffc0.js";import{D}from"./DeleteConfirmationModal-ad7847c1.js";import{u as C,L as S}from"./Layout-48f0130c.js";import{C as T,H as b}from"./chunk-SRMZVY4F-6722f931.js";import{B as g,a as n}from"./chunk-6CSUKJP7-08c02334.js";import{F as I}from"./chunk-MPFPK3CX-0190d286.js";import{T as O,a as k,b as c,c as r,d as z,e as i}from"./chunk-Z3IFIKNA-e1d4b63c.js";import{S as y}from"./chunk-O5CRURSQ-60b75f76.js";import"./chunk-GYFRIY2Z-ca6a6473.js";const M=({orders:l,auth:d})=>{const{isOpen:a,onOpen:o,onClose:h}=C(),[x,m]=f.useState(null),j=()=>{u.Inertia.delete(`/orders/${x.id}`)},p=s=>{m(s),o()};return e.jsx(S,{auth:d,children:e.jsx(T,{maxW:"container.lg",children:e.jsxs(g,{children:[e.jsxs(I,{justifyContent:"space-between",alignItems:"center",m:5,children:[e.jsx(b,{as:"h1",size:"xl",children:"Orders"}),e.jsx(t,{href:"/orders/create",children:e.jsx(n,{colorScheme:"green",size:"sm",children:"Create order"})})]}),e.jsxs(O,{variant:"striped",children:[e.jsx(k,{children:e.jsxs(c,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Description"}),e.jsx(r,{children:"Price"}),e.jsx(r,{children:"Actions"})]})}),e.jsx(z,{children:l.map(s=>e.jsxs(c,{children:[e.jsx(i,{children:s.id}),e.jsx(i,{children:s.name}),e.jsx(i,{children:s.description}),e.jsx(i,{children:s.price}),e.jsx(i,{children:e.jsxs(y,{direction:"row",spacing:4,children:[e.jsx(t,{href:`/orders/${s.id}/edit`,children:e.jsx(n,{colorScheme:"blue",size:"sm",children:"Edit"})}),e.jsx(n,{size:"sm",colorScheme:"red",onClick:()=>p(s),children:"Delete"})]})})]},s.id))})]}),e.jsx(D,{isOpen:a,onClose:h,onDelete:j})]})})})};export{M as default};