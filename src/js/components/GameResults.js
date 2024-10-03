import {MainContentContainer} from "./MainContentContainer.js";
import {showPlayers} from "../../store/playersStore.js";
import {Player} from "./Player.js";
import {Header} from "./Header.js";

export class GameResults {
	constructor() {
		this.header = new Header();
		this.mainContentContainer = new MainContentContainer();
	}

	draw() {
		this.header.draw(false);
		this.mainContentContainer.draw();
		const innerContainer = document.getElementById('inner__container');
		const playersTitle = document.createElement('h2');
		playersTitle.className = 'players__title';
		playersTitle.textContent = 'Best players';
		innerContainer.appendChild(playersTitle);
		const playersList = document.createElement('div');
		playersList.className = 'players__list';
		innerContainer.appendChild(playersList);
		const playersArray = showPlayers();
		const players = playersArray.map(item => {
			return new Player(item);
		});
		players.forEach(player => {
			const playerHtml = player.draw();
			playersList.appendChild(playerHtml);
		});
	}
}