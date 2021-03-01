import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Cookies from 'js-cookie';
import router from '../router';
// import Users from './modules/users';
// namespace users/signUp 제대로 못찾길래 일단 보류

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 도서 데이터
    isLogin: false,
    questions: [
      {
        q: '질문',
        a1: '대답1',
        p1: 'N',
        a2: '대답2',
        p2: 'P',
      },
    ],
    userInfo: {},
    userId: null,
    accessToken: '',
    results: [],
    score: {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
    },
  },
  actions: {
    async signUp({ commit }, payload) {
      /* eslint no-param-reassign: ["error", { "props": false }] */
      delete payload.confirmPassword;
      await axios
        .post('/users', payload)
        .then((res) => {
          commit('SIGNUP', res);
          alert('회원가입 성공');
          router.push('/');
        })
        .catch((err) => {
          console.log('err', err);
        });
    },
    async login({ commit }, payload) {
      await axios
        .post('/users/login', payload)
        .then((res) => {
          const commitData = {
            userInfo: payload.email,
            token: res.data.access_token,
          };
          commit('LOGIN', commitData);
          Cookies.set('access_token', commitData.token, { expires: 7 });
          router.push('/Test');
        })
        .catch((err) => {
          alert('로그인 실패');
          console.log('err', err);
        });
    },
    async getQuestion({ commit }) {
      await axios
        .get('/mbti')
        .then((res) => {
          commit('GETQUESTION', res.data);
        })
        .catch((err) => {
          console.log('err', err);
        });
    },
    async createResult({ commit }, payload) {
      await axios
        .post('/result', payload)
        .then((res) => {
          commit('SETSCORE', JSON.parse(res.data.score));
          router.push('/result');
        })
        .catch((err) => {
          console.log('err', err);
        });
    },
    async getResults({ commit }, payload) {
      await axios
        .get(`/result/${payload}`)
        .then((res) => {
          commit('SETRESULTS', res.data);
        })
        .catch((err) => {
          console.log('err', err);
        });
    },
  },
  mutations: {
    SIGNUP(state, payload) {
      state.isLogin = false;
      state.userInfo = payload;
    },
    LOGIN(state, payload) {
      state.accessToken = payload.token;
      state.userInfo = payload.userInfo;
      state.isLogin = true;
    },
    GETQUESTION(state, payload) {
      state.questions = payload;
    },
    SETSCORE(state, payload) {
      state.score = payload;
    },
    SETRESULTS(state, payload) {
      state.results = payload;
    },
  },
});
