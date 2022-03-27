<template>
	<RightSideSection title="Professional Skills">
		<SkillItem>HTML</SkillItem>
		<SkillItem>CSS</SkillItem>
		<SkillItem>JavaScript</SkillItem>
		<SkillItem>PHP</SkillItem>
		<SkillItem percent="60">MariaDB</SkillItem>
		<SkillItem percent="75">Linux</SkillItem>
	</RightSideSection>
</template>

<script>
import RightSideSection from "./RightSideSection.vue";
import SkillItem from "./SkillItem.vue";
export default {
	name: "Skills",
	components: {SkillItem, RightSideSection}
}
</script>

<style scoped>

</style>
