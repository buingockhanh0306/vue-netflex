<template>
  <div>
    <DetailPage
      :dataDetail="filmDetail"
      textSlide="Phim Top"
      :dataTopRate="filmsTopRate"
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
      filmsPopular: [],
      filmsTopRate: [],
      filmDetail: [],
    };
  },

  async mounted() {
    await this.getFilmsPopular();
    await this.getFilmsTopRate();
    await this.getFilmDetail();
  },
  methods: {
    ...mapActions("filmsStore", "tvStore", [
      "getFilmsPopular",
      "getFilmDetail",
      "getFilmsTopRate",
    ]),
    async getFilmsPopular() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsPopular",
        {
          page: this.page,
        }
      );
      this.filmsPopular = dataFilms;
    },

    async getFilmDetail() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsDetail",
        {
          movie_id: 297761,
        }
      );
      this.filmDetail = dataFilms[0];
    },

    async getFilmsTopRate() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsTopRate"
      );
      this.filmsTopRate = dataFilms.filter((item, index) => index < 12);
    },

    handleWatch() {
      this.$router.push(`${this.$route.params.id}/watch`);
    },
  },
};
</script>

<style></style>
