<template>
	<div class="profile-text">
		<div class="image">
			<img src="@/assets/photo.jpg" alt="Danilo Alejandro Quispe Lucana" />
		</div>
		<h1>Danilo Alejandro<br />Quispe Lucana</h1>
		<p>Fullstack Web Developer</p>
		<div class="buttonbar">
			<button type="button" @click="printDialog">
				<font-awesome-icon icon="print" /> Print
			</button>
		</div>
	</div>
</template>

<script setup>
function printDialog()
{
	window.print();
}
</script>

<style scoped>
.profile-text
{
	@apply flex flex-col items-center;
	@apply pb-5;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.image
{
	@apply rounded-full;
	@apply overflow-hidden;
	width: 200px;
	height: 200px;
}

.image img
{
	@apply w-full h-full;
	@apply object-cover;
}

h1
{
	@apply text-2xl text-center text-white uppercase;
	@apply mt-5 mb-2;
	@apply font-semibold;
}

h1 + p
{
	@apply text-sm text-center text-white uppercase;
}

.buttonbar
{
	@apply mt-5;
	@apply print:hidden;
}

.buttonbar button
{
	@apply inline-block;
	@apply mx-2 px-5 py-2;
	@apply rounded;
	@apply bg-[#ffffff11] hover:bg-[#ffffff22];
	@apply text-white;
	@apply transition-colors;
}
</style>
