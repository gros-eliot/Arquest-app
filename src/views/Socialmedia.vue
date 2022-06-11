<template>
  <div class="chatBackground flex h-40 w-full items-end p-3">
    <h1 class="pt-5 font-press-start-2p text-4xl uppercase text-white">Messages</h1>
    <img src="/image/social.webp" alt="Social" class="absolute top-48 right-5 hidden opacity-25 brightness-0 md:block lg:top-44" />
  </div>

  <div>
    <div v-if="user == null" class="w-full bg-red-500 p-4 text-center text-white">
      <h6 class="font-bold" role="alert">Vous devez être connecté pour utiliser le chat !!</h6>
    </div>

    <div v-else>
      <div class="flex flex-col gap-2 p-4">
        <span class="mt-3 font-roboto text-2xl font-bold text-white">Sélectionner un utilisateur</span>
        <select
          class="w-full max-w-4xl border-2 border-indigo-300 bg-transparent px-3 py-3 text-indigo-300 md:py-2"
          v-model="userSelected"
          @change="selectUser"
        >
          <option selected disabled value="" class="bg-black">...</option>
          <option v-for="util in listeUsers" :key="util.uid" :value="util" class="bg-black">
            {{ util.login }}
          </option>
        </select>
      </div>

      <div v-if="userSelected != null">
        <!--Formulaire pour créer un nouveau fil de discussion-->
        <form class="my-3 bg-zinc-800 px-4" @submit.prevent="createDisc()">
          <div class="flex flex-col gap-3">
            <span class="mt-5 font-roboto text-lg font-bold text-white">Nouvelle discussion avec {{ userSelected.login }}</span>
            <input
              type="text"
              class="w-full max-w-4xl border-2 border-indigo-300 bg-transparent px-3 py-3 text-indigo-300 md:py-2"
              v-model="libelle"
              required
              placeholder="Nommer le fil de discussion"
            />
            <BoutonBlue class="ml-auto mr-auto w-fit px-5" type="submit" title="Création">CREER LA DISCUSSION</BoutonBlue>
          </div>
        </form>

        <!---->
        <!---->
        <!--Menu du fil de discussion-->
        <!---->
        <!---->

        <section v-if="chat.length > 0">
          <div class="grid grid-cols-1 gap-5 p-4 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            <div
              class="my-3 w-full rounded-sm border-2 border-indigo-300 bg-indigo-500 p-3 text-white"
              v-for="disc in chat"
              :key="disc.uid"
            >
              <div class="flex justify-between">
                <div class="flex flex-col gap-1">
                  <h1 class="font-press-start-2p text-2xl uppercase">{{ disc.libelle }}</h1>
                  <p class="text-white">{{ dateFr(disc.creation) }}</p>
                </div>
                <div class="flex flex-row items-center gap-3">
                  <button class="text-white" type="button" @click="viewFil(disc)" title="Voir ce fil">
                    <EyeIcon class="h-8 w-8" />
                  </button>
                  <button class="text-white" type="button" @click="deleteFil(disc)" title="Supprimer ce fil">
                    <TrashIcon class="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!---->
        <!--Si aucun fil de discussion :-->
        <section v-else class="m-4 text-center font-press-start-2p text-xl text-zinc-600">Aucun fil de discussion</section>
        <!---->

        <!--LE FIL DE DISCUSSION :-->
        <section v-if="discussion != null">
          <div class="m-4 rounded-xl bg-indigo-900 p-4">
            <!---->
            <!--Nom de la discussion-->
            <!---->
            <!--Champ de texte pour écrire un message dans la discussion-->
            <div class="mb-10">
              <h3 class="p-2 font-press-start-2p text-2xl uppercase text-white">{{ discussion.libelle }}</h3>
              <div class="flex w-full flex-col items-center justify-center md:flex-row md:justify-start">
                <textarea
                  class="h-20 max-h-32 min-h-[5rem] w-full rounded-sm border-2 border-indigo-300 bg-black bg-opacity-90 p-3 text-white"
                  placeholder="Message"
                  v-model="message"
                ></textarea>
                <button @click="sendMsg()" class="m-5 h-fit w-8/12 bg-indigo-300 bg-opacity-90 p-2 md:w-fit md:p-5">
                  <PaperAirplaneIcon class="ml-auto mr-auto w-7 rotate-90 stroke-black" />
                </button>
              </div>
            </div>
            <!---->
            <!--Messages apparaissants-->
            <div v-for="disc in chat" :key="disc.id">
              <div v-if="disc.id == discussion.id">
                <div v-for="msg in sortMsgByDate(disc.msg)" :key="msg.date" class="text-white">
                  <div class="row mb-3" v-if="msg.by == user.uid">
                    <div class="flex flex-row-reverse items-center gap-3">
                      <img class="h-12 w-12 object-contain" :src="userInfo[0].avatar" />
                      <div class="flex w-full max-w-xl flex-col justify-end">
                        <p class="w-full rounded-xl bg-black p-3 text-right text-white">{{ msg.contenu }}</p>
                        <p class="text-right text-sm italic text-zinc-300">{{ userInfo[0].login }} || {{ dateFr(msg.date) }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3" v-if="msg.by == userSelected.uid">
                    <div class="flex flex-row items-center gap-3">
                      <img class="h-12 w-12 object-contain" :src="userSelected.avatar" />
                      <div class="flex w-full max-w-xl flex-col justify-end">
                        <p class="w-full rounded-xl bg-indigo-500 p-3 text-white">{{ msg.contenu }}</p>
                        <p class="text-start text-sm italic text-zinc-300">{{ userSelected.login }} || {{ dateFr(msg.date) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--Fin fil discussion-->
        <!---->
      </div>
      <!--Fin v-if userSelected != null-->
      <!---->
    </div>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDoc, // Obtenir un document d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
  where, // Permet de demander un filtrage pour une query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import BoutonBlue from "../components/boutons/BoutonBlue.vue";
import BoutonBorder from "../components/boutons/BoutonBorder.vue";

import { TrashIcon, EyeIcon, PaperAirplaneIcon } from "@heroicons/vue/outline";

export default {
  name: "ChatView",
  components: { BoutonBorder, BoutonBlue, TrashIcon, EyeIcon, PaperAirplaneIcon },
  data() {
    // Les données
    return {
      user: null, // User connecté
      listeUsers: [], // Liste des utilisateurs (Firestore)
      userInfo: null, // Informations complémentaires du user connecté
      userSelected: null, // L'utilisateur de la liste sélectionné
      libelle: null, // Libelle de la nouvelle discussion à créer

      chatFrom: null, // Les chats de l'utilisataur connecté vers celui sélectionné
      chatTo: null, // Les chats des autres utilisateurs vers celui connecté
      chat: [], // Tous les chats utilisateur connecté et sélectionné

      discussion: null, // chat/discussion sélectionnée

      message: null, // Message courant du chat/discussion
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des users (Firestore)
    this.getUsers();
  },

  methods: {
    // Les fonctions
    // obtenir les utilisateurs de users
    async getUsers() {
      // Obtenir les inofrmations du user connecté
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
          }
        }.bind(this)
      );

      // Informations des users de Firestore
      const firestore = getFirestore();
      // Collection users de Firestore
      const dbUsers = collection(firestore, "users");
      // Users triés sur leur login
      const q = query(dbUsers, orderBy("login", "asc"));
      // Liste synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeUsers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération de l'url des avatars
        this.listeUsers.forEach(function (user) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupérer l'image par son nom de fichier
          const spaceRef = ref(storage, "users/" + user.avatar);
          // Récupération de l'url
          getDownloadURL(spaceRef)
            .then((url) => {
              // Remplacer le nom du fichier par l'url
              user.avatar = url;
            })
            .catch((error) => {
              console.log("erreur downloadurl", error);
            });
        });

        // Récupérer les infos complémentaires du user connecté
        this.userInfo = this.listeUsers.filter((user) => user.uid == this.user.uid);
        // console.log("userInfo", this.userInfo);
        // Suppression du user connecté de la liste
        this.listeUsers = this.listeUsers.filter((user) => user.uid != this.user.uid);
        //console.log("ListeUsers", this.listeUsers);
      });
    },

    async selectUser() {
      this.message = null;
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données concernée
      const dbChat = collection(firestore, "chat");
      // Liste des users emetteur vers recepteur
      let list1 = [this.user.uid, this.userSelected.uid];
      // Requête
      let q1 = query(dbChat, where("fil", "==", list1));
      // Liste synchronisée

      await onSnapshot(q1, (snapshot) => {
        this.chatFrom = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Liste des users selectionne / connecté
        let list2 = [this.userSelected.uid, this.user.uid];
        // Requête
        let q2 = query(dbChat, where("fil", "==", list2));
        // Liste synchronisée
        onSnapshot(q2, (snapshot) => {
          this.chatTo = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          // Fusion des 2 chats from et to dans le chat
          this.chat = this.chatFrom.concat(this.chatTo);
          // console.log("chat", this.chat);
        });
      });
    },

    // Création d'une nouvelle discussion
    createDisc() {
      // Au moins un message pour initialisation de la discussion
      let msg = {
        by: this.user.uid, // Créateur du message
        contenu: "Créé le " + this.dateSql(), // Message + Date du jour
        date: this.dateSql(), // Date de création
      };

      let discussion = {
        creation: this.dateSql(), // Date création de la discussion
        fil: [this.user.uid, this.userSelected.uid], // De qui vers qui : 0 : emetteur - 1: recepteur
        libelle: this.libelle, // Libelle de la discussion
        msg: [msg],
      };
      // Mise à jour de la collection chat
      addDoc(collection(getFirestore(), "chat"), discussion);
    },

    // Mise en forme de la date du jour
    // en format SQL : yyyy-mm-dd HH:mm:ss
    dateSql() {
      let today = new Date();
      // Transformer en format local
      // format : dd/mm/yyyy, HH:mm:ss
      today = today.toLocaleString();
      // Mise en forme en format yyyy-mm-dd HH:mm:ss
      let tab = today.split(",");
      // récupérer seulement la partie date
      let d = tab[0];
      // récupération du jour, mois, année
      let dt = d.split("/");
      let jour = dt[0];
      let mois = dt[1];
      let annee = dt[2];
      // date en format bdd
      today = annee + "-" + mois + "-" + jour + " " + tab[1].trim();
      return today;
    },

    // Mise en forme d'un date
    // d'un format : yyyy-mm-dd HH:mm:ss
    // en format : dd/mm/yyyy à HH:mm
    dateFr(date) {
      // découpage de la date
      let d = date.split(" ");
      // Récupérer la partie jour, mois, année
      let dt = d[0].split("-");
      let jour = dt[2];
      let mois = dt[1];
      let annee = dt[0];
      // récuperer la partie H:mm:ss
      let ht = d[1].split(":");
      // date en format français
      let dateMsg = jour + "/" + mois + "/" + annee + " à " + ht[0] + ":" + ht[1];
      return dateMsg;
    },

    viewFil(disc) {
      this.discussion = disc;
    },

    deleteFil(disc) {
      deleteDoc(doc(getFirestore(), "chat", disc.id));
    },

    async sendMsg() {
      let msg = {
        by: this.user.uid, // Créateur du message
        contenu: this.message, // Message rédigé
        date: this.dateSql(), // Date de création
      };

      // Rechargement de la discussion
      // Pour avoir tous les messages
      // surtout le dernier
      const firestore = getFirestore();
      const docRef = doc(firestore, "chat", this.discussion.id);
      let refDisc = await getDoc(docRef);
      let tabMsg = refDisc.data().msg;
      tabMsg.push(msg);
      this.message = null;
      // Mise à jour de la discussion
      updateDoc(doc(firestore, "chat", this.discussion.id), {
        msg: tabMsg,
      });
    },

    sortMsgByDate(tabMsg) {
      return tabMsg.sort(function (a, b) {
        // Si la date du message a est avant celle du message b on retourne 1
        if (a.date < b.date) return 1;
        // Si la date du message a est après celle du message b on retourne -1
        if (a.date > b.date) return -1;
        // Sinon ni avant ni après on retourne 0
        return 0;
      });
    },
  },
};
</script>

<style>
.chatBackground {
  animation: 2s ease-out infinite alternate fond_anime;
}

@keyframes fond_anime {
  from {
    background-color: rgb(99 102 241);
  }

  to {
    background-color: rgb(30 58 138);
  }
}
</style>
