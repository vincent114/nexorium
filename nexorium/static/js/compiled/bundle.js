/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7121:
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
// EXTERNAL MODULE: ../../nexus/react/node_modules/route-node/dist/route-node.esm.js + 3 modules
var route_node_esm = __webpack_require__(6285);
// EXTERNAL MODULE: ../../nexus/react/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4097);
;// CONCATENATED MODULE: ../../nexus/react/models/Services.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    // Getters
    // -
    get roles() {
      return [self.view_role, self.edit_role, self.admin_role];
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
;// CONCATENATED MODULE: ../../nexus/react/utils/Colors.jsx
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Objects
// -------------------------------------------------------------------------------------------------------------
var Color = /*#__PURE__*/function () {
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
}();

var Solver = /*#__PURE__*/function () {
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
}(); // Functions
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
// EXTERNAL MODULE: ../../nexus/react/ui/icon/Icon.css
var Icon = __webpack_require__(3244);
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
    'lock': 'lock_black_24dp.svg',
    'lock_open': 'lock_open_black_24dp.svg',
    'person': 'person_black_24dp.svg',
    'history': 'history_black_24dp.svg',
    'text_snippet': 'text_snippet_black_24dp.svg',
    'forum': 'forum_black_24dp.svg',
    'work_outline': 'work_outline_black_24dp.svg',
    'school': 'school_black_24dp.svg',
    'science': 'science_black_24dp.svg',
    'book': 'book_black_24dp.svg',
    'history_edu': 'history_edu_black_24dp.svg',
    'card_giftcard': 'card_giftcard_black_24dp.svg',
    'inventory_2': 'inventory_2_black_24dp.svg',
    'sports_esports': 'sports_esports_black_24dp.svg',
    'face': 'face_black_24dp.svg',
    'art_track': 'art_track_black_24dp.svg',
    'album': 'album_black_24dp.svg',
    'audiotrack': 'audiotrack_black_24dp.svg',
    'date_range': 'date_range_black_24dp.svg',
    'local_bar': 'local_bar_black_24dp.svg',
    'playlist_play': 'playlist_play_black_24dp.svg',
    'text_fields': 'text_fields_black_24dp.svg',
    'hourglass_empty': 'hourglass_empty_black_24dp.svg',
    'feedback_black': 'feedback_black_24dp.svg',
    'info': 'info_black_24dp.svg',
    'warning_amber': 'warning_amber_black_24dp.svg',
    'check_circle': 'check_circle_black_24dp.svg',
    'report': 'report_black_24dp.svg',
    'new_releases': 'new_releases_black_24dp.svg',
    'whatshot': 'whatshot_black_24dp.svg',
    'close': 'close_black_24dp.svg',
    'no_accounts': 'no_accounts_black_24dp.svg',
    'palette': 'palette_black_24dp.svg',
    'arrow_drop_down': 'arrow_drop_down_black_24dp.svg',
    'arrow_forward': 'arrow_forward_black_24dp.svg',
    'smart_button': 'smart_button_black_24dp.svg',
    'alternate_email': 'alternate_email_black_24dp.svg',
    'person_add': 'person_add_black_24dp.svg',
    'person_search': 'person_search_black_24dp.svg',
    'verified_user': 'verified_user_black_24dp.svg',
    'memory': 'memory_black_24dp.svg',
    'extension': 'extension_white_24dp.svg'
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
  var store = react.useContext(window.storeContext);
  var app = store.app; // From ... props

  var kind = props.kind ? props.kind : 'material'; // material, fontawesome, ...

  var name = props.name ? props.name : 'help';
  var variant = props.variant ? props.variant : 'outlined'; // outlined, filled

  var color = props.color ? props.color : 'black';
  var size = props.size ? props.size : 'normal'; // small, normal, large

  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // From ... store

  var staticUrl = app.staticUrl; // ...

  var iconUrl = '';

  if (ICON_KEYS_TO_FILES[kind].hasOwnProperty(name)) {
    var iconFilename = ICON_KEYS_TO_FILES[kind][name];
    iconUrl = "".concat(staticUrl, "/icons/").concat(kind, "/").concat(iconFilename);
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
    className: (0,clsx_m/* default */.Z)("nx-icon", name, className),
    style: style
  }, iconUrl && /*#__PURE__*/react.createElement("img", {
    src: iconUrl
  }));
};
;// CONCATENATED MODULE: ../../nexus/react/utils/Datas.jsx
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Datas_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  var _iterator = _createForOfIteratorHelper(path),
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

var IconButton = function IconButton(props) {
  // From ... props
  var title = props.title ? props.title : '';
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
    },
    title: title
  }, children);
}; // ***** Button *****
// ******************

var TAG_Button = function TAG_Button() {};

