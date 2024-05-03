<template>
  <BButton @click="$emit('onButtonClick', $event, id)" class="position-relative p-0"
    ><slot class="position-absolute top-50 start-50 translate-middle"></slot
  ></BButton>
</template>

<script setup>
import { BButton } from 'bootstrap-vue-next'

const props = defineProps({
  id: Number
})
</script>
