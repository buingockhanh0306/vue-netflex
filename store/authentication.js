export const state = () => ({
  requestToken: null,
  sessionId: null,
});

export const actions = {
  async getRequestToken({ commit }) {
    const tokenData = await this.$axios.get(`/authentication/token/new`);
    commit("SET_REQUEST_TOKEN", tokenData.data.request_token);
  },

  async getSessionId({ commit }, payload) {
    console.log(payload);
    const sessionData = await this.$axios.post(`/authentication/session/new`, {
      ...payload,
    });
    commit("SET_SESSION_ID", sessionData.session_id);
  },
};

export const mutations = {
  SET_REQUEST_TOKEN(state, data) {
    state.requestToken = data;
  },
  SET_SESSION_ID(state, data) {
    state.sessionId = data;
  },
};
