const presidency = [
    {
        name: "Josue Baez Osuna",
        role: "Branch President",
        img: "https://josuezenif.github.io/wdd231/rama/images/baez.jpg",
        alt: "Image of the president of the branch",
        width: "1458"
    },
    {
        name: "Oscar Lopez",
        role: "First Counsellor",
        img: "https://josuezenif.github.io/wdd231/rama/images/oscar.jpg",
        alt: "Image of the first counsellor of the branch",
        width: "754"
    },
    {
        name: "Javier Isidro",
        role: "Second Counsellor",
        img: "https://josuezenif.github.io/wdd231/rama/images/javier.jpg",
        alt: "Image of the second counsellor of the branch",
        width: "960"
    }
];

const section = document.querySelector('#presidency');

presidency.forEach(person => {
    const div = document.createElement('div');

    div.innerHTML = `
        <img src="${person.img}" alt="${person.alt}" width="${person.width}" height="auto" loading="lazy">
        <h3>${person.name}</h3>
        <p>${person.role}</p>
    `;

    section.appendChild(div);
})