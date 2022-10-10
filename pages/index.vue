<template>
  <HomePage
    textSlide1="Films Comming Up"
    textSlide2="Films Popular"
    textList="Films Top Rate"
    :dataComingUp="filmsPopular"
    :dataPopular="filmsPopular"
    :dataList="filmsTopRate"
    :totalPage="7"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
import HomePage from "../components/HomePage/index.vue";
export default {
  name: "IndexPage",
  components: { HomePage },
  data() {
    return {
      tvPopular: [],
      filmsPopular: [],
      filmsTopRate: [],
    };
  },
  computed: {
    ...mapState("filmsStore", ["posts", "page"]),
    ...mapActions("filmsStore", "tvStore", [
      "getFilmsPopular",
      "getTVPopular",
      "getFilmsTopRate",
    ]),
  },
  async mounted() {
    await this.getData();
    await this.getFilmsTopRate();
  },
  watch: {
    page() {
      this.getData();
    },
  },
  methods: {
    async getData() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsPopular",
        {
          page: this.page,
        }
      );
      this.filmsPopular = dataFilms;
    },

    async getFilmsTopRate() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsTopRate"
      );
      this.filmsTopRate = dataFilms;
    },
  },
};
</script>
