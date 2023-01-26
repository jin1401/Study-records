const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.className.add(HIDDEN_CLASSNAME);
    console.log(username);    
    greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// hidden 이라는 클래스를 등록해주고 classList.add 또는 classList.remove 속성을 통해 조절해준다.
// string 을 입력할 떄 `를 활용해서 입력하는 새로운 방식을 배웠다. ' 과 ` 는 다르니 주의한다.