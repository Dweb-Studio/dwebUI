import _sfc_main from "./panel_content.vue2.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, renderSlot } from "vue";
import "./panel_content.vue3.js";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = { class: "panel-content" };
const _hoisted_2 = {
  key: 0,
  class: "panel-name"
};
const _hoisted_3 = { class: "panel-component" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !_ctx.panel.workbench ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createElementVNode("span", null, toDisplayString(_ctx.panel.name), 1)
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_3, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
const PanelContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5995c7f0"]]);
export {
  PanelContent as default
};
