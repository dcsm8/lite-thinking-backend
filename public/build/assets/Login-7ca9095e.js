import { c as createContext, f as forwardRef, u as useMultiStyleConfig, o as omitThemingProps, j as jsxRuntimeExports, a as chakra, b as cx, I as Icon, d as usePage, e as InertiaLink, g as dist } from "./app-273ef8d8.js";
import { u as useForm } from "./index.esm-0f254228.js";
import { S as Stack } from "./chunk-O5CRURSQ-0f564349.js";
import { B as Box, a as Button } from "./chunk-6CSUKJP7-4bc76c0a.js";
import { u as useFormControlContext, F as FormControl, a as FormLabel, I as Input } from "./chunk-GYFRIY2Z-ade409d0.js";
var [FormErrorStylesProvider, useFormErrorStyles] = createContext({
  name: `FormErrorStylesContext`,
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
});
var FormErrorMessage = forwardRef(
  (props, ref) => {
    const styles = useMultiStyleConfig("FormError", props);
    const ownProps = omitThemingProps(props);
    const field = useFormControlContext();
    if (!(field == null ? void 0 : field.isInvalid))
      return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.div,
      {
        ...field == null ? void 0 : field.getErrorMessageProps(ownProps, ref),
        className: cx("chakra-form__error-message", props.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...styles.text
        }
      }
    ) });
  }
);
FormErrorMessage.displayName = "FormErrorMessage";
var FormErrorIcon = forwardRef((props, ref) => {
  const styles = useFormErrorStyles();
  const field = useFormControlContext();
  if (!(field == null ? void 0 : field.isInvalid))
    return null;
  const _className = cx("chakra-form__error-icon", props.className);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Icon,
    {
      ref,
      "aria-hidden": true,
      ...props,
      __css: styles.icon,
      className: _className,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
FormErrorIcon.displayName = "FormErrorIcon";
const Login = () => {
  const { errors } = usePage().props;
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    dist.Inertia.post("/login", data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      p: 8,
      borderWidth: 1,
      borderRadius: 8,
      width: { base: "90%", md: "40%" },
      margin: "auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 4, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { isInvalid: errors.email, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { htmlFor: "email", children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "email",
              id: "email",
              ...register("email", { required: true })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorMessage, { children: errors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { isInvalid: errors.password, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "password",
              id: "password",
              ...register("password", { required: true })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorMessage, { children: errors.password })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            colorScheme: "teal",
            isLoading: formState.isSubmitting,
            type: "submit",
            children: "Login"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InertiaLink, { href: "/register", fontWeight: "bold", children: "Create an account" })
      ] }) })
    }
  );
};
export {
  Login as default
};
