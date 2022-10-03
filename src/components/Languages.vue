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

<script setup>
import LeftSideSection from "./LeftSideSection.vue";
import LanguageItem from "./LanguageItem.vue";
</script>

<style scoped>

</style>
