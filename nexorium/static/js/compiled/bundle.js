/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8446:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: RootStoreContext, rootStore

// EXTERNAL MODULE: ../../nexus/react/node_modules/react/index.js
var react = __webpack_require__(3354);
// EXTERNAL MODULE: ../../nexus/react/node_modules/react-dom/index.js
var react_dom = __webpack_require__(20);
// EXTERNAL MODULE: ../../nexus/react/node_modules/mobx-state-tree/dist/mobx-state-tree.module.js
var mobx_state_tree_module = __webpack_require__(7947);
// EXTERNAL MODULE: ../../nexus/react/node_modules/mobx-react-lite/es/index.js + 16 modules
var es = __webpack_require__(589);
// EXTERNAL MODULE: ../../nexus/react/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(9354);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(368);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(6265);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(6627);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(6213);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(9343);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(207);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(8717);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(5876);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(5830);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(2274);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(1564);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(4435);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(9656);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(3305);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(3282);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(6993);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(5151);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(5866);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(1992);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(9530);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(3036);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(6812);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(9608);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(7229);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.object.create.js
var es_object_create = __webpack_require__(2954);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(3204);
// EXTERNAL MODULE: ../../nexus/react/node_modules/route-node/dist/route-node.esm.js + 3 modules
var route_node_esm = __webpack_require__(6285);
// EXTERNAL MODULE: ../../nexus/react/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4641);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(6813);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(9162);
;// CONCATENATED MODULE: ../../nexus/react/models/Services.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















 // Datas
// ======================================================================================================
// VBO : Recopie temporaire de nexus/services.py (pour le mode static)

var STATIC_SMAP = {
  'nexorium': {
    app_key: 'nexorium',
    app_variant: 'default',
    app_id: 'nexorium',
    name: "Nexorium",
    description: "Portail d'accueil",
    kind: "webserver",
    port: 7301,
    database: null,
    version: '0.0.2',
    changeset: '...',
    changeset_instance: '...',
    internal: '/index.html',
    external: '/',
    view_role: "M_VIEW",
    edit_role: "M_EDIT",
    admin_role: "M_ADMIN"
  },
  'nexora': {
    app_key: 'nexora',
    app_variant: 'default',
    app_id: 'nexora',
    name: "Nexora",
    description: "Histoire de science-fiction",
    kind: "webserver",
    port: 7302,
    database: null,
    version: '0.0.1',
    changeset: '...',
    changeset_instance: '...',
    internal: '/index.html',
    external: '/',
    view_role: "N_VIEW",
    edit_role: "N_EDIT",
    admin_role: "N_ADMIN"
  },
  // Applications
  // -
  'gramophone': {
    app_key: 'gramophone',
    app_variant: 'default',
    app_id: 'gramophone',
    name: "Gramophone",
    description: "Bibliothèque musicale",
    kind: "webserver",
    port: 7304,
    database: null,
    version: '0.0.1',
    changeset: '...',
    changeset_instance: '...',
    internal: '/index.html',
    external: '/',
    view_role: "G_VIEW",
    edit_role: "G_EDIT",
    admin_role: "G_ADMIN"
  },
  'vgm': {
    app_key: 'vgm',
    app_variant: 'default',
    app_id: 'vgm',
    name: "VGM",
    description: "Bibliothèque vidéoludique",
    kind: "webserver",
    port: 7303,
    database: null,
    version: '0.0.1',
    changeset: '...',
    changeset_instance: '...',
    internal: '/index.html',
    external: '/',
    view_role: "G_VIEW",
    edit_role: "G_EDIT",
    admin_role: "G_ADMIN"
  },
  // Support
  // -
  'nexus': {
    app_key: 'nexus',
    app_variant: 'default',
    app_id: 'nexus',
    name: "Nexus",
    description: "Librairie de l'écosystème Nexorium",
    kind: "library",
    port: null,
    database: null,
    version: '0.0.2',
    changeset: '...',
    changeset_instance: '...',
    internal: null,
    external: null,
    view_role: null,
    edit_role: null,
    admin_role: null
  }
}; // Models
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
  version: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  changeset: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  changeset_instance: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  internal: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  external: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  view_role: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  edit_role: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  admin_role: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string)
}).views(function (self) {
  return {
    get roles() {
      return [self.view_role, self.edit_role, self.admin_role];
    },

    get shortcutIconUrl() {
      return self.getIconUrl(48);
    },

    get iconUrl() {
      return self.getIconUrl(192);
    },

    // -
    get folderName() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var isProd = app.isProd;

      if (['gramophone', 'vgm'].includes(self.app_key) && !isProd) {
        return "".concat(self.app_key, "_server");
      }

      return self.app_key;
    },

    // -
    get internalPrefix() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var appKey = app.appKey;
      var isProd = app.isProd;
      var prefix = "./".concat(self.app_key);

      if (appKey != self.app_key) {
        prefix = "../".concat(self.folderName);

        if (!isProd || self.app_key != 'nexorium') {
          prefix = "".concat(prefix, "/").concat(self.app_key);
        }
      }

      return prefix;
    },

    get externalPrefix() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var folderName = app.folderName;
      var isProd = app.isProd;
      var prefix = "/";

      if (isProd) {
        prefix = "https://vincentboni.pagesperso-orange.fr/";

        if (self.app_key != 'nexorium') {
          prefix = "".concat(prefix, "/").concat(self.app_key, "/");
        }
      } else {
        prefix = window.location.pathname;
        prefix = prefix.replace('index.html', '');
        prefix = prefix.replace(folderName, self.folderName);
      }

      return prefix;
    },

    // -
    get githubLink() {
      return "https://github.com/vincent114/".concat(self.folderName);
    },

    get githubLinkClient() {
      if (["gramophone", "vgm"].includes(self.app_key)) {
        return "https://github.com/vincent114/".concat(self.app_key, "_client");
      }

      return "";
    },

    // Getters
    // -
    getIconUrl: function getIconUrl() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '192';
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var staticMode = app.staticMode;
      var external = self.external;
      var dimention = "".concat(size, "x").concat(size);

      if (staticMode) {
        return "".concat(self.internalPrefix, "/static/favicons/android-icon-").concat(dimention, ".png");
      }

      return "".concat(external, "/static/favicons/android-icon-").concat(dimention, ".png");
    },
    getExternalUrl: function getExternalUrl() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var staticMode = app.staticMode;

      if (staticMode && self.kind == 'webserver') {
        return "".concat(self.externalPrefix, "index.html");
      }

      return self.external;
    }
  };
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
      self.version = raw.version;
      self.changeset = raw.changeset;
      self.changeset_instance = raw.changeset_instance;
      self.internal = raw.internal;
      self.external = raw.external;
      self.view_role = raw.view_role;
      self.edit_role = raw.edit_role;
      self.admin_role = raw.admin_role;
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
    },

    // Getters
    // -
    getServiceInfo: function getServiceInfo(appId) {
      return self.smap.get(appId);
    },
    getAjaxBase: function getAjaxBase(appId) {
      var me = self.getServiceInfo('me'); // AJAX vers un autre serveur ?

      if (me && me.app_id != appId) {
        var serviceInfo = self.getServiceInfo(appId);

        if (serviceInfo) {
          return serviceInfo.external;
        }
      }

      return '';
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
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(2317);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(4961);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.date.to-iso-string.js
var es_date_to_iso_string = __webpack_require__(2308);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(6965);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(3269);
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
var Drawer = __webpack_require__(7575);
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
  // Events
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
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/AccessAlarms.jsx

 // Functions Components ReactJS
// ======================================================================================================

var AccessAlarmsIcon = function AccessAlarmsIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "".concat(height, "px"),
    viewBox: "0 0 ".concat(height, " ").concat(width),
    width: "".concat(width, "px"),
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/AccountCircle.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AccountCircleIcon = function AccountCircleIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Add.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AddIcon = function AddIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Album.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AlbumIcon = function AlbumIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/AlignHorizontalCenter.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AlignHorizontalCenterIcon = function AlignHorizontalCenterIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("polygon", {
    points: "11,2 13,2 13,7 21,7 21,10 13,10 13,14 18,14 18,17 13,17 13,22 11,22 11,17 6,17 6,14 11,14 11,10 3,10 3,7 11,7"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/AlignVerticalCenter.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AlignVerticalCenterIcon = function AlignVerticalCenterIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("polygon", {
    points: "22,11 17,11 17,6 14,6 14,11 10,11 10,3 7,3 7,11 1.84,11 1.84,13 7,13 7,21 10,21 10,13 14,13 14,18 17,18 17,13 22,13"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/AlternateEmail.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AlternateEmailIcon = function AlternateEmailIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Announcement.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AnnouncementIcon = function AnnouncementIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Api.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ApiIcon = function ApiIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Apps.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AppsIcon = function AppsIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ArrowBack.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ArrowBackIcon = function ArrowBackIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ArrowDropDown.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ArrowDropDownIcon = function ArrowDropDownIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M7 10l5 5 5-5H7z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ArrowForward.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ArrowForwardIcon = function ArrowForwardIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ArtTrack.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ArtTrackIcon = function ArtTrackIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Audiotrack.jsx
 // Functions Components ReactJS
// ======================================================================================================

var AudiotrackIcon = function AudiotrackIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Badge.jsx
 // Functions Components ReactJS
// ======================================================================================================

var BadgeIcon = function BadgeIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24",
    y: "0"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    height: "1.5",
    width: "4",
    x: "14",
    y: "12"
  }), /*#__PURE__*/react.createElement("rect", {
    height: "1.5",
    width: "4",
    x: "14",
    y: "15"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,7V4h2v3v2h-2V7z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "9",
    cy: "13.5",
    r: "1.5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M11.08,16.18C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43 C12,16.96,11.64,16.42,11.08,16.18z"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Book.jsx
 // Functions Components ReactJS
// ======================================================================================================

var BookIcon = function BookIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/BugReport.jsx
 // Functions Components ReactJS
// ======================================================================================================

var BugReportIcon = function BugReportIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-4 4v3c0 .22-.03.47-.07.7l-.1.65-.37.65c-.72 1.24-2.04 2-3.46 2s-2.74-.77-3.46-2l-.37-.64-.1-.65C8.03 15.48 8 15.23 8 15v-4c0-.23.03-.48.07-.7l.1-.65.37-.65c.3-.52.72-.97 1.21-1.31l.57-.39.74-.18c.31-.08.63-.12.94-.12.32 0 .63.04.95.12l.68.16.61.42c.5.34.91.78 1.21 1.31l.38.65.1.65c.04.22.07.47.07.69v1zm-6 2h4v2h-4zm0-4h4v2h-4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/CallToAction.jsx
 // Functions Components ReactJS
// ======================================================================================================

var CallToActionIcon = function CallToActionIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/CardGiftCard.jsx
 // Functions Components ReactJS
// ======================================================================================================

var CardGiftCardIcon = function CardGiftCardIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/CheckBox.jsx
 // Functions Components ReactJS
// ======================================================================================================

var CheckBoxIcon = function CheckBoxIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/CheckBoxOutlineBlank.jsx
 // Functions Components ReactJS
// ======================================================================================================

var CheckBoxOutlineBlankIcon = function CheckBoxOutlineBlankIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/CheckCircle.jsx
 // Functions Components ReactJS
// ======================================================================================================

var CheckCircleIcon = function CheckCircleIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Clear.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ClearIcon = function ClearIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Close.jsx
 // Functions Components ReactJS
// ======================================================================================================

var CloseIcon = function CloseIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/CloseFullscreen.jsx
 // Functions Components ReactJS
// ======================================================================================================

var CloseFullscreenIcon = function CloseFullscreenIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M22,3.41l-5.29,5.29L20,12h-8V4l3.29,3.29L20.59,2L22,3.41z M3.41,22l5.29-5.29L12,20v-8H4l3.29,3.29L2,20.59L3.41,22z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Code.jsx
 // Functions Components ReactJS
// ======================================================================================================

var CodeIcon = function CodeIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/DarkMode.jsx
 // Functions Components ReactJS
// ======================================================================================================

var DarkModeIcon = function DarkModeIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/DateRange.jsx
 // Functions Components ReactJS
// ======================================================================================================

var DateRangeIcon = function DateRangeIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Delete.jsx
 // Functions Components ReactJS
// ======================================================================================================

var DeleteIcon = function DeleteIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Description.jsx
 // Functions Components ReactJS
// ======================================================================================================

var DescriptionIcon = function DescriptionIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/DynamicFeed.jsx
 // Functions Components ReactJS
// ======================================================================================================

var DynamicFeedIcon = function DynamicFeedIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z"
  }))), /*#__PURE__*/react.createElement("g", {
    display: "none"
  }, /*#__PURE__*/react.createElement("g", {
    display: "inline"
  }), /*#__PURE__*/react.createElement("g", {
    display: "inline"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/EditAttributes.jsx
 // Functions Components ReactJS
// ======================================================================================================

var EditAttributesIcon = function EditAttributesIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zm0 8H6.37C5.09 15 4 13.63 4 12s1.09-3 2.37-3h11.26C18.91 9 20 10.37 20 12s-1.09 3-2.37 3zM7.24 13.06l-1.87-1.87-.7.7 2.57 2.57 4.22-4.22-.7-.7z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Email.jsx
 // Functions Components ReactJS
// ======================================================================================================

var EmailIcon = function EmailIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ExpandLess.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ExpandLessIcon = function ExpandLessIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ExpandMore.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ExpandMoreIcon = function ExpandMoreIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M24 24H0V0h24v24z",
    fill: "none",
    opacity: ".87"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Explore.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ExploreIcon = function ExploreIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Extension.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ExtensionIcon = function ExtensionIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5m0-2C9.12 2.5 8 3.62 8 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4c1.38 0 2.5-1.12 2.5-2.5S20.38 11 19 11V7c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Face.jsx
 // Functions Components ReactJS
// ======================================================================================================

var FaceIcon = function FaceIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Feedback.jsx
 // Functions Components ReactJS
// ======================================================================================================

var FeedbackIcon = function FeedbackIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/FileDownload.jsx
 // Functions Components ReactJS
// ======================================================================================================

var FileDownloadIcon = function FileDownloadIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Folder.jsx
 // Functions Components ReactJS
// ======================================================================================================

var FolderIcon = function FolderIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/FolderZip.jsx
 // Functions Components ReactJS
// ======================================================================================================

var FolderZipIcon = function FolderZipIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M16,16h2v-2h-2v-2 h2v-2h-2V8h4v10h-4V16z M16,16h-2v2H4V6h5.17l2,2H14v2h2v2h-2v2h2V16z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Forum.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ForumIcon = function ForumIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/fullscreen.jsx
 // Functions Components ReactJS
// ======================================================================================================

var FullscreenIcon = function FullscreenIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Help.jsx
 // Functions Components ReactJS
// ======================================================================================================

var HelpIcon = function HelpIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/History.jsx
 // Functions Components ReactJS
// ======================================================================================================

var HistoryIcon = function HistoryIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/HistoryEdu.jsx
 // Functions Components ReactJS
// ======================================================================================================

var HistoryEduIcon = function HistoryEduIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M9,4v1.38c-0.83-0.33-1.72-0.5-2.61-0.5c-1.79,0-3.58,0.68-4.95,2.05l3.33,3.33h1.11v1.11c0.86,0.86,1.98,1.31,3.11,1.36 V15H6v3c0,1.1,0.9,2,2,2h10c1.66,0,3-1.34,3-3V4H9z M7.89,10.41V8.26H5.61L4.57,7.22C5.14,7,5.76,6.88,6.39,6.88 c1.34,0,2.59,0.52,3.54,1.46l1.41,1.41l-0.2,0.2c-0.51,0.51-1.19,0.8-1.92,0.8C8.75,10.75,8.29,10.63,7.89,10.41z M19,17 c0,0.55-0.45,1-1,1s-1-0.45-1-1v-2h-6v-2.59c0.57-0.23,1.1-0.57,1.56-1.03l0.2-0.2L15.59,14H17v-1.41l-6-5.97V6h8V17z"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Home.jsx
 // Functions Components ReactJS
// ======================================================================================================

var HomeIcon = function HomeIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/HourglassEmpty.jsx
 // Functions Components ReactJS
// ======================================================================================================

var HourglassEmptyIcon = function HourglassEmptyIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Info.jsx
 // Functions Components ReactJS
// ======================================================================================================

var InfoIcon = function InfoIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Input.jsx
 // Functions Components ReactJS
// ======================================================================================================

var InputIcon = function InputIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    opacity: ".87"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3zM21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Inventory2.jsx
 // Functions Components ReactJS
// ======================================================================================================

var Inventory2Icon = function Inventory2Icon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4h16V7z"
  }), /*#__PURE__*/react.createElement("rect", {
    height: "2",
    width: "6",
    x: "9",
    y: "12"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Launch.jsx
 // Functions Components ReactJS
// ======================================================================================================

var LaunchIcon = function LaunchIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/LightMode.jsx
 // Functions Components ReactJS
// ======================================================================================================

var LightModeIcon = function LightModeIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Link.jsx
 // Functions Components ReactJS
// ======================================================================================================

var LinkIcon = function LinkIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/List.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ListIcon = function ListIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    opacity: ".87"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/LocalBar.jsx
 // Functions Components ReactJS
// ======================================================================================================

var LocalBarIcon = function LocalBarIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M14.77 9L12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Lock.jsx
 // Functions Components ReactJS
// ======================================================================================================

var LockIcon = function LockIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    opacity: ".87"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/LockOpen.jsx
 // Functions Components ReactJS
// ======================================================================================================

var LockOpenIcon = function LockOpenIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Memory.jsx
 // Functions Components ReactJS
// ======================================================================================================

var MemoryIcon = function MemoryIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Menu.jsx
 // Functions Components ReactJS
// ======================================================================================================

var MenuIcon = function MenuIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/MenuBook.jsx
 // Functions Components ReactJS
// ======================================================================================================

var MenuBookIcon = function MenuBookIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"
  }), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"
  })))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/NewReleases.jsx
 // Functions Components ReactJS
// ======================================================================================================

var NewReleasesIcon = function NewReleasesIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-4.51 2.11l.26 2.79-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Newspaper.jsx
 // Functions Components ReactJS
// ======================================================================================================

var NewspaperIcon = function NewspaperIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M22,3l-1.67,1.67L18.67,3L17,4.67L15.33,3l-1.66,1.67L12,3l-1.67,1.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3v16 c0,1.1,0.9,2,2,2l16,0c1.1,0,2-0.9,2-2V3z M11,19H4v-6h7V19z M20,19h-7v-2h7V19z M20,15h-7v-2h7V15z M20,11H4V8h16V11z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/NoAccounts.jsx
 // Functions Components ReactJS
// ======================================================================================================

var NoAccountsIcon = function NoAccountsIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M15.18,10.94c0.2-0.44,0.32-0.92,0.32-1.44C15.5,7.57,13.93,6,12,6c-0.52,0-1,0.12-1.44,0.32L15.18,10.94z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M4,12c0-1.85,0.63-3.55,1.69-4.9l2.86,2.86 c0.21,1.56,1.43,2.79,2.99,2.99l2.2,2.2C13.17,15.05,12.59,15,12,15c-2.32,0-4.45,0.8-6.14,2.12C4.7,15.73,4,13.95,4,12z M12,20 c-1.74,0-3.34-0.56-4.65-1.5C8.66,17.56,10.26,17,12,17s3.34,0.56,4.65,1.5C15.34,19.44,13.74,20,12,20z M18.31,16.9L7.1,5.69 C8.45,4.63,10.15,4,12,4c4.42,0,8,3.58,8,8C20,13.85,19.37,15.54,18.31,16.9z"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Notifications.jsx
 // Functions Components ReactJS
// ======================================================================================================

var NotificationsIcon = function NotificationsIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/OpenInFull.jsx
 // Functions Components ReactJS
// ======================================================================================================

var OpenInFullIcon = function OpenInFullIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("polygon", {
    points: "21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Palette.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PaletteIcon = function PaletteIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "6.5",
    cy: "11.5",
    r: "1.5"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "9.5",
    cy: "7.5",
    r: "1.5"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "14.5",
    cy: "7.5",
    r: "1.5"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "17.5",
    cy: "11.5",
    r: "1.5"
  }))))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/PauseCircleFilled.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PauseCircleFilledIcon = function PauseCircleFilledIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("path", {
    d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,16H9V8h2V16z M15,16h-2V8h2V16z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Person.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PersonIcon = function PersonIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/PersonAdd.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PersonAddIcon = function PersonAddIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/PersonSearch.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PersonSearchIcon = function PersonSearchIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M10,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S6,5.79,6,8C6,10.21,7.79,12,10,12z M10,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S8,9.1,8,8C8,6.9,8.9,6,10,6z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M4,18c0.22-0.72,3.31-2,6-2c0-0.7,0.13-1.37,0.35-1.99C7.62,13.91,2,15.27,2,18v2h9.54c-0.52-0.58-0.93-1.25-1.19-2H4z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19.43,18.02C19.79,17.43,20,16.74,20,16c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,2.21,1.79,4,4,4c0.74,0,1.43-0.22,2.02-0.57 c0.93,0.93,1.62,1.62,2.57,2.57L22,20.59C20.5,19.09,21.21,19.79,19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2 C18,17.1,17.1,18,16,18z"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/PictureAsPdf.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PictureAsPdfIcon = function PictureAsPdfIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm12 6V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1zm-2-3h1v3h-1V9zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1v-2zm0-2h1v1h-1V9z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/PlayCircleFilled.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PlayCircleFilledIcon = function PlayCircleFilledIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/PlaylistPlay.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PlaylistPlayIcon = function PlaylistPlayIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    height: "2",
    width: "11",
    x: "3",
    y: "10"
  }), /*#__PURE__*/react.createElement("rect", {
    height: "2",
    width: "11",
    x: "3",
    y: "6"
  }), /*#__PURE__*/react.createElement("rect", {
    height: "2",
    width: "7",
    x: "3",
    y: "14"
  }), /*#__PURE__*/react.createElement("polygon", {
    points: "16,13 16,21 22,17"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/PowerSetting.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PowerSettingIcon = function PowerSettingIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/PushPin.jsx
 // Functions Components ReactJS
// ======================================================================================================

var PushPinIcon = function PushPinIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24;
  var variant = props.variant ? props.variant : 'outlined'; // outlined, filled
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, variant == "outlined" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z"
  }))), variant == "filled" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M16,9V4l1,0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v0 c0,0.55,0.45,1,1,1l1,0v5c0,1.66-1.34,3-3,3h0v2h5.97v7l1,1l1-1v-7H19v-2h0C17.34,12,16,10.66,16,9z",
    fillRule: "evenodd"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/QueueMusic.jsx
 // Functions Components ReactJS
// ======================================================================================================

var QueueMusicIcon = function QueueMusicIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M22,6h-5v8.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3V8h3V6z M15,6H3v2h12V6z M15,10H3v2h12 V10z M11,14H3v2h8V14z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/RadioButtonChecked.jsx
 // Functions Components ReactJS
// ======================================================================================================

var RadioButtonCheckedIcon = function RadioButtonCheckedIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/RadioButtonUnchecked.jsx
 // Functions Components ReactJS
// ======================================================================================================

var RadioButtonUncheckedIcon = function RadioButtonUncheckedIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Refresh.jsx
 // Functions Components ReactJS
// ======================================================================================================

var RefreshIcon = function RefreshIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Report.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ReportIcon = function ReportIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M11 7h2v7h-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/RestoreFromTrash.jsx
 // Functions Components ReactJS
// ======================================================================================================

var RestoreFromTrashIcon = function RestoreFromTrashIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2-5V9h8v10H8v-5zm2 4h4v-4h2l-4-4-4 4h2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Rocket.jsx
 // Functions Components ReactJS
// ======================================================================================================

var RocketIcon = function RocketIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M14,11c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14,12.1,14,11z M7.98,18.25c-0.29-0.9-0.57-1.94-0.76-3L6,16.07v2.98 L7.98,18.25z M12,2c0,0,5,2,5,11l2.11,1.41c0.56,0.37,0.89,1,0.89,1.66V22l-5-2H9l-5,2v-5.93c0-0.67,0.33-1.29,0.89-1.66L7,13 C7,4,12,2,12,2z M12,4.36c0,0-3,2.02-3,8.64c0,2.25,1,5,1,5h4c0,0,1-2.75,1-5C15,6.38,12,4.36,12,4.36z M18,19.05v-2.98 l-1.22-0.81c-0.19,1.05-0.47,2.1-0.76,3L18,19.05z"
  })))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Save.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SaveIcon = function SaveIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/School.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SchoolIcon = function SchoolIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Science.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ScienceIcon = function ScienceIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M13,11.33L18,18H6l5-6.67V6h2 M15.96,4H8.04C7.62,4,7.39,4.48,7.65,4.81L9,6.5v4.17L3.2,18.4C2.71,19.06,3.18,20,4,20h16 c0.82,0,1.29-0.94,0.8-1.6L15,10.67V6.5l1.35-1.69C16.61,4.48,16.38,4,15.96,4L15.96,4z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Search.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SearchIcon = function SearchIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Setting.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SettingIcon = function SettingIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/SkipNext.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SkipNextIcon = function SkipNextIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/SkipPrevious.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SkipPreviousIcon = function SkipPreviousIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/SmartButton.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SmartButtonIcon = function SmartButtonIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M22,9v6c0,1.1-0.9,2-2,2h-1l0-2h1V9H4v6h6v2H4c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h16C21.1,7,22,7.9,22,9z M14.5,19 l1.09-2.41L18,15.5l-2.41-1.09L14.5,12l-1.09,2.41L11,15.5l2.41,1.09L14.5,19z M17,14l0.62-1.38L19,12l-1.38-0.62L17,10l-0.62,1.38 L15,12l1.38,0.62L17,14z M14.5,19l1.09-2.41L18,15.5l-2.41-1.09L14.5,12l-1.09,2.41L11,15.5l2.41,1.09L14.5,19z M17,14l0.62-1.38 L19,12l-1.38-0.62L17,10l-0.62,1.38L15,12l1.38,0.62L17,14z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Source.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SourceIcon = function SourceIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18L4,18V6h5.17 l2,2H20V18z M18,12H6v-2h12V12z M14,16H6v-2h8V16z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/SportsEsports.jsx
 // Functions Components ReactJS
// ======================================================================================================

var SportsEsportsIcon = function SportsEsportsIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M21.58,16.09l-1.09-7.66C20.21,6.46,18.52,5,16.53,5H7.47C5.48,5,3.79,6.46,3.51,8.43l-1.09,7.66 C2.2,17.63,3.39,19,4.94,19h0c0.68,0,1.32-0.27,1.8-0.75L9,16h6l2.25,2.25c0.48,0.48,1.13,0.75,1.8,0.75h0 C20.61,19,21.8,17.63,21.58,16.09z M19.48,16.81C19.4,16.9,19.27,17,19.06,17c-0.15,0-0.29-0.06-0.39-0.16L15.83,14H8.17 l-2.84,2.84C5.23,16.94,5.09,17,4.94,17c-0.21,0-0.34-0.1-0.42-0.19c-0.08-0.09-0.16-0.23-0.13-0.44l1.09-7.66 C5.63,7.74,6.48,7,7.47,7h9.06c0.99,0,1.84,0.74,1.98,1.72l1.09,7.66C19.63,16.58,19.55,16.72,19.48,16.81z"
  }), /*#__PURE__*/react.createElement("polygon", {
    points: "9,8 8,8 8,10 6,10 6,11 8,11 8,13 9,13 9,11 11,11 11,10 9,10"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "17",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "15",
    cy: "9",
    r: "1"
  }))));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Storage.jsx
 // Functions Components ReactJS
// ======================================================================================================

var StorageIcon = function StorageIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Terrain.jsx
 // Functions Components ReactJS
// ======================================================================================================

var TerrainIcon = function TerrainIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/TextFields.jsx
 // Functions Components ReactJS
// ======================================================================================================

var TextFieldsIcon = function TextFieldsIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/TextSnippet.jsx
 // Functions Components ReactJS
// ======================================================================================================

var TextSnippetIcon = function TextSnippetIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M14.17,5L19,9.83V19H5V5L14.17,5L14.17,5 M14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83 c0-0.53-0.21-1.04-0.59-1.41l-4.83-4.83C15.21,3.21,14.7,3,14.17,3L14.17,3z M7,15h10v2H7V15z M7,11h10v2H7V11z M7,7h7v2H7V7z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ToggleOff.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ToggleOffIcon = function ToggleOffIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24;
  var variant = props.variant ? props.variant : 'outlined'; // outlined, filled
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, variant == "outlined" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
  })), variant == "filled" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ToggleOn.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ToggleOnIcon = function ToggleOnIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24;
  var variant = props.variant ? props.variant : 'outlined'; // outlined, filled
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, variant == "outlined" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
  })), variant == "filled" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
  })));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Tune.jsx
 // Functions Components ReactJS
// ======================================================================================================

var TuneIcon = function TuneIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/VerifiedUser.jsx
 // Functions Components ReactJS
// ======================================================================================================

var VerifiedUserIcon = function VerifiedUserIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ViewColumn.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ViewColumnIcon = function ViewColumnIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/ViewHeadline.jsx
 // Functions Components ReactJS
// ======================================================================================================

var ViewHeadlineIcon = function ViewHeadlineIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/VolumeMute.jsx
 // Functions Components ReactJS
// ======================================================================================================

var VolumeMuteIcon = function VolumeMuteIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/VolumeOff.jsx
 // Functions Components ReactJS
// ======================================================================================================

var VolumeOffIcon = function VolumeOffIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M4.34 2.93L2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/VolumeUp.jsx
 // Functions Components ReactJS
// ======================================================================================================

var VolumeUpIcon = function VolumeUpIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/WarningAmber.jsx
 // Functions Components ReactJS
// ======================================================================================================

var WarningAmberIcon = function WarningAmberIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/Whatshot.jsx
 // Functions Components ReactJS
// ======================================================================================================

var WhatshotIcon = function WhatshotIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2zM13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/WorkOutline.jsx
 // Functions Components ReactJS
// ======================================================================================================

var WorkOutlineIcon = function WorkOutlineIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/components/svg_icons/YoutubeSearchedFor.jsx
 // Functions Components ReactJS
// ======================================================================================================

var YoutubeSearchedForIcon = function YoutubeSearchedForIcon(props) {
  // From ... props
  var color = props.color ? props.color : '#000000';
  var height = props.height ? props.height : 24;
  var width = props.width ? props.width : 24; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: color
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"
  }));
};
// EXTERNAL MODULE: ../../nexus/react/ui/icon/Icon.css
var Icon = __webpack_require__(3244);
;// CONCATENATED MODULE: ../../nexus/react/ui/icon/Icon.jsx
























































































































 // Datas
// -------------------------------------------------------------------------------------------------------------

var ICON_KEYS_TO_FILES = {
  'material': {},
  'fontawesome': {}
};
var ICON_KEYS_TO_COMPONENT = {
  'access_alarms': AccessAlarmsIcon,
  'account_circle': AccountCircleIcon,
  'add': AddIcon,
  'album': AlbumIcon,
  'align_horizontal_center': AlignHorizontalCenterIcon,
  'align_vertical_center_black': AlignVerticalCenterIcon,
  'alternate_email': AlternateEmailIcon,
  'announcement': AnnouncementIcon,
  'api': ApiIcon,
  'apps': AppsIcon,
  'arrow_back': ArrowBackIcon,
  'arrow_drop_down': ArrowDropDownIcon,
  'arrow_forward': ArrowForwardIcon,
  'art_track': ArtTrackIcon,
  'audiotrack': AudiotrackIcon,
  'badge': BadgeIcon,
  'book': BookIcon,
  'bug_report': BugReportIcon,
  'call_to_action': CallToActionIcon,
  'card_giftcard': CardGiftCardIcon,
  'check_box': CheckBoxIcon,
  'check_box_outline_blank': CheckBoxOutlineBlankIcon,
  'check_circle': CheckCircleIcon,
  'clear': ClearIcon,
  'close': CloseIcon,
  'close_fullscreen': CloseFullscreenIcon,
  'code': CodeIcon,
  'dark_mode': DarkModeIcon,
  'date_range': DateRangeIcon,
  'delete': DeleteIcon,
  'description': DescriptionIcon,
  'dynamic_feed': DynamicFeedIcon,
  'edit_attributes': EditAttributesIcon,
  'email': EmailIcon,
  'expand_less': ExpandLessIcon,
  'expand_more': ExpandMoreIcon,
  'explore': ExploreIcon,
  'extension': ExtensionIcon,
  'face': FaceIcon,
  'feedback_black': FeedbackIcon,
  'file_download': FileDownloadIcon,
  'folder': FolderIcon,
  'folder_zip': FolderZipIcon,
  'forum': ForumIcon,
  'fullscreen': FullscreenIcon,
  'help': HelpIcon,
  'history': HistoryIcon,
  'history_edu': HistoryEduIcon,
  'home': HomeIcon,
  'hourglass_empty': HourglassEmptyIcon,
  'info': InfoIcon,
  'input': InputIcon,
  'inventory_2': Inventory2Icon,
  'launch': LaunchIcon,
  'light_mode': LightModeIcon,
  'link': LinkIcon,
  'list': ListIcon,
  'local_bar': LocalBarIcon,
  'lock': LockIcon,
  'lock_open': LockOpenIcon,
  'memory': MemoryIcon,
  'menu': MenuIcon,
  'menu_book': MenuBookIcon,
  'new_releases': NewReleasesIcon,
  'newspaper': NewspaperIcon,
  'no_accounts': NoAccountsIcon,
  'notifications': NotificationsIcon,
  'open_in_full': OpenInFullIcon,
  'palette': PaletteIcon,
  'pause_circle_filled': PauseCircleFilledIcon,
  'person': PersonIcon,
  'person_add': PersonAddIcon,
  'person_search': PersonSearchIcon,
  'picture_as_pdf': PictureAsPdfIcon,
  'play_circle_filled': PlayCircleFilledIcon,
  'playlist_play': PlaylistPlayIcon,
  'power_setting': PowerSettingIcon,
  'push_pin': PushPinIcon,
  'queue_music': QueueMusicIcon,
  'radio_button_checked': RadioButtonCheckedIcon,
  'radio_button_unchecked': RadioButtonUncheckedIcon,
  'refresh': RefreshIcon,
  'report': ReportIcon,
  'restore_from_trash': RestoreFromTrashIcon,
  'rocket': RocketIcon,
  'save': SaveIcon,
  'school': SchoolIcon,
  'science': ScienceIcon,
  'search': SearchIcon,
  'setting': SettingIcon,
  'skip_next': SkipNextIcon,
  'skip_previous': SkipPreviousIcon,
  'smart_button': SmartButtonIcon,
  'source': SourceIcon,
  'sports_esports': SportsEsportsIcon,
  'storage': StorageIcon,
  'terrain': TerrainIcon,
  'text_fields': TextFieldsIcon,
  'text_snippet': TextSnippetIcon,
  'toggle_off': ToggleOffIcon,
  'toggle_on': ToggleOnIcon,
  'tune': TuneIcon,
  'verified_user': VerifiedUserIcon,
  'view_column': ViewColumnIcon,
  'view_headline': ViewHeadlineIcon,
  'volume_mute': VolumeMuteIcon,
  'volume_off': VolumeOffIcon,
  'volume_up': VolumeUpIcon,
  'warning_amber': WarningAmberIcon,
  'whatshot': WhatshotIcon,
  'work_outline': WorkOutlineIcon,
  'youtube_searched_for': YoutubeSearchedForIcon
};
var ICON_SIZES = {
  'small': 18,
  'normal': 24,
  'large': 36,
  'helper': 220
}; // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Icon *****
// ****************

var TAG_Icon = function TAG_Icon() {};

var Icon_Icon = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... store

  var themeMode = theme.mode;
  var commonStaticUrl = app.commonStaticUrl; // From ... props

  var kind = props.kind ? props.kind : 'material'; // material, fontawesome, ...

  var name = props.name ? props.name : 'help';
  var variant = props.variant ? props.variant : 'outlined'; // outlined, filled

  var color = props.color ? props.color : theme.palette["default"].main;
  var size = props.size ? props.size : 'normal'; // small, normal, large

  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // ...

  var IconSvg = null;
  var iconUrl = ''; // Icône via un composant ?

  if (ICON_KEYS_TO_COMPONENT.hasOwnProperty(name)) {
    IconSvg = ICON_KEYS_TO_COMPONENT[name];
  } // Icône via un fichier ?


  if (!IconSvg && ICON_KEYS_TO_FILES[kind].hasOwnProperty(name)) {
    var iconFilename = ICON_KEYS_TO_FILES[kind][name];
    iconUrl = "".concat(commonStaticUrl, "/icons/").concat(kind, "/").concat(iconFilename);

    if (color == 'white') {
      iconUrl = iconUrl.replace('black', 'white');
    }
  } // Taille de l'icône


  if (!style.hasOwnProperty('width')) {
    style['width'] = "".concat(ICON_SIZES[size], "px");
    style['height'] = "".concat(ICON_SIZES[size], "px");
  } // Quelle couleur ?


  if (color != theme.palette["default"].main) {
    color = theme.getColorFromKey(color);
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-icon", name, className),
    style: style
  }, IconSvg && /*#__PURE__*/react.createElement(IconSvg, {
    color: color,
    width: ICON_SIZES[size],
    height: ICON_SIZES[size],
    variant: variant
  }), iconUrl && /*#__PURE__*/react.createElement("img", {
    src: iconUrl
  }));
});
// EXTERNAL MODULE: ../../nexus/react/ui/avatar/Avatar.css
var Avatar = __webpack_require__(3130);
;// CONCATENATED MODULE: ../../nexus/react/ui/avatar/Avatar.jsx





 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Avatar *****
// ******************

var TAG_Avatar = function TAG_Avatar() {};

var Avatar_Avatar = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var children = props.children;
  var color = props.color ? props.color : 'default'; // primary, secondary, transparent

  var size = props.size ? props.size : 'normal'; // small, normal, large, big

  var src = props.src ? props.src : '';
  var iconName = props.iconName;
  var iconVariant = props.iconVariant ? props.iconVariant : 'outlined'; // filled, outlined

  var iconSize = props.iconSize ? props.iconSize : 'normal';
  var iconColor = props.iconColor ? props.iconColor : 'default';
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // ...

  var hexColor = theme.getColorFromKey(color);
  var hexIconColor = theme.getColorFromKey(iconColor);

  if (!style.hasOwnProperty('backgroundColor')) {
    style['backgroundColor'] = hexColor;
  }

  if (style['backgroundColor'] != 'transparent') {
    iconColor = 'white';

    if (!style.hasOwnProperty('color')) {
      style['color'] = 'white';
    }
  } else {
    iconColor = hexIconColor;

    if (!style.hasOwnProperty('color')) {
      style['color'] = hexIconColor;
    }
  }

  var img = null;

  if (src) {
    img = /*#__PURE__*/react.createElement("img", {
      className: "nx-avatar-img",
      src: src
    });
  }

  var icon = null;

  if (iconName) {
    icon = /*#__PURE__*/react.createElement(Icon_Icon, {
      name: iconName,
      color: iconColor,
      size: iconSize,
      variant: iconVariant
    });
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-avatar", size),
    style: style
  }, children, img, icon);
});
// EXTERNAL MODULE: ../../nexus/react/ui/divider/Divider.css
var Divider = __webpack_require__(6236);
;// CONCATENATED MODULE: ../../nexus/react/ui/divider/Divider.jsx


 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Divider *****
// *******************

var TAG_Divider = function TAG_Divider() {};

var Divider_Divider = function Divider(props) {
  // From ... props
  var title = props.title ? props.title : '';
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-divider", {
      "with-title": title
    }),
    style: style
  }, title && /*#__PURE__*/react.createElement("div", {
    className: "nx-divider-title"
  }, title));
};
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(2400);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(4136);
;// CONCATENATED MODULE: ../../nexus/react/utils/Colors.jsx













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Objects
// ======================================================================================================
// ---
// Color
// ---
var Color = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Color(r, g, b) {
    _classCallCheck(this, Color);

    this.set(r, g, b);
  }

  _createClass(Color, [{
    key: "toString",
    value: function toString() {
      return "rgb(".concat(Math.round(this.r), ", ").concat(Math.round(this.g), ", ").concat(Math.round(this.b), ")");
    }
  }, {
    key: "set",
    value: function set(r, g, b) {
      this.r = this.clamp(r);
      this.g = this.clamp(g);
      this.b = this.clamp(b);
    }
  }, {
    key: "hueRotate",
    value: function hueRotate() {
      var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      angle = angle / 180 * Math.PI;
      var sin = Math.sin(angle);
      var cos = Math.cos(angle);
      this.multiply([0.213 + cos * 0.787 - sin * 0.213, 0.715 - cos * 0.715 - sin * 0.715, 0.072 - cos * 0.072 + sin * 0.928, 0.213 - cos * 0.213 + sin * 0.143, 0.715 + cos * 0.285 + sin * 0.140, 0.072 - cos * 0.072 - sin * 0.283, 0.213 - cos * 0.213 - sin * 0.787, 0.715 - cos * 0.715 + sin * 0.715, 0.072 + cos * 0.928 + sin * 0.072]);
    }
  }, {
    key: "grayscale",
    value: function grayscale() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.multiply([0.2126 + 0.7874 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 - 0.0722 * (1 - value), 0.2126 - 0.2126 * (1 - value), 0.7152 + 0.2848 * (1 - value), 0.0722 - 0.0722 * (1 - value), 0.2126 - 0.2126 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 + 0.9278 * (1 - value)]);
    }
  }, {
    key: "sepia",
    value: function sepia() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.multiply([0.393 + 0.607 * (1 - value), 0.769 - 0.769 * (1 - value), 0.189 - 0.189 * (1 - value), 0.349 - 0.349 * (1 - value), 0.686 + 0.314 * (1 - value), 0.168 - 0.168 * (1 - value), 0.272 - 0.272 * (1 - value), 0.534 - 0.534 * (1 - value), 0.131 + 0.869 * (1 - value)]);
    }
  }, {
    key: "saturate",
    value: function saturate() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.multiply([0.213 + 0.787 * value, 0.715 - 0.715 * value, 0.072 - 0.072 * value, 0.213 - 0.213 * value, 0.715 + 0.285 * value, 0.072 - 0.072 * value, 0.213 - 0.213 * value, 0.715 - 0.715 * value, 0.072 + 0.928 * value]);
    }
  }, {
    key: "multiply",
    value: function multiply(matrix) {
      var newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
      var newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
      var newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
      this.r = newR;
      this.g = newG;
      this.b = newB;
    }
  }, {
    key: "brightness",
    value: function brightness() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.linear(value);
    }
  }, {
    key: "contrast",
    value: function contrast() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.linear(value, -(0.5 * value) + 0.5);
    }
  }, {
    key: "linear",
    value: function linear() {
      var slope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var intercept = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.r = this.clamp(this.r * slope + intercept * 255);
      this.g = this.clamp(this.g * slope + intercept * 255);
      this.b = this.clamp(this.b * slope + intercept * 255);
    }
  }, {
    key: "invert",
    value: function invert() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
      this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
      this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
    }
  }, {
    key: "hsl",
    value: function hsl() {
      // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
      var r = this.r / 255;
      var g = this.g / 255;
      var b = this.b / 255;
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h,
          s,
          l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
            break;
        }

        h /= 6;
      }

      return {
        h: h * 100,
        s: s * 100,
        l: l * 100
      };
    }
  }, {
    key: "clamp",
    value: function clamp(value) {
      if (value > 255) {
        value = 255;
      } else if (value < 0) {
        value = 0;
      }

      return value;
    }
  }]);

  return Color;
}())); // ---
// Solver
// ---


var Solver = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Solver(target, baseColor) {
    _classCallCheck(this, Solver);

    this.target = target;
    this.targetHSL = target.hsl();
    this.reusedColor = new Color(0, 0, 0);
  }

  _createClass(Solver, [{
    key: "solve",
    value: function solve() {
      var result = this.solveNarrow(this.solveWide());
      return {
        values: result.values,
        loss: result.loss,
        filter: this.css(result.values)
      };
    }
  }, {
    key: "solveWide",
    value: function solveWide() {
      var A = 5;
      var c = 15;
      var a = [60, 180, 18000, 600, 1.2, 1.2];
      var best = {
        loss: Infinity
      };

      for (var i = 0; best.loss > 25 && i < 3; i++) {
        var initial = [50, 20, 3750, 50, 100, 100];
        var result = this.spsa(A, a, c, initial, 1000);

        if (result.loss < best.loss) {
          best = result;
        }
      }

      return best;
    }
  }, {
    key: "solveNarrow",
    value: function solveNarrow(wide) {
      var A = wide.loss;
      var c = 2;
      var A1 = A + 1;
      var a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
      return this.spsa(A, a, c, wide.values, 500);
    }
  }, {
    key: "spsa",
    value: function spsa(A, a, c, values, iters) {
      var alpha = 1;
      var gamma = 0.16666666666666666;
      var best = null;
      var bestLoss = Infinity;
      var deltas = new Array(6);
      var highArgs = new Array(6);
      var lowArgs = new Array(6);

      for (var k = 0; k < iters; k++) {
        var ck = c / Math.pow(k + 1, gamma);

        for (var i = 0; i < 6; i++) {
          deltas[i] = Math.random() > 0.5 ? 1 : -1;
          highArgs[i] = values[i] + ck * deltas[i];
          lowArgs[i] = values[i] - ck * deltas[i];
        }

        var lossDiff = this.loss(highArgs) - this.loss(lowArgs);

        for (var _i = 0; _i < 6; _i++) {
          var g = lossDiff / (2 * ck) * deltas[_i];
          var ak = a[_i] / Math.pow(A + k + 1, alpha);
          values[_i] = fix(values[_i] - ak * g, _i);
        }

        var loss = this.loss(values);

        if (loss < bestLoss) {
          best = values.slice(0);
          bestLoss = loss;
        }
      }

      return {
        values: best,
        loss: bestLoss
      };

      function fix(value, idx) {
        var max = 100;

        if (idx === 2
        /* saturate */
        ) {
          max = 7500;
        } else if (idx === 4
        /* brightness */
        || idx === 5
        /* contrast */
        ) {
          max = 200;
        }

        if (idx === 3
        /* hue-rotate */
        ) {
          if (value > max) {
            value %= max;
          } else if (value < 0) {
            value = max + value % max;
          }
        } else if (value < 0) {
          value = 0;
        } else if (value > max) {
          value = max;
        }

        return value;
      }
    }
  }, {
    key: "loss",
    value: function loss(filters) {
      // Argument is array of percentages.
      var color = this.reusedColor;
      color.set(0, 0, 0);
      color.invert(filters[0] / 100);
      color.sepia(filters[1] / 100);
      color.saturate(filters[2] / 100);
      color.hueRotate(filters[3] * 3.6);
      color.brightness(filters[4] / 100);
      color.contrast(filters[5] / 100);
      var colorHSL = color.hsl();
      return Math.abs(color.r - this.target.r) + Math.abs(color.g - this.target.g) + Math.abs(color.b - this.target.b) + Math.abs(colorHSL.h - this.targetHSL.h) + Math.abs(colorHSL.s - this.targetHSL.s) + Math.abs(colorHSL.l - this.targetHSL.l);
    }
  }, {
    key: "css",
    value: function css(filters) {
      function fmt(idx) {
        var multiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return Math.round(filters[idx] * multiplier);
      } // return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%);`;


      return "invert(".concat(fmt(0), "%) sepia(").concat(fmt(1), "%) saturate(").concat(fmt(2), "%) hue-rotate(").concat(fmt(3, 3.6), "deg) brightness(").concat(fmt(4), "%) contrast(").concat(fmt(5), "%)");
    }
  }]);

  return Solver;
}())); // Functions
// ======================================================================================================


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
var hexToRgb = function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};
var hexToCssFilter = function hexToCssFilter(hex) {
  var rgb = hexToRgb(hex);

  if (rgb.length !== 3) {
    return '';
  }

  var color = new Color(rgb[0], rgb[1], rgb[2]);
  var solver = new Solver(color);
  var result = solver.solve();
  return result.filter;
};
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array-buffer.slice.js
var es_array_buffer_slice = __webpack_require__(2739);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__(2994);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.copy-within.js
var es_typed_array_copy_within = __webpack_require__(3977);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.every.js
var es_typed_array_every = __webpack_require__(6373);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.fill.js
var es_typed_array_fill = __webpack_require__(6242);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.filter.js
var es_typed_array_filter = __webpack_require__(4964);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.find.js
var es_typed_array_find = __webpack_require__(6492);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.find-index.js
var es_typed_array_find_index = __webpack_require__(3687);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.for-each.js
var es_typed_array_for_each = __webpack_require__(1026);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.includes.js
var es_typed_array_includes = __webpack_require__(3230);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.index-of.js
var es_typed_array_index_of = __webpack_require__(3883);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.iterator.js
var es_typed_array_iterator = __webpack_require__(8046);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.join.js
var es_typed_array_join = __webpack_require__(5180);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.last-index-of.js
var es_typed_array_last_index_of = __webpack_require__(6056);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.map.js
var es_typed_array_map = __webpack_require__(183);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.reduce.js
var es_typed_array_reduce = __webpack_require__(5970);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.reduce-right.js
var es_typed_array_reduce_right = __webpack_require__(4847);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.reverse.js
var es_typed_array_reverse = __webpack_require__(9944);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__(247);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.slice.js
var es_typed_array_slice = __webpack_require__(7528);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.some.js
var es_typed_array_some = __webpack_require__(3996);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__(9494);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.subarray.js
var es_typed_array_subarray = __webpack_require__(4134);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.to-locale-string.js
var es_typed_array_to_locale_string = __webpack_require__(9041);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.typed-array.to-string.js
var es_typed_array_to_string = __webpack_require__(618);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(1691);
;// CONCATENATED MODULE: ../../nexus/react/utils/Datas.jsx
function Datas_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Datas_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Datas_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Datas_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Datas_arrayLikeToArray(o, minLen); }

function Datas_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










































// Datas
// -------------------------------------------------------------------------------------------------------------
var ileDeFrance = (/* unused pure expression or super */ null && (['75', '77', '78', '91', '92', '93', '94', '95'])); // Functions
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
function encodeBase64(str) {
  var buff = new Buffer(str);
  var base64data = buff.toString('base64');
  return base64data;
}
function decodeBase64(str) {
  var buff = new Buffer(str, 'base64');
  var decodedData = buff.toString('ascii');
  return decodedData;
}
function extendArray(array_dest, array_src, get_a_new_one) {
  // Ajoute les éléments d'une liste dans une autre liste
  // ---
  if (get_a_new_one == true) {
    var new_array = copyObj(array_dest);
  } else {
    var new_array = array_dest;
  }

  for (var idx_item in array_src) {
    new_array.push(array_src[idx_item]);
  }

  return new_array;
}
function sortObjects(objects, sortField, sortDirection) {
  sortDirection = sortDirection ? sortDirection : 'asc'; // Tri croissant

  if (sortDirection == 'asc') {
    objects.sort(function (a, b) {
      if (a[sortField] > b[sortField]) return 1;
      if (a[sortField] < b[sortField]) return -1;
      return 0;
    });
  } // Tri décroissant


  if (sortDirection == 'desc') {
    objects.sort(function (a, b) {
      if (a[sortField] < b[sortField]) return 1;
      if (a[sortField] > b[sortField]) return -1;
      return 0;
    });
  }

  return objects;
}
var applyValue = function applyValue(node, path, value) {
  // Enregistrement d'une valeur à partir d'un objet et d'un chemin
  // ---
  var saveTarget = node;

  for (var idx_path in path) {
    var target = path[idx_path];

    if (idx_path == path.length - 1) {
      saveTarget[target] = value;
    } else {
      if (!saveTarget.hasOwnProperty(target)) {
        saveTarget[target] = {};
      }

      saveTarget = saveTarget[target];
    }
  }
};
var convertToJSONPath = function convertToJSONPath(path) {
  // Convertion d'un chemin sous forme de liste en JSON Path pour mobx-state-tree
  // ---
  // https://mobx-state-tree.js.org/API/#applypatch
  // http://jsonpatch.com
  var jsonPath = '';

  var _iterator = Datas_createForOfIteratorHelper(path),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pathItem = _step.value;
      jsonPath = "".concat(jsonPath, "/").concat(pathItem);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return jsonPath;
};
// EXTERNAL MODULE: ../../nexus/react/ui/button/Button.css
var Button = __webpack_require__(2181);
;// CONCATENATED MODULE: ../../nexus/react/ui/button/Button.jsx













function Button_slicedToArray(arr, i) { return Button_arrayWithHoles(arr) || Button_iterableToArrayLimit(arr, i) || Button_unsupportedIterableToArray(arr, i) || Button_nonIterableRest(); }

function Button_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Button_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Button_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Button_arrayLikeToArray(o, minLen); }

function Button_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Button_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Button_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** IconButton *****
// **********************

var TAG_IconButton = function TAG_IconButton() {};

var IconButton = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... state

  var _React$useState = react.useState(false),
      _React$useState2 = Button_slicedToArray(_React$useState, 2),
      hover = _React$useState2[0],
      setHover = _React$useState2[1]; // From ... props


  var title = props.title ? props.title : '';
  var size = props.size ? props.size : 'normal'; // normal, small

  var disabled = props.disabled == true ? true : false;
  var iconName = props.iconName;
  var iconVariant = props.iconVariant ? props.iconVariant : "outlined"; // filled, outlined

  var children = props.children;
  var color = props.color ? props.color : 'default'; // primary, secondary, severityKey, custom, typography

  var className = props.className ? props.className : '';
  var style = props.style ? copyObj(props.style) : {};
  var onClick = props.onClick; // ...

  var iconColor = theme.getColorFromKey(color);
  var content = children;

  if (!children && iconName) {
    content = /*#__PURE__*/react.createElement(Icon_Icon, {
      name: iconName,
      variant: iconVariant,
      color: iconColor
    });
  }

  if (hover) {
    style['backgroundColor'] = hexToRgbA(iconColor, 0.1);
  } // Events
  // ==================================================================================================


  var handleMouseEnter = function handleMouseEnter(evt) {
    setHover(true);
  };

  var handleMouseLeave = function handleMouseLeave(evt) {
    setHover(false);
  }; // -


  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick(e);
    }
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-icon-button", size, color, {
      "disabled": disabled
    }, className),
    title: title,
    style: style,
    onClick: function onClick(e) {
      return handleClick(e);
    },
    onMouseEnter: function onMouseEnter(e) {
      return handleMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return handleMouseLeave(e);
    }
  }, content);
}); // ***** Button *****
// ******************

var TAG_Button = function TAG_Button() {};

var Button_Button = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... state

  var _React$useState3 = react.useState(false),
      _React$useState4 = Button_slicedToArray(_React$useState3, 2),
      hover = _React$useState4[0],
      setHover = _React$useState4[1]; // From ... props


  var id = props.id ? props.id : '';
  var children = props.children;
  var variant = props.variant ? props.variant : 'flat'; // default, contained, outlined

  var color = props.color ? props.color : 'default'; // default, primary, secondary

  var href = props.href ? props.href : '';
  var target = props.target ? props.target : '';
  var disabled = props.disabled == true ? true : false;
  var startAdornment = props.startAdornment ? props.startAdornment : '';
  var startAdornmentStyle = props.startAdornmentStyle ? copyObj(props.startAdornmentStyle) : {};
  var endAdornment = props.endAdornment ? props.endAdornment : '';
  var endAdornmentStyle = props.endAdornmentStyle ? copyObj(props.endAdornmentStyle) : {};
  var onClick = props.onClick;
  var className = props.className ? props.className : '';
  var style = props.style ? copyObj(props.style) : {}; // ...

  var hexColor = theme.getContrastedColorFromKey(color);
  var textColor = theme.getTextColorFromKey(color);
  var startAdornmentColor = null;
  var endAdornmentColor = null;

  if (!style.hasOwnProperty('color')) {
    style['color'] = disabled ? "rgba(0, 0, 0, 0.26)" : textColor;
  }

  if (!style.hasOwnProperty('backgroundColor')) {
    style['backgroundColor'] = hover ? hexToRgbA(hexColor, 0.1) : 'transparent';
  }

  style['border'] = '1px solid transparent';

  if (variant == 'outlined') {
    style['borderColor'] = hexToRgbA(hexColor, 0.8);

    if (startAdornment) {
      startAdornmentColor = textColor;
    }

    if (endAdornment) {
      endAdornmentColor = textColor;
    }

    if (disabled) {
      style['borderColor'] = "rgba(0, 0, 0, 0.12)";
    }
  }

  if (variant == 'contained') {
    style['color'] = disabled ? "rgba(0, 0, 0, 0.26)" : 'white';
    style['backgroundColor'] = hover ? hexColor : hexToRgbA(hexColor, 0.8);

    if (disabled) {
      style['backgroundColor'] = "rgba(0, 0, 0, 0.12)";
    }
  } // Events
  // ==================================================================================================


  var handleMouseEnter = function handleMouseEnter(evt) {
    setHover(true);
  };

  var handleMouseLeave = function handleMouseLeave(evt) {
    setHover(false);
  };

  var handleClick = function handleClick(evt) {
    if (onClick) {
      onClick(evt);
    }
  }; // Render
  // ==================================================================================================


  var buttonContent = null;
  var button = /*#__PURE__*/react.createElement("div", {
    id: id,
    className: (0,clsx_m/* default */.Z)("nx-button", variant, className, {
      "hover": hover
    }, {
      "disabled": disabled
    }),
    style: style,
    onMouseEnter: function onMouseEnter(e) {
      return handleMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return handleMouseLeave(e);
    },
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, startAdornment && /*#__PURE__*/react.createElement("div", {
    className: "nx-button-start-adornment",
    style: startAdornmentStyle
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: startAdornment,
    color: style['color']
  })), /*#__PURE__*/react.createElement("div", {
    "data-flex": "1"
  }, children), endAdornment && /*#__PURE__*/react.createElement("div", {
    className: "nx-button-end-adornment",
    style: endAdornmentStyle
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: endAdornment,
    color: style['color']
  })));

  if (href) {
    buttonContent = /*#__PURE__*/react.createElement("a", {
      className: "nx-button-link",
      href: href,
      target: target
    }, button);
  } else {
    buttonContent = button;
  }

  return buttonContent;
});
// EXTERNAL MODULE: ../../nexus/react/layout/portal/Portal.css
var Portal = __webpack_require__(3114);
;// CONCATENATED MODULE: ../../nexus/react/layout/portal/Portal.jsx











 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** PortalDivider *****
// *************************

var TAG_PortalDivider = function TAG_PortalDivider() {};

var PortalDivider = (0,es/* observer */.Pi)(function (props) {
  // From ... props
  var title = props.title ? props.title : '';
  var children = props.children ? props.children : null; // ...

  var dividerTitle = title ? title : children; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(Divider_Divider, {
    title: dividerTitle,
    style: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  });
}); // ***** PortalLinks *****
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

  var serviceInfo = services.smap.get(appKey); // Render
  // ==================================================================================================

  var portalLinkContent = null;

  if (serviceInfo) {
    var externalUrl = serviceInfo.getExternalUrl();
    var shortcutIconUrl = serviceInfo.shortcutIconUrl;
    var name = serviceInfo.name;
    portalLinkContent = /*#__PURE__*/react.createElement("a", {
      className: "nx-portal-shortcut",
      href: externalUrl,
      title: !expanded ? name : ''
    }, /*#__PURE__*/react.createElement("img", {
      className: "nx-portal-shortcut-icon",
      src: shortcutIconUrl
    }), /*#__PURE__*/react.createElement("div", {
      className: "nx-portal-shortcut-label"
    }, name));
  }

  return portalLinkContent;
}); // ***** PortalGrid *****
// **********************

var TAG_PortalGrid = function TAG_PortalGrid() {};

var PortalGrid = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var portal = app.portal; // From ... props

  var showPin = props.showPin == true ? true : false; // From ... store

  var breakPoint650 = app.breakPoint650;
  var expanded = portal.expanded;
  var staticMode = app.staticMode; // Events
  // ==================================================================================================

  var handlePinClick = function handlePinClick() {
    portal.tooglePinned();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-area"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-shortcuts-wrapper"
  }, /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "nexorium"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "nexora"
  })), /*#__PURE__*/react.createElement(PortalDivider, {
    title: expanded ? "Applications" : null
  }), /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-shortcuts-wrapper"
  }, /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "gramophone"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "vgm"
  })), !staticMode && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(PortalDivider, {
    title: expanded ? "Support" : null
  }), /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-shortcuts-wrapper"
  }, /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "cerberus"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "ladybug"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "herald"
  })))), !breakPoint650 && showPin && /*#__PURE__*/react.createElement(IconButton, {
    iconName: "push_pin",
    onClick: function onClick() {
      return handlePinClick();
    }
  }));
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

  var children = props.children; // Events
  // ==================================================================================================

  var handleClose = function handleClose() {
    portal.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(react.Fragment, null, (breakPoint650 || !pinned) && open && /*#__PURE__*/react.createElement(Drawer_Drawer, {
    position: "right",
    callbackClose: handleClose
  }, /*#__PURE__*/react.createElement(PortalGrid, {
    showPin: true
  })), !breakPoint650 && pinned && /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-portal", {
      "expanded": expanded
    }, {
      "retracted": !expanded
    })
  }, /*#__PURE__*/react.createElement(PortalGrid, {
    showPin: true
  })));
});
;// CONCATENATED MODULE: ../../nexus/react/ui/Styles.jsx
function Styles_slicedToArray(arr, i) { return Styles_arrayWithHoles(arr) || Styles_iterableToArrayLimit(arr, i) || Styles_unsupportedIterableToArray(arr, i) || Styles_nonIterableRest(); }

function Styles_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Styles_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Styles_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Styles_arrayLikeToArray(o, minLen); }

function Styles_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Styles_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Styles_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function Styles_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Styles_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Styles_createClass(Constructor, protoProps, staticProps) { if (protoProps) Styles_defineProperties(Constructor.prototype, protoProps); if (staticProps) Styles_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

 // Objects
// ======================================================================================================

var Severity = /*#__PURE__*/function () {
  function Severity(severityKey) {
    Styles_classCallCheck(this, Severity);

    this.key = severityKey;
    this.color = "";
    this.text_color = "";
    this.contrasted = "";
    this.icon_name = "";
    this.updateFromDef(this.definition);
  } // Updates
  // -


  Styles_createClass(Severity, [{
    key: "updateFromDef",
    value: function updateFromDef(def) {
      this.color = def.color;
      this.text_color = def.text_color;
      this.contrasted = def.contrasted;
      this.icon_name = def.icon_name;
    } // Properties
    // -

  }, {
    key: "definition",
    get: function get() {
      return SEVERITIES.getDef(this.key);
    } // -

  }, {
    key: "backgroundColor",
    get: function get() {
      return hexToRgbA(this.color, 0.1);
    }
  }]);

  return Severity;
}(); // Datas
// ======================================================================================================


var SEVERITIES = {
  'default': {
    color: '#bdbdbd',
    text_color: '#000000',
    contrasted: '#424242',
    icon_name: 'info'
  },
  'help': {
    color: '#bdbdbd',
    text_color: '#000000',
    contrasted: '#424242',
    icon_name: 'help'
  },
  'success': {
    color: '#81c784',
    text_color: '#1E4620',
    contrasted: '#43a047',
    icon_name: 'check_circle'
  },
  'warning': {
    color: '#ffb74d',
    text_color: '#663C00',
    contrasted: '#ffa000',
    icon_name: 'warning_amber'
  },
  'error': {
    color: '#e57373',
    text_color: '#5F2120',
    contrasted: '#d32f2f',
    icon_name: 'report'
  },
  'info': {
    color: '#64b5f6',
    text_color: '#014361',
    contrasted: '#1976d2',
    icon_name: 'info'
  },
  'hot': {
    color: '#e91e63',
    text_color: '#e91e63',
    contrasted: '#e91e63',
    icon_name: 'whatshot'
  },
  // -
  getDef: function getDef(severityKey) {
    if (SEVERITIES.hasOwnProperty(severityKey)) {
      return SEVERITIES[severityKey];
    }

    return SEVERITIES['default'];
  },
  get: function get(severityKey) {
    var severity = new Severity(severityKey);
    return severity;
  }
};
var SEVERITY_KEYS = [];
var SEVERITY_COLORS = {};
var SEVERITY_COLORS_CONTRASTED = {};
var SEVERITY_BACKGROUNDS = {};
var SEVERITY_ICONS_NAMES = {};

for (var _i = 0, _Object$entries = Object.entries(SEVERITIES); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = Styles_slicedToArray(_Object$entries[_i], 2),
      severityKey = _Object$entries$_i[0],
      severityDef = _Object$entries$_i[1];

  SEVERITY_KEYS.push(severityKey);
  SEVERITY_COLORS[severityKey] = severityDef.color;
  SEVERITY_COLORS_CONTRASTED[severityKey] = severityDef.contrasted;
  SEVERITY_BACKGROUNDS[severityKey] = severityDef.background;
  SEVERITY_ICONS_NAMES[severityKey] = severityDef.icon_name;
}
// EXTERNAL MODULE: ../../nexus/react/ui/helper/Helper.css
var Helper = __webpack_require__(2742);
;// CONCATENATED MODULE: ../../nexus/react/ui/helper/Helper.jsx





 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** HelperParaphTitle *****
// *****************************

var TAG_HelperParaphTitle = function TAG_HelperParaphTitle() {};

var HelperParaphTitle = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var color = props.color ? props.color : 'default'; // default, primary, secondary

  var severity = props.severity;
  var children = props.children;
  var style = props.style ? props.style : {}; // ...

  if (color) {
    style['color'] = color;
  }

  if (color == 'primary') {
    style['color'] = theme.palette.primary.main;
  }

  if (color == 'secondary') {
    style['color'] = theme.palette.secondary.main;
  }

  if (severity && SEVERITY_COLORS_CONTRASTED.hasOwnProperty(severity)) {
    style['color'] = SEVERITY_COLORS_CONTRASTED[severity];
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: "nx-helper-paraph-title",
    style: style
  }, children);
}); // ***** HelperParaph *****
// ************************

var TAG_HelperParaph = function TAG_HelperParaph() {};

var HelperParaph = (0,es/* observer */.Pi)(function (props) {
  // From ... props
  var severity = props.severity;
  var children = props.children;
  var style = props.style ? props.style : {}; // ...

  if (severity && SEVERITY_COLORS.hasOwnProperty(severity)) {
    style['color'] = SEVERITY_COLORS[severity];
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: "nx-helper-paraph",
    style: style
  }, children);
}); // ***** HelperImg *****
// *********************

var TAG_HelperImg = function TAG_HelperImg() {};

var HelperImg = function HelperImg(props) {
  // From ... props
  var src = props.src;
  var children = props.children;
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-helper-img",
    style: style
  }, /*#__PURE__*/react.createElement("img", {
    src: src
  }));
}; // ***** Helper *****
// ******************

var TAG_Helper = function TAG_Helper() {};

var Helper_Helper = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... store

  var initialized = app.initialized;
  var themeMode = theme.mode; // From ... props

  var icon = props.icon ? props.icon : null;
  var iconName = props.iconName ? props.iconName : '';
  var title = props.title ? props.title : '';
  var subtitle = props.subtitle ? props.subtitle : '';
  var severity = props.severity;
  var show = props.show != undefined ? props.show : !initialized;
  var content = props.children;
  var inFlux = props.inFlux == true ? true : false;
  var style = props.style ? props.style : {};
  var styleContent = props.styleContent ? props.styleContent : {}; // Render
  // ==================================================================================================

  var titleColor = themeMode == 'light' ? 'black' : 'white';

  if (severity && severity != 'default' && SEVERITY_COLORS_CONTRASTED.hasOwnProperty(severity)) {
    titleColor = SEVERITY_COLORS_CONTRASTED[severity];
  }

  var subtitleColor = 'gray';
  var subtitleIcon = null;

  if (severity && severity != 'default' && SEVERITY_COLORS.hasOwnProperty(severity)) {
    subtitleColor = SEVERITY_COLORS[severity];
    subtitleIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
      name: SEVERITY_ICONS_NAMES[severity],
      color: subtitleColor,
      style: {
        marginBottom: '5px'
      }
    });
  } // -


  if (!icon && iconName) {
    icon = /*#__PURE__*/react.createElement(Icon_Icon, {
      size: "helper",
      name: iconName,
      color: themeMode == 'light' ? "#E0E0E0" : "#5c5c5c"
    });
  }

  var helper = null;

  if (show) {
    helper = /*#__PURE__*/react.createElement("div", {
      className: (0,clsx_m/* default */.Z)("nx-helper", {
        "in-flux": inFlux
      })
    }, /*#__PURE__*/react.createElement("div", {
      className: "nx-helper-content",
      style: style
    }, icon, title && /*#__PURE__*/react.createElement("div", {
      className: "nx-helper-title",
      style: {
        color: titleColor
      }
    }, title), subtitle && /*#__PURE__*/react.createElement("div", {
      className: "nx-helper-subtitle-wrapper"
    }, subtitleIcon, /*#__PURE__*/react.createElement("div", {
      className: "nx-helper-subtitle",
      style: {
        color: subtitleColor
      }
    }, subtitle)), content && /*#__PURE__*/react.createElement("div", {
      className: "nx-helper-content-wrapper",
      style: styleContent
    }, content)));
  }

  return helper;
});
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(6542);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(491);
// EXTERNAL MODULE: ../../nexus/react/ui/badge/Badge.css
var Badge = __webpack_require__(8424);
;// CONCATENATED MODULE: ../../nexus/react/ui/badge/Badge.jsx




 // Functions Components ReactJS
// ======================================================================================================
// ***** Badge *****
// *****************

var TAG_Badge = function TAG_Badge() {};

var Badge_Badge = function Badge(props) {
  // From ... props
  var content = props.content ? props.content : '';
  var invisible = props.invisible == true ? true : false;
  var severity = props.severity ? props.severity : 'default';
  var children = props.children; // Render
  // ==================================================================================================
  // TODO

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-badge-wrapper"
  }, children);
};
// EXTERNAL MODULE: ../../nexus/react/components/cards/NavCard.css
var NavCard = __webpack_require__(2865);
;// CONCATENATED MODULE: ../../nexus/react/components/cards/NavCard.jsx













function NavCard_slicedToArray(arr, i) { return NavCard_arrayWithHoles(arr) || NavCard_iterableToArrayLimit(arr, i) || NavCard_unsupportedIterableToArray(arr, i) || NavCard_nonIterableRest(); }

function NavCard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NavCard_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NavCard_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NavCard_arrayLikeToArray(o, minLen); }

function NavCard_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NavCard_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function NavCard_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** NavCard *****
// *******************

var TAG_NavCard = function TAG_NavCard() {};

var NavCard_NavCard = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... state

  var _React$useState = react.useState(false),
      _React$useState2 = NavCard_slicedToArray(_React$useState, 2),
      hover = _React$useState2[0],
      setHover = _React$useState2[1]; // From ... store


  var themeMode = theme.mode; // From ... props

  var icon = props.icon ? props.icon : null;
  var label = props.label ? props.label : null;
  var faded = props.faded ? props.faded : false;
  var disabled = props.disabled ? props.disabled : false;
  var variant = props.variant ? props.variant : 'grid'; // grid, list

  var badgeContent = props.badgeContent ? props.badgeContent : '';
  var badgeInvisible = props.badgeInvisible != undefined ? props.badgeInvisible : true;
  var badgeSeverity = props.badgeSeverity ? props.badgeSeverity : 'neutral';
  var content = props.children;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  var onClick = props.onClick; // ...

  var color = themeMode == 'light' ? '#616161' : '#c6c6c6';

  if (hover) {
    color = theme.palette.primary.main;
  } // Events
  // ==================================================================================================


  var handleMouseEnter = function handleMouseEnter(evt) {
    if (!disabled) {
      setHover(true);
    }
  };

  var handleMouseLeave = function handleMouseLeave(evt) {
    setHover(false);
  };

  var handleClick = function handleClick() {
    if (onClick) {
      onClick();
    }
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(Badge_Badge, {
    content: badgeContent,
    invisible: badgeInvisible,
    severity: badgeSeverity
  }, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-nav-card", {
      "faded": faded
    }, {
      "disabled": disabled
    }, {
      "clickable": onClick
    }, {
      "hover": hover
    }, variant),
    style: style,
    onMouseEnter: function onMouseEnter(e) {
      return handleMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return handleMouseLeave(e);
    },
    onClick: function onClick() {
      return handleClick();
    }
  }, icon && /*#__PURE__*/react.createElement("div", {
    className: "nx-nav-card-icon"
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: icon,
    color: color,
    size: "large"
  })), content && /*#__PURE__*/react.createElement("div", {
    className: "nx-nav-card-content"
  }, content), label && /*#__PURE__*/react.createElement("div", {
    className: "nx-nav-card-label",
    style: {
      color: color
    }
  }, label)));
});
// EXTERNAL MODULE: ../../nexus/react/contexts/home/Home.css
var Home = __webpack_require__(2037);
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

  var breakPoint650 = app.breakPoint650;
  var homeContext = app.homeContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(homeContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  var homeMenuItemContent = null;

  if (breakPoint650) {
    homeMenuItemContent = /*#__PURE__*/react.createElement(MenuItem, {
      iconName: "home",
      label: "Accueil",
      activeContexts: [homeContext],
      callbackClick: handleMenuItemClick
    });
  }

  return homeMenuItemContent;
});
// EXTERNAL MODULE: ../../nexus/react/forms/heading/Heading.css
var Heading = __webpack_require__(4297);
;// CONCATENATED MODULE: ../../nexus/react/forms/heading/Heading.jsx





 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Heading *****
// *******************

var TAG_Heading = function TAG_Heading() {};

var Heading_Heading = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var variant = props.variant ? props.variant : 'outlined'; // outlined, contained, paper

  var children = props.children;
  var align = props.align ? props.align : 'left'; // left, center, right

  var uppercase = props.uppercase == true ? true : false;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // ...

  if (!style.hasOwnProperty('textAlign')) {
    style['textAlign'] = align;
  }

  if (!style.hasOwnProperty('textTransform') && uppercase) {
    style['textTransform'] = 'uppercase';
  }

  if (!style.hasOwnProperty('backgroundColor') && variant == 'contained') {
    style['backgroundColor'] = SEVERITY_COLORS["default"];
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-heading", variant, className),
    style: style
  }, children);
});
// EXTERNAL MODULE: ../../nexus/react/layout/section/Section.css
var Section = __webpack_require__(8461);
;// CONCATENATED MODULE: ../../nexus/react/layout/section/Section.jsx




 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Section *****
// *******************

var TAG_Section = function TAG_Section() {};

var Section_Section = (0,es/* observer */.Pi)(function (props) {
  // From ... props
  var icon = props.icon ? props.icon : null;
  var title = props.title ? props.title : '';
  var right = props.right;
  var children = props.children;
  var buttons = props.buttons;
  var buttonsPosition = props.buttonsPosition ? props.buttonsPosition : 'right'; // left, right, center, stretch

  var buttonsResponsive = props.buttonsResponsive == true ? true : false;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-section",
    style: style
  }, (icon || title || right) && /*#__PURE__*/react.createElement("div", {
    className: "nx-section-header"
  }, icon && /*#__PURE__*/react.createElement("div", {
    className: "nx-section-icon"
  }, icon), title && /*#__PURE__*/react.createElement("div", {
    className: "nx-section-header-title"
  }, title)), children && /*#__PURE__*/react.createElement("div", {
    className: "nx-section-content"
  }, children), buttons && /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-section-buttonset", "h-col-small", {
      "responsive-vertical": buttonsResponsive
    }, {
      "responsive-align-stretch": buttonsResponsive
    })
  }, buttons));
});
// EXTERNAL MODULE: ../../nexus/react/layout/row/Row.css
var Row = __webpack_require__(3447);
;// CONCATENATED MODULE: ../../nexus/react/layout/row/Row.jsx


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** Row *****
// ***************

var TAG_Row = function TAG_Row() {};

var Row_Row = function Row(props) {
  // From ... props
  var children = props.children;
  var responsive = props.responsive == false ? false : true;
  var spacing = props.spacing != null ? props.spacing : 'small'; //  '', small, medium, large, xlarge

  var align = props.align ? props.align : 'start'; // center, start, end, stretch

  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  var marginBottom = props.marginBottom ? props.marginBottom : ''; // small, normal, large, big
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-row", {
      "h-col": spacing == ''
    }, _defineProperty({}, "h-col-".concat(spacing), spacing != ''), "flex-align-".concat(align), {
      "responsive-vertical": responsive
    }, {
      "responsive-align-stretch": responsive
    }, _defineProperty({}, "margin-bottom-".concat(marginBottom), marginBottom), className),
    style: style
  }, children);
};
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/input/PlaygroundButton.css
var PlaygroundButton = __webpack_require__(6431);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/input/PlaygroundButton.jsx










 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionButton *****
// *******************************

var TAG_RenderSectionButton = function TAG_RenderSectionButton() {};

var RenderSectionButton = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '15px'
    }
  }, "Contained"), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-contained-default",
    variant: "contained",
    disabled: false
  }, "Default"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-contained-primary",
    variant: "contained",
    color: "primary",
    disabled: false
  }, "Primary"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-contained-secondary",
    variant: "contained",
    color: "secondary",
    disabled: false
  }, "Secondary"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-contained-disabled",
    variant: "contained",
    color: "primary",
    disabled: true
  }, "Disabled")), /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '15px'
    }
  }, "Outlined"), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-outlined-default",
    variant: "outlined",
    disabled: false
  }, "Default"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-outlined-primary",
    variant: "outlined",
    color: "primary",
    disabled: false
  }, "Primary"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-outlined-secondary",
    variant: "outlined",
    color: "secondary",
    disabled: false
  }, "Secondary"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-outlined-disabled",
    variant: "outlined",
    color: "primary",
    disabled: true
  }, "Disabled")), /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '15px'
    }
  }, "Naked"), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-naked-default",
    disabled: false
  }, "Default"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-naked-primary",
    color: "primary",
    disabled: false
  }, "Primary"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-naked-secondary",
    color: "secondary",
    disabled: false
  }, "Secondary"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-naked-disabled",
    color: "primary",
    disabled: true
  }, "Disabled")), /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '15px'
    }
  }, "Adornments"), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-start-adornment",
    color: "primary",
    startAdornment: "arrow_forward"
  }, "Start adornment"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-end-adornment",
    color: "secondary",
    endAdornment: "arrow_back"
  }, "End adornment"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-both-adornment",
    startAdornment: "arrow_forward",
    endAdornment: "arrow_back"
  }, "Both adornments")), /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '15px'
    }
  }, "Icon"), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(IconButton, {
    key: "btn-icon-default",
    iconName: "add",
    className: "flex-0"
  }), /*#__PURE__*/react.createElement(IconButton, {
    key: "btn-icon-primary",
    iconName: "add",
    color: "primary",
    className: "flex-0"
  }), /*#__PURE__*/react.createElement(IconButton, {
    key: "btn-icon-secondary",
    iconName: "add",
    color: "secondary",
    className: "flex-0"
  }), /*#__PURE__*/react.createElement(IconButton, {
    key: "btn-icon-disabled",
    iconName: "add",
    className: "flex-0",
    disabled: true
  }))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.number.is-nan.js
var es_number_is_nan = __webpack_require__(7900);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(187);
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(1256);
// EXTERNAL MODULE: ../../nexus/react/node_modules/date-fns/esm/format/index.js + 29 modules
var format = __webpack_require__(8173);
// EXTERNAL MODULE: ../../nexus/react/node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(8484);
// EXTERNAL MODULE: ../../nexus/react/node_modules/date-fns/esm/subDays/index.js
var subDays = __webpack_require__(5081);
;// CONCATENATED MODULE: ../../nexus/react/utils/DateTools.jsx










 // Objects
// ======================================================================================================
// ***** dateTools *****
// *********************

var dateTools = {
  // Conversions
  // -
  fromDateToHumanized: function fromDateToHumanized(date) {
    // Date() ou AAAA-MM-JJ -> JJ/MM/AAAA
    // ---
    if (typeof date == 'string') {
      if (date.search('/') > -1) {
        return date;
      }

      date = new Date(date);
    }

    if (date == undefined) {
      date = new Date();
    }

    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    d = d.toString();
    m = m.toString();
    y = y.toString();
    d = d.length == 1 ? '0' + d : d;
    m = m.length == 1 ? '0' + m : m;
    return d + '/' + m + '/' + y;
  },
  fromTimeToHumanized: function fromTimeToHumanized(date) {
    // Date() -> HH:MM
    // ---
    if (date == undefined) {
      date = new Date();
    }

    var hh = date.getHours();
    var mm = date.getMinutes();
    hh = hh.toString();
    mm = mm.toString();
    hh = hh.length == 1 ? '0' + hh : hh;
    mm = mm.length == 1 ? '0' + mm : mm;
    return hh + ':' + mm;
  },
  fromHumanizedToISO: function fromHumanizedToISO(humanizedDate) {
    // JJ/MM/AAAA -> AAAA-MM-JJ
    // ---
    var isoDate = humanizedDate;
    var parts = humanizedDate.split('/');

    if (parts.length > 1) {
      isoDate = "".concat(parts[2], "-").concat(parts[1], "-").concat(parts[0]);
    }

    return isoDate;
  },
  fromISOToDate: function fromISOToDate(strISO) {
    // AAAA-MM-JJ ou HH:MM -> Date()
    // ---
    var newDate = null;

    if (strISO) {
      var rez = new Date(strISO);

      if (rez != 'Invalid Date') {
        newDate = rez;
      }

      if (strISO.length == 5 && newDate == null) {
        var parts = strISO.split(':');

        if (parts.length > 1) {
          rez = new Date();
          rez.setHours(parts[0]);
          rez.setMinutes(parts[1]);
          newDate = rez;
        }
      }
    }

    return newDate;
  },
  fromISOToTime: function fromISOToTime(time_iso) {
    // HH:MM -> Date()
    // ---
    var hours_iso_parts = copyObj(time_iso).split(':');

    if (hours_iso_parts.length > 1) {
      var date_holder = new Date();
      date_holder.setHours(parseInt(hours_iso_parts[0]));
      date_holder.setMinutes(parseInt(hours_iso_parts[1]));
      date_holder.setSeconds(0);
      return date_holder;
    }

    return null;
  },
  fromDateToISO: function fromDateToISO(date, missing) {
    // Date() -> AAAA-MM-JJ
    // ---
    missing = missing != undefined ? missing : null;

    if (date) {
      try {
        var rez = (0,format/* default */.Z)(date, "yyyy-MM-dd");
        return rez != null ? rez : missing;
      } catch (err) {}
    }

    return missing;
  },
  fromTimeToISO: function fromTimeToISO(date, missing) {
    // Date() -> HH:MM
    // ---
    missing = missing != undefined ? missing : null;

    if (date) {
      try {
        var rez = (0,format/* default */.Z)(date, "HH:mm");
        return rez != null ? rez : missing;
      } catch (err) {}
    }

    return missing;
  },
  // Operations
  // -
  // addTime: function(hours_iso, to_add, what_to_add) {
  // 	var self = this;
  // 	if (!hours_iso) { return null; }
  // 	var date_holder = self.fromTimeToISO(hours_iso);
  // 	if (date_holder && to_add && what_to_add) {
  // 		var date_holder = moment(date_holder).add(to_add, what_to_add).toDate();
  // 		return self.formatTime(date_holder);
  // 	} else {
  // 		return hours_iso;
  // 	}
  // },
  // substractTime: function(hours_iso, to_substract, what_to_substract) {
  // 	var self = this;
  // 	if (!hours_iso) { return null; }
  // 	var date_holder = self.fromTimeToISO(hours_iso);
  // 	if (date_holder && to_substract && what_to_substract) {
  // 		var date_holder = moment(date_holder).subtract(to_substract, what_to_substract).toDate();
  // 		return self.formatTime(date_holder);
  // 	} else {
  // 		return hours_iso;
  // 	}
  // },
  addDuration: function addDuration(hours_iso, hours_to_add) {
    var self = this;

    if (!hours_iso) {
      return null;
    }

    if (hours_to_add) {
      var hours = parseInt(hours_to_add.split(':')[0]);
      var minutes = parseInt(hours_to_add.split(':')[1]);
      hours_iso = self.addTime(hours_iso, hours, 'h');
      hours_iso = self.addTime(hours_iso, minutes, 'm');
    }

    return hours_iso;
  },
  timeToMinutes: function timeToMinutes(time_iso) {
    // HH:MM -> x minutes
    // ---
    var self = this;
    var minutes_total = 0;

    if (time_iso) {
      minutes_total += parseInt(time_iso.split(':')[0]) * 60;
      minutes_total += parseInt(time_iso.split(':')[1]);
    }

    return minutes_total;
  },
  minutesToTime: function minutesToTime(minutes) {
    // x minutes -> HH:MM
    // ---
    var self = this;
    var minutes = minutes ? minutes : 0;
    var hh = minutes / 60 | 0;
    var mm = minutes % 60 | 0;
    hh = hh.toString();
    mm = mm.toString();
    hh = hh.length == 1 ? '0' + hh : hh;
    mm = mm.length == 1 ? '0' + mm : mm;
    return hh + ':' + mm;
  },
  do_hourify: function do_hourify(value) {
    // str -> HH:MM
    // ---
    var value_hourified = '';
    var hh_exp = /^(\d{1,2})\D*?$/;
    var dt_exp = /^(\d{1,2})\D*(\d{1,2})\D*?$/;
    if (hh_exp.exec(value)) value += ' 00';
    var parts = dt_exp.exec(value);

    if (parts && parts.length == 3) {
      var hh = parseInt(parts[1], 10),
          mm = parseInt(parts[2], 10);

      if (0 <= hh <= 23 && 0 <= mm <= 59) {
        value_hourified = '%02d:%02d'.format(hh, mm);
      }
    }

    return value_hourified;
  },
  // Getters
  // -
  getNextDay: function getNextDay(date) {
    var nextDay = (0,addDays/* default */.Z)(this.fromISOToDate(date), 1);
    var nextDayIso = (0,format/* default */.Z)(nextDay, "yyyy-MM-dd");
    return nextDayIso;
  },
  getPreviousDay: function getPreviousDay(date) {
    var previousDay = (0,subDays/* default */.Z)(this.fromISOToDate(date), 1);
    var previousDayIso = (0,format/* default */.Z)(previousDay, "yyyy-MM-dd");
    return previousDayIso;
  },
  getWeekKey: function getWeekKey(dateIso) {
    // AAAA-MM-JJ -> AAAA-WW
    // ---
    var weekKey = '';
    var date = dateTools.fromISOToDate(dateIso);

    if (date) {
      weekKey = date.getWeekYear() + '-' + date.getWeekStr();
    }

    return weekKey;
  },
  getTodayIso: function getTodayIso() {
    // Now -> AAAA-MM-JJ
    // ---
    var now = new Date();
    return now.toISOString().substring(0, 10);
  }
};
// EXTERNAL MODULE: ../../nexus/react/forms/field/Field.css
var Field = __webpack_require__(657);
;// CONCATENATED MODULE: ../../nexus/react/forms/field/Field.jsx
function Field_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Field_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }





















function Field_slicedToArray(arr, i) { return Field_arrayWithHoles(arr) || Field_iterableToArrayLimit(arr, i) || Field_unsupportedIterableToArray(arr, i) || Field_nonIterableRest(); }

function Field_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Field_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Field_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Field_arrayLikeToArray(o, minLen); }

function Field_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Field_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Field_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











 // Models
// ----------------------------------------------------------------------------------------------------------------------------

var TAG_AutocompleteStore = function TAG_AutocompleteStore() {};

var AutocompleteStore = mobx_state_tree_module/* types.model */.V5.model({
  value: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  label: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string)
}).views(function (self) {
  return {
    get isSet() {
      if (self.value) {
        return true;
      }

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
      self.value = raw.value;
      self.label = raw.label;
    },
    clear: function clear() {
      self.value = '';
      self.label = '';
    }
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Field *****
// *****************

var TAG_Field = function TAG_Field() {};

var Field_Field = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... states

  var _React$useState = react.useState(false),
      _React$useState2 = Field_slicedToArray(_React$useState, 2),
      focused = _React$useState2[0],
      setFocused = _React$useState2[1];

  var _React$useState3 = react.useState(null),
      _React$useState4 = Field_slicedToArray(_React$useState3, 2),
      autocompleteAnchor = _React$useState4[0],
      setAutocompleteAnchor = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = Field_slicedToArray(_React$useState5, 2),
      autocompletePopupOpen = _React$useState6[0],
      setAutocompletePopupOpen = _React$useState6[1];

  var _React$useState7 = react.useState(false),
      _React$useState8 = Field_slicedToArray(_React$useState7, 2),
      autocompletePopperOpen = _React$useState8[0],
      setAutocompletePopperOpen = _React$useState8[1];

  var _React$useState9 = react.useState(false),
      _React$useState10 = Field_slicedToArray(_React$useState9, 2),
      autocompleteLoading = _React$useState10[0],
      setAutocompleteLoading = _React$useState10[1]; // From ... store


  var isLoading = app.isLoading;
  var isDesktop = app.isDesktop;
  var isMobile = app.isMobile;
  var autocompleteResults = app.autocompleteResults; // From ... props

  var id = props.id ? props.id : id;
  var component = props.component ? props.component : 'input'; // input, textarea, select, checkbox, autocomplete, switcher, radios

  var type = props.type ? props.type : 'text'; // text, number

  var name = props.name ? props.name : '';
  var label = props.label;
  var ghostLabel = props.ghostLabel != undefined ? props.ghostLabel : false;
  var placeholder = props.placeholder ? props.placeholder : '';
  var title = props.title ? props.title : '';
  var min = props.min ? props.min : 0;
  var max = props.max;
  var forceString = props.forceString != undefined ? props.forceString : false;
  var forceStringVariant = props.format != undefined ? props.format : 'en';
  var datas = props.datas;
  var canBeEmpty = props.canBeEmpty == true ? true : false;
  var savePath = props.savePath;
  var savePathAutocomplete = props.savePathAutocomplete;
  var forcePopupAutocomplete = props.forcePopupAutocomplete != undefined ? props.forcePopupAutocomplete : false;
  var callbackSearch = props.callbackSearch != undefined ? props.callbackSearch : callbackSearchDefault;
  var callbackSave = props.callbackSave;
  var callbackChange = props.callbackChange;
  var callbackSelect = props.callbackSelect;
  var callbackClick = props.callbackClick;
  var callbackFocus = props.callbackFocus;
  var callbackBlur = props.callbackBlur;
  var onKeyPress = props.onKeyPress;
  var onKeyUp = props.onKeyUp;
  var onKeyDown = props.onKeyDown;
  var onClick = props.onClick;
  var startAdornment = props.startAdornment ? props.startAdornment : null;
  var endAdornment = props.endAdornment ? props.endAdornment : null;
  var variant = props.variant ? props.variant : 'contained'; // contained, outlined

  var color = props.color ? props.color : 'primary'; // primary, white, black

  var disabled = props.disabled ? props.disabled : isLoading;
  var className = props.className ? props.className : '';
  var style = props.style != undefined ? props.style : {};
  var inputStyle = props.inputStyle != undefined ? props.inputStyle : {};

  if (focused) {
    inputStyle['borderColor'] = theme.palette.primary.main;
    inputStyle['borderWidth'] = '2px';

    if (color == 'white') {
      inputStyle['borderColor'] = 'white';
    } // inputStyle['padding'] = '5px 11px';
    // inputStyle['outline'] = `2px solid ${theme.palette.primary.main}`;

  } // Functions
  // ==================================================================================================


  var getError = function getError() {
    var error = props.error;

    if (error == undefined && savePath && savePath.length > 0) {
      error = app.getError(savePath);
    }

    if (error && focused) {
      inputStyle['borderColor'] = 'red';
    }

    return error;
  };

  var getValue = function getValue() {
    var value = props.value;

    if (value == undefined && savePath && savePath.length > 0) {
      value = app.getValue(savePath, null);
    }

    if (value == null) {
      value = '';
    }

    return value;
  };

  var getValueAutocomplete = function getValueAutocomplete() {
    var valueAutocomplete = props.valueAutocomplete;

    if (valueAutocomplete == undefined && savePathAutocomplete && savePathAutocomplete.length > 0) {
      valueAutocomplete = app.getValue(savePathAutocomplete, null);
    }

    return valueAutocomplete;
  }; // ...


  var error = getError();
  var value = getValue();
  var valueAutocomplete = getValueAutocomplete(); // Callbacks
  // ==================================================================================================

  var callbackSearchDefault = function callbackSearchDefault(query, endSearchCallback) {
    // Callback de recherche par défaut
    // ---
    var url = "/autocomplete/".concat(id); // Paramètres de recherche

    var params = new FormData();
    params.append('query', query); // Appel de la fonction de recherche

    app.fetchJSON(url, {
      'body': params
    }, false, 'POST').then(function (json) {
      app.setField('autocompleteResults', json.results);
      endSearchCallback();
    })["catch"](function (ex) {
      console.error("Fetch failed for ".concat(url), ex);
      snackbar.update(true, "Une erreur est survenue.", "error");
    });
  }; // Events
  // ==================================================================================================


  var handleClick = function handleClick(evt) {
    if (onClick) {
      onClick(evt);
    }
  };

  var handleInputFocus = function handleInputFocus(evt) {
    // Sur focus du champ texte
    // ---
    setFocused(true);

    if (callbackFocus) {
      callbackFocus();
    }
  };

  var handleInputChange = function handleInputChange(evt, ignoreCallbackChange) {
    // Sur saisie dans le champ texte
    // ---
    var inputChange = ignoreCallbackChange == true ? null : callbackChange;
    var newValue = null; // Récupération de la valeur

    if (component == 'checkbox') {
      newValue = evt.target.checked;

      if (forceString) {
        if (forceStringVariant == 'en') {
          newValue = newValue == true ? 'yes' : 'no';
        } else {
          newValue = newValue == true ? 'oui' : 'non';
        }
      }
    } else {
      newValue = evt.target.value;
    } // Convertion de la valeur


    if (type == 'number') {
      try {
        newValue = parseInt(newValue);
      } catch (err) {
        newValue = 0;
      }

      if (Number.isNaN(newValue)) {
        newValue = null;
      } else {
        if (newValue < min) {
          newValue = min;
        }

        if (max != undefined && newValue > max) {
          newValue = max;
        }

        if (forceString) {
          newValue = newValue.toString();
        }
      }
    }

    if (type == 'date') {
      newValue = dateTools.fromDateToISO(newValue, newValue);
    }

    if (type == 'time') {
      newValue = dateTools.fromTimeToISO(newValue, newValue);
    } // Sauvegarde de la valeur


    if (savePath) {
      if (callbackSave) {
        callbackSave(savePath, newValue);
      } else {
        app.saveValue(savePath, newValue, callbackChange);
      }

      app.clearError(savePath);

      if (component == 'autocomplete' && callbackSearch && (newValue.length == 0 || newValue.length > 1)) {
        clearTimeout(window.searchTimeout);
        setAutocompletePopperOpen(false);
        app.setField('autocompleteResults', []);
        window.searchTimeout = setTimeout(function () {
          setAutocompleteLoading(true);
          callbackSearch(newValue, function () {
            // Affichage des résultats
            setAutocompletePopperOpen(true);
            setAutocompleteLoading(false);
          });
        }, 1000);
      }
    } else {
      if (component == 'checkbox' && callbackClick) {
        callbackClick();
      }

      if (callbackChange) {
        callbackChange([], newValue);
      }
    }
  };

  var handleInputClick = function handleInputClick(evt) {
    // Sur focus de l'input du field
    // ---
    setAutocompleteAnchor(evt.target); // Doit-on ouvrir la popup d'autocomplete en plein écran ? (pour les smartphones et tablettes)

    if (component == 'autocomplete' && (isMobile && !valueAutocomplete || forcePopupAutocomplete)) {
      setAutocompletePopupOpen(true); // Focus sur le champ de recherche

      setTimeout(function () {
        document.getElementById("popup_".concat(id)).focus();
      }, 500);
    }
  };

  var handleAutocompleteSelect = function handleAutocompleteSelect(e, result) {
    // Sur sélection d'un résultat d'autocomplete
    // ---
    app.saveValues([[savePath, result.label], [savePathAutocomplete, result.value]]).then(function () {
      setAutocompletePopperOpen(false);
      handleCloseAutocompletePopup();
      app.setField('autocompleteResults', []);
      var rawOrSummary = result.raw ? result.raw : result.summary; // Callback nouvelle valeur

      if (callbackChange) {
        callbackChange(savePath, result.label, savePathAutocomplete, result.value, rawOrSummary);
      }

      if (callbackSelect) {
        callbackSelect(savePath, result.label, savePathAutocomplete, result.value, rawOrSummary);
      }
    });
  };

  var handleClearAutocomplete = function handleClearAutocomplete() {
    // Sur clic du bouton de nettoyage de l'autocomplete
    // ---
    app.setField('autocompleteResults', []);
    setAutocompletePopperOpen(false);
    app.saveValue(savePath, '');
    app.saveValue(savePathAutocomplete, ''); // Callback nouvelle valeur

    if (callbackChange) {
      callbackChange(savePath, '', savePathAutocomplete, '');
    }

    if (callbackSelect) {
      callbackSelect(savePath, '', savePathAutocomplete, '', null);
    }

    window.autocompleteListEntered = false;
  };

  var handleInputBlur = function handleInputBlur(e) {
    // Sur perte de focus du champ de recherche
    // ---
    setFocused(false); // Nettoyage automatique si aucune valeur sélectionnée dans l'autocomplete

    setTimeout(function () {
      var valueAutocomplete = getValueAutocomplete();

      if (component == 'autocomplete' && !valueAutocomplete && !autocompleteLoading && isDesktop) {
        handleClearAutocomplete();
      }
    }, 200); // Callback blur input

    if (callbackBlur) {
      callbackBlur(savePath, e.target.value);
    }
  };

  var handleCloseAutocompletePopup = function handleCloseAutocompletePopup() {
    // Sur clic du bouton "Annuler" dans la popup d'autocomplete
    // ---
    setAutocompletePopupOpen(false);
    var node = document.getElementById(id);

    if (node) {
      node.blur();
    }
  };

  var handleSaveValue = function handleSaveValue(value) {
    // Mise à jour d'une valeur sur un target
    // ---
    // Sauvegarde de la valeur
    if (savePath) {
      app.saveValue(savePath, value, callbackChange);
      app.clearError(savePath);
    } else {
      callbackChange([], value);
    }
  }; // Render
  // ==================================================================================================


  var input = null;

  var renderInput = function renderInput() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "input";

    // Render :: Input
    // ---
    if (type == 'date' && !placeholder) {
      placeholder = 'jj/mm/aaaa';
    }

    if (type == 'time' && !placeholder) {
      placeholder = 'hh:mm';
    } // Input basique


    input = /*#__PURE__*/react.createElement("input", {
      className: "nx-field-input",
      id: id,
      value: value,
      type: type,
      placeholder: placeholder,
      title: title,
      style: inputStyle,
      disabled: disabled,
      autoComplete: "off",
      onChange: function onChange(e) {
        return handleInputChange(e);
      },
      onFocus: function onFocus(e) {
        return handleInputFocus(e);
      },
      onBlur: function onBlur(e) {
        return handleInputBlur(e);
      },
      onKeyPress: onKeyPress,
      onKeyUp: onKeyUp,
      onKeyDown: onKeyDown
    });
  };

  var renderTextarea = function renderTextarea() {
    // Render :: Textarea
    // ---
    input = /*#__PURE__*/react.createElement("textarea", {
      className: "nx-field-textarea",
      id: id,
      value: value,
      type: type,
      placeholder: placeholder,
      title: title,
      style: inputStyle,
      disabled: disabled,
      onChange: function onChange(e) {
        return handleInputChange(e);
      },
      onFocus: function onFocus(e) {
        return handleInputFocus(e);
      },
      onBlur: function onBlur(e) {
        return handleInputBlur(e);
      },
      onKeyPress: onKeyPress,
      onKeyUp: onKeyUp,
      onKeyDown: onKeyDown
    });
  };

  var renderSelect = function renderSelect() {
    // Render :: Select
    // ---
    // Options
    var selectItems = [];
    var nbDivider = 0;

    if (datas) {
      var _iterator = Field_createForOfIteratorHelper(datas),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var data = _step.value;

          if (typeof data == 'string') {
            data = {
              value: data,
              label: data
            };
          }

          var itemStyle = {};

          if (data.hidden == true) {
            itemStyle['display'] = 'none';
          }

          if (data.divider == true) {
            nbDivider += 1;
            selectItems.push( /*#__PURE__*/react.createElement(Divider_Divider, {
              light: true,
              key: "".concat(id, "_divider_").concat(nbDivider),
              style: {
                marginBottom: '10px',
                marginTop: '10px'
              }
            }));
          } else {
            selectItems.push( /*#__PURE__*/react.createElement("option", {
              key: "".concat(id, "_").concat(data.value),
              value: data.value,
              disabled: data.disabled == true,
              style: itemStyle
            }, data.label));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    input = /*#__PURE__*/react.createElement("select", {
      className: "nx-field-select",
      id: id,
      value: value,
      onChange: function onChange(e) {
        return handleInputChange(e);
      },
      onFocus: function onFocus(e) {
        return handleInputFocus(e);
      },
      onBlur: function onBlur(e) {
        return handleInputBlur(e);
      },
      placeholder: placeholder,
      title: title,
      style: inputStyle,
      disabled: disabled
    }, canBeEmpty && /*#__PURE__*/react.createElement("option", {
      value: ""
    }, "---"), selectItems); // Icône de dropdown ?

    if (!endAdornment) {
      endAdornment = /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "arrow_drop_down"
      });
    }
  };

  var renderAutocomplete = function renderAutocomplete() {
    // Render :: Autocomplete
    // ---
    var datalistOptions = [];
    var datalist = null; // Icône de recherche ?

    if (!value) {
      endAdornment = /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "search"
      });
    } // Croix de nettoyage ?


    if (value) {
      endAdornment = /*#__PURE__*/react.createElement(Icon_Icon, {
        className: "pointer",
        name: "clear",
        onClick: function onClick(e) {
          return handleClearAutocomplete();
        }
      });
    }

    renderInput();
  };

  var renderButtonGroup = function renderButtonGroup() {
    // Render :: ButtonGroup
    // ---
    var groupButtons = [];

    if (datas) {
      var _iterator2 = Field_createForOfIteratorHelper(datas),
          _step2;

      try {
        var _loop = function _loop() {
          var data = _step2.value;

          if (typeof data == 'string') {
            data = {
              value: data,
              label: data
            };
          }

          var buttonStyle = {};

          if (data.hidden == true) {
            buttonStyle['display'] = 'none';
          }

          if (data.value == value) {
            buttonStyle['color'] = "white";
            buttonStyle['backgroundColor'] = theme.palette.primary.main;
          }

          groupButtons.push( /*#__PURE__*/react.createElement(Button_Button, {
            key: "".concat(id, "_").concat(data.value),
            color: color,
            variant: "outlined",
            disabled: data.disabled == true || disabled,
            style: buttonStyle,
            onClick: function onClick(e) {
              return handleSaveValue(data.value);
            }
          }, data.label));
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    input = /*#__PURE__*/react.createElement("div", {
      className: "nx-button-group-wrapper h-col"
    }, groupButtons);
  };

  var renderRadios = function renderRadios() {
    // Render :: Radios
    // ---
    var radios = [];

    if (datas) {
      var _iterator3 = Field_createForOfIteratorHelper(datas),
          _step3;

      try {
        var _loop2 = function _loop2() {
          var data = _step3.value;

          if (typeof data == 'string') {
            data = {
              value: data,
              label: data
            };
          }

          var radioStyle = {};
          var radioIconName = "radio_button_unchecked";
          var radioIconColor = "typography";

          if (data.hidden == true) {
            radioStyle['display'] = 'none';
          }

          if (data.value == value) {
            radioIconName = "radio_button_checked";
            radioIconColor = "primary";
          }

          radios.push( /*#__PURE__*/react.createElement("div", {
            key: "".concat(id, "_").concat(data.value),
            className: "nx-radio-item",
            "data-value": data.value,
            style: radioStyle,
            onClick: function onClick(e) {
              return handleSaveValue(data.value);
            }
          }, /*#__PURE__*/react.createElement(Avatar_Avatar, {
            color: "transparent",
            size: "small",
            iconName: radioIconName,
            iconColor: radioIconColor,
            style: {
              marginLeft: '-8px'
            }
          }), /*#__PURE__*/react.createElement("div", {
            className: "nx-field-label-aside"
          }, data.label)));
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    input = /*#__PURE__*/react.createElement("div", {
      className: "nx-radios-wrapper v-col"
    }, radios);
  };

  var renderCheckbox = function renderCheckbox() {
    // Render :: Checkbox
    // ---
    var checkboxStyle = {};
    var checkboxIconName = "check_box_outline_blank";
    var checkboxIconColor = "typography";

    if (value == true) {
      checkboxIconName = "check_box";
      checkboxIconColor = "primary";
    }

    input = /*#__PURE__*/react.createElement("div", {
      className: "nx-checkbox-item",
      style: checkboxStyle,
      onClick: function onClick(e) {
        return handleSaveValue(!value);
      }
    }, /*#__PURE__*/react.createElement(Avatar_Avatar, {
      color: "transparent",
      size: "small",
      iconName: checkboxIconName,
      iconColor: checkboxIconColor,
      style: {
        marginLeft: '-8px'
      }
    }), /*#__PURE__*/react.createElement("div", {
      className: "nx-field-label-aside"
    }, label));
  }; // -------------------------------------------------


  switch (component) {
    case 'input':
      renderInput();
      break;

    case 'textarea':
      renderTextarea();
      break;

    case 'select':
      renderSelect();
      break;

    case 'autocomplete':
      renderAutocomplete();
      break;

    case 'button_group':
      renderButtonGroup();
      break;

    case 'radios':
      renderRadios();
      break;

    case 'checkbox':
      renderCheckbox();
      break;
  } // -------------------------------------------------


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)('nx-field', component, type, variant, color, {
      'disabled': disabled
    }, {
      'focused': focused
    }, {
      'error': error
    }, className),
    onClick: function onClick(e) {
      return handleClick(e);
    },
    style: style
  }, (label && component != 'checkbox' || ghostLabel) && /*#__PURE__*/react.createElement("div", {
    className: "nx-field-label"
  }, component != 'checkbox' ? label : ''), /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-input-wrapper", {
      "with-start-adornment": startAdornment
    }, {
      "with-end-adornment": endAdornment
    })
  }, startAdornment && /*#__PURE__*/react.createElement("div", {
    className: "nx-input-start-adornment"
  }, startAdornment), input, endAdornment && /*#__PURE__*/react.createElement("div", {
    className: "nx-input-end-adornment"
  }, endAdornment)), error && /*#__PURE__*/react.createElement("div", {
    className: "nx-field-error",
    dangerouslySetInnerHTML: {
      __html: error
    }
  }));
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/input/PlaygroundField.css
var PlaygroundField = __webpack_require__(7521);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/input/PlaygroundField.jsx










 // Datas
// ======================================================================================================

var CHOICES_TEST = [{
  'value': 'choix_1',
  'label': 'Choix 1'
}, {
  'value': 'choix_2',
  'label': 'Choix 2'
}, {
  'value': 'choix_3',
  'label': 'Choix 3'
}]; // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionField *****
// ******************************

var TAG_RenderSectionField = function TAG_RenderSectionField() {};

var RenderSectionField = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Events
  // ==================================================================================================

  var handleFieldChange = function handleFieldChange(savePath, value) {
    console.log('handleFieldChange');
    console.log(savePath);
    console.log(value);
  };

  var handleAutocomplete = function handleAutocomplete(savePath, value, savePathAutocomplete, valueAutocomplete, rawOrSummary) {
    console.log('handleAutocomplete');
    console.log(savePath);
    console.log(value);
    console.log(savePathAutocomplete);
    console.log(valueAutocomplete);
    console.log(rawOrSummary);
  }; // -


  var handleSimulateLoad = function handleSimulateLoad(setLoad) {
    // Sur click d'un bouton de simulation de traitement en tâche de fond
    // ---
    if (setLoad) {
      var task_id = uuid();
      app.addTask(task_id);
    } else {
      app.setField('tasks', []);
    }
  };

  var handleSimulateErrors = function handleSimulateErrors(putErrors) {
    // Sur click d'un bouton de simulation d'erreurs fields
    // ---
    app.clearErrors();
    var errors = [];

    if (putErrors) {
      errors.push(app.addError(['app', 'playground', 'value_text'], 'Fake error text'));
      errors.push(app.addError(['app', 'playground', 'value_number'], 'Fake error number'));
      errors.push(app.addError(['app', 'playground', 'value_date'], 'Fake error date'));
      errors.push(app.addError(['app', 'playground', 'value_time'], 'Fake error time'));
      errors.push(app.addError(['app', 'playground', 'value_select'], 'Fake error select'));
      errors.push(app.addError(['app', 'playground', 'value_textarea'], 'Fake error textarea'));
      errors.push(app.addError(['app', 'playground', 'value_autocomplete_1', 'label'], 'Fake error autocomplete'));
      errors.push(app.addError(['app', 'playground', 'value_autocomplete_2', 'label'], 'Fake error autocomplete 2'));
      errors.push(app.addError(['app', 'playground', 'value_switcher'], 'Fake error switcher'));
      errors.push(app.addError(['app', 'playground', 'value_radio'], 'Fake error radio'));
      errors.push(app.addError(['app', 'playground', 'value_checkbox'], 'Fake error checkbox'));
    }

    return errors;
  }; // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------


  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-text",
    component: "input",
    label: "Texte",
    savePath: ['app', 'playground', 'value_text'],
    disabled: isLoading // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-number",
    component: "input",
    label: "Nombre",
    type: "number",
    savePath: ['app', 'playground', 'value_number'],
    disabled: isLoading // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  })), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-date",
    component: "input",
    label: "Date",
    type: "date" // placeholder='jj/mm/aaaa'
    ,
    savePath: ['app', 'playground', 'value_date'],
    disabled: isLoading // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-time",
    component: "input",
    label: "Time",
    type: "time" // placeholder='hh:mm'
    ,
    savePath: ['app', 'playground', 'value_time'],
    disabled: isLoading // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  })), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    id: "lst-field-select",
    component: "select",
    label: "Select",
    datas: CHOICES_TEST,
    savePath: ['app', 'playground', 'value_select'],
    disabled: isLoading,
    canBeEmpty: true // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-textarea",
    component: "textarea",
    label: "Textarea",
    savePath: ['app', 'playground', 'value_textarea'],
    disabled: isLoading // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  })), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    id: "lst-field-autocomplete-1",
    component: "autocomplete",
    label: "Autocomplete 1",
    savePath: ['app', 'playground', 'value_autocomplete_1', 'label'],
    savePathAutocomplete: ['app', 'playground', 'value_autocomplete_1', 'value'],
    disabled: isLoading // callbackChange={handleAutocomplete}
    ,
    callbackSelect: handleAutocomplete
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "lst-field-autocomplete-2",
    component: "autocomplete",
    label: "Autocomplete 2",
    savePath: ['app', 'playground', 'value_autocomplete_2', 'label'],
    savePathAutocomplete: ['app', 'playground', 'value_autocomplete_2', 'value'],
    disabled: isLoading // callbackChange={handleAutocomplete}
    ,
    callbackSelect: handleAutocomplete
  })), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    id: "btn-group-test",
    component: "button_group",
    label: "Button Group",
    datas: CHOICES_TEST,
    savePath: ['app', 'playground', 'value_switcher'],
    disabled: isLoading // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  })), /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal",
    align: "center"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    id: "rad-test",
    component: "radios",
    label: "Radios",
    datas: CHOICES_TEST,
    savePath: ['app', 'playground', 'value_radio'],
    disabled: isLoading // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "chk-test",
    component: "checkbox",
    label: "Test checkbox",
    ghostLabel: false,
    datas: CHOICES_TEST,
    savePath: ['app', 'playground', 'value_checkbox'],
    disabled: isLoading // callbackChange={handleFieldChange}
    ,
    callbackBlur: handleFieldChange
  }))); // Section -> Buttons
  // -------------------------------------------------

  var sectionButtons = [/*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-fields-load",
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      return handleSimulateLoad(true);
    },
    disabled: isLoading
  }, "Load"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-fields-cancel",
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      return handleSimulateLoad(false);
    },
    disabled: !isLoading
  }, "Cancel"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-fields-error",
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      return handleSimulateErrors(true);
    },
    disabled: isLoading
  }, "Error"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-fields-clear",
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      return handleSimulateErrors(false);
    },
    disabled: isLoading
  }, "Clear")]; // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle,
    buttons: sectionButtons,
    buttonsResponsive: true
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/layout/column/Column.css
var Column = __webpack_require__(5906);
;// CONCATENATED MODULE: ../../nexus/react/layout/column/Column.jsx


 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** Column *****
// ***************

var TAG_Column = function TAG_Column() {};

var Column_Column = function Column(props) {
  // From ... props
  var children = props.children;
  var spacing = props.spacing ? props.spacing : 'small';
  var align = props.align ? props.align : 'center';
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-row", "v-col-".concat(spacing), "flex-align-".concat(align), className),
    style: style
  }, children);
};
// EXTERNAL MODULE: ../../nexus/react/ui/typography/Typography.css
var Typography = __webpack_require__(1815);
;// CONCATENATED MODULE: ../../nexus/react/ui/typography/Typography.jsx






 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Typography *****
// **********************

var TAG_Typography = function TAG_Typography() {};

var Typography_Typography = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var children = props.children;
  var size = props.size ? props.size : 'default'; // small, default, big

  var align = props.align ? props.align : 'left'; // left, center, right

  var variant = props.variant ? props.variant : ''; // title, subtitle, description

  var className = props.className ? props.className : '';
  var style = props.style ? copyObj(props.style) : {};
  var color = props.color ? props.color : 'default'; // ...
  // Quelle couleur ?

  style['color'] = theme.getTextColorFromKey(color);

  if (variant == 'subtitle') {
    style['color'] = theme.palette.secondary.main;
  }

  if (variant == 'description') {
    style['color'] = 'gray';
  } // Quel alignement ?


  style['textAlign'] = align; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-typography", size, variant, className),
    style: style
  }, children);
});
// EXTERNAL MODULE: ../../nexus/react/ui/alert/Alert.css
var Alert = __webpack_require__(2306);
;// CONCATENATED MODULE: ../../nexus/react/ui/alert/Alert.jsx







 // Functions Components ReactJS
// ======================================================================================================
// ***** Alert *****
// *****************

var TAG_Alert = function TAG_Alert() {};

var Alert_Alert = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... store

  var themeMode = theme.mode; // From ... props

  var severity = props.severity ? props.severity : 'default'; // can also be "help"

  var icon = props.icon ? props.icon : null;
  var children = props.children;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // ...

  var severityDef = SEVERITIES.get(severity); // Quel icône ?

  if (!icon) {
    icon = /*#__PURE__*/react.createElement(Icon_Icon, {
      name: severityDef.icon_name,
      color: severityDef.color
    });
  } // Quelle couleur de fond ?


  if (!style.hasOwnProperty('backgroundColor')) {
    style['backgroundColor'] = severityDef.backgroundColor;
  } // Quelle couleur de texte ?


  if (!style.hasOwnProperty('color')) {
    style['color'] = themeMode == 'light' ? severityDef.text_color : severityDef.color;
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-alert", severity, className, themeMode),
    style: style
  }, /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "transparent"
  }, icon), /*#__PURE__*/react.createElement("div", {
    className: "nx-alert-content",
    "data-flex": "1"
  }, children));
});
// EXTERNAL MODULE: ../../nexus/react/ui/switch/Switch.css
var Switch = __webpack_require__(1796);
;// CONCATENATED MODULE: ../../nexus/react/ui/switch/Switch.jsx






 // Functions Components ReactJS
// ======================================================================================================
// ***** Switch *****
// ******************

var TAG_Switch = function TAG_Switch() {};

var Switch_Switch = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... store

  var isLoading = app.isLoading; // From ... props

  var id = props.id ? props.id : id;
  var name = props.name ? props.name : '';
  var disabled = props.disabled ? props.disabled : isLoading;
  var label = props.label;
  var savePath = props.savePath;
  var callbackChange = props.callbackChange;
  var className = props.className ? props.className : "";
  var style = props.style ? props.style : {}; // Events
  // ==================================================================================================

  var handleSaveValue = function handleSaveValue(value) {
    // Mise à jour d'une valeur sur un target
    // ---
    // Sauvegarde de la valeur
    if (savePath) {
      app.saveValue(savePath, value, callbackChange);
      app.clearError(savePath);
    } else {
      callbackChange([], value);
    }
  }; // Functions
  // ==================================================================================================


  var getError = function getError() {
    var error = props.error;

    if (error == undefined && savePath && savePath.length > 0) {
      error = app.getError(savePath);
    }

    return error;
  };

  var getValue = function getValue() {
    var value = props.value;

    if (value == undefined && savePath && savePath.length > 0) {
      value = app.getValue(savePath, null);
    }

    if (value == null) {
      value = '';
    }

    return value;
  }; // ...


  var error = getError();
  var value = getValue(); // Render
  // ==================================================================================================

  var switchIconName = "toggle_off";
  var switchIconColor = "typography";

  if (value == true) {
    switchIconName = "toggle_on";
    switchIconColor = "primary";
  }

  if (error) {
    switchIconColor = "error";
  }

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-switch", {
      'disabled': disabled
    }, {
      'error': error
    }, className),
    onClick: function onClick(e) {
      return handleSaveValue(!value);
    },
    style: style
  }, /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "transparent",
    size: "small",
    iconName: switchIconName,
    iconColor: switchIconColor,
    iconSize: "large",
    iconVariant: "filled" // style={{
    // 	marginLeft: '-8px',
    // }}

  }), label && /*#__PURE__*/react.createElement("div", {
    className: "nx-field-label-aside"
  }, label));
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/input/PlaygroundSwitch.css
var PlaygroundSwitch = __webpack_require__(2761);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/input/PlaygroundSwitch.jsx











 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionSwitch *****
// *******************************

var TAG_RenderSectionSwitch = function TAG_RenderSectionSwitch() {};

var RenderSectionSwitch = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "info"
  }, "Le composant Switch se comporte comme un Field de type \"checkbox\". Il se repose sur une valeur bool\xE9enne et il convient de l'utiliser pour des param\xE8tres."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Column_Column, {
    align: "start",
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react.createElement(Switch_Switch, {
    label: "Switch 1",
    savePath: ['app', 'playground', 'value_switch_1']
  }), /*#__PURE__*/react.createElement(Switch_Switch, {
    label: "Switch 2",
    savePath: ['app', 'playground', 'value_switch_2']
  }), /*#__PURE__*/react.createElement(Switch_Switch, {
    label: "Switch 3",
    savePath: ['app', 'playground', 'value_switch_3']
  }))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/input/PlaygroundHTML.css
var PlaygroundHTML = __webpack_require__(951);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/input/PlaygroundHTML.jsx









 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionHTML *****
// *****************************

var TAG_RenderSectionHTML = function TAG_RenderSectionHTML() {};

var RenderSectionHTML = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Typography_Typography, null, "Bient\xF4t !")); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/forms/indicator/Indicator.css
var Indicator = __webpack_require__(4439);
;// CONCATENATED MODULE: ../../nexus/react/forms/indicator/Indicator.jsx







 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Indicator *****
// *********************

var TAG_Indicator = function TAG_Indicator() {};

var Indicator_Indicator = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var variant = props.variant ? props.variant : 'default'; // default, contrasted, outlined

  var severity = props.severity ? props.severity : 'default';
  var iconName = props.iconName ? props.iconName : '';
  var href = props.href ? props.href : '';
  var children = props.children;
  var className = props.className ? props.className : '';
  var color = props.color ? props.color : ''; // primary, secondary, #custom

  var style = props.style ? props.style : {};
  var callbackClick = props.callbackClick; // ...

  var severityDef = SEVERITIES.getDef(severity); // Quelle couleur ?

  if (color == 'primary') {
    color = theme.palette.primary.main;
  }

  if (color == 'secondary') {
    color = theme.palette.secondary.main;
  }

  if (!color) {
    color = severityDef.color;
  }

  style['color'] = color;
  style['backgroundColor'] = hexToRgbA(color, 0.1);
  style['border'] = '1px solid transparent';

  if (variant == 'contrasted') {
    style['color'] = 'white';
    style['backgroundColor'] = color;
  }

  if (variant == 'outlined') {
    style['backgroundColor'] = 'transparent';
    style['borderColor'] = color;
  } // Quelle icône ?


  var icon = null;

  if (iconName) {
    icon = /*#__PURE__*/react.createElement(Icon_Icon, {
      color: severity,
      name: iconName,
      style: {
        flex: 'none',
        marginRight: '5px'
      }
    });
  } // Events
  // ==================================================================================================


  var handleClick = function handleClick() {
    if (callbackClick) {
      callbackClick();
    }
  }; // Render
  // ==================================================================================================


  var indicator = /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-indicator", {
      "with-icon": icon
    }, {
      "clickable": callbackClick
    }, className),
    style: style,
    onClick: function onClick() {
      return handleClick();
    }
  }, icon, /*#__PURE__*/react.createElement("div", null, children));

  if (href) {
    indicator = /*#__PURE__*/react.createElement("a", {
      className: (0,clsx_m/* default */.Z)("nx-indicator", {
        "with-icon": icon
      }, {
        "clickable": callbackClick
      }, className),
      href: href,
      target: "_blanc",
      style: style
    }, icon, /*#__PURE__*/react.createElement("div", null, children));
  }

  return indicator;
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/display/PlaygroundAvatar.css
var PlaygroundAvatar = __webpack_require__(89);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/display/PlaygroundAvatar.jsx












 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionAvatar *****
// *******************************

var TAG_RenderSectionAvatar = function TAG_RenderSectionAvatar() {};

var RenderSectionAvatar = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '10px'
    }
  }, "Image"), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, null, "small"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    src: "/static/favicons/android-icon-192x192.png",
    size: "small"
  })), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, null, "normal"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    src: "/static/favicons/android-icon-192x192.png",
    size: "normal"
  })), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, null, "large"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    src: "/static/favicons/android-icon-192x192.png",
    size: "large"
  })), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, null, "big"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    src: "/static/favicons/android-icon-192x192.png",
    size: "big"
  }))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '10px'
    }
  }, "Letter"), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, null, "default"), /*#__PURE__*/react.createElement(Avatar_Avatar, null, "AB")), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "primary"
  }, "primary"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "primary"
  }, "C")), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "secondary"
  }, "secondary"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "secondary"
  }, "D")), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, null, "transparent"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "transparent"
  }, "D"))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '10px'
    }
  }, "Icon"), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, null, "default"), /*#__PURE__*/react.createElement(Avatar_Avatar, null, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "terrain",
    color: "white"
  }))), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "primary"
  }, "primary"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "primary",
    iconName: "folder"
  })), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "secondary"
  }, "secondary"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "secondary",
    iconName: "description"
  })), /*#__PURE__*/react.createElement(Column_Column, null, /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "secondary"
  }, "transparent"), /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "transparent",
    iconName: "description"
  })))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/display/PlaygroundChip.css
var PlaygroundChip = __webpack_require__(9455);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/display/PlaygroundChip.jsx









 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionChip *****
// *****************************

var TAG_RenderSectionChip = function TAG_RenderSectionChip() {};

var RenderSectionChip = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Typography_Typography, null, "Bient\xF4t !")); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/layout/grid/Grid.css
var Grid = __webpack_require__(3058);
;// CONCATENATED MODULE: ../../nexus/react/layout/grid/Grid.jsx


 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** Grid *****
// ****************

var TAG_Grid = function TAG_Grid() {};

var Grid_Grid = function Grid(props) {
  // From ... props
  var children = props.children;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-grid", className),
    style: style
  }, children);
};
// EXTERNAL MODULE: ../../nexus/react/ui/link/Link.css
var Link = __webpack_require__(7370);
;// CONCATENATED MODULE: ../../nexus/react/ui/link/Link.jsx



 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Link *****
// ****************

var TAG_Link = function TAG_Link() {};

var Link_Link = function Link(props) {
  // From ... props
  var href = props.href ? props.href : '';
  var children = props.children;
  var target = props.target ? props.target : ''; // _blank

  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // ...

  if (!style.hasOwnProperty('color')) {
    style['color'] = SEVERITY_COLORS.info;
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("a", {
    href: href,
    target: target,
    className: (0,clsx_m/* default */.Z)("nx-link", className),
    style: style
  }, children);
};
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/display/PlaygroundIcon.css
var PlaygroundIcon = __webpack_require__(9286);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/display/PlaygroundIcon.jsx
function PlaygroundIcon_slicedToArray(arr, i) { return PlaygroundIcon_arrayWithHoles(arr) || PlaygroundIcon_iterableToArrayLimit(arr, i) || PlaygroundIcon_unsupportedIterableToArray(arr, i) || PlaygroundIcon_nonIterableRest(); }

function PlaygroundIcon_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PlaygroundIcon_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PlaygroundIcon_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PlaygroundIcon_arrayLikeToArray(o, minLen); }

function PlaygroundIcon_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PlaygroundIcon_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PlaygroundIcon_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





























 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionIcon *****
// *****************************

var TAG_RenderSectionIcon = function TAG_RenderSectionIcon() {};

var RenderSectionIcon = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground;
  var snackbar = app.snackbar;
  var theme = app.theme; // From ... store

  var isLoading = app.isLoading;
  var themeMode = theme.mode;
  var pageDef = playground.pageDef;
  var searchIcons = playground.search_icons; // ...

  react.useEffect(function () {
    setTimeout(function () {
      document.getElementById('txt-search-icon').focus();
    }, 100);
  }, []); // ...
  // Events
  // ==================================================================================================

  var handleClearSearch = function handleClearSearch() {
    playground.setField('search_icons', '');
  };

  var handleIconClick = function handleIconClick(iconName) {
    navigator.clipboard.writeText(iconName);
    snackbar.update(true, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("b", null, iconName), " copi\xE9 dans le presse-papier."), 'info');
  }; // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------


  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, "Cette liste d'ic\xF4ne est bas\xE9e sur des ", /*#__PURE__*/react.createElement("b", null, "Material Icons :"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Link_Link, {
    href: "https://fonts.google.com/icons?selected=Material+Icons&icon.style=Outlined",
    target: "_blank"
  }, "https://fonts.google.com/icons"))), /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-search-icon",
    component: "input",
    placeholder: "Rechercher une ic\xF4ne",
    savePath: ['app', 'playground', 'search_icons'],
    disabled: isLoading,
    startAdornment: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "search"
    }),
    endAdornment: /*#__PURE__*/react.createElement(react.Fragment, null, searchIcons && /*#__PURE__*/react.createElement(IconButton, {
      iconName: "clear",
      size: "small",
      onClick: function onClick() {
        return handleClearSearch();
      }
    })),
    style: {
      marginTop: '20px',
      marginBottom: '20px'
    }
  }), /*#__PURE__*/react.createElement(Grid_Grid, null, Object.entries(ICON_KEYS_TO_COMPONENT).map(function (_ref, iconIdx) {
    var _ref2 = PlaygroundIcon_slicedToArray(_ref, 2),
        iconName = _ref2[0],
        IconComponent = _ref2[1];

    // Filtrage en fonction de la recherche utilisateur
    if (searchIcons && iconName.search(searchIcons) == -1) {
      return;
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "nx-playground-icon-card",
      onClick: function onClick() {
        return handleIconClick(iconName);
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "nx-playground-icon"
    }, /*#__PURE__*/react.createElement(IconComponent, {
      color: themeMode == 'light' ? "#5F6368" : "lightgray"
    })), /*#__PURE__*/react.createElement("div", {
      className: "nx-playground-icon-name selectable"
    }, iconName));
  }))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/display/PlaygroundIndicator.css
var PlaygroundIndicator = __webpack_require__(1211);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/display/PlaygroundIndicator.jsx










 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionIndicator *****
// **********************************

var TAG_RenderSectionIndicator = function TAG_RenderSectionIndicator() {};

var RenderSectionIndicator = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var snackbar = app.snackbar;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginBottom: '10px'
    }
  }, "Default"), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "primary"
  }, "primary"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "secondary"
  }, "secondary"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "#009688"
  }, "custom"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "default"
  }, "default"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "success"
  }, "success"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "info"
  }, "info"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "warning"
  }, "warning"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "error"
  }, "error"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "hot"
  }, "hot")), /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  }, "Contrasted"), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "primary",
    variant: "contrasted"
  }, "primary"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "secondary",
    variant: "contrasted"
  }, "secondary"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "#009688",
    variant: "contrasted"
  }, "custom"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "default",
    variant: "contrasted"
  }, "default"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "success",
    variant: "contrasted"
  }, "success"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "info",
    variant: "contrasted"
  }, "info"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "warning",
    variant: "contrasted"
  }, "warning"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "error",
    variant: "contrasted"
  }, "error"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "hot",
    variant: "contrasted"
  }, "hot")), /*#__PURE__*/react.createElement(Heading_Heading, {
    style: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  }, "Outlined"), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "primary",
    variant: "outlined"
  }, "primary"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "secondary",
    variant: "outlined"
  }, "secondary"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    color: "#009688",
    variant: "outlined"
  }, "custom"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "default",
    variant: "outlined"
  }, "default"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "success",
    variant: "outlined"
  }, "success"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "info",
    variant: "outlined"
  }, "info"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "warning",
    variant: "outlined"
  }, "warning"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "error",
    variant: "outlined"
  }, "error"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "hot",
    variant: "outlined"
  }, "hot"))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/display/PlaygroundPopup.css
var PlaygroundPopup = __webpack_require__(3935);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/display/PlaygroundPopup.jsx









 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionPopup *****
// ******************************

var TAG_RenderSectionPopup = function TAG_RenderSectionPopup() {};

var RenderSectionPopup = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var popup = app.popup;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Events
  // ==================================================================================================

  var handleOpenPopup = function handleOpenPopup(popupKey) {
    popup.open(popupKey);
  }; // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------


  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "info"
  }, "Les popups sont \xE0 privil\xE9gier pour afficher des champs ou informations sans changer de page.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, "La variante ", /*#__PURE__*/react.createElement("b", null, "\"dialog\""), " est destin\xE9e \xE0 afficher beaucoup de contenu avec ou sans boutons d'action."), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, "A l'inverse, la variante ", /*#__PURE__*/react.createElement("b", null, "\"modal\""), " est destin\xE9e \xE0 n'afficher que peu de contenu (souvent un texte sous forme de question) auquel l'utilisateur ne peut r\xE9pondre que par \"Oui\" / \"Non\" ou \"Ok\" / \"Annuler\"."))); // Section -> Buttons
  // -------------------------------------------------

  var sectionButtons = [/*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-open-popup-dialog",
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return handleOpenPopup('popupPlaygroundDialog');
    },
    disabled: isLoading
  }, "Dialog"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-open-popup-modal",
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      return handleOpenPopup('popupPlaygroundModal');
    },
    disabled: isLoading
  }, "Modal")]; // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle,
    buttons: sectionButtons
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/ui/list/List.css
var List = __webpack_require__(7883);
;// CONCATENATED MODULE: ../../nexus/react/ui/list/List.jsx
function List_slicedToArray(arr, i) { return List_arrayWithHoles(arr) || List_iterableToArrayLimit(arr, i) || List_unsupportedIterableToArray(arr, i) || List_nonIterableRest(); }

function List_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function List_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return List_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return List_arrayLikeToArray(o, minLen); }

function List_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function List_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function List_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** ListIcon *****
// ********************

var TAG_ListIcon = function TAG_ListIcon() {};

var List_ListIcon = function ListIcon(props) {
  // From ... props
  var name = props.name;
  var color = props.color ? props.color : 'default'; // transparent, default, primary, secondary, severityKey, ...

  var variant = props.variant ? props.variant : 'default'; // default, contained
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-list-icon"
  }, /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: variant == 'contained' ? color : 'transparent' // size="small"
    ,
    iconName: name,
    iconColor: variant == 'contained' ? null : color
  }));
}; // ***** ListText *****
// ********************

var TAG_ListText = function TAG_ListText() {};

var ListText = function ListText(props) {
  // From ... props
  var primary = props.primary ? props.primary : props.children;
  var secondary = props.secondary ? props.secondary : '';

  if (!primary) {
    primary = props.children;
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: "nx-list-text"
  }, primary && /*#__PURE__*/react.createElement(Typography_Typography, {
    className: "nx-list-text-primary"
  }, primary), secondary && /*#__PURE__*/react.createElement(Typography_Typography, {
    variant: "description",
    size: "small",
    className: "nx-list-text-secondary",
    style: {
      marginTop: primary ? '2px' : '0px'
    }
  }, secondary));
}; // ***** ListItem *****
// ********************

var TAG_ListItem = function TAG_ListItem() {};

var ListItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var disabled = props.disabled == true ? true : false;
  var defaultExpanded = props.defaultExpanded == true ? true : false;
  var children = props.children;
  var nested = props.nested;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  var onClick = props.onClick;
  var callbackDelete = props.callbackDelete; // From ... state

  var _React$useState = react.useState(defaultExpanded),
      _React$useState2 = List_slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1]; // ...


  if (expanded && !style.hasOwnProperty('backgroundColor')) {
    style['backgroundColor'] = theme.palette.primary.lightBackground;
  } // Events
  // ==================================================================================================


  var handleClick = function handleClick(evt) {
    if (onClick) {
      onClick(evt);
    } else {
      if (nested) {
        setExpanded(!expanded);
      }
    }
  };

  var handleDeleteClick = function handleDeleteClick() {
    if (callbackDelete) {
      callbackDelete();
    }
  }; // -


  var handleExpandClick = function handleExpandClick() {
    setExpanded(true);
  };

  var handleRetractClick = function handleRetractClick() {
    setExpanded(false);
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-list-item", className, {
      "clickable": onClick || nested
    }, {
      "disabled faded": disabled
    }),
    style: style,
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, props.children, callbackDelete && /*#__PURE__*/react.createElement(IconButton, {
    iconName: "delete",
    color: "error",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      handleDeleteClick();
    }
  }), nested && /*#__PURE__*/react.createElement(react.Fragment, null, !expanded && /*#__PURE__*/react.createElement(IconButton, {
    iconName: "expand_more",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      handleExpandClick();
    }
  }), expanded && /*#__PURE__*/react.createElement(IconButton, {
    iconName: "expand_less",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      handleRetractClick();
    }
  }))), nested && expanded && /*#__PURE__*/react.createElement("div", {
    className: "nx-list-nested"
  }, nested));
}); // ***** List *****
// ****************

var TAG_List = function TAG_List() {};

var List_List = function List(props) {
  // Render
  // ==================================================================================================
  return /*#__PURE__*/react.createElement("div", {
    className: "nx-list"
  }, props.children);
};
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/display/PlaygroundList.css
var PlaygroundList = __webpack_require__(3997);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/display/PlaygroundList.jsx














 // Models
// ======================================================================================================
// ***** PlaygroundListStore *****
// *******************************

var TAG_PlaygroundListStore = function TAG_PlaygroundListStore() {};

var PlaygroundListStore = mobx_state_tree_module/* types.model */.V5.model({
  elements: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.string */.V5.string), [])
}).views(function (self) {
  return {
    get nbElements() {
      return self.elements.length;
    }

  };
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    clear: function clear() {
      self.elements = [];
    },
    init: function init() {
      self.clear();
      self.addElement();
      self.addElement();
    },
    // -
    addElement: function addElement() {
      self.elements.push("Element ".concat(self.nbElements + 1));
    },
    removeElement: function removeElement(elementIdx) {
      self.elements.splice(elementIdx, 1);
    }
  };
}); // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionList *****
// *****************************

var TAG_RenderSectionList = function TAG_RenderSectionList() {};

var RenderSectionList = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef;
  var list = playground.list;
  var elements = list.elements; // ...
  // Events
  // ==================================================================================================

  var handleAddListItemClick = function handleAddListItemClick() {
    list.addElement();
  };

  var handleListItemClick = function handleListItemClick(elementIdx) {
    console.log("Hello from \xE9l\xE9ment ".concat(elementIdx, " :)"));
  };

  var handleListItemDelete = function handleListItemDelete(elementIdx) {
    console.log("Deleting \xE9l\xE9ment ".concat(elementIdx, " :("));
    list.removeElement(elementIdx);
  }; // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------


  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained"
  }, "Simple"), /*#__PURE__*/react.createElement(List_List, null, /*#__PURE__*/react.createElement(ListItem, null, /*#__PURE__*/react.createElement(ListText, {
    primary: "El\xE9ment 1"
  })), /*#__PURE__*/react.createElement(Divider_Divider, null), /*#__PURE__*/react.createElement(ListItem, null, /*#__PURE__*/react.createElement(List_ListIcon, {
    name: "description",
    color: "primary" // variant="contained"

  }), /*#__PURE__*/react.createElement(ListText, {
    primary: "El\xE9ment 2"
  })), /*#__PURE__*/react.createElement(ListItem, null, /*#__PURE__*/react.createElement(List_ListIcon, {
    name: "description",
    color: "primary",
    variant: "contained"
  }), /*#__PURE__*/react.createElement(ListText, {
    primary: "El\xE9ment 3"
  }))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained"
  }, "Complex"), /*#__PURE__*/react.createElement(List_List, null, elements.map(function (element, elementIdx) {
    return /*#__PURE__*/react.createElement(ListItem, {
      key: "element-complex-".concat(elementIdx),
      hoverable: true,
      onClick: function onClick() {
        return handleListItemClick(elementIdx);
      },
      callbackDelete: function callbackDelete() {
        return handleListItemDelete(elementIdx);
      }
    }, /*#__PURE__*/react.createElement(List_ListIcon, {
      name: "folder"
    }), /*#__PURE__*/react.createElement(ListText, {
      primary: "El\xE9ment ".concat(elementIdx),
      secondary: "Description \xE9l\xE9ment ".concat(elementIdx)
    }));
  })), /*#__PURE__*/react.createElement(IconButton, {
    iconName: "add",
    color: "primary",
    onClick: function onClick() {
      return handleAddListItemClick();
    }
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained"
  }, "Nested"), /*#__PURE__*/react.createElement(List_List, null, /*#__PURE__*/react.createElement(ListItem, {
    nested: /*#__PURE__*/react.createElement("div", null, "Contenu nested 1.")
  }, /*#__PURE__*/react.createElement(ListText, {
    primary: "Nested 1"
  })), /*#__PURE__*/react.createElement(ListItem, {
    nested: /*#__PURE__*/react.createElement("div", null, "Contenu nested 2.")
  }, /*#__PURE__*/react.createElement(ListText, {
    primary: "Nested 2"
  })))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/display/PlaygroundTypography.css
var PlaygroundTypography = __webpack_require__(3818);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/display/PlaygroundTypography.jsx













 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionTypography *****
// ***********************************

var TAG_RenderSectionTypography = function TAG_RenderSectionTypography() {};

var RenderSectionTypography = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "info"
  }, "Styles et positionnement de texte standardis\xE9s par le composant ", /*#__PURE__*/react.createElement("b", null, "Typography"), ".", /*#__PURE__*/react.createElement("br", null), "Privil\xE9gier l'utilisation pour \xEAtre compatible avec le mode sombre."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained"
  }, "Size"), /*#__PURE__*/react.createElement(Row_Row, {
    align: "center",
    style: {
      padding: "10px 0px"
    }
  }, ['small', 'default', 'big'].map(function (size, sizeIdx) {
    return /*#__PURE__*/react.createElement(Typography_Typography, {
      size: size
    }, size);
  })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained"
  }, "Align"), /*#__PURE__*/react.createElement(Row_Row, {
    align: "center",
    style: {
      padding: "10px 0px"
    }
  }, ['left', 'center', 'right'].map(function (align, alignIdx) {
    return /*#__PURE__*/react.createElement(Typography_Typography, {
      align: align
    }, align);
  })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained"
  }, "Variant"), /*#__PURE__*/react.createElement(Row_Row, {
    align: "center",
    style: {
      padding: "10px 0px"
    }
  }, ['title', 'subtitle', 'description'].map(function (variant, variantIdx) {
    return /*#__PURE__*/react.createElement(Typography_Typography, {
      variant: variant
    }, variant);
  }))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
}); // ***** RenderSectionHeading *****
// ********************************

var TAG_RenderSectionHeading = function TAG_RenderSectionHeading() {};

var RenderSectionHeading = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = "Heading"; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Column_Column, {
    align: "stretch"
  }, /*#__PURE__*/react.createElement(Heading_Heading, null, "Default"), /*#__PURE__*/react.createElement(Heading_Heading, {
    align: "center"
  }, "Default"), /*#__PURE__*/react.createElement(Heading_Heading, {
    align: "right"
  }, "Default"), /*#__PURE__*/react.createElement(Heading_Heading, {
    uppercase: true
  }, "Uppercase")), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Column_Column, {
    align: "stretch"
  }, /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained"
  }, "Contained"), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained",
    align: "center"
  }, "Contained"), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained",
    align: "right"
  }, "Contained"), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "contained",
    uppercase: true
  }, "Contained")), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Column_Column, {
    align: "stretch"
  }, /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "paper"
  }, "Paper"), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "paper",
    align: "center"
  }, "Paper"), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "paper",
    align: "right"
  }, "Paper"), /*#__PURE__*/react.createElement(Heading_Heading, {
    variant: "paper",
    uppercase: true
  }, "Paper"))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/layout/PlaygroundRow.css
var PlaygroundRow = __webpack_require__(2667);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/layout/PlaygroundRow.jsx












 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionRow *****
// ****************************

var TAG_RenderSectionRow = function TAG_RenderSectionRow() {};

var RenderSectionRow = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "info"
  }, "Organisation de fomulaire horizontale et \xE9lastique (flex de 1 \xE0 12)."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, null, "Espacement"), ['none', 'tiny', 'small', 'medium', 'large', 'xlarge'].map(function (spacing, spacingIdx) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography_Typography, {
      color: "secondary",
      variant: "subtitle",
      className: "nx-playground-subtitle"
    }, spacing), /*#__PURE__*/react.createElement(Row_Row, {
      spacing: spacing
    }, /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "Flex 1")), /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "Flex 1")), /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "Flex 1"))));
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, null, "Alignement"), /*#__PURE__*/react.createElement(Row_Row, {
    spacing: "large"
  }, ['center', 'start', 'end', 'stretch'].map(function (align, alignIdx) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography_Typography, {
      color: "secondary",
      variant: "subtitle",
      align: "center",
      className: "nx-playground-subtitle"
    }, align), /*#__PURE__*/react.createElement(Row_Row, {
      align: align,
      style: {
        minHeight: '80px'
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "1")), /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "1")), /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "1"))));
  }))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/layout/PlaygroundColumn.css
var PlaygroundColumn = __webpack_require__(2411);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/layout/PlaygroundColumn.jsx













 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionColumn *****
// *******************************

var TAG_RenderSectionColumn = function TAG_RenderSectionColumn() {};

var RenderSectionColumn = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "info"
  }, "Organisation de fomulaire verticale et \xE9lastique (flex de 1 \xE0 12)."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, null, "Espacement"), /*#__PURE__*/react.createElement(Row_Row, null, ['none', 'tiny', 'small', 'medium', 'large', 'xlarge'].map(function (spacing, spacingIdx) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography_Typography, {
      color: "secondary",
      variant: "subtitle",
      align: "center",
      className: "nx-playground-subtitle"
    }, spacing), /*#__PURE__*/react.createElement(Column_Column, {
      spacing: spacing,
      style: {
        minHeight: '180px'
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "Flex 1")), /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "Flex 1")), /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "Flex 1"))));
  })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, null, "Alignement"), /*#__PURE__*/react.createElement(Row_Row, {
    spacing: "large"
  }, ['center', 'start', 'end', 'stretch'].map(function (align, alignIdx) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography_Typography, {
      color: "secondary",
      variant: "subtitle",
      align: "center",
      className: "nx-playground-subtitle"
    }, align), /*#__PURE__*/react.createElement(Column_Column, {
      align: align,
      style: {
        minHeight: '80px'
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "1")), /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "1")), /*#__PURE__*/react.createElement("div", {
      className: "dummy-block"
    }, /*#__PURE__*/react.createElement("label", null, "1"))));
  }))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/feedback/PlaygroundSnackbar.css
var PlaygroundSnackbar = __webpack_require__(6222);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/feedback/PlaygroundSnackbar.jsx









 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionSnackbar *****
// *********************************

var TAG_RenderSectionSnackbar = function TAG_RenderSectionSnackbar() {};

var RenderSectionSnackbar = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var snackbar = app.snackbar;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Events
  // ==================================================================================================

  var handleSnackbar = function handleSnackbar(severity) {
    snackbar.update(true, /*#__PURE__*/react.createElement("div", null, "Test de snackbar ", /*#__PURE__*/react.createElement("b", null, severity)), severity);
  }; // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------


  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "info"
  }, "Les snackbars permettent de mettre en valeur le r\xE9sultat d'une action d\xE9clench\xE9e par l'utilisateur.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '5px'
    }
  }, /*#__PURE__*/react.createElement("b", null, "Cliquez sur un bouton ci-dessous"), " pour afficher la snackbar correspondante.")); // Section -> Buttons
  // -------------------------------------------------

  var sectionButtons = [/*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-default",
    variant: "contained",
    color: "default",
    onClick: function onClick() {
      return handleSnackbar('default');
    },
    disabled: isLoading
  }, "Default"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-success",
    variant: "contained",
    color: "success",
    onClick: function onClick() {
      return handleSnackbar('success');
    },
    disabled: isLoading
  }, "Success"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-info",
    variant: "contained",
    color: "info",
    onClick: function onClick() {
      return handleSnackbar('info');
    },
    disabled: isLoading
  }, "Info"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-warning",
    variant: "contained",
    color: "warning",
    onClick: function onClick() {
      return handleSnackbar('warning');
    },
    disabled: isLoading
  }, "Warning"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-error",
    variant: "contained",
    color: "error",
    onClick: function onClick() {
      return handleSnackbar('error');
    },
    disabled: isLoading
  }, "Error"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-hot",
    variant: "contained",
    color: "hot",
    onClick: function onClick() {
      return handleSnackbar('hot');
    },
    disabled: isLoading
  }, "Hot")]; // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle,
    buttons: sectionButtons,
    buttonsResponsive: true
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/feedback/PlaygroundAlert.css
var PlaygroundAlert = __webpack_require__(26);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/feedback/PlaygroundAlert.jsx










 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionAlert *****
// ******************************

var TAG_RenderSectionAlert = function TAG_RenderSectionAlert() {};

var RenderSectionAlert = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(Column_Column, {
    align: "stretch"
  }, /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "default"
  }, "Une alerte :: ", /*#__PURE__*/react.createElement("b", null, "default")), /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "help"
  }, "Une alerte :: ", /*#__PURE__*/react.createElement("b", null, "help")), /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "success"
  }, "Une alerte :: ", /*#__PURE__*/react.createElement("b", null, "success")), /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "warning"
  }, "Une alerte :: ", /*#__PURE__*/react.createElement("b", null, "warning")), /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "error"
  }, "Une alerte :: ", /*#__PURE__*/react.createElement("b", null, "error")), /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "info"
  }, "Une alerte :: ", /*#__PURE__*/react.createElement("b", null, "info")), /*#__PURE__*/react.createElement(Alert_Alert, {
    severity: "hot"
  }, "Une alerte :: ", /*#__PURE__*/react.createElement("b", null, "hot"))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/feedback/PlaygroundSession.css
var PlaygroundSession = __webpack_require__(9913);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/feedback/PlaygroundSession.jsx









 // Functions Components ReactJS
// ======================================================================================================
// ***** RenderSectionSession *****
// ********************************

var TAG_RenderSectionSession = function TAG_RenderSectionSession() {};

var RenderSectionSession = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var pageDef = playground.pageDef; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = pageDef.label; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: pageDef.icon
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Typography_Typography, null, "Bient\xF4t !")); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
});
// EXTERNAL MODULE: ../../nexus/react/ui/popup/Popup.css
var Popup = __webpack_require__(2055);
;// CONCATENATED MODULE: ../../nexus/react/ui/popup/Popup.jsx













function Popup_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Popup_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Popup_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Popup_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Popup_arrayLikeToArray(o, minLen); }

function Popup_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







 // Models
// ======================================================================================================
// ***** PopupDef *****
// ********************

var TAG_PopupDef = function TAG_PopupDef() {};

var PopupDef = mobx_state_tree_module/* types.model */.V5.model({
  key: '',
  open: false,
  msg: '',
  msgSeverity: 'info'
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    setMessage: function setMessage(msg, severity) {
      self.msg = msg;
      self.msgSeverity = severity;
    },
    clearMessage: function clearMessage() {
      self.msg = '';
      self.msgSeverity = 'info';
    }
  };
}); // ***** PopupStore *****
// **********************

var TAG_PopupStore = function TAG_PopupStore() {};

var PopupStore = mobx_state_tree_module/* types.model */.V5.model({
  registered: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(PopupDef), [])
}).views(function (self) {
  return {
    // Getters
    // -
    getPopupByKey: function getPopupByKey(key) {
      var _iterator = Popup_createForOfIteratorHelper(self.registered),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var popup = _step.value;

          if (popup.key == key) {
            return popup;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    },
    // Bools
    // -
    isOpen: function isOpen(key) {
      // La popup passée en paramètre est-elle ouverte ?
      // ---
      var _iterator2 = Popup_createForOfIteratorHelper(self.registered),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var popup = _step2.value;

          if (popup.key == key && popup.open == true) {
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    },

    get isOneOpen() {
      // Au moins une popup est-elle ouverte ?
      // ---
      var _iterator3 = Popup_createForOfIteratorHelper(self.registered),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var popup = _step3.value;

          if (popup.open == true) {
            return true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return false;
    }

  };
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    register: function register(key) {
      // Déclare une nouvelle popup
      // ---
      var found = false;

      var _iterator4 = Popup_createForOfIteratorHelper(self.registered),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var popup = _step4.value;

          if (popup.key == key) {
            found = true;
            break;
          }
        } // Nouvelle popup

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (!found) {
        var newPopup = PopupDef.create({
          'key': key
        });
        self.registered.push(newPopup);
      }
    },
    update: function update(open, key) {
      // Ouvre ou ferme la popup passée en paramètres
      // ---
      var _iterator5 = Popup_createForOfIteratorHelper(self.registered),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var popup = _step5.value;

          if (key) {
            if (key == popup.key) {
              popup.open = open;
            }
          } else {
            popup.open = false;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    open: function open(key) {
      // Ouvre la popup passée en paramètres
      // ---
      self.update(true, key);
    },
    close: function close(key) {
      // Ferme la popup passée en paramètres
      // ---
      self.update(false, key);
    },
    //
    setMessage: function setMessage(key, msg, severity) {
      // Message interne à la popup
      // ---
      var popup = self.getPopupByKey(key);

      if (popup) {
        popup.setMessage(msg, severity);
      }
    },
    clearMessage: function clearMessage(key) {
      // Efface le message interne à la popup
      // ---
      var popup = self.getPopupByKey(key);

      if (popup) {
        popup.clearMessage();
      }
    }
  };
}); // Functions Components ReactJS
// ======================================================================================================
// ***** Popup *****
// *****************

var TAG_Popup = function TAG_Popup() {};

var Popup_Popup = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var popup = app.popup;
  var theme = app.theme; // From ... props

  var id = props.id ? props.id : '';
  var open = props.open;
  var variant = props.variant ? props.variant : "dialog"; // dialog, modal

  var title = props.title ? props.title : null;
  var left = props.left ? props.left : null;
  var right = props.right ? props.right : null;
  var disableCloseButton = props.disableCloseButton == true ? true : false;
  var buttons = props.buttons ? props.buttons : [];
  var fullscreen = props.fullscreen;
  var callbackOpen = props.callbackOpen;
  var callbackClose = props.callbackClose;
  var children = props.children;
  var fullHeight = props.fullHeight == true ? true : false;
  var maxWidthKey = props.maxWidth != undefined ? props.maxWidth : 'sm'; // xs, sm, md, lg, xl, false, string

  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // From ... store

  var isMobile = app.isMobile;
  var isDesktop = app.isDesktop;
  var isLoading = app.isLoading; // ...

  var isOpen = open != undefined ? open : popup.isOpen(id);
  var isFullscreen = fullscreen != undefined ? fullscreen : isMobile; // Events
  // ==================================================================================================

  var handleCloseClick = function handleCloseClick() {
    popup.close(id);

    if (callbackClose) {
      callbackClose();
    }
  }; // Render
  // ==================================================================================================


  var popupContent = null;

  if (isOpen) {
    if (!style.hasOwnProperty("maxWidth")) {
      var maxWidth = theme.getWidthFromKey(maxWidthKey);

      if (maxWidth) {
        style['width'] = "100%";
        style['maxWidth'] = maxWidth;
      }
    } // Popup :: Header
    // ---------------------------------------------------


    var headerStyle = {
      "backgroundColor": theme.getColorFromKey("primary")
    };

    if (variant == "modal") {
      headerStyle["backgroundColor"] = theme.getColorFromKey("secondary");
    } // Titre
    // -


    var popupTitle = null;

    if (title && typeof title == "string") {
      popupTitle = /*#__PURE__*/react.createElement("div", {
        className: "nx-popup-title"
      }, title);
    } else {
      popupTitle = title;
    } // Bouton de fermeture
    // -


    var popupCloseButton = null;

    if (!disableCloseButton && variant == "dialog") {
      popupCloseButton = /*#__PURE__*/react.createElement(IconButton, {
        color: "#FFFFFF",
        iconName: isMobile ? "expand_more" : "close",
        onClick: function onClick() {
          return handleCloseClick();
        }
      });
    } // Popup :: Content
    // ---------------------------------------------------


    var popupDef = popup.getPopupByKey(id);
    var popupMsg = popupDef ? popupDef.msg : '';
    var popupMsgSeverity = popupDef ? popupDef.msgSeverity : 'info'; // ---------------------------------------------------

    popupContent = /*#__PURE__*/react.createElement("div", {
      className: "nx-popup-wrapper"
    }, /*#__PURE__*/react.createElement("div", {
      id: id,
      className: (0,clsx_m/* default */.Z)("nx-popup", variant, {
        "fullscreen": isFullscreen
      }, className),
      style: style
    }, (left || right || popupTitle || popupCloseButton) && /*#__PURE__*/react.createElement("div", {
      className: "nx-popup-header",
      style: headerStyle
    }, left, popupTitle, right, popupCloseButton), children && /*#__PURE__*/react.createElement("div", {
      className: "nx-popup-content"
    }, children), popupMsg && /*#__PURE__*/react.createElement(Alert_Alert, null), buttons.length > 0 && /*#__PURE__*/react.createElement("div", {
      className: "nx-popup-footer"
    }, variant == 'dialog' && /*#__PURE__*/react.createElement("div", {
      className: "flex-1 responsive-hidden"
    }), buttons)));
  }

  return popupContent;
});
// EXTERNAL MODULE: ../../nexus/react/popups/playground_dialog/PopupPlaygroundDialog.css
var PopupPlaygroundDialog = __webpack_require__(5501);
;// CONCATENATED MODULE: ../../nexus/react/popups/playground_dialog/PopupPlaygroundDialog.jsx








 // Models
// ======================================================================================================
// ***** PopupPlaygroundStore *****
// ********************************

var TAG_PopupPlaygroundStore = function TAG_PopupPlaygroundStore() {};

var PopupPlaygroundStore = mobx_state_tree_module/* types.model */.V5.model({
  loaded: false
}).views(function (self) {
  return {
    // Bools
    // -
    get isLoaded() {
      if (self.loaded) {
        return true;
      }

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
      self.loaded = true;
    },
    load: function load(callback) {
      // Appel AJAX de chargement
      // ---
      // ...
      self.update(null);

      if (callback) {
        callback();
      }
    }
  };
}); // Functions Components ReactJS
// ======================================================================================================
// ***** PopupPlaygroundDialog *****
// *********************************

var TAG_PopupPlaygroundDialog = function TAG_PopupPlaygroundDialog() {};

var popupPlaygroundDialogKey = 'popupPlaygroundDialog';
var PopupPlaygroundDialog_PopupPlaygroundDialog = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var popup = app.popup;
  var playground = app.playground;
  var popupPlayground = playground.popupPlayground; // From ... store

  var isLoading = app.isLoading;
  var loaded = popupPlayground.isLoaded;
  var isOpen = popup.isOpen(popupPlaygroundDialogKey); // Events
  // ==================================================================================================

  var handleOpen = function handleOpen() {
    popupPlayground.load(function () {
      popup.setMessage(popupPlaygroundDialogKey, 'Message interne popup.', 'success');
    });
  };

  var handleClose = function handleClose() {
    popup.clearMessage(popupPlaygroundDialogKey);
  }; // Render
  // ==================================================================================================
  // Popup --> Title
  // -----------------------------------------------


  var popupTitle = "Dialog"; // Popup --> Content
  // -----------------------------------------------

  var popupContent = /*#__PURE__*/react.createElement(Helper_Helper, {
    iconName: "hourglass_empty",
    show: true,
    inFlux: true,
    style: {
      minHeight: '350px'
    }
  });

  if (loaded && isOpen) {
    popupContent = /*#__PURE__*/react.createElement("div", null, "Contenu popup test 1.");
  } // Popup --> Buttons
  // -----------------------------------------------


  var popupButtons = [];
  popupButtons.push( /*#__PURE__*/react.createElement(Button_Button, {
    id: "btn-close-popup-playground-dialog",
    key: "btn-close-popup-playground-dialog",
    disabled: isLoading,
    onClick: function onClick() {
      return popup.close(popupPlaygroundDialogKey);
    }
  }, "Fermer"));
  popupButtons.push( /*#__PURE__*/react.createElement(Button_Button, {
    id: "btn-load-popup-playground-dialog",
    key: "btn-load-popup-playground-dialog",
    color: "primary",
    disabled: isLoading,
    onClick: function onClick() {
      return app.addTask('load_popup');
    }
  }, "Load")); // -----------------------------------------------

  return /*#__PURE__*/react.createElement(Popup_Popup, {
    id: popupPlaygroundDialogKey,
    title: popupTitle,
    variant: "dialog",
    buttons: popupButtons,
    callbackOpen: handleOpen,
    callbackClose: handleClose
  }, popupContent);
});
// EXTERNAL MODULE: ../../nexus/react/contexts/playground/Playground.css
var Playground = __webpack_require__(1785);
;// CONCATENATED MODULE: ../../nexus/react/contexts/playground/Playground.jsx
function Playground_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Playground_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Playground_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Playground_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Playground_arrayLikeToArray(o, minLen); }

function Playground_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



















































 // Datas
// -------------------------------------------------------------------------------------------------------------

var PLAYGROUND_PAGES = [{
  value: '',
  label: "Hello world!",
  icon: 'api'
}, // -
{
  title: "Input",
  value: 'button',
  label: "Button",
  icon: 'smart_button'
}, {
  value: 'field',
  label: "Field",
  icon: 'input'
}, {
  value: 'switch',
  label: "Switch",
  icon: 'toggle_off'
}, {
  value: 'html',
  label: "HTML Editor",
  icon: 'code'
}, // -
{
  title: "Data display",
  value: 'avatar',
  label: "Avatar",
  icon: 'account_circle'
}, {
  value: 'chip',
  label: "Chip",
  icon: 'edit_attributes',
  hidden: true
}, {
  value: 'icon',
  label: "Icon",
  icon: 'rocket'
}, {
  value: 'indicator',
  label: "Indicator",
  icon: 'dynamic_feed'
}, {
  value: 'popup',
  label: "Popup",
  icon: 'fullscreen'
}, {
  value: 'list',
  label: "List",
  icon: 'list'
}, {
  value: 'typography',
  label: "Typography",
  icon: 'text_fields'
}, // -
{
  title: "Layout",
  value: 'row',
  label: "Row",
  icon: 'view_headline'
}, {
  value: 'column',
  label: "Column",
  icon: 'view_column'
}, // -
{
  title: "Feedback",
  value: 'snackbar',
  label: "Snackbar",
  icon: 'call_to_action'
}, {
  value: 'alert',
  label: "Alert",
  icon: 'announcement'
}, {
  value: 'session',
  label: "Session",
  icon: 'access_alarms',
  hidden: true
}];
var PLAYGROUND_PAGES_BY_KEY = {};

for (var Playground_i = 0, _PLAYGROUND_PAGES = PLAYGROUND_PAGES; Playground_i < _PLAYGROUND_PAGES.length; Playground_i++) {
  var playgroundPage = _PLAYGROUND_PAGES[Playground_i];
  PLAYGROUND_PAGES_BY_KEY[playgroundPage.value] = playgroundPage;
} // Models
// -------------------------------------------------------------------------------------------------------------
// ***** PlaygroundStore *****
// ***************************


var TAG_PlaygroundStore = function TAG_PlaygroundStore() {};

var PlaygroundStore = mobx_state_tree_module/* types.model */.V5.model({
  doc_id: '',
  doc_rev: '',
  doc_state: 0,
  value_text: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  value_number: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.integer */.V5.integer),
  value_date: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  value_time: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  value_select: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  value_textarea: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  value_autocomplete_1: mobx_state_tree_module/* types.optional */.V5.optional(AutocompleteStore, {}),
  value_autocomplete_2: mobx_state_tree_module/* types.optional */.V5.optional(AutocompleteStore, {}),
  value_switcher: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  value_radio: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  value_checkbox: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.boolean */.V5.boolean),
  // -
  value_html: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  // -
  search_icons: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  // -
  list: mobx_state_tree_module/* types.optional */.V5.optional(PlaygroundListStore, {}),
  // -
  popupPlayground: mobx_state_tree_module/* types.optional */.V5.optional(PopupPlaygroundStore, {}),
  // -
  value_switch_1: false,
  value_switch_2: false,
  value_switch_3: false,
  // -
  currentPageKey: '',
  loaded: false
}).views(function (self) {
  return {
    get pageDef() {
      if (PLAYGROUND_PAGES_BY_KEY.hasOwnProperty(self.currentPageKey)) {
        return PLAYGROUND_PAGES_BY_KEY[self.currentPageKey];
      }

      return null;
    },

    // Bools
    // -
    get isEditable() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var editMode = app.editMode;

      if (editMode) {
        return true;
      }

      return false;
    },

    isCurrentPage: function isCurrentPage(pageKey) {
      // La page passée en paramètres est-elle la page courante ?
      // ---
      if (self.currentPageKey == pageKey) {
        return true;
      }

      return false;
    },

    // -
    get showHelperButtons() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var menu = app.menu;
      var breakPoint414 = app.breakPoint414;
      var drawerPinned = menu.pinned;

      if (breakPoint414 || !drawerPinned) {
        return true;
      }

      return false;
    },

    get showSaveButton() {
      if (self.isEditable) {
        return true;
      }

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
      if (raw) {
        self.doc_id = raw.doc_id;
        self.doc_rev = raw.doc_rev;
        self.doc_state = raw.doc_state;
        self.value_text = raw.value_text;
        self.value_number = raw.value_number;
        self.value_date = raw.value_date;
        self.value_time = raw.value_time;
        self.value_select = raw.value_select;
        self.value_textarea = raw.value_textarea;
        self.value_autocomplete_1 = AutocompleteStore.create({});
        self.value_autocomplete_1.update(raw.value_autocomplete_1);
        self.value_autocomplete_2 = AutocompleteStore.create({});
        self.value_autocomplete_2.update(raw.value_autocomplete_2);
        self.value_switcher = raw.value_switcher;
        self.value_radio = raw.value_radio;
        self.value_checkbox = raw.value_checkbox;
        self.value_html = raw.value_html;
      } // -


      self.list.init(); // -

      self.loaded = true;
    },
    load: function load() {
      // Appel AJAX de la fonction de chargement des données de playground
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var snackbar = app.snackbar;
      var staticMode = app.staticMode;

      if (!staticMode) {
        var url = "/playground_actions/load";
        app.fetchJSON(url, null, false, 'POST').then(function (json) {
          self.update(json.playground_raw);
        })["catch"](function (ex) {
          console.error("Fetch failed for ".concat(url), ex);
          snackbar.update(true, "Une erreur est survenue.", "error");
        });
      } else {
        self.update(null);
      }
    },
    validate: function validate(callback) {
      // Validation des données du playground
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var errors = [];

      if (callback) {
        callback(errors);
      }

      return errors;
    },
    save: function save() {
      // Appel AJAX de la fonction d'enregistrement du playground
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var snackbar = app.snackbar;
      var ajaxNexorium = store.ajaxNexorium;
      var params = new FormData();
      params.append('playground_raw', JSON.stringify(self.toJSON()));
      var url = "".concat(ajaxNexorium, "/playground_actions/save");
      app.fetchJSON(url, {
        'body': params
      }, false, 'POST').then(function (json) {
        self.update(json.playground_raw);
        snackbar.update(true, "Enregistrement effectué.", "success");
      })["catch"](function (ex) {
        console.error("Fetch failed for ".concat(url), ex);
        snackbar.update(true, "Une erreur est survenue.", "error");
      });
    },
    // -
    openPage: function openPage(pageKey) {
      // Ouvre la page passée en paramètres
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var playgroundContext = app.playgroundContext;
      app.navigateTo(playgroundContext, null, null, {
        pageKey: pageKey
      });
    }
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** RenderPlayground *****
// ****************************

var TAG_RenderPlayground = function TAG_RenderPlayground() {};

var RenderPlayground = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var loaded = playground.loaded;
  var currentPageKey = playground.currentPageKey; // ...

  react.useEffect(function () {
    if (!loaded) {
      playground.load();
    }
  }, [loaded]); // ...
  // Render
  // ==================================================================================================

  var contentPlayground = null;

  if (loaded) {
    contentPlayground = /*#__PURE__*/react.createElement(react.Fragment, null, currentPageKey == 'button' && /*#__PURE__*/react.createElement(RenderSectionButton, null), currentPageKey == 'field' && /*#__PURE__*/react.createElement(RenderSectionField, null), currentPageKey == 'switch' && /*#__PURE__*/react.createElement(RenderSectionSwitch, null), currentPageKey == 'html' && /*#__PURE__*/react.createElement(RenderSectionHTML, null), currentPageKey == 'avatar' && /*#__PURE__*/react.createElement(RenderSectionAvatar, null), currentPageKey == 'chip' && /*#__PURE__*/react.createElement(RenderSectionChip, null), currentPageKey == 'icon' && /*#__PURE__*/react.createElement(RenderSectionIcon, null), currentPageKey == 'indicator' && /*#__PURE__*/react.createElement(RenderSectionIndicator, null), currentPageKey == 'popup' && /*#__PURE__*/react.createElement(RenderSectionPopup, null), currentPageKey == 'list' && /*#__PURE__*/react.createElement(RenderSectionList, null), currentPageKey == 'typography' && /*#__PURE__*/react.createElement(RenderSectionTypography, null), currentPageKey == 'typography' && /*#__PURE__*/react.createElement(RenderSectionHeading, null), currentPageKey == 'row' && /*#__PURE__*/react.createElement(RenderSectionRow, null), currentPageKey == 'column' && /*#__PURE__*/react.createElement(RenderSectionColumn, null), currentPageKey == 'snackbar' && /*#__PURE__*/react.createElement(RenderSectionSnackbar, null), currentPageKey == 'alert' && /*#__PURE__*/react.createElement(RenderSectionAlert, null), currentPageKey == 'session' && /*#__PURE__*/react.createElement(RenderSectionSession, null));
  }

  return contentPlayground;
}); // ***** PlaygroundHeaderLeft *****
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
}); // ***** PlaygroundHeaderRight *****
// *********************************

var TAG_PlaygroundHeaderRight = function TAG_PlaygroundHeaderRight() {};

var PlaygroundHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var staticMode = app.staticMode; // ...
  // Events
  // ==================================================================================================

  var handleSaveClick = function handleSaveClick() {
    playground.validate(function (errors) {
      if (errors.length == 0) {
        playground.save();
      }
    });
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(react.Fragment, null, !staticMode && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleSaveClick();
    },
    disabled: isLoading,
    title: "Enregistrer"
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "save",
    color: "white"
  })), /*#__PURE__*/react.createElement(HeaderDivider, null)));
}); // ***** PlaygroundMenuItem *****
// ******************************

var TAG_PlaygroundMenuItem = function TAG_PlaygroundMenuItem() {};

var PlaygroundMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...

  var playgroundContext = app.playgroundContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(playgroundContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "science",
    label: "Playground",
    activeContexts: [playgroundContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** RenderDrawerPlaygroundItems *****
// ***************************************

var TAG_RenderDrawerPlaygroundItems = function TAG_RenderDrawerPlaygroundItems() {};

var RenderDrawerPlaygroundItems = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = app.playground; // From ... store

  var staticMode = app.staticMode;
  var breakPoint650 = app.breakPoint650; // Renderers
  // ==================================================================================================

  var renderItemPlaygroundPage = function renderItemPlaygroundPage(page) {
    // Item -> Playground Page
    // ---
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: "menu-item-".concat(page.value)
    }, page.title && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(MenuTitle, {
      title: page.title
    })), /*#__PURE__*/react.createElement(MenuItem, {
      key: "menu-item-".concat(page.value),
      iconName: page.icon,
      label: page.label,
      activeContexts: ['playground'],
      currentCallback: function currentCallback() {
        return playground.isCurrentPage(page.value);
      },
      callbackClick: function callbackClick() {
        return playground.openPage(page.value);
      }
    }));
  }; // -----------------------------------------------------


  return /*#__PURE__*/react.createElement(react.Fragment, null, breakPoint650 && /*#__PURE__*/react.createElement(HomeMenuItem, null), breakPoint650 && /*#__PURE__*/react.createElement(MenuDivider, null), !staticMode && /*#__PURE__*/react.createElement(MenuSwitches, {
    allowedEditContexts: ['playground']
  }), PLAYGROUND_PAGES.map(function (page, pageIdx) {
    if (page.hidden) {
      return;
    }

    return renderItemPlaygroundPage(page);
  }));
}); // ***** PlaygroundPage *****
// **************************

var TAG_PlaygroundPage = function TAG_PlaygroundPage() {};

var PlaygroundPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var initialized = app.initialized;
  var breakPoint650 = app.breakPoint650;
  var themeMode = theme.mode;
  var loaded = playground.loaded;
  var currentPageKey = playground.currentPageKey;
  var showHelperButtons = playground.showHelperButtons; // ...

  var showHelper = !initialized || !loaded || !currentPageKey ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page -> que quand l'app est intitialisée (pour useEffect)
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(RenderPlayground, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    var helperContent = null;

    if (showHelperButtons) {
      var helperButtons = [];

      var _iterator = Playground_createForOfIteratorHelper(PLAYGROUND_PAGES),
          _step;

      try {
        var _loop = function _loop() {
          var page = _step.value;
          var PageIcon = page.icon; // Titre de session

          if (page.title) {
            helperButtons.push( /*#__PURE__*/react.createElement(Heading_Heading, {
              key: "heading-helper-".concat(page.value),
              style: {
                margin: '20px'
              }
            }, page.title));
          } // Bouton de lien vers une page du playground


          helperButtons.push( /*#__PURE__*/react.createElement(Row_Row, {
            key: "btn-helper-".concat(page.value)
          }, /*#__PURE__*/react.createElement(NavCard_NavCard, {
            icon: page.icon,
            label: page.label,
            disabled: isLoading,
            faded: isLoading,
            variant: "list",
            onClick: function onClick() {
              return playground.openPage(page.value);
            }
          })));
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      helperContent = /*#__PURE__*/react.createElement("div", {
        style: {
          marginTop: '30px'
        }
      }, helperButtons);
    }

    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "science",
      title: "Bienvenue sur le playground !",
      subtitle: /*#__PURE__*/react.createElement("div", {
        style: {
          lineHeight: '20px'
        }
      }, "Tous les projets pr\xE9sent\xE9s ici sont bas\xE9s sur du code commun back & front nomm\xE9 ", /*#__PURE__*/react.createElement("b", null, "Nexus"), ".", /*#__PURE__*/react.createElement("br", null), "Cette librairie \"faite maison\" est d\xE9velopp\xE9e sur mesure par mes soins pour r\xE9pondre aux besoins des projets ainsi que pour standardiser le d\xE9veloppement \uD83E\uDD13.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Alert_Alert, {
        severity: "info",
        style: {
          textAlign: 'left'
        }
      }, "Cette section est d\xE9di\xE9e \xE0 la partie Front de Nexus. Elle se nomme ", /*#__PURE__*/react.createElement("b", null, "NxApp"), " et fournit un squelette accompagn\xE9 d'une suite de composants qui, essemble, d\xE9finissent ma vision de ce qu'est une webapp.", /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("br", null), "Explorez les diverses d\xE9mo des composants d'affichage pour avoir un aper\xE7u des capacit\xE9s d'NxApp ! \uD83D\uDE80", /*#__PURE__*/react.createElement(Row_Row, {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/react.createElement(Indicator_Indicator, {
        color: "primary"
      }, /*#__PURE__*/react.createElement("b", null, "Back :"), " Python \uD83D\uDC0D + Pyramid"), /*#__PURE__*/react.createElement(Indicator_Indicator, {
        color: "primary"
      }, /*#__PURE__*/react.createElement("b", null, "Front :"), " ReactJS + mobx-state-tree \uD83D\uDE0E")), /*#__PURE__*/react.createElement(Link_Link, {
        href: "https://github.com/vincent114/nexus",
        target: "_blank",
        style: {
          display: 'block',
          marginTop: '20px'
        }
      }, "Voir le code de Nexus sur Github"), /*#__PURE__*/react.createElement(Alert_Alert, {
        severity: "warning",
        style: {
          textAlign: 'left',
          marginTop: '20px'
        }
      }, "Une grande partie de tout ce que vous verrez ici est toujours sous l'objet d'un d\xE9veloppement intensif \uD83E\uDD75")),
      show: showHelper,
      inFlux: true
    }, helperContent);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/layout/menu/Menu.css
var Menu = __webpack_require__(4397);
;// CONCATENATED MODULE: ../../nexus/react/layout/menu/Menu.jsx















 // Datas
// -------------------------------------------------------------------------------------------------------------

var DEFAULT_DRAWER_CONTEXTUAL_ITEMS = {
  'playground': RenderDrawerPlaygroundItems
}; // Models
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
  // From ... props
  var children = props.children ? props.children : null; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(Divider_Divider, {
    title: children,
    style: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  });
}); // ***** MenuTitle *****
// *********************

var TAG_MenuTitle = function TAG_MenuTitle() {};

var MenuTitle = function MenuTitle(props) {
  // From ... props
  var title = props.title ? props.title : '';
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-menu-title", className),
    style: style
  }, title);
}; // ***** MenuItem *****
// ********************

var TAG_MenuItem = function TAG_MenuItem() {};

var MenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... store

  var context = app.context;
  var isLoading = app.isLoading;
  var themeMode = theme.mode; // From ... props

  var iconName = props.iconName;
  var label = props.label;
  var activeContexts = props.activeContexts ? props.activeContexts : [];
  var disabled = props.disabled == true ? props.disabled : isLoading;
  var style = props.style ? props.style : {};
  var styleLabel = {
    'color': themeMode == 'light' ? 'black' : 'white'
  };
  var currentCallback = props.currentCallback;
  var callbackClick = props.callbackClick; // ...

  var active = false;

  if (currentCallback) {
    active = currentCallback();
  } else {
    if (activeContexts.indexOf(context) > -1) {
      active = true;
    }
  }

  if (!style.hasOwnProperty('color')) {
    if (active) {
      style['backgroundColor'] = hexToRgbA(theme.palette.primary.main, 0.1);
      styleLabel['color'] = theme.palette.primary.main;
      styleLabel['fontWeight'] = 'bold';
    }
  } // Events
  // ==================================================================================================


  var handleClick = function handleClick() {
    if (callbackClick) {
      callbackClick();
    }
  }; // Render
  // ==================================================================================================
  // width="120px"


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-menu-item", {
      'active': active
    }, {
      'disabled': disabled
    }),
    style: style,
    onClick: function onClick() {
      return handleClick();
    }
  }, iconName && /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "transparent",
    iconName: iconName,
    iconColor: active ? "primary" : null
  }), /*#__PURE__*/react.createElement("div", {
    className: "nx-menu-item-label",
    style: styleLabel
  }, label));
}); // ***** MenuSwitches *****
// ************************

var TAG_MenuSwitches = function TAG_MenuSwitches() {};

var MenuSwitches = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... props

  var switchKey = props.switchKey ? props.switchKey : '';
  var allowedEditContexts = props.allowedEditContexts ? props.allowedEditContexts : ['playground'];
  var allowedDebugContexts = props.allowedDebugContexts ? props.allowedDebugContexts : ['admin']; // From ... store

  var isLoading = app.isLoading;
  var context = app.context; // ...
  // Render
  // ==================================================================================================
  // Edit
  // -------------------------------------------------

  var editSwitch = null;

  if (account.is_editor || allowedEditContexts.indexOf(context) > -1) {
    editSwitch = /*#__PURE__*/react.createElement(Switch_Switch, {
      label: "Edition",
      savePath: ['app', 'editMode'],
      disabled: isLoading
    });
  } // Debug
  // -------------------------------------------------


  var debugSwitch = null;

  if (account.is_admin || allowedDebugContexts.indexOf(context) > -1) {
    debugSwitch = /*#__PURE__*/react.createElement(Switch_Switch, {
      label: "Debug",
      savePath: ['app', 'debugMode'],
      disabled: isLoading
    });
  } // -------------------------------------------------


  var menuSwitchContent = null;

  if (editSwitch || debugSwitch) {
    menuSwitchContent = /*#__PURE__*/react.createElement("div", {
      className: "nx-menu-switch"
    }, editSwitch, debugSwitch, /*#__PURE__*/react.createElement(MenuDivider, null));
  }

  return menuSwitchContent;
}); // ***** Menu *****
// ****************

var TAG_Menu = function TAG_Menu() {};

var Menu_Menu = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu;
  var theme = app.theme;
  var account = app.account; // From ... store

  var context = app.context;
  var breakPoint650 = app.breakPoint650;
  var appKind = app.kind;
  var open = menu.open;
  var expanded = menu.expanded;
  var pinned = menu.pinned;
  var name = account.name; // From ... props

  var content = props.children; // ...

  if (DEFAULT_DRAWER_CONTEXTUAL_ITEMS.hasOwnProperty(context)) {
    var DefaultDrawerContextualItemsComponent = DEFAULT_DRAWER_CONTEXTUAL_ITEMS[context];
    content = /*#__PURE__*/react.createElement(DefaultDrawerContextualItemsComponent, null);
  } // Events
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
  }, (breakPoint650 || !pinned) && /*#__PURE__*/react.createElement("div", {
    className: "nx-menu-header",
    style: {
      backgroundColor: hexToRgbA(theme.palette.primary.main, 0.8),
      color: theme.palette.primary.contrastText
    }
  }, /*#__PURE__*/react.createElement("label", null, name)), /*#__PURE__*/react.createElement("div", {
    className: "nx-menu-items-wrapper"
  }, content), !breakPoint650 && /*#__PURE__*/react.createElement(IconButton, {
    iconName: "push_pin",
    iconVariant: pinned ? "filled" : "outlined",
    color: "typography",
    onClick: function onClick() {
      return handlePinClick();
    }
  }));
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
// EXTERNAL MODULE: ../../nexus/react/contexts/portal/Portal.css
var portal_Portal = __webpack_require__(1999);
;// CONCATENATED MODULE: ../../nexus/react/contexts/portal/Portal.jsx










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
// ***** PortalHeaderLeft *****
// ****************************

var TAG_PortalHeaderLeft = function TAG_PortalHeaderLeft() {};

var PortalHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Portail",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** PortalHeaderRight *****
// *****************************

var TAG_PortalHeaderRight = function TAG_PortalHeaderRight() {};

var PortalHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return null;
}); // ***** PortalMenuItem *****
// **************************

var TAG_PortalMenuItem = function TAG_PortalMenuItem() {};

var PortalMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var isLoading = app.isLoading;
  var breakPoint650 = app.breakPoint650;
  var portalContext = app.portalContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(portalContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  var portalMenuItem = null;

  if (breakPoint650) {
    portalMenuItem = /*#__PURE__*/react.createElement(MenuItem, {
      iconName: "explore",
      label: "Portail",
      activeContexts: [portalContext],
      callbackClick: handleMenuItemClick
    });
  }

  return portalMenuItem;
}); // ***** PortalPage *****
// **********************

var TAG_PortalPage = function TAG_PortalPage() {};

var PortalPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... propos

  var initialized = app.initialized; // ...

  var showHelper = !initialized ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(PortalGrid, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "explore",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/newsletters/Newsletters.css
var Newsletters = __webpack_require__(5270);
;// CONCATENATED MODULE: ../../nexus/react/contexts/newsletters/Newsletters.jsx







 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** NewslettersStore *****
// ****************************

var TAG_NewslettersStore = function TAG_NewslettersStore() {};

var NewslettersStore = mobx_state_tree_module/* types.model */.V5.model({
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
// ***** NewslettersHeaderLeft *****
// *********************************

var TAG_NewslettersHeaderLeft = function TAG_NewslettersHeaderLeft() {};

var NewslettersHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Newsletters",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** NewslettersHeaderRight *****
// **********************************

var TAG_NewslettersHeaderRight = function TAG_NewslettersHeaderRight() {};

var NewslettersHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return null;
}); // ***** NewslettersMenuItem *****
// *******************************

var TAG_NewslettersMenuItem = function TAG_NewslettersMenuItem() {};

var NewslettersMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigate('/newsletters', 'newsletters');
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "newspaper",
    label: "Newsletters",
    activeContexts: ['newsletters'],
    callbackClick: handleMenuItemClick
  });
}); // ***** NewslettersPage *****
// ***************************

var TAG_NewslettersPage = function TAG_NewslettersPage() {};

var NewslettersPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "newspaper",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/about/About.css
var About = __webpack_require__(2189);
;// CONCATENATED MODULE: ../../nexus/react/contexts/about/About.jsx
















 // Models
// ======================================================================================================
// ***** AboutStore *****
// **********************

var TAG_AboutStore = function TAG_AboutStore() {};

var AboutStore = mobx_state_tree_module/* types.model */.V5.model({
  service: mobx_state_tree_module/* types.optional */.V5.optional(ServiceInfoStore, {}),
  loaded: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {
      self.service.update(raw);
      self.loaded = true;
    },
    load: function load() {
      // Appel AJAX de la fonction de chargement des données de du service
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var snackbar = app.snackbar;
      var services = app.services;
      var staticMode = app.staticMode;

      if (!staticMode) {
        var url = '/app/about_load';
        app.fetchJSON(url, null, false, 'POST').then(function (json) {
          self.update(json.me);
        })["catch"](function (ex) {
          console.error("Fetch failed for ".concat(url), ex);
          snackbar.update(true, "Une erreur est survenue.", "error");
        });
      } else {
        self.update(services.me.toJSON());
      }
    }
  };
}); // Functions Components ReactJS
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
}); // ***** AboutHeaderRight *****
// ****************************

var TAG_AboutHeaderRight = function TAG_AboutHeaderRight() {};

var AboutHeaderRight = (0,es/* observer */.Pi)(function (props) {
  // const store = React.useContext(window.storeContext);
  // const app = store.app;
  // ...
  // Render
  // ==================================================================================================
  return null;
}); // ***** AboutMenuItem *****
// *************************

var TAG_AboutMenuItem = function TAG_AboutMenuItem() {};

var AboutMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var aboutContext = app.aboutContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(aboutContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "code",
    label: "A propos",
    activeContexts: [aboutContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** RenderAbout *****
// ***********************

var TAG_RenderAbout = function TAG_RenderAbout() {};

var RenderAbout = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var about = app.about;
  var services = app.services; // From ... store

  var isLoading = app.isLoading;
  var breakPoint414 = app.breakPoint414;
  var loaded = about.loaded;
  var service = about.service;
  var staticMode = app.staticMode;
  var version = service.version;
  var changeset = service.changeset;
  var changeset_instance = service.changeset_instance;
  var iconUrl = service.iconUrl;
  var githubLink = service.githubLink;
  var githubLinkClient = service.githubLinkClient;
  var nexusServiceInfo = services.getServiceInfo('nexus');
  var nexusGithubLink = nexusServiceInfo.githubLink; // ...

  react.useEffect(function () {
    if (!loaded) {
      about.load();
    }
  }, [loaded]); // Events
  // ==================================================================================================

  var handleChangelogsClick = function handleChangelogsClick() {
    app.navigateTo(app.changelogsContext);
  };

  var handleBugsClick = function handleBugsClick() {
    app.navigateTo(app.bugsContext);
  }; // Render
  // ==================================================================================================
  // Section -> Icon
  // ---


  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "memory"
  }); // Section -> Title
  // ---

  var sectionTitle = service.name; // Section -> Content
  // ---

  var sectionContent = /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("h-col-medium", "responsive-vertical", "responsive-spaced-medium")
  }, /*#__PURE__*/react.createElement(Avatar_Avatar, {
    src: iconUrl,
    color: "primary",
    size: "big"
  }), /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)({
      "v-col-tiny": !breakPoint414
    }, {
      "v-col-small": breakPoint414
    }, "flex-align-stretch")
  }, /*#__PURE__*/react.createElement("div", {
    className: "h-col-small responsive-vertical responsive-spaced-none"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-t nx-t-default"
  }, "Version"), /*#__PURE__*/react.createElement("div", {
    className: "nx-t nx-t-default selectable",
    "data-flex": "2"
  }, /*#__PURE__*/react.createElement("b", null, version))), /*#__PURE__*/react.createElement("div", {
    className: "h-col-small responsive-vertical responsive-spaced-none responsive-align-start"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-t nx-t-default"
  }, "Lien Github"), /*#__PURE__*/react.createElement(Link_Link, {
    href: githubLink,
    target: "_blank",
    className: "flex-2"
  }, githubLink)), githubLinkClient && /*#__PURE__*/react.createElement("div", {
    className: "h-col-small responsive-vertical responsive-spaced-none responsive-align-start"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-t nx-t-default"
  }, "Lien Github (client)"), /*#__PURE__*/react.createElement(Link_Link, {
    href: githubLinkClient,
    target: "_blank",
    className: "flex-2"
  }, githubLinkClient)), nexusGithubLink && /*#__PURE__*/react.createElement("div", {
    className: "h-col-small responsive-vertical responsive-spaced-none responsive-align-start"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-t nx-t-default"
  }, "Lien Github (nexus)"), /*#__PURE__*/react.createElement(Link_Link, {
    href: nexusGithubLink,
    target: "_blank",
    className: "flex-2"
  }, nexusGithubLink)), !staticMode && /*#__PURE__*/react.createElement("br", null), !staticMode && /*#__PURE__*/react.createElement("div", {
    className: "h-col-small responsive-vertical responsive-spaced-none responsive-align-start"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-t nx-t-default"
  }, "R\xE9vision instance"), /*#__PURE__*/react.createElement("div", {
    className: "nx-about-changeset selectable",
    "data-flex": "2"
  }, changeset_instance)), !staticMode && /*#__PURE__*/react.createElement("div", {
    className: "h-col-small responsive-vertical responsive-spaced-none responsive-align-start"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-t nx-t-default"
  }, "R\xE9vision d\xE9p\xF4t"), /*#__PURE__*/react.createElement("div", {
    className: "nx-about-changeset selectable",
    "data-flex": "2"
  }, changeset)))); // Section -> Buttons
  // ---

  var sectionButtons = [];
  sectionButtons.push( /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-changelog",
    variant: "outlined",
    color: "primary",
    onClick: function onClick() {
      return handleChangelogsClick();
    },
    disabled: isLoading,
    startAdornment: "history"
  }, "Changelog"));

  if (!staticMode) {
    sectionButtons.push( /*#__PURE__*/react.createElement(Button_Button, {
      key: "btn-bugs",
      variant: "outlined",
      color: "primary",
      onClick: function onClick() {
        return handleBugsClick();
      },
      disabled: isLoading,
      startAdornment: "bug_report"
    }, "Bugs"));
  } // -------------------------------------------------


  var contentAbout = null;

  if (loaded) {
    contentAbout = /*#__PURE__*/react.createElement(Section_Section, {
      icon: sectionIcon,
      title: sectionTitle,
      buttons: sectionButtons
    }, sectionContent);
  }

  return contentAbout;
}); // ***** AboutPage *****
// *********************

var TAG_AboutPage = function TAG_AboutPage() {};

var AboutPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var about = app.about; // From ... store

  var initialized = app.initialized;
  var loaded = about.loaded; // ...

  var showHelper = !initialized || !loaded ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page -> que quand l'app est intitialisée (pour useEffect)
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(RenderAbout, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "code",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(2689);
// EXTERNAL MODULE: ../../nexus/react/ui/theme/Theme.css
var Theme = __webpack_require__(6824);
;// CONCATENATED MODULE: ../../nexus/react/ui/theme/Theme.jsx









 // Datas
// ======================================================================================================

var THEME_MODES = [{
  "value": "light",
  "label": "Clair"
}, {
  "value": "dark",
  "label": "Sombre"
}];
var WIDTH_KEYS = {
  "xs": 0,
  "sm": 600,
  "md": 900,
  "lg": 1200,
  "xl": 1536
}; // Models
// ======================================================================================================
// ***** ColorStore *****
// **********************

var TAG_ColorStore = function TAG_ColorStore() {};

var ColorStore = mobx_state_tree_module/* types.model */.V5.model({
  main: '#FFFFFF',
  contrastText: '#000'
}).views(function (self) {
  return {
    get lightBackground() {
      return hexToRgbA(self.main, 0.1);
    }

  };
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
  "default": mobx_state_tree_module/* types.optional */.V5.optional(ColorStore, {}),
  primary: mobx_state_tree_module/* types.optional */.V5.optional(ColorStore, {}),
  secondary: mobx_state_tree_module/* types.optional */.V5.optional(ColorStore, {})
}).views(function (self) {
  return {
    get paletteKeys() {
      return ["default", "primary", "secondary"];
    }

  };
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
  mode: 'light',
  // light, dark
  modeOS: 'light',
  // light, dark
  modeAuto: true,
  variant: 'default',
  // default, noel, halloween, etc...
  palette_light: mobx_state_tree_module/* types.optional */.V5.optional(PaletteStore, {}),
  palette_dark: mobx_state_tree_module/* types.optional */.V5.optional(PaletteStore, {})
}).views(function (self) {
  return {
    get palette() {
      if (self.mode == 'dark') {
        return self.palette_dark;
      }

      return self.palette_light;
    },

    // Getters
    // -
    getColorFromKey: function getColorFromKey(colorKey) {
      var severityColorField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'color';
      // Détermine une couleur à partir d'un mot clé (severityKey / primary / secondary, etc...)
      // ---
      var palette = self.palette; // Couleur de thème ? (default, primary, secondary)

      if (colorKey != 'default' && palette.paletteKeys.includes(colorKey)) {
        return palette[colorKey].main;
      } // Couleur de typographie (noir ou blanc en fonction du mode d'ui)


      if (colorKey == 'typography') {
        return self.mode == 'dark' ? '#FFFFFF' : '#000000';
      } // La couleur est une sévrité ?


      if (SEVERITY_KEYS.includes(colorKey)) {
        var severity = SEVERITIES.get(colorKey);
        return severity[severityColorField];
      }

      return colorKey;
    },
    getContrastedColorFromKey: function getContrastedColorFromKey(colorKey) {
      // Détermine une couleur contrastée à partir d'un mot clé (severityKey / primary / secondary, etc...)
      // ---
      return self.getColorFromKey(colorKey, 'contrasted');
    },
    getTextColorFromKey: function getTextColorFromKey(colorKey) {
      // Détermine une couleur de texte à partir d'un mot clé (severityKey / primary / secondary, etc...)
      // ---
      var textColor = self.getColorFromKey(colorKey, 'text_color');

      if (textColor == '#000000' && self.mode == 'dark') {
        textColor = '#FFFFFF';
      }

      return textColor;
    },
    // -
    getWidthFromKey: function getWidthFromKey(widthKey) {
      // Détermine une largeur à partir d'une clé (xs, sm, md, lg, xl, false, string)
      // ---
      var width = "";

      if (widthKey) {
        if (WIDTH_KEYS.hasOwnProperty(widthKey)) {
          width = "".concat(WIDTH_KEYS[widthKey], "px");
        } else {
          if (typeof widthKey == "string") {
            width = widthKey;
          }
        }
      } // if (widthKey == false) {
      // 	width = "100%";
      // }


      return width;
    }
  };
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {},
    // -
    toggleMode: function toggleMode(callback) {
      // Bascule entre le mode sombre et le mode clair
      // ---
      var mode = self.mode;
      var newValue = mode == 'light' ? 'dark' : 'light';
      setToStorage('nxThemeMode', newValue);
      setToStorage('nxThemeModeAuto', false, 'bool');
      self.mode = newValue;
      self.modeAuto = false;

      if (callback) {
        callback(newValue);
      }
    }
  };
});
// EXTERNAL MODULE: ../../nexus/react/contexts/preferences/Preferences.css
var Preferences = __webpack_require__(2359);
;// CONCATENATED MODULE: ../../nexus/react/contexts/preferences/Preferences.jsx














 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** PreferencesHeaderLeft *****
// *********************************

var TAG_PreferencesHeaderLeft = function TAG_PreferencesHeaderLeft() {};

var PreferencesHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Pr\xE9f\xE9rences",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** PreferencesHeaderRight *****
// **********************************

var TAG_PreferencesHeaderRight = function TAG_PreferencesHeaderRight() {};

var PreferencesHeaderRight = (0,es/* observer */.Pi)(function (props) {
  // const store = React.useContext(window.storeContext);
  // const app = store.app;
  // ...
  // Render
  // ==================================================================================================
  return null;
}); // ***** PreferencesMenuItem *****
// *******************************

var TAG_PreferencesMenuItem = function TAG_PreferencesMenuItem() {};

var PreferencesMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var preferencesContext = app.preferencesContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(preferencesContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "tune",
    label: "Pr\xE9f\xE9rences",
    activeContexts: [preferencesContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** RenderSectionTheme *****
// ******************************

var TAG_RenderSectionTheme = function TAG_RenderSectionTheme() {};

var RenderSectionTheme = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... store

  var isLoading = app.isLoading;
  var themeAuto = theme.modeAuto; // ...
  // Events
  // ==================================================================================================

  var handleModeAutoChange = function handleModeAutoChange(savePath, value) {
    setToStorage('nxThemeModeAuto', value, 'bool');

    if (value == false) {
      theme.setField('mode', getFromStorage('nxThemeMode', 'light'));
    } else {
      theme.setField('mode', theme.modeOS);
    }
  };

  var handleModeChange = function handleModeChange(savePath, value) {
    setToStorage('nxThemeMode', value);
    theme.setField('mode', value);
  }; // Render
  // ==================================================================================================
  // Section -> Icon
  // ---


  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "palette"
  }); // Section -> Title
  // ---

  var sectionTitle = "Mode d'apparence"; // Section -> Content
  // ---

  var sectionContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Row_Row, {
    marginBottom: "normal"
  }, /*#__PURE__*/react.createElement(Switch_Switch, {
    label: "Utiliser les pr\xE9f\xE9rences syst\xE8me",
    savePath: ['app', 'theme', 'modeAuto'],
    callbackChange: handleModeAutoChange
  })), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Field_Field, {
    id: "btn-group-mode",
    component: "button_group",
    datas: THEME_MODES,
    savePath: ['app', 'theme', 'mode'],
    disabled: isLoading || themeAuto,
    callbackChange: handleModeChange
  }))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
}); // ***** PreferencesPage *****
// ***************************

var TAG_PreferencesPage = function TAG_PreferencesPage() {};

var PreferencesPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var initialized = app.initialized; // ...

  var showHelper = !initialized ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page -> que quand l'app est intitialisée (pour useEffect)
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(RenderSectionTheme, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "tune",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/admin/Admin.css
var Admin = __webpack_require__(4644);
;// CONCATENATED MODULE: ../../nexus/react/contexts/admin/Admin.jsx












 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** RenderAdminAuth *****
// ***************************

var TAG_RenderAdminAuth = function TAG_RenderAdminAuth() {};

var RenderAdminAuth = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account;
  var services = app.services; // From ... store

  var accountId = account._id; // ...

  var cerberusUrl = services.getServiceInfo('cerberus');
  var accountLabel = accountId ? accountId : 'Aucun';
  var accountLink = accountId ? "".concat(cerberusUrl, "/user/").concat(accountId) : '/login'; // Render
  // ==================================================================================================
  // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "verified_user"
  }); // Section -> Title
  // -------------------------------------------------

  var sectionTitle = "Authentification"; // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "h-col-small"
  }, /*#__PURE__*/react.createElement(Typography_Typography, null, "User ID"), /*#__PURE__*/react.createElement(Link_Link, {
    href: accountLink,
    className: "flex-2"
  }, accountLabel))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
}); // ***** RenderAdminLinks *****
// ****************************

var TAG_RenderAdminLinks = function TAG_RenderAdminLinks() {};

var RenderAdminLinks = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================
  // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "link"
  }); // Section -> Title
  // -------------------------------------------------

  var sectionTitle = "Liens"; // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "h-col-small"
  }, /*#__PURE__*/react.createElement(Typography_Typography, null, "Playground"), /*#__PURE__*/react.createElement(Link_Link, {
    href: "/playground",
    className: "flex-2"
  }, "/playground"))); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle
  }, sectionContent);
}); // ***** RenderAdmin *****
// ***********************

var TAG_RenderAdmin = function TAG_RenderAdmin() {};

var RenderAdmin = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(RenderAdminAuth, null), /*#__PURE__*/react.createElement(RenderAdminLinks, null));
}); // ***** AdminHeaderLeft *****
// ***************************

var TAG_AdminHeaderLeft = function TAG_AdminHeaderLeft() {};

var AdminHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var appKind = app.kind; // ...

  var adminTitle = appKind == 'electron' ? "Configuration" : "Administration"; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: adminTitle,
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** AdminHeaderRight *****
// ****************************

var TAG_AdminHeaderRight = function TAG_AdminHeaderRight() {};

var AdminHeaderRight = (0,es/* observer */.Pi)(function (props) {
  // const store = React.useContext(window.storeContext);
  // const app = store.app;
  // ...
  // Render
  // ==================================================================================================
  return null;
}); // ***** AdminMenuItem *****
// *************************

var TAG_AdminMenuItem = function TAG_AdminMenuItem() {};

var AdminMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... store

  var appKind = app.kind;
  var isAdmin = account.is_admin;
  var adminContext = app.adminContext; // ...

  var adminTitle = appKind == 'electron' ? "Configuration" : "Administration"; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(adminContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  var adminMenuItemContent = null;

  if (isAdmin || appKind == 'electron') {
    adminMenuItemContent = /*#__PURE__*/react.createElement(MenuItem, {
      iconName: "setting",
      label: adminTitle,
      activeContexts: [adminContext],
      callbackClick: handleMenuItemClick
    });
  }

  return adminMenuItemContent;
}); // ***** AdminPage *****
// *********************

var TAG_AdminPage = function TAG_AdminPage() {};

var AdminPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var initialized = app.initialized; // ...

  var showHelper = !initialized ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(RenderAdmin, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "setting",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/account/Account.css
var Account = __webpack_require__(7390);
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
  doc_id: '',
  doc_rev: '',
  doc_state: 0,
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
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var appKind = app.kind;

      if (appKind == 'electron') {
        return '';
      }

      var name = '';

      if (self.doc_id) {
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
      if (self.doc_id) {
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
      self.doc_id = raw.doc_id;
      self.doc_rev = raw.doc_rev;
      self.doc_state = raw.doc_state;
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
}); // ***** AccountHeaderRight *****
// ******************************

var TAG_AccountHeaderRight = function TAG_AccountHeaderRight() {};

var AccountHeaderRight = (0,es/* observer */.Pi)(function (props) {
  // const store = React.useContext(window.storeContext);
  // const app = store.app;
  // ...
  // Render
  // ==================================================================================================
  return null;
}); // ***** AccountMenuItem *****
// ***************************

var TAG_AccountMenuItem = function TAG_AccountMenuItem() {};

var AccountMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... store

  var isLogged = account.isLogged;
  var breakPoint650 = app.breakPoint650;
  var accountContext = app.accountContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigate(accountContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  var accountMenuItem = null;

  if (isLogged && breakPoint650) {
    accountMenuItem = /*#__PURE__*/react.createElement(MenuItem, {
      iconName: "account_circle",
      label: "Mon compte",
      activeContexts: [accountContext],
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
// EXTERNAL MODULE: ../../herald/react/contexts/notifications/Notifications.css
var Notifications = __webpack_require__(3199);
;// CONCATENATED MODULE: ../../herald/react/contexts/notifications/Notifications.jsx







 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** NotificationsStore *****
// ******************************

var TAG_NotificationsStore = function TAG_NotificationsStore() {};

var NotificationsStore = mobx_state_tree_module/* types.model */.V5.model({
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
// ***** NotificationsHeaderLeft *****
// ***********************************

var TAG_NotificationsHeaderLeft = function TAG_NotificationsHeaderLeft() {};

var NotificationsHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Notifications",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** NotificationsHeaderRight *****
// ************************************

var TAG_NotificationsHeaderRight = function TAG_NotificationsHeaderRight() {};

var NotificationsHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return null;
}); // ***** NotificationsMenuItem *****
// *********************************

var TAG_NotificationsMenuItem = function TAG_NotificationsMenuItem() {};

var NotificationsMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var notificationsContext = app.notificationsContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(notificationsContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "notifications",
    label: "Notifications",
    activeContexts: [notificationsContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** NotificationsPage *****
// *****************************

var TAG_NotificationsPage = function TAG_NotificationsPage() {};

var NotificationsPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "notifications",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./contexts/blog/Blog.css
var Blog = __webpack_require__(6737);
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
}); // ***** BlogHeaderRight *****
// ***************************

var TAG_BlogHeaderRight = function TAG_BlogHeaderRight() {};

var BlogHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return null;
}); // ***** BlogMenuItem *****
// ************************

var TAG_BlogMenuItem = function TAG_BlogMenuItem() {};

var BlogMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var blogContext = app.blogContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(blogContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "forum",
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
;// CONCATENATED MODULE: ./models/Datas.jsx
// Datas
// ======================================================================================================
var NEXORIUM_CHANGELOGS = [{
  "status": "prod",
  "date": "2022-06-26",
  "app_key": "nexorium",
  "version": "0.0.2",
  "changes": [{
    "title": "Portail vers les autres projets"
  }]
}, {
  "status": "prod",
  "date": "2022-06-24",
  "app_key": "nexorium",
  "version": "0.0.1",
  "changes": [{
    "title": "Version statique initiale"
  }]
}];
;// CONCATENATED MODULE: ../../nexora/react/models/Datas.jsx
// Datas
// ======================================================================================================
var NEXORA_CHANGELOGS = [{
  "status": "prod",
  "date": "2022-06-26",
  "app_key": "nexora",
  "version": "0.0.1",
  "changes": [{
    "title": "Version statique initiale"
  }]
}];
;// CONCATENATED MODULE: ../../gramophone_server/react/models/Datas.jsx
// Datas
// ======================================================================================================
// {
// 	"status": "prod",
// 	"date": null,
// 	"app_key": "gramophone",
// 	"version": "",
// 	"version_name": "",
// 	"changes": [
// 		{"title": ""},
// 	],
// },
var GRAMOPHONE_CHANGELOGS = [{
  "status": "daft",
  "date": null,
  "app_key": "gramophone",
  "version": "4.0.0",
  "version_name": "New wave",
  "changes": [{
    "title": "Réécriture complète à l'aide de ReactJS et de mobx-state-tree"
  }, {
    "title": "Abandon de MaterialUI pour des raisons de performance d'affichage",
    "content": "Et de facilité de maintenance."
  }]
}, {
  "status": "prod",
  "date": "2019-09-07",
  "app_key": "gramophone",
  "version": "3.0.0",
  "version_name": "Mambo",
  "changes": [{
    "title": "Réécriture complète à l'aide de React.JS et de MaterialUI"
  }, {
    "title": "Plusieurs vues dédiées aux articles, albums, morceaux, genres, années et playlists"
  }, {
    "title": "Possibilité de créer des playlists personnalisés"
  }, {
    "title": "Historique de lecture"
  }, {
    "title": "Liste de lecture"
  }, {
    "title": "Jeté de dés pour lecture aléatoire de quelques dizaines de morceaux"
  }, {
    "title": "Fonction de recherche améliorée"
  }],
  "version_assets": [{
    "plateform_key": "macos",
    "filename": "gramophone_300_macOS.zip"
  }, {
    "plateform_key": "win64",
    "filename": "gramophone_300_win64.zip"
  }]
}, {
  "status": "prod",
  "date": "2018-03-20",
  "app_key": "gramophone",
  "version": "2.4.0",
  "version_name": "Lounge",
  "changes": [{
    "title": "Menu d'application personnalisé sur macOS"
  }, {
    "title": "Menu contextuel sur l'icône du dock sur macOS"
  }, {
    "title": "Notification sur changement de musique quand le focus est sur une autre application"
  }, {
    "title": "Fix compteur de fichiers dans les dossiers surveillés"
  }, {
    "title": "Fix recherche après une première recherche"
  }, {
    "title": "Pas d'affichage de numéro de musique à 0"
  }, {
    "title": "Artiste cliquable dans le contenu d'un album"
  }, {
    "title": "Lecture continue depuis la grille"
  }, {
    "title": "Lecture aléatoire"
  }, {
    "title": "Option permettant de désactiver le scan automatique au démarrage de l'application"
  }, {
    "title": "Option de déclenchement manuel du scan rapide depuis l'écran de préférences"
  }, {
    "title": "Lecture du premier morceau de la playlist sur clic du bouton de lecture juste après ouverture"
  }, {
    "title": "Navigation vers la musique en cours de lecture sur clic du titre affiché sur le lecteur (dans l'entête de l'application)"
  }],
  "version_assets": [{
    "plateform_key": "macos",
    "filename": "gramophone_240_macOS.zip"
  }, {
    "plateform_key": "win64",
    "filename": "gramophone_240_win64.zip"
  }, {
    "plateform_key": "win32",
    "filename": "gramophone_240_win32.zip"
  }]
}, {
  "status": "prod",
  "date": "2018-02-04",
  "app_key": "gramophone",
  "version": "2.3.1",
  "version_name": "Kompa",
  "changes": [{
    "title": "Icône de lecture rapide plus petite et à gauche sur la grille"
  }, {
    "title": "Fix lecture première musique d'album depuis la grille"
  }, {
    "title": "Fix tri des colonnes dans les favoris"
  }, {
    "title": "Fix débordement des libellés de chançon et d'artiste sur le player"
  }]
}, {
  "status": "prod",
  "date": "2017-08-28",
  "app_key": "gramophone",
  "version": "2.3.0",
  "version_name": "Jungle",
  "changes": [{
    "title": "Distinction groupement par artiste et alphabétique"
  }, {
    "title": "Petit effet de volume sur l'entête pour macOS"
  }, {
    "title": "Affichage du nom de la version dans la fenêtre 'A propos'"
  }, {
    "title": "Plus de glisser-déplacer pour les vignettes (mais toujours actif pour le zoom de jaquette)"
  }, {
    "title": "Il n'est plus possible de glisser-déplacer un dossier lorsqu'un scan est en cours"
  }]
}, {
  "status": "prod",
  "date": "2017-08-08",
  "app_key": "gramophone",
  "version": "2.2.0",
  "version_name": "Indie pop",
  "changes": [{
    "title": "Glisser-déplacer pour ajouter un dossier surveillé contenant des musiques à indexer"
  }, {
    "title": "Zoom sur clic de la jaquette d'album"
  }, {
    "title": "Haut-parleur musique courante en pause"
  }, {
    "title": "Affichage de l'artiste de la musique courante"
  }, {
    "title": "Espace en bas de la liste des morceaux d'un album"
  }, {
    "title": "Diverses évolutions indexer"
  }, {
    "title": "F6 précédent, F7 play / pause, F8 suivant"
  }, {
    "title": "Fenêtre 'A propos' pour Windows (macOS en dispose d'une nativement)"
  }, {
    "title": "Indicateurs dernier scan complet et dernier scan rapide"
  }, {
    "title": "Fix coeur coupé sous Windows"
  }, {
    "title": "Fix débordement nom album"
  }]
}, {
  "status": "prod",
  "date": "2017-07-10",
  "app_key": "gramophone",
  "version": "2.1.0",
  "version_name": "Heavy metal",
  "changes": [{
    "title": "Ajout d'un bouton permettant de mettre en évidence un morceau dans l'explorateur de fichier de l'OS"
  }, {
    "title": "Possibilité de grouper par artistes"
  }, {
    "title": "Possibilité de trier par années, artistes ou albums"
  }, {
    "title": "Prise en charge de plus de formats de date"
  }, {
    "title": "Fix ouverture de l'explorateur de fichier sous Windows"
  }]
}, {
  "status": "prod",
  "date": "2017-06-24",
  "app_key": "gramophone",
  "version": "2.0.1",
  "version_name": "Groove metal",
  "changes": [{
    "title": "Fix fast play / resume dans les vues par liste"
  }, {
    "title": "Fix artiste de l'album au scan des musiques"
  }, {
    "title": "Fix plantage scan des musiques vers un dossier accentué"
  }, {
    "title": "Fix slider lorsque repositionné manuellement au début d'une chançon"
  }]
}, {
  "status": "prod",
  "date": "2017-05-25",
  "app_key": "gramophone",
  "version": "2.0.0",
  "version_name": "Future house",
  "changes": [{
    "title": "Migration de NWjs vers Electron"
  }, {
    "title": "Prise en charge des formats AAC et FLAC"
  }, {
    "title": "Indexer intégré dans l'interface de paramétrage"
  }, {
    "title": "Options d'affichage : Filtrage par dossier surveillé + Possibilité de ne plus grouper par années"
  }, {
    "title": "Finalisation des contrôles de lecture et de pause rapide (lecture, pause, indicateur de lecture)"
  }, {
    "title": "Coeurs de favoris déplacés à gauche"
  }, {
    "title": "Fix compatibilité macOS 10.12.4 : collection par défaut dans le dossier utilisateur"
  }]
}, {
  "status": "prod",
  "date": "2017-01-30",
  "app_key": "gramophone",
  "version": "1.2.0",
  "version_name": "Electro",
  "changes": [{
    "title": "Boutons de lecture rapide sur les albums et sur les morceaux"
  }, {
    "title": "Amélioration des performances d'affichage à l'aide du système de cache HTML et des vignettes JPEG"
  }, {
    "title": "Fix vignettes JPEG sous macOS"
  }],
  "version_assets": [{
    "plateform_key": "macos",
    "filename": "gramophone_120_macOS.zip"
  }, {
    "plateform_key": "win64",
    "filename": "gramophone_120_win64.zip"
  }]
}, {
  "status": "prod",
  "date": "2016-11-07",
  "app_key": "gramophone",
  "version": "1.1.1",
  "version_name": "Dance",
  "changes": [{
    "title": "Compatibilité Windows / macOS sur le comportement lors de la femerture de la fenêtre"
  }]
}, {
  "status": "prod",
  "date": "2016-10-30",
  "app_key": "gramophone",
  "version": "1.1.0",
  "version_name": "Chillwave",
  "changes": [{
    "title": "Contrôles de fenêtres natifs pour macOS"
  }, {
    "title": "L'application quitte plus lorsqu'on ferme sa fenêtre sous macOS"
  }, {
    "title": "Meilleure séparation des morceaux d'un album + meilleur visuel pour les coeurs de favoris"
  }, {
    "title": "Seuls les morceaux d'un album défilent en cas d'overflow (la jaquette et l'entête restent à leur place"
  }, {
    "title": "Possibilité d'ouvrir le dossier contenant les musiques d'un album"
  }, {
    "title": "Possibilité de cliquer sur un artiste pour écrire son nom dans la recherche"
  }, {
    "title": "Meilleur affichage du sélecteur par années avec séparation des décennies"
  }]
}, {
  "status": "prod",
  "date": "2016-06-26",
  "app_key": "gramophone",
  "version": "1.0.1",
  "version_name": "Beat",
  "changes": [{
    "title": "Bordures noires sur la version Windows"
  }, {
    "title": "Compatibilité avec les contrôles multimédia sur les claviers (pause, lecture, suivant, précédent, ...)"
  }]
}, {
  "status": "prod",
  "date": "2016-03-29",
  "app_key": "gramophone",
  "version": "1.0.0",
  "version_name": "Acid jazz",
  "changes": [{
    "title": "Implémentation des fonctionalités initiales (scan, collection, favoris, lecture et export)"
  }]
}];
;// CONCATENATED MODULE: ../../vgm_server/react/models/Datas.jsx
// Datas
// ======================================================================================================
// {
// 	"status": "prod",
// 	"date": null,
// 	"app_key": "vgm",
// 	"version": "",
// 	"version_name": "",
// 	"changes": [
// 		{"title": ""},
// 	],
// },
var VGM_CHANGELOGS = [{
  "status": "daft",
  "date": null,
  "app_key": "vgm",
  "version": "8.0.0",
  "version_name": "Dante",
  "changes": [{
    "title": "Réécriture complète à l'aide de ReactJS et de mobx-state-tree"
  }, {
    "title": "Simplification du projet",
    "content": "Focus sur la présentation pure et simple d'une ludothèque pour les collectionneurs."
  }]
}, {
  "status": "prod",
  "date": "2017-07-23",
  "app_key": "vgm",
  "version": "7.0.1",
  "version_name": "Nariko",
  "changes": [{
    "title": "Plus de synchronisation à outrance"
  }, {
    "title": "Nettoyage du code de migration"
  }, {
    "title": "Fix redémarrage application après synchronisation"
  }, {
    "title": "Fix suppression de jeu sans dossier dans la collection"
  }],
  "version_assets": [{
    "plateform_key": "macos",
    "filename": "vgm_701_macOS.zip"
  }, {
    "plateform_key": "win64",
    "filename": "vgm_701_win64.zip"
  }]
}, {
  "status": "prod",
  "date": "2017-05-25",
  "app_key": "vgm",
  "version": "7.0.0",
  "version_name": "Ryder",
  "changes": [{
    "title": "Migration de NWjs vers Electron"
  }, {
    "title": "Fix compatibilité macOS 10.12.4 : collection par défaut dans le dossier utilisateur"
  }]
}, {
  "status": "prod",
  "date": "2016-11-07",
  "app_key": "vgm",
  "version": "6.2.5",
  "version_name": "",
  "changes": [{
    "title": "Compatibilité Windows / macOS sur le comportement lors de la femerture de la fenêtre"
  }, {
    "title": "Fix mise à jour de la liste des supports et des genres lors d'un glisser / déplacer sur une collection vide"
  }, {
    "title": "Fix arrêt prématuré des compteurs quand on masque la fenêtre sous macOS"
  }],
  "version_assets": [{
    "plateform_key": "macos",
    "filename": "vgm_625_macOS.zip"
  }, {
    "plateform_key": "win64",
    "filename": "vgm_625_win64.zip"
  }]
}, {
  "status": "prod",
  "date": "2016-10-29",
  "app_key": "vgm",
  "version": "6.2.4",
  "version_name": "",
  "changes": [{
    "title": "Contrôles de fenêtres natifs pour macOS (compatibilité split view)"
  }, {
    "title": "L'application ne se ferme plus lorsqu'on ferme sa fenêtre sous macOS"
  }, {
    "title": "Légers raffinements graphiques pour macOS"
  }]
}, {
  "status": "prod",
  "date": "2016-06-06",
  "app_key": "vgm",
  "version": "6.2.3",
  "version_name": "",
  "changes": [{
    "title": "Indicateur visuel des jeux nécessitant un disque optique"
  }]
}, {
  "status": "prod",
  "date": "2016-03-30",
  "app_key": "vgm",
  "version": "6.2.2",
  "version_name": "",
  "changes": [{
    "title": "Autorisation des doublons de jeux tant qu'ils sont sur des plateformes différentes"
  }]
}, {
  "status": "prod",
  "date": "2016-03-14",
  "app_key": "vgm",
  "version": "6.2.1",
  "version_name": "",
  "changes": [{
    "title": "Fusions des spécificités Windows et macOS dans le même code, conditionné par os.platform()"
  }, {
    "title": "Pastilles de contrôle de la fenêtre pour macOS"
  }]
}, {
  "status": "prod",
  "date": "2016-01-01",
  "app_key": "vgm",
  "version": "6.2.0",
  "version_name": "",
  "changes": [{
    "title": "VGM laisse le temps à la fenêtre de se dessiner avant de s'afficher"
  }, {
    "title": "Sauvegarde des chronos toutes les minutes en cas de plantage"
  }, {
    "title": "Meilleur affichage des chronos en cours sur les raccourcis"
  }, {
    "title": "Légère réorganisation du code pour le rendre plus facilement maintenable"
  }, {
    "title": "Fix passage du mode édition de soluce au mode lecture"
  }, {
    "title": "Fix images des jeux après déplacement de l'exécutable de VGM"
  }, {
    "title": "Fix affichage de l'animation de synchronisation"
  }, {
    "title": "Possibilité de minimiser la fenêtre au lancement d'un jeu"
  }, {
    "title": "Possibilité de sauvegarder l'affichage des vues par ordinateur"
  }, {
    "title": "Possibilité de lier des jeux entre eux, et de définir la nature du lien (remake, restauration, plateforme alternative, ...)"
  }]
}, {
  "status": "prod",
  "date": "2015-09-16",
  "app_key": "vgm",
  "version": "6.1.2",
  "version_name": "",
  "changes": [{
    "title": "Sauvegarde de la position de la fenêtre avant agrandissement"
  }, {
    "title": "Compatibilité avec les bords arrondis de macOS"
  }]
}, {
  "status": "prod",
  "date": "2015-07-23",
  "app_key": "vgm",
  "version": "6.1.1",
  "version_name": "",
  "changes": [{
    "title": "Compatibilité avec les fichiers .bat et .vbs pour la version Windows"
  }, {
    "title": "Compatibilité avec les fichiers .app pour la version macOS"
  }]
}, {
  "status": "prod",
  "date": "2015-07-14",
  "app_key": "vgm",
  "version": "6.1.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout popup de gestion de mot clés correspondant à des valeurs"
  }, {
    "title": "Possibilité d'utiliser ces mots clés dans les champs raccourci d'un jeu, par exemple {steam_cmd} ou {doc_dir}"
  }, {
    "title": "Sélection exclusive d'un support dans le ruban à l'aide d'un clic-droit"
  }, {
    "title": "Possibilité d'ajouter de nouveaux jeux par glisser / déplacer d'un exécutable ou d'une image"
  }]
}, {
  "status": "prod",
  "date": "2015-06-29",
  "app_key": "vgm",
  "version": "6.0.0",
  "version_name": "",
  "changes": [{
    "title": "Refactoring complet du projet"
  }, {
    "title": "Abandon de la gestion multi-utilisateurs et du partage de jeux"
  }, {
    "title": "Gestion par collections stockées sur disque / NAS"
  }, {
    "title": "Rafraichissement des vues automatique"
  }]
}, {
  "status": "prod",
  "date": "2015-05-09",
  "app_key": "vgm",
  "version": "5.2.2",
  "version_name": "",
  "changes": [{
    "title": "Fix suppression de vues en mode local"
  }, {
    "title": "Fix sélection et remplacement d'images dans l'interface d'administration"
  }, {
    "title": "Fix sauvegarde des chronos en local"
  }, {
    "title": "Fix message d'erreur fullscreen quand ouverture de raccourci impossible"
  }],
  "version_assets": [{
    "plateform_key": "win64",
    "filename": "vgm_522_win64.zip"
  }]
}, {
  "status": "prod",
  "date": "2015-04-10",
  "app_key": "vgm",
  "version": "5.2.1",
  "version_name": "",
  "changes": [{
    "title": "Ajout des tags 'disc' et 'HS'"
  }, {
    "title": "Mise en évidence du tag 'HS' sur les raccourcis"
  }]
}, {
  "status": "prod",
  "date": "2015-03-12",
  "app_key": "vgm",
  "version": "5.2.0",
  "version_name": "",
  "changes": [{
    "title": "Fenêtre de paramètres (environnement, mode, infos de connexion)"
  }, {
    "title": "Possibilité de fonctionner en mode local 'portable' ou en mode connecté 'NAS'"
  }, {
    "title": "Ajout du champ 'démarrer dans' pour les raccourcis"
  }]
}, {
  "status": "prod",
  "date": "2015-02-22",
  "app_key": "vgm",
  "version": "5.1.0",
  "version_name": "",
  "changes": [{
    "title": "Section administration locale au client"
  }, {
    "title": "Ajout du marché de jeux avec système de panier"
  }, {
    "title": "Ajout d'un système de visualisation et d'édition de soluce"
  }, {
    "title": "Fix affichage animation de synchronisation"
  }, {
    "title": "Gestion lors de la déconnexion du serveur"
  }, {
    "title": "Recopie des jaquettes en local (meilleurs temps de chargement + disponibles en mode hors ligne)"
  }]
}, {
  "status": "prod",
  "date": "2015-01-25",
  "app_key": "vgm",
  "version": "5.0.0",
  "version_name": "",
  "changes": [{
    "title": "Changement de technologie de TideSDK vers Node Webkit"
  }, {
    "title": "Architecture client / NAS"
  }, {
    "title": "Partie client et serveur reconstruites de zéro"
  }, {
    "title": "Multi-utilisateurs"
  }, {
    "title": "Systèmes de vues utilisateur personnalisables identiques à des playlist"
  }, {
    "title": "Ajout du tag 'Original'"
  }, {
    "title": "Suppression du tag 'Disque'"
  }, {
    "title": "Le client reconnait automatiquement le type des commandes de lancement des jeux"
  }]
}, {
  "status": "prod",
  "date": "2014-11-11",
  "app_key": "vgm",
  "version": "4.0.2",
  "version_name": "",
  "changes": [{
    "title": "Checkbox CSS local + clic-droit pour sélectionner exclusivement"
  }, {
    "title": "Groupes repliables (individuellement ou collectivement)"
  }, {
    "title": "Rafraichissement correct de l'affichage après changement d'image d'un raccourci"
  }, {
    "title": "Popup de manipulation du chrono (ajout, suppression d'heures)"
  }, {
    "title": "Flat design"
  }],
  "version_assets": [{
    "plateform_key": "win32",
    "filename": "vgm_402_win32.zip"
  }]
}, {
  "status": "prod",
  "date": "2014-09-08",
  "app_key": "vgm",
  "version": "4.0.1",
  "version_name": "",
  "changes": [{
    "title": "Sections 'ALL' et 'FAVORITES' modifiées en 'LIST' et 'GRID'"
  }, {
    "title": "Tags 'ghost' et 'check' déplacés au niveau des raccourcis"
  }, {
    "title": "Favori modifié en tant que tag"
  }]
}, {
  "status": "prod",
  "date": "2014-04-29",
  "app_key": "vgm",
  "version": "4.0.0",
  "version_name": "",
  "changes": [{
    "title": "Réécriture complète + refonte de l'interface"
  }, {
    "title": "Metadatas personnalisés pour chaque jeu"
  }, {
    "title": "Meilleure gestion des profils et des dossiers associés"
  }]
}, {
  "status": "prod",
  "date": "2014-01-18",
  "app_key": "vgm",
  "version": "3.2.1",
  "version_name": "",
  "changes": [{
    "title": "Pas de plantage quand le root folder est innaccessible"
  }, {
    "title": "Possibilité d'exécuter custom_script.vbs au démarrage de l'application sous windows"
  }],
  "version_assets": [{
    "plateform_key": "win32",
    "filename": "vgm_321_win32.zip"
  }]
}, {
  "status": "prod",
  "date": "2014-01-14",
  "app_key": "vgm",
  "version": "3.2.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout du système d'export et d'import d'un raccourci"
  }, {
    "title": "Les images ne sont plus perturbées par la sélection d'autres profils dans la fenêtre des paramètres"
  }, {
    "title": "Ajout d'un contrôle vérifiant si le profil n'est pas actif sur suppression dans la fenêtre des paramètres"
  }, {
    "title": "Méthode de lancement des raccourcis définie sur 'Aucun' par défaut"
  }, {
    "title": "Maintient de la touche CTRL pour ne sélectionner qu'un seul support dans le filtre d'affichage"
  }, {
    "title": "Affichage du nombre total de raccourcis"
  }]
}, {
  "status": "prod",
  "date": "2013-12-27",
  "app_key": "vgm",
  "version": "3.1.1",
  "version_name": "",
  "changes": [{
    "title": "Possibilité de supprimer le lien vers la base VGM personnalisée ainsi que les liens vers les dossier racine, les images et les sauvegardes"
  }, {
    "title": "Ajout du profil REFERENCE associé systématiquement à tous les raccourcis"
  }, {
    "title": "Le message d'avertissement sur le lock de la base de données ne s'affiche plus après fermeture brutale de l'application"
  }, {
    "title": "Gestion de la mise à jour automatique de la base de données après mise à jour de l'application (ne sera effectif que pour les prochaines versions)"
  }, {
    "title": "Nom des images de raccourcis liés aux noms de ces derniers"
  }, {
    "title": "Un click gauche sur les raccourcis ouvre directement l'édition des métadatas"
  }]
}, {
  "status": "prod",
  "date": "2013-11-24",
  "app_key": "vgm",
  "version": "3.1.0",
  "version_name": "",
  "changes": [{
    "title": "Chrono total fenêtre about"
  }, {
    "title": "Thème paramétrable (gris ou noir)"
  }, {
    "title": "Système de recopie des dossiers de sauvegardes des raccourcis"
  }, {
    "title": "Ajout du tag 'Gamepad'"
  }, {
    "title": "Système à trois états pour les filtres des tags"
  }]
}, {
  "status": "prod",
  "date": "2013-11-10",
  "app_key": "vgm",
  "version": "3.0.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout du chronomètre sur la popup Réécriture complète pour optimisation"
  }, {
    "title": "Thème gris"
  }, {
    "title": "Gestion des profils"
  }, {
    "title": "Gestion des Emplacement de sauvegarde"
  }, {
    "title": "Ajout des tags 'Check' et 'Network'"
  }]
}, {
  "status": "prod",
  "date": "2013-09-04",
  "app_key": "vgm",
  "version": "2.1.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout du chronomètre sur la popup d'information"
  }, {
    "title": "Remplacement du texte par des icônes dans la popup d'information"
  }, {
    "title": "Suppression de la section « About », déplacée dans le site web"
  }],
  "version_assets": [{
    "plateform_key": "win32",
    "filename": "vgm_210_win32.zip"
  }]
}, {
  "status": "prod",
  "date": "2013-08-22",
  "app_key": "vgm",
  "version": "2.0.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout des tags « Favoris », « Masqué » et « Disque » pour les raccourcis"
  }, {
    "title": "Affichage des tags sur la popup d'information + possibilité de mise à jour sur clic"
  }, {
    "title": "Sauvegarde de la position du défilement par catégorie et par type d'affichage"
  }, {
    "title": "Ajout de la visualisation « Jaquette »"
  }, {
    "title": "Ajout des filtres des tags « Favoris », « Masqué » et « Disque »"
  }, {
    "title": "Ajout des mots clé de recherche « fav » et « hid » dans la zone de recherche"
  }, {
    "title": "Ajout de l'option de déplacement d'un raccourci"
  }, {
    "title": "Ajout du groupement « support »"
  }, {
    "title": "Sauvegarde de la catégorie affichée"
  }, {
    "title": "Réduction automatique de la fenêtre sur le lancement d'un raccourci paramétrable"
  }, {
    "title": "Fermeture automatique de la popup de détail sur le lancement d'un raccourci paramétrable"
  }, {
    "title": "Ajout du système de dossier racine"
  }, {
    "title": "Ajout du système de vérification de l'intégrité des dossiers"
  }, {
    "title": "Ajout de la possibilité de mettre à jour les tags de tous les raccourcis d'un groupe"
  }]
}, {
  "status": "prod",
  "date": "2013-06-30",
  "app_key": "vgm",
  "version": "1.8.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout des propriétés « Dossier », « Site » pour les raccourcis"
  }, {
    "title": "Ajout d'une popup de détail des propriétés d'un raccourci sur clic en mode d'affichage mosaïque"
  }, {
    "title": "Ajout des méthodes de lancement « Batch » et « VBScript » prenant en charge le 'current working directory'"
  }],
  "version_assets": [{
    "plateform_key": "win32",
    "filename": "vgm_180_win32.zip"
  }]
}, {
  "status": "prod",
  "date": "2013-06-29",
  "app_key": "vgm",
  "version": "1.7.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout des propriétés « Plateforme », « Configuration », « Notes », « Dossier », « Site », « Login » et « Password » pour les raccourcis"
  }, {
    "title": "Ajout du filtre « Plateforme »"
  }, {
    "title": "Autocomplete sur les propriétés « Genre » et « Plateforme » dans l'interface de gestion"
  }]
}, {
  "status": "prod",
  "date": "2013-05-17",
  "app_key": "vgm",
  "version": "1.6.0",
  "version_name": "",
  "changes": [{
    "title": "Focus sur le zone de recherche sur appuit d'une touche du clavier"
  }, {
    "title": "Ajout de la propriété « Méthode d'exécution » pour les raccourcis"
  }]
}, {
  "status": "prod",
  "date": "2013-05-03",
  "app_key": "vgm",
  "version": "1.5.0",
  "version_name": "",
  "changes": [{
    "title": "Compatibilité avec l'environnement Unix (macOS, Ubuntu, ...)"
  }, {
    "title": "Ajout de la visualisation par icônes"
  }]
}, {
  "status": "prod",
  "date": "2013-04-30",
  "app_key": "vgm",
  "version": "1.4.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout de la propriété « Genre » pour les raccourcis"
  }, {
    "title": "Ajout des tri et des groupements 'aucun', 'groupe', 'date', 'genre' par catégorie"
  }, {
    "title": "Ajout de la visualisation « détail »"
  }]
}, {
  "status": "prod",
  "date": "2013-04-24",
  "app_key": "vgm",
  "version": "1.3.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout propriété « exécutable » pour les raccourcis avec indicateur visuel (blanc ou rouge)"
  }, {
    "title": "Ajout propriété « nouveau » pour les raccourcis avec indicateur visuel (bleu)"
  }, {
    "title": "Ajout de la fonction de recherche avec mots clés et sauvegarde par catégorie"
  }]
}, {
  "status": "prod",
  "date": "2013-04-17",
  "app_key": "vgm",
  "version": "1.2.0",
  "version_name": "",
  "changes": [{
    "title": "Ajout de la date de sortie sur les raccourcis + tri par date de sortie décroissant"
  }, {
    "title": "Ajout du slider pour régler la taille des mosaïques par catégorie"
  }]
}, {
  "status": "prod",
  "date": "2013-04-14",
  "app_key": "vgm",
  "version": "1.1.0",
  "version_name": "",
  "changes": [{
    "title": "Surlignement des raccourcis avec affichage du nom"
  }, {
    "title": "Sauvegarde de la position et de l’état de la fenêtre"
  }, {
    "title": "Ajout du choix d'affichage en liste ou mosaïque par catégorie"
  }]
}, {
  "status": "prod",
  "date": "2013-04-07",
  "app_key": "vgm",
  "version": "1.0.0",
  "version_name": "",
  "changes": [{
    "title": "Implémentation des fonctionnalités initiales"
  }]
}];
// EXTERNAL MODULE: ../../ladybug/react/components/items/ChangelogDateItem.css
var ChangelogDateItem = __webpack_require__(4591);
;// CONCATENATED MODULE: ../../ladybug/react/components/items/ChangelogDateItem.jsx





 // Functions Components ReactJS
// ======================================================================================================
// ***** ChangelogDateItem *****
// *****************************

var TAG_ChangelogDateItem = function TAG_ChangelogDateItem() {};

var ChangelogDateItem_ChangelogDateItem = (0,es/* observer */.Pi)(function (props) {
  // From ... props
  var date = props.date;
  var editable = props.editable == true ? true : false;
  var showShare = props.showShare == true ? true : false;
  var showFocus = props.showFocus == true ? true : false;
  var children = props.children;
  var callbackShare = props.callbackShare;
  var callbackFocus = props.callbackFocus; // ...

  var dateLabel = "Prochainement";

  if (date) {
    dateLabel = dateTools.fromDateToHumanized(date);
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-date-item"
  }, /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-date-item-header"
  }, /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-date-item-header-name"
  }, dateLabel)), /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-date-item-content"
  }, children));
});
// EXTERNAL MODULE: ../../ladybug/react/components/items/ChangelogReleaseItem.css
var ChangelogReleaseItem = __webpack_require__(4606);
;// CONCATENATED MODULE: ../../ladybug/react/components/items/ChangelogReleaseItem.jsx









 // Functions Components ReactJS
// ======================================================================================================
// ***** ChangelogReleaseItem *****
// ********************************

var TAG_ChangelogReleaseItem = function TAG_ChangelogReleaseItem() {};

var ChangelogReleaseItem_ChangelogReleaseItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var services = app.services; // From ... store

  var staticUrl = app.staticUrl;
  var breakPoint414 = app.breakPoint414; // From ... props

  var release = props.release;
  var editable = props.editable == true ? true : false;
  var children = props.children;
  var callbackAssetClick = props.callbackAssetClick; // ...

  var releaseId = release.doc_id;
  var releaseAppKey = release.app_key;
  var releaseVersion = release.version;
  var releaseVersionName = release.version_name;
  var releaseVersionAssets = release.version_assets;
  var serviceInfo = services.getServiceInfo(releaseAppKey);
  var serviceName = serviceInfo.name;

  if (releaseVersionName) {
    // serviceName = `${serviceName} - ${releaseVersionName}`;
    serviceName = releaseVersionName;
  } // Events
  // ==================================================================================================


  var handleAssetClick = function handleAssetClick(asset) {
    if (callbackAssetClick) {
      callbackAssetClick(asset.filename);
    }
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-release-item",
    "data-id": releaseId
  }, /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-release-item-header responsive-vertical responsive-align-stretch"
  }, /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-release-item-service-name selectable"
  }, serviceName), /*#__PURE__*/react.createElement("div", {
    className: "h-col flex-0 flex-wrap"
  }, releaseVersionAssets.map(function (asset, assetIdx) {
    var plateformKey = asset.plateform_key;
    var plateform = PLATEFORMS_BY_KEYS[plateformKey];
    var assetLink = "".concat(staticUrl, "/file/").concat(asset.filename);
    return /*#__PURE__*/react.createElement(Indicator_Indicator, {
      severity: "info",
      iconName: "folder_zip",
      style: {
        flex: 'none',
        marginLeft: '2px',
        marginBottom: breakPoint414 ? '10px' : ''
      },
      href: assetLink // callbackClick={() => handleAssetClick(asset)}

    }, plateform.label);
  }), releaseVersion && /*#__PURE__*/react.createElement(Indicator_Indicator, {
    severity: "hot",
    style: {
      flex: 'none',
      marginLeft: '2px',
      marginBottom: breakPoint414 ? '10px' : ''
    }
  }, "v", releaseVersion))), /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-release-item-content"
  }, children));
});
// EXTERNAL MODULE: ../../ladybug/react/components/items/ChangelogChangeItem.css
var ChangelogChangeItem = __webpack_require__(5205);
;// CONCATENATED MODULE: ../../ladybug/react/components/items/ChangelogChangeItem.jsx













function ChangelogChangeItem_slicedToArray(arr, i) { return ChangelogChangeItem_arrayWithHoles(arr) || ChangelogChangeItem_iterableToArrayLimit(arr, i) || ChangelogChangeItem_unsupportedIterableToArray(arr, i) || ChangelogChangeItem_nonIterableRest(); }

function ChangelogChangeItem_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ChangelogChangeItem_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ChangelogChangeItem_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ChangelogChangeItem_arrayLikeToArray(o, minLen); }

function ChangelogChangeItem_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ChangelogChangeItem_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ChangelogChangeItem_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // Functions Components ReactJS
// ======================================================================================================
// ***** ChangelogChangeItem *****
// *******************************

var TAG_ChangelogChangeItem = function TAG_ChangelogChangeItem() {};

var ChangelogChangeItem_ChangelogChangeItem = (0,es/* observer */.Pi)(function (props) {
  // From ... props
  var release = props.release;
  var change = props.change;
  var editable = props.editable == true ? true : false; // From ... states

  var _React$useState = react.useState(false),
      _React$useState2 = ChangelogChangeItem_slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1]; // ...


  var changeTitle = change.title; // Events
  // ==================================================================================================

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("lb-changelog-change-item", {
      "expanded": expanded
    })
  }, /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-change-item-header"
  }, /*#__PURE__*/react.createElement("div", {
    className: "lb-changelog-change-item-header-title selectable"
  }, changeTitle)));
});
// EXTERNAL MODULE: ../../ladybug/react/contexts/changelogs/Changelogs.css
var Changelogs = __webpack_require__(9553);
;// CONCATENATED MODULE: ../../ladybug/react/contexts/changelogs/Changelogs.jsx
function Changelogs_slicedToArray(arr, i) { return Changelogs_arrayWithHoles(arr) || Changelogs_iterableToArrayLimit(arr, i) || Changelogs_unsupportedIterableToArray(arr, i) || Changelogs_nonIterableRest(); }

function Changelogs_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Changelogs_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Changelogs_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function Changelogs_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Changelogs_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Changelogs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Changelogs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Changelogs_arrayLikeToArray(o, minLen); }

function Changelogs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
















 // Datas
// ======================================================================================================
// Changelogs static datas
// -

var STATIC_CHANGELOGS = {
  'nexorium': NEXORIUM_CHANGELOGS,
  'nexora': NEXORA_CHANGELOGS,
  'gramophone': GRAMOPHONE_CHANGELOGS,
  'vgm': VGM_CHANGELOGS
}; // Plateformes
// -

var PLATEFORMS = [{
  "value": "macos",
  "label": "macOS"
}, {
  "value": "win32",
  "label": "Windows 32"
}, {
  "value": "win64",
  "label": "Windows 64"
}];
var PLATEFORMS_BY_KEYS = {};

for (var Changelogs_i = 0, _PLATEFORMS = PLATEFORMS; Changelogs_i < _PLATEFORMS.length; Changelogs_i++) {
  var plateformItem = _PLATEFORMS[Changelogs_i];
  PLATEFORMS_BY_KEYS[plateformItem.value] = plateformItem;
} // Models
// ======================================================================================================
// ***** Contributor *****
// ***********************


var TAG_ContributorStore = function TAG_ContributorStore() {};

var ContributorStore = mobx_state_tree_module/* types.model */.V5.model({
  initials: '',
  email: '',
  inactive: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    update: function update(raw) {
      self.initials = raw.initials;
      self.email = raw.email;
      self.inactive = raw.inactive;
    }
  };
}); // ***** ChangeStore *****
// ***********************

var TAG_ChangeStore = function TAG_ChangeStore() {};

var ChangeStore = mobx_state_tree_module/* types.model */.V5.model({
  key: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  idx: 0,
  title: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  content: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  warnings: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  contributors: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(ContributorStore), [])
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {
      self.key = raw.key ? raw.key : uuid();
      self.idx = raw.idx ? raw.idx : 0;
      self.title = raw.title;
      self.content = raw.content ? raw.content : "";
      self.warnings = raw.warnings ? raw.warnings : "";
      self.contributors = [];

      if (raw.contributors) {
        var _iterator = Changelogs_createForOfIteratorHelper(raw.contributors),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var contributorRaw = _step.value;
            var contributor = ContributorStore.create({});
            contributor.update(contributorRaw);
            self.contributors.push(contributor);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  };
}); // ***** ReleaseAssetStore *****
// *****************************

var TAG_ReleaseAssetStore = function TAG_ReleaseAssetStore() {};

var ReleaseAssetStore = mobx_state_tree_module/* types.model */.V5.model({
  plateform_key: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  // macos, win32, win64
  filename: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string)
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {
      self.plateform_key = raw.plateform_key;
      self.filename = raw.filename;
    }
  };
}); // ***** ReleaseStore *****
// ************************

var TAG_ReleaseStore = function TAG_ReleaseStore() {};

var ReleaseStore = mobx_state_tree_module/* types.model */.V5.model({
  doc_id: '',
  doc_rev: '',
  doc_state: 0,
  status: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  // draft, ship, test, prod
  date: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  app_key: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  changeset: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  version: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  version_name: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  version_assets: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(ReleaseAssetStore), []),
  changes: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(ChangeStore), []),
  next_send_newsletter: false
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {
      self.doc_id = raw.doc_id ? raw.doc_id : uuid();
      self.doc_rev = raw.doc_rev ? raw.doc_rev : '';
      self.doc_state = raw.doc_state ? raw.doc_state : 0;
      self.status = raw.status;
      self.date = raw.date;
      self.app_key = raw.app_key;
      self.changeset = raw.changeset ? raw.changeset : '';
      self.version = raw.version ? raw.version : '';
      self.version_name = raw.version_name ? raw.version_name : '';
      self.version_assets = [];

      if (raw.version_assets) {
        var _iterator2 = Changelogs_createForOfIteratorHelper(raw.version_assets),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var versionAssetRaw = _step2.value;
            var releaseAsset = ReleaseAssetStore.create({});
            releaseAsset.update(versionAssetRaw);
            self.version_assets.push(releaseAsset);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      self.changes = [];

      var _iterator3 = Changelogs_createForOfIteratorHelper(raw.changes),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var changeRaw = _step3.value;
          var change = ChangeStore.create({});
          change.update(changeRaw);
          self.changes.push(change);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      self.next_send_newsletter = raw.next_send_newsletter ? raw.next_send_newsletter : false;
    }
  };
}); // ***** ChangelogsStore *****
// ***************************

var TAG_ChangelogsStore = function TAG_ChangelogsStore() {};

var ChangelogsStore = mobx_state_tree_module/* types.model */.V5.model({
  loaded: false,
  filterStates: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.string */.V5.string), ['draft', 'ship', 'test', 'prod']),
  filterDates: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.string */.V5.string), []),
  filterMonth: '',
  releases: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(ReleaseStore), []),
  nextUUID: ''
}).views(function (self) {
  return {
    get nbReleases() {
      return self.releases.length;
    },

    // Getters
    // -
    getLastRelease: function getLastRelease() {
      var withAssets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var lastRelease = null;

      var _iterator4 = Changelogs_createForOfIteratorHelper(self.releases),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var release = _step4.value;

          // Qu'avec des assets ?
          if (withAssets && release.version_assets.length == 0) {
            continue;
          }

          if (!lastRelease) {
            lastRelease = release;
          }

          if (lastRelease.date < release.date) {
            lastRelease = release;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return lastRelease;
    },

    // Bools
    // -
    get isEditable() {
      // TODO
      return false;
    },

    isFocused: function isFocused() {
      // Est-on concentré sur une date en particulier ?
      // ---
      var filterDates = self.filterDates;
      return filterDates.length == 1 ? true : false;
    }
  };
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    update: function update(raw) {
      self.loaded = true;
      self.releases = [];

      var _iterator5 = Changelogs_createForOfIteratorHelper(raw.releases),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var releaseRaw = _step5.value;
          var release = ReleaseStore.create({});
          release.update(releaseRaw);
          self.releases.push(release);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      self.nextUUID = uuid();
    },
    load: function load() {
      // Chargement de la liste des versions
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var appKey = app.appKey; // const staticMode = app.staticMode;
      // Chargement des changelogs statiques

      if (STATIC_CHANGELOGS.hasOwnProperty(appKey)) {
        self.update({
          'releases': STATIC_CHANGELOGS[appKey]
        });
      }
    },
    // -
    share: function share(date) {
      // Partage d'une date de changelog
      // ---
      var year = date.substring(0, 4);
      var shareUrl = "/changelog/".concat(year, "?mode=standalone&dates=").concat(date);
      window.open(shareUrl, '_blank');
    },
    focus: function focus(date) {
      // Concentration sur une date de changelog
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var year = date.substring(0, 4);
      var changelogKey = store.app.changelogKey;
      app.navigateTo('changelogs', null, null, {
        filterDates: [date]
      });
    },
    unfocus: function unfocus() {
      // Arrêt concentration sur une date de changelog
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      app.navigateTo('changelogs', null, null, {
        filterDates: []
      });
    }
  };
}); // Functions Components ReactJS
// ======================================================================================================
// ***** RenderChangelogs *****
// ****************************

var TAG_RenderChangelogs = function TAG_RenderChangelogs() {};

var RenderChangelogs = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var changelogs = app.changelogs; // From ... store

  var staticUrl = app.staticUrl;
  var loaded = changelogs.loaded;
  var releases = changelogs.releases;
  var isEditable = changelogs.isEditable;
  var isFocused = changelogs.isFocused; // ...

  react.useEffect(function () {
    if (!loaded) {
      changelogs.load();
    }
  }, [loaded]); // Renderers
  // ==================================================================================================

  var handleShareChangelog = function handleShareChangelog(date) {
    changelog.share(date);
  };

  var handleFocusChangelog = function handleFocusChangelog(date) {
    changelog.focus(date);
  }; // -


  var handleAssetClick = function handleAssetClick(filename) {
    var assetLink = "".concat(staticUrl, "/file/").concat(filename);
    console.log(assetLink);
    app.gotoExternal(assetLink);
  }; // Renderers
  // ==================================================================================================


  var changelogContent = null;

  if (loaded) {
    var dates = [];
    var datesItems = [];
    var releasesByDates = {};

    var _iterator6 = Changelogs_createForOfIteratorHelper(releases),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var release = _step6.value;
        var releaseId = release.doc_id;
        var releaseDate = release.date;

        if (dates.indexOf(releaseDate) == -1) {
          dates.push(releaseDate);
          releasesByDates[releaseDate] = [];
        } // Changes


        var changesList = [];

        var _iterator7 = Changelogs_createForOfIteratorHelper(release.changes.entries()),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _step7$value = Changelogs_slicedToArray(_step7.value, 2),
                changeIdx = _step7$value[0],
                change = _step7$value[1];

            changesList.push( /*#__PURE__*/react.createElement(ChangelogChangeItem_ChangelogChangeItem, {
              key: "".concat(release.doc_id, "_change_").concat(changeIdx),
              release: release,
              change: change,
              editable: isEditable // showContributors={isEditable}
              // callbackEdit={handleEditChange}
              // callbackDelete={handleDeleteChange}

            }));
          } // Releases

        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        releasesByDates[releaseDate].push( /*#__PURE__*/react.createElement(ChangelogReleaseItem_ChangelogReleaseItem, {
          key: release.doc_id,
          release: release,
          editable: isEditable // callbackEdit={handleEditRelease}
          // callbackDelete={handleDeleteRelease}
          // callbackRepository={handleRepository}
          // callbackAdd={handleAddChange}
          ,
          callbackAssetClick: handleAssetClick
        }, changesList));
      } // Dates

    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    for (var _i2 = 0, _dates = dates; _i2 < _dates.length; _i2++) {
      var date = _dates[_i2];
      datesItems.push( /*#__PURE__*/react.createElement(ChangelogDateItem_ChangelogDateItem, {
        key: date,
        date: date,
        editable: isEditable // showShare={!isFocused}
        ,
        showFocus: !isFocused // callbackShare={handleShareChangelog}
        ,
        callbackFocus: handleFocusChangelog
      }, releasesByDates[date]));
    }

    changelogContent = /*#__PURE__*/react.createElement(react.Fragment, null, datesItems);
  }

  return changelogContent;
}); // ***** ChangelogsHeaderLeft *****
// ********************************

var TAG_ChangelogsHeaderLeft = function TAG_ChangelogsHeaderLeft() {};

var ChangelogsHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Changelogs",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** ChangelogsHeaderRight *****
// *********************************

var TAG_ChangelogsHeaderRight = function TAG_ChangelogsHeaderRight() {};

var ChangelogsHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return null;
}); // ***** ChangelogsMenuItem *****
// ******************************

var TAG_ChangelogsMenuItem = function TAG_ChangelogsMenuItem() {};

var ChangelogsMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var changelogsContext = app.changelogsContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(changelogsContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "history",
    label: "Changelogs",
    activeContexts: [changelogsContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** ChangelogsPage *****
// **************************

var TAG_ChangelogsPage = function TAG_ChangelogsPage() {};

var ChangelogsPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var changelogs = app.changelogs; // From ... store

  var initialized = app.initialized;
  var loaded = changelogs.loaded;
  var nbReleases = changelogs.nbReleases; // ...

  var showHelper = !initialized || !loaded || nbReleases == 0 ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page -> que quand l'app est intitialisée (pour useEffect)
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(RenderChangelogs, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "history",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ../../ladybug/react/contexts/bugs/Bugs.css
var Bugs = __webpack_require__(2432);
;// CONCATENATED MODULE: ../../ladybug/react/contexts/bugs/Bugs.jsx








 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** BugsStore *****
// *********************

var TAG_BugsStore = function TAG_BugsStore() {};

var BugsStore = mobx_state_tree_module/* types.model */.V5.model({
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
// ***** BugsHeaderLeft *****
// **************************

var TAG_BugsHeaderLeft = function TAG_BugsHeaderLeft() {};

var BugsHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Bugs",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** BugsHeaderRight *****
// ***************************

var TAG_BugsHeaderRight = function TAG_BugsHeaderRight() {};

var BugsHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return null;
}); // ***** BugsMenuItem *****
// ************************

var TAG_BugsMenuItem = function TAG_BugsMenuItem() {};

var BugsMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var bugsContext = app.bugsContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(bugsContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "bug_report",
    label: "Bugs",
    activeContexts: [bugsContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** BugsPage *****
// ********************

var TAG_BugsPage = function TAG_BugsPage() {};

var BugsPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "bug_report",
      show: true
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/ui/popover/Popover.css
var Popover = __webpack_require__(9443);
;// CONCATENATED MODULE: ../../nexus/react/ui/popover/Popover.jsx













function Popover_slicedToArray(arr, i) { return Popover_arrayWithHoles(arr) || Popover_iterableToArrayLimit(arr, i) || Popover_unsupportedIterableToArray(arr, i) || Popover_nonIterableRest(); }

function Popover_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Popover_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Popover_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Popover_arrayLikeToArray(o, minLen); }

function Popover_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Popover_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
// EXTERNAL MODULE: ../../nexus/react/layout/header/Header.css
var Header = __webpack_require__(4450);
;// CONCATENATED MODULE: ../../nexus/react/layout/header/Header.jsx













function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_unsupportedIterableToArray(arr, i) || Header_nonIterableRest(); }

function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Header_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Header_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Header_arrayLikeToArray(o, minLen); }

function Header_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Header_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























 // Datas
// -------------------------------------------------------------------------------------------------------------

var DEFAULT_HEADER_LEFT = {
  'portal': PortalHeaderLeft,
  'notifications': NotificationsHeaderLeft,
  'blog': BlogHeaderLeft,
  'newsletters': NewslettersHeaderLeft,
  'about': AboutHeaderLeft,
  'changelogs': ChangelogsHeaderLeft,
  'bugs': BugsHeaderLeft,
  'preferences': PreferencesHeaderLeft,
  'admin': AdminHeaderLeft,
  'playground': PlaygroundHeaderLeft,
  'account': AccountHeaderLeft
};
var DEFAULT_HEADER_RIGHT = {
  'portal': PortalHeaderRight,
  'notifications': NotificationsHeaderRight,
  'blog': BlogHeaderRight,
  'newsletters': NewslettersHeaderRight,
  'about': AboutHeaderRight,
  'changelogs': ChangelogsHeaderRight,
  'bugs': BugsHeaderRight,
  'preferences': PreferencesHeaderRight,
  'admin': AdminHeaderRight,
  'playground': PlaygroundHeaderRight,
  'account': AccountHeaderRight
}; // Models
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
// ***** HeaderDivider *****
// *************************

var TAG_HeaderDivider = function TAG_HeaderDivider() {};

var HeaderDivider = function HeaderDivider(props) {
  // From ... props
  var style = props.style ? props.style : {}; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-header-divider",
    style: style
  });
}; // ***** HeaderTitle *****
// ***********************

var TAG_HeaderTitle = function TAG_HeaderTitle() {};

var HeaderTitle = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... props

  var title = props.title ? props.title : '';
  var titleStyle = props.titleStyle ? props.titleStyle : {};
  var subtitle = props.subtitle ? props.subtitle : '';
  var subtitleStyle = props.subtitleStyle ? props.subtitleStyle : {};
  var centered = props.centered == true ? props.centered : false; // ...

  if (!titleStyle.hasOwnProperty('color')) {
    titleStyle['color'] = "white";
  } // Render
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
}); // ***** HeaderUserMenu *****
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


  var isLoading = app.isLoading;
  var isLogged = account.isLogged;
  var breakPoint650 = app.breakPoint650;
  var authUrl = app.authUrl;
  var authContext = app.authContext;
  var accountUrl = app.accountUrl;
  var accountContext = app.accountContext; // ...

  var accountName = account.name; // Events
  // ==================================================================================================

  var handleAccount = function handleAccount(event) {
    setAnchorAccount(event.currentTarget);
  };

  var handleCloseAccount = function handleCloseAccount() {
    setAnchorAccount(null);
  }; // -


  var handleLoginClick = function handleLoginClick() {
    app.navigate(authUrl, authContext, [{
      "op": "replace",
      "path": "/app/auth/password",
      "value": ''
    }, {
      "op": "replace",
      "path": "/app/auth/user_id",
      "value": ''
    }, {
      "op": "replace",
      "path": "/app/auth/step",
      "value": 'login'
    }]);
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
      name: isLogged ? "account_circle" : "no_accounts",
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
    }, /*#__PURE__*/react.createElement(List_ListIcon, null, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "lock_open"
    })), /*#__PURE__*/react.createElement(ListText, null, "Se connecter")), isLogged && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ListItem, {
      onClick: function onClick() {
        return handleMyAccountClick();
      },
      disabled: isLoading
    }, /*#__PURE__*/react.createElement(List_ListIcon, null, /*#__PURE__*/react.createElement(Icon_Icon, {
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
    }, /*#__PURE__*/react.createElement(List_ListIcon, null, /*#__PURE__*/react.createElement(Icon_Icon, {
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

  var isLoading = app.isLoading;
  var context = app.context;
  var canGoBack = app.canGoBack();
  var canGoHome = app.canGoHome();
  var breakPoint650 = app.breakPoint650;
  var appKind = app.kind;
  var staticMode = app.staticMode;
  var menuExpanded = menu.expanded;
  var menuPinned = menu.pinned;
  var themeMode = theme.mode; // ...

  if (!left && DEFAULT_HEADER_LEFT.hasOwnProperty(context)) {
    var LeftComponent = DEFAULT_HEADER_LEFT[context];
    left = /*#__PURE__*/react.createElement(LeftComponent, null);
  }

  if (!right && DEFAULT_HEADER_RIGHT.hasOwnProperty(context)) {
    var RightComponent = DEFAULT_HEADER_RIGHT[context];
    right = /*#__PURE__*/react.createElement(RightComponent, null);
  } // Events
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


  var handleThemeModeClick = function handleThemeModeClick() {
    theme.toggleMode();
  };

  var handleBugReportClick = function handleBugReportClick() {};

  var handlePortalClick = function handlePortalClick() {
    if (callbackPortal) {
      callbackPortal();
    } else {
      portal.toogle();
    }
  }; // Render
  // ==================================================================================================


  var menuBtn = /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleMenuClick();
    },
    disabled: isLoading
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "menu",
    color: "white"
  }));
  var backBtn = null;

  if (!isLoading) {
    backBtn = /*#__PURE__*/react.createElement(IconButton, {
      onClick: function onClick() {
        return handleBackClick();
      },
      disabled: isLoading || !canGoBack
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "arrow_back",
      color: "white"
    }));
  }

  var spinner = null;

  if (isLoading) {
    spinner = /*#__PURE__*/react.createElement(Avatar_Avatar, {
      color: "transparent",
      size: "small"
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "hourglass_empty",
      color: "white"
    }));
  }

  var homeBtn = null;

  if (!breakPoint650) {
    homeBtn = /*#__PURE__*/react.createElement(IconButton, {
      onClick: function onClick() {
        return handleHomeClick();
      },
      disabled: isLoading || !canGoHome
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "home",
      color: "white"
    }));
  } // Header -> Left
  // -------------------------------------------------


  var headerLeft = /*#__PURE__*/react.createElement("div", {
    className: "nx-header-left"
  }, !breakPoint650 && menuBtn, backBtn, spinner, homeBtn, left && left); // Header -> Middle
  // -------------------------------------------------

  var headerMiddle = /*#__PURE__*/react.createElement("div", {
    className: "nx-header-middle"
  }, children); // Header -> Right
  // -------------------------------------------------

  var btnThemeMode = null;

  if (!breakPoint650) {
    btnThemeMode = /*#__PURE__*/react.createElement(IconButton, {
      onClick: function onClick() {
        return handleThemeModeClick();
      },
      disabled: isLoading
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: themeMode == 'light' ? 'dark_mode' : 'light_mode',
      color: "white"
    }));
  }

  var btnBugs = null;

  if (!breakPoint650 && appKind == 'web') {
    btnBugs = /*#__PURE__*/react.createElement(IconButton, {
      onClick: function onClick() {
        return handleBugReportClick();
      },
      disabled: isLoading || true
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "bug_report",
      color: "white"
    }));
  }

  var headerMenu = null;

  if (!breakPoint650 && appKind == 'web') {
    headerMenu = /*#__PURE__*/react.createElement(HeaderUserMenu, null);
  }

  var portalBtn = null;

  if (!breakPoint650 && appKind == 'web') {
    portalBtn = /*#__PURE__*/react.createElement(IconButton, {
      onClick: function onClick() {
        return handlePortalClick();
      },
      disabled: isLoading
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "apps",
      color: "white"
    }));
  }

  var headerRight = /*#__PURE__*/react.createElement("div", {
    className: "nx-header-right"
  }, right && right, btnThemeMode, !staticMode && btnBugs, !staticMode && headerMenu, portalBtn, breakPoint650 && menuBtn); // -------------------------------------------------

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-header", {
      'menu-unpinned': !menuPinned
    }, {
      'menu-expanded': menuExpanded && !breakPoint650 && menuPinned
    }, {
      'menu-retracted': !menuExpanded && !breakPoint650 && menuPinned
    })
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-header-grooves"
  }), /*#__PURE__*/react.createElement("div", {
    className: "nx-header-toolbar",
    style: {
      // backgroundColor: hexToRgbA(theme.palette.primary.main, 0.8),
      backgroundColor: themeMode == 'light' ? hexToRgbA('#F5F5F5', 0.8) : hexToRgbA('#1E2020', 0.8)
    }
  }, headerLeft, headerMiddle, headerRight));
});
// EXTERNAL MODULE: ../../nexus/react/node_modules/react-dom/server.browser.js
var server_browser = __webpack_require__(3228);
// EXTERNAL MODULE: ../../nexus/react/ui/snackbar/Snackbar.css
var Snackbar = __webpack_require__(7677);
;// CONCATENATED MODULE: ../../nexus/react/ui/snackbar/Snackbar.jsx









 // Models
// ----------------------------------------------------------------------------------------------------------------------------

var TAG_SnackbarStore = function TAG_SnackbarStore() {};

var SnackbarStore = mobx_state_tree_module/* types.model */.V5.model({
  open: false,
  msg: '',
  severity: 'default',
  action: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  callbackExit: mobx_state_tree_module/* types.frozen */.V5.frozen(null)
}).actions(function (self) {
  return {
    update: function update(open, msg, severity, action, callbackExit) {
      // Mise à jour de la snackbar en fonction des paramètres
      // ---
      if (msg) {
        if (typeof msg != 'string') {
          try {
            msg = server_browser.renderToStaticMarkup(msg);
          } catch (ex) {}
        }
      } else {
        msg = '';
      }

      self.open = open;
      self.msg = msg ? msg : self.msg;
      self.severity = severity ? severity : self.severity;
      self.action = action ? action : self.action;
      self.callbackExit = callbackExit ? callbackExit : self.callbackExit;
    },
    close: function close() {
      self.update(false);
    }
  };
}); // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** Snackbar *****
// ********************

var TAG_Snackbar = function TAG_Snackbar() {};

var Snackbar_Snackbar = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var snackbar = app.snackbar; // From ... store

  var open = snackbar.open;
  var msg = snackbar.msg;
  var severity = snackbar.severity;
  var action = snackbar.action;
  var callbackExit = snackbar.callbackExit; // ...

  react.useEffect(function () {
    if (open) {
      document.body.addEventListener('click', handleCloseClick, true);
    }
  }, [open]); // ...

  var style = {}; // Events
  // ==================================================================================================

  var handleCloseClick = function handleCloseClick() {
    snackbar.close();
    document.body.removeEventListener('click', handleCloseClick, true);
  }; // Render
  // ==================================================================================================


  var snackbarContent = null;

  if (open) {
    var severityDef = SEVERITIES.getDef(severity);
    style['backgroundColor'] = severityDef.contrasted;
    snackbarContent = /*#__PURE__*/react.createElement("div", {
      className: "nx-snackbar",
      style: style
    }, /*#__PURE__*/react.createElement(Avatar_Avatar, {
      color: "transparent",
      size: "small"
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: severityDef.icon_name,
      color: "white"
    })), /*#__PURE__*/react.createElement("div", {
      className: "nx-snackbar-msg",
      dangerouslySetInnerHTML: {
        __html: msg
      }
    }), /*#__PURE__*/react.createElement(IconButton, {
      onClick: function onClick() {
        return handleCloseClick();
      }
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "close",
      color: "white"
    })));
  }

  return snackbarContent;
});
;// CONCATENATED MODULE: ../../nexus/react/utils/Responsive.jsx
var MobileDetect = __webpack_require__(5288); // Functions
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
    var urlParts = url.split('/'); // Hack :: home staticMode

    if (url.search('/index.html') > -1) {
      matched['context'] = 'home';
      matched['params'] = {};
    } // Hack :: login


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
// EXTERNAL MODULE: ../../nexus/react/forms/label/Label.css
var Label = __webpack_require__(9988);
;// CONCATENATED MODULE: ../../nexus/react/forms/label/Label.jsx




 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Label *****
// *****************

var TAG_Label = function TAG_Label() {};

var Label_Label = function Label(props) {
  // From ... props
  var variant = props.variant ? props.variant : 'default'; // default, revnumber

  var children = props.children;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-label", variant, className),
    style: style
  }, children);
};
// EXTERNAL MODULE: ../../cerberus/react/components/items/RightItem.css
var RightItem = __webpack_require__(5832);
;// CONCATENATED MODULE: ../../cerberus/react/components/items/RightItem.jsx
function RightItem_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = RightItem_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function RightItem_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RightItem_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RightItem_arrayLikeToArray(o, minLen); }

function RightItem_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




















 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** RightItem *****
// *********************

var TAG_RightItem = function TAG_RightItem() {};

var RightItem_RightItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var user = store.user;
  var services = app.services; // From ... store

  var isLoading = app.isLoading; // From ... props

  var appId = props.appId; // const savePath = (props.savePath) ? props.savePath : [];
  // ...

  var serviceInfo = services.getServiceInfo(appId);
  var roles = serviceInfo.roles;
  var externalUrl = serviceInfo.external;
  var iconUrl = "".concat(externalUrl, "/static/favicons/android-icon-48x48.png");
  var name = serviceInfo.name; // Events
  // ==================================================================================================

  var handleRight = function handleRight(savePath, value) {
    var toAdd = [];
    var toRemove = [];
    var found = false;
    var foundIdx = roles.indexOf(value);

    if (foundIdx > -1) {
      for (var roleIdx in roles) {
        var roleKey = roles[roleIdx];

        if (!found) {
          toAdd.push(roleKey);
        } else {
          toRemove.push(roleKey);
        }

        if (roleKey == value) {
          found = true;
        }
      }
    } else {
      toAdd = [];
      toRemove = copyObj(roles);
    }

    user.addRoles(toAdd);
    user.removeRoles(toRemove);
  }; // Render
  // ==================================================================================================


  var rightLevels = [{
    value: serviceInfo.view_role,
    label: 'Lecteur'
  }, {
    value: serviceInfo.edit_role,
    label: 'Contributeur'
  }, {
    value: serviceInfo.admin_role,
    label: 'Administrateur'
  }];
  var rightValue = '';

  var _iterator = RightItem_createForOfIteratorHelper(roles),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var roleKey = _step.value;

      if (user.role_finder.indexOf(roleKey) > -1) {
        rightValue = roleKey;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "c-right-item"
  }, /*#__PURE__*/react.createElement("img", {
    className: "c-right-item-icon",
    src: iconUrl
  }), /*#__PURE__*/react.createElement("div", {
    className: "c-right-item-name"
  }, name), /*#__PURE__*/react.createElement("div", {
    className: "c-right-item-select"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    component: "select",
    datas: rightLevels,
    value: rightValue,
    callbackChange: handleRight,
    disabled: isLoading,
    canBeEmpty: true,
    style: {
      minWidth: '140px'
    }
  })));
});
// EXTERNAL MODULE: ../../cerberus/react/contexts/user/User.css
var User = __webpack_require__(1167);
;// CONCATENATED MODULE: ../../cerberus/react/contexts/user/User.jsx
















function User_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = User_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function User_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return User_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return User_arrayLikeToArray(o, minLen); }

function User_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

















 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** UserStore *****
// *********************

var TAG_UserStore = function TAG_UserStore() {};

var UserStore = mobx_state_tree_module/* types.model */.V5.model({
  doc_id: '',
  doc_rev: '',
  doc_state: 0,
  login: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  password: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  role_finder: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.string */.V5.string), []),
  last_login: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  loaded: false
}).views(function (self) {
  return {
    // Bools
    // -
    get isEditable() {
      var docState = self.doc_state;

      if (docState != -1) {
        return true;
      }

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
      console.log(raw);
      self.doc_id = raw.doc_id;
      self.doc_rev = raw.doc_rev;
      self.doc_state = raw.doc_state;
      self.login = raw.login;
      self.password = raw.password;
      self.role_finder = [];

      var _iterator = User_createForOfIteratorHelper(raw.role_finder),
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

      self.loaded = true;
    },
    load: function load(callback) {
      // Appel AJAX de la fonction de chargement des données de l'utilisateur
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var snackbar = app.snackbar;
      var userId = store.userId;
      var ajaxCerberus = store.ajaxCerberus;
      var params = new FormData();
      params.append('user_id', userId);
      var url = "".concat(ajaxCerberus, "/user_actions/load");
      app.fetchJSON(url, {
        'body': params
      }, false, 'POST').then(function (json) {
        self.update(json.user_raw);

        if (callback) {
          callback();
        }
      })["catch"](function (ex) {
        console.error("Fetch failed for ".concat(url), ex);
        snackbar.update(true, "Une erreur est survenue.", "error");
      });
    },
    validate: function validate(callback) {
      // Validation des données de l'utilisateur
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var errors = []; // Pas d'identifiant ?

      if (!self.login) {
        errors.push(app.addError(['user', 'login'], "Nécessaire"));
      }

      if (callback) {
        callback(errors);
      }

      return errors;
    },
    save: function save() {
      // Appel AJAX de la fonction d'enregistrement de l'utilisateur
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var snackbar = app.snackbar;
      var ajaxCerberus = store.ajaxCerberus;
      var userRev = self.doc_rev;
      var params = new FormData();
      params.append('user_raw', JSON.stringify(self.toJSON()));
      var url = "".concat(ajaxCerberus, "/user_actions/save");
      app.fetchJSON(url, {
        'body': params
      }, false, 'POST').then(function (json) {
        var userId = json.user_raw.doc_id;

        if (!userRev) {
          // Nouveau document enregistré ?
          store.navigateTo('user', userId, undefined, undefined, function () {
            snackbar.update(true, "Enregistrement effectué.", "success");
          });
        } else {
          // Document existant mis à jour ?
          self.load(function () {
            snackbar.update(true, "Enregistrement effectué.", "success");
          });
        }
      })["catch"](function (ex) {
        console.error("Fetch failed for ".concat(url), ex);
        snackbar.update(true, "Une erreur est survenue.", "error");
      });
    },
    // -
    addRoles: function addRoles(roles) {
      // Ajoute les rôles passés en paramètres
      // ---
      if (typeof roles == "string") {
        roles = [roles];
      }

      var _iterator2 = User_createForOfIteratorHelper(roles),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var roleKey = _step2.value;

          if (self.role_finder.indexOf(roleKey) == -1) {
            self.role_finder.push(roleKey);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    removeRoles: function removeRoles(roles) {
      // Retire les rôles passés en paramètres
      // ---
      if (typeof roles == "string") {
        roles = [roles];
      }

      var cleanedRoleFinder = [];

      var _iterator3 = User_createForOfIteratorHelper(self.role_finder),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var roleKey = _step3.value;

          if (roles.indexOf(roleKey) == -1) {
            cleanedRoleFinder.push(roleKey);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      self.role_finder = cleanedRoleFinder;
    }
  };
}); // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** UserHeaderLeft *****
// **************************

var TAG_UserHeaderLeft = function TAG_UserHeaderLeft() {};

var UserHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Utilisateur",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** UserHeaderRight *****
// ***************************

var TAG_UserHeaderRight = function TAG_UserHeaderRight() {};

var UserHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var user = store.user; // From ... store

  var isLoading = app.isLoading;
  var docId = user.doc_id;
  var docRev = user.doc_rev;
  var docState = user.doc_state; // ...
  // Events
  // ==================================================================================================

  var handleSaveClick = function handleSaveClick() {
    user.validate(function (errors) {
      if (errors.length == 0) {
        user.save();
      }
    });
  };

  var handleDeleteClick = function handleDeleteClick() {
    var confirmMsg = "Voulez-vous vraiment supprimer ce document ?";

    if (!confirm(confirmMsg)) {
      return;
    }

    app.setDocState(docId, -1, user.load);
  };

  var handleRestoreClick = function handleRestoreClick() {
    var confirmMsg = "Voulez-vous vraiment restaurer ce document ?";

    if (!confirm(confirmMsg)) {
      return;
    }

    app.setDocState(docId, 0, user.load);
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleSaveClick();
    },
    disabled: isLoading,
    title: "Enregistrer"
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "save",
    color: "white"
  })), docRev && docState == 0 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleDeleteClick();
    },
    disabled: isLoading,
    title: "Supprimer"
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "delete",
    color: "white"
  })), docRev && docState == -1 && /*#__PURE__*/react.createElement(IconButton, {
    onClick: function onClick() {
      return handleRestoreClick();
    },
    disabled: isLoading,
    title: "Restaurer"
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "restore_from_trash",
    color: "white"
  })), /*#__PURE__*/react.createElement(HeaderDivider, null));
}); // ***** UserMenuItem *****
// ************************

var TAG_UserMenuItem = function TAG_UserMenuItem() {};

var UserMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account;
  var menu = app.menu; // From ... store

  var isAdmin = account.is_admin; // ...

  var userContext = 'user'; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(userContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  var menuItemContent = /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "person",
    label: "Utilisateur",
    activeContexts: [userContext],
    callbackClick: handleMenuItemClick,
    disabled: !isAdmin
  });
  return menuItemContent;
}); // ***** RenderSectionUserIdentity *****
// *************************************

var TAG_RenderSectionUserIdentity = function TAG_RenderSectionUserIdentity() {};

var RenderSectionUserIdentity = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var user = store.user; // From ... store

  var isLoading = app.isLoading;
  var isEditable = user.isEditable; // Render
  // ==================================================================================================
  // Section -> Content
  // ---

  var sectionContent = /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-login",
    component: "input",
    label: "Pseudo / identifiant",
    savePath: ['user', 'login'],
    disabled: isLoading || !isEditable
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-password",
    component: "input",
    type: "password",
    label: "Mot de passe",
    savePath: ['user', 'password'],
    disabled: isLoading || !isEditable
  }));
  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "face"
    }),
    title: "Identit\xE9"
  }, sectionContent);
}); // ***** RenderSectionUserIdentity *****
// *************************************

var TAG_RenderSectionUserRights = function TAG_RenderSectionUserRights() {};

var RenderSectionUserRights = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var user = store.user; // From ... store

  var isLoading = app.isLoading;
  var isEditable = user.isEditable; // Render
  // ==================================================================================================

  var dividerStyle = {
    marginTop: '10px',
    marginBottom: '10px'
  }; // Section -> Content
  // ---

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(RightItem_RightItem, {
    appId: "cerberus"
  }), /*#__PURE__*/react.createElement(Divider_Divider, {
    style: dividerStyle
  }), /*#__PURE__*/react.createElement(RightItem_RightItem, {
    appId: "nexorium"
  }), /*#__PURE__*/react.createElement(Divider_Divider, {
    style: dividerStyle
  }), /*#__PURE__*/react.createElement(RightItem_RightItem, {
    appId: "nexora"
  }), /*#__PURE__*/react.createElement(Divider_Divider, {
    style: dividerStyle
  }), /*#__PURE__*/react.createElement(RightItem_RightItem, {
    appId: "vgm"
  }), /*#__PURE__*/react.createElement(Divider_Divider, {
    style: dividerStyle
  }), /*#__PURE__*/react.createElement(RightItem_RightItem, {
    appId: "gramophone"
  }));
  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "lock"
    }),
    title: "Droits d'acc\xE8s"
  }, sectionContent);
}); // ***** RenderPlayground *****
// ****************************

var TAG_RenderUser = function TAG_RenderUser() {};

var RenderUser = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var user = store.user; // From ... store

  var loaded = user.loaded;
  var userRev = user.doc_rev;
  var userState = user.doc_state; // ...

  react.useEffect(function () {
    if (!loaded) {
      user.load();
    }
  }, [loaded]); // Render
  // ==================================================================================================

  var contentPlayground = null;

  if (loaded) {
    contentPlayground = /*#__PURE__*/react.createElement(react.Fragment, null, userState == -1 && /*#__PURE__*/react.createElement(Indicator_Indicator, {
      severity: "error",
      variant: "contrasted",
      style: {
        marginBottom: '20px'
      }
    }, "Supprim\xE9"), /*#__PURE__*/react.createElement(RenderSectionUserIdentity, null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(RenderSectionUserRights, null), userRev && /*#__PURE__*/react.createElement(Label_Label, {
      variant: "revnumber"
    }, userRev));
  }

  return contentPlayground;
}); // ***** UserPage *****
// ********************

var TAG_UserPage = function TAG_UserPage() {};

var UserPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var user = store.user; // From ... store

  var initialized = app.initialized;
  var loaded = user.loaded; // ...

  var showHelper = !initialized || !loaded ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page -> que quand l'app est intitialisée (pour useEffect)
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(RenderUser, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "person",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/auth/Auth.css
var Auth = __webpack_require__(7444);
;// CONCATENATED MODULE: ../../nexus/react/contexts/auth/Auth.jsx
function Auth_slicedToArray(arr, i) { return Auth_arrayWithHoles(arr) || Auth_iterableToArrayLimit(arr, i) || Auth_unsupportedIterableToArray(arr, i) || Auth_nonIterableRest(); }

function Auth_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Auth_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Auth_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Auth_arrayLikeToArray(o, minLen); }

function Auth_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Auth_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Auth_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






























 // Datas
// -------------------------------------------------------------------------------------------------------------

var AUTH_STEPS = [{
  key: 'login',
  label: 'Authentification',
  icon: 'alternate_email'
}, {
  key: 'password',
  label: 'Authentification',
  icon: 'lock'
}, {
  key: 'register',
  label: 'Inscription',
  icon: 'person_add'
}, {
  key: 'lost',
  label: 'Récupération',
  icon: 'person_search'
}, {
  key: 'logged',
  label: 'Authentifié',
  icon: 'verified_user'
}];
var AUTH_STEPS_BY_KEY = {};

for (var Auth_i = 0, _AUTH_STEPS = AUTH_STEPS; Auth_i < _AUTH_STEPS.length; Auth_i++) {
  var authStepDef = _AUTH_STEPS[Auth_i];
  AUTH_STEPS_BY_KEY[authStepDef.key] = authStepDef;
} // Models
// -------------------------------------------------------------------------------------------------------------
// ***** AuthStore *****
// *********************


var TAG_AuthStore = function TAG_AuthStore() {};

var AuthStore = mobx_state_tree_module/* types.model */.V5.model({
  login: '',
  password: '',
  user_id: '',
  step: 'login',
  // login, password, register, lost, logged
  came_from: '/'
}).actions(function (self) {
  return {
    setField: function setField(field, value) {
      self[field] = value;
    },
    // -
    validate: function validate(stepKey, callback) {
      // Valide l'étape passée en paramètres
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var snackbar = app.snackbar;
      var params = new FormData();
      params.append('auth_raw', JSON.stringify(self.toJSON()));
      app.clearErrors();
      var url = '/auth_actions/validate';
      app.fetchJSON(url, {
        'body': params
      }, false, 'POST').then(function (json) {
        app.setField('errors', json.errors);

        if (json.user_id) {
          self.setField('user_id', json.user_id);
        }

        if (callback) {
          callback(json.errors);
        }
      })["catch"](function (ex) {
        console.error("Fetch failed for ".concat(url), ex);
        snackbar.update(true, "Une erreur est survenue.", "error");
      });
    },
    moveToStep: function moveToStep(stepKey) {
      // Modifie l'étape courante avec celle passée en paramètres
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var authUrl = app.authUrl;
      var authContext = app.authContext;
      var authUrlStep = '';

      if (['logged'].indexOf(stepKey) > -1) {
        authUrlStep = "/".concat(stepKey);
      }

      app.navigate("".concat(authUrl).concat(authUrlStep), authContext, [{
        "op": "replace",
        "path": "/app/auth/step",
        "value": stepKey
      }]);
    }
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
  var breakPoint650 = app.breakPoint650;
  var authContext = app.authContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(authContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  var loginMenuItem = null;

  if (!isLogged && breakPoint650) {
    loginMenuItem = /*#__PURE__*/react.createElement(MenuItem, {
      iconName: "account_circle",
      label: "Me connecter",
      activeContexts: [authContext],
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
  var breakPoint650 = app.breakPoint650; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.gotoInternal('/logout');
  }; // Render
  // ==================================================================================================


  var logoutMenuItem = null;

  if (isLogged && breakPoint650) {
    logoutMenuItem = /*#__PURE__*/react.createElement(MenuItem, {
      iconName: "power_setting",
      label: "Se d\xE9connecter",
      callbackClick: handleMenuItemClick
    });
  }

  return logoutMenuItem;
}); // ***** RenderStepLogin *****
// ***************************

var TAG_RenderStepLogin = function TAG_RenderStepLogin() {};

var RenderStepLogin = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var auth = app.auth;
  var account = app.account; // From ... store

  var isLoading = app.isLoading; // Events
  // ==================================================================================================

  var _moveIt = function _moveIt() {
    auth.validate('login', function (errors) {
      if (errors.length == 0) {
        auth.moveToStep('password');
      }
    });
  };

  var handleLoginKeyPress = function handleLoginKeyPress(evt) {
    if (evt.code == 'Enter') {
      _moveIt();
    }
  };

  var handleLoginBlur = function handleLoginBlur(savePath, value) {
    _moveIt();
  };

  var handleGotoRegisterClick = function handleGotoRegisterClick() {
    auth.moveToStep('register');
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(HelperParaph, {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react.createElement(HelperParaphTitle, {
    color: "primary"
  }, "Qui \xEAtes-vous ?"), "Saisissez votre pseudo dans le champ ci-dessous :"), /*#__PURE__*/react.createElement("div", {
    className: "h-col flex-align-start"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-login",
    component: "input",
    placeholder: "Pseudo",
    savePath: ['app', 'auth', 'login'],
    callbackKeyPress: handleLoginKeyPress,
    disabled: isLoading
  }), /*#__PURE__*/react.createElement(Button_Button, {
    color: "primary",
    variant: "contained",
    onClick: function onClick() {
      return _moveIt();
    },
    style: {
      marginLeft: '5px',
      minWidth: 'unset'
    },
    className: "flex-0",
    disabled: isLoading
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "arrow_forward",
    color: "white"
  }))), /*#__PURE__*/react.createElement(Button_Button, {
    color: "secondary",
    onClick: function onClick() {
      return handleGotoRegisterClick();
    },
    style: {
      marginTop: '20px'
    }
  }, "Pas encore inscrit ?"));
}); // ***** RenderStepPassword *****
// ******************************

var TAG_RenderStepPassword = function TAG_RenderStepPassword() {};

var RenderStepPassword = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var auth = app.auth;
  var account = app.account; // From ... store

  var isLoading = app.isLoading;
  var canGoBack = app.canGoBack();
  var homeContext = app.homeContext;
  var homeUrl = app.homeUrl;
  var login = auth.login; // Events
  // ==================================================================================================

  var _moveIt = function _moveIt() {
    auth.validate('password', function (errors) {
      if (errors.length == 0) {
        app.setBrowserURL('/login/logged');
        document.location.reload();
      }
    });
  };

  var handlePasswordKeyPress = function handlePasswordKeyPress(evt) {
    if (evt.code == 'Enter') {
      _moveIt();
    }
  };

  var handleLoginBlur = function handleLoginBlur(savePath, value) {
    _moveIt();
  };

  var handleChangeAccountClick = function handleChangeAccountClick() {
    auth.setField('login', '');
    auth.setField('password', '');
    auth.setField('user_id', '');
    auth.moveToStep('login');
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(HelperParaph, {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react.createElement(HelperParaphTitle, {
    color: "primary"
  }, login), "Saissez votre mot de passe dans le champ ci-dessous :"), /*#__PURE__*/react.createElement("div", {
    className: "h-col flex-align-start"
  }, /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-password",
    component: "input",
    type: "password",
    placeholder: "Mot de passe",
    savePath: ['app', 'auth', 'password'],
    callbackKeyPress: handlePasswordKeyPress,
    disabled: isLoading
  }), /*#__PURE__*/react.createElement(Button_Button, {
    color: "primary",
    variant: "contained",
    onClick: function onClick() {
      return _moveIt();
    },
    style: {
      marginLeft: '5px',
      minWidth: 'unset'
    },
    className: "flex-0",
    disabled: isLoading
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "arrow_forward",
    color: "white"
  }))), /*#__PURE__*/react.createElement(Button_Button, {
    color: "secondary",
    onClick: function onClick() {
      return handleChangeAccountClick();
    },
    style: {
      marginTop: '20px'
    }
  }, "Essayer avec un autre compte ?"));
}); // ***** RenderStepRegister *****
// ******************************

var TAG_RenderStepRegister = function TAG_RenderStepRegister() {};

var RenderStepRegister = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var auth = app.auth;
  var account = app.account; // From ... store

  var isLoading = app.isLoading; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", null, "Register");
}); // ***** RenderStepLost *****
// **************************

var TAG_RenderStepLost = function TAG_RenderStepLost() {};

var RenderStepLost = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var auth = app.auth;
  var account = app.account; // From ... store

  var isLoading = app.isLoading; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", null, "Lost");
}); // ***** RenderStepLogged *****
// ****************************

var TAG_RenderStepLogged = function TAG_RenderStepLogged() {};

var RenderStepLogged = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var auth = app.auth;
  var account = app.account; // From ... state

  var _React$useState = react.useState(5),
      _React$useState2 = Auth_slicedToArray(_React$useState, 2),
      secondsRemaining = _React$useState2[0],
      setSecondsRemaining = _React$useState2[1]; // From ... store


  var isLoading = app.isLoading;
  var login = account.login;
  var isLogged = account.isLogged;
  var cameFrom = auth.came_from; // ...

  react.useEffect(function () {
    var redirectInterval = setInterval(function () {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        clearInterval(redirectInterval);
        app.gotoInternal(cameFrom);
      }
    }, 1000);
  }); // Events
  // ==================================================================================================

  var handleRedirectClick = function handleRedirectClick() {
    app.gotoInternal(cameFrom);
  }; // Render
  // ==================================================================================================


  var secondsRemainingLabel = secondsRemaining > 1 ? 'secondes' : 'seconde';
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(HelperParaph, {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement(HelperParaphTitle, {
    color: "primary"
  }, "Bienvenue, ", login, " !"), "Vous \xEAtes connect\xE9 avec succ\xE8s sur l'\xE9cosyst\xE8me Nexorium."), /*#__PURE__*/react.createElement(HelperImg, {
    src: "/nexus_static/img/emojis/jelly_smile.png",
    style: {
      marginTop: '20px',
      marginBottom: '0px'
    }
  }), /*#__PURE__*/react.createElement(Button_Button, {
    color: "secondary",
    onClick: function onClick() {
      return handleRedirectClick();
    },
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/react.createElement("span", null, "Redirection dans ", /*#__PURE__*/react.createElement("b", null, secondsRemaining, " ", secondsRemainingLabel))));
}); // ***** RenderAuth *****
// **********************

var TAG_RenderAuth = function TAG_RenderAuth() {};

var RenderAuth = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var auth = app.auth;
  var account = app.account; // From ... store

  var isLoading = app.isLoading;
  var stepKey = auth.step; // ...

  react.useEffect(function () {
    if (stepKey == 'login') {
      var input = document.getElementById('txt-login');

      if (input) {
        input.focus();
      }
    }

    if (stepKey == 'password') {
      var _input = document.getElementById('txt-password');

      if (_input) {
        _input.focus();
      }
    }
  }, [stepKey]); // Render
  // ==================================================================================================

  var stepIcon = 'account_circle';
  var stepLabel = 'Connexion';

  if (AUTH_STEPS_BY_KEY.hasOwnProperty(stepKey)) {
    var stepDef = AUTH_STEPS_BY_KEY[stepKey];
    stepIcon = stepDef.icon;
    stepLabel = stepDef.label;
  }

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: stepIcon
    }),
    title: stepLabel
  }, stepKey == 'login' && /*#__PURE__*/react.createElement(RenderStepLogin, null), stepKey == 'password' && /*#__PURE__*/react.createElement(RenderStepPassword, null), stepKey == 'register' && /*#__PURE__*/react.createElement(RenderStepRegister, null), stepKey == 'lost' && /*#__PURE__*/react.createElement(RenderStepLost, null), stepKey == 'logged' && /*#__PURE__*/react.createElement(RenderStepLogged, null));
}); // ***** AuthPage *****
// ********************

var TAG_AuthPage = function TAG_AuthPage() {};

var AuthPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var initialized = app.initialized; // ...

  var showHelper = !initialized ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page -> que quand l'app est intitialisée (pour useEffect)
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(RenderAuth, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "account_circle",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page small"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ../../nexus/react/contexts/forbidden/Forbidden.css
var Forbidden = __webpack_require__(2429);
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
var NotFound = __webpack_require__(7282);
;// CONCATENATED MODULE: ../../nexus/react/contexts/notfound/NotFound.jsx


 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** NotFoundPage *****
// ************************

var TAG_NotFoundPage = function TAG_NotFoundPage() {};

var NotFoundPage = function NotFoundPage(props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var commonStaticUrl = app.commonStaticUrl; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, /*#__PURE__*/react.createElement(Helper_Helper, {
    icon: /*#__PURE__*/react.createElement("img", {
      className: "nx-helper-icon",
      src: "".concat(commonStaticUrl, "/img/emojis/jelly_crying.png")
    }),
    title: "Erreur 404",
    subtitle: "Il semblerait que la page demand\xE9e n'existe pas.",
    variant: "warning",
    show: true
  }));
};
// EXTERNAL MODULE: ../../nexus/react/popups/playground_modal/PopupPlaygroundModal.css
var PopupPlaygroundModal = __webpack_require__(1045);
;// CONCATENATED MODULE: ../../nexus/react/popups/playground_modal/PopupPlaygroundModal.jsx








 // Functions Components ReactJS
// ======================================================================================================
// ***** PopupPlaygroundModal *****
// ********************************

var TAG_PopupPlaygroundModal = function TAG_PopupPlaygroundModal() {};

var popupPlaygroundModalKey = 'popupPlaygroundModal';
var PopupPlaygroundModal_PopupPlaygroundModal = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var popup = app.popup;
  var playground = app.playground; // From ... store

  var isLoading = app.isLoading;
  var isOpen = popup.isOpen(popupPlaygroundModalKey); // Events
  // ==================================================================================================

  var handleOpen = function handleOpen() {};

  var handleClose = function handleClose() {}; // Render
  // ==================================================================================================
  // Popup --> Title
  // -----------------------------------------------


  var popupTitle = "Modal"; // Popup --> Content
  // -----------------------------------------------

  var popupContent = null;

  if (isOpen) {
    popupContent = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography_Typography, {
      align: "center"
    }, "Question a propos des popups modales ?"));
  } // Popup --> Buttons
  // -----------------------------------------------


  var popupButtons = [];
  popupButtons.push( /*#__PURE__*/react.createElement(Button_Button, {
    id: "btn-close-popup-playground-modal",
    key: "btn-close-popup-playground-modal",
    disabled: isLoading,
    onClick: function onClick() {
      return popup.close(popupPlaygroundModalKey);
    }
  }, "Annuler"));
  popupButtons.push( /*#__PURE__*/react.createElement(Button_Button, {
    id: "btn-load-popup-playground-modal",
    key: "btn-load-popup-playground-modal",
    color: "primary",
    disabled: isLoading,
    onClick: function onClick() {
      return popup.close(popupPlaygroundModalKey);
    }
  }, "Ok")); // -----------------------------------------------

  return /*#__PURE__*/react.createElement(Popup_Popup, {
    id: popupPlaygroundModalKey,
    title: popupTitle,
    variant: "modal",
    buttons: popupButtons,
    callbackOpen: handleOpen,
    callbackClose: handleClose
  }, popupContent);
});
// EXTERNAL MODULE: ../../nexus/react/NxApp.css
var NxApp = __webpack_require__(7052);
;// CONCATENATED MODULE: ../../nexus/react/NxApp.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function NxApp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NxApp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NxApp_createClass(Constructor, protoProps, staticProps) { if (protoProps) NxApp_defineProperties(Constructor.prototype, protoProps); if (staticProps) NxApp_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function NxApp_slicedToArray(arr, i) { return NxApp_arrayWithHoles(arr) || NxApp_iterableToArrayLimit(arr, i) || NxApp_unsupportedIterableToArray(arr, i) || NxApp_nonIterableRest(); }

function NxApp_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NxApp_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  kind: 'web',
  // web, electron
  tasks: mobx_state_tree_module/* types.optional */.V5.optional(mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.string */.V5.string), []),
  staticMode: false,
  debugMode: false,
  editMode: false,
  standaloneMode: false,
  services: mobx_state_tree_module/* types.optional */.V5.optional(ServicesStore, {}),
  // URLs
  authUrl: '/login',
  authContext: 'auth',
  portalUrl: '/portal',
  portalContext: 'portal',
  homeUrl: '/',
  homeContext: 'home',
  searchUrl: '/search',
  searchContext: 'search',
  notificationsUrl: '/notifications',
  notificationsContext: 'notifications',
  blogUrl: '/blog',
  blogContext: 'blog',
  newslettersUrl: '/newsletters',
  newslettersContext: 'newsletters',
  aboutUrl: '/about',
  aboutContext: 'about',
  changelogsUrl: '/changelogs',
  changelogsContext: 'changelogs',
  bugsUrl: '/bugs',
  bugsContext: 'bugs',
  preferencesUrl: '/preferences',
  preferencesContext: 'preferences',
  adminUrl: '/admin',
  adminContext: 'admin',
  playgroundUrl: '/playground',
  playgroundContext: 'playground',
  accountUrl: '/account',
  accountContext: 'account',
  // -
  routes: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  urlParams: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  matchResult: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  history: mobx_state_tree_module/* types.frozen */.V5.frozen(null),
  // Responsive
  isMobile: false,
  isDesktop: true,
  breakPoint650: false,
  // Small Window
  breakPoint414: false,
  // iPhone 6, 7, 8 Plus
  breakPoint375: false,
  // iPhone 6, 7, 8
  breakPoint320: false,
  // iPhone 5, SE
  // About & Authentification
  about: mobx_state_tree_module/* types.optional */.V5.optional(AboutStore, {}),
  auth: mobx_state_tree_module/* types.optional */.V5.optional(AuthStore, {}),
  account: mobx_state_tree_module/* types.optional */.V5.optional(AccountStore, {}),
  // Forms
  errors: mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.frozen */.V5.frozen(null)),
  autocompleteResults: mobx_state_tree_module/* types.array */.V5.array(mobx_state_tree_module/* types.frozen */.V5.frozen(null)),
  // UI
  theme: mobx_state_tree_module/* types.optional */.V5.optional(ThemeStore, {}),
  header: mobx_state_tree_module/* types.optional */.V5.optional(HeaderStore, {}),
  menu: mobx_state_tree_module/* types.optional */.V5.optional(MenuStore, {}),
  portal: mobx_state_tree_module/* types.optional */.V5.optional(PortalStore, {}),
  snackbar: mobx_state_tree_module/* types.optional */.V5.optional(SnackbarStore, {}),
  popup: mobx_state_tree_module/* types.optional */.V5.optional(PopupStore, {}),
  // Common
  // -
  notifications: mobx_state_tree_module/* types.optional */.V5.optional(NotificationsStore, {}),
  blog: mobx_state_tree_module/* types.optional */.V5.optional(BlogStore, {}),
  newsletters: mobx_state_tree_module/* types.optional */.V5.optional(NewslettersStore, {}),
  changelogs: mobx_state_tree_module/* types.optional */.V5.optional(ChangelogsStore, {}),
  bugs: mobx_state_tree_module/* types.optional */.V5.optional(BugsStore, {}),
  playground: mobx_state_tree_module/* types.optional */.V5.optional(PlaygroundStore, {})
}).views(function (self) {
  return {
    get me() {
      return self.services.me;
    },

    get appKey() {
      return self.me.app_key;
    },

    get appId() {
      return self.me.app_id;
    },

    // -
    get folderName() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var isProd = app.isProd;

      if (['gramophone', 'vgm'].includes(self.appKey) && !isProd) {
        return "".concat(self.appKey, "_server");
      }

      return self.appKey;
    },

    // -
    get commonStaticUrl() {
      if (self.kind == 'electron' || self.staticMode) {
        return '../nexus/nexus/static';
      }

      return '/nexus_static';
    },

    get staticUrl() {
      if (self.kind == 'electron' || self.staticMode) {
        return "./".concat(self.appKey, "/static");
      }

      return '/static';
    },

    // -
    generateUUID: function generateUUID() {
      return uuid();
    },

    // Bools
    // -
    get isFullScreen() {
      // Should Header & Drawer be hidden ?
      // ---
      var standaloneMode = self.standaloneMode;
      var context = self.context; // if (standaloneMode || ['auth', 'forbidden'].indexOf(context) > -1) {
      // 	return true;
      // }

      if (standaloneMode) {
        return true;
      }

      return false;
    },

    get isLoading() {
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
    // Bools
    // -
    get isProd() {
      var host = window.location.host;

      if (host == "vincentboni.pagesperso-orange.fr") {
        return true;
      }

      if (host.indexOf("nexorium.com") > -1) {
        return true;
      }

      return false;
    },

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
    },
    getValue: function getValue(path, notFoundValue, source) {
      // Récupère la valeur derrière le chemin passé en paramètres
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var loadTarget = source ? source : store;

      for (var idx_path in path) {
        var target = path[idx_path];

        if (idx_path == path.length - 1) {
          // A-t-on à faire à un node de mobx-state-tree ?
          var value = loadTarget[target];

          if (loadTarget == undefined) {
            try {
              value = loadTarget.get(target);
            } catch (err) {}
          }

          return value;
        } else {
          // A-t-on à faire à un node de mobx-state-tree ?
          var previousLoadTarget = loadTarget;
          loadTarget = loadTarget[target];

          if (loadTarget == undefined) {
            try {
              loadTarget = previousLoadTarget.get(target);
            } catch (err) {}
          }
        }
      }

      return notFoundValue;
    },
    getError: function getError(savePath) {
      // Il y a-t-il une erreur ?
      // ---
      var errors = self.errors;

      var _iterator = NxApp_createForOfIteratorHelper(errors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var error = _step.value;

          if (JSON.stringify(error.path) == JSON.stringify(savePath)) {
            return error.label;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return '';
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
    updatePopups: function updatePopups(popups) {
      // Popups registering
      // ---
      var popup = self.popup;
      popup.register(popupPlaygroundDialogKey);
      popup.register(popupPlaygroundModalKey);

      if (popups) {
        for (var _i = 0, _Object$keys = Object.keys(popups); _i < _Object$keys.length; _i++) {
          var popupKey = _Object$keys[_i];
          popup.register(popupKey);
        }
      }
    },
    update: function update(raw, callback) {
      self.history = []; // User logged

      if (raw && raw.user) {
        self.account.update(raw.user);
        self.auth.setField('step', self.account.isLogged ? 'logged' : 'login');
      } // Edit mode ?


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

      if (raw && raw.smap) {
        self.services.update(raw.smap);
      }

      if (callback) {
        callback(raw);
      }
    },
    init: function init(callback, popups, extras) {
      var staticRaw = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
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
        if (self.kind == 'web' && !self.staticMode) {
          // Fix history
          window.addEventListener("popstate", function (event) {
            document.location.reload();
          });
          var params = new FormData();
          params.append('extras', JSON.stringify(extras));
          var url = '/app/init';
          self.fetchJSON(url, {
            'body': params
          }, false, 'POST').then(function (json) {
            self.update(json, callback);
          })["catch"](function (ex) {
            console.error("Fetch failed for ".concat(url), ex); // self.snackbar.update(true, "Une erreur est survenue.", "error");
          });
        } else {
          self.update(staticRaw, callback);
        }
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

      var _iterator2 = NxApp_createForOfIteratorHelper(navHistory),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _history = _step2.value;

          if (_history.destination != url) {
            navHistoryCleared.push(_history);
          }
        } // setToStorage('navHistory', navHistoryCleared, 'json');

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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
      var appKind = self.kind;

      if (self.staticMode) {
        destination = '/index.html';
      }

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


      if (appKind == 'web' && !self.staticMode) {
        self.setBrowserURL(destination);
      } // Changement de contexte (all the magic of one paged apps appens here!)


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
    navigateTo: function navigateTo(navContext, contextId, contextUrl, contextExtras) {
      // Fonction de navigation des pages communes aux projets
      // ---
      contextExtras = contextExtras ? contextExtras : {}; // Authentification

      var authUrl = self.authUrl;
      var authContext = self.authContext;

      if (navContext == authContext) {
        self.navigate(authUrl, authContext, [{
          "op": "replace",
          "path": "/app/auth/password",
          "value": ''
        }, {
          "op": "replace",
          "path": "/app/auth/user_id",
          "value": ''
        }, {
          "op": "replace",
          "path": "/app/auth/step",
          "value": 'login'
        }]);
      } // -
      // Portal


      var portalUrl = self.portalUrl;
      var portalContext = self.portalContext;

      if (navContext == portalContext) {
        self.navigate(portalUrl, portalContext);
      } // Accueil


      var homeContext = self.homeContext;

      if (navContext == homeContext) {
        self.goHome();
      } // Rechercher


      var searchUrl = self.searchUrl;
      var searchContext = self.searchContext;

      if (navContext == searchContext) {
        self.navigate(searchUrl, searchContext);
      } // -
      // Notifications


      var notificationsUrl = self.notificationsUrl;
      var notificationsContext = self.notificationsContext;

      if (navContext == notificationsContext) {
        self.navigate(notificationsUrl, notificationsContext, [{
          "op": "replace",
          "path": "/app/notifications/loaded",
          "value": false
        }]);
      } // Blog


      var blogUrl = self.blogUrl;
      var blogContext = self.blogContext;

      if (navContext == blogContext) {
        self.navigate(blogUrl, blogContext, [{
          "op": "replace",
          "path": "/app/blog/loaded",
          "value": false
        }]);
      } // Newsletters


      var newslettersUrl = self.newslettersUrl;
      var newslettersContext = self.newslettersContext;

      if (navContext == newslettersContext) {
        self.navigate(newslettersUrl, newslettersContext, [{
          "op": "replace",
          "path": "/app/newsletters/loaded",
          "value": false
        }]);
      } // -
      // A Propos


      var aboutUrl = self.aboutUrl;
      var aboutContext = self.aboutContext;

      if (navContext == aboutContext) {
        self.navigate(aboutUrl, aboutContext, [{
          "op": "replace",
          "path": "/app/about/loaded",
          "value": false
        }]);
      } // Changelogs


      var changelogsUrl = self.changelogsUrl;
      var changelogsContext = self.changelogsContext;

      if (navContext == changelogsContext) {
        self.navigate(changelogsUrl, changelogsContext, [{
          "op": "replace",
          "path": "/app/changelogs/loaded",
          "value": false
        }]);
      } // Bugs


      var bugsUrl = self.bugsUrl;
      var bugsContext = self.bugsContext;

      if (navContext == bugsContext) {
        self.navigate(bugsUrl, bugsContext, [{
          "op": "replace",
          "path": "/app/bugs/loaded",
          "value": false
        }]);
      } // -
      // Préférences


      var preferencesUrl = self.preferencesUrl;
      var preferencesContext = self.preferencesContext;

      if (navContext == preferencesContext) {
        self.navigate(preferencesUrl, preferencesContext);
      } // -
      // Administration


      var adminUrl = self.adminUrl;
      var adminContext = self.adminContext;

      if (navContext == adminContext) {
        self.navigate(adminUrl, adminContext);
      } // Playground


      var playgroundUrl = self.playgroundUrl;
      var playgroundContext = self.playgroundContext;

      if (navContext == playgroundContext) {
        var playgroundJsonPatches = [];

        if (contextExtras.hasOwnProperty('pageKey')) {
          if (contextExtras.pageKey) {
            playgroundUrl = "".concat(playgroundUrl, "/").concat(contextExtras.pageKey);
          }

          playgroundJsonPatches.push({
            "op": "replace",
            "path": "/app/playground/currentPageKey",
            "value": contextExtras.pageKey
          });
        } else {
          playgroundJsonPatches.push({
            "op": "replace",
            "path": "/app/playground/currentPageKey",
            "value": ''
          });
        }

        self.navigate(playgroundUrl, playgroundContext, playgroundJsonPatches);
      } // -
      // Mon compte


      var accountUrl = self.accountUrl;
      var accountContext = self.accountContext;

      if (navContext == accountContext) {
        self.navigate(accountUrl, accountContext);
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
    // -
    _fetchDatas: function _fetchDatas(input, init, quiet, method, params, jsonOnly) {
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
        for (var _i2 = 0, _Object$entries = Object.entries(params); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = NxApp_slicedToArray(_Object$entries[_i2], 2),
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
    },
    fetchJSON: function fetchJSON(input, init, quiet, method, params) {
      return self._fetchDatas(input, init, quiet, method, params, true);
    },
    fetchHTML: function fetchHTML(input, init, quiet, method, params) {
      return self._fetchDatas(input, init, quiet, method, params, false);
    },
    // -
    saveValue: function saveValue(path, value, callbackSaved) {
      // Sauvegarde de la nouvelle valeur à travers un arbre MobxStateTree
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var jsonPath = convertToJSONPath(path);
      (0,mobx_state_tree_module/* applyPatch */.af)(store, [{
        "op": "replace",
        "path": jsonPath,
        "value": value
      }]);

      if (callbackSaved) {
        callbackSaved(path, value);
      }
    },
    saveValues: (0,mobx_state_tree_module/* flow */.ls)( /*#__PURE__*/regeneratorRuntime.mark(function saveValues(pathsAndValues) {
      var _iterator3, _step3, _step3$value, savePath, value;

      return regeneratorRuntime.wrap(function saveValues$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Modifie en chaine plusieurs valeurs à l'aide du flow de mobx-state-tree
              // ---
              _iterator3 = NxApp_createForOfIteratorHelper(pathsAndValues);

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  _step3$value = NxApp_slicedToArray(_step3.value, 2), savePath = _step3$value[0], value = _step3$value[1];
                  self.saveValue(savePath, value);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, saveValues);
    })),
    saveFrozenValue: function saveFrozenValue(pathToFrozen, pathInFrozen, value, callbackSaved) {
      // Sauvegarde de la valeur
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var frozen = self.getValue(pathToFrozen, null);

      if (frozen == null) {
        return;
      }

      var saveTarget = copyObj(frozen);

      for (var idx_path in pathInFrozen) {
        var target = pathInFrozen[idx_path];

        if (idx_path == pathInFrozen.length - 1) {
          saveTarget[target] = value;
        } else {
          try {
            saveTarget[target];
          } catch (err) {
            if (!saveTarget.hasOwnProperty(target)) {
              saveTarget[target] = {};
            }
          }
        }
      }

      self.saveTarget(pathToFrozen, frozen);

      if (callbackSaved) {
        callbackSaved(path, value);
      }
    },
    // -
    addError: function addError(errorPath, errorMsg) {
      // Ajoute l'erreur passée en paramètres
      // ---
      if (!self.errors) {
        self.errors = [];
      }

      var errorDict = {
        'path': errorPath,
        'label': errorMsg
      };
      self.errors.push(errorDict);
      return errorDict;
    },
    clearError: function clearError(savePath) {
      // Nettoyage de l'erreur
      // ---
      var errors = self.errors;
      var clearedErrors = [];

      var _iterator4 = NxApp_createForOfIteratorHelper(errors),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var error = _step4.value;

          if (JSON.stringify(error.path) != JSON.stringify(savePath)) {
            clearedErrors.push(error);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      self.setField('errors', clearedErrors);
    },
    clearErrors: function clearErrors() {
      self.errors = [];
    },
    // -
    setDocState: function setDocState(docId, newState, callback, ajaxBase) {
      // Appel AJAX de la fonction de mise à jour du statut du document passé en paramètres
      // ---
      var app = self;
      var snackbar = self.snackbar;
      ajaxBase = ajaxBase ? ajaxBase : '';
      var params = new FormData();
      params.append('doc_id', docId);
      params.append('new_state', newState);
      var url = "".concat(ajaxBase, "/app/set_doc_state");
      app.fetchJSON(url, {
        'body': params
      }, false, 'POST').then(function (json) {
        if (callback) {
          callback();
        }
      })["catch"](function (ex) {
        console.error("Fetch failed for ".concat(url), ex);
        snackbar.update(true, "Une erreur est survenue.", "error");
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
  routeNodes.add(new route_node_esm/* RouteNode */.k('auth', '/login'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('auth:step', '/login/:step'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('forbidden', '/forbidden'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('portal', '/portal'));

  if (!routes.hasOwnProperty('home')) {
    routeNodes.add(new route_node_esm/* RouteNode */.k('home', '/'));
  }

  routeNodes.add(new route_node_esm/* RouteNode */.k('search', '/search'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('notifications', '/notifications'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('blog', '/blog'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('newsletters', '/newsletters'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('about', '/about'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('changelogs', '/changelogs'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('bugs', '/bugs'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('preferences', '/preferences'));

  if (!routes.hasOwnProperty('admin')) {
    routeNodes.add(new route_node_esm/* RouteNode */.k('admin', '/admin'));
  }

  routeNodes.add(new route_node_esm/* RouteNode */.k('playground', '/playground'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('playground:playgroundKey', '/playground/:playgroundKey'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('account', '/account'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('infos', '/infos'));

  for (var _i3 = 0, _Object$entries2 = Object.entries(routes); _i3 < _Object$entries2.length; _i3++) {
    var _Object$entries2$_i = NxApp_slicedToArray(_Object$entries2[_i3], 2),
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

  if (!snapshot['app'].hasOwnProperty('context')) {
    snapshot['app']['context'] = matchResult.context;
  }

  snapshot['app']['standaloneMode'] = standaloneMode;
  snapshot['app']['isMobile'] = mobileInfos.isMobile;
  snapshot['app']['isDesktop'] = mobileInfos.isDesktop;
  snapshot['app']['breakPoint650'] = mobileInfos.breakPoint650;
  snapshot['app']['breakPoint414'] = mobileInfos.breakPoint414;
  snapshot['app']['breakPoint375'] = mobileInfos.breakPoint375;
  snapshot['app']['breakPoint320'] = mobileInfos.breakPoint320;
  snapshot['app']['routes'] = routes;
  snapshot['app']['urlParams'] = urlParams;
  snapshot['app']['matchResult'] = matchResult; // Theme
  // -

  if (!snapshot['app'].hasOwnProperty('theme')) {
    snapshot['app']['theme'] = {};
  } // -


  var themeModeAuto = getFromStorage('nxThemeModeAuto', true, 'bool');
  var themeModeOS = 'light';

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeModeOS = 'dark';
  }

  var themeModeDefault = 'light';

  if (snapshot['app']['theme'].hasOwnProperty('mode')) {
    themeModeDefault = snapshot['app']['theme']['mode'];
  }

  var themeMode = getFromStorage('nxThemeMode', themeModeDefault);

  if (themeModeAuto) {
    themeMode = themeModeOS;
  } // -


  var defaultPrimaryMainLight = '#607d8b';

  if (snapshot.app.theme.palette_light && snapshot.app.theme.palette_light.primary && snapshot.app.theme.palette_light.primary.main) {
    defaultPrimaryMainLight = snapshot.app.theme.palette_light.primary.main;
  }

  var defaultPrimaryMainDark = '#607d8b';

  if (snapshot.app.theme.palette_dark && snapshot.app.theme.palette_dark.primary && snapshot.app.theme.palette_dark.primary.main) {
    defaultPrimaryMainDark = snapshot.app.theme.palette_dark.primary.main;
  }

  var defaultPrimarySecondaryLight = '#9e9e9e';

  if (snapshot.app.theme.palette_light && snapshot.app.theme.palette_light.secondary && snapshot.app.theme.palette_light.secondary.main) {
    defaultPrimarySecondaryLight = snapshot.app.theme.palette_light.secondary.main;
  }

  var defaultPrimarySecondaryDark = '#9e9e9e';

  if (snapshot.app.theme.palette_dark && snapshot.app.theme.palette_dark.secondary && snapshot.app.theme.palette_dark.secondary.main) {
    defaultPrimarySecondaryDark = snapshot.app.theme.palette_dark.secondary.main;
  }

  snapshot['app']['theme'] = {
    'mode': themeMode,
    'modeOS': themeModeOS,
    'modeAuto': themeModeAuto,
    'variant': 'default',
    // à voir en fonction de l'époque de l'année
    'palette_light': {
      'default': {
        'main': '#000000',
        'contrastText': '#FFF'
      },
      'primary': {
        'main': defaultPrimaryMainLight,
        'contrastText': '#FFF'
      },
      'secondary': {
        'main': defaultPrimarySecondaryLight,
        'contrastText': '#FFF'
      }
    },
    'palette_dark': {
      'default': {
        'main': '#FFFFFF',
        'contrastText': '#000'
      },
      'primary': {
        'main': defaultPrimaryMainDark,
        'contrastText': '#000'
      },
      'secondary': {
        'main': defaultPrimarySecondaryDark,
        'contrastText': '#000'
      }
    }
  }; // Menu
  // -

  if (!snapshot['app'].hasOwnProperty('menu')) {
    snapshot['app']['menu'] = {
      expanded: true,
      pinned: true
    };
  }

  snapshot['app']['menu']['expanded'] = getFromStorage('menuExpanded', snapshot.app.menu.expanded, 'bool');
  snapshot['app']['menu']['pinned'] = getFromStorage('menuPinned', snapshot.app.menu.pinned, 'bool'); // Portal
  // -

  if (!snapshot['app'].hasOwnProperty('portal')) {
    snapshot['app']['portal'] = {
      open: false,
      expanded: true,
      pinned: false
    };
  }

  snapshot['app']['portal']['expanded'] = getFromStorage('portalExpanded', snapshot.app.portal.expanded, 'bool');
  snapshot['app']['portal']['pinned'] = getFromStorage('portalPinned', snapshot.app.portal.pinned, 'bool'); // Playground
  // -

  if (!snapshot['app'].hasOwnProperty('playground')) {
    snapshot['app']['playground'] = {};
  } // URL params
  // -


  if (matchResult && matchResult.hasOwnProperty('params')) {
    for (var _i4 = 0, _Object$entries3 = Object.entries(matchResult.params); _i4 < _Object$entries3.length; _i4++) {
      var _Object$entries3$_i = NxApp_slicedToArray(_Object$entries3[_i4], 2),
          urlParamKey = _Object$entries3$_i[0],
          urlParamValue = _Object$entries3$_i[1];

      snapshot[urlParamKey] = urlParamValue;

      if (urlParamKey == 'playgroundKey') {
        snapshot['app']['playground']['currentPageKey'] = urlParamValue;
      }
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

    NxApp_classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);

    _this.handleRefresh = function () {
      document.location.reload();
    };

    _this.state = {
      hasError: false
    };
    return _this;
  }

  NxApp_createClass(ErrorBoundary, [{
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
      var _this2 = this;

      if (this.state.hasError) {
        return /*#__PURE__*/react.createElement("div", {
          className: "nx-page"
        }, /*#__PURE__*/react.createElement(Helper_Helper, {
          icon: /*#__PURE__*/react.createElement("img", {
            className: "nx-helper-icon",
            src: "".concat(window.store.app.commonStaticUrl, "/img/emojis/jelly_eyes_closed.png")
          }) // title="!"
          ,
          subtitle: "Une erreur est survenue.",
          severity: "error",
          show: true // inFlux={true}
          // style={{
          // 	marginTop: "calc(50% - 125px)",
          // }}

        }, /*#__PURE__*/react.createElement(Button_Button, {
          key: "btn-nx-app-refresh",
          variant: "outlined",
          color: "primary",
          fullWidth: true,
          onClick: function onClick() {
            return _this2.handleRefresh();
          },
          style: {
            marginTop: '20px'
          }
        }, "Rafraichir")));
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
  var theme = app.theme;
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

  var appKey = app.appKey;
  var context = app.context;
  var isLoading = app.isLoading;
  var isFullScreen = app.isFullScreen;
  var isMobile = app.isMobile;
  var isDesktop = app.isDesktop;
  var breakPoint650 = app.breakPoint650;
  var breakPoint414 = app.breakPoint414;
  var breakPoint375 = app.breakPoint375;
  var breakPoint320 = app.breakPoint320;
  var menuPinned = menu.pinned;
  var appKind = app.kind;
  var themeMode = theme.mode; // ...

  react.useEffect(function () {
    var body = document.body;
    body.classList.remove("ui-light");
    body.classList.remove("ui-dark");
    body.classList.add("ui-".concat(themeMode));
  }, [themeMode]); // ...

  contexts['auth'] = AuthPage;
  contexts['forbidden'] = ForbiddenPage;
  contexts['portal'] = PortalPage;
  contexts['about'] = AboutPage;
  contexts['preferences'] = PreferencesPage;
  contexts['notifications'] = NotificationsPage;
  contexts['blog'] = BlogPage;
  contexts['newsletters'] = NewslettersPage;

  if (!contexts.hasOwnProperty('admin')) {
    contexts['admin'] = AdminPage;
  }

  contexts['playground'] = PlaygroundPage;
  contexts['account'] = AccountPage; // contexts['infos'] = InfoPage;

  contexts['changelogs'] = ChangelogsPage;
  contexts['bugs'] = BugsPage; // Render
  // ==================================================================================================

  var mobileClass = isMobile ? 'mobile' : '';
  var desktopClass = isDesktop ? 'desktop' : '';
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


  var popupsRendered = [/*#__PURE__*/react.createElement(PopupPlaygroundDialog_PopupPlaygroundDialog, {
    key: popupPlaygroundDialogKey
  }), /*#__PURE__*/react.createElement(PopupPlaygroundModal_PopupPlaygroundModal, {
    key: popupPlaygroundModalKey
  })];

  for (var _i5 = 0, _Object$entries4 = Object.entries(popups); _i5 < _Object$entries4.length; _i5++) {
    var _Object$entries4$_i = NxApp_slicedToArray(_Object$entries4[_i5], 2),
        popupKey = _Object$entries4$_i[0],
        PopupComponent = _Object$entries4$_i[1];

    popupsRendered.push( /*#__PURE__*/react.createElement(PopupComponent, {
      key: popupKey
    }));
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(ErrorBoundary, null, /*#__PURE__*/react.createElement("div", {
    id: "nx-base",
    className: (0,clsx_m/* default */.Z)(appKey, context, mobileClass, desktopClass, appKind, {
      'break-650': breakPoint650
    }, {
      'break-414': breakPoint414
    }, {
      'break-375': breakPoint375
    }, {
      'break-320': breakPoint320
    }, "ui-".concat(themeMode), {
      'loading': isLoading
    }, window.process ? process.platform : '')
  }, Header && !isFullScreen && /*#__PURE__*/react.createElement(Header, null), /*#__PURE__*/react.createElement("div", {
    id: "nx-content"
  }, Menu && !isFullScreen && /*#__PURE__*/react.createElement(Menu, null), /*#__PURE__*/react.createElement("div", {
    id: "nx-main"
  }, content, /*#__PURE__*/react.createElement(Snackbar_Snackbar, null)), !isFullScreen && /*#__PURE__*/react.createElement(Portal_Portal, null), popupsRendered)));
});
;// CONCATENATED MODULE: ../../nexus/react/models/services.jsx
function services_slicedToArray(arr, i) { return services_arrayWithHoles(arr) || services_iterableToArrayLimit(arr, i) || services_unsupportedIterableToArray(arr, i) || services_nonIterableRest(); }

function services_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function services_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return services_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return services_arrayLikeToArray(o, minLen); }

function services_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function services_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function services_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















 // Datas
// ======================================================================================================
// VBO : Recopie temporaire de nexus/services.py (pour le mode static)

var services_STATIC_SMAP = {
  'nexorium': {
    app_key: 'nexorium',
    app_variant: 'default',
    app_id: 'nexorium',
    name: "Nexorium",
    description: "Portail d'accueil",
    kind: "webserver",
    port: 7301,
    database: null,
    version: '0.0.2',
    changeset: '...',
    changeset_instance: '...',
    internal: '/index.html',
    external: '/',
    view_role: "M_VIEW",
    edit_role: "M_EDIT",
    admin_role: "M_ADMIN"
  },
  'nexora': {
    app_key: 'nexora',
    app_variant: 'default',
    app_id: 'nexora',
    name: "Nexora",
    description: "Histoire de science-fiction",
    kind: "webserver",
    port: 7302,
    database: null,
    version: '0.0.1',
    changeset: '...',
    changeset_instance: '...',
    internal: '/index.html',
    external: '/',
    view_role: "N_VIEW",
    edit_role: "N_EDIT",
    admin_role: "N_ADMIN"
  },
  // Applications
  // -
  'gramophone': {
    app_key: 'gramophone',
    app_variant: 'default',
    app_id: 'gramophone',
    name: "Gramophone",
    description: "Bibliothèque musicale",
    kind: "webserver",
    port: 7304,
    database: null,
    version: '0.0.1',
    changeset: '...',
    changeset_instance: '...',
    internal: '/index.html',
    external: '/',
    view_role: "G_VIEW",
    edit_role: "G_EDIT",
    admin_role: "G_ADMIN"
  },
  'vgm': {
    app_key: 'vgm',
    app_variant: 'default',
    app_id: 'vgm',
    name: "VGM",
    description: "Bibliothèque vidéoludique",
    kind: "webserver",
    port: 7303,
    database: null,
    version: '0.0.1',
    changeset: '...',
    changeset_instance: '...',
    internal: '/index.html',
    external: '/',
    view_role: "G_VIEW",
    edit_role: "G_EDIT",
    admin_role: "G_ADMIN"
  },
  // Support
  // -
  'nexus': {
    app_key: 'nexus',
    app_variant: 'default',
    app_id: 'nexus',
    name: "Nexus",
    description: "Librairie de l'écosystème Nexorium",
    kind: "library",
    port: null,
    database: null,
    version: '0.0.2',
    changeset: '...',
    changeset_instance: '...',
    internal: null,
    external: null,
    view_role: null,
    edit_role: null,
    admin_role: null
  }
}; // Models
// -------------------------------------------------------------------------------------------------------------
// ***** ServiceInfoStore *****
// ****************************

var services_TAG_ServiceInfoStore = function TAG_ServiceInfoStore() {};

var services_ServiceInfoStore = mobx_state_tree_module/* types.model */.V5.model({
  app_key: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  app_variant: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  app_id: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  name: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  description: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  kind: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  port: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.integer */.V5.integer),
  database: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  version: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  changeset: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  changeset_instance: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  internal: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  external: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  view_role: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  edit_role: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string),
  admin_role: mobx_state_tree_module/* types.maybeNull */.V5.maybeNull(mobx_state_tree_module/* types.string */.V5.string)
}).views(function (self) {
  return {
    get roles() {
      return [self.view_role, self.edit_role, self.admin_role];
    },

    get shortcutIconUrl() {
      return self.getIconUrl(48);
    },

    get iconUrl() {
      return self.getIconUrl(192);
    },

    // -
    get folderName() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var isProd = app.isProd;

      if (['gramophone', 'vgm'].includes(self.app_key) && !isProd) {
        return "".concat(self.app_key, "_server");
      }

      return self.app_key;
    },

    // -
    get internalPrefix() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var appKey = app.appKey;
      var isProd = app.isProd;
      var prefix = "./".concat(self.app_key);

      if (appKey != self.app_key) {
        prefix = "../".concat(self.folderName);

        if (!isProd || self.app_key != 'nexorium') {
          prefix = "".concat(prefix, "/").concat(self.app_key);
        }
      }

      return prefix;
    },

    get externalPrefix() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var folderName = app.folderName;
      var isProd = app.isProd;
      var prefix = "/";

      if (isProd) {
        prefix = "https://vincentboni.pagesperso-orange.fr/";

        if (self.app_key != 'nexorium') {
          prefix = "".concat(prefix, "/").concat(self.app_key, "/");
        }
      } else {
        prefix = window.location.pathname;
        prefix = prefix.replace('index.html', '');
        prefix = prefix.replace(folderName, self.folderName);
      }

      return prefix;
    },

    // -
    get githubLink() {
      return "https://github.com/vincent114/".concat(self.folderName);
    },

    get githubLinkClient() {
      if (["gramophone", "vgm"].includes(self.app_key)) {
        return "https://github.com/vincent114/".concat(self.app_key, "_client");
      }

      return "";
    },

    // Getters
    // -
    getIconUrl: function getIconUrl() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '192';
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var staticMode = app.staticMode;
      var external = self.external;
      var dimention = "".concat(size, "x").concat(size);

      if (staticMode) {
        return "".concat(self.internalPrefix, "/static/favicons/android-icon-").concat(dimention, ".png");
      }

      return "".concat(external, "/static/favicons/android-icon-").concat(dimention, ".png");
    },
    getExternalUrl: function getExternalUrl() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var staticMode = app.staticMode;

      if (staticMode && self.kind == 'webserver') {
        return "".concat(self.externalPrefix, "index.html");
      }

      return self.external;
    }
  };
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
      self.version = raw.version;
      self.changeset = raw.changeset;
      self.changeset_instance = raw.changeset_instance;
      self.internal = raw.internal;
      self.external = raw.external;
      self.view_role = raw.view_role;
      self.edit_role = raw.edit_role;
      self.admin_role = raw.admin_role;
    }
  };
}); // ***** ServicesStore *****
// *************************

var services_TAG_ServicesStore = function TAG_ServicesStore() {};

var services_ServicesStore = mobx_state_tree_module/* types.model */.V5.model({
  smap: mobx_state_tree_module/* types.map */.V5.map(services_ServiceInfoStore)
}).views(function (self) {
  return {
    get me() {
      var me = self.smap.get('me');

      if (!me) {
        me = services_ServiceInfoStore.create({});
      }

      return me;
    },

    // Getters
    // -
    getServiceInfo: function getServiceInfo(appId) {
      return self.smap.get(appId);
    },
    getAjaxBase: function getAjaxBase(appId) {
      var me = self.getServiceInfo('me'); // AJAX vers un autre serveur ?

      if (me && me.app_id != appId) {
        var serviceInfo = self.getServiceInfo(appId);

        if (serviceInfo) {
          return serviceInfo.external;
        }
      }

      return '';
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
        var _Object$entries$_i = services_slicedToArray(_Object$entries[_i], 2),
            appId = _Object$entries$_i[0],
            serviceInfoRaw = _Object$entries$_i[1];

        var serviceInfo = services_ServiceInfoStore.create({});
        serviceInfo.update(serviceInfoRaw);
        self.smap.set(appId, serviceInfo);
      }
    }
  };
});
// EXTERNAL MODULE: ../../nexus/react/contexts/search/Search.css
var Search = __webpack_require__(4048);
;// CONCATENATED MODULE: ../../nexus/react/contexts/search/Search.jsx










 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** SearchHeaderMiddle *****
// ******************************

var TAG_SearchHeaderMiddle = function TAG_SearchHeaderMiddle() {};

var SearchHeaderMiddle = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var popup = app.popup; // From ... store

  var context = app.context; // From ... props

  var id = props.id ? props.id : "txt-main-search";
  var placeholder = props.placeholder ? props.placeholder : 'Rechercher';
  var savePath = props.savePath ? props.savePath : ['search', 'query'];
  var onSearch = props.onSearch;
  var onClear = props.onClear;
  var onFocus = props.onFocus;
  var onBlur = props.onBlur;
  var disabled = props.disabled == true ? true : false;
  var disableAutoFocus = props.disableAutoFocus == false ? false : context != 'search';
  var navigateOnFocus = props.navigateOnFocus == false ? false : true;
  var variant = props.variant ? props.variant : 'outlined';
  var color = props.color ? props.color : 'white'; // white, black

  var className = props.className ? props.className : 'nx-main-search-field';
  var style = props.style ? props.style : {}; // ...

  var timeoutId = "timeout-".concat(id);
  var query = app.getValue(savePath, ''); // -

  var callbackKey = react.useCallback(function (event) {
    if (event.keyCode === 27) {
      if (onClear) {
        onClear();
      }
    } else {
      document.getElementById(id).focus();
    }
  }, []);
  react.useEffect(function () {
    if (!disableAutoFocus) {
      window[timeoutId] = null;

      if (!popup.isOneOpen) {
        document.removeEventListener("keydown", callbackKey, false);
        document.addEventListener("keydown", callbackKey, false);
      }

      return function () {
        document.removeEventListener("keydown", callbackKey, false);
      };
    }
  }, [popup.isOneOpen, context]); // Events
  // ==================================================================================================

  var handleFocus = function handleFocus(evt) {
    if (navigateOnFocus && context != 'search' && !disabled) {
      app.navigateTo('search');
    }

    if (onFocus) {
      onFocus();
    }
  };

  var handleBlur = function handleBlur() {
    if (onBlur) {
      onBlur();
    }
  };

  var handleKeyDown = function handleKeyDown(evt) {
    if (evt.keyCode === 27) {
      onClear();
    }
  };

  var handleChange = function handleChange(savePath, value, evt) {
    clearTimeout(window[timeoutId]);

    if (value) {
      window[timeoutId] = setTimeout(function () {
        onSearch(savePath, value);
      }, 1000);
    } else {
      callbackClear();
    }
  };

  var handleClear = function handleClear() {
    app.saveValue(savePath, '', callbackClear);
    setTimeout(function () {
      document.getElementById(id).focus();
    }, 100);
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(Field_Field, {
    id: id,
    placeholder: placeholder,
    component: "input",
    savePath: savePath,
    callbackChange: handleChange,
    callbackBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onClick: handleFocus,
    endAdornment: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "search",
      color: "white"
    }),
    color: "white",
    variant: variant,
    className: (0,clsx_m/* default */.Z)(className, color),
    style: style
  });
}); // ***** SearchMenuItem *****
// **************************

var TAG_SearchMenuItem = function TAG_SearchMenuItem() {};

var SearchMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var searchContext = app.searchContext; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigateTo(searchContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "search",
    label: "Rechercher",
    activeContexts: [searchContext],
    callbackClick: handleMenuItemClick
  });
});
// EXTERNAL MODULE: ../../nexus/react/ui/paper/Paper.css
var Paper = __webpack_require__(9393);
;// CONCATENATED MODULE: ../../nexus/react/ui/paper/Paper.jsx




 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Paper *****
// *****************

var TAG_Paper = function TAG_Paper() {};

var Paper_Paper = function Paper(props) {
  // From ... props
  var hoverable = props.hoverable == true ? true : false;
  var children = props.children;
  var _onClick = props.onClick;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-paper", {
      "hoverable": hoverable
    }, className),
    style: style,
    onClick: function onClick() {
      if (_onClick) {
        _onClick();
      }
    }
  }, children);
};
// EXTERNAL MODULE: ./components/cards/ProjectCard.css
var ProjectCard = __webpack_require__(7291);
;// CONCATENATED MODULE: ./components/cards/ProjectCard.jsx











 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** ProjectCard *****
// ***********************

var TAG_ProjectCard = function TAG_ProjectCard() {};

var ProjectCard_ProjectCard = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... props

  var serviceInfo = props.serviceInfo;
  var projectMetas = props.projectMetas; // ...

  var appId = serviceInfo.app_id;
  var name = serviceInfo.name;
  var description = serviceInfo.description;
  var externalUrl = serviceInfo.getExternalUrl(); // Events
  // ==================================================================================================

  var handleClick = function handleClick() {
    // Sur click de la carte
    // ---
    if (externalUrl) {
      app.gotoExternal(externalUrl);
    }
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(Paper_Paper, {
    hoverable: externalUrl ? true : false,
    className: (0,clsx_m/* default */.Z)("nm-projet-card", {
      "clickable": externalUrl
    }),
    onClick: function onClick() {
      return handleClick();
    }
  }, /*#__PURE__*/react.createElement(Row_Row, {
    align: "center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nm-project-thumbnail"
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "extension"
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography_Typography, {
    variant: "title"
  }, name), /*#__PURE__*/react.createElement(Typography_Typography, {
    variant: "description"
  }, description)), externalUrl && /*#__PURE__*/react.createElement("div", {
    className: "nm-project-launch"
  }, /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "launch",
    color: "info"
  }))));
});
// EXTERNAL MODULE: ./contexts/projects/Projects.css
var Projects = __webpack_require__(8525);
;// CONCATENATED MODULE: ./contexts/projects/Projects.jsx













function Projects_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Projects_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Projects_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Projects_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Projects_arrayLikeToArray(o, minLen); }

function Projects_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











 // Datas
// -------------------------------------------------------------------------------------------------------------

var PROJECTS_METAS = {
  // Support
  // -
  'nexus': {
    'completion': 50
  },
  'cerberus': {
    'completion': 25
  },
  // Vitrine
  // -
  'nexorium': {
    'completion': 15
  },
  'nexora': {
    'completion': 15
  },
  // Applications
  // -
  'gramophone_server': {
    'completion': 10
  },
  'vgm': {
    'completion': 10
  }
}; // Models
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
}); // ***** ProjectsHeaderRight *****
// *******************************

var TAG_ProjectsHeaderRight = function TAG_ProjectsHeaderRight() {};

var ProjectsHeaderRight = (0,es/* observer */.Pi)(function (props) {
  // const store = React.useContext(window.storeContext);
  // const app = store.app;
  // ...
  // Render
  // ==================================================================================================
  return null;
}); // ***** ProjectsMenuItem *****
// ****************************

var TAG_ProjectsMenuItem = function TAG_ProjectsMenuItem() {};

var ProjectsMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var projectsContext = 'projects'; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(projectsContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "work_outline",
    label: "Mes projets",
    activeContexts: [projectsContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** RenderProjects *****
// **************************

var TAG_RenderProjects = function TAG_RenderProjects() {};

var RenderProjects = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var services = app.services; // From ... store
  // Renderers
  // ==================================================================================================

  var renderProjectsCards = function renderProjectsCards(groupTitle, appKeys) {
    // Render :: Project Card
    // ---
    var projectCards = [];

    var _iterator = Projects_createForOfIteratorHelper(appKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var appKey = _step.value;
        var serviceInfo = services.getServiceInfo(appKey);

        if (!serviceInfo) {
          continue;
        } // Project Metas


        var projectMetas = null;

        if (PROJECTS_METAS.hasOwnProperty(appKey)) {
          projectMetas = PROJECTS_METAS[appKey];
        }

        projectCards.push( /*#__PURE__*/react.createElement(ProjectCard_ProjectCard, {
          key: serviceInfo.app_id,
          serviceInfo: serviceInfo,
          projectMetas: projectMetas
        }));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Heading_Heading, {
      style: {
        marginBottom: '10px'
      }
    }, groupTitle), /*#__PURE__*/react.createElement("div", {
      className: "nm-projects-cards"
    }, projectCards));
  };

  return /*#__PURE__*/react.createElement("div", null, renderProjectsCards("Support", ['nexus', 'cerberus']), renderProjectsCards("Sites vitrine", ['nexorium', 'nexora']), renderProjectsCards("Applications", ['gramophone', 'vgm']));
}); // ***** ProjectsPage *****
// ************************

var TAG_ProjectsPage = function TAG_ProjectsPage() {};

var ProjectsPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var initialized = app.initialized; // ...

  var showHelper = !initialized ? true : false; // Renderers
  // ==================================================================================================

  var renderPage = function renderPage() {
    // Render :: Page -> que quand l'app est intitialisée (pour useEffect)
    // ---
    var pageContent = null;

    if (initialized) {
      pageContent = /*#__PURE__*/react.createElement(RenderProjects, null);
    }

    return pageContent;
  };

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "work_outline",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
});
// EXTERNAL MODULE: ./contexts/cv/Cv.css
var Cv = __webpack_require__(8685);
;// CONCATENATED MODULE: ./contexts/cv/Cv.jsx












 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** CvStore *****
// *******************

var TAG_CvStore = function TAG_CvStore() {};

var CvStore = mobx_state_tree_module/* types.model */.V5.model({
  loaded: false
}).views(function (self) {
  return {
    get pdfUrl() {
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var services = app.services;
      var me = services.me;
      var staticMode = app.staticMode;
      var external = self.external;

      if (staticMode) {
        return "".concat(me.app_key, "/static/files/vincent_boni_cv_2022.pdf");
      }

      return "".concat(external, "/static/files/vincent_boni_cv_2022.pdf");
    }

  };
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
}); // ***** CvHeaderRight *****
// *************************

var TAG_CvHeaderRight = function TAG_CvHeaderRight() {};

var CvHeaderRight = (0,es/* observer */.Pi)(function (props) {
  // const store = React.useContext(window.storeContext);
  // const app = store.app;
  // ...
  // Render
  // ==================================================================================================
  return null;
}); // ***** CvMenuItem *****
// **********************

var TAG_CvMenuItem = function TAG_CvMenuItem() {};

var CvMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var cvContext = 'cv'; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(cvContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "school",
    label: "Mon CV",
    activeContexts: [cvContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** RenderSectionCvDownload *****
// ***********************************

var TAG_RenderSectionCvDownload = function TAG_RenderSectionCvDownload() {};

var RenderSectionCvDownload = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var cv = store.cv; // From ... store

  var isLoading = app.isLoading;
  var pdfUrl = cv.pdfUrl; // From ... props

  var style = props.style ? props.style : {}; // ...
  // Render
  // ==================================================================================================
  // Section -> Title
  // -------------------------------------------------

  var sectionTitle = "Télécharger"; // Section -> Icon
  // -------------------------------------------------

  var sectionIcon = /*#__PURE__*/react.createElement(Icon_Icon, {
    name: "file_download"
  }); // Section -> Content
  // -------------------------------------------------

  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button_Button, {
    variant: "outlined",
    color: "primary",
    href: pdfUrl,
    target: "_blank",
    startAdornment: "picture_as_pdf"
  }, "Curriculum vitae - Vincent Boni")); // -------------------------------------------------

  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle,
    style: style
  }, sectionContent);
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
    var helperTitle = "Bonjour !";
    var helperSubtitle = /*#__PURE__*/react.createElement("div", null, "Merci d'\xEAtre venu jusqu'ici. L'informatique est ma passion depuis que je suis tout petit, probablement depuis que mon p\xE8re a achet\xE9 un Atari STE 1040 quand j'avais 5 ans \uD83D\uDC76.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Fort heureusement, mon parcours m'a ammen\xE9 \xE0 travailler dans le d\xE9veloppement. De nos jours, les technologies du WEB offrent aux d\xE9veloppeurs un pouvoir de cr\xE9ation tr\xE8s puissant avec lequel nous pouvons forger des outils fantastiques \uD83D\uDEE0\uD83E\uDD29.");
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "school",
      title: helperTitle,
      subtitle: helperSubtitle,
      show: true,
      inFlux: true
    }, /*#__PURE__*/react.createElement(RenderSectionCvDownload, {
      style: {
        marginTop: '30px'
      }
    }));
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./contexts/docs/Docs.css
var Docs = __webpack_require__(5217);
;// CONCATENATED MODULE: ./contexts/docs/Docs.jsx







 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** DocsStore *****
// *********************

var TAG_DocsStore = function TAG_DocsStore() {};

var DocsStore = mobx_state_tree_module/* types.model */.V5.model({
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
// ***** DocsHeaderLeft *****
// **************************

var TAG_DocsHeaderLeft = function TAG_DocsHeaderLeft() {};

var DocsHeaderLeft = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // ...
  // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(HeaderTitle, {
    title: "Documentation",
    titleStyle: {
      marginLeft: '10px'
    }
  });
}); // ***** DocsHeaderRight *****
// ***************************

var TAG_DocsHeaderRight = function TAG_DocsHeaderRight() {};

var DocsHeaderRight = (0,es/* observer */.Pi)(function (props) {
  // const store = React.useContext(window.storeContext);
  // const app = store.app;
  // ...
  // Render
  // ==================================================================================================
  return null;
}); // ***** DocsMenuItem *****
// ************************

var TAG_DocsMenuItem = function TAG_DocsMenuItem() {};

var DocsMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var menu = app.menu; // ...

  var docsContext = 'docs'; // Events
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(docsContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(MenuItem, {
    iconName: "menu_book",
    label: "Documentation",
    activeContexts: [docsContext],
    callbackClick: handleMenuItemClick
  });
}); // ***** DocsPage *****
// ********************

var TAG_DocsPage = function TAG_DocsPage() {};

var DocsPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "menu_book",
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

  var breakPoint650 = app.breakPoint650;
  var context = app.context;
  var staticMode = app.staticMode;
  var homeContext = app.homeContext;
  var authContext = app.authContext; // Render
  // ==================================================================================================

  var headerLeft = null;
  var headerMiddle = null;
  var headerRight = null; // -------------------------------------------------

  var renderHeaderHome = function renderHeaderHome() {
    if ([homeContext, authContext].indexOf(context) == -1) {
      return;
    }

    headerMiddle = /*#__PURE__*/react.createElement(HomeHeaderMiddle, null);
  };

  var renderHeaderSearch = function renderHeaderSearch() {
    if (staticMode || breakPoint650 && context != 'search') {
      return;
    }

    headerMiddle = /*#__PURE__*/react.createElement(SearchHeaderMiddle, null);
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


  var renderHeaderDocs = function renderHeaderDocs() {
    if (context != 'docs') {
      return;
    }

    headerLeft = /*#__PURE__*/react.createElement(DocsHeaderLeft, null);
    headerRight = /*#__PURE__*/react.createElement(DocsHeaderRight, null);
  }; // -------------------------------------------------


  renderHeaderHome();
  renderHeaderSearch();
  renderHeaderProjects();
  renderHeaderCv();
  renderHeaderDocs();
  return /*#__PURE__*/react.createElement(Header_Header, {
    left: headerLeft,
    right: headerRight,
    style: {
      backgroundColor: '#43a047'
    }
  }, headerMiddle);
});
// EXTERNAL MODULE: ../../nexus/react/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(4391);
;// CONCATENATED MODULE: ./ui/ContextualMenu.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






















 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** NexoriumMenuItems *****
// *****************************

var TAG_NexoriumMenuItems = function TAG_NexoriumMenuItems() {};

var NexoriumMenuItems = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... store

  var staticMode = app.staticMode;
  var breakPoint650 = app.breakPoint650; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(PortalMenuItem, null), /*#__PURE__*/react.createElement(HomeMenuItem, null), !staticMode && /*#__PURE__*/react.createElement(SearchMenuItem, null), breakPoint650 && /*#__PURE__*/react.createElement(MenuDivider, null), !staticMode && /*#__PURE__*/react.createElement(BlogMenuItem, null), !staticMode && /*#__PURE__*/react.createElement(NewslettersMenuItem, null), !staticMode && /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(ProjectsMenuItem, null), /*#__PURE__*/react.createElement(CvMenuItem, null), /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(PlaygroundMenuItem, null), !staticMode && /*#__PURE__*/react.createElement(DocsMenuItem, null), /*#__PURE__*/react.createElement(MenuDivider, null), !staticMode && /*#__PURE__*/react.createElement(MenuSwitches, {
    allowedEditContexts: ['playground']
  }), /*#__PURE__*/react.createElement(AboutMenuItem, null), /*#__PURE__*/react.createElement(PreferencesMenuItem, null), !staticMode && /*#__PURE__*/react.createElement(AdminMenuItem, null), !staticMode && breakPoint650 && /*#__PURE__*/react.createElement(MenuDivider, null), !staticMode && /*#__PURE__*/react.createElement(LoginMenuItem, null), !staticMode && /*#__PURE__*/react.createElement(AccountMenuItem, null), !staticMode && /*#__PURE__*/react.createElement(LogoutMenuItem, null));
}); // ***** ContextualMenu *****
// **************************

var TAG_ContextualMenu = function TAG_ContextualMenu() {};

var ContextualMenu = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... store

  var context = app.context;
  var name = account.name; // Render
  // ==================================================================================================
  // Items
  // -

  var contextualMenuItems = {};
  var menuItems = null;

  if (contextualMenuItems.hasOwnProperty(context)) {
    var ContextualMenuItems = contextualMenuItems[context];
    menuItems = /*#__PURE__*/react.createElement(ContextualDrawerItems, null);
  } else {
    menuItems = /*#__PURE__*/react.createElement(NexoriumMenuItems, null);
  } // -------------------------------------------------


  return /*#__PURE__*/react.createElement(Menu_Menu, _extends({
    title: name
  }, props), menuItems);
});
// EXTERNAL MODULE: ./contexts/home/Home.css
var home_Home = __webpack_require__(8319);
;// CONCATENATED MODULE: ./contexts/home/Home.jsx







 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** RenderHomeGrid *****
// **************************

var TAG_RenderHomeGrid = function TAG_RenderHomeGrid() {};

var RenderHomeGrid = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app; // Renderers
  // ==================================================================================================
  // HomeGrid -> Mes projets
  // ---

  var navCardProjects = /*#__PURE__*/react.createElement(NavCard_NavCard, {
    key: "nav-card-projets",
    icon: "work_outline",
    label: "D\xE9couvrez tout ce que je d\xE9veloppe en cliquant ici",
    variant: "list",
    onClick: function onClick() {
      return store.navigateTo('projects');
    },
    style: {
      marginTop: '10px'
    }
  }); // HomeGrid -> Mon CV
  // ---

  var navCardCv = /*#__PURE__*/react.createElement(NavCard_NavCard, {
    key: "nav-card-cv",
    icon: "school",
    label: "Consultez mon curriculum vitae en cliquant ici",
    variant: "list",
    onClick: function onClick() {
      return store.navigateTo('cv');
    },
    style: {
      marginTop: '10px'
    }
  }); // HomeGrid -> Playground
  // ---

  var navCardPlayground = /*#__PURE__*/react.createElement(NavCard_NavCard, {
    key: "nav-card-playground",
    icon: "science",
    label: "D\xE9couvrez-en le terrain d'essai en cliquant ici",
    variant: "list",
    onClick: function onClick() {
      return app.navigateTo('playground');
    },
    style: {
      marginTop: '10px'
    }
  }); // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '40px'
    }
  }, /*#__PURE__*/react.createElement(Heading_Heading, null, "En apprendre plus sur moi"), /*#__PURE__*/react.createElement(Row_Row, {
    responsive: false
  }, navCardCv), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, null, "Quels sont mes projets ?"), /*#__PURE__*/react.createElement(Row_Row, {
    responsive: false
  }, navCardProjects), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Heading_Heading, null, "De quoi est fait ce site ?"), /*#__PURE__*/react.createElement(Row_Row, {
    responsive: false
  }, navCardPlayground));
}); // ***** HomePage *****
// ********************

var TAG_HomePage = function TAG_HomePage() {};

var HomePage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... store

  var staticUrl = app.staticUrl;
  var themeMode = theme.mode; // Renderers
  // ==================================================================================================

  var renderHelper = function renderHelper() {
    // Render :: Helper
    // ---
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      icon: /*#__PURE__*/react.createElement("img", {
        className: "nx-helper-icon",
        src: "".concat(staticUrl, "/img/myself.png")
      }),
      title: "Bienvenue !",
      subtitle: /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
        style: {
          color: themeMode == 'light' ? 'black' : 'white'
        }
      }, "Je m'appelle ", /*#__PURE__*/react.createElement("b", null, "Vincent Boni"), " et ceci est mon portail d'acc\xE8s / site vitrine \uD83D\uDE42"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("i", {
        style: {
          marginTop: '5px',
          display: 'block'
        }
      }, "(cliquez sur une des cat\xE9gories ci-dessous pour en apprendre plus)")),
      show: true,
      inFlux: true,
      style: {
        maxWidth: '600px'
      }
    }, /*#__PURE__*/react.createElement(RenderHomeGrid, null));
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderHelper());
});
// EXTERNAL MODULE: ./contexts/search/Search.css
var search_Search = __webpack_require__(4906);
;// CONCATENATED MODULE: ./contexts/search/Search.jsx







 // Models
// -------------------------------------------------------------------------------------------------------------
// ***** SearchStore *****
// ***********************

var TAG_SearchStore = function TAG_SearchStore() {};

var SearchStore = mobx_state_tree_module/* types.model */.V5.model({
  query: '',
  results: mobx_state_tree_module/* types.frozen */.V5.frozen(null)
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
// ***** HomePage *****
// ********************

var TAG_SearchPage = function TAG_SearchPage() {};

var SearchPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  react.useEffect(function () {
    setTimeout(function () {
      document.getElementById('txt-main-search').focus();
    }, 100);
  }, []); // Renderers
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
// EXTERNAL MODULE: ./Main.css
var Main = __webpack_require__(1729);
;// CONCATENATED MODULE: ./Main.jsx
















 // Models
// ======================================================================================================
// ***** RootStore *****
// *********************

var TAG_RootStore = function TAG_RootStore() {};

var RootStore = mobx_state_tree_module/* types.model */.V5.model({
  'app': mobx_state_tree_module/* types.optional */.V5.optional(NxAppStore, {}),
  // Search
  // -
  'search': mobx_state_tree_module/* types.optional */.V5.optional(SearchStore, {}),
  // ---
  // Blog
  // -
  'blog': mobx_state_tree_module/* types.optional */.V5.optional(BlogStore, {}),
  // Newsletters
  // -
  'newsletters': mobx_state_tree_module/* types.optional */.V5.optional(NewslettersStore, {}),
  // ---
  // Mes projets
  // -
  'projects': mobx_state_tree_module/* types.optional */.V5.optional(ProjectsStore, {}),
  // Mon CV
  // -
  'cv': mobx_state_tree_module/* types.optional */.V5.optional(CvStore, {}),
  // ---
  // Documentation
  // -
  'docs': mobx_state_tree_module/* types.optional */.V5.optional(DocsStore, {})
}).views(function (self) {
  return {
    get ajaxNexorium() {
      var app = self.app;
      var services = app.services;
      return services.getAjaxBase('nexorium');
    }

  };
}).actions(function (self) {
  return {
    update: function update(datas) {
      // Nexorium-specific init datas
      // ---
      self.app.setField('initialized', true);
    },
    navigateTo: function navigateTo(navContext, contextId, contextUrl, contextExtras, callback) {
      // Herald own navigation function
      // ---
      var app = self.app;
      var context = app.context; // -
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
      // Docs


      if (navContext == 'docs') {
        app.navigate('/docs', 'docs', [{
          "op": "replace",
          "path": "/docs/loaded",
          "value": false
        }]);
      }
    }
  };
}); // Init
// ======================================================================================================
// Contexts
// -

var contexts = {
  'home': HomePage,
  'search': SearchPage,
  'projects': ProjectsPage,
  'cv': CvPage,
  'docs': DocsPage
}; // Popups
// -

var popups = {}; // Routes
// -

var routes = {
  'home': '/',
  'home:static': '/main.html',
  'projects': '/projects',
  'cv': '/cv',
  'docs': '/docs'
}; // Store
// -

var initSnapshot = makeInitSnapshot(routes, {
  'app': {
    'staticMode': window.staticMode,
    'theme': {
      'palette_light': {
        'primary': {
          'main': '#8c9eff'
        },
        'secondary': {
          'main': '#607d8b'
        }
      },
      'palette_dark': {
        'primary': {
          'main': '#8c9eff'
        },
        'secondary': {
          'main': '#607d8b'
        }
      }
    }
  }
});
var rootStore = RootStore.create(initSnapshot);
var RootStoreContext = /*#__PURE__*/react.createContext(rootStore);
window.store = rootStore;
window.storeContext = RootStoreContext;
var staticRaw = {
  'smap': copyObj(services_STATIC_SMAP)
};
staticRaw['smap']['me'] = copyObj(services_STATIC_SMAP.nexorium);
rootStore.app.init(function (datas) {
  rootStore.update(datas);
}, popups, {}, staticRaw); // Functions Components ReactJS
// ======================================================================================================
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
// ======================================================================================================

window.addEventListener('DOMContentLoaded', function () {
  react_dom.render( /*#__PURE__*/react.createElement(Root, null), document.getElementById("nx-root"));
});

/***/ }),

/***/ 5832:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1167:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3199:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 5205:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4591:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4606:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2432:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 9553:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1729:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7291:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 6737:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 8685:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 5217:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 8319:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 8525:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4906:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7052:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2865:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2189:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7390:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4644:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7444:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2429:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2037:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 5270:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7282:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1785:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 89:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 9455:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 9286:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1211:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3997:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3935:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3818:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 26:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 9913:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 6222:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 6431:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7521:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 951:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2761:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2411:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2667:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1999:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2359:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4048:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 657:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4297:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4439:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 9988:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 5906:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3058:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4450:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4397:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3114:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3447:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 8461:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 5501:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1045:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2306:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3130:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 8424:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2181:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 6236:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7575:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2742:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3244:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7370:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7883:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 9393:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 9443:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 2055:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 7677:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1796:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 6824:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1815:
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
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
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
/******/ 	__webpack_require__.O(undefined, [216], () => (__webpack_require__(3979)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], () => (__webpack_require__(8446)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;