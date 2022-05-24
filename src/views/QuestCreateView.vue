<template>
  <div class="p-3">
    <div class="flex justify-end">
      <RouterLink to="/"><XIcon class="h-8 w-8 stroke-white" /></RouterLink>
    </div>
    <h1 class="text-center font-roboto text-4xl font-bold uppercase text-white">Créer une <span class="text-indigo-500">quête</span></h1>
  </div>
  <div class="fill-white p-5 text-white lg:flex lg:w-full lg:justify-center">
    <form class="ml-auto mr-auto flex w-full flex-col gap-5">
      <input
        type="text"
        class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent text-center text-xl font-bold uppercase text-indigo-500"
        v-model="nom"
        placeholder="TITRE"
        required
      />
      <textarea
        type="text"
        class="max-h-[150px] min-h-[150px] w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent p-4 text-lg text-white"
        v-model="descriptionQuete"
        placeholder="Description"
      />

      <div class="w-full">
        <div>
          <span class="flex items-center font-bold"
            >Catégorie <RouterLink to="/"><QuestionMarkCircleIcon class="m-3 h-6 w-6 stroke-indigo-500" /></RouterLink> :</span
          >
        </div>
        <select
          v-model="libelle"
          class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent px-2 text-lg font-bold uppercase text-indigo-500"
          required
        >
          <option class="border-0 bg-gray-900 font-roboto font-normal" value="" disabled selected>Sélectionner une catégorie</option>
          <option class="border-0 bg-gray-900 font-roboto font-normal" v-for="categorie in listeCategorie" :key="categorie.libelle">
            {{ categorie.libelle }}
          </option>
        </select>
      </div>
      <div class="w-full">
        <div>
          <span class="font-bold">Difficulté :</span>
        </div>
        <select
          class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent px-2 text-lg font-bold uppercase text-indigo-500"
          v-model="niveau"
          required
        >
          <option class="border-0 bg-gray-900 font-roboto font-normal" value="" disabled selected>Sélectionner une difficulté</option>
          <option class="border-0 bg-gray-900 font-roboto font-normal" v-for="difficulte in listeDifficulte" :key="difficulte.niveau">
            {{ difficulte.niveau }}
          </option>
        </select>
      </div>
      <div class="input-group">
        <div>
          <span class="font-bold">Date :</span>
        </div>
        <input
          type="date"
          format="dd/mm/yyyy"
          v-model="date"
          class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-gray-extended-300 fill-indigo-500 px-2 text-center text-xl font-bold uppercase text-black"
          placeholder="Date"
          required
        />
      </div>

      <div class="flex justify-center">
        <RouterLink class="w-full" to="/">
          <div class="flex w-full justify-center">
            <BoutonBlue class="w-full" type="button" @click="createQuete()" title="Création">Créer</BoutonBlue>
          </div>
        </RouterLink>
      </div>
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
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import BoutonBlue from "../components/boutons/BoutonBlue.vue";
import BoutonClose from "../components/boutons/BoutonClose.vue";
import { XIcon, QuestionMarkCircleIcon } from "@heroicons/vue/outline";
export default {
  name: "QuestCreateView",
  data() {
    return {
      nom: null, // Pour la création d'un nouvelle quête (nom)
      descriptionQuete: null,
      date: "",
      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      libelle: [], // Pour la création d'un nouvelle quête (catégorie)
      listeCategorie: [], // Liste des catégories synchronisée - collection cat de Firebase
      niveau: [],
      listeDifficulte: [], // Liste des catégories synchronisée - collection cat de Firebase
    };
  },
  mounted() {
    // Montage de la vue
    this.getQueteSynchro();
    this.getCategorie();
    this.getDifficulte();
    this.getDescription();
  },
  methods: {
    async getQueteSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbQuete = collection(firestore, "quete");
      // Liste des quêtes synchronisée
      const query = await onSnapshot(dbQuete, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeQueteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getCategorie() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbCat = collection(firestore, "categorie");
      // Liste des catégories synchronisée
      const query = await onSnapshot(dbCat, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeCategorie = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getDifficulte() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbDiff = collection(firestore, "difficulte");
      // Liste des catégories synchronisée
      const query = await onSnapshot(dbDiff, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeDifficulte = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getDescription() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbDesc = collection(firestore, "description");
      // Liste des catégories synchronisée
      const query = await onSnapshot(dbDesc, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.descriptionQuete = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createQuete() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbQuete = collection(firestore, "quete");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbQuete, {
        nom: this.nom,
        date: this.date,
        cat: this.libelle,
        difficult: this.niveau,
        desc: this.descriptionQuete,
      });
      console.log("document créé avec le id : ", docRef.id);
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
