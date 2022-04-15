<template>
  <TransitionGroup tag="ul" name="todo" class="todo-list" appear>
    <Todo
      v-for="(todo, index) in list"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :style="`transition-delay: ${0.15 * index}s`"
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

.todo-enter-from {
  transform: translateY(73vh);
  opacity: 0;
}

.todo-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.todo-enter-active {
  transition: transform 1s cubic-bezier(0, 0, 0, 1), opacity 1s ease-out;
}
</style>