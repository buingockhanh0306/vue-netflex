<template>
  <div>Ket qua tim kiem cho: {{ this.$route.query.q }}</div>
</template>

<script>
export default {
  async mounted() {
    await this.getFilmsSearch();
  },
  methods: {
    async getFilmsSearch() {
      // await this.$store.dispatch("filmsStore/getFilmsSearch", {
      //   page: 1,
      //   query: encodeURIComponent(this.$route.query.q),
      // });
    },
  },
};
</script>

<style></style>
