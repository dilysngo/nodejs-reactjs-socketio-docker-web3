/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/es5-ext/global.js":
/*!****************************************!*\
  !*** ./node_modules/es5-ext/global.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var naiveFallback = function () {\n\tif (typeof self === \"object\" && self) return self;\n\tif (typeof window === \"object\" && window) return window;\n\tthrow new Error(\"Unable to resolve global `this`\");\n};\n\nmodule.exports = (function () {\n\tif (this) return this;\n\n\t// Unexpected strict mode (may happen if e.g. bundled into ESM module)\n\n\t// Fallback to standard globalThis if available\n\tif (typeof globalThis === \"object\" && globalThis) return globalThis;\n\n\t// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis\n\t// In all ES5+ engines global object inherits from Object.prototype\n\t// (if you approached one that doesn't please report)\n\ttry {\n\t\tObject.defineProperty(Object.prototype, \"__global__\", {\n\t\t\tget: function () { return this; },\n\t\t\tconfigurable: true\n\t\t});\n\t} catch (error) {\n\t\t// Unfortunate case of updates to Object.prototype being restricted\n\t\t// via preventExtensions, seal or freeze\n\t\treturn naiveFallback();\n\t}\n\ttry {\n\t\t// Safari case (window.__global__ works, but __global__ does not)\n\t\tif (!__global__) return naiveFallback();\n\t\treturn __global__;\n\t} finally {\n\t\tdelete Object.prototype.__global__;\n\t}\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9nbG9iYWwuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0EsR0FBRztBQUNILEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L2dsb2JhbC5qcz9mYTZhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBuYWl2ZUZhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZikgcmV0dXJuIHNlbGY7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdykgcmV0dXJuIHdpbmRvdztcblx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlc29sdmUgZ2xvYmFsIGB0aGlzYFwiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMpIHJldHVybiB0aGlzO1xuXG5cdC8vIFVuZXhwZWN0ZWQgc3RyaWN0IG1vZGUgKG1heSBoYXBwZW4gaWYgZS5nLiBidW5kbGVkIGludG8gRVNNIG1vZHVsZSlcblxuXHQvLyBGYWxsYmFjayB0byBzdGFuZGFyZCBnbG9iYWxUaGlzIGlmIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIgJiYgZ2xvYmFsVGhpcykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cblx0Ly8gVGhhbmtzIEBtYXRoaWFzYnluZW5zIC0+IGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9nbG9iYWx0aGlzXG5cdC8vIEluIGFsbCBFUzUrIGVuZ2luZXMgZ2xvYmFsIG9iamVjdCBpbmhlcml0cyBmcm9tIE9iamVjdC5wcm90b3R5cGVcblx0Ly8gKGlmIHlvdSBhcHByb2FjaGVkIG9uZSB0aGF0IGRvZXNuJ3QgcGxlYXNlIHJlcG9ydClcblx0dHJ5IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJfX2dsb2JhbF9fXCIsIHtcblx0XHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFVuZm9ydHVuYXRlIGNhc2Ugb2YgdXBkYXRlcyB0byBPYmplY3QucHJvdG90eXBlIGJlaW5nIHJlc3RyaWN0ZWRcblx0XHQvLyB2aWEgcHJldmVudEV4dGVuc2lvbnMsIHNlYWwgb3IgZnJlZXplXG5cdFx0cmV0dXJuIG5haXZlRmFsbGJhY2soKTtcblx0fVxuXHR0cnkge1xuXHRcdC8vIFNhZmFyaSBjYXNlICh3aW5kb3cuX19nbG9iYWxfXyB3b3JrcywgYnV0IF9fZ2xvYmFsX18gZG9lcyBub3QpXG5cdFx0aWYgKCFfX2dsb2JhbF9fKSByZXR1cm4gbmFpdmVGYWxsYmFjaygpO1xuXHRcdHJldHVybiBfX2dsb2JhbF9fO1xuXHR9IGZpbmFsbHkge1xuXHRcdGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLl9fZ2xvYmFsX187XG5cdH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/es5-ext/global.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FVolumes%2FWORK%2Flearning%2Fwebsocket%2Fclient%2Fsrc%2Fpages%2Findex.tsx&page=%2F!":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FVolumes%2FWORK%2Flearning%2Fwebsocket%2Fclient%2Fsrc%2Fpages%2Findex.tsx&page=%2F! ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/index.tsx */ \"./src/pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZWb2x1bWVzJTJGV09SSyUyRmxlYXJuaW5nJTJGd2Vic29ja2V0JTJGY2xpZW50JTJGc3JjJTJGcGFnZXMlMkZpbmRleC50c3gmcGFnZT0lMkYhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0RBQXVCO0FBQzlDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9kYTg1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FVolumes%2FWORK%2Flearning%2Fwebsocket%2Fclient%2Fsrc%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! websocket */ \"./node_modules/websocket/lib/browser.js\");\n/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst client = new websocket__WEBPACK_IMPORTED_MODULE_2__.w3cwebsocket(\"ws://127.0.0.1:8000\");\nconst Home = ()=>{\n    _s();\n    console.log(client);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        client.onopen = ()=>{\n            console.log(\"Websocket Client Connected\");\n        };\n        client.onmessage = (message)=>{\n            console.log(JSON.parse(message.data));\n        };\n    }, []);\n    const handleClick = ()=>{\n        client.send(JSON.stringify({\n            type: \"message\",\n            msg: \"Hello app\"\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleClick,\n            children: \"Hello\"\n        }, void 0, false, {\n            fileName: \"/Volumes/WORK/learning/websocket/client/src/pages/index.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/WORK/learning/websocket/client/src/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUN1QjtBQUV6RCxNQUFNRyxTQUFTLElBQUlELG1EQUFZQSxDQUFDO0FBRWhDLE1BQU1FLE9BQU87O0lBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWkgsZ0RBQVNBLENBQUM7UUFDUkcsT0FBT0ksTUFBTSxHQUFHO1lBQ2RGLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBQ0FILE9BQU9LLFNBQVMsR0FBRyxDQUFDQztZQUNsQkosUUFBUUMsR0FBRyxDQUFDSSxLQUFLQyxLQUFLLENBQUNGLFFBQVFHLElBQUk7UUFFckM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQyxjQUFjO1FBQ2xCVixPQUFPVyxJQUFJLENBQUNKLEtBQUtLLFNBQVMsQ0FBQztZQUN6QkMsTUFBTTtZQUNOQyxLQUFLO1FBQ1A7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBT0MsU0FBU1A7c0JBQWE7Ozs7Ozs7Ozs7O0FBR3BDO0dBekJNVDtLQUFBQTtBQTJCTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3M2N3ZWJzb2NrZXQgYXMgVzNDV2ViU29ja2V0IH0gZnJvbSBcIndlYnNvY2tldFwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgVzNDV2ViU29ja2V0KCd3czovLzEyNy4wLjAuMTo4MDAwJyk7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNsaWVudCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjbGllbnQub25vcGVuID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJXZWJzb2NrZXQgQ2xpZW50IENvbm5lY3RlZFwiKTtcbiAgICB9XG4gICAgY2xpZW50Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSkpO1xuICAgICAgXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIG1zZzogXCJIZWxsbyBhcHBcIlxuICAgIH0pKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+SGVsbG88L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInczY3dlYnNvY2tldCIsIlczQ1dlYlNvY2tldCIsImNsaWVudCIsIkhvbWUiLCJjb25zb2xlIiwibG9nIiwib25vcGVuIiwib25tZXNzYWdlIiwibWVzc2FnZSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJoYW5kbGVDbGljayIsInNlbmQiLCJzdHJpbmdpZnkiLCJ0eXBlIiwibXNnIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/websocket/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/websocket/lib/browser.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var _globalThis;\nif (typeof globalThis === 'object') {\n\t_globalThis = globalThis;\n} else {\n\ttry {\n\t\t_globalThis = __webpack_require__(/*! es5-ext/global */ \"./node_modules/es5-ext/global.js\");\n\t} catch (error) {\n\t} finally {\n\t\tif (!_globalThis && typeof window !== 'undefined') { _globalThis = window; }\n\t\tif (!_globalThis) { throw new Error('Could not determine global this'); }\n\t}\n}\n\nvar NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;\nvar websocket_version = __webpack_require__(/*! ./version */ \"./node_modules/websocket/lib/version.js\");\n\n\n/**\n * Expose a W3C WebSocket class with just one or two arguments.\n */\nfunction W3CWebSocket(uri, protocols) {\n\tvar native_instance;\n\n\tif (protocols) {\n\t\tnative_instance = new NativeWebSocket(uri, protocols);\n\t}\n\telse {\n\t\tnative_instance = new NativeWebSocket(uri);\n\t}\n\n\t/**\n\t * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket\n\t * class). Since it is an Object it will be returned as it is when creating an\n\t * instance of W3CWebSocket via 'new W3CWebSocket()'.\n\t *\n\t * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2\n\t */\n\treturn native_instance;\n}\nif (NativeWebSocket) {\n\t['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function(prop) {\n\t\tObject.defineProperty(W3CWebSocket, prop, {\n\t\t\tget: function() { return NativeWebSocket[prop]; }\n\t\t});\n\t});\n}\n\n/**\n * Module exports.\n */\nmodule.exports = {\n    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,\n    'version'      : websocket_version\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2Vic29ja2V0L2xpYi9icm93c2VyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdEQUFnQjtBQUN4QyxHQUFHO0FBQ0gsR0FBRztBQUNILHVEQUF1RDtBQUN2RCxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDBEQUFXOzs7QUFHM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dlYnNvY2tldC9saWIvYnJvd3Nlci5qcz9lY2NmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZ2xvYmFsVGhpcztcbmlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHtcblx0X2dsb2JhbFRoaXMgPSBnbG9iYWxUaGlzO1xufSBlbHNlIHtcblx0dHJ5IHtcblx0XHRfZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJ2VzNS1leHQvZ2xvYmFsJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdH0gZmluYWxseSB7XG5cdFx0aWYgKCFfZ2xvYmFsVGhpcyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyBfZ2xvYmFsVGhpcyA9IHdpbmRvdzsgfVxuXHRcdGlmICghX2dsb2JhbFRoaXMpIHsgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZGV0ZXJtaW5lIGdsb2JhbCB0aGlzJyk7IH1cblx0fVxufVxuXG52YXIgTmF0aXZlV2ViU29ja2V0ID0gX2dsb2JhbFRoaXMuV2ViU29ja2V0IHx8IF9nbG9iYWxUaGlzLk1veldlYlNvY2tldDtcbnZhciB3ZWJzb2NrZXRfdmVyc2lvbiA9IHJlcXVpcmUoJy4vdmVyc2lvbicpO1xuXG5cbi8qKlxuICogRXhwb3NlIGEgVzNDIFdlYlNvY2tldCBjbGFzcyB3aXRoIGp1c3Qgb25lIG9yIHR3byBhcmd1bWVudHMuXG4gKi9cbmZ1bmN0aW9uIFczQ1dlYlNvY2tldCh1cmksIHByb3RvY29scykge1xuXHR2YXIgbmF0aXZlX2luc3RhbmNlO1xuXG5cdGlmIChwcm90b2NvbHMpIHtcblx0XHRuYXRpdmVfaW5zdGFuY2UgPSBuZXcgTmF0aXZlV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzKTtcblx0fVxuXHRlbHNlIHtcblx0XHRuYXRpdmVfaW5zdGFuY2UgPSBuZXcgTmF0aXZlV2ViU29ja2V0KHVyaSk7XG5cdH1cblxuXHQvKipcblx0ICogJ25hdGl2ZV9pbnN0YW5jZScgaXMgYW4gaW5zdGFuY2Ugb2YgbmF0aXZlV2ViU29ja2V0ICh0aGUgYnJvd3NlcidzIFdlYlNvY2tldFxuXHQgKiBjbGFzcykuIFNpbmNlIGl0IGlzIGFuIE9iamVjdCBpdCB3aWxsIGJlIHJldHVybmVkIGFzIGl0IGlzIHdoZW4gY3JlYXRpbmcgYW5cblx0ICogaW5zdGFuY2Ugb2YgVzNDV2ViU29ja2V0IHZpYSAnbmV3IFczQ1dlYlNvY2tldCgpJy5cblx0ICpcblx0ICogRUNNQVNjcmlwdCA1OiBodHRwOi8vYmNsYXJ5LmNvbS8yMDA0LzExLzA3LyNhLTEzLjIuMlxuXHQgKi9cblx0cmV0dXJuIG5hdGl2ZV9pbnN0YW5jZTtcbn1cbmlmIChOYXRpdmVXZWJTb2NrZXQpIHtcblx0WydDT05ORUNUSU5HJywgJ09QRU4nLCAnQ0xPU0lORycsICdDTE9TRUQnXS5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoVzNDV2ViU29ja2V0LCBwcm9wLCB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gTmF0aXZlV2ViU29ja2V0W3Byb3BdOyB9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAndzNjd2Vic29ja2V0JyA6IE5hdGl2ZVdlYlNvY2tldCA/IFczQ1dlYlNvY2tldCA6IG51bGwsXG4gICAgJ3ZlcnNpb24nICAgICAgOiB3ZWJzb2NrZXRfdmVyc2lvblxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/websocket/lib/browser.js\n"));

/***/ }),

/***/ "./node_modules/websocket/lib/version.js":
/*!***********************************************!*\
  !*** ./node_modules/websocket/lib/version.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ../package.json */ \"./node_modules/websocket/package.json\").version;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2Vic29ja2V0L2xpYi92ZXJzaW9uLmpzIiwibWFwcGluZ3MiOiJBQUFBLDRHQUFtRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd2Vic29ja2V0L2xpYi92ZXJzaW9uLmpzPzE0MjMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/websocket/lib/version.js\n"));

/***/ }),

/***/ "./node_modules/websocket/package.json":
/*!*********************************************!*\
  !*** ./node_modules/websocket/package.json ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FVolumes%2FWORK%2Flearning%2Fwebsocket%2Fclient%2Fsrc%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);