"use strict";
const panel_content_vue_vue_type_script_lang = require("./panel_content.vue2.js");
const vue = require("vue");
require("./panel_content.vue3.js");
const _pluginVue_exportHelper = require("../../../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = { class: "panel-content" };
const _hoisted_2 = {
  key: 0,
  class: "panel-name"
};
const _hoisted_3 = { class: "panel-component" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    !_ctx.panel.workbench ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.panel.name), 1)
    ])) : vue.createCommentVNode("", true),
    vue.createElementVNode("div", _hoisted_3, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
const PanelContent = /* @__PURE__ */ _pluginVue_exportHelper(panel_content_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-5995c7f0"]]);
module.exports = PanelContent;
