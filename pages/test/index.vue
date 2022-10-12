<template>
  <v-row>
    <v-col class="col-md-8">
      <iframe
        width="100%"
        height="600px"
        :src="linkFilm"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-col>
    <v-col class="col-md-4 red">
      <SideBarRight :data="[]" />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import SideBarRight from "../../components/common/SideBarRight/index.vue";

export default {
  components: { SideBarRight },
  data() {
    return {
      filmsVideos: [],
    };
  },
  computed: {
    linkFilm() {
      return "https://www.youtube.com/embed/" + "6JnN1DmbqoU";
    },
  },
  //   async mounted() {
  //     await this.getFilmsVideos();
  //   },
  methods: {
    ...mapActions("filmsStore", ["getFilmsVideos"]),
    async getFilmsVideos() {
      const dataFilms = await this.$store.dispatch(
        "filmsStore/getFilmsVideos",
        { movie_id: 297761 }
      );
      this.filmsVideos = dataFilms;
      console.log(this.filmsVideos);
    },
  },
};
</script>

<style></style>
