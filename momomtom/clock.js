
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime() {
const date = new Date(), //Object updated in milliseconds,
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    hours = date.getHours();

    /*var ampm = "AM";
    var h = hours;
    if (h >= 12) {
      h = hours - 12;
      ampm = "PM"};*/
    
   
clockTitle.innerText = 
`${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}`;}

//hours = 12 - hours ---> hours -= 12;
//ternary operator 
//condition ? value if true : value if false

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();