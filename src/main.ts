import { createSSRApp } from "vue";
import App from "./App.vue";
import uviewPlus, { setConfig } from 'uview-plus'
export function createApp() {
  const app = createSSRApp(App);
  // main.js，注意要在use方法之后执行

  app.use(uviewPlus)
  return {
    app,
  };
}
