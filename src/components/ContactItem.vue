<template>
	<li>
		<span class="icon"><span :class="'fas fa-fw fa-' + icon" aria-hidden="true"></span></span>
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
	@apply my-2;
	@apply cursor-pointer;
}

.icon
{
	@apply inline-block;
	@apply mr-2;
	@apply text-lg;
	color: #03a9f4;
}

.text
{
	@apply font-light text-white;
}
</style>
