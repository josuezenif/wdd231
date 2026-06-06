import items from "../data/items.mjs";

const cards = document.querySelector('#items');

// CREATING HTML TAGS
items.forEach(item => {
    const div = document.createElement('div');
    const name = document.createElement('h2');
    const fig = document.createElement('figure');
    const image = document.createElement('img');
    const address = document.createElement('address');
    const desc = document.createElement('p');
    const button = document.createElement('button');

    // ADDING ATTRIBUTES
    name.textContent = item.name;

    image.setAttribute('src', `${item.image}`);
    image.setAttribute('alt', 'Event in La Nouvelle-Beauce');
    image.setAttribute('width', '300');
    image.setAttribute('height', 'auto');
    image.setAttribute('loading', 'lazy');
    fig.appendChild(image);

    address.textContent = item.address;
    desc.textContent = item.description;
    button.textContent = 'Learn More';

    // APPENDING ELEMENTS
    div.appendChild(name);
    div.appendChild(fig);
    div.appendChild(address);
    div.appendChild(desc);
    div.appendChild(button);

    cards.appendChild(div);
});

// --------------- DISPLAYING LAST VISIT ------------
const visitMessage = document.querySelector('#lastVisit');

function displayVisitMessage() {

    const lastVisit = Number(localStorage.getItem("discoverLastVisit"));

    const today = Date.now();

    const oneDay = 1000 * 60 * 60 * 24;


    if (!lastVisit) {

        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    else {

        const daysBetween = Math.floor((today - lastVisit) / oneDay);

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        }

        else if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        }

        else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }

    localStorage.setItem("discoverLastVisit", Date.now());
}

displayVisitMessage();