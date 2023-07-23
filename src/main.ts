import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import axios from "axios";
import App from "./App.vue";
axios.defaults.baseURL = "http://localhost:8089/jydam";
// http://localhost:8089/jydam/getDeviceDataBetweenTimeByHour
const app = createApp(App);
const pinia = createPinia();
app.config.globalProperties.$http = axios;
app.use(ElementPlus).use(pinia).mount("#app");
