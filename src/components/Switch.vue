<template>
  <div
    @click="$emit('update:modelValue', !modelValue)"
    class="important-toggle"
  >
    <span for="important-input">Important</span>
    <input type="checkbox" id="important-input" />
    <div class="switch" :class="{ active: modelValue }"></div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
  },
};
</script>

<style>
.important-toggle {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 4px;
  right: 8px;
  font-size: 18px;
  font-weight: bold;
  color: var(--text-main);
  cursor: pointer;
  user-select: none;
}

#important-input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.switch {
  position: relative;
  height: 16px;
  width: 30px;
  margin-left: 8px;
  background-color: var(--orange);
  border-radius: 50px;
  transition: background-color 0.2s ease-out;
}

.switch::before {
  content: "";
  position: absolute;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background-color: var(--text-light);
  box-shadow: 0px 2px 7px rgb(0 0 0 / 20%);
  transition: transform 0.1s ease-out;
}

.switch.active::before {
  transform: translateX(14px);
}

.important .switch {
  background-color: var(--todo-bg);
}

@media (max-width: 800px) {
  .important-toggle {
    position: static;
    flex-direction: column;
  }
}
</style>