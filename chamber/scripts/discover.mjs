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
})