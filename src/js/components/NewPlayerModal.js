import { MatchMatchGame } from "./MatchMatchGame.js";
import { PlayerModel } from "../models/PlayerModal.js";
import { Header } from "./Header.js";
export class NewPlayerModal {
	constructor() {
		this.modal = null;
		this.player = null;
		this.matchMatchGame = null;
		this.addEventListeners = () => {
			const closeModalBtn = document.querySelector('#btn-close-modal');
			closeModalBtn.addEventListener('click', () => {
				this.closeModal();
			});
			const playerForm = document.querySelector('#playerForm');
			playerForm.addEventListener('submit', (event) => {
				this.handleSubmit(event);
			});
		};
		this.closeModal = () => {
			if (this.modal)
				this.modal.remove();
			this.modal = null;
			document.body.classList.remove('lock-scroll');
		};
		this.handleSubmit = (event) => {
			event.preventDefault();
			const nameInput = document.getElementById('floatingFirstName');
			this.id = Date.now().toString();
			this.name = nameInput.value;
			this.player = new PlayerModel(this.id, this.name);
			this.matchMatchGame = new MatchMatchGame(this.player);
			this.closeModal();
			this.header.draw(true, this.matchMatchGame);
			this.matchMatchGame.startGame()
				.then(() => {
					console.log('Game started successfully');
				})
				.catch((error) => {
					console.error('Error starting game:', error);
				});
		};
		this.header = new Header();
		this.id = '';
		this.name = '';
	}
	showModal() {
		const main = document.querySelector('#main');
		this.modal = this.createModal();
		main.appendChild(this.modal);
		document.body.classList.add('lock-scroll');
		this.addEventListeners();
	}
	createModal() {
		const modal = document.createElement('div');
		modal.innerHTML = `
             <div class="modal" id="modalNewPlayer" role="dialog" tabindex="-1">
        <div class="modal__dialog" role="document">
            <div class="modal__content ">
                <div class="modal__header">
                    <h2 class="modal__title">New Player</h2>

                </div>
                <div class="modal__body">
                    <form class="form" id="playerForm">
                        <div class="form__group">
                            <input  autocomplete="off" class="form__input" id="floatingFirstName" placeholder="Name"
                                   required type="text">
                            <label for="floatingFirstName"></label>
                        </div>
                        <button class="button modal__button" type="submit">Start game</button>
                    </form>
                </div>
            </div>
            <button class="modal__close-btn" id="btn-close-modal" type="button">&times;</button>
        </div>
    </div>
        `;
		return modal;
	}
}