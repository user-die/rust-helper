<template>
  <tr
    class="p-2 grid grid-rows-2 grid-cols-5 md:grid-rows-1 md:grid-cols-[repeat(9,_70px)] lg:grid-cols-[repeat(9,_100px)] items-center lg:justify-items-center gap-y-2 gap-x-4 sm:gap-10 md:gap-2 text-text"
  >
    <td
      class="row-span-2 lg:row-span-1 flex flex-col items-center gap-1 relative"
    >
      <img :src="explosivesImages[explosive.id]" alt="" class="h-14 w-14" />
      <span class="absolute -bottom-2 -right-2 text-red font-bold"
        >x{{ props.explosive.count.toLocaleString("ru") }}</span
      >

      <!-- <span class="text-center text-md block lg:hidden">{{
        props.explosive.name
      }}</span>-->
    </td>

    <td class="flex flex-col items-center gap-1">
      <img
        :src="benchsImages[props.explosive.workbenchLevel - 1]"
        alt=""
        class="h-8 sm:h-10 md:h-14"
      />
      <span class="text-sm lg:text-lg">{{
        props.explosive.workbenchLevel
      }}</span>
    </td>

    <td class="flex flex-col items-center gap-1">
      <img
        src="../assets/resources/scrap.png"
        alt=""
        class="h-8 sm:h-10 md:h-14"
      />
      <span class="text-sm lg:text-lg">
        {{ props.explosive.totalScrap.toLocaleString("ru") }}</span
      >
    </td>

    <td class="flex flex-col items-center gap-1">
      <img
        src="../assets/resources/sulfur.png"
        alt=""
        class="h-8 sm:h-10 md:h-14"
      />
      <span class="text-sm lg:text-lg">{{
        (props.explosive.sulfur * props.explosive.count).toLocaleString("ru")
      }}</span>
    </td>

    <td class="flex flex-col items-center gap-1">
      <img
        src="../assets/resources/charcoal.png"
        alt=""
        class="h-8 sm:h-10 md:h-14"
      />
      <span class="text-sm lg:text-lg">{{
        (props.explosive.charcoal * props.explosive.count).toLocaleString("ru")
      }}</span>
    </td>

    <td
      class="flex flex-col items-center gap-1"
      v-for="res in props.explosive.calcResources()"
    >
      <img
        :src="resourcesImages[Object.keys(res)[0]]"
        alt=""
        class="h-8 sm:h-10 md:h-14"
      />
      <span class="text-sm lg:text-lg">
        {{ Object.values(res)[0].toLocaleString("ru") }}</span
      >
    </td>
  </tr>
</template>

<script setup>
import { watch } from "vue";
import { explosivesImages, resourcesImages, benchsImages } from "@/data/images";

const props = defineProps({
  explosive: Object,
  builds: Array,
});

watch(props, () => {
  props.explosive.calcCount(props.builds);
});
</script>

<style>
tr:not(:last-child) {
  border-bottom: 2px solid #33363d;
}
</style>
