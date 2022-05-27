<template>
  <h2 class="font-roboto text-2xl font-bold text-white">QUÊTES DU JOUR ({{ count }})</h2>
  <div class="m-5 flex flex-col gap-8 text-white lg:grid lg:grid-cols-[repeat(2,minmax(300px,1fr))]">
    <!--IMPORT DES QUÊTES DE FIREBASE-->
    <form v-for="quete in listeQueteSynchro" :key="quete.id">
      <div class="flex flex-col gap-1 border-2 border-indigo-500">
        <!--TOP DE LA CARD-->
        <div class="m-2 flex items-center justify-between text-white">
          <!--QUETE NOM VERSION TAB/ORDINATEUR-->
          <h3 class="block p-2 text-left font-roboto text-2xl font-bold uppercase">{{ quete.nom }}</h3>

          <div class="text-white">
            <button
              class="z-50 text-xl"
              type="button"
              aria-controls="detailsOfQuest"
              :aria-expanded="detailsQuetes"
              @click="detailsQuetes = !detailsQuetes"
              title="Détails de la quête"
            >
              <DotsHorizontalIcon class="h-10 w-10 stroke-white" />
              <span class="sr-only">Afficher les détails de la quête</span>
            </button>
          </div>
        </div>

        <!--DETAILS DE LA CARD -->

        <div id="detailsOfQuest" class="flex flex-col text-white" :class="{ hidden: detailsQuetes }">
          <!---->
          <!---->
          <!---->
          <!---->
          <hr class="border-1 my-4 ml-auto mr-auto w-11/12 border-white" />
          <div class="flex flex-col gap-5 px-2">
            <!-- DATE LIMITE DE LA QUÊTE-->

            <div class="ml-auto flex gap-5">
              <RouterLink to="/custom_quest">
                <PencilIcon class="h-8 w-8 stroke-white" />
              </RouterLink>
              <RouterLink to="/">
                <TrashIcon class="h-8 w-8 stroke-red-500" @click.prevent="deleteQuete(quete)" />
              </RouterLink>
            </div>
            <div>
              <h4 class="font-roboto text-2xl font-bold text-white">Date limite</h4>
              <p class="font-roboto text-base">{{ quete.date }}</p>
            </div>

            <!-- DESCRIPTION DE LA QUÊTE-->
            <div class="flex w-full flex-col justify-center">
              <h4 class="font-roboto text-2xl font-bold text-white">Note</h4>
              <p class="font-roboto text-base">{{ quete.desc }}</p>
            </div>

            <!-- DIFFICULTE DE LA QUÊTE-->
            <div class="flex w-full flex-col justify-center">
              <h4 class="font-roboto text-2xl font-bold text-white">Difficulté</h4>

              <p
                class="font-press-start-2p text-base"
                :class="{
                  'text-lime-400': quete.difficult === 'Facile',
                  'text-yellow-400': quete.difficult === 'Intermédiaire',
                  'text-red-300': quete.difficult === 'Difficile',
                }"
              >
                {{ quete.difficult }}
              </p>
            </div>
            <hr class="border-1 my-4 ml-auto mr-auto w-11/12 border-white" />
          </div>

          <!--CATEGORIE DE LA QUÊTE-->
          <div class="w-full p-2">
            <h4
              class="text-center font-press-start-2p text-2xl"
              :class="{
                ' text-red-400 ': quete.cat === 'Sport',
                ' text-cyan-200 ': quete.cat === 'Social',
                ' text-indigo-300 ': quete.cat === 'Gestion',
                ' text-gray-extended-300 ': quete.cat === 'Travail',
                ' text-fuchsia-400 ': quete.cat === 'DIY',
                ' text-lime-400 ': quete.cat === 'Santé',
                ' text-yellow-400 ': quete.cat === 'Culture',
                ' text-yellow-200 ': quete.cat === 'Maison',
                ' text-red-500 ': quete.cat === 'Jeux-vidéos',
              }"
            >
              {{ quete.cat }}
            </h4>
          </div>
        </div>
        <!---->
        <!---->
        <!---->
        <!---->

        <!-- FIN DETAILS DE LA CARD-->

        <!--FIN TOP DE LA CARD-->

        <!--CONTENU DE LA CARD (nom, catégorie, date, difficulté) -->
        <div class="flex w-full flex-col gap-4 p-2">
          <!---->
          <!--CATEGORIE : COULEURS-->
          <div class="flex flex-col justify-center">
            <div class="flex justify-center">
              <div
                class="w-11/12 rounded-full bg-transparent py-3"
                :class="{
                  ' bg-red-400 ': quete.cat === 'Sport',
                  ' bg-cyan-200 ': quete.cat === 'Social',
                  ' bg-indigo-300 ': quete.cat === 'Gestion',
                  ' bg-gray-extended-300 ': quete.cat === 'Travail',
                  ' bg-fuchsia-400 ': quete.cat === 'DIY',
                  ' bg-lime-400 ': quete.cat === 'Santé',
                  ' bg-yellow-400 ': quete.cat === 'Culture',
                  ' bg-yellow-200 ': quete.cat === 'Maison',
                  ' bg-red-500 ': quete.cat === 'Jeux-vidéos',
                }"
              ></div>
            </div>
          </div>

          <div class="flex justify-center">
            <bouton-blue type="button" @click.prevent="deleteQuete(quete)" title="Valider la quête">VALIDER</bouton-blue>
          </div>
        </div>
        <!--FIN CONTENU DE LA CARD-->
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
import { DotsHorizontalIcon, TrashIcon, PencilIcon } from "@heroicons/vue/outline";
export default {
  name: "QuestCreateView",
  data() {
    return {
      detailsQuetes: true,
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
  components: {
    BoutonBlue,
    DotsHorizontalIcon,
    TrashIcon,
    PencilIcon,
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

    /**/
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

    async deleteQuete(quete) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "quete", quete.id);
      await deleteDoc(docRef);
    },
  },
};
</script>
<style></style>
