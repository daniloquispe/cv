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
			default: 100,
		}
	}
}
</script>

<style scoped>
li
{
	@apply mb-4;
}

.name
{
	@apply text-white;
}

.percent
{
	@apply relative;
	@apply block w-full h-1.5;
	@apply mt-1.5;
	background: #081921;
}

.percent > span
{
	@apply absolute top-0 left-0;
	@apply block h-full;
	background: #03a9f4;
}
</style>
