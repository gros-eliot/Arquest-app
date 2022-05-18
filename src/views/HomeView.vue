<script>
import Quest from "../components/Quest.vue";
import BravopartageView from "../components/overlay/BravopartageView.vue";
import { PlusIcon } from "@heroicons/vue/solid";
export default {
  name: "Home",
  components: {
    Quest,
    BravopartageView,
    PlusIcon,
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
        <Quest titre="Test final" qcategory="Social" />
        <!--<BravopartageView class="fixed inset-y-2 inset-x-4 z-50" />-->
        <Quest titre="Test final" qcategory="Sport" />
        <Quest titre="Test final" qcategory="Santé" />
      </div>

      <div class="p-1">
        <Quest titre="Test final" qcategory="Santé" />
      </div>
    </div>
  </body>
</template>
