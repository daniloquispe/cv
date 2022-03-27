<template>
	<ul>
		<ContactItem icon="phone">+51 981 306 233</ContactItem>
		<ContactItem icon="envelope">hello@daniloquispe.dev</ContactItem>
		<ContactItem icon="globe">daniloquispe.dev</ContactItem>
		<ContactItem icon="linkedin">pe.linkedin.com/in/daniloquispe</ContactItem>
		<ContactItem icon="map-marker">Comas, Lima, Peru</ContactItem>
	</ul>
</template>

<script>
import ContactItem from "./ContactItem.vue";
export default {
	name: "ContactItems",
	components: {ContactItem}
}
</script>

<style scoped>

</style>
