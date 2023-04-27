import { defineComponent, ref, onMounted } from "vue";
import Panel from "./Dweb_panel/panel.vue.js";
import { pixiStringToNumber } from "./utils/UI_data.js";
import PanelContent from "./Dweb_panel/Dweb_panelContent/panel_content.vue.js";
const _sfc_main = defineComponent({
  name: "DwebWorkbench",
  components: {
    Panel,
    PanelContent
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const workbench = ref();
    const workbench_data = ref(props.data);
    onMounted(() => {
      workbench_data.value.refDom = workbench.value;
    });
    const subResize = (event) => {
      let subIndex = event.data_index + 1;
      if (props.data.styleValue.flexDirection == "row") {
        let subWidth = pixiStringToNumber(
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
        let subHeight = pixiStringToNumber(
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
export {
  _sfc_main as default
};
