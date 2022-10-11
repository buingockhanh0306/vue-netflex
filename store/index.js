export const state = () => ({
  loading: false,
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
};
