<template>
  <main>
    <header>
      <div class="container-fluid cont">
        <Language></Language>
        <div class="row justify-content-center gap-3 gap-xl-0 h-100">
          <article class="col-12 col-sm-12 col-xl-9 p-0 p-sm-2">
            <strong>
              <h3 class="text-danger text-center m-0" style="font-weight: 600">
                {{ t('tableRes') }}
                <b class="fs-3 fw-semibold">{{ t('raid') }}</b>
              </h3>
            </strong>

            <p style="font-size: 16px" class="text-black m-0 text-end">
              {{ t('latest') }}:
              <time datetime="2024-05-02" style="font-size: 16px"> 02.05.2024</time>
            </p>

            <Table :currentBuild="currentBuild" :sulfur="sulfur"></Table>
          </article>

          <article
            style="align-self: center"
            class="col-10 col-sm-8 col-md-6 col-xl-3 d-flex flex-column align-items-center gap-3"
          >
            <BFormRadioGroup
              class="col-12"
              v-model="sulfur"
              name="radios-btn-default"
              buttons
              button-variant="outline-danger"
            >
              <BFormRadio :value="true">
                <p style="font-weight: 600; margin: 0">{{ t('table.sulfur') }}</p>
              </BFormRadio>
              <BFormRadio :value="false"
                ><p style="font-weight: 600; margin: 0">{{ t('table.gunpowder') }}</p></BFormRadio
              >
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
      </div>
    </header>
  </main>
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
.cont {
  display: flex;
  gap: 50px;
  justify-content: center;
  height: calc(100vh - 50px);
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
