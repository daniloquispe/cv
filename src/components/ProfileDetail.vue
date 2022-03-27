<template>
	<RightSideSection title="Profile">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget orci sed purus ultricies vulputate eget a ligula. Praesent egestas convallis elit, vel malesuada felis. Cras eget quam eu massa cursus euismod sed pretium eros. Pellentesque a vehicula odio. Nunc nec vehicula neque, eu fermentum felis.</p>
		<p>Donec fringilla leo quis vulputate euismod. Nullam tincidunt lobortis varius. Fusce a sagittis tellus. Nam egestas eros in velit blandit, eu convallis felis efficitur. Morbi ultricies venenatis euismod. Aenean venenatis mauris et tincidunt iaculis.</p>
	</RightSideSection>
</template>

<script>
import RightSideSection from "./RightSideSection.vue";
export default {
	name: "ProfileDetail",
	components: {RightSideSection}
}
</script>

<style scoped>
p
{
	@apply mb-4;
	color: #333;
}
p:last-child
{
	@apply mb-0;
}
</style>
