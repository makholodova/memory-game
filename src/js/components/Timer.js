export class Timer {
	constructor() {
		this.timeInSeconds = 0;
		this.isRunning = false;
		this.myInterval = undefined;
	}
	draw() {
		const gameInfo = document.querySelector('.game-info');
		const timerDisplay = document.createElement('div');
		timerDisplay.className = 'timer-display';
		timerDisplay.id = 'timer';
		timerDisplay.textContent = `TIME: ${this.formatTime(this.timeInSeconds)} `;
		gameInfo.appendChild(timerDisplay);
		this.startTimer();
	}
	startTimer() {
		if (this.isRunning) {
			console.warn('Таймер уже запущен.');
			return;
		}
		this.isRunning = true;
		this.myInterval = window.setInterval(() => {
			this.timeInSeconds++;
			this.updateDisplay();
		}, 1000);
	}
	stopTimer() {
		if (!this.isRunning) {
			console.warn('Таймер уже остановлен.');
			return;
		}
		this.isRunning = false;
		clearInterval(this.myInterval);
		this.myInterval = undefined;
		this.updateDisplay();
		this.timeInSeconds = 0;
	}
	formatTime(timeInSeconds) {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = Math.floor(timeInSeconds % 60);
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
		return `${formattedMinutes}:${formattedSeconds}`;
	}
	updateDisplay() {
		const timerDisplay = document.getElementById('timer');
		timerDisplay.innerHTML = `TIME: ${this.formatTime(this.timeInSeconds)} `;
	}
}
