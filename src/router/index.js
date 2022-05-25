import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestCreateView from '../views/QuestCreateView.vue'
import QuestModifView from '../views/QuestModifView.vue'
import HistoryView from '../views/HistoryView.vue'
import AgendaView from '../views/AgendaView.vue'
import AvatarView from '../views/AvatarView.vue'

import ContactView from '../views/ContactView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import AboutView from '../views/AboutView.vue'
import AproposView from '../views/AproposView.vue'
import GuideStyle from '../views/GuideStyle.vue'
import CustomView from '../views/CustomView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import ListecatView from '../views/ListecatView.vue'

import Socialmedia from '../views/Socialmedia.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/create_quest', name: 'QuestCreateView', component: QuestCreateView, },
    { path: '/custom_quest', name: 'QuestModifView', component: QuestModifView, },
    { path: '/history', name: 'HistoryView', component: HistoryView, },
    { path: '/agenda', name: 'AgendaView', component: AgendaView, },
    { path: '/avatar', name: 'AvatarView', component: AvatarView, },
    { path: '/listecat', name: 'ListeCat', component: ListecatView, },

    { path: '/contact', name: 'ContactView', component: ContactView, },
    { path: '/mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView, },
    { path: '/about', name: 'AboutView', component: AboutView, },
    { path: '/apropos', name: 'AproposView', component: AproposView, },

    { path: '/gds', name: 'GuideStyle', component: GuideStyle },

    { path: '/social', name: 'Socialmedia', component: Socialmedia },
    { path: '/custom', name: 'CustomView', component: CustomView },
    { path: '/inscription', name: 'InscriptionView', component: InscriptionView },

  ]
})

export default router
