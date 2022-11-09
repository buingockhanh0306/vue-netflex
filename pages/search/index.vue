<template>
  <div>
    <div class="heading-search">
      Kết quả tìm kiếm cho:
      <span class="search-value">{{ this.$route.query.q }}</span>
    </div>
    <v-divider></v-divider>
  </div>
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

<style scoped>
.heading-search {
  font-size: 2.4rem;
  color: var(--text-color);
  margin: 50px 0;
}
.search-value {
  color: var(--secondary-color);
}
</style>
