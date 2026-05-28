const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

// how to get info 
// code: myInfo.get('name');

//results
document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p> Proxy ${myInfo.get('ordinance')} on the ${myInfo.get('date')} in the ${myInfo.get('location')}</p>
<p>Phone number: ${myInfo.get('phone')}</p>
<p>Email Address: ${myInfo.get('email')}</p>
`;
