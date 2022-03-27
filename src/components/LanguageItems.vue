<template>
	<ul>
		<LanguageItem>Spanish</LanguageItem>
		<LanguageItem percent="80">English</LanguageItem>
		<LanguageItem percent="30">Portuguese</LanguageItem>
		<LanguageItem percent="75">Sign language</LanguageItem>
	</ul>
</template>

<script>
import LanguageItem from "./LanguageItem.vue";
export default {
	name: "LanguageItems",
	components: {LanguageItem}
}
</script>

<style scoped>

</style>
