// ----------- GRABBING HAMBURGER ID and OTHER ID -----------
const hamButton = document.querySelector("#ham-button");
const navBar = document.querySelector("#nav-bar");


// Toggle ON OFF button
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
});


// -------------- DISPLAYING CURRENT YEAR -----------
const currentYear = document.querySelector('#current-year');
const today = new Date();

currentYear.innerHTML = today.getFullYear();

// -------------- LAST MODIFIED --------------
const lastModified = document.querySelector('#lastModified').innerHTML = `Last Modified: ` + document.lastModified;
