document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#form').addEventListener('submit', function (e) {
		e.preventDefault();

		const category = document.querySelector('#category').value;
		const title = document.querySelector('#title').value;
		const subtitle = document.querySelector('#subtitle').value;

		if (!category.trim() || !title.trim() || !subtitle.trim()) {
			return;
		}

		const params = new URLSearchParams({ category, title, subtitle });
		const url = `fakefobae/pages/result.html?${params.toString()}`;
		window.open(url, '_blank');
	});
});
