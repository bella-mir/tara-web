import {
  es_default as es_default2,
  useId
} from "./chunk-YW3CHCIR.js";
import {
  button_default
} from "./chunk-HQNMDJWD.js";
import {
  convertLegacyProps
} from "./chunk-NZGUMIWQ.js";
import {
  NoCompactStyle
} from "./chunk-FG5HOXEM.js";
import {
  CheckCircleFilled_default,
  CloseCircleFilled_default,
  ExclamationCircleFilled_default,
  InfoCircleFilled_default
} from "./chunk-4IZ4SS3C.js";
import {
  KeyCode_default
} from "./chunk-RQMJBKSB.js";
import {
  getTransitionName,
  initFadeMotion,
  initZoomMotion
} from "./chunk-K3J4CGMF.js";
import {
  omit
} from "./chunk-24SZVMF3.js";
import {
  render,
  unmount
} from "./chunk-Q7LUV27Q.js";
import {
  ConfigContext,
  FormProvider,
  _toConsumableArray,
  clearFix,
  config_provider_default,
  en_US_default4 as en_US_default,
  es_default2 as es_default,
  genComponentStyleHook,
  genFocusStyle,
  getConfirmLocale,
  globalConfig,
  merge,
  resetComponent,
  useLocale_default,
  useSafeState,
  warnContext,
  warning_default
} from "./chunk-72AWTN6Z.js";
import {
  _extends
} from "./chunk-PQEZCWQY.js";
import {
  CloseOutlined_default
} from "./chunk-HNXCBJII.js";
import {
  _slicedToArray,
  canUseDom,
  contains
} from "./chunk-GAYUDVIN.js";
import {
  _objectSpread2
} from "./chunk-5SMMSEZO.js";
import {
  require_classnames
} from "./chunk-G2VIFKUL.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/antd/es/modal/confirm.js
var React12 = __toESM(require_react());

// node_modules/antd/es/modal/ConfirmDialog.js
var import_classnames7 = __toESM(require_classnames());
var React11 = __toESM(require_react());

// node_modules/antd/es/_util/ActionButton.js
var React = __toESM(require_react());
function isThenable(thing) {
  return !!(thing && thing.then);
}
var ActionButton = (props) => {
  const {
    type,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = React.useRef(false);
  const buttonRef = React.useRef(null);
  const [loading, setLoading] = useSafeState(false);
  const onInternalClose = function() {
    close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
  };
  React.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  const handlePromiseOnOk = (returnValueOfOnOk) => {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then(function() {
      setLoading(false, true);
      onInternalClose.apply(void 0, arguments);
      clickedRef.current = false;
    }, (e) => {
      setLoading(false, true);
      clickedRef.current = false;
      return Promise.reject(e);
    });
  };
  const onClick = (e) => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!returnValueOfOnOk) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return React.createElement(button_default, Object.assign({}, convertLegacyProps(type), {
    onClick,
    loading,
    prefixCls
  }, buttonProps, {
    ref: buttonRef
  }), children);
};
var ActionButton_default = ActionButton;

// node_modules/antd/es/modal/Modal.js
var import_classnames6 = __toESM(require_classnames());

// node_modules/rc-dialog/es/DialogWrap.js
var React7 = __toESM(require_react());

// node_modules/rc-dialog/es/Dialog/index.js
var import_classnames4 = __toESM(require_classnames());

// node_modules/rc-util/es/pickAttrs.js
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function(key) {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
      mergedConfig.data && match(key, dataPrefix) || // Attr
      mergedConfig.attr && propList.includes(key)
    ) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

// node_modules/rc-dialog/es/Dialog/index.js
var React6 = __toESM(require_react());
var import_react3 = __toESM(require_react());

// node_modules/rc-dialog/es/util.js
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }
  return motionName;
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

// node_modules/rc-dialog/es/Dialog/Content/index.js
var React4 = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());

// node_modules/rc-dialog/es/Dialog/Content/Panel.js
var import_react = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js
var React2 = __toESM(require_react());
var MemoChildren_default = React2.memo(function(_ref) {
  var children = _ref.children;
  return children;
}, function(_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
});

