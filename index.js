const lat = document.getElementById('latitude');
const lon = document.getElementById('longitude');
const loc = document.getElementById('location');


const toggle = document.querySelector('.toggle');
const widgets = document.querySelector('.widgets-container');
let state = 1;




// latitudes and longitudes
const latText = document.getElementById('latex');
const lotText = document.getElementById('lotex');

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      latText.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    let latitudeValue = position.coords.latitude; 
    let longitudeValue = position.coords.longitude; 
    latText.innerHTML = position.coords.latitude;
    lotText.innerHTML = position.coords.longitude;

    const mapRenderer = document.querySelector('.map');

    var map = L.map(mapRenderer);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var target = L.latLng(latitudeValue, longitudeValue);

    map.setView(target, 14);

    L.marker(target).addTo(map);

}
getLocation();



// Map Render 



// animations and toggle



function animHandler() {
    const screenWidth = window.screen.width;
    let moveDistance = 505;
    if (screenWidth <768) {
        moveDistance = 200;
    } else {
        moveDistance = 505;
    }

    if (state === 1) {
        toggle.style.rotate = '0deg';
        widgets.style.marginLeft = '20px';
        lat.style.opacity = '100%';
        lon.style.opacity = '100%';
        loc.style.opacity = '100%';
    } else if (state === 2) {
        toggle.style.rotate = '180deg';
        widgets.style.marginLeft = '-' + moveDistance + 'px';
        lat.style.opacity = '0%';
        lon.style.opacity = '0%';
        loc.style.opacity = '0%';
    }
}

function toggler() {
    if (state === 1) {
        state++;
    } else if (state === 2) {
        state--;
    }

    animHandler();
    getLocation();
}

function handlePermission() {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        report(result.state);
      } else if (result.state === "prompt") {
        report(result.state);
      } else if (result.state === "denied") {
        report(result.state);
      }
      result.addEventListener("change", () => {
        report(result.state);
      });
    });
  }
  
  function report(state) {
    console.log(`Permission ${state}`);
  }
  
  handlePermission();


