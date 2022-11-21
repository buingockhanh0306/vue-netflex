<template>
  <div class="text-center">
    <v-snackbar
      absolute
      outlined
      v-model="display"
      :color="status"
      :timeout="2000"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="status"
          text
          v-bind="attrs"
          @click="handleCloseSnackBar()"
        >
          {{ $t("snackbar.close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      display: false,
      message: "",
      status: "",
    };
  },
  computed: {
    ...mapState(["snackBar"]),
  },
  mounted() {
    this.display = this.snackBar.display;
    this.message = this.snackBar.message;
    this.status = this.snackBar.status;
  },
  watch: {
    snackBar() {
      this.display = this.snackBar.display;
      this.message = this.snackBar.message;
      this.status = this.snackBar.status;
    },
  },
  methods: {
    handleCloseSnackBar() {
      this.$store.commit("SET_SNACK_BAR", {
        display: false,
        message: "",
        status: "",
      });
    },
  },
};
</script>
<style>
.v-snack--absolute {
  z-index: 99999999 !important;
}
</style>
