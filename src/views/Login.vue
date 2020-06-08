<template>
  <v-container app>
    <v-layout justify-center>
      <v-card max-width="500">
        <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="sendLogin()">
          <v-card-title>
            <span class="headline">Accedeix:</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    type="text"
                    label="Usuari"
                    v-model.number="user"
                    :rules="[v => !!v || 'Obligatori']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    type="password"
                    label="Contrassenya"
                    v-model.number="password"
                    :rules="[v => !!v || 'Obligatori']"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-alert
            class="ma-5"
            :value="isError"
            color="error"
            dark
            border="left"
            icon="mdi-alert-circle-outline"
            transition="scale-transition"
          >{{getError.message}}</v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn color="blue darken-1" text @click="reset(), (dialog = false)">Tancar</v-btn> -->
            <v-btn
              color="green darken-1"
              text
              type="submit"
              :disabled="!isFormValid || !user || !password"
            >Entra</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isFormValid: false,
      user: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    sendLogin() {
      // console.log("Login");
      this.login({ user: this.user, password: this.password });
    }
  },
  computed: {
    ...mapGetters(["getError", "isError"])
  }
};
</script>

<style>
</style>