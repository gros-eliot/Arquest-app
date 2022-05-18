<template>
  <div class="m-5 flex flex-col gap-5">
    <div class="text-black">
      <!--IMPORT DES QUÊTES DE FIREBASE-->
      <form v-for="quete in listeQueteSynchro" :key="quete.id">
        <div class="my-4 flex flex-col gap-1 border-2 border-indigo-500 text-white">
          <!--TOP DE LA CARD-->
          <div class="m-2 flex items-end justify-end md:justify-between">
            <!--QUETE NOM VERSION MOBILE-->
            <h3 class="hidden font-roboto text-xl font-bold md:block">{{ quete.nom }}</h3>
            <bouton-close type="button" @click.prevent="deleteQuete(quete)" title="Suppression"> </bouton-close>
          </div>
          <!--FIN TOP DE LA CARD-->

          <!--CONTENU DE LA CARD (nom, catégorie, date, difficulté) -->
          <div class="flex w-full flex-col gap-4 p-2">
            <!---->
            <!--QUETE NOM VERSION TAB/ORDINATEUR-->
            <h3 class="block font-roboto text-xl font-bold md:hidden">{{ quete.nom }}</h3>

            <!--CATEGORIE : COULEURS-->
            <div class="flex flex-col justify-center">
              <div class="flex justify-center">
                <div
                  class="h-6 w-11/12 rounded-full bg-transparent"
                  :class="{
                    ' bg-red-400 ': quete.cat === 'Sport',
                    ' bg-cyan-200 ': quete.cat === 'Social',
                    ' bg-indigo-300 ': quete.cat === 'Gestion',
                    ' bg-gray-extended-300 ': quete.cat === 'Travail',
                    ' bg-fuchsia-400 ': quete.cat === 'DIY',
                    ' bg-lime-400 ': quete.cat === 'Santé',
                    ' bg-yellow-400 ': quete.cat === 'Culture',
                    ' bg-yellow-200 ': quete.cat === 'Maison',
                  }"
                >
                  <p class="text-center font-roboto text-base font-bold text-black">{{ quete.cat }}</p>
                </div>
              </div>
            </div>

            <!-- DATE LIMITE DE LA QUÊTE-->
            <div class="flex flex-col items-center justify-center text-center lg:flex-row">
              <p class="p-2 text-base font-bold">Date limite</p>
              <h4 class="font-press-start-2p text-base font-bold">{{ quete.date }}</h4>
            </div>

            <!-- DIFFICULTE DE LA QUÊTE-->
            <div class="flex justify-center">
              <div class="flex w-fit flex-col items-center justify-center px-10 py-3 text-center lg:flex-row">
                <span class="p-2 text-base font-bold lg:pr-3">Difficulté</span>
                <p class="text-base">{{ quete.difficult }}</p>
              </div>
            </div>
          </div>
          <!--FIN CONTENU DE LA CARD-->
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
