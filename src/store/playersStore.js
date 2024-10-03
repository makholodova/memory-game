const playersArray = getPlayers();
export function getPlayers() {
	try {
		const items = localStorage.getItem('players');
		return items ? JSON.parse(items) : [];
	}
	catch (error) {
		console.error('Error parsing todos from localStorage:', error);
		return [];
	}
}
export function showPlayers() {
	return playersArray.slice(-10).reverse();
}
export function addPlayer(player) {
	playersArray.push(player);
	saveToLocalStorage();
}
function saveToLocalStorage() {
	localStorage.setItem('players', JSON.stringify(playersArray));
}
/*function clearLocalStorage(): void {
    localStorage.clear();
}*/