export class Card {
	constructor(cardModel) {
		this.isFlipped = false;
		this.cardModel = cardModel;
	}
	render(onCardClick) {
		const card = document.createElement('div');
		card.className = 'card';
		card.id = this.cardModel.id;
		card.innerHTML = `
        <div class="card__inner">
             <div class="card__front">
                 <img alt="img_back" class="card__img " src="${this.cardModel.img_back}">
             </div>
             <div class="card__back">
                  <img alt="${this.cardModel.name.toLowerCase()}" class="card__img" src="${this.cardModel.img}">
            </div>
        </div>
        `;
		card.addEventListener('click', () => {
			if (!this.isFlipped)
				onCardClick(this);
		});
		return card;
	}
	addMask(isCorrect) {
		const maskElement = document.getElementById(this.cardModel.id);
		const mask = document.createElement('div');
		mask.className = isCorrect ? 'card__mask--correct' : 'card__mask--incorrect';
		maskElement.appendChild(mask);
	}
	flipCard() {
		this.isFlipped = true;
		const cardElement = document.getElementById(this.cardModel.id);
		cardElement.classList.add('flipped');
	}
	unFlipCard() {
		this.isFlipped = false;
		const cardElement = document.getElementById(this.cardModel.id);
		cardElement.classList.remove('flipped');
		const incorrectMask = document.querySelector(`#${this.cardModel.id} .card__mask--incorrect`);
		if (incorrectMask)
			incorrectMask.remove();
	}
}
