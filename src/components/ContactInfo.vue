<template>
	<LeftSideSection title="Contact Info">
		<ul>
			<ContactItem icon="phone">{{ phone }}</ContactItem>
			<ContactItem icon="envelope" :link-to="'mailto:' + email">{{ email }}</ContactItem>
			<ContactItem icon="globe" :link-to="'https://' + website">{{ website }}</ContactItem>
			<ContactItem :icon="['fab', 'linkedin-in']" :link-to="'https://' + linkedInProfile">{{ linkedInProfile }}</ContactItem>
			<ContactItem :icon="['fab', 'github']" :link-to="'https://' + githubRepo">{{ githubRepo }}</ContactItem>
			<ContactItem icon="map-marker">{{ location }}</ContactItem>
		</ul>
	</LeftSideSection>
</template>

<script setup>
import ContactItem from "./ContactItem.vue";
import LeftSideSection from "./LeftSideSection.vue";

const phone = '+51 981 306 233';
const email = 'dql@daniloquispe.dev';
const website = 'daniloquispe.dev';
const githubRepo = 'github.com/daniloquispe';
const linkedInProfile = 'linkedin.com/in/daniloquispe';
const location = 'Comas, Lima, Peru';
</script>

<style scoped>
h2
{
	@apply text-white uppercase;
	margin-bottom: 20px;
	font-weight: 600;
	letter-spacing: 1px;
}

ul
{
	@apply relative;
}
</style>
