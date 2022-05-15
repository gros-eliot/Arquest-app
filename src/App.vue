<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterView from "./components/layouts/FooterView.vue";
import HeaderView from "./components/layouts/HeaderView.vue";
import NavView from "./components/layouts/NavView.vue";
import GuideStyle from "./views/GuideStyle.vue";
</script>



<template>
  <header>
    <!--
    <HeaderView class="fixed" />
    -->

    <div class="wrapper">
      <nav class="flex justify-between">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create_quest"> Créer</RouterLink>
        <RouterLink to="/history">Historique</RouterLink>
        <RouterLink to="/agenda">Agenda</RouterLink>
        <RouterLink to="/avatar">Avatar</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
        <RouterLink to="/mentionslegales">Mentions légales</RouterLink>

        <RouterLink to="/gds">GDS</RouterLink>

        <RouterLink to="/social">SM</RouterLink>
      </nav>
    </div>
    <!--
    <NavView class="fixed bottom-0" />
    -->
  </header>

  <main class="pt-20">
    <router-view></router-view>
  </main>

  <footer class="pb-20">
    <footer-view class="bottom-0"></footer-view>
  </footer>
</template>

<style>
/*TYPOGRAPHIES*/
* {
  font-family: "Roboto", sans-serif;
}
h1,
h4 {
  font-family: "Press Start 2P";
}
/*SIZE OF TEXT*/
h1,
h2 {
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
}
h3 {
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
}
h4,
p {
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
}
figcaption {
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
}

/*WEIGHT OF TEXT*/
h2,
h3 {
  font-weight: bold;
}
</style>
