<template>
<div class="right-side">
	<!-- Profile -->
	<ProfileDetail />
	<!-- Experience -->
	<Experience />
	<!-- Professional skills -->
	<Skills />
	<!-- Interests -->
	<Interests />
</div>
</template>

<script>
import RightSideSection from "./RightSideSection.vue";
import ProfileDetail from "./ProfileDetail.vue";
import Experience from "./Experience.vue";
import Skills from "./Skills.vue";
import Interests from "./Interests.vue";
export default {
	name: "RightSide",
	components: {Interests, Skills, Experience, ProfileDetail, RightSideSection}
}
</script>

<style scoped>
.right-side
{
	@apply lg:col-span-2;
	@apply p-10;
	@apply bg-white;
}
</style>
