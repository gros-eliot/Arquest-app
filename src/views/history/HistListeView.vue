<template>
  {{ listeHistory }}
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

export default {
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
      const q = query(dbHistory, orderBy("date", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeHistory = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
  },
};
</script>

<style></style>
