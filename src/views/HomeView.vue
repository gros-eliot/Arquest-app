<script>
import Quest from "../components/Quest.vue";
import { PlusIcon } from "@heroicons/vue/solid";
export default {
  name: "Home",
  components: {
    Quest,
    PlusIcon,
  },
};

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

    Category: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <body class="p-3">
    <!-- Bouton bas droite : créer quête -->
    <RouterLink to="/create_quest">
      <div class="fixed right-4 bottom-24 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-300">
        <PlusIcon class="h-10 w-10 fill-black" />
      </div>
    </RouterLink>

    <!-- AGENDA SEMAINE <div></div>-->
    <div class="text-white">
      <h2 class="font-roboto text-2xl font-bold">QUÊTES DU JOUR</h2>
      <div class="p-1">
        <Quest titre="Helena la com" category="Social" />
        <Quest titre="Fringz le design" />
        <Quest titre="Telio le dev" />
      </div>
      <hr />
      <div class="p-1">
        <Quest titre="Test final" />
      </div>
    </div>
  </body>
</template>
