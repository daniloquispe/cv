<template>
	<RightSideSection title="Experience">
		<ExperienceItem period="2019 - present" company-name="Company name" title="Senior UX Designer">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget orci sed purus ultricies vulputate eget a ligula. Praesent egestas convallis elit, vel malesuada felis. Cras eget quam eu massa cursus euismod sed pretium eros. Pellentesque a vehicula odio. Nunc nec vehicula neque, eu fermentum felis.</p>
		</ExperienceItem>
		<ExperienceItem period="2016 - 2019" company-name="Company name" title="UX/UI Designer">
			<p>Donec fringilla leo quis vulputate euismod. Nullam tincidunt lobortis varius. Fusce a sagittis tellus. Nam egestas eros in velit blandit, eu convallis felis efficitur. Morbi ultricies venenatis euismod. Aenean venenatis mauris et tincidunt iaculis.</p>
		</ExperienceItem>
	</RightSideSection>
</template>

<script>
import RightSideSection from "./RightSideSection.vue";
import ExperienceItem from "./ExperienceItem.vue";
export default {
	name: "Experience",
	components: {ExperienceItem, RightSideSection}
}
</script>

<style scoped>

</style>
