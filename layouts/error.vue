<template>
  <div>
    <div v-for="(item, index) in dataError" :key="index">
      <div v-if="error.statusCode === item.statusCode">
        <ErrorPage
          :statusCode="item.statusCode"
          :errorMessage="item.errorMessage"
        />
      </div>
    </div>
    <div v-if="!dataError.find((err) => err.statusCode == error.statusCode)">
      <ErrorPage statusCode="Hmm!" errorMessage="An error occurred" />
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
  data: () => ({
    dataError: [
      { statusCode: 400, errorMessage: "Bad Request" },
      { statusCode: 401, errorMessage: "Unauthorized" },
      { statusCode: 403, errorMessage: "Forbidden" },
      { statusCode: 404, errorMessage: "Page Not Found" },
      { statusCode: 405, errorMessage: "Method Not Allowed" },
      { statusCode: 406, errorMessage: "Not Acceptable" },
      { statusCode: 407, errorMessage: "Proxy Authentication Required" },
      { statusCode: 409, errorMessage: "Conflicting Request" },
      { statusCode: 410, errorMessage: "Gone" },
      { statusCode: 411, errorMessage: "Content Length Required" },
      { statusCode: 412, errorMessage: "Precondition Failed" },
      { statusCode: 413, errorMessage: "Request Entity Too Long" },
      { statusCode: 414, errorMessage: "Request URI Too Long" },
      { statusCode: 415, errorMessage: "Unsupported Media Type" },
      { statusCode: 421, errorMessage: "Too Many Connections" },
      { statusCode: 500, errorMessage: "Internal Server Error" },
      { statusCode: 501, errorMessage: "Not Implemented" },
      { statusCode: 502, errorMessage: "Bad Gateway" },
      { statusCode: 503, errorMessage: "Service Unavailable" },
      { statusCode: 504, errorMessage: "Gateway Timeout" },
      { statusCode: 505, errorMessage: "HTTP Version Not Supported" },
    ],
  }),
};
</script>
