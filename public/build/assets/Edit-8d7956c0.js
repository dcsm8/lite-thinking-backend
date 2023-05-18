import{r as l,j as e,e as f,g as b}from"./app-4834d360.js";import{u as g}from"./index.esm-e859c0b8.js";import{L as C}from"./Layout-e82fa00b.js";import{S}from"./react-select.esm-a2c05b83.js";import{C as F,H as I}from"./chunk-SRMZVY4F-6a0c4371.js";import{B as v,a as c}from"./chunk-6CSUKJP7-3c4dd631.js";import{F as t,a,I as E}from"./chunk-GYFRIY2Z-a5e71354.js";import{T as L}from"./chunk-OEQDSMWZ-ee9c91cb.js";import{N,a as q}from"./chunk-GIDWA67N-3db5cf24.js";import{F as B}from"./chunk-MPFPK3CX-73715752.js";import"./chunk-O5CRURSQ-ecda2068.js";const R=({product:i,auth:d,categories:x})=>{const{register:n,handleSubmit:u,setValue:$}=g({defaultValues:{name:i.name,description:i.description,price:i.price}}),[o,m]=l.useState(i.categories.map(s=>({value:s.id,label:s.name}))),p=x.map(s=>({value:s.id,label:s.name}));l.useEffect(()=>{const s=i.categories.map(r=>({value:r.id,label:r.name}));m(s)},[i.categories]);const h=s=>{m(s)},j=s=>{b.Inertia.put(`/products/${i.id}`,{...s,categories:o.map(r=>r.value)})};return e.jsx(C,{auth:d,children:e.jsx(F,{maxW:"container.lg",children:e.jsxs(v,{maxW:"xl",mx:"auto",mt:5,children:[e.jsxs(I,{as:"h1",size:"xl",mb:5,children:["Edit Product ",i.id]}),e.jsxs("form",{onSubmit:u(j),children:[e.jsxs(t,{mb:5,children:[e.jsx(a,{htmlFor:"name",children:"Name"}),e.jsx(E,{id:"name",...n("name",{required:!0})})]}),e.jsxs(t,{mb:5,children:[e.jsx(a,{htmlFor:"description",children:"Description"}),e.jsx(L,{id:"description",...n("description",{required:!0})})]}),e.jsxs(t,{id:"price",mb:5,children:[e.jsx(a,{children:"Price"}),e.jsx(N,{min:0,precision:2,format:s=>`${s}`,children:e.jsx(q,{...n("price",{required:!0,min:0})})})]}),e.jsxs(t,{id:"categories",mb:5,children:[e.jsx(a,{children:"Categories"}),e.jsx(S,{options:p,isMulti:!0,value:o,onChange:h})]}),e.jsxs(B,{justifyContent:"flex-end",children:[e.jsx(f,{href:"/products",children:e.jsx(c,{colorScheme:"red",mr:3,children:"Cancel"})}),e.jsx(c,{type:"submit",colorScheme:"blue",children:"Update"})]})]})]})})})};export{R as default};