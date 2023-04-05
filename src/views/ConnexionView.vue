<template>
  <div class="h-full w-full">
    <!--HERO PAGE CONNEXION-->
    <div class="my-5 flex w-full flex-col items-center justify-center">
      <div class="flex h-[85vh] w-full items-center justify-center">
        <div class="flex w-full flex-col items-center justify-center">
          <arquest-premium-long class="h-1/2 w-8/12 max-w-2xl"></arquest-premium-long>

          <div class="flex flex-col items-center justify-center gap-0 md:flex-row">
            <RouterLink to="/home" v-if="user.email">
              <BoutonBlue class="w-fit px-10">Rejoindre</BoutonBlue>
            </RouterLink>
            <a href="#connexion_form" v-else>
              <BoutonBlue class="w-fit px-10">Rejoindre</BoutonBlue>
            </a>
            <BoutonBorder type="button" class="w-fit px-10" @click="onDcnx()">Déconnexion</BoutonBorder>
          </div>
          <RouterLink class="text-xl font-light text-white underline" to="/news">Voir les nouveautés</RouterLink>
        </div>
      </div>
    </div>
    <h1 class="px-4 pt-4 font-press-start-2p text-3xl text-white md:text-4xl" id="connexion_form">Bienvenue</h1>
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
        v-model="login"
        required
        @input="checkLoginInput"
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

      <BoutonBlue
        type="submit"
        class="btn btn-dark ml-auto mr-auto w-fit px-10 text-white"
        v-if="userSignup.password && userSignup.email && userUnique && login"
        >Créer mon compte</BoutonBlue
      >
      <BoutonBorder type="button" class="btn btn-dark ml-auto mr-auto w-fit px-10 text-white" v-else>Créer mon compte</BoutonBorder>
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
  addDoc,
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
  where, // Permet de demander un filtrage pour une query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

//Import de l'emetteur depuis main.js
import { emitter } from "../main.js";

import { EyeIcon } from "@heroicons/vue/solid";

export default {
  name: "ConnexionView",
  components: {
    BoutonBlue,
    BoutonBorder,
    ArquestPremium,
    ArquestPremiumLong,
    EyeIcon,
  },

  data() {
    return {
      //
      //CONNEXION COMPTE
      //CONNEXION COMPTE
      //CONNEXION COMPTE
      //
      user: {
        // Utilisateur : email + mot de passe
        email: null,
        password: null,
      },
      view: false, // Afficher / cacher le mot de passe
      type: "password", // Type de champs pour le password : password / text pour l'afficher
      //

      // CREATION COMPTE
      // CREATION COMPTE
      // CREATION COMPTE
      //
      userSignup: {
        // Utilisateur : email + mot de passe
        email: null,
        password: null,
      },
      uid: "",
      login: null, // Nom du user
      isAdmin: false, // Si l'utilisateur est ou non administrateur
      view2: false, //Afficher cacher le MDP
      type2: "password", // Type de champs pour le password : "? password : text" pour l'afficher

      //
      // TEST LOGIN
      // TEST LOGIN
      // TEST LOGIN
      //
      usersInfo: [], // Liste des utilisateurs (Firestore)
      usersLength: 0, // nombre d'utilisateurs
      usersLogin: [], // tableau des pseudos de tous les utilisateurs
      userUnique: true, // test si le nom de l'utilisateur est unique
      //

      // MESSAGES
      // MESSAGES
      // MESSAGES
      //
      message: "", // Message de connexion
      messageSignup: "Inscrivez-vous ici !", // Message création compte
    };
  },

  mounted() {
    // Appel de la liste des users (Firestore)
    this.getUsersInfos();

    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.userConnected = true;
      this.message = "Vous êtes connecté sous : " + this.user.email;
    } else {
      this.userConnected = false;
      this.message = "Connectez-vous.";
    }
  },

  methods: {
    // Les fonctions
    // obtenir les utilisateurs de users
    async getUsersInfos() {
      // Informations des users de Firestore
      const firestore = getFirestore();
      // Collection users de Firestore
      const dbUsers = collection(firestore, "users");
      // Users triés sur leur login
      const q = query(dbUsers, orderBy("login", "asc"));
      // Liste synchronisée
      await onSnapshot(q, (snapshot) => {
        this.usersInfo = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        this.usersLength = this.usersInfo.length;

        for (let i = 0; i < this.usersLength; i++) {
          this.usersLogin.push(this.usersInfo[i].login);
        }

        console.log("USERS LOGIN ", this.usersLogin);
      });
    },

    onCnx() {
      //se connecter avec un mots de pass
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          this.message = "Vous êtes connecté sous : " + this.user.email;
          this.$router.push("/home");
        })
        .catch((error) => {
          //erreur co
          this.message = "Erreur : " + error;
        });
    },

    // FONCTION POUR TESTER SI le pseudo utilisé est
    checkLoginInput() {
      if (this.usersLogin.includes(this.login)) {
        this.messageSignup = "Ce pseudo est déjà utilisé.";
        this.userUnique = false;
      } else {
        this.messageSignup = "";
        this.userUnique = true;
      }
    },

    createAccount() {
      if (this.usersLogin.includes(this.login)) {
        this.messageSignup = "Ce pseudo est déjà utilisé.";
        this.userUnique = false;
      } else {
        this.userUnique = true;

        // Se connecter avec user et mot de passe
        createUserWithEmailAndPassword(getAuth(), this.userSignup.email, this.userSignup.password)
          .then((response) => {
            this.uid = response.user.uid;

            const firestore = getFirestore();
            const dbUsers = collection(firestore, "users");
            const docRef = addDoc(dbUsers, {
              admin: false,
              login: this.login,
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
                videogames: 0,
              },

              uid: this.uid,
            });

            signInWithEmailAndPassword(getAuth(), this.userSignup.email, this.userSignup.password).then((response) => {
              this.user = response.user;
            });
            this.messageSignup = "Votre compte a été créé avec cette adresse : " + this.user.email;
            this.$router.push("/home");
          })
          .catch((error) => {
            // Erreur de connexion
            this.messageSignup = "Erreur création du compte : " + error;
          });
      }
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
          this.message = "";
          this.messageSignup = "";
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("erreur  déconnection : ", error);
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

<script setup></script>
