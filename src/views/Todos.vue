<template>
  <Background />
  <section class="todos">
    <router-view />
  </section>
</template>

<script>
import Background from "@/components/Background";

export default {
  components: {
    Background,
  },
};
</script>

<style>
.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>