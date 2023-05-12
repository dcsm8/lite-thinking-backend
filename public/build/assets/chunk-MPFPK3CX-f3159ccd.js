import { f as forwardRef, j as jsxRuntimeExports, a as chakra } from "./app-273ef8d8.js";
var Flex = forwardRef(function Flex2(props, ref) {
  const { direction, align, justify, wrap, basis, grow, shrink, ...rest } = props;
  const styles = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(chakra.div, { ref, __css: styles, ...rest });
});
Flex.displayName = "Flex";
export {
  Flex as F
};
