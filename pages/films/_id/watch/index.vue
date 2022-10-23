<template>
  <WatchPage
    :title="watchTitle"
    :dataSimilar="filmsSimilar"
    :linkFilm="linkFilm"
    :dataTopRate="filmsTopRate"
    :dataNowPlaying="filmsNowPlaying"
  />
</template>

<script>
import WatchPage from "../../../../components/WatchPage/index.vue";
import { mapActions } from "vuex";

export default {
  components: { WatchPage },
  data() {
    return {
      filmsVideos: [],
      filmsSimilar: [],
      filmsTopRate: [],
      filmsNowPlaying: [],
    };
  },
  computed: {
    linkFilm() {
      return "https://www.youtube.com/embed/" + this.filmsVideos[0]?.key;
    },
    watchTitle() {
      return localStorage.getItem("watchTitle");
    },
  },
  async mounted() {
    this.$store.commit("SET_LOADING", true);
    await this.getFilmsVideos();
    await this.getFilmsSimilar();
    await this.getFilmsTopRate();
    await this.getFilmsNowPlaying();
    this.$store.commit("SET_LOADING", false);
  },
  methods: {
    ...mapActions("filmsStore", [
      "getFilmsVideos",
      "getFilmsSimilar",
      "getFilmsTopRate",
      "getFilmsNowPlaying",
    ]),
    async getFilmsVideos() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsVideos",
        { movie_id: this.$route.params.id }
      );
      this.filmsVideos = dataFilms;
    },

    async getFilmsSimilar() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsSimilar",
        { movie_id: this.$route.params.id }
      );
      this.filmsSimilar = dataFilms.slice(0, 7);
    },

    async getFilmsNowPlaying() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsNowPlaying"
      );
      this.filmsNowPlaying = dataFilms;
    },

    async getFilmsTopRate() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsTopRate"
      );
      this.filmsTopRate = dataFilms.slice(0, 10);
    },
  },
};
</script>

<style></style>
