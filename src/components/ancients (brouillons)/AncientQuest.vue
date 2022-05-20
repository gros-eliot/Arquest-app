<!---->
<!---->
<!--ANCIENNE PAGE "Quest.vue" : ne pas l'utiliser dans le router-->
<!---->
<!---->

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
        ' border-red-400 ': qcategory === 'Sport',
        ' border-cyan-200 ': qcategory === 'Social',
        ' border-indigo-300 ': qcategory === 'Gestion',
        ' border-gray-extended-300 ': qcategory === 'Travail',
        ' border-fuchsia-400 ': qcategory === 'DIY',
        ' border-lime-400 ': qcategory === 'Santé',
        ' border-yellow-400 ': qcategory === 'Culture',
        ' border-yellow-200 ': qcategory === 'Maison',
      }"
    />

    <div class="flex items-center justify-center">
      <BoutonBlue class="uppercase">Valider</BoutonBlue>
    </div>
  </div>
</template>

<script>
import { DotsHorizontalIcon } from "@heroicons/vue/outline";
import BoutonBlue from "../boutons/BoutonBlue.vue";

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

    qcategory: {
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
