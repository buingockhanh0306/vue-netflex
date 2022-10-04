<template>
  <HomePage />
</template>

<script>
import { mapGetters } from "vuex";
import HomePage from "../components/HomePage/index.vue";
export default {
  name: "IndexPage",
  computed: {
    ...mapGetters(["getCounter"]),
  },
  components: { HomePage },
};
</script>
