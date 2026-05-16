const hambutton = document.getElementById('ham-button');
const nav = document.getElementById('nav-bar');

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('open');
    nav.classList.toggle('open');
});

// GETTING CURRENT YEAR
const currentyear = document.querySelector('#current-year');
const today = new Date();
currentyear.innerHTML = today.getFullYear();

// LAST MODIFIED CODE
const lastModified = document.querySelector('#last-modified').innerHTML = `Last modified: ${document.lastModified}`;

// DISPLAYING COMPANY INFORMATION
const url = "https://josuezenif.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getCompanyDetails() {
    const response = await fetch(url);
    const data = await response.json();

    displayCompanyDetails(data.companies);
}

const displayCompanyDetails = (companies) => {
    companies.forEach(company => {
        const section = document.createElement('section');
        const companyName = document.createElement('h2');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const phoneNumber = document.createElement('p');

        companyName.textContent = `${company.name}`;
        image.setAttribute("src", `${company.imageFile}`);
        image.setAttribute("alt", "Company image job representation");
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "auto");

        address.textContent = `${company.address}`;
        phoneNumber.textContent = `${company.phoneNumber}`;

        section.appendChild(companyName);
        section.appendChild(image);
        section.appendChild(address);
        section.appendChild(phoneNumber);

        cards.appendChild(section);
    });
}

getCompanyDetails();