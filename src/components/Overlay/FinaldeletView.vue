<template>
  <div class="mt-9 flex items-center justify-center">
    <div class="card w-2/2">
      <div class="overlay rounded-xl border-4 border-indigo-500 bg-black">
        <h2 class="mt-6 ml-4 mr-4 text-center font-roboto text-2xl font-bold uppercase text-white">
          ÊTES VOUS SÛR DE VOULOIR <span class="text-center font-roboto text-2xl font-bold text-red-400">SUPPRIMER</span> CETTE QUÊTE ?
        </h2>

        <div
          class="m-6 w-5/6 justify-center rounded-xl bg-indigo-500 py-3 text-center text-2xl font-medium uppercase text-white no-underline hover:bg-indigo-900 active:border-black active:bg-indigo-900 active:text-black"
        >
          SUPPRIMER
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
