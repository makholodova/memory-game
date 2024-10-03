
export class Player {
	constructor(playerModel) {
		this.playerModel = playerModel;
	}
	draw() {
		const player = document.createElement('div');
		player.className = 'players__item';
		player.innerHTML = `
                <h4 class="players__name">${this.playerModel.name}</h4>
                <div class="players__results">
                    <p class="players__score"> Score: <span>${this.playerModel.score}</span></p>
                    <p class="players__time"> Time: <span>${this.playerModel.time}</span></p>
                </div>
        `;
		return player;
	}
}