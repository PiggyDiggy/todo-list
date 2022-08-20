<template>
  <div class="overview" :class="{ important: todo.important }">
    <h2 class="overview__title">{{ todo.title }}</h2>
    <p class="overview__memo">{{ todo.memo }}</p>
    <span class="overview__datecompleted" v-if="todo.dateCompleted">
      {{ date }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  computed: {
    date() {
      return this.todo.dateCompleted.toLocaleDateString("en-GB");
    },
  },
};
</script>

<style>
.overview {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 200px;
  width: 50%;
  max-height: 90%;
  overflow: overlay;
  background-color: var(--todo-bg);
  color: var(--text-main);
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 2px 2px 14px rgba(0, 0, 0, 20%);
  z-index: 15;
}

.overview.important {
  background-color: var(--orange);
}

.overview__title {
  margin: auto 0 0 0;
}

.overview__memo {
  word-break: break-word;
  margin-bottom: 0;
}

.overview__datecompleted {
  margin-top: 1em;
  color: var(--text-light);
}

.overview :last-child {
  margin-bottom: auto;
}

.overview::-webkit-scrollbar {
  width: 16px;
}

.overview::-webkit-scrollbar-track {
  margin: 10px;
}

.overview::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0 10px;
  border-radius: 100vmax;
  border: 4px solid transparent;
  color: rgba(0, 0, 0, 0.3);
}

.overview::-webkit-scrollbar-thumb:hover {
  color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 1000px) {
  .overview {
    width: 75%;
  }
}

@media (max-width: 640px) {
  .overview {
    width: 95%;
  }
}
</style>