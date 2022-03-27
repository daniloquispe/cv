<template>
	<div class="section">
		<h2>{{ title }}</h2>
		<slot />
	</div>
</template>

<script>
export default {
	name: "LeftSideSection",
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
.section
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
</style>
