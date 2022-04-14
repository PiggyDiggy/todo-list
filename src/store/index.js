import { createStore } from "vuex";

const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const store = createStore({
  state() {
    return {
      todos: [
        {
          title: "Completed",
          memo: "Completed123",
          important: false,
          createdAt: new Date(2022, 4, 10, 10),
          dateCompleted: new Date(2022, 4, 10, 12),
          id: 1,
        },
        {
          title: "Second",
          memo: "Completed123",
          important: false,
          createdAt: new Date(2022, 4, 10, 10),
          dateCompleted: new Date(2022, 4, 10, 11),
          id: 2,
        },
        {
          title: "Another One",
          memo: "Sample",
          important: true,
          createdAt: new Date(2022, 4, 10, 9),
          dateCompleted: new Date(2022, 4, 10, 15),
          id: 3,
        },
        {
          title: "Test",
          memo: "Test123",
          important: false,
          createdAt: new Date(2022, 4, 10, 8),
          id: 4,
        },
        {
          title: "Second",
          important: true,
          createdAt: new Date(2022, 4, 10, 9),
          id: 5,
        },
      ],
    };
  },
  mutations: {
    deleteTodo(state, id) {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === id),
        1
      );
    },
    completeTodo(state, id) {
      state.todos.find((todo) => todo.id === id).dateCompleted = new Date();
    },
  },
  getters: {
    completed: (state) => state.todos.filter((todo) => todo.dateCompleted),
    current: (state) => state.todos.filter((todo) => !todo.dateCompleted),
  },
});

export default store;
