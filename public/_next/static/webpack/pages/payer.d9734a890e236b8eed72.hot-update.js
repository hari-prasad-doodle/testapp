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
              return toggle(4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF5ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiTWFpbmxheW91dCIsImR5bmFtaWMiLCJQYXllciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwidmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjdXJzb3IiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sNklBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDZEQUFkO0FBQUE7QUFBQSxjQUFjLHlCQUFkO0FBQUE7QUFBQSxFQUExQjtNQUFNRCxVO0FBQ047QUFDQTtBQUVlLFNBQVNFLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVyQkMsTUFGcUI7QUFBQSxNQUViQyxTQUZhOztBQUc1QixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsV0FBV0YsU0FBUyxDQUFDRSxLQUFLLEtBQUtILE1BQVYsR0FBbUIsRUFBbkIsR0FBd0JHLEtBQXpCLENBQXBCO0FBQUEsR0FBZjs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLCtEQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBLFFBREosZUFHSTtBQUFNLFlBQUksRUFBQyxxRUFBWDtBQUFpRixXQUFHLEVBQUMsWUFBckY7QUFBa0csWUFBSSxFQUFDO0FBQXZHLFFBSEosZUFJSTtBQUFNLFlBQUksRUFBQyxzREFBWDtBQUFrRSxXQUFHLEVBQUMsWUFBdEU7QUFBbUYsWUFBSSxFQUFDO0FBQXhGLFFBSkosZUFLSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QixRQUxKLGVBTUk7QUFBTSxZQUFJLEVBQUMsdUdBQVg7QUFBbUgsV0FBRyxF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R0FBMEIsUUFBMUM7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUMsNEJBQVQ7QUFBc0MscUJBQUssRUFBRTtBQUFFTSx1QkFBSyxFQUFFO0FBQVQ7QUFBN0M7QUFESixjQUpKO0FBQUEsWUFGSixlQVdJLDhEQUFDLG1EQUFEO0FBQVUsa0JBQU0sRUFBRU4sTUFBTSxLQUFLLENBQTdCO0FBQUEsbUNBR0k7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLFVBQWY7QUFBQSx1Q0FFSTtBQUFBLDBDQUNJO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUE7QUFBQSxvQkFISixlQUlJO0FBQUE7QUFBQSxvQkFKSixlQUtJO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBRkosZ0JBREosZUFZSTtBQUFLLHlCQUFTLEVBQUMsVUFBZjtBQUFBLHVDQUVJO0FBQUssMkJBQVMsRUFBQyxnQkFBZjtBQUFBLHlDQUNJO0FBQUssdUJBQUcsRUFBQztBQUFUO0FBREo7QUFGSixnQkFaSjtBQUFBO0FBSEosWUFYSjtBQUFBLFVBMUlKO0FBQUE7QUFGSixNQVRKO0FBQUEsSUFESjtBQWtNSDs7R0F2TXVCRixLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BheWVyLmQ5NzM0YTg5MGUyMzZiOGVlZDcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuY29uc3QgTWFpbmxheW91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9sYXlvdXQvbWFpbmxheW91dCcpKVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXllcigpIHtcclxuXHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoODgpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gKHZhbHVlKSA9PiBzZXRJc09wZW4odmFsdWUgPT09IGlzT3BlbiA/IDk5IDogdmFsdWUgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk1lZGV4b3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsMzAwLDUwMCw3MDAsOTAwJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WYXJlbGErUm91bmRcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNYWlubGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1wYWdlXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VydmljZS1pbWcgYmctd2lnaHRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9zdGF0aWMvaW1nL3BheWVyLXNlcnZpY2UuanBlZylcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJzZXJ2aWNlLWltZ1wiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5QYXllciBTZXJ2aWNlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiB0b2dnbGUoNCl9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvc3BlY3RpdmUgUmlzayBSZXZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzT3BlbiA9PT0gNCA/ICdyb3RhdGUnIDogJ25vcm1hbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5wbmdcIiBzdHlsZT17eyB3aWR0aDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVuID09PSA0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01IHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmlzayBBZGp1c3RtZW50IFNlcnZpY2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3VyIHBheWVyIHNvbHV0aW9ucyBhbGxvdyBjbGllbnRzIHRvIGltcHJvdmUgdGhlaXIgcmlzayBhZGp1c3RtZW50IGFuZCBxdWFsaXR5IHByb2dyYW1zIGJ5IGdpdmluZyB0aGVtIGEgY29tcGxldGUgcGxhdGZvcm0gdGhhdCBnaXZlcyB0aGVtIGFjdGlvbmFibGUgZGF0YSBhbmQgc29sdXRpb25zIHRvIGFjdCBvbiB0aGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PdXIgMzYwIGRlZ3JlZSBsb29rIGF0IHRoZSBkYXRhIGFuZCBpbi1kZXB0aCBldmFsdWF0aW9ucyBtYWtlcyBzdXJlIHRoYXQgeW91IGdldCB0aGUgcmlnaHQgUkFGIHNjb3JlIGFuZCBoZWxwIHlvdSBtYXhpbWl6ZSB0aGUgaW1wYWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pbWFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcmlzay1tYW5hZ2VtZW50LmpwZWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IHRvZ2dsZSgzKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9zcGVjdGl2ZSBSaXNrIFJldmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNPcGVuID09PSAzID8gJ3JvdGF0ZScgOiAnbm9ybWFsJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9hcnJvdy1kb3duLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW4gPT09IDN9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTUgcHQtNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pbWFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcHJvc3BlY3RpdmUuanBlZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDQ+UHJvc3BlY3RpdmUgUmlzayBSZXZpZXc8L2g0PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNhcHR1cmUgYWxsIHJpc2sgYWRqdXN0ZWQgZGlhZ25vc2VzIGFuZCBlbnN1cmUgbWVtYmVycyBhcmUgYXBwcm9wcmlhdGVseSByaXNrLWFkanVzdGVkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZSBvZmZlciBhIGZ1bGwtc2VydmljZSBIQ0MgY29kaW5nIHNvbHV0aW9uIGZvciBhbGwgcmlzayBhZGp1c3RtZW50IGNvZGluZzogQUNBLUNvbW1lcmNpYWwsIE1lZGljYXJlIEFkdmFudGFnZSwgYW5kIE1hbmFnZWQgTWVkaWNhaWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk91ciBjb21wbGlhbmNlLWJhc2VkIGFwcHJvYWNoIHRvIG1lZGljYWwgcmVjb3JkIGNvZGluZyBpcyBkZWxpdmVyZWQgYnkgQUFQQyBvciBBSElNQSBjZXJ0aWZpZWQgY29kZXJzIHdobyBjYXB0dXJlIG9yIHN1Z2dlc3QgZGVsZXRpb24gb2YgcmlzayBhZGp1c3RpbmcgZGlhZ25vc3RpYyBjb2RlcyBhbmQgY2FuIGFsc28gcGVyZm9ybSBkYXRhIHZhbGlkYXRpb24gYXVkaXRzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IHRvZ2dsZSgyKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25jdXJyZW50IFJpc2sgUmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc09wZW4gPT09IDMgPyAncm90YXRlJyA6ICdub3JtYWwnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Fycm93LWRvd24ucG5nXCIgc3R5bGU9e3sgd2lkdGg6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW4gPT09IDJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTUgcHQtNVwiPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoND5Db25jdXJyZW50IFJpc2sgUmV2aWV3PC9oND4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qcm92aWRlIGltbWVkaWF0ZSByZXZpZXcgb2YgdGhlIHJlY29yZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmV2aWV3IHJpc2sgYWRqdXN0bWVudCBjb25kaXRpb25zIGF0IHRpbWUgb2YgdmlzaXQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlYWwtdGltZSBxdWVyeSBmb3IgcHJvdmlkZXIgY2xhcmlmaWNhdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5SZXRyb3NwZWN0aXZlIFJpc2sgUmV2aWV3PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJldmlld2luZyBhdCBsZWFzdCBhIDUgeWVhciBiYWNrIGRhdGVkIHJlY29yZHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNsYWltcyBkYXRhIHZhbGlkYXRpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklkZW50aWZ5IG9wcG9ydHVuaXRpZXMgZm9yIHByb3ZpZGVyIGVkdWNhdGlvbi90cmFpbmluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9jb25jdXJyZW50LWFuZC1yZXRyb3BlY3RpdmUuanBlZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VydmljZS1pbWcgYmctd2lnaHRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9zdGF0aWMvaW1nL3ZhbHVlLWJhc2VkLXNlcnZpY2UtY3JvcC5qcGVnKVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzcz1cInNlcnZpY2UtaW1nXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5QYXllciBTZXJ2aWNlcyDigJMgVmFsdWUgQmFzZWQgUHJvZ3JhbXM8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiB0b2dnbGUoMSl9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSEVESVMgYW5kIE1JUFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzT3BlbiA9PT0gMSA/ICdyb3RhdGUnIDogJ25vcm1hbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvYXJyb3ctZG93bi5wbmdcIiBzdHlsZT17eyB3aWR0aDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3BlbiA9PT0gMX0+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZSBwcm92aWRlIGEgcmVhbC10aW1lIGxvb2sgYXQgeW91ciBwZXJmb3JtYW5jZSBhbmQgYWxsb3dpbmcgcGF5ZXJzIHRvIGltcHJvdmUgY2FyZSBkZWxpdmVyeSwgcXVhbGl0eSwgYW5kIG1lbWJlciBzYXRpc2ZhY3Rpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJlc3QgRU1SIHJlY29yZCBhcHByb2FjaCB0byBmaW5kIHRoZSByaWdodCBtZWFzdXJlcyBpbiB0aGUgcmlnaHQgcGxhY2U8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNvcGhpc3RpY2F0ZWQgd29ya2Zsb3cgZm9yIGV4dGVybmFsIG92ZXJyZWFkcyBhbmQgTVJSViBhdWRpdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1haW50YWluaW5nIGNvc3QtZWZmZWN0aXZlIHByYWN0aWNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3VyIEdhcCBBbmFseXNpcyBzaG93cyB0aGUgcHJhY3RpY2UgcGVyZm9ybWFuY2UgYW5kIHRoZSBrZXkgYXJlYXMgdG8gYmUgaW1wcm92ZWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2hlZGlzLWFuZC1taXBzLTIuanBlZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L01haW5sYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==