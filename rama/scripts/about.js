const presidency = [
    {
        name: "Josue Baez Osuna",
        role: "Branch President",
        img: "https://josuezenif.github.io/wdd231/rama/images/president-baez.jpg",
        alt: "Image of the president of the branch",
        width: "960"
    },
    {
        name: "Oscar Lopez",
        role: "First Counsler",
        img: "https://josuezenif.github.io/wdd231/rama/images/oscar.jpg",
        alt: "Image of the first counsler of the branch",
        width: "754"
    },
    {
        name: "Javier Isidro",
        role: "Second Counsler",
        img: "https://josuezenif.github.io/wdd231/rama/images/javier.jpg",
        alt: "Image of the second counsler of the branch",
        width: "960"
    }
];

const div = document.createElement('div');
const section = document.querySelector('#presidency');

presidency.forEach(person => {
    div.innerHTML = `
        <img src="${person.img}" alt="${person.alt}" width="${person.width}" height="auto" loading="lazy">
        <h3>${person.name}</h3>
        <p>${person.role}</p>
    `;

    section.appendChild(div);
})