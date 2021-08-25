import { createRouter, createWebHashHistory } from 'vue-router'

//引入组件
import RouterView from './components/RouterView.vue'
import RouteParam from './components/RouteParam.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/rtv', component: RouterView },
        { path: '/rtParam/:param', component: RouteParam },
        { path: '/rtParam', component: RouteParam },


    ], 
})

export default router