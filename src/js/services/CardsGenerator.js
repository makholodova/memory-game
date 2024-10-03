import {CardModel} from "../models/CardModel.js";

export class CardsGenerator {
	generateCardsArray(uniqueCards, length = 12) {
		const cartsArray = this.createCardsArray(uniqueCards, length);
		return this.shuffleArray(cartsArray);
	}
	createCardsArray(uniqueCards, length) {
		const cardsArray = [];
		for (let i = 0; i < length / 2; i++) {
			const dbCard = uniqueCards[i];
			const newCard1 = new CardModel(`card_${i}str`, dbCard.id, dbCard.name, dbCard.img, dbCard.img_back);
			const newCard2 = new CardModel(`card_${i + uniqueCards.length}str`, dbCard.id, dbCard.name, dbCard.img, dbCard.img_back);
			cardsArray.push(newCard1, newCard2);
		}
		return cardsArray;
	}
	shuffleArray(array) {
		const shuffled = [...array];
		for (let j = shuffled.length - 1; j > 0; j--) {
			const k = Math.floor(Math.random() * (j + 1));
			[shuffled[j], shuffled[k]] = [shuffled[k], shuffled[j]];
		}
		return shuffled;
	}
}

