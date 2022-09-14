<template>
	<div class="box">
		<div class="year-company">
			<h3>{{ period }}</h3>
			<p>{{ companyName }}</p>
		</div>
		<div class="text">
			<p><strong>{{ title }}</strong></p>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "ExperienceItem",
	props: {
		period: {
			type: String,
			required: true
		},
		companyName: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		}
	}
}
</script>

<style scoped>
.box
{
	@apply md:flex md:flex-row;
	@apply mt-4;
}

.box .year-company
{
	@apply md:flex-none;
	width: 200px;
}

.box .year-company h3,
.box .year-company p
{
	@apply font-semibold;
	color: #848c90;
}

.box .text strong
{
	@apply uppercase;
	color: #2a7da2;
}
</style>
