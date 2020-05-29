/* 
이전 예처럼 직접 색깔을 손대는게 아니라 html 태그에 부여된
클래스만 바꿔 색깔을 바꾸쟝
클래스가 없으면 추가하고 있으면 지우는 게 toggle
*/


const title = document.querySelector('#title');
const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
    /*
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);  
  } else {
      title.classList.add(CLICKED_CLASS);
  }
  */
}

function init() {
    title.addEventListener("click",handleClick);
}
init();


function handleOffline() {
    console.log("lalala");
}

window.addEventListener("offline", handleOffline);


