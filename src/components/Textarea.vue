<template>
  <textarea
    v-model="value"
    @input="resize"
    ref="textarea"
    id="memo-input"
    maxlength="5000"
    autocomplete="off"
  ></textarea>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  methods: {
    resize() {
      const { textarea } = this.$refs;
      textarea.style.height = "5px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
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
  mounted() {
    this.resize();
  }
};
</script>

<style>
#memo-input {
  width: 100%;
  resize: none;
  min-height: 100px;
  max-height: 60vh;
  padding: 4px 18px 4px 4px;
  border: none;
  overflow: overlay;
  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;
  text-align: center;
  color: inherit;
  position: relative;
  z-index: 7;
  outline: none;
}

#memo-input::-webkit-scrollbar {
  width: 16px;
}

#memo-input::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0 10px;
  border-radius: 100vmax;
  border: 4px solid transparent;
  color: rgba(0, 0, 0, 0.3);
}

#memo-input::-webkit-scrollbar-thumb:hover {
  color: rgba(0, 0, 0, 0.5);
}
</style>