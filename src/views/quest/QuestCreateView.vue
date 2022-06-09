<template>
  <!-- haut du template-->
  <div class="p-3">
    <div class="flex justify-end p-1">
      <RouterLink to="/" class="fixed"><XIcon class="h-8 w-8 stroke-white" /></RouterLink>
    </div>
    <h1 class="mt-8 text-center font-roboto text-4xl font-bold uppercase text-white">
      Créer une <span class="text-indigo-500">quête</span>
    </h1>
  </div>
  <!--fin hero template-->

  <!--Div contenant le formulaire + le bouton de validation-->
  <div class="flex flex-col px-5 py-10 text-white">
    <!--Div contenant le formulaire-->

    <form class="flex flex-col items-center gap-5" enctype="multipart/form-data" @submit.prevent="createQuete">
      <input
        type="text"
        class="h-16 w-full max-w-2xl border border-indigo-500 bg-transparent text-center text-xl font-bold uppercase text-white"
        v-model="nom"
        placeholder="TITRE"
        required
      />
      <textarea
        type="text"
        class="max-h-[150px] min-h-[150px] w-full max-w-2xl border border-indigo-500 bg-transparent p-4 text-lg text-white"
        v-model="desc"
        placeholder="Description"
      />
      <div class="w-full md:w-[70%] lg:w-[50%]">
        <span class="flex items-center font-bold"
          >Catégorie <RouterLink to="/listecat"><QuestionMarkCircleIcon class="m-3 h-6 w-6 stroke-indigo-500" /></RouterLink> :</span
        >
      </div>
      <select
        v-model="cat"
        class="h-16 w-full max-w-2xl border border-indigo-500 bg-transparent px-2 text-lg font-bold uppercase text-white"
        required
      >
        <option class="border-0 bg-gray-900 font-roboto font-normal" value="0" disabled selected>Sélectionner une catégorie</option>
        <option class="border-0 bg-gray-900 font-roboto font-normal" v-for="categorie in listeCategorie" :key="categorie.id">
          {{ categorie.libelle }}
        </option>
      </select>
      <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Difficulté :</span></div>
      <select
        class="h-16 w-full max-w-2xl border border-indigo-500 bg-transparent px-2 text-lg font-bold uppercase text-white"
        v-model="difficulty"
        required
      >
        <option class="border-0 bg-gray-900 font-roboto font-normal" value="0" disabled selected>Sélectionner une difficulté</option>
        <option class="border-0 bg-gray-900 font-roboto font-normal" v-for="difficulte in listeDifficulte" :key="difficulte.id">
          {{ difficulte.niveau }}
        </option>
      </select>
      <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Date :</span></div>
      <input
        type="date"
        format="dd/mm/yyyy"
        v-model="date"
        class="h-16 w-full max-w-2xl border border-indigo-500 bg-transparent fill-indigo-500 px-2 text-center text-xl font-bold uppercase text-white"
        placeholder="Date"
        required
      />

      <BoutonBlue class="w-full lg:max-w-xl" type="submit" title="Création">Créer</BoutonBlue>
    </form>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
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

// Fonctions Firestore

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../main.js";

import BoutonBlue from "../../components/boutons/BoutonBlue.vue";
import BoutonClose from "../../components/boutons/BoutonClose.vue";
import { XIcon, QuestionMarkCircleIcon } from "@heroicons/vue/outline";
export default {
  name: "QuestCreateView",
  data() {
    return {
      nom: "", // Pour la création d'un nouvelle quête (nom de la quête)
      cat: "", // Pour la création d'un nouvelle quête (cat de la catégorie de la quête)
      difficulty: "", // DIFFICULTE DE LA QUÊTE
      desc: "", // Pour la description de la quête
      date: "", // date de la quête

      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      listeCategorie: [], // Liste des CATEGORIES DE QUÊTES synchronisée - collection cat de Firebase
      listeDifficulte: [], // Liste des DIFFICULTES synchronisée - collection cat de Firebase

      //
      //
      //
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
    // Montage de la vue
    this.getQueteSynchro();
    this.getCategorie();
    this.getDifficulte();

    //
    //
    //
    //
    //
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
    //
    //
    //
    //
    //
  },
  methods: {
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

    async getQueteSynchro() {
      const firestore = getFirestore();
      const dbQuete = collection(firestore, "quete");
      const query = await onSnapshot(dbQuete, (snapshot) => {
        this.listeQueteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getCategorie() {
      const firestore = getFirestore();
      const dbCat = collection(firestore, "categorie");
      const query = await onSnapshot(dbCat, (snapshot) => {
        this.listeCategorie = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getDifficulte() {
      const firestore = getFirestore();
      const dbDiff = collection(firestore, "difficulte");
      const query = await onSnapshot(dbDiff, (snapshot) => {
        this.listeDifficulte = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createQuete() {
      const firestore = getFirestore();
      const dbQuete = collection(firestore, "quete");
      const docRef = await addDoc(dbQuete, {
        uid: this.userInfo[0].uid,
        nom: this.nom,
        date: this.date,
        cat: this.cat,
        difficulty: this.difficulty,
        desc: this.desc,
      });
      // console.log("document créé avec le id suivant : ", docRef.id);
      this.$router.push("/");
    },

    async deleteQuete(quete) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "quete", quete.id);
      await deleteDoc(docRef);
    },
  },
  components: {
    BoutonBlue,
    BoutonClose,
    XIcon,
    QuestionMarkCircleIcon,
  },
};
</script>
<style></style>
