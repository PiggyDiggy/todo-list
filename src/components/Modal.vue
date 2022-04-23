<template>
  <Transition name="modal-container">
    <div class="modal-container">
      <slot @close="$emit('close')"></slot>
      <div class="backdrop" @click="$emit('close')">
        <img src="../assets/cross.svg" alt="cross" class="cross" />
      </div>
    </div>
  </Transition>
</template>

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
</style>