webpackHotUpdate_N_E("pages/provider",{

/***/ "./pages/provider/index.js":
/*!*********************************!*\
  !*** ./pages/provider/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Provider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _s = $RefreshSig$();



var Mainlayout = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../../layout/mainlayout */ "./layout/mainlayout/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../layout/mainlayout */ "./layout/mainlayout/index.js")];
    },
    modules: ['../../layout/mainlayout']
  }
});
_c2 = Mainlayout;


function Provider() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(88),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle(value) {
    return setIsOpen(value === isOpen ? 99 : value);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Medexos"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway:400,300,500,700,900",
        rel: "stylesheet",
        type: "text/css"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        href: "https://fonts.googleapis.com/css?family=Varela+Round",
        rel: "stylesheet",
        type: "text/css"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Mainlayout, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "service-page",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          "class": "service-img  bg-wight",
          style: {
            backgroundImage: "url(/static/img/provider-service.jpeg)"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              children: "Provider Services"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
            onClick: function onClick() {
              return toggle(4);
            },
            className: "d-flex justify-content-between",
            style: {
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              children: "Revenue Cycle Management (RCM)"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: isOpen === 4 ? 'rotate' : 'normal',
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/static/img/arrow-down.png",
                style: {
                  width: '40px'
                }
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
            isOpen: isOpen === 4,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Our end-to-end service provides comprehensive and unmatchable results by customizing the clients unique requirements from payor credentialing to complete billing at a short turn around time."
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "We follow industry-standard key performance metrics to measure success and integrate best practices so that you get the value of our proven experience and expertise."
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "We have qualified denial management resources who can work on any Practice Management System and understand how to quickly and correctly analyze account history, appeal denied claims, and get timely turnaround to recover on and close out A/R."
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Our team has expertise in working on various medical billing applications. We are equipped with operational excellence to take your billing operations  forward, whether you are a multi-specialty group or a solo practice."
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "We create solutions to provide cost-effective outcomes driving Return on Investments (ROI)."
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "service-images",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: "/static/img/revenue-cycle.jpeg"
                  })
                })
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
            onClick: function onClick() {
              return toggle(2);
            },
            className: "d-flex justify-content-between",
            style: {
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              children: "Revenue Cycle Management (RCM)"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: isOpen === 2 ? 'rotate' : 'normal',
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/static/img/arrow-down.png",
                style: {
                  width: '40px'
                }
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
            isOpen: isOpen === 2,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "service-images",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: "/static/img/health-infor-management.jpeg"
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "col-sm-6",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                  children: "Health information  Management (HIM)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "We have a pool of Certified Professional Coders (CPC) from AAPC and AHIMA who perform and give optimum quality with a normal TAT of 2 business days"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Our coders are proficient in working with all the latest coverage policies such as Medicare, Medicaid, Workers\u2019 Compensation, and all other commercial insurances (professional and facility services)"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Our coders are trained and experienced in coding to work on all the medical specialties, services, and the modifiers depending upon the procedures"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Before submitting your medical bills (with ICD-10 codes or CPT codes) within the deadline, we conduct  audits to  ensure that the accuracy of the codes are met"
                  })]
                })]
              })]
            })
          })]
        })]
      })
    })]
  });
}

_s(Provider, "/YuThMQKRddj6vFuB3WM1Pm5H0Q=");

_c3 = Provider;

var _c, _c2, _c3;

