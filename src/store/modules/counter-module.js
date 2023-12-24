const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + +payload;
    },
    decrement(state) {
      state.counter--;
    },
    decrease(state, payload) {
      state.counter = state.counter - +payload;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
  },
  setters: {
    setCounter(state, payload) {
      state.counter = payload;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 2000);
    },
    decrement(context) {
      setTimeout(() => {
        context.commit('decrement');
      }, 2000);
    },
    decrease(context, payload) {
      setTimeout(() => {
        context.commit('decrease', payload);
      }, 2000);
    },
  },
};

export default counterModule;
