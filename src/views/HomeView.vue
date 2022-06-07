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
  <div class="p-3">
    <!-- Bouton bas droite : créer quête -->
    <RouterLink to="/create_quest">
      <div class="fixed right-4 bottom-24 flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
        <PlusIcon class="h-10 w-10 fill-white" />
      </div>
    </RouterLink>

    <!-- AGENDA SEMAINE <div></div>-->

    <div>
      <Quest />
      <!--<BravopartageView class="fixed inset-y-2 inset-x-4 z-50" />-->
    </div>
  </div>
</template>
