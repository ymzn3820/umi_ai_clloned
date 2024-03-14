require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["childPage/discern/discern"],{

/***/ 460:
/*!*************************************************************************!*\
  !*** G:/company/h5-v1/main.js?{"page":"childPage%2Fdiscern%2Fdiscern"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _discern = _interopRequireDefault(__webpack_require__(/*! ./childPage/discern/discern.vue */ 461));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_discern.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 461:
/*!******************************************************!*\
  !*** G:/company/h5-v1/childPage/discern/discern.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discern.vue?vue&type=template&id=331d0be7&scoped=true& */ 462);
/* harmony import */ var _discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discern.vue?vue&type=script&lang=js& */ 464);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _discern_vue_vue_type_style_index_0_id_331d0be7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discern.vue?vue&type=style&index=0&id=331d0be7&lang=less&scoped=true& */ 466);
/* harmony import */ var _discern_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discern.vue?vue&type=style&index=1&lang=css& */ 468);
/* harmony import */ var _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs






/* normalize component */

var component = Object(_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "331d0be7",
  null,
  false,
  _discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "childPage/discern/discern.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 462:
/*!*************************************************************************************************!*\
  !*** G:/company/h5-v1/childPage/discern/discern.vue?vue&type=template&id=331d0be7&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./discern.vue?vue&type=template&id=331d0be7&scoped=true& */ 463);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_template_id_331d0be7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 463:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/company/h5-v1/childPage/discern/discern.vue?vue&type=template&id=331d0be7&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uRow: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-row/u-row */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-row/u-row")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-row/u-row.vue */ 1536))
    },
    uCol: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-col/u-col */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-col/u-col")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-col/u-col.vue */ 1544))
    },
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 1552))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 1527))
    },
    uTextarea: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-textarea/u-textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-textarea/u-textarea")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-textarea/u-textarea.vue */ 1562))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.messageList[_vm.listName], function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 =
      item.type == "assistant" && !(index === 0)
        ? item.talk.indexOf("思考中")
        : null
    var g1 =
      item.type == "assistant" && !(index === 0) && g0 != -1
        ? _vm.messageList[_vm.listName].length
        : null
    var a0 =
      item.type == "assistant" && !(index === 0) && g0 != -1 && index === g1 - 1
        ? {
            color: "#1F64FF",
            height: "28px",
            "margin-top": "10px",
            "background-color": "#fff",
            color: "#1F64FF",
            border: "1px solid #1F64FF",
          }
        : null
    var g2 =
      item.type == "assistant" &&
      !(index === 0) &&
      !(g0 != -1) &&
      !(item.code == 40022) &&
      !(item.code == 40021)
        ? index === _vm.messageList[_vm.listName].length - 1 &&
          !item.history &&
          !item.loading
        : null
    var a1 =
      item.type == "assistant" &&
      !(index === 0) &&
      !(g0 != -1) &&
      !(item.code == 40022) &&
      !(item.code == 40021) &&
      g2
        ? {
            color: "#1F64FF",
            height: "28px",
            "margin-top": "10px",
            "background-color": "#fff",
            color: "#1F64FF",
            border: "1px solid #1F64FF",
          }
        : null
    var g3 = !(item.type == "assistant") ? item.images.length : null
    var m0 =
      !(item.type == "assistant") && g3 > 0
        ? _vm.getImgUrl(item.images[0])
        : null
    return {
      $orig: $orig,
      g0: g0,
      g1: g1,
      a0: a0,
      g2: g2,
      a1: a1,
      g3: g3,
      m0: m0,
    }
  })
  var g4 =
    _vm.messageList[_vm.listName].length > 2 &&
    _vm.messageList[_vm.listName][_vm.messageList[_vm.listName].length - 1]
      .loading
  var g5 = _vm.imgList.length
  var l1 =
    g5 > 0
      ? _vm.__map(_vm.imgList, function (val, index) {
          var $orig = _vm.__get_orig(val)
          var m1 = _vm.getImgUrl(val)
          return {
            $orig: $orig,
            m1: m1,
          }
        })
      : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event, index) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        index = _temp2.index
      var _temp, _temp2
      return _vm.imgList.splice(index, 1)
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g4: g4,
        g5: g5,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 464:
