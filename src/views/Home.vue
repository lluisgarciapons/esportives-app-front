<template>
  <v-container fill-height app>
    <v-layout fill-height column align-center justify-center>
      <div class="my-2">
        <v-btn x-large color="success" dark to="/nou">Afegir nou participant</v-btn>
      </div>
      <div class="my-2">
        <v-btn x-large color="success" dark to="/llistat">Veure participants</v-btn>
      </div>
      <div class="ma-5 sortir" @click="sortir">Sortir</div>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),
    sortir() {
      this.logout();
    }
  }
};
</script>

<style>
.sortir {
  color: #666666;
  text-decoration: underline;
}
</style>