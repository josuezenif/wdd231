const results = document.querySelector('#results');
const userInfo = new URLSearchParams(window.location.search);
console.log(userInfo);

const time = new Date().toLocaleString('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});

results.innerHTML = `
    <h2>${userInfo.get('first')} ${userInfo.get('last')}</h2>
    <p>Email: ${userInfo.get('email')}</p>
    <p>Phone number: ${userInfo.get('telephone')}</p>
    <p>Reason: ${userInfo.get('reason')}</p>
    <p>Date: ${time}</p>
    <p>Your form has been sent!</p>
    <p>The president will get in contact with you in 2-3 days!</p>
`;