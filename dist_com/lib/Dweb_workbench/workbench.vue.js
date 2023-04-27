"use strict";
const workbench_vue_vue_type_script_lang = require("./workbench.vue2.js");
const vue = require("vue");
require("./workbench.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PanelContent = vue.resolveComponent("PanelContent");
  const _component_DwebWorkbench = vue.resolveComponent("DwebWorkbench");
  const _component_Panel = vue.resolveComponent("Panel");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: "dweb_workbench",
    ref: "workbench",
    style: vue.normalizeStyle(_ctx.workbench_data.styleValue)
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data.panels, (panel, index) => {
      return vue.openBlock(), vue.createBlock(_component_Panel, {
        key: index,
        data: panel,
        data_index: index,
        flexDir: _ctx.workbench_data.styleValue.flexDirection,
        onSubResize: _ctx.subResize
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_PanelContent, { panel }, {
            default: vue.withCtx(() => [
              panel.component ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(panel.component), { key: 0 })) : vue.createCommentVNode("", true)
            ]),
            _: 2
          }, 1032, ["panel"]),
          panel.workbench ? (vue.openBlock(), vue.createBlock(_component_DwebWorkbench, {
            key: 0,
            data: panel.workbench
          }, null, 8, ["data"])) : vue.createCommentVNode("", true)
        ]),
        _: 2
      }, 1032, ["data", "data_index", "flexDir", "onSubResize"]);
    }), 128))
  ], 4);
}
const DwebWorkBench = /* @__PURE__ */ _pluginVue_exportHelper(workbench_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-88416297"]]);
module.exports = DwebWorkBench;
