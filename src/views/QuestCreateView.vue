<template>
  <div class="bg-black">
    <div class="title center text-white">Création de quêtes</div>
    <hr />
    <div class="row">
      <form @submit.prevent="saisie" class="container">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text text-white">Titre</span>
          </div>
          <input
            type="text"
            v-model="titre"
            class="form-control"
            placeholder="Titre de la Quête"
          />
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text text-white">Note</span>
          </div>
          <input
            type="text"
            v-model="note"
            class="form-control"
            placeholder="Note"
          />
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text text-white">Catégorie</span>
          </div>
          <select v-model="categorie">
            <option value="" disabled selected>Sélectionner un pays</option>
            <option v-for="categorie in listeCategorie" :key="categorie">
              {{ categorie }}
            </option>
          </select>
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text text-white">Moment de la quête</span>
          </div>
          <input
            type="text"
            v-model="date"
            class="form-control"
            placeholder="Date"
          />
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text text-white">Difficulté</span>
          </div>
          <select v-model="difficile">
            <option value="" disabled selected>
              Sélectionner une difficulté
            </option>
            <option v-for="difficulte in listeDifficulte" :key="difficulte">
              {{ difficulte }}
            </option>
          </select>
        </div>
        <br />

        <input type="submit" value="Valider" class="text-white" />
      </form>
    </div>
    <hr />

    <div class="row">
      <ol>
        <h4 class="text-white">Liste des quetes saisis :</h4>
        <li v-for="quest in liste" :key="quest.id" class="text-white">
          id: {{ quest.id }} - {{ quest.titre }} {{ quest.note }}
          {{ quest.categorie }} {{ quest.date }} {{ quest.difficulte }}
        </li>
      </ol>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Liste à remplir de quetes
      liste: [],
      // Définition d'un quete
      id: 0,
      titre: "",
      note: "",
      date: "",
      // Liste des pays
      listeCategorie: ["Sport", "DIY", "Social", "Travail"],
      // liste des genres
      listeDifficulte: ["Facile", "Moyenne", "Difficile"],
    };
  },
  methods: {
    saisie: function () {
      // Initialisation du quete à mettre dans le tableau
      let quete = {
        id: 0,
        titre: "",
        note: 0,
        categorie: "",
        date: "",
        difficulte: "",
      };
      // Calcul du id
      this.id++;
      // On renseigne le nouveau quete
      quete.id = this.id;
      quete.titre = this.titre;
      quete.note = this.note;
      quete.categorie = this.categorie;
      quete.date = this.date;
      quete.difficulte = this.difficulte;
      // On le charge dans le tableau
      this.liste.push(quete);
    },
  },
};
</script>