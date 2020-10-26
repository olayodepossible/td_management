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

  async addTodo({ commit }, title) {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title, completed: false }
      );
      commit("newTodo", res.data);
    } catch (error) {
      console.error(error);
    }
  },

  async deleteTodo({ commit }, id) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit("removeTodo", id);
    } catch (error) {
      console.error(error);
    }
  },

  async filterTodos({ commit }, e) {
    //Get selected number
    const limit = Number(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      commit("setTodos", res.data);
    } catch (error) {
      console.error(error);
    }
  },

  async updateTodo({ commit }, updatedTodo) {
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
        updatedTodo
      );
      commit("updateTodo", res.data);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },

  newTodo: (state, todo) => state.todos.unshift(todo),

  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id != id)),

  updateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
