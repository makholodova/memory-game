import { StartGame } from "../services/StartGame.js";
import { NewPlayerModal } from "./NewPlayerModal.js";
export class ButtonStartGame {
	constructor() {
		this.startGame = new StartGame();
		this.newPlayerModal = new NewPlayerModal;
	}
	draw() {
		const buttonDisplay = document.createElement('button');
		buttonDisplay.className = 'button modal__button';
		buttonDisplay.id = 'start-game__button';
		buttonDisplay.type = 'button';
		buttonDisplay.textContent = 'Start Game';
		buttonDisplay.addEventListener('click', () => {
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
