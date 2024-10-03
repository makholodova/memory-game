export class Score {
	constructor() {
		this.score = 0;
	}
	draw() {
		const gameInfo = document.querySelector('.game-info');
		const scoreDisplay = document.createElement('div');
		scoreDisplay.className = 'score-display';
		scoreDisplay.id = 'score';
		scoreDisplay.textContent = `SCORE: ${this.score}`;
		gameInfo.appendChild(scoreDisplay);
	}
	updateScore(score) {
		this.score = score;
		const scoreElement = document.getElementById('score');
		scoreElement.textContent = ` SCORE: ${this.score}`;
	}
}
