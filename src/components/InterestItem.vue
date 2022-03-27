<template>
	<li>
		<span :class="'fas fa-' + icon"></span>
		<slot />
	</li>
</template>

<script>
export default {
	name: "InterestItem",
	props: {
		icon: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
li
{
	color: #333;
	font-weight: 500;
	margin: 10px 0;
}

li > span
{
	width: 28px;
	color: #03a9f4;
	font-size: 18px;
}
</style>
