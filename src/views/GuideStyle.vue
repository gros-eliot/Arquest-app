<template>
  <div class="text-white">
    <div class="flex flex-col items-center justify-center px-8 py-10 text-center">
      <h1 class="font-press-start-2p text-2xl text-white">Guide de style</h1>
      <ArquestPremium />
    </div>
    <!-- Couleurs -->
    <h1 class="bg-gray-900 p-2 text-center text-2xl text-white">Couleurs</h1>
    <div class="m-2 flex flex-row items-center justify-center py-6 sm:flex-col">
      <div class="flex flex-col justify-center gap-5 p-3 sm:flex-row">
        <span class="h-10 w-20 bg-red-500"></span>
        <span class="h-10 w-20 bg-indigo-500"></span>
        <span class="h-10 w-20 bg-indigo-300"></span>
        <span class="h-10 w-20 bg-gray-extended-700"></span>
        <span class="h-10 w-20 bg-gray-extended-300"></span>
        <span class="h-10 w-20 bg-gray-900"></span>
      </div>
      <div class="flex flex-col justify-center gap-6 p-3 sm:flex-row">
        <!--Sport-->
        <span class="h-5 w-10 bg-red-400"></span
        ><!--Social-->
        <span class="h-5 w-10 bg-cyan-200"></span
        ><!--Gestion-->
        <span class="h-5 w-10 bg-indigo-300"></span
        ><!--Travail-->
        <span class="h-5 w-10 bg-gray-extended-300"></span
        ><!--DIY-->
        <span class="h-5 w-10 bg-fuchsia-400"></span
        ><!--Santé-->
        <span class="h-5 w-10 bg-lime-400"></span
        ><!--Culture-->
        <span class="h-5 w-10 bg-yellow-400"></span
        ><!--Maison-->
        <span class="h-5 w-10 bg-yellow-200"></span>
      </div>
    </div>
    <!-- Typographie -->
    <h1 class="bg-gray-900 p-2 text-center text-2xl text-white">Typographie</h1>
    <div class="m-2 flex flex-col items-center gap-5 py-6 text-center text-white">
      <h1 class="font-press-start-2p text-2xl">Connecting...</h1>
      <!-- H1 version 2-->
      <h1 class="font-press-roboto text-4xl font-bold">Connecting...</h1>
      <h2 class="font-roboto text-2xl font-bold">Connecting to...</h2>
      <h3 class="font-roboto text-xl font-bold">Connecting to Arquest's...</h3>
      <h4 class="font-press-start-2p text-base">Connecting to Arquest's style...</h4>
      <p class="font-roboto text-base">Connecting to Arquest's style guide...</p>
      <figure>
        <figcaption class="text-xs">Connecting to Arquest's style guide...</figcaption>
      </figure>
    </div>
    <!-- Icônes -->
    <h1 class="bg-gray-900 p-2 text-center text-2xl text-white">Icônes</h1>
    <div class="flex justify-center gap-10 fill-white">
      <div>
        <div class="flex justify-center gap-2 p-2">
          <TrashIcon class="h-8 w-8" />
          <PaperAirplaneIcon class="h-8 w-8" />
          <DotsHorizontalIcon class="h-8 w-8" />
        </div>
        <div class="flex justify-center gap-2 p-2">
          <PencilIcon class="h-8 w-8" />
          <QuestionMarkCircleIcon class="h-8 w-8" />
          <ReplyIcon class="h-8 w-8" />
        </div>
        <div class="flex justify-center gap-2 p-2">
          <HeartIcon class="h-8 w-8" />
          <XIcon class="h-8 w-8" />
          <CheckIcon class="h-8 w-8" />
        </div>
      </div>
      <div>
        <div class="flex justify-center gap-2 p-2">
          <CalendarIcon class="h-8 w-8" />
          <HomeIcon class="h-8 w-8" />
          <GiftIcon class="h-8 w-8" />
        </div>
        <div class="flex justify-center gap-2 p-2">
          <FacebookIcon class="h-9 w-9" />
          <InstagramIcon class="h-9 w-9" />
          <TwitterIcon class="h-9 w-9" />
        </div>
        <div class="flex justify-center gap-2 p-2">
          <MenuAlt1Icon class="h-8 w-8" />
          <ArquestPremium class="h-8 w-8" />
          <MMIIcon class="h-8 w-8" />
        </div>
      </div>
    </div>
    <!-- Composants -->
    <h1 class="bg-gray-900 p-2 text-center text-2xl text-white">Composants</h1>
    <div>
      <h2 class="p-2 font-roboto text-2xl font-bold">Les boutons</h2>
      <div>
        <router-link to="/">
          <BoutonBlue>Premier bouton : valider</BoutonBlue>
        </router-link>
        <router-link to="/">
          <BoutonBorder>Deuxième bouton : valider</BoutonBorder>
        </router-link>
        <router-link to="/">
          <BoutonClose> XIcon </BoutonClose>
        </router-link>
      </div>
      <div>
        <h2 class="p-2 font-roboto text-2xl font-bold">Les composants d'interfaces (layouts)</h2>
        <HeaderView class="mt-5" />
        <NavView class="mt-5" />
        <FooterView class="mt-5 mb-5" />
      </div>
      <div class="p-3">
        <h2 class="p-2 font-roboto text-2xl font-bold text-white">Les composants des pages</h2>
        <h3 class="font-roboto text-xl font-bold text-white">Accueil</h3>
        <h2 class="p-2 font-roboto text-2xl font-bold text-white">Les overlays</h2>

        <!-- POUR QUE LES OVERLAYS FONCTIONNENT VISUELLEMENT : 
        class="fixed inset-y-2 inset-x-4 z-50"
        -->

        <SucceedQuete />
        <DetailsQuestView />
        <BravoView />
        <BravopartageView />
        <FinaldeletView />
        <HistoriqueView />
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarIcon, HomeIcon, GiftIcon, PlusIcon } from "@heroicons/vue/solid";
import {
  TrashIcon,
  PencilIcon,
  PaperAirplaneIcon,
  DotsHorizontalIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  CheckIcon,
  XIcon,
  HeartIcon,
  MenuAlt1Icon,
} from "@heroicons/vue/outline";
import FacebookIcon from "../components/icons/FacebookIcon.vue";
import InstagramIcon from "../components/icons/InstagramIcon.vue";
import TwitterIcon from "../components/icons/TwitterIcon.vue";
import ArquestPremium from "../components/icons/ArquestPremium.vue";
import MMIIcon from "../components/icons/MMIIcon.vue";

