import{j as e,e as l,g as d}from"./app-4834d360.js";import{u as x}from"./index.esm-e859c0b8.js";import{L as p}from"./Layout-e82fa00b.js";import{T as h}from"./chunk-OEQDSMWZ-ee9c91cb.js";import{C as u,H as j}from"./chunk-SRMZVY4F-6a0c4371.js";import{B as f,a as t}from"./chunk-6CSUKJP7-3c4dd631.js";import{F as i,a as s,I as g}from"./chunk-GYFRIY2Z-a5e71354.js";import{F as b}from"./chunk-MPFPK3CX-73715752.js";import"./chunk-O5CRURSQ-ecda2068.js";const H=({auth:o})=>{const{register:r,handleSubmit:a,formState:n}=x(),m=c=>{d.Inertia.post("/categories",c)};return e.jsx(p,{auth:o,children:e.jsx(u,{maxW:"container.lg",children:e.jsxs(f,{maxW:"xl",mx:"auto",mt:5,children:[e.jsx(j,{as:"h1",size:"xl",mb:5,children:"Create Category"}),e.jsxs("form",{onSubmit:a(m),children:[e.jsxs(i,{id:"name",mb:5,children:[e.jsx(s,{children:"Name"}),e.jsx(g,{...r("name",{required:!0}),type:"text",placeholder:"Enter category name"})]}),e.jsxs(i,{id:"description",mb:5,children:[e.jsx(s,{children:"Description"}),e.jsx(h,{...r("description",{required:!0}),type:"text",placeholder:"Enter category description"})]}),e.jsxs(b,{justifyContent:"flex-end",children:[e.jsx(l,{href:"/categories",children:e.jsx(t,{colorScheme:"red",mr:3,children:"Cancel"})}),e.jsx(t,{colorScheme:"teal",isLoading:n.isSubmitting,type:"submit",children:"Create"})]})]})]})})})};export{H as default};