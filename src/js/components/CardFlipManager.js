import { SuccessModal } from "./SuccessModal.js";
import { Score } from "./Score.js";
import { addPlayer } from "../../store/playersStore.js";
//это сервис а не компонент
export class CardFlipManager {
	constructor(pairsCount, timer, player) {
		this.firstCard = null;
		this.secondCard = null;
		this.lockBoard = false;
		this.openPairsCount = 0;
		this.scoreNow = 0;
		this.successModal = new SuccessModal();
		this.timer = timer;
		this.pairsCount = pairsCount;
		this.player = player;
		this.score = new Score();
	}
	flipCard(card) {
		if (this.lockBoard)
			return;
		card.flipCard();
		if (!this.firstCard) {
			this.firstCard = card;
		}
		else {
			this.secondCard = card;
		}
		if (this.firstCard && this.secondCard) {
			this.checkForMatch();
		}
		this.scoreNow++;
		this.score.updateScore(this.scoreNow);
	}
	checkForMatch() {
		if (!this.firstCard || !this.secondCard)
			return;
		this.lockBoard = true;
		const isMatch = this.firstCard.cardModel.dbId === this.secondCard.cardModel.dbId;
		setTimeout(() => {
			if (isMatch) {
				this.handleMatch();
				this.openPairsCount++;
				if (this.openPairsCount === this.pairsCount) {
					this.stopGame();
				}
				this.resetBoard();
			}
			else {
				this.handleMismatch();
			}
		}, 500);
	}
	handleMatch() {
		this.firstCard.addMask(true);
		this.secondCard.addMask(true);
	}
	handleMismatch() {
		this.firstCard.addMask(false);
		this.secondCard.addMask(false);
		setTimeout(() => {
			this.firstCard.unFlipCard();
			this.secondCard.unFlipCard();
			this.resetBoard();
		}, 500);
	}
	resetBoard() {
		this.firstCard = null;
		this.secondCard = null;
		this.lockBoard = false;
	}
	stopGame() {
		const playerDb = {
			id: this.player.id,
			name: this.player.name,
			score: this.scoreNow,
			time: `${this.timer.formatTime(this.timer.timeInSeconds)}`,
		};
		addPlayer(playerDb);
		this.successModal.showResultsModal(playerDb);
		this.timer.stopTimer();
		//this.scoreNow = 0;
		//this.openPairsCount = 0;
	}
}