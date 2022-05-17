<template>
  <div class="flex justify-center items-center mt-9">
      <div class="card w-10/12">
       <div class="overlay bg-black rounded-xl border-4 border-indigo-500 px-5 py-6">
           <h1 class="text-2xl font-press-start-2p text-center text-white">SPORT</h1>
            <h2 class="text-2xl font-roboto font-bold text-center mt-4 text-red-400">2 QUÊTES ACCOMPLIES !</h2>
                
            <div class="flex justify-center mt-4">
                <img src="../../../src/assets/trophy.webp" alt="Logo trophy">
            </div>
              
              <div
            class="
            bg-indigo-500
            text-white
            font-medium text-2xl 
            w-5/6
            py-3
            m-6
            uppercase
            text-center
            no-underline
            rounded-xl
            justify-center
            active:bg-indigo-900 active:text-black active:border-black
            hover:bg-indigo-900
            "
        >PARTAGER
            <slot />
        </div>

   
       </div>
  </div>
  </div>
</template>

