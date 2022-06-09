<template>
  <div>
    <h2 class="font-roboto text-2xl font-bold text-white">
      QUÊTES EN COURS (<span class="font-bold text-blue-300" v-if="testByUid === true">{{ orderByUid.length }}</span
      >)
    </h2>
    <div>
      <!--Si il n'y a aucun élément dans quêtes, afficher cette image-->
      <div v-if="orderByUid.length == 0" class="my-5 flex h-1/2 flex-col items-center justify-center gap-3">
        <NoQuestAvailable class="ml-8 w-11/12 max-w-xl" />
        <p class="text-center font-press-start-2p text-xl text-zinc-600">Aucune quête en cours...</p>
      </div>
      <div class="m-5 flex flex-col gap-8 text-white lg:grid lg:grid-cols-[repeat(2,minmax(300px,1fr))]" v-if="testByUid === true">
        <!--IMPORT DES QUÊTES DE FIREBASE-->
        <form v-for="quete in orderByUid" :key="quete.uid">
          <div class="flex flex-col gap-1 border-2 border-indigo-500">
            <!--TOP DE LA CARD-->
            <div class="m-2 flex items-center justify-between text-white">
              <!--QUETE NOM VERSION TAB/ORDINATEUR-->
              <h3 class="block p-2 text-left font-roboto text-2xl font-bold uppercase">{{ quete.nom }}</h3>
              <div class="text-white">
                <button
                  class="z-1 text-xl"
                  type="button"
                  aria-controls="detailsOfQuest"
                  :aria-expanded="detailsQuetes"
                  @click.prevent="quete.detailsQuetes = !quete.detailsQuetes"
                  title="Détails de la quête"
                >
                  <DotsHorizontalIcon class="h-10 w-10 stroke-white" />
                  <span class="sr-only">Afficher les détails de la quête</span>
                </button>
              </div>
            </div>
            <!--DETAILS DE LA CARD -->
            <div
              v-on="quete"
              id="detailsOfQuest"
              class="flex-col text-white"
              :class="{ flex: quete.detailsQuetes, hidden: !quete.detailsQuetes }"
            >
              <!---->
              <!---->
              <!---->
              <!---->
              <hr class="border-1 my-4 ml-auto mr-auto w-11/12 border-white" />
              <div class="m-3 ml-auto flex gap-5">
                <!--MODIFIER LA QUETE : BOUTON CRAYON-->
                <!--params quete.id ==> se diriger sur la quête à modifier-->
                <RouterLink :to="{ name: 'QuestModifView', params: { id: quete.id } }">
                  <PencilIcon class="h-8 w-8 stroke-white" />
                </RouterLink>
                <!--SUPPRIMER LA QUETE : BOUTON POUBELLE-->
                <RouterLink :to="{ name: 'QuestDeleteView', params: { id: quete.id } }">
                  <TrashIcon class="h-8 w-8 stroke-red-500" />
                </RouterLink>
              </div>
              <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-start gap-5 px-2 md:my-5">
                <!-- DESCRIPTION DE LA QUÊTE-->
                <div>
                  <h4 class="font-roboto text-2xl font-bold text-white">Note</h4>
                  <p class="font-roboto text-base">{{ quete.desc }}</p>
                </div>
                <!-- DATE LIMITE DE LA QUÊTE-->
                <div>
                  <h4 class="font-roboto text-2xl font-bold text-white">Date limite</h4>
                  <p class="font-roboto text-base">{{ dateFr(quete.date) }}</p>
                </div>
                <!-- DIFFICULTE DE LA QUÊTE-->
                <div>
                  <h4 class="font-roboto text-2xl font-bold text-white">Difficulté</h4>
                  <p
                    class="font-press-start-2p text-base"
                    :class="{
                      'text-lime-400': quete.difficulty === 'Facile',
                      'text-yellow-400': quete.difficulty === 'Intermédiaire',
                      'text-red-300': quete.difficulty === 'Difficile',
                    }"
                  >
                    {{ quete.difficulty }}
                  </p>
                </div>
              </div>
              <hr class="border-1 my-4 ml-auto mr-auto w-11/12 border-white" />
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
                <bouton-blue
                  type="button"
                  @click="
                    accomplishQuete(quete);
                    addCategoryLevel(quete);
                  "
                  title="Valider la quête"
                  >VALIDER</bouton-blue
                >
              </div>
            </div>
            <!--FIN CONTENU DE LA CARD-->
          </div>
        </form>
      </div>
      <!--Si il y a 1 ou + élément dans quêtes, afficher quêtes en cours-->
      <div v-if="orderByUid.length >= 1" class="my-16 flex h-1/2 flex-col items-center justify-center gap-3">
        <img src="src/assets/createmorequest.png" alt="Trophé" class="w-20 brightness-50" />
        <p class="text-center font-press-start-2p text-xl text-zinc-600">Créez de nouvelles quêtes&nbsp;!</p>
      </div>
    </div>
    <!--
      Afficher les niveaux de quêtes
    <div class="text-white">{{ categoryLevel }}</div>
    <div class="text-white" v-for="users in userInfo" :key="users.id">{{ users.category_level.sport }}</div>
    -->
  </div>

  <div class="text-white">
    {{ testByUid }}
  </div>
