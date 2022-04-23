<template>
  <li class="todo-wrap" :data-index="index">
    <div
      @click="viewTodo"
      class="todo"
      :class="{ 'todo--important': todo.important }"
    >
      <h2 class="todo__title">{{ todo.title }}</h2>
      <p class="todo__memo" v-if="todo.memo">{{ todo.memo }}</p>
      <div class="todo__datecompleted" v-if="todo.dateCompleted">
        {{ todo.dateCompleted }}
      </div>
      <div class="todo__index">{{ padIndex }}</div>
      <div class="todo__buttons">
        <Button
          v-if="!todo.dateCompleted"
          class="todo__btn complete-btn"
          icon="complete.svg"
          @click="completeTodo"
        />
        <Button
          v-if="!todo.dateCompleted"
          class="todo__btn edit-btn"
          icon="edit.svg"
          @click="openEdit"
        />
        <Button
          class="todo__btn delete-btn"
          icon="cross.svg"
          @click="deleteTodo"
        />
      </div>
      <div class="todo__ripples">
        <span
          class="todo__ripple todo__complete"
          :class="{ active: completed }"
        ></span>
        <span
          class="todo__ripple todo__delete"
          :class="{ active: deleted }"
        ></span>
      </div>
      <teleport to="#modal">
        <Modal @close="closeOverview" v-if="todo.memo" v-show="overviewActive">
          <Overview :todo="todo" />
        </Modal>
        <Modal
          @close="editActive = false"
          v-if="!todo.dateCompleted"
          v-show="editActive"
        >
          <Edit :todo="todo" />
        </Modal>
      </teleport>
    </div>
  </li>
</template>

<script>
import Button from "./TodoButton.vue";
import Modal from "./Modal.vue";
import Overview from "./Overview.vue";
import Edit from "./Edit.vue";

export default {
  components: {
    Button,
    Modal,
    Overview,
    Edit,
  },
  props: {
    todo: Object,
    index: Number,
  },
  data() {
    return {
      completed: false,
      deleted: false,
      overviewActive: false,
      editActive: false,
    };
  },
  methods: {
    completeTodo() {
      this.completed = true;
      setTimeout(() => {
        this.$store.commit("completeTodo", this.todo.id);
      }, 0);
    },
    deleteTodo() {
      this.deleted = true;
      setTimeout(() => {
        this.$store.commit("deleteTodo", this.todo.id);
      }, 0);
    },
    viewTodo() {
      if (!this.todo.memo) return;
      this.overviewActive = true;
    },
    closeOverview() {
      this.overviewActive = false;
    },
    openEdit(e) {
      e.stopPropagation();
      this.editActive = true;
    },
  },
  computed: {
    padIndex() {
      return String(this.index + 1).padStart(2, "0");
    },
  },
};
</script>

<style>
.todo-wrap {
  width: 70%;
  max-width: 1200px;
}

.todo {
  width: 100%;
  margin: 1rem 0;
  background-color: var(--todo-bg);
  border-radius: 15px;
  border: 2px solid transparent;
  box-shadow: 4px 4px 9px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 1rem;
  position: relative;
  z-index: 3;
  cursor: pointer;
  transition: transform 1s cubic-bezier(0, 0, 0, 1), border 0.2s ease-out;
}

.todo--important {
  background-color: var(--orange);
}

.todo:hover {
  transform: scale(1.05);
  transition: transform 0.4s ease-out, border 0.2s ease-out;
  border: 2px solid var(--orange);
}

.todo--important:hover {
  border: 2px solid white;
}

.todo__title {
  margin: 0;
  color: var(--text-main);
  padding-right: 88px;
  word-break: break-word;
  transition: color 0.3s 0.2s ease-out;
}

.todo__memo {
  color: var(--text-light);
  transition: color 0.2s 0.2s ease-out;
}

.todo__title,
.todo__memo {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.todo__index {
  position: absolute;
  top: 50%;
  right: 43px;
  transform: translateY(-50%);
  color: rgba(253, 162, 131, 0.6);
  font-size: 2rem;
  transition: color 0.5s ease-out;
}

.todo__memo ~ .todo__index {
  top: 12px;
  transform: translateY(0);
}

.todo__datecompleted {
  color: var(--text-main);
  transition: color 0.3s 0.2s ease-out;
}

.todo--important .todo__index,
.todo-leave-active .todo__index,
.todo-leave-active .todo__title,
.todo-leave-active .todo__memo,
.todo-leave-active .todo__datecompleted {
  color: var(--todo-bg);
}

.todo__buttons {
  display: flex;
  position: absolute;
  top: -16px;
  right: 20px;
}

.todo__ripples {
  position: absolute;
  inset: 0;
  border-radius: 15px;
  overflow: hidden;
  z-index: -1;
}

.todo__ripple {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: -3px;
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.32, 0, 0.67, 0), opacity 0.2s ease-out;
}

.todo__complete {
  background-color: var(--green);
  right: 116px;
}

.todo__delete {
  background-color: var(--red);
  right: 35px;
}

.todo__ripple.active {
  transform: scale(240);
  opacity: 1;
}
</style>