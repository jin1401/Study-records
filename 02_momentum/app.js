const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

// form을 submit 할 떄 입력값을 받아내는 것은 완료
// 하지만 아직 새로고침은 못 막고 있다. 이를 해결하기 위해 preventDefault 함수를 활용해준다.
// 중요한 건, event 가 발생할 떄 브라우저가 function을 호출하게 되는데, 이 함수가 하나의 argument를 받도록 하고 그걸 JS에 넘겨주고 있다.