<template>
	<li>
		<h3 class="period">{{ period }}</h3>
		<p class="title"><slot /></p>
		<p class="at">{{ at }}</p>
	</li>
</template>

<script>
export default {
	name: "EducationItem",
	props: {
		period: {
			type: String,
			required: true
		},
		at: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
li
{
	@apply mb-4;
}

li h3
{
	@apply font-semibold;
	color: #03a9f4;
}

li .title
{
	@apply font-semibold text-white;
}

li .at
{
	@apply text-white;
}
</style>
