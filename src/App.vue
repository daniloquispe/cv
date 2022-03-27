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
	@apply grid;
	grid-template-columns: 1fr 2fr;
	@apply relative;
	@apply w-full;
	@apply bg-white;
	margin: 50px;
	max-width: 1000px;
	min-width: 100px;
	box-shadow: 0 35px 35px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1000px)
{
	.app-container
	{
		margin: 10px;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
