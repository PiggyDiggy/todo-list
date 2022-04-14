<template>
  <div class="header__logo">
    <router-link to="/">
      <img src="@/assets/logo.svg" alt="Logo" />
      <span>Home</span>
    </router-link>
  </div>
</template>

<style>
.header__logo a {
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

.header__logo a:focus {
  outline: none;
  color: var(--red);
}

.header__logo img {
  height: 48px;
  width: 48px;
}

.header__logo span {
  line-height: 1;
  position: relative;
}

.header__logo span::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.2s ease-out, background-color 0.2s ease-out;
}

.header__logo:focus-within span::before {
  transform: scaleX(1);
  background-color: var(--red);
}
</style>