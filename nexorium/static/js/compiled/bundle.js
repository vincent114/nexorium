/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 133:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: RootStoreContext, rootStore

// EXTERNAL MODULE: ../../nexus/react/node_modules/react/index.js
var react = __webpack_require__(354);
// EXTERNAL MODULE: ../../nexus/react/node_modules/react-dom/index.js
var react_dom = __webpack_require__(20);
// EXTERNAL MODULE: ../../nexus/react/node_modules/mobx-state-tree/dist/mobx-state-tree.module.js
var mobx_state_tree_module = __webpack_require__(947);
// EXTERNAL MODULE: ../../nexus/react/node_modules/mobx-react-lite/es/index.js + 17 modules
var es = __webpack_require__(27);
// EXTERNAL MODULE: ../../nexus/react/node_modules/route-node/dist/route-node.esm.js + 3 modules
var route_node_esm = __webpack_require__(285);
// EXTERNAL MODULE: ../../nexus/react/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(97);
;// CONCATENATED MODULE: ../../nexus/react/models/Services.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** ServiceInfoStore *****
// ****************************

var TAG_ServiceInfoStore = function TAG_ServiceInfoStore() {};

var ServiceInfoStore = mobx_state_tree_module/* types.model */.V5.model({
  app_key: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  app_variant: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  app_id: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  name: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  description: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  kind: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  port: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.integer */.V5.integer),
  database: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  internal: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  external: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string)
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {
      self.app_key = raw.app_key;
      self.app_variant = raw.app_variant;
      self.app_id = raw.app_id;
      self.name = raw.name;
      self.description = raw.description;
      self.kind = raw.kind;
      self.port = raw.port;
      self.database = raw.database;
      self.internal = raw.internal;
      self.external = raw.external;
    }
  };
}); // ***** ServicesStore *****
// *************************

var TAG_ServicesStore = function TAG_ServicesStore() {};

var ServicesStore = mobx_state_tree_module/* types.model */.V5.model({
  smap: mobx_state_tree_module/* types.map */.V5.map(ServiceInfoStore)
}).views(function (self) {
  return {
    get me() {
      var me = self.smap.get('me');

      if (!me) {
        me = ServiceInfoStore.create({});
      }

      return me;
    }

  };
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {
      self.smap = {};

      for (var _i = 0, _Object$entries = Object.entries(raw); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            appId = _Object$entries$_i[0],
            serviceInfoRaw = _Object$entries$_i[1];

        var serviceInfo = ServiceInfoStore.create({});
        serviceInfo.update(serviceInfoRaw);
        self.smap.set(appId, serviceInfo);
      }
    }
  };
});
// EXTERNAL MODULE: ../../nexus/react/ui/theme/Theme.css
var Theme = __webpack_require__(824);
;// CONCATENATED MODULE: ../../nexus/react/ui/theme/Theme.jsx




 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** ColorStore *****
// **********************

var TAG_ColorStore = function TAG_ColorStore() {};

var ColorStore = mobx_state_tree_module/* types.model */.V5.model({
  main: '#FFFFFF',
  contrastText: '#000'
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    } // -

  };
}); // ***** PaletteStore *****
// ************************

var TAG_PaletteStore = function TAG_PaletteStore() {};

var PaletteStore = mobx_state_tree_module/* types.model */.V5.model({
  primary: mobx_state_tree_module/* types.optional */.V5.optional(ColorStore, {}),
  secondary: mobx_state_tree_module/* types.optional */.V5.optional(ColorStore, {})
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    } // -

  };
}); // ***** ThemeStore *****
// **********************

var TAG_ThemeStore = function TAG_ThemeStore() {};

var ThemeStore = mobx_state_tree_module/* types.model */.V5.model({
  variant: 'light',
  // light, dark
  palette: mobx_state_tree_module/* types.optional */.V5.optional(PaletteStore, {})
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {}
  };
});
;// CONCATENATED MODULE: ../../nexus/react/utils/Colors.jsx
// Functions
// -------------------------------------------------------------------------------------------------------------
var hexToRgbA = function hexToRgbA(hex, opacity) {
  opacity = opacity != undefined ? opacity : 1;
  var c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');

    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = '0x' + c.join('');
    return 'rgba(' + [c >> 16 & 255, c >> 8 & 255, c & 255].join(',') + ',' + opacity + ')';
  }

  throw new Error('Bad Hex');
};
// EXTERNAL MODULE: ../../nexus/react/ui/icon/Icon.css
var Icon = __webpack_require__(244);
;// CONCATENATED MODULE: ../../nexus/react/ui/icon/Icon.jsx


 // Datas
// -------------------------------------------------------------------------------------------------------------

var ICON_KEYS_TO_FILES = {
  'material': {
    'help': 'help_outline_black_24dp.svg',
    'menu': 'menu_black_24dp.svg',
    'arrow_back': 'arrow_back_black_24dp.svg',
    'home': 'home_black_24dp.svg',
    'setting': 'settings_black_24dp.svg',
    'code': 'code_black_24dp.svg',
    'power_setting': 'power_settings_new_black_24dp.svg',
    'apps': 'apps_black_24dp.svg',
    'save': 'save_black_24dp.svg',
    'delete': 'delete_black_24dp.svg',
    'restore_from_trash': 'restore_from_trash_black_24dp.svg',
    'refresh': 'refresh_black_24dp.svg',
    'add': 'add_black_24dp.svg',
    'search': 'search_black_24dp.svg',
    'clear': 'clear_black_24dp.svg',
    'account_circle': 'account_circle_black_24dp.svg',
    'open_in_full': 'open_in_full_black_24dp.svg',
    'close_fullscreen': 'close_fullscreen_black_24dp.svg',
    'push_pin': 'push_pin_black_24dp.svg',
    'bug_report': 'bug_report_black_24dp.svg',
    'badge': 'badge_black_24dp.svg',
    'lock_open': 'lock_open_black_24dp.svg',
    'person': 'person_black_24dp.svg',
    'history': 'history_black_24dp.svg',
    'text_snippet': 'text_snippet_black_24dp.svg',
    'forum': 'forum_black_24dp.svg',
    'work_outline': 'work_outline_black_24dp.svg',
    'school': 'school_black_24dp.svg',
    'science': 'science_black_24dp.svg'
  }
}; // const ICON_SIZES = {
// 	'small': {
// 		'width': '18px',
// 		'height': '18px',
// 	},
// 	'normal': {
// 		'width': '24px',
// 		'height': '24px',
// 	},
// 	'large': {
// 		'width': '36px',
// 		'height': '36px',
// 	},
// }

var ICON_SIZES = {
  'small': '18px',
  'normal': '24px',
  'large': '36px',
  'helper': '220px'
}; // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Icon *****
// ****************

var TAG_Icon = function TAG_Icon() {};

var Icon_Icon = function Icon(props) {
  // From ... props
  var kind = props.kind ? props.kind : 'material'; // material, fontawesome, ...

  var name = props.name ? props.name : 'help';
  var variant = props.variant ? props.variant : 'outlined'; // outlined, filled

  var color = props.color ? props.color : 'black';
  var size = props.size ? props.size : 'normal'; // small, normal, large

  var style = props.style ? props.style : {}; // ...

  var iconUrl = '';

  if (ICON_KEYS_TO_FILES[kind].hasOwnProperty(name)) {
    var iconFilename = ICON_KEYS_TO_FILES[kind][name];
    iconUrl = "/nexus_static/icons/".concat(kind, "/").concat(iconFilename);
  }

  if (!style.hasOwnProperty('width')) {
    style['width'] = ICON_SIZES[size];
    style['height'] = ICON_SIZES[size];
  }

  if (color == 'white') {
    iconUrl = iconUrl.replace('black', 'white');
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: "nx-icon",
    style: style
  }, iconUrl && /*#__PURE__*/react.createElement("img", {
    src: iconUrl
  }));
};
// EXTERNAL MODULE: ../../nexus/react/ui/button/Button.css
var Button = __webpack_require__(181);
;// CONCATENATED MODULE: ../../nexus/react/ui/button/Button.jsx


 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** IconButton *****
// **********************

var TAG_IconButton = function TAG_IconButton() {};

var IconButton = function IconButton(props) {
  // From ... props
  var children = props.children;
  var color = props.color ? props.color : 'black'; // white, black

  var disabled = props.disabled == true ? true : false;
  var onClick = props.onClick; // Evènement
  // ==================================================================================================

  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick(e);
    }
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-icon-button", color, {
      "disabled": disabled
    }),
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, children);
};
;// CONCATENATED MODULE: ../../nexus/react/utils/Datas.jsx
// Functions
// -------------------------------------------------------------------------------------------------------------
function uuid() {
  // Collision free V4 UUIDS
  // ---
  var tmp,
      buf = new Uint8Array(16);

  try {
    window.crypto.getRandomValues(buf);
  } catch (e) {
    // IE Stuff (testé avec IE11)
    var crypto = window.msCrypto;
    crypto.getRandomValues(buf);
  }

  buf[6] = buf[6] & 0x0f | 0x40;
  buf[8] = buf[8] & 0x3f | 0x80;
  var ret = '';

  for (var idx = 0; idx < 16; idx++) {
    tmp = buf[idx].toString(16);

    if (tmp.length == 1) {
      ret += '0' + tmp;
    } else {
      ret += tmp;
    }
  }

  return ret;
}
function copyObj(srcObj) {
  // Recopie d'objet passé en paramètres
  // ---
  var copy = JSON.parse(JSON.stringify(srcObj));
  return copy;
}
// EXTERNAL MODULE: ../../nexus/react/ui/popover/Popover.css
var Popover = __webpack_require__(443);
;// CONCATENATED MODULE: ../../nexus/react/ui/popover/Popover.jsx
function Popover_slicedToArray(arr, i) { return Popover_arrayWithHoles(arr) || Popover_iterableToArrayLimit(arr, i) || Popover_unsupportedIterableToArray(arr, i) || Popover_nonIterableRest(); }

function Popover_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Popover_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Popover_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Popover_arrayLikeToArray(o, minLen); }

function Popover_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Popover_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Popover_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Popover *****
// *******************

var TAG_Popover = function TAG_Popover() {};

