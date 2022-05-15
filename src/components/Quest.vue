<template>
  <div
    class="flex flex-col border-2 border-indigo-500 mt-5 my-5 bg-transparent"
  >
    <div class="flex justify-between p-3 text-white">
      <h3 class="relative text-xl font-press-start-2p font-bold p-2">
        {{ titre }}
      </h3>
      <DotsHorizontalIcon class="w-12 h-12 fill-white" />
    </div>

    <hr class="mb-4 mt-0 border-t-8 rounded-full m-3 {{ Category }} " />

    <div class="flex justify-center items-center">
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
    type: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
  },
};
</script>
  <!--
  data() {
    return {
      listeCategorie: [
        "Sport",
        "Social",
        "Gestion",
        "Travail",
        "DIY",
        "Santé",
        "Culture",
        "Maison",
      ],
    };
  },-->
<style>
.Sport {
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity));
}
.Social {
  --tw-bg-opacity: 1;
  background-color: rgb(165 243 252 / var(--tw-bg-opacity));
}
.Gestion {
  --tw-bg-opacity: 1;
  background-color: rgb(165 180 252 / var(--tw-bg-opacity));
}
.Travail {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity));
}
.DIY {
  --tw-bg-opacity: 1;
  background-color: rgb(232 121 249 / var(--tw-bg-opacity));
}
.Santé {
  --tw-bg-opacity: 1;
  background-color: rgb(163 230 53 / var(--tw-bg-opacity));
}
.Culture {
  --tw-bg-opacity: 1;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity));
}
.Maison {
  --tw-bg-opacity: 1;
  background-color: rgb(254 240 138 / var(--tw-bg-opacity));
}
</style>