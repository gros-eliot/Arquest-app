<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterView from "./components/layouts/FooterView.vue";
import HeaderView from "./components/layouts/HeaderView.vue";
import NavView from "./components/layouts/NavView.vue";
import GuideStyle from "./components/ancients_and_gds/GuideStyle.vue";
</script>

<template>
  <header class="text-white">
    <HeaderView class="fixed z-[9]" />

    <NavView class="fixed bottom-0 z-[8]" />
  </header>
  <main class="pt-20">
    <router-view></router-view>
  </main>
  <footer class="bottom-0 mt-5 pb-[4.5rem]">
    <footer-view class="bottom-0 w-full"></footer-view>
  </footer>
</template>

<style>
input::placeholder {
  color: white;
}
textarea::placeholder {
  color: white;
}
</style>
