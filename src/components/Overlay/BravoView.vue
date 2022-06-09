<template>
  <div class="mt-9 flex items-center justify-center">
    <div class="card w-10/12">
      <div class="overlay rounded-xl border-4 border-indigo-500 bg-black px-5 py-6">
        <h1 class="text-center font-press-start-2p text-2xl text-white">SPORT</h1>
        <h2 class="mt-4 text-center font-roboto text-2xl font-bold text-red-400">2 QUÊTES ACCOMPLIES !</h2>

        <div class="mt-4 flex justify-center">
          <img src="../../..//image/trophy.webp" alt="Logo trophy" />
        </div>

        <div
          class="m-6 w-5/6 justify-center rounded-xl bg-indigo-500 py-3 text-center text-2xl font-medium uppercase text-white no-underline hover:bg-indigo-900 active:border-black active:bg-indigo-900 active:text-black"
        >
          PARTAGER
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
