import {
  isPresetColor
} from "./chunk-VCMMPPWA.js";
import {
  cloneElement
} from "./chunk-ADXQIJM5.js";
import {
  ConfigContext,
  Keyframes_default,
  es_default2 as es_default,
  genComponentStyleHook,
  genPresetColor,
  merge,
  resetComponent
} from "./chunk-72AWTN6Z.js";
import {
  require_classnames
} from "./chunk-G2VIFKUL.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/antd/es/badge/index.js
var import_classnames4 = __toESM(require_classnames());
var React4 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/antd/es/badge/Ribbon.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());

// node_modules/antd/es/badge/style/index.js
var antStatusProcessing = new Keyframes_default("antStatusProcessing", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(2.4)",
    opacity: 0
  }
});
var antZoomBadgeIn = new Keyframes_default("antZoomBadgeIn", {
  "0%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1) translate(50%, -50%)"
  }
});
var antZoomBadgeOut = new Keyframes_default("antZoomBadgeOut", {
  "0%": {
    transform: "scale(1) translate(50%, -50%)"
  },
  "100%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  }
});
var antNoWrapperZoomBadgeIn = new Keyframes_default("antNoWrapperZoomBadgeIn", {
  "0%": {
    transform: "scale(0)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)"
  }
});
var antNoWrapperZoomBadgeOut = new Keyframes_default("antNoWrapperZoomBadgeOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0)",
    opacity: 0
  }
});
var antBadgeLoadingCircle = new Keyframes_default("antBadgeLoadingCircle", {
  "0%": {
    transformOrigin: "50%"
  },
  "100%": {
    transform: "translate(50%, -50%) rotate(360deg)",
    transformOrigin: "50%"
  }
});
var genSharedBadgeStyle = (token) => {
  const {
    componentCls,
    iconCls,
    antCls,
    badgeFontHeight,
    badgeShadowSize,
    badgeHeightSm,
    motionDurationSlow,
    badgeStatusSize,
    marginXS,
    badgeRibbonOffset
  } = token;
  const numberPrefixCls = `${antCls}-scroll-number`;
  const ribbonPrefixCls = `${antCls}-ribbon`;
  const ribbonWrapperPrefixCls = `${antCls}-ribbon-wrapper`;
  const colorPreset = genPresetColor(token, (colorKey, _ref) => {
    let {
      darkColor
    } = _ref;
    return {
      [`${componentCls}-color-${colorKey}`]: {
        background: darkColor
      }
    };
  });
  const statusRibbonPreset = genPresetColor(token, (colorKey, _ref2) => {
    let {
      darkColor
    } = _ref2;
    return {
      [`&${ribbonPrefixCls}-color-${colorKey}`]: {
        background: darkColor,
        color: darkColor
      }
    };
  });
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      position: "relative",
      display: "inline-block",
      width: "fit-content",
      lineHeight: 1,
      [`${componentCls}-count`]: {
        zIndex: token.badgeZIndex,
        minWidth: token.badgeHeight,
        height: token.badgeHeight,
        color: token.badgeTextColor,
        fontWeight: token.badgeFontWeight,
        fontSize: token.badgeFontSize,
        lineHeight: `${token.badgeHeight}px`,
        whiteSpace: "nowrap",
        textAlign: "center",
        background: token.badgeColor,
        borderRadius: token.badgeHeight / 2,
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`,
        transition: `background ${token.motionDurationMid}`,
        a: {
          color: token.badgeTextColor
        },
        "a:hover": {
          color: token.badgeTextColor
        },
        "a:hover &": {
          background: token.badgeColorHover
        }
      },
      [`${componentCls}-count-sm`]: {
        minWidth: badgeHeightSm,
        height: badgeHeightSm,
        fontSize: token.badgeFontSizeSm,
        lineHeight: `${badgeHeightSm}px`,
        borderRadius: badgeHeightSm / 2
      },
      [`${componentCls}-multiple-words`]: {
        padding: `0 ${token.paddingXS}px`
      },
      [`${componentCls}-dot`]: {
        zIndex: token.badgeZIndex,
        width: token.badgeDotSize,
        minWidth: token.badgeDotSize,
        height: token.badgeDotSize,
        background: token.badgeColor,
        borderRadius: "100%",
        boxShadow: `0 0 0 ${badgeShadowSize}px ${token.badgeShadowColor}`
      },
      [`${componentCls}-dot${numberPrefixCls}`]: {
        transition: `background ${motionDurationSlow}`
      },
      [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        transform: "translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`${iconCls}-spin`]: {
          animationName: antBadgeLoadingCircle,
          animationDuration: token.motionDurationMid,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }
      },
      [`&${componentCls}-status`]: {
        lineHeight: "inherit",
        verticalAlign: "baseline",
        [`${componentCls}-status-dot`]: {
          position: "relative",
          top: -1,
          display: "inline-block",
          width: badgeStatusSize,
          height: badgeStatusSize,
          verticalAlign: "middle",
          borderRadius: "50%"
        },
        [`${componentCls}-status-success`]: {
          backgroundColor: token.colorSuccess
        },
        [`${componentCls}-status-processing`]: {
          position: "relative",
          color: token.colorPrimary,
          backgroundColor: token.colorPrimary,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            width: "100%",
            height: "100%",
            borderWidth: badgeShadowSize,
            borderStyle: "solid",
            borderColor: "inherit",
            borderRadius: "50%",
            animationName: antStatusProcessing,
            animationDuration: token.badgeProcessingDuration,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            content: '""'
          }
        },
        [`${componentCls}-status-default`]: {
          backgroundColor: token.colorTextPlaceholder
        },
        [`${componentCls}-status-error`]: {
          backgroundColor: token.colorError
        },
        [`${componentCls}-status-warning`]: {
          backgroundColor: token.colorWarning
        },
        [`${componentCls}-status-text`]: {
          marginInlineStart: marginXS,
          color: token.colorText,
          fontSize: token.fontSize
        }
      }
    }), colorPreset), {
      [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
        animationName: antZoomBadgeIn,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`${componentCls}-zoom-leave`]: {
        animationName: antZoomBadgeOut,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: token.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`&${componentCls}-not-a-wrapper`]: {
        [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
          animationName: antNoWrapperZoomBadgeIn,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: token.motionEaseOutBack
        },
        [`${componentCls}-zoom-leave`]: {
          animationName: antNoWrapperZoomBadgeOut,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: token.motionEaseOutBack
        },
        [`&:not(${componentCls}-status)`]: {
          verticalAlign: "middle"
        },
        [`${numberPrefixCls}-custom-component, ${componentCls}-count`]: {
          transform: "none"
        },
        [`${numberPrefixCls}-custom-component, ${numberPrefixCls}`]: {
          position: "relative",
          top: "auto",
          display: "block",
          transformOrigin: "50% 50%"
        }
      },
      [`${numberPrefixCls}`]: {
        overflow: "hidden",
        [`${numberPrefixCls}-only`]: {
          position: "relative",
          display: "inline-block",
          height: token.badgeHeight,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseOutBack}`,
          WebkitTransformStyle: "preserve-3d",
          WebkitBackfaceVisibility: "hidden",
          [`> p${numberPrefixCls}-only-unit`]: {
            height: token.badgeHeight,
            margin: 0,
            WebkitTransformStyle: "preserve-3d",
            WebkitBackfaceVisibility: "hidden"
          }
        },
        [`${numberPrefixCls}-symbol`]: {
          verticalAlign: "top"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl",
        [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
          transform: "translate(-50%, -50%)"
        }
      }
    }),
    [`${ribbonWrapperPrefixCls}`]: {
      position: "relative"
    },
    [`${ribbonPrefixCls}`]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      position: "absolute",
      top: marginXS,
      padding: `0 ${token.paddingXS}px`,
      color: token.colorPrimary,
      lineHeight: `${badgeFontHeight}px`,
      whiteSpace: "nowrap",
      backgroundColor: token.colorPrimary,
      borderRadius: token.borderRadiusSM,
      [`${ribbonPrefixCls}-text`]: {
        color: token.colorTextLightSolid
      },
      [`${ribbonPrefixCls}-corner`]: {
        position: "absolute",
        top: "100%",
        width: badgeRibbonOffset,
        height: badgeRibbonOffset,
        color: "currentcolor",
        border: `${badgeRibbonOffset / 2}px solid`,
        transform: token.badgeRibbonCornerTransform,
        transformOrigin: "top",
        filter: token.badgeRibbonCornerFilter
      }
    }), statusRibbonPreset), {
      [`&${ribbonPrefixCls}-placement-end`]: {
        insetInlineEnd: -badgeRibbonOffset,
        borderEndEndRadius: 0,
        [`${ribbonPrefixCls}-corner`]: {
          insetInlineEnd: 0,
          borderInlineEndColor: "transparent",
          borderBlockEndColor: "transparent"
        }
      },
      [`&${ribbonPrefixCls}-placement-start`]: {
        insetInlineStart: -badgeRibbonOffset,
        borderEndStartRadius: 0,
        [`${ribbonPrefixCls}-corner`]: {
          insetInlineStart: 0,
          borderBlockEndColor: "transparent",
          borderInlineStartColor: "transparent"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
};
var style_default = genComponentStyleHook("Badge", (token) => {
  const {
    fontSize,
    lineHeight,
    fontSizeSM,
    lineWidth,
    marginXS,
    colorBorderBg
  } = token;
  const badgeFontHeight = Math.round(fontSize * lineHeight);
  const badgeShadowSize = lineWidth;
  const badgeZIndex = "auto";
  const badgeHeight = badgeFontHeight - 2 * badgeShadowSize;
  const badgeTextColor = token.colorBgContainer;
  const badgeFontWeight = "normal";
  const badgeFontSize = fontSizeSM;
  const badgeColor = token.colorError;
  const badgeColorHover = token.colorErrorHover;
  const badgeHeightSm = fontSize;
  const badgeDotSize = fontSizeSM / 2;
  const badgeFontSizeSm = fontSizeSM;
  const badgeStatusSize = fontSizeSM / 2;
  const badgeToken = merge(token, {
    badgeFontHeight,
    badgeShadowSize,
    badgeZIndex,
    badgeHeight,
    badgeTextColor,
    badgeFontWeight,
    badgeFontSize,
    badgeColor,
    badgeColorHover,
    badgeShadowColor: colorBorderBg,
    badgeHeightSm,
    badgeDotSize,
    badgeFontSizeSm,
    badgeStatusSize,
    badgeProcessingDuration: "1.2s",
    badgeRibbonOffset: marginXS,
    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: "scaleY(0.75)",
    badgeRibbonCornerFilter: `brightness(75%)`
  });
  return [genSharedBadgeStyle(badgeToken)];
});

// node_modules/antd/es/badge/Ribbon.js
var Ribbon = (_ref) => {
  let {
    className,
    prefixCls: customizePrefixCls,
    style,
    color,
    children,
    text,
    placement = "end"
  } = _ref;
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("ribbon", customizePrefixCls);
  const colorInPreset = isPresetColor(color, false);
  const ribbonCls = (0, import_classnames.default)(prefixCls, `${prefixCls}-placement-${placement}`, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-color-${color}`]: colorInPreset
  }, className);
  const [wrapSSR, hashId] = style_default(prefixCls);
  const colorStyle = {};
  const cornerColorStyle = {};
  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }
  return wrapSSR(React.createElement("div", {
    className: (0, import_classnames.default)(`${prefixCls}-wrapper`, hashId)
  }, children, React.createElement("div", {
    className: (0, import_classnames.default)(ribbonCls, hashId),
    style: Object.assign(Object.assign({}, colorStyle), style)
  }, React.createElement("span", {
    className: `${prefixCls}-text`
  }, text), React.createElement("div", {
    className: `${prefixCls}-corner`,
    style: cornerColorStyle
  }))));
};
if (true) {
  Ribbon.displayName = "Ribbon";
}
var Ribbon_default = Ribbon;

// node_modules/antd/es/badge/ScrollNumber.js
var import_classnames3 = __toESM(require_classnames());
var React3 = __toESM(require_react());

// node_modules/antd/es/badge/SingleNumber.js
var import_classnames2 = __toESM(require_classnames());
var React2 = __toESM(require_react());
function UnitNumber(_ref) {
  let {
    prefixCls,
    value,
    current,
    offset = 0
  } = _ref;
  let style;
  if (offset) {
    style = {
      position: "absolute",
      top: `${offset}00%`,
      left: 0
    };
  }
  return React2.createElement("span", {
    style,
    className: (0, import_classnames2.default)(`${prefixCls}-only-unit`, {
      current
    })
  }, value);
}
function getOffset(start, end, unit) {
  let index = start;
  let offset = 0;
  while ((index + 10) % 10 !== end) {
    index += unit;
    offset += unit;
  }
  return offset;
}
function SingleNumber(props) {
  const {
    prefixCls,
    count: originCount,
    value: originValue
  } = props;
  const value = Number(originValue);
  const count = Math.abs(originCount);
  const [prevValue, setPrevValue] = React2.useState(value);
  const [prevCount, setPrevCount] = React2.useState(count);
  const onTransitionEnd = () => {
    setPrevValue(value);
    setPrevCount(count);
  };
  React2.useEffect(() => {
    const timeout = setTimeout(() => {
      onTransitionEnd();
    }, 1e3);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  let unitNodes;
  let offsetStyle;
  if (prevValue === value || Number.isNaN(value) || Number.isNaN(prevValue)) {
    unitNodes = [React2.createElement(UnitNumber, Object.assign({}, props, {
      key: value,
      current: true
    }))];
    offsetStyle = {
      transition: "none"
    };
  } else {
    unitNodes = [];
    const end = value + 10;
    const unitNumberList = [];
    for (let index = value; index <= end; index += 1) {
      unitNumberList.push(index);
    }
    const prevIndex = unitNumberList.findIndex((n) => n % 10 === prevValue);
    unitNodes = unitNumberList.map((n, index) => {
      const singleUnit = n % 10;
      return React2.createElement(UnitNumber, Object.assign({}, props, {
        key: n,
        value: singleUnit,
        offset: index - prevIndex,
        current: index === prevIndex
      }));
    });
    const unit = prevCount < count ? 1 : -1;
    offsetStyle = {
      transform: `translateY(${-getOffset(prevValue, value, unit)}00%)`
    };
  }
  return React2.createElement("span", {
    className: `${prefixCls}-only`,
    style: offsetStyle,
    onTransitionEnd
  }, unitNodes);
}

// node_modules/antd/es/badge/ScrollNumber.js
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
var ScrollNumber = React3.forwardRef((_a, ref) => {
  var {
    prefixCls: customizePrefixCls,
    count,
    className,
    motionClassName,
    style,
    title,
    show,
    component: Component = "sup",
    children
  } = _a, restProps = __rest(_a, ["prefixCls", "count", "className", "motionClassName", "style", "title", "show", "component", "children"]);
  const {
    getPrefixCls
  } = React3.useContext(ConfigContext);
  const prefixCls = getPrefixCls("scroll-number", customizePrefixCls);
  const newProps = Object.assign(Object.assign({}, restProps), {
    "data-show": show,
    style,
    className: (0, import_classnames3.default)(prefixCls, className, motionClassName),
    title
  });
  let numberNodes = count;
  if (count && Number(count) % 1 === 0) {
    const numberList = String(count).split("");
    numberNodes = numberList.map((num, i) => React3.createElement(SingleNumber, {
      prefixCls,
      count: Number(count),
      value: num,
      // eslint-disable-next-line react/no-array-index-key
      key: numberList.length - i
    }));
  }
  if (style && style.borderColor) {
    newProps.style = Object.assign(Object.assign({}, style), {
      boxShadow: `0 0 0 1px ${style.borderColor} inset`
    });
  }
  if (children) {
    return cloneElement(children, (oriProps) => ({
      className: (0, import_classnames3.default)(`${prefixCls}-custom-component`, oriProps === null || oriProps === void 0 ? void 0 : oriProps.className, motionClassName)
    }));
  }
  return React3.createElement(Component, Object.assign({}, newProps, {
    ref
  }), numberNodes);
});
var ScrollNumber_default = ScrollNumber;

// node_modules/antd/es/badge/index.js
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
var InternalBadge = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    scrollNumberPrefixCls: customizeScrollNumberPrefixCls,
    children,
    status,
    text,
    color,
    count = null,
    overflowCount = 99,
    dot = false,
    size = "default",
    title,
    offset,
    style,
    className,
    rootClassName,
    showZero = false
  } = props, restProps = __rest2(props, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "rootClassName", "showZero"]);
  const {
    getPrefixCls,
    direction
  } = React4.useContext(ConfigContext);
  const prefixCls = getPrefixCls("badge", customizePrefixCls);
  const [wrapSSR, hashId] = style_default(prefixCls);
  const numberedDisplayCount = count > overflowCount ? `${overflowCount}+` : count;
  const isZero = numberedDisplayCount === "0" || numberedDisplayCount === 0;
  const ignoreCount = count === null || isZero && !showZero;
  const hasStatus = (status !== null && status !== void 0 || color !== null && color !== void 0) && ignoreCount;
  const showAsDot = dot && !isZero;
  const mergedCount = showAsDot ? "" : numberedDisplayCount;
  const isHidden = (0, import_react.useMemo)(() => {
    const isEmpty = mergedCount === null || mergedCount === void 0 || mergedCount === "";
    return (isEmpty || isZero && !showZero) && !showAsDot;
  }, [mergedCount, isZero, showZero, showAsDot]);
  const countRef = (0, import_react.useRef)(count);
  if (!isHidden) {
    countRef.current = count;
  }
  const livingCount = countRef.current;
  const displayCountRef = (0, import_react.useRef)(mergedCount);
  if (!isHidden) {
    displayCountRef.current = mergedCount;
  }
  const displayCount = displayCountRef.current;
  const isDotRef = (0, import_react.useRef)(showAsDot);
  if (!isHidden) {
    isDotRef.current = showAsDot;
  }
  const mergedStyle = (0, import_react.useMemo)(() => {
    if (!offset) {
      return Object.assign({}, style);
    }
    const offsetStyle = {
      marginTop: offset[1]
    };
    if (direction === "rtl") {
      offsetStyle.left = parseInt(offset[0], 10);
    } else {
      offsetStyle.right = -parseInt(offset[0], 10);
    }
    return Object.assign(Object.assign({}, offsetStyle), style);
  }, [direction, offset, style]);
  const titleNode = title !== null && title !== void 0 ? title : typeof livingCount === "string" || typeof livingCount === "number" ? livingCount : void 0;
  const statusTextNode = isHidden || !text ? null : React4.createElement("span", {
    className: `${prefixCls}-status-text`
  }, text);
  const displayNode = !livingCount || typeof livingCount !== "object" ? void 0 : cloneElement(livingCount, (oriProps) => ({
    style: Object.assign(Object.assign({}, mergedStyle), oriProps.style)
  }));
  const isInternalColor = isPresetColor(color, false);
  const statusCls = (0, import_classnames4.default)({
    [`${prefixCls}-status-dot`]: hasStatus,
    [`${prefixCls}-status-${status}`]: !!status,
    [`${prefixCls}-color-${color}`]: isInternalColor
  });
  const statusStyle = {};
  if (color && !isInternalColor) {
    statusStyle.color = color;
    statusStyle.background = color;
  }
  const badgeClassName = (0, import_classnames4.default)(prefixCls, {
    [`${prefixCls}-status`]: hasStatus,
    [`${prefixCls}-not-a-wrapper`]: !children,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId);
  if (!children && hasStatus) {
    const statusTextColor = mergedStyle.color;
    return wrapSSR(React4.createElement("span", Object.assign({}, restProps, {
      className: badgeClassName,
      style: mergedStyle
    }), React4.createElement("span", {
      className: statusCls,
      style: statusStyle
    }), text && React4.createElement("span", {
      style: {
        color: statusTextColor
      },
      className: `${prefixCls}-status-text`
    }, text)));
  }
  return wrapSSR(React4.createElement("span", Object.assign({
    ref
  }, restProps, {
    className: badgeClassName
  }), children, React4.createElement(es_default, {
    visible: !isHidden,
    motionName: `${prefixCls}-zoom`,
    motionAppear: false,
    motionDeadline: 1e3
  }, (_ref) => {
    let {
      className: motionClassName,
      ref: scrollNumberRef
    } = _ref;
    const scrollNumberPrefixCls = getPrefixCls("scroll-number", customizeScrollNumberPrefixCls);
    const isDot = isDotRef.current;
    const scrollNumberCls = (0, import_classnames4.default)({
      [`${prefixCls}-dot`]: isDot,
      [`${prefixCls}-count`]: !isDot,
      [`${prefixCls}-count-sm`]: size === "small",
      [`${prefixCls}-multiple-words`]: !isDot && displayCount && displayCount.toString().length > 1,
      [`${prefixCls}-status-${status}`]: !!status,
      [`${prefixCls}-color-${color}`]: isInternalColor
    });
    let scrollNumberStyle = Object.assign({}, mergedStyle);
    if (color && !isInternalColor) {
      scrollNumberStyle = scrollNumberStyle || {};
      scrollNumberStyle.background = color;
    }
    return React4.createElement(ScrollNumber_default, {
      prefixCls: scrollNumberPrefixCls,
      show: !isHidden,
      motionClassName,
      className: scrollNumberCls,
      count: displayCount,
      title: titleNode,
      style: scrollNumberStyle,
      key: "scrollNumber",
      ref: scrollNumberRef
    }, displayNode);
  }), statusTextNode));
};
var Badge = React4.forwardRef(InternalBadge);
Badge.Ribbon = Ribbon_default;
if (true) {
  Badge.displayName = "Badge";
}
var badge_default = Badge;

export {
  badge_default
};
//# sourceMappingURL=chunk-SW6NZCZX.js.map
