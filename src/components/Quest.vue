<template>
  <div class="my-5 mt-5 flex flex-col border-2 border-indigo-500 bg-transparent">
    <div class="flex justify-between p-3 text-white">
      <h3 class="relative p-2 font-roboto text-xl font-bold">
        {{ titre }}
      </h3>
      <DotsHorizontalIcon class="h-12 w-12 fill-white" />
    </div>

    <hr
      class="m-3 mb-4 mt-0 rounded-full border-t-[15px]"
      :class="{
        ' border-red-400 ': category === 'Sport',
        ' border-cyan-200 ': category === 'Social',
        ' border-indigo-300 ': category === 'Gestion',
        ' border-gray-extended-300 ': category === 'Travail',
        ' border-fuchsia-400 ': category === 'DIY',
        ' border-lime-400 ': category === 'Santé',
        ' border-yellow-400 ': category === 'Culture',
        ' border-yellow-200 ': category === 'Maison',
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
