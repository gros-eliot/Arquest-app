<template>
  <div class="flex justify-center items-center"><div class="card mt-20 w-10/12">
       <div class="overlay bg-black rounded-xl border-4 border-indigo-500">
           <h1 class="text-2xl font-press-start-2p text-center mt-2 text-white">QUETE</h1>
            <div class="flex items-center justify-between">
                <div class="m-3">
                    <h2 class="text-2xl font-roboto font-bold text-left text-white">Prévoir vacances</h2>
                    <p class="text-1xl font-press-start-2p text-left text-indigo-500">GESTION</p>
                </div>
                <PencilIcon class="fill-white h-9 w-9 m-3"/>

           </div>
           <p class="text-1xl font-roboto text-left m-3 text-white">Appelez l’hotel Suzarin. Ne pas oublié de damander 4 chambres.
            Demander à Marie de garder le lapin.</p>

           <h2 class="text-2xl font-roboto font-bold text-left mt-5 ml-3 text-white">Mardi 15 janvier</h2>
           <p class="text-1xl font-roboto font-bold text-left ml-3 text-indigo-500">Rappel à 13h</p>
           <p class="text-1xl font-roboto font-bold text-left ml-20 mt-5 absolute text-indigo-500">Facile</p>
           <p class="text-1xl font-roboto font-bold text-left mt-5 ml-3 text-white">Niveau :</p>

           <p class="text-1xl font-press-start-2p text-left ml-32 mt-0 absolute text-indigo-500">+35XP</p>
           <p class="text-1xl font-roboto text-left ml-3 text-white">Récompenses :</p>

           <div
    class="
      bg-transparent
      text-indigo-500
      border-2 border-indigo-500
      font-bold
      w-5/6
      py-3
      m-6
      uppercase
      text-center
      no-underline
      rounded-xl
      text-2xl
      flex flex-row
      items-start
      justify-center
      active:bg-black active:bg-opacity-25 active:text-black active:border-black
      hover:bg-indigo-500 hover:bg-opacity-25
    "
  >
    <slot />
  VALIDER</div>
       </div>
  </div></div>
</template>

<script>
import { PencilIcon } from '@heroicons/vue/outline'
export default {
    components:{PencilIcon}
}
</script>