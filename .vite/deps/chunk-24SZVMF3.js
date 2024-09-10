import {
  _objectSpread2
} from "./chunk-5SMMSEZO.js";

// node_modules/rc-util/es/omit.js
function omit(obj, fields) {
  var clone = _objectSpread2({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function(key) {
      delete clone[key];
    });
  }
  return clone;
}

export {
  omit
};
//# sourceMappingURL=chunk-24SZVMF3.js.map
