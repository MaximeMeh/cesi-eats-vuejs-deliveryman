import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/customer'
});

let user: any = localStorage.getItem('user');
if (!user) {
 user = {
    userId: -1,
    token: '',
  }; 
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex) {
    user = {
      userId: -1,
      token: '',
    };
  }
}

export default createStore({
  state: {
    status: '',
    user: user,
    userInfos: {
      last_name:'',
      first_name: '',
      email: '',
      // photo: '',
    },
  },

  getters: {
  },

  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    userInfos: function (state, userInfos) {
      state.userInfos = userInfos;
    },
    logout: function (state) {
      state.user = {
        userId: -1,
        token: '',
      }
      localStorage.removeItem('user');
    }
  },

  actions: {
    login: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('', userInfos)
        .then(function (response: any) {
          commit('setStatus', '');
          commit('logUser', response.data);
          resolve(response);
        })
        .catch(function (error: any) {
          commit('setStatus', 'error_login');
          reject(error);
        });
      });
    },
    createAccount: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        commit;
        instance.post('/createAccount', userInfos)
        .then(function (response: any) {
          commit('setStatus', 'created');
          resolve(response);
        })
        .catch(function (error: any) {
          commit('setStatus', 'error_create');
          reject(error);
        });
      });
    },
    getUserInfos: ({commit}) => {
      instance.post('/infos')
      .then(function (response: any) {
        commit('userInfos', response.data.infos);
      })
      .catch(function () {
      });
    }
  },

  modules: {
  }
})
