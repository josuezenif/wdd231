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
    <p>Correo: ${userInfo.get('email')}</p>
    <p>Numero de Telefono: ${userInfo.get('telephone')}</p>
    <p>Razón: ${userInfo.get('reason')}</p>
    <p>Fecha: ${time}</p>
    <p>Tu formulario ha sido enviada!</p>
    <p>El Presidente se pondra de contacto con usted de 2-3 días!</p>
`;