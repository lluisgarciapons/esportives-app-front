<template>
  <v-container grid-list-md app>
    <h1>Formulari Inscripció</h1>
    <CustomForm
      :edit="false"
      :create="true"
      :infant="infant"
      :key="componentKey"
      @changeKey="changeKey"
    />
  </v-container>
</template>

<script>
import CustomForm from "../components/CustomForm";
export default {
  components: {
    CustomForm
  },
  data() {
    return {
      infant: {
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
      },
      componentKey: 0
    };
  },
  methods: {
    changeKey() {
      this.componentKey += 1;
    }
  }
};
</script>

<style>
</style>