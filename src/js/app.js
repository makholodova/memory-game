import {StartGame} from "./services/StartGame.js";
import {NewPlayerModal} from "./components/NewPlayerModal.js";

export class App {
	constructor() {
		this.startGame = new StartGame();
		this.newPlayerModal = new NewPlayerModal();
	}
	start() {
		document.addEventListener('DOMContentLoaded', () => {
			this.startGame.draw();
			const openModalBtn = document.getElementById('btn-open-modal');
			openModalBtn.addEventListener('click', () => {
				this.newPlayerModal.showModal();
			});
		});
	}
}
