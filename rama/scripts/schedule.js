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
        <h2>Rama Saint-Laurent</h2>

        <div>
            <img src="https://josuezenif.github.io/wdd231/rama/images/president-baez.jpg" width="960" height="auto" loading="lazy">
            <p><strong>Presidente:</strong> Josue Baez Osuna</p>
            <p><strong>Direccion:</strong> 6900 Pierre-Bertrand Blvd, Quebec City, Quebec Canada</p>
            <p><strong>Hora Sacramental:</strong> Domingo 9:30 am (Horas en Navidad pueden variar)</p>
        </div>

    `;
}

function displaySecondBranchInfo() {
    divBranch.innerHTML = "";
    divBranch.innerHTML = `
        <h2>Rama de Quebec (Frances)</h2>

       <div>
            <p><strong>Presidente:</strong> Maxime Tremblay</p>
            <p><strong>Direcció:</strong> 6900 Pierre-Bertrand Blvd, Quebec City, Quebec Canada</p>
            <p><strong>Hora Sacramental:</strong> Domingo 11:30 am (Horas en Navidad pueden variar)</p>
        </div>
    `;
}

function displayThridBranchInfo() {
    divBranch.innerHTML = "";
    divBranch.innerHTML = `
        <h2>Rama de Lévis (Frances)</h2>

       <div>
            <p><strong>Presidente:</strong> Jeffrei Moreira</p>
            <p><strong>Dirección:</strong> 6900 Pierre-Bertrand Blvd, Quebec City, Quebec Canada</p>
            <p><strong>Hora Sacramental:</strong> Domingo 1:30 pm (Horas en Navidad pueden variar)</p>
        </div>
    `;
}

function displayFourthBranchInfo() {
    divBranch.innerHTML = "";
    divBranch.innerHTML = `
        <h2>Rama de Victoriaville (Frances)</h2>

       <div>
            <p><strong>Presidente:</strong> Derick, Lord</p>
            <p><strong>Dirección:</strong> 1221 Bd Jutras E, Victoriaville, Quebec Canada</p>
            <p><strong>Hora Sacramental:</strong> Domingo 10:30 am (Horas en Navidad pueden variar)</p>
        </div>
    `;
}