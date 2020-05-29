const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

}

//The Image() constructor creates a new HTMLImageElement instance. 
//It is functionally equivalent to document.createElement('img').
//appendChild -> 마지막 자식으로 포함
//prepend -> 첫 자식으로 포함

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number; 
}

//Math.random()*5 = 5사이의 소숫점 포함하는 숫자든 어떤 숫자든 랜덤으로
//Math.ceil 올림
//Math.floor 버림

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();