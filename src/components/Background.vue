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
  transition: left 0.5s ease-out;
}

.beam1 {
  z-index: 5;
  left: -12%;
}

.beam2 {
  animation-delay: 0.15s;
  z-index: 4;
  left: -4%;
  opacity: 0.5;
}

.beam3 {
  animation-delay: 0.3s;
  z-index: 3;
  left: 4%;
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
  transform: translateX(-120%);
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

.waves {
  position: absolute;
  left: 0;
  bottom: -50px;
  height: 120px;
  right: 0;
  z-index: 4;
}

.wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("../assets/wave.png");
  background-size: 1000px 100px;
  background-repeat: repeat-x;
}

.wave1 {
  animation: wave-flow 30s linear infinite;
  z-index: 10;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}

.wave2 {
  animation: wave-flow2 15s linear infinite;
  z-index: 9;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}

.wave3 {
  animation: wave-flow 30s linear infinite;
  z-index: 8;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
}

.wave4 {
  animation: wave-flow2 5s linear infinite;
  z-index: 7;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}

@keyframes wave-flow {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: 1000px;
  }
}

@keyframes wave-flow2 {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: -1000px;
  }
}

@media (max-width: 1000px) {
  .waves {
    display: none;
  }
}

@media (max-width: 640px) {
  .beam1 {
    left: -20%;
  }
  .beam2 {
    left: -5%;
  }
  .beam3 {
    left: 10%;
  }
}
</style>