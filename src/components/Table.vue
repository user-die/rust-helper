<template>
  <h3 class="text-danger text-center m-0" style="font-weight: 600">
    <span class="text-text mr-1"> Таблица ресурсов для рейда </span>
  </h3>

  <table class="bg-bg2 rounded-2xl">
    <Row
      v-for="item in raidData"
      :explosive="item"
      :key="item.name"
      :builds="builds"
    />
  </table>
</template>

<script setup>
import { computed, watch } from "vue";
import raidData from "@/data/raidData";
import buildsData from "@/data/buildsData";
//import { useI18n } from "vue-i18n";
import Row from "./Row.vue";
import { useBuildsStore } from "../store/buildsStore";
const buildsStore = useBuildsStore();

//var { t } = useI18n({ useScope: "global" });

const builds = computed(() =>
  buildsStore.builds.map((build) => {
    return { ...buildsData[build.id], count: build.count };
  })
);
</script>
