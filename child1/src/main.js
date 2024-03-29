import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "../public-path";

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App).mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

createApp(App).mount("#app");


export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
