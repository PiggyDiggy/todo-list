<template>
  <div class="header__logo">
    <router-link class="router-link" to="/">
      <img src="@/assets/logo.svg" alt="Logo" />
      <span>Home</span>
    </router-link>
  </div>
</template>

<style scoped>
.router-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  padding: 16px;
  transition: color 0.2s ease-out;
}

.router-link:focus {
  outline: none;
}

.router-link img {
  height: 48px;
  width: 48px;
}
</style>