<template>
<div class="right-side">
	<!-- Profile -->
	<RightSideSection title="Profile">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget orci sed purus ultricies vulputate eget a ligula. Praesent egestas convallis elit, vel malesuada felis. Cras eget quam eu massa cursus euismod sed pretium eros. Pellentesque a vehicula odio. Nunc nec vehicula neque, eu fermentum felis.</p>
		<p>Donec fringilla leo quis vulputate euismod. Nullam tincidunt lobortis varius. Fusce a sagittis tellus. Nam egestas eros in velit blandit, eu convallis felis efficitur. Morbi ultricies venenatis euismod. Aenean venenatis mauris et tincidunt iaculis.</p>
	</RightSideSection>
	<!-- Experience -->
	<RightSideSection title="Experience">
		<ExperienceItem period="2019 - present" company-name="Company name" title="Senior UX Designer">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget orci sed purus ultricies vulputate eget a ligula. Praesent egestas convallis elit, vel malesuada felis. Cras eget quam eu massa cursus euismod sed pretium eros. Pellentesque a vehicula odio. Nunc nec vehicula neque, eu fermentum felis.</p>
		</ExperienceItem>
		<ExperienceItem period="2016 - 2019" company-name="Company name" title="UX/UI Designer">
			<p>Donec fringilla leo quis vulputate euismod. Nullam tincidunt lobortis varius. Fusce a sagittis tellus. Nam egestas eros in velit blandit, eu convallis felis efficitur. Morbi ultricies venenatis euismod. Aenean venenatis mauris et tincidunt iaculis.</p>
		</ExperienceItem>
	</RightSideSection>
	<!-- Professional skills -->
	<RightSideSection title="Professional Skills">
		<SkillItem>HTML</SkillItem>
		<SkillItem>CSS</SkillItem>
		<SkillItem>JavaScript</SkillItem>
		<SkillItem>PHP</SkillItem>
		<SkillItem percent="60">MariaDB</SkillItem>
		<SkillItem percent="75">Linux</SkillItem>
	</RightSideSection>
	<!-- Interests -->
	<RightSideSection title="Interests">
		<InterestItems />
	</RightSideSection>
</div>
</template>

<script>
import RightSideSection from "./RightSideSection.vue";
import ExperienceItem from "./ExperienceItem.vue";
import SkillItem from "./SkillItem.vue";
import InterestItems from "./InterestItems.vue";
export default {
	name: "RightSide",
	components: {InterestItems, SkillItem, ExperienceItem, RightSideSection}
}
</script>

<style scoped>
.right-side
{
	@apply lg:col-span-2;
	@apply p-10;
	@apply bg-white;
}
p
{
	@apply mb-4;
	color: #333;
}
</style>
