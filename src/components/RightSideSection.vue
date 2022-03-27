<template>
	<div class="section">
		<h2>{{ title }}</h2>
		<slot />
	</div>
</template>

<script>
export default {
	name: "RightSideSection",
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
	margin-bottom: 50px;
}
.section:last-child
{
	@apply mb-0;
}

h2
{
	@apply font-bold uppercase;
	margin-bottom: 10px;
	color: #003147;
	letter-spacing: 1px;
}
</style>
