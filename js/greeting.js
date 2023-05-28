const greetingScreen = document.getElementById("greeting-screen");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginPlaceholder = loginForm.querySelector("span");
const greeting = document.getElementById("greeting");
const title = document.querySelector(".todo-app #name");
const card_title = document.querySelector(".front h2");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.style.display = "none";

    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `${username}님 환영합니다`;
    card_title.innerText = `${username}님의 카드`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    title.innerHTML = username;

    setTimeout(() => {
        greetingScreen.animate({ opacity: 0, visibility: "hidden" }, { duration: 500, fill: "forwards" });
    }, 2500);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}
