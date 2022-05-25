<template>
  <h1 class="m-6 mb-3 font-roboto text-2xl font-bold text-white">TYPE DE QUÊTES</h1>
  <div class="mx-6 my-3 flex flex-col">
    <div class="flex flex-row gap-1">
      <span class="my-2 ml-3 bg-red-400 px-2" />
      <div class="flex flex-col px-3 pb-3">
        <h1 class="py-2 font-press-start-2p text-2xl text-white">SPORT</h1>
        <p class="text-white">L’ensemble des quêtes touchant à une activité physique</p>
        <p class="text-sm italic text-white">Ex : Aller courir, Faire du tennis, Aller à la salle ...</p>
      </div>
    </div>
  </div>

  <div class="mx-6 my-3 flex flex-col">
    <div class="flex flex-row gap-1">
      <span class="my-2 ml-3 bg-cyan-200 px-2" />
      <div class="flex flex-col px-3 pb-3">
        <h1 class="py-2 font-press-start-2p text-2xl text-white">SOCIAL</h1>
        <p class="text-white">Concerne les quêtes ayant un rappport avec les relations humaines</p>
        <p class="text-sm italic text-white">Ex : Prendre des nouvelles de Tom, Aller chez maman ...</p>
      </div>
    </div>
  </div>

  <div class="mx-6 my-3 flex flex-col">
    <div class="flex flex-row gap-1">
      <span class="my-2 ml-3 bg-indigo-300 px-2" />
      <div class="flex flex-col px-3 pb-3">
        <h1 class="py-2 font-press-start-2p text-2xl text-white">GESTION</h1>
        <p class="text-white">Concerne les quêtes ayant un rappport avec l’organisation ou l’administration</p>
        <p class="text-sm italic text-white">Ex : Organiser les vacances, Payer les impots...</p>
      </div>
    </div>
  </div>

  <div class="mx-6 my-3 flex flex-col">
    <div class="flex flex-row gap-1">
      <span class="my-2 ml-3 bg-gray-extended-300 px-2" />
      <div class="flex flex-col px-3 pb-3">
        <h1 class="py-2 font-press-start-2p text-2xl text-white">TRAVAIL</h1>
        <p class="text-white">L’ensemble des activités liées au monde professionelle</p>
        <p class="text-sm italic text-white">Ex : Terminer le dossier, Demander une augmentation...</p>
      </div>
    </div>
  </div>

  <div class="mx-6 my-3 flex flex-col">
    <div class="flex flex-row gap-1">
      <span class="my-2 ml-3 bg-fuchsia-400 px-2" />
      <div class="flex flex-col px-3 pb-3">
        <h1 class="py-2 font-press-start-2p text-2xl text-white">DIY</h1>
        <p class="text-white">L’ensemble des activités liées au bricolage et à la création manuelle</p>
        <p class="text-sm italic text-white">Ex : Réparer le vase, Tricoter un Pull ...</p>
      </div>
    </div>
  </div>

  <div class="mx-6 my-3 flex flex-col">
    <div class="flex flex-row gap-1">
      <span class="my-2 ml-3 bg-green-400 px-2" />
      <div class="flex flex-col px-3 pb-3">
        <h1 class="py-2 font-press-start-2p text-2xl text-white">SANTE</h1>
        <p class="text-white">Concenre les quêtes liées au bien être et à la santé</p>
        <p class="text-sm italic text-white">Ex : Faire un régime, Manger Bio ....</p>
      </div>
    </div>
  </div>

  <div class="mx-6 my-3 flex flex-col">
    <div class="flex flex-row gap-1">
      <span class="my-2 ml-3 bg-yellow-400 px-2" />
      <div class="flex flex-col px-3 pb-3">
        <h1 class="py-2 font-press-start-2p text-2xl text-white">CULTURE</h1>
        <p class="text-white">L’ensemble des activités liées au divertisement et à la culture</p>
        <p class="text-sm italic text-white">Ex : Lire un livre, Aller au musée, Écouter un Album...</p>
      </div>
    </div>
  </div>

  <div class="mx-6 my-3 flex flex-col">
    <div class="flex flex-row gap-1">
      <span class="my-2 ml-3 bg-yellow-200 px-2" />
      <div class="flex flex-col px-3 pb-3">
        <h1 class="py-2 font-press-start-2p text-2xl text-white">MAISON</h1>
        <p class="text-white">L’ensemble des activités effectuées au sein du foyer</p>
        <p class="text-sm italic text-white">Ex : Faire une lessive, Changer les draps....</p>
      </div>
    </div>
  </div>
  <div class="fixed bottom-24 m-auto w-full">
    <BoutonBlue class="mr-auto ml-auto">J'AI COMPRIS</BoutonBlue>
  </div>
</template>

<script>
import BoutonBlue from "../components/boutons/BoutonBlue.vue";

export default {
  name: "ListecatView",
  components: {
    BoutonBlue,
  },
};
</script>
