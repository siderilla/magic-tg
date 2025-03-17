import MagicService from "./services/magic-service.js";

const cardListContainer = document.getElementById('cardlist-container');

const service = new MagicService();

function fetchData() {
	service.getData();
}

fetchData();

function render(magicData) {

}