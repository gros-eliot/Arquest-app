import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideStyle from '../views/GuideStyle.vue'
import Quetecree from '../views/Quetecree.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gds',
      name: 'GuideStyle',
      component: GuideStyle,
    },
    {
      path: '/qc',
      name: 'Quetecree',
      component: Quetecree,
    }
  ]
})

export default router
