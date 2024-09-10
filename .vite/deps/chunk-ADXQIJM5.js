import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/antd/es/_util/reactNode.js
var React = __toESM(require_react());
var {
  isValidElement
} = React;
function isFragment(child) {
  return child && isValidElement(child) && child.type === React.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return React.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
}
function cloneElement2(element, props) {
  return replaceElement(element, element, props);
}

export {
  isValidElement,
  isFragment,
  replaceElement,
  cloneElement2 as cloneElement
};
//# sourceMappingURL=chunk-ADXQIJM5.js.map
