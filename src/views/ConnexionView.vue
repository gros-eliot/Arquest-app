<template>
  <h1 class="px-4 pt-4 font-press-start-2p text-2xl text-white">Connexion</h1>
  <form @submit.prevent="onCnx" class="flex flex-col px-4">
    <input
      class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300"
      placeholder="Adresse mail"
      type="email"
      v-model="user.email"
      required
    />
    <div class="my-3 flex flex-row items-center gap-2">
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

    <div class="flex flex-row justify-center gap-6">
      <BoutonBlue type="submit" class="btn btn-dark text-white">Connexion</BoutonBlue>
      <BoutonBorder type="button" class="btn btn-dark float-right text-white" @click="onDcnx()">Deconnexion</BoutonBorder>
    </div>
  </form>

  <hr class="my-14" />

  <h1 class="p-4 font-press-start-2p text-2xl text-white">S'inscrire</h1>

  <form class="flex flex-col gap-3 px-4">
    <input class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300" placeholder="Pseudo" required />

    <div v-if="imageData">
      <img class="preview img-fluid" :src="imageData" />
    </div>

    <input
      type="file"
      class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300"
      ref="file"
      id="file"
      @change="previewImage"
    />

    <input
      class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300"
      placeholder="Adresse mail"
      type="email"
      required
    />

    <input class="rounded-md border-2 border-indigo-500 bg-transparent p-2 text-indigo-300" placeholder="Mot de passe" required />

    <BoutonBlue type="submit" class="btn btn-dark text-white">Créer mon compte</BoutonBlue>
  </form>
</template>

<script>
// Import des fonction d'authentification

import BoutonBlue from "../components/boutons/BoutonBlue.vue";
import BoutonBorder from "../components/boutons/BoutonBorder.vue";

import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

//Import de l'emetteur depuis main.js
import { emitter } from "../main.js";

import { EyeIcon } from "@heroicons/vue/solid";

export default {
  name: "MonCompte",
  components: {
    BoutonBlue,
    BoutonBorder,
    EyeIcon,
  },

  data() {
    return {
      user: {
        // Utilisateur : email + mot de passe
        email: "",
        password: "",
      },
      message: null, // Message de connexion
      view: false, // Afficher / cacher le mot de passe
      type: "password", // Type de champs pour le password : password / text pour l'afficher
      imageData: null, // Image prévisualisée pour création compte
    };
  },
  mounted() {
    // Montage de la vue
    this.message = "User non connecté";
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
          console.log("user", this.user);
          // Mise à jour du message
          this.message = "User connecté : " + this.user.email;

          this.$router.push("/");
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    // Se deconnecter
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          // Mise à jour du message
          this.message = "User non connecté";
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

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style scoped></style>
