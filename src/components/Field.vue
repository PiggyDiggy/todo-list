<template>
  <div class="field">
    <slot></slot>
    <Transition name="input__placeholder">
      <div v-show="!modelValue" class="input__placeholder">
        {{ placeholder }}
      </div>
    </Transition>
    <span class="input__background"></span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    modelValue: String,
  },
};
</script>

<style>
.field {
  width: 100%;
  position: relative;
  color: var(--text-light);
  font: inherit;
  margin: 8px 0;
}

.create-form .field {
  width: 50%;
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

@media (max-width: 800px) {
  .create-form .field {
    width: 70%;
  }
}

@media (max-width: 640px) {
  .create-form .field {
    width: 100%;
  }
}
</style>