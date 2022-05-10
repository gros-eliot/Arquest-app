<template>
  <div>
    <div class="row">
      <form @submit.prevent="saisie" class="container">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Titre</span>
          </div>
          <input
            type="text"
            v-model="titre"
            class="form-control"
            placeholder="Titre"
          />
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Note</span>
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
            <span class="input-group-text">Catégorie</span>
          </div>
          <select v-model="categorie">
            <option value="" disabled selected>
              Sélectionner une catégorie
            </option>
            <option v-for="categorie in listeCategorie" :key="categorie">
              {{ categorie }}
            </option>
          </select>
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Date</span>
          </div>
          <input
            type="text"
            v-model="date"
            class="form-control"
            placeholder="Date"
          />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Heure de rappel</span>
          </div>
          <input
            type="text"
            v-model="heure"
            class="form-control"
            placeholder="Heure"
          />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Difficulte</span>
          </div>
          <select v-model="difficulte">
            <option value="" disabled selected></option>
            <option v-for="difficulte in listeDifficulte" :key="difficulte">
              {{ difficulte }}
            </option>
          </select>
        </div>
        <br />

        <br />

        <input type="submit" value="Valider" />
      </form>
    </div>
    <hr />

    <div class="row">
      <ol>
        <h4>Informations</h4>
        <li v-for="quete in liste" :key="quete.id">
          {{ quete.titre }} {{ quete.annee }} {{ quete.note }} - genre :
          {{ quete.categorie }}{{ quete.date }}{{ quete.heure
          }}{{ quete.difficulte }}
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
      liste: [],

      id: 0,
      titre: "",
      note: "",
      date: "2 juin 22",
      heure: "13h",
      listeCategorie: ["Sport", "DiY", "Social"],
      listeDifficulte: ["Facile", "Moyen", "Difficile"],
    };
  },
  methods: {
    saisie: function () {
      // Initialisation du film à mettre dans le tableau
      let quest = {
        id: 0,
        titre: "",
        note: "",
        date: "",
        heure: "",
      };
      // Calcul du id
      this.id++;
      // On renseigne le nouveau film
      quest.id = this.id;
      quest.titre = this.titre;
      quest.note = this.note;
      quest.date = this.date;
      film.heure = this.heure;
      // On le charge dans le tableau
      this.liste.push(quest);
    },
  },
};
</script>