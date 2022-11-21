<template>
  <div class="text-center">
    <v-dialog
      class="dialog-login"
      v-model="this.$store.state.displaySignUp"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 orange lighten-2">
          {{ $t("modal.signup.signup") }}
        </v-card-title>

        <v-form class="form-login" ref="form" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            color="#fff"
          ></v-text-field>

          <v-text-field
            color="#fff"
            v-model="password"
            :rules="passwordRules"
            :label="$t('modal.signup.password')"
            required
            type="password"
          ></v-text-field>
          <p class="message-error">{{ errorMessage }}</p>
          <div class="no-account">
            <span> {{ $t("modal.signup.haveAccount") }}</span>
            <span @click="returnLogin()" class="green--text signup-text">{{
              $t("modal.signup.login")
            }}</span>
          </div>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="handleCloseSignUp()">
            {{ $t("modal.signup.close") }}
          </v-btn>
          <v-btn color="green" text @click="handleSignUp()">
            {{ $t("modal.signup.signup") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [],
    password: "",
    passwordRules: [],
    errorMessage: "",
  }),
  computed: {
    isValid() {
      return this.$refs.form.validate();
    },
  },
  watch: {
    email() {
      this.errorMessage = "";
    },
    password() {
      this.errorMessage = "";
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    handleCloseSignUp() {
      this.reset();
      this.$store.commit("SET_DISPLAY_SIGNUP", false);
    },
    returnLogin() {
      this.reset();
      this.$store.commit("SET_DISPLAY_SIGNUP", false);
      this.$store.commit("SET_DISPLAY_LOGIN", true);
    },
    setRules() {
      this.emailRules = [
        (v) => !!v || this.$t("modal.signup.message.emailRequired"),
        (v) =>
          /.+@.+\..+/.test(v) || this.$t("modal.signup.message.emailValid"),
      ];
      this.passwordRules = [
        (v) => !!v || this.$t("modal.signup.message.passwordRequired"),
        (v) =>
          (v && v.length >= 6) ||
          this.$t("modal.signup.message.passwordLength"),
      ];
    },
    async handleSignUp() {
      await this.setRules();
      if (this.$refs.form.validate()) {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$store.commit("SET_SNACK_BAR", {
              display: true,
              message: this.$t("snackbar.signupSuccessfully"),
              status: "success",
            });
            this.$store.commit("SET_DISPLAY_SIGNUP", false);
            this.$store.commit("SET_DISPLAY_LOGIN", true);
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/email-already-in-use":
                this.errorMessage = this.$t("signup.message.alreadyAccount");
                break;
              default: {
                this.errorMessage = this.$t("signup.message.failed");
              }
            }
          });
      }
    },
  },
};
</script>
<style>
.dialog-login {
}

.form-login {
  margin: 20px 0;
  padding: 0 20px;
}
.no-account {
  font-size: 12px;
}
</style>
