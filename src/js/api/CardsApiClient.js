export class CardsApiClient {
	async getCards() {
		try {
			const response = await fetch('./data/cards.json');
			if (!response.ok) {
				console.error(`Ошибка сети: ${response.status}`);
				return [];
			}
			return await response.json();
		}
		catch (error) {
			console.error('Ошибка загрузки данных:', error);
			return [];
		}
	}
}