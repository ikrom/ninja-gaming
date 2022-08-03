<script context="module">
	import { page } from '$app/stores';

	export async function load({ fetch, params }) {
		const id = params.id;
		console.log(id);
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const guide = await res.json();

		if (res.ok) {
			return {
				props: {
					guide
				}
			};
		}
		return {
			status: 301,
			redirect: '/guide'
		};
	}
</script>

<script>
	export /**
	 * @type {{ title: any; body: any; }}
	 */
	let guide;
</script>

<div class="guide">
	<h2>{guide.title}</h2>
	<p>{guide.body}</p>
</div>

<style>
	.guide {
		margin-top: 40px;
		padding: 10px;
		border: 1px dotted rgba(255, 255, 255, 0.2);
	}
</style>
