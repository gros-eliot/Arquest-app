import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestCreateView from '../views/QuestCreateView.vue'
import HistoryView from '../views/HistoryView.vue'
import AgendaView from '../views/AgendaView.vue'
import AvatarView from '../views/AvatarView.vue'
import GiftsView from '../views/GiftsView.vue'

import GuideStyle from '../views/GuideStyle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/create_quest',
      name: 'QuestCreateView',
      component: QuestCreateView,
    },
    {
      path: '/history',
      name: 'HistoryView',
      component: HistoryView,
    },
    {
      path: '/agenda',
      name: 'AgendaView',
      component: AgendaView,
    },
    {
      path: '/avatar',
      name: 'AvatarView',
      component: AvatarView,
    },
    {
      path: '/gifts',
      name: 'GiftsView',
      component: GiftsView,
    },

    {
      path: '/gds',
      name: 'GuideStyle',
      component: GuideStyle,
    },
  ]
})

export default router
