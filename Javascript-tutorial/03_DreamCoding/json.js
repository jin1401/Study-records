// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple','banana']);
console.log(json); // ["apple", "banana"]

const rabbit = {
    name: 'tori' ,
    color: 'white' ,
    size: null,
    birthDate: new Date(),
    symbol: Symbol("id"),
    jump: () => {
        console.log(`${name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json); // Date 라는 오브젝트가 스트링으로 변환되어지고, null 값은 그대로 null로 나오며, jump라는 함수는 JSON에 포함되어지지 않는다. 함수는 오브젝트에 있는 데이터가 아니기에 제외되고, 자바스크립트에 자체적으로 들어있는 symbol과 같은 데이터도 포함되지 않는다.


json = JSON.stringify(rabbit, ['name', 'color']); // 해당하는 프로퍼티만 JSON으로 만드는 것도 가능


json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value; // 모든 key와 value들이 콜백함수에 전달됨
});

// 2. JSON to Object
// parse(json됨
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);    
console.log(obj);

console.log(rabbit.birthDate.getDate()); // 29
console.log(obj.birthDate.getDate()); // Uncaught TypeError (birthDate는 string이기 때문)

// const obj = JSON.parse(json, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`);
//     return key === 'birthDate' ? new Date(value) : value;
// });
// console.log(obj.birthDate.getDate()); // 이제는 출력이 된다. 

// 총정리
// JSON 에는 stringify와 parse가  있다. 그리고 이 각각 콜백 함수를 전달해서 우리가 조금더 세밀하게 무언가를 통제할 수 있다. 

//유용한 사이트
// 1. JSON Diff
// 2. 