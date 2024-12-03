<template>
  <li>
    <button
      class="bg-blue rounded-xl p-1 text-white"
      @click="$emit('tabClick')"
    >
      {{ title }}
    </button>
  </li>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
