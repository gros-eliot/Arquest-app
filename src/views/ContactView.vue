<template>
    <div class="bg-black ...">

        <h2 class="text-5xl text-left ml-10 text-indigo-300">
        Nous 
        </h2>
        <h2 class="text-5xl text-left ml-10 text-indigo-300">
        Contacter
        </h2>
        <p class="text-1xl text-right mr-6 ml-11 mt-9 mb-28 text-white font-light italic">
        Vous avez une question ? Besoin d’un renseignement ? Tout ce passe ici.
        </p>

        <p class="text-2xl text-left ml-16 text-white uppercase">Nom</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="first_name" id="first_name" cols="30" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Prénom</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="last_name" id="last_name" cols="30" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Email</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="email" id="email" cols="30" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Email</textarea>
        </div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Téléphone</p>
        <p class="text-1xl text-left ml-16 text-white italic">* facultatif</p>
        <div class="ml-16 mb-11 mt-4">
            <textarea name="téléphone" id="téléphone" cols="30" rows="2" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Ex : 06 00 00 00 00</textarea>
        </div>

        <p class="text-2xl text-left ml-16 text-white uppercase">Requête</p>
        <div class="mb-11 mt-4 ml-16">
            <textarea name="requête" id="requête" cols="35" rows="10" class="text-1xl italic text-gray-extended-300 bg-black border-2 border-white">Insérez du texte...</textarea>
        </div>

        <div class="form-check">
        <input
            class="
            form-check-input
            appearance-none
            ml-6
            h-6
            w-6
            border border-gray-300
            squared-sm
            bg-white
            checked:bg-indigo-500 weight-700
            focus:outline-none
            transition
            duration-200
            align-top
            bg-no-repeat bg-center bg-contain
            cursor-pointer
            "
            type="checkbox"
            value=""
            id="flexCheckDefault"
        />
        <label
            class="form-check-label inline-block ml-16 mb-16 text-white"
            for="flexCheckDefault"
        >
            En cochant cette case, j’accepte de recevoir les newsletters d’Arquest
            dans ma boite e-mail
        </label>
        </div>

        <div class="form-check">
        <input
            class="
            form-check-input
            appearance-none
            ml-16
            h-6
            w-6
            border border-gray-300
            squared-sm
            bg-white
            checked:bg-indigo-500 weight-700
            focus:outline-none
            transition
            duration-200
            mt-1
            align-top
            bg-no-repeat bg-center bg-contain
            float-left
            mr-2
            cursor-pointer
            "
            type="checkbox"
            value=""
            id="flexCheckDefault"
        />
        <label
            class="form-check-label inline-block mb-28 text-white "
            for="flexCheckDefault"
        >
            J’ai lu et j’autorise les conditions générales de vente Arquest. Pour
            plus d’informations : conditions générales de vente
        </label>

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
  >Envoyer
    <slot />
  </div>
        </div>
    </div>

</template>


<script>
export default {
  name: "ContactView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>