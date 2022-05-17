<template>
    <figure class="card">
    <figcaption class="overlay mr-16 ml-16 bg-black rounded-xl border-4 border-indigo-500">

            <h2 class="text-2xl font-roboto text-center font-bold mt-6 uppercase text-white">IL EST TROP TÔT POUR VALIDER !</h2>
            
                <div
            class="
            bg-indigo-500
            text-white
            font-medium text-1xl 
            w-2/5
            py-5
            m-16
            mt-12
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
    </figcaption>
  </figure>
</template>