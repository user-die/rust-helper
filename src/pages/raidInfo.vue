<template>
  <main
    class="container mx-auto flex flex-col items-center gap-2 p-2 lg:gap-4 lg:p-4"
  >
    <select
      class="p-3 text-xl rounded-2xl bg-bg2 text-text w-full md:w-1/2 lg:w-1/3"
      @change="buildsStore.addElement(Number($event.target.value))"
    >
      <option :value="null" selected disabled>Выберите цель</option>
      <option
        v-for="item in buildData"
        :key="item.id"
        :value="item.id"
        class="text-text bg-bg2"
      >
        {{ item.name }}
      </option>
    </select>

    <TransitionGroup name="list" tag="ul" class="flex flex-wrap gap-3">
      <Build
        v-for="build of buildsStore.builds"
        :id="build.id"
        :key="build.id"
        :count="build.count"
      />
    </TransitionGroup>

    <Table />
  </main>
</template>

<script setup>
import Table from "../components/Table.vue";
import buildData from "@/data/buildsData.js";
import { useBuildsStore } from "../store/buildsStore";
import { ref } from "vue";
//import { useI18n } from "vue-i18n";
import Build from "../components/Build.vue";

const buildsStore = useBuildsStore();

//var { t } = useI18n({ useScope: "global" });
var sulfur = ref(true);
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