$RefreshReg$(_c, "Mainlayout$dynamic");
$RefreshReg$(_c2, "Mainlayout");
$RefreshReg$(_c3, "Provider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvdmlkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiTWFpbmxheW91dCIsImR5bmFtaWMiLCJQcm92aWRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwidmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjdXJzb3IiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sNklBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDZEQUFkO0FBQUE7QUFBQSxjQUFjLHlCQUFkO0FBQUE7QUFBQSxFQUExQjtNQUFNRCxVO0FBQ047QUFDQTtBQUVlLFNBQVNFLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFFSEMsc0RBQVEsQ0FBQyxFQUFELENBRkw7QUFBQSxNQUV4QkMsTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0I7O0FBRy9CLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxXQUFXRixTQUFTLENBQUNFLEtBQUssS0FBS0gsTUFBVixHQUFtQixFQUFuQixHQUF3QkcsS0FBekIsQ0FBcEI7QUFBQSxHQUFmOztBQUdBLHNCQUNJO0FBQUEsNEJBQ0ksK0RBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUEsUUFESixlQUdJO0FBQU0sWUFBSSxFQUFDLHFFQUFYO0FBQWlGLFdBQUcsRUFBQyxZQUFyRjtBQUFrRyxZQUFJLEVBQUM7QUFBdkcsUUFISixlQUlJO0FBQU0sWUFBSSxFQUFDLHNEQUFYO0FBQWtFLFdBQUcsRUFBQyxZQUF0RTtBQUFtRixZQUFJLEVBQUM7QUFBeEYsUUFKSixlQUtJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCLFFBTEosZUFNSTtBQUFNLFlBQUksRUFBQyx1R0FBWDtBQUFtSCxXQUFHLEVBQUM7QUFBdkgsUUFOSjtBQUFBLE1BREosZUFTSSw4REFBQyxVQUFEO0FBQUEsNkJBRUk7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FJSTtBQUFLLG1CQUFNLHVCQUFYO0FBQW1DLGVBQUssRUFBRTtBQUFFQywyQkFBZSxFQUFFO0FBQW5CLFdBQTFDO0FBQUEsaUNBRUk7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFESjtBQUZKLFVBSkosZUFZSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUlJO0FBQUksbUJBQU8sRUFBRTtBQUFBLHFCQUFNRixNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsYUFBYjtBQUE4QixxQkFBUyxFQUFDLGdDQUF4QztBQUF5RSxpQkFBSyxFQUFFO0FBQUVHLG9CQUFNLEVBQUU7QUFBVixhQUFoRjtBQUFBLG9DQUNJO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSyx1QkFBUyxFQUFFTCxNQUFNLEtBQUssQ0FBWCxHQUFlLFFBQWYsR0FBMEIsUUFBMUM7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUMsNEJBQVQ7QUFBc0MscUJBQUssRUFBRTtBQUFFTSx1QkFBSyxFQUFFO0FBQVQ7QUFBN0M7QUFESixjQUpKO0FBQUEsWUFKSixlQVlJLDhEQUFDLG1EQUFEO0FBQVUsa0JBQU0sRUFBRU4sTUFBTSxLQUFLLENBQTdCO0FBQUEsbUNBRUk7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLFVBQWY7QUFBQSx1Q0FHSTtBQUFBLDBDQUNJO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQSxvQkFGSixlQUtJO0FBQUE7QUFBQSxvQkFMSixlQU1JO0FBQUE7QUFBQSxvQkFOSixlQU9JO0FBQUE7QUFBQSxvQkFQSjtBQUFBO0FBSEosZ0JBREosZUFjSTtBQUFLLHlCQUFTLEVBQUMsVUFBZjtBQUFBLHVDQUVJO0FBQUssMkJBQVMsRUFBQyxnQkFBZjtBQUFBLHlDQUNJO0FBQUssdUJBQUcsRUFBQztBQUFUO0FBREo7QUFGSixnQkFkSjtBQUFBO0FBRkosWUFaSixlQXdDSTtBQUFJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUUsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLGFBQWI7QUFBOEIscUJBQVMsRUFBQyxnQ0FBeEM7QUFBeUUsaUJBQUssRUFBRTtBQUFFRyxvQkFBTSxFQUFFO0FBQVYsYUFBaEY7QUFBQSxvQ0FDSTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUssdUJBQVMsRUFBRUwsTUFBTSxLQUFLLENBQVgsR0FBZSxRQUFmLEdBQTBCLFFBQTFDO0FBQUEscUNBQ0k7QUFBSyxtQkFBRyxFQUFDLDRCQUFUO0FBQXNDLHFCQUFLLEVBQUU7QUFBRU0sdUJBQUssRUFBRTtBQUFUO0FBQTdDO0FBREosY0FKSjtBQUFBLFlBeENKLGVBZ0RJLDhEQUFDLG1EQUFEO0FBQVUsa0JBQU0sRUFBRU4sTUFBTSxLQUFLLENBQTdCO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEsc0NBRUk7QUFBSyx5QkFBUyxFQUFDLFVBQWY7QUFBQSx1Q0FDSTtBQUFLLDJCQUFTLEVBQUMsZ0JBQWY7QUFBQSx5Q0FDSTtBQUFLLHVCQUFHLEVBQUM7QUFBVDtBQURKO0FBREosZ0JBRkosZUFTSTtBQUFLLHlCQUFTLEVBQUMsVUFBZjtBQUFBLHdDQUNJO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUEsMENBQ0k7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQTtBQUFBLG9CQUhKLGVBSUk7QUFBQTtBQUFBLG9CQUpKO0FBQUEsa0JBRko7QUFBQSxnQkFUSjtBQUFBO0FBREosWUFoREo7QUFBQSxVQVpKO0FBQUE7QUFGSixNQVRKO0FBQUEsSUFESjtBQTBHSDs7R0FoSHVCRixROztNQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb3ZpZGVyLmM0NGIwNWU3NTNjNTRiODc5ZmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuY29uc3QgTWFpbmxheW91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9sYXlvdXQvbWFpbmxheW91dCcpKVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm92aWRlcigpIHtcclxuXHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoODgpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gKHZhbHVlKSA9PiBzZXRJc09wZW4odmFsdWUgPT09IGlzT3BlbiA/IDk5IDogdmFsdWUpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk1lZGV4b3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsMzAwLDUwMCw3MDAsOTAwJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WYXJlbGErUm91bmRcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNYWlubGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1wYWdlXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2UtaW1nICBiZy13aWdodFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3N0YXRpYy9pbWcvcHJvdmlkZXItc2VydmljZS5qcGVnKVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzcz1cInNlcnZpY2UtaW1nXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb3ZpZGVyIFNlcnZpY2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgb25DbGljaz17KCkgPT4gdG9nZ2xlKDQpfSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJldmVudWUgQ3ljbGUgTWFuYWdlbWVudCAoUkNNKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNPcGVuID09PSA0ID8gJ3JvdGF0ZScgOiAnbm9ybWFsJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9hcnJvdy1kb3duLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW4gPT09IDR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDQ+UmV2ZW51ZSBDeWNsZSBNYW5hZ2VtZW50IChSQ00pPC9oND4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PdXIgZW5kLXRvLWVuZCBzZXJ2aWNlIHByb3ZpZGVzIGNvbXByZWhlbnNpdmUgYW5kIHVubWF0Y2hhYmxlIHJlc3VsdHMgYnkgY3VzdG9taXppbmcgdGhlIGNsaWVudHMgdW5pcXVlIHJlcXVpcmVtZW50cyBmcm9tIHBheW9yIGNyZWRlbnRpYWxpbmcgdG8gY29tcGxldGUgYmlsbGluZyBhdCBhIHNob3J0IHR1cm4gYXJvdW5kIHRpbWUuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBmb2xsb3cgaW5kdXN0cnktc3RhbmRhcmQga2V5IHBlcmZvcm1hbmNlIG1ldHJpY3MgdG8gbWVhc3VyZSBzdWNjZXNzIGFuZCBpbnRlZ3JhdGUgYmVzdCBwcmFjdGljZXMgc28gdGhhdCB5b3UgZ2V0IHRoZSB2YWx1ZSBvZiBvdXIgcHJvdmVuIGV4cGVyaWVuY2UgYW5kIGV4cGVydGlzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZSBoYXZlIHF1YWxpZmllZCBkZW5pYWwgbWFuYWdlbWVudCByZXNvdXJjZXMgd2hvIGNhbiB3b3JrIG9uIGFueSBQcmFjdGljZSBNYW5hZ2VtZW50IFN5c3RlbSBhbmQgdW5kZXJzdGFuZCBob3cgdG8gcXVpY2tseSBhbmQgY29ycmVjdGx5IGFuYWx5emUgYWNjb3VudCBoaXN0b3J5LCBhcHBlYWwgZGVuaWVkIGNsYWltcywgYW5kIGdldCB0aW1lbHkgdHVybmFyb3VuZCB0byByZWNvdmVyIG9uIGFuZCBjbG9zZSBvdXQgQS9SLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3VyIHRlYW0gaGFzIGV4cGVydGlzZSBpbiB3b3JraW5nIG9uIHZhcmlvdXMgbWVkaWNhbCBiaWxsaW5nIGFwcGxpY2F0aW9ucy4gV2UgYXJlIGVxdWlwcGVkIHdpdGggb3BlcmF0aW9uYWwgZXhjZWxsZW5jZSB0byB0YWtlIHlvdXIgYmlsbGluZyBvcGVyYXRpb25zICBmb3J3YXJkLCB3aGV0aGVyIHlvdSBhcmUgYSBtdWx0aS1zcGVjaWFsdHkgZ3JvdXAgb3IgYSBzb2xvIHByYWN0aWNlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2UgY3JlYXRlIHNvbHV0aW9ucyB0byBwcm92aWRlIGNvc3QtZWZmZWN0aXZlIG91dGNvbWVzIGRyaXZpbmcgUmV0dXJuIG9uIEludmVzdG1lbnRzIChST0kpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9yZXZlbnVlLWN5Y2xlLmpwZWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2ltYWdlcy9uZXcvUkNNMi5qcGdcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IHRvZ2dsZSgyKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXZlbnVlIEN5Y2xlIE1hbmFnZW1lbnQgKFJDTSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzT3BlbiA9PT0gMiA/ICdyb3RhdGUnIDogJ25vcm1hbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5wbmdcIiBzdHlsZT17eyB3aWR0aDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVuID09PSAyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pbWFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvaGVhbHRoLWluZm9yLW1hbmFnZW1lbnQuanBlZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIvaW1hZ2VzL25ldy9Qcm92aWRlci5qcGdcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkhlYWx0aCBpbmZvcm1hdGlvbiAgTWFuYWdlbWVudCAoSElNKTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZSBoYXZlIGEgcG9vbCBvZiBDZXJ0aWZpZWQgUHJvZmVzc2lvbmFsIENvZGVycyAoQ1BDKSBmcm9tIEFBUEMgYW5kIEFISU1BIHdobyBwZXJmb3JtIGFuZCBnaXZlIG9wdGltdW0gcXVhbGl0eSB3aXRoIGEgbm9ybWFsIFRBVCBvZiAyIGJ1c2luZXNzIGRheXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk91ciBjb2RlcnMgYXJlIHByb2ZpY2llbnQgaW4gd29ya2luZyB3aXRoIGFsbCB0aGUgbGF0ZXN0IGNvdmVyYWdlIHBvbGljaWVzIHN1Y2ggYXMgTWVkaWNhcmUsIE1lZGljYWlkLCBXb3JrZXJz4oCZIENvbXBlbnNhdGlvbiwgYW5kIGFsbCBvdGhlciBjb21tZXJjaWFsIGluc3VyYW5jZXMgKHByb2Zlc3Npb25hbCBhbmQgZmFjaWxpdHkgc2VydmljZXMpPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PdXIgY29kZXJzIGFyZSB0cmFpbmVkIGFuZCBleHBlcmllbmNlZCBpbiBjb2RpbmcgdG8gd29yayBvbiBhbGwgdGhlIG1lZGljYWwgc3BlY2lhbHRpZXMsIHNlcnZpY2VzLCBhbmQgdGhlIG1vZGlmaWVycyBkZXBlbmRpbmcgdXBvbiB0aGUgcHJvY2VkdXJlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QmVmb3JlIHN1Ym1pdHRpbmcgeW91ciBtZWRpY2FsIGJpbGxzICh3aXRoIElDRC0xMCBjb2RlcyBvciBDUFQgY29kZXMpIHdpdGhpbiB0aGUgZGVhZGxpbmUsIHdlIGNvbmR1Y3QgIGF1ZGl0cyB0byBcdGVuc3VyZSB0aGF0IHRoZSBhY2N1cmFjeSBvZiB0aGUgY29kZXMgYXJlIG1ldDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTWFpbmxheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9