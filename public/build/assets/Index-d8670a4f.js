import { r as reactExports, j as jsxRuntimeExports, e as InertiaLink, g as dist } from "./app-273ef8d8.js";
import { D as DeleteConfirmationModal } from "./DeleteConfirmationModal-447a8a0e.js";
import { u as useDisclosure, L as Layout } from "./Layout-22ba3e0a.js";
import { C as Container, H as Heading } from "./chunk-SRMZVY4F-1a44be21.js";
import { B as Box, a as Button } from "./chunk-6CSUKJP7-4bc76c0a.js";
import { F as Flex } from "./chunk-MPFPK3CX-f3159ccd.js";
import { T as Table, a as Thead, b as Tr, c as Th, d as Tbody, e as Td } from "./chunk-Z3IFIKNA-c7d06401.js";
import { S as Stack } from "./chunk-O5CRURSQ-0f564349.js";
import "./chunk-GYFRIY2Z-ade409d0.js";
const Index = ({ users, auth }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const handleDelete = () => {
    dist.Inertia.delete(`/users/${selectedUser.id}`);
  };
  const handleClickDelete = (user) => {
    setSelectedUser(user);
    onOpen();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { auth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxW: "container.lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Flex,
      {
        justifyContent: "space-between",
        alignItems: "center",
        m: 5,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { as: "h1", size: "xl", children: "Users" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { variant: "simple", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Thead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tbody, { children: users.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: user.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: user.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: user.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: user.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: user.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            InertiaLink,
            {
              href: `/users/${user.id}/edit`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  colorScheme: "blue",
                  size: "sm",
                  children: "Edit"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              colorScheme: "red",
              onClick: () => handleClickDelete(user),
              children: "Delete"
            }
          )
        ] }) })
      ] }, user.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirmationModal,
      {
        isOpen,
        onClose,
        onDelete: handleDelete
      }
    )
  ] }) }) });
};
export {
  Index as default
};
