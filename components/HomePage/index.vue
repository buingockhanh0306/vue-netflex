<template>
  <div>
    <Popular />
  </div>
</template>

<script>
import Slide from "./Slide/index.vue";
import ButtonDefault from "../common/Button/ButtonDefault.vue";
import { mapActions, mapGetters } from "vuex";
import Popular from "./Popular/index.vue";
export default {
  name: "HomePage",
  components: { Slide, ButtonDefault, Popular },
  data() {
    return {
      films: [],
    };
  },
  computed: {
    ...mapActions("filmsStore", ["getFilmsData", "setLanguage"]),
    image_url() {
      return process.env.imageURL;
    },
  },
  created() {},
  methods: {
    async handleClick() {
      const getData = await this.$store.dispatch("filmsStore/getFilmsDetail", {
        movie_id: 550,
      });
      if (getData) {
        this.films = getData.data;
        console.log(this.films);
      }
    },
    handleLanguage() {
      this.$store.dispatch("setLanguage", { lang: "vi" });
    },
  },
};
</script>

<style></style>
