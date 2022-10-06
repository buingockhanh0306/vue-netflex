<template>
  <div>
    <Popular text="Films Popular" :dataSlide="dataFilmsPopular" />
    <Popular text="TV Popular" :dataSlide="dataTVPopular" />
    <button @click="handleClick()">click</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Popular from "./Popular/index.vue";
import { mockData } from "../../pages/mockData";
export default {
  name: "HomePage",
  components: { Popular },
  props: {
    dataFilmsPopular: Array,
    dataTVPopular: Array,
  },
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
