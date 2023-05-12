import { j as jsxRuntimeExports, e as InertiaLink, g as dist } from "./app-273ef8d8.js";
import { u as useForm } from "./index.esm-0f254228.js";
import { L as Layout } from "./Layout-22ba3e0a.js";
import { T as Textarea } from "./chunk-OEQDSMWZ-929b0e56.js";
import { C as Container, H as Heading } from "./chunk-SRMZVY4F-1a44be21.js";
import { B as Box, a as Button } from "./chunk-6CSUKJP7-4bc76c0a.js";
import { F as FormControl, a as FormLabel, I as Input } from "./chunk-GYFRIY2Z-ade409d0.js";
import { F as Flex } from "./chunk-MPFPK3CX-f3159ccd.js";
import "./chunk-O5CRURSQ-0f564349.js";
const Create = ({ auth }) => {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    dist.Inertia.post("/categories", data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { auth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxW: "container.lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { maxW: "xl", mx: "auto", mt: 5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { as: "h1", size: "xl", mb: 5, children: "Create Category" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { id: "name", mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            ...register("name", { required: true }),
            type: "text",
            placeholder: "Enter category name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { id: "description", mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            ...register("description", { required: true }),
            type: "text",
            placeholder: "Enter category description"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justifyContent: "flex-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InertiaLink, { href: "/categories", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { colorScheme: "red", mr: 3, children: "Cancel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            colorScheme: "teal",
            isLoading: formState.isSubmitting,
            type: "submit",
            children: "Create"
          }
        )
      ] })
    ] })
  ] }) }) });
};
export {
  Create as default
};
