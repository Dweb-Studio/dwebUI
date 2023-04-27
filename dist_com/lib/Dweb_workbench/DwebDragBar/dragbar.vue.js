"use strict";
const dragbar_vue_vue_type_script_lang = require("./dragbar.vue2.js");
const vue = require("vue");
require("./dragbar.vue3.js");
const _pluginVue_exportHelper = require("../../_virtual/_plugin-vue_export-helper.js");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass("dragbar " + _ctx.barPlace + " " + _ctx.isShow),
    ref: "barRef",
    onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
    onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.onMouseDown && _ctx.onMouseDown(...args)),
    onMouseleave: _cache[4] || (_cache[4] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args))
  }, [
    vue.withDirectives(vue.createElementVNode("div", {
      class: "move-cover",
      style: vue.normalizeStyle({
        width: _ctx.coverSize.width + "px",
        height: _ctx.coverSize.height + "px",
        left: _ctx.coverSize.left + "px",
        top: _ctx.coverSize.top + "px"
      }),
      onMousemove: _cache[0] || (_cache[0] = (...args) => _ctx.onMouseMove && _ctx.onMouseMove(...args)),
      onMouseup: _cache[1] || (_cache[1] = (...args) => _ctx.onMouseUp && _ctx.onMouseUp(...args))
    }, null, 36), [
      [vue.vShow, _ctx.isResizing]
    ])
  ], 34);
}
const DragBar = /* @__PURE__ */ _pluginVue_exportHelper(dragbar_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-8a54a90f"]]);
module.exports = DragBar;
