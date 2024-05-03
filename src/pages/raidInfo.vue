<template>
  <div class="container">
    <Language></Language>

    <article>
      <section class="explosives bg-dark" style="border-radius: 20px; padding: 10px; width: 1280px">
        <Table style="width: 1260px" :currentBuild="currentBuild" :sulfur="sulfur"></Table>
      </section>
    </article>

    <article style="align-self: center" class="d-flex flex-column align-items-center gap-3">
      <BFormRadioGroup
        v-model="sulfur"
        name="radios-btn-default"
        buttons
        style="max-width: 400px"
        button-variant="outline-info"
      >
        <BFormRadio :value="true">{{ t('table.sulfur') }}</BFormRadio>
        <BFormRadio :value="false">{{ t('table.gunpowder') }}</BFormRadio>
      </BFormRadioGroup>

      <BFormSelect v-model="buildId">
        <BFormSelectOption :value="null" disabled>{{ t('buildings') }}</BFormSelectOption>
        <BFormSelectOption v-for="item in buildData" :value="item.value">{{
          t(`build.${item.text}`)
        }}</BFormSelectOption>
      </BFormSelect>

      <section
        v-if="currentBuild"
        class="d-flex flex-column gap-1 align-items-center position-relative"
      >
        <img style="width: 200px" :src="currentBuild.img" alt="" />
        <p class="m-0">{{ t('durability') }}: {{ currentBuild.hp }}</p>
        <p>{{ `${t('decay')}: ${currentBuild.decay}  ${t('hours')}` }}</p>
      </section>
    </article>
  </div>
</template>

<script setup>
import buildData from '@/data/buildsData.js'
import explosivesData from '@/data/raidData.js'
import resources from '@/data/resources'
import { computed, ref } from 'vue'
import calcChipCombination from '@/hooks/calcChipCombination.js'
import { useI18n } from 'vue-i18n'
import { BFormSelect } from 'bootstrap-vue-next'

var { t } = useI18n({ useScope: 'global' })
var buildId = ref(null)
var sulfur = ref(true)
var checkbox = ref('')

var currentBuild = computed(() => buildData.find((el) => el.value === buildId.value))
/*
var chipCombination = computed(() => {
  return calcChipCombination(currentBuild.value)
})

var chipItem = (res) =>
  computed(() =>
    Object.entries(chipCombination.value).reduce((acc, el) => {
      return acc + explosivesData.find((item) => item.text === el[0])[res] * el[1]
    }, 0)
  )

var chipResources = computed(() =>
  Object.entries(chipCombination.value).reduce((acc, el) => {
    acc.push(
      explosivesData
        .find((item) => item.text === el[0])
        .resources.reduce((theAcc, element) => {
          theAcc[Object.keys(element)[0]] = Object.values(element)[0] * el[1]
          return theAcc
        }, {})
    )
    console.log(acc)
    return acc
  }, [])
)

<section>
        <div class="d-flex align-items-center gap-3 text-info">
          <h5 class="m-0">Самый дешёвый рейд:</h5>
          <div v-for="item in Object.keys(chipCombination)" class="d-flex gap-1 align-items-center">
            <img
              :src="explosivesData.find((el) => el.text === item).img"
              style="width: 40px"
              alt=""
            />
            <p class="m-0">{{ chipCombination[item] }}</p>
          </div>
        </div>
      </section>


<p class="ms-4 m-0">Ресурсы:</p>
          <div v-if="sulfur">
            <img :src="resources.sulfur" alt="" />
            <p>
              {{ chipItem('sulfur') }}
            </p>
          </div>
          <div v-if="sulfur">
            <img :src="resources.charcoal" alt="" />
            <p>
              {{ chipItem('charcoal') }}
            </p>
          </div>
          <div v-else>
            <img :src="resources.gunpowder" alt="" />
            <p>
              {{ chipItem('gunpowder') }}
            </p>
          </div>
          <div v-for="item in chipResources[0]">
            <img alt="" />
            <p>{{ item }}</p>
          </div>
          */
</script>

<style scoped>
.container {
  display: flex;
  gap: 50px;
  justify-content: space-evenly;
  height: calc(100vh - 30px);
  align-items: center;
}

.select {
  border: 3px solid orange;
  border-radius: 5px;
  width: 200px;
  padding: 5px;
}

.explosives {
  display: flex;
  flex-direction: column;

  column-gap: 35px;
}
</style>
