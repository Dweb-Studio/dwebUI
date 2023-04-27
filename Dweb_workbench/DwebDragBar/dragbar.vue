<template>
  <div
    :class="'dragbar ' + barPlace + ' ' + isShow"
    ref="barRef"
    @mouseenter="onMouseEnter"
    @mousedown="onMouseDown"
    @mouseleave="onMouseLeave"
  >
    <!-- v-if="isShow == 'show'" -->
    <!-- v-if="isResizing" -->
    <div
      v-show="isResizing"
      class="move-cover"
      :style="{
        width: coverSize!.width + 'px',
        height: coverSize!.height + 'px',
        left: coverSize!.left + 'px',
        top: coverSize!.top + 'px',
      }"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Panel } from "../utils/UI_data";
export default defineComponent({
  name: "DwebDragBar",
  props: {
    panel: {
      type: Object as () => Panel,
    },
    barPlace: {
      type: String,
    },
  },
  setup(props, context) {
    const panel = ref(props.panel);
    const barRef = ref<HTMLElement | null>(null);
    const parentDom = ref<HTMLElement | null>(null);
    const barPlace = props.barPlace;
    const isShow = ref<string>("hide");
    const startX = ref(0);
    const startY = ref(0);
    const isResizing = ref(true);
    const coverSize = ref<{ width: number; height: number; left: number; top: number }>({
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    });

    onMounted(() => {
      parentDom.value = barRef.value!.parentElement;
    });

    const coverSizeChange = () => {
      coverSize.value.width = panel.value!.refDom!.parentElement!.clientWidth;
      coverSize.value.height = panel.value!.refDom!.parentElement!.clientHeight;
      if (barPlace == "left" || barPlace == "right") {
        coverSize.value.left = -coverSize.value.width / 2;
      } else {
        coverSize.value.top = -coverSize.value.height / 2;
      }
    };

    let resizeTimeout:number =  0;
    const onMouseMove = (event: MouseEvent) => {
      if (isResizing.value) {
        const deltaX = event.pageX - startX.value;
        const deltaY = event.pageY - startY.value;
        let changeValue = 0;
        if (barPlace == "right") {
          // parentDom.value!.style.width = parentDom.value!.clientWidth + deltaX + "px";
          panel.value!.styleValue.width = parentDom.value!.clientWidth + deltaX + "px";

          panel.value!.cacheSize.width =
            (parentDom.value!.clientWidth / parentDom.value!.parentElement!.clientWidth) *
              100 +
            "%";
          changeValue = deltaX;
        }

        if (barPlace == "left") {
          parentDom.value!.style.width = parentDom.value!.clientWidth - deltaX + "px";
          parentDom.value!.style.left = parentDom.value!.offsetLeft + deltaX + "px";
          changeValue = deltaX;
        }

        if (barPlace == "top") {
          parentDom.value!.style.height = parentDom.value!.clientHeight - deltaY + "px";
          parentDom.value!.style.top = parentDom.value!.offsetTop + deltaY + "px";
          changeValue = deltaY;
        }

        if (barPlace == "bottom") {
          panel.value!.styleValue.height = parentDom.value!.clientHeight + deltaY + "px";

          panel.value!.cacheSize.height =
            (parentDom.value!.clientHeight /
              parentDom.value!.parentElement!.clientHeight) *
              100 +
            "%";
          changeValue = deltaY;
        }

        startX.value = event.pageX;
        startY.value = event.pageY;

        //事件传递
        context.emit("resize", changeValue);
      }

      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        onMouseUp();
      }, 300);
    };

    const onMouseUp = () => {
      isResizing.value = false;

      coverSize.value.width = 0;
      coverSize.value.height = 0;
      coverSize.value.left = 0;
      coverSize.value.top = 0;
    };
    const onMouseLeave = () => {
      isShow.value = "hide";

      coverSize.value.width = 0;
      coverSize.value.height = 0;
      coverSize.value.left = 0;
      coverSize.value.top = 0;
    };

    const onMouseEnter = () => {
      isShow.value = "show";
      isResizing.value = false;

      coverSize.value.width = 0;
      coverSize.value.height = 0;
      coverSize.value.left = 0;
      coverSize.value.top = 0;
    };

    const onMouseDown = (event: MouseEvent) => {
      startX.value = event.pageX;
      startY.value = event.pageY;
      isResizing.value = true;
      coverSizeChange();
    };

    return {
      barRef: barRef,
      barPlace: barPlace,
      isShow: isShow,
      isResizing: isResizing,
      coverSize: coverSize,

      //methods
      onMouseDown: onMouseDown,
      onMouseMove: onMouseMove,
      onMouseUp: onMouseUp,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
    };
  },
});
</script>

<style scoped>
.dragbar {
  position: absolute;
  z-index: 10000;
}
.right {
  width: 10px;
  height: 100%;
  right: 0;
  top: 0;
  cursor: w-resize;
}
.left {
  width: 10px;
  height: 100%;
  left: 0;
  top: 0;
  cursor: w-resize;
}
.top {
  width: 100%;
  height: 10px;
  top: 0;
  cursor: s-resize;
}

.bottom {
  width: 100%;
  height: 10px;
  bottom: 0;
  cursor: s-resize;
}
.hide {
  background: #ffffff00;
  transition: all 0.3s ease;
}
.show {
  background: #3e4452;
  transition: all 0.3s ease;
}
.move-cover {
  position: absolute;
  background: #47fe0500;
}
.right .move-cover {
  width: 100px;
  height: 100%;
  left: -50px;
  z-index: 9999;
}
.left .move-cover {
  width: 100px;
  height: 100%;
  left: -50px;
  z-index: 9999;
}
.top .move-cover {
  width: 100%;
  height: 100px;
  top: -50px;
  z-index: 9999;
}
.bottom .move-cover {
  width: 100%;
  height: 100px;
  top: -50px;
  z-index: 9999;
}
</style>
