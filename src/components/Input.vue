<template>
  <div v-if="type === 'title'" class="field">
    <input
      v-model="value"
      type="text"
      id="title-input"
      maxlength="100"
      autocomplete="off"
      required
    />
    <div class="input__placeholder">Title</div>
    <span class="input__background"></span>
  </div>
  <div v-else-if="type === 'memo'" class="field">
    <textarea
      v-model="value"
      id="memo-input"
      maxlength="5000"
      autocomplete="off"
    ></textarea>
    <Transition name="input__placeholder">
      <div v-show="!modelValue" class="input__placeholder">Memo</div>
    </Transition>
    <span class="input__background"></span>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    modelValue: String,
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>

<style>
.field {
  width: 100%;
  position: relative;
  color: var(--text-light);
  font: inherit;
  margin: 0.5rem 0;
}

.create-form .field {
  width: 50%;
}

#title-input {
  width: 100%;
  border: none;
  padding: 0.25rem;
  text-align: center;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: bold;
  color: inherit;
  background-color: transparent;
}

#memo-input {
  width: 100%;
  resize: none;
  min-height: 100px;
  padding: 0.25rem;
  border: none;
  overflow: hidden;
  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;
  text-align: center;
  color: inherit;
}

#title-input,
#memo-input {
  position: relative;
  z-index: 7;
  outline: none;
}

.input__background {
  position: absolute;
  inset: 0;
  background-color: var(--light-orange);
  transition: background-color 0.2s ease-out;
  border-radius: 8px;
  z-index: 5;
}

.important .input__background {
  background-color: var(--todo-bg);
}

.field:hover .input__background {
  background-color: var(--orange);
}

.important .field:hover .input__background {
  background-color: #fff1e6;
}

.input__placeholder {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-light);
  pointer-events: none;
  user-select: none;
  opacity: 1;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
  z-index: 6;
}

#title-input ~ .input__placeholder {
  font-size: 1.5rem;
  font-weight: bold;
}

.field:focus-within .input__placeholder,
#title-input:valid ~ .input__placeholder {
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}

.input__placeholder-enter-from {
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}

.input__placeholder-enter-to {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
</style>