var Popover_Popover = function Popover(props) {
  var popoverStyle = props.style ? props.style : {};
  popoverStyle['opacity'] = 0; // From ... states

  var _React$useState = react.useState(popoverStyle),
      _React$useState2 = Popover_slicedToArray(_React$useState, 2),
      style = _React$useState2[0],
      setStyle = _React$useState2[1]; // From ... props


  var id = props.id ? props.id : uuid();
  var open = props.open == true ? true : false;
  var anchorEl = props.anchorEl ? props.anchorEl : null;
  var anchorOrigin = props.anchorOrigin ? props.anchorOrigin : {};
  var transformOrigin = props.transformOrigin ? props.transformOrigin : {};
  var children = props.children;
  var onClose = props.onClose; // ...

  var anchorOriginVertical = anchorOrigin.vertical ? anchorOrigin.vertical : 'bottom'; // top, center, bottom

  var anchorOriginHorizontal = anchorOrigin.horizontal ? anchorOrigin.horizontal : 'center'; // left, center, right

  var transformOriginVertical = transformOrigin.vertical ? transformOrigin.vertical : 'top'; // top, center, bottom

  var transformOriginHorizontal = transformOrigin.horizontal ? transformOrigin.horizontal : 'center'; // left, center, right

  react.useEffect(function () {
    var node = document.getElementById(id);

    if (!node) {
      node = document.createElement("div");
      node.setAttribute('id', "portal-".concat(id));
      document.body.append(node);
    }
  }, []);
  react.useEffect(function () {
    if (open && anchorEl) {
      var popover = document.getElementById(id);

      if (!popover) {
        return;
      }

      var _popoverStyle = copyObj(style);

      _popoverStyle['opacity'] = 1;
      var popoverTop = 0;
      var popoverLeft = 0;
      var popoverWidth = popover.scrollWidth;
      var popoverHeight = popover.scrollHeight; // Anchor
      // ------------------------------------------------
      // Vertical
      // -

      if (anchorOriginVertical == 'top') {
        popoverTop = anchorEl.offsetTop;
      }

      if (anchorOriginVertical == 'center') {
        popoverTop = anchorEl.offsetTop + anchorEl.scrollHeight / 2;
      }

      if (anchorOriginVertical == 'bottom') {
        popoverTop = anchorEl.offsetTop + anchorEl.scrollHeight;
      } // Horizontal
      // -


      if (anchorOriginHorizontal == 'left') {
        popoverLeft = anchorEl.offsetLeft;
      }

      if (anchorOriginHorizontal == 'center') {
        popoverLeft = anchorEl.offsetLeft + anchorEl.scrollWidth / 2;
      }

      if (anchorOriginHorizontal == 'right') {
        popoverLeft = anchorEl.offsetLeft + anchorEl.scrollWidth;
      } // Origin
      // ------------------------------------------------
      // Vertical
      // -


      if (transformOriginVertical == 'top') {
        _popoverStyle['top'] = popoverTop;
      }

      if (transformOriginVertical == 'center') {
        _popoverStyle['top'] = popoverTop - popoverHeight / 2;
      }

      if (transformOriginVertical == 'bottom') {
        _popoverStyle['top'] = popoverTop - popoverHeight;
      } // Horizontal
      // -


      if (transformOriginHorizontal == 'left') {
        _popoverStyle['left'] = popoverLeft;
      }

      if (transformOriginHorizontal == 'center') {
        _popoverStyle['left'] = popoverLeft - popoverWidth / 2;
      }

      if (transformOriginHorizontal == 'right') {
        _popoverStyle['left'] = popoverLeft - popoverWidth;
      } // Overflow prevent
      // -


      _popoverStyle['top'] = Math.max(_popoverStyle['top'], 0);

      if (anchorEl.offsetTop + popoverHeight > window.innerHeight) {
        _popoverStyle['top'] = window.innerHeight - popoverHeight;
      }

      _popoverStyle['left'] = Math.max(_popoverStyle['left'], 0);

      if (anchorEl.offsetLeft + popoverWidth > window.innerWidth) {
        _popoverStyle['left'] = window.innerWidth - popoverWidth;
      } // -


      setStyle(_popoverStyle);
    }
  }, [open]); // Render
  // ==================================================================================================

  var popoverContent = null;

  if (open) {
    var content = /*#__PURE__*/react.createElement("div", {
      className: "nx-popover-overlay",
      onClick: function onClick() {
        return onClose();
      }
    }, /*#__PURE__*/react.createElement("div", {
      id: id,
      className: "nx-popover",
      style: style
    }, children));
    popoverContent = /*#__PURE__*/react_dom.createPortal(content, document.getElementById("portal-".concat(id)));
  }

  return popoverContent;
};
// EXTERNAL MODULE: ../../nexus/react/ui/avatar/Avatar.css
var Avatar = __webpack_require__(130);
;// CONCATENATED MODULE: ../../nexus/react/ui/avatar/Avatar.jsx


 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Avatar *****
// ******************

var TAG_Avatar = function TAG_Avatar() {};

var Avatar_Avatar = function Avatar(props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var children = props.children;
  var color = props.color ? props.color : 'primary'; // primary, secondary, transparent

  var size = props.size ? props.size : 'normal'; // normal, small, large

  var style = props.style ? props.style : {}; // ...

  if (style.hasOwnProperty('backgroundColor')) {
    style['backgroundColor'] = 'lightgray';

    if (color == 'transparent') {
      style['backgroundColor'] = 'transparent';
    }

    if (['primary', 'secondary'].indexOf(color) > -1) {
      style['backgroundColor'] = theme.palette[color].main;
    }
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-avatar", color),
    style: style
  }, children);
};
// EXTERNAL MODULE: ../../nexus/react/ui/list/List.css
var List = __webpack_require__(817);
;// CONCATENATED MODULE: ../../nexus/react/ui/list/List.jsx





 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** ListIcon *****
// ********************

var TAG_ListIcon = function TAG_ListIcon() {};

var ListIcon = function ListIcon(props) {
  // Render
  // ==================================================================================================
  return /*#__PURE__*/react.createElement("div", {
    className: "nx-list-icon"
  }, /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "transparent",
    size: "small"
  }, props.children));
}; // ***** ListText *****
// ********************

var TAG_ListText = function TAG_ListText() {};

var ListText = function ListText(props) {
  // Render
  // ==================================================================================================
  return /*#__PURE__*/react.createElement("div", {
    className: "nx-list-text"
  }, props.children);
}; // ***** ListItem *****
// ********************

var TAG_ListItem = function TAG_ListItem() {};

var ListItem = function ListItem(props) {
  // From ... props
  var disabled = props.disabled == true ? true : false;
  var onClick = props.onClick; // Evènements
  // ==================================================================================================

  var handleClick = function handleClick(evt) {
    if (onClick) {
      onClick(evt);
    }
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-list-item", {
      "disabled faded": disabled
    }),
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, props.children);
}; // ***** List *****
// ****************

var TAG_List = function TAG_List() {};

var List_List = function List(props) {
  // Render
  // ==================================================================================================
  return /*#__PURE__*/react.createElement("div", {
    className: "nx-list"
  }, props.children);
};
// EXTERNAL MODULE: ../../nexus/react/ui/divider/Divider.css
var Divider = __webpack_require__(236);
;// CONCATENATED MODULE: ../../nexus/react/ui/divider/Divider.jsx


 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Divider *****
// *******************

var TAG_Divider = function TAG_Divider() {};

var Divider_Divider = function Divider(props) {
  // From ... props
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-divider",
    style: style
  });
};
// EXTERNAL MODULE: ../../nexus/react/layout/header/Header.css
var Header = __webpack_require__(450);
;// CONCATENATED MODULE: ../../nexus/react/layout/header/Header.jsx
function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_unsupportedIterableToArray(arr, i) || Header_nonIterableRest(); }

function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Header_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Header_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Header_arrayLikeToArray(o, minLen); }

function Header_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Header_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** HeaderStore *****
// ***********************

var TAG_HeaderStore = function TAG_HeaderStore() {};

var HeaderStore = mobx_state_tree_module/* types.model */.V5.model({}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {}
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** HeaderTitle *****
// ***********************

var TAG_HeaderTitle = function TAG_HeaderTitle() {};

var HeaderTitle = function HeaderTitle(props) {
  // From ... props
  var title = props.title ? props.title : '';
  var titleStyle = props.titleStyle ? props.titleStyle : {};
  var subtitle = props.subtitle ? props.subtitle : '';
  var subtitleStyle = props.subtitleStyle ? props.subtitleStyle : {};
  var centered = props.centered == true ? props.centered : false; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-header-titles-wrapper", {
      "centered": centered
    })
  }, title && /*#__PURE__*/react.createElement("div", {
    className: "nx-header-title",
    style: titleStyle
  }, title), subtitle && /*#__PURE__*/react.createElement("div", {
    className: "nx-header-subtitle",
    style: subtitleStyle
  }, subtitle));
}; // ***** HeaderUserMenu *****
// **************************

var TAG_HeaderUserMenu = function TAG_HeaderUserMenu() {};

var HeaderUserMenu = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... states

  var _React$useState = react.useState(null),
      _React$useState2 = Header_slicedToArray(_React$useState, 2),
      anchorAccount = _React$useState2[0],
      setAnchorAccount = _React$useState2[1]; // From ... store


  var isLoading = app.isLoading();
  var isLogged = account.isLogged;
  var breakPoint650 = app.breakPoint650;
  var loginUrl = app.loginUrl;
  var loginContext = app.loginContext;
  var accountUrl = app.accountUrl;
  var accountContext = app.accountContext; // ...

  var accountName = account.name; // Evènements
  // ==================================================================================================

  var handleAccount = function handleAccount(event) {
    setAnchorAccount(event.currentTarget);
  };

  var handleCloseAccount = function handleCloseAccount() {
    setAnchorAccount(null);
  }; // -


  var handleLoginClick = function handleLoginClick() {
    console.log('handleLoginClick');
    app.navigate(loginUrl, loginContext);
    handleCloseAccount();
  };

  var handleMyAccountClick = function handleMyAccountClick() {
    app.navigate(accountUrl, accountContext);
    handleCloseAccount();
  };

  var handleLogoutClick = function handleLogoutClick() {
    app.gotoInternal('/logout');
    handleCloseAccount();
  }; // Render
  // ==================================================================================================


  var headerUserMenuContent = null;

  if (!breakPoint650) {
    headerUserMenuContent = /*#__PURE__*/react.createElement("div", {
      "data-flex": "0"
    }, /*#__PURE__*/react.createElement(IconButton, {
      onClick: function onClick(e) {
        return handleAccount(e);
      },
      disabled: isLoading
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "account_circle",
      color: "white"
    })), /*#__PURE__*/react.createElement(Popover_Popover, {
      id: "pop-account",
      open: Boolean(anchorAccount),
      anchorEl: anchorAccount,
      onClose: handleCloseAccount,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      style: {
        width: '200px'
      }
    }, accountName && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "nx-account-name"
    }, accountName), /*#__PURE__*/react.createElement(List_List, null, !isLogged && /*#__PURE__*/react.createElement(ListItem, {
      onClick: function onClick() {
        return handleLoginClick();
      },
      disabled: isLoading
    }, /*#__PURE__*/react.createElement(ListIcon, null, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "lock_open"
    })), /*#__PURE__*/react.createElement(ListText, null, "Se connecter")), isLogged && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ListItem, {
      onClick: function onClick() {
        return handleMyAccountClick();
      },
      disabled: isLoading
    }, /*#__PURE__*/react.createElement(ListIcon, null, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "badge"
    })), /*#__PURE__*/react.createElement(ListText, null, "Mon compte")), /*#__PURE__*/react.createElement(Divider_Divider, {
      style: {
        marginTop: '10px',
        marginBottom: '10px'
      }
    }), /*#__PURE__*/react.createElement(ListItem, {
      onClick: function onClick() {
        return handleLogoutClick();
      },
      disabled: isLoading
    }, /*#__PURE__*/react.createElement(ListIcon, null, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "power_setting"
    })), /*#__PURE__*/react.createElement(ListText, null, "Se d\xE9connecter")))))));
  }

  return headerUserMenuContent;
}); // ***** Header *****
// ******************

var TAG_Header = function TAG_Header() {};

