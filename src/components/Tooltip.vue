<template>
  <p class="tooltips"><slot></slot></p>
</template>

<style scoped>
.tooltips {
  width: 400px;
  position: absolute;
  top: -100px;
  z-index: 2;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
}
</style>
