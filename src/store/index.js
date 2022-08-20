import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todos: [],
      todoNextId: 0,
    };
  },
  mutations: {
    deleteTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index === -1) return;
      state.todos.splice(index, 1);
    },
    completeTodo(state, id) {
      state.todos.find((todo) => todo.id === id).dateCompleted = new Date();
    },
    addTodo(state, todo) {
      todo.id = state.todoNextId++;
      state.todos.push(todo);
    },
    editTodo(state, { title, memo, id }) {
      const todo = state.todos.find((todo) => todo.id === id);
      [todo.title, todo.memo] = [title, memo];
    },
    loadFromLocalStorage() {
      const state = loadTodos();
      convertJSONToDate(state.todos);
      this.replaceState(state);
    },
  },
  getters: {
    completed: (state) => state.todos.filter((todo) => todo.dateCompleted),
    current: (state) => state.todos.filter((todo) => !todo.dateCompleted),
  },
});

const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todoNextId = JSON.parse(localStorage.getItem("nextId")) || 0;
  return { todos, todoNextId };
};

const convertJSONToDate = (todos) => {
  todos.forEach((todo) => {
    todo.createdAt = new Date(todo.createdAt);
    if (todo.dateCompleted) {
      todo.dateCompleted = new Date(todo.dateCompleted);
    }
  });
};

const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const saveNextId = (id) => {
  localStorage.setItem("nextId", JSON.stringify(id));
};

store.subscribe((mutation, state) => {
  if (mutation.type === "loadFromLocalStorage") return;
  if (mutation.type === "addTodo") saveNextId(state.todoNextId);
  saveTodos(state.todos);
});

export default store;
