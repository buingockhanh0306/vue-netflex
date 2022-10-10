<template>
  <div>
    <Popular :text="textSlide1" :dataSlide="dataComingUp" />
    <Popular :text="textSlide2" :dataSlide="dataPopular" />
    <FilmsList :text="textList" :data="dataList" :totalPage="totalPage" />
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
    dataComingUp: Array,
    dataPopular: Array,
    dataList: Array,
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
