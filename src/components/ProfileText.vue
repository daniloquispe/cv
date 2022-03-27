<template>
	<div class="profile-text">
		<div class="image">
			<img src="https://placekitten.com/200/200" :alt="fullName" />
		</div>
		<h1>{{ fullName }}</h1>
		<p>{{ jobTitle }}</p>
	</div>
</template>

<script>
export default {
	name: "ProfileText",
	data()
	{
		return {
			fullName: 'Danilo Alejandro Quispe Lucana',
			jobTitle: 'Web Developer',
		};
	}
}
</script>

<style scoped>
.profile-text
{
	@apply relative;
	@apply flex flex-col items-center;
	padding-bottom: 20px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.image
{
	@apply relative;
	@apply rounded-full;
	@apply overflow-hidden;
	width: 200px;
	height: 200px;
}

.image img
{
	@apply absolute top-0 left-0;
	@apply w-full h-full;
	@apply object-cover;
}

h1
{
	@apply text-2xl text-center text-white uppercase;
	font-weight: 600;
	margin-top: 20px;
}

h1 + p
{
	@apply text-sm text-center text-white uppercase;
}
</style>
