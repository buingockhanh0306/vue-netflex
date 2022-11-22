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
      <ErrorPage
        statusCode="Hmm!"
        :errorMessage="$t('error.anErrorOccurred')"
      />
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
  computed: {
    dataError() {
      return [
        { statusCode: 400, errorMessage: this.$t("error.badRequest") },
        { statusCode: 401, errorMessage: this.$t("error.unauthorized") },
        { statusCode: 403, errorMessage: this.$t("error.forbidden") },
        { statusCode: 404, errorMessage: this.$t("error.pageNotFound") },
        { statusCode: 405, errorMessage: this.$t("error.methodNotAllowed") },
        { statusCode: 406, errorMessage: this.$t("error.notAcceptable") },
        {
          statusCode: 407,
          errorMessage: this.$t("error.proxyAuthenticationRequired"),
        },
        { statusCode: 409, errorMessage: this.$t("error.conflictingRequest") },
        { statusCode: 410, errorMessage: this.$t("error.gone") },
        {
          statusCode: 411,
          errorMessage: this.$t("error.contentLengthRequired"),
        },
        { statusCode: 412, errorMessage: this.$t("error.preconditionFailed") },
        {
          statusCode: 413,
          errorMessage: this.$t("error.requestEntityTooLong"),
        },
        { statusCode: 414, errorMessage: this.$t("error.requestUriTooLong") },
        {
          statusCode: 415,
          errorMessage: this.$t("error.unsupportedMediaType"),
        },
        { statusCode: 421, errorMessage: this.$t("error.tooManyConnections") },
        { statusCode: 500, errorMessage: this.$t("error.internalServerError") },
        { statusCode: 501, errorMessage: this.$t("error.notImplemented") },
        { statusCode: 502, errorMessage: this.$t("error.badGateway") },
        { statusCode: 503, errorMessage: this.$t("error.serviceUnavailable") },
        { statusCode: 504, errorMessage: this.$t("error.gatewayTimeout") },
        {
          statusCode: 505,
          errorMessage: this.$t("error.httpVersionNotSupported"),
        },
      ];
    },
  },
};
</script>
