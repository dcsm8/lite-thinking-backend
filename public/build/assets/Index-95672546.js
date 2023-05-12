import { j as jsxRuntimeExports, L as Link } from "./app-273ef8d8.js";
import { C as Container, H as Heading } from "./chunk-SRMZVY4F-1a44be21.js";
import { B as Box, a as Button } from "./chunk-6CSUKJP7-4bc76c0a.js";
import { S as Stack } from "./chunk-O5CRURSQ-0f564349.js";
const Home = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { maxW: "container.lg", mt: 10, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { as: "h1", size: "2xl", mb: 10, children: "Welcome to My App" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: ["column", "row"], spacing: 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { colorScheme: "teal", size: "lg", children: "Login" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/register", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { colorScheme: "teal", size: "lg", children: "Register" }) })
    ] }) })
  ] });
};
export {
  Home as default
};
