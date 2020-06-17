<template>
  <v-container v-if="loaded" grid-list-md app>
    <CustomForm :edit="false" :infant="infant" :key="componentKey" @changeKey="changeKey" />
    <h2 class="mt-5">Temperatures</h2>
    <v-layout row wrap>
      <v-flex xs3 md2 v-for="(temp, i) in infant.temperatures" :key="i">
        <div class="temp-box">
          <div class="temp-day">{{getDate(temp.dia)}}</div>
          <div class="temp-temp">{{temp.temperatura}}ºC</div>
        </div>
      </v-flex>
    </v-layout>
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
    },
    getDate(dia) {
      const today = new Date(dia);
      return `${today.getDate()}/${today.getMonth() + 1}`;
    }
  },
  created() {
    this.findInfo();
  }
};
</script>

<style>
.temp-box {
  border: 2px solid #222;
  border-radius: 10px;
  text-align: center;
}

.temp-day {
  border-bottom: 1px solid #222;
  font-weight: bold;
}
</style>