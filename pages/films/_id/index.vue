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
    ...mapState("filmsStore", [
      "filmsRecommendations",
      "filmDetail",
      "filmsTopRate",
      "filmsReviews",
      "filmsCredit",
      "page",
    ]),
  },
  data() {
    return {};
  },

  mounted() {
    this.getFilmsRecommendations();
    this.getFilmsTopRate();
    this.getFilmDetail();
    this.getFilmsCredit();
    // await this.getFilmsReviews();
  },
  watch: {
    "$i18n.locale"() {
      this.getFilmsRecommendations();
      this.getFilmsTopRate();
      this.getFilmDetail();
      this.getFilmsCredit();
      // await this.getFilmsReviews();
    },
  },
  methods: {
    ...mapActions("filmsStore", [
      "getFilmsRecommendations",
      "getFilmDetail",
      "getFilmsTopRate",
      "getFilmsReviews",
    ]),
    getFilmsRecommendations() {
      this.$store.dispatch("filmsStore/getFilmsRecommendations", {
        movie_id: this.$route.params.id,
      });
      // this.filmsRecommendations = dataFilms.filter((item, index) => index < 10);
    },

    getFilmsCredit() {
      this.$store.dispatch("filmsStore/getFilmsCredits", {
        movie_id: this.$route.params.id,
      });
      // this.filmsCredit = dataFilms.slice(0, 6);
    },

    getFilmDetail() {
      this.$store.dispatch("filmsStore/getFilmsDetail", {
        movie_id: this.$route.params.id,
      });
    },

    getFilmsTopRate() {
      this.$store.dispatch("filmsStore/getFilmsTopRate");
      // this.filmsTopRate = dataFilms.slice(0, 10);
    },

    handleWatch() {
      localStorage.setItem("watchTitle", this.dataDetail.title);
      this.$router.push(`${this.$route.params.id}/watch`);
    },
  },
};
</script>

<style></style>
