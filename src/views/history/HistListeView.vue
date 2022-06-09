<template>
  <div class="p-3">
    <div class="flex items-center gap-2">
      <h1 class="text-2xl font-bold text-white">Quêtes accomplies</h1>
      <ArquestWhite class="h-8 w-8" />
    </div>
    <!--Si il n'y a aucun élément dans historique, afficher cette image-->
    <div v-if="listeHistory.length == 0" class="my-5 flex h-1/2 flex-col items-center justify-center gap-3">
      <HistoryClock class="w-40 max-w-xl md:w-72" />
      <p class="text-center font-press-start-2p text-xl text-zinc-600">Aucun élément dans l'historique. Accomplissez vos quêtes&nbsp;!</p>
    </div>

    <!--Si il n'y a 1 ou + élément dans historique, afficher historique-->

    <div v-if="listeHistory.length >= 1">
      <div class="my-5 flex h-1/2 flex-col items-center justify-center gap-3">
        <p class="ml-auto mr-auto w-2/4 text-center font-press-start-2p text-xl text-zinc-600">
          Retrouvez ici vos anciennes quêtes réalisées.
        </p>
      </div>

      <div
        class="grid grid-cols-[1fr_1fr_20px] items-center justify-start border-white p-3 font-bold text-indigo-300 md:grid-cols-[1fr_1fr_50px]"
      >
        <p>Nom</p>

        <p>Date fixée</p>
        <TrashIcon class="h-6 w-6 stroke-black" />
      </div>

      <div class="my-5 flex flex-col gap-2 text-white" v-for="history in listeHistory" :key="history.id">
        <div class="grid grid-cols-[1fr_1fr_20px] items-center justify-start border-b border-white p-3 md:grid-cols-[1fr_1fr_50px]">
          <p class="uppercase">{{ history.nom }}</p>

          <p>{{ dateFr(history.date) }}</p>
          <button @click.prevent="deleteHistoryElement(history)">
            <TrashIcon class="h-6 w-6 stroke-red-500 md:h-10 md:w-10" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDoc, // Obtenir la liste des documents d'une collection
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

//
//
//
import { TrashIcon } from "@heroicons/vue/outline";
import ArquestWhite from "../../components/icons/ArquestWhite.vue";
import HistoryClock from "../../components/images/HistoryClock.vue";
export default {
  components: {
    TrashIcon,
    ArquestWhite,
    HistoryClock,
  },

  //
  //
  //
  data() {
    return {
      listeHistory: [],
    };
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    async getHistory() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artiste
      const dbHistory = collection(firestore, "history");
      // Liste des artistes triés sur leur nom
      const q = query(dbHistory, orderBy("date", "desc"));
      await onSnapshot(q, (snapshot) => {
        this.listeHistory = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
    async deleteQuete(quete) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "quete", quete.id);
      await deleteDoc(docRef);
      console.log("Quête " + quete.id + " supprimée");
    },

    async deleteHistoryElement(history) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "history", history.id);
      await deleteDoc(docRef);
      console.log("Element de l'historique " + history.id + " supprimé");
    },

    // Format date en français
    dateFr(d) {
      let date = d.split("-");
      return date[2] + "/" + date[1] + "/" + date[0];
    },
  },
};
</script>

<style></style>
