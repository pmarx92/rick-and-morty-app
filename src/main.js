const section = document.createElement('section');
const loadDataButton = document.querySelector('[data-js="loadData"]');

loadDataButton.addEventListener('click', fetchSelectedData);

async function fetchSelectedData() {
    const selected = document.querySelector('[data-js="dropdown"]');
    const searchBar = document.querySelector('[data-js="searchBar"]');

    const apiURL = "https://rickandmortyapi.com/api/character/?name=" + searchBar.value + "&status=" + selected.value;
    const response = await fetch(apiURL);
    const data = await response.json();

    section.textContent = "";
    searchBar.value = "";
    createCard(data.results);
}

const createCard = (people) => {
    section.classList.add('section');
    document.body.append(section);

    people.forEach(person => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = person.name;
        section.append(card);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        card.append(cardContent);

        const characterImage = document.createElement('img');
        characterImage.classList.add('card-image');
        characterImage.setAttribute('src', `${person.image}`);
        cardContent.append(characterImage);

        const ul = document.createElement('ul');
        const id = document.createElement('li');
        id.classList.add('card-content-list');
        id.textContent = "id: " + person.id;
        ul.append(id);

        const status = document.createElement('li');
        status.textContent = "Status: " + person.status;
        status.classList.add('card-content-list');
        cardContent.append(ul);
        ul.append(status);

        const species = document.createElement('li');
        species.classList.add('card-content-list');
        species.textContent = "Species: " + person.species;
        ul.append(species);

        const gender = document.createElement('li');
        gender.classList.add('card-content-list');
        gender.textContent = "Type: " + person.gender;
        ul.append(gender);

        card.classList.add(person.status);

    })

}