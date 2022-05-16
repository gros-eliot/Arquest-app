<template>
  <div class="my-5 mt-5 flex flex-col border-2 border-indigo-500 bg-transparent">
    <div class="flex justify-between p-3 text-white">
      <h3 class="relative p-2 font-press-start-2p text-xl font-bold">
        {{ titre }}
      </h3>
      <DotsHorizontalIcon class="h-12 w-12 fill-white" />
    </div>

    <hr
      class="m-3 mb-4 mt-0 rounded-full border-t-8"
      :class="{
        ' border-emerald-200 ': category === 'Sport',
        ' border-red-200 ': category === 'Social',
        ' border-red-200 ': category === 'Social',
      }"
    />

    <div class="flex items-center justify-center">
      <BoutonBlue>VALIDER</BoutonBlue>
    </div>
  </div>
</template>

<script>
import { DotsHorizontalIcon } from "@heroicons/vue/outline";
import BoutonBlue from "./boutons/BoutonBlue.vue";

export default {
  components: {
    DotsHorizontalIcon,
    BoutonBlue,
  },
  props: {
    titre: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
  },
};
</script>
<!--

        "Sport",
        "Social",
        "Gestion",
        "Travail",
        "DIY",
        "Santé",
        "Culture",
        "Maison",
-->
<style></style>
