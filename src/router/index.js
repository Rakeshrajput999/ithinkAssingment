import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('../views/HomeView.vue')
    },
    {
      path: '/store-table',
      name: 'store-table',

      component: () => import('../views/StoreData.vue')
    }
  ]
})

export default router
