const button1 = document.querySelector('#branch1');
const button2 = document.querySelector('#branch2');
const button3 = document.querySelector('#branch3');
const button4 = document.querySelector('#branch4');

const divBranch = document.querySelector('#info-branch');

// ADDING EVENLISTENERS FOR ALL 3 BUTTONS
// BUTTON 1
button1.addEventListener('click', () => {
    displayFirstBranchInfo();
});

// BUTTON 2

button2.addEventListener('click', () => {
    displaySecondBranchInfo();
});

// BUTTON 3

button3.addEventListener('click', () => {
    displayThridBranchInfo();
});

// BUTTON 4

button4.addEventListener('click', () => {
    displayFourthBranchInfo();

});

function displayFirstBranchInfo() {
    divBranch.innerHTML = "";
    divBranch.innerHTML = `
        <h2>Saint-Laurent Branch (Spanish)</h2>

        <div>
            <img src="https://josuezenif.github.io/wdd231/rama/images/president-baez.jpg" width="960" height="auto" loading="lazy">
            <p><strong>President:</strong> Josue Baez Osuna</p>
            <p><strong>Address:</strong> 6900 Pierre-Bertrand Blvd, Quebec City, Quebec Canada</p>
            <p><strong>Sacrament Time:</strong> Sunday 9:30 am (Holidays may vary)</p>
        </div>

    `;
}

function displaySecondBranchInfo() {
    divBranch.innerHTML = "";
    divBranch.innerHTML = `
        <h2>Quebec Branch (French)</h2>

       <div>
            <p><strong>President:</strong> Maxime Tremblay</p>
            <p><strong>Address:</strong> 6900 Pierre-Bertrand Blvd, Quebec City, Quebec Canada</p>
            <p><strong>Sacrament Time:</strong> Sunday 11:30 am (Holidays may vary)</p>
        </div>
    `;
}

function displayThridBranchInfo() {
    divBranch.innerHTML = "";
    divBranch.innerHTML = `
        <h2>Lévis Branch (French)</h2>

       <div>
            <p><strong>President:</strong> Jeffrei Moreira</p>
            <p><strong>Address:</strong> 6900 Pierre-Bertrand Blvd, Quebec City, Quebec Canada</p>
            <p><strong>Sacrament Time:</strong> Sunday 1:30 pm (Holidays may vary)</p>
        </div>
    `;
}

function displayFourthBranchInfo() {
    divBranch.innerHTML = "";
    divBranch.innerHTML = `
        <h2>Victoriaville Branch (French)</h2>

       <div>
            <p><strong>President:</strong> Derick, Lord</p>
            <p><strong>Address:</strong> 1221 Bd Jutras E, Victoriaville, Quebec Canada</p>
            <p><strong>Sacrament Time:</strong> Sunday 10:30 am (Holidays may vary)</p>
        </div>
    `;
}