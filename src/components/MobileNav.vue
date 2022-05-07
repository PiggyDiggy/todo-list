<template>
  <svg
    height="32px"
    viewBox="0 -53 384 384"
    width="32px"
    xmlns="http://www.w3.org/2000/svg"
    class="bars-icon"
    @click="openNav"
  >
    <path
      d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
    />
    <path
      d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
    />
    <path
      d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
    />
  </svg>
  <teleport to="#modal">
    <Transition name="modal-container" @enter="onEnter" @leave="onLeave">
      <Modal v-show="navOpened" @close="closeNav">
        <nav class="mobile-nav">
          <ul class="mobile-nav__items">
            <li class="mobile-nav__item">
              <router-link
                to="/completed"
                class="mobile-nav__link"
                @click="closeNav"
              >
                <img src="@/assets/checkmark.svg" alt="check mark" />
                <span>Completed</span>
              </router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link
                to="/current"
                class="mobile-nav__link"
                @click="closeNav"
              >
                <img src="@/assets/clocks.svg" alt="clocks" />
                <span>Current</span>
              </router-link>
            </li>
            <li class="mobile-nav__item">
              <span></span>
              <router-link
                to="/create"
                class="mobile-nav__link"
                @click="closeNav"
              >
                <img src="@/assets/create.svg" alt="create" />
                <span>Create</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </Modal>
    </Transition>
  </teleport>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      navOpened: false,
    };
  },
  methods: {
    openNav() {
      this.navOpened = true;
    },
    closeNav() {
      this.navOpened = false;
    },
    onEnter(el) {
      const nav = el.querySelector(".mobile-nav");
      setTimeout(() => {
        nav.classList.add("mobile-nav--opened");
      }, 0);
    },
    onLeave(el) {
      const nav = el.querySelector(".mobile-nav");
      nav.classList.remove("mobile-nav--opened");
    },
  },
};
</script>

<style>
.mobile-nav {
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  background-color: white;
  z-index: 15;
  overflow: hidden;
  transform: translateX(100%);
  transition: transform 0.2s ease-out;
}

.mobile-nav--opened {
  transform: translateX(0);
}

.mobile-nav::before {
  content: "";
  position: absolute;
  top: -50%;
  right: calc(50% - 55vmax);
  width: 110vmax;
  height: 110vmax;
  background-color: var(--red);
  border-radius: 50%;
  z-index: 5;
}

.mobile-nav::after {
  content: "";
  position: absolute;
  bottom: -50%;
  left: calc(50% - 55vmax);
  width: 110vmax;
  height: 110vmax;
  background-color: #ffd6a5;
  border-radius: 50%;
  z-index: 4;
}

.mobile-nav::before,
.mobile-nav::after {
  transform: scale(0);
  opacity: 0;
  transition: transform 0s 0.2s, opacity 0s 0.2s;
}

.mobile-nav--opened::before,
.mobile-nav--opened::after {
  transform: scale(1);
  opacity: 1;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.2s ease-out;
}

.mobile-nav__items {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  z-index: 10;
}

.mobile-nav__item {
  margin: 0.5rem 0;
  font-size: 18px;
  transform: translateX(200%);
  transition: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.mobile-nav--opened .mobile-nav__item {
  transform: translateX(0);
}

.mobile-nav__item:nth-of-type(2) {
  transition: 0.5s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.mobile-nav__item:last-of-type {
  padding: 0;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: 0.5s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.mobile-nav__item:last-of-type a {
  padding: 0.5rem;
  color: var(--red);
  transition: color 0.2s ease-out;
  position: relative;
  z-index: 3;
}

.mobile-nav__item:last-of-type > span {
  position: absolute;
  border-radius: 50%;
  background-color: var(--red);
  z-index: 2;
  width: 120px;
  height: 120px;
  top: calc(50% - 60px);
  left: calc(50% - 60px);
  transform: scale(0);
  transition: transform 0.3s ease-out;
}

.mobile-nav__item:last-of-type:hover > span,
.mobile-nav__item:last-of-type:active > span,
.mobile-nav__item:last-of-type:focus-within > span {
  transform: scale(1);
}

.mobile-nav__item:last-of-type a span {
  margin-top: 3px;
  z-index: 3;
}

.mobile-nav__item:last-of-type svg {
  z-index: 3;
  transition: fill 0.2s ease-out;
}

.mobile-nav__link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.mobile-nav__link span {
  margin-left: 0.5rem;
}

.mobile-nav__link:hover,
.mobile-nav__link:focus,
.mobile-nav__link:active {
  text-decoration: underline;
  outline: none;
}

.mobile-nav__item:last-of-type a:hover,
.mobile-nav__item:last-of-type a:focus,
.mobile-nav__item:last-of-type a:active {
  text-decoration: none;
  color: white;
}

.bars-icon {
  display: none;
  fill: var(--text-main);
  margin-right: 1.5rem;
  cursor: pointer;
  height: 32px;
}

.bars-icon path {
  transition: transform 0.1s ease-out;
}

.bars-icon:hover path:first-child,
.bars-icon:active path:first-child {
  transform: translateY(20px);
}

.bars-icon:hover path:last-child,
.bars-icon:active path:last-child {
  transform: translateY(-20px);
}

@media screen and (max-width: 640px) {
  .bars-icon {
    display: block;
  }
}
</style>