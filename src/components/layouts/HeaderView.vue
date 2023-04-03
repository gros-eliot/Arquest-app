<template>
  <div class="flex w-full items-center justify-between bg-gray-extended-900 p-3">
    <!--BOUTON MENU-->
    <button class="relative z-20 text-xl" aria-controls="menu" :aria-expanded="menuOuvert" id="btnMenu" @click="menuOuvert = !menuOuvert">
      <MenuAlt1Icon class="h-8 w-8 stroke-white" />
      <span class="sr-only">Menu</span>
    </button>
    <!--MENU-->
    <!--CONTAINER MENU : attention, vu que le translate x est à 10rem, 
      on a "ml-56" dans les div pour que les éléments du menu soient affichés 
      (décalés aussi de 10rem)-->

    <div
      id="menu"
      aria-labelledby="btnMenu"
      class="fixed inset-0 z-30 h-full -translate-x-full bg-black text-white motion-safe:transition-transform motion-safe:duration-1000"
      :class="{ '-translate-x-[10rem]': menuOuvert }"
    >
      <!--CONTAINER CROIX + LOGO DE L'APP-->

      <div class="ml-[10rem] flex flex-col">
        <div class="flex items-center justify-between px-3 pt-3">
          <button
            class="relative z-40 text-xl"
            aria-haspopup="true"
            aria-controls="menu"
            :aria-expanded="menuOuvert"
            @click="menuOuvert = !menuOuvert"
          >
            <XIcon class="h-10 w-10 stroke-white" />
            <span class="sr-only">Fermer le menu</span>
          </button>

          <ArquestPremium class="h-12 w-12" />
        </div>

        <!--CONTAINER LISTE DES PAGES-->

        <nav class="h-[100vh]">
          <div class="flex justify-center">
            <ul class="m-5 flex w-full flex-col justify-items-start gap-5 text-xl" @click="menuOuvert = !menuOuvert">
              <li><router-link to="/home">Accueil</router-link></li>
              <li><router-link :to="'/avatar/' + uid">Profil</router-link></li>
              <li><router-link to="/history">Historique</router-link></li>
              <li><router-link to="/listecat">Types de quête</router-link></li>
            </ul>
          </div>
          <hr class="mx-5" />
          <div class="flex justify-center">
            <ul class="m-5 grid w-full grid-cols-1 justify-items-start gap-2 text-sm" @click="menuOuvert = !menuOuvert">
              <li><router-link to="/mentionslegales">Mentions légales</router-link></li>
              <li><router-link to="/apropos">À Propos</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
              <li class="font-bold text-red-500"><button @click="onDcnx()">Déconnexion</button></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <!--FIN MENU-->

    <div>
      <RouterLink to="/home">
        <div>
          <!--ESSAIE D'UN LOGO RESPONSIVE : Compliqué car logo long trop gros-->
          <!--class="block md:hidden"-->
          <ArquestPremium class="h-14 w-14" />
        </div>
        <!--ESSAIE D'UN LOGO RESPONSIVE : Compliqué car logo long trop gros-->
        <!--
        <div class="hidden md:block">
          <ArquestPremiumLong />
        </div>-->
      </RouterLink>
    </div>

    <RouterLink to="/social"><img src="/image/social.webp" alt="Réseau social" class="w-8" /></RouterLink>
  </div>
</template>

<script>
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";
import ArquestPremium from "../icons/ArquestPremium.vue";
import ArquestPremiumLong from "../icons/ArquestPremiumLong.vue";

// Fonctions Firestore
import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import { emitter } from "../../main.js";

import {
  getAuth, // Fonction générale d'authentification
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  name: "HeaderView",
  data() {
    return {
      menuOuvert: false,

      user: {
        // Utilisateur : email + mot de passe
        email: null,
        password: null,
      },
      uid: "",
      userInfo: null, // Informations complémentaires user connecté
      name: "", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();
  },

  components: {
    MenuAlt1Icon,
    ArquestPremium,
    ArquestPremiumLong,
    XIcon,
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
        console.log("userInfo", this.userInfo[0].uid);
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

    onDcnx() {
      //se deco
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          alert("Vous avez bien été déconnecté.e!");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("erreur  déconnection : ", error);
        });
    },
  },
};
</script>

<style></style>
