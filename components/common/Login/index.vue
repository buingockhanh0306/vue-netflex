<template>
  <div class="text-center">
    <v-dialog
      class="dialog-login"
      v-model="this.$store.state.displayLogin"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 orange lighten-2">
          {{ $t("modal.login.login") }}
        </v-card-title>

        <v-form class="form-login" ref="form" v-model="valid" lazy-validation>
          <div class="social">
            <v-btn
              @click="handleLoginWithFacebook()"
              color="#1773ea"
              fab
              large
              dark
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              @click="handleLoginWithGoogle()"
              color="#c94439"
              fab
              large
              dark
            >
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </div>
          <v-text-field
            v-model.trim="email"
            :rules="emailRules"
            label="E-mail"
            required
            color="#fff"
          ></v-text-field>
          <v-text-field
            v-model.trim="password"
            :rules="passwordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :label="$t('modal.login.password')"
            color="#fff"
            required
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
          <p class="message-error">{{ errorMessage }}</p>
          <div class="no-account_forgot">
            <div class="no-account">
              <span>{{ $t("modal.login.noAccount") }}</span>
              <span @click="returnSignUp()" class="green--text signup-text">{{
                $t("modal.login.signup")
              }}</span>
            </div>
            <span
              @click="openForgotPassword()"
              class="green--text signup-text"
              >{{ $t("modal.login.forgot") }}</span
            >
          </div>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="handleCloseLogin()">
            {{ $t("modal.login.close") }}
          </v-btn>
          <v-btn color="green" text @click="handleLogin()">
            {{ $t("modal.login.login") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { mapState } from "vuex";
export default {
  data: () => ({
    show: false,
    valid: true,
    email: "",
    emailRules: [],
    password: "",
    passwordRules: [],
    errorMessage: "",
  }),
  watch: {
    email() {
      this.errorMessage = "";
    },
    password() {
      this.errorMessage = "";
    },
  },
  computed: {},
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    handleCloseLogin() {
      this.reset();
      this.$store.commit("SET_DISPLAY_LOGIN", false);
    },
    returnSignUp() {
      this.reset();
      this.$store.commit("SET_DISPLAY_LOGIN", false);
      this.$store.commit("SET_DISPLAY_SIGNUP", true);
    },
    setRules() {
      this.emailRules = [
        (v) => !!v || this.$t("modal.login.message.emailRequired"),
        (v) => /.+@.+\..+/.test(v) || this.$t("modal.login.message.emailValid"),
      ];
      this.passwordRules = [
        (v) => !!v || this.$t("modal.login.message.passwordRequired"),
        (v) =>
          (v && v.length >= 6) || this.$t("modal.login.message.passwordLength"),
      ];
    },
    async handleLogin() {
      await this.setRules();
      if (this.$refs.form.validate()) {
        await this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const data = {
              email: userCredential.user.email,
            };
            this.$store.commit("SET_USER", data);
            localStorage.setItem("user", JSON.stringify(data));
            this.$store.commit("SET_DISPLAY_LOGIN", false);
            this.$store.commit("SET_SNACK_BAR", {
              display: true,
              message: this.$t("snackbar.loginSuccessfully"),
              status: "success",
            });
            console.log(this.requestToken);
          })
          .catch((error) => {
            this.errorMessage = this.$t("modal.login.message.incorrect");
          });
      }
    },

    async handleLoginWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then((result) => {
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          const user = result.user;
          const data = {
            displayName: user.displayName,
            photoURL: user.photoURL,
          };
          this.$store.commit("SET_USER", data);
          this.$store.dispatch("authentication/getRequestToken");
          this.$store.commit("SET_DISPLAY_LOGIN", false);
          localStorage.setItem("user", JSON.stringify(data));
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // const email = error.customData.email;
          // const credential = GoogleAuthProvider.credentialFromError(error);
        });
    },

    async handleLoginWithFacebook() {
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          const data = {
            displayName: user.displayName,
            photoURL: user.photoURL,
          };
          this.$store.commit("SET_USER", data);
          localStorage.setItem("user", JSON.stringify(data));
          this.$store.commit("SET_DISPLAY_LOGIN", false);
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    },

    async openForgotPassword() {
      this.$store.commit("SET_DISPLAY_LOGIN", false);
      this.$store.commit("SET_DISPLAY_FORGOT_PASSWORD", true);
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
