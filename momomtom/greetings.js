const form = document.querySelector(".js-form"), //Selector는 첫번째것만 가져와
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

//Using querySelector('input') on the form element will return the first input element in that particular form, 
//where using it on the document would return the first input element of the entire page.
//small JS information goes into localStorage and be saved
//USER_NAME = "currentUser" 
//currentUser = localStorage.getItem(USER_NAME);

const USER_NAME = "userName",
    SHOWING_ON = "showing";



function saveName(text){
    localStorage.setItem(USER_NAME, text); //key and value
}

function handleSubmit(event){
    event.preventDefault(); //when form is submitted, it is going outside of the document, 
    //so the page gets refreshed. prevent this.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
};

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_NAME);
    if(currentUser === null){
       askForName();
    } else {
        paintGreeting(currentUser);
    }
};

function init() {
    loadName();
}

init();

