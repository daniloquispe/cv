<template>
	<div class="left-side">
		<!-- Profile -->
		<ProfileText />
		<!-- Contact info -->
		<LeftSideSection title="Contact Info">
			<ContactItems />
		</LeftSideSection>
		<!-- Education -->
		<LeftSideSection title="Education">
			<EducationItems />
		</LeftSideSection>
		<!-- Languages -->
		<LeftSideSection title="languages">
			<LanguageItems />
		</LeftSideSection>
	</div>
</template>

<script>
import ProfileText from "./ProfileText.vue";
import LeftSideSection from "./LeftSideSection.vue";
import ContactItems from "./ContactItems.vue";
import EducationItems from "./EducationItems.vue";
import LanguageItems from "./LanguageItems.vue";
export default {
	name: "LeftSide",
	components: {LanguageItems, EducationItems, ContactItems, LeftSideSection, ProfileText}
}
</script>

<style scoped>
.left-side
{
	@apply p-10;
	background: #003147;
}
</style>
