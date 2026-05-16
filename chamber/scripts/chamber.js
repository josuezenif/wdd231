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
const url = "https://josuezenif/wdd231/chamber/members.json";
const cards = document.querySelector('#cards');