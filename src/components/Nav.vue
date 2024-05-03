<template>
  <BNav class="d-flex justify-content-center" style="height: 30px">
    <BNavItem class="text-capitalize" to="/info">{{ t('nav.table') }}</BNavItem>
    <BNavItem class="text-capitalize" to="/calc">{{ t('nav.expCalc') }}</BNavItem>
    <BNavItem class="text-capitalize" to="/project">{{ t('nav.project') }}</BNavItem>
  </BNav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
var { t } = useI18n({ useScope: 'global' })
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 30px;

  a {
    text-decoration: none;
  }
}
</style>
