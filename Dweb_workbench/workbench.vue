<template>
  <div class="dweb_workbench" ref="workbench" :style="workbench_data.styleValue">
    <Panel
      v-for="(panel, index) in data.panels"
      :key="index"
      :data="panel"
      :data_index="index"
      :flexDir="workbench_data.styleValue.flexDirection"
      @subResize="subResize"
    >
      <PanelContent :panel="panel">
        <component v-if="panel.component" :is="panel.component" />
      </PanelContent>
      <DwebWorkbench v-if="panel.workbench" :data="panel.workbench" />
    </Panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Panel from "./Dweb_panel/panel.vue";
import { Workbench, pixiStringToNumber } from "./utils/UI_data";
import PanelContent from "./Dweb_panel/Dweb_panelContent/panel_content.vue";
export default defineComponent({
  name: "DwebWorkbench",
  components: {
    Panel,
    PanelContent,
  },
  props: {
    data: {
      type: Object as () => Workbench,
      required: true,
    },
  },
  setup(props) {
    const workbench = ref();
    const workbench_data = ref(props.data);

    onMounted(() => {
      workbench_data.value.refDom = workbench.value;
    });

    const subResize = (event: { changeValue: number; data_index: number }) => {
      let subIndex = event.data_index + 1;
      if (props.data.styleValue.flexDirection == "row") {
        let subWidth = pixiStringToNumber(
          props.data.panels[subIndex].styleValue.width!.toString(),
          workbench.value.clientWidth
        );
        let subLeft = (props.data.panels[subIndex].styleValue.left as string).replace(
          "px",
          ""
        );
        props.data.panels[subIndex].styleValue.left =
          parseInt(subLeft) + event.changeValue + "px";
        props.data.panels[subIndex].styleValue.width =
          subWidth - event.changeValue + "px";

        props.data.panels[subIndex].cacheSize.width =
          (subWidth / workbench.value.clientWidth) * 100 + "%";
      } else {
        let subHeight = pixiStringToNumber(
          props.data.panels[subIndex].styleValue.height!.toString(),
          workbench.value.clientHeight
        );
        let subTop = (props.data.panels[subIndex].styleValue.top as string).replace(
          "px",
          ""
        );
        props.data.panels[subIndex].styleValue.top =
          parseInt(subTop) + event.changeValue + "px";
        props.data.panels[subIndex].styleValue.height =
          subHeight - event.changeValue + "px";

        props.data.panels[subIndex].cacheSize.height =
          (subHeight / workbench.value.clientHeight) * 100 + "%";
      }
    };
    return {
      workbench: workbench,
      workbench_data: workbench_data,
      subResize: subResize,
    };
  },
});
</script>

<style scoped>
.dweb_workbench {
  position: relative;
  background: #21252b;
  display: flex;
}
</style>
