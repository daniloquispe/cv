<template>
	<RightSideSection title="Professional Skills">
		<SkillItem percent="75">GNU/Linux</SkillItem>
		<SkillItem percent="90">HTML 5</SkillItem>
		<SkillItem percent="80">CSS 3</SkillItem>
		<SkillItem percent="90">Bootstrap 3/4/5</SkillItem>
		<SkillItem percent="80">Tailwind CSS</SkillItem>
		<SkillItem percent="80">JavaScript</SkillItem>
		<SkillItem percent="40">Vue 2/3</SkillItem>
		<SkillItem percent="80">PHP 7/8</SkillItem>
		<SkillItem percent="80">Laravel 7/8</SkillItem>
		<SkillItem percent="60">MariaDB</SkillItem>
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