var Button_Button = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var theme = app.theme; // From ... state

  var _React$useState = react.useState(false),
      _React$useState2 = Button_slicedToArray(_React$useState, 2),
      hover = _React$useState2[0],
      setHover = _React$useState2[1]; // From ... props


  var id = props.id ? props.id : '';
  var children = props.children;
  var variant = props.variant ? props.variant : 'flat'; // default, contained, outlined

  var color = props.color ? props.color : 'default'; // default, primary, secondary

  var disabled = props.disabled == true ? true : false;
  var startAdornment = props.startAdornment ? props.startAdornment : null;
  var startAdornmentStyle = props.startAdornmentStyle ? copyObj(props.startAdornmentStyle) : {};
  var endAdornment = props.endAdornment ? props.endAdornment : null;
  var endAdornmentStyle = props.endAdornmentStyle ? copyObj(props.endAdornmentStyle) : {};
  var onClick = props.onClick;
  var className = props.className ? props.className : '';
  var style = props.style ? copyObj(props.style) : {}; // ...

  style['color'] = disabled ? "rgba(0, 0, 0, 0.26)" : 'black';
  style['backgroundColor'] = hover ? hexToRgbA(theme.palette["default"].main, 0.1) : 'transparent';
  style['border'] = '1px solid transparent';

  if (variant == 'outlined') {
    style['borderColor'] = hexToRgbA(theme.palette["default"].main, 0.8);

    if (disabled) {
      style['borderColor'] = "rgba(0, 0, 0, 0.12)";
    }
  }

  if (color == 'primary') {
    style['color'] = disabled ? "rgba(0, 0, 0, 0.26)" : theme.palette.primary.main;
    style['backgroundColor'] = hover ? hexToRgbA(theme.palette.primary.main, 0.1) : 'transparent';

    if (variant == 'outlined') {
      style['borderColor'] = theme.palette.primary.main;

      if (startAdornment) {
        startAdornmentStyle['filter'] = hexToCssFilter(theme.palette.primary.main);
      }

      if (endAdornment) {
        endAdornmentStyle['filter'] = hexToCssFilter(theme.palette.primary.main);
      }

      if (disabled) {
        style['borderColor'] = "rgba(0, 0, 0, 0.12)";
      }
    }

    if (variant == 'contained') {
      style['color'] = disabled ? "rgba(0, 0, 0, 0.26)" : 'white';
      style['backgroundColor'] = hover ? theme.palette.primary.main : hexToRgbA(theme.palette.primary.main, 0.8);

      if (disabled) {
        style['backgroundColor'] = "rgba(0, 0, 0, 0.12)";
      }
    }
  }

  if (color == 'secondary') {
    style['color'] = disabled ? "rgba(0, 0, 0, 0.26)" : theme.palette.secondary.main;
    style['backgroundColor'] = hover ? hexToRgbA(theme.palette.secondary.main, 0.1) : 'transparent';

    if (variant == 'outlined') {
      style['borderColor'] = theme.palette.secondary.main;

      if (startAdornment) {
        startAdornmentStyle['filter'] = hexToCssFilter(theme.palette.secondary.main);
      }

      if (endAdornment) {
        endAdornmentStyle['filter'] = hexToCssFilter(theme.palette.primary.main);
      }

      if (disabled) {
        style['borderColor'] = "rgba(0, 0, 0, 0.12)";
      }
    }

    if (variant == 'contained') {
      style['color'] = disabled ? "rgba(0, 0, 0, 0.26)" : 'white';
      style['backgroundColor'] = hover ? theme.palette.secondary.main : hexToRgbA(theme.palette.secondary.main, 0.8);

      if (disabled) {
        style['backgroundColor'] = "rgba(0, 0, 0, 0.12)";
      }
    }
  } // Evènement
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


  return /*#__PURE__*/react.createElement("div", {
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
  }, startAdornment), /*#__PURE__*/react.createElement("div", {
    "data-flex": "1"
  }, children), endAdornment && /*#__PURE__*/react.createElement("div", {
    className: "nx-button-end-adornment",
    style: endAdornmentStyle
  }, endAdornment));
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
// EXTERNAL MODULE: ../../nexus/react/ui/avatar/Avatar.css
var Avatar = __webpack_require__(3130);
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

  var size = props.size ? props.size : 'normal'; // normal, small, large, big

  var src = props.src ? props.src : '';
  var style = props.style ? props.style : {}; // ...

  if (style.hasOwnProperty('backgroundColor')) {
    style['backgroundColor'] = 'lightgray';

    if (color == 'transparent') {
      style['backgroundColor'] = 'transparent';
    }

    if (['primary', 'secondary'].indexOf(color) > -1) {
      style['backgroundColor'] = theme.palette[color].main;
    }
  }

  var img = null;

  if (src) {
    style['backgroundColor'] = theme.palette[color].main;
    img = /*#__PURE__*/react.createElement("img", {
      className: "nx-avatar-img",
      src: src
    });
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-avatar", color, size),
    style: style
  }, children, img);
};
// EXTERNAL MODULE: ../../nexus/react/ui/list/List.css
var List = __webpack_require__(7883);
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
    color: "transparent" // size="small"

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
    className: "nx-divider",
    style: style
  }, title && /*#__PURE__*/react.createElement("div", {
    className: "nx-divider-title"
  }, title));
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
// ***** HeaderDivider *****
// *************************

var TAG_HeaderDivider = function TAG_HeaderDivider() {};

