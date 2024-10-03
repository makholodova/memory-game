import {MainContentContainer} from "../components/MainContentContainer.js";
import {Header} from "../components/Header.js";

export class StartGame {
	constructor() {
		this.header = new Header();
		this.mainContentContainer = new MainContentContainer();
	}
	draw() {
		this.header.draw();
		this.mainContentContainer.draw();
		const innerContainer = document.getElementById('inner__container');
		const startGame = document.createElement('div');
		startGame.className = 'start-game';
		startGame.innerHTML = `
        <div class="start-game__title">Memory Game</div>
        <div  class="start-game__controls" >
          <button class=" button start-game__button" id="btn-open-modal" type="button">Play     &#9658;</button>
        </div>
        `;
		innerContainer.appendChild(startGame);
	}
}