<script setup>
import LeftSide from "./components/LeftSide.vue";
import RightSide from "./components/RightSide.vue";
</script>

<template>
	<div class="app-container">
		<LeftSide />
		<RightSide />
	</div>
</template>

<style>
@import './assets/base.css';

.app-container
{
	@apply container;
	@apply lg:grid lg:grid-cols-3;
	@apply m-1 lg:m-12;
	@apply bg-white;
	box-shadow: 0 35px 35px rgba(0, 0, 0, 0.1);
}
</style>
