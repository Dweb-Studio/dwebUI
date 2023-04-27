import DwebWorkBench from "./workbench.vue.js";
DwebWorkBench.install = (app) => {
  app.component(DwebWorkBench.name, DwebWorkBench);
};
export {
  DwebWorkBench as default
};
