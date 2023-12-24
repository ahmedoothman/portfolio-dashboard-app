import { createStore } from 'vuex';
import counterModule from './modules/counter-module';
const store = createStore({
  modules: {
    numbers: counterModule,
  },
});
export default store;
