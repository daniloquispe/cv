<template>
	<RightSideSection title="Interests">
		<ul>
			<InterestItem icon="gamepad">Gaming</InterestItem>
			<InterestItem icon="microphone">Singing</InterestItem>
			<InterestItem icon="book">Reading</InterestItem>
			<InterestItem icon="utensils">Cooking</InterestItem>
		</ul>
	</RightSideSection>
</template>

<script>
import RightSideSection from "./RightSideSection.vue";
import InterestItem from "./InterestItem.vue";
export default {
	name: "Interests",
	components: {InterestItem, RightSideSection}
}
</script>

<style scoped>
ul
{
	@apply sm:grid sm:grid-cols-2;
	@apply lg:grid-cols-4;
}
</style>
