<template>
  <div>
    <div class="flex w-full flex-col justify-between bg-gradient-to-r from-indigo-300 to-indigo-900 text-white">
      <div class="m-4 flex justify-between">
        <h1 class="text-2xl font-bold">Personnalisation</h1>

        <RouterLink to="/avatar"><ArrowLeftIcon class="w-11 stroke-white" /></RouterLink>
      </div>

      <div class="my-10 ml-auto mr-auto">
        <div v-if="avatar != null">
          <img :src="avatar" :alt="'Avatar de ' + name" class="w-48" />
          <p class="m-3 text-center font-press-start-2p">{{ this.userInfo[0].avatar }}</p>
        </div>

        <div v-else><img src="src/assets/default_avatar.webp" alt="Default avatar" /></div>
      </div>
    </div>
  </div>

  <div class="my-3 ml-auto mr-auto w-11/12 bg-red-500 px-5 py-2 text-center font-press-start-2p text-2xl text-white">Avatars</div>

  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-5 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
  >
    <!--BOUTON N°1 DE LA LISTE : boy1-->

    <button class="h-20 w-20 border border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy1.png')">
      <img src="" alt="" />
    </button>

    <!--BOUTON N°2 DE LA LISTE : boy2-->

    <button class="h-20 w-20 border border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy2.png')">
      <img src="" alt="" />
    </button>

    <button class="h-20 w-20 border border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy3.png')">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy4.png')">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy5.png')">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy6.png')">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
  </div>
  <div class="my-3 ml-auto mr-auto w-11/12 bg-red-500 px-5 py-2 text-center font-press-start-2p text-2xl text-white">Fonds</div>

  <BontonBlue class="ml-auto mr-auto" @click.prevent="updateAvatar()">Modifier</BontonBlue>
</template>

<script>
import { PencilAltIcon, ArrowLeftIcon } from "@heroicons/vue/outline";

import BontonBlue from "../../components/boutons/BoutonBlue.vue";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../main.js";

export default {
  components: {
    PencilAltIcon,
    ArrowLeftIcon,
    BontonBlue,
  },

  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté (sorte de listeCatégorie, listePays)
      name: "", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
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

    changeAvatar(a) {
      const newAvatar = a;
      this.userInfo[0].avatar = null;
      this.userInfo[0].avatar = newAvatar;

      //
      //
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
      //
      //
    },

    async updateAvatar() {
      // Dans tous les cas on met à jour le participant dans Firestore
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

      //
      //
      //
      const firestore = getFirestore();
      console.log("userInfo", this.userInfo);
      const docRef = doc(firestore, "users", this.userInfo[0].id);
      // Modification du participant à partir de son id
      await updateDoc(docRef, {
        avatar: this.userInfo[0].avatar,
      });
      // redirection sur la liste des participants
      console.log("Ca a marché ! User avatar mis à jour");
      //
      //this.$router.push("/avatar");
    },
  },
};
</script>

<style></style>
