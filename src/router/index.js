import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'calc',
      path: '/calc',
      component: () => import('./../pages/craftCalc.vue')
    },
    {
      name: 'info',
      path: '/',
      component: () => import('./../pages/raidInfo.vue')
    },
    {
      name: 'project',
      path: '/project',
      component: () => import('./../pages/aboutProject.vue')
    }
  ]
})

export default router
