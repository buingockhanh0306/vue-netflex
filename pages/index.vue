<template>
  <HomePage :dataFilmsPopular="filmsPopular" :dataTVPopular="tvPopular" />
</template>

<script>
import { mapState, mapActions } from "vuex";
import HomePage from "../components/HomePage/index.vue";
import { mockData } from "./mockData";
export default {
  name: "IndexPage",
  components: { HomePage },
  data() {
    return {
      filmsPopular: [],
      tvPopular: [],
    };
  },
  computed: {
    ...mapState("filmsStore", ["posts"]),
    ...mapActions("filmsStore", "tvStore", ["getFilmsPopular", "getTVPopular"]),
    dataMock() {
      return mockData;
    },
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      // await this.$store.dispatch("filmsStore/getPosts");
      const dataFilmsPopular = await this.$store.dispatch(
        "filmsStore/getFilmsPopular"
      );
      const dataTVPOpular = await this.$store.dispatch("tvStore/getTVPopular");
      this.filmsPopular = dataFilmsPopular;
      this.tvPopular = dataTVPOpular;
      console.log("get done");
    },
  },
};
</script>
