import type {App} from "vue"
import DwebWorkBench from './Dweb_workbench'
const components = [
  DwebWorkBench
]

const install = ((app: App) => {
  components.forEach((component:any) => {
    app.use(component)
  })
})

export default install

export {
  DwebWorkBench
}