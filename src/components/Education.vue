<template>
	<LeftSideSection title="Education">
		<ul>
			<EducationItem period="2021" at="Udemy">Vue + Firebase</EducationItem>
			<EducationItem period="2020" at="Udemy">Linux servers administration</EducationItem>
			<EducationItem period="2013 - 2014" at="SENATI">Android apps development</EducationItem>
			<EducationItem period="1999" at="SENATI">Applications Programmer</EducationItem>
			<EducationItem period="1998 - 2005" at="National University of San Marcos">Bachelor Degree in Systems Engineering</EducationItem>
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