var HeaderDivider = function HeaderDivider(props) {
  // ...
  // Render
  // ==================================================================================================
  return /*#__PURE__*/react.createElement("div", {
    className: "nx-header-divider"
  });
}; // ***** HeaderTitle *****
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


  var isLoading = app.isLoading;
  var isLogged = account.isLogged;
  var breakPoint650 = app.breakPoint650;
  var authUrl = app.authUrl;
  var authContext = app.authContext;
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

  var isLoading = app.isLoading;
  var canGoBack = app.canGoBack();
  var canGoHome = app.canGoHome();
  var breakPoint650 = app.breakPoint650;
  var appKind = app.kind;
  var menuExpanded = menu.expanded;
  var menuPinned = menu.pinned; // Evènements
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


  var menuBtn = null;

  if (!breakPoint650 && appKind == 'web') {
    menuBtn = /*#__PURE__*/react.createElement(IconButton, {
      onClick: function onClick() {
        return handleMenuClick();
      },
      disabled: isLoading
    }, /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "menu",
      color: "white"
    }));
  }

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

  if (!breakPoint650 && appKind == 'web') {
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
  }, menuBtn, backBtn, spinner, homeBtn, left && left); // Header -> Middle
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
    className: (0,clsx_m/* default */.Z)("nx-header", {
      'menu-unpinned': !menuPinned
    }, {
      'menu-expanded': menuExpanded && !breakPoint650 && menuPinned
    }, {
      'menu-retracted': !menuExpanded && !breakPoint650 && menuPinned
    }),
    style: {
      backgroundColor: hexToRgbA(theme.palette.primary.main, 0.8),
      color: theme.palette.primary.contrastText
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-header-toolbar"
  }, headerLeft, headerMiddle, headerRight));
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
function Storage_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Storage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Storage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Storage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Storage_arrayLikeToArray(o, minLen); }

function Storage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Functions
// =============================================================================================================

function getFromCookies(field) {
  // Retrieve a value from browser cookies
  // ---
  var cookie = document.cookie;
  var cookies = cookie.split(' ');

  var _iterator = Storage_createForOfIteratorHelper(cookies),
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
var Menu = __webpack_require__(4397);
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
  var theme = app.theme; // From ... store

  var context = app.context;
  var isLoading = app.isLoading; // From ... props

  var icon = props.icon;
  var label = props.label;
  var activeContexts = props.activeContexts ? props.activeContexts : [];
  var disabled = props.disabled == true ? props.disabled : isLoading;
  var style = props.style ? props.style : {};
  var styleLabel = {};
  var callbackClick = props.callbackClick; // ...

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
    }, {
      'disabled': disabled
    }),
    style: style,
    onClick: function onClick() {
      return handleClick();
    }
  }, icon && /*#__PURE__*/react.createElement(Avatar_Avatar, {
    color: "transparent" // size="small"

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
var Portal = __webpack_require__(3230);
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
// ***** PortalDivider *****
// *************************

var TAG_PortalDivider = function TAG_PortalDivider() {};

var PortalDivider = (0,es/* observer */.Pi)(function (props) {
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
  })), /*#__PURE__*/react.createElement(PortalDivider, null, "Applications"), /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-shortcuts-wrapper"
  }, /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "gramophone"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "vgm"
  })), /*#__PURE__*/react.createElement(PortalDivider, null, "Support"), /*#__PURE__*/react.createElement("div", {
    className: "nx-portal-shortcuts-wrapper"
  }, /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "cerberus"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "ladybug"
  }), /*#__PURE__*/react.createElement(PortalLink, {
    appKey: "herald"
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
// EXTERNAL MODULE: ../../nexus/react/ui/theme/Theme.css
var Theme = __webpack_require__(6824);
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
  "default": mobx_state_tree_module/* types.optional */.V5.optional(ColorStore, {}),
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
// EXTERNAL MODULE: ../../nexus/react/node_modules/react-dom/server.browser.js
var server_browser = __webpack_require__(3228);
;// CONCATENATED MODULE: ../../nexus/react/ui/Styles.jsx
function Styles_slicedToArray(arr, i) { return Styles_arrayWithHoles(arr) || Styles_iterableToArrayLimit(arr, i) || Styles_unsupportedIterableToArray(arr, i) || Styles_nonIterableRest(); }

function Styles_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Styles_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Styles_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Styles_arrayLikeToArray(o, minLen); }

function Styles_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Styles_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Styles_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Datas
// -------------------------------------------------------------------------------------------------------------
var SEVERITIES = {
  'default': {
    color: '#bdbdbd',
    contrasted: '#424242',
    // background: 'rgba(189, 189, 189, 0.20)',
    icon_name: 'info'
  },
  'success': {
    color: '#81c784',
    contrasted: '#43a047',
    // background: 'rgba(129, 199, 132, 0.1)',
    icon_name: 'check_circle'
  },
  'warning': {
    color: '#ffb74d',
    contrasted: '#ffa000',
    // background: 'rgba(255, 183, 77, 0.1)',
    icon_name: 'warning_amber'
  },
  'error': {
    color: '#e57373',
    contrasted: '#d32f2f',
    // background: 'rgba(229, 115, 115, 0.1)',
    icon_name: 'report'
  },
  'info': {
    color: '#64b5f6',
    contrasted: '#1976d2',
    // background: 'rgba(100, 181, 246, 0.20)',
    icon_name: 'info'
  },
  'hot': {
    color: '#e91e63',
    contrasted: '#e91e63',
    // background: 'rgba(233, 30, 99, 0.1)',
    icon_name: 'whatshot'
  },
  // -
  getDef: function getDef(severity) {
    return SEVERITIES[severity];
  }
};
var SEVERITY_COLORS = {};
var SEVERITY_COLORS_CONTRASTED = {};
var SEVERITY_BACKGROUNDS = {};
var SEVERITY_ICONS_NAMES = {};

for (var _i = 0, _Object$entries = Object.entries(SEVERITIES); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = Styles_slicedToArray(_Object$entries[_i], 2),
      severityKey = _Object$entries$_i[0],
      severityDef = _Object$entries$_i[1];

  SEVERITY_COLORS[severityKey] = severityDef.color;
  SEVERITY_COLORS_CONTRASTED[severityKey] = severityDef.contrasted;
  SEVERITY_BACKGROUNDS[severityKey] = severityDef.background;
  SEVERITY_ICONS_NAMES[severityKey] = severityDef.icon_name;
}
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

  var style = {}; // Evènements
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

var HelperParaph = function HelperParaph(props) {
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
}; // ***** HelperImg *****
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
// EXTERNAL MODULE: ../../nexus/react/layout/section/Section.css
var Section = __webpack_require__(8461);
;// CONCATENATED MODULE: ../../nexus/react/layout/section/Section.jsx




 // Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------
// ***** Section *****
// *******************

var TAG_Section = function TAG_Section() {};

var Section_Section = function Section(props) {
  // From ... props
  var icon = props.icon ? props.icon : null;
  var title = props.title ? props.title : '';
  var right = props.right;
  var children = props.children;
  var buttons = props.buttons;
  var buttonsPosition = props.buttonsPosition ? props.buttonsPosition : 'right'; // left, right, center, stretch

  var buttonsResponsive = props.buttonsResponsive == true ? true : false; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-section"
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
};
// EXTERNAL MODULE: ../../nexus/react/contexts/about/About.css
var About = __webpack_require__(2189);
;// CONCATENATED MODULE: ../../nexus/react/contexts/about/About.jsx












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
      var url = '/app/about_load';
      app.fetchJSON(url, null, false, 'POST').then(function (json) {
        self.update(json.me);
      })["catch"](function (ex) {
        console.error("Fetch failed for ".concat(url), ex);
        snackbar.update(true, "Une erreur est survenue.", "error");
      });
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
}); // ***** RenderAbout *****
// ***********************

