import{j as e,e as h,h as x}from"./app-ca9cffc0.js";import{u}from"./index.esm-e40bca80.js";import{L as j}from"./Layout-48f0130c.js";import{C as c,H as p}from"./chunk-SRMZVY4F-6722f931.js";import{B as f,a as n}from"./chunk-6CSUKJP7-08c02334.js";import{F as i,a as t,I as d}from"./chunk-GYFRIY2Z-ca6a6473.js";import{F as b}from"./chunk-MPFPK3CX-0190d286.js";import"./chunk-O5CRURSQ-60b75f76.js";const B=({company:r,auth:o})=>{const{register:s,handleSubmit:a,setValue:I}=u({defaultValues:{NIT:r.NIT,name:r.name,address:r.address,phone:r.phone}}),m=l=>{x.Inertia.put(`/companies/${r.NIT}`,{...l})};return e.jsx(j,{auth:o,children:e.jsx(c,{maxW:"container.lg",children:e.jsxs(f,{maxW:"xl",mx:"auto",mt:5,children:[e.jsxs(p,{as:"h1",size:"xl",mb:5,children:["Edit Company ",r.NIT]}),e.jsxs("form",{onSubmit:a(m),children:[e.jsxs(i,{mb:5,children:[e.jsx(t,{htmlFor:"NIT",children:"NIT"}),e.jsx(d,{id:"NIT",...s("NIT",{required:!0}),disabled:!0})]}),e.jsxs(i,{mb:5,children:[e.jsx(t,{htmlFor:"name",children:"Name"}),e.jsx(d,{id:"name",...s("name",{required:!0})})]}),e.jsxs(i,{mb:5,children:[e.jsx(t,{htmlFor:"address",children:"Address"}),e.jsx(d,{id:"address",...s("address",{required:!0})})]}),e.jsxs(i,{mb:5,children:[e.jsx(t,{htmlFor:"phone",children:"Phone"}),e.jsx(d,{id:"phone",...s("phone",{required:!0})})]}),e.jsxs(b,{justifyContent:"flex-end",children:[e.jsx(h,{href:"/companies",children:e.jsx(n,{colorScheme:"red",mr:3,children:"Cancel"})}),e.jsx(n,{type:"submit",colorScheme:"blue",children:"Update"})]})]})]})})})};export{B as default};