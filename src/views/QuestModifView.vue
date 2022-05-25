<template>
  <div class="p-3">
    <div class="flex justify-end p-1">
      <RouterLink to="/"><XIcon class="h-8 w-8 stroke-white" /></RouterLink>
    </div>
    <h1 class="text-center font-roboto text-4xl font-bold uppercase text-white">Modifier une <span class="text-indigo-500">quête</span></h1>
  </div>
  <div class="fill-white p-5 text-white lg:flex lg:w-full lg:justify-center">
    <form class="ml-auto mr-auto flex w-full flex-col gap-5" v-for="quete in listeQueteSynchro" :key="quete.id">
      <input
        type="text"
        class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent text-center text-xl font-bold uppercase text-indigo-500"
        v-model="nom"
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
            <BoutonBlue class="w-full" type="button" @click="createQuete()" title="Création">Modifier</BoutonBlue>
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
      nom: null, // Pour la création d'un nouvelle quête (nom de la quête)
      libelle: [], // Pour la création d'un nouvelle quête (libelle de la catégorie de la quête)
      niveau: [], // DIFFICULTE DE LA QUÊTE
      descriptionQuete: null, // Pour la description de la quête
      date: "", // date de la quête

      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      listeCategorie: [], // Liste des CATEGORIES DE QUÊTES synchronisée - collection cat de Firebase
      listeDifficulte: [], // Liste des DIFFICULTES synchronisée - collection cat de Firebase
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

    async getDescription() {
      const firestore = getFirestore();
      const dbDesc = collection(firestore, "description");
      const query = await onSnapshot(dbDesc, (snapshot) => {
        this.descriptionQuete = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createQuete() {
      const firestore = getFirestore();
      const dbQuete = collection(firestore, "quete");
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
