const data = 'https://rickandmortyapi.com/api/character';


const promise = fetch(data)
.then(response => response.json())
.then(data => createCard(data.results))

function createCard(people) {
const section = document.createElement('section');
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


})

}