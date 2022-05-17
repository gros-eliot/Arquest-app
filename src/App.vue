<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterView from "./components/layouts/FooterView.vue";
import HeaderView from "./components/layouts/HeaderView.vue";
import NavView from "./components/layouts/NavView.vue";
import GuideStyle from "./views/GuideStyle.vue";
</script>

<template>
  <body class="bg-black font-roboto">
    <header class="text-white">
      <HeaderView class="fixed z-20" />

      <!--
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
      </div>-->
      <NavView class="fixed bottom-0 z-20" />
    </header>
    <main class="pt-24">
      <router-view></router-view>
    </main>
    <footer class="pb-[4.5rem]">
      <footer-view class="bottom-0"></footer-view>
    </footer>
  </body>
</template>

<style></style>
