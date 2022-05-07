<template>
  <button type="button">
    <img :src="require(`@/assets/${icon}`)" alt="icon" />
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
  },
};
</script>

<style>
.todo__btn {
  margin: 0 2px;
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-out, visibility 0.2s ease-out,
    box-shadow 0.2s ease-out, transform 0.2s ease-out;
}

.todo:hover .todo__btn {
  visibility: visible;
  opacity: 1;
}

.todo__btn:hover,
.todo__btn:focus {
  outline: none;
  box-shadow: 0px 2px 9px 0px rgb(0 0 0 / 10%);
  transform: scale(1.1);
}

.delete-btn {
  background-color: var(--red);
}

.complete-btn {
  background-color: var(--green);
}

.edit-btn {
  background-color: var(--blue);
}

@media (max-width: 640px) {
  .todo__btn {
    visibility: visible;
    opacity: 1;
  }
}
</style>