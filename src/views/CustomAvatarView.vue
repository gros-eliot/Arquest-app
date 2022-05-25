<template>
  <div class="bg-gradient-to-r from-indigo-400 to-indigo-900 text-black">
    <h1>Personnalisation</h1>
    <div class="mt-96 pb-5">Insérer avatar</div>
  </div>
  <div class="bg-black">
    <div class="mx-2 space-x-2 text-center">
      <div class="rounded-xl bg-indigo-300 py-2">Choisir un avatar</div>
    </div>
    <div class="text-white">
      {{ listeAvatarFull }}
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
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

export default {
  name: "CustomAvatarView",
  data() {
    return {
      listeAvatarFull: [], // Liste des quêtes synchronisée - collection avatarFirebase de Firebase
    };
  },
  mounted() {
    // Montage de la vue
    this.getAvatarFull();
  },
  methods: {
    async getAvatarFull() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbAvatarfull = collection(firestore, "avatarfull");
      // Liste des quêtes synchronisée
      const query = await onSnapshot(dbAvatarfull, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeAvatarFull = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
  },
};
</script>

<style></style>
