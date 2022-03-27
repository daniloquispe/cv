<template>
	<div class="left-side">
		<!-- Profile -->
		<ProfileText />
		<!-- Contact info -->
		<LeftSideSection title="Contact Info">
			<ContactItems>
				<ContactItem icon="phone">+51 981 306 233</ContactItem>
				<ContactItem icon="envelope">hello@daniloquispe.dev</ContactItem>
				<ContactItem icon="globe">daniloquispe.dev</ContactItem>
				<ContactItem icon="linkedin">pe.linkedin.com/in/daniloquispe</ContactItem>
				<ContactItem icon="map-marker">Comas, Lima, Peru</ContactItem>
			</ContactItems>
		</LeftSideSection>
		<!-- Education -->
		<LeftSideSection title="Education">
			<ul>
				<EducationItem period="1998 - 2005" at="Universidad Nacional Mayor de San Marcos">Bachelor Degree in Systems Engineering</EducationItem>
				<EducationItem period="1998 - 2005" at="SENATI">Applications Programmer</EducationItem>
			</ul>
		</LeftSideSection>
		<!-- Languages -->
		<LeftSideSection title="languages">
			<ul>
				<LanguageItem>Spanish</LanguageItem>
				<LanguageItem percent="80">English</LanguageItem>
				<LanguageItem percent="30">Portuguese</LanguageItem>
				<LanguageItem percent="75">Sign language</LanguageItem>
			</ul>
		</LeftSideSection>
	</div>
</template>

<script>
import ProfileText from "./ProfileText.vue";
import LeftSideSection from "./LeftSideSection.vue";
import ContactItem from "./ContactItem.vue";
import ContactItems from "./ContactItems.vue";
import EducationItem from "./EducationItem.vue";
import LanguageItem from "./LanguageItem.vue";
export default {
	name: "LeftSide",
	components: {LanguageItem, EducationItem, ContactItems, ContactItem, LeftSideSection, ProfileText}
}
</script>

<style scoped>
.left-side
{
	@apply p-10;
	background: #003147;
}
</style>
