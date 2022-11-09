<template>
  <div>
    <div v-if="error.statusCode === 404">
      <ErrorPage numberError="404" statusError="Page Not Found" />
    </div>
    <div v-else>
      <ErrorPage numberError="Hmm!" statusError="An error occurred" />
    </div>
  </div>
</template>

<script>
import ErrorPage from "../components/ErrorPage/index.vue";
export default {
  name: "EmptyLayout",
  components: { ErrorPage },
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>
