<template>
  <header class="text-white">
    <HeaderView class="fixed z-[9]" v-if="$route.name != 'ConnexionView' && $route.name != 'NewsArquest'" />

    <NavView class="fixed bottom-0 z-[8]" v-if="$route.name != 'ConnexionView' && $route.name != 'NewsArquest'" />
  </header>
  <main class="pt-20">
    <router-view></router-view>
  </main>
  <footer
    class="bottom-0 mt-5"
    :class="{
      'pb-[4.5rem]': $route.name != 'ConnexionView',
    }"
  >
    <footer-view class="bottom-0 w-full"></footer-view>
  </footer>
</template>

<script>
import FooterView from "./components/layouts/FooterView.vue";
import HeaderView from "./components/layouts/HeaderView.vue";
import NavView from "./components/layouts/NavView.vue";
import GuideStyle from "./components/ancients_and_gds/GuideStyle.vue";

// Fonctions Firestore
import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "./main.js";

export default {
  components: {
    FooterView,
    HeaderView,
    NavView,
    GuideStyle,
  },

  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: null, // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      fond: null, // Fond (background) / image de fond du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
      categoryLevel: null,
    };
  },
  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Ecoute de l'évènement de connexion
    emitter.on("connectUser", (e) => {
      // Récupération du user
      this.user = e.user;
      // console.log("App => Reception user connecté", this.user);

      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });

    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;
      // console.log("App => Reception user deconnecté", this.user);

      // Réinitialisation infos complémentaires user

      this.userInfo = null;
      this.name = null;
      this.avatar = null;
      this.fond = null;
      this.isAdmin = false;
      this.categoryLevel = null;
    });
  },

  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        this.categoryLevel = this.userInfo[0].category_level;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        const spaceRef2 = ref(storage, "fonds/" + this.userInfo[0].fond);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
        getDownloadURL(spaceRef2)
          .then((url) => {
            this.fond = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>
