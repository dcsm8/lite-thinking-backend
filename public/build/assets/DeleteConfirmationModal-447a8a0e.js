import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, x as motion, b as cx, a as chakra, f as forwardRef } from "./app-273ef8d8.js";
import { w as withDelay, T as TRANSITION_DEFAULTS, e as useModalContext, f as useModalStyles, M as ModalFocusScope, g as Modal, h as ModalOverlay, i as ModalHeader, j as ModalBody, k as ModalFooter } from "./Layout-22ba3e0a.js";
import { F as FormControl, a as FormLabel, I as Input } from "./chunk-GYFRIY2Z-ade409d0.js";
import { a as Button } from "./chunk-6CSUKJP7-4bc76c0a.js";
var variants$1 = {
  exit: ({ reverse, initialScale, transition, transitionEnd, delay }) => {
    var _a;
    return {
      opacity: 0,
      ...reverse ? { scale: initialScale, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { scale: initialScale, ...transitionEnd == null ? void 0 : transitionEnd.exit } },
      transition: (_a = transition == null ? void 0 : transition.exit) != null ? _a : withDelay.exit(TRANSITION_DEFAULTS.exit, delay)
    };
  },
  enter: ({ transitionEnd, transition, delay }) => {
    var _a;
    return {
      opacity: 1,
      scale: 1,
      transition: (_a = transition == null ? void 0 : transition.enter) != null ? _a : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
var scaleFadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants$1
};
var ScaleFade = reactExports.forwardRef(
  function ScaleFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      initialScale = 0.95,
      className,
      transition,
      transitionEnd,
      delay,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = { initialScale, reverse, transition, transitionEnd, delay };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { custom, children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        ...scaleFadeConfig,
        animate,
        custom,
        ...rest
      }
    ) });
  }
);
ScaleFade.displayName = "ScaleFade";
var variants = {
  initial: ({ offsetX, offsetY, transition, transitionEnd, delay }) => {
    var _a;
    return {
      opacity: 0,
      x: offsetX,
      y: offsetY,
      transition: (_a = transition == null ? void 0 : transition.exit) != null ? _a : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: ({ transition, transitionEnd, delay }) => {
    var _a;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (_a = transition == null ? void 0 : transition.enter) != null ? _a : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: ({ offsetY, offsetX, transition, transitionEnd, reverse, delay }) => {
    var _a;
    const offset = { x: offsetX, y: offsetY };
    return {
      opacity: 0,
      transition: (_a = transition == null ? void 0 : transition.exit) != null ? _a : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      ...reverse ? { ...offset, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { ...offset, ...transitionEnd == null ? void 0 : transitionEnd.exit } }
    };
  }
};
var slideFadeConfig = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants
};
var SlideFade = reactExports.forwardRef(
  function SlideFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      className,
      offsetX = 0,
      offsetY = 8,
      transition,
      transitionEnd,
      delay,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = {
      offsetX,
      offsetY,
      reverse,
      transition,
      transitionEnd,
      delay
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { custom, children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        custom,
        ...slideFadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
SlideFade.displayName = "SlideFade";
var transitions = {
  slideInBottom: {
    ...slideFadeConfig,
    custom: { offsetY: 16, reverse: true }
  },
  slideInRight: {
    ...slideFadeConfig,
    custom: { offsetX: 16, reverse: true }
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true }
  },
  none: {}
};
var MotionSection = chakra(motion.section);
var getMotionProps = (preset) => {
  return transitions[preset || "none"];
};
var ModalTransition = reactExports.forwardRef(
  (props, ref) => {
    const { preset, motionProps = getMotionProps(preset), ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MotionSection, { ref, ...motionProps, ...rest });
  }
);
ModalTransition.displayName = "ModalTransition";
var ModalContent = forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      containerProps: rootProps,
      motionProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles.dialogContainer
    };
    const { motionPreset } = useModalContext();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFocusScope, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: dialogContainerStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ModalTransition,
          {
            preset: motionPreset,
            motionProps,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
ModalContent.displayName = "ModalContent";
const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onDelete();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen, onClose, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { children: "Delete Product" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Are you sure you want to delete this product?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "hidden",
            name: "_method",
            value: "delete"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", mr: 3, onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { colorScheme: "red", onClick: handleSubmit, children: "Delete" })
      ] })
    ] })
  ] });
};
export {
  DeleteConfirmationModal as D
};
