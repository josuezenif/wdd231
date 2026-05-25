// ------------------------- SETTING VARIABLES ----------------------------------------
const weatherIcon = document.querySelector('#weather-icon');
const temp = document.querySelector('#temperature');
const feelsLike = document.querySelector('#feels-like');
const caption = document.querySelector('#weather-caption');
const sunsrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=46.43978658897255&lon=-71.02251862719929&appid=337050a94b3c029e7048916d63f8733f&units=metric";

// -------------------------- FETCHING API LINK AND DISPLAYING RESULTS ------------------------
async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeatherResults(data);
        }

        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayWeatherResults(data) {
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
    weatherIcon.setAttribute('width', '50');
    weatherIcon.setAttribute('height', 'auto');

    temp.innerHTML = `${data.main.temp}&deg;C`;
    feelsLike.textContent = `${data.main.feels_like}`;
    caption.textContent = `${data.weather[0].description}`;

    // ------------------- SETTING UP VARIABLE FOR TIME -------------------
    const timeNumber = data.sys.sunrise;
    const setNumber = data.sys.sunset;
    const riseTime = new Date(timeNumber * 1000);
    const setTime = new Date(setNumber * 1000);

    //  --------------- CONVERTING NUMBER TO TIME ------------------
    const sunriseTime = riseTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    const sunsetTime = setTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    // ----------------------- DISPLAYING TIME -------------------
    sunsrise.innerHTML = `${sunriseTime}`;
    sunset.innerHTML = `${sunsetTime}`;
}

apiFetch();


// --------------------------- WEATHER FORECAST FOR 3 DAYS ------------------
const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');
const firstDay = document.querySelector('#first');
const secondDay = document.querySelector('#second');
const thirdDay = document.querySelector('#third');
const key = "337050a94b3c029e7048916d63f8733f"


const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=46.44&lon=-71.02&cnt=20&appid=337050a94b3c029e7048916d63f8733f&units=metric`;

// APPID KEY
// 337050a94b3c029e7048916d63f8733f

async function apiFetch2() {
    try {
        const respuesta = await fetch(forecastUrl);
        if (respuesta.ok) {
            const info = await respuesta.json();
            displayForecastResults(info);
        }

        else {
            throw Error(await respuesta.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayForecastResults(info) {
    // DAY 1 AFTER
    const number = info.list[3].dt_txt;
    const date = new Date(number);
    const firstDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
    });

    // DAY 2 AFTER 
    const number2 = info.list[11].dt_txt;
    const date2 = new Date(number2);
    const secondDate = date2.toLocaleDateString('en-US', {
        weekday: 'long',
    });

    // DAY 3 AFTER
    const number3 = info.list[19].dt_txt;
    const date3 = new Date(number3);
    const thirdDate = date3.toLocaleDateString('en-US', {
        weekday: 'long',
    });


    firstDay.textContent = firstDate + `: `;
    day1.innerHTML = `${info.list[3].main.temp}&deg;C`;

    secondDay.textContent = secondDate + `: `;
    day2.innerHTML = `${info.list[11].main.temp}&deg;C`;

    thirdDay.textContent = thirdDate + `: `;
    day3.innerHTML = `${info.list[19].main.temp}&deg;C`;
}

apiFetch2();

// ------------- FETCHING AND GETTING COMPANIES --------------
const membersUrl = "https://josuezenif.github.io/wdd231/chamber/data/members.json";
const spotlight = document.querySelector('#spotlight');

async function getCompanyInfo() {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();            // data.companies is the array

        // SELECT 3 RANDOM COMPANIES
        const filtered = data.companies.filter((company) => company.membershipLevel == 2 || company.membershipLevel == 3);
        const shuffled = filtered.sort(() => Math.random() - 0.5);
        const randomCompanies = shuffled.slice(0, 3);

        return randomCompanies; //array
    }

    catch (error) {
        console.log('Error:', error);
    }
}

async function displayCompanyInfo() {
    const companies = await getCompanyInfo();

    companies.forEach(company => {
        const div = document.createElement('div');
        const name = document.createElement('h2');
        const img = document.createElement('img');
        const phone = document.createElement('p')
        const address = document.createElement('p');
        const website = document.createElement('a');
        const membership = document.createElement('p');

        name.textContent = `${company.name}`;
        img.setAttribute('src', `${company.imageFile}`);
        img.setAttribute('alt', 'Company logo image');
        img.setAttribute("loading", "lazy");
        img.setAttribute("fetchpriority", "high");
        img.setAttribute('width', '200');
        img.setAttribute('height', 'auto');

        phone.textContent = `${company.phoneNumber}`;
        address.textContent = `${company.address}`;
        website.setAttribute('href', `${company.websiteURL}`);
        website.textContent = `More details!`;

        if (company.membershipLevel == 2) {
            membership.textContent = `Membership Level: Silver`;
        }

        else if (company.membershipLevel == 3) {
            membership.textContent = `Membership Level: Gold`;
        }

        div.appendChild(name);
        div.appendChild(img);
        div.appendChild(phone);
        div.appendChild(address);
        div.appendChild(website);
        div.appendChild(membership);

        spotlight.appendChild(div);
    });
}
displayCompanyInfo();
