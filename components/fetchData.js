import { createCard } from "./createCard.js"


const dataAPI = 'https://rickandmortyapi.com/api/character';
const loadDataButton = document.querySelector('[data-js="loadData"]');
loadDataButton.addEventListener('click', fetchData);

export async function fetchData() {
    const response = await fetch(dataAPI);
    const data = await response.json();
    createCard(data.results);
}