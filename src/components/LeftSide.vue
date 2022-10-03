<template>
	<div class="left-side">
		<ProfileText />
		<ContactInfo />
		<Education />
		<Languages />
	</div>
</template>

<script setup>
import ProfileText from "./ProfileText.vue";
import ContactInfo from "./ContactInfo.vue";
import Education from "./Education.vue";
import Languages from "./Languages.vue";
</script>

<style scoped>
.left-side
{
	@apply p-10 print:p-5;
	background: #003147;
}
</style>
