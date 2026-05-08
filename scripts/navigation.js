// ----------- GRABBING HAMBURGER ID and OTHER ID -----------
const hamButton = document.querySelector("#ham-button");
const navBar = document.querySelector("#nav-bar");


// Toggle ON OFF button
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

