<template>
  <HomePage :dataFilmsPopular="posts" :dataTVPopular="posts" />
</template>

<script>
import { mapState, mapActions } from "vuex";
import HomePage from "../components/HomePage/index.vue";
import { mockData } from "./mockData";
export default {
  name: "IndexPage",
  components: { HomePage },
  data() {
    return {};
  },
  computed: {
    ...mapState("filmsStore", ["posts"]),
    ...mapActions("filmsStore", ["getPosts", "setLanguage"]),
    dataMock() {
      return mockData;
    },
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      await this.$store.dispatch("filmsStore/getPosts");
    },
  },
};
</script>
