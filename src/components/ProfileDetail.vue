<template>
	<RightSideSection title="Profile">
		<p>I have experience in web design and development for all-size organizations and business sectors, CMS and
			enterprise information systems (ERPs) in desktop, client/server or Web environments. Software skills
			acquired by self-learning (PHP, MySQL/MariaDB, GIMP, Inkscape, hosting and Web servers management).</p>
		<p>Experienced in software development project teams, including new members selection, skills evaluation and
			workflow planning. Experienced in direct client assistance, tech support, using remote tools (phone call,
			e-mail, tickets systems and/or remote-control software such as AnyDesk, TeamViewer, Remmina or similar).</p>
	</RightSideSection>
</template>

<script setup>
import RightSideSection from "./RightSideSection.vue";
</script>

<style scoped>
p
{
	@apply mb-4;
	color: #333;
	@apply dark:text-gray-300;
}
p:last-child
{
	@apply mb-0;
}
</style>
