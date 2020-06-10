<template>
  <v-app>
    <Toolbar />
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
export default {
  name: "App",

  components: {
    Toolbar
  },

  data: () => ({
    //
  })
};
</script>
<style>
#app {
  background-color: rgb(235, 235, 235);
}
</style>