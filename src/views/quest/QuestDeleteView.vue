<template>
  <!-- haut du template-->
  <div class="p-3">
    <div class="flex justify-end p-1">
      <RouterLink to="/" class="fixed"><XIcon class="h-8 w-8 stroke-white" /></RouterLink>
    </div>
    <h1 class="text-center font-roboto text-4xl font-bold uppercase text-white">Supprimer la <span class="text-white">quête</span></h1>
  </div>
  <!--fin hero template-->

  <form class="flex flex-col items-center gap-5 text-white" enctype="multipart/form-data" @submit.prevent="deleteQuete">
    <div class="flex flex-col items-center gap-5 md:flex-row md:gap-40">
      <section>
        <!--Première partie : -->
        <div class="flex flex-col gap-5 md:gap-0">
          <!--Nom : -->
          <div class="flex flex-col gap-1">
            <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Nom :</span></div>
            <input
              type="text"
              class="h-16 w-full max-w-2xl bg-indigo-500 text-center text-xl font-bold uppercase text-white md:mb-5"
              v-model="quete.nom"
              disabled
            />
          </div>

          <!--Description : -->
          <div class="flex flex-col gap-1">
            <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Description :</span></div>
            <textarea
              type="text"
              class="max-h-[150px] min-h-[150px] w-full max-w-2xl bg-indigo-500 p-4 text-lg text-white md:mb-5"
              v-model="quete.desc"
              disabled
            />
          </div>
        </div>
      </section>
      <section>
        <!--Deuxieme partie : -->

        <div class="flex flex-col gap-5 md:gap-0">
          <!--Categorie : -->
          <div class="flex flex-col gap-0">
            <div class="w-full md:w-[70%] lg:w-[50%]">
              <span class="flex items-center font-bold"
                >Catégorie <RouterLink to="/listecat"><QuestionMarkCircleIcon class="m-3 h-6 w-6 stroke-indigo-500" /></RouterLink> :</span
              >
            </div>
            <input v-model="quete.cat" disabled class="h-16 w-full bg-indigo-500 px-2 text-lg font-bold uppercase text-white md:mb-5" />
          </div>

          <!--Difficulté : -->
          <div class="flex flex-col gap-1">
            <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Difficulté :</span></div>
            <input
              class="h-16 w-full bg-indigo-500 px-2 text-lg font-bold uppercase text-white md:mb-5"
              v-model="quete.difficulty"
              disabled
            />
          </div>

          <!--Date : -->
          <div class="flex flex-col gap-1">
            <div class="w-full md:w-[70%] lg:w-[50%]"><span class="font-bold">Date :</span></div>
            <input
              v-model="quete.date"
              disabled
              type="date"
              format="dd/mm/yyyy"
              class="h-16 w-full bg-gray-extended-300 fill-indigo-500 px-2 text-center text-xl font-bold uppercase text-black md:mb-5"
            />
          </div>
        </div>
      </section>
    </div>

    <h3 role="alert" class="p-3 text-center">
      <strong>Attention : vous allez supprimer cette quête, cette action est irréversible !</strong>
    </h3>
    <BoutonRed class="w-full bg-red-500 lg:max-w-xl" type="submit" title="Suppression">Supprimer</BoutonRed>
  </form>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import BoutonRed from "../../components/boutons/BoutonRed.vue";
import BoutonClose from "../../components/boutons/BoutonClose.vue";
import { XIcon, QuestionMarkCircleIcon } from "@heroicons/vue/outline";
export default {
  name: "QuestDeleteView",
  data() {
    return {
      refQuete: null, // Référence de la quête à modifier
      quete: {
        nom: "",
        date: "",
        desc: "",
        date: "",
        difficulty: "",
      },
    };
  },
  mounted() {
    console.log("id quête en cours de suppression : ", this.$route.params.id);
    // Recherche participant concerné
    this.getQueteSynchro(this.$route.params.id);
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

    async deleteQuete() {
      const firestore = getFirestore();
      // Suppresion du artiste
      await deleteDoc(doc(firestore, "quete", this.$route.params.id));

      // redirection sur la liste des artistes
      this.$router.push("/");
    },
  },

  components: {
    BoutonRed,
    BoutonClose,
    XIcon,
    QuestionMarkCircleIcon,
  },
};
</script>
<style></style>
