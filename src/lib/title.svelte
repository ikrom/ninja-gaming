<script>
	export let title = 'This is title';
</script>

<div class="title">
	<img src="/icon.png" alt="site logo" />
	<h1>{title}</h1>
</div>

<style>
	.title {
		display: flex;
	}
	.title img {
		display: inline-block;
		filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
		max-width: 72px;
	}
	.title h1 {
		margin-left: 10px;
	}
</style>
