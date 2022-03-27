<template>
	<RightSideSection title="Experience">
		<ExperienceItem period="2021 - present" company-name="Bilingual S.A.C." title="Developer">
			<p>Development of integration software for Bilingual interpreters' information and productivity
				reports (web-based platform, REST API and Google Chrome extension).</p>
			<p>Integration with AWS and Pusher.</p>
		</ExperienceItem>
		<ExperienceItem period="2021" company-name="New Information Digital" title="Web Developer">
			<p>Modifications for Perumin website (custom CMS).</p>
		</ExperienceItem>
		<ExperienceItem period="2020 - 2021" company-name="Informática Delta S.A.C." title="PHP Developer">
			<p>Software development for finance/retail clients.</p>
			<p>Integration with AWS.</p>
			<p>Migration from old software versions (.NET platform and SQL Server)</p>
			<p>Junior programmers technical interview and selection.</p>
		</ExperienceItem>
		<ExperienceItem period="2017 - 2018" company-name="Corporación Efameinsa e Ingeniería S.A." title="Web programmer">
			<p>WordPress template customization and bugfixes (3d-party development)</p>
			<p>Migration from WordPress to OpenCart.</p>
			<p>Implementation of custom OpenCart theme.</p>
			<p>Webmaster.</p>
			<p>Tech support assistance.</p>
		</ExperienceItem>
		<ExperienceItem period="2012 - present" company-name="ISOL Perú: Soluciones en Internet" title="Web & Software Developer">
			<p>My own development business and commercial name</p>
			<p>Web development, hosting and domains.</p>
			<p>Clients training, help desk and remote technical support</p>
		</ExperienceItem>
	</RightSideSection>
</template>

<script>
import RightSideSection from "./RightSideSection.vue";
import ExperienceItem from "./ExperienceItem.vue";
export default {
	name: "Experience",
	components: {ExperienceItem, RightSideSection}
}
</script>

<style scoped>

</style>
