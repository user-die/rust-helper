<template>
  <BTable hover small caption-top :items="explosivesData" :fields="filterFields">
    <template #cell(item)="row" #cell()>
      <div style="width: 250px" class="position-relative">
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
      <p style="width: 174px">{{ row.value }}</p></template
    >

    <template #cell(totalScrap)="row">
      <img :src="resourcesData.scrap" />
      <p style="width: 174px">{{ row.value }}</p></template
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
      <p style="width: 140px">
        {{
          Math.ceil(
            ((row.item.sulfur * (calcCountItems(row.item).value || 1)) / 20) * 10
          ).toLocaleString('ru')
        }}
      </p>
    </template>

    <template #cell(count)="row">
      <div class="d-flex gap-3">
        <div class="" v-for="res in row.item['resources']">
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
import { reactive, computed } from 'vue'
import explosivesData from '@/data/raidData'
import resourcesData from '@/data/resources'
import bench1 from '@/assets/benchs/workbench1.png'
import bench2 from '@/assets/benchs/workbench2.png'
import bench3 from '@/assets/benchs/workbench3.png'
import getDamageType from '@/hooks/getDamageType.js'
import calculateCountExplosive from '../hooks/calcutaleCountExplosive'
import { useI18n } from 'vue-i18n'

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
      sortable: true,
      class: 'text-center align-middle'
    },
    {
      key: 'totalScrap',
      label: t('table.countScrap'),
      sortable: true,
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

var calcCountItems = (explosive) =>
  computed(() => calculateCountExplosive(explosive, props.currentBuild))
</script>

<style scoped>
* {
  margin: 0;
}

.p {
  width: 120px;
}

.count {
  color: red;
  top: 40px;
  left: 158px;
  position: absolute;
  z-index: 1;
  font-weight: bold;
}
</style>
