import{r as f,j as e,e as t,h as u}from"./app-e676fbb6.js";import{D as C}from"./DeleteConfirmationModal-5ba42ba9.js";import{u as D,L as g}from"./Layout-bf3ffdb4.js";import{T as S,a as T,b as o,c as i,d as b,e as r}from"./chunk-Z3IFIKNA-b860e54e.js";import{C as I,H as k}from"./chunk-SRMZVY4F-4b05392e.js";import{B as z,a as n}from"./chunk-6CSUKJP7-d76735a6.js";import{F as B}from"./chunk-MPFPK3CX-892dce6f.js";import{S as E}from"./chunk-O5CRURSQ-6dee9f37.js";import"./chunk-GYFRIY2Z-be1027a1.js";const M=({categories:a,auth:c})=>{const{isOpen:l,onOpen:d,onClose:h}=D(),[x,m]=f.useState(null),j=()=>{u.Inertia.delete(`/categories/${x.id}`)},p=s=>{m(s),d()};return e.jsx(g,{auth:c,children:e.jsx(I,{maxW:"container.lg",children:e.jsxs(z,{children:[e.jsxs(B,{justifyContent:"space-between",alignItems:"center",m:5,children:[e.jsx(k,{as:"h1",size:"xl",children:"Categories"}),e.jsx(t,{href:"/categories/create",children:e.jsx(n,{colorScheme:"green",size:"sm",children:"Create category"})})]}),e.jsxs(S,{variant:"striped",children:[e.jsx(T,{children:e.jsxs(o,{children:[e.jsx(i,{children:"ID"}),e.jsx(i,{children:"Name"}),e.jsx(i,{children:"Description"}),e.jsx(i,{children:"Actions"})]})}),e.jsx(b,{children:a.map(s=>e.jsxs(o,{children:[e.jsx(r,{children:s.id}),e.jsx(r,{children:s.name}),e.jsx(r,{children:s.description}),e.jsx(r,{children:e.jsxs(E,{direction:"row",spacing:4,children:[e.jsx(t,{href:`/categories/${s.id}/edit`,children:e.jsx(n,{colorScheme:"blue",size:"sm",children:"Edit"})}),e.jsx(n,{size:"sm",colorScheme:"red",onClick:()=>p(s),children:"Delete"})]})})]},s.id))})]}),e.jsx(C,{isOpen:l,onClose:h,onDelete:j})]})})})};export{M as default};
