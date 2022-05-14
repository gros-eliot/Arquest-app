<template>

    <div class="bg-black ...">

        <h2 class="text-4xl text-left ml-10 text-indigo-500 weight-700">Nous contacter</h2>
        <p class="text-1xl text-right mr-9 h-40 text-white italic">Vous avez une question ?  Besoin d’un renseignement ?  Tout ce passe ici.</p>

        <p class="text-2xl text-left ml-10 text-white">NOM</p>
        <div>
            <label class="text-2xl italic">Insérez du texte</label>
            <input name="first_name" id="first_name" type="text" required>
        </div>

        <p class="text-2xl text-left ml-10 text-white">PRENOM</p>
        <div>
            <label class="text-2xl italic">Insérez du texte</label>
            <input name="last_name" id="last_name" type="text" required>
        </div>

        <p class="text-2xl text-left ml-10 text-white">EMAIL</p>
        <div>
            <label class="text-2xl italic">Ex : exemple@exemple.fr</label>
            <input name="email" id="email" type="text" required>
        </div>

        <p class="text-2xl text-left ml-10 text-white">TELEPHONE</p>
        <p class="text-1xl text-left ml-11 text-white italic">* facultatif</p>
        <div>
            <label class="text-2xl italic">Ex : 06 00 00 00 00</label>
            <input name="telephone" id="telephone" type="text" required>
        </div>
        
        <p class="text-2xl text-left ml-10 text-white">REQUETE</p>
        <div>
            <label class="bg-blue text-2xl italic">Insérez du texte</label>
            <input name="email" id="email" type="text" required>
        </div>

    <div class="form-check">
        <input class="form-check-input appearance-none ml-10 mt-20 h-4 w-4 border border-gray-300 squared-sm bg-white checked:bg-indigo-500 weight-700 checked:bg-indigo-500 weight-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label inline-block mt-20 text-white" for="flexCheckDefault">
            En cochant cette case, j’accepte de recevoir les newsletters d’Arquest dans ma boite e-mail
        </label>
        </div>
        
        <div class="form-check">
        <input class="form-check-input appearance-none ml-10 h-4 w-4 border border-gray-300 squared-sm bg-white checked:bg-indigo-500 weight-700 checked:bg-indigo-500 weight-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label inline-block mb-28 text-white" for="flexCheckDefault">
            J’ai lu et j’autorise les conditions générales de vente Arquest. Pour plus d’informations  : conditions générales de vente
        </label>
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