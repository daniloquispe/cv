<template>
	<li>
		<span>
			<font-awesome-icon :icon="icon" size="lg" fixed-width />
		</span>
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
	color: #03a9f4;
}
</style>
