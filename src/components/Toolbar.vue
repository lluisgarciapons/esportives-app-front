<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark fixed app>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-if="$router.history.current.name == 'Detall Participant'" icon to="/llistat">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-toolbar-title>Colònies Esportives Sallent</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    isDetail() {
      console.log(this.$router);
      return this.$router.history.current.name == "Detall Participant";
    }
  }
};
</script>

<style>
</style>