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
    this.getAvatarFull();
  },
  methods: {
    async getAvatarFull() {
      const firestore = getFirestore();
      const dbAvatarfull = collection(firestore, "avatarfull");
      const query = await onSnapshot(dbAvatarfull, (snapshot) => {
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
