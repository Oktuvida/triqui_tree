(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/triqui_tree.js":
/*!*****************************!*\
  !*** ../pkg/triqui_tree.js ***!
  \*****************************/
/*! exports provided: Controller, __wbg_random_7b8246250fd79f60, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triqui_tree_bg.wasm */ \"../pkg/triqui_tree_bg.wasm\");\n/* harmony import */ var _triqui_tree_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triqui_tree_bg.js */ \"../pkg/triqui_tree_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return _triqui_tree_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_7b8246250fd79f60\", function() { return _triqui_tree_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_7b8246250fd79f60\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _triqui_tree_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/triqui_tree.js?");

/***/ }),

/***/ "../pkg/triqui_tree_bg.js":
/*!********************************!*\
  !*** ../pkg/triqui_tree_bg.js ***!
  \********************************/
/*! exports provided: Controller, __wbg_random_7b8246250fd79f60, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_7b8246250fd79f60\", function() { return __wbg_random_7b8246250fd79f60; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triqui_tree_bg.wasm */ \"../pkg/triqui_tree_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst u32CvtShim = new Uint32Array(2);\n\nconst int64CvtShim = new BigInt64Array(u32CvtShim.buffer);\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Controller {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Controller.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_controller_free\"](ptr);\n    }\n    /**\n    * @param {BigInt} depth\n    * @returns {Controller}\n    */\n    static new(depth) {\n        int64CvtShim[0] = depth;\n        const low0 = u32CvtShim[0];\n        const high0 = u32CvtShim[1];\n        var ret = _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_new\"](low0, high0);\n        return Controller.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    get_maximizer() {\n        try {\n            const retptr = _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_get_maximizer\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    get_minimizer() {\n        try {\n            const retptr = _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_get_minimizer\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    get_invalid_mv() {\n        var ret = _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_get_invalid_mv\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {boolean}\n    */\n    completed_game() {\n        var ret = _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_completed_game\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @returns {string}\n    */\n    get_winner() {\n        try {\n            const retptr = _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_get_winner\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @param {string} id\n    * @returns {number}\n    */\n    play_turn(id) {\n        var ptr0 = passStringToWasm0(id, _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        var ret = _triqui_tree_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"controller_play_turn\"](this.ptr, ptr0, len0);\n        return ret >>> 0;\n    }\n}\n\nconst __wbg_random_7b8246250fd79f60 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/triqui_tree_bg.js?");

/***/ }),

/***/ "../pkg/triqui_tree_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/triqui_tree_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __wbg_controller_free, controller_new, controller_get_maximizer, controller_get_minimizer, controller_get_invalid_mv, controller_completed_game, controller_get_winner, controller_play_turn, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./triqui_tree_bg.js */ \"../pkg/triqui_tree_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/triqui_tree_bg.wasm?");

