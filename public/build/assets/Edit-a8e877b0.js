import { f as forwardRef, i as useStyleConfig, o as omitThemingProps, j as jsxRuntimeExports, a as chakra, b as cx, r as reactExports } from "./app-273ef8d8.js";
import { L as Layout } from "./Layout-22ba3e0a.js";
import { C as Container, H as Heading } from "./chunk-SRMZVY4F-1a44be21.js";
import { B as Box } from "./chunk-6CSUKJP7-4bc76c0a.js";
import { F as Flex } from "./chunk-MPFPK3CX-f3159ccd.js";
import { T as Table, a as Thead, b as Tr, c as Th, d as Tbody, e as Td } from "./chunk-Z3IFIKNA-c7d06401.js";
import "./chunk-O5CRURSQ-0f564349.js";
function compact(object) {
  const clone = Object.assign({}, object);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
var Text = forwardRef(function Text2(props, ref) {
  const styles = useStyleConfig("Text", props);
  const { className, align, decoration, casing, ...rest } = omitThemingProps(props);
  const aliasedProps = compact({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    chakra.p,
    {
      ref,
      className: cx("chakra-text", props.className),
      ...aliasedProps,
      ...rest,
      __css: styles
    }
  );
});
Text.displayName = "Text";
const Edit = ({ auth, order }) => {
  const [totalPrice, setTotalPrice] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let total = 0;
    order.products.forEach((product) => {
      total += product.price * product.pivot.quantity;
    });
    setTotalPrice(total.toFixed(2));
  }, [order]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { auth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxW: "container.lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { maxW: "xl", mx: "auto", mt: 5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { as: "h1", size: "xl", mb: 5, children: [
      "View Order ",
      order.id
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { mb: 5, children: [
      "Order name: ",
      order.name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { mb: 5, children: [
      "Order description: ",
      order.description
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { mb: 5, children: [
      "Client: ",
      order.user.name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { mb: 5, children: [
      "Phone: ",
      order.user.phone
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { as: "h2", size: "lg", mb: 5, children: "Products" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { variant: "simple", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Thead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Product Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Quantity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { isNumeric: true, children: "Price" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tbody, { children: order.products.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Tr, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: product.pivot.quantity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { isNumeric: true, children: product.price })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { justifyContent: "flex-end", mt: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { fontSize: "xl", children: [
      "Total price: ",
      totalPrice
    ] }) })
  ] }) }) });
};
export {
  Edit as default
};
