export const state = () => ({
  loading: false,
  lang: "vi",
  displayLogin: false,
});

export const actions = {
  setLanguage({}, payload) {
    localStorage.setItem("lang", payload.lang);
  },
};

export const mutations = {
  SET_LOADING(state, data) {
    state.loading = data;
  },
  SET_LANG(state, data) {
    state.lang = data;
  },
  SET_DISPLAY_LOGIN(state, data) {
    state.displayLogin = data;
  },
};
