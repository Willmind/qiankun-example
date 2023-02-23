import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "subapp",
    entry: "//localhost:8080",
    container: "#app",
    activeRule: "/subapp"
  }
]);
start()

createApp(App).mount("#app");
