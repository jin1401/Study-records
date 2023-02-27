'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[fruits.length - 1]); // 배열의 마지막 값 출력

// 3. Looping over an array
// print all fruits
// a. for (옛날방식)
for (let i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
} 

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits); // apple, banana, strawberry peach

// pop: remove an item from the end
fruits.pop(); // 가장 뒤의 것을 빼준다.
console.log(fruits);

// unshift : add an item to the beggining
fruits.unshift('strawberry', 'limon'); // 앞에서 부터 들어감
// remove an item from the beginning
fruits.shift(); // 젤 앞에 것이 제거됨

// note!! shift, unshift are slower than pop, push
// 뒤에서 부터 넣으면 하나만 만들면 되는데, 앞에서 하면 싹 다 뒤로 밀고 재배치해야해서 오래 걸린다. 가능하면 pop 과 push를 사용!! 
// splice : remove an item by index position
fruits.push('strawberry', 'peach', 'limon');
fruits.splice(1); // array에서 1부터 배열 끝까지 다 지운다.
fruits.splice(1, 1); // 딱 1번 자리만 지워진다. 
fruits.splice(1,1,'apple','melon'); // 지워진 자리에 추가도 가능

// combine two arrays
const fruits2 = ['peach'];
const newFruits = fruits.concat(fruits2); // 기존에 있던 배열과 새 배열이 합쳐짐. 새 배열이 가장 뒤로 간다.

// 5. Searching
// indexOf : find the index
console.log(fruits.indexOf('apple')); // 배열의 위치를 알려줌
console.log(fruits.indexOf('some fake fruit')) // 값이 없다면 -1 을 리턴함
// includees 
console.log(fruits.includes('melon')); // boolean 값으로 알려줌

// lastIndexOf
fruits.push('apple');
console.log(fruits.indexOf('apple')); // 제일 첫 사과를 출력한다
console.log(fruits.lastIndexOf('apple')); // 제일 마지막 사과를 출력한다