// node_modules/rc-dialog/es/Dialog/Content/Panel.js
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
var Panel = import_react.default.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, className = props.className, style = props.style, title = props.title, ariaId = props.ariaId, footer = props.footer, closable = props.closable, closeIcon = props.closeIcon, onClose = props.onClose, children = props.children, bodyStyle = props.bodyStyle, bodyProps = props.bodyProps, modalRender = props.modalRender, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, holderRef = props.holderRef, visible = props.visible, forceRender = props.forceRender, width = props.width, height = props.height;
  var sentinelStartRef = (0, import_react.useRef)();
  var sentinelEndRef = (0, import_react.useRef)();
  import_react.default.useImperativeHandle(ref, function() {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document, activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  });
  var contentStyle = {};
  if (width !== void 0) {
    contentStyle.width = width;
  }
  if (height !== void 0) {
    contentStyle.height = height;
  }
  var footerNode;
  if (footer) {
    footerNode = import_react.default.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }
  var headerNode;
  if (title) {
    headerNode = import_react.default.createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, import_react.default.createElement("div", {
      className: "".concat(prefixCls, "-title"),
      id: ariaId
    }, title));
  }
  var closer;
  if (closable) {
    closer = import_react.default.createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close")
    }, closeIcon || import_react.default.createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }));
  }
  var content = import_react.default.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, closer, headerNode, import_react.default.createElement("div", _extends({
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, bodyProps), children), footerNode);
  return import_react.default.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: holderRef,
    style: _objectSpread2(_objectSpread2({}, style), contentStyle),
    className: (0, import_classnames.default)(prefixCls, className),
    onMouseDown,
    onMouseUp
  }, import_react.default.createElement("div", {
    tabIndex: 0,
    ref: sentinelStartRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }), import_react.default.createElement(MemoChildren_default, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content), import_react.default.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }));
});
if (true) {
  Panel.displayName = "Panel";
}
var Panel_default = Panel;

// node_modules/rc-dialog/es/Dialog/Content/index.js
var Content = React4.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, title = props.title, style = props.style, className = props.className, visible = props.visible, forceRender = props.forceRender, destroyOnClose = props.destroyOnClose, motionName = props.motionName, ariaId = props.ariaId, onVisibleChanged = props.onVisibleChanged, mousePosition2 = props.mousePosition;
  var dialogRef = (0, import_react2.useRef)();
  var _React$useState = React4.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), transformOrigin = _React$useState2[0], setTransformOrigin = _React$useState2[1];
  var contentStyle = {};
  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }
  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition2 ? "".concat(mousePosition2.x - elementOffset.left, "px ").concat(mousePosition2.y - elementOffset.top, "px") : "");
  }
  return React4.createElement(es_default, {
    visible,
    onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender,
    motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return React4.createElement(Panel_default, _extends({}, props, {
      ref,
      title,
      ariaId,
      prefixCls,
      holderRef: motionRef,
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), style), contentStyle),
      className: (0, import_classnames2.default)(className, motionClassName)
    }));
  });
});
Content.displayName = "Content";
var Content_default = Content;

// node_modules/rc-dialog/es/Dialog/Mask.js
var React5 = __toESM(require_react());
var import_classnames3 = __toESM(require_classnames());
function Mask(props) {
  var prefixCls = props.prefixCls, style = props.style, visible = props.visible, maskProps = props.maskProps, motionName = props.motionName;
  return React5.createElement(es_default, {
    key: "mask",
    visible,
    motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function(_ref, ref) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return React5.createElement("div", _extends({
      ref,
      style: _objectSpread2(_objectSpread2({}, motionStyle), style),
      className: (0, import_classnames3.default)("".concat(prefixCls, "-mask"), motionClassName)
    }, maskProps));
  });
}