import BoutonBlue from "../components/boutons/BoutonBlue.vue";
import BoutonBorder from "../components/boutons/BoutonBorder.vue";
import BoutonClose from "../components/boutons/BoutonClose.vue";

import HeaderView from "../components/overlay/TooEarlyView.vue";
import NavView from "../components/layouts/NavView.vue";
import FooterView from "../components/layouts/FooterView.vue";
import QuestView from "../components/Quest.vue";
import TooEarlyView from "../components/overlay/TooEarlyView.vue";
import SucceedQuete from "../components/overlay/QuetesaccompliespartageView.vue";
import DetailsQuestView from "../components/overlay/DetailsQuestView.vue";
import BravoView from "../components/overlay/BravoView.vue";
import BravopartageView from "../components/overlay/BravopartageView.vue";
import FinaldeletView from "../components/overlay/FinaldeletView.vue";
import HistoriqueView from "../components/overlay/HistoriqueView.vue";

export default {
  name: "GuideStyle",
  components: {
    TrashIcon,
    PencilIcon,
    PaperAirplaneIcon,
    DotsHorizontalIcon,
    QuestionMarkCircleIcon,
    ReplyIcon,
    CheckIcon,
    XIcon,
    HeartIcon,
    HomeIcon,
    CalendarIcon,
    GiftIcon,
    PlusIcon,
    MenuAlt1Icon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    ArquestPremium,
    MMIIcon,
    BoutonBlue,
    BoutonBorder,
    BoutonClose,
    HeaderView,
    NavView,
    FooterView,
    QuestView,
    TooEarlyView,
    SucceedQuete,
    DetailsQuestView,
    BravoView,
    BravopartageView,
    FinaldeletView,
    HistoriqueView,
  },
};
</script>

<style></style>
