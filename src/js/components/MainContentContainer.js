export class MainContentContainer {
	draw() {
		const main = document.querySelector('#main');
		main.innerHTML = '';
		const container = document.createElement('div');
		container.className = 'content container';
		container.id = 'inner__container';
		main.appendChild(container);
	}
}
