<template>
  <TransitionGroup name="beam" appear tag="div" class="main-background">
    <div
      v-for="index in [1, 2, 3]"
      :key="index"
      :style="`transition-delay: ${0.15 * (index - 1)}s`"
      :class="`beam beam${index}`"
    ></div>
  </TransitionGroup>
  <div class="waves">
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
  </div>
</template>

<style>
.main-background {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(
    circle at 0px 0px,
    rgb(247 210 103 / 75%),
    rgb(253 162 131 / 75%)
  );
  z-index: -1;
}

.beam {
  position: absolute;
  width: 40%;
  height: 100%;
  background-color: #ffe6c1;
  clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
}

.beam1 {
  z-index: 5;
  left: -16%;
}

.beam2 {
  animation-delay: 0.15s;
  z-index: 4;
  left: -10%;
  opacity: 0.5;
}

.beam3 {
  animation-delay: 0.3s;
  z-index: 3;
  left: -4%;
  opacity: 0.3;
}

.beam:not(.beam-enter-active) {
  animation-name: move-beam;
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.beam-enter-from {
  transform: translateX(-100%);
}

.beam-enter-to {
  transform: translateX(0);
}

.beam-enter-active {
  transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation-duration: unset;
}

@keyframes move-beam {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(50px);
  }
}
</style>