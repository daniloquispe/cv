<template>
	<ul>
		<InterestItem icon="gamepad">Gaming</InterestItem>
		<InterestItem icon="microphone">Singing</InterestItem>
		<InterestItem icon="book">Reading</InterestItem>
		<InterestItem icon="utensils">Cooking</InterestItem>
	</ul>
</template>

<script>
import InterestItem from "./InterestItem.vue";
export default {
	name: "InterestItems",
	components: {InterestItem}
}
</script>

<style scoped>
ul
{
	@apply grid;
	grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1000px)
{
	ul
	{
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 600px)
{
	ul
	{
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
