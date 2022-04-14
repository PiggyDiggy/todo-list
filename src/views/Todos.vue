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