var TAG_RenderAbout = function TAG_RenderAbout() {};

var RenderAbout = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var about = app.about; // From ... store

  var isLoading = app.isLoading;
  var breakPoint414 = app.breakPoint414;
  var loaded = about.loaded;
  var service = about.service;
  var version = service.version;
  var changeset = service.changeset;
  var changeset_instance = service.changeset_instance; // ...

  react.useEffect(function () {
    if (!loaded) {
      about.load();
    }
  }, [loaded]); // Evènements
  // ==================================================================================================

  var handleChangelogClick = function handleChangelogClick() {// TODO
  };

  var handleBugsClick = function handleBugsClick() {// TODO
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
    src: "/static/favicons/android-icon-192x192.png",
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
    className: "nx-t"
  }, "Version"), /*#__PURE__*/react.createElement("div", {
    className: "nx-t selectable",
    "data-flex": "2"
  }, /*#__PURE__*/react.createElement("b", null, version))), /*#__PURE__*/react.createElement("div", {
    className: "h-col-small responsive-vertical responsive-spaced-none responsive-align-start"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-t"
  }, "R\xE9vision instance"), /*#__PURE__*/react.createElement("div", {
    className: "nx-about-changeset selectable",
    "data-flex": "2"
  }, changeset_instance)), /*#__PURE__*/react.createElement("div", {
    className: "h-col-small responsive-vertical responsive-spaced-none responsive-align-start"
  }, /*#__PURE__*/react.createElement("div", {
    className: "nx-t"
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
      return handleChangelogClick();
    },
    disabled: isLoading,
    startAdornment: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "history"
    })
  }, "Changelog"));
  sectionButtons.push( /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-bugs",
    variant: "outlined",
    color: "primary",
    onClick: function onClick() {
      return handleBugsClick();
    },
    disabled: isLoading,
    startAdornment: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "bug_report"
    })
  }, "Bugs"));
  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: sectionIcon,
    title: sectionTitle,
    buttons: sectionButtons
  }, sectionContent);
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
// EXTERNAL MODULE: ../../nexus/react/layout/row/Row.css
var Row = __webpack_require__(3447);
;// CONCATENATED MODULE: ../../nexus/react/layout/row/Row.jsx


 // Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------
// ***** Row *****
// ***************

var TAG_Row = function TAG_Row() {};

var Row_Row = function Row(props) {
  // From ... props
  var responsive = props.responsive == false ? false : true;
  var children = props.children;
  var spacing = props.spacing ? props.spacing : 'small';
  var align = props.align ? props.align : 'start';
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  var marginBottom = props.marginBottom == false ? false : true; // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-row", "h-col-".concat(spacing), "flex-align-".concat(align), {
      "responsive-vertical": responsive
    }, {
      "responsive-align-stretch": responsive
    }, {
      "margin-bottom": marginBottom
    }, className),
    style: style
  }, children);
};
// EXTERNAL MODULE: ../../nexus/react/node_modules/date-fns/esm/format/index.js + 29 modules
var format = __webpack_require__(8173);
// EXTERNAL MODULE: ../../nexus/react/node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(8484);
// EXTERNAL MODULE: ../../nexus/react/node_modules/date-fns/esm/subDays/index.js
var subDays = __webpack_require__(5081);
;// CONCATENATED MODULE: ../../nexus/react/utils/DateTools.jsx

 // Objects
