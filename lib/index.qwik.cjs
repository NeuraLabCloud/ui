"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const styles$4 = "/* \n? Global Shard Styles\n*\n* These are used in many components to \n* keep the styles consistent across the app\n* and easy to maintain over time.\n*/\n.avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgb(63, 63, 70);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.avatar.rounded {\n  border-radius: 10%;\n}\n.avatar.circle {\n  border-radius: 50%;\n}\n.avatar.small {\n  width: 50px;\n  height: 50px;\n}\n.avatar.medium {\n  width: 100px;\n  height: 100px;\n}\n.avatar.large {\n  width: 200px;\n  height: 200px;\n}\n@media (max-width: 768px) {\n  .avatar {\n    width: 100px;\n    height: 100px;\n  }\n}\n@media (max-width: 576px) {\n  .avatar {\n    width: 50px;\n    height: 50px;\n  }\n}\n.avatar-animate {\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgb(63, 63, 70);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.avatar-animate:hover {\n  transform: scale(1.1);\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n}\n.avatar-animate.rounded {\n  border-radius: 10%;\n}\n.avatar-animate.circle {\n  border-radius: 50%;\n}\n.avatar-animate.small {\n  width: 50px;\n  height: 50px;\n}\n.avatar-animate.medium {\n  width: 100px;\n  height: 100px;\n}\n.avatar-animate.large {\n  width: 200px;\n  height: 200px;\n}\n@media (max-width: 768px) {\n  .avatar-animate {\n    width: 100px;\n    height: 100px;\n  }\n}\n@media (max-width: 576px) {\n  .avatar-animate {\n    width: 50px;\n    height: 50px;\n  }\n}";
const Avatar = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(styles$4, "Avatar_component_useStyles_SjNn2RZSgPU"));
  if ((props.animation ?? "none") === "none")
    return /* @__PURE__ */ qwik._jsxQ("img", null, {
      alt: qwik._fnSignal((p0) => p0.alt, [
        props
      ], "p0.alt"),
      class: "avatar",
      height: qwik._fnSignal((p0) => p0.height ?? 150, [
        props
      ], "p0.height??150"),
      src: qwik._fnSignal((p0) => p0.src, [
        props
      ], "p0.src"),
      width: qwik._fnSignal((p0) => p0.width ?? 150, [
        props
      ], "p0.width??150")
    }, null, 3, "Sr_0");
  return /* @__PURE__ */ qwik._jsxQ("img", null, {
    alt: qwik._fnSignal((p0) => p0.alt, [
      props
    ], "p0.alt"),
    class: "avatar-animate",
    height: qwik._fnSignal((p0) => p0.height ?? 150, [
      props
    ], "p0.height??150"),
    src: qwik._fnSignal((p0) => p0.src, [
      props
    ], "p0.src"),
    width: qwik._fnSignal((p0) => p0.width ?? 150, [
      props
    ], "p0.width??150")
  }, null, 3, "Sr_1");
}, "Avatar_component_ytQ5v8dR6L4"));
const NeuralabLogo = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  return /* @__PURE__ */ qwik._jsxQ("div", null, null, /* @__PURE__ */ qwik._jsxQ("a", null, {
    href: "https://neuralab.dev"
  }, /* @__PURE__ */ qwik._jsxC(Avatar, {
    src: "https://raw.githubusercontent.com/NeuraLabCloud/static-assets/main/branding/icons/processor/processor.svg",
    get width() {
      return props.width;
    },
    get height() {
      return props.height;
    },
    get alt() {
      return props.alt;
    },
    [qwik._IMMUTABLE]: {
      alt: qwik._fnSignal((p0) => p0.alt, [
        props
      ], "p0.alt"),
      height: qwik._fnSignal((p0) => p0.height, [
        props
      ], "p0.height"),
      src: qwik._IMMUTABLE,
      width: qwik._fnSignal((p0) => p0.width, [
        props
      ], "p0.width")
    }
  }, 3, "wq_0"), 1, null), 1, "wq_1");
}, "NeuralabLogo_component_mhfvRkKteZc"));
const styles$3 = "/* \n? Global Shard Styles\n*\n* These are used in many components to \n* keep the styles consistent across the app\n* and easy to maintain over time.\n*/\n.btn-primary {\n  padding: 10px 20px;\n  border: 2px solid rgb(39, 39, 42);\n  border-radius: 50px;\n  background-color: rgb(39, 39, 42);\n  color: rgb(228, 228, 231);\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary:hover {\n  background-color: rgb(24, 24, 27);\n}\n.btn-primary:focus {\n  outline: none;\n  box-shadow: 0 0 5px rgb(24, 24, 27);\n}\n.btn-primary:active {\n  background-color: rgb(9, 9, 11);\n}\n@media (max-width: 768px) {\n  .btn-primary {\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n}\n.btn-secondary {\n  padding: 10px 20px;\n  border: 2px solid rgb(124, 58, 237);\n  border-radius: 50px;\n  background-color: rgb(124, 58, 237);\n  color: rgb(228, 228, 231);\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-secondary:hover {\n  background-color: rgb(109, 40, 217);\n}\n.btn-secondary:focus {\n  outline: none;\n  box-shadow: 0 0 5px rgb(109, 40, 217);\n}\n.btn-secondary:active {\n  background-color: rgb(91, 33, 182);\n}\n@media (max-width: 768px) {\n  .btn-secondary {\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n}\n.btn-primary-pulse {\n  padding: 10px 20px;\n  border: 2px solid rgb(39, 39, 42);\n  border-radius: 50px;\n  background-color: rgb(39, 39, 42);\n  color: rgb(228, 228, 231);\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary-pulse:hover {\n  animation: pulse 1s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.btn-primary-pulse:focus {\n  outline: none;\n  box-shadow: 0 0 5px rgb(63, 63, 70);\n}\n.btn-primary-pulse:active {\n  background-color: rgb(39, 39, 42);\n}\n@media (max-width: 768px) {\n  .btn-primary-pulse {\n    padding: 8px 16px;\n    font-size: 14px;\n  }\n}";
const Button = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "btnText",
    "btnVariant"
  ]);
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(styles$3, "Button_component_useStyles_dTMrDgCFA8o"));
  if (!props.btnVariant)
    return /* @__PURE__ */ qwik._jsxS("button", {
      ...props1,
      children: qwik._fnSignal((p0) => p0.btnText, [
        props
      ], "p0.btnText")
    }, {
      class: "btn-primary"
    }, 0, "gF_0");
  if (props.btnVariant === "primary-pulse")
    return /* @__PURE__ */ qwik._jsxS("button", {
      ...props1,
      children: qwik._fnSignal((p0) => p0.btnText, [
        props
      ], "p0.btnText")
    }, {
      class: "btn-primary-pulse"
    }, 0, "gF_1");
  return /* @__PURE__ */ qwik._jsxS("button", {
    ...props1,
    children: qwik._fnSignal((p0) => p0.btnText, [
      props
    ], "p0.btnText")
  }, {
    class: qwik._fnSignal((p0) => p0.btnVariant === "primary" ? "btn-primary" : "btn-secondary", [
      props
    ], 'p0.btnVariant==="primary"?"btn-primary":"btn-secondary"')
  }, 0, "gF_2");
}, "Button_component_PclBGhn2mE4"));
const styles$2 = ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (max-width: 768px) {\n  .center {\n    flex-direction: column;\n    align-items: center;\n  }\n}";
const Center = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(styles$2, "Center_component_useStyles_TgT6VywRT3M"));
  return /* @__PURE__ */ qwik._jsxQ("div", null, {
    class: "center"
  }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Fm_0"), 1, "Fm_1");
}, "Center_component_vEC8BQJwg1w"));
const styles$1 = '/* \n? Global Shard Styles\n*\n* These are used in many components to \n* keep the styles consistent across the app\n* and easy to maintain over time.\n*/\n.title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: rgb(228, 228, 231);\n}\n@media (max-width: 768px) {\n  .title {\n    font-size: 1.2rem;\n  }\n}\n.title-underline {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: rgb(228, 228, 231);\n  position: relative;\n  display: inline-block;\n}\n.title-underline:after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0.2rem;\n  background-color: rgb(228, 228, 231);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.3s ease-in-out;\n}\n@media (max-width: 768px) {\n  .title-underline:after {\n    height: 0.1rem;\n  }\n}\n.title-underline:hover:after {\n  transform: scaleX(1);\n}';
const Title = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(styles$1, "Title_component_useStyles_RnnVNS6ILuE"));
  if ((props.animation ?? "none") === "underline")
    return /* @__PURE__ */ qwik._jsxQ("div", null, {
      class: "title-underline"
    }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "00_0"), 1, "00_1");
  return /* @__PURE__ */ qwik._jsxQ("div", null, {
    class: "title"
  }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "00_2"), 1, "00_3");
}, "Title_component_mXd8ZE0tRIk"));
const styles = "/* \n? Global Shard Styles\n*\n* These are used in many components to \n* keep the styles consistent across the app\n* and easy to maintain over time.\n*/\n.name-input {\n  padding: 10px;\n  border: none;\n  border-bottom: 2px solid rgb(39, 39, 42);\n  font-size: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: transparent;\n  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n  border-radius: 20px;\n  min-height: 40px;\n}\n.name-input:focus {\n  border-color: rgb(113, 113, 122);\n  outline: none;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.1);\n}\n.name-input::placeholder {\n  color: rgb(113, 113, 122);\n}\n.name-input + .input-label {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: rgb(39, 39, 42);\n  font-size: 14px;\n  pointer-events: none;\n  transition: all 0.3s ease-in-out;\n}\n.name-input:focus + .input-label, .name-input.has-value + .input-label {\n  top: 0;\n  font-size: 12px;\n  color: rgb(113, 113, 122);\n}\n@media only screen and (max-width: 768px) {\n  .name-input {\n    font-size: 14px;\n    min-height: 30px;\n  }\n  .name-input + .input-label {\n    font-size: 12px;\n  }\n  .name-input:focus + .input-label, .name-input.has-value + .input-label {\n    font-size: 10px;\n  }\n}";
const TextInput = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(({ ...props }) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(styles, "TextInput_component_useStyles_iAj9WvrGs9c"));
  return (
    //@ts-ignore
    /* @__PURE__ */ qwik._jsxS("input", {
      ...props
    }, {
      type: "text"
    }, 0, "bM_0")
  );
}, "TextInput_component_Vb3q4ljJ3I4"));
exports.Avatar = Avatar;
exports.Button = Button;
exports.Center = Center;
exports.NeuralabLogo = NeuralabLogo;
exports.TextInput = TextInput;
exports.Title = Title;
