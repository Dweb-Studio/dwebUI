"use strict";
const vue = require("vue");
const _sfc_main = vue.defineComponent({
  name: "DwebDragBar",
  props: {
    panel: {
      type: Object
    },
    barPlace: {
      type: String
    }
  },
  setup(props, context) {
    const panel = vue.ref(props.panel);
    const barRef = vue.ref(null);
    const parentDom = vue.ref(null);
    const barPlace = props.barPlace;
    const isShow = vue.ref("hide");
    const startX = vue.ref(0);
    const startY = vue.ref(0);
    const isResizing = vue.ref(true);
    const coverSize = vue.ref({
      width: 0,
      height: 0,
      left: 0,
      top: 0
    });
    vue.onMounted(() => {
      parentDom.value = barRef.value.parentElement;
    });
    const coverSizeChange = () => {
      coverSize.value.width = panel.value.refDom.parentElement.clientWidth;
      coverSize.value.height = panel.value.refDom.parentElement.clientHeight;
      if (barPlace == "left" || barPlace == "right") {
        coverSize.value.left = -coverSize.value.width / 2;
      } else {
        coverSize.value.top = -coverSize.value.height / 2;
      }
    };
    let resizeTimeout = 0;
    const onMouseMove = (event) => {
      if (isResizing.value) {
        const deltaX = event.pageX - startX.value;
        const deltaY = event.pageY - startY.value;
        let changeValue = 0;
        if (barPlace == "right") {
          panel.value.styleValue.width = parentDom.value.clientWidth + deltaX + "px";
          panel.value.cacheSize.width = parentDom.value.clientWidth / parentDom.value.parentElement.clientWidth * 100 + "%";
          changeValue = deltaX;
        }
        if (barPlace == "left") {
          parentDom.value.style.width = parentDom.value.clientWidth - deltaX + "px";
          parentDom.value.style.left = parentDom.value.offsetLeft + deltaX + "px";
          changeValue = deltaX;
        }
        if (barPlace == "top") {
          parentDom.value.style.height = parentDom.value.clientHeight - deltaY + "px";
          parentDom.value.style.top = parentDom.value.offsetTop + deltaY + "px";
          changeValue = deltaY;
        }
        if (barPlace == "bottom") {
          panel.value.styleValue.height = parentDom.value.clientHeight + deltaY + "px";
          panel.value.cacheSize.height = parentDom.value.clientHeight / parentDom.value.parentElement.clientHeight * 100 + "%";
          changeValue = deltaY;
        }
        startX.value = event.pageX;
        startY.value = event.pageY;
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
    const onMouseDown = (event) => {
      startX.value = event.pageX;
      startY.value = event.pageY;
      isResizing.value = true;
      coverSizeChange();
    };
    return {
      barRef,
      barPlace,
      isShow,
      isResizing,
      coverSize,
      //methods
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseEnter,
      onMouseLeave
    };
  }
});
module.exports = _sfc_main;
