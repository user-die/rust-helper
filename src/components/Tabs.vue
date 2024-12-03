<template>
	<!-- 

  <nav>
    <ul class="flex gap-3 mt-1 justify-center">
      <Tab
        v-for="tab in tabs"
        :key="tab.title"
        :title="tab.title"
        @tabClick="activeTab = tab.title"
      >
      </Tab>
    </ul>
  </nav>
   -->
	<transition name="fade">
		<component :is="tabs.find((tab) => tab.title === activeTab)?.component" />
	</transition>
</template>

<script setup>
import Tab from "./Tab.vue";
import RaidInfo from "../pages/raidInfo.vue";
import Monuments from "../pages/Monuments.vue";
import { ref, watch } from "vue";

const tabs = [
	{
		title: "Калькулятор рейда",
		component: RaidInfo,
	},
	{ title: "Монументы", component: Monuments },
];

const activeTab = ref("Калькулятор рейда");
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
