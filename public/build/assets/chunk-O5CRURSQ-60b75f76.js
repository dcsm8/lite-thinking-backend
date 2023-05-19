import{r as s,G as I,j as d,a as _,f as O,b as A}from"./app-ca9cffc0.js";function M(t){return s.Children.toArray(t).filter(e=>s.isValidElement(e))}var R=Object.freeze(["base","sm","md","lg","xl","2xl"]);function j(t,e){return Array.isArray(t)?t.map(r=>r===null?null:e(r)):I(t)?Object.keys(t).reduce((r,n)=>(r[n]=e(t[n]),r),{}):t!=null?e(t):null}function U(t,e=R){const r={};return t.forEach((n,i)=>{const m=e[i];n!=null&&(r[m]=n)}),r}var W=t=>d.jsx(_.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});W.displayName="StackItem";var y="& > *:not(style) ~ *:not(style)";function V(t){const{spacing:e,direction:r}=t,n={column:{marginTop:e,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:e},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:e,marginStart:0},"row-reverse":{marginTop:0,marginEnd:e,marginBottom:0,marginStart:0}};return{flexDirection:r,[y]:j(r,i=>n[i])}}function z(t){const{spacing:e,direction:r}=t,n={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":j(r,i=>n[i])}}var F=O((t,e)=>{const{isInline:r,direction:n,align:i,justify:m,spacing:o="0.5rem",wrap:w,children:h,divider:u,className:E,shouldWrapChildren:f,...B}=t,a=r?"row":n??"column",x=s.useMemo(()=>V({direction:a,spacing:o}),[a,o]),v=s.useMemo(()=>z({spacing:o,direction:a}),[o,a]),c=!!u,b=!f&&!c,C=s.useMemo(()=>{const g=M(h);return b?g:g.map((l,k)=>{const p=typeof l.key<"u"?l.key:k,D=k+1===g.length,S=f?d.jsx(W,{children:l},p):l;if(!c)return S;const L=s.cloneElement(u,{__css:v}),T=D?null:L;return d.jsxs(s.Fragment,{children:[S,T]},p)})},[u,v,c,b,f,h]),N=A("chakra-stack",E);return d.jsx(_.div,{ref:e,display:"flex",alignItems:i,justifyContent:m,flexDirection:x.flexDirection,flexWrap:w,className:N,__css:c?{}:{[y]:x[y]},...B,children:C})});F.displayName="Stack";export{F as S,U as a,R as b};