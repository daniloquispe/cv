<template>
	<div class="right-side">
		<ProfileDetail />
		<Experience />
		<Skills />
		<Interests />
	</div>
</template>

<script>
import ProfileDetail from "./ProfileDetail.vue";
import Experience from "./Experience.vue";
import Skills from "./Skills.vue";
import Interests from "./Interests.vue";
export default {
	name: "RightSide",
	components: {Interests, Skills, Experience, ProfileDetail}
}
</script>

<style scoped>
.right-side
{
	@apply lg:col-span-2 print:col-span-2;
	@apply p-10 print:p-5;
	@apply bg-white;
}
</style>
