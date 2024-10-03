import { CardsApiClient } from "../api/CardsApiClient.js";
import { CardsGenerator } from "../services/CardsGenerator.js";
import { Board } from "./Board.js";
import { CardFlipManager } from "./CardFlipManager.js";
import { GameInfo } from "./GameInfo.js";
import { MainContentContainer } from "./MainContentContainer.js";
import { Score } from "./Score.js";
import { Timer } from "./Timer.js";
export class MatchMatchGame {
	constructor(player) {
		this.count = 6;
		this.startGame = async () => {
			const uniqueCards = await this.cardsApiClient.getCards();
			const cardArray = this.cardsGenerator.generateCardsArray(uniqueCards, this.count * 2); //отрефакторить count * 2
			/*this.header.draw(true);*/
			this.mainContentContainer.draw();
			this.gameInfo.draw();
			this.score.draw();
			this.timer.draw();
			this.board.draw(cardArray, card => this.cardFlipManager.flipCard(card));
		};
		this.stopGame = () => {
			this.timer.stopTimer();
		};
		this.cardsApiClient = new CardsApiClient();
		this.cardsGenerator = new CardsGenerator();
		/*this.header = new Header();*/
		this.mainContentContainer = new MainContentContainer();
		this.gameInfo = new GameInfo();
		this.player = player;
		this.score = new Score();
		this.timer = new Timer();
		this.board = new Board();
		this.cardFlipManager = new CardFlipManager(this.count, this.timer, this.player);
	}
}