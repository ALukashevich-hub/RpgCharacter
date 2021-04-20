import { createStore } from 'vuex';

export default createStore({
  state: {
    isError: false,
    isLoading: true,
    user: {
      fullname: '',
      birthday: '',
      lvl: 0,
      login: '',
      characteristics: {
        strength: 0,
        dexterity: 0,
        vitality: 0,
        intelligence: 0,
        mind: 0,
        charisma: 0,
        luck: 0,
      },
      skills: [],
      talents: [],
    },
  },
  mutations: {
    setUser(state, value) {
      state.user.birthday = value.birthday;
      state.user.fullname = value.fullname;
      state.user.lvl = value.lvl;
      state.user.login = value.login;
      state.user.skills = value.skills;
      state.user.talents = value.talents;
      state.user.characteristics = value.characteristics;
      console.log(state.user.birthday);
      // state.user = value;
    },
    changeLoading(state, value) {
      state.isLoading = value;
    },
    changeError(state, value) {
      state.isError = value;
    },
  },
  actions: {
    async getFullname({ commit }, id) {
      try {
        commit('changeLoading', true);
        commit('changeError', false);
        // Задержка в 1 секунду
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve('готово!'), 1000);
        });
        let result = await promise;

        const response = await fetch(`http://localhost:3100/api/users/${id}`, {
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
        commit('setUser', data);
        commit('changeLoading', false);
        commit('changeError', false);
      } catch (error) {
        commit('changeLoading', false);
        commit('changeError', true);
        console.log('Возникла проблема с вашим fetch запросом: ', error.message);
      }
    },
  },
  modules: {
  },
  strict: true,
});
