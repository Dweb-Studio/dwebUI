<template>
  <div ref="panelDom" class="dweb_panel" :style="styleValue">
    <slot></slot>
    <DragBar
      v-if="currentPanel.last == false && data.dragBar"
      :panel="data"
      :barPlace="barPlace"
      @resize="resize"
    >
    </DragBar>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from "vue";
import { isNotLastDom, Panel } from "../utils/UI_data";
import DragBar from "../DwebDragBar/dragbar.vue";
import { FlexDirectionProperty } from "csstype";
export default defineComponent({
  name: "DwebPanel",
  components: {
    DragBar,
  },
  props: {
    data_index: {
      type: Number,
      required: true,
    },
    data: {
      type: Object as () => Panel,
      required: true,
    },
    flexDir: {
      type: String as () => FlexDirectionProperty | undefined,
      required: true,
    },
  },
  setup(props, context) {
    let vueInstance = getCurrentInstance();
    const panelDom = ref<HTMLElement | undefined>(undefined);
    const parentDom_ref = ref<HTMLElement | null>(null);
    const panel = reactive<Panel>(props.data);
    const styleValue = ref(props.data.styleValue);
    const cacheSize = ref(props.data.cacheSize);
    const barPlace = ref<string>(props.flexDir == "row" ? "right" : "bottom");
    const currentPanel = ref<{
      last: boolean;
      nextPanel: HTMLElement | null | undefined;
    }>({
      last: false,
      nextPanel: null,
    });

    onMounted(() => {
      panel.refDom = panelDom.value!;
      currentPanel.value = isNotLastDom(panelDom, vueInstance);
      if (!currentPanel.value.nextPanel) {
        currentPanel.value.last = true;
      }

      let parentDom = panelDom.value!.parentElement;
      parentDom_ref.value = parentDom;
      if (panel) {
        if (parentDom!.style.flexDirection == "row") {
          panel.styleValue.width = panelDom.value!.clientWidth + "px";
          panel.styleValue.height = parentDom!.clientHeight + "px";
          panel.styleValue.top = panelDom.value!.offsetTop + "px";
          panel.styleValue.position = "absolute";
          panel.styleValue.left = panelDom.value!.offsetLeft + "px";
          //缓存用于还原
          cacheSize.value.width =
            (panelDom.value!.clientWidth / parentDom!.clientWidth) * 100 + "%";
          cacheSize.value.height = "100%";
        } else {
          panel.styleValue.width = panelDom.value!.clientWidth + "px";
          panel.styleValue.height = panelDom.value!.clientHeight + "px";
          panel.styleValue.top = panelDom.value!.offsetTop + "px";
          panel.styleValue.position = "absolute";
          panel.styleValue.left = panelDom.value!.offsetLeft + "px";

          //缓存用于还原
          cacheSize.value.width = "100%";
          cacheSize.value.height =
            (panelDom.value!.clientHeight / parentDom!.clientHeight) * 100 + "%";
        }
      }
    });

    const resize = (changeValue: number) => {
      if (panel.workbench) {
        if (panel.workbench.styleValue.flexDirection == "column") {
          panel.workbench.panels.forEach((subPanel, index) => {
            subPanel.styleValue.width = panelDom.value!.clientWidth + "px";
            subPanel.cacheSize.width = "100%";
            subPanel.cacheSize.height =
              (panelDom.value!.clientHeight / parentDom_ref.value!.clientHeight) * 100 +
              "%";
          });
        }
      }

      context.emit("subResize", {
        changeValue: changeValue,
        data_index: props.data_index,
      });
    };

    return {
      panel: panel,
      panelDom: panelDom,
      styleValue: styleValue,
      barPlace: barPlace,
      currentPanel: currentPanel,

      resize: resize,
    };
  },
});
</script>

<style scoped>
.dweb_panel {
  background: #21252b;
  display: flex;
}
</style>
