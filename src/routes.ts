import { createRouter, createWebHistory } from 'vue-router'

//引入组件
import RouterView from './components/RouterView.vue'
import RouteParam from './components/RouteParam.vue'
import RouteChildren from './components/RouteChildren.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/rtv', name: "routeview", alias: '/', component: RouterView,
            children:[
                {path:'child',component:RouteChildren},
                {path:'home',redirect:'/'},

            ]
        },
        { path: '/rtParam/:param', component: RouteParam },
        { path: '/rtParam', component: RouteParam },


    ],
})

export default router