// --------------------------------------------------------------------------------------------------------------------------------------------
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
var Field = __webpack_require__(651);
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
  var callbackKeyPress = props.callbackKeyPress;
  var startAdornment = props.startAdornment ? props.startAdornment : null;
  var endAdornment = props.endAdornment ? props.endAdornment : null;
  var disabled = props.disabled ? props.disabled : isLoading;
  var className = props.className ? props.className : '';
  var style = props.style != undefined ? props.style : {};
  var inputStyle = props.inputStyle != undefined ? props.inputStyle : {};

  if (focused) {
    inputStyle['borderColor'] = theme.palette.primary.main;
    inputStyle['borderWidth'] = '2px';
    inputStyle['padding'] = '5px 11px'; // inputStyle['outline'] = `2px solid ${theme.palette.primary.main}`;
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
  }; // Evènements
  // ==================================================================================================


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

  var handleAutocompleteSelect = function handleAutocompleteSelect(result) {
    // Sur sélection d'un résultat d'autocomplete
    // ---
    app.saveValue(savePath, result.label);
    app.saveValue(savePathAutocomplete, result.value);
    setAutocompletePopperOpen(false);
    app.setField('autocompleteResults', []);
    handleCloseAutocompletePopup(); // Callback nouvelle valeur

    if (callbackChange) {
      callbackChange(savePath, result.label, savePathAutocomplete, result.value, result.raw);
    }

    if (callbackSelect) {
      callbackSelect(savePath, result.label, savePathAutocomplete, result.value, result.raw);
    }
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

  var handleSaveValue = function handleSaveValue(savePath, value) {
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
      onChange: function onChange(e) {
        return handleInputChange(e);
      },
      onFocus: function onFocus(e) {
        return handleInputFocus(e);
      },
      onBlur: function onBlur(e) {
        return handleInputBlur(e);
      },
      onKeyPress: callbackKeyPress,
      placeholder: placeholder,
      title: title,
      style: inputStyle,
      disabled: disabled,
      autocomplete: "off"
    });
  };

  var renderTextarea = function renderTextarea() {
    // Render :: Textarea
    // ---
    var textarea = /*#__PURE__*/react.createElement("textarea", {
      className: "nx-field-textarea",
      id: id,
      value: value,
      type: type,
      onChange: function onChange(e) {
        return handleInputChange(e);
      },
      onFocus: function onFocus(e) {
        return handleInputFocus(e);
      },
      onBlur: function onBlur(e) {
        return handleInputBlur(e);
      },
      onKeyPress: callbackKeyPress,
      placeholder: placeholder,
      title: title,
      style: inputStyle,
      disabled: disabled
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
    // case 'checkbox':
    // 	renderCheckbox();
    // 	break;
    // case 'autocomplete':
    // 	renderAutocomplete();
    // 	break;
    // case 'switcher':
    // 	renderSwitcher();
    // 	break;
    // case 'radios':
    // 	renderRadios();
    // 	break;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)('nx-field', component, type, {
      'disabled': disabled
    }, {
      'focused': focused
    }, {
      'error': error
    }, className),
    style: style
  }, (label || ghostLabel) && /*#__PURE__*/react.createElement("div", {
    className: "nx-field-label"
  }, label), /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-input-wrapper", {
      "with-start-adornment": startAdornment
    }, {
      "with-end-adornment": endAdornment
    })
  }, startAdornment, input, endAdornment), error && /*#__PURE__*/react.createElement("div", {
    className: "nx-field-error",
    dangerouslySetInnerHTML: {
      __html: error
    }
  }));
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
  var children = props.children;
  var className = props.className ? props.className : '';
  var color = props.color ? props.color : ''; // primary, secondary, #custom

  var style = props.style ? props.style : {}; // ...

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
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-indicator", className),
    style: style
  }, children);
});
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
  var name = serviceInfo.name; // Evènements
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
  // Evènements
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

  var userContext = 'user'; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    store.navigateTo(userContext);
    app.menu.close();
  }; // Render
  // ==================================================================================================


  var menuItemContent = null;

  if (isAdmin) {
    menuItemContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(MenuDivider, null), /*#__PURE__*/react.createElement(MenuItem, {
      icon: /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "person",
        width: "120px"
      }),
      label: "Utilisateur",
      activeContexts: [userContext],
      callbackClick: handleMenuItemClick
    }));
  }

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
var Auth = __webpack_require__(1881);
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
  var authUrl = app.authUrl;
  var authContext = app.authContext; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
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
  }; // Render
  // ==================================================================================================


  var loginMenuItem = null;

  if (!isLogged && breakPoint650) {
    loginMenuItem = /*#__PURE__*/react.createElement(MenuItem, {
      icon: /*#__PURE__*/react.createElement(Icon_Icon, {
        name: "account_circle"
      }),
      label: "Me connecter",
      activeContexts: ['auth'],
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
}); // ***** RenderStepLogin *****
// ***************************

var TAG_RenderStepLogin = function TAG_RenderStepLogin() {};

var RenderStepLogin = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var auth = app.auth;
  var account = app.account; // From ... store

  var isLoading = app.isLoading; // Evènements
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
  var login = auth.login; // Evènements
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
  }); // Evènements
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
}); // ***** AccountMenuItem *****
// ***************************

var TAG_AccountMenuItem = function TAG_AccountMenuItem() {};