var Header_Header = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme;
  var menu = app.menu;
  var portal = app.portal; // From ... props

  var left = props.left;
  var children = props.children;
  var right = props.right;
  var callbackMenu = props.callbackMenu;
  var callbackBack = props.callbackBack;
  var callbackHome = props.callbackHome;
  var callbackPortal = props.callbackPortal; // From ... store

  var isLoading = app.isLoading();
  var canGoBack = app.canGoBack();
  var canGoHome = app.canGoHome();
  var breakPoint650 = app.breakPoint650; // Evènements
  // ==================================================================================================

  var handleMenuClick = function handleMenuClick() {
    if (callbackMenu) {
      callbackMenu();
    } else {
      menu.toogle();
    }
  };

  var handleBackClick = function handleBackClick() {
    if (callbackBack) {
      callbackBack();
    } else {
      app.goBack();
    }
  };

  var handleHomeClick = function handleHomeClick() {
    if (callbackHome) {
      callbackHome();
    } else {
      app.goHome();
    }
  }; // -


  var handleBugReportClick = function handleBugReportClick() {};

  var handlePortalClick = function handlePortalClick() {
    if (callbackPortal) {
      callbackPortal();
    } else {
      portal.toogle();
    }
  }; // Render
  // ==================================================================================================
  // Header -> Left
  // -------------------------------------------------


  var headerLeft = /*#__PURE__*/react.createElement("div", {
    className: "nx-header-left"
  }, !breakPoint650 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleMenuClick();
    },
    disabled: isLoading
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "menu",
    color: "white"
  })), /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleBackClick();
    },
    disabled: isLoading || !canGoBack
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "arrow_back",
    color: "white"
  })), !breakPoint650 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleHomeClick();
    },
    disabled: isLoading || !canGoHome
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "home",
    color: "white"
  })), left && left); // Header -> Middle
  // -------------------------------------------------

  var headerMiddle = /*#__PURE__*/react.createElement("div", {
    className: "nx-header-middle"
  }, children); // Header -> Right
  // -------------------------------------------------

  var headerRight = /*#__PURE__*/react.createElement("div", {
    className: "nx-header-right"
  }, right && right, !breakPoint650 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleBugReportClick();
    },
    disabled: isLoading || true
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "bug_report",
    color: "white"
  })), /*#__PURE__*/react.createElement(HeaderUserMenu, null), !breakPoint650 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handlePortalClick();
    },
    disabled: isLoading
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "apps",
    color: "white"
  })), breakPoint650 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleMenuClick();
    },
    disabled: isLoading
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "menu",
    color: "white"
  }))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-header",
    style: {
      backgroundColor: hexToRgbA(theme.palette.primary.main, 0.8),
      color: theme.palette.primary.contrastText
    }
  }, headerLeft, headerMiddle, headerRight);
});
;// CONCATENATED MODULE: ../../nexus/react/utils/Helpers.jsx
// Functions
// =============================================================================================================
function isTrue(value) {
  if (["true", "yes", "1", "t", "on"].indexOf(value.toLowerCase()) > -1) {
    return true;
  }

  return false;
}
function initWeekFunctions() {
  // Improving javascript Date object
  // ---
  Date.prototype.getWeek = function () {
    // Create a copy of this date object
    var target = new Date(this.valueOf()); // ISO week date weeks start on monday
    // so correct the day number

    var dayNr = (this.getDay() + 6) % 7; // ISO 8601 states that week 1 is the week
    // with the first thursday of that year.
    // Set the target date to the thursday in the target week

    target.setDate(target.getDate() - dayNr + 3); // Store the millisecond value of the target date

    var firstThursday = target.valueOf(); // Set the target to the first thursday of the year
    // First set the target to january first

    target.setMonth(0, 1); // Not a thursday? Correct the date to the next thursday

    if (target.getDay() != 4) {
      target.setMonth(0, 1 + (4 - target.getDay() + 7) % 7);
    } // The weeknumber is the number of weeks between the
    // first thursday of the year and the thursday in the target week


    return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000
  };

  Date.prototype.getWeekStr = function () {
    var target = new Date(this.valueOf());
    var week_str = target.getWeek().toString();

    if (week_str.length == 1) {
      week_str = '0' + week_str;
    }

    return week_str;
  };

  Date.prototype.getWeekYear = function () {
    // Create a new date object for the thursday of this week
    var target = new Date(this.valueOf());
    target.setDate(target.getDate() - (this.getDay() + 6) % 7 + 3);
    return target.getFullYear();
  };
}
function initTrimFunction() {
  // Improving javascript String object
  // ---
  if (typeof String.prototype.trim === "undefined") {
    String.prototype.trim = function () {
      return String(this).replace(/^\s+|\s+$/g, '');
    };
  }
}
;// CONCATENATED MODULE: ../../nexus/react/utils/Storage.jsx
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Storage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Storage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Storage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Storage_arrayLikeToArray(o, minLen); }

function Storage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Functions
// =============================================================================================================

function getFromCookies(field) {
  // Retrieve a value from browser cookies
  // ---
  var cookie = document.cookie;
  var cookies = cookie.split(' ');

  var _iterator = _createForOfIteratorHelper(cookies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cookieRaw = _step.value;
      var cookieKey = cookieRaw.split('=')[0];
      var cookieValue = cookieRaw.split('=')[1];

      if (cookieKey == field) {
        return cookieValue;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return '';
}
function getFromStorage(field, defaultValue, valueType, storage) {
  // Get a value from localstorage / sessionstorage
  // ---
  storage = storage ? storage : localStorage;
  var value = storage.getItem(field);

  if (!value) {
    value = defaultValue;
  } else {
    if (valueType == 'json') {
      value = JSON.parse(value);
    }

    if (valueType == 'bool') {
      value = isTrue(value);
    }

    if (valueType == 'int') {
      value = parseInt(value);
    }

    if (valueType == 'date') {
      value = new Date(value);
    }
  }

  if (value == 'null') {
    value = null;
  }

  return value;
}
function setToStorage(field, value, valueType, storage) {
  // Set a value in localstorage / sessionstorage
  // ---
  storage = storage ? storage : localStorage;

  if (valueType == 'json') {
    value = JSON.stringify(value);
  }

  if (valueType == 'date') {
    value = value.toISOString();
  }

  storage.setItem(field, value);
}
function removeFromStorage(field, storage) {
  // Remove an entry from localstorage / sessionstorage
  // ---
  storage = storage ? storage : localStorage;

  try {
    localStorage.removeItem(field);
  } catch (err) {}
}
// EXTERNAL MODULE: ../../nexus/react/ui/drawer/Drawer.css
var Drawer = __webpack_require__(575);
;// CONCATENATED MODULE: ../../nexus/react/ui/drawer/Drawer.jsx




 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Drawer *****
// ******************

var TAG_Drawer = function TAG_Drawer() {};

var Drawer_Drawer = function Drawer(props) {
  // From ... props
  var children = props.children;
  var position = props.position ? props.position : 'left';
  var callbackClose = props.callbackClose; // ...
  // Evènements
  // ==================================================================================================

  var handleDrawerWrapperClick = function handleDrawerWrapperClick(e) {
    var target = e.target;

    if (e.target.classList.contains('nx-drawer-wrapper') && callbackClose) {
      callbackClose();
    }
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: "nx-drawer-wrapper",
    onClick: function onClick(e) {
      return handleDrawerWrapperClick(e);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-drawer", position)
  }, children));
};
// EXTERNAL MODULE: ../../nexus/react/layout/menu/Menu.css
var Menu = __webpack_require__(397);
;// CONCATENATED MODULE: ../../nexus/react/layout/menu/Menu.jsx











 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** MenuStore *****
// *********************

var TAG_MenuStore = function TAG_MenuStore() {};

var MenuStore = mobx_state_tree_module/* types.model */.V5.model({
  expanded: false,
  open: false,
  pinned: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    toogle: function toogle() {
      // Bascule le menu latéral
      // ---
      var app = (0,mobx_state_tree_module/* getParent */.G_)(self);
      var breakPoint650 = app.breakPoint650;
      var newState = false; // Agrandissement ou réduction en mode bureau

      if (!breakPoint650 && self.pinned) {
        newState = !self.expanded;
        setToStorage('menuExpanded', newState);
      } // Ouverture / fermeture en mode mobile


      if (breakPoint650 || !self.pinned) {
        newState = !self.open;
      }

      self.update(newState);
    },
    tooglePinned: function tooglePinned() {
      self.pinned = !self.pinned;
      setToStorage('menuPinned', self.pinned);
    },
    update: function update(openOrExpanded) {
      // Masque ou affiche le menu latéral
      // ---
      var app = (0,mobx_state_tree_module/* getParent */.G_)(self);
      var breakPoint650 = app.breakPoint650;

      if (!breakPoint650 && self.pinned) {
        self.expanded = openOrExpanded;
      }

      if (breakPoint650 || !self.pinned) {
        self.open = openOrExpanded;
      }
    },
    close: function close() {
      // Ferme le menu
      // ---
      var app = (0,mobx_state_tree_module/* getParent */.G_)(self);
      var breakPoint650 = app.breakPoint650;

      if (breakPoint650 || !self.pinned) {
        self.open = false;
      }
    }
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** MenuDivider *****
// ***********************

var TAG_MenuDivider = function TAG_MenuDivider() {};

var MenuDivider = (0,es/* observer */.Pi)(function (props) {
  // Render
  // ==================================================================================================
  return /*#__PURE__*/react.createElement(Divider_Divider, {
    style: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  });
}); // ***** MenuItem *****
// ********************

var TAG_MenuItem = function TAG_MenuItem() {};

var MenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var icon = props.icon;
  var label = props.label;
  var activeContexts = props.activeContexts ? props.activeContexts : [];
  var style = props.style ? props.style : {};
  var styleLabel = {};
  var callbackClick = props.callbackClick; // From ... store

  var context = app.context; // ...

  var active = activeContexts.indexOf(context) > -1 ? true : false;

  if (!style.hasOwnProperty('color')) {
    if (active) {
      // style['color'] = theme.palette.primary.main;
      style['backgroundColor'] = hexToRgbA(theme.palette.primary.main, 0.1); // styleLabel['color'] = theme.palette.primary.main;

      styleLabel['fontWeight'] = 'bold';
    }
  } // Evènements
  // ==================================================================================================


  var handleClick = function handleClick() {
    if (callbackClick) {
      callbackClick();
    }
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-menu-item", {
      'active': active
    }),
    style: style,
    onClick: function onClick() {
      return handleClick();
    }
  }, icon && /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "transparent",
    size: "small"
  }, icon), /*#__PURE__*/react.createElement("div", {
    className: "nx-menu-item-label",
    style: styleLabel
  }, label));
}); // ***** Menu *****
// ****************

var TAG_Menu = function TAG_Menu() {};

var Menu_Menu = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // From ... store

  var breakPoint650 = app.breakPoint650;
  var open = menu.open;
  var expanded = menu.expanded;
  var pinned = menu.pinned; // From ... props

  var children = props.children; // Evènements
  // ==================================================================================================

  var handleClose = function handleClose() {
    menu.close();
  };

  var handlePinClick = function handlePinClick() {
    menu.tooglePinned();
  }; // Render
  // ==================================================================================================


  var menuContent = /*#__PURE__*/react.createElement("div", {
    className: "nx-menu-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-menu-items-wrapper"
  }, children), !breakPoint650 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handlePinClick();
    }
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "push_pin"
  })));
  return /*#__PURE__*/react.createElement(react.Fragment, null, (breakPoint650 || !pinned) && open && /*#__PURE__*/react.createElement(Drawer_Drawer, {
    position: breakPoint650 ? 'right' : 'left',
    callbackClose: handleClose
  }, menuContent), !breakPoint650 && pinned && /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-menu", {
      "expanded": expanded
    }, {
      "retracted": !expanded
    })
  }, menuContent));
});
// EXTERNAL MODULE: ../../nexus/react/layout/portal/Portal.css
var Portal = __webpack_require__(230);
;// CONCATENATED MODULE: ../../nexus/react/layout/portal/Portal.jsx











 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** PortalStore *****
