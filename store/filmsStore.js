export const state = () => ({
  page: 1,
});
export const actions = {
  setPage({ commit }, payload) {
    commit("SET_PAGE", payload);
  },
  async getFilmsDetail({}, payload) {
    const filmsData = await this.$axios.get(`/movie/${payload.movie_id}`);
    return filmsData.data;
  },
  async getFilmsCredits({}, payload) {
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/credits`
    );
    return filmsData.data.cast;
  },
  async getFilmsImages({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/images`);
  },
  async getFilmsKeywords({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/keywords`);
  },
  async getFilmsReviews({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/reviews`);
  },
  async getFilmsVideos({}, payload) {
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/videos`
    );
    return filmsData.data.results;
  },
  async getFilmsLatest() {
    return this.$axios.get("/movie/latest");
  },
  async getFilmsNowPlaying() {
    return this.$axios.get(`/movie/now_playing`);
  },
  async getFilmsPopular({}, payload) {
    const filmsData = await this.$axios.get(
      `/movie/popular?page=${payload.page}`
    );
    return filmsData.data.results;
  },
  async getFilmsTopRate() {
    const filmsData = await this.$axios.get(`/movie/top_rated`);
    return filmsData.data.results;
  },
  async getFilmsUpComing() {
    const filmsData = await this.$axios.get(`/movie/upcoming`);
    return filmsData.data.results;
  },
  async getFilmsRecommendations({}, payload) {
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/recommendations`
    );
    return filmsData.data.results;
  },

  async getFilmsReviews({}, payload) {
    const filmsData = await this.$axios.get(
      `/movie/${payload.movie_id}/reviews`
    );
    console.log(filmsData.data);
    return filmsData.data.results;
  },
};

export const mutations = {
  SET_PAGE(state, data) {
    state.page = data;
  },
};
