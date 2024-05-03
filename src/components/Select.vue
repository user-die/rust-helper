<template>
  <BFormSelect @input="$emit('onSelectChange', $event)" :options="options">
    <slot></slot>
  </BFormSelect>
</template>

<script setup>
var props = defineProps({
  options: Array
})
</script>
