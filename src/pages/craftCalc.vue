<template>
  <div
    class="container mx-auto p-0 d-flex flex-column justify-content-between"
    style="height: calc(100vh - 50px); align-items: normal"
  >
    <Language></Language>
    <div>
      <div class="row">
        <h3 style="font-weight: 600" class="text-center text-secondary text-danger mt-2">
          {{ t('calculator for the raid') }}
        </h3>
      </div>
      <div class="row mb-3 mt-2 justify-content-center">
        <article class="col-8 col-md-6 col-lg-5">
          <BFormSelect v-model="explSelect">
            <BFormSelectOption :value="null" disabled>
              -- {{ t('choose an explosive') }} --
            </BFormSelectOption>
            <BFormSelectOption v-for="item in explosivesData" :value="item.value">
              {{ t(`table.${item.text}`) }}
            </BFormSelectOption>
          </BFormSelect>
        </article>
      </div>

      <div class="row gap-5 justify-content-center">
        <transition-group name="list">
          <article
            v-for="item in buildItems.array"
            :key="item.value"
            :id="item.value"
            class="p-0 col-sm-1 col-lg-1 col-xl-2"
            style="width: 240px; height: 220px"
          >
            <Button
              :id="item.value"
              class="p-0 buildButton bg-danger bg-gradient"
              @onButtonClick="changeModal"
              style="width: 100%; height: 100%"
            >
              <img v-if="item.img" :src="item.img" style="width: 95%; height: 95%" alt="" />
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </Button>

            <section v-if="item.img" class="d-flex align-items-center justify-content-center mt-2">
              <Button
                class="mx-1 my-1 p-0 bg-info"
                :id="item.value"
                @onButtonClick="decrement"
                style="height: 30px; width: 30px"
                >-</Button
              >
              <p class="m-0" :id="item.value">
                {{ item.count || 0 }}
              </p>
              <Button
                class="mx-1 my-1 p-0 bg-info"
                :id="item.value"
                @onButtonClick="increment"
                style="height: 30px; width: 30px"
                >+</Button
              >
              <Button
                class="mx-1 my-1 p-0"
                :id="item.value"
                @onButtonClick="deleteItem"
                style="height: 30px; width: 30px"
                variant="danger"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                  />
                </svg>
              </Button>
            </section>
          </article>
        </transition-group>
      </div>
    </div>

    <BModal v-if="modal" v-model="modal" :title="t('choose the target')">
      <div class="d-flex flex-wrap justify-content-around gap-2">
        <Button
          @onButtonClick="addItem"
          style="width: 100px; height: 100px; padding: 0"
          variant="outline-primary"
          :key="item.value"
          v-for="item in buildData"
          :id="item.value"
        >
          <img style="width: 95px; height: 95px" :id="item.value" :src="item.img" />
        </Button>
      </div>
    </BModal>

    <div class="row my-5 justify-content-center" v-if="explSelect">
      <BFormRadioGroup
        v-model="sulfur"
        name="radios-btn-default"
        buttons
        style="max-width: 400px"
        button-variant="outline-danger"
      >
        <BFormRadio :value="true">
          <p style="font-weight: 600; margin: 0">{{ t('table.sulfur') }}</p>
        </BFormRadio>
        <BFormRadio :value="false"
          ><p style="font-weight: 600; margin: 0">{{ t('table.gunpowder') }}</p></BFormRadio
        >
      </BFormRadioGroup>

      <article v-if="explSelect">
        <p style="text-align: center">
          {{ t('The required amount of explosives') }} : {{ calcCount }}
          <img :src="currentExp.item.img" style="width: 50px" alt="" />
        </p>

        <section class="d-flex flex-wrap justify-content-center gap-3">
          <div v-if="sulfur" class="d-flex align-items-center justify-content-evenly">
            <img :src="resources.sulfur" />
            <p style="text-align: center">{{ currentExp.item.sulfur * calcCount.value }}</p>
          </div>

          <div v-if="sulfur" class="d-flex align-items-center justify-content-evenly">
            <img :src="resources.charcoal" />
            <p style="text-align: center">{{ currentExp.item.charcoal * calcCount.value }}</p>
          </div>

          <div v-else class="d-flex align-items-center justify-content-evenly">
            <img :src="resources.gunpowder" />
            <p style="text-align: center">{{ currentExp.item.gunpowder * calcCount.value }}</p>
          </div>

          <div
            class="d-flex align-items-center justify-content-evenly"
            v-for="item in currentExp.item.resources"
          >
            <img :src="resources[Object.keys(item)]" />
            <p>{{ Object.values(item)[0] * calcCount.value }}</p>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import explosivesData from '../data/raidData'
import buildData from '../data/buildsData'
import calculateCountExplosive from '../hooks/calcutaleCountExplosive'
import resources from '../data/resources'
import { useI18n } from 'vue-i18n'

var { t } = useI18n({ useScope: 'global' })
var modal = ref(false)
var explSelect = ref(null)
var buildItems = reactive({
  array: [
    {
      count: 1,
      hp: 0,
      text: 'Stone structures',
      value: 0
    }
  ]
})
var currentExp = reactive({ item: null })
var calcCount = ref(0)
var sulfur = ref(true)

var changeModal = () => {
  modal.value = !modal.value
}

var increment = (event, id) => {
  buildItems.array.find((el) => el.value === id).count += 1
}

var decrement = (event, id) => {
  if (buildItems.array.find((el) => el.value === id).count !== 0)
    buildItems.array.find((el) => el.value === id).count -= 1
}

var addItem = (event, id) => {
  if (buildItems.array.filter((el) => el.value === id).length === 0) {
    buildItems.array.push(buildData.find((el) => el.value === id))
  }
  buildItems.array.find((el) => el.value === id).count = 1
  modal.value = false
}

var deleteItem = (event, id) => {
  buildItems.array = buildItems.array.filter((el) => el.value !== id)
}

watch(explSelect, async (newValue) => {
  currentExp.item = explosivesData.find((el) => el.value == newValue)

  calcCount.value = computed(() =>
    buildItems.array.reduce((acc, build) => {
      if (Object.keys(build).length == 0) return 0

      return acc + calculateCountExplosive(currentExp.item, build) * build.count
    }, 0)
  )
})
</script>

<style scoped>
* {
  margin: 0;
}
.buildButton {
  width: 180px;
  height: 180px;
}

@media (max-width: 1000px) {
  .buildButton {
    width: 250px;
    height: 250px;
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
