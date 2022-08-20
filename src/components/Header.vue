<template>
  <header class="main-header">
    <div class="main-header__container">
      <div>
        <Logo />
        <MainNav />
      </div>
      <MobileNav />
    </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import MainNav from "./MainNav.vue";
import MobileNav from "./MobileNav.vue";

export default {
  components: {
    Logo,
    MainNav,
    MobileNav,
  },
};
</script>

<style>
.main-header {
  position: relative;
  z-index: 10;
}

.main-header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, var(--orange) 60%, #f9dcc4);
  box-shadow: 0 6px 56px rgb(0 0 0 / 10%);
}

.main-header__container > div:first-child {
  display: flex;
  align-items: center;
}
</style>