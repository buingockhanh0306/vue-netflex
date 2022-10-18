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
            <v-btn color="#1773ea" fab large dark>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn color="#c94439" fab large dark>
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </div>

          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" text @click="handleCloseLogin()"> close </v-btn>
          <v-btn color="green" text> Login </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  methods: {
    handleCloseLogin() {
      this.$store.commit("SET_DISPLAY_LOGIN", false);
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
</style>
