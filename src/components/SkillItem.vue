<template>
	<div class="box">
		<h3><slot /></h3>
		<div class="percent">
			<div :style="'width: ' + percent + '%'" />
		</div>
	</div>
</template>

<script setup>
defineProps({
	percent: {
		default: 100
	}
});
</script>

<style scoped>
.box h3
{
	@apply font-semibold uppercase;
	color: #848c99;
}

.box .percent
{
	@apply relative;
	@apply w-full h-2.5;
/*	background: #f0f0f0;*/
}

.box .percent > div
{
	@apply absolute top-0 left-0;
	@apply h-full;
/*	background: #03a9f4;*/
}

@media screen
{
	.box .percent
	{
		background: #f0f0f0;
	}

	.box .percent > div
	{
		background: #03a9f4
	}
}

@media screen(sm)
{
	.box
	{
		@apply grid justify-center items-center;
		@apply w-full;
		grid-template-columns: 200px 1fr;
	}
}

@media print
{
	.box
	{
		grid-template-columns: 130px 1fr;
	}
	.box .percent > div
	{
		@apply mt-1 border-t-4 border-solid;
		border-color: #03a9f4;
	}
}
</style>
