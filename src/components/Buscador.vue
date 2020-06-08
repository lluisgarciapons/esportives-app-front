<template>
  <v-container>
    <v-layout row wrap justify-space-around>
      <v-flex xs5>
        <v-text-field v-model="nom" type="text" label="Busca per nom"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-select
          v-model="curs"
          :items="[{text: 'Tots', value: ''},'3r', '4t', '5è', '6è', '1rESO', '2nESO']"
          label="Busca per curs"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      nom: null,
      curs: null
    };
  },
  methods: {
    ...mapMutations(["canviNom", "canviCurs"])
  },
  watch: {
    nom() {
      this.canviNom(this.nom);
    },
    curs() {
      this.canviCurs(this.curs);
    }
  }
};
</script>

<style>
</style>