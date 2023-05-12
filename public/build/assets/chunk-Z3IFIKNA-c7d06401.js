import { c as createContext, f as forwardRef, u as useMultiStyleConfig, o as omitThemingProps, j as jsxRuntimeExports, a as chakra, b as cx } from "./app-273ef8d8.js";
var [TableStylesProvider, useTableStyles] = createContext({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
var Table = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Table", props);
  const { className, layout, ...tableProps } = omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout, ...styles.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";
var Thead = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(chakra.thead, { ...props, ref, __css: styles.thead });
});
var Tr = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(chakra.tr, { ...props, ref, __css: styles.tr });
});
var Tbody = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(chakra.tbody, { ...props, ref, __css: styles.tbody });
});
var Td = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles.td,
        "data-is-numeric": isNumeric
      }
    );
  }
);
var Th = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles.th,
        "data-is-numeric": isNumeric
      }
    );
  }
);
export {
  Table as T,
  Thead as a,
  Tr as b,
  Th as c,
  Tbody as d,
  Td as e
};
