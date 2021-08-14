import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import fetchJsonp from '_fetch-jsonp@1.1.3@fetch-jsonp';


// createApp(App).mount('#app')
const app = createApp(App); 
app.config.globalProperties.axios = axios;  //绑定到全局
app.config.globalProperties.fetchJsonp = fetchJsonp;  //绑定到全局

app.mount('#app');