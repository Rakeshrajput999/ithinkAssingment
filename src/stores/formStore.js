
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      storedData: []
    };
  },
  mutations: {
    saveData(state, formData) {
      state.storedData.push(formData);
    }
  }
});

export default store;
