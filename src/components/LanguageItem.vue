<template>
	<li>
		<span class="name"><slot /></span>
		<span class="percent">
			<span :style="'width: ' + percent + '%'"></span>
		</span>
	</li>
</template>

<script>
export default {
	name: "LanguageItem",
	props: {
		percent: {
			type: Number,
			default: 100,
		}
	}
}
</script>

<style scoped>
li
{
	margin-bottom: 15px;
}

.name
{
	@apply text-white;
}

.percent
{
	@apply relative;
	@apply block w-full;
	height: 6px;
	margin-top: 5px;
	background: #081921;
}

.percent > span
{
	@apply absolute top-0 left-0;
	@apply block h-full;
	background: #03a9f4;
}
</style>
