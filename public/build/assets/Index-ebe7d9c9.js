import{r as p,j as e,e as f,h as D}from"./app-e676fbb6.js";import{D as u}from"./DeleteConfirmationModal-5ba42ba9.js";import{u as C,L as T}from"./Layout-bf3ffdb4.js";import{C as S,H as b}from"./chunk-SRMZVY4F-4b05392e.js";import{B as I,a as r}from"./chunk-6CSUKJP7-d76735a6.js";import{F as g}from"./chunk-MPFPK3CX-892dce6f.js";import{T as k,a as E,b as l,c as i,d as y,e as n}from"./chunk-Z3IFIKNA-b860e54e.js";import{S as z}from"./chunk-O5CRURSQ-6dee9f37.js";import"./chunk-GYFRIY2Z-be1027a1.js";const v=({users:t,auth:o})=>{const{isOpen:a,onOpen:c,onClose:d}=C(),[h,x]=p.useState(null),m=()=>{D.Inertia.delete(`/users/${h.id}`)},j=s=>{x(s),c()};return e.jsx(T,{auth:o,children:e.jsx(S,{maxW:"container.lg",children:e.jsxs(I,{children:[e.jsx(g,{justifyContent:"space-between",alignItems:"center",m:5,children:e.jsx(b,{as:"h1",size:"xl",children:"Users"})}),e.jsxs(k,{variant:"striped",children:[e.jsx(E,{children:e.jsxs(l,{children:[e.jsx(i,{children:"ID"}),e.jsx(i,{children:"Name"}),e.jsx(i,{children:"Email"}),e.jsx(i,{children:"Phone"}),e.jsx(i,{children:"Role"}),e.jsx(i,{children:"Actions"})]})}),e.jsx(y,{children:t.map(s=>e.jsxs(l,{children:[e.jsx(n,{children:s.id}),e.jsx(n,{children:s.name}),e.jsx(n,{children:s.email}),e.jsx(n,{children:s.phone}),e.jsx(n,{children:s.role}),e.jsx(n,{children:e.jsxs(z,{direction:"row",spacing:4,children:[e.jsx(f,{href:`/users/${s.id}/edit`,children:e.jsx(r,{colorScheme:"blue",size:"sm",children:"Edit"})}),e.jsx(r,{size:"sm",colorScheme:"red",onClick:()=>j(s),children:"Delete"})]})})]},s.id))})]}),e.jsx(u,{isOpen:a,onClose:d,onDelete:m})]})})})};export{v as default};
