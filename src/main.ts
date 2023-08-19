import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import axios from "axios";
import App from "./App.vue";
import router from './router'
import piniaPersist from 'pinia-plugin-persist'
// axios.defaults.baseURL = "http://localhost:8089/jydam";
axios.defaults.baseURL = "http://118.178.132.49:8089/jydam"
// http://localhost:8089/jydam/getDeviceDataBetweenTimeByHour
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);
app.config.globalProperties.$http = axios;
app.use(ElementPlus).use(pinia).use(router).mount("#app");
