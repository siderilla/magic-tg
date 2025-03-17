export default class MagicService {

static MAGIC_URL = 'https://api.magicthegathering.io/v1/cards';
// con static, questa proprietà diventa proprietà esclusiva del costrutture MagicService e non di ogni oggetto creato con la classe
// perciò va richiamata tramite il nome della classe a cui appartiene
// esempio: MagicService.MAGIC_URL

async getData() {
	 return fetch(MagicService.MAGIC_URL) // fetch dell'url
	 .then(res => res.json()) // se lo trovi trasforma la risposta in json
	 .then(data => {
		const magicData = [];
		for (const cardKey of data.cards) {
			const cardName = cardKey.name;
			const cardType = cardKey.type;
			const cardRarity = cardKey.rarity;
			const cardImage = cardKey.imageUrl;
			// console.log('Name: ' + cardName);
			// console.log('Type: ' + cardType);
			// console.log('Rarity: ' + cardRarity);
			magicData.push({
				name: cardName, 
				type: cardType, 
				rarity: cardRarity,
				image: cardImage
			});
		}
		console.log(magicData);
		return magicData;
		})
	.catch(err => console.error(err));
	}
}