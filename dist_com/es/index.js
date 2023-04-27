import "./Dweb_workbench/index.js";
import DwebWorkBench from "./Dweb_workbench/workbench.vue.js";
const components = [
  DwebWorkBench
];
const install = (app) => {
  components.forEach((component) => {
    app.use(component);
  });
};
export {
  DwebWorkBench,
  install as default
};
