import{j as s}from"./app-e676fbb6.js";import{L as x,H as r}from"./Layout-bf3ffdb4.js";import{V as j}from"./chunk-MUMUYFOI-f426a674.js";import{T as e}from"./chunk-P74GIWPW-b89ad6d9.js";import{S as m}from"./chunk-O5CRURSQ-6dee9f37.js";import{C as p,H as o}from"./chunk-SRMZVY4F-4b05392e.js";import{B as f,a as g}from"./chunk-6CSUKJP7-d76735a6.js";import{T as u,a as T,b as l,c as t,d as b,e as i}from"./chunk-Z3IFIKNA-b860e54e.js";import"./chunk-MPFPK3CX-892dce6f.js";const D=({company:n,auth:a})=>{const c=()=>{window.location.href=`/companies/${n.NIT}/pdf`};return s.jsx(x,{auth:a,children:s.jsx(p,{maxW:"container.lg",children:s.jsxs(f,{maxW:"xl",mx:"auto",mt:5,children:[s.jsxs(m,{children:[s.jsx(o,{as:"h1",size:"xl",mb:5,children:"Company Inventory"}),s.jsx(g,{colorScheme:"blue",onClick:c,children:"Download PDF"})]}),s.jsxs(j,{spacing:4,align:"start",mt:4,children:[s.jsxs(r,{spacing:2,children:[s.jsx(e,{fontWeight:"bold",children:"NIT:"}),s.jsx(e,{children:n.NIT})]}),s.jsxs(r,{spacing:2,children:[s.jsx(e,{fontWeight:"bold",children:"Name:"}),s.jsx(e,{children:n.name})]}),s.jsxs(r,{spacing:2,children:[s.jsx(e,{fontWeight:"bold",children:"Address:"}),s.jsx(e,{children:n.address})]}),s.jsxs(r,{spacing:2,children:[s.jsx(e,{fontWeight:"bold",children:"Phone:"}),s.jsx(e,{children:n.phone})]}),s.jsx(o,{as:"h2",size:"lg",mb:5,mt:5,children:"Inventory:"}),s.jsxs(u,{variant:"simple",children:[s.jsx(T,{children:s.jsxs(l,{children:[s.jsx(t,{children:"Product ID"}),s.jsx(t,{children:"Item"}),s.jsx(t,{children:"Quantity"})]})}),s.jsx(b,{children:n.inventory&&n.inventory.length>0?n.inventory.map((d,h)=>s.jsxs(l,{children:[s.jsx(i,{children:d.product_id}),s.jsx(i,{children:d.product.name}),s.jsx(i,{children:d.quantity})]},h)):s.jsx(l,{children:s.jsx(i,{colSpan:"3",children:"No inventory items available"})})})]})]})]})})})};export{D as default};