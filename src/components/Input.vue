<template>
  <input
    v-model="value"
    type="text"
    id="title-input"
    maxlength="100"
    autocomplete="off"
    required
  />
</template>

<script>
export default {
  props: {
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
  position: relative;
  z-index: 7;
  outline: none;
}
</style>