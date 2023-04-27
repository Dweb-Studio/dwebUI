"use strict";
const vue = require("vue");
const panel = require("./Dweb_panel/panel.vue.js");
const UI_data = require("./utils/UI_data.js");
const panel_content = require("./Dweb_panel/Dweb_panelContent/panel_content.vue.js");
const _sfc_main = vue.defineComponent({
  name: "DwebWorkbench",
  components: {
    Panel: panel,
    PanelContent: panel_content
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const workbench = vue.ref();
    const workbench_data = vue.ref(props.data);
    vue.onMounted(() => {
      workbench_data.value.refDom = workbench.value;
    });
    const subResize = (event) => {
      let subIndex = event.data_index + 1;
      if (props.data.styleValue.flexDirection == "row") {
        let subWidth = UI_data.pixiStringToNumber(
          props.data.panels[subIndex].styleValue.width.toString(),
          workbench.value.clientWidth
        );
        let subLeft = props.data.panels[subIndex].styleValue.left.replace(
          "px",
          ""
        );
        props.data.panels[subIndex].styleValue.left = parseInt(subLeft) + event.changeValue + "px";
        props.data.panels[subIndex].styleValue.width = subWidth - event.changeValue + "px";
        props.data.panels[subIndex].cacheSize.width = subWidth / workbench.value.clientWidth * 100 + "%";
      } else {
        let subHeight = UI_data.pixiStringToNumber(
          props.data.panels[subIndex].styleValue.height.toString(),
          workbench.value.clientHeight
        );
        let subTop = props.data.panels[subIndex].styleValue.top.replace(
          "px",
          ""
        );
        props.data.panels[subIndex].styleValue.top = parseInt(subTop) + event.changeValue + "px";
        props.data.panels[subIndex].styleValue.height = subHeight - event.changeValue + "px";
        props.data.panels[subIndex].cacheSize.height = subHeight / workbench.value.clientHeight * 100 + "%";
      }
    };
    return {
      workbench,
      workbench_data,
      subResize
    };
  }
});
module.exports = _sfc_main;
