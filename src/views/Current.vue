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
      return this.$store.getters.current
    },
    title() {
      return this.list.length
        ? `You currently have ${this.list.length} todo${pluralize(this.list)}`
        : "You don't have any todos yet";
    },
    sorted() {
      return this.list.sort((a, b) => {
        if (a.important === b.important) {
          return b.createdAt - a.createdAt;
        }
        return a.important ? -1 : 1;
      });
    },
  },
};
</script>
