const authModule = {
  namespaced: true,
  state() {
    return {
      token: null,
    };
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
};
