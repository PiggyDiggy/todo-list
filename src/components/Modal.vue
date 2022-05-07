<template>
  <Transition name="modal-container">
    <div class="modal-container">
      <slot></slot>
      <div class="backdrop" @click="$emit('close')">
        <img src="../assets/cross.svg" alt="cross" class="cross" />
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style>
.modal-container {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container-enter-from,
.modal-container-leave-to {
  opacity: 0;
}

.modal-container-enter-to,
.modal-container-leave-from {
  opacity: 1;
}

.modal-container-enter-active,
.modal-container-leave-active {
  transition: opacity 0.2s ease-out;
}

.backdrop {
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  cursor: pointer;
  transition: opacity 0.2s ease-out;
}

.backdrop-enter-to,
.backdrop-leave-from {
  opacity: 1;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.cross {
  position: absolute;
  top: 6px;
  left: 6px;
  opacity: 0.5;
  transition: opacity 0.2s ease-out;
}

.backdrop:hover .cross {
  opacity: 1;
}
</style>