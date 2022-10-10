<template>
  <div>
    <Popular :text="textSlide1" :dataSlide="dataUpComing" />
    <Popular :text="textSlide2" :dataSlide="dataTopRate" />
    <FilmsList :text="textList" :data="dataPopular" :totalPage="totalPage" />
  </div>
</template>

<script>
import Popular from "./Popular/index.vue";
import FilmsList from "./filmsList/index.vue";
export default {
  name: "HomePage",
  components: { Popular, FilmsList },
  props: {
    textSlide1: String,
    textSlide2: String,
    textList: String,
    dataUpComing: Array,
    dataTopRate: Array,
    dataPopular: Array,
    totalPage: Number,
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
