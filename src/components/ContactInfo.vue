<template>
	<div class="contact-info">
		<h2>{{ title }}</h2>
		<ul>
			<ContactItem icon="phone">{{ phone }}</ContactItem>
			<ContactItem icon="envelope">{{ email }}</ContactItem>
			<ContactItem icon="globe">{{ website }}</ContactItem>
			<ContactItem icon="linkedin">{{ linkedInProfile }}</ContactItem>
			<ContactItem icon="map-marker">{{ address }}</ContactItem>
		</ul>
	</div>
</template>

<script>
import ContactItem from "./ContactItem.vue";
export default {
	name: "ContactInfo",
	components: {ContactItem},
	data()
	{
		return {
			title: 'Contact info',
			phone: '+51 981 306 233',
			email: 'daniloquispe@gmail.com',
			website: 'daniloquispe.dev',
			linkedInProfile: 'linkedin.com/in/daniloquispe',
			address: 'Comas, Lima, Perú'
		};
	}
}
</script>

<style scoped>
.contact-info
{
	padding-top: 40px;
}

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
