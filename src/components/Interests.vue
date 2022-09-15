<template>
	<RightSideSection title="Interests">
		<ul>
			<InterestItem icon="gamepad">Videogames</InterestItem>
			<InterestItem icon="microphone">Karaoke</InterestItem>
			<InterestItem icon="film">Movies</InterestItem>
			<InterestItem icon="book-open">Reading</InterestItem>
			<InterestItem icon="pen">Writing</InterestItem>
			<InterestItem icon="bicycle">Biking</InterestItem>
			<InterestItem icon="person-swimming">Swimming</InterestItem>
			<InterestItem icon="camera">Photography</InterestItem>
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
	@apply print:grid-cols-4;
}
</style>
