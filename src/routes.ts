import { createRouter, createWebHashHistory } from 'vue-router'

//引入组件
import RouterView from './components/RouterView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/rtv', component: RouterView }
    ], 
})

export default router