// ***********************

var TAG_PortalStore = function TAG_PortalStore() {};

var PortalStore = mobx_state_tree_module/* types.model */.V5.model({
  expanded: false,
  open: false,
  pinned: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    toogle: function toogle() {
      // Bascule le portail d'apps
      // ---
      var app = (0,mobx_state_tree_module/* getParent */.G_)(self);
      var breakPoint650 = app.breakPoint650;
      var newState = false; // Agrandissement ou réduction en mode bureau

      if (!breakPoint650 && self.pinned) {
        newState = !self.expanded;
        setToStorage('portalExpanded', newState);
      } // Ouverture / fermeture en mode mobile


      if (breakPoint650 || !self.pinned) {
        newState = !self.open;
      }

      self.update(newState);
    },
    tooglePinned: function tooglePinned() {
      self.pinned = !self.pinned;
      setToStorage('portalPinned', self.pinned);
    },
    update: function update(openOrExpanded) {
      // Masque ou affiche le portail d'apps
      // ---
      var app = (0,mobx_state_tree_module/* getParent */.G_)(self);
      var breakPoint650 = app.breakPoint650;

      if (!breakPoint650 && self.pinned) {
        self.expanded = openOrExpanded;
      }

      if (breakPoint650 || !self.pinned) {
        self.open = openOrExpanded;
      }
    },
    close: function close() {
      // Ferme le menu
      // ---
      var app = (0,mobx_state_tree_module/* getParent */.G_)(self);
      var breakPoint650 = app.breakPoint650;

      if (breakPoint650 || !self.pinned) {
        self.open = false;
      }
    }
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** PortalLinks *****
// ***********************

var TAG_PortalLink = function TAG_PortalLink() {};

var PortalLink = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var services = app.services;
  var portal = app.portal; // From ... props

  var appKey = props.appKey; // From ... store

  var context = app.context;
  var expanded = portal.expanded; // ...

  var serviceInfo = services.smap.get(appKey); // Evènements
  // ==================================================================================================

  var handleClick = function handleClick() {}; // Render
  // ==================================================================================================


  var portalLinkContent = null;

  if (serviceInfo) {
    var externalUrl = serviceInfo.external;
    var iconUrl = "".concat(externalUrl, "/static/favicons/android-icon-48x48.png");
    var name = serviceInfo.name;
    portalLinkContent = /*#__PURE__*/react.createElement("a", {
      className: "nx-portal-shortcut",
      href: externalUrl,
      title: !expanded ? name : ''
    }, /*#__PURE__*/react.createElement("img", {
      className: "nx-portal-shortcut-icon",
      src: iconUrl
    }), /*#__PURE__*/react.createElement("div", {
      className: "nx-portal-shortcut-label"
    }, name));
  }

  return portalLinkContent;
}); // ***** Portal *****
// ******************

var TAG_Portal = function TAG_Portal() {};

var Portal_Portal = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var portal = app.portal; // From ... store

  var breakPoint650 = app.breakPoint650;
  var open = portal.open;
  var expanded = portal.expanded;
  var pinned = portal.pinned; // From ... props

  var children = props.children; // Evènements
  // ==================================================================================================

  var handleClose = function handleClose() {
    portal.close();
  };

  var handlePinClick = function handlePinClick() {
    portal.tooglePinned();
  }; // Render
  // ==================================================================================================


  var portalContent = /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-area"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-shortcuts-wrapper"
  }, /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "nexorium"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "nexora"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "gramophone"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "vgm"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "cerberus"
  }))), !breakPoint650 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handlePinClick();
    }
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "push_pin"
  })));
  return /*#__PURE__*/react.createElement(react.Fragment, null, (breakPoint650 || !pinned) && open && /*#__PURE__*/react.createElement(Drawer_Drawer, {
    position: "right",
    callbackClose: handleClose
  }, portalContent), !breakPoint650 && pinned && /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-portal", {
      "expanded": expanded
    }, {
      "retracted": !expanded
    })
  }, portalContent));
});
;// CONCATENATED MODULE: ../../nexus/react/utils/Responsive.jsx
var MobileDetect = __webpack_require__(288); // Functions
// ========================================================================================================================


function detectMobile() {
  // Mobile or desktop ?
  // ---
  var width = window.innerWidth;
  var breakPoint650 = width <= 650 ? true : false;
  var breakPoint414 = width <= 414 ? true : false;
  var breakPoint375 = width <= 375 ? true : false;
  var breakPoint320 = width <= 320 ? true : false;
  var isMobile = false;
  var isDesktop = true;
  var md = new MobileDetect(window.navigator.userAgent);

  if (md.mobile() != null && md.mobile() != '') {
    isMobile = true;
    isDesktop = false;
  }

  return {
    isMobile: isMobile,
    isDesktop: isDesktop,
    breakPoint650: breakPoint650,
    breakPoint414: breakPoint414,
    breakPoint375: breakPoint375,
    breakPoint320: breakPoint320
  };
}
var isNodeVisible = function isNodeVisible(nodeId) {
  // Is DOM node visible on screen?
  // ---
  var node = $("#".concat(nodeId));

  if (node) {
    try {
      var nodeTop = node.offset().top;
      var nodeBottom = node.offset().top + node.outerHeight();
      var screenTop = $(window).scrollTop();
      var screenBottom = $(window).scrollTop() + window.innerHeight;

      if (screenBottom > nodeTop && screenTop < nodeBottom) {
        return true;
      }
    } catch (err) {}
  }

  return false;
};
;// CONCATENATED MODULE: ../../nexus/react/utils/URL.jsx
// Functions
// =============================================================================================================
function getUrlParams() {
  // Getting URL parameters
  // ---
  var vars = {},
      hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    var value = '';

    for (var hash_part_idx in hash) {
      if (hash_part_idx == 0) {
        continue;
      }

      var hash_part = hash[hash_part_idx];
      hash_part = hash_part == "" ? "=" : hash_part;
      value = value + hash_part;
    }

    vars[hash[0]] = value;
  }

  ;
  return vars;
}
function matchUrl(routes, url) {
  // Routes <-> URL matching
  // ---
  // -> https://www.npmjs.com/package/route-node
  var matched = {
    context: '404',
    params: {}
  };
  var matchResult = routes.matchPath(url);

  if (matchResult) {
    // Context
    var context = matchResult.name.split(':')[0];
    context = context.split('.')[0];
    context = context.split('-')[0];
    context = context.split('#')[0];
    context = context.split('$')[0];
    matched['context'] = context; // Parameters

    if (matchResult.params) {
      matched['params'] = matchResult.params;
    }
  } else {
    // Some URL don't match properly with route-node
    var urlParts = url.split('/'); // Hack :: login

    if (url.search('connexion') > -1) {
      matched['context'] = 'login';
      matched['params'] = {
        urlKey: urlParts[2]
      };
    } // Hack :: forbidden


    if (url.search('forbidden') > -1) {
      matched['context'] = 'forbidden';
      matched['params'] = {
        urlKey: urlParts[2]
      };
    }
  }

  return matched;
}
;// CONCATENATED MODULE: ../../nexus/react/ui/Styles.jsx
// Datas
// -------------------------------------------------------------------------------------------------------------
var SEVERITY_COLORS = {
  "default": '#bdbdbd',
  success: '#81c784',
  warning: '#ffb74d',
  error: '#e57373',
  info: '#64b5f6',
  hot: '#e91e63'
};
var SEVERITY_COLORS_CONTRASTED = {
  "default": '#424242',
  success: '#43a047',
  warning: '#ffa000',
  error: '#d32f2f',
  info: '#1976d2',
  hot: '#e91e63'
};
var SEVERITY_BACKGROUNDS = {
  "default": 'rgba(189, 189, 189, 0.20)',
  success: 'rgba(129, 199, 132, 0.1)',
  warning: 'rgba(255, 183, 77, 0.1)',
  error: 'rgba(229, 115, 115, 0.1)',
  info: 'rgba(100, 181, 246, 0.20)',
  hot: 'rgba(233, 30, 99, 0.1)'
};
// EXTERNAL MODULE: ../../nexus/react/ui/helper/Helper.css
var Helper = __webpack_require__(742);
;// CONCATENATED MODULE: ../../nexus/react/ui/helper/Helper.jsx





 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** Helper *****
// ******************

var TAG_Helper = function TAG_Helper() {};

var Helper_Helper = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var initialized = app.initialized; // From ... props

  var icon = props.icon ? props.icon : null;
  var iconName = props.iconName ? props.iconName : '';
  var title = props.title ? props.title : '';
  var subtitle = props.subtitle ? props.subtitle : '';
  var severity = props.severity;
  var show = props.show != undefined ? props.show : !initialized;
  var content = props.children;
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  var titleColor = 'black';

  if (severity && severity != 'default' && SEVERITY_COLORS_CONTRASTED.hasOwnProperty(severity)) {
    titleColor = SEVERITY_COLORS_CONTRASTED[severity];
  }

  var subtitleColor = 'gray';

  if (severity && severity != 'default' && SEVERITY_COLORS.hasOwnProperty(severity)) {
    subtitleColor = SEVERITY_COLORS[severity];
  } // -


  if (!icon && iconName) {
    icon = /*#__PURE__*/react.createElement(Icon_Icon, {
      size: "helper",
      name: iconName,
      style: {
        opacity: 0.1
      }
    });
  }

  var helper = null;

  if (show) {
    helper = /*#__PURE__*/react.createElement("div", {
      className: "nx-helper"
    }, /*#__PURE__*/react.createElement("div", {
      className: "nx-helper-content",
      style: style
    }, icon, title && /*#__PURE__*/react.createElement("div", {
      className: "nx-helper-title",
      style: {
        color: titleColor
      }
    }, title), subtitle && /*#__PURE__*/react.createElement("div", {
      className: "nx-helper-subtitle",
      style: {
        color: subtitleColor
      }
    }, subtitle)));
  }

  return helper;
});
// EXTERNAL MODULE: ../../nexus/react/contexts/about/About.css
var About = __webpack_require__(189);
;// CONCATENATED MODULE: ../../nexus/react/contexts/about/About.jsx








 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** AboutHeaderLeft *****
// ***************************

var TAG_AboutHeaderLeft = function TAG_AboutHeaderLeft() {};

var AboutHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "A propos",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** AboutMenuItem *****
// *************************

var TAG_AboutMenuItem = function TAG_AboutMenuItem() {};

var AboutMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigate(app.aboutUrl, app.aboutContext);
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "code"
    }),
    label: "A propos",
    activeContexts: [app.aboutContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** AboutPage *****
// *********************

var TAG_AboutPage = function TAG_AboutPage() {};

var AboutPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "code",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/login/Login.css
var Login = __webpack_require__(364);
;// CONCATENATED MODULE: ../../nexus/react/contexts/login/Login.jsx







 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** LoginStore *****
// **********************

var TAG_LoginStore = function TAG_LoginStore() {};

var LoginStore = mobx_state_tree_module/* types.model */.V5.model({
  login: ''
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {}
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** LoginMenuItem *****
// *************************

var TAG_LoginMenuItem = function TAG_LoginMenuItem() {};

var LoginMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... store

  var isLogged = account.isLogged;
  var breakPoint650 = app.breakPoint650; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigate('/login', 'login');
  }; // Render
  // ==================================================================================================


  var loginMenuItem = null;

  if (!isLogged && breakPoint650) {
    loginMenuItem = /*#__PURE__*/react.createElement(MenuItem, {
      icon: /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "account_circle"
      }),
      label: "Se connecter",
      activeContexts: ['login'],
      callbackClick: handleMenuItemClick
    });
  }

  return loginMenuItem;
}); // ***** LogoutMenuItem *****
// **************************

