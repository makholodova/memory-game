export class GameInfo {
	draw() {
		const innerContainer = document.getElementById('inner__container');
		const gameInfo = document.createElement('div');
		gameInfo.className = 'game-info';
		innerContainer.appendChild(gameInfo);
	}
}
