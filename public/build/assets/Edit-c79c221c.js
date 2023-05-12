import { j as jsxRuntimeExports, e as InertiaLink, g as dist } from "./app-273ef8d8.js";
import { u as useForm } from "./index.esm-0f254228.js";
import { L as Layout } from "./Layout-22ba3e0a.js";
import { C as Container, H as Heading } from "./chunk-SRMZVY4F-1a44be21.js";
import { B as Box, a as Button } from "./chunk-6CSUKJP7-4bc76c0a.js";
import { F as FormControl, a as FormLabel, I as Input } from "./chunk-GYFRIY2Z-ade409d0.js";
import { F as Flex } from "./chunk-MPFPK3CX-f3159ccd.js";
import "./chunk-O5CRURSQ-0f564349.js";
const Edit = ({ user, auth }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role
    }
  });
  const onSubmit = (data) => {
    dist.Inertia.put(`/users/${user.id}`, data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { auth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxW: "container.lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { maxW: "xl", mx: "auto", mt: 5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { as: "h1", size: "xl", mb: 5, children: [
      "Edit User ",
      user.id
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "name",
            placeholder: "Enter user name",
            ...register("name", { required: true })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { htmlFor: "email", children: "Email address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "email",
            placeholder: "Enter user email",
            ...register("email", { required: true })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { htmlFor: "phone", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "phone",
            placeholder: "Enter user phone",
            ...register("phone")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { htmlFor: "role", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "role",
            placeholder: "Enter user role",
            ...register("role", { required: true })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justifyContent: "flex-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InertiaLink, { href: "/users", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { colorScheme: "red", mr: 3, children: "Cancel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", colorScheme: "blue", children: "Update" })
      ] })
    ] })
  ] }) }) });
};
export {
  Edit as default
};
