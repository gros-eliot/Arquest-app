<script>
import CreatedQuestView from "../components/CreatedQuestView.vue";

import HeaderView from "../components/layouts/HeaderView.vue";
import NavView from "../components/layouts/NavView.vue";
import FooterView from "../components/layouts/FooterView.vue";
export default {
  name: "Home",
  components: {
    CreatedQuestView,
    HeaderView,
    NavView,
    FooterView,
  },
};
</script>


<template>
  <div class="bg-black text-white">
    <h2>QUÊTES DU JOUR</h2>
    <quest-view titre="Tarpon Bay" />
  </div>
</template>
