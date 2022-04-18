<template>
  <TransitionGroup
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    tag="ul"
    name="todo"
    class="todo-list"
    appear
  >
    <Todo
      v-for="(todo, index) in list"
      :key="todo.id"
      :todo="todo"
      :index="index"
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
    onBeforeEnter(el) {
      el.style.transitionDelay = `${el.dataset.index * 0.15}s`;
    },
    onAfterEnter(el) {
      el.style.transitionDelay = null;
    },
    onBeforeLeave(el) {
      el.style.height = `${el.offsetHeight}px`;
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

.todo-leave-from {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.todo-leave-to {
  height: 0 !important;
  transform: translateY(0) scale(0);
  opacity: 0;
}

.todo-leave-active {
  transition: transform 0.6s 0.1s cubic-bezier(0.47, 0, 0.75, 0.72),
    height 0.3s 0.5s ease-out, opacity 0.8s ease-out;
}
</style>