'use strict';

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const CRAB_SIZE = 80;
const CLAM_COUNT = 10;
const CRAB_COUNT = 10;
const GAME_DURATION_SEC = 60;

const gameBtn = document.querySelector('.game__btn');
const gameScore = document.querySelector('.game__score');

const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');


let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener('click', () => {
    if(started) {
        stopGame();
    } else {
        startGame();
    }
    started = !started;
});

function stopGame() {
    stopGameTimer();
    hideGameButton();
    showPopUpWithText('Replay?');
}

function stopGameTimer() {
    clearInterval(timer);
}

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}

function showPopUpWithText(text) {
    popUpText.innerText = text;
    popUp.classList.remove('pop-up--hide');
}

function startGame() {
    init();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

function init () {
    field.innerHTML = '';
    gameScore.innerText = CLAM_COUNT;
    addItem('crab', CRAB_COUNT, 'imgs/crab.png');
    addItem('clam', CLAM_COUNT, 'imgs/clam.png');
}

function showStopButton() {
    const icon = gameBtn.querySelector('.fa-circle-play');
    icon.classList.add('fa-circle-stop');
    icon.classList.remove('fa-circle-play');
}

function showTimerAndScore () {
    gameTimer.style.visibility = 'visible'
    gameScore.style.visibility = 'visible'
}

const gameTimer = document.querySelector('.game__timer');
function startGameTimer () {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0) {
            clearInterval(timer);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function addItem(className, count, srcPath) {
    const x1 =0;
    const x2 = fieldRect.width-CRAB_SIZE;
    const y1 = 0;
    const y2 = fieldRect.height-CRAB_SIZE;

    for (let i=0; i<count ; i++) {
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', srcPath);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        item.style.position = 'absolute';
        field.appendChild(item);
    }
}

function randomNumber(num1, num2) {
    return Math.random()*(num2-num1)+num1;
}







