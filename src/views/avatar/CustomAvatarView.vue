<template>
  <div class="flex h-[65vh] w-full flex-col justify-between bg-gradient-to-r from-indigo-300 to-indigo-900 text-white">
    <div class="flex items-center justify-between p-3">
      <h1 class="text-2xl font-bold">Personnalisation</h1>
      <RouterLink to="/avatar"><ArrowLeftIcon class="w-11 stroke-white" /></RouterLink>
    </div>
  </div>

  <div class="my-3 ml-auto mr-auto w-11/12 bg-red-500 px-5 py-2 text-center font-press-start-2p text-2xl text-white">Avatars</div>

  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-3 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
  >
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
    <button class="h-20 w-20 border border-white md:h-32 md:w-32">
      <img src="" alt="" />
    </button>
  </div>
  <div class="my-3 ml-auto mr-auto w-11/12 bg-red-500 px-5 py-2 text-center font-press-start-2p text-2xl text-white">Fonds</div>
</template>

<script>
import { PencilAltIcon, ArrowLeftIcon } from "@heroicons/vue/outline";
export default {
  components: {
    PencilAltIcon,
    ArrowLeftIcon,
  },
};
</script>
<!--
<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  data() {
    return {
      user: {
        id: null, // son nom
        avatar_id: null, // son nom
        photo: "", // sa photo (nom du fichier)
        date: null, // sa date de date
        international: "", // nationalité
        site: "", // site
        description: "", // desc
      },

      refArtiste: null, // Référence du artiste à modifier
      photoActuelle: null, // Photo actuelle du artiste
    };
  },

  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche artiste concerné
    this.getArtiste(this.$route.params.id);
  },
};
</script>

<style></style>
-->
