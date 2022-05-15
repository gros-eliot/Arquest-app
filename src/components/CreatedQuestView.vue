<template>
  <div class="flex flex-col border-2 border-indigo-500 m-5 bg-transparent">
    <div class="flex justify-between p-3 text-white">
      <div>
        <h3 class="relative text-xl font-roboto font-bold p-2">Quest name</h3>
      </div>
      <DotsHorizontalIcon class="w-12 h-12 fill-white" />
    </div>
    <hr class="mb-4 mt-0 border-t-8 rounded-full m-3 border-indigo-300" />

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