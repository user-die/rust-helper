<template>
  <li class="flex flex-col gap-1 justify-between text-text w-32 lg:w-40">
    <img
      :src="buildImages[build.id]"
      alt=""
      class="bg-bg3 p-1 rounded-2xl h-36 w-36"
    />
    <p class="w-32 lg:w-40 text-center">{{ build.name }}</p>

    <div
      class="flex font-bold text-2xl justify-center items-center gap-3 text-white"
    >
      <button
        class="py-1 px-3 bg-blue bg-opacity-80 rounded-xl"
        @click="buildsStore.decrementCount(props.id)"
      >
        -
      </button>
      <span>{{ props.count }}</span>
      <button
        class="py-1 font-bold px-3 bg-blue bg-opacity-80 rounded-xl"
        @click="buildsStore.incrementCount(props.id)"
      >
        +
      </button>
    </div>
  </li>
</template>

<script setup>
import { buildImages } from "@/data/images";
import buildsData from "@/data/buildsData";
import { useBuildsStore } from "../store/buildsStore";

const buildsStore = useBuildsStore();

const props = defineProps({
  id: Number,
  count: Number,
});

const build = buildsData[props.id];
</script>
