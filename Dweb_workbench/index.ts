import { App } from 'vue';
import DwebWorkBench from './workbench.vue'

DwebWorkBench.install = (app: App)=> {
  app.component(DwebWorkBench.name, DwebWorkBench);
};

export default DwebWorkBench