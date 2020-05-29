const API_KEY = '92869e82b4f80b460fb209f1c169aa76';
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temparature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temparature}°C at ${place}`;
    });
}

//you can get data without refreshing browser. Power of JS! 
//fetch data from the url! you can check the request in Network panel of the browser
//then calls function when dataload is completed
//json is data format to transfer key-value pairs objects. 
//the data we fetched from openWeatherMap is in json format.

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
//position이라는 object 안에 coords.latitude가 들어있떵 그걸 갖구와서 새로운 오브젝트를 만드삼.

function handleGeoError(){
    console.log("Cant Access Geolocation");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

//navigator contains information about the browser.

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else {
       const parsedCoords = JSON.parse(loadedCoords);
       getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init () {
    loadCoords();
}

init();