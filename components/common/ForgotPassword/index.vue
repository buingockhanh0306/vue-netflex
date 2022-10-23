<template>
  <div class="text-center">
    <v-dialog
      class="dialog-login"
      v-model="displayForgotPassword"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 orange lighten-2">
          Forgot Password
        </v-card-title>

        <v-form class="form-login" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model.trim="email"
            :rules="emailRules"
            label="E-mail"
            required
            color="#fff"
          ></v-text-field>
          <p class="message-error">{{ errorMessage }}</p>
        </v-form>
        <!-- <span @click="openForgotPassword()" class="green--text right"
          >Login</span
        > -->
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="handleCloseForotPassword()">
            close
          </v-btn>
          <v-btn color="green" text @click="handleForgotPassword()">
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    show: false,
    valid: true,
    email: "",
    emailRules: [],
    errorMessage: "",
  }),
  computed: {
    ...mapState(["displayForgotPassword"]),
  },
  watch: {
    email() {
      this.errorMessage = "";
    },
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    handleCloseForotPassword() {
      this.reset();
      this.$store.commit("SET_DISPLAY_FORGOT_PASSWORD", false);
    },
    returnLogin() {
      this.reset();
      this.$store.commit("SET_DISPLAY_FORGOT_PASSWORD", false);
      this.$store.commit("SET_DISPLAY_LOGIN", true);
    },
    setRules() {
      this.emailRules = [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
    },
    async handleForgotPassword() {
      await this.setRules();
      if (this.$refs.form.validate()) {
        await this.$fire.auth
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.$store.commit("SET_DISPLAY_FORGOT_PASSWORD", false);
            this.$store.commit("SET_SNACK_BAR", {
              display: true,
              message: "Please check your email",
              status: "success",
            });
          })
          .catch((error) => {
            if (error.code === "auth/user-not-found") {
              this.errorMessage = "Not found your account.";
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
.social {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin: 20px 0;
}
.form-login {
  padding: 0 20px;
}
.no-account_forgot {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.no-account {
  margin: 10px 0;
}
.signup-text {
  font-weight: 600;
  cursor: pointer;
}
.message-error {
  color: red;
  font-size: 13px;
  text-align: center;
}
</style>
