<template>
	<RightSideSection title="Experience">
		<ExperienceItem period="2021 - today" company-name="Bilingual S.A.C." title="Developer">
			<p>Development of integration software for Bilingual interpreters' information and productivity
				reports (web-based platform, REST API and Google Chrome extension).</p>
			<p>Integration with AWS and Pusher.</p>
			<p>Application testing and deployment.</p>
			<p>Employees training.</p>
			<p>User manuals and technical documentation</p>
		</ExperienceItem>
		<ExperienceItem period="2021" company-name="New Information Digital" title="Web Developer">
			<p>Modifications for Perumin website (custom CMS).</p>
		</ExperienceItem>
		<ExperienceItem period="2020 - 2021" company-name="Informática Delta S.A.C." title="PHP Developer">
			<p>Software development for finance/retail clients.</p>
			<p>Integration with AWS.</p>
			<p>Migration from desktop (legacy) software versions (Visual Basic .NET and SQL Server)</p>
			<p>Junior programmers technical interview and selection.</p>
		</ExperienceItem>
		<ExperienceItem period="2017 - 2018" company-name="Corporación Efameinsa e Ingeniería S.A." title="Web programmer">
			<p>WordPress theme customization, enhancements and bugfixes (3rd-party development)</p>
			<p>Migration from WordPress to OpenCart.</p>
			<p>OpenCart theme customizations.</p>
			<p>Webmaster.</p>
			<p>Tech support assistance.</p>
			<p>coordination with hosting and e-mail provider.</p>
		</ExperienceItem>
		<ExperienceItem period="2012 - today" company-name="ISOL Perú: Soluciones en Internet" title="Web & Software Developer">
			<p>My own development business and commercial name</p>
			<p>Web and software development, hosting and domains.</p>
			<p>Clients training, help desk and remote technical support</p>
			<p>Coordination with external suppliers (Spanish and English)</p>
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
