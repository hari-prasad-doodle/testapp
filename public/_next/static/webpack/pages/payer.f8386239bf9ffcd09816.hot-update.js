webpackHotUpdate_N_E("pages/payer",{

/***/ "./pages/payer/index.js":
/*!******************************!*\
  !*** ./pages/payer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payer; });
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


function Payer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(88),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle(value) {
    return setIsOpen(value);
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
          "class": "service-img bg-wight",
          style: {
            backgroundImage: "url(/static/img/payer-service.jpeg)"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              children: "Payer Services"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
            onClick: function onClick() {
              return toggle(3);
            },
            className: "d-flex justify-content-between",
            style: {
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              children: "Prospective Risk Review"
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
              className: "row mb-5 pt-5",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "col-sm-6",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                  children: "Risk Adjustment Service"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Our payer solutions allow clients to improve their risk adjustment and quality programs by giving them a complete platform that gives them actionable data and solutions to act on them"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Our 360 degree look at the data and in-depth evaluations makes sure that you get the right RAF score and help you maximize the impact"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "service-images",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: "/static/img/risk-management.jpeg"
                  })
                })
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
            onClick: function onClick() {
              return toggle(3);
            },
            className: "d-flex justify-content-between",
            style: {
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              children: "Prospective Risk Review"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: isOpen === 3 ? 'rotate' : 'normal',
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/static/img/arrow-down.png",
                style: {
                  width: '40px'
                }
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
            isOpen: isOpen === 3,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "row mb-5 pt-5",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "service-images",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: "/static/img/prospective.jpeg"
                  })
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Capture all risk adjusted diagnoses and ensure members are appropriately risk-adjusted"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "We offer a full-service HCC coding solution for all risk adjustment coding: ACA-Commercial, Medicare Advantage, and Managed Medicaid"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Our compliance-based approach to medical record coding is delivered by AAPC or AHIMA certified coders who capture or suggest deletion of risk adjusting diagnostic codes and can also perform data validation audits"
                  })]
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
              children: "Concurrent Risk Review"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: isOpen === 3 ? 'rotate' : 'normal',
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
              className: "row mb-5 pt-5",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "col-sm-6",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Provide immediate review of the record"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Review risk adjustment conditions at time of visit"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Real-time query for provider clarification"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                  children: "Retrospective Risk Review"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Reviewing at least a 5 year back dated records"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Claims data validation"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Identify opportunities for provider education/training"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "service-images",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: "/static/img/concurrent-and-retropective.jpeg"
                  })
                })
              })]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          "class": "service-img bg-wight",
          style: {
            backgroundImage: "url(/static/img/value-based-service-crop.jpeg)"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
              children: "Payer Services \u2013 Value Based Programs"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
            onClick: function onClick() {
              return toggle(1);
            },
            className: "d-flex justify-content-between",
            style: {
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              children: "HEDIS and MIPS"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: isOpen === 1 ? 'rotate' : 'normal',
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                src: "/static/img/arrow-down.png",
                style: {
                  width: '40px'
                }
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
            isOpen: isOpen === 1,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "We provide a real-time look at your performance and allowing payers to improve care delivery, quality, and member satisfaction"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Best EMR record approach to find the right measures in the right place"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Sophisticated workflow for external overreads and MRRV audits"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Maintaining cost-effective practices"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                    children: "Our Gap Analysis shows the practice performance and the key areas to be improved"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "service-images",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    src: "/static/img/hedis-and-mips-2.jpeg"
                  })
                })
              })]
            })
          })]
        })]
      })
    })]
  });
}

_s(Payer, "/YuThMQKRddj6vFuB3WM1Pm5H0Q=");

_c3 = Payer;

var _c, _c2, _c3;

$RefreshReg$(_c, "Mainlayout$dynamic");
$RefreshReg$(_c2, "Mainlayout");
$RefreshReg$(_c3, "Payer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF5ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiTWFpbmxheW91dCIsImR5bmFtaWMiLCJQYXllciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwidmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjdXJzb3IiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sNklBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDZEQUFkO0FBQUE7QUFBQSxjQUFjLHlCQUFkO0FBQUE7QUFBQSxFQUExQjtNQUFNRCxVO0FBQ047QUFDQTtBQUVlLFNBQVNFLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVyQkMsTUFGcUI7QUFBQSxNQUViQyxTQUZhOztBQUc1QixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsV0FBV0YsU0FBUyxDQUFDRSxLQUFELENBQXBCO0FBQUEsR0FBZjs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLCtEQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBLFFBREosZUFHSTtBQUFNLFlBQUksRUFBQyxxRUFBWDtBQUFpRixXQUFHLEVBQUMsWUFBckY7QUFBa0csWUFBSSxFQUFDO0FBQXZHLFFBSEosZUFJSTtBQUFNLFlBQUksRUFBQyxzREFBWDtBQUFrRSxXQUFHLEVBQUMsWUFBdEU7QUFBbUYsWUFBSSxFQUFDO0FBQXhGLFFBSkosZUFLSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QixRQUxKLGVBTUk7QUFBTSxZQUFJLEVBQUMsdUdBQVg7QUFBbUgsV0FBRyxFQUFDO0FBQXZILFFBTko7QUFBQSxNQURKLGVBU0ksOERBQUMs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QUMsNEJBQVQ7QUFBc0MscUJBQUssRUFBRTtBQUFFTSx1QkFBSyxFQUFFO0FBQVQ7QUFBN0M7QUFESixjQUpKO0FBQUEsWUFGSixlQVdJLDhEQUFDLG1EQUFEO0FBQVUsa0JBQU0sRUFBRU4sTUFBTSxLQUFLLENBQTdCO0FBQUEsbUNBR0k7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLFVBQWY7QUFBQSx1Q0FFSTtBQUFBLDBDQUNJO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUE7QUFBQSxvQkFISixlQUlJO0FBQUE7QUFBQSxvQkFKSixlQUtJO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBRkosZ0JBREosZUFZSTtBQUFLLHlCQUFTLEVBQUMsVUFBZjtBQUFBLHVDQUVJO0FBQUssMkJBQVMsRUFBQyxnQkFBZjtBQUFBLHlDQUNJO0FBQUssdUJBQUcsRUFBQztBQUFUO0FBREo7QUFGSixnQkFaSjtBQUFBO0FBSEosWUFYSjtBQUFBLFVBMUlKO0FBQUE7QUFGSixNQVRKO0FBQUEsSUFESjtBQWtNSDs7R0F2TXVCRixLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheWVyLmY4Mzg2MjM5YmY5ZmZjZDA5ODE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuY29uc3QgTWFpbmxheW91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9sYXlvdXQvbWFpbmxheW91dCcpKVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXllcigpIHtcclxuXHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoODgpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gKHZhbHVlKSA9PiBzZXRJc09wZW4odmFsdWUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TWVkZXhvczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCwzMDAsNTAwLDcwMCw5MDAnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVZhcmVsYStSb3VuZFwiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE1haW5sYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXBhZ2VcIj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlLWltZyBiZy13aWdodFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3N0YXRpYy9pbWcvcGF5ZXItc2VydmljZS5qcGVnKVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzcz1cInNlcnZpY2UtaW1nXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlBheWVyIFNlcnZpY2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IHRvZ2dsZSgzKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9zcGVjdGl2ZSBSaXNrIFJldmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNPcGVuID09PSA0ID8gJ3JvdGF0ZScgOiAnbm9ybWFsJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9hcnJvdy1kb3duLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW4gPT09IDR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTUgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5SaXNrIEFkanVzdG1lbnQgU2VydmljZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PdXIgcGF5ZXIgc29sdXRpb25zIGFsbG93IGNsaWVudHMgdG8gaW1wcm92ZSB0aGVpciByaXNrIGFkanVzdG1lbnQgYW5kIHF1YWxpdHkgcHJvZ3JhbXMgYnkgZ2l2aW5nIHRoZW0gYSBjb21wbGV0ZSBwbGF0Zm9ybSB0aGF0IGdpdmVzIHRoZW0gYWN0aW9uYWJsZSBkYXRhIGFuZCBzb2x1dGlvbnMgdG8gYWN0IG9uIHRoZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk91ciAzNjAgZGVncmVlIGxvb2sgYXQgdGhlIGRhdGEgYW5kIGluLWRlcHRoIGV2YWx1YXRpb25zIG1ha2VzIHN1cmUgdGhhdCB5b3UgZ2V0IHRoZSByaWdodCBSQUYgc2NvcmUgYW5kIGhlbHAgeW91IG1heGltaXplIHRoZSBpbXBhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9yaXNrLW1hbmFnZW1lbnQuanBlZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgb25DbGljaz17KCkgPT4gdG9nZ2xlKDMpfSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3NwZWN0aXZlIFJpc2sgUmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc09wZW4gPT09IDMgPyAncm90YXRlJyA6ICdub3JtYWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Fycm93LWRvd24ucG5nXCIgc3R5bGU9e3sgd2lkdGg6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3BlbiA9PT0gM30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNSBwdC01XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9wcm9zcGVjdGl2ZS5qcGVnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoND5Qcm9zcGVjdGl2ZSBSaXNrIFJldmlldzwvaDQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2FwdHVyZSBhbGwgcmlzayBhZGp1c3RlZCBkaWFnbm9zZXMgYW5kIGVuc3VyZSBtZW1iZXJzIGFyZSBhcHByb3ByaWF0ZWx5IHJpc2stYWRqdXN0ZWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldlIG9mZmVyIGEgZnVsbC1zZXJ2aWNlIEhDQyBjb2Rpbmcgc29sdXRpb24gZm9yIGFsbCByaXNrIGFkanVzdG1lbnQgY29kaW5nOiBBQ0EtQ29tbWVyY2lhbCwgTWVkaWNhcmUgQWR2YW50YWdlLCBhbmQgTWFuYWdlZCBNZWRpY2FpZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3VyIGNvbXBsaWFuY2UtYmFzZWQgYXBwcm9hY2ggdG8gbWVkaWNhbCByZWNvcmQgY29kaW5nIGlzIGRlbGl2ZXJlZCBieSBBQVBDIG9yIEFISU1BIGNlcnRpZmllZCBjb2RlcnMgd2hvIGNhcHR1cmUgb3Igc3VnZ2VzdCBkZWxldGlvbiBvZiByaXNrIGFkanVzdGluZyBkaWFnbm9zdGljIGNvZGVzIGFuZCBjYW4gYWxzbyBwZXJmb3JtIGRhdGEgdmFsaWRhdGlvbiBhdWRpdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgb25DbGljaz17KCkgPT4gdG9nZ2xlKDIpfSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmN1cnJlbnQgUmlzayBSZXZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzT3BlbiA9PT0gMyA/ICdyb3RhdGUnIDogJ25vcm1hbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5wbmdcIiBzdHlsZT17eyB3aWR0aDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3BlbiA9PT0gMn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNSBwdC01XCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg0PkNvbmN1cnJlbnQgUmlzayBSZXZpZXc8L2g0PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByb3ZpZGUgaW1tZWRpYXRlIHJldmlldyBvZiB0aGUgcmVjb3JkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZXZpZXcgcmlzayBhZGp1c3RtZW50IGNvbmRpdGlvbnMgYXQgdGltZSBvZiB2aXNpdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmVhbC10aW1lIHF1ZXJ5IGZvciBwcm92aWRlciBjbGFyaWZpY2F0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJldHJvc3BlY3RpdmUgUmlzayBSZXZpZXc8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmV2aWV3aW5nIGF0IGxlYXN0IGEgNSB5ZWFyIGJhY2sgZGF0ZWQgcmVjb3JkczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2xhaW1zIGRhdGEgdmFsaWRhdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SWRlbnRpZnkgb3Bwb3J0dW5pdGllcyBmb3IgcHJvdmlkZXIgZWR1Y2F0aW9uL3RyYWluaW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2NvbmN1cnJlbnQtYW5kLXJldHJvcGVjdGl2ZS5qcGVnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJ2aWNlLWltZyBiZy13aWdodFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3N0YXRpYy9pbWcvdmFsdWUtYmFzZWQtc2VydmljZS1jcm9wLmpwZWcpXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwic2VydmljZS1pbWdcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlBheWVyIFNlcnZpY2VzIOKAkyBWYWx1ZSBCYXNlZCBQcm9ncmFtczwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IHRvZ2dsZSgxKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIRURJUyBhbmQgTUlQU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNPcGVuID09PSAxID8gJ3JvdGF0ZScgOiAnbm9ybWFsJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9hcnJvdy1kb3duLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVuID09PSAxfT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldlIHByb3ZpZGUgYSByZWFsLXRpbWUgbG9vayBhdCB5b3VyIHBlcmZvcm1hbmNlIGFuZCBhbGxvd2luZyBwYXllcnMgdG8gaW1wcm92ZSBjYXJlIGRlbGl2ZXJ5LCBxdWFsaXR5LCBhbmQgbWVtYmVyIHNhdGlzZmFjdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QmVzdCBFTVIgcmVjb3JkIGFwcHJvYWNoIHRvIGZpbmQgdGhlIHJpZ2h0IG1lYXN1cmVzIGluIHRoZSByaWdodCBwbGFjZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U29waGlzdGljYXRlZCB3b3JrZmxvdyBmb3IgZXh0ZXJuYWwgb3ZlcnJlYWRzIGFuZCBNUlJWIGF1ZGl0czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWFpbnRhaW5pbmcgY29zdC1lZmZlY3RpdmUgcHJhY3RpY2VzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PdXIgR2FwIEFuYWx5c2lzIHNob3dzIHRoZSBwcmFjdGljZSBwZXJmb3JtYW5jZSBhbmQgdGhlIGtleSBhcmVhcyB0byBiZSBpbXByb3ZlZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pbWFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvaGVkaXMtYW5kLW1pcHMtMi5qcGVnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTWFpbmxheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9