// ---------------------------------- DAILY SCRIPTURE SECTION ----------------------------
import scriptures from "../data/scriptures.mjs";

function getDailyScripture() {
    const today = new Date().toDateString();

    const savedDate = localStorage.getItem("date");
    const savedScripture = localStorage.getItem("scripture");

    //CHECK IF SCRIPTURE IS ALREADY THERE
    if (savedDate === today && savedScripture) {
        return JSON.parse(savedScripture);
    }

    // if not elegir uno random
    const random = scriptures[Math.floor(Math.random() * scriptures.length)];

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("date", today);
    localStorage.setItem("scripture", JSON.stringify(random));

    return random;
}

const scripture = getDailyScripture();

document.querySelector('#reference').textContent = scripture.reference;
document.querySelector('#text').textContent = scripture.text;

