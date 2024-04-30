'use strict';
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     thorw Error('age can not be negative')
        // }
        this._age = value < 0 ? 0 : value; 
    }
}

const user1 = new User('Steve', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! 
// 정말 최근에 추가된 기능..
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined
 
// 4. Static properties and methods
// Too soon! 
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // undefined
Article.printPublisher();

// 오브젝트에 상관 없이 공통적으로 클래스에서 쓸 수 있는 거라면 스태틱과 스태틱 메쏘드를 이용해서 작성하는 것이 메모리의 사용을 줄여줄 수 있다. 

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모의 함수도 호출하수 싶을 떄 사용
        console.log('🔺'); // 새로 정의한 함수
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
    // 이렇게 필요한 함수들만 재정의해서 사용 가능(overridi용g)
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(triangle.getArea()); 

// 6. Class checking: instanceOf
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스를 이용해서 만들어 진 것인지 확인하는 것
console.log(rectangle instanceof Rectangle); // true 
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true

// 자바스크립트 레퍼런스 페이지
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
