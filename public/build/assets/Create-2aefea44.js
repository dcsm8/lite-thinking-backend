import { r as reactExports, j as jsxRuntimeExports, e as InertiaLink, g as dist } from "./app-273ef8d8.js";
import { u as useForm } from "./index.esm-0f254228.js";
import { L as Layout } from "./Layout-22ba3e0a.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-a837b9b8.js";
import { C as Container, H as Heading } from "./chunk-SRMZVY4F-1a44be21.js";
import { B as Box, a as Button } from "./chunk-6CSUKJP7-4bc76c0a.js";
import { F as FormControl, a as FormLabel, I as Input } from "./chunk-GYFRIY2Z-ade409d0.js";
import { T as Textarea } from "./chunk-OEQDSMWZ-929b0e56.js";
import { N as NumberInput, a as NumberInputField } from "./chunk-GIDWA67N-f2be042a.js";
import { F as Flex } from "./chunk-MPFPK3CX-f3159ccd.js";
import "./chunk-O5CRURSQ-0f564349.js";
const Create = ({ auth, categories }) => {
  const { register, handleSubmit, formState } = useForm();
  const [selectedCategories, setSelectedCategories] = reactExports.useState([]);
  const onSubmit = (data) => {
    dist.Inertia.post("/products", { ...data, categories: selectedCategories });
  };
  const handleCategoriesChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions.map((option) => option.value));
  };
  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { auth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxW: "container.lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { maxW: "xl", mx: "auto", mt: 5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { as: "h1", size: "xl", mb: 5, children: "Create Product" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { id: "name", mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            ...register("name", { required: true }),
            type: "text",
            placeholder: "Enter product name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { id: "description", mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            ...register("description", { required: true }),
            placeholder: "Enter product description"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { id: "price", mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NumberInput,
          {
            min: 0,
            precision: 2,
            format: (value) => `${value}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NumberInputField,
              {
                ...register("price", {
                  required: true,
                  min: 0
                })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { id: "categories", mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StateManagedSelect$1,
          {
            options: categoryOptions,
            isMulti: true,
            onChange: handleCategoriesChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justifyContent: "flex-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InertiaLink, { href: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { colorScheme: "red", mr: 3, children: "Cancel" }) }),
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
