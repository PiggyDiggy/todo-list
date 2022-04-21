<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style>
#app {
  color: #2c3e50;
  height: 100%;
}

:root {
  --orange: #fec89a;
  --light-orange: #ffd6a5;
  --red: #ff9885;
  --text-main: #59504e;
  --text-light: #7a5c5c;
  --text-dark: #3e322f;
  --todo-bg: #ffe9cf;
  --green: #6eff93;
  --blue: #a0c4ff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Signika Negative", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  overflow: hidden;
}

main {
  height: calc(100% - 40px);
  overflow-y: overlay;
  padding-bottom: 136px;
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

.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
