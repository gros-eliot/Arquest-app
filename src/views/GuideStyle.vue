<template>
  <div class="">
    <h1 class="text-center p-2 text-white bg-black">Guide de style</h1>
    <img src="" alt="" /><!--METTRE LOGO ARQUEST-->
  </div>

  <!-- Couleurs -->
  <h1 class="text-center text-2xl p-2 text-white bg-gray-900">Couleurs</h1>
  <div class="flex flex-row sm:flex-col justify-center items-center m-2 py-6">
    <div class="flex flex-col justify-center gap-5 p-3 sm:flex-row">
      <span class="bg-red-500 w-20 h-10"></span>
      <span class="bg-indigo-500 w-20 h-10"></span>
      <span class="bg-indigo-300 w-20 h-10"></span>
      <span class="bg-gray-extended-700 w-20 h-10"></span>
      <span class="bg-gray-800 w-20 h-10"></span>
      <span class="bg-gray-900 w-20 h-10"></span>
    </div>

    <div class="flex flex-col justify-center gap-6 p-3 sm:flex-row">
      ><!--Sport-->
      <span class="bg-red-400 w-10 h-5"></span
      ><!--Social-->
      <span class="bg-cyan-200 w-10 h-5"></span
      ><!--Gestion-->
      <span class="bg-indigo-300 w-10 h-5"></span
      ><!--Travail-->
      <span class="bg-gray-extended-300 w-10 h-5"></span
      ><!--DIY-->
      <span class="bg-fuchsia-400 w-10 h-5"></span
      ><!--Santé-->
      <span class="bg-lime-400 w-10 h-5"></span
      ><!--Culture-->
      <span class="bg-yellow-400 w-10 h-5"></span
      ><!--Maison-->
      <span class="bg-yellow-200 w-10 h-5"></span>
    </div>
  </div>

  <!-- Typographie -->
  <h1 class="text-center text-2xl p-2 text-white bg-gray-900">Typographie</h1>
  <div class="text-center flex flex-col items-center gap-5 m-2 py-6 text-white">
    <h1 class="text-2xl font-press-start-2p">Connecting...</h1>
    <h2 class="text-2xl font-roboto font-bold">Connecting to...</h2>
    <h3 class="text-xl font-roboto font-bold">Connecting to Arquest's...</h3>
    <h4 class="text-base font-press-start-2p">
      Connecting to Arquest's style...
    </h4>
    <p class="text-base font-roboto">Connecting to Arquest's style guide...</p>
    <figure>
      <figcaption class="text-xs">
        Connecting to Arquest's style guide...
      </figcaption>
    </figure>
  </div>

  <!-- Icônes -->
  <h1 class="text-center text-2xl p-2 text-white bg-gray-900">Icônes</h1>
  <div class="flex gap-10 justify-center">
    <div>
      <div class="flex justify-center p-2 gap-2">
        <TrashIcon class="w-8 h-8" />
        <PaperAirplaneIcon class="w-8 h-8" />
        <DotsHorizontalIcon class="w-8 h-8" />
      </div>
      <div class="flex justify-center p-2 gap-2">
        <PencilIcon class="w-8 h-8" />
        <QuestionMarkCircleIcon class="w-8 h-8" />
        <ReplyIcon class="w-8 h-8" />
      </div>
      <div class="flex justify-center p-2 gap-2">
        <HeartIcon class="w-8 h-8" />
        <XIcon class="w-8 h-8" />
        <CheckIcon class="w-8 h-8" />
      </div>
    </div>
    <div>
      <div class="flex justify-center p-2 gap-2">
        <CalendarIcon class="w-8 h-8" />
        <HomeIcon class="w-8 h-8" />
        <GiftIcon class="w-8 h-8" />
      </div>
      <div class="flex justify-center p-2 gap-2">
        <FacebookIcon class="w-8 h-8" />
        <InstagramIcon class="w-8 h-8" />
        <TwitterIcon class="w-8 h-8" />
      </div>
      <div class="flex justify-center p-2 gap-2">
        <MenuAlt1Icon class="w-8 h-8" />
        <ArquestPremium class="w-8 h-8" />
        <MMIIcon class="w-8 h-8" />
      </div>
    </div>
  </div>

  <!-- Composants -->
  <h1 class="text-center text-2xl p-2 text-white bg-gray-900">Composants</h1>
  <div>
    <h2 class="text-2xl font-roboto font-bold p-2">Les boutons</h2>
    <div>
      <router-link to="/">
        <BoutonBlue>Premier bouton : valider</BoutonBlue>
      </router-link>
      <router-link to="/">
        <BoutonBorder>Deuxième bouton : valider</BoutonBorder>
      </router-link>
    </div>
    <div>
      <h2 class="text-2xl font-roboto font-bold p-2">
        Les composants d'interfaces (layouts)
      </h2>
      <HeaderView class="mt-5" />
      <NavView class="mt-5" />
      <FooterView class="mt-5 mb-5" />
    </div>
    <div class="bg-slate-700 p-3">
      <h2 class="text-2xl font-roboto font-bold p-2 text-white">
        Les composants des pages
      </h2>
      <h3 class="text-xl font-roboto font-bold text-white">Accueil</h3>

      <QuestView />
   <h2 class="text-2xl font-roboto font-bold p-2 text-white">
        Les overlays
      </h2>
      <DelQuete />
      <SucceedQuete />
      <FuturQuete /> 
      <BravoView />
      <BravopartageView />
      <FinaldeletView />
      <HistoriqueView /> 
    </div>
  </div>
</template>

<script>
import {
  CalendarIcon,
  HomeIcon,
  GiftIcon,
  PlusIcon,
} from "@heroicons/vue/solid";
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

import HeaderView from "../components/layouts/HeaderView.vue";
import NavView from "../components/layouts/NavView.vue";
import FooterView from "../components/layouts/FooterView.vue";
import QuestView from "../components/Quest.vue";
import DelQuete from "../components/Overlay/SuppressionqueteView.vue";
import SucceedQuete from "../components/Overlay/QuetesaccompliespartageView.vue";
import FuturQuete from "../components/Overlay/AccompliesquetesView.vue";
import BravoView from "../components/Overlay/BravoView.vue";
import BravopartageView from "../components/Overlay/BravopartageView.vue";
import FinaldeletView from "../components/Overlay/FinaldeletView.vue";
import HistoriqueView from "../components/Overlay/HistoriqueView.vue";


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
    HeaderView,
    NavView,
    FooterView,
    QuestView,
    DelQuete,
    SucceedQuete,
    FuturQuete,
    BravoView,
    BravopartageView,
    FinaldeletView,
    HistoriqueView
},
};
</script>


<style>
</style>
