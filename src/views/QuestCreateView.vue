<template>
  <div class="p-3">
    <h1 class="font-press-start-2p text-2xl text-white">Créer une quête</h1>
  </div>
  <div class="container fill-white p-5 text-white">
    <div>
      <h5>Créer une quête</h5>
    </div>
    <hr />

    <form>
      <h6>Nouvelle quête</h6>
      <div class="flex flex-col">
        <div>
          <span>Nom</span>
        </div>
        <input type="text" class="text-black" v-model="nom" required />
        <div>
          <span>Catégorie</span>
        </div>
        <select v-model="libelle" class="text-black">
          <option value="" disabled selected>Sélectionner une catégorie</option>
          <option v-for="categorie in listeCategorie" :key="categorie.libelle">
            {{ categorie.libelle }}
          </option>
        </select>
      </div>

      <button class="m-3 bg-indigo-500 px-10 py-3 text-white" type="button" @click="createQuete()" title="Création">Créer</button>
    </form>

    <div></div>
    <!--
    <div class="card-body table-responsive">
      <table>
        <thead>
          <tr>
            <th scope="col">
              <div>Liste des quêtes actuels</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="quete in listeQueteSynchro" :key="quete.id">
            <td>
              <form>
                <div>
                  <div>
                    <span>Nom</span>
                  </div>
                  <input type="text" class="text-black" v-model="quete.nom" required />
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>-->
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
  name: "QuestCreateView",
  data() {
    return {
      nom: null, // Pour la création d'un nouvelle quête (nom)
      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      libelle: [], // Pour la création d'un nouvelle quête (catégorie)
      listeCategorie: [], // Liste des catégories synchronisée - collection cat de Firebase
    };
  },
  mounted() {
    // Montage de la vue
    this.getQueteSynchro();
    this.getCategorie();
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

    async createQuete() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbQuete = collection(firestore, "quete");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbQuete, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },
  },
};
</script>
<style></style>