// node_modules/rc-dialog/es/Dialog/index.js
function Dialog(props) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-dialog" : _props$prefixCls, zIndex = props.zIndex, _props$visible = props.visible, visible = _props$visible === void 0 ? false : _props$visible, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, _props$focusTriggerAf = props.focusTriggerAfterClose, focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf, wrapStyle = props.wrapStyle, wrapClassName = props.wrapClassName, wrapProps = props.wrapProps, onClose = props.onClose, afterOpenChange = props.afterOpenChange, afterClose = props.afterClose, transitionName = props.transitionName, animation = props.animation, _props$closable = props.closable, closable = _props$closable === void 0 ? true : _props$closable, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, maskStyle = props.maskStyle, maskProps = props.maskProps, rootClassName = props.rootClassName;
  var lastOutSideActiveElementRef = (0, import_react3.useRef)();
  var wrapperRef = (0, import_react3.useRef)();
  var contentRef = (0, import_react3.useRef)();
  var _React$useState = React6.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
  var ariaId = useId();
  function saveLastOutSideActiveElementRef() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      lastOutSideActiveElementRef.current = document.activeElement;
    }
  }
  function focusDialogContent() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.focus();
    }
  }
  function onDialogVisibleChanged(newVisible) {
    if (newVisible) {
      focusDialogContent();
    } else {
      setAnimatedVisible(false);
      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {
        }
        lastOutSideActiveElementRef.current = null;
      }
      if (animatedVisible) {
        afterClose === null || afterClose === void 0 ? void 0 : afterClose();
      }
    }
    afterOpenChange === null || afterOpenChange === void 0 ? void 0 : afterOpenChange(newVisible);
  }
  function onInternalClose(e) {
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
  }
  var contentClickRef = (0, import_react3.useRef)(false);
  var contentTimeoutRef = (0, import_react3.useRef)();
  var onContentMouseDown = function onContentMouseDown2() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };
  var onContentMouseUp = function onContentMouseUp2() {
    contentTimeoutRef.current = setTimeout(function() {
      contentClickRef.current = false;
    });
  };
  var onWrapperClick = null;
  if (maskClosable) {
    onWrapperClick = function onWrapperClick2(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }
  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode_default.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    }
    if (visible) {
      if (e.keyCode === KeyCode_default.TAB) {
        contentRef.current.changeActive(!e.shiftKey);
      }
    }
  }
  (0, import_react3.useEffect)(function() {
    if (visible) {
      setAnimatedVisible(true);
      saveLastOutSideActiveElementRef();
    }
  }, [visible]);
  (0, import_react3.useEffect)(function() {
    return function() {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  return React6.createElement("div", _extends({
    className: (0, import_classnames4.default)("".concat(prefixCls, "-root"), rootClassName)
  }, pickAttrs(props, {
    data: true
  })), React6.createElement(Mask, {
    prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: _objectSpread2({
      zIndex
    }, maskStyle),
    maskProps
  }), React6.createElement("div", _extends({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: (0, import_classnames4.default)("".concat(prefixCls, "-wrap"), wrapClassName),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: _objectSpread2(_objectSpread2({
      zIndex
    }, wrapStyle), {}, {
      display: !animatedVisible ? "none" : null
    })
  }, wrapProps), React6.createElement(Content_default, _extends({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable,
    ariaId,
    prefixCls,
    visible: visible && animatedVisible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
}

// node_modules/rc-dialog/es/DialogWrap.js
var DialogWrap = function DialogWrap2(props) {
  var visible = props.visible, getContainer = props.getContainer, forceRender = props.forceRender, _props$destroyOnClose = props.destroyOnClose, destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose, _afterClose = props.afterClose;
  var _React$useState = React7.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
  React7.useEffect(function() {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }
  return React7.createElement(es_default2, {
    open: visible || forceRender || animatedVisible,
    autoDestroy: false,
    getContainer,
    autoLock: visible || animatedVisible
  }, React7.createElement(Dialog, _extends({}, props, {
    destroyOnClose,
    afterClose: function afterClose() {
      _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
      setAnimatedVisible(false);
    }
  })));
};
DialogWrap.displayName = "Dialog";
var DialogWrap_default = DialogWrap;

// node_modules/rc-dialog/es/index.js
var es_default3 = DialogWrap_default;

// node_modules/antd/es/modal/Modal.js
var React10 = __toESM(require_react());

// node_modules/antd/es/form/context.js
var React8 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var FormContext = React8.createContext({
  labelAlign: "right",
  vertical: false,
  itemRef: () => {
  }
});
var NoStyleItemContext = React8.createContext(null);
var FormProvider2 = (props) => {
  const providerProps = omit(props, ["prefixCls"]);
  return React8.createElement(FormProvider, Object.assign({}, providerProps));
};
var FormItemPrefixContext = React8.createContext({
  prefixCls: ""
});
var FormItemInputContext = React8.createContext({});
var NoFormStyle = (_ref) => {
  let {
    children,
    status,
    override
  } = _ref;
  const formItemInputContext = (0, import_react4.useContext)(FormItemInputContext);
  const newFormItemInputContext = (0, import_react4.useMemo)(() => {
    const newContext = Object.assign({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return React8.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};

// node_modules/rc-util/es/Dom/styleChecker.js
var isStyleNameSupport = function isStyleNameSupport2(styleName) {
  if (canUseDom() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function(name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isStyleValueSupport = function isStyleValueSupport2(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  var ele = document.createElement("div");
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== void 0) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}

// node_modules/antd/es/_util/styleChecker.js
var canUseDocElement = () => canUseDom() && window.document.documentElement;
var flexGapSupported;
var detectFlexGapSupported = () => {
  if (!canUseDocElement()) {
    return false;
  }
  if (flexGapSupported !== void 0) {
    return flexGapSupported;
  }
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);
  return flexGapSupported;
};

// node_modules/antd/es/modal/PurePanel.js
var import_classnames5 = __toESM(require_classnames());
var React9 = __toESM(require_react());

// node_modules/antd/es/modal/style/index.js
function box(position) {
  return {
    position,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
var genModalMaskStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: "none"
      },
      [`${componentCls}-mask`]: Object.assign(Object.assign({}, box("fixed")), {
        zIndex: token.zIndexPopupBase,
        height: "100%",
        backgroundColor: token.colorBgMask,
        [`${componentCls}-hidden`]: {
          display: "none"
        }
      }),
      [`${componentCls}-wrap`]: Object.assign(Object.assign({}, box("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token)
  }];
};
var genModalStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap`]: {
          zIndex: token.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token.screenSMMax})`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${token.marginXS} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${token.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: token.paddingLG,
        [`${componentCls}-title`]: {
          margin: 0,
          color: token.modalHeadingColor,
          fontWeight: token.fontWeightStrong,
          fontSize: token.modalHeaderTitleFontSize,
          lineHeight: token.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-content`]: {
          position: "relative",
          backgroundColor: token.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadow,
          pointerEvents: "auto",
          padding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
        },
        [`${componentCls}-close`]: Object.assign({
          position: "absolute",
          top: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
          insetInlineEnd: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
          zIndex: token.zIndexPopupBase + 10,
          padding: 0,
          color: token.modalCloseColor,
          fontWeight: token.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token.borderRadiusSM,
          width: token.modalConfirmIconSize,
          height: token.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: token.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${token.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: token.modalIconHoverColor,
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContentHover
          }
        }, genFocusStyle(token)),
        [`${componentCls}-header`]: {
          color: token.colorText,
          background: token.modalHeaderBg,
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
          marginBottom: token.marginXS
        },
        [`${componentCls}-body`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token.modalFooterBg,
          marginTop: token.marginSM,
          [`${token.antCls}-btn + ${token.antCls}-btn:not(${token.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: token.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
};
var genModalConfirmStyle = (token) => {
  const {
    componentCls
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${token.antCls}-modal-header`]: {
        display: "none"
      },
      [`${confirmComponentCls}-body-wrapper`]: Object.assign({}, clearFix()),
      [`${confirmComponentCls}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${confirmComponentCls}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: token.colorTextHeading,
          fontWeight: token.fontWeightStrong,
          fontSize: token.modalHeaderTitleFontSize,
          lineHeight: token.modalHeaderTitleLineHeight,
          [`+ ${confirmComponentCls}-content`]: {
            marginBlockStart: token.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${token.modalConfirmIconSize + token.marginSM}px)`
          }
        },
        [`${confirmComponentCls}-content`]: {
          color: token.colorText,
          fontSize: token.fontSize
        },
        [`> ${token.iconCls}`]: {
          flex: "none",
          marginInlineEnd: token.marginSM,
          fontSize: token.modalConfirmIconSize,
          [`+ ${confirmComponentCls}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.marginSM
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        textAlign: "end",
        marginTop: token.marginSM,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    }
  };
};
var genRTLStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: "rtl",
        [`${componentCls}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
};
var genWireframeStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [componentCls]: {
      [`${componentCls}-content`]: {
        padding: 0
      },
      [`${componentCls}-header`]: {
        padding: token.modalHeaderPadding,
        borderBottom: `${token.modalHeaderBorderWidth}px ${token.modalHeaderBorderStyle} ${token.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${componentCls}-body`]: {
        padding: token.modalBodyPadding
      },
      [`${componentCls}-footer`]: {
        padding: `${token.modalFooterPaddingVertical}px ${token.modalFooterPaddingHorizontal}px`,
        borderTop: `${token.modalFooterBorderWidth}px ${token.modalFooterBorderStyle} ${token.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [confirmComponentCls]: {
      [`${antCls}-modal-body`]: {
        padding: `${token.padding * 2}px ${token.padding * 2}px ${token.paddingLG}px`
      },
      [`${confirmComponentCls}-body`]: {
        [`> ${token.iconCls}`]: {
          marginInlineEnd: token.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.margin
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        marginTop: token.marginLG
      }
    }
  };
};
var style_default = genComponentStyleHook("Modal", (token) => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = merge(token, {
    modalBodyPadding: token.paddingLG,
    modalHeaderBg: token.colorBgElevated,
    modalHeaderPadding: `${headerPaddingVertical}px ${token.paddingLG}px`,
    modalHeaderBorderWidth: token.lineWidth,
    modalHeaderBorderStyle: token.lineType,
    modalHeaderTitleLineHeight: headerLineHeight,
    modalHeaderTitleFontSize: headerFontSize,
    modalHeaderBorderColorSplit: token.colorSplit,
    modalHeaderCloseSize: headerLineHeight * headerFontSize + headerPaddingVertical * 2,
    modalContentBg: token.colorBgElevated,
    modalHeadingColor: token.colorTextHeading,
    modalCloseColor: token.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterPaddingVertical: token.paddingXS,
    modalFooterPaddingHorizontal: token.padding,
    modalFooterBorderWidth: token.lineWidth,
    modalConfirmTitleFontSize: token.fontSizeLG,
    modalIconHoverColor: token.colorIconHover,
    modalConfirmIconSize: token.fontSize * token.lineHeight,
    modalCloseBtnSize: token.controlHeightLG * 0.55
  });
  return [genModalStyle(modalToken), genModalConfirmStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), token.wireframe && genWireframeStyle(modalToken), initZoomMotion(modalToken, "zoom")];
});

// node_modules/antd/es/modal/PurePanel.js
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function renderCloseIcon(prefixCls, closeIcon) {
  return React9.createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || React9.createElement(CloseOutlined_default, {
    className: `${prefixCls}-close-icon`
  }));
}
var Footer = (props) => {
  const {
    okText,
    okType = "primary",
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps
  } = props;
  const [locale] = useLocale_default("Modal", getConfirmLocale());
  return React9.createElement(React9.Fragment, null, React9.createElement(button_default, Object.assign({
    onClick: onCancel
  }, cancelButtonProps), cancelText || (locale === null || locale === void 0 ? void 0 : locale.cancelText)), React9.createElement(button_default, Object.assign({}, convertLegacyProps(okType), {
    loading: confirmLoading,
    onClick: onOk
  }, okButtonProps), okText || (locale === null || locale === void 0 ? void 0 : locale.okText)));
};
var PurePanel = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    closeIcon,
    closable,
    type,
    title,
    children
  } = props, restProps = __rest(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children"]);
  const {
    getPrefixCls
  } = React9.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const prefixCls = customizePrefixCls || getPrefixCls("modal");
  const [, hashId] = style_default(prefixCls);
  const confirmPrefixCls = `${prefixCls}-confirm`;
  let additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : false,
      title: "",
      footer: "",
      children: React9.createElement(ConfirmContent, Object.assign({}, props, {
        confirmPrefixCls,
        rootPrefixCls,
        content: children
      }))
    };
  } else {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : true,
      title,
      footer: props.footer === void 0 ? React9.createElement(Footer, Object.assign({}, props)) : props.footer,
      children
    };
  }
  return React9.createElement(Panel_default, Object.assign({
    prefixCls,
    className: (0, import_classnames5.default)(hashId, `${prefixCls}-pure-panel`, type && confirmPrefixCls, type && `${confirmPrefixCls}-${type}`, className)
  }, restProps, {
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable
  }, additionalProps));
};
var PurePanel_default = PurePanel;

// node_modules/antd/es/modal/Modal.js
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var mousePosition;
var getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};
if (canUseDocElement()) {
  document.documentElement.addEventListener("click", getClickPosition, true);
}
var Modal = (props) => {
  var _a;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = React10.useContext(ConfigContext);
  const handleCancel = (e) => {
    const {
      onCancel
    } = props;
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };
  const handleOk = (e) => {
    const {
      onOk
    } = props;
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };
  true ? warning_default(!("visible" in props), "Modal", `\`visible\` will be removed in next major version, please use \`open\` instead.`) : void 0;
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    open,
    wrapClassName,
    centered,
    getContainer,
    closeIcon,
    focusTriggerAfterClose = true,
    // Deprecated
    visible,
    width = 520,
    footer
  } = props, restProps = __rest2(props, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose", "visible", "width", "footer"]);
  const prefixCls = getPrefixCls("modal", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [wrapSSR, hashId] = style_default(prefixCls);
  const wrapClassNameExtended = (0, import_classnames6.default)(wrapClassName, {
    [`${prefixCls}-centered`]: !!centered,
    [`${prefixCls}-wrap-rtl`]: direction === "rtl"
  });
  if (true) {
    true ? warning_default(!("visible" in props), "Modal", "`visible` is deprecated, please use `open` instead.") : void 0;
  }
  const dialogFooter = footer === void 0 ? React10.createElement(Footer, Object.assign({}, props, {
    onOk: handleOk,
    onCancel: handleCancel
  })) : footer;
  return wrapSSR(React10.createElement(NoCompactStyle, null, React10.createElement(NoFormStyle, {
    status: true,
    override: true
  }, React10.createElement(es_default3, Object.assign({
    width
  }, restProps, {
    getContainer: getContainer === void 0 ? getContextPopupContainer : getContainer,
    prefixCls,
    rootClassName: (0, import_classnames6.default)(hashId, rootClassName),
    wrapClassName: wrapClassNameExtended,
    footer: dialogFooter,
    visible: open !== null && open !== void 0 ? open : visible,
    mousePosition: (_a = restProps.mousePosition) !== null && _a !== void 0 ? _a : mousePosition,
    onClose: handleCancel,
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    focusTriggerAfterClose,
    transitionName: getTransitionName(rootPrefixCls, "zoom", props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
    className: (0, import_classnames6.default)(hashId, className)
  })))));
};
var Modal_default = Modal;

// node_modules/antd/es/modal/ConfirmDialog.js
function ConfirmContent(props) {
  const {
    icon,
    onCancel,
    onOk,
    close,
    okText,
    okButtonProps,
    cancelText,
    cancelButtonProps,
    confirmPrefixCls,
    rootPrefixCls,
    type,
    okCancel,
    footer,
    // Legacy for static function usage
    locale: staticLocale
  } = props;
  true ? warning_default(!(typeof icon === "string" && icon.length > 2), "Modal", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : void 0;
  let mergedIcon = icon;
  if (!icon && icon !== null) {
    switch (type) {
      case "info":
        mergedIcon = React11.createElement(InfoCircleFilled_default, null);
        break;
      case "success":
        mergedIcon = React11.createElement(CheckCircleFilled_default, null);
        break;
      case "error":
        mergedIcon = React11.createElement(CloseCircleFilled_default, null);
        break;
      default:
        mergedIcon = React11.createElement(ExclamationCircleFilled_default, null);
    }
  }
  const okType = props.okType || "primary";
  const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === "confirm";
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || "ok";
  const [locale] = useLocale_default("Modal");
  const mergedLocale = staticLocale || locale;
  const cancelButton = mergedOkCancel && React11.createElement(ActionButton_default, {
    actionFn: onCancel,
    close,
    autoFocus: autoFocusButton === "cancel",
    buttonProps: cancelButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, cancelText || (mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.cancelText));
  return React11.createElement("div", {
    className: `${confirmPrefixCls}-body-wrapper`
  }, React11.createElement("div", {
    className: `${confirmPrefixCls}-body`
  }, mergedIcon, props.title === void 0 ? null : React11.createElement("span", {
    className: `${confirmPrefixCls}-title`
  }, props.title), React11.createElement("div", {
    className: `${confirmPrefixCls}-content`
  }, props.content)), footer === void 0 ? React11.createElement("div", {
    className: `${confirmPrefixCls}-btns`
  }, cancelButton, React11.createElement(ActionButton_default, {
    type: okType,
    actionFn: onOk,
    close,
    autoFocus: autoFocusButton === "ok",
    buttonProps: okButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, okText || (mergedOkCancel ? mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.okText : mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.justOkText))) : footer);
}
var ConfirmDialog = (props) => {
  const {
    close,
    zIndex,
    afterClose,
    visible,
    open,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    iconPrefixCls,
    bodyStyle,
    closable = false,
    closeIcon,
    modalRender,
    focusTriggerAfterClose
  } = props;
  if (true) {
    true ? warning_default(visible === void 0, "Modal", `\`visible\` is deprecated, please use \`open\` instead.`) : void 0;
  }
  const confirmPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === void 0 ? true : props.mask;
  const maskClosable = props.maskClosable === void 0 ? false : props.maskClosable;
  const classString = (0, import_classnames7.default)(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
    [`${confirmPrefixCls}-rtl`]: direction === "rtl"
  }, props.className);
  return React11.createElement(config_provider_default, {
    prefixCls: rootPrefixCls,
    iconPrefixCls,
    direction
  }, React11.createElement(Modal_default, {
    prefixCls,
    className: classString,
    wrapClassName: (0, import_classnames7.default)({
      [`${confirmPrefixCls}-centered`]: !!props.centered
    }, wrapClassName),
    onCancel: () => close === null || close === void 0 ? void 0 : close({
      triggerCancel: true
    }),
    open,
    title: "",
    footer: null,
    transitionName: getTransitionName(rootPrefixCls, "zoom", props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
    mask,
    maskClosable,
    maskStyle,
    style,
    bodyStyle,
    width,
    zIndex,
    afterClose,
    keyboard,
    centered,
    getContainer,
    closable,
    closeIcon,
    modalRender,
    focusTriggerAfterClose
  }, React11.createElement(ConfirmContent, Object.assign({}, props, {
    confirmPrefixCls
  }))));
};
if (true) {
  ConfirmDialog.displayName = "ConfirmDialog";
}
var ConfirmDialog_default = ConfirmDialog;

// node_modules/antd/es/modal/destroyFns.js
var destroyFns = [];
var destroyFns_default = destroyFns;

// node_modules/antd/es/modal/confirm.js
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var defaultRootPrefixCls = "";
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
function confirm(config) {
  if (true) {
    warnContext("Modal");
  }
  const container = document.createDocumentFragment();
  let currentConfig = Object.assign(Object.assign({}, config), {
    close,
    open: true
  });
  let timeoutId;
  function destroy() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, [() => {
      }].concat(_toConsumableArray(args.slice(1))));
    }
    for (let i = 0; i < destroyFns_default.length; i++) {
      const fn = destroyFns_default[i];
      if (fn === close) {
        destroyFns_default.splice(i, 1);
        break;
      }
    }
    unmount(container);
  }
  function render2(_a) {
    var {
      okText,
      cancelText,
      prefixCls: customizePrefixCls
    } = _a, props = __rest3(_a, ["okText", "cancelText", "prefixCls"]);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const runtimeLocale = getConfirmLocale();
      const {
        getPrefixCls,
        getIconPrefixCls
      } = globalConfig();
      const rootPrefixCls = getPrefixCls(void 0, getRootPrefixCls());
      const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
      const iconPrefixCls = getIconPrefixCls();
      render(React12.createElement(ConfirmDialog_default, Object.assign({}, props, {
        prefixCls,
        rootPrefixCls,
        iconPrefixCls,
        okText,
        locale: runtimeLocale,
        cancelText: cancelText || runtimeLocale.cancelText
      })), container);
    });
  }
  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = Object.assign(Object.assign({}, currentConfig), {
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy.apply(this, args);
      }
    });
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    render2(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = Object.assign(Object.assign({}, currentConfig), configUpdate);
    }
    render2(currentConfig);
  }
  render2(currentConfig);
  destroyFns_default.push(close);
  return {
    destroy: close,
    update
  };
}
function withWarn(props) {
  return Object.assign(Object.assign({}, props), {
    type: "warning"
  });
}
function withInfo(props) {
  return Object.assign(Object.assign({}, props), {
    type: "info"
  });
}
function withSuccess(props) {
  return Object.assign(Object.assign({}, props), {
    type: "success"
  });
}
function withError(props) {
  return Object.assign(Object.assign({}, props), {
    type: "error"
  });
}
function withConfirm(props) {
  return Object.assign(Object.assign({}, props), {
    type: "confirm"
  });
}
function modalGlobalConfig(_ref) {
  let {
    rootPrefixCls
  } = _ref;
  true ? warning_default(false, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead.") : void 0;
  defaultRootPrefixCls = rootPrefixCls;
}

// node_modules/antd/es/modal/useModal/index.js
var React15 = __toESM(require_react());

// node_modules/antd/es/_util/hooks/usePatchElement.js
var React13 = __toESM(require_react());
function usePatchElement() {
  const [elements, setElements] = React13.useState([]);
  const patchElement = React13.useCallback((element) => {
    setElements((originElements) => [].concat(_toConsumableArray(originElements), [element]));
    return () => {
      setElements((originElements) => originElements.filter((ele) => ele !== element));
    };
  }, []);
  return [elements, patchElement];
}

// node_modules/antd/es/modal/useModal/HookModal.js
var React14 = __toESM(require_react());
var HookModal = (_ref, ref) => {
  let {
    afterClose: hookAfterClose,
    config
  } = _ref;
  var _a;
  const [open, setOpen] = React14.useState(true);
  const [innerConfig, setInnerConfig] = React14.useState(config);
  const {
    direction,
    getPrefixCls
  } = React14.useContext(ConfigContext);
  const prefixCls = getPrefixCls("modal");
  const rootPrefixCls = getPrefixCls();
  const afterClose = () => {
    var _a2;
    hookAfterClose();
    (_a2 = innerConfig.afterClose) === null || _a2 === void 0 ? void 0 : _a2.call(innerConfig);
  };
  const close = function() {
    setOpen(false);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel.apply(innerConfig, [() => {
      }].concat(_toConsumableArray(args.slice(1))));
    }
  };
  React14.useImperativeHandle(ref, () => ({
    destroy: close,
    update: (newConfig) => {
      setInnerConfig((originConfig) => Object.assign(Object.assign({}, originConfig), newConfig));
    }
  }));
  const mergedOkCancel = (_a = innerConfig.okCancel) !== null && _a !== void 0 ? _a : innerConfig.type === "confirm";
  const [contextLocale] = useLocale_default("Modal", en_US_default.Modal);
  return React14.createElement(ConfirmDialog_default, Object.assign({
    prefixCls,
    rootPrefixCls
  }, innerConfig, {
    close,
    open,
    afterClose,
    okText: innerConfig.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.justOkText),
    direction: innerConfig.direction || direction,
    cancelText: innerConfig.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.cancelText)
  }));
};
var HookModal_default = React14.forwardRef(HookModal);

// node_modules/antd/es/modal/useModal/index.js
var uuid = 0;
var ElementsHolder = React15.memo(React15.forwardRef((_props, ref) => {
  const [elements, patchElement] = usePatchElement();
  React15.useImperativeHandle(ref, () => ({
    patchElement
  }), []);
  return React15.createElement(React15.Fragment, null, elements);
}));
function useModal() {
  const holderRef = React15.useRef(null);
  const [actionQueue, setActionQueue] = React15.useState([]);
  React15.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = _toConsumableArray(actionQueue);
      cloneQueue.forEach((action) => {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  const getConfirmFunc = React15.useCallback((withFunc) => function hookConfirm(config) {
    var _a;
    uuid += 1;
    const modalRef = React15.createRef();
    let closeFunc;
    const modal = React15.createElement(HookModal_default, {
      key: `modal-${uuid}`,
      config: withFunc(config),
      ref: modalRef,
      afterClose: () => {
        closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
      }
    });
    closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
    if (closeFunc) {
      destroyFns_default.push(closeFunc);
    }
    return {
      destroy: () => {
        function destroyAction() {
          var _a2;
          (_a2 = modalRef.current) === null || _a2 === void 0 ? void 0 : _a2.destroy();
        }
        if (modalRef.current) {
          destroyAction();
        } else {
          setActionQueue((prev) => [].concat(_toConsumableArray(prev), [destroyAction]));
        }
      },
      update: (newConfig) => {
        function updateAction() {
          var _a2;
          (_a2 = modalRef.current) === null || _a2 === void 0 ? void 0 : _a2.update(newConfig);
        }
        if (modalRef.current) {
          updateAction();
        } else {
          setActionQueue((prev) => [].concat(_toConsumableArray(prev), [updateAction]));
        }
      }
    };
  }, []);
  const fns = React15.useMemo(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }), []);
  return [fns, React15.createElement(ElementsHolder, {
    key: "modal-holder",
    ref: holderRef
  })];
}
var useModal_default = useModal;

// node_modules/antd/es/modal/index.js
function modalWarn(props) {
  return confirm(withWarn(props));
}
var Modal2 = Modal_default;
Modal2.useModal = useModal_default;
Modal2.info = function infoFn(props) {
  return confirm(withInfo(props));
};
Modal2.success = function successFn(props) {
  return confirm(withSuccess(props));
};
Modal2.error = function errorFn(props) {
  return confirm(withError(props));
};
Modal2.warning = modalWarn;
Modal2.warn = modalWarn;
Modal2.confirm = function confirmFn(props) {
  return confirm(withConfirm(props));
};
Modal2.destroyAll = function destroyAllFn() {
  while (destroyFns_default.length) {
    const close = destroyFns_default.pop();
    if (close) {
      close();
    }
  }
};
Modal2.config = modalGlobalConfig;
Modal2._InternalPanelDoNotUseOrYouWillBeFired = PurePanel_default;
if (true) {
  Modal2.displayName = "Modal";
}
var modal_default = Modal2;

export {
  ActionButton_default,
  pickAttrs,
  es_default3 as es_default,
  FormContext,
  NoStyleItemContext,
  FormProvider2 as FormProvider,
  FormItemPrefixContext,
  FormItemInputContext,
  NoFormStyle,
  isStyleSupport,
  detectFlexGapSupported,
  genModalMaskStyle,
  useModal_default,
  modal_default
};
//# sourceMappingURL=chunk-RCNWBID4.js.map
