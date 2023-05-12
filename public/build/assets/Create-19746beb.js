import { f as forwardRef, j as jsxRuntimeExports, a as chakra, b as cx, u as useMultiStyleConfig, o as omitThemingProps, h as dataAttr, r as reactExports, l as layoutPropNames, e as InertiaLink, g as dist } from "./app-273ef8d8.js";
import { u as useForm } from "./index.esm-0f254228.js";
import { L as Layout } from "./Layout-22ba3e0a.js";
import { b as useFormControl, F as FormControl, a as FormLabel, I as Input } from "./chunk-GYFRIY2Z-ade409d0.js";
import { N as NumberInput, a as NumberInputField } from "./chunk-GIDWA67N-f2be042a.js";
import { C as Container, H as Heading } from "./chunk-SRMZVY4F-1a44be21.js";
import { B as Box, a as Button } from "./chunk-6CSUKJP7-4bc76c0a.js";
import { T as Textarea } from "./chunk-OEQDSMWZ-929b0e56.js";
import { S as Stack } from "./chunk-O5CRURSQ-0f564349.js";
import { F as Flex } from "./chunk-MPFPK3CX-f3159ccd.js";
var SelectField = forwardRef(
  function SelectField2(props, ref) {
    const { children, placeholder, className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      chakra.select,
      {
        ...rest,
        ref,
        className: cx("chakra-select", className),
        children: [
          placeholder && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: placeholder }),
          children
        ]
      }
    );
  }
);
SelectField.displayName = "SelectField";
function split(object, keys) {
  const picked = {};
  const omitted = {};
  for (const [key, value] of Object.entries(object)) {
    if (keys.includes(key))
      picked[key] = value;
    else
      omitted[key] = value;
  }
  return [picked, omitted];
}
var Select = forwardRef((props, ref) => {
  var _a;
  const styles = useMultiStyleConfig("Select", props);
  const {
    rootProps,
    placeholder,
    icon,
    color,
    height,
    h,
    minH,
    minHeight,
    iconColor,
    iconSize,
    ...rest
  } = omitThemingProps(props);
  const [layoutProps, otherProps] = split(rest, layoutPropNames);
  const ownProps = useFormControl(otherProps);
  const rootStyles = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color
  };
  const fieldStyles = {
    paddingEnd: "2rem",
    ...styles.field,
    _focus: {
      zIndex: "unset",
      ...(_a = styles.field) == null ? void 0 : _a["_focus"]
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    chakra.div,
    {
      className: "chakra-select__wrapper",
      __css: rootStyles,
      ...layoutProps,
      ...rootProps,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectField,
          {
            ref,
            height: h != null ? h : height,
            minH: minH != null ? minH : minHeight,
            placeholder,
            ...ownProps,
            __css: fieldStyles,
            children: props.children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectIcon,
          {
            "data-disabled": dataAttr(ownProps.disabled),
            ...(iconColor || color) && { color: iconColor || color },
            __css: styles.icon,
            ...iconSize && { fontSize: iconSize },
            children: icon
          }
        )
      ]
    }
  );
});
Select.displayName = "Select";
var DefaultIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) });
var IconWrapper = chakra("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
});
var SelectIcon = (props) => {
  const { children = /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultIcon, {}), ...rest } = props;
  const clone = reactExports.cloneElement(children, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: false,
    "aria-hidden": true,
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconWrapper, { ...rest, className: "chakra-select__icon-wrapper", children: reactExports.isValidElement(children) ? clone : null });
};
SelectIcon.displayName = "SelectIcon";
const Create = ({ auth, products }) => {
  const { register, handleSubmit, formState } = useForm();
  const [selectedProducts, setSelectedProducts] = reactExports.useState([]);
  const onSubmit = (data) => {
    dist.Inertia.post("/orders", { ...data, products: selectedProducts });
  };
  const handleAddProduct = () => {
    setSelectedProducts([
      ...selectedProducts,
      { productId: "", quantity: 1 }
    ]);
  };
  const handleProductChange = (event, index) => {
    const newProducts = [...selectedProducts];
    newProducts[index].productId = event.target.value;
    setSelectedProducts(newProducts);
  };
  const handleQuantityChange = (value, index) => {
    const newProducts = [...selectedProducts];
    newProducts[index].quantity = value;
    setSelectedProducts(newProducts);
  };
  const productOptions = products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: product.id, children: product.name }, product.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { auth, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxW: "container.lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { maxW: "xl", mx: "auto", mt: 5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { as: "h1", size: "xl", mb: 5, children: "Create Order" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { id: "name", mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            ...register("name", { required: true }),
            type: "text",
            placeholder: "Enter order name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { id: "description", mb: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            ...register("description", { required: true }),
            placeholder: "Enter order description"
          }
        )
      ] }),
      selectedProducts.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          spacing: 4,
          align: "center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Select,
              {
                placeholder: "Select product",
                value: product.productId,
                onChange: (event) => handleProductChange(event, index),
                children: productOptions
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NumberInput,
              {
                min: 1,
                value: product.quantity,
                onChange: (value) => handleQuantityChange(value, index),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInputField, {})
              }
            )
          ]
        },
        index
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleAddProduct, mt: 3, children: "Add Product" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justifyContent: "flex-end", mt: 5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InertiaLink, { href: "/orders", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { colorScheme: "red", mr: 3, children: "Cancel" }) }),
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
