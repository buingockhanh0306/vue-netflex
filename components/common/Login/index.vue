<template>
  <div class="text-center">
    <v-dialog
      class="dialog-login"
      v-model="this.$store.state.displayLogin"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 orange lighten-2"> Login </v-card-title>

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
            label="Password"
            color="#fff"
            required
            type="password"
          ></v-text-field>
          <p class="message-error">{{ errorMessage }}</p>
          <div class="no-account">
            <span>You don't have an account?</span>
            <span @click="returnSignUp()" class="green--text signup-text"
              >Sign Up</span
            >
          </div>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="handleCloseLogin()"> close </v-btn>
          <v-btn color="green" text @click="handleLogin()"> Login </v-btn>
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
export default {
  data: () => ({
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
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
      this.passwordRules = [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must be more than 6 characters",
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
              message: "Login successfully!",
              status: "success",
            });
          })
          .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/wrong-password":
                this.errorMessage = "Password is incorrect!";
                break;
              case "auth/user-not-found":
                this.errorMessage = "Not found your account!";
                break;
              default: {
                this.errorMessage = "Failed!!!";
              }
            }
          });
      }
    },

    async handleLoginWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          const data = {
            displayName: user.displayName,
            photoURL: user.photoURL,
          };
          this.$store.commit("SET_USER", data);
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
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });
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
.no-account {
  font-size: 12px;
  margin: 10px 0;
}
.signup-text {
  font-weight: 600;
  cursor: pointer;
}
.message-error {
  color: red;
  font-size: 13px;
}
</style>
