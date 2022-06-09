import { createRouter, createWebHistory } from 'vue-router'

//
//
//

// Fonction d'authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Fonctions Firestore
import { 
  getFirestore, 
  collection, 
  onSnapshot, 
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

//
//
//

import HomeView from '../views/HomeView.vue'


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
import View404 from '../views/View404.vue'

import Socialmedia from '../views/Socialmedia.vue'
import ConnexionView from '../views/ConnexionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


      { path: '/', name: 'ConnexionView', component: ConnexionView },
      { path: '/home', name: 'homeView', component: HomeView, beforeEnter:guard  },



    { path: '/create_quest', name: 'QuestCreateView', component: QuestCreateView, beforeEnter:guard  },
    { path: '/custom_quest/:id', name: 'QuestModifView', component: QuestModifView, beforeEnter:guard  },
    { path: '/delete_quest/:id', name: 'QuestDeleteView', component: QuestDeleteView, beforeEnter:guard  },


    { path: '/history', name: 'HistListeView', component: HistListeView, beforeEnter:guard },

    { path: '/agenda', name: 'AgendaView', component: AgendaView, beforeEnter:guard  },
    { path: '/avatar', name: 'AvatarView', component: AvatarView, beforeEnter:guard  },
    { path: '/custom_avatar', name: 'CustomAvatarView', component: CustomAvatarView, beforeEnter:guard  },

    { path: '/listecat', name: 'ListecatView', component: ListecatView, beforeEnter:guard  },

    { path: '/contact', name: 'ContactView', component: ContactView, beforeEnter:guard  },
    { path: '/mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView, beforeEnter:guard  },
    { path: '/about', name: 'AboutView', component: AboutView, beforeEnter:guard  },
    { path: '/apropos', name: 'AproposView', component: AproposView, beforeEnter:guard  },
    { path: '/:pathMatch(.*)', name: 'View404', component: View404, beforeEnter:guard  },

    { path: '/gds', name: 'GuideStyle', component: GuideStyle, beforeEnter:guard  },

    { path: '/social', name: 'Socialmedia', component: Socialmedia, beforeEnter:guard  },

  ]
})

// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guard(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function(user) {
    if(user) {
      // User connecté
//      console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
          let userInfo = snapshot.docs.map(doc => ( {id:doc.id, ...doc.data()}));
          // userInfo étant un tableau, on récupère
          // ses informations dans la 1° cellule du tableau : 0
          let accesPages=null;
          accesPages=userInfo[0];
          if(accesPages != null){

            next(to.params.name);
            return;
          }else{
            // Utilisateur non administrateur, renvoi sur accueil
            alert("Vous n'êtes pas connecté !");
            next({name: "ConnexionView"});
            return;
          }
      })
    }else {
      // Utilisateur non connecté, renvoi sur accueil
//      console.log('router NOK => user ', user);
      next({name: "ConnexionView"});
    }
  });
}

export default router
