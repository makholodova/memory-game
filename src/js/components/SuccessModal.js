import { GameResults } from "./GameResults.js";
export class SuccessModal {
	constructor() {
		this.modal = null;
		this.gameResults = new GameResults;
	}
	showResultsModal(player) {
		const main = document.querySelector('#main');
		this.modal = this.createModal(player);
		main.appendChild(this.modal);
		this.bindEvents();
	}
	createModal(player) {
		const modal = document.createElement('div');
		modal.innerHTML = `
            <div class="modal " id="modalSheet" role="dialog" tabindex="-1">
        <div class="modal__dialog" role="document">
            <div class="modal__content">
                <div class="modal__header">
                    <h2 class="modal__title">Congratulations!</h2>
                </div>
                <div class="modal__body">
                    <p>You successfully found all matches!<br> Your score: ${player.score}. <br>Time: ${player.time} minutes.</p>
                </div>
                <div class="modal__footer">
                    <button class="button modal__button" id="btn-show-results" type="button">OK</button>
                </div>
            </div>
        </div>
    </div>
    `;
		return modal;
	}
	bindEvents() {
		const showResults = document.getElementById('btn-show-results');
		showResults.addEventListener('click', () => {
			if (this.modal)
				this.modal.remove();
			this.modal = null;
			this.gameResults.draw();
		});
	}
}