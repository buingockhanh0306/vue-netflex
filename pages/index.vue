<template>
  <HomePage
    :textSlide1="$t('home.filmsUpComing')"
    :textSlide2="$t('home.filmsTop')"
    :textList="$t('home.filmsPopular')"
    :dataUpComing="filmsUpComing"
    :dataTopRate="filmsTopRate"
    :dataPopular="filmsPopular"
    :totalPage="30"
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
    return {};
  },
  computed: {
    ...mapState("filmsStore", [
      "posts",
      "page",
      "filmsPopular",
      "filmsTopRate",
      "filmsUpComing",
    ]),
    totalPagePopular() {
      return this.$store.state.totalPagePopular;
    },
  },
  mounted() {
    this.getFilmsPopular();
    this.getFilmsTopRate();
    this.getFilmsUpComing();
  },
  watch: {
    page() {
      this.getFilmsPopular();
    },
    "$i18n.locale"() {
      this.getFilmsPopular();
      this.getFilmsTopRate();
      this.getFilmsUpComing();
    },
  },
  methods: {
    ...mapActions("filmsStore", "tvStore", [
      "getFilmsPopular",
      "getTVPopular",
      "getFilmsTopRate",
      "getFilmsUpComing",
    ]),
    getFilmsPopular() {
      this.$store.dispatch("filmsStore/getFilmsPopular", {
        page: this.page,
      });
    },

    getFilmsUpComing() {
      this.$store.dispatch("filmsStore/getFilmsUpComing", {
        page: this.page,
      });
    },

    getFilmsTopRate() {
      this.$store.dispatch("filmsStore/getFilmsTopRate");
    },
  },
};
</script>
