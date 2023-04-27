"use strict";
const panel_vue_vue_type_script_lang = require("./panel.vue2.js");
const vue = require("vue");
require("./panel.vue3.js");
const _pluginVue_exportHelper = require("../../_virtual/_plugin-vue_export-helper.js");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DragBar = vue.resolveComponent("DragBar");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "panelDom",
    class: "dweb_panel",
    style: vue.normalizeStyle(_ctx.styleValue)
  }, [
    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
    _ctx.currentPanel.last == false && _ctx.data.dragBar ? (vue.openBlock(), vue.createBlock(_component_DragBar, {
      key: 0,
      panel: _ctx.data,
      barPlace: _ctx.barPlace,
      onResize: _ctx.resize
    }, null, 8, ["panel", "barPlace", "onResize"])) : vue.createCommentVNode("", true)
  ], 4);
}
const Panel = /* @__PURE__ */ _pluginVue_exportHelper(panel_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-598ce8b9"]]);
module.exports = Panel;
