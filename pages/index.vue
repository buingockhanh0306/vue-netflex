<template>
  <HomePage
    :textSlide1="$t('home.filmsUpComing')"
    :textSlide2="$t('home.filmsTop')"
    :textList="$t('home.filmsPopular')"
    :dataUpComing="filmsUpComing"
    :dataTopRate="filmsTopRate"
    :dataPopular="filmsPopular"
    :totalPage="7"
  />
  <!-- <div></div> -->
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
      filmsUpComing: [],
    };
  },
  computed: {
    ...mapState("filmsStore", ["posts", "page"]),
    ...mapActions("filmsStore", "tvStore", [
      "getFilmsPopular",
      "getTVPopular",
      "getFilmsTopRate",
      "getFilmsUpComing",
    ]),
    totalPagePopular() {
      return this.$store.state.totalPagePopular;
    },
  },
  async mounted() {
    // this.$store.commit("SET_LOADING", true);
    // await this.getFilmsPopular();
    // await this.getFilmsTopRate();
    // await this.getFilmsUpComing();
    // this.$store.commit("SET_LOADING", false);
  },
  watch: {
    page() {
      this.getFilmsPopular();
    },
  },
  methods: {
    async getFilmsPopular() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsPopular",
        {
          page: this.page,
        }
      );
      this.filmsPopular = dataFilms;
    },

    async getFilmsUpComing() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsUpComing",
        {
          page: this.page,
        }
      );
      this.filmsUpComing = dataFilms;
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
