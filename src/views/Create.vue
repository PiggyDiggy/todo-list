<template>
  <div class="container">
    <form @submit="createTodo" class="create-form" autocomplete="off">
      <Transition name="fields" appear>
        <div class="fields" :class="{ important }">
          <Input type="title" v-model="title" />
          <Input type="memo" v-model="memo" />
          <Switch v-model="important" />
        </div>
      </Transition>
      <Transition name="create-btn" appear>
        <button class="create-btn" type="submit">Create</button>
      </Transition>
    </form>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Switch from "@/components/Switch";

export default {
  components: {
    Input,
    Switch,
  },
  data() {
    return {
      title: "",
      memo: "",
      important: false,
    };
  },
  methods: {
    createTodo(e) {
      e.preventDefault();
      if (!this.title) return;
      const todo = {
        title: this.title,
        memo: this.memo,
        important: this.important,
        createdAt: new Date(),
      };
      this.$store.commit("addTodo", todo);
      this.title = "";
      this.memo = "";
    },
  },
};
</script>

<style>
.container {
  height: calc(100vh - 80px - 136px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 1s cubic-bezier(0, 0, 0, 1);
}

.create-form {
  width: 75%;
  max-width: 1250px;
}

.fields {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid var(--orange);
  background-color: var(--todo-bg);
  border-radius: 15px;
  box-shadow: 4px 4px 9px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 6;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
}

.fields.important {
  background-color: var(--orange);
  border-color: white;
}

.fields-enter-from {
  transform: scaleY(0);
}

.fields-enter-to {
  transform: scaleY(1);
}

.fields-enter-active {
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.create-btn {
  margin-top: 36px;
  padding: 12px 28px;
  border-radius: 10px;
  border: 2px solid var(--orange);
  background-color: var(--todo-bg);
  color: var(--text-light);
  font: inherit;
  font-size: 1.2rem;
  box-shadow: 7px 7px 20px 0px rgb(0 0 0 / 10%);
  position: relative;
  z-index: 5;
  transition: transform 0.2s ease-out, background-color 0.2s ease-out;
}

.create-btn:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.create-btn-enter-from {
  transform: translateY(-200px) scale(0);
}

.create-btn-enter-to {
  transform: translateY(0) scale(1);
}

.create-btn-enter-active {
  transition: transform 0.6s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>