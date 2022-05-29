<template>
  <div class="mt-9 flex items-center justify-center">
    <div class="w-2/2">
      <div class="overlay rounded-xl border-4 border-indigo-500 bg-black">
        <h2 class="m-4 my-6 text-center font-roboto text-2xl font-bold uppercase text-white">
          ÊTES VOUS SÛR DE VOULOIR <span class="text-center font-roboto text-2xl font-bold text-red-400">SUPPRIMER</span> CETTE QUÊTE ?
        </h2>

        <BoutonBlue @click.prevent="deleteQuete(quete)" class="ml-auto mr-auto"> SUPPRIMER </BoutonBlue>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import BoutonBlue from "../boutons/BoutonBlue.vue";
export default {
  components: {
    BoutonBlue,
  },

  data() {
    return {
      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      refQuete: null, // Référence de la quête à modifier
    };
  },
  mounted() {
    // Montage de la vue
    this.getQueteSynchro(this.$route.params.id);
  },
  methods: {
    async deleteQuete(quete) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "quete", quete.id);
      await deleteDoc(docRef);
    },

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
  },
};
</script>
