'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 등이 제일 위로 올라가는 것.

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3'); 
/// 1 3 2 순서로 출력이 된다.

// Synchronous callback
function printInmediately(print) {
    print();
}
printInmediately(()=> console.log('hello')); 
// 1 3 hello 2 순서로 출력

// Asynchronous call back
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);
// 1 3 hello 2 async callback 순서로 출력

// Callback Hello example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,  
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error)}
);

// 콜백 체인의 문제점
// 1. 가독성이 떨어짐
// 2. 디버깅을 하는 경우에도 어려움
