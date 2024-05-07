<template>
  <BNav
    class="d-flex justify-content-around justify-content-sm-center gap-0 gap-sm-4"
    style="height: 50px"
  >
    <BNavItem class="text-capitalize" linkClass="p-1 p-md-2" to="/">{{ t('nav.table') }}</BNavItem>
    <BNavItem class="text-capitalize" linkClass="p-1 p-md-2" to="/calc">{{
      t('nav.expCalc')
    }}</BNavItem>
    <BNavItem class="text-capitalize" linkClass="p-1 p-md-2" to="/project">{{
      t('nav.project')
    }}</BNavItem>
  </BNav>
</template>

<script setup>
import { BButton } from 'bootstrap-vue-next'
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
