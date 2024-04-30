// async & await
// clear style of using promise :)

// 1. async : async라는 코드를 함수 앞에 쓰면 코드 블럭이 자동으로 프로미스로 바뀐다.
async function fetchUser() {
    // do network request in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user); 

// 2. await 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log); // 🍎 + 🍌

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); // 🍌 바나나가 더 빨라서 출력된다.

