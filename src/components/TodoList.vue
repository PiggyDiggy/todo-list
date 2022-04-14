<template>
  <TransitionGroup tag="ul" class="todo-list">
    <Todo
      v-for="todo in list"
      :key="todo.id"
      :todo="todo"
      :index="getIndex(todo)"
    />
  </TransitionGroup>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  components: {
    Todo,
  },
  props: {
    list: Array[Object],
  },
  methods: {
    getIndex(todo) {
      return this.list.indexOf(todo);
    },
  },
};
</script>

<style>
.todo-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.section__title {
  font-size: 3rem;
  color: white;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.18);
  text-align: center;
}
</style>