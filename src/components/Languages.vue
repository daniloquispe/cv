<template>
	<LeftSideSection title="languages">
		<ul>
			<LanguageItem>Spanish</LanguageItem>
			<LanguageItem percent="80">English</LanguageItem>
			<LanguageItem percent="30">Portuguese</LanguageItem>
			<LanguageItem percent="75">Sign language</LanguageItem>
		</ul>
	</LeftSideSection>
</template>

<script>
import LeftSideSection from "./LeftSideSection.vue";
import LanguageItem from "./LanguageItem.vue";
export default {
	name: "Languages",
	components: {LanguageItem, LeftSideSection}
}
</script>

<style scoped>

</style>
