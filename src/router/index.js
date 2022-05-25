import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// à ajouter avec les users !!
// import ConnexionView from '../views/ConnexionView.vue'
import QuestCreateView from '../views/QuestCreateView.vue'
import QuestModifView from '../views/QuestModifView.vue'
import HistoryView from '../views/HistoryView.vue'
import AgendaView from '../views/AgendaView.vue'
import AvatarView from '../views/AvatarView.vue'

import ContactView from '../views/ContactView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import AboutView from '../views/AboutView.vue'
import AproposView from '../views/AproposView.vue'
import GuideStyle from '../components/ancients_and_gds/GuideStyle.vue'
import CustomAvatarView from '../views/CustomAvatarView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import ListecatView from '../views/ListecatView.vue'

import Socialmedia from '../views/Socialmedia.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // A SUPPRIMER UNE FOIS LES USERS FAITS !
    { path: '/', name: 'home', component: HomeView },
    //
// A FAIRE AVEC LES USERS !
  //  { path: '/', name: 'ConnexionView', component: ConnexionView },
  //  { path: '/home', name: 'homeView', component: HomeView },
  //
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
    { path: '/custom_avatar', name: 'CustomAvatarView', component: CustomAvatarView },
    { path: '/inscription', name: 'InscriptionView', component: InscriptionView },

  ]
})

export default router
