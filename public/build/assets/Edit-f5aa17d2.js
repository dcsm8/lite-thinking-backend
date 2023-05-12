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
const Edit = ({ product, auth, categories }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price
    }
  });
  const [selectedCategories, setSelectedCategories] = reactExports.useState(
    product.categories.map((category) => ({
      value: category.id,
      label: category.name
    }))
  );
  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name
  }));
  reactExports.useEffect(() => {
    const selectedOptions = product.categories.map((category) => ({
      value: category.id,
      label: category.name
    }));
    setSelectedCategories(selectedOptions);
  }, [product.categories]);
  const handleCategoriesChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };
  const onSubmit = (data) => {
    dist.Inertia.put(`/products/${product.id}`, {
      ...data,
      categories: selectedCategories.map((option) => option.value)
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { auth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxW: "container.lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { maxW: "xl", mx: "auto", mt: 5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { as: "h1", size: "xl", mb: 5, children: [
      "Edit Product ",
      product.id
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "name",
            ...register("name", { required: true })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { htmlFor: "description", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "description",
            ...register("description", { required: true })
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
            value: selectedCategories,
            onChange: handleCategoriesChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justifyContent: "flex-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InertiaLink, { href: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { colorScheme: "red", mr: 3, children: "Cancel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", colorScheme: "blue", children: "Update" })
      ] })
    ] })
  ] }) }) });
};
export {
  Edit as default
};
