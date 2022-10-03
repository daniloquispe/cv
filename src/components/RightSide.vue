<template>
	<div class="right-side">
		<ProfileDetail />
		<Experience />
		<Skills />
		<Interests />
	</div>
</template>

<script setup>
import ProfileDetail from "./ProfileDetail.vue";
import Experience from "./Experience.vue";
import Skills from "./Skills.vue";
import Interests from "./Interests.vue";
</script>

<style scoped>
.right-side
{
	@apply lg:col-span-2 print:col-span-2;
	@apply p-10 print:p-5;
	@apply bg-white;
}
</style>
