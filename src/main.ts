import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
// import baseMixin from './mixins/baseMixin';//todo: ts类型检查导致
import fetchJsonp from 'fetch-jsonp';
import route from './routes'


// createApp(App).mount('#app')
const app = createApp(App); 
app.config.globalProperties.axios = axios;  //绑定到全局
app.config.globalProperties.fetchJsonp = fetchJsonp;  //绑定到全局
// app.mixin(baseMixin)
app.use(route);
app.mount('#app');