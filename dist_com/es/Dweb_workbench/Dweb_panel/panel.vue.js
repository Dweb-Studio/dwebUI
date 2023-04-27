import _sfc_main from "./panel.vue2.js";
import { resolveComponent, openBlock, createElementBlock, normalizeStyle, renderSlot, createBlock, createCommentVNode } from "vue";
import "./panel.vue3.js";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DragBar = resolveComponent("DragBar");
  return openBlock(), createElementBlock("div", {
    ref: "panelDom",
    class: "dweb_panel",
    style: normalizeStyle(_ctx.styleValue)
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    _ctx.currentPanel.last == false && _ctx.data.dragBar ? (openBlock(), createBlock(_component_DragBar, {
      key: 0,
      panel: _ctx.data,
      barPlace: _ctx.barPlace,
      onResize: _ctx.resize
    }, null, 8, ["panel", "barPlace", "onResize"])) : createCommentVNode("", true)
  ], 4);
}
const Panel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-598ce8b9"]]);
export {
  Panel as default
};
