<template>
  <Nav></Nav>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import Nav from './components/Nav.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-family: 'Work Sans', sans-serif;
}

body {
  margin: 0;
}

#app {
  display: block;
  overflow: auto;
  background:
    linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(0, 0, 0, 0.9)),
    url('./assets/backgrounds/background.jpg') border-box;
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x;
  background-attachment: scroll;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  animation: slide-in 0.3s ease-in-out forwards;
  transition: opacity 0.3s;
}

.fade-leave-active {
  animation: slide-out 0.3s ease-in-out forwards;
  transition: opacity 0.3s;
  opacity: 0;
}

.fadeDown-enter {
  opacity: 0;
}
.fadeDown-enter-active {
  animation: slide-in-down 0.3s ease-in-out forwards;
  transition: opacity 0.3s;
}

.fadeDown-leave-active {
  animation: slide-out-down 0.3s ease-in-out forwards;
  transition: opacity 0.3s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(2rem);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-2rem);
  }
}

@keyframes slide-in-down {
  from {
    transform: translateX(-2rem);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-down {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(2rem);
  }
}
</style>
