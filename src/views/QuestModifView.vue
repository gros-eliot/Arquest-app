<template>
  <!-- haut du template-->
  <div class="p-3">
    <div class="flex justify-end p-1">
      <RouterLink to="/"><XIcon class="h-8 w-8 stroke-white" /></RouterLink>
    </div>
    <h1 class="text-center font-roboto text-4xl font-bold uppercase text-white">Modifier la <span class="text-indigo-500">quête</span></h1>
  </div>
  <!--fin hero template-->

  <!--Div contenant le formulaire + le bouton de validation-->
  <div class="flex flex-col px-5 py-10 text-white">
    <!--Div contenant le formulaire-->

    <form class="flex flex-col items-center gap-5" @submit.prevent="updateQuete">
      <input
        type="text"
        class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent text-center text-xl font-bold uppercase text-indigo-500"
        v-model="nom"
      />

      <textarea
        type="text"
        class="max-h-[150px] min-h-[150px] w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent p-4 text-lg text-white"
        v-model="desc"
      />
      <div class="w-full md:w-[70%] lg:w-[50%]">
        <span class="flex items-center font-bold"
          >Catégorie <RouterLink to="/"><QuestionMarkCircleIcon class="m-3 h-6 w-6 stroke-indigo-500" /></RouterLink> :</span
        >
      </div>
      <select
        v-model="cat"
        class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent px-2 text-lg font-bold uppercase text-indigo-500"
      >
        <option
          class="border-0 bg-gray-900 font-roboto font-normal text-red-500"
          v-for="quete in listeQueteSynchro"
          :key="quete.cat"
          selected
        >
          {{ quete.cat }}
        </option>
        <option
          class="border-0 bg-gray-900 font-roboto font-normal text-indigo-500"
          v-for="categorie in listeCategorie"
          :key="categorie.id"
        >
          {{ categorie.libelle }}
        </option>
      </select>

      <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Difficulté :</span></div>

      <select
        class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-transparent px-2 text-lg font-bold uppercase text-indigo-500"
        v-model="difficulty"
      >
        <option
          class="border-0 bg-gray-900 font-roboto font-normal text-red-500"
          v-for="quete in listeQueteSynchro"
          :key="quete.difficulty"
          selected
        >
          {{ quete.difficulty }}
        </option>

        <option class="border-0 bg-gray-900 font-roboto font-normal" v-for="difficulte in listeDifficulte" :key="difficulte.niveau">
          {{ difficulte.niveau }}
        </option>
      </select>

      <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Date :</span></div>
      <input
        v-model="date"
        type="date"
        format="dd/mm/yyyy"
        class="h-16 w-full max-w-2xl rounded-3xl border border-indigo-500 bg-gray-extended-300 fill-indigo-500 px-2 text-center text-xl font-bold uppercase text-black"
        placeholder="Date"
      />

      <BoutonBlue class="w-full lg:max-w-xl" type="submit" title="Modification" to="/">Modifier</BoutonBlue>
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
  name: "QuestModifView",
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
    };
  },
  mounted() {
    // Montage de la vue
    this.getQueteSynchro();
    this.getCategorie();
    this.getDifficulte();
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

    async updateQuete(quete) {
      const firestore = getFirestore();

      const docRef = doc(firestore, "quete", quete.id);
      await updateDoc(docRef, {
        nom: quete.nom,
      });
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
