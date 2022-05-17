<template>
  <div class="flex justify-center items-center mt-9">
      <div class="card w-10/12">
       <div class="overlay bg-black rounded-xl border-4 border-indigo-500 px-5 py-6">
           <h1 class="text-2xl font-press-start-2p text-center text-white">QUETE</h1>
            
            <div class="flex items-center justify-center">
                <div class="flex flex-col items-center justify-center text-center">
                    <h2 class="text-2xl font-roboto font-bold m-4 text-white">Quêtes du </h2>
                    <h2 class="text-2xl font-roboto font-bold mb-5 text-indigo-300">Mardi 22 janvier</h2>
                </div>
            </div>

            <div class="flex items-center">
                <div class="py-8 w-1/12 m-2 bg-red-500"></div>
                <h1 class="text-2xl font-press-start-2p text-center m-2 text-white">SPORT</h1>
            </div>

            <div class="flex items-center">
                <div class="py-8 w-1/12 m-2 bg-indigo-300"></div>
                <h1 class="text-2xl font-press-start-2p text-center m-2 text-white">GESTION</h1>
            </div>

            <div class="flex items-center">
                <div class="py-8 w-1/12 m-2 bg-lime-400"></div>
                <h1 class="text-2xl font-press-start-2p text-center m-2 text-white">SANTE</h1>
            </div>

        <p class="text-1xl font-press-start-2p text-left ml-32 mt-3 absolute text-indigo-300">+850XP</p>
        <p class="text-1xl font-roboto text-left ml-3 mt-3 text-white">Récompenses :</p>

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
        >FERMER
            <slot />
        </div>

   
       </div>
  </div>
  </div>
</template>