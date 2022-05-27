<template>
  <div class="flex h-[65vh] w-full flex-col justify-between bg-gradient-to-r from-indigo-300 to-indigo-900 text-white">
    <h1>Personnalisation</h1>
  </div>
  <div class="bg-black">
    <div class="text-center">
      <div class="rounded-xl bg-indigo-300 py-2">Choisir un avatar</div>
    </div>

    <div class="flex justify-end">
      <RouterLink to="/custom_avatar"><PencilAltIcon class="w-11" /></RouterLink>
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
import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CustomAvatarView",
  data() {
    return {
      ImageData: "",
      userInfos: {
        nickname: "",
        image: "",
      },
    };
  },
};
</script>

<style></style>
