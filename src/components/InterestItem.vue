<template>
	<li>
		<span :class="'fas fa-fw fa-' + icon"></span>
		<slot />
	</li>
</template>

<script>
export default {
	name: "InterestItem",
	props: {
		icon: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
li
{
	@apply mt-1;
	@apply font-semibold;
	color: #333;
}

li > span
{
	@apply mr-2;
	@apply text-lg;
	color: #03a9f4;
}
</style>
