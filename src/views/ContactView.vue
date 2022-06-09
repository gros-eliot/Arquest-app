<template>
  <div class="p-5">
    <h1 class="font-press-roboto text-4xl font-bold text-white">Nous contacter</h1>
    <p class="text-1xl mr-6 ml-11 mt-9 mb-5 text-right font-thin italic text-white">
      Vous avez une <span class="font-bold text-white">question</span> ? Besoin d’un
      <span class="font-bold text-white">renseignement</span> ? Tout ce passe ici.
    </p>

    <div class="flex flex-col gap-6">
      <div class="">
        <p class="text-left text-xl font-bold uppercase text-white">Nom</p>
        <textarea
          placeholder="Insérer du texte"
          name="first_name"
          id="first_name"
          cols="30"
          rows="2"
          class="text-1xl w-full border border-white bg-black p-3 italic text-indigo-300"
        />
      </div>
      <div class="">
        <p class="text-left text-xl font-bold uppercase text-white">Prénom</p>
        <textarea
          name="last_name"
          id="last_name"
          cols="30"
          rows="2"
          placeholder="Insérer du texte"
          class="text-1xl w-full border border-white bg-black p-3 italic text-indigo-300"
        />
      </div>

      <p class="text-left text-xl font-bold uppercase text-white">Email</p>
      <textarea
        placeholder="Insérer votre adresse mail"
        name="email"
        id="email"
        cols="30"
        rows="2"
        class="text-1xl w-full border border-white bg-black p-3 italic text-indigo-300"
      />

      <p class="text-left text-xl font-bold uppercase text-white">Téléphone</p>
      <textarea
        placeholder="Insérer un numéro de téléphone"
        name="téléphone"
        id="téléphone"
        cols="30"
        rows="2"
        class="text-1xl w-full border border-white bg-black p-3 italic text-indigo-300"
      />

      <p class="text-left text-xl font-bold uppercase text-white">Requête</p>
      <textarea
        placeholder="Entrer une requête"
        name="requête"
        id="requête"
        cols="35"
        rows="10"
        class="text-1xl w-full border border-white bg-black p-3 italic text-indigo-300"
      />

      <div class="m-3 flex items-center justify-center">
        <input
          class="
            form-check-input
            squared-sm
            weight-700
            m-6
            cursor-pointer
            appearance-none
            border-2 border-white
            bg-transparent bg-contain bg-center bg-no-repeat
            p-3
            transition
            duration-200
            checked:bg-indigo-500
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label text-white" for="flexCheckDefault">
          En cochant cette case, j’accepte de recevoir les newsletters d’Arquest dans ma boite e-mail
        </label>
      </div>
      <div class="m-3 flex items-center justify-center">
        <input
          class="
            form-check-input
            squared-sm
            weight-700
            m-6
            cursor-pointer
            appearance-none
            border-2 border-white
            bg-transparent bg-contain bg-center bg-no-repeat
            p-3
            transition
            duration-200
            checked:bg-indigo-500
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label text-white" for="flexCheckDefault">
          J’ai lu et j’autorise les conditions générales de vente Arquest. Pour plus d’informations : conditions générales de vente
        </label>
      </div>

      <BoutonBlue>Envoyer </BoutonBlue>
    </div>
  </div>
</template>


<script>
import BoutonBlue from "../components/boutons/BoutonBlue.vue";

export default {
  name: "ContactStyle",
  components: {
    BoutonBlue,
  },
};
</script>


