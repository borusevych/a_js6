let button = document.getElementById('button');
button.addEventListener('click', findIpAddress);


async function findIpAddress() {
    let ipResponse = await fetch('https://api.ipify.org/?format=json');
    let ipData = await ipResponse.json();
    let ipAddress = ipData.ip;

    let addressResponse = await fetch(`http://ip-api.com/json/${ipAddress}`);
    let addressData = await addressResponse.json();

    const ipInfoElement = document.getElementById('ipInfo');
    ipInfoElement.innerHTML = `
        <p>IP адреса: ${ipAddress}</p>
        <p>Країна: ${addressData.country}</p>
        <p>Регіон: ${addressData.regionName}</p>
        <p>Місто: ${addressData.city}</p>
    `;
}