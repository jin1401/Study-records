// 그 다음 불편함을 찾아보자 

const example = algo; 

// 단어 하나 드래그 하기
// 1. w, e의 정확한 범위 인지하기
// 2. v를 활용해 드래그하기
// 3. 특정 단어 드래그 복사하기

const images = ["o.jpeg","1.jpeg","2.jpeg"];

consst images = ["o.jpeg","1.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);


//좀 더 긴 코드
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <form id="login-form" class="hidden">
        <input required
        maxlength="15"
        type="text" 
        placeholder="What is your name?">
    </form>
    <h1 id="greeting" class="hidden"> </h1>
    <h2 id="clock"></h2>  
    <div id="quote">
        <span></span>
        <span>

        </span>
    </div>
    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/background.js"></script>
</body>
</html>