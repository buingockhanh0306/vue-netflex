export const state = () => ({
  counter: 0,
});

export const getters = {
  getCounter(state) {
    return state.counter;
  },
};
