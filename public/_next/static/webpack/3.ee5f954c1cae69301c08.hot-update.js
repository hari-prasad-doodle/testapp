webpackHotUpdate_N_E(3,{

/***/ "./components/common/header/index.js":
/*!*******************************************!*\
  !*** ./components/common/header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isMenuOpen: false,
      addclass: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handelMenu", function () {
      var isMenuOpen = _this.state.isMenuOpen;

      _this.setState({
        isMenuOpen: !isMenuOpen
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var that = this;
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 5) {
          that.setState({
            addclass: true
          });
        } else {
          that.setState({
            addclass: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isMenuOpen = _this$state.isMenuOpen,
          addclass = _this$state.addclass;

      Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props);

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: addclass ? 'header header-bg' : 'header',
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
            className: "ad-container",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
              className: "main-header",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                className: "mobile-logo logo-style",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                    children: "Medexos healthcare services and solutions"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                  className: "menu-icon",
                  onClick: this.handelMenu,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    className: " menuMobileSection",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
                      className: " hamburger-icon ".concat(isMenuOpen ? 'active' : ''),
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                        className: "line line-1"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                        className: "line line-2"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                        className: "line line-3"
                      })]
                    })
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("ul", {
                className: "".concat(isMenuOpen ? 'open' : ''),
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
                    href: "/",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                      className: "active-menu",
                      children: "Home "
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("li", {
                  className: "new-drop-down",
                  children: ["Services", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("ul", {
                    className: "drop-down",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        href: "/provider",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                          children: "Provider"
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        href: "/payer",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                          children: "Payer"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
                    href: "/careers",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
                      children: " Careers  "
                    })
                  })
                })]
              })]
            })
          })
        })
      });
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImlzTWVudU9wZW4iLCJhZGRjbGFzcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ0aGF0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0IiwicHJvcHMiLCJoYW5kZWxNZW51IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFFSTtBQUNOQyxnQkFBVSxFQUFFLEtBRE47QUFFTkMsY0FBUSxFQUFFO0FBRkosSzs7cU5BdUJLLFlBQU07QUFBQSxVQUNYRCxVQURXLEdBQ0ksTUFBS0UsS0FEVCxDQUNYRixVQURXOztBQUVqQixZQUFLRyxRQUFMLENBQWM7QUFDWkgsa0JBQVUsRUFBRSxDQUFDQTtBQURELE9BQWQ7QUFHRCxLOzs7Ozs7O3dDQXZCbUI7QUFFbEIsVUFBSUksSUFBSSxHQUFHLElBQVg7QUFFQUMsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzVDLFlBQUlELE1BQU0sQ0FBQ0UsV0FBUCxHQUFxQixDQUF6QixFQUE0QjtBQUMxQkgsY0FBSSxDQUFDRCxRQUFMLENBQWM7QUFDWkYsb0JBQVEsRUFBRTtBQURFLFdBQWQ7QUFHRCxTQUpELE1BSU87QUFDTEcsY0FBSSxDQUFDRCxRQUFMLENBQWM7QUFDWkYsb0JBQVEsRUFBRTtBQURFLFdBQWQ7QUFHRDtBQUNGLE9BVkQ7QUFZRDs7OzZCQVNRO0FBQUEsd0JBQ3dCLEtBQUtDLEtBRDdCO0FBQUEsVUFDREYsVUFEQyxlQUNEQSxVQURDO0FBQUEsVUFDV0MsUUFEWCxlQUNXQSxRQURYOztBQUFBLDBHQUVHLEtBQUtPLEtBRlI7O0FBSVAsMEJBQ0U7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVQLFFBQVEsR0FBRyxrQkFBSCxHQUF3QixRQUFoRDtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLGFBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsd0JBQWY7QUFBQSx3Q0FDRSw4REFBQyxpREFBRDtBQUFNLHNCQUFJLEVBQUMsR0FBWDtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQURGLGtCQURGLGVBT0U7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBMkIseUJBQU8sRUFBRSxLQUFLUSxVQUF6QztBQUFBLHlDQUVFO0FBQUssNkJBQVMsc0JBQWQ7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLDRCQUFxQlQsVUFBVSxHQUFHLFFBQUgsR0FBYyxFQUE3QyxDQUFkO0FBQUEsOENBQ0U7QUFBSyxpQ0FBUyxFQUFDO0FBQWYsd0JBREYsZUFFRTtBQUFLLGlDQUFTLEVBQUM7QUFBZix3QkFGRixlQUdFO0FBQUssaUNBQVMsRUFBQztBQUFmLHdCQUhGO0FBQUE7QUFERjtBQUZGLGtCQVBGO0FBQUEsZ0JBREYsZUFtQkU7QUFBSSx5QkFBUyxZQUFLQSxVQUFVLEdBQUcsTUFBSCxHQUFZLEVBQTNCLENBQWI7QUFBQSx3Q0FDRTtBQUFBLHlDQUNFLDhEQUFDLGlEQUFEO0FBQU0sd0JBQUksRUFBQyxHQUFYO0FBQUEsMkNBQ0U7QUFBRywrQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBREY7QUFERixrQkFERixlQU1FO0FBQUksMkJBQVMsRUFBQyxlQUFkO0FBQUEsc0RBRUU7QUFBSSw2QkFBUyxFQUFDLFdBQWQ7QUFBQSw0Q0FDRTtBQUFBLDZDQUFJLDhEQUFDLGlEQUFEO0FBQU8sNEJBQUksRUFBQyxXQUFaO0FBQUEsK0NBQXlCO0FBQUE7QUFBQTtBQUF6QjtBQUFKLHNCQURGLGVBRUU7QUFBQSw2Q0FBSSw4REFBQyxpREFBRDtBQUFPLDRCQUFJLEVBQUMsUUFBWjtBQUFBLCtDQUFzQjtBQUFBO0FBQUE7QUFBdEI7QUFBSixzQkFGRjtBQUFBLG9CQUZGO0FBQUEsa0JBTkYsZUFjRTtBQUFBLHlDQUNFLDhEQUFDLGlEQUFEO0FBQU0sd0JBQUksRUFBQyxVQUFYO0FBQUEsMkNBQ0U7QUFBQTtBQUFBO0FBREY7QUFERixrQkFkRjtBQUFBLGdCQW5CRjtBQUFBO0FBREY7QUFERjtBQURGLFFBREY7QUEwREQ7Ozs7RUE5RmtCVSw0Q0FBSyxDQUFDQyxTOztBQStGMUI7QUFHY1oscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMy5lZTVmOTU0YzFjYWU2OTMwMWMwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGlzTWVudU9wZW46IGZhbHNlLFxyXG4gICAgYWRkY2xhc3M6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICBsZXQgdGhhdCA9IHRoaXNcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gNSkge1xyXG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgYWRkY2xhc3M6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgYWRkY2xhc3M6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGVsTWVudSA9ICgpID0+IHtcclxuICAgIGxldCB7IGlzTWVudU9wZW4gfSA9IHRoaXMuc3RhdGVcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc01lbnVPcGVuOiAhaXNNZW51T3BlblxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IGlzTWVudU9wZW4sIGFkZGNsYXNzIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBsZXQgeyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FkZGNsYXNzID8gJ2hlYWRlciBoZWFkZXItYmcnIDogJ2hlYWRlcid9ICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2JpbGUtbG9nbyBsb2dvLXN0eWxlJz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICBNZWRleG9zIGhlYWx0aGNhcmUgc2VydmljZXMgYW5kIHNvbHV0aW9uc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtaWNvbicgb25DbGljaz17dGhpcy5oYW5kZWxNZW51fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgIG1lbnVNb2JpbGVTZWN0aW9uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgaGFtYnVyZ2VyLWljb24gJHtpc01lbnVPcGVuID8gJ2FjdGl2ZScgOiAnJ31gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUgbGluZS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUgbGluZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUgbGluZS0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7aXNNZW51T3BlbiA/ICdvcGVuJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFjdGl2ZS1tZW51XCI+SG9tZSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmV3LWRyb3AtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzICBcclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3AtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayAgaHJlZj1cIi9wcm92aWRlclwiID48YT5Qcm92aWRlcjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgIGhyZWY9XCIvcGF5ZXJcIiA+PGE+UGF5ZXI8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJlZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+IENhcmVlcnMgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+IEFib3V0IFVzICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2NvbnRhY3QtdXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT4gIENvbnRhY3QgVXMgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9