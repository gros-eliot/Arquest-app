<template>
  <div class="mt-9 flex items-center justify-center">
    <div class="card w-10/12">
      <div class="overlay rounded-xl border-4 border-indigo-500 bg-black px-5 py-6">
        <h1 class="text-center font-press-start-2p text-2xl text-white">QUETE</h1>

        <div class="flex items-center justify-center">
          <div class="flex flex-col items-center justify-center text-center">
            <h2 class="m-4 font-roboto text-2xl font-bold text-white">Quêtes du</h2>
            <h2 class="mb-5 font-roboto text-2xl font-bold text-indigo-300">Mardi 22 janvier</h2>
          </div>
        </div>

        <div class="flex items-center">
          <div class="m-2 w-1/12 bg-red-500 py-8"></div>
          <h1 class="m-2 text-center font-press-start-2p text-2xl text-white">SPORT</h1>
        </div>

        <div class="flex items-center">
          <div class="m-2 w-1/12 bg-indigo-300 py-8"></div>
          <h1 class="m-2 text-center font-press-start-2p text-2xl text-white">GESTION</h1>
        </div>

        <div class="flex items-center">
          <div class="m-2 w-1/12 bg-lime-400 py-8"></div>
          <h1 class="m-2 text-center font-press-start-2p text-2xl text-white">SANTE</h1>
        </div>

        <p class="text-1xl absolute ml-32 mt-3 text-left font-press-start-2p text-indigo-300">+850XP</p>
        <p class="text-1xl ml-3 mt-3 text-left font-roboto text-white">Récompenses :</p>

        <div
          class="m-6 w-5/6 justify-center rounded-xl bg-indigo-500 py-3 text-center text-2xl font-medium uppercase text-white no-underline hover:bg-indigo-900 active:border-black active:bg-indigo-900 active:text-black"
        >
          FERMER
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
