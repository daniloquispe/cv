<template>
	<div class="box">
		<h3><slot /></h3>
		<div class="percent">
			<div :style="'width: ' + percent + '%'" />
		</div>
	</div>
</template>

<script>
export default {
	name: "SkillItem",
	props: {
		percent: {
			type: Number,
			default: 100
		}
	}
}
</script>

<style scoped>
.box
{
	@apply relative;
	@apply grid justify-center items-center;
	@apply w-full;
	grid-template-columns: 150px 1fr;
}

.box h3
{
	@apply uppercase;
	color: #848c99;
	font-weight: 500;
}

.box .percent
{
	@apply relative;
	@apply w-full;
	height: 10px;
	background: #f0f0f0;
}

.box .percent > div
{
	@apply absolute top-0 left-0;
	@apply h-full;
	background: #03a9f4;
}

@media (max-width: 600px)
{
	.box
	{
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
