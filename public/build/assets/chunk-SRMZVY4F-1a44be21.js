import { f as forwardRef, i as useStyleConfig, o as omitThemingProps, j as jsxRuntimeExports, a as chakra, b as cx } from "./app-273ef8d8.js";
var Heading = forwardRef(function Heading2(props, ref) {
  const styles = useStyleConfig("Heading", props);
  const { className, ...rest } = omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    chakra.h2,
    {
      ref,
      className: cx("chakra-heading", props.className),
      ...rest,
      __css: styles
    }
  );
});
Heading.displayName = "Heading";
var Container = forwardRef(function Container2(props, ref) {
  const { className, centerContent, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig("Container", props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    chakra.div,
    {
      ref,
      className: cx("chakra-container", className),
      ...rest,
      __css: {
        ...styles,
        ...centerContent && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }
    }
  );
});
Container.displayName = "Container";
export {
  Container as C,
  Heading as H
};
