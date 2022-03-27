<template>
	<LeftSideSection title="Education">
		<ul>
			<EducationItem period="1998 - 2005" at="Universidad Nacional Mayor de San Marcos">Bachelor Degree in Systems Engineering</EducationItem>
			<EducationItem period="1998 - 2005" at="SENATI">Applications Programmer</EducationItem>
		</ul>
	</LeftSideSection>
</template>

<script>
import LeftSideSection from "./LeftSideSection.vue";
import EducationItem from "./EducationItem.vue";
export default {
	name: "Education",
	components: {EducationItem, LeftSideSection}
}
</script>

<style scoped>

</style>
