"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ BlogPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n// import Head from 'next/head';\n\n\nvar __N_SSG = true;\nfunction BlogPage(param) {\n    var allPostsData = param.allPostsData;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"heder\"\n                }, void 0, false, {\n                    fileName: \"/Users/stan/Documents/Personal/Kompweb/Frontend/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                allPostsData.map(function(param) {\n                    var id = param.id, date = param.date, title = param.title;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/posts/\".concat(id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/stan/Documents/Personal/Kompweb/Frontend/pages/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stan/Documents/Personal/Kompweb/Frontend/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/stan/Documents/Personal/Kompweb/Frontend/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Date, {\n                                    dateString: date\n                                }, void 0, false, {\n                                    fileName: \"/Users/stan/Documents/Personal/Kompweb/Frontend/pages/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stan/Documents/Personal/Kompweb/Frontend/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/stan/Documents/Personal/Kompweb/Frontend/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stan/Documents/Personal/Kompweb/Frontend/pages/index.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_c = BlogPage;\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFDaEM7QUFBNkI7O0FBb0JkLFNBQVNDLFFBQVEsQ0FBQyxLQUFnQixFQUFFO1FBQWxCLFlBQWMsR0FBZCxLQUFnQixDQUFkQyxZQUFZOztJQUM3QyxxQkFDRTtrQkFHRSw0RUFBQ0MsS0FBRzs7OEJBTUYsOERBQUNDLElBQUU7OEJBQUMsT0FBSzs7Ozs7d0JBQUs7Z0JBS2JGLFlBQVksQ0FBQ0csR0FBRyxDQUFDO3dCQUFHQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLEtBQUssU0FBTEEsS0FBSzt5Q0FDbEMsOERBQUNDLElBQUU7OzBDQUNELDhEQUFDVCxrREFBSTtnQ0FBQ1UsSUFBSSxFQUFFLFNBQVEsQ0FBSyxPQUFISixFQUFFLENBQUU7MENBQ3hCLDRFQUFDSyxHQUFDOzhDQUFFSCxLQUFLOzs7Ozt5Q0FBSzs7Ozs7cUNBQ1Q7MENBQ1AsOERBQUNJLElBQUU7Ozs7cUNBQUc7MENBQ04sOERBQUNDLE9BQUs7MENBQ0osNEVBQUNDLElBQUk7b0NBQUNDLFVBQVUsRUFBRVIsSUFBSTs7Ozs7eUNBQUk7Ozs7O3FDQUNwQjs7dUJBUERELEVBQUU7Ozs7NkJBUU47aUJBQ04sQ0FBQzs7Ozs7O2dCQU9FO3FCQUdMLENBQ0g7QUFDSixDQUFDO0FBdEN1QkwsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbi8vIGltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcbi8vIGltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSc7XG4vLyBpbXBvcnQgTmF2YmFyIGZyb20gJy4uL3NyYy9jb21tb24vTmF2YmFyJztcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi9Ib21lJztcbi8vIGltcG9ydCBOYW1lcyBmcm9tICcuL05hbWVzJztcbi8vIGltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0JztcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL3NyYy9saWIvcG9zdHMnO1xuLy8gaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9Qcm9qZWN0c1wiO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9MaWtlQnV0dG9uXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YSxcbiAgICB9LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1BhZ2UoeyBhbGxQb3N0c0RhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPE5hdmJhciAvPiAqL31cbiAgICAgIHsvKiA8TGF5b3V0IGhvbWU+ICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIDxIZWFkPiAqL31cbiAgICAgICAgey8qIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+ICovfVxuICAgICAgICB7LyogPC9IZWFkPiAqL31cbiAgICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PiAqL31cbiAgICAgICAgey8qIDxIZWFkIC8+ICovfVxuICAgICAgICA8aDE+aGVkZXI8L2gxPlxuICAgICAgICB7LyogPC9zZWN0aW9uPiAqL31cbiAgICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5wYWRkaW5nMXB4fWB9PiAqL31cbiAgICAgICAgey8qIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5NeSBCbG9nPC9oMj4gKi99XG4gICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PiAqL31cbiAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+XG4gICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIHsvKiA8L3VsPiAqL31cbiAgICAgICAgey8qIDwvc2VjdGlvbj4gKi99XG4gICAgICAgIHsvKiA8TmFtZXMgLz4gKi99XG4gICAgICAgIHsvKiA8QWxlcnQgLz4gKi99XG4gICAgICAgIHsvKiA8UHJvamVjdHMgLz4gKi99XG4gICAgICAgIHsvKiA8QnV0dG9uIC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPEZvb3RlciAvPiAqL31cbiAgICAgIHsvKiA8L0xheW91dD4gKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkJsb2dQYWdlIiwiYWxsUG9zdHNEYXRhIiwiZGl2IiwiaDEiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImxpIiwiaHJlZiIsImEiLCJiciIsInNtYWxsIiwiRGF0ZSIsImRhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});