const data = JSON.parse(localStorage.getItem("user")) || null;
export const state = () => ({
  lang: "vi",
  displayLogin: false,
  displaySignUp: false,
  displayForgotPassword: false,
  user: data,
  snackBar: {
    display: false,
    message: "",
    status: "success",
  },
});

export const actions = {
  setLanguage({}, payload) {
    localStorage.setItem("lang", payload.lang);
  },
};

export const mutations = {
  SET_LANG(state, data) {
    state.lang = data;
  },
  SET_DISPLAY_LOGIN(state, data) {
    state.displayLogin = data;
  },
  SET_DISPLAY_SIGNUP(state, data) {
    state.displaySignUp = data;
  },
  SET_DISPLAY_FORGOT_PASSWORD(state, data) {
    state.displayForgotPassword = data;
  },
  SET_USER(state, data) {
    state.user = data;
  },
  SET_SNACK_BAR(state, data) {
    state.snackBar = data;
  },
};
