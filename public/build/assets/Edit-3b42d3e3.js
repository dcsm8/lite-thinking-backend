import{j as e,e as c,h as x}from"./app-ca9cffc0.js";import{u as h}from"./index.esm-e40bca80.js";import{L as p}from"./Layout-48f0130c.js";import{C as u,H as j}from"./chunk-SRMZVY4F-6722f931.js";import{B as f,a as s}from"./chunk-6CSUKJP7-08c02334.js";import{F as t,a as o,I as n}from"./chunk-GYFRIY2Z-ca6a6473.js";import{F as b}from"./chunk-MPFPK3CX-0190d286.js";import"./chunk-O5CRURSQ-60b75f76.js";const H=({category:r,auth:a})=>{const{register:i,handleSubmit:m,setValue:F}=h({defaultValues:{name:r.name,description:r.description}}),d=l=>{x.Inertia.put(`/categories/${r.id}`,l)};return e.jsx(p,{auth:a,children:e.jsx(u,{maxW:"container.lg",children:e.jsxs(f,{maxW:"xl",mx:"auto",mt:5,children:[e.jsxs(j,{as:"h1",size:"xl",mb:5,children:["Edit Category ",r.id]}),e.jsxs("form",{onSubmit:m(d),children:[e.jsxs(t,{mb:5,children:[e.jsx(o,{htmlFor:"name",children:"Name"}),e.jsx(n,{id:"name",placeholder:"Enter category name",...i("name",{required:!0})})]}),e.jsxs(t,{mb:5,children:[e.jsx(o,{htmlFor:"description",children:"Description"}),e.jsx(n,{id:"description",placeholder:"Enter category description",...i("description")})]}),e.jsxs(b,{justifyContent:"flex-end",children:[e.jsx(c,{href:"/categories",children:e.jsx(s,{colorScheme:"red",mr:3,children:"Cancel"})}),e.jsx(s,{type:"submit",colorScheme:"blue",children:"Update"})]})]})]})})})};export{H as default};