<template>
  <div class="flex w-full justify-between bg-gray-extended-900 p-5 text-white">
    <RouterLink to="/home">
      <div class="flex items-center justify-center gap-3">
        <HomeIcon id="nav1" class="h-8 w-8 fill-white active:fill-indigo-500" />
        <p class="hidden font-press-start-2p active:text-indigo-500 md:block">Accueil</p>
      </div>
    </RouterLink>

    <RouterLink to="/agenda">
      <div class="flex items-center justify-center gap-3">
        <CalendarIcon id="nav2" class="h-8 w-8 fill-white active:fill-indigo-500" />
        <p class="hidden font-press-start-2p active:text-indigo-500 md:block">Agenda</p>
      </div>
    </RouterLink>

    <RouterLink
      :to="'/avatar/' + uid /*{ name: 'AvatarView', params: { id: uid } } */"
      @click="
        if ($route.name === 'AvatarView') {
          Refresh();
        }
      "
    >
      <div class="flex items-center justify-center gap-3">
        <img
          :src="avatar"
          alt="Profil"
          class="h-8 w-8 rounded-full border border-white object-cover object-top active:border-indigo-500"
          id="nav3"
          v-if="avatar != null"
        />
        <img v-else src="/image/social.webp" class="h-8 w-8 rounded-full border border-white object-cover active:border-indigo-500" />
        <p class="hidden font-press-start-2p active:text-indigo-500 md:block">Profil</p>
      </div>
    </RouterLink>
  </div>
</template>
<script setup>
function Refresh() {
  setTimeout(() => {
    document.location.reload();
  }, 1);
}
</script>
<script>
import { CalendarIcon, HomeIcon, GiftIcon } from "@heroicons/vue/solid";

// Fonctions Firestore
import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../main.js";

export default {
  name: "NavView",
  components: {
    HomeIcon,
    CalendarIcon,
    GiftIcon,
  },

  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "", // Titre de l'application ou nom du user
      uid: "",
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();
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
        // console.log("userInfo", this.userInfo[0].uid);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.uid = this.userInfo[0].uid;
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>
