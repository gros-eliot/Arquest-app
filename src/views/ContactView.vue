<template>
    <h1 class="text-4xl text-left m-3 text-purple-400">Nous contacter</h1>
    <p class="text-1xl text-right mr-3 text-white italic">Vous avez une question ?  Besoin d’un renseignement ?  Tout ce passe ici.</p>

    <p class="text-2xl text-left m-3 text-white">NOM</p>
    <div>
        <label class="text-2xl italic">Insérez du texte</label>
        <input name="first_name" id="first_name" type="text" required>
    </div>

    <p class="text-2xl text-left m-3 text-white">PRENOM</p>
    <div>
        <label class="text-2xl italic">Insérez du texte</label>
        <input name="last_name" id="last_name" type="text" required>
    </div>

    <p class="text-2xl text-left m-3 text-white">EMAIL</p>
    <div>
        <label class="text-2xl italic">Ex : exemple@exemple.fr</label>
        <input name="email" id="email" type="text" required>
    </div>

    <p class="text-2xl text-left m-3 text-white">TELEPHONE</p>
    <p class="text-2xl text-right mr-7 text-white italic">* facultatif</p>
    <div>
        <label class="text-2xl italic">Ex : 06 00 00 00 00</label>
        <input name="telephone" id="telephone" type="text" required>
    </div>
    
    <p class="text-2xl text-left m-3 text-white">REQUETE</p>
    <div>
        <label class="text-2xl italic">Insérez du texte</label>
        <input name="email" id="email" type="text" required>
    </div>

    <p class="text-2xl text-center">En cochant cette case, j’accepte de recevoir les newsletters d’Arquest dans ma boite e-mail</p>
    <p class="text-2xl text-center">J’ai lu et j’autorise les conditions générales de vente Arquest. Pour plus d’informations  : conditions générales de vente</p>
    

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