var TAG_LogoutMenuItem = function TAG_LogoutMenuItem() {};

var LogoutMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... store

  var isLogged = account.isLogged;
  var breakPoint650 = app.breakPoint650; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.gotoInternal('/logout');
  }; // Render
  // ==================================================================================================


  var logoutMenuItem = null;

  if (isLogged && breakPoint650) {
    logoutMenuItem = /*#__PURE__*/react.createElement(MenuItem, {
      icon: /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "power_setting"
      }),
      label: "Se d\xE9connecter",
      callbackClick: handleMenuItemClick
    });
  }

  return logoutMenuItem;
}); // ***** LoginPage *****
// *********************

var TAG_LoginPage = function TAG_LoginPage() {};

var LoginPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "account_circle",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/account/Account.css
var Account = __webpack_require__(390);
;// CONCATENATED MODULE: ../../nexus/react/contexts/account/Account.jsx
function Account_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Account_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Account_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Account_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Account_arrayLikeToArray(o, minLen); }

function Account_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** AccountStore *****
// ************************

var TAG_AccountStore = function TAG_AccountStore() {};

var AccountStore = mobx_state_tree_module/* types.model */.V5.model({
  _id: '',
  _rev: '',
  _state: 0,
  firstname: '',
  lastname: '',
  login: '',
  role_finder: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.string */.V5.string), []),
  is_viewer: false,
  is_editor: false,
  is_admin: false
}).views(function (self) {
  return {
    get name() {
      var name = '';

      if (self._id) {
        if (self.firstname) {
          name = self.firstname;
        }

        if (self.firstname) {
          if (name) {
            name = "".concat(name, " ").concat(self.firstname);
          } else {
            name = self.firstname;
          }
        }

        if (!name && self.login) {
          name = self.login;
        }
      } else {
        name = 'Visiteur';
      }

      return name;
    },

    // Bools
    // -
    get isLogged() {
      if (self._id) {
        return true;
      }

      return false;
    },

    isAdmin: function isAdmin(appId) {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      appId = appId ? appId : app.appId;
      return false;
    }
  };
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {
      self._id = raw._id;
      self._rev = raw._rev;
      self._state = raw._state;
      self.firstname = raw.firstname;
      self.lastname = raw.lastname;
      self.login = raw.login;
      self.role_finder = [];

      var _iterator = Account_createForOfIteratorHelper(raw.role_finder),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var roleKey = _step.value;
          self.role_finder.push(roleKey);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      self.is_viewer = raw.is_viewer;
      self.is_editor = raw.is_editor;
      self.is_admin = raw.is_admin;
    }
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** AccountHeaderLeft *****
// *****************************

var TAG_AccountHeaderLeft = function TAG_AccountHeaderLeft() {};

var AccountHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Mon compte",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** AccountMenuItem *****
// ***************************

var TAG_AccountMenuItem = function TAG_AccountMenuItem() {};

var AccountMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... store

  var isLogged = account.isLogged; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigate(app.accountUrl, 'account');
  }; // Render
  // ==================================================================================================


  var accountMenuItem = null;

  if (isLogged) {
    accountMenuItem = /*#__PURE__*/react.createElement(MenuItem, {
      icon: /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "account_circle"
      }),
      label: "Mon compte",
      activeContexts: ['account'],
      callbackClick: handleMenuItemClick
    });
  }

  return accountMenuItem;
}); // ***** AccountPage *****
// ***********************

var TAG_AccountPage = function TAG_AccountPage() {};

var AccountPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "account_circle",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/forbidden/Forbidden.css
var Forbidden = __webpack_require__(429);
;// CONCATENATED MODULE: ../../nexus/react/contexts/forbidden/Forbidden.jsx





 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** ForbiddenPage *****
// *************************

var TAG_ForbiddenPage = function TAG_ForbiddenPage() {};

var ForbiddenPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      icon: /*#__PURE__*/react.createElement("img", {
        className: "nx-helper-icon",
        src: "/nexus_static/img/emojis/jelly_sweat.png"
      }),
      title: "!",
      subtitle: "Il semblerait que vous ne disposez pas des droits d'acc\xE8s \xE0 cette page.",
      severity: "warning",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/notfound/NotFound.css
var NotFound = __webpack_require__(282);
;// CONCATENATED MODULE: ../../nexus/react/contexts/notfound/NotFound.jsx


 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** NotFoundPage *****
// ************************

var TAG_NotFoundPage = function TAG_NotFoundPage() {};

var NotFoundPage = function NotFoundPage(props) {
  // Render
  // ==================================================================================================
  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, /*#__PURE__*/react.createElement(Helper_Helper, {
    icon: /*#__PURE__*/react.createElement("img", {
      className: "nx-helper-icon",
      src: "/nexus_static/img/emojis/jelly_crying.png"
    }),
    title: "Erreur 404",
    subtitle: "Il semblerait que la page demand\xE9e n'existe pas.",
    variant: "warning",
    show: true
  }));
};
// EXTERNAL MODULE: ../../nexus/react/NxApp.css
var NxApp = __webpack_require__(52);
;// CONCATENATED MODULE: ../../nexus/react/NxApp.jsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function NxApp_slicedToArray(arr, i) { return NxApp_arrayWithHoles(arr) || NxApp_iterableToArrayLimit(arr, i) || NxApp_unsupportedIterableToArray(arr, i) || NxApp_nonIterableRest(); }

function NxApp_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NxApp_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function NxApp_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function NxApp_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = NxApp_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function NxApp_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NxApp_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NxApp_arrayLikeToArray(o, minLen); }

function NxApp_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }























 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** NxAppStore *****
// **********************

var TAG_NxAppStore = function TAG_NxAppStore() {};

