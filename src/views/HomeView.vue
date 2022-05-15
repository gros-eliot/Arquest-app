<script>
import Quest from "../components/Quest.vue";
export default {
  name: "Home",
  components: {
    Quest,
  },
};
</script>


<template>
  <div class="bg-black text-white">
    <h2>QUÊTES DU JOUR</h2>
    <Quest titre="Helena la com" />
    <Quest titre="Fringz le design" />
    <Quest titre="Telio le dev" />
  </div>
</template>
