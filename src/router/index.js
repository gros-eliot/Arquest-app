import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// à ajouter avec les users !!
// import ConnexionView from '../views/ConnexionView.vue'

import QuestCreateView from '../views/quest/QuestCreateView.vue'
import QuestModifView from '../views/quest/QuestModifView.vue'
import QuestDeleteView from '../views/quest/QuestDeleteView.vue'

import HistListeView from '../views/history/HistListeView.vue'

import AgendaView from '../views/AgendaView.vue'

import AvatarView from '../views/avatar/AvatarView.vue'
import CustomAvatarView from '../views/avatar/CustomAvatarView.vue'

import ContactView from '../views/ContactView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import AboutView from '../views/AboutView.vue'
import AproposView from '../views/AproposView.vue'
import GuideStyle from '../components/ancients_and_gds/GuideStyle.vue'
import ListecatView from '../views/ListecatView.vue'

import Socialmedia from '../views/Socialmedia.vue'
import ConnexionView from '../views/ConnexionView.vue'

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
  // MODIFIER LE PATH dans chaque vue où l'on a une redirection à la page d'accueil ! => navView, HeaderView, menu...
  //


    { path: '/create_quest', name: 'QuestCreateView', component: QuestCreateView, },
    { path: '/custom_quest/:id', name: 'QuestModifView', component: QuestModifView, },
    { path: '/delete_quest/:id', name: 'QuestDeleteView', component: QuestDeleteView, },


    { path: '/history', name: 'HistListeView', component: HistListeView, },

    { path: '/agenda', name: 'AgendaView', component: AgendaView, },
    { path: '/avatar', name: 'AvatarView', component: AvatarView, },
    { path: '/custom_avatar', name: 'CustomAvatarView', component: CustomAvatarView },

    { path: '/listecat', name: 'ListecatView', component: ListecatView, },

    { path: '/contact', name: 'ContactView', component: ContactView, },
    { path: '/mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView, },
    { path: '/about', name: 'AboutView', component: AboutView, },
    { path: '/apropos', name: 'AproposView', component: AproposView, },

    { path: '/gds', name: 'GuideStyle', component: GuideStyle },

    { path: '/social', name: 'Socialmedia', component: Socialmedia },
    { path: '/connexion', name: 'ConnexionView', component: ConnexionView },

  ]
})

export default router
