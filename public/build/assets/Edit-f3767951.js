import{j as t,e as c,h as l}from"./app-e676fbb6.js";import{u}from"./index.esm-febae125.js";import{L as x,H as i}from"./Layout-bf3ffdb4.js";import{C as h,H as p}from"./chunk-SRMZVY4F-4b05392e.js";import{B as j,a as e}from"./chunk-6CSUKJP7-d76735a6.js";import{T as s}from"./chunk-P74GIWPW-b89ad6d9.js";import{F as f,a as b,I}from"./chunk-GYFRIY2Z-be1027a1.js";import{F as y}from"./chunk-MPFPK3CX-892dce6f.js";import"./chunk-O5CRURSQ-6dee9f37.js";const N=({inventory:r,auth:a})=>{const{register:o,handleSubmit:n}=u({defaultValues:{company_NIT:r.company_NIT,product_id:r.product_id,quantity:r.quantity}}),m=d=>{l.Inertia.put(`/inventories/${r.id}`,d)};return t.jsx(x,{auth:a,children:t.jsx(h,{maxW:"container.lg",children:t.jsxs(j,{maxW:"xl",mx:"auto",mt:5,children:[t.jsxs(p,{as:"h1",size:"xl",mb:5,children:["Edit Inventory ",r.id]}),t.jsxs("form",{onSubmit:n(m),children:[t.jsxs(i,{spacing:2,children:[t.jsx(s,{fontWeight:"bold",children:"Company NIT"}),t.jsx(s,{children:r.company_NIT})]}),t.jsxs(i,{spacing:2,children:[t.jsx(s,{fontWeight:"bold",children:"Product name"}),t.jsx(s,{children:r.product.name})]}),t.jsxs(f,{mb:5,children:[t.jsx(b,{htmlFor:"quantity",children:"Quantity"}),t.jsx(I,{id:"quantity",...o("quantity",{required:!0})})]}),t.jsxs(y,{justifyContent:"flex-end",children:[t.jsx(c,{href:"/companies",children:t.jsx(e,{colorScheme:"red",mr:3,children:"Cancel"})}),t.jsx(e,{type:"submit",colorScheme:"blue",children:"Update"})]})]})]})})})};export{N as default};
