import _sfc_main from "./workbench.vue2.js";
import { resolveComponent, openBlock, createElementBlock, normalizeStyle, Fragment, renderList, createBlock, withCtx, createVNode, resolveDynamicComponent, createCommentVNode } from "vue";
import "./workbench.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PanelContent = resolveComponent("PanelContent");
  const _component_DwebWorkbench = resolveComponent("DwebWorkbench");
  const _component_Panel = resolveComponent("Panel");
  return openBlock(), createElementBlock("div", {
    class: "dweb_workbench",
    ref: "workbench",
    style: normalizeStyle(_ctx.workbench_data.styleValue)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data.panels, (panel, index) => {
      return openBlock(), createBlock(_component_Panel, {
        key: index,
        data: panel,
        data_index: index,
        flexDir: _ctx.workbench_data.styleValue.flexDirection,
        onSubResize: _ctx.subResize
      }, {
        default: withCtx(() => [
          createVNode(_component_PanelContent, { panel }, {
            default: withCtx(() => [
              panel.component ? (openBlock(), createBlock(resolveDynamicComponent(panel.component), { key: 0 })) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1032, ["panel"]),
          panel.workbench ? (openBlock(), createBlock(_component_DwebWorkbench, {
            key: 0,
            data: panel.workbench
          }, null, 8, ["data"])) : createCommentVNode("", true)
        ]),
        _: 2
      }, 1032, ["data", "data_index", "flexDir", "onSubResize"]);
    }), 128))
  ], 4);
}
const DwebWorkBench = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-88416297"]]);
export {
  DwebWorkBench as default
};
