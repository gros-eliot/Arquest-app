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
</script>


<template>
  <body class="bg-gray-900 p-3">
    <!-- Bouton créer quête -->
    <RouterLink to="/create_quest">
      <div
        class="
          w-16
          h-16
          rounded-full
          bg-indigo-300
          flex
          items-center
          justify-center
          fixed
          right-4
          bottom-24
        "
      >
        <PlusIcon class="fill-black w-10 h-10" />
      </div>
    </RouterLink>
    <!-- AGENDA SEMAINE <div></div>-->
    <div class="text-white">
      <h2>QUÊTES DU JOUR</h2>
      <div class="p-1">
        <Quest titre="Helena la com" Category="Social" />
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
