<template>
  <HomePage :dataFilmsPopular="dataMock" :dataTVPopular="dataMock" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HomePage from "../components/HomePage/index.vue";
import { mockData } from "./mockData";
export default {
  name: "IndexPage",
  components: { HomePage },
  data() {
    return {
      filmsPopular: [],
    };
  },
  computed: {
    ...mapGetters(["getCounter"]),
    ...mapActions("filmsStore", ["getFilmsData", "setLanguage"]),
    dataMock() {
      return mockData;
    },
  },
  created() {
    const getData = this.$store.dispatch("filmsStore/getFilmsPopular");
    if (getData) {
      this.filmsPopular = getData.data;
    }
    console.log(this.filmsPopular);
  },
};
</script>
