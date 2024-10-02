let map;
let marker;

function getIssPosition() {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(function (response) {
            return response.json()
        }).then(data => {
        console.log(data)
        let p = document.getElementById('issPosition')

        p.innerText = `Latitude = ${data.iss_position.latitude}, Longitude = ${data.iss_position.longitude}`

        marker.setLatLng([data.iss_position.latitude, data.iss_position.longitude])
        map.setView([data.iss_position.latitude, data.iss_position.longitude])

    })
}

function init(){

    map = L.map('map').setView([51.505, -0.09], 4);
    marker = L.marker([51.505, -0.09]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    setInterval(getIssPosition, 1000)
}

window.onload = init

