<template>
  <div class="h-full w-full">
    <!--HERO PAGE CONNEXION-->
    <div class="my-5 flex w-full flex-col items-center justify-center">
      <div class="flex h-[85vh] w-full items-center justify-center">
        <div class="flex w-full flex-col items-center justify-center">
          <arquest-premium-long class="h-1/2 w-8/12 max-w-2xl"></arquest-premium-long>

          <div class="flex flex-col items-center justify-center gap-0 md:flex-row">
            <a href="#connexion_form">
              <BoutonBlue class="w-fit px-10">Rejoindre</BoutonBlue>
            </a>
            <BoutonBorder type="button" class="w-fit px-10" @click="onDcnx()">Deconnexion</BoutonBorder>
          </div>
        </div>
      </div>
      <h1 class="px-4 pt-4 font-press-start-2p text-3xl text-white md:text-4xl" id="connexion_form">Bienvenue</h1>
    </div>
    <hr class="my-5 border-indigo-300" />

    <!--Connexixon-->
    <h1 class="px-4 py-4 font-press-start-2p text-2xl text-white">Connexion</h1>
    <form @submit.prevent="onCnx" class="flex flex-col gap-4 px-4">
      <input
        class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300"
        placeholder="Adresse mail"
        type="email"
        v-model="user.email"
        required
      />
      <div class="flex flex-row items-center gap-2">
        <input
          class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300"
          placeholder="Mot de passe"
          :type="type"
          v-model="user.password"
          required
        />
        <button class="h-fit w-fit rounded-lg bg-zinc-300 px-5 py-2" @click.prevent="affiche()">
          <EyeIcon class="h-5 w-5" />
        </button>
      </div>
      <div class="alert alert-warning" role="alert">
        <p class="font-roboto text-base text-indigo-300">{{ message }}</p>
      </div>
      <div class="flex items-center justify-center">
        <BoutonBlue type="submit" class="w-fit px-10">Connexion</BoutonBlue>
      </div>
    </form>
    <hr class="my-14" />
    <!---->
    <!--Connexion ^^^^-->
    <!---->
    <!---->
    <!---->
    <!--Inscription vvvv-->
    <!---->
    <h1 class="px-4 py-4 font-press-start-2p text-2xl text-white">S'inscrire</h1>
    <form @submit.prevent="createAccount" class="flex flex-col gap-4 px-4">
      <input
        class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300"
        type="text"
        placeholder="Pseudo"
        v-model="name"
        required
      />

      <input
        class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300"
        placeholder="Adresse mail"
        type="email"
        v-model="userSignup.email"
        required
      />

      <div class="flex flex-row items-center gap-2">
        <input
          class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300"
          placeholder="Mot de passe"
          :type="type2"
          v-model="userSignup.password"
          required
        />
        <button class="h-fit w-fit rounded-lg bg-zinc-300 px-5 py-2" @click.prevent="affiche2()">
          <EyeIcon class="h-5 w-5" />
        </button>
      </div>

      <div class="alert alert-warning" role="alert">
        <p class="font-roboto text-base text-indigo-300">{{ messageSignup }}</p>
      </div>
      <BoutonBlue type="submit" class="btn btn-dark ml-auto mr-auto w-fit px-10 text-white">Créer mon compte</BoutonBlue>
    </form>
  </div>
</template>

<script>
import BoutonBlue from "../components/boutons/BoutonBlue.vue";
import BoutonBorder from "../components/boutons/BoutonBorder.vue";
import ArquestPremium from "../components/icons/ArquestPremium.vue";
import ArquestPremiumLong from "../components/icons/ArquestPremiumLong.vue";
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  createUserWithEmailAndPassword, // créer un user
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

//Import de l'emetteur depuis main.js
import { emitter } from "../main.js";

import { EyeIcon } from "@heroicons/vue/solid";

export default {
  name: "MonCompte",
  components: {
    BoutonBlue,
    BoutonBorder,
    ArquestPremium,
    ArquestPremiumLong,
    EyeIcon,
  },

  data() {
    return {
      //CONNEXION COMPTE
      //
      user: {
        // Utilisateur : email + mot de passe
        email: "",
        password: "",
      },
      view: false, // Afficher / cacher le mot de passe
      type: "password", // Type de champs pour le password : password / text pour l'afficher
      //
      //
      //
      // CREATION COMPTE
      //
      userSignup: {
        // Utilisateur : email + mot de passe
        email: "",
        password: "",
      },

      userInfo: null, // Informations complémentaires user connecté (sorte de listeCatégorie, listePays)
      name: null, // Titre de l'application ou nom du user
      isAdmin: false, // Si l'utilisateur est ou non administrateur
      view2: false,
      type2: "password", // Type de champs pour le password : password / text pour l'afficher
      //
      //
      //
      message: null, // Message de connexion
      messageSignup: null, // Message création compte
    };
  },
  mounted() {
    // Montage de la vue
    this.message = "";
    this.messageSignup = "";
    //
  },
  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK - mise à jour du user
          this.user = response.user;
          // Emission evenement de connexion
          emitter.emit("connectUser", { user: this.user });
          // console.log("user", this.user);
          // Mise à jour du message
          this.message = "User connecté : " + this.user.email;

          this.$router.push("/home");
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    async createAccount(user) {
      // Se connecter avec user et mot de passe
      createUserWithEmailAndPassword(getAuth(), this.userSignup.email, this.userSignup.password)
        .then(() => {
          this.messageSignup = "User créé : " + this.userSignup.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.messageSignup = "Erreur pour la création du compte";
        });

      const firestore = getFirestore();
      // Base de données (collection)  document users
      const dbUsers = collection(firestore, "users");
      const docRef = await addDoc(dbUsers, {
        admin: false,
        login: this.name,
        avatar: "boy1.png",
        fond: "normal.png",
        category_level: {
          culture: 0,
          diy: 0,
          sport: 0,
          social: 0,
          sante: 0,
          gestion: 0,
          maison: 0,
          travail: 0,
        },
      });
    },

    // Se deconnecter
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          // Mise à jour du message
          this.message = "User déconnecté";
          // Ré initialisation des champs
          this.user = {
            email: null,
            password: null,
          };
          // Emission évènement de déconnexion
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },

    // Affiche/masquer le champs password
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    affiche2() {
      this.view2 = !this.view2;
      if (this.view2) {
        this.type2 = "text";
      } else {
        this.type2 = "password";
      }
    },
  },
};
</script>
