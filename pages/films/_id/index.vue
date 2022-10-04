<template>
  <div>
    <h2>detail {{ this.$route.params.id }}</h2>
    <ButtonDefault @onClick="handleWatch()" />
  </div>
</template>

<script>
import ButtonDefault from "../../../components/common/Button/ButtonDefault.vue";
export default {
  components: { ButtonDefault },
  methods: {
    handleWatch() {
      this.$router.push(`${this.$route.params.id}/watch`);
    },
  },
};
</script>

<style></style>