var AccountMenuItem = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var account = app.account; // From ... store

  var isLogged = account.isLogged;
  var breakPoint650 = app.breakPoint650; // Evènements
  // ==================================================================================================

  var handleMenuItemClick = function handleMenuItemClick() {
    app.navigate(app.accountUrl, 'account');
  }; // Render
  // ==================================================================================================


  var accountMenuItem = null;

  if (isLogged && breakPoint650) {
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

  var staticUrl = app.staticUrl; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, /*#__PURE__*/react.createElement(Helper_Helper, {
    icon: /*#__PURE__*/react.createElement("img", {
      className: "nx-helper-icon",
      src: "".concat(staticUrl, "/img/emojis/jelly_crying.png")
    }),
    title: "Erreur 404",
    subtitle: "Il semblerait que la page demand\xE9e n'existe pas.",
    variant: "warning",
    show: true
  }));
};
// EXTERNAL MODULE: ../../nexus/react/NxApp.css
var NxApp = __webpack_require__(7052);
;// CONCATENATED MODULE: ../../nexus/react/NxApp.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function NxApp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NxApp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NxApp_createClass(Constructor, protoProps, staticProps) { if (protoProps) NxApp_defineProperties(Constructor.prototype, protoProps); if (staticProps) NxApp_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

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
  debugMode: false,
  editMode: false,
  standaloneMode: false,
  services: mobx_state_tree_module/* types.optional */.V5.optional(ServicesStore, {}),
  // URLs
  authUrl: '/login',
  authContext: 'auth',
  homeUrl: '/',
  homeContext: 'home',
  searchUrl: '/search',
  searchContext: 'search',
  aboutUrl: '/about',
  aboutContext: 'about',
  adminUrl: '/admin',
  adminContext: 'admin',
  accountUrl: '/account',
  accountContext: 'account',
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
  snackbar: mobx_state_tree_module/* types.optional */.V5.optional(SnackbarStore, {}) // popup: types.optional(PopupStore, {}),

}).views(function (self) {
  return {
    get me() {
      return self.services.me;
    },

    get appId() {
      return self.me.app_id;
    },

    get staticUrl() {
      if (self.kind == 'electron') {
        return '../nexus/nexus/static';
      }

      return '/nexus_static';
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

      self.account.update(raw.user);
      self.auth.setField('step', self.account.isLogged ? 'logged' : 'login'); // Edit mode ?

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
        if (self.kind == 'web') {
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
          callback();
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

      var _iterator3 = NxApp_createForOfIteratorHelper(errors),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var error = _step3.value;

          if (JSON.stringify(error.path) != JSON.stringify(savePath)) {
            clearedErrors.push(error);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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
  routeNodes.add(new route_node_esm/* RouteNode */.k('about', '/about'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('auth', '/login'));
  routeNodes.add(new route_node_esm/* RouteNode */.k('auth:step', '/login/:step'));
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
            src: "/nexus_static/img/emojis/jelly_eyes_closed.png"
          }),
          title: "!",
          subtitle: "Une erreur est survenue.",
          severity: "error",
          show: true
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
  var isMobile = app.isMobile;
  var isDesktop = app.isDesktop;
  var breakPoint650 = app.breakPoint650;
  var breakPoint414 = app.breakPoint414;
  var breakPoint375 = app.breakPoint375;
  var breakPoint320 = app.breakPoint320;
  var menuPinned = menu.pinned;
  var theme = app.theme; // ...

  contexts['about'] = AboutPage;
  contexts['auth'] = AuthPage;
  contexts['forbidden'] = ForbiddenPage;
  contexts['account'] = AccountPage; // contexts['infos'] = InfoPage;
  // Render
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
    className: (0,clsx_m/* default */.Z)(context, mobileClass, desktopClass, {
      'break-650': breakPoint650
    }, {
      'break-414': breakPoint414
    }, {
      'break-375': breakPoint375
    }, {
      'break-320': breakPoint320
    }, "ui-".concat(theme.variant), {
      'loading': isLoading
    }, window.process ? process.platform : '')
  }, Header && !isFullScreen && /*#__PURE__*/react.createElement(Header, null), /*#__PURE__*/react.createElement("div", {
    id: "nx-content"
  }, Menu && !isFullScreen && /*#__PURE__*/react.createElement(Menu, null), /*#__PURE__*/react.createElement("div", {
    id: "nx-main"
  }, content, /*#__PURE__*/react.createElement(Snackbar_Snackbar, null)), !isFullScreen && /*#__PURE__*/react.createElement(Portal_Portal, null), popupsRendered)));
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
var Admin = __webpack_require__(4644);
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
var Search = __webpack_require__(4906);
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
  var children = props.children;
  var _onClick = props.onClick;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-paper", className),
    style: style,
    onClick: function onClick() {
      if (_onClick) {
        _onClick();
      }
    }
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

var Typography_Typography = function Typography(props) {
  // From ... props
  var children = props.children;
  var variant = props.variant ? props.variant : '';
  var severity = props.severity ? props.severity : '';
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  var color = props.color ? props.color : ''; // ...
  // Quelle couleur ?

  if (color && !style.hasOwnProperty('color')) {
    style['color'] = color;
  }

  if (severity && !style.hasOwnProperty('color') && SEVERITY_COLORS.hasOwnProperty(severity)) {
    style['color'] = SEVERITY_COLORS[severity];
  } // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("c-typography", variant, className),
    style: style
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

var ProjectCard_ProjectCard = function ProjectCard(props) {
  // From ... props
  var serviceInfo = props.serviceInfo;
  var projectMetas = props.projectMetas; // ...

  var appId = serviceInfo.app_id;
  var name = serviceInfo.name;
  var description = serviceInfo.description; // Evènements
  // ==================================================================================================

  var handleClick = function handleClick() {
    // Sur click de la carte
    // ---
    console.log(appId);
  }; // Render
  // ==================================================================================================


  return /*#__PURE__*/react.createElement(Paper_Paper, {
    className: (0,clsx_m/* default */.Z)("nm-projet-card"),
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
  }, description))));
};
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

  var centered = props.centered == true ? true : false;
  var variant = props.variant ? props.variant : 'default'; // default, contained

  var children = props.children;
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {}; // Render
  // ==================================================================================================

  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("nx-heading", {
      "centered": centered
    }, className),
    style: style
  }, children);
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
  // Collections
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

  return /*#__PURE__*/react.createElement("div", null, renderProjectsCards("Support", ['nexus', 'cerberus']), renderProjectsCards("Vitrine", ['nexorium', 'nexora']), renderProjectsCards("Collections", ['gramophone', 'vgm']));
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
var Playground = __webpack_require__(5245);
;// CONCATENATED MODULE: ./contexts/playground/Playground.jsx















 // Datas
