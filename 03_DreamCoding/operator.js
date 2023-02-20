// 1. String concatenation
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals: 1+2=${1+2}`);

// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // divide
console.log(1*1); // multiply
console.log(5%2); // remainder
console.log(2**3); // exponentation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter+1;
// preINcrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10<6);
console.log(10 <=6); // less than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) 순서대로 TRUE 값을 찾고 앞의 값이 하나라도 TRUE 라면 뒤에 것들을 보지 않고 루프를 빠져 나온다. 그러므로 시간이 오래걸리는 것들을 or 문에서는 뒤로 배치해야 한다. 
console.log(`or: ${value1 || value2 || check()}`);

function check(){
    for (let i=0; i<10; i++) {
        //wasting time
        console.log('😱');

        return true;
    }
}

// and 도 헤비한 오퍼레이션일수록 뒤로 배치

// 7. Equality
const stringFive ='5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, with type conversion 타입을 신경 씀 -> 왠만하면 이걸 사용하는 것이 좋다. 
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // tru씀

// object equality by reference
const jin1 = { name: 'jin'};
const jin2 = { name: 'jin'};
const jin3 = jin1;
console.log(jin1 == jin2); // false -> jin1 과 jin2 에는 각각 다른 reference 가 저장되어 있기 떄문에. 
console.log(jin1 === jin2); // false
console.log(jin1 === jin3); // true

// equality - puzzler
console.log(0 == false); // true    
console.log(0 === false); // false (0은 불리언 타입이 아니기 때문에)
console.log('' == false) // true 아무것도 없는 문자열은 false 가 맞다.
console.log(''=== false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operator: if
// if, else if, else
const name = 'ellie';
if (name ==='ellie') {
    console.log('Welcome, Ellie!'); 
} else if (name ==='coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value 1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
// 간단한 상황에서만 사용

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love u!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, 
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, 
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for( let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for : ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only numbers(use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i >8) {
        break;
    }
    console.log(`q2. ${i}`);
}
