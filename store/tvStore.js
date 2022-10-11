export const state = () => ({
  page: 1,
});
export const actions = {
  setPage({ commit }, payload) {
    commit("SET_PAGE", payload);
  },
  async getTVDetail({}, payload) {
    const tvData = await this.$axios.get(`/tv/${payload.tv_id}`);
    return tvData.data;
  },
  async getTVCredits({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/credits`);
  },
  async getTVImages({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/images`);
  },
  async getTVKeywords({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/keywords`);
  },
  async getTVReviews({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/reviews`);
  },
  async getTVVideos({}, payload) {
    return this.$axios.get(`/tv/${payload.tv_id}/videos`);
  },
  async getTVLatest() {
    return this.$axios.get("/tv/latest");
  },
  async getTVNowPlaying() {
    return this.$axios.get(`/tv/now_playing`);
  },
  async getTVPopular({}, payload) {
    const tvData = await this.$axios.get(`/tv/popular?page=${payload.page}`);
    return tvData.data;
  },
  async getTVTopRate() {
    const tvData = await this.$axios.get(`/tv/top_rated`);
    return tvData.data;
  },
  async getTVUpComing() {
    const tvData = await this.$axios.get(`/tv/upcoming`);
    return tvData.data;
  },
  async getTVRecommendations({}, payload) {
    const tvData = await this.$axios.get(
      `/tv/${payload.tv_id}/recommendations`
    );
    return tvData.data;
  },
};

export const mutations = {
  SET_PAGE(state, data) {
    state.page = data;
  },
};
