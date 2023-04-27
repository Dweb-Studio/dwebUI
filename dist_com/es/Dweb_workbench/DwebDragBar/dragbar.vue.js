import _sfc_main from "./dragbar.vue2.js";
import { openBlock, createElementBlock, normalizeClass, withDirectives, createElementVNode, normalizeStyle, vShow } from "vue";
import "./dragbar.vue3.js";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass("dragbar " + _ctx.barPlace + " " + _ctx.isShow),
    ref: "barRef",
    onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
    onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.onMouseDown && _ctx.onMouseDown(...args)),
    onMouseleave: _cache[4] || (_cache[4] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args))
  }, [
    withDirectives(createElementVNode("div", {
      class: "move-cover",
      style: normalizeStyle({
        width: _ctx.coverSize.width + "px",
        height: _ctx.coverSize.height + "px",
        left: _ctx.coverSize.left + "px",
        top: _ctx.coverSize.top + "px"
      }),
      onMousemove: _cache[0] || (_cache[0] = (...args) => _ctx.onMouseMove && _ctx.onMouseMove(...args)),
      onMouseup: _cache[1] || (_cache[1] = (...args) => _ctx.onMouseUp && _ctx.onMouseUp(...args))
    }, null, 36), [
      [vShow, _ctx.isResizing]
    ])
  ], 34);
}
const DragBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8a54a90f"]]);
export {
  DragBar as default
};
