<template>
  <BTable
    hover
    small
    caption-top
    :items="explosivesData"
    :fields="windowWidth < 900 ? paginationItem : filterFields"
  >
    <template #head()="data">
      <div
        class="d-flex align-items-center justify-content-center"
        :class="{ 'justify-content-between': windowWidth < 900 }"
      >
        <BButton
          class="pagination-button"
          v-if="windowWidth < 900 && data.field.key !== 'item'"
          :disabled="ex2CurrentPage === 2 && true"
          @click="ex2CurrentPage--"
          variant="outline-primary"
          ><</BButton
        >
        <span :class="{ w150: windowWidth < 900 }">{{ data.label }}</span>
        <BButton
          class="pagination-button"
          v-if="windowWidth < 900 && data.field.key !== 'item'"
          :disabled="ex2CurrentPage === filterFields.length - 1 && true"
          @click="ex2CurrentPage++"
          variant="outline-primary"
          >></BButton
        >
      </div>
    </template>

    <template #cell(item)="row" #cell()>
      <div class="position-relative">
        <img :src="row.item.img" alt="" style="width: 60px" />
        <p class="count">
          {{ calcCountItems(row.item) }}
        </p>
        <p style="font-size: 16px">{{ t('table.' + row.item.text) }}</p>
      </div>
    </template>

    <template #cell(damage)="row">
      <p>
        {{ row.item[getDamageType(props.currentBuild)] }}
      </p>
    </template>

    <template #cell(workbenchLevel)="row">
      <img :src="benchs[row.value]" />
      <p>{{ row.value }}</p></template
    >

    <template #cell(totalScrap)="row">
      <img :src="resourcesData.scrap" />
      <p>{{ row.value }}</p></template
    >

    <template v-if="sulfur" #cell(sulfur)="row">
      <img :src="resourcesData.sulfur" />
      <p class="p">
        {{ (row.item.sulfur * (calcCountItems(row.item).value || 1)).toLocaleString('ru') }}
      </p>
    </template>

    <template v-if="sulfur" #cell(charcoal)="row">
      <img :src="resourcesData.charcoal" />
      <p class="p">
        {{ (row.item.charcoal * (calcCountItems(row.item).value || 1)).toLocaleString('ru') }}
      </p>
    </template>

    <template v-if="!sulfur" #cell(gunpowder)="row">
      <img :src="resourcesData.gunpowder" />
      <p>
        {{
          Math.ceil(
            ((row.item.sulfur * (calcCountItems(row.item).value || 1)) / 20) * 10
          ).toLocaleString('ru')
        }}
      </p>
    </template>

    <template #cell(count)="row">
      <div class="d-flex gap-3 justify-content-center">
        <div v-for="res in row.item['resources']">
          <img :src="resourcesData[Object.keys(res)[0]]" alt="" />
          <p>
            {{
              (Object.values(res)[0] * (calcCountItems(row.item).value || 1)).toLocaleString('ru')
            }}
          </p>
        </div>
      </div></template
    >
  </BTable>
</template>

<script setup>
import { reactive, computed, ref, onMounted, onUnmounted } from 'vue'
import explosivesData from '@/data/raidData'
import resourcesData from '@/data/resources'
import bench1 from '@/assets/benchs/workbench1.png'
import bench2 from '@/assets/benchs/workbench2.png'
import bench3 from '@/assets/benchs/workbench3.png'
import getDamageType from '@/hooks/getDamageType.js'
import calculateCountExplosive from '../hooks/calcutaleCountExplosive'
import { useI18n } from 'vue-i18n'
import { BButton } from 'bootstrap-vue-next'

var { t } = useI18n({ useScope: 'global' })

const props = defineProps({
  currentBuild: Object,
  sulfur: Boolean
})

var benchs = reactive({
  1: bench1,
  2: bench2,
  3: bench3
})

var filterFields = computed(() => {
  var defaultFilters = [
    { key: 'item', label: t('table.item'), class: 'text-center align-middle' },
    { key: 'damage', label: t('table.damage'), class: 'text-center align-middle' },
    {
      key: 'workbenchLevel',
      label: t('table.workbench'),
      class: 'text-center align-middle'
    },
    {
      key: 'totalScrap',
      label: t('table.countScrap'),
      class: 'text-center align-middle'
    },
    { key: 'count', label: t('table.resources'), class: 'text-center align-middle' }
  ]

  props.sulfur
    ? defaultFilters.splice(
        4,
        0,
        { key: 'sulfur', label: t('table.sulfur'), class: 'text-center align-middle' },
        { key: 'charcoal', label: t('table.charcoal'), class: 'text-center align-middle' }
      )
    : defaultFilters.splice(4, 0, {
        key: 'gunpowder',
        label: t('table.gunpowder'),
        class: 'text-center align-middle'
      })

  return defaultFilters
})

const ex2CurrentPage = ref(3)

var paginationItem = computed(() => {
  var array = Array(2)
  array[0] = { key: 'item', label: 'предмет', class: 'text-center align-middle w-50' }
  array[1] = filterFields.value[ex2CurrentPage.value]
  return array
})

var calcCountItems = (explosive) =>
  computed(() => calculateCountExplosive(explosive, props.currentBuild))

var windowWidth = ref(window.innerWidth)

var handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
* {
  margin: 0;
}

.p {
  max-width: 120px;
}

.count {
  color: red;
  bottom: 20%;
  right: 15%;
  position: absolute;
  z-index: 1;
  font-weight: bold;
}
</style>