/***/ }),

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! exports provided: modify_input_attributes, process_move, show_symbol_hover, hide_symbol_hover, set_message_difficulty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modify_input_attributes\", function() { return modify_input_attributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"process_move\", function() { return process_move; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show_symbol_hover\", function() { return show_symbol_hover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hide_symbol_hover\", function() { return hide_symbol_hover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set_message_difficulty\", function() { return set_message_difficulty; });\n/* harmony import */ var triqui_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! triqui-tree */ \"../pkg/triqui_tree.js\");\n\nconst controller = triqui_tree__WEBPACK_IMPORTED_MODULE_0__[\"Controller\"].new(get_algorithm_depth());\nfunction get_algorithm_depth() {\n    let algorithm_depth = window.sessionStorage.getItem(\"algorithm_depth\");\n    if (algorithm_depth === null || algorithm_depth > 7) {\n        algorithm_depth = 7;\n        window.sessionStorage.setItem(\"algorithm_depth\", algorithm_depth);\n    }\n    return BigInt(algorithm_depth);\n}\n\nfunction set_algorithm_depth(inner_msg) {\n    let algorithm_depth = get_algorithm_depth();\n    let depth_values = {\n        \"Es empate\": algorithm_depth,\n        \"La ganadora es la máquina\": algorithm_depth - BigInt(1),\n        \"El ganador es el jugador\": algorithm_depth + BigInt(1),\n    };\n    let new_algorithm_depth = depth_values[inner_msg];\n    window.sessionStorage.setItem(\n        \"algorithm_depth\",\n        new_algorithm_depth > 0 ? new_algorithm_depth : 7\n    );\n}\n\nfunction create_h4_element_with_animation(msg, width_element, typing_type, order) {\n    let h4_element = document.createElement(\"h4\");\n    h4_element.innerHTML = msg;\n    let time_duration = 1;\n    let steps = msg.trim().length;\n    Object.assign(h4_element.style, {\n        width: width_element,\n        animation: `\n            ${typing_type} ${time_duration}s steps(${steps}) forwards ${order*time_duration}s,\n            blink ${time_duration/steps}s step-end infinite alternate\n        `,\n        opacity: (order>0) ? '0' : '1'\n    });\n    return h4_element;\n\n}\n\nfunction end_of_game_screen() {\n    modify_input_attributes(\"disabled\");\n    let inner_msg = controller.get_winner();\n    set_algorithm_depth(inner_msg);\n    let message_square = document.getElementById(\"final_message\");\n    switch(inner_msg) {\n        case \"Es empate\": \n            message_square.appendChild(\n                create_h4_element_with_animation(inner_msg, \"17rem\", \"single_typing\", 0)\n            );\n            break;\n        default:\n            let size = inner_msg.length / 2 - 1;\n            let msg = inner_msg.substring(0, size);\n            message_square.appendChild(\n                create_h4_element_with_animation(msg, (msg===\"El ganador \")?\"18.8rem\":\"20.2rem\", \"first_typing\", 0)\n            );\n            msg = inner_msg.substring(size) ;\n            message_square.appendChild(\n                create_h4_element_with_animation(msg, \"24.1rem\", \"last_typing\", 1)\n            );\n    }\n    message_square.classList.add(\"typing_text\");\n    Object.assign(document.getElementById(\"repeat_button\").style, {\n        opacity: '1',\n        visibility: \"visible\",\n    });\n}\n\nfunction play_movement(square, is_ai) {\n    square.classList.add(\n        is_ai ? controller.get_maximizer() : controller.get_minimizer(),\n        \"used\",\n        \"disabled\"\n    );\n    square.style.cursor = \"default\";\n    if (is_ai) \n        square.style.color = \"#111\";\n    Object.assign(square.parentNode.querySelector(\"INPUT\"), {\n        checked: true,\n        disabled: true\n    })\n}\nfunction modify_input_attributes(action) {\n    switch (action) {\n        case \"checked\":\n            document.querySelectorAll(\"INPUT\").forEach((el) => {\n                el.checked = false;\n            });\n            break;\n        default:\n            document.querySelectorAll(\"I\").forEach((el) => {\n                el.classList.add(\"disabled\");\n                el.style.cursor = \"default\";\n            });\n    }\n}\nfunction process_move(ev) {\n    let player_square = ev.target;\n    let square_classes = player_square.classList;\n    if (\n        square_classes.contains(\"icon-box\")\n        && !square_classes.contains(\"used\")\n        && !square_classes.contains(\"disabled\")\n    ) {\n        play_movement(player_square, false);\n        let ai_mv = controller.play_turn(player_square.id.slice(-1));\n        if (ai_mv != controller.get_invalid_mv())\n            play_movement(document.getElementById(`square_${ai_mv}`), true);\n        if (controller.completed_game())\n            end_of_game_screen();\n    }\n}\nfunction show_symbol_hover(ev) {\n    let square = ev.target;\n    let square_classes = square.classList;\n    if (\n        square_classes.contains(\"icon-box\")\n        && !square_classes.contains(\"used\")\n        && !square_classes.contains(\"disabled\")\n    ) \n        square_classes.add(controller.get_minimizer());\n}\nfunction hide_symbol_hover(ev) {\n    let square = ev.target;\n    let square_classes = square.classList;\n    if (\n        square_classes.contains(\"icon-box\")\n        && !square_classes.contains(\"used\") \n        && !square_classes.contains(\"disabled\")\n    ) \n        square_classes.remove(controller.get_minimizer());\n}\nfunction set_message_difficulty() {\n    let box_message = document.querySelector(\"#show_difficulty h4\");\n    switch(window.sessionStorage.getItem(\"algorithm_depth\")) {\n        case '7':\n            break;\n        case '6':\n        case '5':\n            box_message.innerHTML = \"Dificultad: Normal\";\n            break;\n        default:\n            box_message.innerHTML = \"Dificultad: Fácil\";\n    }\n}\n\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions.js\");\n\n_functions__WEBPACK_IMPORTED_MODULE_0__[\"set_message_difficulty\"]();\n_functions__WEBPACK_IMPORTED_MODULE_0__[\"modify_input_attributes\"](\"checked\");\ndocument\n    .getElementById(\"board\")\n    .addEventListener(\"click\", _functions__WEBPACK_IMPORTED_MODULE_0__[\"process_move\"]);\ndocument\n    .getElementById(\"board\")\n    .addEventListener(\"mouseover\", _functions__WEBPACK_IMPORTED_MODULE_0__[\"show_symbol_hover\"]);\ndocument\n    .getElementById(\"board\")\n    .addEventListener(\"mouseout\", _functions__WEBPACK_IMPORTED_MODULE_0__[\"hide_symbol_hover\"]);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);