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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! websocket */ \"./node_modules/websocket/lib/browser.js\");\n/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst client = new websocket__WEBPACK_IMPORTED_MODULE_2__.w3cwebsocket(\"ws://127.0.0.1:8000\");\nconst Home = ()=>{\n    _s();\n    console.log(client);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        client.onopen = ()=>{\n            console.log(\"Websocket Client Connected\");\n        };\n        client.onmessage = (message)=>{\n            console.log(JSON.parse(message.data));\n        };\n    }, []);\n    const handleClick = ()=>{\n        client.send(JSON.stringify({\n            type: \"message\",\n            msg: \"Hello app\"\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleClick,\n            children: \"Hello\"\n        }, void 0, false, {\n            fileName: \"/Volumes/WORK/learning/websocket/client/src/pages/index.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/WORK/learning/websocket/client/src/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUN1QjtBQUV6RCxNQUFNRyxTQUFTLElBQUlELG1EQUFZQSxDQUFDO0FBRWhDLE1BQU1FLE9BQU87O0lBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWkgsZ0RBQVNBLENBQUM7UUFDUkcsT0FBT0ksTUFBTSxHQUFHO1lBQ2RGLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBQ0FILE9BQU9LLFNBQVMsR0FBRyxDQUFDQztZQUNsQkosUUFBUUMsR0FBRyxDQUFDSSxLQUFLQyxLQUFLLENBQUNGLFFBQVFHLElBQUk7UUFFckM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQyxjQUFjO1FBQ2xCVixPQUFPVyxJQUFJLENBQUNKLEtBQUtLLFNBQVMsQ0FBQztZQUN6QkMsTUFBTTtZQUNOQyxLQUFLO1FBQ1A7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBT0MsU0FBU1A7c0JBQWE7Ozs7Ozs7Ozs7O0FBR3BDO0dBekJNVDtLQUFBQTtBQTJCTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3M2N3ZWJzb2NrZXQgYXMgVzNDV2ViU29ja2V0IH0gZnJvbSBcIndlYnNvY2tldFwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgVzNDV2ViU29ja2V0KCd3czovLzEyNy4wLjAuMTo4MDAwJyk7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNsaWVudCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjbGllbnQub25vcGVuID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJXZWJzb2NrZXQgQ2xpZW50IENvbm5lY3RlZFwiKTtcbiAgICB9XG4gICAgY2xpZW50Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSkpO1xuICAgICAgXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIG1zZzogXCJIZWxsbyBhcHBcIlxuICAgIH0pKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+SGVsbG88L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInczY3dlYnNvY2tldCIsIlczQ1dlYlNvY2tldCIsImNsaWVudCIsIkhvbWUiLCJjb25zb2xlIiwibG9nIiwib25vcGVuIiwib25tZXNzYWdlIiwibWVzc2FnZSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJoYW5kbGVDbGljayIsInNlbmQiLCJzdHJpbmdpZnkiLCJ0eXBlIiwibXNnIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});