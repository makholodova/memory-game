import {Card} from "./Card.js";
import {CardModel} from "../models/CardModel.js";

export class Board {
	draw(cardsArray, onCardClick) {
		const cards = cardsArray.map(item => {
			const cardModel = new CardModel(item.id, item.dbId, item.name, item.img, item.img_back);
			return new Card(cardModel);
		});
		this.drawCardContainer(cards, onCardClick);
	}
	drawCardContainer(cards, onCardClick) {
		const innerContainer = document.getElementById('inner__container');
		const cardContainer = document.createElement('div');
		cardContainer.className = 'card-container';
		innerContainer.appendChild(cardContainer);
		const container = document.querySelector('.card-container');
		container.innerHTML = '';
		cards.forEach(card => {
			const cardHtml = card.render(c => onCardClick(c));
			container.appendChild(cardHtml);
		});
	}
}