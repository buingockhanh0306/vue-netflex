<template>
  <div>
    <DetailPage
      :dataDetail="filmDetail"
      :textSlide="$t('detail.filmsTop')"
      :dataRecommendations="filmsRecommendations"
      :dataTopRate="filmsTopRate"
      :dataReview="filmsReviews.results"
      :dataCredit="filmsCredit"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ButtonDefault from "../../../components/common/Button/ButtonDefault.vue";
import DetailPage from "../../../components/DetailPage/index.vue";
export default {
  components: { ButtonDefault, DetailPage },
  computed: {
    ...mapState("filmsStore", ["page"]),
  },
  data() {
    return {
      filmsRecommendations: [],
      filmsTopRate: [],
      filmDetail: [],
      filmsCredit: [],
      filmsReviews: [],
    };
  },

  mounted() {
    this.$store.commit("SET_LOADING", true);
    this.getFilmsRecommendations();
    this.getFilmsTopRate();
    this.getFilmDetail();
    this.getFilmsCredit();
    // await this.getFilmsReviews();
    this.$store.commit("SET_LOADING", false);
  },
  watch: {
    "$i18n.locale"() {
      this.$store.commit("SET_LOADING", true);
      this.getFilmsRecommendations();
      this.getFilmsTopRate();
      this.getFilmDetail();
      this.getFilmsCredit();
      // await this.getFilmsReviews();
      this.$store.commit("SET_LOADING", false);
    },
  },
  methods: {
    ...mapActions("filmsStore", "tvStore", [
      "getFilmsRecommendations",
      "getFilmDetail",
      "getFilmsTopRate",
      "getFilmsReviews",
    ]),
    async getFilmsRecommendations() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsRecommendations",
        {
          movie_id: this.$route.params.id,
        }
      );
      this.filmsRecommendations = dataFilms.filter((item, index) => index < 10);
    },

    async getFilmsCredit() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsCredits",
        {
          movie_id: this.$route.params.id,
        }
      );
      this.filmsCredit = dataFilms.slice(0, 6);
    },

    // async getFilmsReviews() {
    //   const dataFilms = await this.$store.dispatch(
    //     "filmsStore/getFilmsReviews",
    //     {
    //       movie_id: this.$route.params.id,
    //     }
    //   );
    //   this.filmsReviews = dataFilms.filter((item, index) => index < 4);
    // },

    async getFilmDetail() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsDetail",
        {
          movie_id: this.$route.params.id,
        }
      );
      this.filmDetail = dataFilms;
    },

    async getFilmsTopRate() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsTopRate"
      );
      this.filmsTopRate = dataFilms.slice(0, 10);
    },

    handleWatch() {
      localStorage.setItem("watchTitle", this.dataDetail.title);
      this.$router.push(`${this.$route.params.id}/watch`);
    },
  },
};
</script>

<style></style>
