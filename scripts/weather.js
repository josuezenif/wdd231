const temperature = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=337050a94b3c029e7048916d63f8733f&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); TESTING ONLY
            displayResults(data);
        }

        else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    temperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // OR TAKE THE VALUE ---> https://openweathermap.org/img/w/04d.png
    let desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc)
    icon.setAttribute('width', 65);
    icon.setAttribute('height', 'auto');
    caption.textContent = `${desc}`;
}

apiFetch();