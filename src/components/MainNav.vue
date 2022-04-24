<template>
  <nav class="main-nav">
    <ul class="main-nav__items">
      <li class="main-nav__item">
        <router-link class="router-link" to="/completed">Completed</router-link>
      </li>
      <li class="main-nav__item">
        <router-link class="router-link" to="/current">Current</router-link>
      </li>
      <li class="main-nav__item">
        <router-link class="router-link" to="/create">Create</router-link>
        <span></span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.main-nav__items {
  list-style: none;
  padding: 0;
  margin: 0 2rem;
  display: flex;
  align-items: center;
}

.router-link {
  text-decoration: none;
  color: var(--text-main);
  font-size: 1.1rem;
  padding: 29px 0.5rem;
  position: relative;
  transition: color 0.1s ease-out;
}

.router-link:hover,
.router-link:focus {
  outline: none;
  color: white !important;
}

.router-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 2px;
  background-color: var(--red);
  transform: scaleX(0);
  transition: transform 0.2s ease-out;
}

.router-link-active {
  color: white !important;
}

.router-link-active::after {
  transform: scaleX(1);
}

.main-nav__item:last-of-type {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  margin-left: 8px;
  padding: 4px 0;
  position: relative;
  overflow: hidden;
}

.main-nav__item:last-of-type .router-link {
  color: var(--red);
  transition: color 0.2s ease-out;
  padding: 29px 1rem;
  z-index: 3;
}

.main-nav__item:last-of-type .router-link::after {
  content: none;
}

.main-nav__item:last-of-type span {
  position: absolute;
  background-color: var(--red);
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  transform: scale(0);
  transition: transform 0.3s ease-out;
  z-index: 2;
}

.main-nav__item:last-of-type:hover span,
.main-nav__item:last-of-type:focus-within span,
.main-nav__item:last-of-type .router-link-active + span {
  transform: scale(1);
}

@media screen and (max-width: 640px) {
  .main-nav {
    display: none;
  }
}
</style>