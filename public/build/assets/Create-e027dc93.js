import{r as b,j as e,e as I,h as y}from"./app-e676fbb6.js";import{u as F}from"./index.esm-febae125.js";import{L as P}from"./Layout-bf3ffdb4.js";import{N as q,a as L}from"./chunk-GIDWA67N-5938c22c.js";import{C as v,H as E}from"./chunk-SRMZVY4F-4b05392e.js";import{B as N,a as d}from"./chunk-6CSUKJP7-d76735a6.js";import{F as m,a as l,I as k}from"./chunk-GYFRIY2Z-be1027a1.js";import{T as B}from"./chunk-OEQDSMWZ-daa6b412.js";import{S as A}from"./chunk-O5CRURSQ-6dee9f37.js";import{S as H}from"./chunk-GJO77I2I-b15baaf6.js";import{F as O}from"./chunk-MPFPK3CX-892dce6f.js";const U=({auth:u,products:p})=>{const{register:c,handleSubmit:h,formState:x}=F(),[n,a]=b.useState([]),j=r=>{y.Inertia.post("/orders",{...r,products:n})},f=()=>{a([...n,{productId:"",quantity:1}])},S=(r,t)=>{const{value:o}=r.target;a(s=>{const i=[...s];return i[t]={...i[t],productId:o},i})},C=(r,t)=>{a(o=>{const s=[...o];return s[t]={...s[t],quantity:r},s})},g=p.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id));return e.jsx(P,{auth:u,children:e.jsx(v,{maxW:"container.lg",children:e.jsxs(N,{maxW:"xl",mx:"auto",mt:5,children:[e.jsx(E,{as:"h1",size:"xl",mb:5,children:"Create Order"}),e.jsxs("form",{onSubmit:h(j),children:[e.jsxs(m,{id:"name",mb:5,children:[e.jsx(l,{children:"Name"}),e.jsx(k,{...c("name",{required:!0}),type:"text",placeholder:"Enter order name"})]}),e.jsxs(m,{id:"description",mb:5,children:[e.jsx(l,{children:"Description"}),e.jsx(B,{...c("description",{required:!0}),placeholder:"Enter order description"})]}),n.map((r,t)=>e.jsxs(A,{direction:"row",spacing:4,align:"center",children:[e.jsx(H,{placeholder:"Select product",value:r.productId,onChange:o=>S(o,t),children:g}),e.jsx(q,{min:1,value:r.quantity,onChange:o=>C(o,t),children:e.jsx(L,{})})]},t)),e.jsx(d,{onClick:f,mt:3,children:"Add Product"}),e.jsxs(O,{justifyContent:"flex-end",mt:5,children:[e.jsx(I,{href:"/orders",children:e.jsx(d,{colorScheme:"red",mr:3,children:"Cancel"})}),e.jsx(d,{colorScheme:"teal",isLoading:x.isSubmitting,type:"submit",children:"Create"})]})]})]})})})};export{U as default};
