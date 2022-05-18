<template>
  <div class="border-2 border-indigo-500">
    <div class="text-black">
      <form v-for="quete in listeQueteSynchro" :key="quete.id">
        <div class="my-4">
          <div class="flex items-center gap-3 text-white">
            <div class="flex w-full flex-col items-center gap-4">
              <input v-model="quete.nom" class="h-10 w-[95%] rounded-md border-transparent bg-transparent pl-3" />
              <input v-model="quete.cat" class="h-10 w-[95%] rounded-md border-0 bg-transparent pl-3" />
              <input v-model="quete.date" class="h-10 w-[95%] rounded-md border-0 bg-transparent pl-3" />
              <input v-model="quete.difficult" class="h-10 w-[95%] rounded-md border-0 bg-transparent pl-3" />
            </div>
            <bouton-close type="button" @click.prevent="deleteQuete(quete)" title="Suppression"> </bouton-close>
          </div>
        </div>
      </form>
    </div>
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
export default {
  name: "QuestCreateView",
  data() {
    return {
      nom: null, // Pour la création d'un nouvelle quête (nom)
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

    async deleteQuete(quete) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "quete", quete.id);
      await deleteDoc(docRef);
    },
  },
  components: {
    BoutonBlue,
    BoutonClose,
  },
};
</script>
<style></style>