</template>

<script>
// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../main.js";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import BoutonBlue from "./boutons/BoutonBlue.vue";
import NoQuestAvailable from "./images/NoQuestAvailable.vue";
import { DotsHorizontalIcon, TrashIcon, PencilIcon, XIcon } from "@heroicons/vue/outline";
export default {
  name: "QuestComponent",

  data() {
    return {
      detailsQuetes: false,

      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase

      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: null,
      avatar: null,
      isAdmin: false,
      categoryLevel: null,
      testByUid: false,
    };
  },
  components: {
    BoutonBlue,
    NoQuestAvailable,
    DotsHorizontalIcon,
    TrashIcon,
    PencilIcon,
    XIcon,
  },

  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Montage de la vue
    this.getQueteSynchro();
  },
  computed: {
    orderByUid: function () {
      return this.listeQueteSynchro.sort(
        function (quete) {
          if (quete.uid == this.userInfo[0].uid) {
            this.testByUid = true;
          }
          // Sinon on retourne 0
          else {
            this.testByUid = false;
          }
        }.bind(this)
      );
    },
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

    async addCategoryLevel(quete) {
      const firestore = getFirestore();
      const docRefQuete = doc(firestore, "quete", quete.id);
      const docRefUsers = doc(firestore, "users", this.userInfo[0].id);
      // PHASE RECHERCHE ||| const docRefUsers = doc(firestore, "users", this.userInfo[0].category_level);

      if (quete.cat === "Sport") {
        this.categoryLevel.sport = this.categoryLevel.sport + 1;
      }
      if (quete.cat === "Gestion") {
        this.categoryLevel.gestion = this.categoryLevel.gestion + 1;
      }
      if (quete.cat === "Social") {
        this.categoryLevel.social = this.categoryLevel.social + 1;
      }
      if (quete.cat === "Maison") {
        this.categoryLevel.maison = this.categoryLevel.maison + 1;
      }
      if (quete.cat === "Culture") {
        this.categoryLevel.culture = this.categoryLevel.culture + 1;
      }
      if (quete.cat === "DIY") {
        this.categoryLevel.diy = this.categoryLevel.diy + 1;
      }
      if (quete.cat === "Santé") {
        this.categoryLevel.sante = this.categoryLevel.sante + 1;
      }
      if (quete.cat === "Travail") {
        this.categoryLevel.travail = this.categoryLevel.travail + 1;
      }

      /*

      EN PHASE DE RECHERCHES :*/

      await updateDoc(docRefUsers, {
        "category_level.sport": this.categoryLevel.sport,
        "category_level.gestion": this.categoryLevel.gestion,
        "category_level.social": this.categoryLevel.social,
        "category_level.maison": this.categoryLevel.maison,
        "category_level.culture": this.categoryLevel.culture,
        "category_level.diy": this.categoryLevel.diy,
        "category_level.sante": this.categoryLevel.sante,
        "category_level.travail": this.categoryLevel.travail,
      });

      /*
       const firestore = getFirestore();
      const docRef = doc(firestore, "users", this.userInfo[0].id);
      // Modification du participant à partir de son id
      await updateDoc(docRef, {
        avatar: this.userInfo[0].avatar,
      });
      // redirection sur la liste des participants
      console.log("Ca a marché ! User avatar mis à jour");
      //
      this.$router.push("/avatar");
      */
    },

    async accomplishQuete(quete) {
      const firestore = getFirestore();
      const dbHistory = collection(firestore, "history");
      const docRefQuete = doc(firestore, "quete", quete.id);
      const docRefHistory = await addDoc(dbHistory, {
        nom: quete.nom,
        date: quete.date,
      });
      console.log("quête validée avec le id suivant : ", docRefHistory.id);

      await deleteDoc(docRefQuete);
    },

    // Format date en français
    dateFr(d) {
      let date = d.split("-");
      return date[2] + "/" + date[1] + "/" + date[0];
    },

    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        this.categoryLevel = this.userInfo[0].category_level;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>
<style></style>
