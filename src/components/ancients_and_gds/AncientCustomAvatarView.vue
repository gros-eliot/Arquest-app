<template>
  <div class="bg-gradient-to-r from-indigo-400 to-indigo-900 text-black">
    <h1>Personnalisation</h1>
    <div class="mt-96 pb-5">Insérer avatar</div>
  </div>
  <div class="bg-black">
    <div class="mx-2 grid grid-cols-3 space-x-2 text-center">
      <div class="rounded-xl bg-indigo-300 py-2">Habits</div>
      <div class="rounded-xl bg-indigo-300 py-2">Visage</div>
      <div class="rounded-xl bg-indigo-300 py-2">Accessoires</div>
    </div>
    <div>
      <div class="mx-11 mt-10 grid grid-cols-4 gap-4 pb-5 text-center text-white">
        <div class="rounded-md border-2 border-indigo-300">
          <img class="media-object imageSmall" :src="part.photo" />
        </div>

        <tr v-for="part in listePhoto" :key="part.id">
          <td class="text-center">
            <img class="media-object imageSmall" :src="part.photo" />
          </td>

          <td>
            <div class="rounded-md border-2 border-indigo-300"></div>
            <div class="rounded-md border-2 border-indigo-300"></div>
            <div class="rounded-md border-2 border-indigo-300"></div>
            <div class="rounded-md border-2 border-indigo-300"></div>
            <div class="rounded-md border-2 border-indigo-300"></div>
            <div class="rounded-md border-2 border-indigo-300"></div>
            <div class="rounded-md border-2 border-indigo-300"></div>
            <div class="rounded-md border-2 border-indigo-300"></div>
          </td>
        </tr>
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
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CustomAvatarView",
  data() {
    return {
      listePhoto: [], // Liste des participants
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    this.getPhoto();
  },
  methods: {
    async getPhoto() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbPart = collection(firestore, "avatar");
      // Liste des participants triés sur leur nom
      const q = query(dbPart, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeParticipant = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listePhoto.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "avatar" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>
