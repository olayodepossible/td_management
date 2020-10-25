import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      commit("setTodos", res.data);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