/*!*******************************************************************************!*\
  !*** G:/company/h5-v1/childPage/discern/discern.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./discern.vue?vue&type=script&lang=js& */ 465);
/* harmony import */ var _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 465:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/company/h5-v1/childPage/discern/discern.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 55));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 57));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      // scrollTop: '573',
      isfinish: true,
      // 会话中

      //识万物
      controller_nine: null,
      // 用于终止会话
      t_time_nine: null,
      // 计时器
      nine_shi: null,
      selectDone: "",
      msgListHeight: 0,
      // barHeight: 50,
      userInfo: '',
      current: 0,
      key: 0,
      radioValue: true,
      chatInputValue: "",
      chatType: '识万物',
      loading: true,
      session_code: "",
      chat_group_code: "",
      supplement: {},
      // 请求参数
      listName: 'nine',
      avatar: "",
      imgList: [],
      messageList: {
        'nine': [{
          talk: "<span style=\"font-size: 17px\">\u6211\u53EF\u4EE5\u8BC6\u522B\u56FE\u7247\u4E2D\u7684\u5404\u79CD\u7269\u4F53\u3001\u573A\u666F\u6216\u4EBA\u7269\u65B9\u4FBF\u7528\u6237\u4ECE\u56FE\u7247\u4E2D\u63D0\u53D6\u9700\u8981\u4FE1\u606F</span>",
          type: 'assistant'
        }]
      },
      claudeImg: global.baseImg + '/xcx/ca67317a-cbc1-4890-a3ce-c1b472785b0a.jpg',
      waitImg: global.baseImg + '/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg'
    };
  },
  components: {
    // Title
  },
  onLoad: function onLoad(option) {
    var _this = this;
    // 获取屏幕高度
    uni.getSystemInfo({
      success: function success(res) {
        _this.screenHeight = res.windowHeight;
        // 100为底部输入栏高度，单位rpx，需要先转成px
        _this.msgListHeight = _this.screenHeight - uni.upx2px(100);
      }
    });
  },
  onShow: function onShow() {
    var nine_code = this.messageList.nine[this.messageList.nine.length - 1].code;
    if (nine_code == 40022) {
      // 去除登录或升级vip提示
      this.messageList.nine.pop();
    }
    this.chatType = '识万物';
    this.listName = 'nine';
    this.chatInputValue = '请描述一下这张图片的内容';
    var userInfo = JSON.parse(uni.getStorageSync('userInfo'));
    var avatarUrl = global.baseImg + '/' + uni.getStorageSync("avatarUrl");
    this.avatar = avatarUrl;
    if (this.messageList[this.listName].length == 1) {
      uni.setStorageSync('imgUrl', '');
      uni.setStorageSync('discern_code', '');
    }
    document.title = '无忧秘书AI是一款人工智能聊天机器-能进行AI绘画-适用于多个场景进行AI对话-商务合作-源码定制等';
    var metaKeywords = document.createElement('meta');
    metaKeywords.id = 'chat-meta-keywords';
    metaKeywords.name = 'keywords';
    metaKeywords.content = '无忧秘书AI,Ai聊天,ChatGpt3.5,ChatGpt4.0中文版,OpenAi,chatgpt国内版,AI智能软件,源码定制,API接口GPT4.0,API接口百度AI绘画';
    document.getElementsByTagName('head')[0].appendChild(metaKeywords);
    var metaDescription = document.createElement('meta');
    metaDescription.id = 'chat-meta-description';
    metaDescription.name = 'description';
    metaDescription.content = '无忧秘书AI是人工智能聊天工具,相当于国内版的chatgpt4.0.拥有语言理解能力和文本生成能力,能撰写视频脚本,文案,翻译,代码,写论文邮件,诗词歌赋等任务.职场上升职.写工作报告,企业管理,市场营销等能助你一臂之力.它上知天文下知地理,在任何场景都能和你像人类一样进行交流,互动.';
    document.getElementsByTagName('head')[0].appendChild(metaDescription);
  },
  onHide: function onHide() {
    document.getElementById('chat-meta-keywords').remove();
    document.getElementById('chat-meta-description').remove();
  },
  methods: {
    copyFun: function copyFun(val) {
      uni.setClipboardData({
        data: val,
        //要被复制的内容
        success: function success() {
          //复制成功的回调函数
          uni.showToast({
            //提示
            title: '复制成功'
          });
        }
      });
    },
    //信息回调方法
    creatChatFun: function creatChatFun(data, state) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var num_nine, _ret;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.listName == 'nine')) {
                  _context2.next = 5;
                  break;
                }
                return _context2.delegateYield( /*#__PURE__*/_regenerator.default.mark(function _callee() {
                  var userInfo, response_nine, reader, decoder, info, status, integral, completion_tokens, prompt_tokens, tabType, _yield$reader$read, value, done, chat, chatArr;
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          num_nine = 0;
                          _this2.messageList[_this2.listName].push({
                            talk: "\u601D\u8003\u4E2D,\u8017\u65F6".concat(num_nine, "\u79D2"),
                            type: 'assistant'
                          });
                          _this2.nine_shi = setInterval(function () {
                            num_nine++;
                          }, 1000);
                          _this2.t_time_nine = setInterval(function () {
                            _this2.messageList[_this2.listName][_this2.messageList[_this2.listName].length - 1] = {
                              talk: "\u601D\u8003\u4E2D,\u8017\u65F6".concat(num_nine, "\u79D2"),
                              type: 'assistant',
                              is_time: true
                            };
                            _this2.$forceUpdate();
                          }, 1000);
                          // ==========================================
                          userInfo = JSON.parse(uni.getStorageSync('userInfo'));
                          _this2.controller_nine = new AbortController();
                          // const response = await fetch(global.baseUrl+'/api/chat/chat_session', { 
                          _context.next = 8;
                          return fetch(global.baseUrl + '/api/chat/async_chat_completion', {
                            method: "POST",
                            headers: {
                              "Content-Type": 'application/json',
                              'Accept': '*/*',
                              'authorization': userInfo.token,
                              'role': userInfo.role,
                              'source': global.source
                            },
                            body: JSON.stringify(data),
                            signal: _this2.controller_nine.signal
                          }).catch(function (err) {
                            // console.log(err);
                          });
                        case 8:
                          response_nine = _context.sent;
                          if (!(response_nine.status == '400')) {
                            _context.next = 14;
                            break;
                          }
                          // this.isfinish = true // 结束
                          // fetch请求错误时的body内容
                          clearInterval(_this2.t_time_nine);
                          clearInterval(_this2.nine_shi);
                          response_nine.json().then(function (res) {
                            // console.log(res, 777);
                            // console.log(res.code,666);
                            if (res.code < 49999) {
                              var _userInfo = JSON.parse(uni.getStorageSync('userInfo'));
                              // console.log(userInfo.role == 'guess' ,'panduan');

                              if (res.code == 40013) {
                                _this2.$api.msg('登录信息已过期，请重新登录');
                                _this2.messageList[_this2.listName].pop();
                                setTimeout(function () {
                                  uni.navigateTo({
                                    url: '/pages/login/login'
                                  });
                                }, 1500);
                              } else {
                                _this2.userRole = _userInfo.role;
                                _this2.messageList[_this2.listName][_this2.messageList[_this2.listName].length - 1] = {
                                  talk: res.msg,
                                  type: 'assistant',
                                  time: 0,
                                  code: res.code == 40022 ? res.code : 40021,
                                  status: "stop",
                                  textNumber: 0,
                                  history: false,
                                  loading: true
                                };
                              }
                              _this2.$forceUpdate();
                              _this2.toBottom();
                            } else if (res.code > 49999) {
                              _this2.messageList[_this2.listName].pop();
                              _this2.$api.msg('网络异常，请稍后重试');
                              // this.$api.msg(res.msg)
                            } else {
                              _this2.messageList[_this2.listName].pop();
                              _this2.$api.msg(res.msg);
                            }
                          });
                          return _context.abrupt("return", {
                            v: void 0
                          });
                        case 14:
                          if (!(response_nine == undefined)) {
                            _context.next = 19;
                            break;
                          }
                          // this.isfinish = true // 结束
                          // fetch请求错误时的body内容
                          clearInterval(_this2.t_time_nine);
                          clearInterval(_this2.nine_shi);
                          _this2.messageList[_this2.listName][_this2.messageList[_this2.listName].length - 1] = {
                            talk: '网络异常，请稍后重试',
                            type: 'assistant',
                            time: 0,
                            code: 40021,
                            status: "stop",
                            textNumber: 12,
                            history: false,
                            loading: true
                          };
                          return _context.abrupt("return", {
                            v: void 0
                          });
                        case 19:
                          if (response_nine.ok) {
                            _context.next = 22;
                            break;
                          }
                          // this.isfinish = true
                          _this2.$message.error(response_nine.statusText);
                          return _context.abrupt("return", {
                            v: void 0
                          });
                        case 22:
                          reader = response_nine.body.getReader();
                          decoder = new TextDecoder("utf-8");
                          info = '';
                          status = '';
                          integral = 0;
                          completion_tokens = 0;
                          prompt_tokens = 0;
                          tabType = _this2.listName;
                        case 30:
                          if (false) {}
                          _context.next = 33;
                          return reader.read();
                        case 33:
                          _yield$reader$read = _context.sent;
                          value = _yield$reader$read.value;
                          done = _yield$reader$read.done;
                          if (!done) {
                            _context.next = 40;
                            break;
                          }
                          _this2.messageList[tabType][_this2.messageList[tabType].length - 1].loading = true;
                          _this2.$forceUpdate();
                          return _context.abrupt("break", 45);
                        case 40:
                          if (value) {
                            chat = decoder.decode(value); // console.log(chat,880);
                            chatArr = chat.split('\r\n');
                            chatArr.forEach(function (val) {
                              if (val != '') {
                                var res = JSON.parse(val);
                                if (res.code) {
                                  if (res.code < 49999) {
                                    var _userInfo2 = JSON.parse(uni.getStorageSync('userInfo'));
                                    // console.log(userInfo.role == 'guess' ,'panduan');								
                                    _this2.userRole = _userInfo2.role;
                                    _this2.messageList[_this2.listName][_this2.messageList[tabType].length - 1] = {
                                      talk: res.msg,
                                      type: 'assistant',
                                      time: 0,
                                      code: res.code == 40022 ? res.code : 40021,
                                      status: "stop",
                                      textNumber: 0,
                                      history: false,
                                      loading: true
                                    };
                                    _this2.$forceUpdate();
                                    _this2.toBottom();
                                    clearInterval(_this2.t_time_nine);
                                    clearInterval(_this2.nine_shi);
                                    // console.log(this.messageList[this.listName],1258)
                                    return;
                                  } else {
                                    _this2.$api.msg('网络异常，请稍后重试');
                                  }
                                } else {
                                  if (res.content != '' && res.content != null) {
                                    info = res.content;
                                  }
                                  if (res.session_code != '' && res.content != null) {
                                    _this2.session_code = res.session_code;
                                    uni.setStorageSync('discern_code', _this2.session_code);
                                  }
                                  if (res.chat_group_code != '' && res.chat_group_code != null) {
                                    // localStorage.setItem('chat_group_code', res.chat_group_code);
                                    _this2.chat_group_code = res.chat_group_code;
                                  }
                                  if (res.finish_reason != '' && res.finish_reason != null) {
                                    status = res.finish_reason;
                                  }
                                  integral = res.integral;
                                  completion_tokens = res.completion_tokens;
                                  prompt_tokens = res.prompt_tokens;
                                  var load_state = false;
                                  if (status == true) {
                                    load_state = true;
                                  } else {
                                    load_state = false;
                                  }
                                  if (state == 'first') {
                                    _this2.supplement = {
                                      chat_type: 4,
                                      // action_type: 3,
                                      session_code: _this2.session_code,
                                      chat_group_code: _this2.chat_group_code,
                                      // stream_str: 1,
                                      // is_decode: 1,
                                      msg_list: [{
                                        role: 'user',
                                        content: _this2.chatInputValue
                                      }, {
                                        role: 'assistant',
                                        content: info
                                        // is_time: true,
                                      }]
                                    };
                                  }

                                  //继续提问和补充
                                  if (state == 'continue') {
                                    //把数据变成Array
                                    // console.log(this.supplement.msg_list,5689)
                                    // console.log(typeof(this.supplement.msg_list),315)

                                    // 
                                    if (typeof _this2.supplement.msg_list == 'string') {
                                      _this2.supplement.msg_list = JSON.parse(_this2.supplement.msg_list);
                                    }
                                    // 
                                    // console.log(this.supplement.msg_list,330)
                                    _this2.supplement.msg_list.push({
                                      role: 'assistant',
                                      content: info
                                      // is_time: true,
                                    });
                                  }

                                  clearInterval(_this2.t_time_nine);

                                  // 	//重置最后一条信息
                                  _this2.messageList[tabType][_this2.messageList[tabType].length - 1] = {
                                    talk: info,
                                    type: 'assistant',
                                    time: num_nine,
                                    code: 200,
                                    is_time: true,
                                    history: false,
                                    status: status,
                                    integral: integral,
                                    completion_tokens: completion_tokens,
                                    prompt_tokens: prompt_tokens,
                                    textNumber: info.replace(/[\r\n]/g, "").length,
                                    loading: load_state,
                                    session_code: _this2.session_code,
                                    chat_group_code: _this2.chat_group_code
                                  };
                                }
                              }
                            });
                          }
                          _this2.$forceUpdate();
                          _this2.toBottom();
                          _context.next = 30;
                          break;
                        case 45:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })(), "t0", 2);
              case 2:
                _ret = _context2.t0;
                if (!((0, _typeof2.default)(_ret) === "object")) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return", _ret.v);
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    sendMessage: function sendMessage(message) {
      var send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
      var send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
      var send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;
      var history = this.messageList[this.listName][this.messageList[this.listName].length - 1].history;
      console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1], 8871);
      if (send_talk.indexOf('思考中') != -1 && send_time > 0) {
        this.$api.msg('当前问题还没回答完毕，请稍后再提问！');
        return;
      }
      if (send_loading == false && send_time > 0) {
        this.$api.msg('当前问题还没回答完毕，请稍后再提问！');
        return;
      }
      if (send_time == 0 && !history) {
        this.messageList[this.listName].pop();
      }
      if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容');
      var img_url = uni.getStorageSync('imgUrl');
      if (this.imgList.length == 0 && img_url == '') {
        return this.$api.msg('请上传需要识别的图片');
      }
      if (img_url == '' || img_url == null) {
        this.messageList[this.listName].push({
          talk: this.chatInputValue,
          type: 'user',
          images: this.imgList
        });
        uni.setStorageSync('imgUrl', this.imgList[0]);
      } else {
        this.messageList[this.listName].push({
          talk: this.chatInputValue,
          type: 'user',
          images: []
        });
      }

      // const hide_cont = '(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)';
      var chat_cont = this.chatInputValue;
      var data = {
        chat_type: '-2',
        action_type: '3',
        session_code: uni.getStorageSync('discern_code'),
        chat_group_code: "",
        content: chat_cont,
        image_url: uni.getStorageSync('imgUrl'),
        msg_list: []
      };
      this.messageList[this.listName].map(function (item, tip) {
        if (tip > 0) {
          var val = {
            role: item.type,
            content: item.talk
          };
          data.msg_list.push(val);
        }
      });
      data.msg_list = JSON.stringify(data.msg_list);
      this.creatChatFun(data, 'first');
      this.chatInputValue = '';
      this.imgList = [];
    },
    toBottom: function toBottom() {
      var _this3 = this;
      // 定位到当前聊天地点
      this.$nextTick(function () {
        setTimeout(function () {
          var scrollTop = document.getElementById("textadd");
          // console.log(scrollTop.scrollHeight,2569);
          _this3.msgListHeight = scrollTop.scrollHeight;
          // console.log(this.msgListHeight,154)
          uni.pageScrollTo({
            scrollTop: scrollTop.scrollHeight,
            duration: 1,
            complete: function complete(err) {
              // console.log(err,333);
            }
          });
        }, 100);
      });
    },
    goToVip: function goToVip() {
      var userInfo = JSON.parse(uni.getStorageSync('userInfo'));
      if (userInfo.role == 'guess') {
        uni.navigateTo({
          url: '/pages/login/login'
        });
      } else {
        uni.navigateTo({
          url: '/pages/user/vip/vip'
        });
      }
    },
    goLogin: function goLogin() {
      uni.navigateTo({
        url: '/pages/login/login'
      });
    },
    // 停止会话
    endController: function endController() {
      if (this.controller_nine != null) {
        this.controller_nine.abort();
      }
      this.messageList[this.listName][this.messageList[this.listName].length - 1].loading = true;
      clearInterval(this.t_time_nine);
      clearInterval(this.nine_shi);
      this.$forceUpdate();
    },
    // 停止开始回答
    stopStart: function stopStart() {
      if (this.controller_nine != null) {
        this.controller_nine.abort();
      }
      clearInterval(this.t_time_nine);
      clearInterval(this.nine_shi);
      this.messageList.nine.pop();
      this.$forceUpdate();
    },
    newChatSpeak: function newChatSpeak() {
      var send_talk = this.messageList[this.listName][this.messageList[this.listName].length - 1].talk;
      var send_loading = this.messageList[this.listName][this.messageList[this.listName].length - 1].loading;
      var send_time = this.messageList[this.listName][this.messageList[this.listName].length - 1].time;

      // console.log(this.messageList[this.listName][this.messageList[this.listName].length - 1].time, 888);
      if (send_talk.indexOf('思考中') != -1 && send_time > 0) {
        this.$api.msg('当前问题还没回答完毕，请稍后再操作！');
        return;
      }
      if (send_loading == false && send_time > 0) {
        this.$api.msg('当前问题还没回答完毕，请稍后再操作！');
        return;
      }
      this.askShow = true; // 显示热搜提问
      this.messageList[this.listName].splice(1, this.messageList[this.listName].length - 1);
      this.session_code = '';
      this.chat_group_code = '';
      this.chatInputValue = '请描述一下这张图片的内容';
      this.imgList = [];
      uni.setStorageSync('imgUrl', '');
      uni.setStorageSync('discern_code', '');
    },
    getImgUrl: function getImgUrl(url) {
      return global.baseImg + '/' + url;
    },
    // 图片预览
    checkImg: function checkImg(url) {
      var img_url = global.baseImg + '/' + url;
      uni.previewImage({
        urls: [img_url],
        current: 0
      });
    },
    // AI识图
    takePhoto: function takePhoto() {
      var that = this;
      uni.chooseImage({
        count: 1,
        // mediaType: ['image'],
        sizeType: ['original', 'compressed'],
        //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        success: function success(res) {
          // console.log(res.tempFiles)
          // console.log(res,589)
          var tempFilePaths = res.tempFilePaths[0];
          that.imgList = [];
          uni.showLoading({
            title: '上传中'
          });
          uni.uploadFile({
            url: global.loginUrl + '/api/user/oss_upload',
            filePath: tempFilePaths,
            name: 'image',
            formData: {
              "image": tempFilePaths,
              "oss_dir": 'static',
              "cate": 'create_character'
            },
            success: function success(uploadFileRes) {
              var imgData = JSON.parse(uploadFileRes.data);
              // console.log(imgData,333)
              if (imgData.code == 20000) {
                // let url = global.baseImg + '/'+ imgData.data.new_url
                if (that.messageList[that.listName].length > 1) {
                  that.newChatSpeak(); // 重新传图片要开启新会话
                }

                var url = imgData.data.new_url;
                that.imgList.push(url);
                uni.hideLoading();
              } else {
                that.$api.msg(imgData.msg);
                uni.hideLoading();
              }
            }
          });
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 466:
/*!****************************************************************************************************************!*\
  !*** G:/company/h5-v1/childPage/discern/discern.vue?vue&type=style&index=0&id=331d0be7&lang=less&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_0_id_331d0be7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./discern.vue?vue&type=style&index=0&id=331d0be7&lang=less&scoped=true& */ 467);
/* harmony import */ var _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_0_id_331d0be7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_0_id_331d0be7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_0_id_331d0be7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_0_id_331d0be7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_0_id_331d0be7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 467:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/company/h5-v1/childPage/discern/discern.vue?vue&type=style&index=0&id=331d0be7&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 468:
/*!***************************************************************************************!*\
  !*** G:/company/h5-v1/childPage/discern/discern.vue?vue&type=style&index=1&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./discern.vue?vue&type=style&index=1&lang=css& */ 469);
/* harmony import */ var _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_discern_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 469:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/company/h5-v1/childPage/discern/discern.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[460,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/childPage/discern/discern.js.map