var NxAppStore = mobx_state_tree_module/* types.model */.V5.model({
  context: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.string */.V5.string, 'home'),
  initialized: false,
  tasks: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.string */.V5.string), []),
  debugMode: false,
  editMode: false,
  standaloneMode: false,
  services: mobx_state_tree_module/* types.optional */.V5.optional(ServicesStore, {}),
  // URLs
  loginUrl: '/login',
  loginContext: 'login',
  homeUrl: '/',
  homeContext: 'home',
  searchUrl: '/search',
  searchContext: 'search',
  aboutUrl: '/about',
  aboutContext: 'about',
  adminUrl: '/admin',
  adminContext: 'admin',
  accountUrl: '/account',
  accountContent: 'account',
  routes: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  urlParams: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  matchResult: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  history: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  // Responsive
  isMobile: false,
  isDesktop: true,
  breakPoint650: false,
  // Small Window or Dashboard Oméga
  breakPoint414: false,
  // iPhone 6, 7, 8 Plus
  breakPoint375: false,
  // iPhone 6, 7, 8
  breakPoint320: false,
  // iPhone 5, SE
  // Authentification
  login: mobx_state_tree_module/* types.optional */.V5.optional(LoginStore, {}),
  account: mobx_state_tree_module/* types.optional */.V5.optional(AccountStore, {}),
  // Forms
  errors: mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.frozen */.V5.frozen(null)),
  autocompleteResults: mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.frozen */.V5.frozen(null)),
  // UI
  theme: mobx_state_tree_module/* types.optional */.V5.optional(ThemeStore, {}),
  header: mobx_state_tree_module/* types.optional */.V5.optional(HeaderStore, {}),
  menu: mobx_state_tree_module/* types.optional */.V5.optional(MenuStore, {}),
  portal: mobx_state_tree_module/* types.optional */.V5.optional(PortalStore, {}) // snackbar: types.optional(SnackbarStore, {}),
  // popup: types.optional(PopupStore, {}),

}).views(function (self) {
  return {
    get me() {
      return self.services.me;
    },

    get appId() {
      return self.me.app_id;
    },

    // Bools
    // -
    get isFullScreen() {
      // Should Header & Drawer be hidden ?
      // ---
      var standaloneMode = self.standaloneMode;
      var context = self.context; // if (standaloneMode || ['login', 'forbidden'].indexOf(context) > -1) {
      // 	return true;
      // }

      if (standaloneMode) {
        return true;
      }

      return false;
    },

    isLoading: function isLoading() {
      // Are there background tasks still running ?
      // ---
      if (self.tasks.length > 0) {
        return true;
      }

      return false;
    },
    // isCurrent(targetContexts) {
    // 	// Le contexte courant de l'application correspond-t-il à ceux passés en paramètres ?
    // 	// ---
    // 	const context = self.context;
    // 	if (typeof(targetContexts) == "string") {
    // 		targetContexts = [targetContexts];
    // 	}
    // 	if (targetContexts.indexOf(context) > -1) {
    // 		return true;
    // 	}
    // 	return false;
    // },
    canGoBack: function canGoBack() {
      // Peut-on revenir en arrière dans l'historique ?
      // ---
      var navHistory = self.getHistory();

      if (navHistory.length > 0) {
        return true;
      }

      return false;
    },
    canGoHome: function canGoHome() {
      // Peut-on revenir sur la page d'accueil
      // ---
      if (self.context != 'home') {
        return true;
      }

      return false;
    },
    // Getters
    // -
    getScrollKey: function getScrollKey() {
      // Uniq key to identify scroll context
      // ---
      var url = document.location.pathname;
      return url;
    }
  };
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    updateMobile: function updateMobile() {
      // Mobile or desktop ?
      // ---
      var mobileInfos = detectMobile();
      self.isMobile = mobileInfos.isMobile;
      self.isDesktop = mobileInfos.isDesktop;
      self.breakPoint650 = mobileInfos.breakPoint650;
      self.breakPoint414 = mobileInfos.breakPoint414;
      self.breakPoint375 = mobileInfos.breakPoint375;
      self.breakPoint320 = mobileInfos.breakPoint320;
    },
    updatePopups: function updatePopups(popups) {// Popups registering
      // ---
      // const popup = self.popup;
      // popup.register(popupTaskKey);
      // if (popups) {
      // 	for (let popupKey of Object.keys(popups)) {
      // 		popup.register(popupKey);
      // 	}
      // }
    },
    update: function update(raw, callback) {
      self.history = []; // User logged

      self.account.update(raw.user); // Edit mode ?

      var editMode = getFromStorage('editMode', false, 'bool');

      if (self.urlParams.hasOwnProperty('edit')) {
        editMode = self.urlParams.edit == 'true' ? true : false;
      }

      if (!self.account.is_editor) {
        editMode = false;
      } // Debug mode ?


      var debugMode = getFromStorage('debugMode', false, 'bool');

      if (!self.account.is_admin) {
        debugMode = false;
      }

      self.initialized = true;
      self.editMode = editMode;
      self.debugMode = debugMode;
      self.services.update(raw.smap);

      if (callback) {
        callback(raw);
      }
    },
    init: function init(callback, popups, extras) {
      // Initialisation de l'application avec la récupération de données communes
      // ---
      extras = extras ? extras : {};
      window.urlParams = {};
      window.verboseRender = false;
      window.verboseScroll = false;
      initWeekFunctions();
      initTrimFunction();
      self.updatePopups(popups);

      if (callback) {
        // Fix history
        window.addEventListener("popstate", function (event) {
          document.location.reload();
        });
        var params = new FormData();
        params.append('extras', JSON.stringify(extras));
        var url = '/app/init';
        self.fetchDatas(url, {
          'body': params
        }, false, 'POST').then(function (json) {
          self.update(json, callback);
        })["catch"](function (ex) {
          console.error("Fetch failed for ".concat(url), ex); // self.snackbar.update(true, "Une erreur est survenue.", "error");
        });
      } // Responsiveness -> watching the window's size


      window.onresize = function () {
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(function () {
          self.updateMobile();
        }, 100);
      };
    },
    // Navigation Functions
    // --------------------------------------------------------------------------------------------------
    gotoInternal: function gotoInternal(url) {
      document.location = url;
    },
    gotoExternal: function gotoExternal(url) {
      if (!url) {
        return;
      }

      window.open(url, '_blank');
    },
    getHistory: function getHistory() {
      // Récupère l'historique de navigation dans le localstorage
      // ---
      // let navHistory = [];
      // try {
      // 	navHistory = getFromStorage('navHistory', [], 'json');
      // } catch(err) {
      // 	self.clearHistory();
      // 	console.error(err);
      // }
      var navHistory = self.history ? copyObj(self.history) : [];
      return navHistory;
    },
    clearHistory: function clearHistory() {
      // Vide l'historique de navigation
      // ---
      // setToStorage('navHistory', [], 'json');
      self.history = [];
    },
    addHistory: function addHistory(newHistory) {
      // Ajoute un historique de navigation si il diffère du précedent
      // ---
      var navHistory = self.getHistory();
      var historyToAdd = true; // Comparaison par rapport à la dernière navigation

      if (navHistory.length > 0) {
        var lastHistoryStr = JSON.stringify(navHistory[navHistory.length - 1]);
        var newHistoryStr = JSON.stringify(newHistory);

        if (lastHistoryStr == newHistoryStr) {
          historyToAdd = false;
        }
      }

      if (historyToAdd) {
        navHistory.push(newHistory); // setToStorage('navHistory', navHistory, 'json');

        self.history = navHistory;
      }
    },
    removeHistory: function removeHistory() {
      // Supprime la dernière entrée de l'historique de navigation
      // ---
      var navHistory = self.getHistory();
      navHistory.splice(navHistory.length - 1, navHistory.length); // setToStorage('navHistory', navHistory, 'json');

      self.history = navHistory;
    },
    removeFromHistory: function removeFromHistory(url) {
      // Nettoie l'url passé en paramètre de l'historique de navigation
      // ---
      var navHistory = self.getHistory();
      var navHistoryCleared = [];

      var _iterator = NxApp_createForOfIteratorHelper(navHistory),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _history = _step.value;

          if (_history.destination != url) {
            navHistoryCleared.push(_history);
          }
        } // setToStorage('navHistory', navHistoryCleared, 'json');

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      self.history = navHistoryCleared;
    },
    setBrowserURL: function setBrowserURL(url, hash) {
      // Mise à jour de l'URL du navigateur internet (mais sans y accéder)
      // ---
      if (hash) {
        url = "".concat(url.split('#')[0]).concat(hash);
      }

      history.pushState(null, '', url);
      sessionStorage.setItem('came_from', url);
    },
    navigate: function navigate(destination, newContext, jsonPatches, callback, ignoreHistory, clearHistory, replaceLastHistory, ignoreContext) {
      // Navigue vers l'endroit demandé (depuis les liens de l'accueil, ou bien du menu)
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var isMobile = self.isMobile;
      newContext = newContext ? newContext : 'home';
      ignoreHistory = newContext == 'home' ? true : ignoreHistory;
      clearHistory = newContext == 'home' ? true : clearHistory;
      ignoreContext = ignoreContext != undefined ? ignoreContext : false;
      var currentContext = self.context; // Nettoyage de l'historique de navigation

      if (clearHistory) {
        self.clearHistory();
      } // Ajout d'un historique de navigation


      if (!ignoreHistory) {
        if (replaceLastHistory) {
          self.removeHistory();
        }

        self.addHistory({
          destination: destination,
          newContext: newContext,
          jsonPatches: jsonPatches,
          callback: callback
        });
      } // Gestion des nouveaux states


      if (jsonPatches != undefined) {
        (0,mobx_state_tree_module/* applyPatch */.af)(store, jsonPatches);
      } // MAJ de l'URL du navigateur


      self.setBrowserURL(destination); // Changement de contexte (all the magic of one paged apps appens here!)

      if (ignoreContext == false && newContext != currentContext) {
        setToStorage('previousContext', self.context);
        self.context = newContext; // Restoration du défilement

        clearTimeout(window.scrollTimeoutRestore);
        setTimeout(function () {
          self.restoreScroll();
        }, 50); // Gestion du callback

        if (callback) {
          callback(self, newContext);
        }
      } else {
        // Gestion du callback
        if (callback) {
          callback(self, newContext);
        }
      }
    },
    goBack: function goBack() {
      // Retourne vers la dernière navigation historisée
      // ---
      var homeUrl = self.homeUrl;
      var navHistory = self.getHistory();
      var target = null; // Où doit-on retourner ?

      if (navHistory.length < 2) {
        target = {
          destination: homeUrl,
          newContext: 'home',
          jsonPatches: undefined,
          callback: undefined
        };
      } else {
        var targetDict = navHistory[navHistory.length - 2];
        targetDict['jsonPatches'] = targetDict['jsonPatches'] ? targetDict['jsonPatches'] : [];
        target = {
          destination: targetDict.destination,
          newContext: targetDict.newContext,
          jsonPatches: targetDict.jsonPatches,
          callback: targetDict.callback
        }; // Nettoyage de l'historique

        self.removeHistory();
      }

      self.navigate(target.destination, target.newContext, target.jsonPatches, target.callback, true, false);
    },
    goHome: function goHome() {
      // Retourne à l'accueil
      // ---
      self.navigate(self.homeUrl, 'home');
    },
    // UI actions
    // --------------------------------------------------------------------------------------------------
    // Scroll Stuff
    // -
    handleScroll: function handleScroll(evt) {
      // Sur défilement utilisateur
      // ---
      var scroll = evt.currentTarget.scrollTop;
      var scrollHeight = evt.currentTarget.scrollHeight;
      var clientHeight = evt.currentTarget.clientHeight;
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(function () {
        self.saveScroll(scroll);

        if (window.infiniteScrollCallback) {
          if (scrollHeight - scroll == clientHeight) {
            window.infiniteScrollCallback();
          }
        }

        if (window.scrollCallback) {
          window.scrollCallback();
        }
      }, 500);
    },
    removeScrollEvent: function removeScrollEvent() {
      document.getElementById("main").removeEventListener("scroll", self.handleScroll);
    },
    attachScrollEvent: function attachScrollEvent() {
      document.getElementById("main").addEventListener("scroll", self.handleScroll);
    },
    saveScroll: function saveScroll(scroll) {
      // Save scroll value
      // ---
      var context = self.context;
      var scrollKey = self.getScrollKey();

      if (window.verboseScroll) {
        console.log("Saving scroll ".concat(scrollKey, " : ").concat(scroll));
      }

      setToStorage(scrollKey, scroll);
    },
    restoreScroll: function restoreScroll() {
      // Restore scroll value
      // ---
      var scrollKey = self.getScrollKey();
      var scroll = getFromStorage(scrollKey, 0, 'int');

      if (window.infiniteScrollCallback) {
        scroll = 0;
      }

      if (window.verboseScroll) {
        console.log("Restore scroll ".concat(scrollKey, " : ").concat(scroll));
      }

      var main = document.getElementById("main");

      if (main) {
        self.removeScrollEvent();
        main.scrollTop = scroll;
        self.attachScrollEvent();
      }
    },
    scrollToTop: function scrollToTop() {
      // Smooth scroll to the top of the page
      // ---
      var main = document.getElementById("main");

      if (main) {
        main.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth"
        });
      }
    },
    scrollToBottom: function scrollToBottom() {
      // Smooth scroll to the bottom of the page
      // ---
      var main = document.getElementById("main");

      if (main) {
        main.scrollTo({
          left: 0,
          top: main.scrollHeight,
          behavior: "smooth"
        });
      }
    },
    // Datas Functions
    // --------------------------------------------------------------------------------------------------
    addTask: function addTask(taskId) {
      // Ajout de la tâche si pas déjà présente
      // ---
      if (self.tasks.indexOf(taskId) == -1) {
        self.tasks.push(taskId);
      }
    },
    removeTask: function removeTask(taskId) {
      // Suppression de la tâche si est présente
      // ---
      if (self.tasks.indexOf(taskId) > -1) {
        self.tasks.splice(self.tasks.indexOf(taskId), 1);
      }
    },
    fetchDatas: function fetchDatas(input, init, quiet, method, params, jsonOnly) {
      // AJAX / fetch call
      // ---
      quiet = quiet == true ? true : false;
      method = method ? method : 'GET';
      jsonOnly = jsonOnly == false ? false : true; // NxApp lock UI

      var taskId = uuid();

      if (!quiet) {
        self.addTask(taskId);
      } // Init request body


      init = init ? init : {};
      init['credentials'] = 'include';
      init['method'] = method; // Params

      if (params) {
        for (var _i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = NxApp_slicedToArray(_Object$entries[_i], 2),
              paramKey = _Object$entries$_i[0],
              paramValue = _Object$entries$_i[1];

          if (input.indexOf('?') == -1) {
            input = "".concat(input, "?").concat(paramKey, "=").concat(paramValue);
          } else {
            input = "".concat(input, "&").concat(paramKey, "=").concat(paramValue);
          }
        }
      } // Fetch


      return fetch(input, init).then(function (response) {
        if (!quiet) {
          self.removeTask(taskId);
        }

        if (jsonOnly) {
          if (response.headers.get('content-type') != 'application/json') {
            throw Error(response.statusText);
          }

          return response.json();
        }

        return response.text();
      })["catch"](function (ex) {
        if (!quiet) {
          self.removeTask(taskId);
        }

        throw Error(ex);
      });
    }
  };
}); // Functions
// --------------------------------------------------------------------------------------------------------------------------------------------

var TAG_makeInitSnapshot = function TAG_makeInitSnapshot() {};

