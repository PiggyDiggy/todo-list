<template>
  <section class="app-description">
    <h1 class="description__title">Simply Your Todos. Woo!</h1>
    <p>
      Life is fun. But life is also busy. There's a million different things you
      could be doing. But what matters is <b>what</b> you do.
      <b><i>Todo Woo</i></b> is created to help you make sense of all of your
      opportunities and live that life that matters most to you. You new
      organised life awaits!
    </p>
    <router-link class="description__button" to="/current">Explore</router-link>
  </section>
</template>

<style>
.app-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: var(--text-dark);
  margin: 3rem auto;
  width: 60%;
}

.description__title {
  font-size: 2em;
  margin-bottom: 0;
}

.description__button {
  margin-top: 16px;
  color: var(--text-dark);
  background-color: var(--orange);
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

.description__button:hover,
.description__button:focus {
  outline: none;
  transform: scale(1.05);
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.1);
}

@media (max-width: 640px) {
  .app-description {
    width: 95%;
  }

  .description__button:hover,
  .description__button:active {
    transform: scale(0.95);
    box-shadow: 4px 4px 8px -2px rgba(0, 0, 0, 0.1);
  }
}
</style>