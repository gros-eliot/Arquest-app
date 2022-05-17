<template>
    <div class="flex justify-center items-center mt-9">
        <div class="card w-2/2">
            <div class="overlay bg-black rounded-xl border-4 border-indigo-500">

                <h2 class="text-2xl font-roboto font-bold text-center mt-6 ml-4 mr-4 uppercase text-white">ÊTES VOUS SÛR DE VOULOIR SUPPRIMER <div class="text-2xl font-roboto font-bold text-center text-red-400">L'HISTORIQUE</div> CETTE QUÊTE ?</h2>
                
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
            >SUPPRIMER
                <slot />
            </div>
        </div>
    </div>
  </div>
</template>