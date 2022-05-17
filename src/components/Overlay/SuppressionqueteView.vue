<template>
    <figure class="card">
    <figcaption class="overlay">
            <h2 class="text-2xl font-roboto text-center font-bold uppercase text-white">IL EST TROP TÔT POUR VALIDER !</h2>
            
                <div
            class="
            bg-indigo-500
            text-white
            font-medium text-2xl
            w-52
            py-6
            m-28
            mt-3
            uppercase
            text-center
            no-underline
            rounded-xl
            flex flex-row
            items-start
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