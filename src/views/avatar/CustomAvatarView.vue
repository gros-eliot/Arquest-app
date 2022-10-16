<template>
  <div>
    <div
      class="flex w-full flex-col justify-between bg-cover bg-no-repeat object-center text-white"
      :style="{
        backgroundImage: `url('${fond}')`,
      }"
    >
      <div class="m-2 flex items-center justify-end">
        <RouterLink to="/avatar"><ArrowLeftIcon class="w-11 stroke-white" /></RouterLink>
      </div>

      <div class="my-3 ml-auto mr-auto">
        <div v-if="avatar != null">
          <img :src="avatar" :alt="'Avatar de ' + name" class="w-40 md:w-48" />
        </div>

        <div v-else><img src="/image/default_avatar.webp" alt="Default avatar" /></div>
      </div>
    </div>
  </div>

  <button
    class="fixed bottom-20 right-4 flex flex-row items-center gap-3 rounded-full bg-red-500 p-3 md:p-5"
    @click.prevent="updateAvatar(), updateFond()"
  >
    <p class="hidden font-press-start-2p text-lg text-white md:block">Modifier</p>
    <PencilAltIcon class="w-11 stroke-white md:w-6" />
  </button>

  <div class="mb-3 ml-auto mr-auto w-full bg-indigo-500 px-5 py-2 text-center font-press-start-2p text-2xl text-white">Avatars</div>

  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-5 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
  >
    <!--Boys-->

    <!--BOUTON N°1 DE LA LISTE : boy1-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy1.png')">
      <img src="/image/AVATARS/boy1.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°2 DE LA LISTE : boy2-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy2.png')">
      <img src="/image/AVATARS/boy2.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°3 DE LA LISTE : boy3-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy3.png')">
      <img src="/image/AVATARS/boy3.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°4 DE LA LISTE : boy4-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy4.png')">
      <img src="/image/AVATARS/boy4.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°5 DE LA LISTE : boy5-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy5.png')">
      <img src="/image/AVATARS/boy5.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°6 DE LA LISTE : boy6-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('boy6.png')">
      <img src="/image/AVATARS/boy6.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--Girls-->
    <!--BOUTON N°1 DE LA LISTE : girl1-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('girl1.png')">
      <img src="/image/AVATARS/girl1.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°2 DE LA LISTE : girl2-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('girl2.png')">
      <img src="/image/AVATARS/girl2.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°3 DE LA LISTE : girl3-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('girl3.png')">
      <img src="/image/AVATARS/girl3.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°4 DE LA LISTE : girl4-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('girl4.png')">
      <img src="/image/AVATARS/girl4.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°5 DE LA LISTE : girl5-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('girl5.png')">
      <img src="/image/AVATARS/girl5.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>

    <!--BOUTON N°6 DE LA LISTE : girl6-->

    <button class="h-20 w-20 border-2 border-white md:h-32 md:w-32" @click.prevent="changeAvatar('girl6.png')">
      <img src="/image/AVATARS/girl6.png" alt="Avatars" class="h-full w-full object-contain object-top" />
    </button>
  </div>
  <div class="my-3 ml-auto mr-auto w-full bg-indigo-500 px-5 py-2 text-center font-press-start-2p text-2xl text-white">Fonds</div>
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-5 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
  >
    <button class="h-20 w-20 border-2 md:h-32 md:w-32" @click.prevent="changeFonds('normal.png')">
      <img src="/image/FONDS/normal.png" alt="Avatars" class="h-full w-full object-contain" />
    </button>
    <button class="h-20 w-20 border-2 md:h-32 md:w-32" @click.prevent="changeFonds('sunset.png')">
      <img src="/image/FONDS/sunset.png" alt="Avatars" class="h-full w-full object-contain" />
    </button>
    <button class="h-20 w-20 border-2 md:h-32 md:w-32" @click.prevent="changeFonds('moutains.png')">
      <img src="/image/FONDS/moutains.png" alt="Avatars" class="h-full w-full object-contain" />
    </button>
    <button class="h-20 w-20 border-2 md:h-32 md:w-32" @click.prevent="changeFonds('desert.png')">
      <img src="/image/FONDS/desert.png" alt="Avatars" class="h-full w-full object-contain" />
    </button>
    <button class="h-20 w-20 border-2 md:h-32 md:w-32" @click.prevent="changeFonds('jungle.png')">
      <img src="/image/FONDS/jungle.png" alt="Avatars" class="h-full w-full object-contain" />
    </button>
    <button class="h-20 w-20 border-2 md:h-32 md:w-32" @click.prevent="changeFonds('sky.png')">
      <img src="/image/FONDS/sky.png" alt="Avatars" class="h-full w-full object-contain" />
    </button>
  </div>
</template>

<script>
import { PencilAltIcon, ArrowLeftIcon } from "@heroicons/vue/outline";

import BontonBlue from "../../components/boutons/BoutonBlue.vue";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../main.js";

export default {
  components: {
    PencilAltIcon,
    ArrowLeftIcon,
    BontonBlue,
  },

  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté (sorte de listeCatégorie, listePays)
      name: "", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      fond: null, // Fond / image de fond du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();
  },

  methods: {
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
        // console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage

        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        const spaceRef2 = ref(storage, "fonds/" + this.userInfo[0].fond);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
        getDownloadURL(spaceRef2)
          .then((url) => {
            this.fond = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },

    changeAvatar(a) {
      const newAvatar = a;
      this.userInfo[0].avatar = null;
      this.userInfo[0].avatar = newAvatar;

      //
      //
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
      //
      //
    },

    changeFonds(a) {
      const newFond = a;
      this.userInfo[0].fond = null;
      this.userInfo[0].fond = newFond;

      //
      //
      const storage = getStorage();
      // Référence du fichier avec son nom
      const spaceRef = ref(storage, "fonds/" + this.userInfo[0].fond);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.fond = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
      //
      //
    },

    async updateAvatar() {
      // Dans tous les cas on met à jour le participant dans Firestore
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

      //
      //
      //
      const firestore = getFirestore();
      const docRef = doc(firestore, "users", this.userInfo[0].id);
      // Modification du participant à partir de son id
      await updateDoc(docRef, {
        avatar: this.userInfo[0].avatar,
      });
      // redirection sur la liste des participants
      // console.log("Ca a marché ! User avatar mis à jour");
      //
      this.$router.push("/avatar");
    },
    //
    //
    //
    //
    //
    async updateFond() {
      // Dans tous les cas on met à jour le participant dans Firestore
      const storage = getStorage();
      // Référence du fichier avec son nom
      const spaceRef = ref(storage, "fonds/" + this.userInfo[0].avatar);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.fond = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
      //
      const firestore = getFirestore();
      const docRef = doc(firestore, "users", this.userInfo[0].id);
      // Modification du participant à partir de son id
      await updateDoc(docRef, {
        fond: this.userInfo[0].fond,
      });
      // redirection sur la liste des participants
      // console.log("Ca a marché ! User fond mis à jour");
      //
      this.$router.push("/avatar");
    },
  },
};
</script>

<style>
.avatarBackground {
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
