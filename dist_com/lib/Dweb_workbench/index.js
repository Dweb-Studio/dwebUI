"use strict";
const workbench = require("./workbench.vue.js");
workbench.install = (app) => {
  app.component(workbench.name, workbench);
};
module.exports = workbench;
