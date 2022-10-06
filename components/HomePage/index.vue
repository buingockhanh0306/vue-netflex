<template>
  <div>
    <Popular text="Films Popular" :dataSlide="dataFilmsPopular" />
    <Popular text="TV Popular" :dataSlide="dataTVPopular" />
  </div>
</template>

<script>
import Popular from "./Popular/index.vue";
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
    image_url() {
      return process.env.imageURL;
    },
  },
  created() {},
  methods: {},
};
</script>

<style></style>
