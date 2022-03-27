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
	margin-bottom: 15px;
}

li h3
{
	color: #03a9f4;
	font-weight: 500;
}

li .title
{
	@apply text-white;
	font-weight: 500;
}

li .at
{
	@apply text-white;
	font-weight: 300;
}
</style>
