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
	@apply mb-12 print:mb-10;
}
.section:last-child
{
	@apply mb-0;
}

h2
{
	@apply mb-2.5;
	@apply font-bold uppercase tracking-wider;
	color: #003147;
	@apply dark:text-cyan-400;
}
</style>
