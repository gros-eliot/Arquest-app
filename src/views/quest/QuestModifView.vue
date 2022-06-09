<template>
  <!-- haut du template-->
  <div class="p-3">
    <div class="flex justify-end p-1">
      <RouterLink to="/" class="fixed"><XIcon class="h-8 w-8 stroke-white" /></RouterLink>
    </div>
    <h1 class="text-center font-roboto text-4xl font-bold uppercase text-white">Modifier la <span class="text-indigo-500">quête</span></h1>
  </div>
  <!--fin hero template-->

  <!--Div contenant le formulaire + le bouton de validation-->
  <div class="flex flex-col px-5 py-10 text-white">
    <!--Div contenant le formulaire-->

    <form class="flex flex-col items-center gap-5" enctype="multipart/form-data" @submit.prevent="updateQuete">
      <input
        type="text"
        class="h-16 w-full max-w-2xl border border-indigo-500 bg-transparent text-center text-xl font-bold uppercase text-white"
        v-model="quete.nom"
      />

      <textarea
        type="text"
        class="max-h-[150px] min-h-[150px] w-full max-w-2xl border border-indigo-500 bg-transparent p-4 text-lg text-white"
        v-model="quete.desc"
      />
      <div class="w-full md:w-[70%] lg:w-[50%]">
        <span class="flex items-center font-bold"
          >Catégorie <RouterLink to="/listecat"><QuestionMarkCircleIcon class="m-3 h-6 w-6 stroke-indigo-500" /></RouterLink> :</span
        >
      </div>
      <select
        v-model="quete.cat"
        class="h-16 w-full max-w-2xl border border-indigo-500 bg-transparent px-2 text-lg font-bold uppercase text-white"
      >
        <option class="border-0 bg-gray-900 font-roboto font-bold" value="0" disabled selected>Sélectionner une catégorie</option>
        <option class="white border-0 bg-gray-900 font-roboto font-normal" v-for="categorie in listeCategorie" :key="categorie.id">
          {{ categorie.libelle }}
        </option>
      </select>

      <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Difficulté :</span></div>

      <select
        class="h-16 w-full max-w-2xl border border-indigo-500 bg-transparent px-2 text-lg font-bold uppercase text-white"
        v-model="quete.difficulty"
      >
        <option class="border-0 bg-gray-900 font-roboto font-bold" value="0" disabled selected>Sélectionner une difficulté</option>

        <option class="border-0 bg-gray-900 font-roboto font-normal" v-for="difficulte in listeDifficulte" :key="difficulte.id">
          {{ difficulte.niveau }}
        </option>
      </select>

      <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Date :</span></div>
      <input
        v-model="quete.date"
        type="date"
        format="dd/mm/yyyy"
        class="
          h-16
          w-full
          max-w-2xl
          border border-indigo-500
          bg-gray-extended-300
          fill-indigo-500
          px-2
          text-center text-xl
          font-bold
          uppercase
          text-black
        "
        placeholder="Date"
      />

      <BoutonBlue class="w-full lg:max-w-xl" type="submit" title="Modification">Modifier</BoutonBlue>
    </form>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import BoutonBlue from "../../components/boutons/BoutonBlue.vue";
import BoutonClose from "../../components/boutons/BoutonClose.vue";
import { XIcon, QuestionMarkCircleIcon } from "@heroicons/vue/outline";
export default {
  name: "QuestModifView",
  data() {
    return {
      quete: {
        nom: "", // Pour la modification de la quête (nom de la quête)
        cat: "", // Pour la modification de la quête (catégorie de la quête)
        difficulty: "", // Pour la difficulté de la quête
        desc: "", // Pour la description de la quête
        date: "", // date de la quête
      },

      refQuete: null, // Référence de la quête à modifier

      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      listeCategorie: [], // Liste des CATEGORIES DE QUÊTES synchronisée - collection categorie de Firebase
      listeDifficulte: [], // Liste des DIFFICULTES synchronisée - collection difficulte de Firebase
    };
  },
  mounted() {
    console.log("id quête en cours de modification : ", this.$route.params.id);
    // Recherche participant concerné
    this.getQueteSynchro(this.$route.params.id);
    // Montage de la vue
    this.getCategorie();
    this.getDifficulte();
  },
  methods: {
    async getQueteSynchro(id) {
      const firestore = getFirestore();

      const docRef = doc(firestore, "quete", id);

      this.refQuete = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refQuete.exists()) {
        // Si oui on récupère ses données
        this.quete = this.refQuete.data();
      } else {
        // Sinon simple message d'erreur
        this.console.log("Quête inexistant");
      }
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

    async updateQuete() {
      // Dans tous les cas on met à jour la quête dans Firestore
      const firestore = getFirestore();
      // Modification de la quête à partir de son id
      await updateDoc(doc(firestore, "quete", this.$route.params.id), this.quete);
      // redirection sur la liste des quêtes
      this.$router.push("/");

      console.log("Quête " + this.$route.params.id + " modifiée !");
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
