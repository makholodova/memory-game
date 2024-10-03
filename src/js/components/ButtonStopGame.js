import { StartGame } from "../services/StartGame.js";
import { NewPlayerModal } from "./NewPlayerModal.js";
export class ButtonStopGame {
	constructor() {
		this.startGame = new StartGame();
		this.newPlayerModal = new NewPlayerModal;
	}
	draw(game) {
		const buttonDisplay = document.createElement('button');
		buttonDisplay.className = ' button modal__button';
		buttonDisplay.id = 'stop-game__button';
		buttonDisplay.type = 'button';
		buttonDisplay.textContent = `Stop Game`;
		buttonDisplay.addEventListener('click', () => {
			game?.stopGame();
			this.startGame.draw();
			const openModalBtn = document.getElementById('btn-open-modal');
			openModalBtn.addEventListener('click', () => {
				this.newPlayerModal.showModal();
			});
		});
		const headerContent = document.getElementById('header__content');
		headerContent.appendChild(buttonDisplay);
	}
}
