const hambutton = document.querySelector('#ham-button');
const navbar = document.querySelector('#navigation');
hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('open');
    navbar.classList.toggle('open');
})

// CURRENT YEAR AND LAST MODIFIED

const currentyear = document.querySelector('#current-year');
const lastModified = document.querySelector('#last-modified');
const today = new Date();

currentyear.textContent = today.getFullYear();
lastModified.textContent = `Last modified: ${document.lastModified}`;