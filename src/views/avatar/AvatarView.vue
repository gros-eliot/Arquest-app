<template>
  <div>
    <div class="flex w-full flex-col justify-between bg-gradient-to-r from-indigo-300 to-indigo-900 text-white">
      <div class="mt-2 mr-2 flex justify-end">
        <RouterLink to="/custom_avatar"><PencilAltIcon class="w-11" /></RouterLink>
      </div>

      <div class="mb-5 ml-auto mr-auto">
        <div v-if="avatar != null"><img :src="avatar" :alt="'Avatar de ' + name" class="w-40 md:w-48 lg:w-52" /></div>
        <div v-else><img src="src/assets/default_avatar.webp" alt="Default avatar" /></div>
      </div>
    </div>
  </div>

  <!---->
  <!---->
  <!--AVATARS ^^^^-->
  <!---->
  <!---->

  <!---->
  <!---->
  <!--BADGES vvvv-->
  <!---->
  <!---->

  <div class="m-5 text-white" v-for="users in userInfo" :key="users.id">
    <h2 class="font-roboto text-2xl font-bold">Badges</h2>
    {{ userInfo[0].category_level }}

    <div class="my-5 flex flex-wrap items-center justify-center gap-10">
      <img src="src/assets/BADGES/sport/ultime.png" alt="Badge sport" class="w-12" />
      <img src="src/assets/BADGES/maison/ultime.png" alt="Badge maison" class="w-12" />
      <img src="src/assets/BADGES/social/ultime.png" alt="Badge social" class="w-12" />
      <img src="src/assets/BADGES/gestion/diamond.png" alt="Badge gestion" class="w-12" />
      <img src="src/assets/BADGES/sante/gold.png" alt="Badge santé" class="w-12" />
      <img src="src/assets/BADGES/DIY/argent.png" alt="Badge DIY" class="w-12" />
      <img src="src/assets/BADGES/travail/bronze.png" alt="Badge travail" class="w-12" />
      <img src="src/assets/BADGES/culture/fer.png" alt="Badge culture" class="w-12" />
      <div v-if="isAdmin === true"><img src="src/assets/BADGES/admin.png" alt="Badge admin" class="w-12" /></div>
    </div>
  </div>
</template>

<script>
import { PencilAltIcon } from "@heroicons/vue/outline";

// Fonctions Firestore
import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../main.js";

export default {
  name: "AvatarView",
  components: { PencilAltIcon },

  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
      categoryLevel: [],
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

      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });

    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;

      // Réinitialisation infos complémentaires user

      this.userInfo = null;
      this.name = "";
      this.avatar = null;
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
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        this.categoryLevel = this.userInfo[0].category_level;
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
