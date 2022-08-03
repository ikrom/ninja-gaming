<script>
	import Nav from '$lib/navbar.svelte';
	let title = 'ini title';
	const updateTitle = () => {
		title = 'update title';
	};
</script>

<div class="index">
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus soluta architecto vero sed
		necessitatibus culpa suscipit sapiente itaque, quae in saepe perferendis. Voluptate delectus ad,
		maxime repellendus error fugiat suscipit.
	</p>
	<button on:click={updateTitle}>Update</button>
	<input type="text" bind:value={title} />
	<Nav />
</div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
</style>
