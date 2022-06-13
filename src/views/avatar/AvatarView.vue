<template>
  <div class="avatar1Background z-[100]">
    <div class="flex w-full flex-col justify-between bg-blue-500 text-white">
      <div class="mt-2 mr-2 flex justify-end">
        <RouterLink to="/custom_avatar"><PencilAltIcon class="w-11" /></RouterLink>
      </div>

      <div class="mb-5 ml-auto mr-auto">
        <p class="my-4 w-full bg-black bg-opacity-40 px-2 py-1 text-center font-press-start-2p text-xl">{{ name }}</p>
        <div v-if="avatar != null"><img :src="avatar" :alt="'Avatar de ' + name" class="w-40 md:w-44" /></div>
        <div v-else><img src="/image/default_avatar.webp" alt="Default avatar" /></div>
      </div>
    </div>
  </div>

  <!---->
  <!---->
  <!--AVATARS ^^^^-->
  <!---->
  <!---->

  <!---->
  <!---->
  <!--BADGES vvvv-->
  <!---->
  <!---->

  <div class="m-5 flex flex-col gap-1 text-white" v-for="users in userInfo" :key="users.id">
    <!--{{ userInfo[0].category_level }}-->
    <!--{{{ categoryLevel.sport }}-->

    <!--<div @load="getBadges(sport)"><img :src="badgesURL + badgeGrade" alt="essai" class="w-12" /></div>-->

    <button
      @click.prevent="
        getBadgeSport(badgeGrade);
        getBadgeGestion(badgeGrade);
        getBadgeSocial(badgeGrade);
        getBadgeSante(badgeGrade);
        getBadgeDIY(badgeGrade);
        getBadgeCulture(badgeGrade);
        getBadgeTravail(badgeGrade);
        getBadgeMaison(badgeGrade);
        afficherBadges = !afficherBadges;
      "
      class="ml-auto mr-auto w-fit bg-indigo-500 py-2 px-6 text-white"
    >
      <div v-if="afficherBadges === true" class="font-press-start-2p">Afficher les badges</div>
      <div v-else class="font-press-start-2p">Masquer les badges</div>
    </button>

    <div class="my-5 flex flex-wrap items-center justify-center gap-10" :class="{ hidden: afficherBadges }">
      <img :src="badgesURLsport" alt="Sport" class="w-12" />
      <img :src="badgesURLgestion" alt="Gestion" class="w-12" />
      <img :src="badgesURLsocial" alt="Social" class="w-12" />
      <img :src="badgesURLsante" alt="Santé" class="w-12" />
      <img :src="badgesURLdiy" alt="DIY" class="w-12" />
      <img :src="badgesURLculture" alt="Culture" class="w-12" />
      <img :src="badgesURLtravail" alt="Travail" class="w-12" />
      <img :src="badgesURLmaison" alt="Maison" class="w-12" />
      <div v-if="isAdmin === true"><img src="/image/BADGES/admin.png" alt="Badge admin" class="w-12" /></div>
    </div>
  </div>
</template>

<script>
import { PencilAltIcon } from "@heroicons/vue/outline";

// Fonctions Firestore
import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../main.js";

export default {
  name: "AvatarView",
  components: { PencilAltIcon },
  props: {
    afficherBadges: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
      categoryLevel: [],

      // URL DES BADGES !

      badgesURLsport: null,
      badgesURLculture: null,
      badgesURLmaison: null,
      badgesURLsante: null,
      badgesURLtravail: null,
      badgesURLsocial: null,
      badgesURLdiy: null,
      badgesURLgestion: null,

      badgeGrade: null,
    };
  },
  mounted() {
    // FONCTIONS POUR OBTENIR LES BADGES
    this.getBadgeSport();
    this.getBadgeGestion();
    this.getBadgeSocial();
    this.getBadgeSante();
    this.getBadgeDIY();
    this.getBadgeCulture();
    this.getBadgeTravail();
    this.getBadgeMaison();
    //
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

    //
    //
    // SPORT
    //
    //
    getBadgeSport(badgeGrade) {
      if (this.categoryLevel.sport >= 0) {
        badgeGrade = "fer.png";
      }
      if (this.categoryLevel.sport >= 5) {
        badgeGrade = "bronze.png";
      }
      if (this.categoryLevel.sport >= 10) {
        badgeGrade = "argent.png";
      }
      if (this.categoryLevel.sport >= 20) {
        badgeGrade = "gold.png";
      }
      if (this.categoryLevel.sport >= 50) {
        badgeGrade = "diamond.png";
      }
      if (this.categoryLevel.sport >= 100) {
        badgeGrade = "ultime.png";
      }

      const storage = getStorage();
      const badgeRef = ref(storage, "badges/sport/" + badgeGrade);
      getDownloadURL(badgeRef)
        .then((url) => {
          this.badgesURLsport = url;
        })
        .catch((error) => {
          console.log("erreur download badge URL", error);
        });
    },
    //
    //
    // GESTION
    //
    //
    getBadgeGestion(badgeGrade) {
      if (this.categoryLevel.gestion >= 0) {
        badgeGrade = "fer.png";
      }
      if (this.categoryLevel.gestion >= 5) {
        badgeGrade = "bronze.png";
      }
      if (this.categoryLevel.gestion >= 10) {
        badgeGrade = "argent.png";
      }
      if (this.categoryLevel.gestion >= 20) {
        badgeGrade = "gold.png";
      }
      if (this.categoryLevel.gestion >= 50) {
        badgeGrade = "diamond.png";
      }
      if (this.categoryLevel.gestion >= 100) {
        badgeGrade = "ultime.png";
      }

      const storage = getStorage();
      const badgeRef = ref(storage, "badges/gestion/" + badgeGrade);
      getDownloadURL(badgeRef)
        .then((url) => {
          this.badgesURLgestion = url;
        })
        .catch((error) => {
          console.log("erreur download badge URL", error);
        });
    },
    //
    //
    // SOCIAL
    //
    //
    getBadgeSocial(badgeGrade) {
      if (this.categoryLevel.social >= 0) {
        badgeGrade = "fer.png";
      }
      if (this.categoryLevel.social >= 5) {
        badgeGrade = "bronze.png";
      }
      if (this.categoryLevel.social >= 10) {
        badgeGrade = "argent.png";
      }
      if (this.categoryLevel.social >= 20) {
        badgeGrade = "gold.png";
      }
      if (this.categoryLevel.social >= 50) {
        badgeGrade = "diamond.png";
      }
      if (this.categoryLevel.social >= 100) {
        badgeGrade = "ultime.png";
      }

      const storage = getStorage();
      const badgeRef = ref(storage, "badges/social/" + badgeGrade);
      getDownloadURL(badgeRef)
        .then((url) => {
          this.badgesURLsocial = url;
        })
        .catch((error) => {
          console.log("erreur download badge URL", error);
        });
    },
    //
    //
    // SANTE
    //
    //
    getBadgeSante(badgeGrade) {
      if (this.categoryLevel.sante >= 0) {
        badgeGrade = "fer.png";
      }
      if (this.categoryLevel.sante >= 5) {
        badgeGrade = "bronze.png";
      }
      if (this.categoryLevel.sante >= 10) {
        badgeGrade = "argent.png";
      }
      if (this.categoryLevel.sante >= 20) {
        badgeGrade = "gold.png";
      }
      if (this.categoryLevel.sante >= 50) {
        badgeGrade = "diamond.png";
      }
      if (this.categoryLevel.sante >= 100) {
        badgeGrade = "ultime.png";
      }

      const storage = getStorage();
      const badgeRef = ref(storage, "badges/sante/" + badgeGrade);
      getDownloadURL(badgeRef)
        .then((url) => {
          this.badgesURLsante = url;
        })
        .catch((error) => {
          console.log("erreur download badge URL", error);
        });
    },
    //
    //
    // DIY
    //
    //
    getBadgeDIY(badgeGrade) {
      if (this.categoryLevel.diy >= 0) {
        badgeGrade = "fer.png";
      }
      if (this.categoryLevel.diy >= 5) {
        badgeGrade = "bronze.png";
      }
      if (this.categoryLevel.diy >= 10) {
        badgeGrade = "argent.png";
      }
      if (this.categoryLevel.diy >= 20) {
        badgeGrade = "gold.png";
      }
      if (this.categoryLevel.diy >= 50) {
        badgeGrade = "diamond.png";
      }
      if (this.categoryLevel.diy >= 100) {
        badgeGrade = "ultime.png";
      }

      const storage = getStorage();
      const badgeRef = ref(storage, "badges/diy/" + badgeGrade);
      getDownloadURL(badgeRef)
        .then((url) => {
          this.badgesURLdiy = url;
        })
        .catch((error) => {
          console.log("erreur download badge URL", error);
        });
    },
    //
    //
    // Culture
    //
    //
    getBadgeCulture(badgeGrade) {
      if (this.categoryLevel.culture >= 0) {
        badgeGrade = "fer.png";
      }
      if (this.categoryLevel.culture >= 5) {
        badgeGrade = "bronze.png";
      }
      if (this.categoryLevel.culture >= 10) {
        badgeGrade = "argent.png";
      }
      if (this.categoryLevel.culture >= 20) {
        badgeGrade = "gold.png";
      }
      if (this.categoryLevel.culture >= 50) {
        badgeGrade = "diamond.png";
      }
      if (this.categoryLevel.culture >= 100) {
        badgeGrade = "ultime.png";
      }

      const storage = getStorage();
      const badgeRef = ref(storage, "badges/culture/" + badgeGrade);
      getDownloadURL(badgeRef)
        .then((url) => {
          this.badgesURLculture = url;
        })
        .catch((error) => {
          console.log("erreur download badge URL", error);
        });
    },
    //
    //
    // Travail
    //
    //
    getBadgeTravail(badgeGrade) {
      if (this.categoryLevel.travail >= 0) {
        badgeGrade = "fer.png";
      }
      if (this.categoryLevel.travail >= 5) {
        badgeGrade = "bronze.png";
      }
      if (this.categoryLevel.travail >= 10) {
        badgeGrade = "argent.png";
      }
      if (this.categoryLevel.travail >= 20) {
        badgeGrade = "gold.png";
      }
      if (this.categoryLevel.travail >= 50) {
        badgeGrade = "diamond.png";
      }
      if (this.categoryLevel.travail >= 100) {
        badgeGrade = "ultime.png";
      }

      const storage = getStorage();
      const badgeRef = ref(storage, "badges/travail/" + badgeGrade);
      getDownloadURL(badgeRef)
        .then((url) => {
          this.badgesURLtravail = url;
        })
        .catch((error) => {
          console.log("erreur download badge URL", error);
        });
    },
    //
    //
    // Maison
    //
    //
    getBadgeMaison(badgeGrade) {
      if (this.categoryLevel.maison >= 0) {
        badgeGrade = "fer.png";
      }
      if (this.categoryLevel.maison >= 5) {
        badgeGrade = "bronze.png";
      }
      if (this.categoryLevel.maison >= 10) {
        badgeGrade = "argent.png";
      }
      if (this.categoryLevel.maison >= 20) {
        badgeGrade = "gold.png";
      }
      if (this.categoryLevel.maison >= 50) {
        badgeGrade = "diamond.png";
      }
      if (this.categoryLevel.maison >= 100) {
        badgeGrade = "ultime.png";
      }

      const storage = getStorage();
      const badgeRef = ref(storage, "badges/maison/" + badgeGrade);
      getDownloadURL(badgeRef)
        .then((url) => {
          this.badgesURLmaison = url;
        })
        .catch((error) => {
          console.log("erreur download badge URL", error);
        });
    },
  },
};
</script>

<style>
.avatar1Background {
  animation: 2s ease-out infinite alternate fond_anime1;
}

@keyframes fond_anime1 {
  from {
    background-color: rgba(0 0 0, 0.3);
  }

  to {
    background-color: rgba(0 0 0, 0.7);
  }
}
</style>
