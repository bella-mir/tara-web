import {
  isPresetColor,
  isPresetStatusColor
} from "./chunk-VCMMPPWA.js";
import {
  wave_default
} from "./chunk-Q7LUV27Q.js";
import {
  ConfigContext,
  genComponentStyleHook,
  genPresetColor,
  merge,
  resetComponent,
  warning_default
} from "./chunk-72AWTN6Z.js";
import {
  CloseOutlined_default
} from "./chunk-HNXCBJII.js";
import {
  require_classnames
} from "./chunk-G2VIFKUL.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/antd/es/tag/index.js
var import_classnames2 = __toESM(require_classnames());
var React2 = __toESM(require_react());

// node_modules/antd/es/tag/CheckableTag.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());

// node_modules/antd/es/_util/capitalize.js
function capitalize(str) {
  if (typeof str !== "string") {
    return str;
  }
  const ret = str.charAt(0).toUpperCase() + str.slice(1);
  return ret;
}

// node_modules/antd/es/tag/style/index.js
var genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`]
    }
  };
};
var genPresetStyle = (token) => genPresetColor(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [`${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      "&-inverse": {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
});
var genBaseStyle = (token) => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls
  } = token;
  const paddingInline = tagPaddingHorizontal - lineWidth;
  const iconMarginInline = paddingXXS - lineWidth;
  return {
    // Result
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      display: "inline-block",
      height: "auto",
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: `${token.tagLineHeight}px`,
      whiteSpace: "nowrap",
      background: token.tagDefaultBg,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: "start",
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: token.tagDefaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        color: token.colorTextDescription,
        fontSize: token.tagIconSize,
        cursor: "pointer",
        transition: `all ${token.motionDurationMid}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      [`&-checkable`]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        "&:active, &-checked": {
          color: token.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: token.colorPrimary,
          "&:hover": {
            backgroundColor: token.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: token.colorPrimaryActive
        }
      },
      [`&-hidden`]: {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: "transparent",
      background: token.tagBorderlessBg
    }
  };
};
var style_default = genComponentStyleHook("Tag", (token) => {
  const {
    fontSize,
    lineHeight,
    lineWidth,
    fontSizeIcon
  } = token;
  const tagHeight = Math.round(fontSize * lineHeight);
  const tagFontSize = token.fontSizeSM;
  const tagLineHeight = tagHeight - lineWidth * 2;
  const tagDefaultBg = token.colorFillQuaternary;
  const tagDefaultColor = token.colorText;
  const tagToken = merge(token, {
    tagFontSize,
    tagLineHeight,
    tagDefaultBg,
    tagDefaultColor,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8,
    tagBorderlessBg: token.colorFillTertiary
  });
  return [genBaseStyle(tagToken), genPresetStyle(tagToken), genTagStatusStyle(tagToken, "success", "Success"), genTagStatusStyle(tagToken, "processing", "Info"), genTagStatusStyle(tagToken, "error", "Error"), genTagStatusStyle(tagToken, "warning", "Warning")];
});

// node_modules/antd/es/tag/CheckableTag.js
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
var CheckableTag = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    checked,
    onChange,
    onClick
  } = props, restProps = __rest(props, ["prefixCls", "className", "checked", "onChange", "onClick"]);
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const handleClick = (e) => {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const prefixCls = getPrefixCls("tag", customizePrefixCls);
  const [wrapSSR, hashId] = style_default(prefixCls);
  const cls = (0, import_classnames.default)(prefixCls, {
    [`${prefixCls}-checkable`]: true,
    [`${prefixCls}-checkable-checked`]: checked
  }, className, hashId);
  return wrapSSR(React.createElement("span", Object.assign({}, restProps, {
    className: cls,
    onClick: handleClick
  })));
};
var CheckableTag_default = CheckableTag;

// node_modules/antd/es/tag/index.js
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
var InternalTag = (tagProps, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    children,
    icon,
    color,
    onClose,
    closeIcon,
    closable = false,
    bordered = true
  } = tagProps, props = __rest2(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable", "bordered"]);
  const {
    getPrefixCls,
    direction
  } = React2.useContext(ConfigContext);
  const [visible, setVisible] = React2.useState(true);
  if (true) {
    true ? warning_default(!("visible" in props), "Tag", "`visible` is deprecated, please use `visible && <Tag />` instead.") : void 0;
  }
  React2.useEffect(() => {
    if ("visible" in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);
  const isInternalColor = isPresetColor(color) || isPresetStatusColor(color);
  const tagStyle = Object.assign({
    backgroundColor: color && !isInternalColor ? color : void 0
  }, style);
  const prefixCls = getPrefixCls("tag", customizePrefixCls);
  const [wrapSSR, hashId] = style_default(prefixCls);
  const tagClassName = (0, import_classnames2.default)(prefixCls, {
    [`${prefixCls}-${color}`]: isInternalColor,
    [`${prefixCls}-has-color`]: color && !isInternalColor,
    [`${prefixCls}-hidden`]: !visible,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-borderless`]: !bordered
  }, className, rootClassName, hashId);
  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    setVisible(false);
  };
  const closeIconNode = React2.useMemo(() => {
    if (closable) {
      return closeIcon ? React2.createElement("span", {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      }, closeIcon) : React2.createElement(CloseOutlined_default, {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      });
    }
    return null;
  }, [closable, closeIcon, prefixCls, handleCloseClick]);
  const isNeedWave = typeof props.onClick === "function" || children && children.type === "a";
  const iconNode = icon || null;
  const kids = iconNode ? React2.createElement(React2.Fragment, null, iconNode, React2.createElement("span", null, children)) : children;
  const tagNode = React2.createElement("span", Object.assign({}, props, {
    ref,
    className: tagClassName,
    style: tagStyle
  }), kids, closeIconNode);
  return wrapSSR(isNeedWave ? React2.createElement(wave_default, null, tagNode) : tagNode);
};
var Tag = React2.forwardRef(InternalTag);
if (true) {
  Tag.displayName = "Tag";
}
Tag.CheckableTag = CheckableTag_default;
var tag_default = Tag;

export {
  tag_default
};
//# sourceMappingURL=chunk-EFOE4RVH.js.map
