
import {createRouter,createWebHistory} from 'vue-router'
import AppHome from '../Component/AppHome.vue'
import AppLogin from '../Component/AppLogin.vue'
import AppRegistion from '../Component/AppRegistion.vue'
import AppOther from '../Component/AppOther.vue'
// const AppAbout = import ('../Component/AppAbout.vue')
import ErrorPage from '../Component/ErrorPage.vue'


const routes = [
    { path: '/' ,component: AppHome},
    {path : '/login', component:AppLogin},
    {path: '/register', component: AppRegistion},
    {path: '/other', component: AppOther},
    {path: '/about', component: ()=>import('../Component/AppAbout')},
    {path: '/about/:id',component: ()=>import ('../Component/AppAbout'),props:true},
    
    {path : '/:catchAll(.*)' , component: ErrorPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//     }
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
