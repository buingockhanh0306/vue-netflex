<template>
  <WatchPage
    :title="filmDetail.title"
    :dataSimilar="filmsSimilar"
    :linkFilm="linkFilm"
    :dataTopRate="filmsTopRate"
    :dataNowPlaying="filmsNowPlaying"
    :dataSocial="filmSocial"
  />
</template>

<script>
import WatchPage from "../../../../components/WatchPage/index.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { WatchPage },
  data() {
    return {};
  },
  computed: {
    ...mapState("filmsStore", [
      "filmsVideos",
      "filmsSimilar",
      "filmsTopRate",
      "filmDetail",
      "filmsNowPlaying",
      "filmSocial",
    ]),
    linkFilm() {
      // return `https://www.2embed.ru/embed/tmdb/movie?id=${this.$route.params.id}`;
      return "https://www.youtube.com/embed/" + this.filmsVideos[0]?.key;
    },
    watchTitle() {
      return localStorage.getItem("watchTitle");
    },
  },
  mounted() {
    this.getFilmsVideos();
    this.getFilmsSimilar();
    this.getFilmsTopRate();
    this.getFilmDetail();
    this.getFilmsNowPlaying();
    this.getFilmSocial();
  },
  watch: {
    "$i18n.locale"() {
      this.getFilmsVideos();
      this.getFilmsSimilar();
      this.getFilmsTopRate();
      this.getFilmDetail();
      this.getFilmsNowPlaying();
      this.getFilmSocial();
    },
  },
  methods: {
    ...mapActions("filmsStore", [
      "getFilmsVideos",
      "getFilmsSimilar",
      "getFilmsTopRate",
      "getFilmsNowPlaying",
      "getFilmSocial",
    ]),
    getFilmsVideos() {
      this.$store.dispatch("filmsStore/getFilmsVideos", {
        movie_id: this.$route.params.id,
      });
    },

    getFilmsSimilar() {
      this.$store.dispatch("filmsStore/getFilmsSimilar", {
        movie_id: this.$route.params.id,
      });
    },

    getFilmsNowPlaying() {
      this.$store.dispatch("filmsStore/getFilmsNowPlaying");
    },

    getFilmsTopRate() {
      this.$store.dispatch("filmsStore/getFilmsTopRate");
    },

    getFilmDetail() {
      this.$store.dispatch("filmsStore/getFilmsDetail", {
        movie_id: this.$route.params.id,
      });
    },
    getFilmSocial() {
      this.$store.dispatch("filmsStore/getFilmSocial", {
        movie_id: this.$route.params.id,
      });
    },
  },
};
</script>

<style></style>
