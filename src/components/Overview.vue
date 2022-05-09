<template>
  <div class="overview" :class="{ important: todo.important }">
    <h2 class="overview__title">{{ todo.title }}</h2>
    <p class="overview__memo">{{ todo.memo }}</p>
    <span class="overview__datecompleted" v-if="todo.dateCompleted">
      {{ getDate() }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    getDate() {
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
  max-width: 50%;
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

.overview::-webkit-scrollbar-track {
  margin: 10px;
}

.overview::-webkit-scrollbar-thumb {
  color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 1000px) {
  .overview {
    max-width: 75%;
  }
}

@media (max-width: 640px) {
  .overview {
    max-width: 95%;
  }
}
</style>