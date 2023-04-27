<template>
  <div class="panel-content">
    <div v-if="!panel.workbench" class="panel-name">
      <span>{{ panel.name }}</span>
    </div>
    <div class="panel-component">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Panel } from "../../utils/UI_data";

export default defineComponent({
  props: {
    panel: {
      type: Object as () => Panel,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
.panel-content {
  position: absolute;
  width: 100%;
  height: 100%;
  /* -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none;  */
  user-select: none;
  box-sizing: border-box;
  /* border: 1px solid #fff; */
}
.panel-name {
  /* width: 100%; */
  height: 30px;
  background: #363636;
  padding: 0px 15px;
  color: #fff;
  text-shadow: 0px 0px 2px #38a9b69d, 0px 0px 4px #38a9b69d, 0px 0px 6px #38a9b69d;
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: -2px 0px 5px #38a9b69d, -2px 0px 8px #38a9b69d;
}
.panel-component {
  /* width: 100%; */
  height: calc(100% - 30px);
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  /* border: 1px solid #fff; */
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
</style>
