<template>
	<li>
		<span class="icon"><span :class="'fas fa-' + icon" aria-hidden="true"></span></span>
		<span class="text"><slot /></span>
	</li>
</template>

<script>
export default {
	name: "ContactItem",
	props: {
		icon: {
			required: true
		}
	}
}
</script>

<style scoped>
li
{
	@apply relative;
	@apply cursor-pointer;
	margin: 10px 0;
}

.icon
{
	@apply inline-block;
	width: 30px;
	color: #03a9f4;
	font-size: 18px;
}

.text
{
	@apply text-white;
	font-weight: 300;
}
</style>
