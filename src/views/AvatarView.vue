<template>
  <div>
    <div class="bg-gradient-to-r from-indigo-300 to-indigo-900 text-white">
      <RouterLink to="/custom"
        ><div class="grid justify-items-end"><PencilAltIcon class="w-11" /></div
      ></RouterLink>
      <div class="mt-96 text-2xl">Insérer image</div>
    </div>
  </div>
  <div class="m-5 text-white">
    <h2>Badges</h2>
    <img src="../assets/BADGES/culture/1.svg" alt="" />
    <h3>Sport</h3>
  </div>
</template>

<script>
import { PencilAltIcon } from "@heroicons/vue/outline";
import BadgeTEST from "../components/icons/BadgesIcon.vue";

export default {
  name: "AvatarView",
  components: { PencilAltIcon, BadgeTEST },
};
</script>
