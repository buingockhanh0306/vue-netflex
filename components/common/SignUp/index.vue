<template>
  <div class="text-center">
    <v-dialog
      class="dialog-login"
      v-model="this.$store.state.displaySignUp"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 orange lighten-2"> Sign Up </v-card-title>

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
            label="Password"
            required
            type="password"
          ></v-text-field>
          <p class="message-error">{{ errorMessage }}</p>
          <div class="no-account">
            <span>Already have an account?</span>
            <span @click="returnLogin()" class="green--text signup-text"
              >Login</span
            >
          </div>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="handleCloseSignUp()"> close </v-btn>
          <v-btn color="green" text @click="handleSignUp()"> Sign Up </v-btn>
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
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
      this.passwordRules = [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must be more than 6 characters",
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
              message: "Sign up successfully!",
              status: "success",
            });
            this.$store.commit("SET_DISPLAY_SIGNUP", false);
            this.$store.commit("SET_DISPLAY_LOGIN", true);
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/email-already-in-use":
                this.errorMessage = "Your account is already!";
                break;
              default: {
                this.errorMessage = "Failed!!!";
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
</style>
