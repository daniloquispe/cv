<template>
	<LeftSideSection title="Contact Info">
		<ul>
			<ContactItem icon="phone">{{ phone }}</ContactItem>
			<ContactItem icon="envelope">{{ email }}</ContactItem>
			<ContactItem icon="globe">{{ website }}</ContactItem>
			<ContactItem :icon="['fab', 'linkedin-in']">{{ linkedInProfile }}</ContactItem>
			<ContactItem :icon="['fab', 'github']">{{ githubRepo }}</ContactItem>
			<ContactItem icon="map-marker">{{ address }}</ContactItem>
		</ul>
	</LeftSideSection>
</template>

<script>
import ContactItem from "./ContactItem.vue";
import LeftSideSection from "./LeftSideSection.vue";
export default {
	name: "ContactInfo",
	components: {LeftSideSection, ContactItem},
	data()
	{
		return {
			title: 'Contact info',
			phone: '+51 981 306 233',
			email: 'dql@daniloquispe.dev',
			website: 'daniloquispe.dev',
			githubRepo: 'github.com/daniloquispe',
			linkedInProfile: 'linkedin.com/in/daniloquispe',
			address: 'Comas, Lima, Peru'
		};
	}
}
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
