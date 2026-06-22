// COORDINATES: 46.813605785497074, -71.20510591374328
// key: 337050a94b3c029e7048916d63f8733f

// ------------------------ WEATHER ------------------------------

const div = document.querySelector('#current-weather');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=46.813605785497074&lon=-71.20510591374328&&appid=337050a94b3c029e7048916d63f8733f&units=metric&lang=es';

async function fetchApi() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        }

        else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const icon = document.createElement('img');
    const temp = document.createElement('span');
    const desc = document.createElement('p');
    const feels_like = document.createElement('p');
    const wind = document.createElement('p');
    const sunrise = document.createElement('p');
    const sunset = document.createElement('p');
    const place = document.createElement('p');

    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
    icon.setAttribute('alt', `${data.weather[0].description}`);
    icon.setAttribute('width', '100');
    icon.setAttribute('height', 'auto');
    icon.setAttribute('loading', 'lazy');

    temp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    temp.classList.add('temp');
    desc.textContent = data.weather[0].description;
    feels_like.innerHTML = `Sensación de: ${Math.round(data.main.feels_like)}&deg;C`;
    wind.innerHTML = `Viento: ${Math.round(data.wind.speed)}` + ` km/h`;

    sunrise.innerHTML = `Amanecer: ` + `${new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    }
    )}`;

    sunset.innerHTML = `Atardecer: ` + `${new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    }
    )}`;

    place.innerHTML = `<strong>${data.name}, ${data.sys.country}</strong>`;

    // APPENDING ALL CHILD ELEMENTS TO PARENT
    div.appendChild(icon);
    div.appendChild(temp);
    div.appendChild(desc);
    div.appendChild(feels_like);
    div.appendChild(wind);
    div.appendChild(sunrise);
    div.appendChild(sunset);
    div.appendChild(place);
}
fetchApi();


// WEATHER FORECAST
const forecast = document.querySelector('#forecast');
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.813605785497074&lon=-71.20510591374328&cnt=20&appid=337050a94b3c029e7048916d63f8733f&units=metric&lang=es';

async function fetchForecastApi() {
    try {
        const response = await fetch(forecastUrl);
        if ((response).ok) {
            const data = await response.json();
            displayForecast(data);
        }

        else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }
}

// DAY 1: [4]
// DAY 2: [12]
// DAY 3: [20];

function displayForecast(data) {
    forecast.innerHTML = `
        <p>- ${new Date(data.list[4].dt_txt).toLocaleDateString('spa-MX', {
        weekday: 'long'
    })}: ${Math.round(data.list[4].main.temp)}&deg;C</p>
    
        <img src="https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@4x.png" alt="Weather icon for the week" width="55" heigth="auto" loading="lazy">

        <p class="bottom">${data.list[4].weather[0].description}</p>

    <p>- ${new Date(data.list[12].dt_txt).toLocaleDateString('spa-MX', {
        weekday: 'long'
    })
        }: ${Math.round(data.list[12].main.temp)}&deg;C</p>

                <img src="https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@4x.png" alt="Weather icon for the week" width="55" heigth="auto" loading="lazy">

        <p class="bottom">${data.list[12].weather[0].description}</p>


    <p>- ${new Date(data.list[19].dt_txt).toLocaleDateString('spa-MX', {
            weekday: 'long'
        })}: ${Math.round(data.list[19].main.temp)}&deg;C</p>
        
            <img src="https://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@4x.png" alt="Weather icon for the week" width="55" heigth="auto" loading="lazy">

        <p>${data.list[19].weather[0].description}</p>

`;
}

fetchForecastApi();

// ----------- DIALOG FOR COMMON QUESTION ANSERS -----------
const modal = document.querySelector('#respuestas');

// ------------------ QUESTION NUMBER 1 ------------------

function answer1() {
    modal.innerHTML = '';
    modal.innerHTML = `
    <button id="close">𝓧</button>
    <h3>La Trinidad</h3>
    <p>La Trinidad representa a Dios, nuestro Padre Celestial, a Su Hijo Jesucristo y al Espíritu Santo. Se les conoce como la Trinidad porque son tres personajes distintos, pero tienen un mismo objetivo: brindar al ser humano la inmortalidad y la vida eterna.</p>
    <p>Los tres trabajan juntos para traer paz al mundo e iluminarnos a nosotros, los hijos de Dios.</p>
`;
    modal.showModal();

    const closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

const response1 = document.querySelector('#answer1');
response1.addEventListener('click', () => {
    answer1();
});


// ------------------- QUESTIONS NUMBER 2 ---------------

function answer2() {
    modal.innerHTML = '';
    modal.innerHTML = `
    <button id="close">𝓧</button>
    <h3>Adoran Santos?</h3>
    <p>No, como miembros de la Iglesia de Jesucristo no adoramos a ningún santo, estatua ni a ningún otro «dios».</p>
    <p>Adoramos a nuestro amoroso Padre Celestial, le oramos y creemos que Él es el único Dios verdadero y vivo que existe.</p>
    <p>Adoramos a nuestro Padre Celestial orándole, cantando himnos, estudiando Su palabra en la Biblia y en el Libro de Mormón, y de muchas otras maneras.</p>
`;
    modal.showModal();

    const closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

const response2 = document.querySelector('#answer2');
response2.addEventListener('click', () => {
    answer2();
});


// ---------------- QUESTION NUMBER 3 --------------
function answer3() {
    modal.innerHTML = '';
    modal.innerHTML = `
    <button id="close">𝓧</button>
    <h3>Dios tiene cuerpo?</h3>
    <p>Sí, creemos que Dios tiene un cuerpo de carne y huesos, tal como nosotros.</p>
    <p>En Doctrina y Convenios 130:22 dice: "El Padre tiene un cuerpo de carne y huesos tan tangible como el del hombre; así también el Hijo;"</p>
    <p>El Espíritu Santo, sin embargo, no tiene cuerpo porque es el Espíritu de Dios.</p>
`;
    modal.showModal();

    const closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

const response3 = document.querySelector('#answer3');
response3.addEventListener('click', () => {
    answer3();
});


// --------------- QUESTION NUMBER 4 -------------
function answer4() {
    modal.innerHTML = '';
    modal.innerHTML = `
    <button id="close">𝓧</button>
    <h3>Si lo somos!</h3>
    <p>Creemos en Dios, el Padre Eterno, en Su Hijo Jesucristo y en el Espíritu Santo.</p>
    <p>De hecho, nuestro nombre lo dice todo: La Iglesia de Jesucristo. Somos cristianos porque creemos en Jesucristo.</p>
`;
    modal.showModal();

    const closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

const response4 = document.querySelector('#answer4');
response4.addEventListener('click', () => {
    answer4();
});


