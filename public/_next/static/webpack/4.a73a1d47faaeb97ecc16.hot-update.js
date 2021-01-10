webpackHotUpdate_N_E(4,{

/***/ "./components/home/banner/index.js":
/*!*****************************************!*\
  !*** ./components/home/banner/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_7__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Banner = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Banner, _Component);

  var _super = _createSuper(Banner);

  function Banner(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    _this = _super.call(this, props);
    _this.state = {
      modal: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "render",
    value: function render() {
      var params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      };
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_id_swiper__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
              className: "banner",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
                  className: "",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
                    "class": "slider-img",
                    style: {
                      backgroundImage: "url(/static/img/main-page.jpeg)"
                    }
                  })
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
              className: "banner",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
                  className: "",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
                    "class": "slider-img",
                    style: {
                      backgroundImage: "url(/static/img/main-page-2.jpeg)"
                    }
                  })
                })
              })
            })]
          })
        })
      });
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2Jhbm5lci9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJwcm9wcyIsInN0YXRlIiwibW9kYWwiLCJwYXJhbXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInNwYWNlQmV0d2VlbiIsImJhY2tncm91bmRJbWFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUlNQSxNOzs7OztBQUdKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBS1E7QUFFUCxVQUFNQyxNQUFNLEdBQUc7QUFDYkMsa0JBQVUsRUFBRTtBQUNWQyxZQUFFLEVBQUUsb0JBRE07QUFFVkMsY0FBSSxFQUFFLFNBRkk7QUFHVkMsbUJBQVMsRUFBRTtBQUhELFNBREM7QUFNYkMsa0JBQVUsRUFBRTtBQUNWQyxnQkFBTSxFQUFFLHFCQURFO0FBRVZDLGdCQUFNLEVBQUU7QUFGRSxTQU5DO0FBVWJDLG9CQUFZLEVBQUU7QUFWRCxPQUFmO0FBYUEsMEJBQ0U7QUFBQSwrQkFDRTtBQUFBLGlDQUVFLCtEQUFDLHNEQUFEO0FBQUEsb0NBR0U7QUFBSyx1QkFBUyxFQUFDLFFBQWY7QUFBQSxxQ0FDRTtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxFQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBTSxZQUFYO0FBQXdCLHlCQUFLLEVBQUU7QUFBRUMscUNBQWUsRUFBRTtBQUFuQjtBQUEvQjtBQURGO0FBREY7QUFERixjQUhGLGVBYUU7QUFBSyx1QkFBUyxFQUFDLFFBQWY7QUFBQSxxQ0FDRTtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxFQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBTSxZQUFYO0FBQXdCLHlCQUFLLEVBQUU7QUFBRUEscUNBQWUsRUFBRTtBQUFuQjtBQUEvQjtBQURGO0FBREY7QUFERixjQWJGO0FBQUE7QUFGRjtBQURGLFFBREY7QUFvR0Q7Ozs7RUFoSWtCQywrQzs7QUFvSU5kLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzQuYTczYTFkNDdmYWFlYjk3ZWNjMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN3aXBlciBmcm9tICdyZWFjdC1pZC1zd2lwZXInO1xyXG5cclxuXHJcblxyXG5jbGFzcyBCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1vZGFsOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcclxuICAgICAgfSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHNlY3Rpb24gPlxyXG5cclxuICAgICAgICAgIDxTd2lwZXIgICA+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItaW1nXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvc3RhdGljL2ltZy9tYWluLXBhZ2UuanBlZylcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItaW1nXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvc3RhdGljL2ltZy9tYWluLXBhZ2UtMi5qcGVnKVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPC9Td2lwZXI+XHJcblxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuey8qIFxyXG5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cInNlcnZpY2VcIiBjbGFzcz1cInNlcnZpY2UgcGFkZGluZy0xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcHgtMFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInNlcnZpY2VfaW5mb19pdGVtXCIgY2xhc3M9XCJzaWRlLWZvcm0taWNvbnNcIiA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGZsYXRpY29uLXBob25lLWNhbGxcIiBpZD1cIm9wZW4tb3BlbmluZy1wb3B1cFwiPjwvaT5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gZmxhdGljb24tcGxhY2Vob2xkZXJcIiBpZD1cIm9wZW4tbG9jYXRpb24tcG9wdXBcIj48L2k+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGZsYXRpY29uLWNsb2NrLWNpcmN1bGFyLW91dGxpbmVcIiBpZD1cIm9wZW4tZm9ybS1wb3B1cFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG14LTBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJoZWFkaW5nLTNcIj5XaHkgcGF0aWVudHMgY2hvb3NlIG91ciBob3NwaXRhbCA/PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZy1ib3R0b20tMzUgcGFkZGluZy10b3AtMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgYWQgdml4IGZ1aXNzZXQgYWRpY2l0IGxvYm9ydGlzTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGFkIHZpeCBmdWlzc2V0IGFkaWNpdCBsb2JvcnRpc0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBhZCB2aXggZnVpc3NldCBhZGljaXQgbG9ib3J0aXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tYnRuLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYWluLWJ0blwiPmxlYXJuIG1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29sdW1uLW9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLTAyLnBuZ1wiIGFsdD1cImltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJoZWFkaW5nLTZcIj5kZW50YWw8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0ICBhbWV0LCBhZCB2aXggZnVpc3NldCBhZGljaXQgbG9ib3J0aXMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLTAxLnBuZ1wiIGFsdD1cImltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJoZWFkaW5nLTZcIj5jYXJkaW92YXNjdWxhcjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgIGFtZXQsIGFkIHZpeCBmdWlzc2V0IGFkaWNpdCBsb2JvcnRpcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tMDMucG5nXCIgYWx0PVwiaW1nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImhlYWRpbmctNlwiPm5ldXJvbG9neTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgIGFtZXQsIGFkIHZpeCBmdWlzc2V0IGFkaWNpdCBsb2JvcnRpcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tMDQucG5nXCIgYWx0PVwiaW1nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImhlYWRpbmctNlwiPm9waHRhbG1vbG9ndWU8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0ICBhbWV0LCBhZCB2aXggZnVpc3NldCBhZGljaXQgbG9ib3J0aXMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+ICovfVxyXG5cclxuXHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=