const loginForm = document.querySelector(".login-form");
const logoutForm = document.querySelector(".logout-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const logoutInput = logoutForm.querySelector("input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSLIST = "hidden";
const USERNAME_KEY = "userName";
const SUBMIT_EVENT = "submit";

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSLIST);
} else {
    // show the greetings
    logoutForm.classList.remove(HIDDEN_CLASSLIST);
    greeting.innerText = `Hello! ${savedUserName}`;
}

// 로그인 버튼 이벤트
function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    
    loginForm.classList.add(HIDDEN_CLASSLIST);
    logoutForm.classList.remove(HIDDEN_CLASSLIST);
    greeting.innerText = `Hello! ${userName}`;
}

// 로그아웃 버튼 이벤트
function onLogoutSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);

    loginForm.classList.remove(HIDDEN_CLASSLIST);
    logoutForm.classList.add(HIDDEN_CLASSLIST);
}
// 수정, 삭제(로그아웃) 두개 다 구현해보기

// 이벤트 리스너 등록
loginForm.addEventListener(SUBMIT_EVENT, onLoginSubmit);
logoutForm.addEventListener(SUBMIT_EVENT, onLogoutSubmit);



// 값을 기억하는 것은 성공했으니 이제 저장하는 법을 배우자!
// localStorage라고 브라우저에서 기억을 할 수 있게 만들어 놓은 API
// 브라우저가 가진 미니 DB라고 생각하면된다.
// F12 -> Application -> localStorage 에서 확인 가능
// getItem, setItem, removeItem 등 사용