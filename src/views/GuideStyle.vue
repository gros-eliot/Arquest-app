<template>
  <div class="">
    <h1 class="text-center p-2 text-white bg-black">Guide de style</h1>
    <img src="" alt="" /><!--METTRE LOGO ARQUEST-->
  </div>

  <!-- Couleurs -->
  <h1 class="text-center text-2xl p-2 text-white bg-black">Couleurs</h1>

  <div class="flex flex-row sm:flex-col justify-center items-center m-2 py-6">
    <div class="flex flex-col justify-center gap-5 p-3 sm:flex-row">
      <span class="bg-red-500 w-20 h-10"></span>
      <span class="bg-indigo-500 w-20 h-10"></span>
      <span class="bg-indigo-300 w-20 h-10"></span>
      <span class="bg-gray-extended-300 w-20 h-10"></span>
      <span class="bg-gray-900 w-20 h-10"></span>
    </div>

    <div class="flex flex-col justify-center gap-6 p-3 sm:flex-row">
      <span class="bg-lime-400 w-10 h-5"></span>
      <span class="bg-cyan-200 w-10 h-5"></span>
      <span class="bg-red-400 w-10 h-5"></span>
      <span class="bg-indigo-300 w-10 h-5"></span>
      <span class="bg-fuchsia-400 w-10 h-5"></span>
      <span class="bg-yellow-200 w-10 h-5"></span>
      <span class="bg-gray-extended-300 w-10 h-5"></span>
      <span class="bg-yellow-400 w-10 h-5"></span>
    </div>
  </div>

  <!-- Typographie -->

  <h1 class="text-center text-2xl p-2 text-white bg-black">Typographie</h1>

  <div class="text-center flex flex-col items-center gap-5 m-2 py-6">
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

  <h1 class="text-center text-2xl p-2 text-white bg-black">Icônes</h1>
  <div class="flex justify-center">
    <div>
      <div class="flex justify-center p-2">
        <TrashIcon class="w-8 h-8" />
        <PaperAirplaneIcon class="w-8 h-8" />
        <DotsHorizontalIcon class="w-8 h-8" />
      </div>
      <div class="flex justify-center p-2">
        <PencilIcon class="w-8 h-8" />
        <QuestionMarkCircleIcon class="w-8 h-8" />
        <ReplyIcon class="w-8 h-8" />
      </div>
      <div class="flex justify-center p-2">
        <HeartIcon class="w-8 h-8" />
        <XIcon class="w-8 h-8" />
        <CheckIcon class="w-8 h-8" />
      </div>
    </div>
    <div>
      <div class="flex justify-center p-2">
        <CalendarIcon class="w-8 h-8" />
        <HomeIcon class="w-8 h-8" />
        <GiftIcon class="w-8 h-8" />
      </div>
      <div class="flex justify-center p-2">
        <FacebookIcon class="w-8 h-8" />
        <InstagramIcon class="w-8 h-8" />
        <TwitterIcon class="w-8 h-8" />
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarIcon, HomeIcon, GiftIcon } from "@heroicons/vue/solid";
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
} from "@heroicons/vue/outline";
import FacebookIcon from "../components/icons/FacebookIcon.vue";
import InstagramIcon from "../components/icons/InstagramIcon.vue";
import TwitterIcon from "../components/icons/TwitterIcon.vue";

export default {
  name: "App",
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

    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
  },
};
</script>


<style>
</style>
