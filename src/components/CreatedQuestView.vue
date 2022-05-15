<template>
  <div class="flex flex-col border-2 border-indigo-500 m-5 bg-transparent">
    <div class="flex justify-between p-3 text-white">
      <h3 class="text-xl font-roboto font-bold p-2">Quest_named</h3>
      <DotsHorizontalIcon class="w-12 h-12 fill-white" />
    </div>
    <div class="flex justify-center items-center p-3">
      <div class="w-[95%] h-5 bg-red-400 rounded-xl"></div>
    </div>
    <div class="flex justify-center items-center">
      <BoutonBlue>VALIDER</BoutonBlue>
    </div>
  </div>
</template>

<script>
import { DotsHorizontalIcon } from "@heroicons/vue/outline";
import BoutonBlue from "./boutons/BoutonBlue.vue";

export default {
  name: "CreatedQuestView",
  components: {
    DotsHorizontalIcon,
    BoutonBlue,
  },
};
</script>

<style>
</style>