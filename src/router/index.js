import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    //   路由重定向
 

    {
      name: 'index',
      path: '/index',
      component: Index
    },
 
    
  ]
})

export default router
