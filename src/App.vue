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
  height: calc(100% - 80px);
  overflow-y: overlay;
  padding-bottom: 68px;
  color: rgba(0, 0, 0, 0);
  transition: color 0.2s ease;
}

main:hover {
  color: rgba(0, 0, 0, 0.3);
}

main::-webkit-scrollbar {
  width: 16px;
}

main::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0 10px;
  width: 8px;
  border-radius: 50px;
  background-clip: padding-box;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}

main::-webkit-scrollbar-thumb:hover {
  color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 1000px) {
  main {
    padding-bottom: 0;
  }
}

@media (max-width: 400px) {
  main {
    padding: 0 8px;
  }
}
</style>
