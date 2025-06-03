//?category=categoria&title=titulo&subtitle=subtitulo

document.addEventListener('DOMContentLoaded', () => {
	const url = new URL(window.location.href);
	const category = url.searchParams.get('category') || 'La categoría';
	const title = url.searchParams.get('title') || 'El título';
	const subtitle = url.searchParams.get('subtitle') || 'El subtitulo';

	document.querySelector('#category > span').textContent = category;
	document.querySelector('#title').textContent = title;
	document.querySelector('#subtitle').textContent = subtitle;

	const createdDate = new Date(new Date().getTime() - 60 * 60 * 1000);
	const updatedDate = new Date(createdDate.getTime() + 30 * 60 * 1000);
	document.querySelector('#created').textContent = formatDate(createdDate);
	document.querySelector('#updated').textContent = `Actualizado: ${formatDate(updatedDate)} AR`;
});

const formatDate = (date) => {
	const options = {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	};

	const dateText = date
		.toLocaleString('es-AR', options)
		.replace(',', '')
		.replace(' a. m.', 'a.m.')
		.replace(' p. m.', 'p.m.');
	return dateText.replace(/\b[a-záéíóúñ]{3,}\b/, (mes) => mes.charAt(0).toUpperCase() + mes.slice(1));
};
