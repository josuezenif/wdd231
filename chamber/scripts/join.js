const modal = document.querySelector('#membership-info');

// ---------------- CREATING FUNCTIONS -----------------

function newProfileInfo() {
    modal.innerHTML = '';
    modal.innerHTML = `
        <button id="close">𝘅</button>
        <h2>New Profile Membership</h2>
        <p>A new profile membership is for non-profit organization that include no fee!</p>
        <p>It is a membership for new users to test and see what the chamber of commerce is like.</p>
    `;
    modal.showModal();

    const closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

function bronzeInfo() {
    modal.innerHTML = "";
    modal.innerHTML = `
        <button id="close">𝘅</button>
        <h2>Bronze Membership</h2>
        <p>Perfect for beginners, the Bronze Membership gives you access to essential features to get started.</p>
        <p>Enjoy basic tools, limited content access, and standard support to help you explore our platform.</p>
    `;
    modal.showModal();

    const closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

function silverInfo() {
    modal.innerHTML = "";
    modal.innerHTML = `
        <button id="close">𝘅</button>
        <h2>Silver Membership</h2>
        <p>The Silver Membership is ideal for users who want more.</p>
        <p>It includes everything in Bronze, plus additional features, extended content access, and priority support for a smoother experience.</p>
    `;
    modal.showModal();

    const closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

function goldInfo() {
    modal.innerHTML = "";
    modal.innerHTML = `
        <button id="close">𝘅</button>
        <h2>Gold Membership</h2>
        <p>Our premium option, the Gold Membership unlocks full access to all features, exclusive content, and top-level priority support.</p>
        <p>Designed for those who want the best experience with no limitations.</p>
    `;
    modal.showModal();

    const closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

// ---------------- CALLING FUNCTIONS AND DISPLAYING MODALS -------------
const newProfile = document.querySelector('#new-profile');
newProfile.addEventListener('click', () => {
    newProfileInfo();
});

document.querySelector('#bronze-member').addEventListener('click', () => {
    bronzeInfo();
});

document.querySelector('#silver-member').addEventListener('click', () => {
    silverInfo();
});

document.querySelector('#gold-member').addEventListener('click', () => {
    goldInfo();
});

// ---------- CREATING THE TIMESTAMP -----------
const stamp = document.querySelector('#stamp');
const currentTime = new Date().toLocaleString('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});

stamp.innerHTML = currentTime;
