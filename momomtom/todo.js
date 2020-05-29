const toDoForm = document.querySelector(".js-todoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todolist");

const TODOS_LS = "toDos"
let toDos = [];

function deleteTodo (event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);  
    });
    toDos = cleanToDos;
    saveToDos();
}

//console.dir shows list of properties that object has.
//parentNode > parentElement　거의 비슷하긴한데 parentNode 써랑.
//filter runs the function in array and creates a new array with true values.
//event.target 은 event가 일어난 곳을 타겟!


function saveToDos () {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo (text) {
    const li = document.createElement("li"); //tag element
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length + 1;
    delBtn.innerText = "X"; //검색결과 innerText 는 문자열 그대로를 리턴하는 반면, innerHTML 은 태그를 적용시켜, 즉 문자열을 html로 인식하여 리턴한다
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span); //span inside li (parent element)
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newID
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit() {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //input창 비우기
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
        
    }
}

//What is toDo.text? How can this be called????
//You can only save data as string in localstorage
//Use JSON to stringify or parse it
//forEach() 메서드는 주어진 함수를 array 요소 각각에 대해 실행합니다.


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();

