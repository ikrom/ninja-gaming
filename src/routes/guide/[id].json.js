export async function GET({ params }) {
	const guides = [
		{ id: 1, title: 'Some Title', body: 'Some Body' },
		{ id: 2, title: 'Some Title 2', body: 'Some Body' },
		{ id: 3, title: 'Some Title 3', body: 'Some Body' },
		{ id: 4, title: 'Some Title 4', body: 'Some Body' },
		{ id: 5, title: 'Some Title 5', body: 'Some Body' }
	];
	const guide = guides.find((g) => g.id == params.id);
	if (guide) {
		return {
			status: 200,
			body: guide
		};
	}
	return {
		status: 404
	};
}
