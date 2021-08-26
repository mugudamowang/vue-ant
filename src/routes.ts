import { createRouter, createWebHistory } from 'vue-router'

//引入组件
import RouterView from './components/RouterView.vue'
import RouteParam from './components/RouteParam.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/rtv',name:"routeview",alias:'/', component: RouterView },
        { path: '/rtParam/:param', component: RouteParam },
        { path: '/rtParam', component: RouteParam },


    ], 
})

export default router