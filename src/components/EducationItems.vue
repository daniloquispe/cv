<template>
	<ul>
		<EducationItem period="1998 - 2005" at="Universidad Nacional Mayor de San Marcos">Bachelor Degree in Systems Engineering</EducationItem>
		<EducationItem period="1998 - 2005" at="SENATI">Applications Programmer</EducationItem>
	</ul>
</template>

<script>
import EducationItem from "./EducationItem.vue";
export default {
	name: "EducationItems",
	components: {EducationItem}
}
</script>

<style scoped>

</style>
