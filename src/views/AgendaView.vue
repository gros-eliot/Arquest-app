<template>
  <div class="p-3">
    <h1 class="font-press-roboto mb-11 text-4xl font-bold text-white">Agenda</h1>
    <img class="ml-auto mr-auto w-2/3 sm:w-1/3 md:w-1/2 lg:w-1/3" src="/image/app_agenda.png" alt="Agenda" />
  </div>

  <h1 class="m-6 mb-3 font-roboto text-2xl font-bold text-white">QUÊTES ACCOMPLIES</h1>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]">
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-red-400 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-red-400">SPORT</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-red-400">{{ categoryLevel.sport }}</p>
        </div>
      </div>
    </div>
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-cyan-200 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-cyan-200">SOCIAL</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-cyan-200">{{ categoryLevel.social }}</p>
        </div>
      </div>
    </div>
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-indigo-300 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-indigo-300">GESTION</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-indigo-300">{{ categoryLevel.gestion }}</p>
        </div>
      </div>
    </div>
    <!--
      Badges jeux-vidéos pas encore fait (in progress)
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-red-500 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-white">JEUX-VIDEOS</h1>
          <p class="text-white">Quêtes réalisés :</p>
        </div>
      </div>
    </div>
    -->
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-gray-extended-300 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-gray-extended-300">TRAVAIL</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-gray-extended-300">{{ categoryLevel.travail }}</p>
        </div>
      </div>
    </div>
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-fuchsia-400 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-fuchsia-400">DIY</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-fuchsia-400">{{ categoryLevel.diy }}</p>
        </div>
      </div>
    </div>
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-green-400 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-green-400">SANTE</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-green-400">{{ categoryLevel.sante }}</p>
        </div>
      </div>
    </div>
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-yellow-400 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-yellow-400">CULTURE</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-yellow-400">{{ categoryLevel.culture }}</p>
        </div>
      </div>
    </div>
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-yellow-200 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-yellow-200">MAISON</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-yellow-200">{{ categoryLevel.maison }}</p>
        </div>
      </div>
    </div>
    <div class="mx-6 my-3 flex flex-col">
      <div class="flex flex-row gap-1">
        <span class="my-2 ml-3 bg-cyan-500 px-2" />
        <div class="flex flex-col px-3 pb-3">
          <h1 class="py-2 font-press-start-2p text-2xl text-cyan-500">JEUX-VIDÉOS</h1>
          <p class="text-white">Quêtes réalisés :</p>
          <p class="font-press-start-2p text-cyan-500">{{ categoryLevel.videogames }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoutonBlue from "../components/boutons/BoutonBlue.vue";

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

import { emitter } from "../main.js";

export default {
  name: "ListecatView",
  components: {
    BoutonBlue,
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
      avatar: null, // Avatar / image du user connecté
      fond: null, // Fond (image) / image de fond du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
      categoryLevel: "",
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
        // console.log("userInfo", this.userInfo);
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
