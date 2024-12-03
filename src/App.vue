<template>
	<Tabs />
</template>

<script setup>
import Tabs from "./components/Tabs.vue";
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
	margin: 0;
	padding: 0;
	font-size: 20px;
	font-family: "Work Sans", sans-serif;
}

html,
body {
	height: 100%;
}

body::-webkit-scrollbar {
	width: 6px;
	background-color: #212529;
}
body::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-color: #00489b;
}
</style>
