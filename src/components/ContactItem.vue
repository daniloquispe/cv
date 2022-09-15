<template>
	<li>
		<a :href="linkTo" :target="linkTo !== '#' ? '_blank' : '_self'">
			<span class="icon">
				<font-awesome-icon :icon="icon" size="lg" fixed-width />
			</span>
			<span class="text"><slot /></span>
		</a>
	</li>
</template>

<script setup>
defineProps({
	icon: {
		type: [String, Array],
		required: true
	},
	linkTo: {
		type: String,
		default: '#'
	}
});
</script>

<style scoped>
li
{
	@apply my-2;
	@apply cursor-pointer;
}

.icon
{
	@apply inline-block;
	@apply mr-2;
	color: #03a9f4;
}

.text
{
	@apply font-light text-white;
}
</style>
