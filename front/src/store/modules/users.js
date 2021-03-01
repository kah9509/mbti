import axios from 'axios';
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  test: 'hello',
};
const mutation = {
  SIGNUP(state, payload) {
    console.log('commit??');
    state.test = payload;
  },
};
const action = {
  async signUp({ commit }, payload) {
    console.log('commit, payload', commit, payload);
    await axios
      .post('http://localhost:3000/users', payload)
      .then((res) => {
        console.log('res', res);
        commit('SIGNUP', payload);
      });
  },
};
export default {
  namespaced: true,
  state,
  mutation,
  action,
};
