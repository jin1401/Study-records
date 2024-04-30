// Objects
// one of the JavaScript's data types.
// a collection of related data and.or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

Object.assign() 

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4 };
print(ellie);

// 2. Computed properties
// key should be always string
console.log(ellie.name); // ellie
console.log(ellie['name']); // ellie

function printValue(obj, key) { 
    console.log(obj[key]);
}
printValue(ellie, 'name'); // ellie

// computed property는 Runtime에서 결정 될 때 사용. 실시간으로 원하는 key 의 값을 받아오고 싶다면. 

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);

function makePerson(name, age) {
    return {
        name, // JS 에서는 key 와 value의 이름이 동일하다면 생략이 가능하다.
        age,            
    };
}

// 4. Constructor function 
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this; 요것들이 생략됨 
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
// in 이라는 키를 활용해 key가 오브젝트에 들어있는 지 확인이 가능.

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array ) {
    console.log(value);
}

// Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: 'ellie', age: '20'};
const user2 = user;

// const user4 = {}; // 방법 1. 
// Object.assign(user4, user);
// console.log(user4); // 복사된 ellie 가 나옴

const user4 = Object.assign({}, user); // 방법 2. 이런식으로 사용해도 된다. 

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue (뒤에 나오는 아이일 수록 값을 덦어 씌운다)
console.log(mixed.size); // big 


