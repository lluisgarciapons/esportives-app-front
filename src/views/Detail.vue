<template>
  <v-container grid-list-md app>
    <CustomForm
      v-if="loaded"
      :edit="false"
      :infant="infant"
      :key="componentKey"
      @changeKey="changeKey"
    />
  </v-container>
</template>

<script>
import CustomForm from "../components/CustomForm";
import Axios from "axios";
export default {
  props: ["id"],
  components: {
    CustomForm
  },
  data() {
    return {
      loaded: false,
      infant: {},
      componentKey: 0
    };
  },
  methods: {
    async findInfo() {
      const response = await Axios.get(
        `${process.env.VUE_APP_API_PROXY}/api/infants/${this.id}`
      );
      console.log(response.data);
      this.infant = response.data.infant;
      this.loaded = true;
    },
    changeKey() {
      this.componentKey += 1;
    }
  },
  created() {
    this.findInfo();
  }
};
</script>

<style>
</style>