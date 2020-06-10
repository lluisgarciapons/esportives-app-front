<template>
  <v-form ref="form" v-model="valid">
    <v-layout row wrap>
      <v-flex xs12 sm4 md3>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.nom"
          type="text"
          label="Nom i cognoms"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.naixement"
          type="date"
          label="Data de Naixement"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-select
          :disabled="!(edit || create)"
          v-model="infant.curs"
          :items="['3r', '4t', '5è', '6è', '1rESO', '2nESO']"
          label="Curs escolar"
          :rules="[v => !!v || 'Obligatori']"
        ></v-select>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.escola"
          type="text"
          label="Escola"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-text-field
          :disabled="!(edit || create)"
          v-model.number="infant.telefon"
          type="number"
          label="Telefon de contacte"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.email"
          type="email"
          label="Correu electrònic de contacte"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.adreça"
          type="text"
          label="Adreça"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.poblacio"
          type="text"
          label="Població"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.codiPostal"
          type="text"
          label="Codi Postal"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md3>
        <v-select
          :disabled="!(edit || create)"
          v-model="infant.tallaSamarreta"
          :items="['6-8', '8-10', '10-12', '12-14', 'XS', 'S', 'M', 'L', 'XL', 'XXL']"
          label="Talla Samarreta"
          :rules="[v => !!v || 'Obligatori']"
        ></v-select>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm4 md3>
        <v-checkbox
          :disabled="!(edit || create)"
          v-model="infant.setmana1"
          label="1a setmana (29juny - 3jul)"
        ></v-checkbox>
      </v-flex>
      <v-flex xs12 sm4 md3>
        <v-checkbox
          :disabled="!(edit || create)"
          v-model="infant.setmana2"
          label="2a setmana (6 - 10jul)"
        ></v-checkbox>
      </v-flex>
      <v-flex xs12 sm4 md3>
        <v-checkbox
          :disabled="!(edit || create)"
          v-model="infant.setmana3"
          label="3a setmana (13 - 17jul)"
        ></v-checkbox>
      </v-flex>
      <v-flex xs12 sm4 md3>
        <v-checkbox
          :disabled="!(edit || create)"
          v-model="infant.setmana4"
          label="4a setmana (20 - 24jul)"
        ></v-checkbox>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-switch
          :disabled="!(edit || create)"
          v-model="infant.nedar"
          :label="`Sap Nedar? ${infant.nedar ? 'Si' : 'No'}`"
        ></v-switch>
      </v-flex>
      <v-flex xs12 lg6>
        <v-switch
          :disabled="!(edit || create)"
          v-model="infant.impediments"
          :label="`Hi ha alguns aspectes o atencions a tenir en compte:? ${infant.impediments ? 'Si' : 'No'}`"
        ></v-switch>
      </v-flex>
      <v-flex xs12 lg6>
        <v-text-field
          :disabled="!infant.impediments || !(edit || create)"
          v-model="infant.detallImpediment"
          type="text"
          label="Quin?"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-switch
          :disabled="!(edit || create)"
          v-model="infant.decisio"
          :label="`Autorització en cas d’extrema urgència? ${infant.decisio ? 'Si' : 'No'}`"
        ></v-switch>
      </v-flex>
      <v-flex xs12>
        <v-switch
          :disabled="!(edit || create)"
          v-model="infant.tornarSol"
          :label="`Pot tornar sol? ${infant.tornarSol ? 'Si' : 'No'}`"
        ></v-switch>
      </v-flex>
      <v-flex xs12>
        <v-switch
          :disabled="!(edit || create)"
          v-model="infant.dretImatge"
          :label="`Captació de la seva imatge? ${infant.dretImatge ? 'Si' : 'No'}`"
        ></v-switch>
      </v-flex>
      <v-flex xs12>
        <v-switch
          :disabled="!(edit || create)"
          v-model="infant.difusioWeb"
          :label="`Difusió Web? ${infant.difusioWeb ? 'Si' : 'No'}`"
        ></v-switch>
      </v-flex>
      <v-flex xs12>
        <v-switch
          :disabled="!(edit || create)"
          v-model="infant.difusioSocial"
          :label="`Difusió Xarxes Socials? ${infant.difusioSocial ? 'Si' : 'No'}`"
        ></v-switch>
      </v-flex>
      <v-flex xs12>
        <v-switch
          :disabled="!(edit || create)"
          v-model="infant.difusioPublicacio"
          :label="`Difusió revistes, publicacions...? ${infant.difusioPublicacio ? 'Si' : 'No'}`"
        ></v-switch>
      </v-flex>
      <v-flex xs12 lg6>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.nomResponsable"
          type="text"
          label="Nom i cognoms persona responsable"
          :rules="[v => !!v || 'Obligatori']"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 lg6>
        <v-text-field
          :disabled="!(edit || create)"
          v-model="infant.DNIResponsable"
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
      :value="editat"
      color="success"
      dark
      border="left"
      icon="mdi-check-outline"
      transition="scale-transition"
    >Participant actualitzat!</v-alert>

    <v-alert
      class="ma-5"
      :value="!error.success"
      color="error"
      dark
      border="left"
      icon="mdi-alert-circle-outline"
      transition="scale-transition"
    >{{error.message}}</v-alert>

    <v-btn
      v-if="!edit && !create"
      :loading="loading"
      color="success"
      class="mr-4"
      @click="edit = !edit"
    >Editar</v-btn>

    <v-btn
      v-if="edit"
      :disabled="!valid || loading"
      :loading="loading"
      color="success"
      class="mr-4"
      @click="editInfo"
    >Guardar Canvis</v-btn>

    <v-btn
      v-if="create"
      :disabled="!valid || loading"
      :loading="loading"
      color="success"
      class="mr-4"
      @click="sendInfo"
    >Guardar</v-btn>

    <v-btn v-if="edit" color="error" class="mr-4" @click="cancelEdit">Cancel·la</v-btn>
    <v-btn
      v-if="!edit && !create"
      color="error"
      class="mr-4"
      outlined
      @click="eliminarParticipant"
    >Eliminar participant</v-btn>
    <v-btn v-if="create" color="action" class="mr-4" @click="reset">Reset</v-btn>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    create: {
      type: Boolean,
      default: false
    },
    infant: {
      type: Object
    }
  },
  data() {
    return {
      valid: false,
      loading: false,
      creat: false,
      error: { success: true },
      editat: false
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
      this.error = false;
      this.creat = false;
    },
    async sendInfo() {
      const nouInfant = this.infant;

      //   {
      //     nom: this.nom,
      //     nomResponsable: this.nomResponsable,
      //     DNIResponsable: this.DNIResponsable,
      //     naixement: this.naixement,
      //     curs: this.curs,
      //     escola: this.escola,
      //     telefon: this.telefon,
      //     adreça: this.adreça,
      //     poblacio: this.poblacio,
      //     codiPostal: this.codiPostal,
      //     tallaSamarreta: this.tallaSamarreta,
      //     email: this.email,
      //     setmana1: this.setmana1,
      //     setmana2: this.setmana2,
      //     setmana3: this.setmana3,
      //     setmana4: this.setmana4,
      //     nedar: this.nedar,
      //     impediments: this.impediments,
      //     detallImpediment: this.detallImpediment,
      //     decisio: this.decisio,
      //     tornarSol: this.tornarSol,
      //     dretImatge: this.dretImatge,
      //     difusioWeb: this.difusioWeb,
      //     difusioSocial: this.difusioSocial,
      //     difusioPublicacio: this.difusioPublicacio
      //   };
      try {
        this.loading = true;
        await axios.post(`${process.env.VUE_APP_API_PROXY}/api/infants`, {
          nouInfant
        });

        // console.log(response);
        this.loading = false;
        this.error = { success: true };
        this.creat = true;
      } catch (error) {
        // console.log(error.response);
        this.loading = false;
        this.creat = false;
        this.error = error.response.data;
      }
    },
    async editInfo() {
      try {
        this.loading = true;
        await axios.put(
          `${process.env.VUE_APP_API_PROXY}/api/infants/update/${this.infant._id}`,
          {
            infant: this.infant
          }
        );
        this.error = { success: true };
        this.editat = true;
        setTimeout(() => {
          this.loading = false;
          this.cancelEdit();
        }, 1200);
      } catch (error) {
        this.loading = false;
        this.editat = false;
        this.error = error.response.data;
      }
    },
    cancelEdit() {
      this.$emit("changeKey");
    },
    async eliminarParticipant() {
      const r = confirm("Eliminar participant definitivament?");
      if (r) {
        try {
          this.loading = true;
          await axios.delete(
            `${process.env.VUE_APP_API_PROXY}/api/infants/${this.infant._id}`
          );
          this.$router.push("/llistat");
        } catch (error) {
          this.loading = false;
          this.error = error.response.data;
        }
      }
    }
  }
};
</script>

<style>
</style>