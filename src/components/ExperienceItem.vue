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
	@apply flex flex-row;
	margin: 20px 0 0;
}

.box .year-company
{
	min-width: 150px;
}

.box .year-company h3,
.box .year-company p
{
	@apply uppercase;
	color: #848c90;
	font-weight: 600;
}

.box .text strong
{
	@apply uppercase;
	color: #2a7da2;
	font-size: 16px;
}

@media (max-width: 600px)
{
	.box
	{
		@apply flex-col;
	}
}
</style>
