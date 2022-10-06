export const state = () => ({
  posts: [],
});
export const actions = {
  async getFilmsDetail({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}`);
  },
  async getFilmsCredits({}, payload) {
    return this.$axios.get(`/movie/${payload.movie_id}/credits`);
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
    return this.$axios.get(`/movie/${payload.movie_id}/videos`);
  },
  async getFilmsLatest() {
    return this.$axios.get("/movie/latest");
  },
  async getFilmsNowPlaying() {
    return this.$axios.get(`/movie/now_playing`);
  },
  async getFilmsPopular() {
    const filmsData = await this.$axios.get(`/movie/popular`);
    return filmsData.data.results;
  },
  async getFilmsTopRate() {
    const filmsData = await this.$axios.get(`/movie/top_rated`);
    return filmsData.data.results;
  },
  async getFilmsUpComing() {
    return this.$axios.get(`/movie/upcoming`);
  },
  async getPosts({ commit }) {
    console.log("action");
    const dataPosts = await this.$axios.get("/posts");
    if (dataPosts.data) {
      let data = dataPosts.data;
      commit("SET_POSTS", data);
    }
    return dataPosts;
  },

  async getUsers() {
    const dataUsers = await this.$axios.get("/users");
    return dataUsers.data;
  },
};

export const mutations = {
  SET_POSTS(state, data) {
    console.log("mutation");
    state.posts = data;
  },
};