// -------------------------------------------------------------------------------------------------------------

var CHOICES_TEST = [{
  'value': 'choix_1',
  'label': 'Choix 1'
}, {
  'value': 'choix_2',
  'label': 'Choix 2'
}, {
  'value': 'choix_3',
  'label': 'Choix 3'
}]; // Models
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
  loaded: false
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
      self.loaded = true;
    },
    load: function load() {
      // Appel AJAX de la fonction de chargement des données de playground
      // ---
      var store = (0,mobx_state_tree_module/* getRoot */.yj)(self);
      var app = store.app;
      var snackbar = app.snackbar;
      var ajaxNexorium = store.ajaxNexorium;
      var url = "".concat(ajaxNexorium, "/playground_actions/load");
      app.fetchJSON(url, null, false, 'POST').then(function (json) {
        self.update(json.playground_raw);
      })["catch"](function (ex) {
        console.error("Fetch failed for ".concat(url), ex);
        snackbar.update(true, "Une erreur est survenue.", "error");
      });
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
    }
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
}); // ***** PlaygroundHeaderRight *****
// *********************************

var TAG_PlaygroundHeaderRight = function TAG_PlaygroundHeaderRight() {};

var PlaygroundHeaderRight = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = store.playground; // From ... store

  var isLoading = app.isLoading; // ...
  // Evènements
  // ==================================================================================================

  var handleSaveClick = function handleSaveClick() {
    playground.validate(function (errors) {
      if (errors.length == 0) {
        playground.save();
      }
    });
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
  })), /*#__PURE__*/react.createElement(HeaderDivider, null));
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
}); // ***** RenderSectionFields *****
// *******************************

var TAG_RenderSectionFields = function TAG_RenderSectionFields() {};

var RenderSectionFields = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = store.playground; // From ... store

  var isLoading = app.isLoading; // Evènements
  // ==================================================================================================

  var handleTextFieldChange = function handleTextFieldChange(savePath, value) {
    console.log('handleTextFieldChange');
    console.log(savePath);
    console.log(value);
  };

  var handleNumberFieldChange = function handleNumberFieldChange(savePath, value) {
    console.log('handleNumberFieldChange');
    console.log(savePath);
    console.log(value);
  };

  var handleDateFieldChange = function handleDateFieldChange(savePath, value) {
    console.log('handleDateFieldChange');
    console.log(savePath);
    console.log(value);
  };

  var handleTimeFieldChange = function handleTimeFieldChange(savePath, value) {
    console.log('handleTimeFieldChange');
    console.log(savePath);
    console.log(value);
  };

  var handleSelectFieldChange = function handleSelectFieldChange(savePath, value) {
    console.log('handleSelectFieldChange');
    console.log(savePath);
    console.log(value);
  };

  var handleTextareaFieldChange = function handleTextareaFieldChange(savePath, value) {
    console.log('handleTextareaFieldChange');
    console.log(savePath);
    console.log(value);
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
      errors.push(app.addError(['playground', 'value_text'], 'Fake error text'));
      errors.push(app.addError(['playground', 'value_number'], 'Fake error number'));
      errors.push(app.addError(['playground', 'value_date'], 'Fake error date'));
      errors.push(app.addError(['playground', 'value_time'], 'Fake error time'));
      errors.push(app.addError(['playground', 'value_select'], 'Fake error select'));
      errors.push(app.addError(['playground', 'value_textarea'], 'Fake error textarea'));
      errors.push(app.addError(['playground', 'value_autocomplete_1', 'label'], 'Fake error autocomplete'));
      errors.push(app.addError(['playground', 'value_autocomplete_2', 'label'], 'Fake error autocomplete 2'));
      errors.push(app.addError(['playground', 'value_switcher'], 'Fake error switcher'));
      errors.push(app.addError(['playground', 'value_radio'], 'Fake error radio'));
      errors.push(app.addError(['playground', 'value_checkbox'], 'Fake error checkbox'));
    }

    return errors;
  }; // Render
  // ==================================================================================================
  // Section -> Content
  // ---


  var sectionContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-text",
    component: "input",
    label: "Texte",
    savePath: ['playground', 'value_text'],
    callbackChange: handleTextFieldChange,
    disabled: isLoading
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-number",
    component: "input",
    label: "Nombre",
    type: "number",
    savePath: ['playground', 'value_number'],
    callbackChange: handleNumberFieldChange,
    disabled: isLoading
  })), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-date",
    component: "input",
    label: "Date",
    type: "date" // placeholder='jj/mm/aaaa'
    ,
    savePath: ['playground', 'value_date'],
    callbackChange: handleDateFieldChange,
    disabled: isLoading
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-time",
    component: "input",
    label: "Time",
    type: "time" // placeholder='hh:mm'
    ,
    savePath: ['playground', 'value_time'],
    callbackChange: handleTimeFieldChange,
    disabled: isLoading
  })), /*#__PURE__*/react.createElement(Row_Row, null, /*#__PURE__*/react.createElement(Field_Field, {
    id: "lst-field-select",
    component: "select",
    label: "Select",
    datas: CHOICES_TEST,
    savePath: ['playground', 'value_select'],
    callbackChange: handleSelectFieldChange,
    disabled: isLoading,
    canBeEmpty: true
  }), /*#__PURE__*/react.createElement(Field_Field, {
    id: "txt-field-textarea",
    component: "textarea",
    label: "Textarea",
    savePath: ['playground', 'value_textarea'],
    callbackChange: handleTextareaFieldChange,
    disabled: isLoading
  }))); // Section -> Buttons
  // ---

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
  }, "Clear")];
  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "text_fields"
    }),
    title: "Fields",
    buttons: sectionButtons,
    buttonsResponsive: true
  }, sectionContent);
}); // ***** RenderSectionSnackbars *****
// **********************************

