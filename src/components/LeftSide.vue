<template>
	<div class="left-side">
		<ProfileText />
		<ContactInfo />
		<Education />
		<Languages />
	</div>
</template>

<script>
import ProfileText from "./ProfileText.vue";
import ContactInfo from "./ContactInfo.vue";
import Education from "./Education.vue";
import Languages from "./Languages.vue";
export default {
	name: "LeftSide",
	components: {Languages, Education, ContactInfo, ProfileText}
}
</script>

<style scoped>
.left-side
{
	@apply p-10;
	background: #003147;
}
</style>