var makeInitSnapshot = function makeInitSnapshot(routes, snapshot, callback) {
  // Génération du snapshot d'initialisation du RootStore des applications
  // ---
  routes = routes != undefined ? routes : {};
  snapshot = snapshot != undefined ? snapshot : {}; // Routes

  var routeNodes = new route_node_esm/* RouteNode */.k('', '');
  routeNodes.add(new route_node_esm/* RouteNode */.k('about', '/about'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('login', '/login'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('forbidden', '/forbidden'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('account', '/account'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('infos', '/infos'));

  for (var _i2 = 0, _Object$entries2 = Object.entries(routes); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = NxApp_slicedToArray(_Object$entries2[_i2], 2),
        routeContextKey = _Object$entries2$_i[0],
        routeMatchURL = _Object$entries2$_i[1];

    routeNodes.add(new route_node_esm/* RouteNode */.k(routeContextKey, routeMatchURL));
  }

  var matchResult = matchUrl(routeNodes, document.location.pathname);
  var mobileInfos = detectMobile();
  var urlParams = getUrlParams();
  var standaloneMode = false;

  if (urlParams.hasOwnProperty('standaloneMode')) {
    if (isTrue(urlParams.standaloneMode)) {
      standaloneMode = true;
    }
  } // App
  // -


  if (!snapshot.hasOwnProperty('app')) {
    snapshot['app'] = {};
  }

  snapshot['app']['context'] = matchResult.context;
  snapshot['app']['standaloneMode'] = standaloneMode;
  snapshot['app']['isMobile'] = mobileInfos.isMobile;
  snapshot['app']['isDesktop'] = mobileInfos.isDesktop;
  snapshot['app']['breakPoint650'] = mobileInfos.breakPoint650;
  snapshot['app']['breakPoint414'] = mobileInfos.breakPoint414;
  snapshot['app']['breakPoint375'] = mobileInfos.breakPoint375;
  snapshot['app']['breakPoint320'] = mobileInfos.breakPoint320;
  snapshot['app']['routes'] = routes;
  snapshot['app']['urlParams'] = urlParams;
  snapshot['app']['matchResult'] = matchResult;

  if (!snapshot['app'].hasOwnProperty('theme')) {
    snapshot['app']['theme'] = {};
  }

  snapshot['app']['theme']['variant'] = getFromStorage('nxTheme', snapshot['app']['theme'].hasOwnProperty('variant') ? snapshot.app.theme.variant : 'light'); // Drawer
  // -

  if (!snapshot['app'].hasOwnProperty('menu')) {
    snapshot['app']['menu'] = {
      expanded: true,
      pinned: true
    };
  }

  snapshot['app']['menu']['expanded'] = getFromStorage('menuExpanded', snapshot.app.menu.expanded, 'bool');
  snapshot['app']['menu']['pinned'] = getFromStorage('menuPinned', snapshot.app.menu.pinned, 'bool'); // Apps
  // -

  if (!snapshot['app'].hasOwnProperty('portal')) {
    snapshot['app']['portal'] = {
      open: false,
      expanded: true,
      pinned: false
    };
  }

  snapshot['app']['portal']['expanded'] = getFromStorage('portalExpanded', snapshot.app.portal.expanded, 'bool');
  snapshot['app']['portal']['pinned'] = getFromStorage('portalPinned', snapshot.app.portal.pinned, 'bool'); // URL params
  // -

  if (matchResult && matchResult.hasOwnProperty('params')) {
    for (var _i3 = 0, _Object$entries3 = Object.entries(matchResult.params); _i3 < _Object$entries3.length; _i3++) {
      var _Object$entries3$_i = NxApp_slicedToArray(_Object$entries3[_i3], 2),
          urlParamKey = _Object$entries3$_i[0],
          urlParamValue = _Object$entries3$_i[1];

      snapshot[urlParamKey] = urlParamValue;
    }
  }

  if (callback) {
    callback(snapshot, urlParams);
  }

  return snapshot;
}; // Class Components ReactJS
// --------------------------------------------------------------------------------------------------------------------------------------------
// ***** ErrorBoundary *****
// *************************

var TAG_ErrorBoundary = function TAG_ErrorBoundary() {};

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error('componentDidCatch');
      console.error(error);
      console.error('-');
      console.error(errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/react.createElement("div", {
          className: "nx-page"
        }, /*#__PURE__*/react.createElement(Helper_Helper, {
          icon: /*#__PURE__*/react.createElement("img", {
            className: "nx-helper-icon",
            src: "/nexus_static/img/emojis/jelly_eyes_closed.png"
          }),
          title: "!",
          subtitle: "Une erreur est survenue.",
          severity: "error",
          show: true
        }));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react.Component); // Function Components ReactJS
// --------------------------------------------------------------------------------------------------------------------------------------------
// ***** NxApp *****
// *****************


var TAG_NxApp = function TAG_NxApp() {};

var NxApp_NxApp = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu;
  react.useEffect(function () {
    // Scroll restoration
    clearTimeout(window.scrollTimeoutRestore);
    setTimeout(function () {
      app.restoreScroll();
    }, 250); // JS Ready

    var body = document.body;
    body.classList.add("jsready");
  }, []); // From ... props

  var Header = props.header ? props.header : null;
  var Menu = props.menu ? props.menu : null;
  var Footer = props.footer ? props.footer : null;
  var children = props.children ? props.children : null;
  var contexts = props.contexts ? props.contexts : {};
  var popups = props.popups ? props.popups : {}; // From ... store

  var context = app.context;
  var isLoading = app.isLoading;
  var isFullScreen = app.isFullScreen;
  var breakPoint650 = app.breakPoint650;
  var breakPoint414 = app.breakPoint414;
  var breakPoint375 = app.breakPoint375;
  var breakPoint320 = app.breakPoint320;
  var menuPinned = menu.pinned;
  var theme = app.theme; // ...

  contexts['about'] = AboutPage;
  contexts['login'] = LoginPage;
  contexts['forbidden'] = ForbiddenPage;
  contexts['account'] = AccountPage; // contexts['infos'] = InfoPage;
  // Render
  // ==================================================================================================

  var break650 = breakPoint650 ? 'break-650' : '';
  var break414 = breakPoint414 ? 'break-414' : '';
  var break375 = breakPoint375 ? 'break-375' : '';
  var break320 = breakPoint320 ? 'break-320' : ''; // No children ? Then we maybe have a contextual component to draw

  var content = children;

  if (!content) {
    if (contexts.hasOwnProperty(context)) {
      var ContextualComponent = contexts[context];
      content = /*#__PURE__*/react.createElement(ContextualComponent, null);
    } else {
      // 404 not found
      content = /*#__PURE__*/react.createElement(NotFoundPage, null);
    }
  } // Popups


  var popupsRendered = [];

  for (var _i4 = 0, _Object$entries4 = Object.entries(popups); _i4 < _Object$entries4.length; _i4++) {
    var _Object$entries4$_i = NxApp_slicedToArray(_Object$entries4[_i4], 2),
        popupKey = _Object$entries4$_i[0],
        PopupComponent = _Object$entries4$_i[1];

    popupsRendered.push( /*#__PURE__*/react.createElement(PopupComponent, {
      key: popupKey
    }));
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(ErrorBoundary, null, /*#__PURE__*/react.createElement("div", {
    id: "nx-base",
    className: (0,clsx_m/* default */.Z)(context, {
      'break-650': breakPoint650
    }, {
      'break-414': breakPoint414
    }, {
      'break-375': breakPoint375
    }, {
      'break-320': breakPoint320
    }, "ui-".concat(theme.variant), {
      'loading': isLoading
    })
  }, Header && !isFullScreen && /*#__PURE__*/react.createElement(Header, null), /*#__PURE__*/react.createElement("div", {
    id: "nx-content"
  }, Menu && !isFullScreen && /*#__PURE__*/react.createElement(Menu, null), /*#__PURE__*/react.createElement("div", {
    id: "nx-main"
  }, content), !isFullScreen && /*#__PURE__*/react.createElement(Portal_Portal, null), popupsRendered)));
});
// EXTERNAL MODULE: ../../nexus/react/contexts/home/Home.css
var Home = __webpack_require__(37);
;// CONCATENATED MODULE: ../../nexus/react/contexts/home/Home.jsx







 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** HomeHeaderMiddle *****
// ****************************

var TAG_HomeHeaderMiddle = function TAG_HomeHeaderMiddle() {};

var HomeHeaderMiddle = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var services = app.services; // From ... store

  var appName = services.me.name; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: appName,
    titleStyle: {
      fontWeight: 'bold'
    },
    centered: true
  });
}); // ***** HomeMenuItem *****
// ************************

var TAG_HomeMenuItem = function TAG_HomeMenuItem() {};

var HomeMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // From ... store

  var breakPoint650 = app.breakPoint650; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigate(app.homeUrl, app.homeContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  var homeMenuItemContent = null;

  if (breakPoint650) {
    homeMenuItemContent = /*#__PURE__*/react.createElement(MenuItem, {
      icon: /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "home",
        width: "120px"
      }),
      label: "Accueil",
      activeContexts: [app.homeContext],
      callbackClick: handleMenuItemClick
    });
  }

  return homeMenuItemContent;
});
// EXTERNAL MODULE: ../../nexus/react/contexts/admin/Admin.css
var Admin = __webpack_require__(644);
;// CONCATENATED MODULE: ../../nexus/react/contexts/admin/Admin.jsx







 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** AdminHeaderLeft *****
// ***************************

var TAG_AdminHeaderLeft = function TAG_AdminHeaderLeft() {};

var AdminHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Administration",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** AdminMenuItem *****
// *************************

var TAG_AdminMenuItem = function TAG_AdminMenuItem() {};

var AdminMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... store

  var isAdmin = account.is_admin; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigate(app.adminUrl, app.adminContext);
  }; // Render
  // ==================================================================================================


  var adminMenuItemContent = null;

  if (isAdmin) {
    adminMenuItemContent = /*#__PURE__*/react.createElement(MenuItem, {
      icon: /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "setting"
      }),
      label: "Administration",
      activeContexts: [app.adminContext],
      callbackClick: handleMenuItemClick
    });
  }

  return adminMenuItemContent;
});
// EXTERNAL MODULE: ./contexts/search/Search.css
var Search = __webpack_require__(906);
;// CONCATENATED MODULE: ./contexts/search/Search.jsx








 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** SearchStore *****
// ***********************

var TAG_SearchStore = function TAG_SearchStore() {};

var SearchStore = mobx_state_tree_module/* types.model */.V5.model({}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {}
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** SearchHeaderMiddle *****
// ******************************

var TAG_SearchHeaderMiddle = function TAG_SearchHeaderMiddle() {};

var SearchHeaderMiddle = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Rechercher"
  });
}); // ***** SearchMenuItem *****
// **************************

var TAG_SearchMenuItem = function TAG_SearchMenuItem() {};

var SearchMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var searchContext = 'search'; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(searchContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "search",
      width: "120px"
    }),
    label: "Rechercher",
    activeContexts: [searchContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** HomePage *****
// ********************

var TAG_SearchPage = function TAG_SearchPage() {};

var SearchPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "search",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./contexts/blog/Blog.css
var Blog = __webpack_require__(737);
;// CONCATENATED MODULE: ./contexts/blog/Blog.jsx








 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** BlogStore *****
// *********************

var TAG_BlogStore = function TAG_BlogStore() {};

var BlogStore = mobx_state_tree_module/* types.model */.V5.model({
  loaded: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {}
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** BlogHeaderLeft *****
// **************************

var TAG_BlogHeaderLeft = function TAG_BlogHeaderLeft() {};

var BlogHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Blog",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** BlogMenuItem *****
// ************************

var TAG_BlogMenuItem = function TAG_BlogMenuItem() {};

var BlogMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var blogContext = 'blog'; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(blogContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "forum",
      width: "120px"
    }),
    label: "Blog",
    activeContexts: [blogContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** BlogPage *****
// ********************

var TAG_BlogPage = function TAG_BlogPage() {};

var BlogPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "forum",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./contexts/projects/Projects.css
var Projects = __webpack_require__(525);
;// CONCATENATED MODULE: ./contexts/projects/Projects.jsx








 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** ProjectsStore *****
// *************************

var TAG_ProjectsStore = function TAG_ProjectsStore() {};

var ProjectsStore = mobx_state_tree_module/* types.model */.V5.model({
  loaded: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {}
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** ProjectsHeaderLeft *****
// ******************************

var TAG_ProjectsHeaderLeft = function TAG_ProjectsHeaderLeft() {};

var ProjectsHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Mes projets",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** ProjectsMenuItem *****
// ****************************

var TAG_ProjectsMenuItem = function TAG_ProjectsMenuItem() {};

var ProjectsMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var projectsContext = 'projects'; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(projectsContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "work_outline",
      width: "120px"
    }),
    label: "Mes projets",
    activeContexts: [projectsContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** ProjectsPage *****
// ************************

var TAG_ProjectsPage = function TAG_ProjectsPage() {};

var ProjectsPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "work_outline",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./contexts/cv/Cv.css
var Cv = __webpack_require__(685);
;// CONCATENATED MODULE: ./contexts/cv/Cv.jsx








 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** CvStore *****
// *******************

var TAG_CvStore = function TAG_CvStore() {};

var CvStore = mobx_state_tree_module/* types.model */.V5.model({
  loaded: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {}
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** CvHeaderLeft *****
// ************************

var TAG_CvHeaderLeft = function TAG_CvHeaderLeft() {};

var CvHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Mon CV",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** CvMenuItem *****
// **********************

var TAG_CvMenuItem = function TAG_CvMenuItem() {};

var CvMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var cvContext = 'cv'; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(cvContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "school",
      width: "120px"
    }),
    label: "Mon CV",
    activeContexts: [cvContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** CvPage *****
// ******************

var TAG_CvPage = function TAG_CvPage() {};

var CvPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "school",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./contexts/playground/Playground.css
var Playground = __webpack_require__(245);
;// CONCATENATED MODULE: ./contexts/playground/Playground.jsx








 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** PlaygroundStore *****
// ***************************

var TAG_PlaygroundStore = function TAG_PlaygroundStore() {};

var PlaygroundStore = mobx_state_tree_module/* types.model */.V5.model({
  loaded: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {}
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** PlaygroundHeaderLeft *****
// ********************************

var TAG_PlaygroundHeaderLeft = function TAG_PlaygroundHeaderLeft() {};

var PlaygroundHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Playground",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** PlaygroundMenuItem *****
// ******************************

var TAG_PlaygroundMenuItem = function TAG_PlaygroundMenuItem() {};

var PlaygroundMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var playgroundContext = 'playground'; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(playgroundContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "science",
      width: "120px"
    }),
    label: "Playground",
    activeContexts: [playgroundContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** PlaygroundPage *****
// **************************

var TAG_PlaygroundPage = function TAG_PlaygroundPage() {};

var PlaygroundPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "science",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
;// CONCATENATED MODULE: ./ui/ContextualHeader.jsx













 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** ContextualHeader *****
// ****************************

var TAG_ContextualHeader = function TAG_ContextualHeader() {};

var ContextualHeader = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var context = app.context; // Render
  // ==================================================================================================

  var headerLeft = null;
  var headerMiddle = null;
  var headerRight = null; // -------------------------------------------------

  var renderHeaderHome = function renderHeaderHome() {
    if ([app.homeContext, 'login'].indexOf(context) == -1) {
      return;
    }

    headerMiddle = /*#__PURE__*/react.createElement(HomeHeaderMiddle, null);
  };

  var renderHeaderSearch = function renderHeaderSearch() {
    if (context != 'search') {
      return;
    }

    headerMiddle = /*#__PURE__*/react.createElement(SearchHeaderMiddle, null);
  }; // -------------------------------------------------


  var renderHeaderBlog = function renderHeaderBlog() {
    if (context != 'blog') {
      return;
    }

    headerLeft = /*#__PURE__*/react.createElement(BlogHeaderLeft, null);
  }; // -------------------------------------------------


  var renderHeaderProjects = function renderHeaderProjects() {
    if (context != 'projects') {
      return;
    }

    headerLeft = /*#__PURE__*/react.createElement(ProjectsHeaderLeft, null);
  };

  var renderHeaderCv = function renderHeaderCv() {
    if (context != 'cv') {
      return;
    }

    headerLeft = /*#__PURE__*/react.createElement(CvHeaderLeft, null);
  }; // -------------------------------------------------


  var renderHeaderPlayground = function renderHeaderPlayground() {
    if (context != 'playground') {
      return;
    }

    headerLeft = /*#__PURE__*/react.createElement(PlaygroundHeaderLeft, null);
  }; // -------------------------------------------------


  var renderHeaderAbout = function renderHeaderAbout() {
    if (context != app.aboutContext) {
      return;
    }

    headerLeft = /*#__PURE__*/react.createElement(AboutHeaderLeft, null);
  };

  var renderHeaderAdmin = function renderHeaderAdmin() {
    if (context != app.adminContext) {
      return;
    }

    headerLeft = /*#__PURE__*/react.createElement(AdminHeaderLeft, null);
  }; // -------------------------------------------------


  var renderHeaderAccount = function renderHeaderAccount() {
    if (context != app.accountContext) {
      return;
    }

    headerLeft = /*#__PURE__*/react.createElement(AccountHeaderLeft, null);
  }; // -------------------------------------------------


  renderHeaderHome();
  renderHeaderSearch();
  renderHeaderBlog();
  renderHeaderProjects();
  renderHeaderCv();
  renderHeaderPlayground();
  renderHeaderAbout();
  renderHeaderAdmin();
  renderHeaderAccount();
  return /*#__PURE__*/react.createElement(Header_Header, {
    left: headerLeft,
    right: headerRight
  }, headerMiddle);
});
;// CONCATENATED MODULE: ./ui/ContextualMenu.jsx















 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** ContextualMenu *****
// **************************

var TAG_ContextualMenu = function TAG_ContextualMenu() {};

var ContextualMenu = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var context = app.context;
  var breakPoint650 = app.breakPoint650; // Render
  // ==================================================================================================
  // -------------------------------------------------
  // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Menu_Menu, null, /*#__PURE__*/react.createElement(HomeMenuItem, null), /*#__PURE__*/react.createElement(SearchMenuItem, null), /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(BlogMenuItem, null), /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(ProjectsMenuItem, null), /*#__PURE__*/react.createElement(CvMenuItem, null), /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(PlaygroundMenuItem, null), /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(AboutMenuItem, null), /*#__PURE__*/react.createElement(AdminMenuItem, null), breakPoint650 && /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(LoginMenuItem, null), /*#__PURE__*/react.createElement(AccountMenuItem, null), /*#__PURE__*/react.createElement(LogoutMenuItem, null));
});
// EXTERNAL MODULE: ./contexts/home/Home.css
var home_Home = __webpack_require__(319);
;// CONCATENATED MODULE: ./contexts/home/Home.jsx




 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** HomePage *****
// ********************

var TAG_HomePage = function TAG_HomePage() {};

var HomePage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      icon: /*#__PURE__*/react.createElement("img", {
        className: "nx-helper-icon",
        src: "/static/favicons/android-icon-192x192.png"
      }),
      title: "Bienvenue sur le Nexorium !",
      subtitle: "Votre portail d'acc\xE8s sur l'\xE9cosyst\xE8me NxApp servant \xE9galement de site portfolio.",
      show: true,
      style: {
        maxWidth: '400px'
      }
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./contexts/admin/Admin.css
var admin_Admin = __webpack_require__(251);
;// CONCATENATED MODULE: ./contexts/admin/Admin.jsx




 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** AdminPage *****
// *********************

var TAG_AdminPage = function TAG_AdminPage() {};

var AdminPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "setting",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./Main.css
var Main = __webpack_require__(729);
;// CONCATENATED MODULE: ./Main.jsx














 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** RootStore *****
// *********************

var TAG_RootStore = function TAG_RootStore() {};

var RootStore = mobx_state_tree_module/* types.model */.V5.model({
  'app': mobx_state_tree_module/* types.optional */.V5.optional(NxAppStore, {}),
  // Search
  // -
  'search': mobx_state_tree_module/* types.optional */.V5.optional(SearchStore, {}),
  // Blog
  // -
  'blog': mobx_state_tree_module/* types.optional */.V5.optional(BlogStore, {}),
  // Mes projets
  // -
  'projects': mobx_state_tree_module/* types.optional */.V5.optional(ProjectsStore, {}),
  // Mon CV
  // -
  'cv': mobx_state_tree_module/* types.optional */.V5.optional(CvStore, {}),
  // Playground
  // -
  'playground': mobx_state_tree_module/* types.optional */.V5.optional(PlaygroundStore, {})
}).views(function (self) {
  return {
    get ajaxNexorium() {
      var app = self.app; // return app.getAjaxBase('nexorium');

      return '/';
    }

  };
}).actions(function (self) {
  return {
    update: function update(datas) {
      // Nexorium-specific init datas
      // ---
      console.log(datas);
    },
    navigateTo: function navigateTo(navContext, contextId, contextUrl, contextExtras, callback) {
      // Herald own navigation function
      // ---
      var app = self.app;
      var context = app.context; // -
      // Search

      if (navContext == 'search') {
        app.navigate('/search', 'search');
      } // -
      // Blog


      if (navContext == 'blog') {
        app.navigate('/blog', 'blog', [{
          "op": "replace",
          "path": "/blog/loaded",
          "value": false
        }]);
      } // -
      // Mes projects


      if (navContext == 'projects') {
        app.navigate('/projects', 'projects', [{
          "op": "replace",
          "path": "/projects/loaded",
          "value": false
        }]);
      } // Mon CV


      if (navContext == 'cv') {
        app.navigate('/cv', 'cv', [{
          "op": "replace",
          "path": "/cv/loaded",
          "value": false
        }]);
      } // -
      // Playground


      if (navContext == 'playground') {
        app.navigate('/playground', 'playground', [{
          "op": "replace",
          "path": "/playground/loaded",
          "value": false
        }]);
      }
    }
  };
}); // Init
// -------------------------------------------------------------------------------------------------------------
// Contexts
// -

var contexts = {
  'home': HomePage,
  'search': SearchPage,
  'blog': BlogPage,
  'projects': ProjectsPage,
  'cv': CvPage,
  'playground': PlaygroundPage,
  'admin': AdminPage
}; // Popups
// -

var popups = {}; // Routes
// -

var routes = {
  'home': '/',
  'search': '/search',
  'blog': '/blog',
  'projects': '/projects',
  'cv': '/cv',
  'playground': '/playground',
  'admin': '/admin'
}; // Store
// -

var initSnapshot = makeInitSnapshot(routes, {
  'app': {
    'theme': {
      'variant': 'light',
      'palette': {
        'primary': {
          'main': '#8c9eff',
          'contrastText': '#fff'
        },
        'secondary': {
          'main': '#607d8b',
          'contrastText': '#fff'
        }
      }
    }
  }
});
var rootStore = RootStore.create(initSnapshot);
var RootStoreContext = /*#__PURE__*/react.createContext(rootStore);
window.store = rootStore;
window.storeContext = RootStoreContext;
rootStore.app.init(function (datas) {
  rootStore.update(datas);
}, popups, {}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Root *****
// ****************

var TAG_Root = function TAG_Root() {};

var Root = (0,es/* observer */.Pi)(function () {
  // Render
  // ==================================================================================================
  return /*#__PURE__*/react.createElement(RootStoreContext.Provider, {
    value: rootStore
  }, /*#__PURE__*/react.createElement(NxApp_NxApp, {
    header: ContextualHeader,
    menu: ContextualMenu,
    contexts: contexts,
    popups: popups
  }));
}); // DOM Ready
// --------------------------------------------------------------------------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', function () {
  react_dom.render( /*#__PURE__*/react.createElement(Root, null), document.getElementById("nx-root"));
});

/***/ }),

/***/ 729:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 251:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 737:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 685:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 319:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 245:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 525:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 906:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 52:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 189:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 390:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 644:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 429:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 37:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 364:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 282:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 450:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 397:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 230:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 130:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 181:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 236:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 575:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 742:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 244:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 817:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 443:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 824:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			296: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknexorium"] = self["webpackChunknexorium"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [216], () => (__webpack_require__(979)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], () => (__webpack_require__(133)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;