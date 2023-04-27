"use strict";
const vue = require("vue");
const UI_data = require("../utils/UI_data.js");
const dragbar = require("../DwebDragBar/dragbar.vue.js");
const _sfc_main = vue.defineComponent({
  name: "DwebPanel",
  components: {
    DragBar: dragbar
  },
  props: {
    data_index: {
      type: Number,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    flexDir: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    let vueInstance = vue.getCurrentInstance();
    const panelDom = vue.ref(void 0);
    const parentDom_ref = vue.ref(null);
    const panel = vue.reactive(props.data);
    const styleValue = vue.ref(props.data.styleValue);
    const cacheSize = vue.ref(props.data.cacheSize);
    const barPlace = vue.ref(props.flexDir == "row" ? "right" : "bottom");
    const currentPanel = vue.ref({
      last: false,
      nextPanel: null
    });
    vue.onMounted(() => {
      panel.refDom = panelDom.value;
      currentPanel.value = UI_data.isNotLastDom(panelDom, vueInstance);
      if (!currentPanel.value.nextPanel) {
        currentPanel.value.last = true;
      }
      let parentDom = panelDom.value.parentElement;
      parentDom_ref.value = parentDom;
      if (panel) {
        if (parentDom.style.flexDirection == "row") {
          panel.styleValue.width = panelDom.value.clientWidth + "px";
          panel.styleValue.height = parentDom.clientHeight + "px";
          panel.styleValue.top = panelDom.value.offsetTop + "px";
          panel.styleValue.position = "absolute";
          panel.styleValue.left = panelDom.value.offsetLeft + "px";
          cacheSize.value.width = panelDom.value.clientWidth / parentDom.clientWidth * 100 + "%";
          cacheSize.value.height = "100%";
        } else {
          panel.styleValue.width = panelDom.value.clientWidth + "px";
          panel.styleValue.height = panelDom.value.clientHeight + "px";
          panel.styleValue.top = panelDom.value.offsetTop + "px";
          panel.styleValue.position = "absolute";
          panel.styleValue.left = panelDom.value.offsetLeft + "px";
          cacheSize.value.width = "100%";
          cacheSize.value.height = panelDom.value.clientHeight / parentDom.clientHeight * 100 + "%";
        }
      }
    });
    const resize = (changeValue) => {
      if (panel.workbench) {
        if (panel.workbench.styleValue.flexDirection == "column") {
          panel.workbench.panels.forEach((subPanel, index) => {
            subPanel.styleValue.width = panelDom.value.clientWidth + "px";
            subPanel.cacheSize.width = "100%";
            subPanel.cacheSize.height = panelDom.value.clientHeight / parentDom_ref.value.clientHeight * 100 + "%";
          });
        }
      }
      context.emit("subResize", {
        changeValue,
        data_index: props.data_index
      });
    };
    return {
      panel,
      panelDom,
      styleValue,
      barPlace,
      currentPanel,
      resize
    };
  }
});
module.exports = _sfc_main;
