<template>
  <v-container grid-list-md app>
    <h1>Formulari Inscripció</h1>
    <v-form ref="form" v-model="valid">
      <v-layout row wrap>
        <v-flex xs12 sm4 md3>
          <v-text-field
            v-model="nom"
            type="text"
            label="Nom i cognoms"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-text-field
            v-model="naixement"
            type="date"
            label="Data de Naixement"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-select
            v-model="curs"
            :items="['3r', '4t', '5è', '6è', '1rESO', '2nESO']"
            label="Curs escolar"
            :rules="[v => !!v || 'Obligatori']"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-text-field
            v-model="escola"
            type="text"
            label="Escola"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-text-field
            v-model.number="telefon"
            type="number"
            label="Telefon de contacte"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-text-field
            v-model="email"
            type="email"
            label="Correu electrònic de contacte"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-text-field
            v-model="adreça"
            type="text"
            label="Adreça"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-text-field
            v-model="poblacio"
            type="text"
            label="Població"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-text-field
            v-model="codiPostal"
            type="text"
            label="Codi Postal"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md3>
          <v-select
            v-model="tallaSamarreta"
            :items="['6-8', '8-10', '10-12', '12-14', 'XS', 'S', 'M', 'L', 'XL', 'XXL']"
            label="Talla Samarreta"
            :rules="[v => !!v || 'Obligatori']"
          ></v-select>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm4 md3>
          <v-checkbox v-model="setmana1" label="1a setmana (29juny - 3jul)"></v-checkbox>
        </v-flex>
        <v-flex xs12 sm4 md3>
          <v-checkbox v-model="setmana2" label="2a setmana (6 - 10jul)"></v-checkbox>
        </v-flex>
        <v-flex xs12 sm4 md3>
          <v-checkbox v-model="setmana3" label="3a setmana (13 - 17jul)"></v-checkbox>
        </v-flex>
        <v-flex xs12 sm4 md3>
          <v-checkbox v-model="setmana4" label="4a setmana (20 - 24jul)"></v-checkbox>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <v-switch v-model="nedar" :label="`Sap Nedar? ${nedar ? 'Si' : 'No'}`"></v-switch>
        </v-flex>
        <v-flex xs12 lg6>
          <v-switch
            v-model="impediments"
            :label="`Hi ha alguns aspectes o atencions a tenir en compte:? ${impediments ? 'Si' : 'No'}`"
          ></v-switch>
        </v-flex>
        <v-flex xs12 lg6>
          <v-text-field
            v-model="detallImpediment"
            type="text"
            label="Quin?"
            :disabled="!impediments"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-switch
            v-model="decisio"
            :label="`Autorització en cas d’extrema urgència? ${decisio ? 'Si' : 'No'}`"
          ></v-switch>
        </v-flex>
        <v-flex xs12>
          <v-switch v-model="tornarSol" :label="`Pot tornar sol? ${tornarSol ? 'Si' : 'No'}`"></v-switch>
        </v-flex>
        <v-flex xs12>
          <v-switch
            v-model="dretImatge"
            :label="`Captació de la seva imatge? ${dretImatge ? 'Si' : 'No'}`"
          ></v-switch>
        </v-flex>
        <v-flex xs12>
          <v-switch v-model="difusioWeb" :label="`Difusió Web? ${difusioWeb ? 'Si' : 'No'}`"></v-switch>
        </v-flex>
        <v-flex xs12>
          <v-switch
            v-model="difusioSocial"
            :label="`Difusió Xarxes Socials? ${difusioSocial ? 'Si' : 'No'}`"
          ></v-switch>
        </v-flex>
        <v-flex xs12>
          <v-switch
            v-model="difusioPublicacio"
            :label="`Difusió revistes, publicacions...? ${difusioPublicacio ? 'Si' : 'No'}`"
          ></v-switch>
        </v-flex>
        <v-flex xs12 lg6>
          <v-text-field
            v-model="nomResponsable"
            type="text"
            label="Nom i cognoms persona responsable"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 lg6>
          <v-text-field
            v-model="DNIResponsable"
            type="text"
            label="DNI persona responsale"
            :rules="[v => !!v || 'Obligatori']"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-alert
        class="ma-5"
        :value="creat"
        color="success"
        dark
        border="left"
        icon="mdi-check-outline"
        transition="scale-transition"
      >Participant creat correctament!</v-alert>

      <v-alert
        class="ma-5"
        :value="error"
        color="error"
        dark
        border="left"
        icon="mdi-alert-circle-outline"
        transition="scale-transition"
      >Participant ja existent!</v-alert>

      <v-btn
        :disabled="!valid || loading"
        :loading="loading"
        color="success"
        class="mr-4"
        @click="sendInfo"
      >Guardar</v-btn>

      <v-btn color="action" class="mr-4" @click="reset">Reset</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: false,
      loading: false,
      creat: false,
      error: false,
      nom: null,
      naixement: null,
      curs: null,
      escola: null,
      telefon: null,
      email: null,
      adreça: null,
      poblacio: null,
      codiPostal: null,
      tallaSamarreta: null,
      setmana1: false,
      setmana2: false,
      setmana3: false,
      setmana4: false,
      nedar: false,
      impediments: false,
      detallImpediment: null,
      decisio: false,
      tornarSol: false,
      dretImatge: false,
      difusioWeb: false,
      difusioSocial: false,
      difusioPublicacio: false,
      nomResponsable: null,
      DNIResponsable: null
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
      this.error = false;
      this.creat = false;
    },
    async sendInfo() {
      const nouInfant = {
        nom: this.nom,
        nomResponsable: this.nomResponsable,
        DNIResponsable: this.DNIResponsable,
        naixement: this.naixement,
        curs: this.curs,
        escola: this.escola,
        telefon: this.telefon,
        adreça: this.adreça,
        poblacio: this.poblacio,
        codiPostal: this.codiPostal,
        tallaSamarreta: this.tallaSamarreta,
        email: this.email,
        setmana1: this.setmana1,
        setmana2: this.setmana2,
        setmana3: this.setmana3,
        setmana4: this.setmana4,
        nedar: this.nedar,
        impediments: this.impediments,
        detallImpediment: this.detallImpediment,
        decisio: this.decisio,
        tornarSol: this.tornarSol,
        dretImatge: this.dretImatge,
        difusioWeb: this.difusioWeb,
        difusioSocial: this.difusioSocial,
        difusioPublicacio: this.difusioPublicacio
      };
      try {
        this.loading = true;
        const response = await axios.post("/api/infants", {
          nouInfant
        });

        console.log(response);
        this.loading = false;
        this.error = false;
        this.creat = true;
      } catch (error) {
        console.log(error.response);
        this.loading = false;
        this.creat = false;
        this.error = true;
      }
    }
  }
};
</script>

<style>
</style>