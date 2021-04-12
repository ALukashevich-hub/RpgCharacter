import { createStore } from 'vuex';

export default createStore({
  state: {
    testApi: {},
  },
  mutations: {
    setTestApi(state, value) {
      state.testApi = value;
    },
  },
  actions: {
    async getTestApi({ commit }) {
      try {
        const response = await fetch('http://localhost:3100/api', {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Ответ сети был не ok.');
        }
        const data = await response.json();
        commit('setTestApi', data);
      } catch (error) {
        console.log('Возникла проблема с вашим fetch запросом: ', error.message);
      }
    },
  },
  modules: {
  },
});
