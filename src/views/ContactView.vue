<template>
    <div class="bg-black ...">

        <h2 class="text-5xl text-left font-bold m-16 text-indigo-300">Nous contacter</h2>
        <p class="text-1xl text-right mr-6 ml-11 mt-9 mb-16 text-white font-thin italic">
        Vous avez une <span class="text-white font-bold">question</span> ? Besoin d’un <span class="text-white font-bold">renseignement</span> ? Tout ce passe ici.
        </p>

        <div class="m-16">
            <p class="text-2xl text-left text-white uppercase">Nom</p>
            <textarea name="first_name" id="first_name" cols="30" rows="2" class="text-1xl italic text-gray-500 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <div class="m-16">
            <p class="text-2xl text-left text-white uppercase">Prénom</p>
            <textarea name="last_name" id="last_name" cols="30" rows="2" class="text-1xl italic text-gray-500 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <div class="m-16">
            <p class="text-2xl text-left text-white uppercase">Email</p>
            <textarea name="email" id="email" cols="30" rows="2" class="text-1xl italic text-gray-500 bg-black border-2 border-white">Email</textarea>
        </div>

        <div class="m-16">
            <p class="text-2xl text-left text-white uppercase">Téléphone</p>
            <p class="text-1xl text-left m-2 text-white italic">* facultatif</p>
            <textarea name="téléphone" id="téléphone" cols="30" rows="2" class="text-1xl italic text-gray-500 bg-black border-2 border-white">Ex : 06 00 00 00 00</textarea>
        </div>

        <div class="m-16">
            <p class="text-2xl text-left text-white uppercase">Requête</p>
            <textarea name="requête" id="requête" cols="35" rows="10" class="text-1xl italic text-gray-500 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <div class="flex items-center justify-center m-3">
            <input
                class="
                form-check-input
                appearance-none
                p-3
                m-6
                border-2 border-white
                squared-sm
                bg-transparent
                checked:bg-indigo-500 weight-700
                focus:outline-none
                transition
                duration-200
                bg-no-repeat bg-center bg-contain
                cursor-pointer
                "
                type="checkbox"
                value=""
                id="flexCheckDefault"
            />
            <label
                class="form-check-label text-white"
                for="flexCheckDefault"
            >
                En cochant cette case, j’accepte de recevoir les newsletters d’Arquest
                dans ma boite e-mail
            </label>
        </div>


        <div class="flex items-center justify-center m-3">
        <input
            class="
            form-check-input
            appearance-none
            p-3
            m-6
            border-2 border-white
            squared-sm
            bg-transparent
            checked:bg-indigo-500 weight-700
            focus:outline-none
            transition
            duration-200
            bg-no-repeat bg-center bg-contain
            cursor-pointer
            "
            type="checkbox"
            value=""
            id="flexCheckDefault"
        />
        <label
            class="form-check-label text-white "
            for="flexCheckDefault"
        >
            J’ai lu et j’autorise les conditions générales de vente Arquest. Pour
            plus d’informations : conditions générales de vente
        </label>
    </div>
    <div class="flex justify-center items-center m-8">
        <button
            class="m-4 flex w-5/6 flex-row items-center justify-center rounded-xl bg-indigo-500 py-3 text-center text-2xl font-bold uppercase text-white no-underline hover:bg-indigo-900 active:border-black active:bg-indigo-900 active:text-black"
        >ENVOYER
            <slot />
        </button>
    </div>
</div>

</template>

