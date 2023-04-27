"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
require("./Dweb_workbench/index.js");
const workbench = require("./Dweb_workbench/workbench.vue.js");
const components = [
  workbench
];
const install = (app) => {
  components.forEach((component) => {
    app.use(component);
  });
};
exports.DwebWorkBench = workbench;
exports.default = install;
