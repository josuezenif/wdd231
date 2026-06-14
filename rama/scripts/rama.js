// COORDINATES: 46.813605785497074, -71.20510591374328
// key: 337050a94b3c029e7048916d63f8733f

// ------------------------ WEATHER ------------------------------

const div = document.querySelector('#current-weather');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=46.813605785497074&lon=-71.20510591374328&&appid=337050a94b3c029e7048916d63f8733f&units=metric';

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
    feels_like.innerHTML = `Feels like: ${Math.round(data.main.feels_like)}&deg;C`;
    wind.innerHTML = `Wind: ${Math.round(data.wind.speed)}` + ` km/h`;

    sunrise.innerHTML = `Sunrise: ` + `${new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    }
    )}`;

    sunset.innerHTML = `Sunset: ` + `${new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
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
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.813605785497074&lon=-71.20510591374328&cnt=20&appid=337050a94b3c029e7048916d63f8733f&units=metric';

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
        <p>- ${new Date(data.list[4].dt_txt).toLocaleDateString('en-US', {
        weekday: 'long'
    })}: ${Math.round(data.list[4].main.temp)}&deg;C</p>
    
        <img src="https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@4x.png" alt="Weather icon for the week" width="55" heigth="auto" loading="lazy">

        <p class="bottom">${data.list[4].weather[0].description}</p>

    <p>- ${new Date(data.list[12].dt_txt).toLocaleDateString('en-US', {
        weekday: 'long'
    })
        }: ${Math.round(data.list[12].main.temp)}&deg;C</p >

                <img src="https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@4x.png" alt="Weather icon for the week" width="55" heigth="auto" loading="lazy">

        <p class="bottom">${data.list[12].weather[0].description}</p>


    <p>- ${new Date(data.list[19].dt_txt).toLocaleDateString('en-US', {
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
    <h3>The Trinity</h3>
    <p>The trinity respresents God, our Heavenly Father, His Son Jesus Christ, and the Holy Ghost. They are known as the trinity because they are 3 different characters, but have 1 same objective, which is to bring upon the man inmortailty and Eternal Life.</p>
    <p>The three of them work together to bring peace to the world and to enlighten us, God's children.</p>
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
    <h3>Adore saints?</h3>
    <p>No, as members of the Church of Jesus Christ we do not adore any saint, statue or other "God".</p>
    <p>We adore our loving Heavenly Father, pray to him and we believe He is the only true living God there is</p>
    <p>We adore our Heavenly Father by praying to him, singing Hymns, studying His word in the Bible and The Book Of Mormon and many other ways</p>
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
    <h3>God has a body?</h3>
    <p>Yes, we believe that God has a body of flesh and bones just like us</p>
    <p>In D&C 130:22 it says, "The father has body of flesh and bones as tangible as man’s; the Son also;"</p>
    <p>The Holy Ghost however, does not have a body because it is the Spirit of God.</p>
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
    <h3>Yes we are!</h3>
    <p>We believe in God, the Eternal Father, His Son Jesus Christ and the Holy Ghost.</p>
    <p>In fact our name says it all: The Church of Jesus Christ. We are christians becase we believe in Jesus Christ.</p>
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


