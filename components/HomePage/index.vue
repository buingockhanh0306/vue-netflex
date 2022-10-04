<template>
  <div>
    <ButtonDefault @onClick="handleClick()" />
  </div>
</template>

<script>
import Slide from "./Slide/index.vue";
import ButtonDefault from "../common/Button/ButtonDefault.vue";
import { mapGetters } from "vuex";
export default {
  name: "HomePage",
  components: { Slide, ButtonDefault },
  data() {
    return {
      listFilms: [],
    };
  },
  computed: {
    ...mapGetters(["getCounter"]),
  },
  methods: {
    handleClick() {
      console.log(this.getCounter);
    },
  },
};
</script>

<style></style>
