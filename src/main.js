import MagicService from "./services/magic-service.js";

const cardListContainer = document.getElementById('cardlist-container');

const service = new MagicService();

function fetchData() {
	service.getData()
	.then(data => {
		for (const card of data) {
			render(card);
		}
	});
}

fetchData();

function render(magicData) {
	const cardsContainer = document.createElement('div')
	cardsContainer.classList.add('card-container')

	const name = document.createElement('h4');
    const nameText = document.createTextNode(magicData.name);
	name.appendChild(nameText);

	const type = document.createElement('p');
    const typeText = document.createTextNode(magicData.type);
	type.appendChild(typeText);

	const rarity = document.createElement('p');
    const rarityText = document.createTextNode(magicData.rarity);
	rarity.appendChild(rarityText);

    const image = document.createElement('img');
    image.classList.add('magic-image');
    image.src = magicData.image;

	cardsContainer.appendChild(name);
	cardsContainer.appendChild(type);
	cardsContainer.appendChild(rarity);
	cardsContainer.appendChild(image);
	cardListContainer.appendChild(cardsContainer);

}