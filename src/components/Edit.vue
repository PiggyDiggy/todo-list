<template>
  <form @submit="editTodo" class="edit-container">
    <div class="todo-edit" :class="{ important: todo.important }">
      <Input type="title" v-model="title" />
      <Input type="memo" v-model="memo" />
    </div>
    <Transition name="update-alert">
      <div
        v-show="title !== todo.title || memo !== todo.memo"
        class="update-alert"
      >
        <span>You have unsaved changes</span>
        <div class="update-alert__buttons">
          <button
            type="button"
            @click="resetTodo"
            class="update-alert__button button-cancel"
          >
            Cancel
          </button>
          <button type="submit" class="update-alert__button button-save">
            Save
          </button>
        </div>
      </div>
    </Transition>
  </form>
</template>

<script>
import Input from "./Input.vue";

export default {
  components: {
    Input,
  },
  props: {
    todo: Object,
  },
  data() {
    return {
      title: this.todo.title,
      memo: this.todo.memo,
    };
  },
  methods: {
    resetTodo() {
      this.title = this.todo.title;
      this.memo = this.todo.memo;
    },
    editTodo(e) {
      e.preventDefault();
      if (!this.title) return;
      const todo = {
        title: this.title,
        memo: this.memo,
        id: this.todo.id,
      };
      this.$store.commit("editTodo", todo);
      this.$parent.$emit("close");
    },
  },
};
</script>

<style>
.edit-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;
  position: relative;
  z-index: 15;
  pointer-events: none;
}

.todo-edit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--todo-bg);
  color: var(--text-main);
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 2px 2px 14px rgba(0, 0, 0, 20%);
  pointer-events: all;
}

.todo-edit.important {
  background-color: var(--orange);
}

.update-alert {
  position: absolute;
  bottom: -80px;
  background-color: var(--text-main);
  color: white;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  box-shadow: 2px 2px 14px rgba(0, 0, 0, 20%);
  pointer-events: all;
}

.update-alert-enter-from,
.update-alert-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.update-alert-enter-to,
.update-alert-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.update-alert-enter-active {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.2s ease-out;
}

.update-alert-leave-active {
  transition: transform 0.4s cubic-bezier(0.36, 0, 0.66, -0.56),
    opacity 0.2s 0.2s ease-out;
}

.update-alert__buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.update-alert__button {
  font: inherit;
  border: none;
  cursor: pointer;
}

.button-save {
  background-color: var(--todo-bg);
  color: var(--text-dark);
  border-radius: 3px;
  padding: 4px 16px;
  transition: background-color 0.2s ease-out;
}

.button-save:hover {
  background-color: #fff1e6;
}

.button-cancel {
  font: inherit;
  background-color: transparent;
  color: var(--todo-bg);
}

.button-cancel:hover {
  text-decoration: underline;
}
</style>