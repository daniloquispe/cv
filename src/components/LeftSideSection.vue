<template>
	<div class="section">
		<h2>{{ title }}</h2>
		<slot />
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true
	}
});
</script>

<style scoped>
.section
{
	@apply pt-10 print:pt-8;
}

h2
{
	@apply text-white uppercase;
	@apply mb-5;
	@apply font-semibold tracking-wider;
}
</style>
