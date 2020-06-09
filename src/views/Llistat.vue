<template>
  <vue-pull-refresh
    :on-refresh="onRefresh"
    :config="{
errorLabel: 'error al carregar',
startLabel: 'Llisca per actualitzar',
readyLabel: 'Deixa anar per actualitzar',
loadingLabel: 'Carregant...',
pullDownHeight: '100'
}"
  >
    <v-container app>
      <v-card max-width="800" class="mx-auto">
        <Buscador />
        <v-list subheader>
          <v-subheader>Llistat de participants</v-subheader>
          <div v-for="(infant, index) in filter" :key="infant.nom">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="infant.nom"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action class="align-start" v-if="hasTempToday(infant.temperatures)">
                <v-icon color="grey lighten-1">mdi-coolant-temperature</v-icon>
                <v-list-item-action-text v-text="`${hasTempToday(infant.temperatures)}ºC`"></v-list-item-action-text>
              </v-list-item-action>
              <v-list-item-action v-else>
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn icon large color="green" v-on="on">
                      <v-icon>mdi-coolant-temperature</v-icon>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-form
                      v-model="isFormValid"
                      lazy-validation
                      ref="form"
                      @submit.prevent="updateUser(infant._id)"
                    >
                      <v-card-title>
                        <span class="headline">Afegeix Temperatura</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                label="Temperatura (ºC)"
                                v-model.number="temp"
                                :rules="[v => !!v || 'Obligatori']"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-alert
                        class="ma-5"
                        :value="error"
                        color="error"
                        dark
                        border="left"
                        icon="mdi-alert-circle-outline"
                        transition="scale-transition"
                      >Ja s'ha afegit temperatura avui</v-alert>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="reset(), (dialog = false)">Tancar</v-btn>
                        <v-btn
                          color="green darken-1"
                          text
                          type="submit"
                          :disabled="!isFormValid || !temp"
                        >Guardar</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index + 1 < infants.length" :key="index"></v-divider>
          </div>
        </v-list>
      </v-card>
    </v-container>
  </vue-pull-refresh>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";
import VuePullRefresh from "vue-pull-refresh";
import Buscador from "../components/Buscador";
export default {
  components: {
    Buscador,
    "vue-pull-refresh": VuePullRefresh
  },
  data() {
    return {
      infants: [],
      dialog: false,
      isFormValid: false,
      temp: null,
      error: false,
      loading: false
    };
  },
  computed: {
    ...mapGetters(["getNom", "getCurs"]),
    filter() {
      return this.infants
        .filter(inf => inf.curs.includes(this.getCurs))
        .filter(inf => inf.nom.includes(this.getNom))
        .sort((a, b) => {
          var textA = a.nom.toUpperCase();
          var textB = b.nom.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
    }
  },
  methods: {
    onRefresh: function() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.getInfo();
          resolve();
        }, 500);
      });
    },
    async getInfo() {
      const response = await Axios.get(
        `${process.env.VUE_APP_API_PROXY}/api/infants`
      );
      this.infants = response.data.infants;
    },
    hasTempToday(temps) {
      const rightNow = new Date();
      const today = new Date(
        rightNow.getFullYear(),
        rightNow.getMonth(),
        rightNow.getDate()
      );
      const localTime = today.getTime();
      const localOffset = today.getTimezoneOffset() * 60000;
      const utc = localTime - localOffset;

      const found = temps.find(t => t.dia == utc);

      if (found) {
        return found.temperatura;
      }
      return false;
    },
    reset() {
      this.temp = null;
      this.dialog = false;
      this.error = false;
    },
    async updateUser(id) {
      try {
        this.loading = true;
        await Axios.put(
          `${process.env.VUE_APP_API_PROXY}/api/infants/temperatura/${id}`,
          {
            temp: this.temp
          }
        );

        // console.log(response);
        this.loading = false;
        this.error = false;
        this.dialog = false;
        this.getInfo();
      } catch (error) {
        // console.log(error.response);
        this.loading = false;
        this.error = true;
      }
    }
  },
  created() {
    this.getInfo();
  }
};
</script>

<style>
.pull-down-header {
  background-color: white;
}

.pull-down-content {
  color: #222;
}
</style>