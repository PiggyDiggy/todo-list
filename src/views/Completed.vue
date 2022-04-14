<template>
  <h1 class="section__title">
    {{ title }}
  </h1>
  <TodoList :list="sorted" />
</template>

<script>
import { pluralize } from "@/utils";
import TodoList from "@/components/TodoList";

export default {
  components: {
    TodoList,
  },
  computed: {
    list() {
      return this.$store.getters.completed;
    },
    title() {
      return this.list.length
        ? `You have completed ${this.list.length} todo${pluralize(this.list)}`
        : "You haven't completed any todos yet";
    },
    sorted() {
      return this.list.sort((a, b) => {
        return b.dateCompleted - a.dateCompleted;
      });
    },
  },
};
</script>
