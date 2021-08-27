import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
//todo: ts类型检查导致, 在tsconfig.json中设置"noImplicitAny": false
import baseMixin from './mixins/baseMixin'
import fetchJsonp from 'fetch-jsonp';
import route from './routes'
import store from './vuex/store'




// createApp(App).mount('#app')
let app = createApp(App); 
app.config.globalProperties.axios = axios;  //绑定到全局
app.config.globalProperties.fetchJsonp = fetchJsonp;  //绑定到全局
app.mixin(baseMixin);
app.use(route);
app.use(store);
app.mount('#app');