var TAG_RenderSectionSnackbars = function TAG_RenderSectionSnackbars() {};

var RenderSectionSnackbars = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var snackbar = app.snackbar;
  var playground = store.playground; // From ... store

  var isLoading = app.isLoading; // Evènements
  // ==================================================================================================

  var handleSnackbar = function handleSnackbar(severity) {
    snackbar.update(true, /*#__PURE__*/react.createElement("div", null, "Test de snackbar ", /*#__PURE__*/react.createElement("b", null, severity)), severity);
  }; // Render
  // ==================================================================================================
  // Section -> Buttons
  // ---


  var sectionButtons = [/*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-default",
    variant: "outlined",
    color: "primary",
    onClick: function onClick() {
      return handleSnackbar('default');
    },
    disabled: isLoading
  }, "Default"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-success",
    variant: "outlined",
    color: "primary",
    onClick: function onClick() {
      return handleSnackbar('success');
    },
    disabled: isLoading
  }, "Success"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-info",
    variant: "outlined",
    color: "primary",
    onClick: function onClick() {
      return handleSnackbar('info');
    },
    disabled: isLoading
  }, "Info"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-warning",
    variant: "outlined",
    color: "primary",
    onClick: function onClick() {
      return handleSnackbar('warning');
    },
    disabled: isLoading
  }, "Warning"), /*#__PURE__*/react.createElement(Button_Button, {
    key: "btn-snackbars-error",
    variant: "outlined",
    color: "primary",
    onClick: function onClick() {
      return handleSnackbar('error');
    },
    disabled: isLoading
  }, "Error")];
  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "feedback_black"
    }),
    title: "Snackbars",
    buttons: sectionButtons,
    buttonsResponsive: true
  });
}); // ***** RenderSectionIndicators *****
// ***********************************

var TAG_RenderSectionIndicators = function TAG_RenderSectionIndicators() {};

var RenderSectionIndicators = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var snackbar = app.snackbar;
  var playground = store.playground; // From ... store

  var isLoading = app.isLoading; // Render
  // ==================================================================================================
  // Section -> Content
  // ---

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
  }, "hot")));
  return /*#__PURE__*/react.createElement(Section_Section, {
    icon: /*#__PURE__*/react.createElement(Icon_Icon, {
      name: "palette"
    }),
    title: "Indicateurs"
  }, sectionContent);
}); // ***** RenderPlayground *****
// ****************************

var TAG_RenderPlayground = function TAG_RenderPlayground() {};

var RenderPlayground = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = store.playground; // From ... store

  var loaded = playground.loaded; // ...

  react.useEffect(function () {
    if (!loaded) {
      playground.load();
    }
  }, [loaded]); // Render
  // ==================================================================================================

  var contentPlayground = null;

  if (loaded) {
    contentPlayground = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(RenderSectionFields, null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(RenderSectionSnackbars, null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(RenderSectionIndicators, null));
  }

  return contentPlayground;
}); // ***** PlaygroundPage *****
// **************************

var TAG_PlaygroundPage = function TAG_PlaygroundPage() {};

var PlaygroundPage = (0,es/* observer */.Pi)(function (props) {
  var store = react.useContext(window.storeContext);
  var app = store.app;
  var playground = store.playground; // From ... store

  var initialized = app.initialized;
  var loaded = playground.loaded; // ...

  var showHelper = !initialized || !loaded ? true : false; // Renderers
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
    return /*#__PURE__*/react.createElement(Helper_Helper, {
      iconName: "science",
      show: showHelper
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "nx-page"
  }, renderPage(), renderHelper());
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

  var context = app.context;
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
    headerRight = /*#__PURE__*/react.createElement(PlaygroundHeaderRight, null);
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
var home_Home = __webpack_require__(8319);
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
      subtitle: "Le portail d'acc\xE8s sur l'\xE9cosyst\xE8me NxApp, servant \xE9galement de site portfolio.",
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
var admin_Admin = __webpack_require__(4251);
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
var Main = __webpack_require__(1729);
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
        'default': {
          'main': '#000000',
          'contrastText': '#fff'
        },
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

/***/ 5832:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 1167:
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

/***/ 4251:
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

/***/ 8319:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 5245:
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

/***/ 1881:
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

/***/ 7282:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 651:
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

/***/ 4450:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 4397:
/***/ (() => {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 3230:
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

/***/ 3130:
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

/***/ 7677:
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
/******/ 	__webpack_require__.O(undefined, [216], () => (__webpack_require__(3979)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], () => (__webpack_require__(7121)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;