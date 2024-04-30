'use strict';
console.log('Hello world');


// 2. Variable
// let (added in ES6)

// Block Scope :: 이렇게 괄호를 이용해서 코드를 괄호안에 작성하게 되면, 블록 밖에서는 접근이 불가능해진다. 
{
    let name = 'jin'
    console.log(name);
}

//global scope :: 어플리케이션이 실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋다. 
let globalName = 'global name';

// var hoisting : 어디에 선언했냐에 상관 없이 항상 제일 위로 선언을 끌여올려주는 것 

age = 4;
var age;

//var 에는 block scope 이 존재하지 않는다. 여러모로 쓰면 안되는 녀석

// 3. Constants
// favor imnutable data type for a few reasons :
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;

//4. Variable types
// primitive, single item : number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function 

//string

// boolean
// false: 0, null, undefined, NaN, ''
// true : any other value

// null
let nothing = null;

// undefined - 선언은 되었지만 할당이 되어있지 않은 상태
let x;

//symbol, create unique identifiers for objects 고유한 식별자가 필요하거나, 동시에 다발적으로 일어나는 코드에서 우선순위를 주고 싶을 때 사용, 주어지는 스트링에 상관없이 동일한 심볼도 다른 경우가 된다. 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// 5. Dynamic typing : dynamically typed language 
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
// 숫자로 변경이 되었다. 
text = '7'+5;
// 문자열에 '+'가 있으니 string 으로 타입이 변환된다. 
text = '8' / '2';
// 숫자로 인식이 된다. 

//이런식으로 type 의 혼동으로 인해서 type script 가 나왔다고 한다. 
