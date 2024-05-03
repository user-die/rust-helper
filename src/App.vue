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
  height: 100vh;
  background:
    linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(0, 0, 0, 0.9)),
    url('./assets/backgrounds/background.jpg') no-repeat border-box;
  background-size: cover;
  background-position: center;
}
</style>
