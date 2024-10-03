import {ButtonStopGame} from "./ButtonStopGame.js";
import {ButtonStartGame} from "./ButtonStartGame.js";

export class Header {
	constructor() {
		this.button = null;
	}

	draw(isPlay, game) {
		const header = document.querySelector('header');
		header.innerHTML = '';
		const container = document.createElement('div');
		container.className = 'header__container container';
		container.id = 'header__content';
		header.appendChild(container);
		if (isPlay) {
			const headerContent = document.getElementById('header__content');
			headerContent.innerHTML = `
                <div class="header__logo">Memory Game</div>`;
			this.button = new ButtonStopGame();
			this.button.draw(game);
		} else if (isPlay === false) {
			const headerContent = document.getElementById('header__content');
			headerContent.innerHTML = `
                <div class="header__logo">Memory Game</div>`;
			this.button = new ButtonStartGame();
			this.button.draw();
		}
	}
}