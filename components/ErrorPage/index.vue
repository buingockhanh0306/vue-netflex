<template>
  <div>
    <div v-if="error.statusCode === 404">
      <h1>404</h1>
      <h2>Not Found</h2>
    </div>
    <div v-else>
      <h1>Khong biet loi gi</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
